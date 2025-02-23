// task-5.js
const country = prompt("Вкажіть країну доставки");
let price;
let message;

if (country) {
  let normalizedCountry = country.toLowerCase();

  switch (normalizedCountry) {
    case "китай":
      price = 100;
      normalizedCountry = "Китай";
      break;
    case "чилі":
      price = 250;
      normalizedCountry = "Чили";
      break;
    case "австралія":
      price = 170;
      normalizedCountry = "Австралія";
      break;
    case "індія":
      price = 80;
      normalizedCountry = "Індія";
      break;
    case "ямайка":
      price = 120;
      normalizedCountry = "Ямайка";
      break;
    default:
      alert("У вашій країні доставка недоступна");
      price = null;
  }

  if (price !== null) {
    message = `Доставка в ${normalizedCountry} буде коштувати ${price} кредитів`;
    console.log(message);
  }
}