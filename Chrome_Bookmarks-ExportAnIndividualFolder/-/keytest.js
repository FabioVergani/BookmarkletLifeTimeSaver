	(d=>{
		(
			d.dumpSubTreeBookmarks||
			(
				d.dumpSubTreeBookmarks='bookmarks'!==d.domain?false:(d=>{
					let shiftKeyPressed,canDump=true;
					const w=d.defaultView,
					onceAt=(e,s,ƒ)=>{
						let x=o=>{
							e.removeEventListener(s,x);
							x=null;
							ƒ(o)
						};
						e.addEventListener(s,x)
					},
					onceReady=(w,ƒ)=>{
						const d=w.document;
						if('complete'!==d.readyState){
							onceAt(w,'load',ƒ)
						}else{
							ƒ({target:d})
						}
					};

					w.addEventListener('keydown',keyDownEvent=>{
						if(shiftKeyPressed=keyDownEvent.shiftKey){
							onceAt(w,'keyup',()=>{shiftKeyPressed=false})
						}
					});

					return d=>{
						if(canDump){
							canDump=false;
							onceReady(w,loadEvent=>{
								const d=loadEvent.target, w=d.defaultView, chrome=w.chrome;
								if(chrome){
									console.info('shiftKeyPressed',shiftKeyPressed)
									//alert(1);
									canDump=true;
								}
							})
						}
					}
				})(d)
			)
		)(d)
	})(document);
