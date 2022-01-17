const caesarCipher = {
  encode: function (str, shift) {
    return str
      .split('')
      .map((letter) => {
        const charCode = letter.charCodeAt(0);
        let offset;

        if (
          charCode < 65 ||
          charCode > 122 ||
          (charCode > 90 && charCode < 97)
        ) {
          return letter;
        }

        if (charCode >= 65 && charCode <= 90) {
          offset = 65;
        }
        if (charCode >= 97 && charCode <= 122) {
          offset = 97;
        }

        const index = charCode - offset;
        const shifted = (index + shift) % 26;
        const newCode = shifted + offset;

        return String.fromCharCode(newCode);
      })
      .join('');
  },
  decode: function (str, shift) {
    return str
      .split('')
      .map((letter) => {
        const charCode = letter.charCodeAt(0);
        let offset;

        if (
          charCode < 65 ||
          charCode > 122 ||
          (charCode > 90 && charCode < 97)
        ) {
          return letter;
        }

        if (charCode >= 65 && charCode <= 90) {
          offset = 65;
        }
        if (charCode >= 97 && charCode <= 122) {
          offset = 97;
        }

        const index = charCode - offset;
        const shifted = index - shift < 0 ? index - shift + 26 : index - shift;
        const newCode = shifted + offset;

        return String.fromCharCode(newCode);
      })
      .join('');
  },
};

export { caesarCipher };
