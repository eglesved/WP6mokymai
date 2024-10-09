let age = 30;
let bmi = 25;
let smokes = false;

let riskLevel;
let advice;

if (age <30 && bmi<25 && !smokes) {
    riskLevel = "Maža rizika";
    advice = "Esi sveikas.Palaikyk fizinį krūvį ir sveikai maitinkis";
} else if ((age >= 30 && age <= 50) && (bmi >=25 && bmi <30) &&!smokes) {
    riskLevel = "Vidutinė rizika";
    advice = "Reikėtų valgyti mažiau angliavandenių, daugiau sportuoti, gerti daugiau vandens ir daugiau fiziškai judėti.";
} else if ((age > 50 || bmi >= 30 || smokes) && !(age > 50 && bmi >= 30 && smokes)) {
    riskLevel = "Didelė rizika";
    advice = "Vengti cukraus, mažinti angliavandenius, mesti rūkyti";
} else if (age > 50 && bmi >=25 && smokes) {
    riskLevel = "Labai didelė rizika";
    advice = "Kreiptis į šeimos gydytoją ir dietologą, kad sudarytų mitybos planą, sportuoti.";
}
console.log("Age:", age);
    console.log("BMI:", bmi);
    console.log("Smokes:", smokes);
    console.log("Health Risk Level:", riskLevel);
    console.log("Advice:", advice);
