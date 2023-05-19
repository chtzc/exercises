const fortune = {
    children: 2,
    partnersName: "Felicity",
    location: "Dallas",
    jobTitle: "Engineer"
}

console.log(`You will be a ${fortune.jobTitle} in ${fortune.location}, and married to ${fortune.partnersName} with ${fortune.children} kids.`)

//Age

function age(birth,year){
    let deduc = year-birth;
    console.log(`you will be either ${deduc} or ${++deduc} in ${year}`)
}

age(1994,2026)

/**
 * ## The Lifetime Supply Calculator
Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

- Store your current age into a variable.
- Store a maximum age into a variable.
- Store an estimated amount per day (as a number).
- Calculate how many you would eat total for the rest of your life.
- Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".
 */

function favSnack(age,maxage,perday){
    let total = (maxage-age)*365*perday;
    console.log(`You will need ${total} to last you until the ripe old age of ${maxage}`)
}
favSnack(32,85,3)

// ## The Geometrizer
// Calculate properties of a circle, using the definitions here.

// - Store a radius into a variable.
// - Calculate the circumference based on the radius, and output "The circumference is NN".
// - Calculate the area based on the radius, and output "The area is NN".

function circle(radius){
    console.log(`The circumreference is ${2*radius*Math.PI}`)
    console.log(`The circumreference is ${radius*radius*Math.PI}`)

}
circle(5)

// ## The Temperature Converter
// - It's hot out! Let's make a converter based on the steps here.

// - Store a celsius temperature into a variable.
// - Convert it to fahrenheit and output "NN°C is NN°F".
// - Now store a fahrenheit temperature into a variable.
// - Convert it to celsius and output "NN°F is NN°C."

function celciustofh(celcius){
 console.log(`${celcius} is ${celcius*1.8+32}`)
}
function fhtocelcius(fh){
    console.log(`${fh} is ${(fh-32)*5/9}`)

}
celciustofh(30)
fhtocelcius(72)