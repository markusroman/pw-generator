export const generatePassword = (length, { capitals, numbers, symbols }) => {
  let all_chars = 'qwertyuiopasdfghjklzxcvbnm';
  if (capitals) all_chars += 'QWERTYUIOPASDFGHJKLZXCVBNM';
  if (symbols) all_chars += "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  if (numbers) all_chars += '0123456789';

  let password = '';
  for (let i = 0; i < length; i++) {
    const char = all_chars.charAt(Math.floor(Math.random() * all_chars.length));
    password += char;
  }

  return password;
};
