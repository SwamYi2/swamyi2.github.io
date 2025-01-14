import "./ascii_morph/ascii-morph/asciiMorph.js";
var element = document.querySelector("pre");
AsciiMorph(element, { x: 15, y: 15 });

const arts = [
  /*[
    "                         ??(())((f$",
    "                    ((((((|((|((((((((((      [",
    "                 (((|(|(|((((((|(((|((|((((  ((1",
    "               ((((((((((((|(|(((|(((((((|(() '(",
    "             (((|(|((|(((|((((((((((|((|(((.   &lt;)",
    "           $((|((((((((|((((|((|((|(((()^       1?",
    "           )(((((|((|(((((|((((((1}&gt;            ](",
    "          ((|(|(((((([&quot                     '    (",
    "          ((((((|(1                        i     1?",
    "          (|((|((;                        [      [",
    "         ?((((((!                       {_       (",
    "          (|(|(|                     '|('       &quot;(",
    "          (((((|                  &quot;}|)`         ))",
    "           |((((~             &gt;{((|-          '((",
    "            )(|(((^   .1)(((|((/.            )(t",
    "              ((! .)|((()_              .+((|(",
    "                   i((((((((((((((((((((((((",
    "                  (|((|((|((|(|(|(|(((|((|",
    "                       )((((((((((((|",
  ] 
  [
    "                         11                ",
    "                         )1                ",
    "                        11+                ",
    "                      1))                   ",
    "                  &quot&quot1)1[  1)1                ",
    "                +11)  )11                   ",
    "                1)1  )11                    ",
    "                111  11)1                   ",
    "                  ))   1)1{                ",
    "                        11     vvz         ",
    "          vvuu         &quot&quot   uv    uvu       ",
    "            uvvvuvvuvvvu         vuv       ",
    "             uuu        vuvv   uvuv        ",
    "               ncvvcvvvvv    XL            ",
    "              uuuvvvvcvvuvun               ",
    "        vvuu                     vv        ",
    "       vuuvuvvvvvvvvvvvvuvvuvuuvv  u       ",
    "            nuv          vuuvuvuuu         ",
  ],
  [
    "YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY",
    "YYUYUYYUYUYYUYUYYUYUYYUYUYYUYUYYUYUYUY",
    "YYYYYYY                        YYYYYYY",
    "YUYYUYUY                      YYUYYUYY",
    "YYYYYYYY    YYYYYYYYYYYYYYYYYYUYYYYYYY",
    " UYUYYUY     YYUYYUYUYYUYUYYUYYYYUYYU ",
    " YYYYYYU                      YUYYYUY ",
    " UYYUYYY                      YYYYYYU ",
    " YYYYYUYYYYYYYUYYYYYYYYYY     YUYUYYY ",
    "  YUYYYY     UYYYUYUYYUYY     YYYYYU  ",
    "  YYYUYU     YYYYYYYYYYUY     YUYYYY  ",
    "  YUYYYYY      UUYYUYUYb     YYYYUYY  ",
    "  YYYYUYY                    YUYYYYU  ",
    "  UYUYYYYUYYUYU        YUYYYYYYYUYYY  ",
    "  YYYYYUYYYYYYYYYYYYYYYUYYYUYUYYYYUY  ",
    "  XYYUYYYYUYUYYUYYUYYUYYYYYYYYYUYYYX  ",
    "      LYYYYYYYYYYYYYYYYYUYUYYUYL      ",
    "             XUUYUYUYUUYX              ",
  ],

  [
    "                    11",
    "                    )1",
    "                   11+",
    "                 1))",
    "             &quot&quot1)1[  1)1",
    "           +11)  )11",
    "           1)1  )11",
    "           111  11)1",
    "             ))   1)1{",
    "                   11     vvz",
    "     vvuu         &quot&quot   uv    uvu",
    "       uvvvuvvuvvvu         vuv",
    "        uuu        vuvv   uvuv",
    "          ncvvcvvvvv    XL",
    "         uuuvvvvcvvuvun",
    "   vvuu                     vv",
    "  vuuvuvvvvvvvvvvvvuvvuvuuvv  u",
    "       nuv          vuuvuvuuu",
  ],*/ [
    "                   1",
    "                  1)",
    "                 1)",
    "              11)1   11",
    "            1)1 t11",
    "          11)  )1)",
    "           11  1)11",
    "            )1  )1)1",
    "                  1     uvv",
    "     uuvn            vj   vuu",
    "                          uvv",
    "        uuvuvuvuvuvuvu  uu",
    "         vu",
    "     uu   vuvuuvuuv",
    "  uvuvv                uvuu",
    "       xun         uuvuvuuu",
  ],
  [
    "         __******__",
    "      _//^        ^\\\\_  #",
    '     /"              "\\##I',
    "   _/                 ,/|#",
    "  ./                ,/'  #,",
    "  /            ___-/'    |#",
    " |'     _----^~\"^      , |#",
    " |     /`             /'  #",
    " |    /              //   #",
    " |   |             _/#    #",
    " |.  |        __/'/'     #?",
    "  \\  `.  ___--^_/'     _##",
    "   \\ ,_/^^___--'    __/'/",
    "    \\( | -**\\-------^`_/",
    '     "\\_            _/"',
    '       "\\\\________//^',
  ],
  [
    "   ______________________",
    "   |                    |",
    "   |                    |",
    "   |                    |",
    "   |                    |",
    "   |                    |",
    "   |                    |",
    "   |         --  ,---\\  |",
    "   |        ] ] . .-\\.' |",
    "   |        ] ] ' '.    |",
    "   |        ] ]  \\. `\\. |",
    "   |        ] ]   ``. | |",
    "   |     /-_/ ] /`\\./ | |",
    "   |     \\.___/ `\\___./ |",
    "   |____________________|",
    "   '`````````````````````",
  ],
  [
    "      /__`\\.   ./___\\,",
    "     ']` `\\._/./' `\\]",
    "     `'    `)`/`    ||",
    "     ||    /./.\\    ||",
    "     |]_--/ -_- \\--_||",
    "  .--_ --'/'```^\\+-- _--.",
    "././` |\\//',---.`\\\\'. `\\.\\.",
    "'/    `..' '   ` `. '    \\`",
    ".\\    .'`. '   . .'`.    /]",
    "`\\`\\__'/\\`,`-_-' //.`__/'/'",
    "  `-._ --:\\_____/:-/ __-'",
    "     ||---\\ -__ /---||",
    "     ||    \\`/'/    ||",
    "     .|     / \\,'    I|",
    "     ''___/'/^\\`\\.__/'",
    "     `\\__./'   `\\.__/'",
  ],
  [
    "           _______",
    "         /'-------`. ",
    "         |I/\\     |I",
    "         |'`-     |'",
    "   ,-_________>   |___.",
    "   ''             |----\\",
    "  ]|              |'   |'",
    "  ]|    __________/'   |'",
    "  ]|   .'---------'    |'",
    "  ]|   '|              |'",
    "   \\\\__-|    _________ `'  ",
    "    `  ]|   (____ ____-'",
    "       '|     ..]|",
    "       '|     \\/]|",
    "       `\\_______./",
    "         ~~~~~~~`",
  ],
  [
    "        ________",
    "      //'`    `'\\\\",
    "    /'            `\\",
    "   /      ,__ =_.   \\",
    "  /       | ] | |    \\",
    ' |      __| ] "_"     |',
    " |    /'``` ] |~|     :",
    " '   |  /-| ] | |     ]",
    " I   | ]  | ] | |     ]",
    " |   '  \\_| ] | |     |",
    " |    \\______ | |     |",
    '  \\     `""^`/  |    /',
    "   \\        /._/    /",
    "    \\.       `'   ./",
    "     `\\\\__    __//`",
    '        `"-""-"`',
  ],
];

let artIndex = 0;
AsciiMorph.render(arts[artIndex]);

setInterval(() => {
  artIndex = (artIndex + 1) % arts.length;
  AsciiMorph.morph(arts[artIndex]);
}, 3000);
