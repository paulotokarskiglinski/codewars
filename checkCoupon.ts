/*
* The Coupon Code
* https://www.codewars.com/kata/539de388a540db7fec000642
* 
* Story
* Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.
*
* Task
* Your mission:
* Write a function called checkCoupon which verifies that a coupon code is valid and not expired.
*
* A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".
*/

export const checkCoupon = (enteredCode: string, correctCode: string, currentDate: string, expirationDate: string): boolean => {
  return enteredCode === correctCode && new Date(currentDate) <= new Date(expirationDate);
}
