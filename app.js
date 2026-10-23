const projects=[
  {
    "id": "photo",
    "name": "PhotoMind",
    "type": "LOCAL-FIRST / DESKTOP",
    "symbol": "◒",
    "color": "#e7a9c8",
    "status": "Open-source desktop application · macOS + Windows",
    "tag": "Your photos. Your device. Your call.",
    "body": "A local-first photo culling and selection app for macOS and Windows. Find duplicates, compare visually similar shots, review possible same-person groups, and move unwanted images to a recoverable Bin. Processing stays on the device.",
    "points": [
      "SHA-256 finds exact duplicates; visual matching and moment grouping help organise a library.",
      "Local quality analysis and possible same-person groups support review; people groups are suggestions, not verified identities.",
      "React and TypeScript sit on a Rust/Tauri backend with local SQLite storage. No LLM or remote service is used."
    ],
    "stack": "Rust · Tauri 2 · React · TypeScript · SQLite / SQLx",
    "link": "https://github.com/neervasa00000000/PhotoMind/releases/latest",
    "repo": "https://github.com/neervasa00000000/PhotoMind",
    "cta": "Download latest release"
  },
  {
    "id": "nutri",
    "name": "NutriThrive",
    "type": "COMMERCE / BUILT & RUN",
    "symbol": "✳",
    "color": "#d7e68a",
    "status": "Live Australian store · March 2025–present",
    "tag": "From the family farm to a working storefront.",
    "body": "I designed, coded, and shipped the store, and own its day-to-day product work. NutriThrive grows moringa and curry leaves on the family farm in Gujarat, sources Darjeeling tea, and packs orders in Truganina, Melbourne.",
    "points": [
      "Sole developer across the front end, back end, site architecture, and technical SEO.",
      "A real catalogue, product education, and Australian shipping flows.",
      "The work continues after launch: content, product pages, and ongoing store improvements."
    ],
    "stack": "Full-stack web · E-commerce · Technical SEO",
    "link": "https://nutrithrive.com.au",
    "cta": "Visit live store",
    "repo": "https://github.com/neervasa00000000/nutrithrive-website"
  },
  {
    "id": "arkive",
    "name": "ARKIVE",
    "type": "ENCRYPTION / WEB3",
    "symbol": "✣",
    "color": "#c8cae4",
    "status": "Public testnet prototype · Base Sepolia",
    "tag": "A locked filing cabinet, with your own key.",
    "body": "An experimental encrypted personal vault and archival system. Files are encrypted in the browser, stored on Arweave, and indexed on Base. The current beta is a testnet prototype, not production-ready.",
    "points": [
      "AES-256-GCM encrypts each file with a random key, wrapped for an authorised wallet and optional recovery passphrase or backup wallets.",
      "Encrypted bundles live on Arweave; Base holds discovery and ownership references rather than the private file.",
      "An offline .arkive copy and a public recovery specification support recovery independently of the website. Keep original files and an independent backup during the beta."
    ],
    "stack": "React · Vite · Web Crypto · RainbowKit / wagmi · Arweave · Solidity / Base Sepolia",
    "link": "https://arkive-beta.vercel.app",
    "repo": "https://github.com/neervasa00000000/ARKIVE",
    "cta": "Open live beta"
  },
  {
    "id": "scintilla",
    "name": "Scintilla",
    "type": "ACCESSIBILITY / MAP CUES",
    "symbol": "↝",
    "color": "#fc704b",
    "status": "Scintilla + CueLock · Research instrument",
    "tag": "Can you still tell the routes apart?",
    "body": "Scintilla explores accessible navigation. Its live site now features CueLock, a semantic verifier for navigation cues on web maps: check whether routes and markers remain distinguishable under colour-vision differences.",
    "points": [
      "Draw routes, place markers, or import GeoJSON on a real OpenStreetMap map; a schematic fallback is available.",
      "Check named roles such as main route, backup, hazard, and destination under simulated colour-vision modes.",
      "Suggest dual encodings, re-verify changes, and export review reports. A research instrument, not WCAG certification."
    ],
    "stack": "Web maps · GeoJSON · Colour-vision simulation · Semantic cue verification",
    "link": "https://scintilla.world",
    "cta": "Visit live site",
    "repo": "https://github.com/neervasa00000000/scintilla-world",
    "moreLinks": [
      {
        "url": "https://scintilla.world/cuelock/",
        "label": "Open CueLock"
      }
    ]
  },
  {
    "id": "return",
    "name": "Last Return",
    "type": "INTERACTIVE UI STUDY",
    "symbol": "BE KIND. REWIND.",
    "color": "#e9dcaa",
    "status": "Self-directed front-end study",
    "tag": "The video shop closes at nine.",
    "body": "A cinematic front-end experiment built around the atmosphere of a late-night video shop. Visual design and interaction create a place to explore.",
    "points": [
      "A video-shop interface with a receipt-desk checkout, three-night rentals, and a late-fee interaction.",
      "The original experiment is published on GitHub Pages, with its source in the linked repository."
    ],
    "stack": "HTML · CSS · JavaScript",
    "link": "https://neervasa00000000.github.io/last-return/",
    "cta": "Visit original live site",
    "repo": "https://github.com/neervasa00000000/last-return"
  },
  {
    "id": "open",
    "name": "Still Open",
    "type": "INTERACTIVE UI STUDY",
    "symbol": "the light stays on",
    "color": "#f9e9ba",
    "status": "Self-directed front-end study",
    "tag": "Write what you need. The light stays on.",
    "body": "An atmospheric interface experiment with evening and night scenes. A quieter corner of the collection, exploring how a small interaction can carry a mood.",
    "points": [
      "A corner-shop interface with evening and night scenes and a place to write what you need.",
      "The original experiment is published on GitHub Pages, with its source in the linked repository."
    ],
    "stack": "HTML · CSS · JavaScript",
    "link": "https://neervasa00000000.github.io/still-open/",
    "cta": "Visit original live site",
    "repo": "https://github.com/neervasa00000000/still-open"
  },
  {
    "id": "extras",
    "name": "The other tabs",
    "type": "EXTENSIONS + UTILITIES",
    "symbol": "",
    "color": "#c8cae4",
    "status": "More software from the résumé",
    "tag": "Small tools for very specific annoyances.",
    "body": "Published Chrome extensions and an open-source gas-fee dashboard. Open the store listings for the browser tools, or read the Gas Guardian source.",
    "points": [
      "SynapseSave: snooze individual tabs or whole groups and restore their group structure, name, and colour on schedule.",
      "ASIN: capture Amazon product identifiers, search the local history, and export collected ASINs to CSV.",
      "Gas Guardian: an open-source multi-chain fee dashboard with live RPC data and a session-based send-timing gauge."
    ],
    "stack": "Chrome extensions · TypeScript · Live RPC data",
    "link": null,
    "cta": "Explore my GitHub",
    "moreLinks": [
      {
        "url": "https://chromewebstore.google.com/detail/synapsesave-snooze-your-t/ckgbfmffecgpbnfnkejklgnfnmmobiph",
        "label": "SynapseSave · Chrome Web Store"
      },
      {
        "url": "https://chromewebstore.google.com/detail/asin/lebomhohclkfikhfaheifbnobhepijna",
        "label": "ASIN · Chrome Web Store"
      },
      {
        "url": "https://github.com/neervasa00000000/gas-guardian",
        "label": "Gas Guardian · GitHub repo"
      }
    ]
  }
];
const desk=document.querySelector('#desk'),dialog=document.querySelector('#detail'),content=document.querySelector('#detail-content');let lastFocus,quiet=matchMedia('(prefers-reduced-motion: reduce)').matches;
projects.forEach((p,i)=>{const b=document.createElement('button');b.className='piece '+p.id;b.setAttribute('aria-label',`Explore ${p.name}`);b.innerHTML=`<span class="num"><span>0${i+1}</span><span>↗ OPEN</span></span><span class="symbol" aria-hidden="true">${p.symbol}</span><span><h3>${p.name}</h3><span class="category">${p.type}</span></span><span class="arrow" aria-hidden="true">↗</span>`;desk.append(b);let start=null,moved=false,x=0,y=0;b.addEventListener('pointerdown',e=>{if(desk.classList.contains('index')||e.pointerType==='touch')return;start={px:e.clientX,py:e.clientY,x,y};moved=false;b.setPointerCapture(e.pointerId)});b.addEventListener('pointermove',e=>{if(!start)return;const dx=e.clientX-start.px,dy=e.clientY-start.py;if(Math.hypot(dx,dy)>6)moved=true;if(!moved)return;b.classList.add('dragging');x=Math.max(-b.offsetLeft+12,Math.min(desk.clientWidth-b.offsetLeft-b.offsetWidth-12,start.x+dx));y=Math.max(-b.offsetTop+12,Math.min(desk.clientHeight-b.offsetTop-b.offsetHeight-12,start.y+dy));b.style.setProperty('--dx',x+'px');b.style.setProperty('--dy',y+'px')});b.addEventListener('pointerup',()=>{start=null;b.classList.remove('dragging')});b.addEventListener('pointercancel',()=>{start=null;b.classList.remove('dragging');moved=false});b.addEventListener('click',()=>{if(moved){moved=false;return}showProject(p)});b.resetPosition=()=>{x=y=0;b.style.setProperty('--dx','0px');b.style.setProperty('--dy','0px')};});
function openModal(html){lastFocus=document.activeElement;content.innerHTML=html;const heading=content.querySelector('h2');heading.id='dialog-title';dialog.setAttribute('aria-labelledby','dialog-title');dialog.showModal();dialog.scrollTop=0;document.body.style.overflow='hidden';dialog.querySelector('.close').focus()}
function projectLinks(p){
 const links=[];
 if(p.link) links.push({url:p.link,label:p.cta});
 if(p.repo) links.push({url:p.repo,label:'View GitHub repo'});
 links.push(...(p.moreLinks||[]));
 return `<div class="project-links">${links.map(link=>`<a class="modal-action" href="${link.url}" target="_blank" rel="noopener noreferrer">${link.label} ↗</a>`).join('')}</div>${p.linkNote?`<p class="mini">${p.linkNote}</p>`:''}`;
}
function showProject(p){openModal(`<span class="kicker">${p.type}</span><h2>${p.name}</h2><p class="mini">${p.status}</p>${projectLinks(p)}<div class="detail-art" style="--accent:${p.color}">${p.tag}</div><p>${p.body}</p><ul>${p.points.map(x=>`<li>${x}</li>`).join('')}</ul><p class="mini">${p.stack}</p>`)}
document.querySelector('.close').onclick=()=>dialog.close();dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});dialog.addEventListener('close',()=>{document.body.style.overflow='';lastFocus?.focus()});
function view(index){desk.classList.toggle('index',index);document.querySelector('#list-view').setAttribute('aria-pressed',String(index));document.querySelector('#play-view').setAttribute('aria-pressed',String(!index));document.querySelector('#shuffle').hidden=index;document.querySelector('.desk-note span').textContent=index?'ALL THE WORK. IN A STRAIGHT LINE.':deskHint()}
document.querySelector('#list-view').onclick=()=>view(true);document.querySelector('#play-view').onclick=()=>view(false);
let shuffled=false;document.querySelector('#shuffle').onclick=()=>{shuffled=!shuffled;document.querySelectorAll('.piece').forEach((el,i)=>{el.resetPosition();el.style.setProperty('--rot',(shuffled?(i%2?1:-1)*(4+Math.random()*10):0)+'deg');if(!quiet)el.animate([{scale:.9},{scale:1}],{duration:400,delay:i*25,easing:'ease-out'})});toast(shuffled?'A fresh perspective.':'A little order restored.')};
function toast(s){const t=document.querySelector('#toast');t.textContent=s;t.classList.add('show');clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>t.classList.remove('show'),2300)}
let spins=0;document.querySelector('#face').onclick=e=>{spins++;if(!quiet)e.currentTarget.style.transform=`rotate(${spins*360+12}deg)`;toast(['Curiosity looks good on you.','Still here. Still building.','Okay, now go play with the projects.'][Math.min(spins-1,2)])};
function setMotion(){document.body.classList.toggle('quiet',quiet);const b=document.querySelector('#motion');b.textContent='Motion: '+(quiet?'off':'on');b.setAttribute('aria-pressed',String(quiet))}document.querySelector('#motion').onclick=()=>{quiet=!quiet;setMotion()};setMotion();function clock(){document.querySelector('#time').textContent=new Intl.DateTimeFormat('en-AU',{timeZone:'Australia/Melbourne',hour:'2-digit',minute:'2-digit',hour12:false}).format(new Date())}clock();setInterval(clock,60000);document.querySelector('#year').textContent=new Date().getFullYear();

function deskHint(){return matchMedia("(pointer:coarse)").matches?"TAP A PROJECT TO EXPLORE.":"DRAG A CARD. CLICK TO EXPLORE."}document.querySelector(".desk-note span").textContent=deskHint();
