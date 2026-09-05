/* Restore potion poses above the class-specific idle renderers. */
const actor55=spriteActor;
const potionFrames55=new Map();
const potionHeights55=new Map();
function bounds55(image,sx=0,sy=0,sw=image.width,sh=image.height){
 sw=Math.floor(sw);sh=Math.floor(sh);const d=image.getContext('2d').getImageData(sx,sy,sw,sh).data;
 let left=sw,top=sh,right=-1,bottom=-1;
 for(let y=0;y<sh;y++)for(let x=0;x<sw;x++)if(d[(y*sw+x)*4+3]>28){left=Math.min(left,x);top=Math.min(top,y);right=Math.max(right,x);bottom=Math.max(bottom,y)}
 return right>=left?{x:sx+left,y:sy+top,w:right-left+1,h:bottom-top+1}:null;
}
function potionFrame55(kind,col){
 const key=kind+':'+col;if(potionFrames55.has(key))return potionFrames55.get(key);
 if(!ACTIONC12||!ACTIONC12.width)return null;
 const sw=Math.floor(ACTIONC12.width/4),sh=Math.floor(ACTIONC12.height/4),b=bounds55(ACTIONC12,col*sw,kind*sh,sw,sh);
 if(b)potionFrames55.set(key,b);return b;
}
spriteActor=function(e,pl=0){
 if(!pl||(weapon!==1&&weapon!==3)||drinkT12<=0)return actor55(e,pl);
 const col=drinkT12>.65||drinkT12<.15?2:3,b=potionFrame55(weapon,col);
 if(!b)return actor55(e,pl);
 let target=potionHeights55.get(weapon)||(weapon===1?218:205);
 if(!potionHeights55.has(weapon)){
  if(weapon===1&&READY46&&LANCER46[0]&&LC15){const ref=bounds55(LANCER46[0]);if(ref){target=ref.h*315/LC15.height;potionHeights55.set(weapon,target)}}
  if(weapon===3&&MAGE46){const ref=bounds55(MAGE46);if(ref){target=ref.h*230/MAGE46.height;potionHeights55.set(weapon,target)}}
 }
 const scale=target/b.h,face=Math.cos(p.ang)<0?-1:1;
 X.save();X.translate(p.x,p.y+9);X.scale(face,1);X.imageSmoothingEnabled=true;X.imageSmoothingQuality='high';
 X.drawImage(ACTIONC12,b.x,b.y,b.w,b.h,-b.w*scale/2,-target,b.w*scale,target);X.restore();return true;
};
