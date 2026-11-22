import{mkdirSync as k,readdirSync as d,readFileSync as f,writeFileSync as w}from'node:fs';
const I=new Uint8Array(256),P=new Uint8Array(256),S=new Uint8Array(256),K=new Uint8Array(256);
for(let T="##$4%5&''G(K)[*_3;4;5;6;7;8;9;:7;;<;=;>7?;@;A;C;D;E;S&T*U*V&W#c7d+s't'u3v'",i=0;i<74;i+=2){let a=T.charCodeAt(i)-35,v=T.charCodeAt(i+1)-35;I[a]=[0,1,4,2][v&3];P[a]=v>>2&3;S[a]=v>>4;K[a]=1;}
function r(p,q){
const n=p.length,D=new Int32Array(256),C=new Int32Array(64),M=new Int32Array(256),o=new Uint8Array(65536);
let s=0,c=0,l=0,g=0,h=0,t=0;
const y=x=>[o.slice(0,l),x];
for(;;){
if(t===1e6)return y(10);
if(h<0|h>=n)return y(9);
const v=p[h];
if(!K[v])return y(5);
if(h+I[v]>=n)return y(9);
t++;
const x=h+1+I[v],u=P[v],z=S[v];
if(s<u)return y(2);
if(s-u+z>256)return y(3);
h=x;
if(v>15&&v<35&&v!=23&&v!=27){
const b=D[s-1],a=D[s-2];
let e;
if(v>18&&v<23&&!b)return y(4);
e=v==16?(a+b)|0:v==17?(a-b)|0:v==18?Math.imul(a,b):v==19?(a/b)|0:v==20?a%b|0:v==21?(a>>>0)/(b>>>0)|0:v==22?(a>>>0)%(b>>>0)|0:v==24?a&b:v==25?a|b:v==26?a^b:v==28?a<<(b&31):v==29?a>>(b&31):v==30?a>>>(b&31)|0:v==32?a==b?1:0:v==33?a<b?1:0:(a>>>0)<(b>>>0)?1:0;
s-=2;D[s++]=e;continue;}
switch(v){
case 0:return y(0);
case 1:D[s++]=(p[x-1]<<24)>>24;break;
case 2:D[s++]=p[x-4]|(p[x-3]<<8)|(p[x-2]<<16)|(p[x-1]<<24);break;
case 3:s--;break;
case 4:D[s]=D[s-1],s++;break;
case 5:[D[s-1],D[s-2]]=[D[s-2],D[s-1]];break;
case 6:D[s]=D[s-2],s++;break;
case 7:[D[s-3],D[s-2],D[s-1]]=[D[s-2],D[s-1],D[s-3]];break;
case 23:D[s-1]=-D[s-1]|0;break;
case 27:D[s-1]=~D[s-1];break;
case 48:case 49:case 50:{const a=((p[x-2]|(p[x-1]<<8))<<16)>>16;if(v==48||(v==49)==(D[--s]==0))h=x+a;break;}
case 51:if(c==64)return y(7);C[c++]=x;h=p[x-2]|(p[x-1]<<8);break;
case 52:if(!c)return y(8);h=C[--c];break;
case 64:{const a=D[s-1];if(a<0|a>255)return y(6);D[s-1]=M[a];break;}
case 65:{const a=D[s-1],b=D[s-2];if(a<0|a>255)return y(6);s-=2;M[a]=b;break;}
case 80:{const a=''+D[s-1];if(l+a.length>65536)return y(11);s--;for(const z of a)o[l++]=z.charCodeAt(0);break;}
case 81:if(l+1>65536)return y(11);o[l++]=D[--s]&255;break;
case 82:D[s++]=g<q.length?q[g++]:-1;break;
case 83:return y(D[--s]&255);
}
}
}
const A=process.env.MAKEFUN_INPUT_DIR||'/input',B=process.env.MAKEFUN_OUTPUT_DIR||'/output';
for(const id of d(A)){const e=r(f(A+'/'+id+'/program.bin'),f(A+'/'+id+'/input.bin')),u=B+'/'+id;k(u,{recursive:true});w(u+'/stdout.bin',e[0]);w(u+'/exit.txt',e[1]+'\n');}
