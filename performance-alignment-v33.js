/* Nightfall v33: low-cost aligned VFX, larger lancer and three real bosses. */
const BOSS33=new Image();BOSS33.src='boss-trio-v33.png';
const SPR33=spriteActor;spriteActor=function(e,pl=0){if(pl&&weapon===1&&READY25&&!(typeof drinkT12!=='undefined'&&drinkT12>0)){let z=p.attackMax?1-p.attack/p.attackMax:0,fr=p.parry?6:p.hurt?7:p.roll?2:p.attack?(z<.25?3:z<.58?4:5):p.move?1+(Math.floor(p.step*.72)&1):0,img=ISO25[1][fr];if(img){let a=p.attack?(p.swingAng??p.ang):p.ang,face=Math.cos(a)<0?-1:1,dh=285,scale=dh/LC15.height,dw=img.width*scale,bob=p.move?Math.sin(p.step*.7)*1.7:0,lunge=p.attack?Math.sin(Math.min(1,z/.72)*Math.PI)*42:0;X.save();X.translate(p.x+face*lunge,p.y+9-bob);X.scale(face,1);if(p.roll){X.rotate(face*.07);X.globalAlpha=.78}if(p.hurt)X.globalAlpha=.72;X.imageSmoothingEnabled=true;X.imageSmoothingQuality='high';X.drawImage(img,-dw/2,-dh,dw,dh);X.restore();return true}}if(!pl&&e.boss&&BOSS33.complete&&BOSS33.naturalWidth){let cell=BOSS33.naturalWidth/3,k=Math.abs((w||1)-1)%3,sw=cell,sh=BOSS33.naturalHeight,z=e.attack?1-e.attack/e.attackMax:0,face=Math.cos(Math.atan2(p.y-e.y,p.x-e.x))<0?-1:1,dh=292,dw=sw/sh*dh,bob=Math.sin(time*2.1+k)*2,lean=e.attack?Math.sin(z*Math.PI)*face*.055:0,col=['#ef513e','#78baff','#50e4db'][k];X.save();X.translate(e.x,e.y+9-bob);X.fillStyle='#000b';X.beginPath();X.ellipse(0,5,dw*.24,11,0,0,7);X.fill();X.scale(face,1);X.rotate(lean);if(e.hurt)X.globalAlpha=.58+Math.sin(time*48)*.3;X.imageSmoothingEnabled=true;X.imageSmoothingQuality='high';X.drawImage(BOSS33,k*cell,0,sw,sh,-dw/2,-dh,dw,dh);X.restore();hp16(e,dh,108,col);return true}return SPR33(e,pl)};
const SLASH33=slash31;
slash31=function(s){
 if(!p.attack||!p.attackMax||s.id!==attackSeq||s.w!==0)return SLASH33(s);
 let z=1-p.attack/p.attackMax;if(z<.255||z>.735)return;
 let t=clamp((z-.255)/.48,0,1),ease=1-Math.pow(1-t,3),face=Math.cos(p.ang)<0?-1:1;
 let handX=face*18,handY=-61,r=s.heavy?126:108,ang=-1.48+ease*2.18;
 let tailAng=ang-(s.heavy?.34:.27),tipX=handX+face*Math.cos(ang)*r,tipY=handY+Math.sin(ang)*r*.72;
 let tailX=handX+face*Math.cos(tailAng)*r*.96,tailY=handY+Math.sin(tailAng)*r*.72,pulse=Math.sin(Math.PI*t);
 X.save();X.translate(p.x,p.y);X.globalCompositeOperation='lighter';X.lineCap='round';
 let g=X.createLinearGradient(tailX,tailY,tipX,tipY);g.addColorStop(0,'rgba(131,216,255,0)');g.addColorStop(.58,'#83d8ff88');g.addColorStop(1,'#ffffff');
 X.shadowColor='#83d8ff';X.shadowBlur=s.heavy?30:22;X.strokeStyle=g;X.lineWidth=(s.heavy?12:8)*pulse;
 X.beginPath();X.moveTo(tailX,tailY);X.quadraticCurveTo((tailX+tipX)*.5+face*7,(tailY+tipY)*.5-5,tipX,tipY);X.stroke();
 X.globalAlpha=.9*pulse;X.fillStyle='#ffffff';X.beginPath();X.arc(tipX,tipY,s.heavy?5.5:4,0,Math.PI*2);X.fill();
 X.globalAlpha=.32*pulse;X.strokeStyle='#83d8ff';X.lineWidth=2;X.beginPath();X.moveTo(tipX-face*Math.cos(ang)*28,tipY-Math.sin(ang)*20);X.lineTo(tipX+face*Math.cos(ang)*16,tipY+Math.sin(ang)*11);X.stroke();X.restore()
};
const SHARD33=shard31;shard31=function(x,y,c,a,n=10,pow=1){return SHARD33(x,y,c,a,Math.min(n,pow>1.2?12:7),pow)};
const UP33=update;update=function(dt){UP33(dt);if(VFX31.length>120)VFX31.splice(0,VFX31.length-120)};
const DRAW33=draw;draw=function(){let a=p&&p.ang,s=p&&p.swingAng;if(p&&p.attack){let face=Math.cos(s??a)<0?-1:1;p.ang=face<0?Math.PI:0;p.swingAng=p.ang}globalThis.NOLEGACY35=true;DRAW33();globalThis.NOLEGACY35=false;if(p){p.ang=a;p.swingAng=s}};
const RESET33=reset;reset=function(){ATTACK31=null;VFX31.length=0;FLASH31=0;RESET33()};

/* v35: boss-only attack choreography. */
const ACTOR35=spriteActor;
spriteActor=function(e,pl=0){
 if(!pl&&e.boss&&BOSS33.complete&&BOSS33.naturalWidth){
  let cell=BOSS33.naturalWidth/3,k=Math.abs((w||1)-1)%3,sh=BOSS33.naturalHeight,z=e.attack?1-e.attack/e.attackMax:0,
  face=Math.cos(Math.atan2(p.y-e.y,p.x-e.x))<0?-1:1,dh=292,dw=cell/sh*dh,col=['#ef513e','#78baff','#50e4db'][k],
  charge=clamp(z/.38,0,1),hit=clamp((z-.38)/.25,0,1),recover=clamp((z-.63)/.37,0,1),ox=0,oy=0,rot=0,sx=1,sy=1,alpha=1;
  if(e.attack){
   if(k===0){ox=face*(-18*charge+76*hit-58*recover);rot=face*(-.13*charge+.25*hit-.12*recover);sy=1-.07*Math.sin(hit*Math.PI)}
   else if(k===1){oy=-22*Math.sin(charge*Math.PI/2)+18*hit-18*recover;sx=sy=1+.10*charge-.08*hit;rot=face*.035*Math.sin(time*22)}
   else{oy=-34*charge+70*hit-36*recover;sy=1+.13*charge-.18*Math.sin(hit*Math.PI);sx=1+(1-sy)*.45;alpha=.58+.42*Math.abs(Math.sin((z+.1)*Math.PI))}
  }
  X.save();X.globalCompositeOperation='source-over';X.translate(e.x+ox,e.y+9+oy);X.fillStyle='#000b';X.beginPath();X.ellipse(0,5,dw*.24*(1+hit*.35),11*(1-hit*.3),0,0,7);X.fill();
  X.scale(face*sx,sy);X.rotate(rot);if(e.hurt)X.globalAlpha=.58+Math.sin(time*48)*.3;else X.globalAlpha=alpha;
  X.imageSmoothingEnabled=true;X.imageSmoothingQuality='high';X.drawImage(BOSS33,k*cell,0,cell,sh,-dw/2,-dh,dw,dh);X.restore();
  if(e.attack){X.save();X.globalCompositeOperation='lighter';let pulse=Math.sin(Math.PI*clamp((z-.12)/.76,0,1));X.globalAlpha=pulse;
   if(k===0){X.strokeStyle=col;X.shadowColor=col;X.shadowBlur=24;X.lineWidth=7;X.beginPath();X.arc(e.x+ox,e.y-105+oy,92,z*5.4-1.8,z*5.4+.25);X.stroke()}
   else if(k===1){X.strokeStyle=col;X.shadowColor=col;X.shadowBlur=28;for(let i=0;i<3;i++){X.globalAlpha=pulse*(.75-i*.16);X.lineWidth=3;X.beginPath();X.ellipse(e.x,e.y-112+oy,46+i*13,18+i*6,time*(i%2?1:-1),0,7);X.stroke()}}
   else{let g=X.createLinearGradient(e.x,e.y-235+oy,e.x,e.y-15+oy);g.addColorStop(0,'rgba(80,228,219,0)');g.addColorStop(1,col);X.strokeStyle=g;X.shadowColor=col;X.shadowBlur=30;X.lineWidth=10;X.beginPath();X.moveTo(e.x,e.y-235+oy);X.lineTo(e.x,e.y-18+oy);X.stroke()}
   X.restore()
  }
  hp16(e,dh,108,col);return true
 }
 return ACTOR35(e,pl)
};

/* v38: final class frame ownership and weapon-authentic VFX. */
let LANCER38=[],MAGEIDLE38=null,READY38=false;
function maskLancer38(img){
 if(!img)return null;let w=img.width,h=img.height,cw=w/3,mid=w/2,left=Math.floor(mid-cw*1.08),right=Math.ceil(mid+cw*.76),
 q=img.getContext('2d',{willReadFrequently:true}),im=q.getImageData(0,0,w,h),d=im.data;
 for(let y=0;y<h;y++)for(let x=0;x<w;x++)if(x<left||x>right)d[(y*w+x)*4+3]=0;q.putImageData(im,0,0);return img
}
function prep38(){
 if(!LC15||!LC15.width||!CLEAN10||!CLEAN10.width){setTimeout(prep38,120);return}
 for(let f=0;f<8;f++)LANCER38[f]=maskLancer38(isolate26(LC15,1,0,f));
 let cw=CLEAN10.width/8,ch=CLEAN10.height/4,c=document.createElement('canvas');c.width=cw;c.height=ch;
 c.getContext('2d').drawImage(CLEAN10,0,ch*3,c.width,ch,0,0,c.width,ch);MAGEIDLE38=c;READY38=true
}
prep38();
function drawLancer38(img,drink=false){
 let a=p.attack?(p.swingAng??p.ang):p.ang,face=Math.cos(a)<0?-1:1,z=p.attackMax?1-p.attack/p.attackMax:0,
 dh=315,scale=dh/LC15.height,dw=img.width*scale,bob=p.move?Math.sin(p.step*.7)*1.7:0,
 lunge=p.attack?Math.sin(Math.min(1,z/.72)*Math.PI)*46:0;
 X.save();X.translate(p.x+face*lunge,p.y+9-bob);X.scale(face,1);if(p.roll){X.rotate(face*.07);X.globalAlpha=.78}if(p.hurt)X.globalAlpha=.72;
 if(drink)X.rotate(face*-.035);X.imageSmoothingEnabled=true;X.imageSmoothingQuality='high';X.drawImage(img,-dw/2,-dh,dw,dh);X.restore();
 if(drink){let q=clamp(drinkT12/.9,0,1),bx=p.x+face*29,by=p.y-91;X.save();X.globalCompositeOperation='lighter';X.shadowColor='#ffb347';X.shadowBlur=22;X.fillStyle='#fff0a8';X.globalAlpha=.65+.25*Math.sin(time*15);X.beginPath();X.arc(bx,by,5,0,7);X.fill();X.strokeStyle='#ffb347';X.lineWidth=3;X.globalAlpha=.55*q;X.beginPath();X.arc(p.x,p.y-73,30+(1-q)*18,0,7);X.stroke();X.restore()}
}
const ACTOR38=spriteActor;
spriteActor=function(e,pl=0){
 if(pl&&READY38&&weapon===1){
  let drinking=typeof drinkT12!=='undefined'&&drinkT12>0,z=p.attackMax?1-p.attack/p.attackMax:0,
  fr=drinking?0:p.parry?6:p.hurt?7:p.roll?2:p.attack?(z<.25?3:z<.58?4:5):p.move?1+(Math.floor(p.step*.72)&1):0,img=LANCER38[fr];
  if(img){drawLancer38(img,drinking);return true}
 }
 if(pl&&READY38&&weapon===3&&!p.attack&&!p.parry&&!p.roll&&!p.hurt&&!p.move&&MAGEIDLE38){
  let face=Math.cos(p.ang)<0?-1:1,dh=198,dw=MAGEIDLE38.width/MAGEIDLE38.height*dh;
  X.save();X.translate(p.x,p.y+9+Math.sin(time*2)*.45);X.scale(face,1);X.imageSmoothingEnabled=true;X.imageSmoothingQuality='high';
  X.drawImage(MAGEIDLE38,-dw/2,-dh,dw,dh);X.restore();return true
 }
 return ACTOR38(e,pl)
};
const SLASH38=slash31;
slash31=function(s){
 if(!p.attack||!p.attackMax||s.id!==attackSeq||s.w===3)return SLASH38(s);
 let z=1-p.attack/p.attackMax;if(z<.24||z>.76)return;let t=clamp((z-.24)/.52,0,1),ease=1-Math.pow(1-t,3),
 face=Math.cos(p.ang)<0?-1:1,c=COL31[s.w],pulse=Math.sin(Math.PI*t);
 X.save();X.translate(p.x,p.y);X.globalCompositeOperation='lighter';X.lineCap='round';X.shadowColor=c;
 if(s.w===0){
  let hx=face*17,hy=-62,r=s.heavy?166:148,a=-1.5+ease*2.22,a0=a-.34,tx=hx+face*Math.cos(a)*r,ty=hy+Math.sin(a)*r*.72;
  let g=X.createRadialGradient(hx,hy,r*.55,hx,hy,r*1.25);g.addColorStop(0,'rgba(0,0,0,0)');g.addColorStop(.68,c+'35');g.addColorStop(1,c);
  X.shadowBlur=30;X.globalAlpha=.78;X.strokeStyle=g;X.lineWidth=(s.heavy?42:34)*pulse;X.beginPath();X.arc(hx,hy,r-10,a0,a);X.stroke();X.globalAlpha=1;
  X.strokeStyle='#f8fdff';X.shadowBlur=12;X.lineWidth=2.4*pulse;X.beginPath();X.arc(hx,hy,r+4,a0+.03,a);X.stroke();
  X.fillStyle='#fff';X.shadowBlur=24;X.beginPath();X.arc(tx,ty,4.5*pulse,0,7);X.fill()
 }else if(s.w===1){
  let start=face*102,end=face*(112+ease*(s.heavy?142:118)),y=-82,g=X.createLinearGradient(start,y,end,y);
  g.addColorStop(0,'rgba(0,0,0,0)');g.addColorStop(.62,c+'aa');g.addColorStop(1,'#fff');X.shadowBlur=26;X.strokeStyle=g;
  X.lineWidth=(s.heavy?12:8)*pulse;X.beginPath();X.moveTo(start,y);X.lineTo(end,y);X.stroke();X.fillStyle='#fff';X.beginPath();X.arc(end,y,s.heavy?7:5,0,7);X.fill()
 }else{
  let hx=face*8,hy=-72,r=s.heavy?184:160,a=-1.72+ease*2.5,a0=a-.42;
  X.shadowBlur=34;X.strokeStyle=c;X.lineWidth=(s.heavy?24:17)*pulse;X.beginPath();X.arc(hx,hy,r,a0,a);X.stroke();
  X.strokeStyle='#fff3db';X.lineWidth=3*pulse;X.stroke();
  if(t>.58){let q=(t-.58)/.42,ix=face*118,iy=-5;X.globalAlpha=(1-q)*.85;X.strokeStyle='#ff9b58';X.lineWidth=7*(1-q)+2;
   X.beginPath();X.ellipse(ix,iy,18+q*58,6+q*17,0,Math.PI,Math.PI*2);X.stroke();
   for(let i=-2;i<=2;i++){X.beginPath();X.moveTo(ix+face*i*9,iy);X.lineTo(ix+face*i*14,iy-(12+q*34)*(1-Math.abs(i)*.12));X.stroke()}
  }
 }
 X.restore()
};

/* v39: keep the sword fighter body scale stable across trimmed attack art. */
const ACTOR39=spriteActor;
spriteActor=function(e,pl=0){
 if(pl&&weapon===0&&p.attack&&p.attackMax&&!p.roll&&!p.hurt&&typeof drinkT12!=='undefined'&&drinkT12<=0){
  let z=1-p.attack/p.attackMax,idx=z<.30?0:z<.72?1:2,img=TRIM30[0][idx];
  if(img){let a=p.swingAng??p.ang,face=Math.cos(a)<0?-1:1,dh=160,dw=img.width/img.height*dh,lunge=Math.sin(Math.min(1,z/.72)*Math.PI)*12;
   X.save();X.translate(p.x+face*lunge,p.y+9);X.scale(face,1);X.imageSmoothingEnabled=true;X.imageSmoothingQuality='high';
   X.drawImage(img,-dw/2,-dh,dw,dh);X.restore();return true}
 }
 return ACTOR39(e,pl)
};

/* v40: full-blade aura, clean lancer attacks, complete mage staff and lean hit feedback. */
const MAGE40=new Image();let MAGEC40=null;MAGE40.src='hero-staff.png';MAGE40.onload=()=>blackKey12(MAGE40,c=>MAGEC40=c);
const ACTOR40=spriteActor;
spriteActor=function(e,pl=0){
 if(pl&&weapon===3&&!p.attack&&!p.parry&&!p.roll&&!p.hurt&&!p.move&&MAGEC40){
  let cw=MAGEC40.width/8,ch=MAGEC40.height,face=Math.cos(p.ang)<0?-1:1,dh=205,dw=cw/ch*dh;
  X.save();X.translate(p.x,p.y+9+Math.sin(time*2)*.45);X.scale(face,1);X.imageSmoothingEnabled=true;X.imageSmoothingQuality='high';
  X.drawImage(MAGEC40,0,0,cw,ch,-dw/2,-dh,dw,dh);X.restore();return true
 }
 return ACTOR40(e,pl)
};
const SLASH40=slash31;
slash31=function(s){
 if(!p.attack||!p.attackMax||s.id!==attackSeq||s.w!==0)return SLASH40(s);
 let z=1-p.attack/p.attackMax;if(z<.24||z>.76)return;let t=clamp((z-.24)/.52,0,1),ease=1-Math.pow(1-t,3),
 face=Math.cos(p.ang)<0?-1:1,hx=face*17,hy=-62,r=s.heavy?170:152,a=-1.5+ease*2.22,a0=a-(s.heavy?.38:.32),inner=34,pulse=Math.sin(Math.PI*t);
 X.save();X.translate(p.x,p.y);X.globalCompositeOperation='lighter';X.shadowColor='#83d8ff';X.shadowBlur=28;
 let g=X.createRadialGradient(hx,hy,inner,hx,hy,r);g.addColorStop(0,'rgba(50,150,255,0)');g.addColorStop(.38,'#4ebeff38');g.addColorStop(.78,'#83d8ffaa');g.addColorStop(1,'#f7fdff');
 X.fillStyle=g;X.globalAlpha=.82*pulse;X.beginPath();X.arc(hx,hy,r,a0,a);X.arc(hx,hy,inner,a,a0,true);X.closePath();X.fill();
 X.globalAlpha=pulse;X.strokeStyle='#f7fdff';X.lineWidth=2.5;X.beginPath();X.arc(hx,hy,r+3,a0+.03,a);X.stroke();X.restore()
};
const STRIKE40=strike;
strike=function(e,n){
 let hp=e&&e.hp,fl=fx.length,hl=hit19.length,sl=spark19.length,vl=VFX31.length,flash=FLASH31;
 STRIKE40(e,n);if(!e||typeof hp!=='number'||e.hp>=hp)return;
 fx.length=fl;hit19.length=hl;spark19.length=sl;VFX31.length=vl;FLASH31=flash;
 let a=p.swingAng??p.ang,c=COL31[weapon],count=e.dead?10:6;
 for(let i=0;i<count;i++){let q=a+(.5-Math.random())*.9,s=105+Math.random()*185,l=.14+Math.random()*.18;
  VFX31.push({k:'s',x:e.x,y:e.y-48,vx:Math.cos(q)*s,vy:Math.sin(q)*s,life:l,max:l,len:7+Math.random()*13,c:i%3?'#fff':c})}
};
const ROUND40=startRound;
startRound=function(){
 ROUND40();let q=clamp((w-1)/99,0,1),hpMul=1+1.8*q+2.2*q*q;
 enemies.forEach(e=>{e.hp=e.max=Math.round(e.max*hpMul);e.attackMax=Math.max(.18,e.attackMax*(1-.32*q));e.s14=(e.s14||1)*(1+.65*q)})
};
const HURT40=playerHurt;
playerHurt=function(n,e){let q=clamp((w-1)/99,0,1);HURT40(Math.ceil(n*(1+1.2*q*q)),e)};

/* v41: original procedural dark-orchestral score. No sampled or copied melody. */
let MUSIC41=null;
function startMusic41(){
 if(!audio||MUSIC41){if(audio&&audio.state==='suspended')audio.resume();return}
 let ac=audio,master=ac.createGain(),comp=ac.createDynamicsCompressor(),next=ac.currentTime+.08,step=0,
 tempo=76,beat=60/tempo,noise=ac.createBuffer(1,ac.sampleRate*.32,ac.sampleRate),nd=noise.getChannelData(0);
 for(let i=0;i<nd.length;i++)nd[i]=(Math.random()*2-1)*Math.pow(1-i/nd.length,2);
 master.gain.value=.62;master.connect(comp);comp.threshold.value=-20;comp.knee.value=18;comp.ratio.value=5;comp.attack.value=.012;comp.release.value=.28;comp.connect(ac.destination);
 const midi=n=>440*Math.pow(2,(n-69)/12),prog=[[38,45,50],[36,43,48],[34,41,46],[33,40,45],[31,38,43],[34,41,46]];
 function tone(freq,t,dur,type,vol,cut=900){
  let o=ac.createOscillator(),g=ac.createGain(),f=ac.createBiquadFilter();o.type=type;o.frequency.setValueAtTime(freq,t);
  f.type='lowpass';f.frequency.setValueAtTime(cut,t);g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(vol,t+.055);
  g.gain.exponentialRampToValueAtTime(.0001,t+dur);o.connect(f);f.connect(g);g.connect(master);o.start(t);o.stop(t+dur+.04)
 }
 function choir(note,t,dur,vol){for(let d of [-.12,.12]){let o=ac.createOscillator(),g=ac.createGain(),f=ac.createBiquadFilter();
  o.type='sawtooth';o.frequency.value=midi(note)*Math.pow(2,d/12);f.type='bandpass';f.frequency.value=720;f.Q.value=.7;
  g.gain.setValueAtTime(.0001,t);g.gain.linearRampToValueAtTime(vol,t+.8);g.gain.linearRampToValueAtTime(vol*.62,t+dur-.7);g.gain.linearRampToValueAtTime(.0001,t+dur);
  o.connect(f);f.connect(g);g.connect(master);o.start(t);o.stop(t+dur+.05)}}
 function drum(t,boss,accent){let s=ac.createBufferSource(),f=ac.createBiquadFilter(),g=ac.createGain();s.buffer=noise;f.type='lowpass';f.frequency.value=boss?190:130;
  g.gain.setValueAtTime(accent?(boss ? .17 : .11):(boss ? .075 : .04),t);g.gain.exponentialRampToValueAtTime(.0001,t+.3);s.connect(f);f.connect(g);g.connect(master);s.start(t);
  if(accent)tone(boss?48:42,t,.28,'sine',boss ? .16 : .1,180)}
 function schedule(){
  let boss=!!(enemies&&enemies.some(e=>e.boss&&!e.dead)),bar=Math.floor(step/4),b=step%4,ch=prog[bar%prog.length],t=next;
  if(b===0){tone(midi(ch[0]-12),t,beat*3.8,'triangle',boss ? .075 : .052,260);tone(midi(ch[1]),t,beat*3.7,'sawtooth',boss ? .027 : .017,520);
   choir(ch[2]+12,t,beat*3.9,boss ? .016 : .008);if(boss)choir(ch[1]+12,t+.12,beat*3.5,.011)}
  drum(t,boss,b===0||b===2);if(boss&&b%2===1)tone(midi(ch[2]+(b===3?12:7)),t,beat*.72,'square',.018,700);
  if((bar%4===3)&&b>=2){let n=ch[1]+[0,3,7,10][b];tone(midi(n),t,beat*.8,'sawtooth',boss ? .033 : .018,1100)}
  next+=beat;step++
 }
 function tick(){if(next<ac.currentTime-.25)next=ac.currentTime+.05;while(next<ac.currentTime+1.1)schedule()}
 let timer=setInterval(tick,250);tick();MUSIC41={master,timer,setVolume:v=>master.gain.setTargetAtTime(clamp(v,0,.2),ac.currentTime,.08)}
}
$('#start').addEventListener('click',()=>setTimeout(startMusic41,0));
$('#retry').addEventListener('click',()=>setTimeout(startMusic41,0));

/* v42: exact-cell lancer, complete standalone mage, and blade-surface energy. */
const MAGE42=new Image();let MAGEC42=null;MAGE42.src='body-mage.png';MAGE42.onload=()=>blackKey12(MAGE42,c=>MAGEC42=c);
const ACTOR42=spriteActor;
spriteActor=function(e,pl=0){
 if(pl&&weapon===0&&CLEAN10&&CLEAN10.width&&!(typeof drinkT12!=='undefined'&&drinkT12>0)){
  let z=p.attackMax?1-p.attack/p.attackMax:0,fr=p.parry?6:p.hurt?7:p.roll?2:p.attack?(z<.25?3:z<.58?4:5):p.move?1+(Math.floor(p.step*.72)&1):0,
  cw=CLEAN10.width/8,ch=CLEAN10.height/4,a=p.attack?(p.swingAng??p.ang):p.ang,face=Math.cos(a)<0?-1:1,dh=176,dw=cw/ch*dh,
  bob=p.move?Math.sin(p.step*.7)*1.6:0,lunge=p.attack?Math.sin(Math.min(1,z/.72)*Math.PI)*12:0;
  X.save();X.translate(p.x+face*lunge,p.y+9-bob);X.scale(face,1);if(p.roll){X.rotate(face*.07);X.globalAlpha=.78}if(p.hurt)X.globalAlpha=.72;
  X.imageSmoothingEnabled=true;X.imageSmoothingQuality='high';X.drawImage(CLEAN10,fr*cw,0,cw,ch,-dw/2,-dh,dw,dh);X.restore();return true
 }
 if(pl&&weapon===1&&LC15&&LC15.width){
  let z=p.attackMax?1-p.attack/p.attackMax:0,drinking=typeof drinkT12!=='undefined'&&drinkT12>0,
  fr=drinking?0:p.parry?6:p.hurt?7:p.roll?2:p.attack?(z<.25?3:z<.58?4:5):p.move?1+(Math.floor(p.step*.72)&1):0,
  cw=LC15.width/8,ch=LC15.height,a=p.attack?(p.swingAng??p.ang):p.ang,face=Math.cos(a)<0?-1:1,dh=315,dw=cw/ch*dh,
  bob=p.move?Math.sin(p.step*.7)*1.7:0,lunge=p.attack?Math.sin(Math.min(1,z/.72)*Math.PI)*46:0;
  X.save();X.translate(p.x+face*lunge,p.y+9-bob);X.scale(face,1);if(p.roll){X.rotate(face*.07);X.globalAlpha=.78}if(p.hurt)X.globalAlpha=.72;
  X.imageSmoothingEnabled=true;X.imageSmoothingQuality='high';X.drawImage(LC15,fr*cw,0,cw,ch,-dw/2,-dh,dw,dh);X.restore();
  if(drinking){let bx=p.x+face*29,by=p.y-91;X.save();X.globalCompositeOperation='lighter';X.fillStyle='#fff0a8';X.shadowColor='#ffb347';X.shadowBlur=22;
   X.beginPath();X.arc(bx,by,5,0,7);X.fill();X.restore()}return true
 }
 if(pl&&weapon===3&&!p.attack&&!p.parry&&!p.roll&&!p.hurt&&!p.move&&MAGEC42){
  let face=Math.cos(p.ang)<0?-1:1,dh=215,dw=MAGEC42.width/MAGEC42.height*dh;X.save();X.translate(p.x,p.y+9);X.scale(face,1);
  X.imageSmoothingEnabled=true;X.imageSmoothingQuality='high';X.drawImage(MAGEC42,-dw/2,-dh,dw,dh);X.restore();return true
 }
 return ACTOR42(e,pl)
};
const SLASH42=slash31;
slash31=function(s){
 SLASH42(s);if(!p.attack||!p.attackMax||s.id!==attackSeq||s.w!==0)return;
 let z=1-p.attack/p.attackMax;if(z<.24||z>.76)return;let t=clamp((z-.24)/.52,0,1),ease=1-Math.pow(1-t,3),
 face=Math.cos(p.ang)<0?-1:1,hx=face*17,hy=-62,r=s.heavy?170:152,a=-1.5+ease*2.22,pulse=Math.sin(Math.PI*t),
 sx=hx+face*Math.cos(a)*24,sy=hy+Math.sin(a)*17,tx=hx+face*Math.cos(a)*r,ty=hy+Math.sin(a)*r*.72;
 X.save();X.translate(p.x,p.y);X.globalCompositeOperation='lighter';X.lineCap='round';let g=X.createLinearGradient(sx,sy,tx,ty);
 g.addColorStop(0,'#4ebeff22');g.addColorStop(.22,'#58c8ff88');g.addColorStop(.78,'#a7e8ffdd');g.addColorStop(1,'#ffffff');
 X.strokeStyle=g;X.shadowColor='#64d2ff';X.shadowBlur=25;X.globalAlpha=.78*pulse;X.lineWidth=s.heavy?22:17;X.beginPath();X.moveTo(sx,sy);X.lineTo(tx,ty);X.stroke();
 X.globalAlpha=pulse;X.strokeStyle='#effcff';X.lineWidth=2.2;X.beginPath();X.moveTo(sx,sy);X.lineTo(tx,ty);X.stroke();X.restore()
};
function armMusic42(){
 if(!audio)audio=new (window.AudioContext||window.webkitAudioContext)();
 if(audio.state==='suspended')audio.resume();startMusic41()
}
document.addEventListener('pointerdown',armMusic42,{capture:true,once:true});
document.addEventListener('click',armMusic42,{capture:true});
document.addEventListener('keydown',armMusic42,{capture:true});

/* v43: roll back only the v42 sprite-source regression; retain audio and gameplay fixes. */
const ACTOR43=ACTOR42;
spriteActor=function(e,pl=0){return ACTOR43(e,pl)};

/* v45: restore the preserved v38 character renderer exactly. */
spriteActor=function(e,pl=0){return ACTOR39(e,pl)};

/* Reliable audible score bed, started only from a real user gesture. */
let MUSIC45=null;
function startMusic45(){
 if(!audio)audio=new (window.AudioContext||window.webkitAudioContext)();
 audio.resume();if(MUSIC41&&MUSIC41.master)MUSIC41.master.gain.setValueAtTime(0,audio.currentTime);if(MUSIC45)return;
 let ac=audio,master=ac.createGain(),filter=ac.createBiquadFilter(),notes=[[38,45,50],[36,43,48],[34,41,46],[31,38,43]],bar=0;
 master.gain.value=.16;filter.type='lowpass';filter.frequency.value=720;filter.Q.value=.7;master.connect(filter);filter.connect(ac.destination);
 let voices=[0,1,2].map((_,i)=>{let o=ac.createOscillator(),g=ac.createGain();o.type=i===0?'triangle':'sawtooth';g.gain.value=i===0?.32:.11;
  o.connect(g);g.connect(master);o.start();return {o,g}});
 function setChord(){let ch=notes[bar++%notes.length],t=ac.currentTime;voices.forEach((v,i)=>v.o.frequency.setTargetAtTime(440*Math.pow(2,((ch[i]-(i?0:12))-69)/12),t,.32))}
 setChord();let timer=setInterval(setChord,3150);MUSIC45={master,voices,timer}
}
document.addEventListener('pointerdown',startMusic45,{capture:true});
document.addEventListener('keydown',startMusic45,{capture:true});

/* v46: extend only mage top; remove only neighboring lancer lower-body spill. */
let LANCER46=[],MAGE46=null,READY46=false;
function cleanLancer46(img,frame=0){
 if(!img)return null;let q=img.getContext('2d',{willReadFrequently:true}),w=img.width,h=img.height,cw=w/3,mid=w/2,
 im=q.getImageData(0,0,w,h),d=im.data,hardL=mid-cw*.86,hardR=mid+cw*.78,softL=mid-cw*1.02,softR=mid+cw*.68;
 for(let y=0;y<h;y++)for(let x=0;x<w;x++){
  let spill=x<softL||x>softR,lower=y>h*.48&&(x<hardL||x>hardR),
  keepFoot=y>h*.68&&x>mid-cw*1.0&&x<mid+cw*.92;if((spill||lower)&&!keepFoot)d[(y*w+x)*4+3]=0
 }
 q.putImageData(im,0,0);return img
}
function largest46(src){
 let q=src.getContext('2d',{willReadFrequently:true}),w=src.width,h=src.height,im=q.getImageData(0,0,w,h),d=im.data,
 seen=new Uint8Array(w*h),best=[];for(let y=0;y<h;y++)for(let x=0;x<w;x++){let n=y*w+x;if(seen[n]||d[n*4+3]<18)continue;
  let stack=[n],pts=[];seen[n]=1;while(stack.length){let k=stack.pop(),px=k%w,py=k/w|0;pts.push(k);
   for(let oy=-1;oy<=1;oy++)for(let ox=-1;ox<=1;ox++){if(!ox&&!oy)continue;let nx=px+ox,ny=py+oy,nk=ny*w+nx;
    if(nx>=0&&nx<w&&ny>=0&&ny<h&&!seen[nk]){seen[nk]=1;if(d[nk*4+3]>=18)stack.push(nk)}}}
  if(pts.length>best.length)best=pts}
 let out=document.createElement('canvas');out.width=w;out.height=h;let oq=out.getContext('2d'),oi=oq.createImageData(w,h);
 best.forEach(k=>{let j=k*4;oi.data[j]=d[j];oi.data[j+1]=d[j+1];oi.data[j+2]=d[j+2];oi.data[j+3]=d[j+3]});oq.putImageData(oi,0,0);return out
}
function prep46(){
 if(!LC15||!LC15.width||!CLEAN10||!CLEAN10.width){setTimeout(prep46,120);return}
 for(let f=0;f<8;f++)LANCER46[f]=cleanLancer46(isolate26(LC15,1,0,f),f);
 let cw=CLEAN10.width/8,ch=CLEAN10.height/4,pad=Math.floor(ch*.16),raw=document.createElement('canvas');raw.width=cw;raw.height=ch+pad;
 raw.getContext('2d').drawImage(CLEAN10,0,ch*3-pad,cw,ch+pad,0,0,cw,ch+pad);MAGE46=largest46(raw);READY46=true
}
prep46();
const ACTOR46=spriteActor;
spriteActor=function(e,pl=0){
 if(pl&&READY46&&weapon===1){
  let z=p.attackMax?1-p.attack/p.attackMax:0,drinking=typeof drinkT12!=='undefined'&&drinkT12>0,
  fr=drinking?0:p.parry?6:p.hurt?7:p.roll?2:p.attack?(z<.25?3:z<.58?4:5):p.move?1+(Math.floor(p.step*.72)&1):0,img=LANCER46[fr];
  if(img){drawLancer38(img,drinking);return true}
 }
 if(pl&&READY46&&weapon===3&&!p.attack&&!p.parry&&!p.roll&&!p.hurt&&!p.move&&MAGE46){
  let face=Math.cos(p.ang)<0?-1:1,dh=230,dw=MAGE46.width/MAGE46.height*dh;X.save();X.translate(p.x,p.y+9);X.scale(face,1);
  X.imageSmoothingEnabled=true;X.imageSmoothingQuality='high';X.drawImage(MAGE46,-dw/2,-dh,dw,dh);X.restore();return true
 }
 return ACTOR46(e,pl)
};

/* v48: one clean, blade-shaped sword trail; replaces all older sword layers. */
const SLASH48=slash31;
slash31=function(s){
 if(!p.attack||!p.attackMax||s.id!==attackSeq||s.w!==0)return SLASH48(s);
 let z=1-p.attack/p.attackMax;if(z<.25||z>.73)return;let t=clamp((z-.25)/.48,0,1),ease=1-Math.pow(1-t,3),
 face=Math.cos(p.ang)<0?-1:1,hx=face*17,hy=-62,r=s.heavy?168:150,a=-1.5+ease*2.2,pulse=Math.sin(Math.PI*t);
 function blade(angle,alpha,width){
  let dx=face*Math.cos(angle),dy=Math.sin(angle)*.72,len=Math.hypot(dx,dy),nx=-dy/len,ny=dx/len,
  bx=hx+dx*25,by=hy+dy*25,tx=hx+dx*r,ty=hy+dy*r,bw=width*.34,tw=width;
  X.globalAlpha=alpha*pulse;let g=X.createLinearGradient(bx,by,tx,ty);g.addColorStop(0,'rgba(70,180,255,0)');g.addColorStop(.35,'#55c7ff66');g.addColorStop(.82,'#a9ebffdd');g.addColorStop(1,'#ffffff');
  X.fillStyle=g;X.beginPath();X.moveTo(bx+nx*bw,by+ny*bw);X.lineTo(tx+nx*tw,ty+ny*tw);X.lineTo(tx-nx*tw,ty-ny*tw);X.lineTo(bx-nx*bw,by-ny*bw);X.closePath();X.fill()
 }
 X.save();X.translate(p.x,p.y);X.globalCompositeOperation='lighter';X.shadowColor='#62d1ff';X.shadowBlur=22;
 blade(a-.18,.14,s.heavy?14:10);blade(a-.09,.25,s.heavy?13:9);blade(a,.82,s.heavy?12:8);
 let dx=face*Math.cos(a),dy=Math.sin(a)*.72,tx=hx+dx*r,ty=hy+dy*r;X.globalAlpha=.9*pulse;X.fillStyle='#fff';X.shadowBlur=18;
 X.beginPath();X.arc(tx,ty,s.heavy?4.5:3.5,0,7);X.fill();X.restore()
};

/* v49: stable sword scale plus honest class hitbox and damage balance. */
const ACTOR49=spriteActor;
spriteActor=function(e,pl=0){
 if(pl&&weapon===0&&READY25&&!(typeof drinkT12!=='undefined'&&drinkT12>0)){
  let z=p.attackMax?1-p.attack/p.attackMax:0,fr=p.parry?6:p.hurt?7:p.roll?2:p.attack?(z<.25?3:z<.58?4:5):p.move?1+(Math.floor(p.step*.72)&1):0,
  img=ISO25[0][fr];if(img){let a=p.attack?(p.swingAng??p.ang):p.ang,face=Math.cos(a)<0?-1:1,ch=CLEAN10.height/4,scale=176/ch,cw=img.width/3,
   bob=p.move?Math.sin(p.step*.7)*1.6:0,lunge=p.attack?Math.sin(Math.min(1,z/.72)*Math.PI)*12:0;
   X.save();X.translate(p.x+face*lunge,p.y+9-bob);X.scale(face,1);if(p.roll){X.rotate(face*.07);X.globalAlpha=.78}if(p.hurt)X.globalAlpha=.72;
   X.imageSmoothingEnabled=true;X.imageSmoothingQuality='high';X.drawImage(img,-cw*1.5*scale,-ch*scale,img.width*scale,ch*scale);X.restore();return true}
 }
 return ACTOR49(e,pl)
};
Object.assign(V8_FORMS[0],{range:[128,158],arc:[1.08,1.28],damage:[48,82]});
Object.assign(V8_FORMS[3],{damage:[30,38]});

/* v51: attack-only sword ownership; keep blade, reject the rear neighboring pose. */
let SWORD51=[],READY51=false;
function cleanSword51(img){
 if(!img)return null;let q=img.getContext('2d',{willReadFrequently:true}),w=img.width,h=img.height,cw=w/3,mid=w/2,
 im=q.getImageData(0,0,w,h),d=im.data;
 for(let y=0;y<h;y++)for(let x=0;x<w;x++){let rear=x<mid-cw*.58,front=y<h*.58?x>mid+cw*1.08:x>mid+cw*.72;if(rear||front)d[(y*w+x)*4+3]=0}
 q.putImageData(im,0,0);return img
}
function prep51(){
 if(!CLEAN10||!CLEAN10.width){setTimeout(prep51,120);return}
 for(let f=3;f<=5;f++)SWORD51[f]=cleanSword51(isolate26(CLEAN10,4,0,f));READY51=true
}
prep51();
const ACTOR51=spriteActor;
spriteActor=function(e,pl=0){
 if(pl&&weapon===0&&p.attack&&p.attackMax&&READY51){
  let z=1-p.attack/p.attackMax,fr=z<.25?3:z<.58?4:5,img=SWORD51[fr];
  if(img){let a=p.swingAng??p.ang,face=Math.cos(a)<0?-1:1,ch=CLEAN10.height/4,scale=176/ch,cw=img.width/3,lunge=Math.sin(Math.min(1,z/.72)*Math.PI)*12;
   X.save();X.translate(p.x+face*lunge,p.y+9);X.scale(face,1);X.imageSmoothingEnabled=true;X.imageSmoothingQuality='high';
   X.drawImage(img,-cw*1.5*scale,-ch*scale,img.width*scale,ch*scale);X.restore();return true}
 }
 return ACTOR51(e,pl)
};

/* v52: restore the known-good pre-v49 character renderer. */
spriteActor=function(e,pl=0){return ACTOR49(e,pl)};

/* v53: scale trimmed attack art to the visible idle silhouette. */
const actor53=spriteActor;
let swordHeight53=0;
function measureSword53(){
 if(!READY25||!ISO25[0][0]||!CLEAN10)return 0;
 const img=ISO25[0][0],data=img.getContext('2d').getImageData(0,0,img.width,img.height).data;
 let top=img.height,bottom=-1;
 for(let y=0;y<img.height;y++)for(let x=0;x<img.width;x++)if(data[(y*img.width+x)*4+3]>28){top=Math.min(top,y);bottom=Math.max(bottom,y)}
 return bottom>=top?(bottom-top+1)*176/(CLEAN10.height/4):0;
}
spriteActor=function(e,pl=0){
 if(!pl||weapon!==0||p.roll||p.hurt||drinkT12>0||(!p.attack&&!p.parry))return actor53(e,pl);
 const z=p.attackMax?1-p.attack/p.attackMax:0,idx=p.parry?3:z<.30?0:z<.72?1:2,img=TRIM30[0][idx];
 if(!img)return actor53(e,pl);
 if(!swordHeight53)swordHeight53=measureSword53();
 if(!swordHeight53)return actor53(e,pl);
 const scale=swordHeight53/Math.max(1,img.height-10),a=p.attack?(p.swingAng??p.ang):p.ang,face=Math.cos(a)<0?-1:1,
 lunge=p.attack?Math.sin(Math.min(1,z/.72)*Math.PI)*12:0;
 X.save();X.translate(p.x+face*lunge,p.y+9);X.scale(face,1);X.imageSmoothingEnabled=true;X.imageSmoothingQuality='high';
 X.drawImage(img,-img.width*scale/2,-(img.height-5)*scale,img.width*scale,img.height*scale);X.restore();return true;
};

/* Per-slot rarity: common 75%, rare 21%, epic 3.7%, legendary 0.3%. */
rollRarity=function(){const x=Math.random()*100;return x<.3?'legendary':x<4?'epic':x<25?'rare':'common'};
function difficulty53(round){const n=Math.max(0,round-1);return {hp:1+.018*n+.00028*n*n,damage:1+.009*n,speed:1+Math.min(.18,n*.002)}}
const round53=startRound;
startRound=function(){round53();const d=difficulty53(w);enemies.forEach(e=>{e.hp=e.max=Math.round(e.max*d.hp);e.s14=(e.s14||1)*d.speed})};
const hurt53=playerHurt;
playerHurt=function(n,e){return hurt53(Math.ceil(n*difficulty53(w).damage),e)};

/* Restore the full score and remove its competing drone. */
document.removeEventListener('pointerdown',armMusic42,true);
document.removeEventListener('click',armMusic42,true);
document.removeEventListener('keydown',armMusic42,true);
document.removeEventListener('pointerdown',startMusic45,true);
document.removeEventListener('keydown',startMusic45,true);
if(MUSIC45){clearInterval(MUSIC45.timer);MUSIC45.voices.forEach(v=>v.o.stop());MUSIC45.master.disconnect();MUSIC45=null}
const musicPanel53=document.createElement('div');
musicPanel53.style.cssText='position:fixed;right:14px;bottom:14px;z-index:10000;display:flex;align-items:center;gap:10px;padding:8px 12px;background:#090f19e8;border:1px solid #687080;border-radius:8px;color:#e4e7ee;font:12px Arial';
musicPanel53.innerHTML='<button type="button" aria-pressed="true" style="color:inherit;background:transparent;border:0;cursor:pointer">BGM ON</button><input type="range" aria-label="BGM volume" min="0" max="100" value="90" style="width:85px">';
document.body.appendChild(musicPanel53);
let musicEnabled53=true,musicVolume53=.9;
function syncMusic53(){if(MUSIC41)MUSIC41.master.gain.setTargetAtTime(musicEnabled53&&!document.hidden?musicVolume53*.85:0,audio.currentTime,.12)}
function armMusic53(){
 if(!audio)audio=new (window.AudioContext||window.webkitAudioContext)();
 audio.resume().catch(()=>{});startMusic41();syncMusic53();
}
musicPanel53.querySelector('button').onclick=()=>{musicEnabled53=!musicEnabled53;const b=musicPanel53.querySelector('button');b.textContent=musicEnabled53?'BGM ON':'BGM OFF';b.setAttribute('aria-pressed',String(musicEnabled53));armMusic53()};
musicPanel53.querySelector('input').oninput=e=>{musicVolume53=Number(e.target.value)/100;armMusic53()};
musicPanel53.addEventListener('mousedown',e=>e.stopPropagation());
musicPanel53.addEventListener('keydown',e=>e.stopPropagation());
document.addEventListener('pointerdown',armMusic53,{capture:true});
document.addEventListener('keydown',armMusic53,{capture:true});
document.addEventListener('visibilitychange',syncMusic53);
