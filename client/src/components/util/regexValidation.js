export function checkSignUp() {
  return 0;
}
export function isImage(imageName) {
  return /\.(?=jpeg|jpg|png|tiff)/.test(imageName);
}
export function checkPasswordHelper(password) {
  const passwordPolicy = [];
  passwordPolicy.lowercase = "Password must contain a lower case letter";
  passwordPolicy.uppercase = "Password must contain an upper case letter";
  passwordPolicy.number = "Password must contain a number";
  passwordPolicy.special = "Password must contain a special character";
  const passwordLength = 8;
  passwordPolicy.lengthCheck = "Password must contain at least 8 characters";
  let requireLowerletter = false;
  let requireUpperletter = false;
  let requireNumber = false;
  let requireSymbol = false;
  let requireLength = false;

  if (password || password === "") {
    // check-lowerletter
    if (/[a-z]/.test(password)) {
      requireLowerletter = true;
    } else {
      requireLowerletter = false;
    }
  } else {
    requireLowerletter = true;
  }
  // checkPassword-upperletter
  if (/[A-Z]/.test(password)) {
    requireUpperletter = true;
  } else {
    requireUpperletter = false;
  }
  // checkPassword-symbols
  if (
    // eslint-disable-next-line no-useless-escape
    /[-+=!$%^&*()_|~`{}\[\]:\/;<>?,.@#'"]/.test(password) ||
    password.indexOf("\\") >= 0
  ) {
    requireSymbol = true;
  } else {
    requireSymbol = false;
  }
  // checkPassword-numbers
  if (/[0-9]/.test(password)) {
    requireNumber = true;
  } else {
    requireNumber = false;
  }
  // checkPassword-length
  if (password.length < passwordLength) {
    requireLength = false;
  } else {
    requireLength = true;
  }

  return (
    requireLowerletter &&
    requireUpperletter &&
    requireNumber &&
    requireSymbol &&
    requireLength
  );
}
