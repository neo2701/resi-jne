import axios from "axios";
import cheerio from "cheerio";

export async function cekResi(noresi) {
  return await axios({
    method: "get",
    url: "https://cekresi.jne.co.id/" + noresi,
    maxRedirects: 0,
    headers: {
      Referer: "https://www.jne.co.id/",
    },
  })
    .then(async (res) => {
      // console.log(res.data)
      const $ = cheerio.load(res.data);
      // console.log($.html());
      let valid =
        $(".panel-title").text().trim() == "Airwaybill is not found"
          ? false
          : true;
      let awb = $(".x_title").first().text().trim();

      if (!valid) return { status: 404, message: "Airwaybill is not found" };
      let data = {};
      data.awb = awb;
      data.service = $(".tile_stats_count").find("h2").eq(0).text();
      data.origin = $(".tile_stats_count").find("h4").eq(0).text();
      data.destination = $(".tile_stats_count").find("h4").eq(1).text();
      data.estimation = $(".tile_stats_count").find("h3").eq(0).text();
      data.shipper = {
        name: $(".tile").find("h4").eq(4).text(),
        city: $(".tile").find("h4").eq(5).text(),
      };
      data.receiver = {
        name: $(".tile").find("h4").eq(6).text(),
        city: $(".tile").find("h4").eq(7).text(),
      };
      data.shipment = {
        date: $(".tile").find("h4").eq(0).text(),
        koli: $(".tile").find("h4").eq(1).text(),
        weight: $(".tile").find("h4").eq(2).text(),
        good_desc: $(".tile").find("h4").eq(3).text(),
      };
      data.history = [];
      $(".timeline")
        .find("li")
        .each((i, el) => {
          let status = $(el).find("h2").text().trim();
          let date = $(el).find("span").text().trim();
          data.history.push({ status, date });
        });
      data.currentStatus = data.history[data.history.length - 1];
      // console.log(data);
      return {
        status: 200,
        data: data,
      };
    })
    .catch(async (err) => {
      if (err.response.status == 302) {
        throw new Error("Redirected to: " + err.response.headers.location);
      }
    });
}
