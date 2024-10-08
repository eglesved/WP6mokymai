let Age =18;
if (Age < 18) {
    console.log("Balsuoti neleidžiama");
} else {
    console.log ("Balsuoti gali");
}

let age =18;
let isCitizen = true;
let dayOfResidence =30;

if (age >=18 && isCitizen && dayOfResidence >=30) {
    console.log ("Balsuoti galima");
} else if (!isCitizen) {
    console.log ("balsuoti negalima")
} else if (dayOfResidence <30) {
    console.log ("balsuoti negalima")
}


