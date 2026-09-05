/* Static design lives in HTML; this script updates values only. */
const hpLabel56=document.getElementById('hpLabel56'),stLabel56=document.getElementById('stLabel56');
const hpTrack56=document.getElementById('hp').parentElement,stTrack56=document.getElementById('st').parentElement;
for(const [track,label] of [[hpTrack56,'Health'],[stTrack56,'Stamina']]){track.setAttribute('role','progressbar');track.setAttribute('aria-label',label);track.setAttribute('aria-valuemin','0')}
let lastHp56='',lastSt56='';
const oldUi56=ui;
ui=function(){
 oldUi56();const h=Math.max(0,Math.ceil(p.hp)),s=Math.max(0,Math.ceil(p.st)),hm=Math.ceil(P.h),sm=Math.ceil(P.s),ht=h+' / '+hm,st=s+' / '+sm;
 if(ht!==lastHp56){hpLabel56.querySelector('output').textContent=ht;hpTrack56.setAttribute('aria-valuenow',h);hpTrack56.setAttribute('aria-valuemax',hm);hpTrack56.parentElement.dataset.lowHealth=String(h<=hm*.25);lastHp56=ht}
 if(st!==lastSt56){stLabel56.querySelector('output').textContent=st;stTrack56.setAttribute('aria-valuenow',s);stTrack56.setAttribute('aria-valuemax',sm);lastSt56=st}
};
ui();
