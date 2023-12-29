const { Collection } = require("postman-collection");

// This is the our postman collection
const postmanCollection = new Collection({
  info: {
    // Name of the collection
    name: "REANCODE101",
  },
  // Requests in this collection
  item: [],
});

module.exports = postmanCollection;
