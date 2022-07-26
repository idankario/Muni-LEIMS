export function isImage(imageName) {
  return /\.(?=jpeg|jpg|png|tiff)/.test(imageName);
}
export function isMobileIsraelPhone(phoneNumber) {
  return /[0][5][0|2|3|4|5|9]{1}[-]{0,1}[0-9]{7}/.test(phoneNumber);
}
export function isName(name) {
  // eslint-disable-next-line no-useless-escape
  return /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/.test(
    name
  );
}

export function isEmail(email) {
  // eslint-disable-next-line no-useless-escape, no-control-regex
  return /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/.test(
    email
  );
}

export function checkPassword(password) {
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
export function checkSignUp(data) {
  isImage(data.imageName);
  isMobileIsraelPhone(data.phoneNumber);
  checkPassword(data.password);
  isName(data.name);
  return 0;
}
