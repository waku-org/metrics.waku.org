import axios from "axios";

export default class Npm {
  static async getDownloadsLastWeek(pack) {
    return (
      await axios.get(`https://api.npmjs.org/downloads/point/last-week/${pack}`)
    ).data.downloads;
  }
}
