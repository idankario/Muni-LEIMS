/* eslint-disable no-console */
import axios from "axios";
import { postUploadImage } from "../../Api";

// eslint-disable-next-line no-unused-vars
async function UploadImage(file, filename, data) {
  try {
    const res = await axios({
      method: "post",
      url: "https://api.muni-leims.ml/presignedurl",
      data: filename,
      // headers: { "x-access-token": localStorage.getItem("token") },
    });
    if (res.data) {
      console.log(res.data);
      await fetch(res.data.presigned_url, {
        method: "PUT",
        body: file,
      });
      postUploadImage(data, res.data.filename);
      return 1;
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    return 0;
  }
}
export default UploadImage;
