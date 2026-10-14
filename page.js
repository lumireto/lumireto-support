// Native details work without JavaScript. Links and printing may reveal the relevant sections.
function revealHash(){
  let id;try{id=decodeURIComponent(location.hash.slice(1));}catch{return;}
  const target=document.getElementById(id);if(!target)return;
  let node=target;while(node){if(node.tagName==='DETAILS')node.open=true;node=node.parentElement;}
  requestAnimationFrame(()=>target.scrollIntoView({block:'start'}));
}
window.addEventListener('hashchange',revealHash);revealHash();
let beforePrint=[];
window.addEventListener('beforeprint',()=>{beforePrint=[...document.querySelectorAll('details')].map(node=>[node,node.open]);beforePrint.forEach(([node])=>node.open=true);});
window.addEventListener('afterprint',()=>{beforePrint.forEach(([node,open])=>node.open=open);beforePrint=[];});
