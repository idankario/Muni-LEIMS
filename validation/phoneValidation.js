telephones = [
  "054304533",
  "054528602306",
  "0508335314",
  "0543045133",
  "505322621",
  "054304533",
  "0547855216",
  "05430f4533",
  "0543045133",
  "*054304533",
  "05430453356",
  "#054304533",
];
telephones.forEach(validationPhoneNumber);
function validationPhoneNumber(telephone) {
  console.log(
    telephone + ": " + /[0][5][0|2|3|4|5|9]{1}[-]{0,1}[0-9]{7}/.test(telephone)
  );
}
