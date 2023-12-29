import { Storage } from "aws-amplify";

const convertFilePathToURLs = async (data) => {
  let urls: string[] = [];
  if (data?.length > 0) {
    for (const item of data) {
      const coverURL = await Storage.get(item);
      urls.push(coverURL);
    }
  }
  return urls;
};

export default convertFilePathToURLs;
