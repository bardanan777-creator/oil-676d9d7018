/* Bulb illustrations: original SVG drawings (otopoint), one per base-type family. No third-party images. */
(function(){
let N=0;const G=()=>'<defs><radialGradient id="bg'+N+'" cx=".45" cy=".4" r=".6"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#cfe3f1"/></radialGradient></defs>';
const S=(b)=>{N++;return '<svg viewBox="0 0 64 64" width="64" height="64" role="img" xmlns="http://www.w3.org/2000/svg">'+G()+b.replace(/url\(#bg\)/g,'url(#bg'+N+')')+'</svg>';};
const glass=(x,y,w,h)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${w/2}" fill="url(#bg)" stroke="#5a7d96" stroke-width="1.5"/>`;
const fil=(x,y1,y2)=>`<path d="M${x-3} ${y2} L${x-3} ${y1+4} M${x+3} ${y2} L${x+3} ${y1+4}" stroke="#777" stroke-width="1"/><path d="M${x-3} ${y1+4} q3 -4 6 0" stroke="#e08a00" stroke-width="1.6" fill="none"/>`;
const metal='#b9bec4',plast='#3b3f45';
const F={
 H4:()=>S(glass(24,4,16,30)+fil(32,8,30)+fil(32,16,30)+`<rect x="18" y="34" width="28" height="5" fill="${metal}" stroke="#666"/><path d="M14 36 h6 M44 36 h6 M30 30 h4" stroke="#666" stroke-width="3"/><rect x="25" y="39" width="14" height="10" fill="${plast}"/><path d="M27 49v10M32 49v10M37 49v10" stroke="#c9a227" stroke-width="2.5"/>`),
 H7:()=>S(glass(26,4,12,30)+fil(32,8,30)+`<rect x="20" y="34" width="24" height="5" rx="1" fill="${metal}" stroke="#666"/><path d="M18 36.5h4M42 36.5h4" stroke="#666" stroke-width="4"/><rect x="25" y="39" width="14" height="12" fill="${plast}"/><path d="M29 51v9M35 51v9" stroke="#c9a227" stroke-width="2.5"/>`),
 H1:()=>S(glass(26,4,12,30)+fil(32,8,30)+`<rect x="22" y="34" width="20" height="6" fill="${metal}" stroke="#666"/><path d="M42 37 h12 v6" stroke="#888" stroke-width="3" fill="none"/><path d="M32 40v18" stroke="#c9a227" stroke-width="3"/>`),
 H3:()=>S(glass(18,14,12,26)+fil(24,18,40).replace(/M21/g,'M21')+`<rect x="30" y="20" width="10" height="14" fill="${metal}" stroke="#666"/><path d="M40 27 C52 27 50 50 58 52" stroke="#222" stroke-width="2" fill="none"/>`),
 H11:()=>S(glass(26,4,12,30)+fil(32,8,30)+`<rect x="21" y="34" width="22" height="6" rx="1" fill="${metal}" stroke="#666"/><path d="M26 40 v14 h22 v-8 h-8" fill="none" stroke="${plast}" stroke-width="7"/><path d="M46 50h10" stroke="#c9a227" stroke-width="2"/>`),
 HB:()=>S(glass(26,4,12,26)+fil(32,8,26)+`<rect x="20" y="30" width="24" height="6" rx="2" fill="${plast}"/><path d="M18 33h6M40 33h6" stroke="${plast}" stroke-width="5"/><path d="M28 36 v14 h20" fill="none" stroke="${plast}" stroke-width="9"/><path d="M48 46h8M48 52h8" stroke="#c9a227" stroke-width="2"/>`),
 XEN:()=>S(`<rect x="29" y="4" width="6" height="26" rx="3" fill="url(#bg)" stroke="#5a7d96" stroke-width="1.5"/><ellipse cx="32" cy="17" rx="4" ry="5" fill="#dff" stroke="#5a7d96"/><path d="M28 30 h8 M30 4 v-0" stroke="#777"/><rect x="18" y="30" width="28" height="6" fill="${metal}" stroke="#666"/><rect x="22" y="36" width="20" height="20" rx="3" fill="${plast}"/>`),
 WEDGE:()=>S(glass(22,4,20,36)+fil(32,10,36)+`<rect x="23" y="40" width="18" height="14" rx="1" fill="#e6eef4" stroke="#5a7d96" stroke-width="1.5"/><path d="M26 54v6M38 54v6" stroke="#c9a227" stroke-width="2"/>`),
 BAY:()=>S(`<path d="M20 30 a12 12 0 1 1 24 0 v4 h-24z" fill="url(#bg)" stroke="#5a7d96" stroke-width="1.5"/>`+fil(32,14,34)+`<rect x="22" y="34" width="20" height="18" fill="${metal}" stroke="#666"/><path d="M18 42h4M42 42h4" stroke="#666" stroke-width="3"/><circle cx="32" cy="55" r="3" fill="#c9a227"/>`),
 BAY2:()=>S(`<path d="M20 30 a12 12 0 1 1 24 0 v4 h-24z" fill="url(#bg)" stroke="#5a7d96" stroke-width="1.5"/>`+fil(29,12,34)+fil(35,18,34)+`<rect x="22" y="34" width="20" height="18" fill="${metal}" stroke="#666"/><path d="M18 40h4M42 44h4" stroke="#666" stroke-width="3"/><circle cx="28" cy="55" r="2.6" fill="#c9a227"/><circle cx="36" cy="55" r="2.6" fill="#c9a227"/>`),
 FEST:()=>S(`<rect x="14" y="24" width="36" height="14" rx="7" fill="url(#bg)" stroke="#5a7d96" stroke-width="1.5"/><path d="M20 31 h24" stroke="#e08a00" stroke-width="1.5"/><path d="M6 24h10v14H6zM48 24h10v14H48z" fill="${metal}" stroke="#666"/><path d="M8 26v10M56 26v10" stroke="#888"/>`),
 LED:()=>S(`<rect x="8" y="12" width="48" height="40" rx="6" fill="#eef4ff" stroke="#4a6fa5" stroke-width="1.5"/><g fill="#ffd54a" stroke="#c69200">${[18,32,46].map(x=>`<rect x="${x-5}" y="22" width="10" height="10" rx="2"/>`).join('')}</g><text x="32" y="46" font-size="10" text-anchor="middle" font-family="sans-serif" fill="#4a6fa5" font-weight="bold">LED</text>`)
};
const HE={H4:'הלוגן דו-חוטית (H4)',H7:'הלוגן',H1:'הלוגן',H3:'הלוגן עם כבל',H11:'הלוגן בסיס פלסטיק',HB:'הלוגן בסיס פלסטיק',XEN:'קסנון (פריקה)',WEDGE:'בסיס טריז (ללא מתכת)',BAY:'בסיס כידון מתכתי (חד-קצה), חוט אחד',BAY2:'בסיס כידון מתכתי (חד-קצה), שני חוטים',FEST:'נורת קצוות (פסטון)',LED:'LED – לא מוחלף כנורה'};
/* explicit printed ECE codes -> family. Unknown codes => no image. */
const CODES=[[/\bH4\b/,'H4','H4'],[/\bH7(LL)?\b/,'H7','H7'],[/\bH1\b/,'H1','H1'],[/\bH3\b/,'H3','H3'],[/\bH(8|9|11|16)(B)?\b/,'H11',null],[/\bH(15|19)\b/,'H4',null],[/(\bHB3A?|\b9005)/,'HB','HB3'],[/(\bHB4A?|\b9006)/,'HB','HB4'],[/\bHIR2\b|\b9012\b/,'HB','HIR2'],[/\bHIR1\b|\b9011\b/,'HB','HIR1'],[/\bPS[XY]2[46]W\b/,'H11',null],[/\bD[1-8][SR]\b/,'XEN',null],
 [/\b(W5W|WY5W|W16W|WY16W|W21W|WY21W|W21\/5W|W3W|W2\.3W|W10W|T10|T20|T16|T15|194|168|7440|7443|3156|3157|3157NA|921|912)\b/,'WEDGE',null],[/\b(P21\/5W|P21\/4W|P27\/7W|BAY15d|1157|2357|1157NA|2357NA|3157NA|3157A)\b/,'BAY2',null],[/\b(P21W|PY21W|P27W|PY24W|HY21W|PR21W|R5W|R10W|RY10W|BA15s|BAU15s|BAY9s|H6W|H21W|1156|7506|1141)\b/,'BAY',null],[/\b(C5W|C10W|C21W|C3W|SV8\.5|SV7|T10x3[16]|T11x3[16]|6411|DE3175|DE3021)\b/i,'FEST',null]];
/* base-type words printed in Hebrew books (only when the book states the base type; no code assumed) */
const WORDS=[[/(טריז|בסיס יתד)/,'WEDGE'],[/(קצה כפול|שני קצוות|בעלות שני קצוות)/,'FEST'],[/(קצה יחיד|צד אחד|צד אחר)/,'BAY'],[/\bLED\b/,'LED']];
window.bulbIcons=function(txt){
  if(!txt) return '';
  const s=String(txt),out=[],seen=new Set();
  for(const [re,fam,lab] of CODES){const g=new RegExp(re.source,re.flags.includes('g')?re.flags:re.flags+'g');for(const m of s.matchAll(g)){const L=lab||m[0];if(!seen.has(fam+L)){seen.add(fam+L);out.push([fam,L]);}}}
  if(!out.some(o=>o[0]!=='LED')) for(const [re,fam] of WORDS){if(re.test(s)&&!out.some(o=>o[0]===fam)){
    let f=fam; if(fam==='BAY'&&/\d+\/\d+\s*W?/.test(s)) f='BAY2'; out.push([f,fam==='LED'?'LED':'']);}}
  if(/\bLED\b/.test(s)&&!out.some(o=>o[0]==='LED')) out.push(['LED','LED']);
  return out.map(([f,l])=>`<span class="bimg" title="${HE[f]}">${F[f]()}<span class="bcap">${l?'<b dir="ltr">'+l+'</b><br>':''}${HE[f]}</span></span>`).join('');
};
})();
