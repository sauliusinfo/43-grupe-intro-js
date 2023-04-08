console.clear();
console.log(':: Funkcijos ::');

// Parašyti funkcijas, kurios atitinka pateiktus reikalavimus, jei įvykdo reikiamus testus
// 1. Funkcija pavadinimu “tusciaFunkcija”:
//      a. nepriima jokių kintamųjų
//      b. neatlieka jokios vidinės logikos
//      c. gražina boolean tipo reikšmę “false”
//      d. TESTAS:
//          i. console.log( tusciaFunkcija() );
//         ii. rezultatas: false
console.log('-- 1.a.b.c.d. --');
function tusciaFunkcija() {
    return false;
}
console.log(tusciaFunkcija());

// 2. Funkcija pavadinimu “daugyba”:
//      a. priima du skaičiaus tipo kintamuosius
//      b. atskirame kintamajame įsimena sandaugos reikšmę
//      c. gražina sandaugos rezultatą
//      d. TESTAI:
//          i. console.log( daugyba( skaicius1, skaicius2 ) );
//         ii. console.log( daugyba( skaicius3, skaicius2 ) );
//        iii. console.log( daugyba( skaicius1, skaicius3 ) );
//         iv. rezultatas: teisingos reikšmės;
console.log('-- 2.a.b.c.d. --');
const x1 =0; const x2 =0;
let res =0;
function daugyba(x1, x2) {
    res = x1 * x2;
    return res;
}
const skaicius1 =5;
const skaicius2 =10;
const skaicius3 =15;
console.log(daugyba(skaicius1, skaicius2));
console.log(daugyba(skaicius3, skaicius2));
console.log(daugyba(skaicius1, skaicius3));

// 3. Funkcija pavadinimu “skaitmenuKiekisSkaiciuje”:
//      a. priima vieną kintamąjį
//      b. jei perduotas kintamasis nėra skaičiaus tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
//      c. priešingu atveju, funkcija tęsia darbą
//      d. į atskirą kintamąjį įsimena skaičių sudarančių skaitmenų kiekį
//      e. gražina skaitmenų kiekį
//      f. TESTAI:
//          i. console.log( skaitmenuKiekisSkaiciuje( 5 ) );
//              rezultatas: 1
//         ii. console.log( skaitmenuKiekisSkaiciuje( 781 ) );
//              rezultatas: 3
//        iii. console.log( skaitmenuKiekisSkaiciuje( 37060123456 ) );
//              rezultatas: 11
//         iv. console.log( skaitmenuKiekisSkaiciuje( true ) );
//              rezultatas: “Pateikta netinkamo tipo reikšmė.”
//          v. console.log( skaitmenuKiekisSkaiciuje( “asd” ) );
//              rezultatas: “Pateikta netinkamo tipo reikšmė.”
//         vi. console.log( skaitmenuKiekisSkaiciuje( NaN ) );
//              rezultatas: “Pateikta netinkamo tipo reikšmė.”
console.log('-- 3.a.b.c.d.e.f. --');
let a =0;
let g =0;
function skaitmenuKiekisSkaiciuje(a) {
    if (typeof a !== 'number' || isNaN(a)) {
        g = `Pateikta netinkamo tipo reikšmė.`;
    } else {
        g = a.toString().length;
        
    }
    return g;
}
console.log(skaitmenuKiekisSkaiciuje(5));
console.log(skaitmenuKiekisSkaiciuje(781));
console.log(skaitmenuKiekisSkaiciuje(37060123456));
console.log(skaitmenuKiekisSkaiciuje(true));
console.log(skaitmenuKiekisSkaiciuje("asd"));
console.log(skaitmenuKiekisSkaiciuje(NaN));

// 4. 