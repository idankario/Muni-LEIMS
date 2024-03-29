emails = [
  "something@something.com",
  "something@something.com",
  "someone@localhost.localdomain",
  "someone@localhost.localdomain",
  "someone@127.0.0.1",
  "someone@127.0.0.1",
  "a@b.b",
  "a@b.b",
  "a/b@domain.com",
  "a/b@domain.com",
  "{}@domain.com",
  "{}@domain.com",
  "m*'!%@something.sa",
  "m*'!%@something.sa",
  "tu!!7n7.ad##0!!!@company.ca",
  "tu!!7n7.ad##0!!!@company.ca",
  "%@com.com",
  "%@com.com",
  "!#$%&'*+/=?^_`{|}~.-@com.com",
  "!#$%&'*+/=?^_`{|}~.-@com.com",
  ".wooly@example.com",
  ".wooly@example.com",
  "wo..oly@example.com",
  "wo..oly@example.com",
  "someone@do-ma-in.com",
  "someone@do-ma-in.com",
  "somebody@example",
  "somebody@example",
  "\u000Aa@p.com\u000A",
  "a@p.com",
  "\u000Da@p.com\u000D",
  "a@p.com",
  "a\u000A@p.com",
  "a@p.com",
  "a\u000D@p.com",
  "a@p.com",
  "",
  "",
  " ",
  "",
  " a@p.com",
  "a@p.com",
  "a@p.com ",
  "a@p.com",
  " a@p.com ",
  "a@p.com",
  "\u0020a@p.com\u0020",
  "a@p.com",
  "\u0009a@p.com\u0009",
  "a@p.com",
  "\u000Ca@p.com\u000C",
  "a@p.com",

  //Invalid single addresses when 'multiple' attribute is not set
  "invalid:email@example.com",
  "invalid:email@example.com",
  "@somewhere.com",
  "@somewhere.com",
  "example.com",
  "example.com",
  "@@example.com",
  "@@example.com",
  "a space@example.com",
  "a space@example.com",
  "something@ex..ample.com",
  "something@ex..ample.com",
  "a\b@c",
  "a\b@c",
  "someone@somewhere.com.",
  "someone@somewhere.com.",
  '""test\blah""@example.com',
  '""test\blah""@example.com',
  '"testblah"@example.com',
  '"testblah"@example.com',
  "someone@somewhere.com@",
  "someone@somewhere.com@",
  "someone@somewhere_com",
  "someone@somewhere_com",
  "someone@some:where.com",
  "someone@some:where.com",
  ".",
  ".",
  "F/s/f/a@feo+re.com",
  "F/s/f/a@feo+re.com",
  "some+long+email+address@some+host-weird-/looking.com",
  "some+long+email+address@some+host-weird-/looking.com",
  "a @p.com",
  "a @p.com",
  "a\u0020@p.com",
  "a\u0020@p.com",
  "a\u0009@p.com",
  "a\u0009@p.com",
  "a\u000B@p.com",
  "a\u000B@p.com",
  "a\u000C@p.com",
  "a\u000C@p.com",
  "a\u2003@p.com",
  "a\u2003@p.com",
  "a\u3000@p.com",
  "a\u3000@p.com",
  "ddjk-s-jk@asl-.com",
  "ddjk-s-jk@asl-.com",
  "someone@do-.com",
  "someone@do-.com",
  "somebody@-p.com",
  "somebody@-p.com",
  "somebody@-.com",
  "somebody@-.com",
  //Valid single addresses when 'multiple' attribute is set
  "something@something.com",
  "something@something.com",
  "someone@localhost.localdomain",
  "someone@localhost.localdomain",
  "someone@127.0.0.1",
  "someone@127.0.0.1",
  "a@b.b",
  "a@b.b",
  "a/b@domain.com",
  "a/b@domain.com",
  "{}@domain.com",
  "{}@domain.com",
  "m*'!%@something.sa",
  "m*'!%@something.sa",
  "tu!!7n7.ad##0!!!@company.ca",
  "tu!!7n7.ad##0!!!@company.ca",
  "%@com.com",
  "%@com.com",
  "!#$%&'*+/=?^_`{|}~.-@com.com",
  "!#$%&'*+/=?^_`{|}~.-@com.com",
  ".wooly@example.com",
  ".wooly@example.com",
  "wo..oly@example.com",
  "wo..oly@example.com",
  "someone@do-ma-in.com",
  "someone@do-ma-in.com",
  "somebody@example",
  "somebody@example",
  "\u0020a@p.com\u0020",
  "a@p.com",
  "\u0009a@p.com\u0009",
  "a@p.com",
  "\u000Aa@p.com\u000A",
  "a@p.com",
  "\u000Ca@p.com\u000C",
  "a@p.com",
  "\u000Da@p.com\u000D",
  "a@p.com",
  "a\u000A@p.com",
  "a@p.com",
  "a\u000D@p.com",
  "a@p.com",
  "",
  "",
  " ",
  "",
  " a@p.com",
  "a@p.com",
  "a@p.com ",
  "a@p.com",
  " a@p.com ",
  "a@p.com",

  //Invalid single addresses when 'multiple' attribute is set.
  "invalid:email@example.com",
  "invalid:email@example.com",
  "@somewhere.com",
  "@somewhere.com",
  "example.com",
  "example.com",
  "@@example.com",
  "@@example.com",
  "a space@example.com",
  "a space@example.com",
  "something@ex..ample.com",
  "something@ex..ample.com",
  "a\b@c",
  "a\b@c",
  "someone@somewhere.com.",
  "someone@somewhere.com.",
  '""test\blah""@example.com',
  '""test\blah""@example.com',
  '"testblah"@example.com',
  '"testblah"@example.com',
  "someone@somewhere.com@",
  "someone@somewhere.com@",
  "someone@somewhere_com",
  "someone@somewhere_com",
  "someone@some:where.com",
  "someone@some:where.com",
  ".",
  ".",
  "F/s/f/a@feo+re.com",
  "F/s/f/a@feo+re.com",
  "some+long+email+address@some+host-weird-/looking.com",
  "some+long+email+address@some+host-weird-/looking.com",
  "\u000Ba@p.com\u000B",
  "\u000Ba@p.com\u000B",
  "\u2003a@p.com\u2003",
  "\u2003a@p.com\u2003",
  "\u3000a@p.com\u3000",
  "\u3000a@p.com\u3000",
  "a @p.com",
  "a @p.com",
  "a\u0020@p.com",
  "a\u0020@p.com",
  "a\u0009@p.com",
  "a\u0009@p.com",
  "a\u000B@p.com",
  "a\u000B@p.com",
  "a\u000C@p.com",
  "a\u000C@p.com",
  "a\u2003@p.com",
  "a\u2003@p.com",
  "a\u3000@p.com",
  "a\u3000@p.com",
  "ddjk-s-jk@asl-.com",
  "ddjk-s-jk@asl-.com",
  "someone@do-.com",
  "someone@do-.com",
  "somebody@-p.com",
  "somebody@-p.com",
  "somebody@-.com",
  "somebody@-.com",

  //Valid multiple addresses when 'multiple' attribute is set.
  "someone@somewhere.com,john@doe.com,a@b.c,a/b@c.c,ualla@ualla.127",
  "someone@somewhere.com,john@doe.com,a@b.c,a/b@c.c,ualla@ualla.127",
  "tu!!7n7.ad##0!!!@company.ca,F/s/f/a@feo-re.com,m*'@a.b",
  "tu!!7n7.ad##0!!!@company.ca,F/s/f/a@feo-re.com,m*'@a.b",
  " a@p.com,b@p.com",
  "a@p.com,b@p.com",
  "a@p.com ,b@p.com",
  "a@p.com,b@p.com",
  "a@p.com, b@p.com",
  "a@p.com,b@p.com",
  "a@p.com,b@p.com ",
  "a@p.com,b@p.com",
  "   a@p.com   ,   b@p.com   ",
  "a@p.com,b@p.com",
  "\u0020a@p.com\u0020,\u0020b@p.com\u0020",
  "a@p.com,b@p.com",
  "\u0009a@p.com\u0009,\u0009b@p.com\u0009",
  "a@p.com,b@p.com",
  "\u000Aa@p.com\u000A,\u000Ab@p.com\u000A",
  "a@p.com,b@p.com",
  "\u000Ca@p.com\u000C,\u000Cb@p.com\u000C",
  "a@p.com,b@p.com",
  "\u000Da@p.com\u000D,\u000Db@p.com\u000D",
  "a@p.com,b@p.com",

  //Invalid multiple addresses when 'multiple' attribute is set
  "someone@somewhere.com,john@doe..com,a@b,a/b@c,ualla@ualla.127",
  "someone@somewhere.com,john@doe..com,a@b,a/b@c,ualla@ualla.127",
  "some+long+email+address@some+host:weird-/looking.com,F/s/f/a@feo+re.com,,m*'@'!%",
  "some+long+email+address@some+host:weird-/looking.com,F/s/f/a@feo+re.com,,m*'@'!%",
  "   a @p.com   ,   b@p.com   ",
  "a @p.com,b@p.com",
  "   a@p.com   ,   b @p.com   ",
  "a@p.com,b @p.com",
  "\u000Ba@p.com\u000B,\u000Bb@p.com\u000B",
  "\u000Ba@p.com\u000B,\u000Bb@p.com\u000B",
  "\u2003a@p.com\u2003,\u2003b@p.com\u2003",
  "\u2003a@p.com\u2003,\u2003b@p.com\u2003",
  "\u3000a@p.com\u3000,\u3000b@p.com\u3000",
  "\u3000a@p.com\u3000,\u3000b@p.com\u3000",
  ",,",
  ",,",
  " ,,",
  ",,",
  ", ,",
  ",,",
  ",, ",
  ",,",
  "  ,  ,  ",
  ",,",
  "\u0020,\u0020,\u0020",
  ",,",
  "\u0009,\u0009,\u0009",
  ",,",
  "\u000A,\u000A,\u000A",
  ",,",
  "\u000B,\u000B,\u000B",
  "\u000B,\u000B,\u000B",
  "\u000C,\u000C,\u000C",
  ",,",
  "\u000D,\u000D,\u000D",
  ",,",
  "\u2003,\u2003,\u2003",
  "\u2003,\u2003,\u2003",
  "\u3000,\u3000,\u3000",
  "\u3000,\u3000,\u3000",
];

emails.forEach(isEmail);
function isEmail(email) {
  return console.log(
    email +
      ":" +
      /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/.test(
        email
      )
  );
}
