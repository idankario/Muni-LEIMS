files = [
  "area1.tiff",
  "area2.png",
  "area3.jpeg",
  "area4.png",
  "area5.tiff",
  "area43.txt",
  "area33.exe",
  "area55.doc",
  "area322.pdf",
  "*area434.exsl",
  "*area434",
];
files.forEach(validationImage);
function validationImage(file) {
  console.log(file + ": " + /\.(?=jpeg|jpg|png|tiff)/.test(file));
}
