import axios from "axios";

export default class Discord {
  static async getServerMembers(invite) {
    return (
      await axios.get(
        `https://discord.com/api/v9/invites/${invite}?with_counts=true`
      )
    ).data.approximate_member_count;
  }
}
