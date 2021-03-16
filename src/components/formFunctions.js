import axios from 'axios';

export const phoneCheck = (e, setPhone, setPhoneErr) => {
  setPhoneErr(false);
  // REGEX:
    // ^ means the start of the string must begin with characters 0 - 9
    // [0-9() -] means only characters between 0-9, parenths, spaces, and dashes
    // {0,10} means the string must be between 0-10 characters long
    // $ means the end of the string
  if (/^[0-9() -]{0,14}$/.test(e)) {
    const str = e.replace(/[^0-9]/g, '');
    // REGEX:
      // Replace the character at 0 with '(' followed by the character at 0
      // Replace the following 3rd character with ') ' followed by the character at 3
      // Replace the following 3rd character with '-' and the char at that position
    let rep = str.replace(/^(.{0})/, '$1(')
    // Add more characters to the string as the length increases
    rep = str.length < 7 && str.length > 3 ?
      str.replace(/^(.{0})(.{3})/, '$1($2) ') :
      str.replace(/^(.{0})(.{3})(.{3})/, '$1($2) $3-')
    setPhone(rep);
  } else if (e.length < 15) {
    setPhoneErr(true);
  }
};