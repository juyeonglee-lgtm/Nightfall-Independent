/* Authored poses, isolated once, with fixed anatomical scale across the action. */
const heroMotion61={
 names:['sword','lancer','axe','mage'],frames:[null,null,null,null],
 // Reference coordinates: sword 1536x1024; the other sheets 1792x896.
 body:[380,310,310,320],
 anchors:[
  [[208,456],[568,456],[924,456],[1220,456],[248,904],[591,904],[930,904],[1270,904]],
  [[220,443],[625,440],[1000,431],[1420,431],[214,825],[607,825],[1005,825],[1430,825]],
  [[273,400],[696,403],[1070,402],[1430,404],[255,815],[677,815],[1087,815],[1390,815]],
  [[209,405],[644,405],[1070,405],[1460,405],[222,821],[638,821],[1055,821],[1460,821]]
 ],
 // Crops follow the black gutters, including sword's offset second row.
 crops:[[[0,0,384,490],[384,0,376,490],[760,0,314,490],[1074,0,462,490],[0,490,407,534],[407,490,347,534],[754,490,321,534],[1075,490,461,534]],
 [[0,0,440,465],[440,0,370,465],[810,0,450,465],[1260,0,532,465],[0,465,420,431],[420,465,430,431],[850,465,410,431],[1260,465,532,431]],
 [[0,0,448,460],[448,0,448,460],[896,0,370,460],[1266,0,526,460],[0,460,460,436],[460,460,400,436],[860,460,390,436],[1250,460,542,436]],
 [[0,0,448,450],[448,0,420,450],[868,0,400,450],[1268,0,524,450],[0,450,448,446],[448,450,420,446],[868,450,420,446],[1288,450,504,446]]]
};
heroMotion61.names.forEach((name,w)=>{
 const img=new Image();img.onload=()=>blackKey12(img,sheet=>{
  const rx=sheet.width/(w===0?1536:1792),ry=sheet.height/(w===0?1024:896);
  const frames=heroMotion61.crops[w].map((rect,i)=>{
   const [x,y,width,height]=rect,canvas=document.createElement('canvas');
   canvas.width=Math.ceil(width*rx);canvas.height=Math.ceil(height*ry);
   canvas.getContext('2d').drawImage(sheet,x*rx,y*ry,width*rx,height*ry,0,0,canvas.width,canvas.height);
   return {canvas,ax:(heroMotion61.anchors[w][i][0]-x)*rx,ay:(heroMotion61.anchors[w][i][1]-y)*ry,body:heroMotion61.body[w]*ry};
  });
  if(frames.every(f=>bounds55(f.canvas)))heroMotion61.frames[w]=frames;
 });img.src='hero-'+name+'-actions-v61.png';
});
function heroFrame61(z,w,guard,success){
 if(success)return 7;if(guard)return 6;
 if(z<.12)return 1;if(z<.30)return 2;if(z<.49)return 3;
 // Lancer keeps the thrust facing the target instead of using the atlas's back-facing pose.
 if(z<.67)return w===1?3:4;if(z<.94)return 5;return 0;
}
function heroHeight61(w){
 if(w===0){if(!swordHeight53)swordHeight53=measureSword53();return swordHeight53||140}
 if(w===1)return 315*.495;
 if(w===3&&MAGE46){const b=bounds55(MAGE46);if(b)return b.h*230/MAGE46.height*.84}
 if(w===2&&READY25&&ISO25[2][0]){const b=bounds55(ISO25[2][0]);if(b)return b.h*194/(CLEAN10.height/4)}
 return w===2?150:154;
}
const heroActor61=spriteActor,heroHeights61=[];
spriteActor=function(e,pl=0){
 const success=typeof parryPose12!=='undefined'&&parryPose12>0;
 if(!pl||drinkT12>0||p.roll||(!p.attack&&!p.parry&&!success)||!heroMotion61.frames[weapon])return heroActor61(e,pl);
 const z=Math.max(0,Math.min(1,p.attackMax?1-p.attack/p.attackMax:0));
 const frame=heroMotion61.frames[weapon][heroFrame61(z,weapon,p.parry,success)];
 // Do not permanently cache a fallback while the original idle art is still loading.
 const calibrated=weapon===1||(weapon===0?swordHeight53>0:weapon===3?!!MAGE46:READY25&&!!ISO25[2][0]&&!!CLEAN10);
 const height=heroHeights61[weapon]||heroHeight61(weapon);
 if(calibrated)heroHeights61[weapon]=height;
 const scale=height/frame.body,a=p.attack?(p.swingAng??p.ang):p.ang,face=Math.cos(a)<0?-1:1;
 // Continuous root displacement; the character itself is never stretched or cross-faded.
 const ease=t=>t*t*(3-2*t),drive=z<.30?-3*Math.sin(z/.30*Math.PI):z<.49?ease((z-.30)/.19):1-ease(Math.min(1,(z-.49)/.51));
 const shift=p.attack?(z<.30?drive:drive*[10,22,13,5][weapon]*(p.heavy?1.15:1)):success?-3:0;
 X.save();X.translate(p.x+face*shift,p.y+9);X.scale(face,1);
 X.imageSmoothingEnabled=true;X.imageSmoothingQuality='high';if(p.hurt)X.globalAlpha=.72;
 X.drawImage(frame.canvas,-frame.ax*scale,-frame.ay*scale,frame.canvas.width*scale,frame.canvas.height*scale);X.restore();return true;
};
