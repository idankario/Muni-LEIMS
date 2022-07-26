names = [
  "054304533",
  "Jon Doe",
  "Jonathan Taylor Thomas",
  "Julia Louis-Dreyfus",
  "Jean-Paul Sartre",
  "Pat O'Brien",
  "Þór Eldon",
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
];
names.forEach(validationNames);
function validationNames(name) {
  console.log(
    name +
      ": " +
      /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/.test(
        name
      )
  );
}
