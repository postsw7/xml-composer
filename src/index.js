/*
composer function receives a data structure describing styled texts and returns an XML of the parsed string.

[{ char: 't', style: { BOLD: false, ITALIC: false } }] => <p>t</p>
[{ char: 'b', style: { BOLD: true, ITALIC: false } }] => <p><b>b</b></p>
[{ char: 'i', style: { BOLD: false, ITALIC: true } }] => <p><i>i</i></p>

For further examples, please check basic_spec.js file.

DO NOT MODIFY
*/

/*
type style = {
  BOLD: boolean;
  ITALIC: boolean;
};

interface styledChar {
  char: string; // single character
  style: style;
};

type styledString = styledChar[];
*/

/*
@param styledString: an array of nested js objects that contains information about characters and their styles
@return xmlString: string;
*/


module.exports = function (styledString) {
  // WARNING: Do not use string.replace or regex operations.
  if (!styledString || !styledString.length) {
    return '<p></p>';
  }

  var strings = '<p>';
  var isBoldOpen = false;
  var isItalicOpen = false;

  for (var i = 0; i < styledString.length; i++) {
    var char = styledString[i].char;
    var styleB = styledString[i].style.BOLD;
    var styleI = styledString[i].style.ITALIC;
    if (styleB && styleI) {
      if (isBoldOpen && isItalicOpen) {
        strings += char;
      } else if (!isBoldOpen && !isItalicOpen) {
        strings += `<b><i>${char}`;
      } else if (!isBoldOpen && isItalicOpen) {
        strings += `<b>${char}`;
      } else if (isBoldOpen && !isItalicOpen) {
        strings += `<i>${char}`;
      }

      isBoldOpen = true;
      isItalicOpen = true;

    } else if (!styleB && styleI) {
      if (isBoldOpen && isItalicOpen) {
        if (strings.lastIndexOf('<i>') > strings.lastIndexOf('<b>')) {
          strings += `</i></b><i>${char}`;
        } else {
          strings += `</b>${char}`;
        }
      } else if (!isBoldOpen && isItalicOpen) {
        strings += char;
      } else if (isBoldOpen && !isItalicOpen) {
        strings += `</b><i>${char}`;
      } else if (!isBoldOpen && !isItalicOpen) {
        strings += `<i>${char}`;
      }

      isBoldOpen = false;
      isItalicOpen = true;

    } else if (styleB && !styleI) {
      if (isBoldOpen && !isItalicOpen) {
        strings += char;
      } else if (!isBoldOpen && isItalicOpen) {
        strings += `</i><b>${char}`;
      } else if (!isBoldOpen && !isItalicOpen) {
        strings += `<b>${char}`;
      } else if (isBoldOpen && isItalicOpen) {
        if (strings.lastIndexOf('<b>') > strings.lastIndexOf('<i>')) {
          strings += `</b></i><b>${char}`;
        } else {
          strings += `</i>${char}`;
        }
      }

      isBoldOpen = true;
      isItalicOpen = false;

    } else if (!styleB && !styleI) {
      if (!isBoldOpen && !isItalicOpen) {
        strings += char;
      } else if (!isBoldOpen && isItalicOpen) {
        strings += `</i>${char}`;
      } else if (isBoldOpen && !isItalicOpen) {
        strings += `</b>${char}`;
      } else if (isBoldOpen && isItalicOpen) {
        if (strings.lastIndexOf('<b>') > strings.lastIndexOf('<i>')) {
          strings += `</b></i>${char}`;
        } else {
          strings += `</i></b>${char}`;
        }
      }

      isBoldOpen = false;
      isItalicOpen = false;

    }

    if (i === styledString.length - 1) {
      if (isBoldOpen && isItalicOpen) {
        strings += '</i></b>';
      } else if (isBoldOpen && !isItalicOpen) {
        strings += '</b>';
      } else if (!isBoldOpen && isItalicOpen) {
        strings += '</i>';
      }
    }
  }
  return `${strings}</p>`; // FILL ME
}
