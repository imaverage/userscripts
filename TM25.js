// for use in typingmind as a standalone sourced script, including on mobile.
// runs at global scope
(() => {
  if (window.location.href.includes('mine_use_last_chat=true')) {
    const chatId = localStorage.getItem('mine_lastOpenChatId') || '';
    if (chatId) {
      window.location.href = `https://www.typingmind.com/#chat=${chatId}`;
    } else {
      window.location.href = `https://www.typingmind.com/`;
    }
    return;
  }
  let lastOpenChat;
  const setLastOpenedChat = async () => {
    if (!document.hasFocus()) return;
    const chatId = window.location.hash.split('chat=')[1] || '';
    if (chatId !== lastOpenChat && chatId) {
      localStorage.setItem('mine_lastOpenChatId', chatId);
      lastOpenChat = chatId;
    }
  };
  setInterval(setLastOpenedChat, 3000);

  // Mine lib
  const onDoneScrolling=(a=()=>{})=>{const b=(e=null)=>{clearTimeout(e);const f=()=>{e=null,removeEventListener('scroll',b),a();};e=setTimeout(f,0x64);};addEventListener('scroll',b);const c=window['scrollY'],d=()=>{window['scrollY']===c&&(removeEventListener('scroll',b),a());};setTimeout(d,0x64);},findGalleries=()=>{const a=Mine['qsaa']('span,div'),b=c=>{const d=h=>h['offsetHeight']>0x0&&h['offsetWidth']>0x0,f=Array['from'](c['children'])['filter'](d);if(f['length']<0x3)return![];const g=new Set();return f['map'](h=>h['offsetHeight']+'x'+h['offsetWidth'])['forEach'](h=>g['add'](h)),Array['from'](g)['every'](h=>h['split']('x')['map'](i=>Number(i))['every'](i=>i>0x64));};return a['filter'](b);},animateGalleryPreviews=a=>{Array['from'](a['children'])['map'](b=>b['querySelector']('img'))['filter'](b=>!!b)['forEach'](Mine['simulateHover']);},Utils={'allLetterCombinations':(a,b=[])=>{if(typeof a!='number')throw Error('numLetters\x20must\x20be\x20a\x20number');if(a<0x0)throw Error('numLetters\x20must\x20be\x20greater\x20than\x20or\x20equal\x20to\x20zero');if(a===0x0)return[];const c='abcdefghijklmnopqrstuvwxyz'['split'](''),d=h=>c['map'](i=>h+i),e=h=>h['reduce']((i,j)=>i['concat'](j),[]),f=h=>e(h['map'](d)),g=(h,i=c,j=0x1)=>h==j?i:g(h,f(i),j+0x1);return g(a)['filter'](h=>b['length']?b['includes'](h[0x0]):!![]);},'findGalleries':findGalleries,'animateGalleryPreviews':animateGalleryPreviews,'getIsElementVisible':a=>a['offsetWidth']>0x0&&a['offsetHeight']>0x0,'openTemporaryWindow':a=>{const b=window['open'](a);if(!b||b['closed']||typeof b['closed']=='undefined')return alert('[noop]\x20couln\x27t\x20open\x20window\x20to\x20send\x20message'),![];else setTimeout(()=>b['close'](),0x2710);return!![];},'addCssLinkIfNeeded':a=>{const b=Array['from'](document['head']['querySelectorAll']('link'))['map'](d=>d['href']);if(b['includes'](a))return;const c=window['document']['createElement']('link');c['rel']='stylesheet',c['type']='text/css',c['href']=a,document['getElementsByTagName']('HEAD')[0x0]['appendChild'](c);},'toast':(a={})=>{const b={'message':'','dismissible':!![],'timeout':0x1388,'actions':[],'fixed':!![],'position':'br'},c={...b,...a};SnackBar(c);},'getMostCommonUnitElements':(a,b)=>{const c={};a['map'](b)['filter'](e=>!!e)['forEach'](e=>c[e]=(c[e]||0x0)+0x1);const d=Object['keys'](c)['reduce']((e,f)=>c[e]>c[f]?e:f);return a['filter'](f=>b(f)===d);}},Mine={'click':a=>Mine['qs'](a)?Mine['qs'](a)['click']():null,'clickLast':a=>{const b=Mine['qsaa'](a);if(!b['length'])return![];return b[b['length']-0x1]['click'](),!![];},'CommandBarBridge':{'getCommands':()=>JSON['parse'](window['sessionStorage']['getItem']('__command_bar_active_commands')),'execute':a=>{const b='__command_bar_execute_command_response',c=window['sessionStorage'];c['removeItem'](b),c['setItem']('__command_bar_execute_command',a),Mine['qs']('#__command_bar_bridge_input')['click']();const d=c['getItem'](b);return d==='true'?!![]:d==='false'?![]:null;}},'autoLogin':()=>{const a=Mine['qsaa']('input[type=password]')['filter'](c=>!!c['offsetParent']);if(a['length']!==0x1)return;const b=a[0x0];b['value']['length']>0x3&&b?.['closest']('form')?.['querySelector']('[type=submit]')?.['click']();},'updateReactTypableFormValue':(a,b)=>{const c={'INPUT':'HTMLInputElement','TEXTAREA':'HTMLTextAreaElement','SELECT':'HTMLSelectElement'};if(!(a['tagName']in c)){console['log']('unsupported\x20type');return;}const d=c[a['tagName']],e=Object['getOwnPropertyDescriptor'](window[d]['prototype'],'value')['set'];e['call'](a,b);const f=['input'];a['tagName']==='SELECT'&&f['push']('change'),f['forEach'](g=>{const h=new Event(g,{'bubbles':!![]});a['dispatchEvent'](h);});},'Utils':Utils,'qs':a=>document['querySelector'](a),'qsa':a=>document['querySelectorAll'](a),'qsaa':a=>Mine['qsaArray'](a),'qsaArray':a=>Array['from'](Mine['qsa'](a)),'lmkr':async a=>{const b='https://sum-notifier.vercel.app/api/v1/notify?message='+encodeURIComponent(a)+'&title=Chrome%20Helper';return await fetch(b,{'mode':'no-cors'}),!![];},'runSteps':async(a,b='',c=0x3e8)=>{try{for(let d=0x0;d<a['length'];d++){a[d](),await Mine['sleep'](c);}}catch(f){if(b)alert(b);}},'lmkrWhenSelectedElementChanges':()=>{const a=()=>Math['round'](new Date()['getTime']()/0x3e8),b=a(),c=$0;if(!c)return alert('[noop]\x20select\x20an\x20element\x20using\x20element\x20inspector\x20an\x20try\x20again.'),![];const d=j=>{const k=[j['value']||'',j['outerHTML']||''];return k['join'](':');},f=d(c),g=j=>j['length']>0x1e?j['substr'](0x0,0x1e-0x1)+'…':j,h=0x1f4,i=(j,k)=>{const l=d(j);if(!j||l!==k)Mine['lmkr']('Watched\x20element\x20changed:\x0a🏁:\x20'+g(l)+'\x0a🏳:\x20'+g(k)),console['log']('notified\x20element\x20change');else{const m=a()-b;m%0x3c===0x0&&console['log']('['+Math['round'](m/0x3c)+'m]\x20still\x20checking\x20every\x20'+h+'ms...'),setTimeout(()=>i(j,k),h);}};if(Mine['lmkr']('Watching\x20for\x20element\x20changes:\x0a🏳:\x20'+g(f)))i(c,f);else return alert('Unable\x20to\x20send\x20messages.\x20Fix\x20that\x20and\x20try\x20again.'),![];return window['MineElement']=c,c;},'colorElementsByValue':(a,b,c={})=>{const d=l=>{if(l['length']<0x4)return{};let m,n,o,p,q;m=l['slice']()['sort']((t,u)=>t-u);m['length']/0x4%0x1===0x0?(n=0x1/0x2*(m[m['length']/0x4]+m[m['length']/0x4+0x1]),o=0x1/0x2*(m[m['length']*(0x3/0x4)]+m[m['length']*(0x3/0x4)+0x1])):(n=m[Math['floor'](m['length']/0x4+0x1)],o=m[Math['ceil'](m['length']*(0x3/0x4)+0x1)]);p=o-n,q=1.5;const r=o+p*q,s=n-p*q;return{'min':s,'max':r};};a=a['filter'](l=>!isNaN(b(l)));const e=a['map'](b),f=c['filterOutliers']?d(e):{},g=Math['min'](...e),h=f['max']||Math['max'](...e),i=h-g,j=(l,m,n)=>{const o=0x1-l,q=o*0x2-0x1,r=(q+0x1)/0x2,s=0x1-r,t=[parseInt(m[0x0]*r+n[0x0]*s),parseInt(m[0x1]*r+n[0x1]*s),parseInt(m[0x2]*r+n[0x2]*s)];return t;},k=l=>{const m=[0xff,0x0,0x0],n=[0x0,0xff,0x0],o=!c['invertColors']?n:m,q=c['invertColors']?n:m,r=(b(l)-g)/ i,s=j(r,o,q),t=r===0x0||r>=0x1;l['style'][t?'border':'borderBottom']='4px\x20RGB('+s['join'](',')+')\x20solid';if(t)l['style']['background']='RGB('+s['join'](',')+')';if(t)l['style']['color']='white';l['style']['borderRadius']='3px';const u='Relative\x20efficiency:\x20'+Math['round']((c['invertColors']?r:0x1-r)*0x64)+'%\x0a';l['title']=(''+u+l['title'])['trim']();};a['forEach'](k);},'sleep':async(a=0x3e8)=>new Promise(b=>setTimeout(b,a)),'colorColumnByValue':(a,b,c,d={})=>{if(!a)return![];const e=Array['from'](a?.['tHead']?.['children'][0x0]?.['children']||[])['findIndex'](g=>g['innerText']['trim']()['toLowerCase']()===b['trim']()['toLowerCase']()),f=Array['from'](a['querySelectorAll']('tbody\x20tr\x20td:nth-child('+(e+0x1)+')'));Mine['colorElementsByValue'](f,c,d);},'scrollToTop':(a=![])=>window['scroll']({'top':0x0,'left':0x0,'behavior':a?'auto':'smooth'}),'scrollToBottom':(a=![])=>window['scroll']({'top':document['body']['scrollHeight'],'left':0x0,'behavior':a?'auto':'smooth'}),'scrollToElement':(a,b=0x0)=>new Promise(c=>{const d=(window['pageYOffset']||document['documentElement']['scrollTop'])+a['getBoundingClientRect']()['top']-0x64+b;if(Math['round'](window['scrollY'])===Math['round'](d)){c();return;}window['scrollTo']({'top':d,'left':0x0,'behavior':'smooth'}),onDoneScrolling(c);}),'simulateClickWithHint':async a=>{if(!a)return;await Mine['scrollToElement'](a);const b=a['getBoundingClientRect'](),c=b['left']+window['scrollX'],d=b['top']+window['scrollY'],e=b['width'],f=b['height'],g='__CommandBarMine_circler__',h=()=>Mine['qs']('#'+g),i=0x1f4,j=(p,q)=>{const r=h();if(r)r['remove']();const s=0xa,t=0x1e,u=document['createElement']('div');u['id']=g,u['style']['position']='absolute',u['style']['border']=s+'px\x20solid\x20slateblue',u['style']['borderRadius']='20px',u['style']['boxShadow']='rgba(0,\x200,\x200,\x200.45)\x200px\x200px\x2050px',u['style']['width']=p+t+'px',u['style']['height']=q+t+'px',u['style']['pointerEvents']='none',u['style']['opacity']='0',u['style']['transition']='opacity\x20'+i+'ms',u['style']['zIndex']='100000000',document['body']['append'](u);};j(e,f);const k=h(),l=k['offsetWidth'],m=k['offsetHeight'],n=(m-f)/0x2;k['style']['top']=d-n+'px';const o=(l-e)/0x2;k['style']['left']=c-o+'px',k['style']['opacity']='1',await Mine['sleep'](i),Mine['simulateClick'](a),await Mine['sleep'](0xc8),k['style']['opacity']='0',await Mine['sleep'](i);},'simulateClick':(a,b=[])=>{if(!a)return;const c=(h,i,j,k)=>{h['dispatchEvent'](new MouseEvent(i,{'view':window,'bubbles':!![],'cancelable':!![],'clientX':j,'clientY':k,'button':0x0}));},d=b['includes']('left_quarter'),e=a['getBoundingClientRect'](),f=e['left']+(e['right']-e['left'])*(d?0.2:0.5),g=e['top']+(e['bottom']-e['top'])*0.5;['mousedown','mouseup','click']['forEach'](h=>c(a,h,f,g));},'simulateHover':a=>a['dispatchEvent'](new Event('mouseover',{'view':window,'bubbles':!![],'cancelable':![]})),'assertTruthy':a=>{if(a)return a;throw'assertion\x20failed';},'waitFor':async(a,{timeoutMs:timeoutMs=0x1388,recheckIntervalMs:recheckIntervalMs=null,shouldPadDelay:shouldPadDelay=![],debugMsg:debugMsg=''}={})=>{const b=Date['now'](),c=0x1f4;while(!![]){const d=await a();if(d){if(shouldPadDelay)await Mine['sleep'](0x19);return d;}const e=Date['now']()-b,f=e>=timeoutMs;if(f)throw new Error('Timeout'+(debugMsg['trim']()?':\x20'+debugMsg['trim']():''));const g=recheckIntervalMs==null;if(g){const h=e<=c;await Mine['sleep'](h?0x0:0x5);}else await Mine['sleep'](Number(recheckIntervalMs));}},'waitForQs':async(a,b={})=>await Mine['waitFor'](()=>Mine['qs'](a),b),'getQueryParam':a=>{const b=window['location']['search'],c=new URLSearchParams(b),d=c['has'](a);if(!d)return null;const e=c['get'](a);return e;},'noop':()=>{},'injectStylesheetIdempotent':(a='')=>{const b=a['trim'](),c=Mine['qsaa']('style')['map'](g=>g['textContent']),d=c['some'](g=>g===b);if(d)return Mine['noop'];const e=document['createElement']('style');e['textContent']=b,document['head']['appendChild'](e);const f=()=>e['remove']();return f;},'injectScriptIdempotent':async a=>new Promise(b=>{const c=Mine['qsaa']('script')['map'](f=>f['src']),d=c['some'](f=>f===a);if(d)return b();const e=document['createElement']('script');e['type']='text/javascript',e['async']=!![],e['onload']=()=>b(),e['src']=a,document['getElementsByTagName']('head')[0x0]['appendChild'](e);}),'wrapAddEventListenerWithBlockers':(a=[])=>{const b=Object['getOwnPropertyNames'](window)['filter'](c=>/^HTML/['test'](c))['map'](c=>window[c]);b['forEach'](c=>{const d=c['prototype']['addEventListener'],e=f=>{const g=function(h,i,j){const k=this,l=a['some'](m=>h===m['type']&&k['matches'](m['querySelector']));if(l)return;return f['apply'](this,arguments);};c['prototype']['addEventListener']=g;};e(d);});},'PepperAgent':class{constructor(a,b=[]){this['name']=a,this['commands']=b,this.#addFoundationalCommands(),this.#connectToPepper();}#addFoundationalCommands(){const a=[{'title':'restart','description':'','run':async()=>{window['open']('http://reload.extensions');const b=()=>location['reload']();setTimeout(b,0xbb8);}}];this['commands']['push'](...a);}async #connectToPepper(){await Mine['injectScriptIdempotent']('https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.5.4/socket.io.js');const a='443',b='https://pepperpotts.fly.dev:'+a;this['socket']=io(b,{'query':{'name':this['name'],'commands':this['commands']}});const c=()=>{console['log']('[Mine]\x20connected\x20to\x20pepper'),this['socket']['emit']('register-commands',this['commands']);};this['socket']['on']('connect',c),this['socket']['on']('disconnect',d=>{console['log']('[Mine]\x20disconnected\x20from\x20pepper'),d==='io\x20server\x20disconnect'&&(console['log']('[Mine]\x20trying\x20to\x20reconnect\x20to\x20pepper...'),this['socket']['connect']());}),this['commands']['forEach'](({title:d,description:e,run:f})=>{const g=async(h,i)=>{const j=await f(),k=j?j:{'success':!![]};i(k);};this['socket']['on'](d,g);}),window['addEventListener']('focus',()=>{this['socket']['connected']&&this['socket']['disconnect'](),this['socket']['connect']();});}async['ask'](a,b=[],c=()=>{},d=0xea60){const e={'questionObj':a,'responseOptions':b,'timeoutMs':d};this['socket']['timeout'](d)['emit']('ask',e,c);}},'randomItemFromArray':a=>{const b=a[Math['floor'](Math['random']()*a['length'])];return b;},'setIntervalAndNow':(a,b=0x3e8)=>{a(),setInterval(a,b);},'processUnprocessedItems':(a=[],b,c='')=>{const d='data-mine-processed'+(c?'-'+c:''),e=Array['from'](a)['filter'](Boolean)['filter'](g=>{const h=g['getAttribute'](d)==='true';return!h;}),f=g=>g['setAttribute'](d,'true');for(let g=0x0;g<e['length'];g++){const h=e[g];b(h),f(h);}},'setQueryParam':(a,b)=>{const c=new URL(window['location']);c['searchParams']['set'](a,b),window['location']=c['href'];},'dim':a=>{if(!a)return;const b=(j,k)=>{const l=j['style']['transition']['split'](',')['map'](n=>n['trim']())['filter'](n=>n['length']),m=l['filter'](n=>!n['includes']('opacity'));m['push'](k),j['style']['transition']=m['join'](',\x20');};b(a,'opacity\x200.2s\x20ease');const c='0.05',d=0x1f4;let f;const g=()=>{f=setTimeout(()=>{a['style']['removeProperty']('opacity');},d);},h=()=>{clearTimeout(f),a['style']['opacity']=c;};a['style']['setProperty']('opacity',c),a['addEventListener']('mouseover',g),a['addEventListener']('mouseout',h);const i=()=>{a['style']['removeProperty']('opacity'),a['removeEventListener']('mouseover',g),a['removeEventListener']('mouseout',h);};return i;}};window['Mine']=Mine,Mine['getIndexedDbValue']=async(a,b,c)=>new Promise((d,e)=>{const f=indexedDB['open'](b);f['onerror']=g=>e('An\x20error\x20occurred\x20while\x20accessing\x20the\x20database:\x20'+g['target']['errorCode']),f['onsuccess']=g=>{const h=g['target']['result'],i=h['transaction']([c],'readonly'),j=i['objectStore'](c),k=j['get'](a);k['onerror']=l=>e('An\x20error\x20occurred\x20while\x20retrieving\x20the\x20data:\x20'+l['target']['errorCode']),k['onsuccess']=l=>d(l['target']['result']);};}),Mine['addEventListenerForSubtreeAddOrRemove']=(a,b)=>{const c={'childList':!![],'subtree':!![]},d=(f,g)=>{for(let h of f){h['type']==='childList'&&b();}},e=new MutationObserver(d);e['observe'](a,c);},Mine['onElementRemoval']=(a,b)=>{const c=(e,f)=>{!a['isConnected']&&(f['disconnect'](),b());},d=new MutationObserver(c);d['observe'](document,{'childList':!![],'subtree':!![]});},Mine['onElementRemove']=Mine['onElementRemoval'],Mine['colorizeByContent']=(a=[],b=d=>d['innerText'],c='content')=>Mine['processUnprocessedItems'](a,d=>{const f=b(d),g=Mine['getHashedStringToHex'](f);!d['style']['transition']&&(d['style']['transition']='color\x200.1s'),d['style']['setProperty']('color',g,'important');},c+'-colorizer'),Mine['sessionCacheManageFn']=a=>async(...b)=>{const c='mine.cached.'+encodeURIComponent(JSON['stringify'](b)),d=window['sessionStorage']['getItem'](c);if(d)return JSON['parse'](d);const e=await a(...b);return window['sessionStorage']['setItem'](c,JSON['stringify'](e)),e;},Mine['isi']=Mine['injectStylesheetIdempotent'],Mine['withSimpleCache']=a=>{const b=new Map();return(...c)=>{const d=JSON['stringify'](c);if(b['has'](d))return b['get'](d);const e=a(...c);return b['set'](d,e),e;};};const parseColorStringToRgbObj=Mine['withSimpleCache'](a=>{if(typeof a!=='string')throw new Error('Color\x20input\x20must\x20be\x20a\x20string');const b=d=>{const e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i['exec'](d);return e?{'r':parseInt(e[0x1],0x10),'g':parseInt(e[0x2],0x10),'b':parseInt(e[0x3],0x10)}:null;},c={'black':'#000000','white':'#ffffff','red':'#ff0000','lime':'#00ff00','blue':'#0000ff','yellow':'#ffff00','cyan':'#00ffff','magenta':'#ff00ff','silver':'#c0c0c0','gray':'#808080','maroon':'#800000','olive':'#808000','green':'#008000','purple':'#800080','teal':'#008080','navy':'#000080'};if(a['startsWith']('#'))return b(a);else{if(a['toLowerCase']()['startsWith']('rgb(')){const d=e=>{const f=/rgb\((\d+),\s*(\d+),\s*(\d+)\)/i['exec'](e);return f?{'r':parseInt(f[0x1],0xa),'g':parseInt(f[0x2],0xa),'b':parseInt(f[0x3],0xa)}:null;};return d(a['toLowerCase']());}else{if(a['toLowerCase']()in c){const e=f=>{const g=c[f['toLowerCase']()];return g?b(g):null;};return e(a);}else{if(a['toLowerCase']()['startsWith']('rgba(')){const f=g=>{const h=/rgba\((\d+),\s*(\d+),\s*(\d+),\s*[\d.]+\)/i['exec'](g);return h?{'r':parseInt(h[0x1],0xa),'g':parseInt(h[0x2],0xa),'b':parseInt(h[0x3],0xa)}:null;};return f(a['toLowerCase']());}else throw new Error('Invalid\x20color\x20format\x20provided:\x20'+a+'.\x20Accepts\x20hex\x20string,\x20RGB\x20string,\x20or\x20named\x20HTML\x20color.');}}}}),getWacgLuminance=a=>{const b=0.2126,c=0.7152,d=0.0722,e=[a['r'],a['g'],a['b']]['map'](h=>h/0xff),f=e['map'](h=>{const i=2.4,j=0.03928,k=12.92,l=0.055,m=1.055;return h<=j?h/k:Math['pow']((h+l)/m,i);}),g=f[0x0]*b+f[0x1]*c+f[0x2]*d;return g;},getContrastRatio=(a,b)=>{const c=getWacgLuminance(a),d=getWacgLuminance(b),e=Math['max'](c,d),f=Math['min'](c,d);return(e+0.05)/(f+0.05);},getHashedStringToHexRaw=a=>{let b=0x0;for(let d=0x0;d<a['length'];d++){b=Math['imul'](0x1f,b)+a['charCodeAt'](d)|0x0;}let c='#';for(let e=0x0;e<0x3;e++){const f=b>>e*0x8&0xff;c+=f['toString'](0x10)['padStart'](0x2,'0');}return c;};Mine['getHashedStringToHex']=Mine['withSimpleCache']((a,b)=>{let c=getHashedStringToHexRaw(a);if(b){const d=4.5;let e=0x0;const f=0xa,g=parseColorStringToRgbObj(b);let h=0x0,i=c;const j=l=>{const m=getContrastRatio(parseColorStringToRgbObj(l),g);return m>h&&(h=m,i=l),m;};let k=j(c);while(k<d&&e<f){e++,c=getHashedStringToHexRaw(a+e),k=j(c);}c=i;}return c;}),Mine['getCssToHide']=a=>'\x0a'+a+'\x20{\x0a\x20\x20display:\x20none\x20!important;\x0a}\x0a',Mine['getCssToQuietQs']=(a,{delayMs:delayMs=0x3e8}={})=>('\x0a'+a+'\x20{\x0a\x20\x20opacity:\x200.2;\x0a\x20\x20transition:\x20opacity\x200.2s\x20ease-in-out\x20!important;\x0a}\x0a'+a+':hover\x20{\x0a\x20\x20transition-delay:\x20'+delayMs/0x3e8+'s\x20!important;\x0a\x20\x20opacity:\x201;\x0a}\x0a')['trim'](),Mine['bindHotkey']=(a,b=document,c)=>{const d=a['split']('+')['map'](g=>g['trim']()['toLowerCase']());let e='';const f={'shiftKey':![],'ctrlKey':![],'altKey':![],'metaKey':![]};d['forEach'](g=>{const h=Object['keys'](f)['find'](i=>i['toLowerCase']()===g);h?f[h]=!![]:e=g;}),b['addEventListener']('keydown',g=>{const h=b===document?!['input','textarea','select','button']['includes'](g['target']['tagName']['toLowerCase']())&&!g['target']['isContentEditable']:!![],i=g['key']['toLowerCase']()===e,j=Object['keys'](f)['every'](l=>f[l]===g[l]),k=j&&i&&h;if(!k)return;c(g);});},Mine['Ai']={'getResponseText':async(a,b='You\x20are\x20a\x20helpful\x20AI.')=>{const c=[];c['push']({'role':'system','content':b}),c['push']({'role':'user','content':a});const d={'model':'gpt-4-1106-preview','messages':c},e='sk-',f=await fetch('https://api.openai.com/v1/chat/completions',{'method':'POST','headers':{'Content-Type':'application/json','Authorization':'Bearer\x20'+e},'body':JSON['stringify'](d)})['then'](g=>g['json']());return f['choices'][0x0]['message']['content'];}},Mine['spotlightElement']=a=>{const b=0x270f;let c=a['getBoundingClientRect']();const d=l=>{Mine['qsaa']('.mine-wall')['forEach'](m=>{m['style']['opacity']='0',setTimeout(()=>m['remove'](),0x1f4);}),l?.['disconnect']();},e=new MutationObserver(l=>{l['forEach'](m=>{if(m['attributeName']==='style'){const n=a['getBoundingClientRect']();(n['left']!==c['left']||n['top']!==c['top'])&&d(e);}else m['type']==='childList'&&!document['body']['contains'](a)&&d(e);});}),f={'attributes':!![],'attributeFilter':['style'],'childList':!![],'subtree':!![]};e['observe'](a,f);const g=document['createElement']('div');g['classList']['add']('mine-wall'),g['style']['position']='fixed',g['style']['top']='0',g['style']['left']='0',g['style']['width']='100%',g['style']['height']='100%',g['style']['background']='rgba(0,\x200,\x200,\x200.9)',g['style']['zIndex']=''+(b+0x1),g['style']['opacity']='0',g['style']['transition']='opacity\x20200ms',g['addEventListener']('click',()=>d(e)),setTimeout(()=>g['style']['opacity']='1',0xa);const h=c['top'],i=window['innerWidth']-c['right'],j=window['innerHeight']-c['bottom'],k=c['left'];g['style']['clipPath']='polygon(\x0a\x20\x20\x20\x20\x20\x200px\x200px,\x0a\x20\x20\x20\x20\x20\x20100%\x200px,\x0a\x20\x20\x20\x20\x20\x20100%\x20'+h+'px,\x0a\x20\x20\x20\x20\x20\x20'+k+'px\x20'+h+'px,\x0a\x20\x20\x20\x20\x20\x20'+k+'px\x20'+c['bottom']+'px,\x0a\x20\x20\x20\x20\x20\x20'+c['right']+'px\x20'+c['bottom']+'px,\x0a\x20\x20\x20\x20\x20\x20'+c['right']+'px\x20'+h+'px,\x0a\x20\x20\x20\x20\x20\x20100%\x20'+h+'px,\x0a\x20\x20\x20\x20\x20\x20100%\x20100%,\x0a\x20\x20\x20\x20\x20\x200px\x20100%\x0a\x20\x20\x20\x20)',document['body']['append'](g);},Mine['pui']=Mine['processUnprocessedItems'],Mine['processUnprocessedItemsContinually']=async(a,b,c='')=>{!c&&(c=Date['now']()['toString']());const d=()=>{Mine['pui'](a(),b,c),setTimeout(d,0x3e8);};d();},Mine['puic']=Mine['processUnprocessedItemsContinually'],Mine['hideQs']=a=>Mine['isi'](Mine['getCssToHide'](a)),Mine['quietQs']=a=>Mine['isi'](Mine['getCssToQuietQs'](a)),Mine['removeElement']=async a=>new Promise(b=>{if(!a){b();return;}const c=0x96,d=window['getComputedStyle'](a),e=d['width'],f=d['height'];a['style']['width']=e,a['style']['height']=f,requestAnimationFrame(()=>{a['style']['transition']='opacity\x20'+c+'ms,\x20width\x20'+c+'ms,\x20height\x20'+c+'ms',a['style']['opacity']='0',a['style']['width']='0',a['style']['height']='0',a['style']['overflow']='hidden',a['addEventListener']('transitionend',function g(h){h['propertyName']==='opacity'&&(a['removeEventListener']('transitionend',g),a['remove'](),b());});});}),Mine['removeEle']=Mine['removeElement'],Mine['collapse']=(a,b='100px')=>{if(!a)return;const c=document['createElement']('div');c['style']='position:\x20relative;\x20overflow:\x20hidden;\x20max-height:\x20'+b+';\x20transition:\x20max-height\x200.3s\x20ease;';const d=document['createElement']('div');d['title']='Expand\x20collapsed\x20item',d['style']='position:\x20absolute;\x20bottom:\x200;\x20left:\x200;\x20right:\x200;\x20height:\x20100%;\x20background:\x20linear-gradient(to\x20bottom,\x20transparent,\x20rgba(0,\x200,\x200,\x200.2));\x20cursor:\x20pointer;\x20border-radius:\x205px;',d['addEventListener']('click',()=>{const f=c['style']['maxHeight']===b;c['style']['maxHeight']=f?'none':b,d['style']['display']=f?'none':'block';}),a['parentNode']['insertBefore'](c,a),c['appendChild'](a),c['appendChild'](d);const e=new MutationObserver(f=>{f['forEach'](g=>{if(g['type']==='childList'){d['remove']();while(c['firstChild']){c['parentNode']['insertBefore'](c['firstChild'],c);}c['parentNode']['removeChild'](c),e['disconnect']();}});});e['observe'](c,{'childList':!![]});},Mine['attachToElementContinuously']=async(a=()=>{},b=()=>{},c={})=>{const d=async()=>{const e=await a()['catch'](()=>null);if(!e){c['onElementNotFound']&&await c['onElementNotFound']();return;}await b(e),Mine['onElementRemoval'](e,async()=>{c['onElementGone']&&await c['onElementGone'](),d();});};await d();};

  const getChatIndexedDbValue = async urlChatValue => await Mine.getIndexedDbValue(`CHAT_${urlChatValue}`, 'keyval-store', 'keyval');
  const getStopButton = () => Mine.qsaa('button').find(e => e.innerText === 'Stop');
  const isAiTyping = () => !!getStopButton();

  Mine.isi(`
/* hide avatar on mobile */
@media (max-width: 767px) {
  [data-element-id="response-block"] {
    padding-left: 0;
  }

  [data-element-id="chat-avatar-container"] {
    display: none;
  }

  /* model name snippet */
  [data-element-id="current-chat-title"] [aria-haspopup="menu"] .truncate {
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

  const attachMetaInfoV1 = async () => {
    const infoIconPath = `M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z`;
    const getContextSize = async () => {
      const chatId = window.location.hash.split('chat=')[1];
      if (!chatId) return null;

      const inf = await getChatIndexedDbValue(chatId);
      const contextSize = inf.chatParams.contextLimit;
      return contextSize;
    };
    const getMsgEles = () => Mine.qsaa(`[data-element-id="response-block"]`);
    const updateInfoButton = async () => {
      const infoButton = Mine.qsaa('[data-element-id="current-chat-title"] button').reverse()[0];
      if (!infoButton) return;

      const ID = '__mine_info_div';
      const getMyInfoEle = () => Mine.qs(`#${ID}`);

      const maybeMyInfoDiv = getMyInfoEle();
      if (!maybeMyInfoDiv) {
        const newEle = document.createElement('div');
        newEle.id = ID;
        newEle.style.opacity = '0';
        newEle.style.transition = 'opacity 0.2s';
        infoButton.parentNode.insertBefore(newEle, infoButton);
        newEle.offsetWidth;  // trigger css reflow
        newEle.style.opacity = '1';
      }

      const myInfoDiv = maybeMyInfoDiv || getMyInfoEle();
      const msgEles = getMsgEles();
      let msgCount = msgEles.length;

      const latestContextClearEle = Mine.qsaa('[data-element-id="clear-context-divider"]').pop();
      const getAreElementsInThisOrder = (eleA, eleB) => eleB.compareDocumentPosition(eleA) & Node.DOCUMENT_POSITION_PRECEDING;
      if (latestContextClearEle && msgEles.length) {
        const lastMsgEle = msgEles.slice(-1)[0];
        if (getAreElementsInThisOrder(lastMsgEle, latestContextClearEle)) {
          msgCount = 0;
        }
        else {
          const indexAfterContextClear = msgEles.findIndex(msgEle => getAreElementsInThisOrder(latestContextClearEle, msgEle));
          msgCount = msgCount-indexAfterContextClear+1;
        }
      }

      const cxtSize = await getContextSize();
      const metaMsg = `${msgCount}/<span style='${msgCount >= cxtSize ? 'color:red;' : ''};'>${cxtSize} mcxt</span>`;
      myInfoDiv.innerHTML = metaMsg;
    };
    const updateContextDivider = async () => {
      if (isAiTyping()) return;

      Mine.qsaa('.firstLookbackMessage.visible').forEach(e => {
        e.classList.remove('firstLookbackMessage');
        e.classList.remove('visible');
      });

      const msgElesRev = getMsgEles().reverse();
      const contextSize = Number(await getContextSize());
      if (contextSize <= msgElesRev.length) {
        const contextLookbackTailMsg = msgElesRev[contextSize-1];
        const targetMsgEle = contextLookbackTailMsg.closest('[data-element-id="response-block"]').parentElement;
        if (targetMsgEle) {
          targetMsgEle.classList.add('firstLookbackMessage');
          targetMsgEle.classList.add('visible');
        }
      }
    };
    const refreshCurrentChatMeta = async () => {
      // TODO: hide info button in this case
      const chatId = window.location.hash.split('chat=')[1];
      if (!chatId) return;
      const inf = await getChatIndexedDbValue(chatId);
      if (!inf) return;

      await updateInfoButton();
      await updateContextDivider();
    };

    Mine.attachToElementContinuously(
      async () => await Mine.waitForQs('[data-element-id="chat-space-middle-part"]', {recheckIntervalMs: 500, timeoutMs: Infinity}),
      targetRootEle => {
        refreshCurrentChatMeta();
        Mine.addEventListenerForSubtreeAddOrRemove(targetRootEle, refreshCurrentChatMeta);
      },
    );
  };
  const isMobile = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  if (isMobile) {
    attachMetaInfoV1();
  }

  const installMemoryPluginV1 = async () => {
    const api = {
      SEARCH: async ({query, lookbackDays}) => searchRef(query, lookbackDays),
    };
  
    const searchRef = async (query, lookbackDays) => {
      const dbName = 'keyval-store';
      const storeName = 'keyval';
      const results = [];
  
      // Calculate the start date based on lookbackDays
      const startDate = new Date();
      startDate.setDate(startDate.getDate() - lookbackDays);
  
      return new Promise((resolve, reject) => {
        const request = indexedDB.open(dbName);
  
        request.onerror = event => reject(`IndexedDB error: ${event.target.error}`);
  
        request.onsuccess = event => {
          const db = event.target.result;
          const transaction = db.transaction([storeName], 'readonly');
          const store = transaction.objectStore(storeName);
          const cursorRequest = store.openCursor();
  
          cursorRequest.onerror = event => reject(`Cursor error: ${event.target.error}`);
  
          cursorRequest.onsuccess = event => {
            const cursor = event.target.result;
            if (cursor) {
              const key = cursor.key;
              const value = cursor.value;
  
              // Check if the key starts with 'CHAT_' and has a messages array
              if (key.startsWith('CHAT_') && Array.isArray(value.messages)) {
                // Create a case-insensitive word boundary regex
                const regex = new RegExp(`\\b${query}\\b`, 'i');
  
                // Filter user messages that match the query and are after the start date
                const matchingMessages = value.messages
                  .filter(msg =>
                    msg.role === 'user' &&
                    regex.test(msg.content) &&
                    new Date(msg.createdAt) >= startDate
                  )
                  .map(msg => ({
                    content: msg.content,
                    createdAt: msg.createdAt
                  }));
  
                results.push(...matchingMessages);
              }
  
              cursor.continue();
            } else {
              // Sort results by createdAt in descending order (most recent first)
              results.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
              resolve(results);
            }
          };
        };
      });
    };
  
    const getMemoryPluginPassword = async () => {
      const dbName = 'keyval-store';
      const storeName = 'keyval';
  
      return new Promise((resolve, reject) => {
        const request = indexedDB.open(dbName);
  
        request.onerror = event => reject(`IndexedDB error: ${event.target.error}`);
  
        request.onsuccess = event => {
          const db = event.target.result;
          const transaction = db.transaction([storeName], 'readonly');
          const store = transaction.objectStore(storeName);
          const cursorRequest = store.openCursor();
  
          cursorRequest.onerror = event => reject(`Cursor error: ${event.target.error}`);
  
          cursorRequest.onsuccess = event => {
            const cursor = event.target.result;
            if (cursor) {
              const key = cursor.key;
              const value = cursor.value;
  
              if (key.startsWith('CHAT_') && Array.isArray(value.messages)) {
                const passwordMessage = value.messages.find(msg =>
                  msg.role === 'user' &&
                  typeof msg.content === 'string' &&
                  msg.content.trim().match(/^memoryPluginPassword=.+$/)
                );
  
                if (passwordMessage) {
                  const password = passwordMessage.content.trim().split('=')[1];
                  resolve(password);
                  return;
                }
              }
  
              cursor.continue();
            } else {
              resolve(null);
            }
          };
        };
      });
    };
    const memoryPluginPassword = await getMemoryPluginPassword();
  
    // keep this constant between plugin and top window script
    const EncryptionLib = (() => {
      // This salt should be unique per application, but doesn't need to be secret
      const SALT = new Uint8Array([0x63, 0x72, 0x79, 0x70, 0x74, 0x6f, 0x73, 0x61, 0x6c, 0x74, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36]);
  
      // Use a password that you can remember but others can't guess
      const PASSWORD = memoryPluginPassword;
  
      async function deriveKey(password) {
        const encoder = new TextEncoder();
        const passwordBuffer = encoder.encode(password);
  
        const keyMaterial = await window.crypto.subtle.importKey(
          'raw',
          passwordBuffer,
          { name: 'PBKDF2' },
          false,
          ['deriveBits', 'deriveKey']
        );
  
        return window.crypto.subtle.deriveKey(
          {
            name: 'PBKDF2',
            salt: SALT,
            iterations: 100000,
            hash: 'SHA-256'
          },
          keyMaterial,
          { name: 'AES-GCM', length: 256 },
          false,
          ['encrypt', 'decrypt']
        );
      }
  
      async function encrypt(data) {
        const key = await deriveKey(PASSWORD);
        const encoder = new TextEncoder();
        const encodedData = encoder.encode(JSON.stringify(data));
  
        const iv = window.crypto.getRandomValues(new Uint8Array(12));
        const encryptedData = await window.crypto.subtle.encrypt(
          { name: 'AES-GCM', iv: iv },
          key,
          encodedData
        );
  
        return {
          iv: Array.from(iv),
          data: Array.from(new Uint8Array(encryptedData))
        };
      }
  
      async function decrypt(encryptedObj) {
        const key = await deriveKey(PASSWORD);
  
        const decryptedData = await window.crypto.subtle.decrypt(
          { name: 'AES-GCM', iv: new Uint8Array(encryptedObj.iv) },
          key,
          new Uint8Array(encryptedObj.data)
        );
  
        return JSON.parse(new TextDecoder().decode(decryptedData));
      }
  
      return {
        encrypt,
        decrypt
      };
    })();
  
    window.addEventListener("message", async (event) => {
      const { encryptedData } = event.data;
      if (!encryptedData) return;
  
      try {
        const decryptedData = await EncryptionLib.decrypt(encryptedData);
        const { id, func, request } = decryptedData;
  
        const fail = async () => {
          const encryptedError = await EncryptionLib.encrypt({ id, error: "Function not found" });
          event.source.postMessage({ encryptedError }, "*");
        };
        if (!memoryPluginPassword) {
          // alert not showing up seem to fail silently and hang
          alert('memory plugin password not found. start a new chat and send a message "memoryPluginPassword=<the-password-no-quotes>" with no quotes');
          await fail();
          return;
        }
        if (typeof api[func] === "function") {
          const result = await api[func](request);
          const encryptedResult = await EncryptionLib.encrypt({ id, result });
          event.source.postMessage({ encryptedResult }, "*");
        } else {
          await fail();
        }
      } catch (error) {
        console.error("Decryption error:", error);
      }
    });
  };
  installMemoryPluginV1();
})();

