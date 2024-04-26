// for use in typingmind as a standalone sourced script, including on mobile

const Mine = {
  qsaa: qs => Array.from(document.querySelectorAll(qs)),
  noop: () => {},
  isi: injectStylesheetIdempotent,
};
const injectStylesheetIdempotent = (cssTemplateString = '') => {
  const curedCssTemplateString = cssTemplateString.trim();
  const allStyleTagContents = Mine.qsaa('style').map(e => e.textContent);
  const requestContentAlreadyExists = allStyleTagContents.some(styleTagContent => styleTagContent === curedCssTemplateString);
  if (requestContentAlreadyExists) return Mine.noop;

  const newStyleTag = document.createElement('style');
  newStyleTag.textContent = curedCssTemplateString;
  document.head.appendChild(newStyleTag);

  const uninitializer = () => newStyleTag.remove();

  return uninitializer;
};

Mine.isi(`
div:has(> div > img[src="/logo.png"]) {
  display: none;
}
`);
const main = async () => {
};
main().then();
