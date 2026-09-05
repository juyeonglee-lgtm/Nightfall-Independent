/* Presentation only: preserve the existing bars and card selection handlers. */
const premiumStyle56=document.createElement('style');
premiumStyle56.textContent=`
.bars{left:24px;top:22px;width:min(330px,35vw);padding:14px 17px 15px 25px;background:linear-gradient(130deg,#182128f2,#080e14f2 65%);border:1px solid #8b79534d;border-radius:3px 14px 3px 14px;box-shadow:0 12px 36px #0008,inset 0 1px #ecd9aa20;isolation:isolate}
.bars:before{content:'';position:absolute;left:-5px;top:21px;width:9px;height:9px;transform:rotate(45deg);background:#c5a668;border:2px solid #302b20;box-shadow:0 0 12px #d9b66a55}
.bars:after{content:'';position:absolute;left:10px;top:13px;bottom:13px;width:1px;background:linear-gradient(transparent,#c6a77077,transparent)}
.resourceLabel56{display:flex;justify-content:space-between;align-items:baseline;margin:0 0 6px;color:#c6b99a;font:600 9px Arial,sans-serif;letter-spacing:.22em}
.resourceLabel56 output{font:500 11px Arial,sans-serif;font-variant-numeric:tabular-nums;letter-spacing:.04em;color:#eee6d4}
.resourceLabel56.stamina56{margin-top:12px;color:#9ebfb4}
.bars .bar{position:relative;height:13px;margin:0;background:linear-gradient(#020508,#11171d);border:1px solid #83735466;border-radius:2px;box-shadow:0 1px 0 #eee1ba12,inset 0 2px 5px #000;overflow:hidden}
.bars .bar:last-child{height:9px;border-color:#56887855}
.bars .bar:after{content:'';position:absolute;inset:0;background:repeating-linear-gradient(90deg,transparent 0,transparent calc(20% - 1px),#01040966 calc(20% - 1px),#01040966 20%);pointer-events:none;box-shadow:inset 0 1px #fff3}
.bars .fill{position:relative;transition:width .14s ease-out;box-shadow:inset 0 1px #fff5,inset 0 -2px #0005}
.bars .hp{background:linear-gradient(180deg,#f38b79 0,#be3c49 32%,#831d35 82%,#521a2a);box-shadow:inset 0 1px #ffe0be88,0 0 14px #cd394b77}
.bars .st{background:linear-gradient(180deg,#c5e5bb,#66b69d 40%,#246c64);box-shadow:inset 0 1px #edffe299,0 0 12px #62c1a555}
.bars[data-low-health=true]{border-color:#ce5b5866;box-shadow:0 12px 36px #0008,inset 0 0 22px #aa26301c}
.extreme19{top:145px!important;left:25px!important;right:auto!important;border-color:#a78d5444!important;color:#bba879!important;background:#080d14c9!important;font-size:9px!important}
#up{overflow-y:auto;padding:36px 22px;background:radial-gradient(ellipse at 50% 8%,#263337cc,transparent 62%),linear-gradient(#03070ef2,#020409fa);backdrop-filter:blur(13px)}
#up>div{width:min(1280px,100%);margin:auto}
#up h1{font:400 clamp(25px,3.6vw,48px) Georgia,serif;letter-spacing:.15em;color:#ece2ca;text-shadow:0 2px 20px #d0b77a22}
#up h1:before{content:'✦';display:block;font-size:22px;letter-spacing:0;color:#bc9c62;margin-bottom:15px}
#up .offerSub{margin:13px 0 30px;color:#a0aaa9;font:10px Arial,sans-serif;letter-spacing:.23em;line-height:1.8}
#cards{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:17px;align-items:stretch;padding:10px 0 18px}
#cards .card{--metal56:#8c9ba5;display:flex;flex-direction:column;position:relative;min-width:0;min-height:390px;width:auto;padding:0 19px 18px;isolation:isolate;overflow:hidden;border:1px solid #727a8055;border-radius:5px;background:linear-gradient(155deg,#202931,#0e151c 55%,#080e14);box-shadow:0 15px 28px #0007,inset 0 1px #e6dbbe22;color:#e8e1d3;transition:transform .2s ease,border-color .2s ease,box-shadow .2s ease;animation:none;text-align:left;cursor:pointer}
#cards .card.rare{--metal56:#85bacc}#cards .card.epic{--metal56:#c3a0e4}#cards .card.legendary{--metal56:#e7bd6f;border-color:#b995546e;background:linear-gradient(145deg,#322b22,#171a1d 55%,#101519)}
#cards .card:before{content:'';position:absolute;inset:7px;border:1px solid #cbbda31a;border-radius:2px;background:none;z-index:2;pointer-events:none}
#cards .card:after{content:'◆';position:absolute;right:16px;top:15px;color:var(--metal56);font-size:13px;z-index:4;text-shadow:0 0 12px var(--metal56)}
#cards .card.legendary:after{content:'✦';font-size:21px;top:9px}
#cards .card .rarity{position:absolute;left:17px;top:14px;z-index:4;padding:5px 8px;border:1px solid #ffffff20;border-radius:2px;background:#080e15df;color:var(--metal56);font:700 9px Arial,sans-serif;letter-spacing:.18em}
#cards .card .art{position:relative;flex:none;height:170px;width:calc(100% + 38px);margin:0 -19px 0;border-bottom:1px solid #c6b78e33;filter:saturate(.75) contrast(1.06);background-color:#10181f}
#cards .card .art:after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,#03080c15 35%,#0e151c);box-shadow:inset 0 1px #ffffff16}
#cards .card b{position:relative;z-index:3;display:block;margin:6px 0 14px;min-height:46px;padding-top:7px;font:400 19px/1.25 Georgia,serif;letter-spacing:.025em;color:#f0e9db;overflow-wrap:anywhere}
#cards .card b:after{content:'';position:absolute;bottom:-6px;left:0;width:30px;height:1px;background:var(--metal56);opacity:.7}
#cards .card .desc{display:block;position:relative;font:13px/1.65 Arial,sans-serif;color:#b8c1c6;margin:4px 0 22px;overflow-wrap:anywhere}
#cards .card .power{position:relative;left:auto;bottom:auto;display:block;margin-top:auto;padding-top:12px;border-top:1px solid #d1be9326;color:var(--metal56);font:700 9px/1.5 Arial,sans-serif;letter-spacing:.15em}
#cards .card .v19boost{font-size:9px;color:#bda775;margin-top:8px}
#cards .card:hover,#cards .card:focus-visible{transform:translateY(-7px);border-color:var(--metal56);box-shadow:0 22px 42px #000a,inset 0 1px #f5e4b34d}
#cards .card:focus-visible{outline:2px solid var(--metal56);outline-offset:4px}
#cards .card:active{transform:translateY(-2px)}
@media(max-width:1050px){#cards{gap:12px}#cards .card{padding-left:14px;padding-right:14px}#cards .card .art{width:calc(100% + 28px);margin-left:-14px;margin-right:-14px;height:145px}#cards .card b{font-size:17px}}
@media(max-width:800px){#cards{grid-template-columns:repeat(2,minmax(0,1fr));max-width:620px;margin:auto}#cards .card{min-height:345px}.bars{left:12px;top:12px;width:min(290px,42vw);padding:10px 10px 11px 17px}.resourceLabel56{font-size:8px;letter-spacing:.12em}.resourceLabel56 output{font-size:10px}.extreme19{left:13px!important;top:124px!important}#up{padding:25px 18px}}
@media(max-width:420px){#cards{grid-template-columns:1fr;max-width:300px}#cards .card{min-height:340px}.bars{width:44vw}.resourceLabel56{letter-spacing:0}.resourceLabel56 output{font-size:9px}}
@media(prefers-reduced-motion:reduce){#cards .card,.bars .fill{transition:none}#cards .card:hover{transform:none}}
`;
document.head.appendChild(premiumStyle56);
const hpLabel56=document.createElement('div'),stLabel56=document.createElement('div');
hpLabel56.className='resourceLabel56';hpLabel56.innerHTML='<span>VITALITY / HP</span><output></output>';
stLabel56.className='resourceLabel56 stamina56';stLabel56.innerHTML='<span>STAMINA</span><output></output>';
const hpTrack56=document.getElementById('hp').parentElement,stTrack56=document.getElementById('st').parentElement;
hpTrack56.before(hpLabel56);stTrack56.before(stLabel56);
for(const [track,label] of [[hpTrack56,'Health'],[stTrack56,'Stamina']]){track.setAttribute('role','progressbar');track.setAttribute('aria-label',label);track.setAttribute('aria-valuemin','0')}
let lastHp56='',lastSt56='';
const oldUi56=ui;
ui=function(){
 oldUi56();const h=Math.max(0,Math.ceil(p.hp)),s=Math.max(0,Math.ceil(p.st)),hm=Math.ceil(P.h),sm=Math.ceil(P.s),ht=h+' / '+hm,st=s+' / '+sm;
 if(ht!==lastHp56){hpLabel56.querySelector('output').textContent=ht;hpTrack56.setAttribute('aria-valuenow',h);hpTrack56.setAttribute('aria-valuemax',hm);hpTrack56.parentElement.dataset.lowHealth=String(h<=hm*.25);lastHp56=ht}
 if(st!==lastSt56){stLabel56.querySelector('output').textContent=st;stTrack56.setAttribute('aria-valuenow',s);stTrack56.setAttribute('aria-valuemax',sm);lastSt56=st}
};
ui();
