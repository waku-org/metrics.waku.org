import axios from "axios";
import * as cheerio from "cheerio";

export default class Golang {
  static async getDownloads(pack) {
    const data = (await axios.get(`https://pkg.go.dev/github.com/${pack}`))
      .data;

    if (!data) {
      console.error(`Could not fetch download count for package ${pack}`);
      return null;
    }

    const $ = cheerio.load(data);
    const downloadCountText = $(
      '.DetailsItem:contains("Go to Imports")'
    ).text();

    return Number(downloadCountText);
  }
}
