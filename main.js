let raceNumber = Math.floor(Math.random() * 1000);
let early = false;
let age = 18;

if(early && age > 18){
  raceNumber += 1000;
}
if(early && age > 18){
  console.log(`Your race will begin at 9.30am. Your race number is: ${raceNumber}.`);
} 
else if(!early && age >18){
  console.log(`Your race will begin at 11.00am. Your race number is: ${raceNumber}.`);
} 
else if(age < 18){
  console.log(`Your race will begin at 12.30pm. Your race number is ${raceNumber}.`);
}
else if(age=18){
  console.log('Please see the registration desk.')
}