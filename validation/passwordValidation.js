passwords = [
  "qwerty",
  "abc123",
  "monkey",
  "admin",
  "system",
  "123456",
  "12345678",
  "letmein",
  "trustno1",
  "dragon",
  "1234567",
  "lifehack",
  "111111",
  "consumer",
  "12345",
  "letmein!",
  "iloveyou",
  "abc",
  "angel",
  "love",
  "soccer",
  "rockyou",
  "123456789",
  "Password123",
  "Secret1",
  "michael",
  "Daniel",
  "Nicole",
  "Simplepass",
  "654321",
  "test",
  "P4ssw0rd",
  "1234",
  "696969",
  "mustang",
  "baseball",
  "Dog.lov3r",
  "dOG.lov3r",
  "i7ovemydog!!",
  "d0gsaremybestFr13nds",
  "sn00pdoggyd0G",
  "Karm@beatsDogm@",
  "C@ts-and-Dogs3-Living-together",
  "master",
  "shadow",
  "pass",
  "6969",
  "harley",
  "ranger",
  "thomas",
  "tigger",
  "robert",
  "access",
  "george",
  "charlie",
  "andrew",
  "1111",
  "daniel",
  "william3dD.",
  "ef44c.cc634D21e1528f06cbc4183603",
  "9cbf8.b5f438d63ae698f907f4291dcb",
  "923c14,93ae16A344a2c3e2d66b311c1b",
  "6c18eC1,127d5a8951265f35c66b60f82",
  "4a62cF6e,e3f8d889e65af1cc271f20fa",
  "B2cfa4183,267af678ea06c7407d4d6d8",
  "a56Ffd9f01,fa749377cbaea011a57365",
  "2e96b290f6c,5ccd2bc6830557c0aba6e",
  "514ece4319da928bbd44bb53d923d660",
  "79f9c3cf1559493a2b36053619f33b52",
  "7d731d312813e2d699cab6bb7f0448c3",
  "5f17def7c4112344bc5b8f0a525404e4",
  "f6760ba7dd0e677969f6db8bcbad69ef",
  "d25100ff30af7ad87f5da8a509c4b6a5",
  "8d560f307b46b1662ac4ec3a4f747bb9",
  "a1a71f4b46feaf72bf33627d78bbdc3e",
  "742330d6617e449e7bb460e802d50701",
  "58209f2486ba57275e5432a093632bb6",
  "ff01642a6fe6c55b7999d8d6798c73c5",
  "b38cca5bf1a697a1c4a19e9d1b57cd13",
  "4528e6a7bb9341c36c425faf40ef32c3",
  "d8e8fca2dc0f896fd7cb4cb0031ba249",
];
function checkPassword(password) {
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
function validationPass(pass) {
  console.log(pass + ": " + checkPassword(pass));
}
passwords.forEach(validationPass);
