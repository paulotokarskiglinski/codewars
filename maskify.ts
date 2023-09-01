/**
 * Credit Card Mask
 * https://www.codewars.com/kata/5412509bd436bd33920011bc
 * 
 * Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
 * Your task is to write a function maskify, which changes all but the last four characters into '#'. 
 */

export const maskify = (cc: string): string => cc.length <= 4 ? cc : '#'.repeat(cc.length - 4) + cc.slice(cc.length - 4);
