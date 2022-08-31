export function isImage(imageName) {
  return /\.(?=jpeg|jpg|png|tiff|tif)/.test(imageName);
}
export function isMobileIsraelPhone(phoneNumber) {
  if (/[0][5][0|2|3|4|5|9]{1}[-]{0,1}[0-9]{7}/.test(phoneNumber)) return "";
  return "Please enter a valid israel Number Address";
}
export function isName(name) {
  if (
    // eslint-disable-next-line no-useless-escape
    /(^(?=.{3,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z][a-zA-Z0-9._]+(?<![_.])$)/.test(
      name
    )
  )
    return "";
  return "Please enter a valid name";
}

export function isEmail(email) {
  if (
    // eslint-disable-next-line no-useless-escape, no-control-regex
    /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/.test(
      email
    )
  ) {
    return "";
  }
  return "Please enter a valid Email Address";
}

export function checkPassword(password) {
  const passwordLength = 8;

  // check-lowerletter
  if (!/[a-z]/.test(password))
    return "Password must contain a lower case letter";

  // checkPassword-upperletter
  if (!/[A-Z]/.test(password))
    return "Password must contain an upper case letter";

  // checkPassword-symbols
  if (
    !(
      // eslint-disable-next-line no-useless-escape
      /[-+=!$%^&*()_|~`{}\[\]:\/;<>?,.@#'"]/.test(password)
    ) ||
    password.indexOf("\\") >= 0
  )
    return "Password must contain a special character";

  // checkPassword-numbers
  if (!/[0-9]/.test(password)) return "Password must contain a number";

  // checkPassword-length
  if (password.length < passwordLength)
    return "Password must contain at least 8 characters";

  return "";
}

export async function checkSignUp(data, setError) {
  // eslint-disable-next-line camelcase
  const { email, phone_number, Password, username } = data;

  const eEmail = isEmail(email);
  const ePhone = isMobileIsraelPhone(phone_number);
  const ePassword = checkPassword(Password);
  const eUsername = isName(username);
  setError({
    eUsername,
    eEmail,
    ePhone,
    ePassword,
  });

  if (eUsername.length || eEmail.length || ePhone.length || ePassword.length)
    return 0;
  return 1;
}
