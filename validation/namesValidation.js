names = [
  "Jon Doe",
  "Jonathan Taylor Thomas",
  "Julia Louis-Dreyfus",
  "Jean-Paul Sartre",
  "Pat O'Brien",
  "Eldon",
  "Marcus Wells-O'Shaugnessy",
  "Stephen Wells-O'Shaugnessy Marcus",
  "This-Is-A-Crazy-Name Jones",
  "---- --------",
  "'''' ''''''''",
  "'-'- -'-'-'-'",
  "a-'- b'-'-'-'",
  "'-'c -'-'-'-d",
  "e-'f g'-'-'-h",
  "'ij- -klmnop'",
  "054304533",
  "idan",
  "idan33",
  ".idan",
  "id.an",
];
names.forEach(validationNames);
function validationNames(name) {
  console.log(
    name +
      ": " +
      /(^(?=.{3,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z][a-zA-Z0-9._]+(?<![_.])$)/.test(
        name
      )
  );
}
