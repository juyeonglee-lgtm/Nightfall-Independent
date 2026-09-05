/* Standalone action images never sample neighboring atlas characters. */
const swordActor58=spriteActor,swordBounds58=new WeakMap();
spriteActor=function(e,pl=0){
 if(!pl||weapon!==0||drinkT12>0||p.roll||(!p.attack&&!p.parry))return swordActor58(e,pl);
 const z=p.attackMax?1-p.attack/p.attackMax:0,idx=p.parry?3:z<.3?0:z<.72?1:2;
 const img=POSE29[0][idx]||POSE29[0][3]||POSE29[0][0]||POSE29[0][1]||POSE29[0][2];
 if(!img)return true;
 let b=swordBounds58.get(img);if(!b){b=bounds55(img);if(!b)return true;swordBounds58.set(img,b)}
 if(!swordHeight53)swordHeight53=measureSword53();
 const dh=swordHeight53||125,scale=dh/b.h,a=p.attack?(p.swingAng??p.ang):p.ang,face=Math.cos(a)<0?-1:1,
 lunge=p.attack?Math.sin(Math.min(1,z/.72)*Math.PI)*12:0;
 X.save();X.translate(p.x+face*lunge,p.y+9);X.scale(face,1);if(p.hurt)X.globalAlpha=.72;
 X.imageSmoothingEnabled=true;X.imageSmoothingQuality='high';X.drawImage(img,b.x,b.y,b.w,b.h,-b.w*scale/2,-dh,b.w*scale,dh);X.restore();return true;
};
