//1. console.log’e, naudojant ciklą atspausdinti penkias eilutes ‘Labas’;

 /*for(let i = 0; i < 5; i++) {
    console.log("Labas");
}*/
   
//2.console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 1 2 3 4 (vienas skaičius vienoje eilutėje);

/* for(let i = 0; i < 5; i++) {
  console.log(i);
}*/

//3. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 10 20 30 40 (vienas skaičius vienoje eilutėje);

/*for(let i = 0; i < 50; i+=10) {
    console.log(i);
}*/

//4. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 49 50 51 52 53 (vienas skaičius vienoje eilutėje);

/*for(let i = 49; i < 54; i+=1) {
    console.log(i);
}*/

//5. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 4 3 2 1 0 (vienas skaičius vienoje eilutėje);

/*for(let i = 4; i >= 0; i--) {
    console.log(i);
}*/

//6. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 2 4 6 8 (vienas skaičius vienoje eilutėje, 
//daugybos konsolėje nenaudoti!, if’ų nenaudoti, ciklas for);

/*for(let i = 0; i < 9; i+=2){
    console.log(i);
}*/

//7. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje);

/*for(let i = 0 ; i < 5; i++) {
    console.log(Math.random() * 11);
}*/

//8. console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). 
//Paskutinis atspausdintas skaičius turi būti 5;

/*let random;
while (random != 5) {
    random = Math.floor(Math.random() * 11);
    console.log(random);
}*/

//9. console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). 
//Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 100;

/*let suma = 0;

while (suma <= 100) {
    let random = Math.floor(Math.random() * 11);
    console.log('Atsitiktinis skaicius: ', random);
    suma += random;
    console.log('Suma: ', suma);
}*/

//10. console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). 
//Paskutinis atspausdintas skaičius turi būti 5 arba 7; Suskaičiuoti kiek ciklų prasisuko;

/*let ciklas = 0;
let random;
while (random != 5 && random != 7) {
    random = Math.floor(Math.random() * 11);
    console.log(random);
    ciklas++;
}
console.log('Ciklų kiekis: ', ciklas);*/

//11. console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). 
//Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 20, bet ne anksčiau nei po 11 ciklų;

//12. console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). 
//Ciklą kartoti kol bus sugeneruoti trys nelyginiai skaičiai;

//13. console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). 
//Ciklą kartoti tol, kol neiškris abu vienodi skaičiai;

//14. console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). 
//Skaičiuoti abiejų skaičių sumas skirtinguose kintamuosiuose (skaičiuoti skaičių stulpelių sumas). Ciklą kartoti tol, kol kiekviena iš sumų bus daugiau nei 100;

//15. console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). 
//Ciklą kartoti kol bus sugeneruota po tris arba daugiau nelyginių skaičių  (skaičiai atskiruose stulpeliuose).