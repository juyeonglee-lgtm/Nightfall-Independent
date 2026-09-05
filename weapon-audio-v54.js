/* Air-driven weapon swishes and short physical impacts. */
let noise54=null,noiseContext54=null;
function air54(t,duration,low,peak,volume,q=.7){
 if(!audio||audio.state!=='running')return;
 if(noiseContext54!==audio){noiseContext54=audio;noise54=audio.createBuffer(1,audio.sampleRate,audio.sampleRate);const d=noise54.getChannelData(0);let pink=0;for(let i=0;i<d.length;i++){pink=.94*pink+.06*(Math.random()*2-1);d[i]=pink*2.5+(Math.random()*2-1)*.35}}
 const s=audio.createBufferSource(),f=audio.createBiquadFilter(),hp=audio.createBiquadFilter(),g=audio.createGain();
 s.buffer=noise54;s.playbackRate.value=.94+Math.random()*.12;f.type='bandpass';f.Q.value=q;
 f.frequency.setValueAtTime(low,t);f.frequency.exponentialRampToValueAtTime(peak,t+duration*.4);f.frequency.exponentialRampToValueAtTime(low*.7,t+duration);
 hp.type='highpass';hp.frequency.value=65;g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(volume,t+duration*.3);g.gain.exponentialRampToValueAtTime(.0001,t+duration);
 s.connect(f);f.connect(hp);hp.connect(g);g.connect(audio.destination);s.start(t,Math.random()*.15);s.stop(t+duration+.02);
 s.onended=()=>{s.disconnect();f.disconnect();hp.disconnect();g.disconnect()};
}
function swing54(kind,heavy,duration){
 if(!audio||audio.state!=='running')return;
 const t=audio.currentTime+.015+duration*.16,weight=heavy?1.2:1;
 if(kind===0){air54(t,Math.min(.28,duration*.6),850,4200,.7*weight);air54(t+.025,.075,3400,7000,.2)}
 else if(kind===1){air54(t,Math.min(.19,duration*.48),1500,5800,.62*weight,.5)}
 else if(kind===2){air54(t,Math.min(.38,duration*.64),160,1150,.95*weight,.6);air54(t+.04,.2,550,2300,.3)}
 else{air54(t,Math.min(.38,duration*.7),620,4200,.43*weight,1.8);air54(t+.055,.24,2100,6500,.19,2.4)}
}
function weaponImpact54(heavy){
 if(!audio||audio.state!=='running')return;
 const t=audio.currentTime;air54(t,.075,weapon===2?180:500,weapon===2?900:2600,heavy?.72:.45,.55);
 if(weapon<3)air54(t+.012,.12,1600,3700,.12,3);
}
const attack54=doAttack;
doAttack=function(heavy){const seq=attackSeq;attack54(heavy);if(attackSeq!==seq)swing54(weapon,!!heavy,p.attackMax)};
