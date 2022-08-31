import axios from "axios";

async function UploadImage(file, filename, data) {
  try {
    const res = await axios({
      method: "post",
      url: "https://api.muni-leims.ml/presignedurl",
      data: { data, filename },
      headers: { Authorization: localStorage.getItem("token") },
    });
    if (res.data) {
      await fetch(res.data.presigned_url, {
        method: "PUT",
        body: file,
      });
      return 1;
    }
  } catch (error) {
    return 0;
  }
}
export default UploadImage;
