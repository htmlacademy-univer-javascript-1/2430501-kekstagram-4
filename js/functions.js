///Функция для проверки длины строки

const stringLength = function(checkString, maxLength) {
  if (maxLength <= checkString.length) {
    return true;
  }
  return false;
};
stringLength('проверяемая строка', 20);
stringLength('проверяемая строка', 18);
stringLength('проверяемая строка', 10);

///Функция для проверки, является ли строка палиндромом

const isPalindrome = function(string) {
  const getString = string.replaceAll().toUpperCase();
  let newString = '';
  for(let i = getString.length-1; i > 0; i--) {
    newString += getString[-1];
  }
  return newString === getString;
};
isPalindrome('топот');
isPalindrome('ДовОд');
isPalindrome('Кекс');

