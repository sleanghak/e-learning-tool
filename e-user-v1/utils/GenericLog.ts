import { $inspect, $logterm } from "foundation-ts/utils";
import { NextApiResponse } from "next";

export interface GenericLoggerInterface {
  log(l: any): void;
  logError(l: any): void;
  apiError(res: any, errorMessage: any, errorDebug: any): void;
}
class GenericLog implements GenericLoggerInterface {
  constructor() {}
  public log(log: any) {
    $logterm(
      `&o++++++++++ api log ++++++++++&y\n${$inspect(log)}&o\n++++++++++`
    );
  }
  public logError(e: any) {
    this.log("------------ PLEASE CONTACT ADMINSTRACTOR ------------");
    this.log(
      `!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\nServer did encounter error '${e?.name!}' : '${e?.message!}'\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`
    );
  }

  public apiError(
    res: NextApiResponse,
    errorMessage: unknown,
    errorDebug: any
  ) {
    return res.send({
      error: errorMessage,
    });
  }
}

export default GenericLog;
