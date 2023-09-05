import axios from "axios";

export default class Rust {
  static async getDownloads(crate) {
    return (await axios.get(`https://crates.io/api/v1/crates/${crate}`)).data
      .crate.downloads;
  }
}
