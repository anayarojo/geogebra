$wnd.web.runAsyncCallback13("function Sjf(a){fjf.call(this,a)}\nfunction TMd(a){UMd.call(this,a,1.0E-11)}\nfunction BMd(a){this.a=tBd(a,a.length)}\nfunction LBd(a){HBd(a,0,a.length,null)}\nfunction OOf(a,b){return new NPf(a.g,a,(mUh(),sTh),b)}\nfunction Rxg(a,b,c){if(!a.d){return NaN}return oRf(a.d,b,c)}\nfunction $Cg(a,b,c){b5d();var d,e;d=u8e(a.yG(),b.yG());e=u8e(a.yG(),c.yG());return !I7e(d,e)}\nfunction VBd(a,b){UBd();var c,d,e,f;f=false;for(d=0,e=b.length;d<e;++d){c=b[d];f=f|a.wh(c)}return f}\nfunction lMg(a,b){var c,d;d=new jBd;for(c=0;c<b.n.i.length;c++){WAd(d,ZAd(b.n,c))}kMg(a,d)}\nfunction fDg(a,b,c,d,e,f,g,h){b5d();var k,l,m,n;k=a.yG();l=b.yG();m=c.yG();n=j7e(j7e(M7e(o7e(k),d/g),l,e/g),m,f/g);pCg(h,n,false)}\nfunction hMd(a,b,c){var d,e;ZMd(a,b);e=a.b==null?0:a.b.length;if(c.length!=e){throw Asc(new YMd(c.length,1,e,1))}for(d=0;d<e;++d){qMd(a,d,b,c[d])}}\nfunction iMd(a,b,c){var d,e;_Md(a,b);e=a.b==null||a.b[0]==null?0:a.b[0].length;if(c.length!=e){throw Asc(new YMd(1,c.length,1,e))}for(d=0;d<e;++d){qMd(a,b,d,c[d])}}\nfunction WMd(a,b){var c,d,e,f,g,h,k;h=a.b.length;if(b.a.length!=h){throw Asc(new aKd(b.a.length,h))}if(a.c){throw Asc(new nNd)}c=EA(HB,TPk,5,h,15,1);for(k=0;k<h;k++){c[k]=zMd(b,a.b[k])}for(f=0;f<h;f++){d=c[f];for(g=f+1;g<h;g++){c[g]-=d*a.a[g][f]}}for(e=h-1;e>=0;e--){c[e]/=a.a[e][e];d=c[e];for(g=0;g<e;g++){c[g]-=d*a.a[g][e]}}return new CMd(c)}\nfunction kMg(a,b){var c,d,e,f,g,h,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G,H,I,J;if(EB($wnd.Math.sqrt(9+8*b.i.length))!=$wnd.Math.sqrt(9+8*b.i.length)){a.d=false;return}d=EB(0.5*$wnd.Math.sqrt(8*(1+b.i.length)))-1;C=d;e=new uMd(b.i.length,b.i.length+1);v=new uMd(b.i.length,b.i.length);c=CA(HB,[cZk,TPk],[6,5],15,[d+1,d+1],2);w=EA(HB,TPk,5,b.i.length+1,15,1);for(g=0;g<b.i.length;g++){I=(TGd(g,b.i.length),b.i[g]).$/(TGd(g,b.i.length),b.i[g]).ab;J=(TGd(g,b.i.length),b.i[g])._/(TGd(g,b.i.length),b.i[g]).ab;for(p=0,u=0;p<d+1;p++){for(t=0;p+t!=d+1;t++){w[u++]=$wnd.Math.pow(I,p)*$wnd.Math.pow(J,t)}}iMd(e,g,w)}G=0;A=b.i.length;do{if(G>A){A=A-C-1;if(A<2){a.d=false;return}e=new uMd(A,A+1);C-=1;w=EA(HB,TPk,5,A+1,15,1);for(h=0;h<A;h++){I=(TGd(h,b.i.length),b.i[h]).$;J=(TGd(h,b.i.length),b.i[h])._;for(p=0,u=0;p<C+1;p++){for(t=0;p+t!=C+1;t++){w[u++]=$wnd.Math.pow(I,p)*$wnd.Math.pow(J,t)}}iMd(e,h,w)}v=new uMd(A,A);G=0}D=gMd(e,G);for(k=0,q=0;k<A+1;k++){if(k==G){continue}hMd(v,q++,gMd(e,k))}++G;H=SMd(new TMd(v))}while(H.c);for(l=0;l<D.length;l++){D[l]*=-1}B=WMd(H,new BMd(D)).a;F=EA(HB,TPk,5,B.length+1,15,1);for(m=0,r=0;m<F.length;m++){if(m==G-1){F[m]=1}else{F[m]=fZh(B[r])?0:B[r];++r}}for(n=0,s=0;n<C+1;n++){for(o=0;n+o<C+1;o++){c[n][o]=F[s++]}}dMg(a,c);a.d=true;for(f=0;f<b.i.length;f++){if(!_Lg(a,(TGd(f,b.i.length),b.i[f]))){a.d=false;return}}}\nvar fPl='] ',kPl='\\\\pi',rQl=')(',RQl={16:1,895:1,27:1,142:1,14:1,220:1},XQl=-6.283185307179586,eRl={3:1,4:1,8:1,7:1,9:1,216:1,128:1,118:1,117:1},gRl={3:1,4:1,8:1,7:1,125:1},hRl={236:1,24:1};gtc(Dcl,6705,Ecl);_.rm=function(){var a,b,c,d;a=CA(HB,[cZk,TPk],[6,5],15,[this.tm(),this.pm()],2);for(c=0;c<a.length;++c){b=a[c];for(d=0;d<b.length;++d){b[d]=this.sm(c,d)}}return a};gtc(415,Dcl,Fcl);_.rm=function(){return oMd(this)};gtc(721,2234,Gcl,BMd);gtc(928,Dcl,Fcl);_.rm=function(){var a,b,c,d,e,f,g,h,k,l,m,n;b=CA(HB,[cZk,TPk],[6,5],15,[this.e,this.d],2);g=this.d-(this.a-1)*52;for(e=0;e<this.b;++e){m=e*52;l=$wnd.Math.min(m+52,this.e);n=0;h=0;for(k=m;k<l;++k){c=b[k];a=e*this.a;d=0;for(f=0;f<this.a-1;++f){dxd(this.c[a++],n,c,d,52);d+=52}dxd(this.c[a],h,c,d,g);n+=52;h+=g}}return b};gtc(920,1,{},TMd);gtc(895,14,RQl);var L8=Eud(895);gtc(1330,24,yrl);_.wC=function(a){var b;b=ajf(this,a,new Blg(false));if(b.length!=1){throw Asc(Vif(this,a,a.c.i.length))}if(!xB(b[0],50)){throw Asc(Sif(this,a.i,b[0]))}return HA(AA(Htb,1),Gdl,14,0,[this.DC(b[0],Pue(a))])};var vrb=Eud(1330);gtc(36,14,Mrl);_.RC=function(a,b){return this.K};gtc(176,361,tul);_.RC=function(a,b){return oRf(this,a,b)};gtc(78,14,hwl);_.RC=function(a,b){if(Wvd(Jwg(this,(nbf(),Naf)),'y')){return sxg(this,b)}return this.i.$l(a)};gtc(243,14,jwl);_.RC=function(a,b){return Rxg(this,a,b)};gtc(6015,19,pxl);_.a=0;_.e=0;var wzb=Eud(6015);gtc(6016,19,pxl);_.c=0;var szb=Eud(6016);IDk(Dk)(13);\n//# sourceURL=web-13.js\n")
