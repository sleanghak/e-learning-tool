import { Storage } from "aws-amplify";
async function uploadFile(path: string, file, setProgress, setMessage) {
  let res;
  if (file) {
    try {
      res = await Storage.put(`${path}/${file.name}`, file, {
        level: "public",
        contentType: file.type,
        progressCallback(progress) {
          setProgress(parseInt((progress.loaded / progress.total) * 100));
        },
      });
    } catch (e) {
      console.error(e);
    }
    return res;
  } else {
    setMessage("Please select aleast one file.");
    return;
  }
}
export default uploadFile;
