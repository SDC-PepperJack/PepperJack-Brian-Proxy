import http from "k6/http";
import { sleep, check } from "k6";

export let options = {
  duration: "60s", // 60
  // iterations: 10000,
  rps: 1000,
  // batch: 50,
  vus: 1000,
}

export default function() {
  // http.get(`http://localhost:5001/api/checkout`);
  var response = http.get(`http://127.0.0.1:5001/`)
  check(response, {'status was 200': (r) => r.status === 200})
  sleep(1);
}

// POST Request
// export default function() {
//   var i = Math.floor(Math.random() * 1000000) + 10000001;
//   var url = `http://localhost:1234/api/checkout/${i}/details`;
//   var payload = JSON.stringify(
//     {
//       sellerId: i,
//       sellerName: "Brian",
//       averageReviewScore: 4234,
//       numberReviews: 4234234,
//       itemName: "hotwhitefor",
//       badge: "Bestseller",
//       itemPrice: 3084324.31,
//       freeShipping: true,
//       productOptions: "[optionName: tenfouras, choice: [{ qualityassurance, 12343.234}]]",
//       personalization: true,
//       availableQuantity: 233123,
//       onOrder: 832,
//     });
//   var params = {headers: {"Content-Type": "application/json"}}
//   http.post(url, payload, params);
//   sleep(0);
// }

