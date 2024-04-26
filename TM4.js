// for use in typingmind as a standalone sourced script, including on mobile.
// runs at global scope
(() => {

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
  const Mine = {
    qsaa: qs => Array.from(document.querySelectorAll(qs)),
    noop: () => {},
    isi: injectStylesheetIdempotent,
  };
  
  Mine.isi(`
div:has(> div > img[src="/logo.png"]) {
  display: none;
}
.prose {
  background: rgb(39, 39, 42);
  border-radius: 16px;
  padding: 10px;
  color: white;
}
/* my avatar */
[data-element-id="response-block"]:has([data-element-id="user-message"]) [data-element-id="chat-avatar-container"] {
  display: none;
}

div:has(>.bg-blue-500) {
  display: flex;
  justify-content: flex-end;
}
div > button:has(.user-avatar) {
  visibility: hidden;
}
`);
  const main = async () => {
  };
  main().then();

})();
