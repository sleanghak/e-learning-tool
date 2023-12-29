const db = require("../models");
const Desc = db.default;
const {
  baseUrl,
  baseUrl_client,
  baseUrl_coach,
  baseUrl_admin,
} = require("../utils/constant/baseUrl");
// const { Item } = require("postman-collection");
// const postmanCollection = require("./../postman");

exports.create = (req, res) => {
  const desc = new Desc();
  desc
    .save()
    .then(() => {
      console.log("Successful added project description!");
    })
    .catch((err) => {
      console.log("Cannot add project description!");
    });
};
exports.find = (req, res) => {
  // const postmanRequest = new Item({
  //   name: "about company",
  //   request: {
  //     header: req.header,
  //     url: baseUrl,
  //     method: "GET",
  //     body: {
  //       mode: "raw",
  //       raw: JSON.stringify(req.body),
  //     },
  //     auth: null,
  //   },
  // });
  // postmanCollection.items.add(postmanRequest);

  Desc.find()
    .then((data) =>
      res.status(200).send({
        data,
        urls: [baseUrl, baseUrl_client, baseUrl_coach, baseUrl_admin],
      })
    )
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
