//javascript:
(async w=>{
	const e=w.$0;
	if(e){
		const XHR=w.XMLHttpRequest,
		P=w.Promise,
		req=(i,url)=>{
		  return new P((resolve,reject)=>{
			const o=new XHR();
			o.responseType='text';
			o.onreadystatechange=()=>{
				if(4===o.readyState){
					resolve([i,200!==o.status?'':o.response])
				}
			};
			o.onerror=()=>resolve('');
			o.open('GET',url,true);
			o.send(null)
		  })
		},
		promises=[],
		result=[], 
		slot=[];
		for(const sheet of w.document.styleSheets){
			if(true !== sheet.disabled){
				let x;
				if(x=sheet.href){
					if(x.length){
						console.log(x);
						const m=result,i=result.length;
						m[i]=['/*\nbad-url:\t','\n*/'].join(x)
						promises.push(req(i,x))
					}
				}else{
					if(x=sheet.ownerNode){
						result.push(x.innerHTML)
					}
				}
			}
		};
		P.all(promises).then(a=>{
			const m=result;
			a.forEach(v=>{m[v[0]]=v[1]});
			console.dir(m)
		})
	}
})(window);
