///Функция для проверки длины строки

const stringLength = (checkString, maxLength) => maxLength >= checkString.length;

stringLength('проверяемая строка', 20);
stringLength('проверяемая строка', 18);
stringLength('проверяемая строка', 10);

///Функция для проверки, является ли строка палиндромом

const isPalindrome = (string) => {
  const getString = string.replaceAll(' ','').toUpperCase();
  let newString = '';
  for (let i = getString.length-1; i >= 0; i--) {
    newString += getString[i];
  }
  return newString === getString;
};
isPalindrome('топот');
isPalindrome('ДовОд');
isPalindrome('Кекс');

const convertToMinutes = (time) => {
  const [hours, minutes] = time.split(':');
  return parseInt(hours, 10) * 60 + parseInt(minutes, 10);
};

const workTime = (startWork, endWork, startMeeting,lasting) => {
  const startMinutes = convertToMinutes(startWork);
  const endMinutes = convertToMinutes(endWork);
  const meetingEnd = startMeeting + lasting;
  if (startMeeting >= startMinutes && meetingEnd <= endMinutes) {
    return true;
  } else {
    return false;
  }
};

workTime('8:00', '17:00', 600, 120);
workTime('9:00', '13:30', 800, 180);

