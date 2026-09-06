/* Distinct physical gestures: a broad steel cut and a short spear air-puncture. */
const originalSwing63=swing54;
let weaponVoiceContext63=null;
const weaponVoices63=new Map();
function makeWeaponVoice63(kind,heavy){
 if(weaponVoiceContext63!==audio){weaponVoices63.clear();weaponVoiceContext63=audio}
 const key=kind+':'+Number(heavy);if(weaponVoices63.has(key))return weaponVoices63.get(key);
 const duration=(kind===0?.34:.22)*(heavy?1.16:1),rate=audio.sampleRate;
 const buffer=audio.createBuffer(1,Math.ceil(duration*rate),rate),data=buffer.getChannelData(0);
 let low=0,mid=0,previous=0;
 for(let i=0;i<data.length;i++){
  const t=i/rate,u=t/duration,noise=Math.random()*2-1;
  low+=.065*(noise-low);mid+=.34*(noise-mid);
  if(kind===0){
   // A wide, weighty sweep with a very quiet inharmonic steel tail.
   const swell=Math.pow(Math.sin(Math.PI*Math.min(1,u/.83)),1.7)*Math.min(1,u*20);
   const edge=(noise-mid)*Math.exp(-Math.pow((u-.38)/.13,2));
   const tail=t>.10?Math.exp(-(t-.10)*30)*Math.sin((t-.10)*Math.PI*2*2137)*.018:0;
   data[i]=((mid-low)*1.25*swell+edge*.24+tail)*(heavy?1.12:1);
  }else{
   // A brief high-frequency jet, then a dry wooden shaft click. No sword ring.
   const jet=Math.exp(-Math.pow((u-.29)/.12,2))*Math.min(1,u*26);
   const click=Math.exp(-Math.pow((u-.07)/.023,2));
   const retract=Math.exp(-Math.pow((u-.67)/.10,2));
   data[i]=((noise-previous)*.20*jet+(mid-low)*.65*click+(noise-mid)*.08*retract)*(heavy?1.15:1);
  }
  previous=noise;
  data[i]=Math.max(-.8,Math.min(.8,data[i]))*Math.min(1,(data.length-i)/64);
 }
 weaponVoices63.set(key,buffer);return buffer;
}
swing54=function(kind,heavy,duration){
 if(kind>1)return originalSwing63(kind,heavy,duration);
 if(!audio||audio.state!=='running')return;
 const buffer=makeWeaponVoice63(kind,heavy),source=audio.createBufferSource(),gain=audio.createGain();
 source.buffer=buffer;source.playbackRate.value=.97+Math.random()*.06;
 gain.gain.value=kind===0?.85:1.05;
 source.connect(gain);gain.connect(audio.destination);
 const peak=buffer.duration*(kind===0?.38:.29),start=audio.currentTime+Math.max(.005,duration*.30-peak);
 source.start(start);source.stop(start+buffer.duration/source.playbackRate.value+.02);
 source.onended=()=>{source.disconnect();gain.disconnect()};
};
