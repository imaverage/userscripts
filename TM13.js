// for use in typingmind as a standalone sourced script, including on mobile.
// runs at global scope
(() => {
  if (window.location.href.includes('#mine_use_last_chat=true')) {
    const chatId = localStorage.getItem('mine_lastOpenChatId') || '';
    if (chatId) {
      window.location.href = `https://www.typingmind.com/?#chat=${chatId}`;
    } else {
      window.location.hash = `https://www.typingmind.com/#`;
    }
  } else {
    let lastOpenChat;
    const setLastOpenedChat = async () => {
      if (!document.hasFocus()) return;

      const chatId = window.location.hash.split('chat=')[1] || '';
      if (chatId !== lastOpenChat) {
        localStorage.setItem('mine_lastOpenChatId', chatId);
        lastOpenChat = chatId;
      }
    };
    setInterval(setLastOpenedChat, 3000);
  }
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
/* hide avatar on mobile */
@media (max-width: 767px) {
  [data-element-id="response-block"] {
    padding-left: 0;
  }

  [data-element-id="chat-avatar-container"] {
    display: none;
  }
}

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

body {
  background: rgb(16,17,17) !important;
}
.response-block:hover {
  background: none !important;
}

/* might need to separate these two */
.response-block li,
.response-block p
{
  border-radius: 5px;
  margin: 2px;
  padding-left: 2px;
  padding-right: 2px;
}

.response-block li, .response-block li *
.response-block p, .response-block p *
{
  color: white;
  transition: color 0.1s ease-in-out;
}
.response-block li:hover, .response-block li:hover *,
.response-block p:hover, .response-block p:hover *
{
  color: hotpink;
  transition: color 0s;
}

.response-block li ul {
  margin-top: 0;
}
.response-block li:nth-child(even), .response-block p:nth-child(even) {
  background-color: RGBA(0,0,0,0.3);
}

[data-element-id="list-more-button"] {
  display: none;
}
`);
  const main = async () => {
  };
  main().then();

})();
