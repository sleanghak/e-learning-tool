const { upload, getUrl } = require("./../services/s3/upload");
module.exports = (app) => {
  app.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.post("/postFile", async (req, res) => {
    console.log(req.files);
    const url = await upload("upload/", req.files[0]);
    res.send({ url: `image/${url.Key}` });
  });

  app.get("/image/:key", (req, res) => {
    const readStream = getUrl("upload/14c0b3c1d412b10c0772429393ad97bc");
    readStream.pipe(res);
  });
};
