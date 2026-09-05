/* Later waves outgrow early ones; boss windups remain readable. */
difficulty53=function(round){const n=Math.max(0,round-1);return {hp:1+.05*n+.001*n*n,damage:1+.025*n+.00015*n*n,speed:1+Math.min(.28,.004*n)}};
const round58=startRound;startRound=function(){round58();enemies.forEach(e=>{if(e.boss)e.attackMax=1.15});lifeBudget58=P.h*.02};
let lifeBudget58=0;
function recoverLife58(damage){const desired=Math.max(0,damage)*Math.min(.06,P.leech),amount=Math.min(desired,lifeBudget58,Math.max(0,P.h-p.hp));p.hp+=amount;lifeBudget58=Math.max(0,lifeBudget58-amount)}
const updateBalance58=update;update=function(dt){lifeBudget58=Math.min(P.h*.02,lifeBudget58+Math.max(0,dt)*P.h*.02);updateBalance58(dt)};
/* A louder score at startup; the player's slider and mute remain authoritative. */
musicVolume53=1;musicPanel53.querySelector('input').value='100';
document.removeEventListener('visibilitychange',syncMusic53);
syncMusic53=function(){if(MUSIC41)MUSIC41.master.gain.setTargetAtTime(musicEnabled53&&!document.hidden?musicVolume53*1.6:0,audio.currentTime,.12)};
document.addEventListener('visibilitychange',syncMusic53);
syncMusic53();
