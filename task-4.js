// task-4.js
const credits = 23580;
const pricePerDroid = 3000;

const droidsToBuy = prompt("Скільки ремонтних дроїдів ви хочете купити?");

if (droidsToBuy === null) {
  console.log("Скасовано користувачем!");
} else {
  const numberOfDroids = Number(droidsToBuy);
  const totalPrice = numberOfDroids * pricePerDroid;

  if (totalPrice > credits) {
    console.log("Недостатньо коштів на рахунку!");
  } else {
    const remainingCredits = credits - totalPrice;
    console.log(
      `Ви купили ${numberOfDroids} дроїдів, на рахунку залишилося ${remainingCredits} кредитів.`
    );
  }
}