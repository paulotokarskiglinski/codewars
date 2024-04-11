/*
* Calculate BMI
* https://www.codewars.com/kata/57a429e253ba3381850000fb
*/

export const bmi = (weight: number, height: number): string => {
  const value = weight / (height * height);
  
  if (value <= 18.5) {
    return 'Underweight';
  } else if (value <= 25.0) {
    return 'Normal';
  } else if (value <= 30.0) {
    return 'Overweight';
  } else {
    return 'Obese';
  }
}
