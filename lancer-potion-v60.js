/* Potion poses use the same silver knight as moon-lancer-v15. */
const lancerPotionImage60=new Image();let lancerPotionCanvas60=null;const lancerPotionFrames60=[];
lancerPotionImage60.onload=()=>blackKey12(lancerPotionImage60,c=>{lancerPotionCanvas60=c;for(let i=0;i<2;i++){const x=Math.floor(i*c.width/2),width=Math.floor((i+1)*c.width/2)-x;lancerPotionFrames60[i]=bounds55(c,x,0,width,c.height)}});
lancerPotionImage60.src='lancer-potion-v60.png';
const lancerActor60=spriteActor;
spriteActor=function(e,pl=0){
 if(!pl||weapon!==1||drinkT12<=0)return lancerActor60(e,pl);
 const frame=drinkT12>.65||drinkT12<.15?0:1,b=lancerPotionFrames60[frame];
 if(!b){if(READY46&&LANCER46[0]){drawLancer38(LANCER46[0],true);return true}return true}
 // Calibrated helmet-to-boot height; the tall spear does not set body scale.
 const bodyHeight=315*.495,scale=bodyHeight/(b.h*.78),face=Math.cos(p.ang)<0?-1:1;
 X.save();X.translate(p.x,p.y+9);X.scale(face,1);X.imageSmoothingEnabled=true;X.imageSmoothingQuality='high';
 X.drawImage(lancerPotionCanvas60,b.x,b.y,b.w,b.h,-b.w*scale/2,-b.h*scale,b.w*scale,b.h*scale);X.restore();return true;
};
