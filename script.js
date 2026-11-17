
"use strict";

const $ = id => document.getElementById(id);
const M = String.raw;

const lesson = {
  title:"Дәрежелік функция және оның қасиеттері",
  goal:"Дәрежелік функцияның анықтамасын, анықталу облысын, мәндер жиынын, жұп-тақ қасиетін және өсу-кему аралықтарын түсіну. Дәрежелік функциялардың графиктерін ажырату."
};

// =====================================
// 5 ТҮСІНДІРМЕ
// МҰНДА ӨЗІНДІК ЖҰМЫС ЖОҚ
// =====================================

const theory = [
  {
    title:"Дәрежелік функция дегеніміз не?",
    definition:
      "Дәрежелік функция — айнымалысы дәреженің негізінде орналасатын функция. Оның көрсеткіші тұрақты нақты сан болады. Функцияның қасиеттері көрсеткіштің қандай сан екеніне байланысты өзгереді.",
    explain:
      "Мысалы, айнымалының квадраты, кубы және квадрат түбірі дәрежелік функцияларға жатады. Квадрат функциясында айнымалы екі дәрежеге, куб функциясында үш дәрежеге шығарылады. Көрсеткіштің таңбасы мен жұп-тақтығы график пішінін анықтайды.",
    rule:
      "Дәрежелік функцияның қасиеттерін анықтау үшін алдымен көрсеткішті, содан кейін функцияның анықталу облысын зерттейміз.",
    formula:M`y=x^a`,
    worked:[
      M`y=x^2`,
      M`x=3\Longrightarrow y=3^2`,
      M`\boxed{y=9}`
    ],
    warning:
      "Дәрежелік функцияны көрсеткіштік функциямен шатастырмаңдар. Дәрежелік функцияда x — негіз, ал көрсеткіштік функцияда x — дәреже көрсеткіші."
  },
  {
    title:"Жұп дәрежелі функция",
    definition:
      "Көрсеткіші оң жұп бүтін сан болатын дәрежелік функцияның графигі Oy осіне қатысты симметриялы болады. Функцияның оң және теріс аргументтердегі мәндері бірдей.",
    explain:
      "Мысалы, үштің квадраты тоғызға тең. Теріс үштің квадраты да тоғызға тең. Сондықтан квадраттық функцияның графигінің сол және оң бөліктері бір-бірінің айнадағы бейнесіндей орналасады.",
    rule:
      "Жұп функция үшін аргумент таңбасын өзгерткенде функцияның мәні өзгермейді. Оң жұп дәрежелі функция нөлге дейін кемиді, нөлден кейін өседі.",
    formula:M`f(-x)=f(x),\qquad f(x)=x^2`,
    worked:[
      M`f(x)=x^4`,
      M`f(-2)=(-2)^4=16`,
      M`f(2)=2^4=16`
    ],
    warning:
      "x² және x⁴ сияқты функциялардың мәндері теріс болмайды, бірақ олардың графиктері бірдей емес."
  },
  {
    title:"Тақ дәрежелі функция",
    definition:
      "Көрсеткіші оң тақ бүтін сан болатын дәрежелік функцияның графигі координаталар басына қатысты симметриялы болады. Аргумент таңбасымен бірге функция мәнінің таңбасы да өзгереді.",
    explain:
      "Мысалы, екі санының кубы сегізге тең, ал теріс екі санының кубы теріс сегізге тең. Бұл қасиет тақ дәрежелі функцияның графигін координаталар басына қатысты симметриялы етеді.",
    rule:
      "Тақ функция үшін аргументтің таңбасын өзгерткенде функция мәнінің таңбасы өзгереді. Оң тақ бүтін дәрежелі функция бүкіл нақты сандар жиынында өседі.",
    formula:M`f(-x)=-f(x),\qquad f(x)=x^3`,
    worked:[
      M`f(x)=x^3`,
      M`f(-3)=(-3)^3=-27`,
      M`f(3)=3^3=27`
    ],
    warning:
      "Тақ функцияның барлық мәндері міндетті түрде оң емес. Теріс аргументтерде мәндері теріс болуы мүмкін."
  },
  {
    title:"Теріс көрсеткішті дәрежелік функция",
    definition:
      "Көрсеткіші теріс бүтін сан болатын дәрежелік функцияны бөлшек түрінде жазуға болады. Мұндай функцияларда нөл аргументі анықталу облысына кірмейді.",
    explain:
      "Мысалы, x санының теріс бірінші дәрежесі бір бөлінген x болады. Егер x екіге тең болса, функцияның мәні бір екінші болады. Ал x нөлге тең болса, бөлім нөлге айналады. Сондықтан бұл мәнді қолдануға болмайды.",
    rule:
      "Теріс көрсеткішті дәрежеде нөлге бөлуді болдырмау қажет. Сондықтан анықталу облысынан нөл алынып тасталады.",
    formula:M`x^{-n}=\frac1{x^n},\qquad x\ne0`,
    worked:[
      M`f(x)=x^{-2}`,
      M`f(2)=\frac1{2^2}`,
      M`\boxed{\frac14}`
    ],
    warning:
      "Теріс көрсеткіш теріс функция мәнін білдірмейді. Мысалы, x⁻² барлық нөлден өзге x үшін оң."
  },
  {
    title:"Бөлшек және иррационал көрсеткішті функциялар",
    definition:
      "Дәреже көрсеткіші бөлшек немесе иррационал сан болғанда да дәрежелік функция қарастырылады. Жалпы нақты көрсеткішті дәреже оң аргументтер үшін анықталады. Кейбір рационал көрсеткіштердің облысын кеңейтуге болады.",
    explain:
      "Мысалы, x санының бір екінші дәрежесі квадрат түбірге тең. Ол нақты сандарда тек теріс емес аргументтер үшін анықталады. Ал x санының бір үшінші дәрежесі куб түбірге тең және барлық нақты сандар үшін анықталады.",
    rule:
      "Бөлшек көрсеткіштерде түбірдің дәрежесін ескереміз. Иррационал көрсеткішті функцияның нақты мәнін жалпы жағдайда оң аргументтер үшін қарастырамыз.",
    formula:M`x^{\frac12}=\sqrt{x},\quad x\geq0`,
    worked:[
      M`f(x)=x^{\frac12}`,
      M`f(25)=\sqrt{25}`,
      M`\boxed5`
    ],
    warning:
      "Бірдей көрінетін түбірлер мен дәрежелерді анықталу облысын ескермей түрлендіруге болмайды."
  }
];

// =====================================
// 10 КОНСПЕКТ
// ӨЗІНДІК ЖҰМЫСТАР ТЕК ОСЫНДА
// =====================================

const notes = [
  {
    title:"Дәрежелік функцияның анықтамасы",
    text:
      "Дәрежелік функция — көрсеткіші тұрақты нақты сан, ал негізі айнымалы болатын функция. Көрсеткіштің мәніне байланысты функцияның анықталу облысы, мәндер жиыны және графигінің пішіні өзгереді.",
    formula:M`y=x^a`,
    example:[
      M`f(x)=x^2`,
      M`f(4)=4^2`,
      M`=16`
    ],
    self:[
      [M`f(x)=x^2,\quad f(5)=?`,
       [M`f(5)=5^2=25`],M`\boxed{25}`],
      [M`f(x)=x^3,\quad f(2)=?`,
       [M`f(2)=2^3=8`],M`\boxed8`]
    ]
  },
  {
    title:"Анықталу облысы",
    text:
      "Анықталу облысы — функция есептелетін барлық аргумент мәндерінің жиыны. Оң бүтін дәрежелі функция барлық нақты сандарда анықталған. Квадрат түбірлі функцияда аргумент теріс емес болады.",
    formula:M`D(x^2)=\mathbb R,\qquad D(\sqrt{x})=[0;+\infty)`,
    example:[
      M`f(x)=\sqrt{x-3}`,
      M`x-3\geq0`,
      M`x\geq3`
    ],
    self:[
      [M`D\left(\sqrt{x-5}\right)=?`,
       [M`x-5\geq0`,M`x\geq5`],M`\boxed{[5;+\infty)}`],
      [M`D\left(\frac1{x^2}\right)=?`,
       [M`x^2\ne0`,M`x\ne0`],M`\boxed{\mathbb R\setminus\{0\}}`]
    ]
  },
  {
    title:"Функцияның мәндер жиыны",
    text:
      "Мәндер жиыны — функция қабылдайтын барлық нәтижелер жиыны. Квадрат функцияның мәні теріс емес, ал куб функция оң да, теріс те мәндер қабылдайды.",
    formula:M`E(x^2)=[0;+\infty),\qquad E(x^3)=\mathbb R`,
    example:[
      M`y=x^2`,
      M`x^2\geq0`,
      M`E(y)=[0;+\infty)`
    ],
    self:[
      [M`E(x^4)=?`,
       [M`x^4\geq0`],M`\boxed{[0;+\infty)}`],
      [M`E(x^5)=?`,
       [M`\text{Барлық нақты мәндер қабылданады}`],
       M`\boxed{\mathbb R}`]
    ]
  },
  {
    title:"Жұп функция",
    text:
      "Функция жұп болуы үшін қарама-қарсы аргументтерде оның мәндері бірдей болуы керек. Жұп функцияның графигі ординаталар осіне симметриялы орналасады.",
    formula:M`f(-x)=f(x)`,
    example:[
      M`f(x)=x^4`,
      M`f(-2)=(-2)^4=16`,
      M`f(2)=16`
    ],
    self:[
      [M`f(x)=x^6,\quad f(-2)=?`,
       [M`(-2)^6=64`],M`\boxed{64}`],
      [M`f(x)=x^2,\quad f(-7)=?`,
       [M`(-7)^2=49`],M`\boxed{49}`]
    ]
  },
  {
    title:"Тақ функция",
    text:
      "Тақ функцияда аргументтің таңбасы өзгерсе, функция мәнінің таңбасы да өзгереді. Оның графигі координаталар басына қатысты симметриялы.",
    formula:M`f(-x)=-f(x)`,
    example:[
      M`f(x)=x^3`,
      M`f(-2)=(-2)^3`,
      M`=-8`
    ],
    self:[
      [M`f(x)=x^5,\quad f(-2)=?`,
       [M`(-2)^5=-32`],M`\boxed{-32}`],
      [M`f(x)=x^3,\quad f(-4)=?`,
       [M`(-4)^3=-64`],M`\boxed{-64}`]
    ]
  },
  {
    title:"Функцияның өсуі мен кемуі",
    text:
      "Функция өспелі аралықта аргумент артқан сайын үлкен мән қабылдайды. Кемімелі аралықта аргумент артқан сайын функция мәні азаяды. Квадрат функция нөлге дейін кеміп, нөлден кейін өседі.",
    formula:M`y=x^2:\quad(-\infty;0]\ \text{кемиді},\ [0;+\infty)\ \text{өседі}`,
    example:[
      M`f(-3)=9,\quad f(-2)=4`,
      M`-3<-2,\quad9>4`,
      M`\text{Теріс аралықта кемиді}`
    ],
    self:[
      [M`f(x)=x^2,\quad f(1)+f(2)=?`,
       [M`1^2+2^2=1+4`],M`\boxed5`],
      [M`f(x)=x^3,\quad f(2)-f(1)=?`,
       [M`8-1=7`],M`\boxed7`]
    ]
  },
  {
    title:"Нөлінші және бірінші дәрежелік функция",
    text:
      "Нөлінші дәрежелік функцияның мәні нөлден басқа аргументтерде бірге тең. Бірінші дәрежелік функцияда нәтиже аргументтің өзіне тең.",
    formula:M`x^0=1\ (x\ne0),\qquad x^1=x`,
    example:[
      M`f(x)=x^1`,
      M`f(-5)=-5`
    ],
    self:[
      [M`3^0+4^0=?`,
       [M`1+1=2`],M`\boxed2`],
      [M`f(x)=x^1,\quad f(-8)=?`,
       [M`-8^1=-8`],M`\boxed{-8}`]
    ]
  },
  {
    title:"Теріс көрсеткішті функция",
    text:
      "Теріс бүтін көрсеткішті дәрежелік функцияны бөлшек түрінде көрсетуге болады. Бөлім нөлге тең болмауы тиіс. Сондықтан нөл анықталу облысына кірмейді.",
    formula:M`x^{-2}=\frac1{x^2},\qquad x\ne0`,
    example:[
      M`f(x)=x^{-2}`,
      M`f(3)=\frac1{3^2}`,
      M`=\frac19`
    ],
    self:[
      [M`f(x)=x^{-1},\quad f(4)=?`,
       [M`\frac14`],M`\boxed{\frac14}`],
      [M`f(x)=x^{-2},\quad f(2)=?`,
       [M`\frac1{2^2}`],M`\boxed{\frac14}`]
    ]
  },
  {
    title:"Бөлшек көрсеткішті функция",
    text:
      "Бөлшек көрсеткішті дәреже түбір арқылы жазылады. Бір екінші дәрежелік функция квадрат түбірге, бір үшінші дәрежелік функция куб түбірге тең.",
    formula:M`x^{\frac12}=\sqrt{x},\qquad x^{\frac13}=\sqrt[3]{x}`,
    example:[
      M`f(x)=x^{\frac12}`,
      M`f(49)=\sqrt{49}=7`
    ],
    self:[
      [M`64^{\frac12}=?`,
       [M`\sqrt{64}=8`],M`\boxed8`],
      [M`125^{\frac13}=?`,
       [M`\sqrt[3]{125}=5`],M`\boxed5`]
    ]
  },
  {
    title:"Иррационал көрсеткіш және графикті зерттеу",
    text:
      "Иррационал көрсеткішті дәрежелік функция оң аргументтер үшін анықталады. Егер көрсеткіш оң болса, функция оң сандарда өседі. Көрсеткіш теріс болса, функция кемиді.",
    formula:M`f(x)=x^{\sqrt2},\qquad x>0`,
    example:[
      M`f(x)=x^{\sqrt2}`,
      M`f(1)=1^{\sqrt2}`,
      M`=1`
    ],
    self:[
      [M`2^{\sqrt2}\cdot2^{-\sqrt2}=?`,
       [M`2^{\sqrt2-\sqrt2}=2^0`],M`\boxed1`],
      [M`1^{\sqrt3}+1^{\sqrt5}=?`,
       [M`1+1=2`],M`\boxed2`]
    ]
  }
];

// =====================================
// 4 ДЕҢГЕЙ — 20 ЕСЕП
// =====================================

const levels = [
  {
    title:"I деңгей — Жеңіл",
    points:5,
    items:[
      [M`f(x)=x^2,\quad f(4)=?`,16,
       [M`4^2=16`]],
      [M`f(x)=x^3,\quad f(3)=?`,27,
       [M`3^3=27`]],
      [M`f(x)=x^4,\quad f(2)=?`,16,
       [M`2^4=16`]],
      [M`f(x)=x^5,\quad f(-1)=?`,-1,
       [M`(-1)^5=-1`]],
      [M`f(x)=x^2,\quad f(-6)=?`,36,
       [M`(-6)^2=36`]]
    ]
  },
  {
    title:"II деңгей — Орташа",
    points:10,
    items:[
      [M`f(x)=x^{\frac12},\quad f(81)=?`,9,
       [M`\sqrt{81}=9`]],
      [M`f(x)=x^{\frac13},\quad f(125)=?`,5,
       [M`\sqrt[3]{125}=5`]],
      [M`f(x)=x^{-1},\quad f(5)=?`,0.2,
       [M`\frac15`]],
      [M`f(x)=x^{-2},\quad f(4)=?`,0.0625,
       [M`\frac1{4^2}=\frac1{16}`]],
      [M`f(x)=x^2,\quad f(3)-f(-2)=?`,5,
       [M`9-4=5`]]
    ]
  },
  {
    title:"III деңгей — Қиын",
    points:15,
    items:[
      [M`f(x)=x^3,\quad f(4)-f(2)=?`,56,
       [M`64-8=56`]],
      [M`f(x)=x^4,\quad f(-3)+f(2)=?`,97,
       [M`81+16=97`]],
      [M`f(x)=x^{-\frac12},\quad f(16)=?`,0.25,
       [M`\frac1{\sqrt{16}}=\frac14`]],
      [M`f(x)=x^{\frac23},\quad f(27)=?`,9,
       [M`\left(\sqrt[3]{27}\right)^2=9`]],
      [M`f(x)=x^2,\quad f(a)=49,\quad a>0`,7,
       [M`a^2=49`,M`a=7`]]
    ]
  },
  {
    title:"IV деңгей — Өте қиын",
    points:20,
    items:[
      [M`f(x)=x^3,\quad f(a)=125,\quad a>0`,5,
       [M`a^3=125`,M`a=5`]],
      [M`f(x)=x^{\frac32},\quad f(16)=?`,64,
       [M`\left(\sqrt{16}\right)^3=4^3=64`]],
      [M`f(x)=x^{-2},\quad f(a)=\frac19,\quad a>0`,3,
       [M`\frac1{a^2}=\frac19`,M`a^2=9`,M`a=3`]],
      [M`f(x)=x^{\frac23},\quad f(64)=?`,16,
       [M`\left(\sqrt[3]{64}\right)^2=4^2=16`]],
      [M`f(x)=x^{\sqrt2},\quad f(4)\cdot f(4)^{-1}=?`,1,
       [M`4^{\sqrt2}\cdot4^{-\sqrt2}=4^0`,M`=1`]]
    ]
  }
];

// =====================================
// 3 ТОП • 15 СҰРАҚ
// =====================================

const quiz = [
  {
    question:"Дәрежелік функцияның жалпы түрі?",
    options:["y=aˣ","y=xᵃ","y=x+a","y=ax+b"],
    correct:1
  },
  {
    question:"y=x² функциясы қандай?",
    options:["Тақ","Периодты","Жұп","Тұрақты"],
    correct:2
  },
  {
    question:"y=x³ функциясы қандай?",
    options:["Тақ","Жұп","Тұрақты","Тек оң"],
    correct:0
  },
  {
    question:"x⁻¹ өрнегі неге тең?",
    options:["−x","x","x²","1/x"],
    correct:3
  },
  {
    question:"y=√x функциясының анықталу облысы?",
    options:["x<0","x≥0","x≠0","Барлық сан"],
    correct:1
  },
  {
    question:"y=x² функциясының мәндер жиыны?",
    options:["Барлық сан","Тек теріс","y≥0","y≤0"],
    correct:2
  },
  {
    question:"f(x)=x³ болса, f(−2) мәні?",
    options:["−8","8","−6","4"],
    correct:0
  },
  {
    question:"f(x)=x⁴ болса, f(−2) мәні?",
    options:["−16","−8","8","16"],
    correct:3
  },
  {
    question:"Тақ функция графигі неге симметриялы?",
    options:["Ox осіне","Координаталар басына","Oy осіне","x=1 түзуіне"],
    correct:1
  },
  {
    question:"Жұп функция графигі неге симметриялы?",
    options:["Ox осіне","x=2 түзуіне","Oy осіне","Координаталар басына"],
    correct:2
  },
  {
    question:"x^(1/2) мәні қандай?",
    options:["√x","2x","x²","1/x"],
    correct:0
  },
  {
    question:"x⁻² функциясында қай аргумент болмайды?",
    options:["−2","1","2","0"],
    correct:3
  },
  {
    question:"y=x³ функциясы қалай өзгереді?",
    options:["Кемиді","Бүкіл R-де өседі","Тұрақты","Периодты"],
    correct:1
  },
  {
    question:"y=x² функциясының ең кіші мәні?",
    options:["−1","1","0","2"],
    correct:2
  },
  {
    question:"x⁰ мәні қандай, егер x≠0 болса?",
    options:["1","0","x","−1"],
    correct:0
  }
];

const homework = [
  {
    title:"1. Функцияларды зерттеу",
    text:
      "Төмендегі функциялар үшін анықталу облысын, мәндер жиынын, жұп-тақтығын және өсу-кему аралықтарын дәптерге жазыңдар.",
    formulas:[
      M`y=x^2`,
      M`y=x^3`,
      M`y=\frac1x`
    ]
  },
  {
    title:"2. Есеп шығару",
    text:
      "Функциялардың берілген нүктелердегі мәндерін табыңдар. Әр есептің барлық қадамдарын көрсетіңдер.",
    formulas:[
      M`f(x)=x^{\frac32},\quad f(9)=?`,
      M`f(x)=x^{-2},\quad f(-4)=?`,
      M`f(x)=x^{\frac23},\quad f(125)=?`
    ]
  },
  {
    title:"3. Теориялық жұмыс",
    text:
      "«Жұп және тақ дәрежелік функциялардың графиктері несімен ерекшеленеді?» тақырыбында 8–10 сөйлем жазыңдар. Екі мысалды салыстырып, графиктерін дәптерге салыңдар.",
    formulas:[
      M`y=x^2,\qquad y=x^3`
    ]
  }
];

// =====================================
// СЛАЙДТАР
// =====================================

const slides=[{type:"intro",name:"Кіріспе"}];

theory.forEach((_,i)=>slides.push({
  type:"theory",index:i,name:`Түсіндірме ${i+1}`
}));

notes.forEach((_,i)=>slides.push({
  type:"notes",index:i,name:`Конспект ${i+1}`
}));

levels.forEach((_,i)=>slides.push({
  type:"level",index:i,name:`${i+1}-деңгей`
}));

quiz.forEach((_,i)=>slides.push({
  type:"game",index:i,name:`${i%3+1}-топ • ${i+1}-сұрақ`
}));

slides.push(
  {type:"homework",name:"Үй жұмысы"},
  {type:"finish",name:"Қорытынды"}
);

let page=0;
let individualScore=0;
let teamScores=[0,0,0];

const solved=new Set();
const gameAnswers=new Map();

let secondsLeft=4800;
let timerID=null;
let timerEndAt=0;

function safe(value){
  return String(value).replace(/[&<>"']/g,c=>({
    "&":"&amp;","<":"&lt;",">":"&gt;",
    '"':"&quot;","'":"&#39;"
  }[c]));
}

function math(tex){
  return `<div class="math">\\[${tex}\\]</div>`;
}

function card(color,title,body){
  return `
    <section class="card ${color}">
      <h3>${safe(title)}</h3>
      ${body}
    </section>
  `;
}

function stepsHTML(steps){
  return steps.map((s,i)=>`
    <div class="step">
      <strong>${i+1}-қадам</strong>
      ${math(s)}
    </div>
  `).join("");
}

// =====================================
// ӨЗІНДІК ЖҰМЫС
// ТЕК КОНСПЕКТТЕРДЕ БОЛАДЫ
// =====================================

function noteSelfWork(items,noteIndex){
  return items.map((item,i)=>{
    const id=`self_${noteIndex}_${i}`;

    return `
      <section class="self-work">
        <h3>✏️ ${i+1}-өзіндік есеп</h3>

        ${math(item[0])}

        <p>
          Есепті дәптерге шығарыңдар.
          Содан кейін шешу жолын ашып,
          өз жауаптарыңды тексеріңдер.
        </p>

        <button class="action" data-toggle="${id}">
          Шешу жолын көрсету
        </button>

        <div class="solution" id="${id}" hidden>
          ${stepsHTML(item[1])}
          <h3>Дұрыс жауап:</h3>
          ${math(item[2])}
        </div>
      </section>
    `;
  }).join("");
}

// =====================================
// КІРІСПЕ
// =====================================

function renderIntro(){
  return `
    <div class="slide">
      <div class="eyebrow">
        МАТЕМАТИКА • 1 КУРС • 80 МИНУТ
      </div>

      <h1 class="gradient">
        §10. Дәрежелік функция және оның қасиеттері
      </h1>

      ${card("blue","Сабақтың мақсаты",`
        <p>${safe(lesson.goal)}</p>
      `)}

      ${card("gold","Негізгі формула",
        math(M`y=x^a`)
      )}

      ${card("green","Сабақ жоспары",`
        <p>5 толық теориялық түсіндірме</p>
        <p>10 конспект және 20 өзіндік есеп</p>
        <p>4 деңгей — 20 есеп</p>
        <p>3 топқа арналған 15 сұрақ</p>
        <p>Үй тапсырмасы және қорытынды</p>
      `)}

      ${card("purple","80 минуттық жоспар",`
        <p>Кіріспе — 5 минут</p>
        <p>Түсіндірмелер — 20 минут</p>
        <p>Конспектілер, өзіндік жұмыс — 15 минут</p>
        <p>4 деңгей — 20 минут</p>
        <p>Командалық ойын — 15 минут</p>
        <p>Қорытынды — 5 минут</p>
      `)}
    </div>
  `;
}

// =====================================
// ТЕОРИЯ — ӨЗІНДІК ЖҰМЫССЫЗ
// =====================================

function renderTheory(i){
  const t=theory[i];

  return `
    <div class="slide">
      <div class="eyebrow">
        ТҮСІНДІРМЕ ${i+1} / 5
      </div>

      <h2>${safe(t.title)}</h2>

      ${card("blue","Анықтама",
        `<p>${safe(t.definition)}</p>`)}

      ${card("purple","Қарапайым түсіндірме",
        `<p>${safe(t.explain)}</p>`)}

      ${card("green","Ереже",
        `<p>${safe(t.rule)}</p>`)}

      ${card("gold","Математикалық формула",
        math(t.formula))}

      ${card("green","Толық шығарылған мысал",
        stepsHTML(t.worked))}

      ${card("red","Маңызды ескерту",
        `<p>${safe(t.warning)}</p>`)}
    </div>
  `;
}

// =====================================
// КОНСПЕКТ — 2 ӨЗІНДІК ЖҰМЫС
// =====================================

function renderNote(i){
  const n=notes[i];

  return `
    <div class="slide">
      <div class="eyebrow">
        КОНСПЕКТ ${i+1} / 10
      </div>

      <h2>${safe(n.title)}</h2>

      <div class="notebook">
        <h3>✍ Дәптерге жазып алыңдар</h3>
        <p>${safe(n.text)}</p>
      </div>

      ${card("gold","Негізгі формула",
        math(n.formula))}

      ${card("green","Шығарылған мысал",
        stepsHTML(n.example))}

      <div class="eyebrow">
        ӨЗІНДІК ЖҰМЫС
      </div>

      <h2>✏️ Екі есеп</h2>

      ${noteSelfWork(n.self,i)}
    </div>
  `;
}

// =====================================
// 4 ДЕҢГЕЙ
// =====================================

function renderLevel(i){
  const level=levels[i];

  return `
    <div class="slide">
      <div class="eyebrow">
        ДЕҢГЕЙЛІК ТАПСЫРМАЛАР ${i+1} / 4
      </div>

      <h2>📐 ${safe(level.title)}</h2>

      <div class="level-header">
        <span>5 есеп</span>
        <span>
          Әр дұрыс жауап: +${level.points} ұпай
        </span>
      </div>

      <p>
        Есептің шешу жолын дәптерге жазыңдар.
        Жауапты бүтін, ондық немесе жай
        бөлшек түрінде енгізуге болады.
      </p>

      <div class="level-grid">
        ${level.items.map((item,j)=>{
          const key=i+"_"+j;
          const done=solved.has(key);

          return `
            <section class="level-task">
              <h3>${j+1}-есеп</h3>

              ${math(item[0])}

              <div class="answer-row">
                <input id="input_${key}"
                  type="text"
                  inputmode="decimal"
                  placeholder="Жауабы, мысалы 1/4"
                  ${done?"disabled":""}>

                <button data-check="${key}"
                  ${done?"disabled":""}>
                  ${done?"✓ Дұрыс":"Тексеру"}
                </button>
              </div>

              <div id="feedback_${key}"
                class="feedback ${done?"success":""}">
                ${done
                  ?`✓ Дұрыс! +${level.points} ұпай`
                  :"Жауапты енгізіңдер."}
              </div>

              <button class="action"
                data-toggle="solution_${key}">
                Шешу жолын көрсету
              </button>

              <div class="solution"
                id="solution_${key}"
                hidden>
                ${stepsHTML(item[2])}
                <h3>Дұрыс жауап</h3>
                ${math(String(item[1]))}
              </div>
            </section>
          `;
        }).join("")}
      </div>
    </div>
  `;
}

// =====================================
// 3 КОМАНДАЛЫҚ ОЙЫН
// =====================================

function renderGame(i){
  const q=quiz[i];
  const team=i%3;
  const selected=gameAnswers.get(i);

  return `
    <div class="slide">
      <div class="eyebrow">
        КОМАНДАЛЫҚ ОЙЫН ${i+1} / 15
      </div>

      <h2>🏆 ${team+1}-топ жауап береді</h2>

      <div class="scores">
        ${teamScores.map((points,j)=>`
          <div class="team ${team===j?"current":""}">
            ${j+1}-топ
            <strong>${points}</strong>
          </div>
        `).join("")}
      </div>

      ${card("gold",`${i+1}-сұрақ`,`
        <p>${safe(q.question)}</p>

        <div class="answers">
          ${q.options.map((option,j)=>{
            let cls="";

            if(selected!==undefined){
              if(j===q.correct)cls="correct";
              else if(j===selected)cls="wrong";
            }

            return `
              <button class="${cls}"
                data-choice="${j}"
                ${selected!==undefined?"disabled":""}>
                ${"ABCD"[j]}. ${safe(option)}
              </button>
            `;
          }).join("")}
        </div>

        <p>
          ${selected===undefined
            ?"Төрт жауаптың біреуін таңдаңдар."
            :selected===q.correct
              ?"✓ Дұрыс жауап! +10 ұпай."
              :"Дұрыс жауап: "+safe(q.options[q.correct])}
        </p>
      `)}

      ${card("blue","Ойын ережесі",`
        <p>
          Топтар 1 → 2 → 3 ретімен
          автоматты ауысады.
        </p>
        <p>
          Әр дұрыс жауапқа 10 ұпай қосылады.
        </p>
        <p>
          Жауап берген соң сол жақтағы
          «Келесі» батырмасын басыңдар.
        </p>
      `)}
    </div>
  `;
}

// =====================================
// ҮЙ ЖҰМЫСЫ ЖӘНЕ ҚОРЫТЫНДЫ
// =====================================

function renderHomework(){
  return `
    <div class="slide">
      <div class="eyebrow">ҮЙ ТАПСЫРМАСЫ</div>
      <h2>📚 Үй жұмысы</h2>

      ${homework.map((item,i)=>card(
        ["blue","gold","green"][i],
        item.title,
        `<p>${safe(item.text)}</p>`+
        item.formulas.map(math).join("")
      )).join("")}
    </div>
  `;
}

function renderFinish(){
  const max=Math.max(...teamScores);

  const winners=teamScores
    .map((points,i)=>
      points===max?`${i+1}-топ`:null
    )
    .filter(Boolean);

  return `
    <div class="slide">
      <div class="eyebrow">САБАҚ ҚОРЫТЫНДЫСЫ</div>

      <h1 class="gradient">
        Сабақ аяқталды!
      </h1>

      <div class="scores">
        ${teamScores.map((points,i)=>`
          <div class="team">
            ${i+1}-топ
            <strong>${points}</strong>
          </div>
        `).join("")}
      </div>

      ${card("green","Командалық ойын нәтижесі",`
        <p>
          ${winners.join(", ")}
          ${winners.length===1
            ?" — жеңімпаз!"
            :" — бірдей ұпай жинады!"}
        </p>
      `)}

      ${card("blue","Деңгейлік тапсырмалар",`
        <p>
          Дұрыс шығарылған есептер:
          ${solved.size} / 20
        </p>
        <p>
          Жиналған жеке ұпай: ${individualScore}
        </p>
      `)}

      ${card("gold","Бүгін не үйрендік?",`
        <p>Дәрежелік функцияларды таныдық.</p>
        <p>Жұп және тақ функцияларды ажыраттық.</p>
        <p>Анықталу облысын зерттедік.</p>
        <p>Дәрежелік функциялармен есептер шығардық.</p>
      `)}

      <h2>Сау болыңыздар!</h2>
    </div>
  `;
}

// =====================================
// СЛАЙДТАРДЫ КӨРСЕТУ
// =====================================

let mathQueue=Promise.resolve();

function refreshMath(){
  if(!window.MathJax)return;

  mathQueue=mathQueue.then(async()=>{
    await MathJax.startup.promise;

    if(typeof MathJax.typesetPromise==="function"){
      await MathJax.typesetPromise([$("content")]);
    }
  }).catch(error=>{
    console.warn("Формула қатесі:",error);
  });
}

function render(){
  const slide=slides[page];
  let html="";

  switch(slide.type){
    case "intro":html=renderIntro();break;
    case "theory":html=renderTheory(slide.index);break;
    case "notes":html=renderNote(slide.index);break;
    case "level":html=renderLevel(slide.index);break;
    case "game":html=renderGame(slide.index);break;
    case "homework":html=renderHomework();break;
    case "finish":html=renderFinish();break;
  }

  if(window.MathJax?.typesetClear){
    MathJax.typesetClear([$("content")]);
  }

  $("content").innerHTML=html;
  $("content").scrollTop=0;

  $("pageCounter").textContent=
    `${page+1} / ${slides.length}`;

  $("pageTitle").textContent=slide.name;

  $("pageProgress").style.width=
    ((page+1)/slides.length*100)+"%";

  $("totalScore").textContent=
    individualScore+teamScores.reduce((a,b)=>a+b,0);

  $("prevPage").disabled=page===0;
  $("nextPage").disabled=page===slides.length-1;

  document.querySelectorAll("[data-section]").forEach(button=>{
    button.classList.toggle(
      "active",
      button.dataset.section===slide.type
    );
  });

  refreshMath();
}

// =====================================
// НАВИГАЦИЯ
// =====================================

function nextPage(){
  if(page<slides.length-1){
    page++;
    render();
  }
}

function prevPage(){
  if(page>0){
    page--;
    render();
  }
}

function jumpTo(type){
  const index=slides.findIndex(s=>s.type===type);
  if(index>=0){
    page=index;
    render();
  }
}

$("nextPage").onclick=nextPage;
$("prevPage").onclick=prevPage;

document.querySelectorAll("[data-section]").forEach(button=>{
  button.onclick=()=>{
    jumpTo(button.dataset.section);
  };
});

// =====================================
// ЖАУАПТАР МЕН ШЕШУ ЖОЛДАРЫ
// =====================================

$("content").addEventListener("click",event=>{
  const toggle=event.target.closest("[data-toggle]");

  if(toggle){
    const block=$(toggle.dataset.toggle);
    if(block){
      block.hidden=!block.hidden;
      refreshMath();
    }
    return;
  }

  const check=event.target.closest("[data-check]");

  if(check){
    checkLevel(check.dataset.check);
    return;
  }

  const choice=event.target.closest("[data-choice]");

  if(choice){
    answerGame(Number(choice.dataset.choice));
  }
});

function checkLevel(key){
  if(solved.has(key))return;

  const [i,j]=key.split("_").map(Number);
  const item=levels[i].items[j];
  const level=levels[i];

  const input=$("input_"+key);
  const feedback=$("feedback_"+key);

  if(!input.value.trim()){
    feedback.textContent="Жауапты енгізіңдер.";
    return;
  }

  let result;

  try{
    result=calculate(input.value);
  }catch(error){
    feedback.textContent=
      "Сан немесе бөлшек түрінде жазыңдар.";
    return;
  }

  const expected=item[1];

  const tolerance=
    0.00001*Math.max(1,Math.abs(expected));

  if(Math.abs(result-expected)<=tolerance){
    solved.add(key);
    individualScore+=level.points;

    input.disabled=true;

    const button=document.querySelector(
      `[data-check="${key}"]`
    );

    if(button){
      button.disabled=true;
      button.textContent="✓ Дұрыс";
    }

    feedback.textContent=
      `✓ Дұрыс! +${level.points} ұпай`;

    feedback.classList.add("success");

    $("totalScore").textContent=
      individualScore+
      teamScores.reduce((a,b)=>a+b,0);
  }else{
    feedback.textContent=
      "Жауап қате. Қайта есептеп көріңдер.";
  }
}

function answerGame(choice){
  const slide=slides[page];

  if(slide.type!=="game")return;
  if(gameAnswers.has(slide.index))return;

  gameAnswers.set(slide.index,choice);

  if(choice===quiz[slide.index].correct){
    teamScores[slide.index%3]+=10;
  }

  render();
}

$("resetGame").onclick=()=>{
  teamScores=[0,0,0];
  gameAnswers.clear();
  render();
};

// =====================================
// ТОЛЫҚ ЭКРАН
// =====================================

$("fullscreenBtn").onclick=async()=>{
  try{
    if(document.fullscreenElement){
      await document.exitFullscreen();
    }else{
      await document.documentElement.requestFullscreen();
    }
  }catch(error){
    console.warn(error);
  }
};

// =====================================
// САҒАТ ЖӘНЕ 80 МИНУТТЫҚ ТАЙМЕР
// =====================================

function formatTime(s){
  return String(Math.floor(s/60)).padStart(2,"0")+
    ":"+String(s%60).padStart(2,"0");
}

function updateTimer(){
  $("remaining").textContent=formatTime(secondsLeft);
  $("elapsed").textContent=formatTime(4800-secondsLeft);
  $("timeProgress").style.width=
    ((4800-secondsLeft)/4800*100)+"%";
}

function startTimer(){
  if(timerID!==null||secondsLeft<=0)return;

  timerEndAt=Date.now()+secondsLeft*1000;

  timerID=setInterval(()=>{
    secondsLeft=Math.max(
      0,
      Math.ceil((timerEndAt-Date.now())/1000)
    );

    updateTimer();

    if(secondsLeft===0)pauseTimer();
  },250);
}

function pauseTimer(){
  if(timerID!==null)clearInterval(timerID);
  timerID=null;
}

function resetTimer(){
  pauseTimer();
  secondsLeft=4800;
  updateTimer();
}

$("timerStart").onclick=startTimer;
$("timerPause").onclick=pauseTimer;
$("timerReset").onclick=resetTimer;

function updateClock(){
  $("clock").textContent=
    new Intl.DateTimeFormat("kk-KZ",{
      timeZone:"Asia/Almaty",
      hour:"2-digit",
      minute:"2-digit",
      second:"2-digit",
      hour12:false
    }).format(new Date());
}

updateClock();
setInterval(updateClock,1000);

// =====================================
// ЕКІ КАЛЬКУЛЯТОР
// =====================================

const calcValues={basic:"",science:""};

const calcKeys={
  basic:[
    "C","⌫","(",")",
    "7","8","9","÷",
    "4","5","6","×",
    "1","2","3","−",
    "%","0",".","+",
    "="
  ],
  science:[
    "C","⌫","(",")",
    "sin","cos","tg","ctg",
    "√","∛","x²","xʸ",
    "log","ln","π","e",
    "7","8","9","÷",
    "4","5","6","×",
    "1","2","3","−",
    "%","0",".","+",
    "="
  ]
};

const calcMap={
  "×":"*","÷":"/","−":"-",
  "sin":"sin(","cos":"cos(",
  "tg":"tan(","ctg":"ctg(",
  "√":"sqrt(","∛":"cbrt(",
  "log":"log(","ln":"ln(",
  "π":"pi","x²":"^2","xʸ":"^"
};

function createCalculator(type){
  const grid=$("keys-"+type);

  calcKeys[type].forEach(key=>{
    const button=document.createElement("button");
    button.type="button";
    button.textContent=key;

    if(key==="C")button.classList.add("clear");
    if(key==="=")button.classList.add("equal");

    if(["sin","cos","tg","ctg","log","ln"].includes(key)){
      button.classList.add("trig");
    }

    if(["+","−","×","÷","√","∛","x²","xʸ"].includes(key)){
      button.classList.add("op");
    }

    button.addEventListener("click",()=>{
      pressCalculator(type,key);
    });

    grid.appendChild(button);
  });
}

function pressCalculator(type,key){
  let value=calcValues[type];

  if(key==="C"){
    value="";
  }else if(key==="⌫"){
    value=value.slice(0,-1);
  }else if(key==="="){
    try{
      const answer=calculate(value);
      value=String(Number(answer.toPrecision(12)));
    }catch(error){
      value="Қате";
    }
  }else{
    if(value==="Қате")value="";
    value+=calcMap[key]??key;
  }

  calcValues[type]=value;

  const display=$("display-"+type);
  display.textContent=value||"0";
  display.scrollLeft=display.scrollWidth;
}

// =====================================
// ЕСЕПТЕУ ЖҮЙЕСІ
// =====================================

// sin, cos, tg, ctg — градуспен.
// eval() қолданылмайды.

function calculate(input){
  const source=String(input)
    .replace(/\s+/g,"")
    .replace(/,/g,".");

  let pos=0;
  const rad=x=>x*Math.PI/180;

  const functions={
    sin:x=>Math.sin(rad(x)),
    cos:x=>Math.cos(rad(x)),

    tan:x=>{
      const c=Math.cos(rad(x));
      if(Math.abs(c)<1e-12){
        throw Error("Тангенс анықталмаған");
      }
      return Math.tan(rad(x));
    },

    ctg:x=>{
      const s=Math.sin(rad(x));
      if(Math.abs(s)<1e-12){
        throw Error("Котангенс анықталмаған");
      }
      return Math.cos(rad(x))/s;
    },

    sqrt:Math.sqrt,
    cbrt:Math.cbrt,
    log:Math.log10,
    ln:Math.log
  };

  function take(ch){
    if(source[pos]===ch){
      pos++;
      return true;
    }
    return false;
  }

  function atom(){
    if(take("(")){
      const value=expression();

      if(!take(")")){
        throw Error("Жақша жабылмаған");
      }

      return value;
    }

    const rest=source.slice(pos);
    const match=rest.match(
      /^(?:\d+\.?\d*|\.\d+)/
    );

    if(match){
      pos+=match[0].length;
      return Number(match[0]);
    }

    if(rest.startsWith("pi")){
      pos+=2;
      return Math.PI;
    }

    if(rest.startsWith("e")){
      pos++;
      return Math.E;
    }

    for(const name of Object.keys(functions)){
      if(rest.startsWith(name+"(")){
        pos+=name.length+1;

        const v=expression();

        if(!take(")")){
          throw Error("Жақша жабылмаған");
        }

        return functions[name](v);
      }
    }

    throw Error("Дұрыс емес өрнек");
  }

  function postfix(){
    let value=atom();

    while(take("%")){
      value/=100;
    }

    return value;
  }

  function power(){
    let value=postfix();

    if(take("^")){
      value=Math.pow(value,unary());
    }

    return value;
  }

  function unary(){
    if(take("+"))return unary();
    if(take("-"))return -unary();
    return power();
  }

  function term(){
    let value=unary();

    while(true){
      if(take("*")){
        value*=unary();
      }else if(take("/")){
        const d=unary();
        if(d===0)throw Error("Нөлге бөлуге болмайды");
        value/=d;
      }else{
        break;
      }
    }

    return value;
  }

  function expression(){
    let value=term();

    while(true){
      if(take("+")){
        value+=term();
      }else if(take("-")){
        value-=term();
      }else{
        break;
      }
    }

    return value;
  }

  if(!source){
    throw Error("Бос өрнек");
  }

  const result=expression();

  if(
    pos!==source.length ||
    !Number.isFinite(result)
  ){
    throw Error("Есептеу қатесі");
  }

  return Math.abs(result)<1e-12?0:result;
}

// =====================================
// КАЛЬКУЛЯТОР АШУ
// =====================================

function toggleCalculator(type){
  const element=$("calc-"+type);
  const other=type==="basic"?"science":"basic";
  const opening=!element.classList.contains("visible");

  $("calc-"+other).classList.remove("visible");
  element.classList.toggle("visible",opening);

  if(opening){
    const rect=element.getBoundingClientRect();
    const maxX=Math.max(0,innerWidth-element.offsetWidth);
    const maxY=Math.max(0,innerHeight-element.offsetHeight);

    element.style.left=
      Math.max(0,Math.min(maxX,rect.left))+"px";

    element.style.top=
      Math.max(0,Math.min(maxY,rect.top))+"px";
  }
}

$("basicLaunch").onclick=()=>{
  toggleCalculator("basic");
};

$("scienceLaunch").onclick=()=>{
  toggleCalculator("science");
};

document.querySelectorAll("[data-close]").forEach(button=>{
  button.onclick=()=>{
    $("calc-"+button.dataset.close)
      .classList.remove("visible");
  };
});

// =====================================
// ТАҚЫРЫПШАСЫНАН ҰСТАП ЖЫЛЖЫТУ
// =====================================

function makeDraggable(element){
  const handle=element.querySelector(".calc-head");
  let drag=null;

  handle.addEventListener("pointerdown",event=>{
    if(event.target.closest("button"))return;

    if(
      event.pointerType==="mouse" &&
      event.button!==0
    )return;

    const rect=element.getBoundingClientRect();

    drag={
      id:event.pointerId,
      x:event.clientX,
      y:event.clientY,
      left:rect.left,
      top:rect.top
    };

    handle.setPointerCapture(event.pointerId);
  });

  handle.addEventListener("pointermove",event=>{
    if(!drag||event.pointerId!==drag.id)return;

    const dx=event.clientX-drag.x;
    const dy=event.clientY-drag.y;

    const maxX=Math.max(
      0,innerWidth-element.offsetWidth
    );

    const maxY=Math.max(
      0,innerHeight-element.offsetHeight
    );

    element.style.left=Math.max(
      0,Math.min(maxX,drag.left+dx)
    )+"px";

    element.style.top=Math.max(
      0,Math.min(maxY,drag.top+dy)
    )+"px";
  });

  handle.addEventListener("pointerup",()=>{
    drag=null;
  });

  handle.addEventListener("pointercancel",()=>{
    drag=null;
  });
}

// =====================================
// ІСКЕ ҚОСУ
// =====================================

createCalculator("basic");
createCalculator("science");

makeDraggable($("calc-basic"));
makeDraggable($("calc-science"));

updateTimer();
render();
