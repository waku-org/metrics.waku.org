import axios from "axios";
import { isLoggedIn, logout } from "./auth";

export default class Github {
  static async getOrganizationFollowers(organization) {
    return (await axios.get(`https://api.github.com/orgs/${organization}`)).data
      .followers;
  }

  static async getRepoStars(repo) {
    return (await axios.get(`https://api.github.com/repos/${repo}`)).data
      .stargazers_count;
  }

  static async getRepoForks(repo) {
    return (await axios.get(`https://api.github.com/repos/${repo}`)).data
      .forks_count;
  }

  static async getRepoStats(repo) {
    const data = (await axios.get(`https://api.github.com/repos/${repo}`)).data;

    return { stars: data.stargazers_count, forks: data.forks_count };
  }

  static async getReposStats(organization, repos) {
    let data = (
      await axios.get(`https://api.github.com/orgs/${organization}/repos`)
    ).data;

    let total_stars = 0;
    let total_forks = 0;
    let total_open_issues = 0;

    data.forEach((repo) => {
      total_stars += repo.stargazers_count;
      total_forks += repo.forks_count;
      total_open_issues += repo.open_issues_count;
    });

    data = data?.length
      ? data.filter((repo) => repos.indexOf(repo.name) !== -1)
      : [];

    let stats = {};

    data.forEach((repo) => {
      stats[repo.name] = {
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        open_issues: repo.open_issues_count,
      };
    });

    return {
      ...stats,
      total: {
        stars: total_stars,
        forks: total_forks,
        open_issues: total_open_issues,
      },
    };
  }

  static async getEvents() {
    if (!(await isLoggedIn())) {
      await logout();
    }

    const organization = process.env.NEXT_PUBLIC_GITHUB_ORGANIZATION;
    const project_id = process.env.NEXT_PUBLIC_GITHUB_EVENTS_PROJECT;

    const res = await axios.post(
      "https://api.github.com/graphql",
      {
        query: `query{organization(login:"${organization}"){name projectV2(number:${project_id}){number title items(first:100,orderBy:{direction:DESC,field:POSITION}){nodes{fieldValueByName(name:"Status"){... on ProjectV2ItemFieldSingleSelectValue{name}}content{... on Issue{title assignees(first:3){nodes{login url}}resourcePath}... on DraftIssue{title assignees(first:3){nodes{login url}}}... on PullRequest{title assignees(first:3){nodes{login url}}}}}}}}}`,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
    );

    let events = { Upcoming: [], Completed: [] };

    res.data.data.organization.projectV2.items.nodes.forEach((item) => {
      if (
        item.fieldValueByName?.name !== "Upcoming Events" &&
        item.fieldValueByName?.name !== "Completed Events"
      ) {
        return;
      }

      events[
        item.fieldValueByName.name == "Upcoming Events"
          ? "Upcoming"
          : "Completed"
      ].push({
        title: item.content.title,
        assignees: item.content.assignees.nodes,
        url: item.content.resourcePath
          ? `https://github.com/${item.content.resourcePath}`
          : false,
      });
    });

    return events;
  }

  static async getEcosystemDirectory() {
    if (!(await isLoggedIn())) {
      await logout();
    }

    const organization = process.env.NEXT_PUBLIC_GITHUB_ORGANIZATION;
    const project_id =
      process.env.NEXT_PUBLIC_GITHUB_ECOSYSTEM_DIRECTORY_PROJECT;

    const res = await axios.post(
      "https://api.github.com/graphql",
      {
        query: `query{organization(login:"${organization}"){name projectV2(number:${project_id}){number title items(first:100,orderBy:{direction:DESC,field:POSITION}){nodes{createdAt updatedAt fieldValueByName(name:"Status"){... on ProjectV2ItemFieldSingleSelectValue{name}}content{... on Issue{title assignees(first:3){nodes{login url}}resourcePath}... on DraftIssue{title assignees(first:3){nodes{login url}}}... on PullRequest{title assignees(first:3){nodes{login url}}}}}}}}}`,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
    );

    let projects = {
      "Active Users": [],
      "In Progress": [],
      Icebox: [],
      "No Status": [],
      Prioritized: [],
      Todo: [],
      Competitors: [],
    };

    const allowed_values = [
      "Active Users",
      "In Progress",
      "Icebox",
      "Epics",
      null,
      "Prioritized",
      "Todo",
      "Competitors",
    ];

    const all_projects = res.data.data.organization.projectV2.items.nodes.sort(
      (a, b) => {
        let da = new Date(a.createdAt),
          db = new Date(b.createdAt);
        return da - db;
      }
    );

    projects["latest_3"] = all_projects
      .slice(Math.max(all_projects.length - 3, 0))
      .reverse();

    all_projects.forEach((item) => {
      if (
        allowed_values.indexOf(item.fieldValueByName?.name) === -1 &&
        item.fieldValueByName != null
      ) {
        return;
      }

      projects[
        item.fieldValueByName === null
          ? "No Status"
          : item.fieldValueByName.name === "Epics"
          ? "Icebox"
          : item.fieldValueByName.name
      ].push({
        title: item.content.title,
        updatedAt: item.updatedAt,
        url: item.content.resourcePath
          ? `https://github.com/${item.content.resourcePath}`
          : false,
        assignees: item.content.assignees.nodes,
      });
    });

    return projects;
  }
}
