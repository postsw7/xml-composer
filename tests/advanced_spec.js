// TODO: Add tests that you find necessary.
const composer = require('../src');

describe('advanced composer test', () => {
  it('should return a proper paragraph with mixed text 3', () => {
    expect(composer([
      { char: 'i', style: { BOLD: false, ITALIC: true } },
      { char: 'b', style: { BOLD: true, ITALIC: true } },
      { char: 'i', style: { BOLD: false, ITALIC: true } },
    ])).toEqual('<p><i>i<b>b</b>i</i></p>');
  });

  it('should return a proper paragraph with mixed text 4', () => {
    expect(composer([
      { char: 'b', style: { BOLD: true, ITALIC: false } },
      { char: 'i', style: { BOLD: true, ITALIC: true } },
      { char: 'i', style: { BOLD: false, ITALIC: true } },
      { char: 'b', style: { BOLD: true, ITALIC: false } },
    ])).toEqual('<p><b>b<i>i</i></b><i>i</i><b>b</b></p>');
  });

  it('should return a proper paragraph with mixed text 4', () => {
    expect(composer([
      { char: 'i', style: { BOLD: false, ITALIC: true } },
      { char: 'b', style: { BOLD: true, ITALIC: false } },
      { char: 'i', style: { BOLD: false, ITALIC: true } },
      { char: 'b', style: { BOLD: true, ITALIC: false } },
    ])).toEqual('<p><i>i</i><b>b</b><i>i</i><b>b</b></p>');
  });

  it('should return a proper paragraph with mixed text 5', () => {
    expect(composer([
      { char: 'i', style: { BOLD: false, ITALIC: true } },
      { char: 'b', style: { BOLD: true, ITALIC: false } },
      { char: 'i', style: { BOLD: false, ITALIC: true } },
      { char: 'i', style: { BOLD: true, ITALIC: true } },
      { char: 'b', style: { BOLD: true, ITALIC: false } },
    ])).toEqual('<p><i>i</i><b>b</b><i>i<b>i</b></i><b>b</b></p>');
  });

  it('should return a proper paragraph with mixed text 5', () => {
    expect(composer([
      { char: 'i', style: { BOLD: false, ITALIC: true } },
      { char: 'b', style: { BOLD: true, ITALIC: true } },
      { char: 'i', style: { BOLD: false, ITALIC: false } },
      { char: 'b', style: { BOLD: true, ITALIC: true } },
      { char: 'i', style: { BOLD: false, ITALIC: true } },
    ])).toEqual('<p><i>i<b>b</b></i>i<b><i>b</i></b><i>i</i></p>');
  });
});
