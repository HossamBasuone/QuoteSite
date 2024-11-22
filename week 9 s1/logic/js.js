var q1 = [
  `“You miss 100% of the shots you don't take.”`,

  `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”`,
  `“So many books, so little time.”
`,
  `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
  `
“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`,
  `“You've gotta dance like there's nobody watching,
Love like you'll never be hurt,
Sing like there's nobody listening,
And live like it's heaven on earth.”
`,
  `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”
`,
`“Be the change that you wish to see in the world.”
`,
`“In three words I can sum up everything I've learned about life: it goes on.”
`,
`“Don’t walk in front of me… I may not follow
Don’t walk behind me… I may not lead
Walk beside me… just be my friend”`
];
var q2 = [
  `― Oscar Wilde
`,
  `― Marilyn Monroe
`,
  `― Frank Zappa
`,
  `― Albert Einstein
`,
  `― Bernard M. Baruch
`,
  `― William W. Purkey
`,
  `― Dr. Seuss
`,
`― Mahatma Gandhi
`,
`― Robert Frost
`,
`― Albert Camus
`
];

function add() {
  var cartona = "";
  var cartona2 = "";
  var x = Math.floor(Math.random() * 10); // 0 1 2 3 4 5 6 7 8 9 //10 qoute !

  for (var i = 0; i < 10; i++) {
    if (x == i) {
      cartona += q1[i];
      cartona2 += q2[i];
    //   console.log(x);
    //   console.log(cartona);
    //   console.log(cartona2);
    }
  }
  document.getElementById("quote").innerHTML = cartona;
  document.getElementById("who").innerHTML = cartona2;
}
