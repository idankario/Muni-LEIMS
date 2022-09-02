import axios from "axios";

export async function VerifyToken(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const res = await axios({
      method: "get",
      url: "https://api.muni-leims.ml/auth",
      headers: { Authorization: req.headers.authorization },
    });
    if (res.status === 403)
      return res.status(403).send("A token is required for authentication");
    console.log("good");
  } catch (error) {
    console.log("err");
    return res.status(403).send("A token is required for authentication");
  }
  return next();
}
