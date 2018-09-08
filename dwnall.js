(w=>{
	const d=w.document, images=[...d.images];
	let i=images.length;
	if(i>0){
		const u=w.URL,h={headers:new w.Headers({'Origin':w.location.origin}),mode:'cors'},fileNameFrom=t=>{let l,i,s=t,a=false,b=false;const f=x=>(l=s.length)>1&&(i=s.lastIndexOf(x))!==-1&&--l!==i;if(f('/')){s=s.substring(++i);if(f('.')){a=s.substring(0,i);if(++i!==l){s=s.substring(i);b=s.substring(0,f('?')?i:l)}}};return [t,a,b]};

		while(i!==0){
			const image=images[--i],m=fileNameFrom(image.src);
			fetch(m[0],h).then(r=>r.blob()).then(blob=>{

				const a=d.createElement('a'),o=u.createObjectURL(blob);
				a.download = m[1]+'.'+m[2];
				a.href =o;
				a.click();
				u.revokeObjectURL(o)

			}).catch(x=>console.error(x));

		}

	};
})(window);
//
