/* eslint-disable no-console */
import axios from "axios";
import {postUploadImage} from "../../Api"

async function UploadImage(filename,data) {
  postUploadImage(data)
  // get secure url from our server
  const res = await axios
    .get("https://api.muni-leims.ml/presignedurl")
    .then(async (response) => {
      await axios(response.data, {
        method: "PUT",
        body: filename,
      });
      return 1;
    })
    .catch(() => 0);
  // eslint-disable-next-line no-console
  console.log(res);
  return res;
}
export default UploadImage;