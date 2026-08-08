/** Overall time includes time away and is always derived from stable timestamps. */
export function elapsedSeconds(startedAt:number,now=Date.now()){return Math.max(0,Math.floor((now-startedAt)/1000))}
export function remainingSeconds(startedAt:number,limitSeconds:number,now=Date.now()){return Math.max(0,limitSeconds-elapsedSeconds(startedAt,now))}
export function isExpired(startedAt:number,limitSeconds:number,now=Date.now()){return remainingSeconds(startedAt,limitSeconds,now)===0}
