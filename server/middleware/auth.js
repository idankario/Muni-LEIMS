import axios from "axios";

export async function VerifyToken(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    axios({
      method: "get",
      url: "https://api.muni-leims.ml/auth",
      headers: { Authorization: req.headers.authorization },
    });
    console.log("good");
  } catch (error) {
    console.log("error");
  }
  return next();
}
