/* Decorative-only effects: original painted attacks remain the main silhouette. */
function sigil63(x,y,r,alpha,flat=false){
 X.save();X.translate(x,y);if(flat)X.scale(1,.38);X.rotate(time*.42);X.globalCompositeOperation='lighter';X.globalAlpha=alpha;X.strokeStyle='#b78bff';X.shadowColor='#9764ff';X.shadowBlur=12;X.lineWidth=1.2;
 for(const radius of [r,r*.82,r*.54]){X.beginPath();X.arc(0,0,radius,0,Math.PI*2);X.stroke()}
 for(let i=0;i<12;i++){const a=i*Math.PI/6;X.save();X.rotate(a);X.beginPath();X.moveTo(r*.86,-3);X.lineTo(r*.95,0);X.lineTo(r*.86,3);X.stroke();X.restore()}
 X.rotate(-time*.8);X.strokeStyle='#efd0ff';X.beginPath();for(let i=0;i<=6;i++){const a=i*Math.PI*2/3;const px=Math.cos(a)*r*.7,py=Math.sin(a)*r*.7;i?X.lineTo(px,py):X.moveTo(px,py)}X.stroke();X.restore();
}
const actorArcane63=spriteActor;
spriteActor=function(e,pl=0){
 if(pl&&weapon===3&&p.attack&&drinkT12<=0){const z=clamp(1-p.attack/p.attackMax,0,1);sigil63(p.x,p.y+5,50+(p.heavy?18:0),Math.sin(Math.PI*z)*.65,true)}
 return actorArcane63(e,pl);
};
const drawArcane63=draw;
draw=function(){
 drawArcane63();if(!p)return;
 X.save();X.globalCompositeOperation='lighter';
 for(const orb of spellOrbs){
  if(orb.life<=0)continue;const r=orb.r||19,a=Math.atan2(orb.vy,orb.vx),tail=r*3;
  const g=X.createLinearGradient(orb.x-Math.cos(a)*tail,orb.y-Math.sin(a)*tail,orb.x,orb.y);g.addColorStop(0,'#7d34ff00');g.addColorStop(.65,'#b785ff55');g.addColorStop(1,'#f1dfffcc');
  X.strokeStyle=g;X.lineWidth=r*.8;X.lineCap='round';X.beginPath();X.moveTo(orb.x-Math.cos(a)*tail,orb.y-Math.sin(a)*tail);X.lineTo(orb.x,orb.y);X.stroke();
  X.save();X.translate(orb.x,orb.y);X.rotate(time*3);X.strokeStyle='#eed2ff';X.lineWidth=1.2;X.shadowColor='#9e59ff';X.shadowBlur=14;
  for(let i=0;i<3;i++){X.rotate(Math.PI/3);X.beginPath();X.ellipse(0,0,r*1.2,r*.42,0,0,Math.PI*2);X.stroke()}
  const core=X.createRadialGradient(0,0,0,0,0,r*.7);core.addColorStop(0,'#ffffff');core.addColorStop(.25,'#fbeaff');core.addColorStop(.6,'#b975ffb0');core.addColorStop(1,'#964bff00');X.fillStyle=core;X.beginPath();X.arc(0,0,r*.7,0,Math.PI*2);X.fill();X.restore();
 }
 if(p.attack&&weapon<3&&drinkT12<=0){const z=1-p.attack/p.attackMax,t=Math.sin(Math.PI*clamp((z-.25)/.47,0,1));if(t>0){const face=Math.cos(p.swingAng??p.ang)<0?-1:1,reach=[100,180,110][weapon],x=p.x+face*reach,y=p.y-50;X.globalAlpha=t*.7;X.strokeStyle=['#d7f7ff','#72eeff','#ffc176'][weapon];X.shadowColor=X.strokeStyle;X.shadowBlur=12;X.lineWidth=1.5;
  if(weapon===1){X.beginPath();X.ellipse(x,y,5+z*10,16+z*10,0,-Math.PI*.7,Math.PI*.7);X.stroke()}
  else{for(let i=0;i<6;i++){const a=i*Math.PI/3+time*.8,len=(weapon===2?20:12)*t;X.beginPath();X.moveTo(x+Math.cos(a)*7,y+Math.sin(a)*7);X.lineTo(x+Math.cos(a)*(7+len),y+Math.sin(a)*(7+len));X.stroke()}}
 }}X.restore();
};
