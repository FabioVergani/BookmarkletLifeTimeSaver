javascript:(function()%7Bconst%20%240%3Ddocument.body%3B%0Aif(%240)%7B%0A%09let%20e%3D%240%3B%0A%09const%0A%09%09d%3D%240.ownerDocument%2C%0A%09%09walker%3Dd.createTreeWalker(%240%2C1)%2C%0A%09%09f%3Dd.defaultView.getComputedStyle%2C%0A%09%09nest%3D(a%2Cb)%3D%3Ea.appendChild(d.createElement(b))%2C%0A%09%09main%3Dnest(d.createDocumentFragment()%2C'main')%2C%0A%09%09rgx%3D%2F(%5B%5E%3A%5D%2B%3A%5Cs%5B%5E%3B%5D%2B%3B)%5Cs%2Fg%3B%0A%09%09cssPath%3Dnode%3D%3E%7B%0A%09%09%09let%20e%3Dnode%3B%0A%09%09%09const%20d%3De.ownerDocument%2Cn%3D%5B%5D%2Cm%3D%5B%5D%2Cv%3D'%20%3E%20'%2Ct%3D%5B'%3Anth-of-type('%2C')'%5D%3B%0A%09%09%09while(e%20%26%26%20d!%3D%3De)%7B%0A%09%09%09%09const%20m%3D%5Be.nodeName%5D%3B%0A%09%09%09%09if(e.id)%7Bm.push('%23'%2Ce.id)%7D%3B%0A%09%09%09%09for(const%20x%20of%20e.classList)%7Bm.push('.'%2Cx)%7D%3B%0A%09%09%09%09n.unshift(%5Be%2Cm%5D)%3B%0A%09%09%09%09e%3De.parentNode%0A%09%09%09%7D%3B%0A%09%09%09for(const%20x%20of%20n)%7B%0A%09%09%09%09const%20g%3Dd.querySelectorAll(%5B...m%2Cx%5B1%5D.join('')%5D.join(v))%3B%0A%09%09%09%09if(g%3F.length%3E1)%7B%0A%09%09%09%09%09let%20i%3D1%2C%20e%3Dx%5B0%5D%3B%0A%09%09%09%09%09const%20s%3De.nodeName%3B%0A%09%09%09%09%09while(e%3De.previousElementSibling)%7B%0A%09%09%09%09%09%09if(s%3D%3D%3De.nodeName)%7B%2B%2Bi%7D%0A%09%09%09%09%09%7D%3B%0A%09%09%09%09%09x%5B1%5D.push(t.join(i))%0A%09%09%09%09%7D%3B%0A%09%09%09%09m.push(x%5B1%5D.join(''))%0A%09%09%09%7D%3B%0A%09%09%09return%20m.join(v)%0A%09%09%7D%3B%0A%09nest(main%2C'style').textContent%3D'main%7Bfont%3A1rem%2F1%20sans-serif%7Dp%7Bborder-bottom%3A1px%20solid%20%23eee%7Dpre%7Bpadding%3A1em%7D'%3B%0A%09while(e)%7B%0A%09%09const%20x%3Dnest(main%2C'p')%2Cg%3D(y%2Cz)%3D%3E%7Bnest(x%2Cy).textContent%3Dz%7D%3B%0A%09%09g('b'%2CcssPath(e))%3B%0A%09%09g('pre'%2Cf(e).cssText.replace(rgx%2C%20'%241%5Cn'))%3B%0A%09%09e%3Dwalker.nextNode()%3B%0A%09%7D%3B%0A%09e%3Dwindow.open().document.body%3B%0A%09e.style.display%3D'none'%3B%0A%09e.appendChild(main)%3B%0A%09e.style.display%3D'block'%3B%0A%7D%7D)()%3B