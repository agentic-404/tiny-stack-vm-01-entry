import{mkdirSync as k,readdirSync as d,readFileSync as f,writeFileSync as w}from'node:fs';
const T="#46'GK[_########;;;;;;;7;;;7;;;#;;;#############%))%############7+##############''3'";
function r(p,q){
const n=p.length,D=new Int32Array(256),C=new Int32Array(64),M=new Int32Array(256),o=new Uint8Array(65536);
let s=0,c=0,l=0,g=0,h=0,t=0;
const y=x=>[o.slice(0,l),x];
for(;;){
if(++t>1e6)return y(10);
if(h<0|h>=n)return y(9);
const v=p[h],Z=T.charCodeAt(v)-35;
if(!Z&&v-52&&v)return y(5);
const J=[1,2,3,5][Z&3],U=Z>>2&3,W=Z>>4;
if(h+J>n)return y(9);
if(s<U|s-U+W>256)return y(s<U?2:3);
h+=J;
if(v>15&&v<35&&v-23&&v-27){
const b=D[s-1],a=D[s-2],A=a>>>0,B=b>>>0;
let e;
if(v>18&&v<23&&!b)return y(4);
e=v==16?a+b:v==17?a-b:v==18?Math.imul(a,b):v==19?a/b:v==20?a%b:v==21?A/B:v==22?A%B:v==24?a&b:v==25?a|b:v==26?a^b:v==28?a<<(b&31):v==29?a>>(b&31):v==30?A>>>(b&31):v==32?a==b?1:0:v==33?a<b?1:0:A<B?1:0;
s-=2;D[s++]=e;continue;}
switch(v){
case 0:return y(0);
case 1:D[s++]=p[h-1]<<24>>24;break;
case 2:D[s++]=p[h-4]|p[h-3]<<8|p[h-2]<<16|p[h-1]<<24;break;
case 3:s--;break;
case 4:case 6:D[s]=D[s-1-(v>5)],s++;break;
case 5:[D[s-1],D[s-2]]=[D[s-2],D[s-1]];break;
case 7:[D[s-3],D[s-2],D[s-1]]=[D[s-2],D[s-1],D[s-3]];break;
case 23:case 27:D[s-1]=v==23?-D[s-1]:~D[s-1];break;
case 48:case 49:case 50:{const a=(p[h-2]|p[h-1]<<8)<<16>>16;if(v<49||(v<50)==(D[--s]==0))h+=a;break;}
case 51:if(c==64)return y(7);C[c++]=h;h=p[h-2]|p[h-1]<<8;break;
case 52:if(!c)return y(8);h=C[--c];break;
case 64:if(D[s-1]&~255)return y(6);D[s-1]=M[D[s-1]];break;
case 65:if(D[s-1]&~255)return y(6);M[D[s-1]]=D[s-2];s-=2;break;
case 80:{const a=''+D[--s];if(l+a.length>65536)return y(11);for(const z of a)o[l++]=z.charCodeAt();break;}
case 81:if(l>65535)return y(11);o[l++]=D[--s]&255;break;
case 82:D[s++]=q[g++]??-1;break;
case 83:return y(D[--s]&255);
}
}
}
const E=process.env,A=E.MAKEFUN_INPUT_DIR||'/input',B=E.MAKEFUN_OUTPUT_DIR||'/output';
for(const id of d(A)){const g=A+'/'+id,[a,b]=r(f(g+'/program.bin'),f(g+'/input.bin')),u=B+'/'+id;k(u,{recursive:true});w(u+'/stdout.bin',a);w(u+'/exit.txt',b+'\n');}
