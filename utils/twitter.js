import axios from "axios";

export default class Twitter {
  static async getFollowers() {
    return (await axios.get(`/api/twitter`)).data.followers_count;
  }
}
