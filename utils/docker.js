import axios from "axios";

export default class Docker {
  static async getPulls() {
    return (await axios.get(`/api/docker`)).data.pull_count;
  }
}
