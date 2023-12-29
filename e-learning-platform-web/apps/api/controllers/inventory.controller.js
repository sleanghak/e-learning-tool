const db = require("../models");
const Inventory = db.inventory;
const response = require("../utils/func/response");
const undefinedFunc = require("../utils/func/undefinedFunc");
exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Create Inventory cannot empty" });
    return;
  }
  const inventoryItem = new Inventory({
    name: req.body.name,
    serialCode: req.body.serialCode,
    coverFileName: req.body.coverFileName,
    createDate: new Date(Date.now()),
  });
  inventoryItem
    .save()
    .then((data) => {
      res.send({ statusCode: 200, message: "Create Inventory success!" });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "some error occured while create Inventory",
      });
    });
};

exports.find = async (req, res) => {
  const { disable } = req.query;
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;
  let pages;
  const query = { disable: undefinedFunc(disable) };
  if (req.query.name) {
    const name = req.query.name;
    Inventory.find({ name: { $regex: ".*" + name + ".*" } }).then((data) => {
      if (!data) {
        res.status(404).send({ message: `Not found` });
      } else {
        res.send(data);
      }
    });
  } else if (req.query.id) {
    const id = req.query.id;
    Inventory.findById(id).then((data) => {
      if (!data) {
        res.status(404).send({ message: `Not found` });
      } else {
        res.send(data);
      }
    });
  } else if (req.query.page) {
    const skipIndex = (page - 1) * limit;
    const total = await Inventory.countDocuments(query);
    pages = Math.ceil(total / limit);
    const data = await Inventory.find(query)
      .limit(Number(limit))
      .skip(skipIndex);
    response.pagination(res, page, pages, limit, data, total, "inventory");
  } else {
    Inventory.find()
      .then((data) => res.send(data))
      .catch((err) => {
        res.status(500).send({ message: err.message });
      });
  }
};

exports.findNotAdmin = (req, res) => {
  if (req.query.name) {
    const name = req.query.name;
    Inventory.find({
      name: { $regex: ".*" + name + ".*" },
      disable: false,
    }).then((data) => {
      if (!data) {
        res.status(404).send({ message: `Not found` });
      } else {
        res.send(data);
      }
    });
  } else if (req.query.id) {
    const id = req.query.id;
    Inventory.find({ _id: id, disable: false }).then((data) => {
      if (data.length == 0) {
        res.status(404).send({ message: `Not found` });
      } else {
        res.send(data[0]);
      }
    });
  } else if (req.query.page) {
    const page = req.query.page;
    let limit;
    if (Boolean(req.query.limit)) {
      limit = req.query.limit;
    } else {
      limit = 20;
    }

    const skipIndex = (page - 1) * 20;
    console.log(limit, skipIndex);
    Inventory.find({ disable: false })
      .limit(Number(limit))
      .skip(skipIndex)
      .exec()
      .then((response) => {
        res.status(200).send(response);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({ message: err });
      });
  } else {
    Inventory.find({ disable: false })
      .then((data) => res.send(data))
      .catch((err) => {
        res.status(500).send({ message: err.message });
      });
  }
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Data to update cannot be empty!" });
  }
  const id = req.params.id;
  Inventory.findByIdAndUpdate(id, req.body, {
    useFindAndModify: false,
    new: true,
  })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          statusCode: 404,
          message: `cannot update inventory with ${id} is not match!`,
        });
      }
      return res.send({
        statusCode: 200,
        message: `Inventory was updated successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Inventory.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({ message: `Not Found id ${id}` });
      }
      return res.status(200).send({ message: `Inventory was deleted!` });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.disable = (req, res) => {
  const id = req.params.id;
  const status = req.query.status;
  Inventory.findByIdAndUpdate(
    id,
    { disable: undefinedFunc(status) },
    { useFindAndModify: false, new: true }
  )
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          statusCode: 404,
          message: `cannot disable inventory with ${id} is not match!`,
        });
      }
      let message = undefinedFunc(status) ? "disable" : "restore";
      return res.send({
        statusCode: 200,
        message: `${data.name} was ${message} successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err });
    });
};
