import { NextApiResponse } from "next";
import GenericLog from "./GenericLog";
import { $inspect, $logterm } from "foundation-ts/utils";
import CloudinaryService from "./CloudinaryService";
class ReanCodeApi extends GenericLog {
  private static instance: ReanCodeApi;
  constructor() {
    super();
    new CloudinaryService({
      cloudName: "djzyrebux",
      apiKey: "882921448473866",
      apiSecret: "PWbgMCWp8dgBd-9XWDXhV7y-650",
    });
  }

  public static reancodeApi(): ReanCodeApi {
    if (!ReanCodeApi.instance) {
      ReanCodeApi.instance = new ReanCodeApi();
    }
    return ReanCodeApi.instance;
  }

  public apiResponse(res: NextApiResponse, bodyResponse: unknown) {
    return res.send(bodyResponse);
  }
  public log(log: any) {
    $logterm(
      `&o++++++++++ api log ++++++++++&y\n${$inspect(log)}&o\n++++++++++`
    );
  }
  public logError(e: unknown) {
    this.log(
      `!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\nServer did encounter error ${e} '\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`
    );
  }
  public async requestError(reply: NextApiResponse, e: any) {
    this.logError(e);
    reply.status(e.statusCode || 500).send(e);
  }
}

export default ReanCodeApi;
