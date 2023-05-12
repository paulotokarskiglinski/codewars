/*
* The highest profit wins!
* https://www.codewars.com/kata/559590633066759614000063
*
* Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.
*/

const minMax = (arr: number[]): number[] => [Math.min(...arr), Math.max(...arr)];