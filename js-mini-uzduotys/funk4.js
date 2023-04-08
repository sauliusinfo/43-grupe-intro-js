console.clear();
console.log(':: Funkcijos ::');

// 4. Funkcija pavadinimu “didziausiasSkaiciusSarase”:
//      a. priima vieną kintamąjį
//      b. jei perduotas kintamasis nėra sąrašo tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
//      c. jei sąrašas yra tuščias, tai išveda pranešimą “Pateiktas sąrašas negali būti tuščias.”
//      d. priešingu atveju, funkcija tęsia darbą
//      e. pereina per visą pateiktą sąrašą ir į atskirą kintamąjį įsimena skaičių, kuris tuo metu yra didžiausias
//      f. gražina didžiausią surastą skaičių
//      g. TESTAI:
//          i. console.log( didziausiasSkaiciusSarase( [ 1 ] ) );
//              1. rezultatas: 1
//         ii. console.log( didziausiasSkaiciusSarase( [ 1, 2, 3 ] ) );
//              1. rezultatas: 3
//        iii. console.log( didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] ) );
//              1. rezultatas: 78
//         iv. console.log( didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ] ) );
//              1. rezultatas: 69
//          v. console.log( didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ) );
//              1. rezultatas: -1
//         vi. console.log( didziausiasSkaiciusSarase( “pomidoras” ) );
//              1. rezultatas: “Pateikta netinkamo tipo reikšmė.”
//        vii. console.log( didziausiasSkaiciusSarase( [] ) );
//              1. rezultatas: “Pateiktas sąrašas negali būti tuščias.”
console.log('-- 4.a.b.c.d.e.f.g. --');
