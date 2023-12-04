function getShippingMessage(country, price, deliveryFee) {
  var totalPrice = price + deliveryFee;

  var message = `Shipping to ${country} will cost ${totalPrice} credits`;

  return message;
}
var message1 = getShippingMessage("Australia", 120, 50);
var message2 = getShippingMessage("Germany", 80, 20);
var message3 = getShippingMessage("Sweden", 100, 20);

console.log(message1);
console.log(message2);
console.log(message3);
