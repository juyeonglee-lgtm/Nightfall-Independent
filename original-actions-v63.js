/* Restore the retained source poses, including disconnected painted effects.
   Coordinates follow artwork gutters, not equal-width atlas cells. */
const originalActions63={frames:[null,null,null,null],
 heroRegions:{
  0:[[[586,0],[779,0],[779,250],[586,250]],[[774,0],[1040,0],[1040,98],[1000,153],[966,176],[966,250],[774,250]],[[398,0],[582,0],[582,181],[608,201],[608,216],[582,205],[582,250],[398,250]],[[1205,0],[1366,0],[1366,250],[1205,250],[1205,216],[1250,175],[1205,145]]],
  2:[[[586,498],[785,498],[785,744],[586,744]],[[780,509],[1020,509],[1020,744],[780,744]],[[1018,522],[1194,522],[1194,746],[1018,746]],[[1196,509],[1374,509],[1374,746],[1196,746]]],
  3:[[[581,743],[777,743],[777,1024],[581,1024]],[[777,743],[1040,743],[1040,862],[985,895],[985,1024],[777,1024]],[[391,744],[580,744],[580,1024],[391,1024]],[[1207,743],[1368,743],[1368,1024],[1207,1024]]]
 },
 lanceRegions:[[[614,42],[914,42],[914,624],[662,624],[662,316],[686,257],[614,150]],[[901,306],[1260,306],[1260,365],[1470,365],[1470,425],[1253,425],[1253,617],[901,617]],[[0,35],[211,35],[211,625],[0,625]],[[1611,82],[1835,82],[1835,625],[1611,625]]],
 anchors:{0:[[680,239],[870,239],[491,239],[1280,239]],1:[[790,580],[1084,580],[110,580],[1735,580]],2:[[688,739],[888,739],[1095,739],[1280,739]],3:[[683,1002],[889,1002],[491,1002],[1282,1002]]}
};
function cutOriginal63(sheet,polygon,anchor,referenceWidth){
 const ratio=sheet.width/referenceWidth,x=Math.floor(Math.min(...polygon.map(q=>q[0]))*ratio),y=Math.floor(Math.min(...polygon.map(q=>q[1]))*ratio);
 const right=Math.ceil(Math.max(...polygon.map(q=>q[0]))*ratio),bottom=Math.ceil(Math.max(...polygon.map(q=>q[1]))*ratio);
 const canvas=document.createElement('canvas');canvas.width=right-x;canvas.height=bottom-y;const ctx=canvas.getContext('2d');
 ctx.beginPath();polygon.forEach(([px,py],i)=>i?ctx.lineTo(px*ratio-x,py*ratio-y):ctx.moveTo(px*ratio-x,py*ratio-y));ctx.closePath();ctx.clip();ctx.drawImage(sheet,-x,-y);
 // Keep sizeable detached magic arcs; remove only tiny disconnected edge debris.
 const pixels=ctx.getImageData(0,0,canvas.width,canvas.height),data=pixels.data,seen=new Uint8Array(canvas.width*canvas.height),parts=[];
 for(let n=0;n<seen.length;n++){
  if(seen[n]||data[n*4+3]<22)continue;const stack=[n],part=[];seen[n]=1;
  while(stack.length){const k=stack.pop(),px=k%canvas.width,py=Math.floor(k/canvas.width);part.push(k);
   for(let oy=-1;oy<=1;oy++)for(let ox=-1;ox<=1;ox++){const nx=px+ox,ny=py+oy,j=ny*canvas.width+nx;if(nx>=0&&ny>=0&&nx<canvas.width&&ny<canvas.height&&!seen[j]&&data[j*4+3]>=22){seen[j]=1;stack.push(j)}}
  }parts.push(part);
 }
 const largest=Math.max(0,...parts.map(p=>p.length));for(const part of parts)if(part.length<Math.max(24,largest*.025))for(const k of part)data[k*4+3]=0;
 ctx.putImageData(pixels,0,0);
 return {canvas,ax:anchor[0]*ratio-x,ay:anchor[1]*ratio-y,ratio};
}
function loadOriginal63(file,kinds,referenceWidth){
 const image=new Image();image.onload=()=>blackKey12(image,sheet=>{
  for(const kind of kinds){const regions=kind===1?originalActions63.lanceRegions:originalActions63.heroRegions[kind];
   const frames=regions.map((polygon,i)=>cutOriginal63(sheet,polygon,originalActions63.anchors[kind][i],referenceWidth));
   if(frames.every(f=>bounds55(f.canvas)))originalActions63.frames[kind]=frames;
  }
 });image.src=file;
}
loadOriginal63('heroes-v10.png',[0,2,3],1536);loadOriginal63('moon-lancer-v15.png',[1],2048);
const actorBeforeOriginal63=spriteActor;
spriteActor=function(e,pl=0){
 const success=typeof parryPose12!=='undefined'&&parryPose12>0;
 if(!pl||drinkT12>0||p.roll||(!p.attack&&!p.parry&&!success))return actorBeforeOriginal63(e,pl);
 const frames=originalActions63.frames[weapon];
 // While loading, use the existing idle renderer rather than the replacement action art.
 if(!frames){const attack=p.attack,guard=p.parry;p.attack=0;p.parry=0;try{return actorBeforeOriginal63(e,pl)}finally{p.attack=attack;p.parry=guard}}
 const z=clamp(p.attackMax?1-p.attack/p.attackMax:0,0,1),idx=p.parry||success?3:z<.30?0:z<.66?1:2,f=frames[idx];
 const scale=[176/256,315/680,194/256,230/297][weapon]/f.ratio;
 const face=Math.cos(p.attack?(p.swingAng??p.ang):p.ang)<0?-1:1;
 const drive=p.attack?Math.sin(Math.PI*clamp((z-.15)/.85,0,1))*[10,22,13,5][weapon]:success?-3:0;
 X.save();X.translate(p.x+face*drive,p.y+9);X.scale(face,1);if(p.hurt)X.globalAlpha=.72;
 X.imageSmoothingEnabled=true;X.imageSmoothingQuality='high';X.drawImage(f.canvas,-f.ax*scale,-f.ay*scale,f.canvas.width*scale,f.canvas.height*scale);X.restore();return true;
};
