const bossImage58=new Image();let bossCanvas58=null;const bossCells58=[[],[],[]];
bossImage58.onload=()=>blackKey12(bossImage58,c=>{bossCanvas58=c;for(let row=0;row<3;row++)for(let col=0;col<6;col++){const sx=Math.floor(col*c.width/6),sy=Math.floor(row*c.height/3),sw=Math.floor((col+1)*c.width/6)-sx,sh=Math.floor((row+1)*c.height/3)-sy;bossCells58[row][col]=bounds55(c,sx,sy,sw,sh)}});
bossImage58.src='boss-actions-v58.png';
const bossActor58=spriteActor;
spriteActor=function(e,pl=0){
 if(pl||!e.boss||!bossCanvas58)return bossActor58(e,pl);
 const kind=Math.abs((w||1)-1)%3,z=e.attack?1-e.attack/e.attackMax:0,moving=!e.stagger&&dist(e,p)>96;
 const frame=e.hurt||e.stagger?5:e.attack?(z<.45?2:z<.7?3:4):moving?(Math.floor(e.step*1.3)%2):0;
 const b=bossCells58[kind][frame],idle=bossCells58[kind][0];if(!b||!idle)return bossActor58(e,pl);
 const scale=270/idle.h,face=Math.cos(Math.atan2(p.y-e.y,p.x-e.x))<0?-1:1,bob=moving?Math.sin(e.step*2)*2:Math.sin(time*2)*.8,
 color=['#ec7650','#90c9ff','#64deca'][kind],colWidth=bossCanvas58.width/6,cellCenter=(frame+.5)*colWidth;
 X.save();X.translate(e.x,e.y+9-bob);X.fillStyle='#0009';X.beginPath();X.ellipse(0,4,55,11,0,0,7);X.fill();X.scale(face,1);
 if(e.hurt)X.globalAlpha=.76;X.imageSmoothingEnabled=true;X.imageSmoothingQuality='high';
 X.drawImage(bossCanvas58,b.x,b.y,b.w,b.h,(b.x-cellCenter)*scale,-b.h*scale,b.w*scale,b.h*scale);X.restore();
 if(e.attack&&z<.45){X.save();X.strokeStyle=color;X.globalAlpha=.3+z;X.lineWidth=2;X.beginPath();X.ellipse(e.x,e.y+4,35+z*80,10+z*20,0,0,Math.PI*2);X.stroke();X.restore()}
 hp16(e,270,108,color);return true;
};
