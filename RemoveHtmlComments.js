//RemoveHtmlComments
(w=>{
		let k=true;
		(w=>{
			if(k){
				k=false;
				const d=w.document,f=(w)=>{
					let n=d;
					const o=n.createNodeIterator(n.documentElement,128);
					while((n=o.nextNode())!==null){n.remove()};
					k=true
				};
				if(d.readyState!=='complete'){
					const g=()=>{w.removeEventListener('load',g);f(w)};
					w.addEventListener('load',g)
				}else{
					f(w)
				}
			}
		})(w)
})(window);

/*
javascript:(w=>{let k=true;(w=>{if(k){k=false;const d=w.document,f=(w)=>{let n=d;const o=n.createNodeIterator(n.documentElement,128);while((n=o.nextNode())!==null){n.remove()};k=true};if(d.readyState!=='complete'){const g=()=>{w.removeEventListener('load',g);f(w)};w.addEventListener('load',g)}else{f(w)}}})(w)})(window);
*/
