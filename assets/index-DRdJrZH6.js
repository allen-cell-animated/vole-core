const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/raw-in9isEBO.js","assets/basedecoder-B2c5_Eok.js","assets/lzw-_aCqfs4w.js","assets/jpeg-CKYXsxFN.js","assets/deflate-B9JhHpvg.js","assets/pako.esm-Cram60i4.js","assets/packbits-DDWKfGV_.js","assets/lerc-Dv3aPIzl.js","assets/webimage-DBgUwIbt.js"])))=>i.map(i=>d[i]);
var yv=Object.defineProperty;var wv=(s,e,t)=>e in s?yv(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var yu=(s,e,t)=>wv(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const da="171",Qa={ROTATE:0,DOLLY:1,PAN:2},Sv=0,wu=1,Mv=2,_p=1,Ev=2,oi=3,Oi=0,gn=1,Bn=2,Ui=0,$n=1,Su=2,Mu=3,Eu=4,xp=5,is=100,Av=101,Cv=102,Tv=103,bp=104,Rv=200,jl=201,Pv=202,Iv=203,ql=204,$l=205,Lv=206,Dv=207,Uv=208,Nv=209,Ov=210,Fv=211,Bv=212,kv=213,zv=214,Kl=0,Zl=1,Jl=2,js=3,Ql=4,ec=5,tc=6,nc=7,zc=0,Vv=1,Gv=2,Ni=0,Hv=1,Wv=2,Xv=3,Yv=4,jv=5,qv=6,$v=7,Vc=300,qs=301,$s=302,ic=303,sc=304,pa=306,Zo=1e3,mn=1001,Jo=1002,At=1003,yp=1004,Er=1005,Nt=1006,Ho=1007,Ii=1008,Yt=1009,Gc=1010,Hc=1011,Ks=1012,fa=1013,fi=1014,en=1015,Vr=1016,Wc=1017,Xc=1018,Zs=1020,wp=35902,Sp=1021,Mp=1022,Ot=1023,Yc=1024,Ep=1025,Hs=1026,Js=1027,Gr=1028,Pn=1029,Ap=1030,jc=1031,qc=1033,Wo=33776,Xo=33777,Yo=33778,jo=33779,rc=35840,oc=35841,ac=35842,lc=35843,cc=36196,hc=37492,uc=37496,dc=37808,pc=37809,fc=37810,mc=37811,gc=37812,vc=37813,_c=37814,xc=37815,bc=37816,yc=37817,wc=37818,Sc=37819,Mc=37820,Ec=37821,qo=36492,Ac=36494,Cc=36495,Cp=36283,Tc=36284,Rc=36285,Pc=36286,Kv=2300,Zv=2301,Jv=3200,Qv=3201,Tp=0,e0=1,li="",wn="srgb",Qs="srgb-linear",Qo="linear",yt="srgb",ys=7680,Au=519,t0=512,n0=513,i0=514,Rp=515,s0=516,r0=517,o0=518,a0=519,Cu=35044,Tu="300 es",hi=2e3,ea=2001;class os{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ru=1234567;const Ir=Math.PI/180,er=180/Math.PI;function sr(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Jt[s&255]+Jt[s>>8&255]+Jt[s>>16&255]+Jt[s>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[t&63|128]+Jt[t>>8&255]+"-"+Jt[t>>16&255]+Jt[t>>24&255]+Jt[n&255]+Jt[n>>8&255]+Jt[n>>16&255]+Jt[n>>24&255]).toLowerCase()}function ht(s,e,t){return Math.max(e,Math.min(t,s))}function $c(s,e){return(s%e+e)%e}function l0(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function c0(s,e,t){return s!==e?(t-s)/(e-s):0}function Lr(s,e,t){return(1-t)*s+t*e}function h0(s,e,t,n){return Lr(s,e,1-Math.exp(-t*n))}function u0(s,e=1){return e-Math.abs($c(s,e*2)-e)}function d0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function p0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function f0(s,e){return s+Math.floor(Math.random()*(e-s+1))}function m0(s,e){return s+Math.random()*(e-s)}function g0(s){return s*(.5-Math.random())}function v0(s){s!==void 0&&(Ru=s);let e=Ru+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function _0(s){return s*Ir}function x0(s){return s*er}function b0(s){return(s&s-1)===0&&s!==0}function y0(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function w0(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function S0(s,e,t,n,i){const r=Math.cos,a=Math.sin,c=r(t/2),u=a(t/2),d=r((e+n)/2),f=a((e+n)/2),m=r((e-n)/2),v=a((e-n)/2),g=r((n-e)/2),b=a((n-e)/2);switch(i){case"XYX":s.set(c*f,u*m,u*v,c*d);break;case"YZY":s.set(u*v,c*f,u*m,c*d);break;case"ZXZ":s.set(u*m,u*v,c*f,c*d);break;case"XZX":s.set(c*f,u*b,u*g,c*d);break;case"YXY":s.set(u*g,c*f,u*b,c*d);break;case"ZYZ":s.set(u*b,u*g,c*f,c*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Bs(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function on(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const ta={DEG2RAD:Ir,RAD2DEG:er,generateUUID:sr,clamp:ht,euclideanModulo:$c,mapLinear:l0,inverseLerp:c0,lerp:Lr,damp:h0,pingpong:u0,smoothstep:d0,smootherstep:p0,randInt:f0,randFloat:m0,randFloatSpread:g0,seededRandom:v0,degToRad:_0,radToDeg:x0,isPowerOfTwo:b0,ceilPowerOfTwo:y0,floorPowerOfTwo:w0,setQuaternionFromProperEuler:S0,normalize:on,denormalize:Bs};class Ie{constructor(e=0,t=0){Ie.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class tt{constructor(e,t,n,i,r,a,c,u,d){tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,c,u,d)}set(e,t,n,i,r,a,c,u,d){const f=this.elements;return f[0]=e,f[1]=i,f[2]=c,f[3]=t,f[4]=r,f[5]=u,f[6]=n,f[7]=a,f[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],c=n[3],u=n[6],d=n[1],f=n[4],m=n[7],v=n[2],g=n[5],b=n[8],y=i[0],x=i[3],_=i[6],w=i[1],E=i[4],S=i[7],P=i[2],D=i[5],O=i[8];return r[0]=a*y+c*w+u*P,r[3]=a*x+c*E+u*D,r[6]=a*_+c*S+u*O,r[1]=d*y+f*w+m*P,r[4]=d*x+f*E+m*D,r[7]=d*_+f*S+m*O,r[2]=v*y+g*w+b*P,r[5]=v*x+g*E+b*D,r[8]=v*_+g*S+b*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],c=e[5],u=e[6],d=e[7],f=e[8];return t*a*f-t*c*d-n*r*f+n*c*u+i*r*d-i*a*u}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],c=e[5],u=e[6],d=e[7],f=e[8],m=f*a-c*d,v=c*u-f*r,g=d*r-a*u,b=t*m+n*v+i*g;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/b;return e[0]=m*y,e[1]=(i*d-f*n)*y,e[2]=(c*n-i*a)*y,e[3]=v*y,e[4]=(f*t-i*u)*y,e[5]=(i*r-c*t)*y,e[6]=g*y,e[7]=(n*u-d*t)*y,e[8]=(a*t-n*r)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,c){const u=Math.cos(r),d=Math.sin(r);return this.set(n*u,n*d,-n*(u*a+d*c)+a+e,-i*d,i*u,-i*(-d*a+u*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(el.makeScale(e,t)),this}rotate(e){return this.premultiply(el.makeRotation(-e)),this}translate(e,t){return this.premultiply(el.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const el=new tt;function Pp(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function na(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function M0(){const s=na("canvas");return s.style.display="block",s}const Pu={};function ks(s){s in Pu||(Pu[s]=!0,console.warn(s))}function E0(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function A0(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function C0(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Iu=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lu=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function T0(){const s={enabled:!0,workingColorSpace:Qs,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===yt&&(i.r=di(i.r),i.g=di(i.g),i.b=di(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===yt&&(i.r=Ws(i.r),i.g=Ws(i.g),i.b=Ws(i.b))),i},fromWorkingColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},toWorkingColorSpace:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===li?Qo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Qs]:{primaries:e,whitePoint:n,transfer:Qo,toXYZ:Iu,fromXYZ:Lu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:wn},outputColorSpaceConfig:{drawingBufferColorSpace:wn}},[wn]:{primaries:e,whitePoint:n,transfer:yt,toXYZ:Iu,fromXYZ:Lu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:wn}}}),s}const _t=T0();function di(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ws(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ws;class R0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ws===void 0&&(ws=na("canvas")),ws.width=e.width,ws.height=e.height;const n=ws.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ws}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=na("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=di(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(di(t[n]/255)*255):t[n]=di(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let P0=0;class Kc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:P0++}),this.uuid=sr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,c=i.length;a<c;a++)i[a].isDataTexture?r.push(tl(i[a].image)):r.push(tl(i[a]))}else r=tl(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function tl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?R0.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let I0=0;class Mt extends os{constructor(e=Mt.DEFAULT_IMAGE,t=Mt.DEFAULT_MAPPING,n=mn,i=mn,r=Nt,a=Ii,c=Ot,u=Yt,d=Mt.DEFAULT_ANISOTROPY,f=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:I0++}),this.uuid=sr(),this.name="",this.source=new Kc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=d,this.format=c,this.internalFormat=null,this.type=u,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zo:e.x=e.x-Math.floor(e.x);break;case mn:e.x=e.x<0?0:1;break;case Jo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zo:e.y=e.y-Math.floor(e.y);break;case mn:e.y=e.y<0?0:1;break;case Jo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Mt.DEFAULT_IMAGE=null;Mt.DEFAULT_MAPPING=Vc;Mt.DEFAULT_ANISOTROPY=1;class Ct{constructor(e=0,t=0,n=0,i=1){Ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const u=e.elements,d=u[0],f=u[4],m=u[8],v=u[1],g=u[5],b=u[9],y=u[2],x=u[6],_=u[10];if(Math.abs(f-v)<.01&&Math.abs(m-y)<.01&&Math.abs(b-x)<.01){if(Math.abs(f+v)<.1&&Math.abs(m+y)<.1&&Math.abs(b+x)<.1&&Math.abs(d+g+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(d+1)/2,S=(g+1)/2,P=(_+1)/2,D=(f+v)/4,O=(m+y)/4,U=(b+x)/4;return E>S&&E>P?E<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(E),i=D/n,r=O/n):S>P?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=D/i,r=U/i):P<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(P),n=O/r,i=U/r),this.set(n,i,r,t),this}let w=Math.sqrt((x-b)*(x-b)+(m-y)*(m-y)+(v-f)*(v-f));return Math.abs(w)<.001&&(w=1),this.x=(x-b)/w,this.y=(m-y)/w,this.z=(v-f)/w,this.w=Math.acos((d+g+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this.w=ht(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this.w=ht(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class L0 extends os{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Mt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let c=0;c<a;c++)this.textures[c]=r.clone(),this.textures[c].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Kc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ln extends L0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ip extends Mt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=At,this.minFilter=At,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Lp extends Mt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=At,this.minFilter=At,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,c){let u=n[i+0],d=n[i+1],f=n[i+2],m=n[i+3];const v=r[a+0],g=r[a+1],b=r[a+2],y=r[a+3];if(c===0){e[t+0]=u,e[t+1]=d,e[t+2]=f,e[t+3]=m;return}if(c===1){e[t+0]=v,e[t+1]=g,e[t+2]=b,e[t+3]=y;return}if(m!==y||u!==v||d!==g||f!==b){let x=1-c;const _=u*v+d*g+f*b+m*y,w=_>=0?1:-1,E=1-_*_;if(E>Number.EPSILON){const P=Math.sqrt(E),D=Math.atan2(P,_*w);x=Math.sin(x*D)/P,c=Math.sin(c*D)/P}const S=c*w;if(u=u*x+v*S,d=d*x+g*S,f=f*x+b*S,m=m*x+y*S,x===1-c){const P=1/Math.sqrt(u*u+d*d+f*f+m*m);u*=P,d*=P,f*=P,m*=P}}e[t]=u,e[t+1]=d,e[t+2]=f,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,i,r,a){const c=n[i],u=n[i+1],d=n[i+2],f=n[i+3],m=r[a],v=r[a+1],g=r[a+2],b=r[a+3];return e[t]=c*b+f*m+u*g-d*v,e[t+1]=u*b+f*v+d*m-c*g,e[t+2]=d*b+f*g+c*v-u*m,e[t+3]=f*b-c*m-u*v-d*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,c=Math.cos,u=Math.sin,d=c(n/2),f=c(i/2),m=c(r/2),v=u(n/2),g=u(i/2),b=u(r/2);switch(a){case"XYZ":this._x=v*f*m+d*g*b,this._y=d*g*m-v*f*b,this._z=d*f*b+v*g*m,this._w=d*f*m-v*g*b;break;case"YXZ":this._x=v*f*m+d*g*b,this._y=d*g*m-v*f*b,this._z=d*f*b-v*g*m,this._w=d*f*m+v*g*b;break;case"ZXY":this._x=v*f*m-d*g*b,this._y=d*g*m+v*f*b,this._z=d*f*b+v*g*m,this._w=d*f*m-v*g*b;break;case"ZYX":this._x=v*f*m-d*g*b,this._y=d*g*m+v*f*b,this._z=d*f*b-v*g*m,this._w=d*f*m+v*g*b;break;case"YZX":this._x=v*f*m+d*g*b,this._y=d*g*m+v*f*b,this._z=d*f*b-v*g*m,this._w=d*f*m-v*g*b;break;case"XZY":this._x=v*f*m-d*g*b,this._y=d*g*m-v*f*b,this._z=d*f*b+v*g*m,this._w=d*f*m+v*g*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],c=t[5],u=t[9],d=t[2],f=t[6],m=t[10],v=n+c+m;if(v>0){const g=.5/Math.sqrt(v+1);this._w=.25/g,this._x=(f-u)*g,this._y=(r-d)*g,this._z=(a-i)*g}else if(n>c&&n>m){const g=2*Math.sqrt(1+n-c-m);this._w=(f-u)/g,this._x=.25*g,this._y=(i+a)/g,this._z=(r+d)/g}else if(c>m){const g=2*Math.sqrt(1+c-n-m);this._w=(r-d)/g,this._x=(i+a)/g,this._y=.25*g,this._z=(u+f)/g}else{const g=2*Math.sqrt(1+m-n-c);this._w=(a-i)/g,this._x=(r+d)/g,this._y=(u+f)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,c=t._x,u=t._y,d=t._z,f=t._w;return this._x=n*f+a*c+i*d-r*u,this._y=i*f+a*u+r*c-n*d,this._z=r*f+a*d+n*u-i*c,this._w=a*f-n*c-i*u-r*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let c=a*e._w+n*e._x+i*e._y+r*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const u=1-c*c;if(u<=Number.EPSILON){const g=1-t;return this._w=g*a+t*this._w,this._x=g*n+t*this._x,this._y=g*i+t*this._y,this._z=g*r+t*this._z,this.normalize(),this}const d=Math.sqrt(u),f=Math.atan2(d,c),m=Math.sin((1-t)*f)/d,v=Math.sin(t*f)/d;return this._w=a*m+this._w*v,this._x=n*m+this._x*v,this._y=i*m+this._y*v,this._z=r*m+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Du.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Du.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,c=e.z,u=e.w,d=2*(a*i-c*n),f=2*(c*t-r*i),m=2*(r*n-a*t);return this.x=t+u*d+a*m-c*f,this.y=n+u*f+c*d-r*m,this.z=i+u*m+r*f-a*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,c=t.y,u=t.z;return this.x=i*u-r*c,this.y=r*a-n*u,this.z=n*c-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return nl.copy(this).projectOnVector(e),this.sub(nl)}reflect(e){return this.sub(nl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nl=new L,Du=new Bi;class vn{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,c=r.count;a<c;a++)e.isMesh===!0?e.getVertexPosition(a,Dn):Dn.fromBufferAttribute(r,a),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),oo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),oo.copy(n.boundingBox)),oo.applyMatrix4(e.matrixWorld),this.union(oo)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(br),ao.subVectors(this.max,br),Ss.subVectors(e.a,br),Ms.subVectors(e.b,br),Es.subVectors(e.c,br),Mi.subVectors(Ms,Ss),Ei.subVectors(Es,Ms),Ki.subVectors(Ss,Es);let t=[0,-Mi.z,Mi.y,0,-Ei.z,Ei.y,0,-Ki.z,Ki.y,Mi.z,0,-Mi.x,Ei.z,0,-Ei.x,Ki.z,0,-Ki.x,-Mi.y,Mi.x,0,-Ei.y,Ei.x,0,-Ki.y,Ki.x,0];return!il(t,Ss,Ms,Es,ao)||(t=[1,0,0,0,1,0,0,0,1],!il(t,Ss,Ms,Es,ao))?!1:(lo.crossVectors(Mi,Ei),t=[lo.x,lo.y,lo.z],il(t,Ss,Ms,Es,ao))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ti=[new L,new L,new L,new L,new L,new L,new L,new L],Dn=new L,oo=new vn,Ss=new L,Ms=new L,Es=new L,Mi=new L,Ei=new L,Ki=new L,br=new L,ao=new L,lo=new L,Zi=new L;function il(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Zi.fromArray(s,r);const c=i.x*Math.abs(Zi.x)+i.y*Math.abs(Zi.y)+i.z*Math.abs(Zi.z),u=e.dot(Zi),d=t.dot(Zi),f=n.dot(Zi);if(Math.max(-Math.max(u,d,f),Math.min(u,d,f))>c)return!1}return!0}const D0=new vn,yr=new L,sl=new L;class ma{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):D0.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yr.subVectors(e,this.center);const t=yr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(yr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yr.copy(e.center).add(sl)),this.expandByPoint(yr.copy(e.center).sub(sl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ni=new L,rl=new L,co=new L,Ai=new L,ol=new L,ho=new L,al=new L;class Dp{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ni.copy(this.origin).addScaledVector(this.direction,t),ni.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){rl.copy(e).add(t).multiplyScalar(.5),co.copy(t).sub(e).normalize(),Ai.copy(this.origin).sub(rl);const r=e.distanceTo(t)*.5,a=-this.direction.dot(co),c=Ai.dot(this.direction),u=-Ai.dot(co),d=Ai.lengthSq(),f=Math.abs(1-a*a);let m,v,g,b;if(f>0)if(m=a*u-c,v=a*c-u,b=r*f,m>=0)if(v>=-b)if(v<=b){const y=1/f;m*=y,v*=y,g=m*(m+a*v+2*c)+v*(a*m+v+2*u)+d}else v=r,m=Math.max(0,-(a*v+c)),g=-m*m+v*(v+2*u)+d;else v=-r,m=Math.max(0,-(a*v+c)),g=-m*m+v*(v+2*u)+d;else v<=-b?(m=Math.max(0,-(-a*r+c)),v=m>0?-r:Math.min(Math.max(-r,-u),r),g=-m*m+v*(v+2*u)+d):v<=b?(m=0,v=Math.min(Math.max(-r,-u),r),g=v*(v+2*u)+d):(m=Math.max(0,-(a*r+c)),v=m>0?r:Math.min(Math.max(-r,-u),r),g=-m*m+v*(v+2*u)+d);else v=a>0?-r:r,m=Math.max(0,-(a*v+c)),g=-m*m+v*(v+2*u)+d;return n&&n.copy(this.origin).addScaledVector(this.direction,m),i&&i.copy(rl).addScaledVector(co,v),g}intersectSphere(e,t){ni.subVectors(e.center,this.origin);const n=ni.dot(this.direction),i=ni.dot(ni)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),c=n-a,u=n+a;return u<0?null:c<0?this.at(u,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,c,u;const d=1/this.direction.x,f=1/this.direction.y,m=1/this.direction.z,v=this.origin;return d>=0?(n=(e.min.x-v.x)*d,i=(e.max.x-v.x)*d):(n=(e.max.x-v.x)*d,i=(e.min.x-v.x)*d),f>=0?(r=(e.min.y-v.y)*f,a=(e.max.y-v.y)*f):(r=(e.max.y-v.y)*f,a=(e.min.y-v.y)*f),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),m>=0?(c=(e.min.z-v.z)*m,u=(e.max.z-v.z)*m):(c=(e.max.z-v.z)*m,u=(e.min.z-v.z)*m),n>u||c>i)||((c>n||n!==n)&&(n=c),(u<i||i!==i)&&(i=u),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ni)!==null}intersectTriangle(e,t,n,i,r){ol.subVectors(t,e),ho.subVectors(n,e),al.crossVectors(ol,ho);let a=this.direction.dot(al),c;if(a>0){if(i)return null;c=1}else if(a<0)c=-1,a=-a;else return null;Ai.subVectors(this.origin,e);const u=c*this.direction.dot(ho.crossVectors(Ai,ho));if(u<0)return null;const d=c*this.direction.dot(ol.cross(Ai));if(d<0||u+d>a)return null;const f=-c*Ai.dot(al);return f<0?null:this.at(f/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(e,t,n,i,r,a,c,u,d,f,m,v,g,b,y,x){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,c,u,d,f,m,v,g,b,y,x)}set(e,t,n,i,r,a,c,u,d,f,m,v,g,b,y,x){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=r,_[5]=a,_[9]=c,_[13]=u,_[2]=d,_[6]=f,_[10]=m,_[14]=v,_[3]=g,_[7]=b,_[11]=y,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/As.setFromMatrixColumn(e,0).length(),r=1/As.setFromMatrixColumn(e,1).length(),a=1/As.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),c=Math.sin(n),u=Math.cos(i),d=Math.sin(i),f=Math.cos(r),m=Math.sin(r);if(e.order==="XYZ"){const v=a*f,g=a*m,b=c*f,y=c*m;t[0]=u*f,t[4]=-u*m,t[8]=d,t[1]=g+b*d,t[5]=v-y*d,t[9]=-c*u,t[2]=y-v*d,t[6]=b+g*d,t[10]=a*u}else if(e.order==="YXZ"){const v=u*f,g=u*m,b=d*f,y=d*m;t[0]=v+y*c,t[4]=b*c-g,t[8]=a*d,t[1]=a*m,t[5]=a*f,t[9]=-c,t[2]=g*c-b,t[6]=y+v*c,t[10]=a*u}else if(e.order==="ZXY"){const v=u*f,g=u*m,b=d*f,y=d*m;t[0]=v-y*c,t[4]=-a*m,t[8]=b+g*c,t[1]=g+b*c,t[5]=a*f,t[9]=y-v*c,t[2]=-a*d,t[6]=c,t[10]=a*u}else if(e.order==="ZYX"){const v=a*f,g=a*m,b=c*f,y=c*m;t[0]=u*f,t[4]=b*d-g,t[8]=v*d+y,t[1]=u*m,t[5]=y*d+v,t[9]=g*d-b,t[2]=-d,t[6]=c*u,t[10]=a*u}else if(e.order==="YZX"){const v=a*u,g=a*d,b=c*u,y=c*d;t[0]=u*f,t[4]=y-v*m,t[8]=b*m+g,t[1]=m,t[5]=a*f,t[9]=-c*f,t[2]=-d*f,t[6]=g*m+b,t[10]=v-y*m}else if(e.order==="XZY"){const v=a*u,g=a*d,b=c*u,y=c*d;t[0]=u*f,t[4]=-m,t[8]=d*f,t[1]=v*m+y,t[5]=a*f,t[9]=g*m-b,t[2]=b*m-g,t[6]=c*f,t[10]=y*m+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(U0,e,N0)}lookAt(e,t,n){const i=this.elements;return xn.subVectors(e,t),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Ci.crossVectors(n,xn),Ci.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Ci.crossVectors(n,xn)),Ci.normalize(),uo.crossVectors(xn,Ci),i[0]=Ci.x,i[4]=uo.x,i[8]=xn.x,i[1]=Ci.y,i[5]=uo.y,i[9]=xn.y,i[2]=Ci.z,i[6]=uo.z,i[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],c=n[4],u=n[8],d=n[12],f=n[1],m=n[5],v=n[9],g=n[13],b=n[2],y=n[6],x=n[10],_=n[14],w=n[3],E=n[7],S=n[11],P=n[15],D=i[0],O=i[4],U=i[8],I=i[12],C=i[1],F=i[5],Y=i[9],X=i[13],J=i[2],Q=i[6],ee=i[10],ne=i[14],z=i[3],ce=i[7],fe=i[11],me=i[15];return r[0]=a*D+c*C+u*J+d*z,r[4]=a*O+c*F+u*Q+d*ce,r[8]=a*U+c*Y+u*ee+d*fe,r[12]=a*I+c*X+u*ne+d*me,r[1]=f*D+m*C+v*J+g*z,r[5]=f*O+m*F+v*Q+g*ce,r[9]=f*U+m*Y+v*ee+g*fe,r[13]=f*I+m*X+v*ne+g*me,r[2]=b*D+y*C+x*J+_*z,r[6]=b*O+y*F+x*Q+_*ce,r[10]=b*U+y*Y+x*ee+_*fe,r[14]=b*I+y*X+x*ne+_*me,r[3]=w*D+E*C+S*J+P*z,r[7]=w*O+E*F+S*Q+P*ce,r[11]=w*U+E*Y+S*ee+P*fe,r[15]=w*I+E*X+S*ne+P*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],c=e[5],u=e[9],d=e[13],f=e[2],m=e[6],v=e[10],g=e[14],b=e[3],y=e[7],x=e[11],_=e[15];return b*(+r*u*m-i*d*m-r*c*v+n*d*v+i*c*g-n*u*g)+y*(+t*u*g-t*d*v+r*a*v-i*a*g+i*d*f-r*u*f)+x*(+t*d*m-t*c*g-r*a*m+n*a*g+r*c*f-n*d*f)+_*(-i*c*f-t*u*m+t*c*v+i*a*m-n*a*v+n*u*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],c=e[5],u=e[6],d=e[7],f=e[8],m=e[9],v=e[10],g=e[11],b=e[12],y=e[13],x=e[14],_=e[15],w=m*x*d-y*v*d+y*u*g-c*x*g-m*u*_+c*v*_,E=b*v*d-f*x*d-b*u*g+a*x*g+f*u*_-a*v*_,S=f*y*d-b*m*d+b*c*g-a*y*g-f*c*_+a*m*_,P=b*m*u-f*y*u-b*c*v+a*y*v+f*c*x-a*m*x,D=t*w+n*E+i*S+r*P;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/D;return e[0]=w*O,e[1]=(y*v*r-m*x*r-y*i*g+n*x*g+m*i*_-n*v*_)*O,e[2]=(c*x*r-y*u*r+y*i*d-n*x*d-c*i*_+n*u*_)*O,e[3]=(m*u*r-c*v*r-m*i*d+n*v*d+c*i*g-n*u*g)*O,e[4]=E*O,e[5]=(f*x*r-b*v*r+b*i*g-t*x*g-f*i*_+t*v*_)*O,e[6]=(b*u*r-a*x*r-b*i*d+t*x*d+a*i*_-t*u*_)*O,e[7]=(a*v*r-f*u*r+f*i*d-t*v*d-a*i*g+t*u*g)*O,e[8]=S*O,e[9]=(b*m*r-f*y*r-b*n*g+t*y*g+f*n*_-t*m*_)*O,e[10]=(a*y*r-b*c*r+b*n*d-t*y*d-a*n*_+t*c*_)*O,e[11]=(f*c*r-a*m*r-f*n*d+t*m*d+a*n*g-t*c*g)*O,e[12]=P*O,e[13]=(f*y*i-b*m*i+b*n*v-t*y*v-f*n*x+t*m*x)*O,e[14]=(b*c*i-a*y*i-b*n*u+t*y*u+a*n*x-t*c*x)*O,e[15]=(a*m*i-f*c*i+f*n*u-t*m*u-a*n*v+t*c*v)*O,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,c=e.y,u=e.z,d=r*a,f=r*c;return this.set(d*a+n,d*c-i*u,d*u+i*c,0,d*c+i*u,f*c+n,f*u-i*a,0,d*u-i*c,f*u+i*a,r*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,c=t._z,u=t._w,d=r+r,f=a+a,m=c+c,v=r*d,g=r*f,b=r*m,y=a*f,x=a*m,_=c*m,w=u*d,E=u*f,S=u*m,P=n.x,D=n.y,O=n.z;return i[0]=(1-(y+_))*P,i[1]=(g+S)*P,i[2]=(b-E)*P,i[3]=0,i[4]=(g-S)*D,i[5]=(1-(v+_))*D,i[6]=(x+w)*D,i[7]=0,i[8]=(b+E)*O,i[9]=(x-w)*O,i[10]=(1-(v+y))*O,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=As.set(i[0],i[1],i[2]).length();const a=As.set(i[4],i[5],i[6]).length(),c=As.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Un.copy(this);const d=1/r,f=1/a,m=1/c;return Un.elements[0]*=d,Un.elements[1]*=d,Un.elements[2]*=d,Un.elements[4]*=f,Un.elements[5]*=f,Un.elements[6]*=f,Un.elements[8]*=m,Un.elements[9]*=m,Un.elements[10]*=m,t.setFromRotationMatrix(Un),n.x=r,n.y=a,n.z=c,this}makePerspective(e,t,n,i,r,a,c=hi){const u=this.elements,d=2*r/(t-e),f=2*r/(n-i),m=(t+e)/(t-e),v=(n+i)/(n-i);let g,b;if(c===hi)g=-(a+r)/(a-r),b=-2*a*r/(a-r);else if(c===ea)g=-a/(a-r),b=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return u[0]=d,u[4]=0,u[8]=m,u[12]=0,u[1]=0,u[5]=f,u[9]=v,u[13]=0,u[2]=0,u[6]=0,u[10]=g,u[14]=b,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,i,r,a,c=hi){const u=this.elements,d=1/(t-e),f=1/(n-i),m=1/(a-r),v=(t+e)*d,g=(n+i)*f;let b,y;if(c===hi)b=(a+r)*m,y=-2*m;else if(c===ea)b=r*m,y=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return u[0]=2*d,u[4]=0,u[8]=0,u[12]=-v,u[1]=0,u[5]=2*f,u[9]=0,u[13]=-g,u[2]=0,u[6]=0,u[10]=y,u[14]=-b,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const As=new L,Un=new ut,U0=new L(0,0,0),N0=new L(1,1,1),Ci=new L,uo=new L,xn=new L,Uu=new ut,Nu=new Bi;class tn{constructor(e=0,t=0,n=0,i=tn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],c=i[8],u=i[1],d=i[5],f=i[9],m=i[2],v=i[6],g=i[10];switch(t){case"XYZ":this._y=Math.asin(ht(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(u,d)):(this._y=Math.atan2(-m,r),this._z=0);break;case"ZXY":this._x=Math.asin(ht(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-m,g),this._z=Math.atan2(-a,d)):(this._y=0,this._z=Math.atan2(u,r));break;case"ZYX":this._y=Math.asin(-ht(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(v,g),this._z=Math.atan2(u,r)):(this._x=0,this._z=Math.atan2(-a,d));break;case"YZX":this._z=Math.asin(ht(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-f,d),this._y=Math.atan2(-m,r)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(c,r)):(this._x=Math.atan2(-f,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Uu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Uu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nu.setFromEuler(this),this.setFromQuaternion(Nu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}tn.DEFAULT_ORDER="XYZ";class Up{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let O0=0;const Ou=new L,Cs=new Bi,ii=new ut,po=new L,wr=new L,F0=new L,B0=new Bi,Fu=new L(1,0,0),Bu=new L(0,1,0),ku=new L(0,0,1),zu={type:"added"},k0={type:"removed"},Ts={type:"childadded",child:null},ll={type:"childremoved",child:null};class Tt extends os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:O0++}),this.uuid=sr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DEFAULT_UP.clone();const e=new L,t=new tn,n=new Bi,i=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ut},normalMatrix:{value:new tt}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=Tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Up,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Cs.setFromAxisAngle(e,t),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(e,t){return Cs.setFromAxisAngle(e,t),this.quaternion.premultiply(Cs),this}rotateX(e){return this.rotateOnAxis(Fu,e)}rotateY(e){return this.rotateOnAxis(Bu,e)}rotateZ(e){return this.rotateOnAxis(ku,e)}translateOnAxis(e,t){return Ou.copy(e).applyQuaternion(this.quaternion),this.position.add(Ou.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fu,e)}translateY(e){return this.translateOnAxis(Bu,e)}translateZ(e){return this.translateOnAxis(ku,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?po.copy(e):po.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(wr,po,this.up):ii.lookAt(po,wr,this.up),this.quaternion.setFromRotationMatrix(ii),i&&(ii.extractRotation(i.matrixWorld),Cs.setFromRotationMatrix(ii),this.quaternion.premultiply(Cs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zu),Ts.child=e,this.dispatchEvent(Ts),Ts.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(k0),ll.child=e,this.dispatchEvent(ll),ll.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zu),Ts.child=e,this.dispatchEvent(Ts),Ts.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,e,F0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,B0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(c,u){return c[u.uuid]===void 0&&(c[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const u=c.shapes;if(Array.isArray(u))for(let d=0,f=u.length;d<f;d++){const m=u[d];r(e.shapes,m)}else r(e.shapes,u)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let u=0,d=this.material.length;u<d;u++)c.push(r(e.materials,this.material[u]));i.material=c}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let c=0;c<this.children.length;c++)i.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let c=0;c<this.animations.length;c++){const u=this.animations[c];i.animations.push(r(e.animations,u))}}if(t){const c=a(e.geometries),u=a(e.materials),d=a(e.textures),f=a(e.images),m=a(e.shapes),v=a(e.skeletons),g=a(e.animations),b=a(e.nodes);c.length>0&&(n.geometries=c),u.length>0&&(n.materials=u),d.length>0&&(n.textures=d),f.length>0&&(n.images=f),m.length>0&&(n.shapes=m),v.length>0&&(n.skeletons=v),g.length>0&&(n.animations=g),b.length>0&&(n.nodes=b)}return n.object=i,n;function a(c){const u=[];for(const d in c){const f=c[d];delete f.metadata,u.push(f)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Tt.DEFAULT_UP=new L(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Nn=new L,si=new L,cl=new L,ri=new L,Rs=new L,Ps=new L,Vu=new L,hl=new L,ul=new L,dl=new L,pl=new Ct,fl=new Ct,ml=new Ct;class kn{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Nn.subVectors(e,t),i.cross(Nn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Nn.subVectors(i,t),si.subVectors(n,t),cl.subVectors(e,t);const a=Nn.dot(Nn),c=Nn.dot(si),u=Nn.dot(cl),d=si.dot(si),f=si.dot(cl),m=a*d-c*c;if(m===0)return r.set(0,0,0),null;const v=1/m,g=(d*u-c*f)*v,b=(a*f-c*u)*v;return r.set(1-g-b,b,g)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(e,t,n,i,r,a,c,u){return this.getBarycoord(e,t,n,i,ri)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(r,ri.x),u.addScaledVector(a,ri.y),u.addScaledVector(c,ri.z),u)}static getInterpolatedAttribute(e,t,n,i,r,a){return pl.setScalar(0),fl.setScalar(0),ml.setScalar(0),pl.fromBufferAttribute(e,t),fl.fromBufferAttribute(e,n),ml.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(pl,r.x),a.addScaledVector(fl,r.y),a.addScaledVector(ml,r.z),a}static isFrontFacing(e,t,n,i){return Nn.subVectors(n,t),si.subVectors(e,t),Nn.cross(si).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),si.subVectors(this.a,this.b),Nn.cross(si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return kn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return kn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,c;Rs.subVectors(i,n),Ps.subVectors(r,n),hl.subVectors(e,n);const u=Rs.dot(hl),d=Ps.dot(hl);if(u<=0&&d<=0)return t.copy(n);ul.subVectors(e,i);const f=Rs.dot(ul),m=Ps.dot(ul);if(f>=0&&m<=f)return t.copy(i);const v=u*m-f*d;if(v<=0&&u>=0&&f<=0)return a=u/(u-f),t.copy(n).addScaledVector(Rs,a);dl.subVectors(e,r);const g=Rs.dot(dl),b=Ps.dot(dl);if(b>=0&&g<=b)return t.copy(r);const y=g*d-u*b;if(y<=0&&d>=0&&b<=0)return c=d/(d-b),t.copy(n).addScaledVector(Ps,c);const x=f*b-g*m;if(x<=0&&m-f>=0&&g-b>=0)return Vu.subVectors(r,i),c=(m-f)/(m-f+(g-b)),t.copy(i).addScaledVector(Vu,c);const _=1/(x+y+v);return a=y*_,c=v*_,t.copy(n).addScaledVector(Rs,a).addScaledVector(Ps,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Np={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},fo={h:0,s:0,l:0};function gl(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=_t.workingColorSpace){return this.r=e,this.g=t,this.b=n,_t.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=_t.workingColorSpace){if(e=$c(e,1),t=ht(t,0,1),n=ht(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=gl(a,r,e+1/3),this.g=gl(a,r,e),this.b=gl(a,r,e-1/3)}return _t.toWorkingColorSpace(this,i),this}setStyle(e,t=wn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],c=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=wn){const n=Np[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=di(e.r),this.g=di(e.g),this.b=di(e.b),this}copyLinearToSRGB(e){return this.r=Ws(e.r),this.g=Ws(e.g),this.b=Ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wn){return _t.fromWorkingColorSpace(Qt.copy(this),e),Math.round(ht(Qt.r*255,0,255))*65536+Math.round(ht(Qt.g*255,0,255))*256+Math.round(ht(Qt.b*255,0,255))}getHexString(e=wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.fromWorkingColorSpace(Qt.copy(this),t);const n=Qt.r,i=Qt.g,r=Qt.b,a=Math.max(n,i,r),c=Math.min(n,i,r);let u,d;const f=(c+a)/2;if(c===a)u=0,d=0;else{const m=a-c;switch(d=f<=.5?m/(a+c):m/(2-a-c),a){case n:u=(i-r)/m+(i<r?6:0);break;case i:u=(r-n)/m+2;break;case r:u=(n-i)/m+4;break}u/=6}return e.h=u,e.s=d,e.l=f,e}getRGB(e,t=_t.workingColorSpace){return _t.fromWorkingColorSpace(Qt.copy(this),t),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=wn){_t.fromWorkingColorSpace(Qt.copy(this),e);const t=Qt.r,n=Qt.g,i=Qt.b;return e!==wn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ti),this.setHSL(Ti.h+e,Ti.s+t,Ti.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ti),e.getHSL(fo);const n=Lr(Ti.h,fo.h,t),i=Lr(Ti.s,fo.s,t),r=Lr(Ti.l,fo.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new ke;ke.NAMES=Np;let z0=0;class as extends os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:z0++}),this.uuid=sr(),this.name="",this.type="Material",this.blending=$n,this.side=Oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ql,this.blendDst=$l,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Au,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ys,this.stencilZFail=ys,this.stencilZPass=ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==$n&&(n.blending=this.blending),this.side!==Oi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ql&&(n.blendSrc=this.blendSrc),this.blendDst!==$l&&(n.blendDst=this.blendDst),this.blendEquation!==is&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==js&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Au&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ys&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ys&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ys&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const c in r){const u=r[c];delete u.metadata,a.push(u)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Zc extends as{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.combine=zc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const kt=new L,mo=new Ie;class Ut{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Cu,this.updateRanges=[],this.gpuType=en,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)mo.fromBufferAttribute(this,t),mo.applyMatrix3(e),this.setXY(t,mo.x,mo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Bs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bs(t,this.array)),t}setX(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bs(t,this.array)),t}setY(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bs(t,this.array)),t}setW(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),n=on(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),n=on(n,this.array),i=on(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),n=on(n,this.array),i=on(i,this.array),r=on(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cu&&(e.usage=this.usage),e}}class Op extends Ut{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Fp extends Ut{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class In extends Ut{constructor(e,t,n){super(new Float32Array(e),t,n)}}let V0=0;const Rn=new ut,vl=new Tt,Is=new L,bn=new vn,Sr=new vn,Xt=new L;class An extends os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:V0++}),this.uuid=sr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pp(e)?Fp:Op)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new tt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,t,n){return Rn.makeTranslation(e,t,n),this.applyMatrix4(Rn),this}scale(e,t,n){return Rn.makeScale(e,t,n),this.applyMatrix4(Rn),this}lookAt(e){return vl.lookAt(e),vl.updateMatrix(),this.applyMatrix4(vl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Is).negate(),this.translate(Is.x,Is.y,Is.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new In(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];bn.setFromBufferAttribute(r),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ma);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(bn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const c=t[r];Sr.setFromBufferAttribute(c),this.morphTargetsRelative?(Xt.addVectors(bn.min,Sr.min),bn.expandByPoint(Xt),Xt.addVectors(bn.max,Sr.max),bn.expandByPoint(Xt)):(bn.expandByPoint(Sr.min),bn.expandByPoint(Sr.max))}bn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Xt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Xt));if(t)for(let r=0,a=t.length;r<a;r++){const c=t[r],u=this.morphTargetsRelative;for(let d=0,f=c.count;d<f;d++)Xt.fromBufferAttribute(c,d),u&&(Is.fromBufferAttribute(e,d),Xt.add(Is)),i=Math.max(i,n.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ut(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),c=[],u=[];for(let U=0;U<n.count;U++)c[U]=new L,u[U]=new L;const d=new L,f=new L,m=new L,v=new Ie,g=new Ie,b=new Ie,y=new L,x=new L;function _(U,I,C){d.fromBufferAttribute(n,U),f.fromBufferAttribute(n,I),m.fromBufferAttribute(n,C),v.fromBufferAttribute(r,U),g.fromBufferAttribute(r,I),b.fromBufferAttribute(r,C),f.sub(d),m.sub(d),g.sub(v),b.sub(v);const F=1/(g.x*b.y-b.x*g.y);isFinite(F)&&(y.copy(f).multiplyScalar(b.y).addScaledVector(m,-g.y).multiplyScalar(F),x.copy(m).multiplyScalar(g.x).addScaledVector(f,-b.x).multiplyScalar(F),c[U].add(y),c[I].add(y),c[C].add(y),u[U].add(x),u[I].add(x),u[C].add(x))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let U=0,I=w.length;U<I;++U){const C=w[U],F=C.start,Y=C.count;for(let X=F,J=F+Y;X<J;X+=3)_(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const E=new L,S=new L,P=new L,D=new L;function O(U){P.fromBufferAttribute(i,U),D.copy(P);const I=c[U];E.copy(I),E.sub(P.multiplyScalar(P.dot(I))).normalize(),S.crossVectors(D,I);const F=S.dot(u[U])<0?-1:1;a.setXYZW(U,E.x,E.y,E.z,F)}for(let U=0,I=w.length;U<I;++U){const C=w[U],F=C.start,Y=C.count;for(let X=F,J=F+Y;X<J;X+=3)O(e.getX(X+0)),O(e.getX(X+1)),O(e.getX(X+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ut(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let v=0,g=n.count;v<g;v++)n.setXYZ(v,0,0,0);const i=new L,r=new L,a=new L,c=new L,u=new L,d=new L,f=new L,m=new L;if(e)for(let v=0,g=e.count;v<g;v+=3){const b=e.getX(v+0),y=e.getX(v+1),x=e.getX(v+2);i.fromBufferAttribute(t,b),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,x),f.subVectors(a,r),m.subVectors(i,r),f.cross(m),c.fromBufferAttribute(n,b),u.fromBufferAttribute(n,y),d.fromBufferAttribute(n,x),c.add(f),u.add(f),d.add(f),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(y,u.x,u.y,u.z),n.setXYZ(x,d.x,d.y,d.z)}else for(let v=0,g=t.count;v<g;v+=3)i.fromBufferAttribute(t,v+0),r.fromBufferAttribute(t,v+1),a.fromBufferAttribute(t,v+2),f.subVectors(a,r),m.subVectors(i,r),f.cross(m),n.setXYZ(v+0,f.x,f.y,f.z),n.setXYZ(v+1,f.x,f.y,f.z),n.setXYZ(v+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Xt.fromBufferAttribute(e,t),Xt.normalize(),e.setXYZ(t,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(c,u){const d=c.array,f=c.itemSize,m=c.normalized,v=new d.constructor(u.length*f);let g=0,b=0;for(let y=0,x=u.length;y<x;y++){c.isInterleavedBufferAttribute?g=u[y]*c.data.stride+c.offset:g=u[y]*f;for(let _=0;_<f;_++)v[b++]=d[g++]}return new Ut(v,f,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new An,n=this.index.array,i=this.attributes;for(const c in i){const u=i[c],d=e(u,n);t.setAttribute(c,d)}const r=this.morphAttributes;for(const c in r){const u=[],d=r[c];for(let f=0,m=d.length;f<m;f++){const v=d[f],g=e(v,n);u.push(g)}t.morphAttributes[c]=u}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const d in u)u[d]!==void 0&&(e[d]=u[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const d=n[u];e.data.attributes[u]=d.toJSON(e.data)}const i={};let r=!1;for(const u in this.morphAttributes){const d=this.morphAttributes[u],f=[];for(let m=0,v=d.length;m<v;m++){const g=d[m];f.push(g.toJSON(e.data))}f.length>0&&(i[u]=f,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const d in i){const f=i[d];this.setAttribute(d,f.clone(t))}const r=e.morphAttributes;for(const d in r){const f=[],m=r[d];for(let v=0,g=m.length;v<g;v++)f.push(m[v].clone(t));this.morphAttributes[d]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let d=0,f=a.length;d<f;d++){const m=a[d];this.addGroup(m.start,m.count,m.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gu=new ut,Ji=new Dp,go=new ma,Hu=new L,vo=new L,_o=new L,xo=new L,_l=new L,bo=new L,Wu=new L,yo=new L;class It extends Tt{constructor(e=new An,t=new Zc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const c=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const c=this.morphTargetInfluences;if(r&&c){bo.set(0,0,0);for(let u=0,d=r.length;u<d;u++){const f=c[u],m=r[u];f!==0&&(_l.fromBufferAttribute(m,e),a?bo.addScaledVector(_l,f):bo.addScaledVector(_l.sub(t),f))}t.add(bo)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),go.copy(n.boundingSphere),go.applyMatrix4(r),Ji.copy(e.ray).recast(e.near),!(go.containsPoint(Ji.origin)===!1&&(Ji.intersectSphere(go,Hu)===null||Ji.origin.distanceToSquared(Hu)>(e.far-e.near)**2))&&(Gu.copy(r).invert(),Ji.copy(e.ray).applyMatrix4(Gu),!(n.boundingBox!==null&&Ji.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ji)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,c=r.index,u=r.attributes.position,d=r.attributes.uv,f=r.attributes.uv1,m=r.attributes.normal,v=r.groups,g=r.drawRange;if(c!==null)if(Array.isArray(a))for(let b=0,y=v.length;b<y;b++){const x=v[b],_=a[x.materialIndex],w=Math.max(x.start,g.start),E=Math.min(c.count,Math.min(x.start+x.count,g.start+g.count));for(let S=w,P=E;S<P;S+=3){const D=c.getX(S),O=c.getX(S+1),U=c.getX(S+2);i=wo(this,_,e,n,d,f,m,D,O,U),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{const b=Math.max(0,g.start),y=Math.min(c.count,g.start+g.count);for(let x=b,_=y;x<_;x+=3){const w=c.getX(x),E=c.getX(x+1),S=c.getX(x+2);i=wo(this,a,e,n,d,f,m,w,E,S),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}else if(u!==void 0)if(Array.isArray(a))for(let b=0,y=v.length;b<y;b++){const x=v[b],_=a[x.materialIndex],w=Math.max(x.start,g.start),E=Math.min(u.count,Math.min(x.start+x.count,g.start+g.count));for(let S=w,P=E;S<P;S+=3){const D=S,O=S+1,U=S+2;i=wo(this,_,e,n,d,f,m,D,O,U),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{const b=Math.max(0,g.start),y=Math.min(u.count,g.start+g.count);for(let x=b,_=y;x<_;x+=3){const w=x,E=x+1,S=x+2;i=wo(this,a,e,n,d,f,m,w,E,S),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}}}function G0(s,e,t,n,i,r,a,c){let u;if(e.side===gn?u=n.intersectTriangle(a,r,i,!0,c):u=n.intersectTriangle(i,r,a,e.side===Oi,c),u===null)return null;yo.copy(c),yo.applyMatrix4(s.matrixWorld);const d=t.ray.origin.distanceTo(yo);return d<t.near||d>t.far?null:{distance:d,point:yo.clone(),object:s}}function wo(s,e,t,n,i,r,a,c,u,d){s.getVertexPosition(c,vo),s.getVertexPosition(u,_o),s.getVertexPosition(d,xo);const f=G0(s,e,t,n,vo,_o,xo,Wu);if(f){const m=new L;kn.getBarycoord(Wu,vo,_o,xo,m),i&&(f.uv=kn.getInterpolatedAttribute(i,c,u,d,m,new Ie)),r&&(f.uv1=kn.getInterpolatedAttribute(r,c,u,d,m,new Ie)),a&&(f.normal=kn.getInterpolatedAttribute(a,c,u,d,m,new L),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const v={a:c,b:u,c:d,normal:new L,materialIndex:0};kn.getNormal(vo,_o,xo,v.normal),f.face=v,f.barycoord=m}return f}class ki extends An{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const c=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const u=[],d=[],f=[],m=[];let v=0,g=0;b("z","y","x",-1,-1,n,t,e,a,r,0),b("z","y","x",1,-1,n,t,-e,a,r,1),b("x","z","y",1,1,e,n,t,i,a,2),b("x","z","y",1,-1,e,n,-t,i,a,3),b("x","y","z",1,-1,e,t,n,i,r,4),b("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(u),this.setAttribute("position",new In(d,3)),this.setAttribute("normal",new In(f,3)),this.setAttribute("uv",new In(m,2));function b(y,x,_,w,E,S,P,D,O,U,I){const C=S/O,F=P/U,Y=S/2,X=P/2,J=D/2,Q=O+1,ee=U+1;let ne=0,z=0;const ce=new L;for(let fe=0;fe<ee;fe++){const me=fe*F-X;for(let le=0;le<Q;le++){const He=le*C-Y;ce[y]=He*w,ce[x]=me*E,ce[_]=J,d.push(ce.x,ce.y,ce.z),ce[y]=0,ce[x]=0,ce[_]=D>0?1:-1,f.push(ce.x,ce.y,ce.z),m.push(le/O),m.push(1-fe/U),ne+=1}}for(let fe=0;fe<U;fe++)for(let me=0;me<O;me++){const le=v+me+Q*fe,He=v+me+Q*(fe+1),j=v+(me+1)+Q*(fe+1),ae=v+(me+1)+Q*fe;u.push(le,He,ae),u.push(He,j,ae),z+=6}c.addGroup(g,z,I),g+=z,v+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ki(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function tr(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function an(s){const e={};for(let t=0;t<s.length;t++){const n=tr(s[t]);for(const i in n)e[i]=n[i]}return e}function H0(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Bp(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:_t.workingColorSpace}const W0={clone:tr,merge:an};var X0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Y0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class nn extends as{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=X0,this.fragmentShader=Y0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=tr(e.uniforms),this.uniformsGroups=H0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class kp extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=hi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ri=new L,Xu=new Ie,Yu=new Ie;class fn extends kp{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=er*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ir*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return er*2*Math.atan(Math.tan(Ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z),Ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z)}getViewSize(e,t){return this.getViewBounds(e,Xu,Yu),t.subVectors(Yu,Xu)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ir*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const u=a.fullWidth,d=a.fullHeight;r+=a.offsetX*i/u,t-=a.offsetY*n/d,i*=a.width/u,n*=a.height/d}const c=this.filmOffset;c!==0&&(r+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ls=-90,Ds=1;class j0 extends Tt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new fn(Ls,Ds,e,t);i.layers=this.layers,this.add(i);const r=new fn(Ls,Ds,e,t);r.layers=this.layers,this.add(r);const a=new fn(Ls,Ds,e,t);a.layers=this.layers,this.add(a);const c=new fn(Ls,Ds,e,t);c.layers=this.layers,this.add(c);const u=new fn(Ls,Ds,e,t);u.layers=this.layers,this.add(u);const d=new fn(Ls,Ds,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,c,u]=t;for(const d of t)this.remove(d);if(e===hi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===ea)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,c,u,d,f]=this.children,m=e.getRenderTarget(),v=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,c),e.setRenderTarget(n,3,i),e.render(t,u),e.setRenderTarget(n,4,i),e.render(t,d),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,i),e.render(t,f),e.setRenderTarget(m,v,g),e.xr.enabled=b,n.texture.needsPMREMUpdate=!0}}class zp extends Mt{constructor(e,t,n,i,r,a,c,u,d,f){e=e!==void 0?e:[],t=t!==void 0?t:qs,super(e,t,n,i,r,a,c,u,d,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class q0 extends Ln{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new zp(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Nt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ki(5,5,5),r=new nn({name:"CubemapFromEquirect",uniforms:tr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gn,blending:Ui});r.uniforms.tEquirect.value=t;const a=new It(i,r),c=t.minFilter;return t.minFilter===Ii&&(t.minFilter=Nt),new j0(1,10,this).update(e,a),t.minFilter=c,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}class Fi extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new tn,this.environmentIntensity=1,this.environmentRotation=new tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class cn extends Mt{constructor(e=null,t=1,n=1,i,r,a,c,u,d=At,f=At,m,v){super(null,a,c,u,d,f,i,r,m,v),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const xl=new L,$0=new L,K0=new tt;class Sn{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=xl.subVectors(n,t).cross($0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(xl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||K0.getNormalMatrix(e),i=this.coplanarPoint(xl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qi=new ma,So=new L;class Jc{constructor(e=new Sn,t=new Sn,n=new Sn,i=new Sn,r=new Sn,a=new Sn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(i),c[4].copy(r),c[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=hi){const n=this.planes,i=e.elements,r=i[0],a=i[1],c=i[2],u=i[3],d=i[4],f=i[5],m=i[6],v=i[7],g=i[8],b=i[9],y=i[10],x=i[11],_=i[12],w=i[13],E=i[14],S=i[15];if(n[0].setComponents(u-r,v-d,x-g,S-_).normalize(),n[1].setComponents(u+r,v+d,x+g,S+_).normalize(),n[2].setComponents(u+a,v+f,x+b,S+w).normalize(),n[3].setComponents(u-a,v-f,x-b,S-w).normalize(),n[4].setComponents(u-c,v-m,x-y,S-E).normalize(),t===hi)n[5].setComponents(u+c,v+m,x+y,S+E).normalize();else if(t===ea)n[5].setComponents(c,m,y,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qi)}intersectsSprite(e){return Qi.center.set(0,0,0),Qi.radius=.7071067811865476,Qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(So.x=i.normal.x>0?e.max.x:e.min.x,So.y=i.normal.y>0?e.max.y:e.min.y,So.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(So)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ga extends as{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ia=new L,sa=new L,ju=new ut,Mr=new Dp,Mo=new ma,bl=new L,qu=new L;class Z0 extends Tt{constructor(e=new An,t=new ga){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)ia.fromBufferAttribute(t,i-1),sa.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ia.distanceTo(sa);e.setAttribute("lineDistance",new In(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Mo.copy(n.boundingSphere),Mo.applyMatrix4(i),Mo.radius+=r,e.ray.intersectsSphere(Mo)===!1)return;ju.copy(i).invert(),Mr.copy(e.ray).applyMatrix4(ju);const c=r/((this.scale.x+this.scale.y+this.scale.z)/3),u=c*c,d=this.isLineSegments?2:1,f=n.index,v=n.attributes.position;if(f!==null){const g=Math.max(0,a.start),b=Math.min(f.count,a.start+a.count);for(let y=g,x=b-1;y<x;y+=d){const _=f.getX(y),w=f.getX(y+1),E=Eo(this,e,Mr,u,_,w);E&&t.push(E)}if(this.isLineLoop){const y=f.getX(b-1),x=f.getX(g),_=Eo(this,e,Mr,u,y,x);_&&t.push(_)}}else{const g=Math.max(0,a.start),b=Math.min(v.count,a.start+a.count);for(let y=g,x=b-1;y<x;y+=d){const _=Eo(this,e,Mr,u,y,y+1);_&&t.push(_)}if(this.isLineLoop){const y=Eo(this,e,Mr,u,b-1,g);y&&t.push(y)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const c=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=r}}}}}function Eo(s,e,t,n,i,r){const a=s.geometry.attributes.position;if(ia.fromBufferAttribute(a,i),sa.fromBufferAttribute(a,r),t.distanceSqToSegment(ia,sa,bl,qu)>n)return;bl.applyMatrix4(s.matrixWorld);const u=e.ray.origin.distanceTo(bl);if(!(u<e.near||u>e.far))return{distance:u,point:qu.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const $u=new L,Ku=new L;class Qc extends Z0{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)$u.fromBufferAttribute(t,i),Ku.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+$u.distanceTo(Ku);e.setAttribute("lineDistance",new In(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class jn extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class yl extends Mt{constructor(e,t,n,i,r,a,c,u,d,f,m,v){super(null,a,c,u,d,f,i,r,m,v),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class eh extends Mt{constructor(e,t,n,i,r,a,c,u,d,f=Hs){if(f!==Hs&&f!==Js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&f===Hs&&(n=fi),n===void 0&&f===Js&&(n=Zs),super(null,i,r,a,c,u,f,n,d),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:At,this.minFilter=u!==void 0?u:At,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class zi extends An{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,c=Math.floor(n),u=Math.floor(i),d=c+1,f=u+1,m=e/c,v=t/u,g=[],b=[],y=[],x=[];for(let _=0;_<f;_++){const w=_*v-a;for(let E=0;E<d;E++){const S=E*m-r;b.push(S,-w,0),y.push(0,0,1),x.push(E/c),x.push(1-_/u)}}for(let _=0;_<u;_++)for(let w=0;w<c;w++){const E=w+d*_,S=w+d*(_+1),P=w+1+d*(_+1),D=w+1+d*_;g.push(E,S,D),g.push(S,P,D)}this.setIndex(g),this.setAttribute("position",new In(b,3)),this.setAttribute("normal",new In(y,3)),this.setAttribute("uv",new In(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zi(e.width,e.height,e.widthSegments,e.heightSegments)}}class J0 extends as{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ke(16777215),this.specular=new ke(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tp,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.combine=zc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Q0 extends as{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class e_ extends as{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}let th=class extends Tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};const wl=new ut,Zu=new L,Ju=new L;class Vp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jc,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Zu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zu),Ju.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ju),t.updateMatrixWorld(),wl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class t_ extends Vp{constructor(){super(new fn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=er*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Qu extends th{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new t_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ci extends kp{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,c=i+t,u=i-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=d*this.view.offsetX,a=r+d*this.view.width,c-=f*this.view.offsetY,u=c-f*this.view.height}this.projectionMatrix.makeOrthographic(r,a,c,u,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class n_ extends Vp{constructor(){super(new ci(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ao extends th{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new n_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ed extends th{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class i_ extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}const nh="\\[\\]\\.:\\/",s_=new RegExp("["+nh+"]","g"),ih="[^"+nh+"]",r_="[^"+nh.replace("\\.","")+"]",o_=/((?:WC+[\/:])*)/.source.replace("WC",ih),a_=/(WCOD+)?/.source.replace("WCOD",r_),l_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ih),c_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ih),h_=new RegExp("^"+o_+a_+l_+c_+"$"),u_=["material","materials","bones","map"];class d_{constructor(e,t,n){const i=n||vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class vt{constructor(e,t,n){this.path=t,this.parsedPath=n||vt.parseTrackName(t),this.node=vt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new vt.Composite(e,t,n):new vt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(s_,"")}static parseTrackName(e){const t=h_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);u_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const c=r[a];if(c.name===t||c.uuid===t)return c;const u=n(c.children);if(u)return u}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=vt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let d=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===d){d=f;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(d!==void 0){if(e[d]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[d]}}const a=e[i];if(a===void 0){const d=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+d+"."+i+" but it wasn't found.",e);return}let c=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?c=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}u=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(u=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}vt.Composite=d_;vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};vt.prototype.GetterByBindingType=[vt.prototype._getValue_direct,vt.prototype._getValue_array,vt.prototype._getValue_arrayElement,vt.prototype._getValue_toArray];vt.prototype.SetterByBindingTypeAndVersioning=[[vt.prototype._setValue_direct,vt.prototype._setValue_direct_setNeedsUpdate,vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_array,vt.prototype._setValue_array_setNeedsUpdate,vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_arrayElement,vt.prototype._setValue_arrayElement_setNeedsUpdate,vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_fromArray,vt.prototype._setValue_fromArray_setNeedsUpdate,vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class On{constructor(e){this.value=e}clone(){return new On(this.value.clone===void 0?this.value:this.value.clone())}}class Gp extends Qc{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new An;r.setIndex(new Ut(n,1)),r.setAttribute("position",new In(i,3)),super(r,new ga({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class p_ extends Qc{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new An;i.setAttribute("position",new In(t,3)),i.setAttribute("color",new In(n,3));const r=new ga({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(e,t,n){const i=new ke,r=this.geometry.attributes.color.array;return i.set(e),i.toArray(r,0),i.toArray(r,3),i.set(t),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function td(s,e,t,n){const i=f_(n);switch(t){case Sp:return s*e;case Yc:return s*e;case Ep:return s*e*2;case Gr:return s*e/i.components*i.byteLength;case Pn:return s*e/i.components*i.byteLength;case Ap:return s*e*2/i.components*i.byteLength;case jc:return s*e*2/i.components*i.byteLength;case Mp:return s*e*3/i.components*i.byteLength;case Ot:return s*e*4/i.components*i.byteLength;case qc:return s*e*4/i.components*i.byteLength;case Wo:case Xo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Yo:case jo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case oc:case lc:return Math.max(s,16)*Math.max(e,8)/4;case rc:case ac:return Math.max(s,8)*Math.max(e,8)/2;case cc:case hc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case uc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case dc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case pc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case fc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case mc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case gc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case vc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case _c:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case xc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case bc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case yc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case wc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Sc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Mc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ec:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case qo:case Ac:case Cc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Cp:case Tc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Rc:case Pc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function f_(s){switch(s){case Yt:case Gc:return{byteLength:1,components:1};case Ks:case Hc:case Vr:return{byteLength:2,components:1};case Wc:case Xc:return{byteLength:2,components:4};case fi:case fa:case en:return{byteLength:4,components:1};case wp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:da}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=da);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Hp(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function m_(s){const e=new WeakMap;function t(c,u){const d=c.array,f=c.usage,m=d.byteLength,v=s.createBuffer();s.bindBuffer(u,v),s.bufferData(u,d,f),c.onUploadCallback();let g;if(d instanceof Float32Array)g=s.FLOAT;else if(d instanceof Uint16Array)c.isFloat16BufferAttribute?g=s.HALF_FLOAT:g=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)g=s.SHORT;else if(d instanceof Uint32Array)g=s.UNSIGNED_INT;else if(d instanceof Int32Array)g=s.INT;else if(d instanceof Int8Array)g=s.BYTE;else if(d instanceof Uint8Array)g=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)g=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:m}}function n(c,u,d){const f=u.array,m=u.updateRanges;if(s.bindBuffer(d,c),m.length===0)s.bufferSubData(d,0,f);else{m.sort((g,b)=>g.start-b.start);let v=0;for(let g=1;g<m.length;g++){const b=m[v],y=m[g];y.start<=b.start+b.count+1?b.count=Math.max(b.count,y.start+y.count-b.start):(++v,m[v]=y)}m.length=v+1;for(let g=0,b=m.length;g<b;g++){const y=m[g];s.bufferSubData(d,y.start*f.BYTES_PER_ELEMENT,f,y.start,y.count)}u.clearUpdateRanges()}u.onUploadCallback()}function i(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function r(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=e.get(c);u&&(s.deleteBuffer(u.buffer),e.delete(c))}function a(c,u){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const f=e.get(c);(!f||f.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const d=e.get(c);if(d===void 0)e.set(c,t(c,u));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(d.buffer,c,u),d.version=c.version}}return{get:i,remove:r,update:a}}var g_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,v_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,__=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,x_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,b_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,y_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,w_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,S_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,M_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,E_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,A_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,C_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,T_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,R_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,P_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,I_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,L_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,D_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,U_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,N_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,O_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,F_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,B_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,k_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,z_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,V_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,G_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,H_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,W_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,X_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Y_="gl_FragColor = linearToOutputTexel( gl_FragColor );",j_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,q_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,$_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,K_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Z_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,J_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Q_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ex=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ix=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,sx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ox=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ax=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,cx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ux=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,px=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,fx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,mx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,gx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_x=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ex=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ax=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Px=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ix=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Lx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ux=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Nx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ox=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,kx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Xx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$x=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Jx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Qx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,e1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,t1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,n1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,i1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,s1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,r1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,o1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,a1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,l1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,c1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,h1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,u1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,d1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,p1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,f1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const m1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,g1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,w1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,S1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,M1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,E1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,A1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,T1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,R1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,P1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,L1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,U1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,O1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,F1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,B1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,z1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,G1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,W1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,X1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Y1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,j1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,q1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,st={alphahash_fragment:g_,alphahash_pars_fragment:v_,alphamap_fragment:__,alphamap_pars_fragment:x_,alphatest_fragment:b_,alphatest_pars_fragment:y_,aomap_fragment:w_,aomap_pars_fragment:S_,batching_pars_vertex:M_,batching_vertex:E_,begin_vertex:A_,beginnormal_vertex:C_,bsdfs:T_,iridescence_fragment:R_,bumpmap_pars_fragment:P_,clipping_planes_fragment:I_,clipping_planes_pars_fragment:L_,clipping_planes_pars_vertex:D_,clipping_planes_vertex:U_,color_fragment:N_,color_pars_fragment:O_,color_pars_vertex:F_,color_vertex:B_,common:k_,cube_uv_reflection_fragment:z_,defaultnormal_vertex:V_,displacementmap_pars_vertex:G_,displacementmap_vertex:H_,emissivemap_fragment:W_,emissivemap_pars_fragment:X_,colorspace_fragment:Y_,colorspace_pars_fragment:j_,envmap_fragment:q_,envmap_common_pars_fragment:$_,envmap_pars_fragment:K_,envmap_pars_vertex:Z_,envmap_physical_pars_fragment:lx,envmap_vertex:J_,fog_vertex:Q_,fog_pars_vertex:ex,fog_fragment:tx,fog_pars_fragment:nx,gradientmap_pars_fragment:ix,lightmap_pars_fragment:sx,lights_lambert_fragment:rx,lights_lambert_pars_fragment:ox,lights_pars_begin:ax,lights_toon_fragment:cx,lights_toon_pars_fragment:hx,lights_phong_fragment:ux,lights_phong_pars_fragment:dx,lights_physical_fragment:px,lights_physical_pars_fragment:fx,lights_fragment_begin:mx,lights_fragment_maps:gx,lights_fragment_end:vx,logdepthbuf_fragment:_x,logdepthbuf_pars_fragment:xx,logdepthbuf_pars_vertex:bx,logdepthbuf_vertex:yx,map_fragment:wx,map_pars_fragment:Sx,map_particle_fragment:Mx,map_particle_pars_fragment:Ex,metalnessmap_fragment:Ax,metalnessmap_pars_fragment:Cx,morphinstance_vertex:Tx,morphcolor_vertex:Rx,morphnormal_vertex:Px,morphtarget_pars_vertex:Ix,morphtarget_vertex:Lx,normal_fragment_begin:Dx,normal_fragment_maps:Ux,normal_pars_fragment:Nx,normal_pars_vertex:Ox,normal_vertex:Fx,normalmap_pars_fragment:Bx,clearcoat_normal_fragment_begin:kx,clearcoat_normal_fragment_maps:zx,clearcoat_pars_fragment:Vx,iridescence_pars_fragment:Gx,opaque_fragment:Hx,packing:Wx,premultiplied_alpha_fragment:Xx,project_vertex:Yx,dithering_fragment:jx,dithering_pars_fragment:qx,roughnessmap_fragment:$x,roughnessmap_pars_fragment:Kx,shadowmap_pars_fragment:Zx,shadowmap_pars_vertex:Jx,shadowmap_vertex:Qx,shadowmask_pars_fragment:e1,skinbase_vertex:t1,skinning_pars_vertex:n1,skinning_vertex:i1,skinnormal_vertex:s1,specularmap_fragment:r1,specularmap_pars_fragment:o1,tonemapping_fragment:a1,tonemapping_pars_fragment:l1,transmission_fragment:c1,transmission_pars_fragment:h1,uv_pars_fragment:u1,uv_pars_vertex:d1,uv_vertex:p1,worldpos_vertex:f1,background_vert:m1,background_frag:g1,backgroundCube_vert:v1,backgroundCube_frag:_1,cube_vert:x1,cube_frag:b1,depth_vert:y1,depth_frag:w1,distanceRGBA_vert:S1,distanceRGBA_frag:M1,equirect_vert:E1,equirect_frag:A1,linedashed_vert:C1,linedashed_frag:T1,meshbasic_vert:R1,meshbasic_frag:P1,meshlambert_vert:I1,meshlambert_frag:L1,meshmatcap_vert:D1,meshmatcap_frag:U1,meshnormal_vert:N1,meshnormal_frag:O1,meshphong_vert:F1,meshphong_frag:B1,meshphysical_vert:k1,meshphysical_frag:z1,meshtoon_vert:V1,meshtoon_frag:G1,points_vert:H1,points_frag:W1,shadow_vert:X1,shadow_frag:Y1,sprite_vert:j1,sprite_frag:q1},ye={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},Yn={basic:{uniforms:an([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:an([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new ke(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:an([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:an([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:an([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new ke(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:an([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:an([ye.points,ye.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:an([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:an([ye.common,ye.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:an([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:an([ye.sprite,ye.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:an([ye.common,ye.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:an([ye.lights,ye.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};Yn.physical={uniforms:an([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};const Co={r:0,b:0,g:0},es=new tn,$1=new ut;function K1(s,e,t,n,i,r,a){const c=new ke(0);let u=r===!0?0:1,d,f,m=null,v=0,g=null;function b(E){let S=E.isScene===!0?E.background:null;return S&&S.isTexture&&(S=(E.backgroundBlurriness>0?t:e).get(S)),S}function y(E){let S=!1;const P=b(E);P===null?_(c,u):P&&P.isColor&&(_(P,1),S=!0);const D=s.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(E,S){const P=b(S);P&&(P.isCubeTexture||P.mapping===pa)?(f===void 0&&(f=new It(new ki(1,1,1),new nn({name:"BackgroundCubeMaterial",uniforms:tr(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(D,O,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(f)),es.copy(S.backgroundRotation),es.x*=-1,es.y*=-1,es.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),f.material.uniforms.envMap.value=P,f.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4($1.makeRotationFromEuler(es)),f.material.toneMapped=_t.getTransfer(P.colorSpace)!==yt,(m!==P||v!==P.version||g!==s.toneMapping)&&(f.material.needsUpdate=!0,m=P,v=P.version,g=s.toneMapping),f.layers.enableAll(),E.unshift(f,f.geometry,f.material,0,0,null)):P&&P.isTexture&&(d===void 0&&(d=new It(new zi(2,2),new nn({name:"BackgroundMaterial",uniforms:tr(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:Oi,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(d)),d.material.uniforms.t2D.value=P,d.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,d.material.toneMapped=_t.getTransfer(P.colorSpace)!==yt,P.matrixAutoUpdate===!0&&P.updateMatrix(),d.material.uniforms.uvTransform.value.copy(P.matrix),(m!==P||v!==P.version||g!==s.toneMapping)&&(d.material.needsUpdate=!0,m=P,v=P.version,g=s.toneMapping),d.layers.enableAll(),E.unshift(d,d.geometry,d.material,0,0,null))}function _(E,S){E.getRGB(Co,Bp(s)),n.buffers.color.setClear(Co.r,Co.g,Co.b,S,a)}function w(){f!==void 0&&(f.geometry.dispose(),f.material.dispose()),d!==void 0&&(d.geometry.dispose(),d.material.dispose())}return{getClearColor:function(){return c},setClearColor:function(E,S=1){c.set(E),u=S,_(c,u)},getClearAlpha:function(){return u},setClearAlpha:function(E){u=E,_(c,u)},render:y,addToRenderList:x,dispose:w}}function Z1(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=v(null);let r=i,a=!1;function c(C,F,Y,X,J){let Q=!1;const ee=m(X,Y,F);r!==ee&&(r=ee,d(r.object)),Q=g(C,X,Y,J),Q&&b(C,X,Y,J),J!==null&&e.update(J,s.ELEMENT_ARRAY_BUFFER),(Q||a)&&(a=!1,S(C,F,Y,X),J!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function u(){return s.createVertexArray()}function d(C){return s.bindVertexArray(C)}function f(C){return s.deleteVertexArray(C)}function m(C,F,Y){const X=Y.wireframe===!0;let J=n[C.id];J===void 0&&(J={},n[C.id]=J);let Q=J[F.id];Q===void 0&&(Q={},J[F.id]=Q);let ee=Q[X];return ee===void 0&&(ee=v(u()),Q[X]=ee),ee}function v(C){const F=[],Y=[],X=[];for(let J=0;J<t;J++)F[J]=0,Y[J]=0,X[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:Y,attributeDivisors:X,object:C,attributes:{},index:null}}function g(C,F,Y,X){const J=r.attributes,Q=F.attributes;let ee=0;const ne=Y.getAttributes();for(const z in ne)if(ne[z].location>=0){const fe=J[z];let me=Q[z];if(me===void 0&&(z==="instanceMatrix"&&C.instanceMatrix&&(me=C.instanceMatrix),z==="instanceColor"&&C.instanceColor&&(me=C.instanceColor)),fe===void 0||fe.attribute!==me||me&&fe.data!==me.data)return!0;ee++}return r.attributesNum!==ee||r.index!==X}function b(C,F,Y,X){const J={},Q=F.attributes;let ee=0;const ne=Y.getAttributes();for(const z in ne)if(ne[z].location>=0){let fe=Q[z];fe===void 0&&(z==="instanceMatrix"&&C.instanceMatrix&&(fe=C.instanceMatrix),z==="instanceColor"&&C.instanceColor&&(fe=C.instanceColor));const me={};me.attribute=fe,fe&&fe.data&&(me.data=fe.data),J[z]=me,ee++}r.attributes=J,r.attributesNum=ee,r.index=X}function y(){const C=r.newAttributes;for(let F=0,Y=C.length;F<Y;F++)C[F]=0}function x(C){_(C,0)}function _(C,F){const Y=r.newAttributes,X=r.enabledAttributes,J=r.attributeDivisors;Y[C]=1,X[C]===0&&(s.enableVertexAttribArray(C),X[C]=1),J[C]!==F&&(s.vertexAttribDivisor(C,F),J[C]=F)}function w(){const C=r.newAttributes,F=r.enabledAttributes;for(let Y=0,X=F.length;Y<X;Y++)F[Y]!==C[Y]&&(s.disableVertexAttribArray(Y),F[Y]=0)}function E(C,F,Y,X,J,Q,ee){ee===!0?s.vertexAttribIPointer(C,F,Y,J,Q):s.vertexAttribPointer(C,F,Y,X,J,Q)}function S(C,F,Y,X){y();const J=X.attributes,Q=Y.getAttributes(),ee=F.defaultAttributeValues;for(const ne in Q){const z=Q[ne];if(z.location>=0){let ce=J[ne];if(ce===void 0&&(ne==="instanceMatrix"&&C.instanceMatrix&&(ce=C.instanceMatrix),ne==="instanceColor"&&C.instanceColor&&(ce=C.instanceColor)),ce!==void 0){const fe=ce.normalized,me=ce.itemSize,le=e.get(ce);if(le===void 0)continue;const He=le.buffer,j=le.type,ae=le.bytesPerElement,Se=j===s.INT||j===s.UNSIGNED_INT||ce.gpuType===fa;if(ce.isInterleavedBufferAttribute){const ve=ce.data,Le=ve.stride,Fe=ce.offset;if(ve.isInstancedInterleavedBuffer){for(let Ge=0;Ge<z.locationSize;Ge++)_(z.location+Ge,ve.meshPerAttribute);C.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Ge=0;Ge<z.locationSize;Ge++)x(z.location+Ge);s.bindBuffer(s.ARRAY_BUFFER,He);for(let Ge=0;Ge<z.locationSize;Ge++)E(z.location+Ge,me/z.locationSize,j,fe,Le*ae,(Fe+me/z.locationSize*Ge)*ae,Se)}else{if(ce.isInstancedBufferAttribute){for(let ve=0;ve<z.locationSize;ve++)_(z.location+ve,ce.meshPerAttribute);C.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ve=0;ve<z.locationSize;ve++)x(z.location+ve);s.bindBuffer(s.ARRAY_BUFFER,He);for(let ve=0;ve<z.locationSize;ve++)E(z.location+ve,me/z.locationSize,j,fe,me*ae,me/z.locationSize*ve*ae,Se)}}else if(ee!==void 0){const fe=ee[ne];if(fe!==void 0)switch(fe.length){case 2:s.vertexAttrib2fv(z.location,fe);break;case 3:s.vertexAttrib3fv(z.location,fe);break;case 4:s.vertexAttrib4fv(z.location,fe);break;default:s.vertexAttrib1fv(z.location,fe)}}}}w()}function P(){U();for(const C in n){const F=n[C];for(const Y in F){const X=F[Y];for(const J in X)f(X[J].object),delete X[J];delete F[Y]}delete n[C]}}function D(C){if(n[C.id]===void 0)return;const F=n[C.id];for(const Y in F){const X=F[Y];for(const J in X)f(X[J].object),delete X[J];delete F[Y]}delete n[C.id]}function O(C){for(const F in n){const Y=n[F];if(Y[C.id]===void 0)continue;const X=Y[C.id];for(const J in X)f(X[J].object),delete X[J];delete Y[C.id]}}function U(){I(),a=!0,r!==i&&(r=i,d(r.object))}function I(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:c,reset:U,resetDefaultState:I,dispose:P,releaseStatesOfGeometry:D,releaseStatesOfProgram:O,initAttributes:y,enableAttribute:x,disableUnusedAttributes:w}}function J1(s,e,t){let n;function i(d){n=d}function r(d,f){s.drawArrays(n,d,f),t.update(f,n,1)}function a(d,f,m){m!==0&&(s.drawArraysInstanced(n,d,f,m),t.update(f,n,m))}function c(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,d,0,f,0,m);let g=0;for(let b=0;b<m;b++)g+=f[b];t.update(g,n,1)}function u(d,f,m,v){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let b=0;b<d.length;b++)a(d[b],f[b],v[b]);else{g.multiDrawArraysInstancedWEBGL(n,d,0,f,0,v,0,m);let b=0;for(let y=0;y<m;y++)b+=f[y]*v[y];t.update(b,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}function Q1(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(O){return!(O!==Ot&&n.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(O){const U=O===Vr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==Yt&&n.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==en&&!U)}function u(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const f=u(d);f!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",f,"instead."),d=f);const m=t.logarithmicDepthBuffer===!0,v=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),g=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),w=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),S=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=b>0,D=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:u,textureFormatReadable:a,textureTypeReadable:c,precision:d,logarithmicDepthBuffer:m,reverseDepthBuffer:v,maxTextures:g,maxVertexTextures:b,maxTextureSize:y,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:w,maxVaryings:E,maxFragmentUniforms:S,vertexTextures:P,maxSamples:D}}function eb(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Sn,c=new tt,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(m,v){const g=m.length!==0||v||n!==0||i;return i=v,n=m.length,g},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(m,v){t=f(m,v,0)},this.setState=function(m,v,g){const b=m.clippingPlanes,y=m.clipIntersection,x=m.clipShadows,_=s.get(m);if(!i||b===null||b.length===0||r&&!x)r?f(null):d();else{const w=r?0:n,E=w*4;let S=_.clippingState||null;u.value=S,S=f(b,v,E,g);for(let P=0;P!==E;++P)S[P]=t[P];_.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=w}};function d(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(m,v,g,b){const y=m!==null?m.length:0;let x=null;if(y!==0){if(x=u.value,b!==!0||x===null){const _=g+y*4,w=v.matrixWorldInverse;c.getNormalMatrix(w),(x===null||x.length<_)&&(x=new Float32Array(_));for(let E=0,S=g;E!==y;++E,S+=4)a.copy(m[E]).applyMatrix4(w,c),a.normal.toArray(x,S),x[S+3]=a.constant}u.value=x,u.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,x}}function tb(s){let e=new WeakMap;function t(a,c){return c===ic?a.mapping=qs:c===sc&&(a.mapping=$s),a}function n(a){if(a&&a.isTexture){const c=a.mapping;if(c===ic||c===sc)if(e.has(a)){const u=e.get(a).texture;return t(u,a.mapping)}else{const u=a.image;if(u&&u.height>0){const d=new q0(u.height);return d.fromEquirectangularTexture(s,a),e.set(a,d),a.addEventListener("dispose",i),t(d.texture,a.mapping)}else return null}}return a}function i(a){const c=a.target;c.removeEventListener("dispose",i);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Vs=4,nd=[.125,.215,.35,.446,.526,.582],ss=20,Sl=new ci,id=new ke;let Ml=null,El=0,Al=0,Cl=!1;const ns=(1+Math.sqrt(5))/2,Us=1/ns,sd=[new L(-ns,Us,0),new L(ns,Us,0),new L(-Us,0,ns),new L(Us,0,ns),new L(0,ns,-Us),new L(0,ns,Us),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class rd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ml=this._renderer.getRenderTarget(),El=this._renderer.getActiveCubeFace(),Al=this._renderer.getActiveMipmapLevel(),Cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ld(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ad(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ml,El,Al),this._renderer.xr.enabled=Cl,e.scissorTest=!1,To(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qs||e.mapping===$s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ml=this._renderer.getRenderTarget(),El=this._renderer.getActiveCubeFace(),Al=this._renderer.getActiveMipmapLevel(),Cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Nt,minFilter:Nt,generateMipmaps:!1,type:Vr,format:Ot,colorSpace:Qs,depthBuffer:!1},i=od(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=od(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=nb(r)),this._blurMaterial=ib(r,e,t)}return i}_compileMaterial(e){const t=new It(this._lodPlanes[0],e);this._renderer.compile(t,Sl)}_sceneToCubeUV(e,t,n,i){const c=new fn(90,1,t,n),u=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,m=f.autoClear,v=f.toneMapping;f.getClearColor(id),f.toneMapping=Ni,f.autoClear=!1;const g=new Zc({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1}),b=new It(new ki,g);let y=!1;const x=e.background;x?x.isColor&&(g.color.copy(x),e.background=null,y=!0):(g.color.copy(id),y=!0);for(let _=0;_<6;_++){const w=_%3;w===0?(c.up.set(0,u[_],0),c.lookAt(d[_],0,0)):w===1?(c.up.set(0,0,u[_]),c.lookAt(0,d[_],0)):(c.up.set(0,u[_],0),c.lookAt(0,0,d[_]));const E=this._cubeSize;To(i,w*E,_>2?E:0,E,E),f.setRenderTarget(i),y&&f.render(b,c),f.render(e,c)}b.geometry.dispose(),b.material.dispose(),f.toneMapping=v,f.autoClear=m,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===qs||e.mapping===$s;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ld()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ad());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new It(this._lodPlanes[0],r),c=r.uniforms;c.envMap.value=e;const u=this._cubeSize;To(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(a,Sl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),c=sd[(i-r-1)%sd.length];this._blur(e,r-1,r,a,c)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,c){const u=this._renderer,d=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,m=new It(this._lodPlanes[i],d),v=d.uniforms,g=this._sizeLods[n]-1,b=isFinite(r)?Math.PI/(2*g):2*Math.PI/(2*ss-1),y=r/b,x=isFinite(r)?1+Math.floor(f*y):ss;x>ss&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${ss}`);const _=[];let w=0;for(let O=0;O<ss;++O){const U=O/y,I=Math.exp(-U*U/2);_.push(I),O===0?w+=I:O<x&&(w+=2*I)}for(let O=0;O<_.length;O++)_[O]=_[O]/w;v.envMap.value=e.texture,v.samples.value=x,v.weights.value=_,v.latitudinal.value=a==="latitudinal",c&&(v.poleAxis.value=c);const{_lodMax:E}=this;v.dTheta.value=b,v.mipInt.value=E-n;const S=this._sizeLods[i],P=3*S*(i>E-Vs?i-E+Vs:0),D=4*(this._cubeSize-S);To(t,P,D,3*S,2*S),u.setRenderTarget(t),u.render(m,Sl)}}function nb(s){const e=[],t=[],n=[];let i=s;const r=s-Vs+1+nd.length;for(let a=0;a<r;a++){const c=Math.pow(2,i);t.push(c);let u=1/c;a>s-Vs?u=nd[a-s+Vs-1]:a===0&&(u=0),n.push(u);const d=1/(c-2),f=-d,m=1+d,v=[f,f,m,f,m,m,f,f,m,m,f,m],g=6,b=6,y=3,x=2,_=1,w=new Float32Array(y*b*g),E=new Float32Array(x*b*g),S=new Float32Array(_*b*g);for(let D=0;D<g;D++){const O=D%3*2/3-1,U=D>2?0:-1,I=[O,U,0,O+2/3,U,0,O+2/3,U+1,0,O,U,0,O+2/3,U+1,0,O,U+1,0];w.set(I,y*b*D),E.set(v,x*b*D);const C=[D,D,D,D,D,D];S.set(C,_*b*D)}const P=new An;P.setAttribute("position",new Ut(w,y)),P.setAttribute("uv",new Ut(E,x)),P.setAttribute("faceIndex",new Ut(S,_)),e.push(P),i>Vs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function od(s,e,t){const n=new Ln(s,e,t);return n.texture.mapping=pa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function To(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function ib(s,e,t){const n=new Float32Array(ss),i=new L(0,1,0);return new nn({name:"SphericalGaussianBlur",defines:{n:ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:sh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function ad(){return new nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function ld(){return new nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function sh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function sb(s){let e=new WeakMap,t=null;function n(c){if(c&&c.isTexture){const u=c.mapping,d=u===ic||u===sc,f=u===qs||u===$s;if(d||f){let m=e.get(c);const v=m!==void 0?m.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==v)return t===null&&(t=new rd(s)),m=d?t.fromEquirectangular(c,m):t.fromCubemap(c,m),m.texture.pmremVersion=c.pmremVersion,e.set(c,m),m.texture;if(m!==void 0)return m.texture;{const g=c.image;return d&&g&&g.height>0||f&&g&&i(g)?(t===null&&(t=new rd(s)),m=d?t.fromEquirectangular(c):t.fromCubemap(c),m.texture.pmremVersion=c.pmremVersion,e.set(c,m),c.addEventListener("dispose",r),m.texture):null}}}return c}function i(c){let u=0;const d=6;for(let f=0;f<d;f++)c[f]!==void 0&&u++;return u===d}function r(c){const u=c.target;u.removeEventListener("dispose",r);const d=e.get(u);d!==void 0&&(e.delete(u),d.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function rb(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&ks("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function ob(s,e,t,n){const i={},r=new WeakMap;function a(m){const v=m.target;v.index!==null&&e.remove(v.index);for(const b in v.attributes)e.remove(v.attributes[b]);v.removeEventListener("dispose",a),delete i[v.id];const g=r.get(v);g&&(e.remove(g),r.delete(v)),n.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function c(m,v){return i[v.id]===!0||(v.addEventListener("dispose",a),i[v.id]=!0,t.memory.geometries++),v}function u(m){const v=m.attributes;for(const g in v)e.update(v[g],s.ARRAY_BUFFER)}function d(m){const v=[],g=m.index,b=m.attributes.position;let y=0;if(g!==null){const w=g.array;y=g.version;for(let E=0,S=w.length;E<S;E+=3){const P=w[E+0],D=w[E+1],O=w[E+2];v.push(P,D,D,O,O,P)}}else if(b!==void 0){const w=b.array;y=b.version;for(let E=0,S=w.length/3-1;E<S;E+=3){const P=E+0,D=E+1,O=E+2;v.push(P,D,D,O,O,P)}}else return;const x=new(Pp(v)?Fp:Op)(v,1);x.version=y;const _=r.get(m);_&&e.remove(_),r.set(m,x)}function f(m){const v=r.get(m);if(v){const g=m.index;g!==null&&v.version<g.version&&d(m)}else d(m);return r.get(m)}return{get:c,update:u,getWireframeAttribute:f}}function ab(s,e,t){let n;function i(v){n=v}let r,a;function c(v){r=v.type,a=v.bytesPerElement}function u(v,g){s.drawElements(n,g,r,v*a),t.update(g,n,1)}function d(v,g,b){b!==0&&(s.drawElementsInstanced(n,g,r,v*a,b),t.update(g,n,b))}function f(v,g,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,r,v,0,b);let x=0;for(let _=0;_<b;_++)x+=g[_];t.update(x,n,1)}function m(v,g,b,y){if(b===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let _=0;_<v.length;_++)d(v[_]/a,g[_],y[_]);else{x.multiDrawElementsInstancedWEBGL(n,g,0,r,v,0,y,0,b);let _=0;for(let w=0;w<b;w++)_+=g[w]*y[w];t.update(_,n,1)}}this.setMode=i,this.setIndex=c,this.render=u,this.renderInstances=d,this.renderMultiDraw=f,this.renderMultiDrawInstances=m}function lb(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,c){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=c*(r/3);break;case s.LINES:t.lines+=c*(r/2);break;case s.LINE_STRIP:t.lines+=c*(r-1);break;case s.LINE_LOOP:t.lines+=c*r;break;case s.POINTS:t.points+=c*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function cb(s,e,t){const n=new WeakMap,i=new Ct;function r(a,c,u){const d=a.morphTargetInfluences,f=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,m=f!==void 0?f.length:0;let v=n.get(c);if(v===void 0||v.count!==m){let I=function(){O.dispose(),n.delete(c),c.removeEventListener("dispose",I)};v!==void 0&&v.texture.dispose();const g=c.morphAttributes.position!==void 0,b=c.morphAttributes.normal!==void 0,y=c.morphAttributes.color!==void 0,x=c.morphAttributes.position||[],_=c.morphAttributes.normal||[],w=c.morphAttributes.color||[];let E=0;g===!0&&(E=1),b===!0&&(E=2),y===!0&&(E=3);let S=c.attributes.position.count*E,P=1;S>e.maxTextureSize&&(P=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const D=new Float32Array(S*P*4*m),O=new Ip(D,S,P,m);O.type=en,O.needsUpdate=!0;const U=E*4;for(let C=0;C<m;C++){const F=x[C],Y=_[C],X=w[C],J=S*P*4*C;for(let Q=0;Q<F.count;Q++){const ee=Q*U;g===!0&&(i.fromBufferAttribute(F,Q),D[J+ee+0]=i.x,D[J+ee+1]=i.y,D[J+ee+2]=i.z,D[J+ee+3]=0),b===!0&&(i.fromBufferAttribute(Y,Q),D[J+ee+4]=i.x,D[J+ee+5]=i.y,D[J+ee+6]=i.z,D[J+ee+7]=0),y===!0&&(i.fromBufferAttribute(X,Q),D[J+ee+8]=i.x,D[J+ee+9]=i.y,D[J+ee+10]=i.z,D[J+ee+11]=X.itemSize===4?i.w:1)}}v={count:m,texture:O,size:new Ie(S,P)},n.set(c,v),c.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)u.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let g=0;for(let y=0;y<d.length;y++)g+=d[y];const b=c.morphTargetsRelative?1:1-g;u.getUniforms().setValue(s,"morphTargetBaseInfluence",b),u.getUniforms().setValue(s,"morphTargetInfluences",d)}u.getUniforms().setValue(s,"morphTargetsTexture",v.texture,t),u.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:r}}function hb(s,e,t,n){let i=new WeakMap;function r(u){const d=n.render.frame,f=u.geometry,m=e.get(u,f);if(i.get(m)!==d&&(e.update(m),i.set(m,d)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),i.get(u)!==d&&(t.update(u.instanceMatrix,s.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,s.ARRAY_BUFFER),i.set(u,d))),u.isSkinnedMesh){const v=u.skeleton;i.get(v)!==d&&(v.update(),i.set(v,d))}return m}function a(){i=new WeakMap}function c(u){const d=u.target;d.removeEventListener("dispose",c),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:r,dispose:a}}const Wp=new Mt,cd=new eh(1,1),Xp=new Ip,Yp=new Lp,jp=new zp,hd=[],ud=[],dd=new Float32Array(16),pd=new Float32Array(9),fd=new Float32Array(4);function rr(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=hd[i];if(r===void 0&&(r=new Float32Array(i),hd[i]=r),e!==0){n.toArray(r,0);for(let a=1,c=0;a!==e;++a)c+=t,s[a].toArray(r,c)}return r}function Gt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Ht(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function va(s,e){let t=ud[e];t===void 0&&(t=new Int32Array(e),ud[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function ub(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function db(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;s.uniform2fv(this.addr,e),Ht(t,e)}}function pb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gt(t,e))return;s.uniform3fv(this.addr,e),Ht(t,e)}}function fb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;s.uniform4fv(this.addr,e),Ht(t,e)}}function mb(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(Gt(t,n))return;fd.set(n),s.uniformMatrix2fv(this.addr,!1,fd),Ht(t,n)}}function gb(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(Gt(t,n))return;pd.set(n),s.uniformMatrix3fv(this.addr,!1,pd),Ht(t,n)}}function vb(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(Gt(t,n))return;dd.set(n),s.uniformMatrix4fv(this.addr,!1,dd),Ht(t,n)}}function _b(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function xb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;s.uniform2iv(this.addr,e),Ht(t,e)}}function bb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;s.uniform3iv(this.addr,e),Ht(t,e)}}function yb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;s.uniform4iv(this.addr,e),Ht(t,e)}}function wb(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Sb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;s.uniform2uiv(this.addr,e),Ht(t,e)}}function Mb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;s.uniform3uiv(this.addr,e),Ht(t,e)}}function Eb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;s.uniform4uiv(this.addr,e),Ht(t,e)}}function Ab(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(cd.compareFunction=Rp,r=cd):r=Wp,t.setTexture2D(e||r,i)}function Cb(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Yp,i)}function Tb(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||jp,i)}function Rb(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Xp,i)}function Pb(s){switch(s){case 5126:return ub;case 35664:return db;case 35665:return pb;case 35666:return fb;case 35674:return mb;case 35675:return gb;case 35676:return vb;case 5124:case 35670:return _b;case 35667:case 35671:return xb;case 35668:case 35672:return bb;case 35669:case 35673:return yb;case 5125:return wb;case 36294:return Sb;case 36295:return Mb;case 36296:return Eb;case 35678:case 36198:case 36298:case 36306:case 35682:return Ab;case 35679:case 36299:case 36307:return Cb;case 35680:case 36300:case 36308:case 36293:return Tb;case 36289:case 36303:case 36311:case 36292:return Rb}}function Ib(s,e){s.uniform1fv(this.addr,e)}function Lb(s,e){const t=rr(e,this.size,2);s.uniform2fv(this.addr,t)}function Db(s,e){const t=rr(e,this.size,3);s.uniform3fv(this.addr,t)}function Ub(s,e){const t=rr(e,this.size,4);s.uniform4fv(this.addr,t)}function Nb(s,e){const t=rr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Ob(s,e){const t=rr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Fb(s,e){const t=rr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Bb(s,e){s.uniform1iv(this.addr,e)}function kb(s,e){s.uniform2iv(this.addr,e)}function zb(s,e){s.uniform3iv(this.addr,e)}function Vb(s,e){s.uniform4iv(this.addr,e)}function Gb(s,e){s.uniform1uiv(this.addr,e)}function Hb(s,e){s.uniform2uiv(this.addr,e)}function Wb(s,e){s.uniform3uiv(this.addr,e)}function Xb(s,e){s.uniform4uiv(this.addr,e)}function Yb(s,e,t){const n=this.cache,i=e.length,r=va(t,i);Gt(n,r)||(s.uniform1iv(this.addr,r),Ht(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Wp,r[a])}function jb(s,e,t){const n=this.cache,i=e.length,r=va(t,i);Gt(n,r)||(s.uniform1iv(this.addr,r),Ht(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Yp,r[a])}function qb(s,e,t){const n=this.cache,i=e.length,r=va(t,i);Gt(n,r)||(s.uniform1iv(this.addr,r),Ht(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||jp,r[a])}function $b(s,e,t){const n=this.cache,i=e.length,r=va(t,i);Gt(n,r)||(s.uniform1iv(this.addr,r),Ht(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Xp,r[a])}function Kb(s){switch(s){case 5126:return Ib;case 35664:return Lb;case 35665:return Db;case 35666:return Ub;case 35674:return Nb;case 35675:return Ob;case 35676:return Fb;case 5124:case 35670:return Bb;case 35667:case 35671:return kb;case 35668:case 35672:return zb;case 35669:case 35673:return Vb;case 5125:return Gb;case 36294:return Hb;case 36295:return Wb;case 36296:return Xb;case 35678:case 36198:case 36298:case 36306:case 35682:return Yb;case 35679:case 36299:case 36307:return jb;case 35680:case 36300:case 36308:case 36293:return qb;case 36289:case 36303:case 36311:case 36292:return $b}}class Zb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Pb(t.type)}}class Jb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Kb(t.type)}}class Qb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const c=i[r];c.setValue(e,t[c.id],n)}}}const Tl=/(\w+)(\])?(\[|\.)?/g;function md(s,e){s.seq.push(e),s.map[e.id]=e}function ey(s,e,t){const n=s.name,i=n.length;for(Tl.lastIndex=0;;){const r=Tl.exec(n),a=Tl.lastIndex;let c=r[1];const u=r[2]==="]",d=r[3];if(u&&(c=c|0),d===void 0||d==="["&&a+2===i){md(t,d===void 0?new Zb(c,s,e):new Jb(c,s,e));break}else{let m=t.map[c];m===void 0&&(m=new Qb(c),md(t,m)),t=m}}}class $o{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);ey(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const c=t[r],u=n[c.id];u.needsUpdate!==!1&&c.setValue(e,u.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function gd(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const ty=37297;let ny=0;function iy(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const c=a+1;n.push(`${c===e?">":" "} ${c}: ${t[a]}`)}return n.join(`
`)}const vd=new tt;function sy(s){_t._getMatrix(vd,_t.workingColorSpace,s);const e=`mat3( ${vd.elements.map(t=>t.toFixed(4))} )`;switch(_t.getTransfer(s)){case Qo:return[e,"LinearTransferOETF"];case yt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function _d(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+iy(s.getShaderSource(e),a)}else return i}function ry(s,e){const t=sy(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function oy(s,e){let t;switch(e){case Hv:t="Linear";break;case Wv:t="Reinhard";break;case Xv:t="Cineon";break;case Yv:t="ACESFilmic";break;case qv:t="AgX";break;case $v:t="Neutral";break;case jv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ro=new L;function ay(){_t.getLuminanceCoefficients(Ro);const s=Ro.x.toFixed(4),e=Ro.y.toFixed(4),t=Ro.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ly(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ar).join(`
`)}function cy(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function hy(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let c=1;r.type===s.FLOAT_MAT2&&(c=2),r.type===s.FLOAT_MAT3&&(c=3),r.type===s.FLOAT_MAT4&&(c=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:c}}return t}function Ar(s){return s!==""}function xd(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bd(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const uy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ic(s){return s.replace(uy,py)}const dy=new Map;function py(s,e){let t=st[e];if(t===void 0){const n=dy.get(e);if(n!==void 0)t=st[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ic(t)}const fy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yd(s){return s.replace(fy,my)}function my(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function wd(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function gy(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===_p?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ev?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===oi&&(e="SHADOWMAP_TYPE_VSM"),e}function vy(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case qs:case $s:e="ENVMAP_TYPE_CUBE";break;case pa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _y(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case $s:e="ENVMAP_MODE_REFRACTION";break}return e}function xy(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case zc:e="ENVMAP_BLENDING_MULTIPLY";break;case Vv:e="ENVMAP_BLENDING_MIX";break;case Gv:e="ENVMAP_BLENDING_ADD";break}return e}function by(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function yy(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,c=t.fragmentShader;const u=gy(t),d=vy(t),f=_y(t),m=xy(t),v=by(t),g=ly(t),b=cy(r),y=i.createProgram();let x,_,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Ar).join(`
`),x.length>0&&(x+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Ar).join(`
`),_.length>0&&(_+=`
`)):(x=[wd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ar).join(`
`),_=[wd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",t.envMap?"#define "+m:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ni?"#define TONE_MAPPING":"",t.toneMapping!==Ni?st.tonemapping_pars_fragment:"",t.toneMapping!==Ni?oy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,ry("linearToOutputTexel",t.outputColorSpace),ay(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ar).join(`
`)),a=Ic(a),a=xd(a,t),a=bd(a,t),c=Ic(c),c=xd(c,t),c=bd(c,t),a=yd(a),c=yd(c),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,x=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,_=["#define varying in",t.glslVersion===Tu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Tu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const E=w+x+a,S=w+_+c,P=gd(i,i.VERTEX_SHADER,E),D=gd(i,i.FRAGMENT_SHADER,S);i.attachShader(y,P),i.attachShader(y,D),t.index0AttributeName!==void 0?i.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(y,0,"position"),i.linkProgram(y);function O(F){if(s.debug.checkShaderErrors){const Y=i.getProgramInfoLog(y).trim(),X=i.getShaderInfoLog(P).trim(),J=i.getShaderInfoLog(D).trim();let Q=!0,ee=!0;if(i.getProgramParameter(y,i.LINK_STATUS)===!1)if(Q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,y,P,D);else{const ne=_d(i,P,"vertex"),z=_d(i,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(y,i.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+Y+`
`+ne+`
`+z)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(X===""||J==="")&&(ee=!1);ee&&(F.diagnostics={runnable:Q,programLog:Y,vertexShader:{log:X,prefix:x},fragmentShader:{log:J,prefix:_}})}i.deleteShader(P),i.deleteShader(D),U=new $o(i,y),I=hy(i,y)}let U;this.getUniforms=function(){return U===void 0&&O(this),U};let I;this.getAttributes=function(){return I===void 0&&O(this),I};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(y,ty)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ny++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=P,this.fragmentShader=D,this}let wy=0;class Sy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new My(e),t.set(e,n)),n}}class My{constructor(e){this.id=wy++,this.code=e,this.usedTimes=0}}function Ey(s,e,t,n,i,r,a){const c=new Up,u=new Sy,d=new Set,f=[],m=i.logarithmicDepthBuffer,v=i.vertexTextures;let g=i.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(I){return d.add(I),I===0?"uv":`uv${I}`}function x(I,C,F,Y,X){const J=Y.fog,Q=X.geometry,ee=I.isMeshStandardMaterial?Y.environment:null,ne=(I.isMeshStandardMaterial?t:e).get(I.envMap||ee),z=ne&&ne.mapping===pa?ne.image.height:null,ce=b[I.type];I.precision!==null&&(g=i.getMaxPrecision(I.precision),g!==I.precision&&console.warn("THREE.WebGLProgram.getParameters:",I.precision,"not supported, using",g,"instead."));const fe=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,me=fe!==void 0?fe.length:0;let le=0;Q.morphAttributes.position!==void 0&&(le=1),Q.morphAttributes.normal!==void 0&&(le=2),Q.morphAttributes.color!==void 0&&(le=3);let He,j,ae,Se;if(ce){const it=Yn[ce];He=it.vertexShader,j=it.fragmentShader}else He=I.vertexShader,j=I.fragmentShader,u.update(I),ae=u.getVertexShaderID(I),Se=u.getFragmentShaderID(I);const ve=s.getRenderTarget(),Le=s.state.buffers.depth.getReversed(),Fe=X.isInstancedMesh===!0,Ge=X.isBatchedMesh===!0,q=!!I.map,_e=!!I.matcap,je=!!ne,k=!!I.aoMap,dt=!!I.lightMap,Ne=!!I.bumpMap,Xe=!!I.normalMap,De=!!I.displacementMap,pt=!!I.emissiveMap,Oe=!!I.metalnessMap,N=!!I.roughnessMap,T=I.anisotropy>0,$=I.clearcoat>0,se=I.dispersion>0,ue=I.iridescence>0,ie=I.sheen>0,Ue=I.transmission>0,we=T&&!!I.anisotropyMap,Ce=$&&!!I.clearcoatMap,rt=$&&!!I.clearcoatNormalMap,ge=$&&!!I.clearcoatRoughnessMap,Pe=ue&&!!I.iridescenceMap,ze=ue&&!!I.iridescenceThicknessMap,qe=ie&&!!I.sheenColorMap,Ae=ie&&!!I.sheenRoughnessMap,nt=!!I.specularMap,Ke=!!I.specularColorMap,bt=!!I.specularIntensityMap,V=Ue&&!!I.transmissionMap,xe=Ue&&!!I.thicknessMap,te=!!I.gradientMap,oe=!!I.alphaMap,Ee=I.alphaTest>0,Me=!!I.alphaHash,Qe=!!I.extensions;let St=Ni;I.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(St=s.toneMapping);const Ft={shaderID:ce,shaderType:I.type,shaderName:I.name,vertexShader:He,fragmentShader:j,defines:I.defines,customVertexShaderID:ae,customFragmentShaderID:Se,isRawShaderMaterial:I.isRawShaderMaterial===!0,glslVersion:I.glslVersion,precision:g,batching:Ge,batchingColor:Ge&&X._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&X.instanceColor!==null,instancingMorph:Fe&&X.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:ve===null?s.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Qs,alphaToCoverage:!!I.alphaToCoverage,map:q,matcap:_e,envMap:je,envMapMode:je&&ne.mapping,envMapCubeUVHeight:z,aoMap:k,lightMap:dt,bumpMap:Ne,normalMap:Xe,displacementMap:v&&De,emissiveMap:pt,normalMapObjectSpace:Xe&&I.normalMapType===e0,normalMapTangentSpace:Xe&&I.normalMapType===Tp,metalnessMap:Oe,roughnessMap:N,anisotropy:T,anisotropyMap:we,clearcoat:$,clearcoatMap:Ce,clearcoatNormalMap:rt,clearcoatRoughnessMap:ge,dispersion:se,iridescence:ue,iridescenceMap:Pe,iridescenceThicknessMap:ze,sheen:ie,sheenColorMap:qe,sheenRoughnessMap:Ae,specularMap:nt,specularColorMap:Ke,specularIntensityMap:bt,transmission:Ue,transmissionMap:V,thicknessMap:xe,gradientMap:te,opaque:I.transparent===!1&&I.blending===$n&&I.alphaToCoverage===!1,alphaMap:oe,alphaTest:Ee,alphaHash:Me,combine:I.combine,mapUv:q&&y(I.map.channel),aoMapUv:k&&y(I.aoMap.channel),lightMapUv:dt&&y(I.lightMap.channel),bumpMapUv:Ne&&y(I.bumpMap.channel),normalMapUv:Xe&&y(I.normalMap.channel),displacementMapUv:De&&y(I.displacementMap.channel),emissiveMapUv:pt&&y(I.emissiveMap.channel),metalnessMapUv:Oe&&y(I.metalnessMap.channel),roughnessMapUv:N&&y(I.roughnessMap.channel),anisotropyMapUv:we&&y(I.anisotropyMap.channel),clearcoatMapUv:Ce&&y(I.clearcoatMap.channel),clearcoatNormalMapUv:rt&&y(I.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&y(I.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&y(I.iridescenceMap.channel),iridescenceThicknessMapUv:ze&&y(I.iridescenceThicknessMap.channel),sheenColorMapUv:qe&&y(I.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&y(I.sheenRoughnessMap.channel),specularMapUv:nt&&y(I.specularMap.channel),specularColorMapUv:Ke&&y(I.specularColorMap.channel),specularIntensityMapUv:bt&&y(I.specularIntensityMap.channel),transmissionMapUv:V&&y(I.transmissionMap.channel),thicknessMapUv:xe&&y(I.thicknessMap.channel),alphaMapUv:oe&&y(I.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Xe||T),vertexColors:I.vertexColors,vertexAlphas:I.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!Q.attributes.uv&&(q||oe),fog:!!J,useFog:I.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:I.flatShading===!0,sizeAttenuation:I.sizeAttenuation===!0,logarithmicDepthBuffer:m,reverseDepthBuffer:Le,skinning:X.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:le,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:I.dithering,shadowMapEnabled:s.shadowMap.enabled&&F.length>0,shadowMapType:s.shadowMap.type,toneMapping:St,decodeVideoTexture:q&&I.map.isVideoTexture===!0&&_t.getTransfer(I.map.colorSpace)===yt,decodeVideoTextureEmissive:pt&&I.emissiveMap.isVideoTexture===!0&&_t.getTransfer(I.emissiveMap.colorSpace)===yt,premultipliedAlpha:I.premultipliedAlpha,doubleSided:I.side===Bn,flipSided:I.side===gn,useDepthPacking:I.depthPacking>=0,depthPacking:I.depthPacking||0,index0AttributeName:I.index0AttributeName,extensionClipCullDistance:Qe&&I.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qe&&I.extensions.multiDraw===!0||Ge)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:I.customProgramCacheKey()};return Ft.vertexUv1s=d.has(1),Ft.vertexUv2s=d.has(2),Ft.vertexUv3s=d.has(3),d.clear(),Ft}function _(I){const C=[];if(I.shaderID?C.push(I.shaderID):(C.push(I.customVertexShaderID),C.push(I.customFragmentShaderID)),I.defines!==void 0)for(const F in I.defines)C.push(F),C.push(I.defines[F]);return I.isRawShaderMaterial===!1&&(w(C,I),E(C,I),C.push(s.outputColorSpace)),C.push(I.customProgramCacheKey),C.join()}function w(I,C){I.push(C.precision),I.push(C.outputColorSpace),I.push(C.envMapMode),I.push(C.envMapCubeUVHeight),I.push(C.mapUv),I.push(C.alphaMapUv),I.push(C.lightMapUv),I.push(C.aoMapUv),I.push(C.bumpMapUv),I.push(C.normalMapUv),I.push(C.displacementMapUv),I.push(C.emissiveMapUv),I.push(C.metalnessMapUv),I.push(C.roughnessMapUv),I.push(C.anisotropyMapUv),I.push(C.clearcoatMapUv),I.push(C.clearcoatNormalMapUv),I.push(C.clearcoatRoughnessMapUv),I.push(C.iridescenceMapUv),I.push(C.iridescenceThicknessMapUv),I.push(C.sheenColorMapUv),I.push(C.sheenRoughnessMapUv),I.push(C.specularMapUv),I.push(C.specularColorMapUv),I.push(C.specularIntensityMapUv),I.push(C.transmissionMapUv),I.push(C.thicknessMapUv),I.push(C.combine),I.push(C.fogExp2),I.push(C.sizeAttenuation),I.push(C.morphTargetsCount),I.push(C.morphAttributeCount),I.push(C.numDirLights),I.push(C.numPointLights),I.push(C.numSpotLights),I.push(C.numSpotLightMaps),I.push(C.numHemiLights),I.push(C.numRectAreaLights),I.push(C.numDirLightShadows),I.push(C.numPointLightShadows),I.push(C.numSpotLightShadows),I.push(C.numSpotLightShadowsWithMaps),I.push(C.numLightProbes),I.push(C.shadowMapType),I.push(C.toneMapping),I.push(C.numClippingPlanes),I.push(C.numClipIntersection),I.push(C.depthPacking)}function E(I,C){c.disableAll(),C.supportsVertexTextures&&c.enable(0),C.instancing&&c.enable(1),C.instancingColor&&c.enable(2),C.instancingMorph&&c.enable(3),C.matcap&&c.enable(4),C.envMap&&c.enable(5),C.normalMapObjectSpace&&c.enable(6),C.normalMapTangentSpace&&c.enable(7),C.clearcoat&&c.enable(8),C.iridescence&&c.enable(9),C.alphaTest&&c.enable(10),C.vertexColors&&c.enable(11),C.vertexAlphas&&c.enable(12),C.vertexUv1s&&c.enable(13),C.vertexUv2s&&c.enable(14),C.vertexUv3s&&c.enable(15),C.vertexTangents&&c.enable(16),C.anisotropy&&c.enable(17),C.alphaHash&&c.enable(18),C.batching&&c.enable(19),C.dispersion&&c.enable(20),C.batchingColor&&c.enable(21),I.push(c.mask),c.disableAll(),C.fog&&c.enable(0),C.useFog&&c.enable(1),C.flatShading&&c.enable(2),C.logarithmicDepthBuffer&&c.enable(3),C.reverseDepthBuffer&&c.enable(4),C.skinning&&c.enable(5),C.morphTargets&&c.enable(6),C.morphNormals&&c.enable(7),C.morphColors&&c.enable(8),C.premultipliedAlpha&&c.enable(9),C.shadowMapEnabled&&c.enable(10),C.doubleSided&&c.enable(11),C.flipSided&&c.enable(12),C.useDepthPacking&&c.enable(13),C.dithering&&c.enable(14),C.transmission&&c.enable(15),C.sheen&&c.enable(16),C.opaque&&c.enable(17),C.pointsUvs&&c.enable(18),C.decodeVideoTexture&&c.enable(19),C.decodeVideoTextureEmissive&&c.enable(20),C.alphaToCoverage&&c.enable(21),I.push(c.mask)}function S(I){const C=b[I.type];let F;if(C){const Y=Yn[C];F=W0.clone(Y.uniforms)}else F=I.uniforms;return F}function P(I,C){let F;for(let Y=0,X=f.length;Y<X;Y++){const J=f[Y];if(J.cacheKey===C){F=J,++F.usedTimes;break}}return F===void 0&&(F=new yy(s,C,I,r),f.push(F)),F}function D(I){if(--I.usedTimes===0){const C=f.indexOf(I);f[C]=f[f.length-1],f.pop(),I.destroy()}}function O(I){u.remove(I)}function U(){u.dispose()}return{getParameters:x,getProgramCacheKey:_,getUniforms:S,acquireProgram:P,releaseProgram:D,releaseShaderCache:O,programs:f,dispose:U}}function Ay(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let c=s.get(a);return c===void 0&&(c={},s.set(a,c)),c}function n(a){s.delete(a)}function i(a,c,u){s.get(a)[c]=u}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Cy(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Sd(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Md(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(m,v,g,b,y,x){let _=s[e];return _===void 0?(_={id:m.id,object:m,geometry:v,material:g,groupOrder:b,renderOrder:m.renderOrder,z:y,group:x},s[e]=_):(_.id=m.id,_.object=m,_.geometry=v,_.material=g,_.groupOrder=b,_.renderOrder=m.renderOrder,_.z=y,_.group=x),e++,_}function c(m,v,g,b,y,x){const _=a(m,v,g,b,y,x);g.transmission>0?n.push(_):g.transparent===!0?i.push(_):t.push(_)}function u(m,v,g,b,y,x){const _=a(m,v,g,b,y,x);g.transmission>0?n.unshift(_):g.transparent===!0?i.unshift(_):t.unshift(_)}function d(m,v){t.length>1&&t.sort(m||Cy),n.length>1&&n.sort(v||Sd),i.length>1&&i.sort(v||Sd)}function f(){for(let m=e,v=s.length;m<v;m++){const g=s[m];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:c,unshift:u,finish:f,sort:d}}function Ty(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new Md,s.set(n,[a])):i>=r.length?(a=new Md,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Ry(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new ke};break;case"SpotLight":t={position:new L,direction:new L,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new L,halfWidth:new L,halfHeight:new L};break}return s[e.id]=t,t}}}function Py(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Iy=0;function Ly(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Dy(s){const e=new Ry,t=Py(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)n.probe.push(new L);const i=new L,r=new ut,a=new ut;function c(d){let f=0,m=0,v=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let g=0,b=0,y=0,x=0,_=0,w=0,E=0,S=0,P=0,D=0,O=0;d.sort(Ly);for(let I=0,C=d.length;I<C;I++){const F=d[I],Y=F.color,X=F.intensity,J=F.distance,Q=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)f+=Y.r*X,m+=Y.g*X,v+=Y.b*X;else if(F.isLightProbe){for(let ee=0;ee<9;ee++)n.probe[ee].addScaledVector(F.sh.coefficients[ee],X);O++}else if(F.isDirectionalLight){const ee=e.get(F);if(ee.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const ne=F.shadow,z=t.get(F);z.shadowIntensity=ne.intensity,z.shadowBias=ne.bias,z.shadowNormalBias=ne.normalBias,z.shadowRadius=ne.radius,z.shadowMapSize=ne.mapSize,n.directionalShadow[g]=z,n.directionalShadowMap[g]=Q,n.directionalShadowMatrix[g]=F.shadow.matrix,w++}n.directional[g]=ee,g++}else if(F.isSpotLight){const ee=e.get(F);ee.position.setFromMatrixPosition(F.matrixWorld),ee.color.copy(Y).multiplyScalar(X),ee.distance=J,ee.coneCos=Math.cos(F.angle),ee.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),ee.decay=F.decay,n.spot[y]=ee;const ne=F.shadow;if(F.map&&(n.spotLightMap[P]=F.map,P++,ne.updateMatrices(F),F.castShadow&&D++),n.spotLightMatrix[y]=ne.matrix,F.castShadow){const z=t.get(F);z.shadowIntensity=ne.intensity,z.shadowBias=ne.bias,z.shadowNormalBias=ne.normalBias,z.shadowRadius=ne.radius,z.shadowMapSize=ne.mapSize,n.spotShadow[y]=z,n.spotShadowMap[y]=Q,S++}y++}else if(F.isRectAreaLight){const ee=e.get(F);ee.color.copy(Y).multiplyScalar(X),ee.halfWidth.set(F.width*.5,0,0),ee.halfHeight.set(0,F.height*.5,0),n.rectArea[x]=ee,x++}else if(F.isPointLight){const ee=e.get(F);if(ee.color.copy(F.color).multiplyScalar(F.intensity),ee.distance=F.distance,ee.decay=F.decay,F.castShadow){const ne=F.shadow,z=t.get(F);z.shadowIntensity=ne.intensity,z.shadowBias=ne.bias,z.shadowNormalBias=ne.normalBias,z.shadowRadius=ne.radius,z.shadowMapSize=ne.mapSize,z.shadowCameraNear=ne.camera.near,z.shadowCameraFar=ne.camera.far,n.pointShadow[b]=z,n.pointShadowMap[b]=Q,n.pointShadowMatrix[b]=F.shadow.matrix,E++}n.point[b]=ee,b++}else if(F.isHemisphereLight){const ee=e.get(F);ee.skyColor.copy(F.color).multiplyScalar(X),ee.groundColor.copy(F.groundColor).multiplyScalar(X),n.hemi[_]=ee,_++}}x>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=m,n.ambient[2]=v;const U=n.hash;(U.directionalLength!==g||U.pointLength!==b||U.spotLength!==y||U.rectAreaLength!==x||U.hemiLength!==_||U.numDirectionalShadows!==w||U.numPointShadows!==E||U.numSpotShadows!==S||U.numSpotMaps!==P||U.numLightProbes!==O)&&(n.directional.length=g,n.spot.length=y,n.rectArea.length=x,n.point.length=b,n.hemi.length=_,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=S+P-D,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=O,U.directionalLength=g,U.pointLength=b,U.spotLength=y,U.rectAreaLength=x,U.hemiLength=_,U.numDirectionalShadows=w,U.numPointShadows=E,U.numSpotShadows=S,U.numSpotMaps=P,U.numLightProbes=O,n.version=Iy++)}function u(d,f){let m=0,v=0,g=0,b=0,y=0;const x=f.matrixWorldInverse;for(let _=0,w=d.length;_<w;_++){const E=d[_];if(E.isDirectionalLight){const S=n.directional[m];S.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(x),m++}else if(E.isSpotLight){const S=n.spot[g];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(x),S.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(x),g++}else if(E.isRectAreaLight){const S=n.rectArea[b];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(x),a.identity(),r.copy(E.matrixWorld),r.premultiply(x),a.extractRotation(r),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),b++}else if(E.isPointLight){const S=n.point[v];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(x),v++}else if(E.isHemisphereLight){const S=n.hemi[y];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(x),y++}}}return{setup:c,setupView:u,state:n}}function Ed(s){const e=new Dy(s),t=[],n=[];function i(f){d.camera=f,t.length=0,n.length=0}function r(f){t.push(f)}function a(f){n.push(f)}function c(){e.setup(t)}function u(f){e.setupView(t,f)}const d={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:d,setupLights:c,setupLightsView:u,pushLight:r,pushShadow:a}}function Uy(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let c;return a===void 0?(c=new Ed(s),e.set(i,[c])):r>=a.length?(c=new Ed(s),a.push(c)):c=a[r],c}function n(){e=new WeakMap}return{get:t,dispose:n}}const Ny=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Oy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Fy(s,e,t){let n=new Jc;const i=new Ie,r=new Ie,a=new Ct,c=new Q0({depthPacking:Qv}),u=new e_,d={},f=t.maxTextureSize,m={[Oi]:gn,[gn]:Oi,[Bn]:Bn},v=new nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:Ny,fragmentShader:Oy}),g=v.clone();g.defines.HORIZONTAL_PASS=1;const b=new An;b.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new It(b,v),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_p;let _=this.type;this.render=function(D,O,U){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||D.length===0)return;const I=s.getRenderTarget(),C=s.getActiveCubeFace(),F=s.getActiveMipmapLevel(),Y=s.state;Y.setBlending(Ui),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const X=_!==oi&&this.type===oi,J=_===oi&&this.type!==oi;for(let Q=0,ee=D.length;Q<ee;Q++){const ne=D[Q],z=ne.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const ce=z.getFrameExtents();if(i.multiply(ce),r.copy(z.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(r.x=Math.floor(f/ce.x),i.x=r.x*ce.x,z.mapSize.x=r.x),i.y>f&&(r.y=Math.floor(f/ce.y),i.y=r.y*ce.y,z.mapSize.y=r.y)),z.map===null||X===!0||J===!0){const me=this.type!==oi?{minFilter:At,magFilter:At}:{};z.map!==null&&z.map.dispose(),z.map=new Ln(i.x,i.y,me),z.map.texture.name=ne.name+".shadowMap",z.camera.updateProjectionMatrix()}s.setRenderTarget(z.map),s.clear();const fe=z.getViewportCount();for(let me=0;me<fe;me++){const le=z.getViewport(me);a.set(r.x*le.x,r.y*le.y,r.x*le.z,r.y*le.w),Y.viewport(a),z.updateMatrices(ne,me),n=z.getFrustum(),S(O,U,z.camera,ne,this.type)}z.isPointLightShadow!==!0&&this.type===oi&&w(z,U),z.needsUpdate=!1}_=this.type,x.needsUpdate=!1,s.setRenderTarget(I,C,F)};function w(D,O){const U=e.update(y);v.defines.VSM_SAMPLES!==D.blurSamples&&(v.defines.VSM_SAMPLES=D.blurSamples,g.defines.VSM_SAMPLES=D.blurSamples,v.needsUpdate=!0,g.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Ln(i.x,i.y)),v.uniforms.shadow_pass.value=D.map.texture,v.uniforms.resolution.value=D.mapSize,v.uniforms.radius.value=D.radius,s.setRenderTarget(D.mapPass),s.clear(),s.renderBufferDirect(O,null,U,v,y,null),g.uniforms.shadow_pass.value=D.mapPass.texture,g.uniforms.resolution.value=D.mapSize,g.uniforms.radius.value=D.radius,s.setRenderTarget(D.map),s.clear(),s.renderBufferDirect(O,null,U,g,y,null)}function E(D,O,U,I){let C=null;const F=U.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(F!==void 0)C=F;else if(C=U.isPointLight===!0?u:c,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const Y=C.uuid,X=O.uuid;let J=d[Y];J===void 0&&(J={},d[Y]=J);let Q=J[X];Q===void 0&&(Q=C.clone(),J[X]=Q,O.addEventListener("dispose",P)),C=Q}if(C.visible=O.visible,C.wireframe=O.wireframe,I===oi?C.side=O.shadowSide!==null?O.shadowSide:O.side:C.side=O.shadowSide!==null?O.shadowSide:m[O.side],C.alphaMap=O.alphaMap,C.alphaTest=O.alphaTest,C.map=O.map,C.clipShadows=O.clipShadows,C.clippingPlanes=O.clippingPlanes,C.clipIntersection=O.clipIntersection,C.displacementMap=O.displacementMap,C.displacementScale=O.displacementScale,C.displacementBias=O.displacementBias,C.wireframeLinewidth=O.wireframeLinewidth,C.linewidth=O.linewidth,U.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const Y=s.properties.get(C);Y.light=U}return C}function S(D,O,U,I,C){if(D.visible===!1)return;if(D.layers.test(O.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&C===oi)&&(!D.frustumCulled||n.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,D.matrixWorld);const X=e.update(D),J=D.material;if(Array.isArray(J)){const Q=X.groups;for(let ee=0,ne=Q.length;ee<ne;ee++){const z=Q[ee],ce=J[z.materialIndex];if(ce&&ce.visible){const fe=E(D,ce,I,C);D.onBeforeShadow(s,D,O,U,X,fe,z),s.renderBufferDirect(U,null,X,fe,D,z),D.onAfterShadow(s,D,O,U,X,fe,z)}}}else if(J.visible){const Q=E(D,J,I,C);D.onBeforeShadow(s,D,O,U,X,Q,null),s.renderBufferDirect(U,null,X,Q,D,null),D.onAfterShadow(s,D,O,U,X,Q,null)}}const Y=D.children;for(let X=0,J=Y.length;X<J;X++)S(Y[X],O,U,I,C)}function P(D){D.target.removeEventListener("dispose",P);for(const U in d){const I=d[U],C=D.target.uuid;C in I&&(I[C].dispose(),delete I[C])}}}const By={[Kl]:Zl,[Jl]:tc,[Ql]:nc,[js]:ec,[Zl]:Kl,[tc]:Jl,[nc]:Ql,[ec]:js};function ky(s,e){function t(){let V=!1;const xe=new Ct;let te=null;const oe=new Ct(0,0,0,0);return{setMask:function(Ee){te!==Ee&&!V&&(s.colorMask(Ee,Ee,Ee,Ee),te=Ee)},setLocked:function(Ee){V=Ee},setClear:function(Ee,Me,Qe,St,Ft){Ft===!0&&(Ee*=St,Me*=St,Qe*=St),xe.set(Ee,Me,Qe,St),oe.equals(xe)===!1&&(s.clearColor(Ee,Me,Qe,St),oe.copy(xe))},reset:function(){V=!1,te=null,oe.set(-1,0,0,0)}}}function n(){let V=!1,xe=!1,te=null,oe=null,Ee=null;return{setReversed:function(Me){if(xe!==Me){const Qe=e.get("EXT_clip_control");xe?Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.ZERO_TO_ONE_EXT):Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.NEGATIVE_ONE_TO_ONE_EXT);const St=Ee;Ee=null,this.setClear(St)}xe=Me},getReversed:function(){return xe},setTest:function(Me){Me?ve(s.DEPTH_TEST):Le(s.DEPTH_TEST)},setMask:function(Me){te!==Me&&!V&&(s.depthMask(Me),te=Me)},setFunc:function(Me){if(xe&&(Me=By[Me]),oe!==Me){switch(Me){case Kl:s.depthFunc(s.NEVER);break;case Zl:s.depthFunc(s.ALWAYS);break;case Jl:s.depthFunc(s.LESS);break;case js:s.depthFunc(s.LEQUAL);break;case Ql:s.depthFunc(s.EQUAL);break;case ec:s.depthFunc(s.GEQUAL);break;case tc:s.depthFunc(s.GREATER);break;case nc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}oe=Me}},setLocked:function(Me){V=Me},setClear:function(Me){Ee!==Me&&(xe&&(Me=1-Me),s.clearDepth(Me),Ee=Me)},reset:function(){V=!1,te=null,oe=null,Ee=null,xe=!1}}}function i(){let V=!1,xe=null,te=null,oe=null,Ee=null,Me=null,Qe=null,St=null,Ft=null;return{setTest:function(it){V||(it?ve(s.STENCIL_TEST):Le(s.STENCIL_TEST))},setMask:function(it){xe!==it&&!V&&(s.stencilMask(it),xe=it)},setFunc:function(it,sn,Wt){(te!==it||oe!==sn||Ee!==Wt)&&(s.stencilFunc(it,sn,Wt),te=it,oe=sn,Ee=Wt)},setOp:function(it,sn,Wt){(Me!==it||Qe!==sn||St!==Wt)&&(s.stencilOp(it,sn,Wt),Me=it,Qe=sn,St=Wt)},setLocked:function(it){V=it},setClear:function(it){Ft!==it&&(s.clearStencil(it),Ft=it)},reset:function(){V=!1,xe=null,te=null,oe=null,Ee=null,Me=null,Qe=null,St=null,Ft=null}}}const r=new t,a=new n,c=new i,u=new WeakMap,d=new WeakMap;let f={},m={},v=new WeakMap,g=[],b=null,y=!1,x=null,_=null,w=null,E=null,S=null,P=null,D=null,O=new ke(0,0,0),U=0,I=!1,C=null,F=null,Y=null,X=null,J=null;const Q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,ne=0;const z=s.getParameter(s.VERSION);z.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(z)[1]),ee=ne>=1):z.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),ee=ne>=2);let ce=null,fe={};const me=s.getParameter(s.SCISSOR_BOX),le=s.getParameter(s.VIEWPORT),He=new Ct().fromArray(me),j=new Ct().fromArray(le);function ae(V,xe,te,oe){const Ee=new Uint8Array(4),Me=s.createTexture();s.bindTexture(V,Me),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Qe=0;Qe<te;Qe++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(xe,0,s.RGBA,1,1,oe,0,s.RGBA,s.UNSIGNED_BYTE,Ee):s.texImage2D(xe+Qe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ee);return Me}const Se={};Se[s.TEXTURE_2D]=ae(s.TEXTURE_2D,s.TEXTURE_2D,1),Se[s.TEXTURE_CUBE_MAP]=ae(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[s.TEXTURE_2D_ARRAY]=ae(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Se[s.TEXTURE_3D]=ae(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),c.setClear(0),ve(s.DEPTH_TEST),a.setFunc(js),Ne(!1),Xe(wu),ve(s.CULL_FACE),k(Ui);function ve(V){f[V]!==!0&&(s.enable(V),f[V]=!0)}function Le(V){f[V]!==!1&&(s.disable(V),f[V]=!1)}function Fe(V,xe){return m[V]!==xe?(s.bindFramebuffer(V,xe),m[V]=xe,V===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=xe),V===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=xe),!0):!1}function Ge(V,xe){let te=g,oe=!1;if(V){te=v.get(xe),te===void 0&&(te=[],v.set(xe,te));const Ee=V.textures;if(te.length!==Ee.length||te[0]!==s.COLOR_ATTACHMENT0){for(let Me=0,Qe=Ee.length;Me<Qe;Me++)te[Me]=s.COLOR_ATTACHMENT0+Me;te.length=Ee.length,oe=!0}}else te[0]!==s.BACK&&(te[0]=s.BACK,oe=!0);oe&&s.drawBuffers(te)}function q(V){return b!==V?(s.useProgram(V),b=V,!0):!1}const _e={[is]:s.FUNC_ADD,[Av]:s.FUNC_SUBTRACT,[Cv]:s.FUNC_REVERSE_SUBTRACT};_e[Tv]=s.MIN,_e[bp]=s.MAX;const je={[Rv]:s.ZERO,[jl]:s.ONE,[Pv]:s.SRC_COLOR,[ql]:s.SRC_ALPHA,[Ov]:s.SRC_ALPHA_SATURATE,[Uv]:s.DST_COLOR,[Lv]:s.DST_ALPHA,[Iv]:s.ONE_MINUS_SRC_COLOR,[$l]:s.ONE_MINUS_SRC_ALPHA,[Nv]:s.ONE_MINUS_DST_COLOR,[Dv]:s.ONE_MINUS_DST_ALPHA,[Fv]:s.CONSTANT_COLOR,[Bv]:s.ONE_MINUS_CONSTANT_COLOR,[kv]:s.CONSTANT_ALPHA,[zv]:s.ONE_MINUS_CONSTANT_ALPHA};function k(V,xe,te,oe,Ee,Me,Qe,St,Ft,it){if(V===Ui){y===!0&&(Le(s.BLEND),y=!1);return}if(y===!1&&(ve(s.BLEND),y=!0),V!==xp){if(V!==x||it!==I){if((_!==is||S!==is)&&(s.blendEquation(s.FUNC_ADD),_=is,S=is),it)switch(V){case $n:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Su:s.blendFunc(s.ONE,s.ONE);break;case Mu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Eu:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case $n:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Su:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Mu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Eu:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}w=null,E=null,P=null,D=null,O.set(0,0,0),U=0,x=V,I=it}return}Ee=Ee||xe,Me=Me||te,Qe=Qe||oe,(xe!==_||Ee!==S)&&(s.blendEquationSeparate(_e[xe],_e[Ee]),_=xe,S=Ee),(te!==w||oe!==E||Me!==P||Qe!==D)&&(s.blendFuncSeparate(je[te],je[oe],je[Me],je[Qe]),w=te,E=oe,P=Me,D=Qe),(St.equals(O)===!1||Ft!==U)&&(s.blendColor(St.r,St.g,St.b,Ft),O.copy(St),U=Ft),x=V,I=!1}function dt(V,xe){V.side===Bn?Le(s.CULL_FACE):ve(s.CULL_FACE);let te=V.side===gn;xe&&(te=!te),Ne(te),V.blending===$n&&V.transparent===!1?k(Ui):k(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),a.setFunc(V.depthFunc),a.setTest(V.depthTest),a.setMask(V.depthWrite),r.setMask(V.colorWrite);const oe=V.stencilWrite;c.setTest(oe),oe&&(c.setMask(V.stencilWriteMask),c.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),c.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),pt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ve(s.SAMPLE_ALPHA_TO_COVERAGE):Le(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(V){C!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),C=V)}function Xe(V){V!==Sv?(ve(s.CULL_FACE),V!==F&&(V===wu?s.cullFace(s.BACK):V===Mv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Le(s.CULL_FACE),F=V}function De(V){V!==Y&&(ee&&s.lineWidth(V),Y=V)}function pt(V,xe,te){V?(ve(s.POLYGON_OFFSET_FILL),(X!==xe||J!==te)&&(s.polygonOffset(xe,te),X=xe,J=te)):Le(s.POLYGON_OFFSET_FILL)}function Oe(V){V?ve(s.SCISSOR_TEST):Le(s.SCISSOR_TEST)}function N(V){V===void 0&&(V=s.TEXTURE0+Q-1),ce!==V&&(s.activeTexture(V),ce=V)}function T(V,xe,te){te===void 0&&(ce===null?te=s.TEXTURE0+Q-1:te=ce);let oe=fe[te];oe===void 0&&(oe={type:void 0,texture:void 0},fe[te]=oe),(oe.type!==V||oe.texture!==xe)&&(ce!==te&&(s.activeTexture(te),ce=te),s.bindTexture(V,xe||Se[V]),oe.type=V,oe.texture=xe)}function $(){const V=fe[ce];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function se(){try{s.compressedTexImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ue(){try{s.compressedTexImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ie(){try{s.texSubImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ue(){try{s.texSubImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function we(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ce(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function rt(){try{s.texStorage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ge(){try{s.texStorage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Pe(){try{s.texImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ze(){try{s.texImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function qe(V){He.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),He.copy(V))}function Ae(V){j.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),j.copy(V))}function nt(V,xe){let te=d.get(xe);te===void 0&&(te=new WeakMap,d.set(xe,te));let oe=te.get(V);oe===void 0&&(oe=s.getUniformBlockIndex(xe,V.name),te.set(V,oe))}function Ke(V,xe){const oe=d.get(xe).get(V);u.get(xe)!==oe&&(s.uniformBlockBinding(xe,oe,V.__bindingPointIndex),u.set(xe,oe))}function bt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},ce=null,fe={},m={},v=new WeakMap,g=[],b=null,y=!1,x=null,_=null,w=null,E=null,S=null,P=null,D=null,O=new ke(0,0,0),U=0,I=!1,C=null,F=null,Y=null,X=null,J=null,He.set(0,0,s.canvas.width,s.canvas.height),j.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),c.reset()}return{buffers:{color:r,depth:a,stencil:c},enable:ve,disable:Le,bindFramebuffer:Fe,drawBuffers:Ge,useProgram:q,setBlending:k,setMaterial:dt,setFlipSided:Ne,setCullFace:Xe,setLineWidth:De,setPolygonOffset:pt,setScissorTest:Oe,activeTexture:N,bindTexture:T,unbindTexture:$,compressedTexImage2D:se,compressedTexImage3D:ue,texImage2D:Pe,texImage3D:ze,updateUBOMapping:nt,uniformBlockBinding:Ke,texStorage2D:rt,texStorage3D:ge,texSubImage2D:ie,texSubImage3D:Ue,compressedTexSubImage2D:we,compressedTexSubImage3D:Ce,scissor:qe,viewport:Ae,reset:bt}}function zy(s,e,t,n,i,r,a){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Ie,f=new WeakMap;let m;const v=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(N,T){return g?new OffscreenCanvas(N,T):na("canvas")}function y(N,T,$){let se=1;const ue=Oe(N);if((ue.width>$||ue.height>$)&&(se=$/Math.max(ue.width,ue.height)),se<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ie=Math.floor(se*ue.width),Ue=Math.floor(se*ue.height);m===void 0&&(m=b(ie,Ue));const we=T?b(ie,Ue):m;return we.width=ie,we.height=Ue,we.getContext("2d").drawImage(N,0,0,ie,Ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ue.width+"x"+ue.height+") to ("+ie+"x"+Ue+")."),we}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ue.width+"x"+ue.height+")."),N;return N}function x(N){return N.generateMipmaps}function _(N){s.generateMipmap(N)}function w(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function E(N,T,$,se,ue=!1){if(N!==null){if(s[N]!==void 0)return s[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ie=T;if(T===s.RED&&($===s.FLOAT&&(ie=s.R32F),$===s.HALF_FLOAT&&(ie=s.R16F),$===s.UNSIGNED_BYTE&&(ie=s.R8)),T===s.RED_INTEGER&&($===s.UNSIGNED_BYTE&&(ie=s.R8UI),$===s.UNSIGNED_SHORT&&(ie=s.R16UI),$===s.UNSIGNED_INT&&(ie=s.R32UI),$===s.BYTE&&(ie=s.R8I),$===s.SHORT&&(ie=s.R16I),$===s.INT&&(ie=s.R32I)),T===s.RG&&($===s.FLOAT&&(ie=s.RG32F),$===s.HALF_FLOAT&&(ie=s.RG16F),$===s.UNSIGNED_BYTE&&(ie=s.RG8)),T===s.RG_INTEGER&&($===s.UNSIGNED_BYTE&&(ie=s.RG8UI),$===s.UNSIGNED_SHORT&&(ie=s.RG16UI),$===s.UNSIGNED_INT&&(ie=s.RG32UI),$===s.BYTE&&(ie=s.RG8I),$===s.SHORT&&(ie=s.RG16I),$===s.INT&&(ie=s.RG32I)),T===s.RGB_INTEGER&&($===s.UNSIGNED_BYTE&&(ie=s.RGB8UI),$===s.UNSIGNED_SHORT&&(ie=s.RGB16UI),$===s.UNSIGNED_INT&&(ie=s.RGB32UI),$===s.BYTE&&(ie=s.RGB8I),$===s.SHORT&&(ie=s.RGB16I),$===s.INT&&(ie=s.RGB32I)),T===s.RGBA_INTEGER&&($===s.UNSIGNED_BYTE&&(ie=s.RGBA8UI),$===s.UNSIGNED_SHORT&&(ie=s.RGBA16UI),$===s.UNSIGNED_INT&&(ie=s.RGBA32UI),$===s.BYTE&&(ie=s.RGBA8I),$===s.SHORT&&(ie=s.RGBA16I),$===s.INT&&(ie=s.RGBA32I)),T===s.RGB&&$===s.UNSIGNED_INT_5_9_9_9_REV&&(ie=s.RGB9_E5),T===s.RGBA){const Ue=ue?Qo:_t.getTransfer(se);$===s.FLOAT&&(ie=s.RGBA32F),$===s.HALF_FLOAT&&(ie=s.RGBA16F),$===s.UNSIGNED_BYTE&&(ie=Ue===yt?s.SRGB8_ALPHA8:s.RGBA8),$===s.UNSIGNED_SHORT_4_4_4_4&&(ie=s.RGBA4),$===s.UNSIGNED_SHORT_5_5_5_1&&(ie=s.RGB5_A1)}return(ie===s.R16F||ie===s.R32F||ie===s.RG16F||ie===s.RG32F||ie===s.RGBA16F||ie===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function S(N,T){let $;return N?T===null||T===fi||T===Zs?$=s.DEPTH24_STENCIL8:T===en?$=s.DEPTH32F_STENCIL8:T===Ks&&($=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===fi||T===Zs?$=s.DEPTH_COMPONENT24:T===en?$=s.DEPTH_COMPONENT32F:T===Ks&&($=s.DEPTH_COMPONENT16),$}function P(N,T){return x(N)===!0||N.isFramebufferTexture&&N.minFilter!==At&&N.minFilter!==Nt?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}function D(N){const T=N.target;T.removeEventListener("dispose",D),U(T),T.isVideoTexture&&f.delete(T)}function O(N){const T=N.target;T.removeEventListener("dispose",O),C(T)}function U(N){const T=n.get(N);if(T.__webglInit===void 0)return;const $=N.source,se=v.get($);if(se){const ue=se[T.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&I(N),Object.keys(se).length===0&&v.delete($)}n.remove(N)}function I(N){const T=n.get(N);s.deleteTexture(T.__webglTexture);const $=N.source,se=v.get($);delete se[T.__cacheKey],a.memory.textures--}function C(N){const T=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(T.__webglFramebuffer[se]))for(let ue=0;ue<T.__webglFramebuffer[se].length;ue++)s.deleteFramebuffer(T.__webglFramebuffer[se][ue]);else s.deleteFramebuffer(T.__webglFramebuffer[se]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[se])}else{if(Array.isArray(T.__webglFramebuffer))for(let se=0;se<T.__webglFramebuffer.length;se++)s.deleteFramebuffer(T.__webglFramebuffer[se]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let se=0;se<T.__webglColorRenderbuffer.length;se++)T.__webglColorRenderbuffer[se]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[se]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const $=N.textures;for(let se=0,ue=$.length;se<ue;se++){const ie=n.get($[se]);ie.__webglTexture&&(s.deleteTexture(ie.__webglTexture),a.memory.textures--),n.remove($[se])}n.remove(N)}let F=0;function Y(){F=0}function X(){const N=F;return N>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+i.maxTextures),F+=1,N}function J(N){const T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}function Q(N,T){const $=n.get(N);if(N.isVideoTexture&&De(N),N.isRenderTargetTexture===!1&&N.version>0&&$.__version!==N.version){const se=N.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j($,N,T);return}}t.bindTexture(s.TEXTURE_2D,$.__webglTexture,s.TEXTURE0+T)}function ee(N,T){const $=n.get(N);if(N.version>0&&$.__version!==N.version){j($,N,T);return}t.bindTexture(s.TEXTURE_2D_ARRAY,$.__webglTexture,s.TEXTURE0+T)}function ne(N,T){const $=n.get(N);if(N.version>0&&$.__version!==N.version){j($,N,T);return}t.bindTexture(s.TEXTURE_3D,$.__webglTexture,s.TEXTURE0+T)}function z(N,T){const $=n.get(N);if(N.version>0&&$.__version!==N.version){ae($,N,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture,s.TEXTURE0+T)}const ce={[Zo]:s.REPEAT,[mn]:s.CLAMP_TO_EDGE,[Jo]:s.MIRRORED_REPEAT},fe={[At]:s.NEAREST,[yp]:s.NEAREST_MIPMAP_NEAREST,[Er]:s.NEAREST_MIPMAP_LINEAR,[Nt]:s.LINEAR,[Ho]:s.LINEAR_MIPMAP_NEAREST,[Ii]:s.LINEAR_MIPMAP_LINEAR},me={[t0]:s.NEVER,[a0]:s.ALWAYS,[n0]:s.LESS,[Rp]:s.LEQUAL,[i0]:s.EQUAL,[o0]:s.GEQUAL,[s0]:s.GREATER,[r0]:s.NOTEQUAL};function le(N,T){if(T.type===en&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Nt||T.magFilter===Ho||T.magFilter===Er||T.magFilter===Ii||T.minFilter===Nt||T.minFilter===Ho||T.minFilter===Er||T.minFilter===Ii)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,ce[T.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,ce[T.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,ce[T.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,fe[T.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,fe[T.minFilter]),T.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,me[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===At||T.minFilter!==Er&&T.minFilter!==Ii||T.type===en&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");s.texParameterf(N,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function He(N,T){let $=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",D));const se=T.source;let ue=v.get(se);ue===void 0&&(ue={},v.set(se,ue));const ie=J(T);if(ie!==N.__cacheKey){ue[ie]===void 0&&(ue[ie]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,$=!0),ue[ie].usedTimes++;const Ue=ue[N.__cacheKey];Ue!==void 0&&(ue[N.__cacheKey].usedTimes--,Ue.usedTimes===0&&I(T)),N.__cacheKey=ie,N.__webglTexture=ue[ie].texture}return $}function j(N,T,$){let se=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(se=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(se=s.TEXTURE_3D);const ue=He(N,T),ie=T.source;t.bindTexture(se,N.__webglTexture,s.TEXTURE0+$);const Ue=n.get(ie);if(ie.version!==Ue.__version||ue===!0){t.activeTexture(s.TEXTURE0+$);const we=_t.getPrimaries(_t.workingColorSpace),Ce=T.colorSpace===li?null:_t.getPrimaries(T.colorSpace),rt=T.colorSpace===li||we===Ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let ge=y(T.image,!1,i.maxTextureSize);ge=pt(T,ge);const Pe=r.convert(T.format,T.colorSpace),ze=r.convert(T.type);let qe=E(T.internalFormat,Pe,ze,T.colorSpace,T.isVideoTexture);le(se,T);let Ae;const nt=T.mipmaps,Ke=T.isVideoTexture!==!0,bt=Ue.__version===void 0||ue===!0,V=ie.dataReady,xe=P(T,ge);if(T.isDepthTexture)qe=S(T.format===Js,T.type),bt&&(Ke?t.texStorage2D(s.TEXTURE_2D,1,qe,ge.width,ge.height):t.texImage2D(s.TEXTURE_2D,0,qe,ge.width,ge.height,0,Pe,ze,null));else if(T.isDataTexture)if(nt.length>0){Ke&&bt&&t.texStorage2D(s.TEXTURE_2D,xe,qe,nt[0].width,nt[0].height);for(let te=0,oe=nt.length;te<oe;te++)Ae=nt[te],Ke?V&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,Ae.width,Ae.height,Pe,ze,Ae.data):t.texImage2D(s.TEXTURE_2D,te,qe,Ae.width,Ae.height,0,Pe,ze,Ae.data);T.generateMipmaps=!1}else Ke?(bt&&t.texStorage2D(s.TEXTURE_2D,xe,qe,ge.width,ge.height),V&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ge.width,ge.height,Pe,ze,ge.data)):t.texImage2D(s.TEXTURE_2D,0,qe,ge.width,ge.height,0,Pe,ze,ge.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ke&&bt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,xe,qe,nt[0].width,nt[0].height,ge.depth);for(let te=0,oe=nt.length;te<oe;te++)if(Ae=nt[te],T.format!==Ot)if(Pe!==null)if(Ke){if(V)if(T.layerUpdates.size>0){const Ee=td(Ae.width,Ae.height,T.format,T.type);for(const Me of T.layerUpdates){const Qe=Ae.data.subarray(Me*Ee/Ae.data.BYTES_PER_ELEMENT,(Me+1)*Ee/Ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,Me,Ae.width,Ae.height,1,Pe,Qe)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,0,Ae.width,Ae.height,ge.depth,Pe,Ae.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,te,qe,Ae.width,Ae.height,ge.depth,0,Ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ke?V&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,0,Ae.width,Ae.height,ge.depth,Pe,ze,Ae.data):t.texImage3D(s.TEXTURE_2D_ARRAY,te,qe,Ae.width,Ae.height,ge.depth,0,Pe,ze,Ae.data)}else{Ke&&bt&&t.texStorage2D(s.TEXTURE_2D,xe,qe,nt[0].width,nt[0].height);for(let te=0,oe=nt.length;te<oe;te++)Ae=nt[te],T.format!==Ot?Pe!==null?Ke?V&&t.compressedTexSubImage2D(s.TEXTURE_2D,te,0,0,Ae.width,Ae.height,Pe,Ae.data):t.compressedTexImage2D(s.TEXTURE_2D,te,qe,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?V&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,Ae.width,Ae.height,Pe,ze,Ae.data):t.texImage2D(s.TEXTURE_2D,te,qe,Ae.width,Ae.height,0,Pe,ze,Ae.data)}else if(T.isDataArrayTexture)if(Ke){if(bt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,xe,qe,ge.width,ge.height,ge.depth),V)if(T.layerUpdates.size>0){const te=td(ge.width,ge.height,T.format,T.type);for(const oe of T.layerUpdates){const Ee=ge.data.subarray(oe*te/ge.data.BYTES_PER_ELEMENT,(oe+1)*te/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,oe,ge.width,ge.height,1,Pe,ze,Ee)}T.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Pe,ze,ge.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,qe,ge.width,ge.height,ge.depth,0,Pe,ze,ge.data);else if(T.isData3DTexture)Ke?(bt&&t.texStorage3D(s.TEXTURE_3D,xe,qe,ge.width,ge.height,ge.depth),V&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Pe,ze,ge.data)):t.texImage3D(s.TEXTURE_3D,0,qe,ge.width,ge.height,ge.depth,0,Pe,ze,ge.data);else if(T.isFramebufferTexture){if(bt)if(Ke)t.texStorage2D(s.TEXTURE_2D,xe,qe,ge.width,ge.height);else{let te=ge.width,oe=ge.height;for(let Ee=0;Ee<xe;Ee++)t.texImage2D(s.TEXTURE_2D,Ee,qe,te,oe,0,Pe,ze,null),te>>=1,oe>>=1}}else if(nt.length>0){if(Ke&&bt){const te=Oe(nt[0]);t.texStorage2D(s.TEXTURE_2D,xe,qe,te.width,te.height)}for(let te=0,oe=nt.length;te<oe;te++)Ae=nt[te],Ke?V&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,Pe,ze,Ae):t.texImage2D(s.TEXTURE_2D,te,qe,Pe,ze,Ae);T.generateMipmaps=!1}else if(Ke){if(bt){const te=Oe(ge);t.texStorage2D(s.TEXTURE_2D,xe,qe,te.width,te.height)}V&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Pe,ze,ge)}else t.texImage2D(s.TEXTURE_2D,0,qe,Pe,ze,ge);x(T)&&_(se),Ue.__version=ie.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function ae(N,T,$){if(T.image.length!==6)return;const se=He(N,T),ue=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+$);const ie=n.get(ue);if(ue.version!==ie.__version||se===!0){t.activeTexture(s.TEXTURE0+$);const Ue=_t.getPrimaries(_t.workingColorSpace),we=T.colorSpace===li?null:_t.getPrimaries(T.colorSpace),Ce=T.colorSpace===li||Ue===we?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const rt=T.isCompressedTexture||T.image[0].isCompressedTexture,ge=T.image[0]&&T.image[0].isDataTexture,Pe=[];for(let oe=0;oe<6;oe++)!rt&&!ge?Pe[oe]=y(T.image[oe],!0,i.maxCubemapSize):Pe[oe]=ge?T.image[oe].image:T.image[oe],Pe[oe]=pt(T,Pe[oe]);const ze=Pe[0],qe=r.convert(T.format,T.colorSpace),Ae=r.convert(T.type),nt=E(T.internalFormat,qe,Ae,T.colorSpace),Ke=T.isVideoTexture!==!0,bt=ie.__version===void 0||se===!0,V=ue.dataReady;let xe=P(T,ze);le(s.TEXTURE_CUBE_MAP,T);let te;if(rt){Ke&&bt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,xe,nt,ze.width,ze.height);for(let oe=0;oe<6;oe++){te=Pe[oe].mipmaps;for(let Ee=0;Ee<te.length;Ee++){const Me=te[Ee];T.format!==Ot?qe!==null?Ke?V&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ee,0,0,Me.width,Me.height,qe,Me.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ee,nt,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ke?V&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ee,0,0,Me.width,Me.height,qe,Ae,Me.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ee,nt,Me.width,Me.height,0,qe,Ae,Me.data)}}}else{if(te=T.mipmaps,Ke&&bt){te.length>0&&xe++;const oe=Oe(Pe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,xe,nt,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(ge){Ke?V&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Pe[oe].width,Pe[oe].height,qe,Ae,Pe[oe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,nt,Pe[oe].width,Pe[oe].height,0,qe,Ae,Pe[oe].data);for(let Ee=0;Ee<te.length;Ee++){const Qe=te[Ee].image[oe].image;Ke?V&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ee+1,0,0,Qe.width,Qe.height,qe,Ae,Qe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ee+1,nt,Qe.width,Qe.height,0,qe,Ae,Qe.data)}}else{Ke?V&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,qe,Ae,Pe[oe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,nt,qe,Ae,Pe[oe]);for(let Ee=0;Ee<te.length;Ee++){const Me=te[Ee];Ke?V&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ee+1,0,0,qe,Ae,Me.image[oe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ee+1,nt,qe,Ae,Me.image[oe])}}}x(T)&&_(s.TEXTURE_CUBE_MAP),ie.__version=ue.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function Se(N,T,$,se,ue,ie){const Ue=r.convert($.format,$.colorSpace),we=r.convert($.type),Ce=E($.internalFormat,Ue,we,$.colorSpace),rt=n.get(T),ge=n.get($);if(ge.__renderTarget=T,!rt.__hasExternalTextures){const Pe=Math.max(1,T.width>>ie),ze=Math.max(1,T.height>>ie);ue===s.TEXTURE_3D||ue===s.TEXTURE_2D_ARRAY?t.texImage3D(ue,ie,Ce,Pe,ze,T.depth,0,Ue,we,null):t.texImage2D(ue,ie,Ce,Pe,ze,0,Ue,we,null)}t.bindFramebuffer(s.FRAMEBUFFER,N),Xe(T)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,se,ue,ge.__webglTexture,0,Ne(T)):(ue===s.TEXTURE_2D||ue>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,se,ue,ge.__webglTexture,ie),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ve(N,T,$){if(s.bindRenderbuffer(s.RENDERBUFFER,N),T.depthBuffer){const se=T.depthTexture,ue=se&&se.isDepthTexture?se.type:null,ie=S(T.stencilBuffer,ue),Ue=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,we=Ne(T);Xe(T)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,we,ie,T.width,T.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,we,ie,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,ie,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ue,s.RENDERBUFFER,N)}else{const se=T.textures;for(let ue=0;ue<se.length;ue++){const ie=se[ue],Ue=r.convert(ie.format,ie.colorSpace),we=r.convert(ie.type),Ce=E(ie.internalFormat,Ue,we,ie.colorSpace),rt=Ne(T);$&&Xe(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,rt,Ce,T.width,T.height):Xe(T)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,rt,Ce,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Ce,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Le(N,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const se=n.get(T.depthTexture);se.__renderTarget=T,(!se.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),Q(T.depthTexture,0);const ue=se.__webglTexture,ie=Ne(T);if(T.depthTexture.format===Hs)Xe(T)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ue,0,ie):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ue,0);else if(T.depthTexture.format===Js)Xe(T)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ue,0,ie):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ue,0);else throw new Error("Unknown depthTexture format")}function Fe(N){const T=n.get(N),$=N.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==N.depthTexture){const se=N.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),se){const ue=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,se.removeEventListener("dispose",ue)};se.addEventListener("dispose",ue),T.__depthDisposeCallback=ue}T.__boundDepthTexture=se}if(N.depthTexture&&!T.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");Le(T.__webglFramebuffer,N)}else if($){T.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[se]),T.__webglDepthbuffer[se]===void 0)T.__webglDepthbuffer[se]=s.createRenderbuffer(),ve(T.__webglDepthbuffer[se],N,!1);else{const ue=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ie=T.__webglDepthbuffer[se];s.bindRenderbuffer(s.RENDERBUFFER,ie),s.framebufferRenderbuffer(s.FRAMEBUFFER,ue,s.RENDERBUFFER,ie)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),ve(T.__webglDepthbuffer,N,!1);else{const se=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,se,s.RENDERBUFFER,ue)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ge(N,T,$){const se=n.get(N);T!==void 0&&Se(se.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),$!==void 0&&Fe(N)}function q(N){const T=N.texture,$=n.get(N),se=n.get(T);N.addEventListener("dispose",O);const ue=N.textures,ie=N.isWebGLCubeRenderTarget===!0,Ue=ue.length>1;if(Ue||(se.__webglTexture===void 0&&(se.__webglTexture=s.createTexture()),se.__version=T.version,a.memory.textures++),ie){$.__webglFramebuffer=[];for(let we=0;we<6;we++)if(T.mipmaps&&T.mipmaps.length>0){$.__webglFramebuffer[we]=[];for(let Ce=0;Ce<T.mipmaps.length;Ce++)$.__webglFramebuffer[we][Ce]=s.createFramebuffer()}else $.__webglFramebuffer[we]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){$.__webglFramebuffer=[];for(let we=0;we<T.mipmaps.length;we++)$.__webglFramebuffer[we]=s.createFramebuffer()}else $.__webglFramebuffer=s.createFramebuffer();if(Ue)for(let we=0,Ce=ue.length;we<Ce;we++){const rt=n.get(ue[we]);rt.__webglTexture===void 0&&(rt.__webglTexture=s.createTexture(),a.memory.textures++)}if(N.samples>0&&Xe(N)===!1){$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let we=0;we<ue.length;we++){const Ce=ue[we];$.__webglColorRenderbuffer[we]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,$.__webglColorRenderbuffer[we]);const rt=r.convert(Ce.format,Ce.colorSpace),ge=r.convert(Ce.type),Pe=E(Ce.internalFormat,rt,ge,Ce.colorSpace,N.isXRRenderTarget===!0),ze=Ne(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,ze,Pe,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,$.__webglColorRenderbuffer[we])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),ve($.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ie){t.bindTexture(s.TEXTURE_CUBE_MAP,se.__webglTexture),le(s.TEXTURE_CUBE_MAP,T);for(let we=0;we<6;we++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ce=0;Ce<T.mipmaps.length;Ce++)Se($.__webglFramebuffer[we][Ce],N,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ce);else Se($.__webglFramebuffer[we],N,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);x(T)&&_(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ue){for(let we=0,Ce=ue.length;we<Ce;we++){const rt=ue[we],ge=n.get(rt);t.bindTexture(s.TEXTURE_2D,ge.__webglTexture),le(s.TEXTURE_2D,rt),Se($.__webglFramebuffer,N,rt,s.COLOR_ATTACHMENT0+we,s.TEXTURE_2D,0),x(rt)&&_(s.TEXTURE_2D)}t.unbindTexture()}else{let we=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(we=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(we,se.__webglTexture),le(we,T),T.mipmaps&&T.mipmaps.length>0)for(let Ce=0;Ce<T.mipmaps.length;Ce++)Se($.__webglFramebuffer[Ce],N,T,s.COLOR_ATTACHMENT0,we,Ce);else Se($.__webglFramebuffer,N,T,s.COLOR_ATTACHMENT0,we,0);x(T)&&_(we),t.unbindTexture()}N.depthBuffer&&Fe(N)}function _e(N){const T=N.textures;for(let $=0,se=T.length;$<se;$++){const ue=T[$];if(x(ue)){const ie=w(N),Ue=n.get(ue).__webglTexture;t.bindTexture(ie,Ue),_(ie),t.unbindTexture()}}}const je=[],k=[];function dt(N){if(N.samples>0){if(Xe(N)===!1){const T=N.textures,$=N.width,se=N.height;let ue=s.COLOR_BUFFER_BIT;const ie=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ue=n.get(N),we=T.length>1;if(we)for(let Ce=0;Ce<T.length;Ce++)t.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let Ce=0;Ce<T.length;Ce++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(ue|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(ue|=s.STENCIL_BUFFER_BIT)),we){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ue.__webglColorRenderbuffer[Ce]);const rt=n.get(T[Ce]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,rt,0)}s.blitFramebuffer(0,0,$,se,0,0,$,se,ue,s.NEAREST),u===!0&&(je.length=0,k.length=0,je.push(s.COLOR_ATTACHMENT0+Ce),N.depthBuffer&&N.resolveDepthBuffer===!1&&(je.push(ie),k.push(ie),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,k)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,je))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),we)for(let Ce=0;Ce<T.length;Ce++){t.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,Ue.__webglColorRenderbuffer[Ce]);const rt=n.get(T[Ce]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,rt,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&u){const T=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function Ne(N){return Math.min(i.maxSamples,N.samples)}function Xe(N){const T=n.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function De(N){const T=a.render.frame;f.get(N)!==T&&(f.set(N,T),N.update())}function pt(N,T){const $=N.colorSpace,se=N.format,ue=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||$!==Qs&&$!==li&&(_t.getTransfer($)===yt?(se!==Ot||ue!==Yt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),T}function Oe(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(d.width=N.naturalWidth||N.width,d.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(d.width=N.displayWidth,d.height=N.displayHeight):(d.width=N.width,d.height=N.height),d}this.allocateTextureUnit=X,this.resetTextureUnits=Y,this.setTexture2D=Q,this.setTexture2DArray=ee,this.setTexture3D=ne,this.setTextureCube=z,this.rebindTextures=Ge,this.setupRenderTarget=q,this.updateRenderTargetMipmap=_e,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Xe}function Vy(s,e){function t(n,i=li){let r;const a=_t.getTransfer(i);if(n===Yt)return s.UNSIGNED_BYTE;if(n===Wc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Xc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===wp)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Gc)return s.BYTE;if(n===Hc)return s.SHORT;if(n===Ks)return s.UNSIGNED_SHORT;if(n===fa)return s.INT;if(n===fi)return s.UNSIGNED_INT;if(n===en)return s.FLOAT;if(n===Vr)return s.HALF_FLOAT;if(n===Sp)return s.ALPHA;if(n===Mp)return s.RGB;if(n===Ot)return s.RGBA;if(n===Yc)return s.LUMINANCE;if(n===Ep)return s.LUMINANCE_ALPHA;if(n===Hs)return s.DEPTH_COMPONENT;if(n===Js)return s.DEPTH_STENCIL;if(n===Gr)return s.RED;if(n===Pn)return s.RED_INTEGER;if(n===Ap)return s.RG;if(n===jc)return s.RG_INTEGER;if(n===qc)return s.RGBA_INTEGER;if(n===Wo||n===Xo||n===Yo||n===jo)if(a===yt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Wo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Wo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Xo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Yo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===jo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===rc||n===oc||n===ac||n===lc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===rc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===oc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ac)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===lc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===cc||n===hc||n===uc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===cc||n===hc)return a===yt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===uc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===dc||n===pc||n===fc||n===mc||n===gc||n===vc||n===_c||n===xc||n===bc||n===yc||n===wc||n===Sc||n===Mc||n===Ec)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===dc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===pc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===fc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===mc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===gc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===vc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===_c)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===xc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===bc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===yc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===wc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Sc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Mc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ec)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===qo||n===Ac||n===Cc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===qo)return a===yt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ac)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Cc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Cp||n===Tc||n===Rc||n===Pc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===qo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Tc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Rc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Pc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Zs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const Gy={type:"move"};class Rl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const c=this._targetRay,u=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){a=!0;for(const y of e.hand.values()){const x=t.getJointPose(y,n),_=this._getHandJoint(d,y);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}const f=d.joints["index-finger-tip"],m=d.joints["thumb-tip"],v=f.position.distanceTo(m.position),g=.02,b=.005;d.inputState.pinching&&v>g+b?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&v<=g-b&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(u.matrix.fromArray(r.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,r.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(r.linearVelocity)):u.hasLinearVelocity=!1,r.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(r.angularVelocity)):u.hasAngularVelocity=!1));c!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(c.matrix.fromArray(i.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,i.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(i.linearVelocity)):c.hasLinearVelocity=!1,i.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(i.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(Gy)))}return c!==null&&(c.visible=i!==null),u!==null&&(u.visible=r!==null),d!==null&&(d.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new jn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Hy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Wy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Xy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Mt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new nn({vertexShader:Hy,fragmentShader:Wy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new It(new zi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Yy extends os{constructor(e,t){super();const n=this;let i=null,r=1,a=null,c="local-floor",u=1,d=null,f=null,m=null,v=null,g=null,b=null;const y=new Xy,x=t.getContextAttributes();let _=null,w=null;const E=[],S=[],P=new Ie;let D=null;const O=new fn;O.viewport=new Ct;const U=new fn;U.viewport=new Ct;const I=[O,U],C=new i_;let F=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ae=E[j];return ae===void 0&&(ae=new Rl,E[j]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(j){let ae=E[j];return ae===void 0&&(ae=new Rl,E[j]=ae),ae.getGripSpace()},this.getHand=function(j){let ae=E[j];return ae===void 0&&(ae=new Rl,E[j]=ae),ae.getHandSpace()};function X(j){const ae=S.indexOf(j.inputSource);if(ae===-1)return;const Se=E[ae];Se!==void 0&&(Se.update(j.inputSource,j.frame,d||a),Se.dispatchEvent({type:j.type,data:j.inputSource}))}function J(){i.removeEventListener("select",X),i.removeEventListener("selectstart",X),i.removeEventListener("selectend",X),i.removeEventListener("squeeze",X),i.removeEventListener("squeezestart",X),i.removeEventListener("squeezeend",X),i.removeEventListener("end",J),i.removeEventListener("inputsourceschange",Q);for(let j=0;j<E.length;j++){const ae=S[j];ae!==null&&(S[j]=null,E[j].disconnect(ae))}F=null,Y=null,y.reset(),e.setRenderTarget(_),g=null,v=null,m=null,i=null,w=null,He.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){c=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||a},this.setReferenceSpace=function(j){d=j},this.getBaseLayer=function(){return v!==null?v:g},this.getBinding=function(){return m},this.getFrame=function(){return b},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(_=e.getRenderTarget(),i.addEventListener("select",X),i.addEventListener("selectstart",X),i.addEventListener("selectend",X),i.addEventListener("squeeze",X),i.addEventListener("squeezestart",X),i.addEventListener("squeezeend",X),i.addEventListener("end",J),i.addEventListener("inputsourceschange",Q),x.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(P),i.renderState.layers===void 0){const ae={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(i,t,ae),i.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),w=new Ln(g.framebufferWidth,g.framebufferHeight,{format:Ot,type:Yt,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let ae=null,Se=null,ve=null;x.depth&&(ve=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=x.stencil?Js:Hs,Se=x.stencil?Zs:fi);const Le={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};m=new XRWebGLBinding(i,t),v=m.createProjectionLayer(Le),i.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),w=new Ln(v.textureWidth,v.textureHeight,{format:Ot,type:Yt,depthTexture:new eh(v.textureWidth,v.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(u),d=null,a=await i.requestReferenceSpace(c),He.setContext(i),He.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Q(j){for(let ae=0;ae<j.removed.length;ae++){const Se=j.removed[ae],ve=S.indexOf(Se);ve>=0&&(S[ve]=null,E[ve].disconnect(Se))}for(let ae=0;ae<j.added.length;ae++){const Se=j.added[ae];let ve=S.indexOf(Se);if(ve===-1){for(let Fe=0;Fe<E.length;Fe++)if(Fe>=S.length){S.push(Se),ve=Fe;break}else if(S[Fe]===null){S[Fe]=Se,ve=Fe;break}if(ve===-1)break}const Le=E[ve];Le&&Le.connect(Se)}}const ee=new L,ne=new L;function z(j,ae,Se){ee.setFromMatrixPosition(ae.matrixWorld),ne.setFromMatrixPosition(Se.matrixWorld);const ve=ee.distanceTo(ne),Le=ae.projectionMatrix.elements,Fe=Se.projectionMatrix.elements,Ge=Le[14]/(Le[10]-1),q=Le[14]/(Le[10]+1),_e=(Le[9]+1)/Le[5],je=(Le[9]-1)/Le[5],k=(Le[8]-1)/Le[0],dt=(Fe[8]+1)/Fe[0],Ne=Ge*k,Xe=Ge*dt,De=ve/(-k+dt),pt=De*-k;if(ae.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(pt),j.translateZ(De),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Le[10]===-1)j.projectionMatrix.copy(ae.projectionMatrix),j.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const Oe=Ge+De,N=q+De,T=Ne-pt,$=Xe+(ve-pt),se=_e*q/N*Oe,ue=je*q/N*Oe;j.projectionMatrix.makePerspective(T,$,se,ue,Oe,N),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ce(j,ae){ae===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ae.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let ae=j.near,Se=j.far;y.texture!==null&&(y.depthNear>0&&(ae=y.depthNear),y.depthFar>0&&(Se=y.depthFar)),C.near=U.near=O.near=ae,C.far=U.far=O.far=Se,(F!==C.near||Y!==C.far)&&(i.updateRenderState({depthNear:C.near,depthFar:C.far}),F=C.near,Y=C.far),O.layers.mask=j.layers.mask|2,U.layers.mask=j.layers.mask|4,C.layers.mask=O.layers.mask|U.layers.mask;const ve=j.parent,Le=C.cameras;ce(C,ve);for(let Fe=0;Fe<Le.length;Fe++)ce(Le[Fe],ve);Le.length===2?z(C,O,U):C.projectionMatrix.copy(O.projectionMatrix),fe(j,C,ve)};function fe(j,ae,Se){Se===null?j.matrix.copy(ae.matrixWorld):(j.matrix.copy(Se.matrixWorld),j.matrix.invert(),j.matrix.multiply(ae.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ae.projectionMatrix),j.projectionMatrixInverse.copy(ae.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=er*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(v===null&&g===null))return u},this.setFoveation=function(j){u=j,v!==null&&(v.fixedFoveation=j),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=j)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(C)};let me=null;function le(j,ae){if(f=ae.getViewerPose(d||a),b=ae,f!==null){const Se=f.views;g!==null&&(e.setRenderTargetFramebuffer(w,g.framebuffer),e.setRenderTarget(w));let ve=!1;Se.length!==C.cameras.length&&(C.cameras.length=0,ve=!0);for(let Fe=0;Fe<Se.length;Fe++){const Ge=Se[Fe];let q=null;if(g!==null)q=g.getViewport(Ge);else{const je=m.getViewSubImage(v,Ge);q=je.viewport,Fe===0&&(e.setRenderTargetTextures(w,je.colorTexture,v.ignoreDepthValues?void 0:je.depthStencilTexture),e.setRenderTarget(w))}let _e=I[Fe];_e===void 0&&(_e=new fn,_e.layers.enable(Fe),_e.viewport=new Ct,I[Fe]=_e),_e.matrix.fromArray(Ge.transform.matrix),_e.matrix.decompose(_e.position,_e.quaternion,_e.scale),_e.projectionMatrix.fromArray(Ge.projectionMatrix),_e.projectionMatrixInverse.copy(_e.projectionMatrix).invert(),_e.viewport.set(q.x,q.y,q.width,q.height),Fe===0&&(C.matrix.copy(_e.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),ve===!0&&C.cameras.push(_e)}const Le=i.enabledFeatures;if(Le&&Le.includes("depth-sensing")){const Fe=m.getDepthInformation(Se[0]);Fe&&Fe.isValid&&Fe.texture&&y.init(e,Fe,i.renderState)}}for(let Se=0;Se<E.length;Se++){const ve=S[Se],Le=E[Se];ve!==null&&Le!==void 0&&Le.update(ve,ae,d||a)}me&&me(j,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),b=null}const He=new Hp;He.setAnimationLoop(le),this.setAnimationLoop=function(j){me=j},this.dispose=function(){}}}const ts=new tn,jy=new ut;function qy(s,e){function t(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function n(x,_){_.color.getRGB(x.fogColor.value,Bp(s)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function i(x,_,w,E,S){_.isMeshBasicMaterial||_.isMeshLambertMaterial?r(x,_):_.isMeshToonMaterial?(r(x,_),m(x,_)):_.isMeshPhongMaterial?(r(x,_),f(x,_)):_.isMeshStandardMaterial?(r(x,_),v(x,_),_.isMeshPhysicalMaterial&&g(x,_,S)):_.isMeshMatcapMaterial?(r(x,_),b(x,_)):_.isMeshDepthMaterial?r(x,_):_.isMeshDistanceMaterial?(r(x,_),y(x,_)):_.isMeshNormalMaterial?r(x,_):_.isLineBasicMaterial?(a(x,_),_.isLineDashedMaterial&&c(x,_)):_.isPointsMaterial?u(x,_,w,E):_.isSpriteMaterial?d(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function r(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,t(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===gn&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,t(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===gn&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,t(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,t(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);const w=e.get(_),E=w.envMap,S=w.envMapRotation;E&&(x.envMap.value=E,ts.copy(S),ts.x*=-1,ts.y*=-1,ts.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),x.envMapRotation.value.setFromMatrix4(jy.makeRotationFromEuler(ts)),x.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap&&(x.lightMap.value=_.lightMap,x.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,x.lightMapTransform)),_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,x.aoMapTransform))}function a(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform))}function c(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function u(x,_,w,E){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*w,x.scale.value=E*.5,_.map&&(x.map.value=_.map,t(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function d(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function f(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function m(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function v(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,x.roughnessMapTransform)),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function g(x,_,w){x.ior.value=_.ior,_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===gn&&x.clearcoatNormalScale.value.negate())),_.dispersion>0&&(x.dispersion.value=_.dispersion),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=w.texture,x.transmissionSamplerSize.value.set(w.width,w.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,x.specularIntensityMapTransform))}function b(x,_){_.matcap&&(x.matcap.value=_.matcap)}function y(x,_){const w=e.get(_).light;x.referencePosition.value.setFromMatrixPosition(w.matrixWorld),x.nearDistance.value=w.shadow.camera.near,x.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function $y(s,e,t,n){let i={},r={},a=[];const c=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function u(w,E){const S=E.program;n.uniformBlockBinding(w,S)}function d(w,E){let S=i[w.id];S===void 0&&(b(w),S=f(w),i[w.id]=S,w.addEventListener("dispose",x));const P=E.program;n.updateUBOMapping(w,P);const D=e.render.frame;r[w.id]!==D&&(v(w),r[w.id]=D)}function f(w){const E=m();w.__bindingPointIndex=E;const S=s.createBuffer(),P=w.__size,D=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,P,D),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,E,S),S}function m(){for(let w=0;w<c;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(w){const E=i[w.id],S=w.uniforms,P=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,E);for(let D=0,O=S.length;D<O;D++){const U=Array.isArray(S[D])?S[D]:[S[D]];for(let I=0,C=U.length;I<C;I++){const F=U[I];if(g(F,D,I,P)===!0){const Y=F.__offset,X=Array.isArray(F.value)?F.value:[F.value];let J=0;for(let Q=0;Q<X.length;Q++){const ee=X[Q],ne=y(ee);typeof ee=="number"||typeof ee=="boolean"?(F.__data[0]=ee,s.bufferSubData(s.UNIFORM_BUFFER,Y+J,F.__data)):ee.isMatrix3?(F.__data[0]=ee.elements[0],F.__data[1]=ee.elements[1],F.__data[2]=ee.elements[2],F.__data[3]=0,F.__data[4]=ee.elements[3],F.__data[5]=ee.elements[4],F.__data[6]=ee.elements[5],F.__data[7]=0,F.__data[8]=ee.elements[6],F.__data[9]=ee.elements[7],F.__data[10]=ee.elements[8],F.__data[11]=0):(ee.toArray(F.__data,J),J+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Y,F.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function g(w,E,S,P){const D=w.value,O=E+"_"+S;if(P[O]===void 0)return typeof D=="number"||typeof D=="boolean"?P[O]=D:P[O]=D.clone(),!0;{const U=P[O];if(typeof D=="number"||typeof D=="boolean"){if(U!==D)return P[O]=D,!0}else if(U.equals(D)===!1)return U.copy(D),!0}return!1}function b(w){const E=w.uniforms;let S=0;const P=16;for(let O=0,U=E.length;O<U;O++){const I=Array.isArray(E[O])?E[O]:[E[O]];for(let C=0,F=I.length;C<F;C++){const Y=I[C],X=Array.isArray(Y.value)?Y.value:[Y.value];for(let J=0,Q=X.length;J<Q;J++){const ee=X[J],ne=y(ee),z=S%P,ce=z%ne.boundary,fe=z+ce;S+=ce,fe!==0&&P-fe<ne.storage&&(S+=P-fe),Y.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=S,S+=ne.storage}}}const D=S%P;return D>0&&(S+=P-D),w.__size=S,w.__cache={},this}function y(w){const E={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(E.boundary=4,E.storage=4):w.isVector2?(E.boundary=8,E.storage=8):w.isVector3||w.isColor?(E.boundary=16,E.storage=12):w.isVector4?(E.boundary=16,E.storage=16):w.isMatrix3?(E.boundary=48,E.storage=48):w.isMatrix4?(E.boundary=64,E.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),E}function x(w){const E=w.target;E.removeEventListener("dispose",x);const S=a.indexOf(E.__bindingPointIndex);a.splice(S,1),s.deleteBuffer(i[E.id]),delete i[E.id],delete r[E.id]}function _(){for(const w in i)s.deleteBuffer(i[w]);a=[],i={},r={}}return{bind:u,update:d,dispose:_}}class Ad{constructor(e={}){const{canvas:t=M0(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:c=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:d=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:m=!1,reverseDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const b=new Uint32Array(4),y=new Int32Array(4);let x=null,_=null;const w=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=wn,this.toneMapping=Ni,this.toneMappingExposure=1;const S=this;let P=!1,D=0,O=0,U=null,I=-1,C=null;const F=new Ct,Y=new Ct;let X=null;const J=new ke(0);let Q=0,ee=t.width,ne=t.height,z=1,ce=null,fe=null;const me=new Ct(0,0,ee,ne),le=new Ct(0,0,ee,ne);let He=!1;const j=new Jc;let ae=!1,Se=!1;const ve=new ut,Le=new ut,Fe=new L,Ge=new Ct,q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _e=!1;function je(){return U===null?z:1}let k=n;function dt(R,G){return t.getContext(R,G)}try{const R={alpha:!0,depth:i,stencil:r,antialias:c,premultipliedAlpha:u,preserveDrawingBuffer:d,powerPreference:f,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${da}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",Ee,!1),t.addEventListener("webglcontextcreationerror",Me,!1),k===null){const G="webgl2";if(k=dt(G,R),k===null)throw dt(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Ne,Xe,De,pt,Oe,N,T,$,se,ue,ie,Ue,we,Ce,rt,ge,Pe,ze,qe,Ae,nt,Ke,bt,V;function xe(){Ne=new rb(k),Ne.init(),Ke=new Vy(k,Ne),Xe=new Q1(k,Ne,e,Ke),De=new ky(k,Ne),Xe.reverseDepthBuffer&&v&&De.buffers.depth.setReversed(!0),pt=new lb(k),Oe=new Ay,N=new zy(k,Ne,De,Oe,Xe,Ke,pt),T=new tb(S),$=new sb(S),se=new m_(k),bt=new Z1(k,se),ue=new ob(k,se,pt,bt),ie=new hb(k,ue,se,pt),qe=new cb(k,Xe,N),ge=new eb(Oe),Ue=new Ey(S,T,$,Ne,Xe,bt,ge),we=new qy(S,Oe),Ce=new Ty,rt=new Uy(Ne),ze=new K1(S,T,$,De,ie,g,u),Pe=new Fy(S,ie,Xe),V=new $y(k,pt,Xe,De),Ae=new J1(k,Ne,pt),nt=new ab(k,Ne,pt),pt.programs=Ue.programs,S.capabilities=Xe,S.extensions=Ne,S.properties=Oe,S.renderLists=Ce,S.shadowMap=Pe,S.state=De,S.info=pt}xe();const te=new Yy(S,k);this.xr=te,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const R=Ne.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ne.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(R){R!==void 0&&(z=R,this.setSize(ee,ne,!1))},this.getSize=function(R){return R.set(ee,ne)},this.setSize=function(R,G,K=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=R,ne=G,t.width=Math.floor(R*z),t.height=Math.floor(G*z),K===!0&&(t.style.width=R+"px",t.style.height=G+"px"),this.setViewport(0,0,R,G)},this.getDrawingBufferSize=function(R){return R.set(ee*z,ne*z).floor()},this.setDrawingBufferSize=function(R,G,K){ee=R,ne=G,z=K,t.width=Math.floor(R*K),t.height=Math.floor(G*K),this.setViewport(0,0,R,G)},this.getCurrentViewport=function(R){return R.copy(F)},this.getViewport=function(R){return R.copy(me)},this.setViewport=function(R,G,K,Z){R.isVector4?me.set(R.x,R.y,R.z,R.w):me.set(R,G,K,Z),De.viewport(F.copy(me).multiplyScalar(z).round())},this.getScissor=function(R){return R.copy(le)},this.setScissor=function(R,G,K,Z){R.isVector4?le.set(R.x,R.y,R.z,R.w):le.set(R,G,K,Z),De.scissor(Y.copy(le).multiplyScalar(z).round())},this.getScissorTest=function(){return He},this.setScissorTest=function(R){De.setScissorTest(He=R)},this.setOpaqueSort=function(R){ce=R},this.setTransparentSort=function(R){fe=R},this.getClearColor=function(R){return R.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor.apply(ze,arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha.apply(ze,arguments)},this.clear=function(R=!0,G=!0,K=!0){let Z=0;if(R){let H=!1;if(U!==null){const pe=U.texture.format;H=pe===qc||pe===jc||pe===Pn}if(H){const pe=U.texture.type,be=pe===Yt||pe===fi||pe===Ks||pe===Zs||pe===Wc||pe===Xc,Te=ze.getClearColor(),Re=ze.getClearAlpha(),$e=Te.r,Ze=Te.g,Be=Te.b;be?(b[0]=$e,b[1]=Ze,b[2]=Be,b[3]=Re,k.clearBufferuiv(k.COLOR,0,b)):(y[0]=$e,y[1]=Ze,y[2]=Be,y[3]=Re,k.clearBufferiv(k.COLOR,0,y))}else Z|=k.COLOR_BUFFER_BIT}G&&(Z|=k.DEPTH_BUFFER_BIT),K&&(Z|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",Ee,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),ze.dispose(),Ce.dispose(),rt.dispose(),Oe.dispose(),T.dispose(),$.dispose(),ie.dispose(),bt.dispose(),V.dispose(),Ue.dispose(),te.dispose(),te.removeEventListener("sessionstart",Yr),te.removeEventListener("sessionend",mi),Vn.stop()};function oe(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const R=pt.autoReset,G=Pe.enabled,K=Pe.autoUpdate,Z=Pe.needsUpdate,H=Pe.type;xe(),pt.autoReset=R,Pe.enabled=G,Pe.autoUpdate=K,Pe.needsUpdate=Z,Pe.type=H}function Me(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Qe(R){const G=R.target;G.removeEventListener("dispose",Qe),St(G)}function St(R){Ft(R),Oe.remove(R)}function Ft(R){const G=Oe.get(R).programs;G!==void 0&&(G.forEach(function(K){Ue.releaseProgram(K)}),R.isShaderMaterial&&Ue.releaseShaderCache(R))}this.renderBufferDirect=function(R,G,K,Z,H,pe){G===null&&(G=q);const be=H.isMesh&&H.matrixWorld.determinant()<0,Te=Ea(R,G,K,Z,H);De.setMaterial(Z,be);let Re=K.index,$e=1;if(Z.wireframe===!0){if(Re=ue.getWireframeAttribute(K),Re===void 0)return;$e=2}const Ze=K.drawRange,Be=K.attributes.position;let ct=Ze.start*$e,ft=(Ze.start+Ze.count)*$e;pe!==null&&(ct=Math.max(ct,pe.start*$e),ft=Math.min(ft,(pe.start+pe.count)*$e)),Re!==null?(ct=Math.max(ct,0),ft=Math.min(ft,Re.count)):Be!=null&&(ct=Math.max(ct,0),ft=Math.min(ft,Be.count));const Lt=ft-ct;if(Lt<0||Lt===1/0)return;bt.setup(H,Z,Te,K,Re);let Rt,ot=Ae;if(Re!==null&&(Rt=se.get(Re),ot=nt,ot.setIndex(Rt)),H.isMesh)Z.wireframe===!0?(De.setLineWidth(Z.wireframeLinewidth*je()),ot.setMode(k.LINES)):ot.setMode(k.TRIANGLES);else if(H.isLine){let Ve=Z.linewidth;Ve===void 0&&(Ve=1),De.setLineWidth(Ve*je()),H.isLineSegments?ot.setMode(k.LINES):H.isLineLoop?ot.setMode(k.LINE_LOOP):ot.setMode(k.LINE_STRIP)}else H.isPoints?ot.setMode(k.POINTS):H.isSprite&&ot.setMode(k.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)ot.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(Ne.get("WEBGL_multi_draw"))ot.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Ve=H._multiDrawStarts,Bt=H._multiDrawCounts,mt=H._multiDrawCount,_n=Re?se.get(Re).bytesPerElement:1,vi=Oe.get(Z).currentProgram.getUniforms();for(let rn=0;rn<mt;rn++)vi.setValue(k,"_gl_DrawID",rn),ot.render(Ve[rn]/_n,Bt[rn])}else if(H.isInstancedMesh)ot.renderInstances(ct,Lt,H.count);else if(K.isInstancedBufferGeometry){const Ve=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Bt=Math.min(K.instanceCount,Ve);ot.renderInstances(ct,Lt,Bt)}else ot.render(ct,Lt)};function it(R,G,K){R.transparent===!0&&R.side===Bn&&R.forceSinglePass===!1?(R.side=gn,R.needsUpdate=!0,ds(R,G,K),R.side=Oi,R.needsUpdate=!0,ds(R,G,K),R.side=Bn):ds(R,G,K)}this.compile=function(R,G,K=null){K===null&&(K=R),_=rt.get(K),_.init(G),E.push(_),K.traverseVisible(function(H){H.isLight&&H.layers.test(G.layers)&&(_.pushLight(H),H.castShadow&&_.pushShadow(H))}),R!==K&&R.traverseVisible(function(H){H.isLight&&H.layers.test(G.layers)&&(_.pushLight(H),H.castShadow&&_.pushShadow(H))}),_.setupLights();const Z=new Set;return R.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const pe=H.material;if(pe)if(Array.isArray(pe))for(let be=0;be<pe.length;be++){const Te=pe[be];it(Te,K,H),Z.add(Te)}else it(pe,K,H),Z.add(pe)}),E.pop(),_=null,Z},this.compileAsync=function(R,G,K=null){const Z=this.compile(R,G,K);return new Promise(H=>{function pe(){if(Z.forEach(function(be){Oe.get(be).currentProgram.isReady()&&Z.delete(be)}),Z.size===0){H(R);return}setTimeout(pe,10)}Ne.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let sn=null;function Wt(R){sn&&sn(R)}function Yr(){Vn.stop()}function mi(){Vn.start()}const Vn=new Hp;Vn.setAnimationLoop(Wt),typeof self<"u"&&Vn.setContext(self),this.setAnimationLoop=function(R){sn=R,te.setAnimationLoop(R),R===null?Vn.stop():Vn.start()},te.addEventListener("sessionstart",Yr),te.addEventListener("sessionend",mi),this.render=function(R,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(G),G=te.getCamera()),R.isScene===!0&&R.onBeforeRender(S,R,G,U),_=rt.get(R,E.length),_.init(G),E.push(_),Le.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),j.setFromProjectionMatrix(Le),Se=this.localClippingEnabled,ae=ge.init(this.clippingPlanes,Se),x=Ce.get(R,w.length),x.init(),w.push(x),te.enabled===!0&&te.isPresenting===!0){const pe=S.xr.getDepthSensingMesh();pe!==null&&gi(pe,G,-1/0,S.sortObjects)}gi(R,G,0,S.sortObjects),x.finish(),S.sortObjects===!0&&x.sort(ce,fe),_e=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,_e&&ze.addToRenderList(x,R),this.info.render.frame++,ae===!0&&ge.beginShadows();const K=_.state.shadowsArray;Pe.render(K,R,G),ae===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=x.opaque,H=x.transmissive;if(_.setupLights(),G.isArrayCamera){const pe=G.cameras;if(H.length>0)for(let be=0,Te=pe.length;be<Te;be++){const Re=pe[be];hs(Z,H,R,Re)}_e&&ze.render(R);for(let be=0,Te=pe.length;be<Te;be++){const Re=pe[be];cs(x,R,Re,Re.viewport)}}else H.length>0&&hs(Z,H,R,G),_e&&ze.render(R),cs(x,R,G);U!==null&&(N.updateMultisampleRenderTarget(U),N.updateRenderTargetMipmap(U)),R.isScene===!0&&R.onAfterRender(S,R,G),bt.resetDefaultState(),I=-1,C=null,E.pop(),E.length>0?(_=E[E.length-1],ae===!0&&ge.setGlobalState(S.clippingPlanes,_.state.camera)):_=null,w.pop(),w.length>0?x=w[w.length-1]:x=null};function gi(R,G,K,Z){if(R.visible===!1)return;if(R.layers.test(G.layers)){if(R.isGroup)K=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(G);else if(R.isLight)_.pushLight(R),R.castShadow&&_.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||j.intersectsSprite(R)){Z&&Ge.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Le);const be=ie.update(R),Te=R.material;Te.visible&&x.push(R,be,Te,K,Ge.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||j.intersectsObject(R))){const be=ie.update(R),Te=R.material;if(Z&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ge.copy(R.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Ge.copy(be.boundingSphere.center)),Ge.applyMatrix4(R.matrixWorld).applyMatrix4(Le)),Array.isArray(Te)){const Re=be.groups;for(let $e=0,Ze=Re.length;$e<Ze;$e++){const Be=Re[$e],ct=Te[Be.materialIndex];ct&&ct.visible&&x.push(R,be,ct,K,Ge.z,Be)}}else Te.visible&&x.push(R,be,Te,K,Ge.z,null)}}const pe=R.children;for(let be=0,Te=pe.length;be<Te;be++)gi(pe[be],G,K,Z)}function cs(R,G,K,Z){const H=R.opaque,pe=R.transmissive,be=R.transparent;_.setupLightsView(K),ae===!0&&ge.setGlobalState(S.clippingPlanes,K),Z&&De.viewport(F.copy(Z)),H.length>0&&us(H,G,K),pe.length>0&&us(pe,G,K),be.length>0&&us(be,G,K),De.buffers.depth.setTest(!0),De.buffers.depth.setMask(!0),De.buffers.color.setMask(!0),De.setPolygonOffset(!1)}function hs(R,G,K,Z){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[Z.id]===void 0&&(_.state.transmissionRenderTarget[Z.id]=new Ln(1,1,{generateMipmaps:!0,type:Ne.has("EXT_color_buffer_half_float")||Ne.has("EXT_color_buffer_float")?Vr:Yt,minFilter:Ii,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_t.workingColorSpace}));const pe=_.state.transmissionRenderTarget[Z.id],be=Z.viewport||F;pe.setSize(be.z,be.w);const Te=S.getRenderTarget();S.setRenderTarget(pe),S.getClearColor(J),Q=S.getClearAlpha(),Q<1&&S.setClearColor(16777215,.5),S.clear(),_e&&ze.render(K);const Re=S.toneMapping;S.toneMapping=Ni;const $e=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),_.setupLightsView(Z),ae===!0&&ge.setGlobalState(S.clippingPlanes,Z),us(R,K,Z),N.updateMultisampleRenderTarget(pe),N.updateRenderTargetMipmap(pe),Ne.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let Be=0,ct=G.length;Be<ct;Be++){const ft=G[Be],Lt=ft.object,Rt=ft.geometry,ot=ft.material,Ve=ft.group;if(ot.side===Bn&&Lt.layers.test(Z.layers)){const Bt=ot.side;ot.side=gn,ot.needsUpdate=!0,jr(Lt,K,Z,Rt,ot,Ve),ot.side=Bt,ot.needsUpdate=!0,Ze=!0}}Ze===!0&&(N.updateMultisampleRenderTarget(pe),N.updateRenderTargetMipmap(pe))}S.setRenderTarget(Te),S.setClearColor(J,Q),$e!==void 0&&(Z.viewport=$e),S.toneMapping=Re}function us(R,G,K){const Z=G.isScene===!0?G.overrideMaterial:null;for(let H=0,pe=R.length;H<pe;H++){const be=R[H],Te=be.object,Re=be.geometry,$e=Z===null?be.material:Z,Ze=be.group;Te.layers.test(K.layers)&&jr(Te,G,K,Re,$e,Ze)}}function jr(R,G,K,Z,H,pe){R.onBeforeRender(S,G,K,Z,H,pe),R.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),H.onBeforeRender(S,G,K,Z,R,pe),H.transparent===!0&&H.side===Bn&&H.forceSinglePass===!1?(H.side=gn,H.needsUpdate=!0,S.renderBufferDirect(K,G,Z,H,R,pe),H.side=Oi,H.needsUpdate=!0,S.renderBufferDirect(K,G,Z,H,R,pe),H.side=Bn):S.renderBufferDirect(K,G,Z,H,R,pe),R.onAfterRender(S,G,K,Z,H,pe)}function ds(R,G,K){G.isScene!==!0&&(G=q);const Z=Oe.get(R),H=_.state.lights,pe=_.state.shadowsArray,be=H.state.version,Te=Ue.getParameters(R,H.state,pe,G,K),Re=Ue.getProgramCacheKey(Te);let $e=Z.programs;Z.environment=R.isMeshStandardMaterial?G.environment:null,Z.fog=G.fog,Z.envMap=(R.isMeshStandardMaterial?$:T).get(R.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&R.envMap===null?G.environmentRotation:R.envMapRotation,$e===void 0&&(R.addEventListener("dispose",Qe),$e=new Map,Z.programs=$e);let Ze=$e.get(Re);if(Ze!==void 0){if(Z.currentProgram===Ze&&Z.lightsStateVersion===be)return ps(R,Te),Ze}else Te.uniforms=Ue.getUniforms(R),R.onBeforeCompile(Te,S),Ze=Ue.acquireProgram(Te,Re),$e.set(Re,Ze),Z.uniforms=Te.uniforms;const Be=Z.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Be.clippingPlanes=ge.uniform),ps(R,Te),Z.needsLights=Gi(R),Z.lightsStateVersion=be,Z.needsLights&&(Be.ambientLightColor.value=H.state.ambient,Be.lightProbe.value=H.state.probe,Be.directionalLights.value=H.state.directional,Be.directionalLightShadows.value=H.state.directionalShadow,Be.spotLights.value=H.state.spot,Be.spotLightShadows.value=H.state.spotShadow,Be.rectAreaLights.value=H.state.rectArea,Be.ltc_1.value=H.state.rectAreaLTC1,Be.ltc_2.value=H.state.rectAreaLTC2,Be.pointLights.value=H.state.point,Be.pointLightShadows.value=H.state.pointShadow,Be.hemisphereLights.value=H.state.hemi,Be.directionalShadowMap.value=H.state.directionalShadowMap,Be.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Be.spotShadowMap.value=H.state.spotShadowMap,Be.spotLightMatrix.value=H.state.spotLightMatrix,Be.spotLightMap.value=H.state.spotLightMap,Be.pointShadowMap.value=H.state.pointShadowMap,Be.pointShadowMatrix.value=H.state.pointShadowMatrix),Z.currentProgram=Ze,Z.uniformsList=null,Ze}function qr(R){if(R.uniformsList===null){const G=R.currentProgram.getUniforms();R.uniformsList=$o.seqWithValue(G.seq,R.uniforms)}return R.uniformsList}function ps(R,G){const K=Oe.get(R);K.outputColorSpace=G.outputColorSpace,K.batching=G.batching,K.batchingColor=G.batchingColor,K.instancing=G.instancing,K.instancingColor=G.instancingColor,K.instancingMorph=G.instancingMorph,K.skinning=G.skinning,K.morphTargets=G.morphTargets,K.morphNormals=G.morphNormals,K.morphColors=G.morphColors,K.morphTargetsCount=G.morphTargetsCount,K.numClippingPlanes=G.numClippingPlanes,K.numIntersection=G.numClipIntersection,K.vertexAlphas=G.vertexAlphas,K.vertexTangents=G.vertexTangents,K.toneMapping=G.toneMapping}function Ea(R,G,K,Z,H){G.isScene!==!0&&(G=q),N.resetTextureUnits();const pe=G.fog,be=Z.isMeshStandardMaterial?G.environment:null,Te=U===null?S.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Qs,Re=(Z.isMeshStandardMaterial?$:T).get(Z.envMap||be),$e=Z.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ze=!!K.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Be=!!K.morphAttributes.position,ct=!!K.morphAttributes.normal,ft=!!K.morphAttributes.color;let Lt=Ni;Z.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Lt=S.toneMapping);const Rt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ot=Rt!==void 0?Rt.length:0,Ve=Oe.get(Z),Bt=_.state.lights;if(ae===!0&&(Se===!0||R!==C)){const jt=R===C&&Z.id===I;ge.setState(Z,R,jt)}let mt=!1;Z.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Bt.state.version||Ve.outputColorSpace!==Te||H.isBatchedMesh&&Ve.batching===!1||!H.isBatchedMesh&&Ve.batching===!0||H.isBatchedMesh&&Ve.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ve.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ve.instancing===!1||!H.isInstancedMesh&&Ve.instancing===!0||H.isSkinnedMesh&&Ve.skinning===!1||!H.isSkinnedMesh&&Ve.skinning===!0||H.isInstancedMesh&&Ve.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ve.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ve.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ve.instancingMorph===!1&&H.morphTexture!==null||Ve.envMap!==Re||Z.fog===!0&&Ve.fog!==pe||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==ge.numPlanes||Ve.numIntersection!==ge.numIntersection)||Ve.vertexAlphas!==$e||Ve.vertexTangents!==Ze||Ve.morphTargets!==Be||Ve.morphNormals!==ct||Ve.morphColors!==ft||Ve.toneMapping!==Lt||Ve.morphTargetsCount!==ot)&&(mt=!0):(mt=!0,Ve.__version=Z.version);let _n=Ve.currentProgram;mt===!0&&(_n=ds(Z,G,H));let vi=!1,rn=!1,Hi=!1;const wt=_n.getUniforms(),un=Ve.uniforms;if(De.useProgram(_n.program)&&(vi=!0,rn=!0,Hi=!0),Z.id!==I&&(I=Z.id,rn=!0),vi||C!==R){De.buffers.depth.getReversed()?(ve.copy(R.projectionMatrix),A0(ve),C0(ve),wt.setValue(k,"projectionMatrix",ve)):wt.setValue(k,"projectionMatrix",R.projectionMatrix),wt.setValue(k,"viewMatrix",R.matrixWorldInverse);const Zt=wt.map.cameraPosition;Zt!==void 0&&Zt.setValue(k,Fe.setFromMatrixPosition(R.matrixWorld)),Xe.logarithmicDepthBuffer&&wt.setValue(k,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&wt.setValue(k,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,rn=!0,Hi=!0)}if(H.isSkinnedMesh){wt.setOptional(k,H,"bindMatrix"),wt.setOptional(k,H,"bindMatrixInverse");const jt=H.skeleton;jt&&(jt.boneTexture===null&&jt.computeBoneTexture(),wt.setValue(k,"boneTexture",jt.boneTexture,N))}H.isBatchedMesh&&(wt.setOptional(k,H,"batchingTexture"),wt.setValue(k,"batchingTexture",H._matricesTexture,N),wt.setOptional(k,H,"batchingIdTexture"),wt.setValue(k,"batchingIdTexture",H._indirectTexture,N),wt.setOptional(k,H,"batchingColorTexture"),H._colorsTexture!==null&&wt.setValue(k,"batchingColorTexture",H._colorsTexture,N));const dn=K.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&qe.update(H,K,_n),(rn||Ve.receiveShadow!==H.receiveShadow)&&(Ve.receiveShadow=H.receiveShadow,wt.setValue(k,"receiveShadow",H.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(un.envMap.value=Re,un.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&G.environment!==null&&(un.envMapIntensity.value=G.environmentIntensity),rn&&(wt.setValue(k,"toneMappingExposure",S.toneMappingExposure),Ve.needsLights&&Aa(un,Hi),pe&&Z.fog===!0&&we.refreshFogUniforms(un,pe),we.refreshMaterialUniforms(un,Z,z,ne,_.state.transmissionRenderTarget[R.id]),$o.upload(k,qr(Ve),un,N)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&($o.upload(k,qr(Ve),un,N),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&wt.setValue(k,"center",H.center),wt.setValue(k,"modelViewMatrix",H.modelViewMatrix),wt.setValue(k,"normalMatrix",H.normalMatrix),wt.setValue(k,"modelMatrix",H.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const jt=Z.uniformsGroups;for(let Zt=0,Zn=jt.length;Zt<Zn;Zt++){const qt=jt[Zt];V.update(qt,_n),V.bind(qt,_n)}}return _n}function Aa(R,G){R.ambientLightColor.needsUpdate=G,R.lightProbe.needsUpdate=G,R.directionalLights.needsUpdate=G,R.directionalLightShadows.needsUpdate=G,R.pointLights.needsUpdate=G,R.pointLightShadows.needsUpdate=G,R.spotLights.needsUpdate=G,R.spotLightShadows.needsUpdate=G,R.rectAreaLights.needsUpdate=G,R.hemisphereLights.needsUpdate=G}function Gi(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(R,G,K){Oe.get(R.texture).__webglTexture=G,Oe.get(R.depthTexture).__webglTexture=K;const Z=Oe.get(R);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=K===void 0,Z.__autoAllocateDepthBuffer||Ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,G){const K=Oe.get(R);K.__webglFramebuffer=G,K.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(R,G=0,K=0){U=R,D=G,O=K;let Z=!0,H=null,pe=!1,be=!1;if(R){const Re=Oe.get(R);if(Re.__useDefaultFramebuffer!==void 0)De.bindFramebuffer(k.FRAMEBUFFER,null),Z=!1;else if(Re.__webglFramebuffer===void 0)N.setupRenderTarget(R);else if(Re.__hasExternalTextures)N.rebindTextures(R,Oe.get(R.texture).__webglTexture,Oe.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Be=R.depthTexture;if(Re.__boundDepthTexture!==Be){if(Be!==null&&Oe.has(Be)&&(R.width!==Be.image.width||R.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(R)}}const $e=R.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(be=!0);const Ze=Oe.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ze[G])?H=Ze[G][K]:H=Ze[G],pe=!0):R.samples>0&&N.useMultisampledRTT(R)===!1?H=Oe.get(R).__webglMultisampledFramebuffer:Array.isArray(Ze)?H=Ze[K]:H=Ze,F.copy(R.viewport),Y.copy(R.scissor),X=R.scissorTest}else F.copy(me).multiplyScalar(z).floor(),Y.copy(le).multiplyScalar(z).floor(),X=He;if(De.bindFramebuffer(k.FRAMEBUFFER,H)&&Z&&De.drawBuffers(R,H),De.viewport(F),De.scissor(Y),De.setScissorTest(X),pe){const Re=Oe.get(R.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+G,Re.__webglTexture,K)}else if(be){const Re=Oe.get(R.texture),$e=G||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Re.__webglTexture,K||0,$e)}I=-1},this.readRenderTargetPixels=function(R,G,K,Z,H,pe,be){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Oe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&be!==void 0&&(Te=Te[be]),Te){De.bindFramebuffer(k.FRAMEBUFFER,Te);try{const Re=R.texture,$e=Re.format,Ze=Re.type;if(!Xe.textureFormatReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=R.width-Z&&K>=0&&K<=R.height-H&&k.readPixels(G,K,Z,H,Ke.convert($e),Ke.convert(Ze),pe)}finally{const Re=U!==null?Oe.get(U).__webglFramebuffer:null;De.bindFramebuffer(k.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(R,G,K,Z,H,pe,be){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=Oe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&be!==void 0&&(Te=Te[be]),Te){const Re=R.texture,$e=Re.format,Ze=Re.type;if(!Xe.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=R.width-Z&&K>=0&&K<=R.height-H){De.bindFramebuffer(k.FRAMEBUFFER,Te);const Be=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Be),k.bufferData(k.PIXEL_PACK_BUFFER,pe.byteLength,k.STREAM_READ),k.readPixels(G,K,Z,H,Ke.convert($e),Ke.convert(Ze),0);const ct=U!==null?Oe.get(U).__webglFramebuffer:null;De.bindFramebuffer(k.FRAMEBUFFER,ct);const ft=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await E0(k,ft,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Be),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,pe),k.deleteBuffer(Be),k.deleteSync(ft),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,G=null,K=0){R.isTexture!==!0&&(ks("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,R=arguments[1]);const Z=Math.pow(2,-K),H=Math.floor(R.image.width*Z),pe=Math.floor(R.image.height*Z),be=G!==null?G.x:0,Te=G!==null?G.y:0;N.setTexture2D(R,0),k.copyTexSubImage2D(k.TEXTURE_2D,K,0,0,be,Te,H,pe),De.unbindTexture()};const $r=k.createFramebuffer(),Ca=k.createFramebuffer();this.copyTextureToTexture=function(R,G,K=null,Z=null,H=0,pe=null){R.isTexture!==!0&&(ks("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,R=arguments[1],G=arguments[2],pe=arguments[3]||0,K=null),pe===null&&(H!==0?(ks("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pe=H,H=0):pe=0);let be,Te,Re,$e,Ze,Be,ct,ft,Lt;const Rt=R.isCompressedTexture?R.mipmaps[pe]:R.image;if(K!==null)be=K.max.x-K.min.x,Te=K.max.y-K.min.y,Re=K.isBox3?K.max.z-K.min.z:1,$e=K.min.x,Ze=K.min.y,Be=K.isBox3?K.min.z:0;else{const dn=Math.pow(2,-H);be=Math.floor(Rt.width*dn),Te=Math.floor(Rt.height*dn),R.isDataArrayTexture?Re=Rt.depth:R.isData3DTexture?Re=Math.floor(Rt.depth*dn):Re=1,$e=0,Ze=0,Be=0}Z!==null?(ct=Z.x,ft=Z.y,Lt=Z.z):(ct=0,ft=0,Lt=0);const ot=Ke.convert(G.format),Ve=Ke.convert(G.type);let Bt;G.isData3DTexture?(N.setTexture3D(G,0),Bt=k.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(N.setTexture2DArray(G,0),Bt=k.TEXTURE_2D_ARRAY):(N.setTexture2D(G,0),Bt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,G.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,G.unpackAlignment);const mt=k.getParameter(k.UNPACK_ROW_LENGTH),_n=k.getParameter(k.UNPACK_IMAGE_HEIGHT),vi=k.getParameter(k.UNPACK_SKIP_PIXELS),rn=k.getParameter(k.UNPACK_SKIP_ROWS),Hi=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Rt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Rt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,$e),k.pixelStorei(k.UNPACK_SKIP_ROWS,Ze),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Be);const wt=R.isDataArrayTexture||R.isData3DTexture,un=G.isDataArrayTexture||G.isData3DTexture;if(R.isDepthTexture){const dn=Oe.get(R),jt=Oe.get(G),Zt=Oe.get(dn.__renderTarget),Zn=Oe.get(jt.__renderTarget);De.bindFramebuffer(k.READ_FRAMEBUFFER,Zt.__webglFramebuffer),De.bindFramebuffer(k.DRAW_FRAMEBUFFER,Zn.__webglFramebuffer);for(let qt=0;qt<Re;qt++)wt&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Oe.get(R).__webglTexture,H,Be+qt),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Oe.get(G).__webglTexture,pe,Lt+qt)),k.blitFramebuffer($e,Ze,be,Te,ct,ft,be,Te,k.DEPTH_BUFFER_BIT,k.NEAREST);De.bindFramebuffer(k.READ_FRAMEBUFFER,null),De.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(H!==0||R.isRenderTargetTexture||Oe.has(R)){const dn=Oe.get(R),jt=Oe.get(G);De.bindFramebuffer(k.READ_FRAMEBUFFER,$r),De.bindFramebuffer(k.DRAW_FRAMEBUFFER,Ca);for(let Zt=0;Zt<Re;Zt++)wt?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,dn.__webglTexture,H,Be+Zt):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,dn.__webglTexture,H),un?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,jt.__webglTexture,pe,Lt+Zt):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,jt.__webglTexture,pe),H!==0?k.blitFramebuffer($e,Ze,be,Te,ct,ft,be,Te,k.COLOR_BUFFER_BIT,k.NEAREST):un?k.copyTexSubImage3D(Bt,pe,ct,ft,Lt+Zt,$e,Ze,be,Te):k.copyTexSubImage2D(Bt,pe,ct,ft,$e,Ze,be,Te);De.bindFramebuffer(k.READ_FRAMEBUFFER,null),De.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else un?R.isDataTexture||R.isData3DTexture?k.texSubImage3D(Bt,pe,ct,ft,Lt,be,Te,Re,ot,Ve,Rt.data):G.isCompressedArrayTexture?k.compressedTexSubImage3D(Bt,pe,ct,ft,Lt,be,Te,Re,ot,Rt.data):k.texSubImage3D(Bt,pe,ct,ft,Lt,be,Te,Re,ot,Ve,Rt):R.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,pe,ct,ft,be,Te,ot,Ve,Rt.data):R.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,pe,ct,ft,Rt.width,Rt.height,ot,Rt.data):k.texSubImage2D(k.TEXTURE_2D,pe,ct,ft,be,Te,ot,Ve,Rt);k.pixelStorei(k.UNPACK_ROW_LENGTH,mt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,_n),k.pixelStorei(k.UNPACK_SKIP_PIXELS,vi),k.pixelStorei(k.UNPACK_SKIP_ROWS,rn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Hi),pe===0&&G.generateMipmaps&&k.generateMipmap(Bt),De.unbindTexture()},this.copyTextureToTexture3D=function(R,G,K=null,Z=null,H=0){return R.isTexture!==!0&&(ks("WebGLRenderer: copyTextureToTexture3D function signature has changed."),K=arguments[0]||null,Z=arguments[1]||null,R=arguments[2],G=arguments[3],H=arguments[4]||0),ks('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,G,K,Z,H)},this.initRenderTarget=function(R){Oe.get(R).__webglFramebuffer===void 0&&N.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?N.setTextureCube(R,0):R.isData3DTexture?N.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?N.setTexture2DArray(R,0):N.setTexture2D(R,0),De.unbindTexture()},this.resetState=function(){D=0,O=0,U=null,De.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=_t._getDrawingBufferColorSpace(e),t.unpackColorSpace=_t._getUnpackColorSpace()}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.2
 * @author George Michael Brower
 * @license MIT
 */class Kn{constructor(e,t,n,i,r="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),Kn.nextNameID=Kn.nextNameID||0,this.$name.id=`lil-gui-name-${++Kn.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",a=>a.stopPropagation()),this.domElement.addEventListener("keyup",a=>a.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Ky extends Kn{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Lc(s){let e,t;return(e=s.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=s.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=s.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const Zy={isPrimitive:!0,match:s=>typeof s=="string",fromHexString:Lc,toHexString:Lc},Ur={isPrimitive:!0,match:s=>typeof s=="number",fromHexString:s=>parseInt(s.substring(1),16),toHexString:s=>"#"+s.toString(16).padStart(6,0)},Jy={isPrimitive:!1,match:s=>Array.isArray(s),fromHexString(s,e,t=1){const n=Ur.fromHexString(s);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([s,e,t],n=1){n=255/n;const i=s*n<<16^e*n<<8^t*n<<0;return Ur.toHexString(i)}},Qy={isPrimitive:!1,match:s=>Object(s)===s,fromHexString(s,e,t=1){const n=Ur.fromHexString(s);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r:s,g:e,b:t},n=1){n=255/n;const i=s*n<<16^e*n<<8^t*n<<0;return Ur.toHexString(i)}},ew=[Zy,Ur,Jy,Qy];function tw(s){return ew.find(e=>e.match(s))}class nw extends Kn{constructor(e,t,n,i){super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=tw(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=Lc(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Pl extends Kn{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class iw extends Kn{constructor(e,t,n,i,r,a){super(e,t,n,"number"),this._initInput(),this.min(i),this.max(r);const c=a!==void 0;this.step(c?a:this._getImplicitStep(),c),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let w=parseFloat(this.$input.value);isNaN(w)||(this._stepExplicit&&(w=this._snap(w)),this.setValue(this._clamp(w)))},n=w=>{const E=parseFloat(this.$input.value);isNaN(E)||(this._snapClampSetValue(E+w),this.$input.value=this.getValue())},i=w=>{w.key==="Enter"&&this.$input.blur(),w.code==="ArrowUp"&&(w.preventDefault(),n(this._step*this._arrowKeyMultiplier(w))),w.code==="ArrowDown"&&(w.preventDefault(),n(this._step*this._arrowKeyMultiplier(w)*-1))},r=w=>{this._inputFocused&&(w.preventDefault(),n(this._step*this._normalizeMouseWheel(w)))};let a=!1,c,u,d,f,m;const v=5,g=w=>{c=w.clientX,u=d=w.clientY,a=!0,f=this.getValue(),m=0,window.addEventListener("mousemove",b),window.addEventListener("mouseup",y)},b=w=>{if(a){const E=w.clientX-c,S=w.clientY-u;Math.abs(S)>v?(w.preventDefault(),this.$input.blur(),a=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(E)>v&&y()}if(!a){const E=w.clientY-d;m-=E*this._step*this._arrowKeyMultiplier(w),f+m>this._max?m=this._max-f:f+m<this._min&&(m=this._min-f),this._snapClampSetValue(f+m)}d=w.clientY},y=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",b),window.removeEventListener("mouseup",y)},x=()=>{this._inputFocused=!0},_=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",i),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",g),this.$input.addEventListener("focus",x),this.$input.addEventListener("blur",_)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(_,w,E,S,P)=>(_-w)/(E-w)*(P-S)+S,t=_=>{const w=this.$slider.getBoundingClientRect();let E=e(_,w.left,w.right,this._min,this._max);this._snapClampSetValue(E)},n=_=>{this._setDraggingStyle(!0),t(_.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",r)},i=_=>{t(_.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",r)};let a=!1,c,u;const d=_=>{_.preventDefault(),this._setDraggingStyle(!0),t(_.touches[0].clientX),a=!1},f=_=>{_.touches.length>1||(this._hasScrollBar?(c=_.touches[0].clientX,u=_.touches[0].clientY,a=!0):d(_),window.addEventListener("touchmove",m,{passive:!1}),window.addEventListener("touchend",v))},m=_=>{if(a){const w=_.touches[0].clientX-c,E=_.touches[0].clientY-u;Math.abs(w)>Math.abs(E)?d(_):(window.removeEventListener("touchmove",m),window.removeEventListener("touchend",v))}else _.preventDefault(),t(_.touches[0].clientX)},v=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",m),window.removeEventListener("touchend",v)},g=this._callOnFinishChange.bind(this),b=400;let y;const x=_=>{if(Math.abs(_.deltaX)<Math.abs(_.deltaY)&&this._hasScrollBar)return;_.preventDefault();const E=this._normalizeMouseWheel(_)*this._step;this._snapClampSetValue(this.getValue()+E),this.$input.value=this.getValue(),clearTimeout(y),y=setTimeout(g,b)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",f,{passive:!1}),this.$slider.addEventListener("wheel",x,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class sw extends Kn{constructor(e,t,n,i){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(i)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const n=document.createElement("option");n.textContent=t,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class rw extends Kn{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const ow=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: none;
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
  }
  .lil-gui button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function aw(s){const e=document.createElement("style");e.innerHTML=s;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let Cd=!1;class rh{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:i,title:r="Controls",closeFolders:a=!1,injectStyles:c=!0,touchStyles:u=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",d=>{(d.code==="Enter"||d.code==="Space")&&(d.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),u&&this.domElement.classList.add("allow-touch-styles"),!Cd&&c&&(aw(ow),Cd=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this._closeFolders=a}add(e,t,n,i,r){if(Object(n)===n)return new sw(this,e,t,n);const a=e[t];switch(typeof a){case"number":return new iw(this,e,t,n,i,r);case"boolean":return new Ky(this,e,t);case"string":return new rw(this,e,t);case"function":return new Pl(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,a)}addColor(e,t,n=1){return new nw(this,e,t,n)}addFolder(e){const t=new rh({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof Pl||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Pl)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}function Il(s){const e=Math.ceil(Math.sqrt(s)),t=Math.ceil(s/e);return[e,t]}function Td(s){const e=s.map(i=>new ke(i)),t=e.flatMap(i=>[i.r,i.g,i.b,1]),n=new cn(new Float32Array(t),e.length,1,Ot,en);return n.minFilter=Nt,n.magFilter=Nt,n.internalFormat="RGBA32F",n.needsUpdate=!0,n}function Rd(){const s=new Float32Array(65536);for(let a=0;a<s.length;a++)s[a]=Math.random();const e=new cn(s,...Il(s.length),Gr,en);e.internalFormat="R32F",e.needsUpdate=!0;const t=new Uint8Array(256*256);for(let a=0;a<t.length;a++)t[a]=Math.random()<.01?1:0;const n=new cn(t,...Il(t.length),Pn,Yt);n.internalFormat="R8UI",n.needsUpdate=!0;const i=new Uint8Array(256*256);for(let a=0;a<i.length;a++)i[a]=Math.random()<.8?1:0;const r=new cn(i,...Il(i.length),Pn,Yt);return r.internalFormat="R8UI",r.needsUpdate=!0,{featureTex:e,outlierData:n,inRangeIds:r,featureMin:0,featureMax:1}}const Po={viridis:["#440154","#3a528b","#20908c","#5ec961","#fde724"],plasma:["#0d0887","#46039f","#7201a8","#ab5dc2","#d878b9","#fca726","#f0f921"]},lw={viridis:{stops:Po.viridis,tex:Td(Po.viridis)},plasma:{stops:Po.plasma,tex:Td(Po.plasma)}},cw={feature1:Rd(),feature2:Rd()};function oh(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Cr={exports:{}};/*! Tweakpane 3.1.10 (c) 2016 cocopon, licensed under the MIT license. */var hw=Cr.exports,Pd;function uw(){return Pd||(Pd=1,function(s,e){(function(t,n){n(e)})(hw,function(t){class n{constructor(o){const[l,p]=o.split("-"),M=l.split(".");this.major=parseInt(M[0],10),this.minor=parseInt(M[1],10),this.patch=parseInt(M[2],10),this.prerelease=p??null}toString(){const o=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[o,this.prerelease].join("-"):o}}class i{constructor(o){this.controller_=o}get element(){return this.controller_.view.element}get disabled(){return this.controller_.viewProps.get("disabled")}set disabled(o){this.controller_.viewProps.set("disabled",o)}get hidden(){return this.controller_.viewProps.get("hidden")}set hidden(o){this.controller_.viewProps.set("hidden",o)}dispose(){this.controller_.viewProps.set("disposed",!0)}}class r{constructor(o){this.target=o}}class a extends r{constructor(o,l,p,M){super(o),this.value=l,this.presetKey=p,this.last=M??!0}}class c extends r{constructor(o,l,p){super(o),this.value=l,this.presetKey=p}}class u extends r{constructor(o,l){super(o),this.expanded=l}}class d extends r{constructor(o,l){super(o),this.index=l}}function f(h){return h}function m(h){return h==null}function v(h,o){if(h.length!==o.length)return!1;for(let l=0;l<h.length;l++)if(h[l]!==o[l])return!1;return!0}function g(h,o){let l=h;do{const p=Object.getOwnPropertyDescriptor(l,o);if(p&&(p.set!==void 0||p.writable===!0))return!0;l=Object.getPrototypeOf(l)}while(l!==null);return!1}const b={alreadydisposed:()=>"View has been already disposed",invalidparams:h=>`Invalid parameters for '${h.name}'`,nomatchingcontroller:h=>`No matching controller for '${h.key}'`,nomatchingview:h=>`No matching view for '${JSON.stringify(h.params)}'`,notbindable:()=>"Value is not bindable",propertynotfound:h=>`Property '${h.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class y{static alreadyDisposed(){return new y({type:"alreadydisposed"})}static notBindable(){return new y({type:"notbindable"})}static propertyNotFound(o){return new y({type:"propertynotfound",context:{name:o}})}static shouldNeverHappen(){return new y({type:"shouldneverhappen"})}constructor(o){var l;this.message=(l=b[o.type](o.context))!==null&&l!==void 0?l:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=o.type}}class x{constructor(o,l,p){this.obj_=o,this.key_=l,this.presetKey_=p??l}static isBindable(o){return!(o===null||typeof o!="object"&&typeof o!="function")}get key(){return this.key_}get presetKey(){return this.presetKey_}read(){return this.obj_[this.key_]}write(o){this.obj_[this.key_]=o}writeProperty(o,l){const p=this.read();if(!x.isBindable(p))throw y.notBindable();if(!(o in p))throw y.propertyNotFound(o);p[o]=l}}class _ extends i{get label(){return this.controller_.props.get("label")}set label(o){this.controller_.props.set("label",o)}get title(){var o;return(o=this.controller_.valueController.props.get("title"))!==null&&o!==void 0?o:""}set title(o){this.controller_.valueController.props.set("title",o)}on(o,l){const p=l.bind(this);return this.controller_.valueController.emitter.on(o,()=>{p(new r(this))}),this}}class w{constructor(){this.observers_={}}on(o,l){let p=this.observers_[o];return p||(p=this.observers_[o]=[]),p.push({handler:l}),this}off(o,l){const p=this.observers_[o];return p&&(this.observers_[o]=p.filter(M=>M.handler!==l)),this}emit(o,l){const p=this.observers_[o];p&&p.forEach(M=>{M.handler(l)})}}const E="tp";function S(h){return(l,p)=>[E,"-",h,"v",l?`_${l}`:"",p?`-${p}`:""].join("")}function P(h,o){return l=>o(h(l))}function D(h){return h.rawValue}function O(h,o){h.emitter.on("change",P(D,o)),o(h.rawValue)}function U(h,o,l){O(h.value(o),l)}function I(h,o,l){l?h.classList.add(o):h.classList.remove(o)}function C(h,o){return l=>{I(h,o,l)}}function F(h,o){O(h,l=>{o.textContent=l??""})}const Y=S("btn");class X{constructor(o,l){this.element=o.createElement("div"),this.element.classList.add(Y()),l.viewProps.bindClassModifiers(this.element);const p=o.createElement("button");p.classList.add(Y("b")),l.viewProps.bindDisabled(p),this.element.appendChild(p),this.buttonElement=p;const M=o.createElement("div");M.classList.add(Y("t")),F(l.props.value("title"),M),this.buttonElement.appendChild(M)}}class J{constructor(o,l){this.emitter=new w,this.onClick_=this.onClick_.bind(this),this.props=l.props,this.viewProps=l.viewProps,this.view=new X(o,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class Q{constructor(o,l){var p;this.constraint_=l==null?void 0:l.constraint,this.equals_=(p=l==null?void 0:l.equals)!==null&&p!==void 0?p:(M,B)=>M===B,this.emitter=new w,this.rawValue_=o}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(o){this.setRawValue(o,{forceEmit:!1,last:!0})}setRawValue(o,l){const p=l??{forceEmit:!1,last:!0},M=this.constraint_?this.constraint_.constrain(o):o,B=this.rawValue_;this.equals_(B,M)&&!p.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=M,this.emitter.emit("change",{options:p,previousRawValue:B,rawValue:M,sender:this}))}}class ee{constructor(o){this.emitter=new w,this.value_=o}get rawValue(){return this.value_}set rawValue(o){this.setRawValue(o,{forceEmit:!1,last:!0})}setRawValue(o,l){const p=l??{forceEmit:!1,last:!0},M=this.value_;M===o&&!p.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=o,this.emitter.emit("change",{options:p,previousRawValue:M,rawValue:this.value_,sender:this}))}}function ne(h,o){const l=o==null?void 0:o.constraint,p=o==null?void 0:o.equals;return!l&&!p?new ee(h):new Q(h,o)}class z{constructor(o){this.emitter=new w,this.valMap_=o;for(const l in this.valMap_)this.valMap_[l].emitter.on("change",()=>{this.emitter.emit("change",{key:l,sender:this})})}static createCore(o){return Object.keys(o).reduce((p,M)=>Object.assign(p,{[M]:ne(o[M])}),{})}static fromObject(o){const l=this.createCore(o);return new z(l)}get(o){return this.valMap_[o].rawValue}set(o,l){this.valMap_[o].rawValue=l}value(o){return this.valMap_[o]}}function ce(h,o){const p=Object.keys(o).reduce((M,B)=>{if(M===void 0)return;const W=o[B],de=W(h[B]);return de.succeeded?Object.assign(Object.assign({},M),{[B]:de.value}):void 0},{});return p}function fe(h,o){return h.reduce((l,p)=>{if(l===void 0)return;const M=o(p);if(!(!M.succeeded||M.value===void 0))return[...l,M.value]},[])}function me(h){return h===null?!1:typeof h=="object"}function le(h){return o=>l=>{if(!o&&l===void 0)return{succeeded:!1,value:void 0};if(o&&l===void 0)return{succeeded:!0,value:void 0};const p=h(l);return p!==void 0?{succeeded:!0,value:p}:{succeeded:!1,value:void 0}}}function He(h){return{custom:o=>le(o)(h),boolean:le(o=>typeof o=="boolean"?o:void 0)(h),number:le(o=>typeof o=="number"?o:void 0)(h),string:le(o=>typeof o=="string"?o:void 0)(h),function:le(o=>typeof o=="function"?o:void 0)(h),constant:o=>le(l=>l===o?o:void 0)(h),raw:le(o=>o)(h),object:o=>le(l=>{if(me(l))return ce(l,o)})(h),array:o=>le(l=>{if(Array.isArray(l))return fe(l,o)})(h)}}const j={optional:He(!0),required:He(!1)};function ae(h,o){const l=j.required.object(o)(h);return l.succeeded?l.value:void 0}function Se(h){console.warn([`Missing '${h.key}' of ${h.target} in ${h.place}.`,"Please rebuild plugins with the latest core package."].join(" "))}function ve(h){return h&&h.parentElement&&h.parentElement.removeChild(h),null}class Le{constructor(o){this.value_=o}static create(o){return[new Le(o),(l,p)=>{o.setRawValue(l,p)}]}get emitter(){return this.value_.emitter}get rawValue(){return this.value_.rawValue}}const Fe=S("");function Ge(h,o){return C(h,Fe(void 0,o))}class q extends z{constructor(o){var l;super(o),this.onDisabledChange_=this.onDisabledChange_.bind(this),this.onParentChange_=this.onParentChange_.bind(this),this.onParentGlobalDisabledChange_=this.onParentGlobalDisabledChange_.bind(this),[this.globalDisabled_,this.setGlobalDisabled_]=Le.create(ne(this.getGlobalDisabled_())),this.value("disabled").emitter.on("change",this.onDisabledChange_),this.value("parent").emitter.on("change",this.onParentChange_),(l=this.get("parent"))===null||l===void 0||l.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_)}static create(o){var l,p,M;const B=o??{};return new q(z.createCore({disabled:(l=B.disabled)!==null&&l!==void 0?l:!1,disposed:!1,hidden:(p=B.hidden)!==null&&p!==void 0?p:!1,parent:(M=B.parent)!==null&&M!==void 0?M:null}))}get globalDisabled(){return this.globalDisabled_}bindClassModifiers(o){O(this.globalDisabled_,Ge(o,"disabled")),U(this,"hidden",Ge(o,"hidden"))}bindDisabled(o){O(this.globalDisabled_,l=>{o.disabled=l})}bindTabIndex(o){O(this.globalDisabled_,l=>{o.tabIndex=l?-1:0})}handleDispose(o){this.value("disposed").emitter.on("change",l=>{l&&o()})}getGlobalDisabled_(){const o=this.get("parent");return(o?o.globalDisabled.rawValue:!1)||this.get("disabled")}updateGlobalDisabled_(){this.setGlobalDisabled_(this.getGlobalDisabled_())}onDisabledChange_(){this.updateGlobalDisabled_()}onParentGlobalDisabledChange_(){this.updateGlobalDisabled_()}onParentChange_(o){var l;const p=o.previousRawValue;p==null||p.globalDisabled.emitter.off("change",this.onParentGlobalDisabledChange_),(l=this.get("parent"))===null||l===void 0||l.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_),this.updateGlobalDisabled_()}}function _e(){return["veryfirst","first","last","verylast"]}const je=S(""),k={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class dt{constructor(o){this.parent_=null,this.blade=o.blade,this.view=o.view,this.viewProps=o.viewProps;const l=this.view.element;this.blade.value("positions").emitter.on("change",()=>{_e().forEach(p=>{l.classList.remove(je(void 0,k[p]))}),this.blade.get("positions").forEach(p=>{l.classList.add(je(void 0,k[p]))})}),this.viewProps.handleDispose(()=>{ve(l)})}get parent(){return this.parent_}set parent(o){if(this.parent_=o,!("parent"in this.viewProps.valMap_)){Se({key:"parent",target:q.name,place:"BladeController.parent"});return}this.viewProps.set("parent",this.parent_?this.parent_.viewProps:null)}}const Ne="http://www.w3.org/2000/svg";function Xe(h){h.offsetHeight}function De(h,o){const l=h.style.transition;h.style.transition="none",o(),h.style.transition=l}function pt(h){return h.ontouchstart!==void 0}function Oe(){return globalThis}function N(){return Oe().document}function T(h){const o=h.ownerDocument.defaultView;return o&&"document"in o?h.getContext("2d",{willReadFrequently:!0}):null}const $={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function se(h,o){const l=h.createElementNS(Ne,"svg");return l.innerHTML=$[o],l}function ue(h,o,l){h.insertBefore(o,h.children[l])}function ie(h){h.parentElement&&h.parentElement.removeChild(h)}function Ue(h){for(;h.children.length>0;)h.removeChild(h.children[0])}function we(h){for(;h.childNodes.length>0;)h.removeChild(h.childNodes[0])}function Ce(h){return h.relatedTarget?h.relatedTarget:"explicitOriginalTarget"in h?h.explicitOriginalTarget:null}const rt=S("lbl");function ge(h,o){const l=h.createDocumentFragment();return o.split(`
`).map(M=>h.createTextNode(M)).forEach((M,B)=>{B>0&&l.appendChild(h.createElement("br")),l.appendChild(M)}),l}class Pe{constructor(o,l){this.element=o.createElement("div"),this.element.classList.add(rt()),l.viewProps.bindClassModifiers(this.element);const p=o.createElement("div");p.classList.add(rt("l")),U(l.props,"label",B=>{m(B)?this.element.classList.add(rt(void 0,"nol")):(this.element.classList.remove(rt(void 0,"nol")),we(p),p.appendChild(ge(o,B)))}),this.element.appendChild(p),this.labelElement=p;const M=o.createElement("div");M.classList.add(rt("v")),this.element.appendChild(M),this.valueElement=M}}class ze extends dt{constructor(o,l){const p=l.valueController.viewProps;super(Object.assign(Object.assign({},l),{view:new Pe(o,{props:l.props,viewProps:p}),viewProps:p})),this.props=l.props,this.valueController=l.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}const qe={id:"button",type:"blade",accept(h){const o=j,l=ae(h,{title:o.required.string,view:o.required.constant("button"),label:o.optional.string});return l?{params:l}:null},controller(h){return new ze(h.document,{blade:h.blade,props:z.fromObject({label:h.params.label}),valueController:new J(h.document,{props:z.fromObject({title:h.params.title}),viewProps:h.viewProps})})},api(h){return!(h.controller instanceof ze)||!(h.controller.valueController instanceof J)?null:new _(h.controller)}};class Ae extends dt{constructor(o){super(o),this.value=o.value}}function nt(){return new z({positions:ne([],{equals:v})})}class Ke extends z{constructor(o){super(o)}static create(o){const l={completed:!0,expanded:o,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},p=z.createCore(l);return new Ke(p)}get styleExpanded(){var o;return(o=this.get("temporaryExpanded"))!==null&&o!==void 0?o:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const o=this.get("expandedHeight");return this.get("shouldFixHeight")&&!m(o)?`${o}px`:"auto"}bindExpandedClass(o,l){const p=()=>{this.styleExpanded?o.classList.add(l):o.classList.remove(l)};U(this,"expanded",p),U(this,"temporaryExpanded",p)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function bt(h,o){let l=0;return De(o,()=>{h.set("expandedHeight",null),h.set("temporaryExpanded",!0),Xe(o),l=o.clientHeight,h.set("temporaryExpanded",null),Xe(o)}),l}function V(h,o){o.style.height=h.styleHeight}function xe(h,o){h.value("expanded").emitter.on("beforechange",()=>{if(h.set("completed",!1),m(h.get("expandedHeight"))){const l=bt(h,o);l>0&&h.set("expandedHeight",l)}h.set("shouldFixHeight",!0),Xe(o)}),h.emitter.on("change",()=>{V(h,o)}),V(h,o),o.addEventListener("transitionend",l=>{l.propertyName==="height"&&h.cleanUpTransition()})}class te extends i{constructor(o,l){super(o),this.rackApi_=l}}function oe(h,o){return h.addBlade(Object.assign(Object.assign({},o),{view:"button"}))}function Ee(h,o){return h.addBlade(Object.assign(Object.assign({},o),{view:"folder"}))}function Me(h,o){const l=o??{};return h.addBlade(Object.assign(Object.assign({},l),{view:"separator"}))}function Qe(h,o){return h.addBlade(Object.assign(Object.assign({},o),{view:"tab"}))}class St{constructor(o){this.emitter=new w,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=o}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(o){for(const l of this.allItems())if(o(l))return l;return null}includes(o){return this.cache_.has(o)}add(o,l){if(this.includes(o))throw y.shouldNeverHappen();const p=l!==void 0?l:this.items_.length;this.items_.splice(p,0,o),this.cache_.add(o);const M=this.extract_(o);M&&(M.emitter.on("add",this.onSubListAdd_),M.emitter.on("remove",this.onSubListRemove_),M.allItems().forEach(B=>{this.cache_.add(B)})),this.emitter.emit("add",{index:p,item:o,root:this,target:this})}remove(o){const l=this.items_.indexOf(o);if(l<0)return;this.items_.splice(l,1),this.cache_.delete(o);const p=this.extract_(o);p&&(p.emitter.off("add",this.onSubListAdd_),p.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:l,item:o,root:this,target:this})}onSubListAdd_(o){this.cache_.add(o.item),this.emitter.emit("add",{index:o.index,item:o.item,root:this,target:o.target})}onSubListRemove_(o){this.cache_.delete(o.item),this.emitter.emit("remove",{index:o.index,item:o.item,root:this,target:o.target})}}class Ft extends i{constructor(o){super(o),this.onBindingChange_=this.onBindingChange_.bind(this),this.emitter_=new w,this.controller_.binding.emitter.on("change",this.onBindingChange_)}get label(){return this.controller_.props.get("label")}set label(o){this.controller_.props.set("label",o)}on(o,l){const p=l.bind(this);return this.emitter_.on(o,M=>{p(M.event)}),this}refresh(){this.controller_.binding.read()}onBindingChange_(o){const l=o.sender.target.read();this.emitter_.emit("change",{event:new a(this,l,this.controller_.binding.target.presetKey,o.options.last)})}}class it extends ze{constructor(o,l){super(o,l),this.binding=l.binding}}class sn extends i{constructor(o){super(o),this.onBindingUpdate_=this.onBindingUpdate_.bind(this),this.emitter_=new w,this.controller_.binding.emitter.on("update",this.onBindingUpdate_)}get label(){return this.controller_.props.get("label")}set label(o){this.controller_.props.set("label",o)}on(o,l){const p=l.bind(this);return this.emitter_.on(o,M=>{p(M.event)}),this}refresh(){this.controller_.binding.read()}onBindingUpdate_(o){const l=o.sender.target.read();this.emitter_.emit("update",{event:new c(this,l,this.controller_.binding.target.presetKey)})}}class Wt extends ze{constructor(o,l){super(o,l),this.binding=l.binding,this.viewProps.bindDisabled(this.binding.ticker),this.viewProps.handleDispose(()=>{this.binding.dispose()})}}function Yr(h){return h instanceof gi?h.apiSet_:h instanceof te?h.rackApi_.apiSet_:null}function mi(h,o){const l=h.find(p=>p.controller_===o);if(!l)throw y.shouldNeverHappen();return l}function Vn(h,o,l){if(!x.isBindable(h))throw y.notBindable();return new x(h,o,l)}class gi extends i{constructor(o,l){super(o),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.onRackInputChange_=this.onRackInputChange_.bind(this),this.onRackMonitorUpdate_=this.onRackMonitorUpdate_.bind(this),this.emitter_=new w,this.apiSet_=new St(Yr),this.pool_=l;const p=this.controller_.rack;p.emitter.on("add",this.onRackAdd_),p.emitter.on("remove",this.onRackRemove_),p.emitter.on("inputchange",this.onRackInputChange_),p.emitter.on("monitorupdate",this.onRackMonitorUpdate_),p.children.forEach(M=>{this.setUpApi_(M)})}get children(){return this.controller_.rack.children.map(o=>mi(this.apiSet_,o))}addInput(o,l,p){const M=p??{},B=this.controller_.view.element.ownerDocument,W=this.pool_.createInput(B,Vn(o,l,M.presetKey),M),de=new Ft(W);return this.add(de,M.index)}addMonitor(o,l,p){const M=p??{},B=this.controller_.view.element.ownerDocument,W=this.pool_.createMonitor(B,Vn(o,l),M),de=new sn(W);return this.add(de,M.index)}addFolder(o){return Ee(this,o)}addButton(o){return oe(this,o)}addSeparator(o){return Me(this,o)}addTab(o){return Qe(this,o)}add(o,l){this.controller_.rack.add(o.controller_,l);const p=this.apiSet_.find(M=>M.controller_===o.controller_);return p&&this.apiSet_.remove(p),this.apiSet_.add(o),o}remove(o){this.controller_.rack.remove(o.controller_)}addBlade(o){const l=this.controller_.view.element.ownerDocument,p=this.pool_.createBlade(l,o),M=this.pool_.createBladeApi(p);return this.add(M,o.index)}on(o,l){const p=l.bind(this);return this.emitter_.on(o,M=>{p(M.event)}),this}setUpApi_(o){this.apiSet_.find(p=>p.controller_===o)||this.apiSet_.add(this.pool_.createBladeApi(o))}onRackAdd_(o){this.setUpApi_(o.bladeController)}onRackRemove_(o){if(o.isRoot){const l=mi(this.apiSet_,o.bladeController);this.apiSet_.remove(l)}}onRackInputChange_(o){const l=o.bladeController;if(l instanceof it){const p=mi(this.apiSet_,l),M=l.binding;this.emitter_.emit("change",{event:new a(p,M.target.read(),M.target.presetKey,o.options.last)})}else if(l instanceof Ae){const p=mi(this.apiSet_,l);this.emitter_.emit("change",{event:new a(p,l.value.rawValue,void 0,o.options.last)})}}onRackMonitorUpdate_(o){if(!(o.bladeController instanceof Wt))throw y.shouldNeverHappen();const l=mi(this.apiSet_,o.bladeController),p=o.bladeController.binding;this.emitter_.emit("update",{event:new c(l,p.target.read(),p.target.presetKey)})}}class cs extends te{constructor(o,l){super(o,new gi(o.rackController,l)),this.emitter_=new w,this.controller_.foldable.value("expanded").emitter.on("change",p=>{this.emitter_.emit("fold",{event:new u(this,p.sender.rawValue)})}),this.rackApi_.on("change",p=>{this.emitter_.emit("change",{event:p})}),this.rackApi_.on("update",p=>{this.emitter_.emit("update",{event:p})})}get expanded(){return this.controller_.foldable.get("expanded")}set expanded(o){this.controller_.foldable.set("expanded",o)}get title(){return this.controller_.props.get("title")}set title(o){this.controller_.props.set("title",o)}get children(){return this.rackApi_.children}addInput(o,l,p){return this.rackApi_.addInput(o,l,p)}addMonitor(o,l,p){return this.rackApi_.addMonitor(o,l,p)}addFolder(o){return this.rackApi_.addFolder(o)}addButton(o){return this.rackApi_.addButton(o)}addSeparator(o){return this.rackApi_.addSeparator(o)}addTab(o){return this.rackApi_.addTab(o)}add(o,l){return this.rackApi_.add(o,l)}remove(o){this.rackApi_.remove(o)}addBlade(o){return this.rackApi_.addBlade(o)}on(o,l){const p=l.bind(this);return this.emitter_.on(o,M=>{p(M.event)}),this}}class hs extends dt{constructor(o){super({blade:o.blade,view:o.view,viewProps:o.rackController.viewProps}),this.rackController=o.rackController}}class us{constructor(o,l){const p=S(l.viewName);this.element=o.createElement("div"),this.element.classList.add(p()),l.viewProps.bindClassModifiers(this.element)}}function jr(h,o){for(let l=0;l<h.length;l++){const p=h[l];if(p instanceof it&&p.binding===o)return p}return null}function ds(h,o){for(let l=0;l<h.length;l++){const p=h[l];if(p instanceof Wt&&p.binding===o)return p}return null}function qr(h,o){for(let l=0;l<h.length;l++){const p=h[l];if(p instanceof Ae&&p.value===o)return p}return null}function ps(h){return h instanceof Gi?h.rack:h instanceof hs?h.rackController.rack:null}function Ea(h){const o=ps(h);return o?o.bcSet_:null}class Aa{constructor(o){var l,p;this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildInputChange_=this.onChildInputChange_.bind(this),this.onChildMonitorUpdate_=this.onChildMonitorUpdate_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onDescendantLayout_=this.onDescendantLayout_.bind(this),this.onDescendantInputChange_=this.onDescendantInputChange_.bind(this),this.onDescendantMonitorUpdate_=this.onDescendantMonitorUpdate_.bind(this),this.emitter=new w,this.blade_=(l=o.blade)!==null&&l!==void 0?l:null,(p=this.blade_)===null||p===void 0||p.value("positions").emitter.on("change",this.onBladePositionsChange_),this.viewProps=o.viewProps,this.bcSet_=new St(Ea),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(o,l){var p;(p=o.parent)===null||p===void 0||p.remove(o),g(o,"parent")?o.parent=this:(o.parent_=this,Se({key:"parent",target:"BladeController",place:"BladeRack.add"})),this.bcSet_.add(o,l)}remove(o){g(o,"parent")?o.parent=null:(o.parent_=null,Se({key:"parent",target:"BladeController",place:"BladeRack.remove"})),this.bcSet_.remove(o)}find(o){return this.bcSet_.allItems().filter(l=>l instanceof o)}onSetAdd_(o){this.updatePositions_();const l=o.target===o.root;if(this.emitter.emit("add",{bladeController:o.item,index:o.index,isRoot:l,sender:this}),!l)return;const p=o.item;if(p.viewProps.emitter.on("change",this.onChildViewPropsChange_),p.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),p.viewProps.handleDispose(this.onChildDispose_),p instanceof it)p.binding.emitter.on("change",this.onChildInputChange_);else if(p instanceof Wt)p.binding.emitter.on("update",this.onChildMonitorUpdate_);else if(p instanceof Ae)p.value.emitter.on("change",this.onChildValueChange_);else{const M=ps(p);if(M){const B=M.emitter;B.on("layout",this.onDescendantLayout_),B.on("inputchange",this.onDescendantInputChange_),B.on("monitorupdate",this.onDescendantMonitorUpdate_)}}}onSetRemove_(o){this.updatePositions_();const l=o.target===o.root;if(this.emitter.emit("remove",{bladeController:o.item,isRoot:l,sender:this}),!l)return;const p=o.item;if(p instanceof it)p.binding.emitter.off("change",this.onChildInputChange_);else if(p instanceof Wt)p.binding.emitter.off("update",this.onChildMonitorUpdate_);else if(p instanceof Ae)p.value.emitter.off("change",this.onChildValueChange_);else{const M=ps(p);if(M){const B=M.emitter;B.off("layout",this.onDescendantLayout_),B.off("inputchange",this.onDescendantInputChange_),B.off("monitorupdate",this.onDescendantMonitorUpdate_)}}}updatePositions_(){const o=this.bcSet_.items.filter(M=>!M.viewProps.get("hidden")),l=o[0],p=o[o.length-1];this.bcSet_.items.forEach(M=>{const B=[];M===l&&(B.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&B.push("veryfirst")),M===p&&(B.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&B.push("verylast")),M.blade.set("positions",B)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(o){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(l=>l.viewProps.get("disposed")).forEach(l=>{this.bcSet_.remove(l)})}onChildInputChange_(o){const l=jr(this.find(it),o.sender);if(!l)throw y.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:l,options:o.options,sender:this})}onChildMonitorUpdate_(o){const l=ds(this.find(Wt),o.sender);if(!l)throw y.alreadyDisposed();this.emitter.emit("monitorupdate",{bladeController:l,sender:this})}onChildValueChange_(o){const l=qr(this.find(Ae),o.sender);if(!l)throw y.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:l,options:o.options,sender:this})}onDescendantLayout_(o){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onDescendantInputChange_(o){this.emitter.emit("inputchange",{bladeController:o.bladeController,options:o.options,sender:this})}onDescendantMonitorUpdate_(o){this.emitter.emit("monitorupdate",{bladeController:o.bladeController,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class Gi extends dt{constructor(o,l){super(Object.assign(Object.assign({},l),{view:new us(o,{viewName:"brk",viewProps:l.viewProps})})),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const p=new Aa({blade:l.root?void 0:l.blade,viewProps:l.viewProps});p.emitter.on("add",this.onRackAdd_),p.emitter.on("remove",this.onRackRemove_),this.rack=p,this.viewProps.handleDispose(()=>{for(let M=this.rack.children.length-1;M>=0;M--)this.rack.children[M].viewProps.set("disposed",!0)})}onRackAdd_(o){o.isRoot&&ue(this.view.element,o.bladeController.view.element,o.index)}onRackRemove_(o){o.isRoot&&ie(o.bladeController.view.element)}}const $r=S("cnt");class Ca{constructor(o,l){var p;this.className_=S((p=l.viewName)!==null&&p!==void 0?p:"fld"),this.element=o.createElement("div"),this.element.classList.add(this.className_(),$r()),l.viewProps.bindClassModifiers(this.element),this.foldable_=l.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),U(this.foldable_,"completed",C(this.element,this.className_(void 0,"cpl")));const M=o.createElement("button");M.classList.add(this.className_("b")),U(l.props,"title",Ye=>{m(Ye)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),l.viewProps.bindDisabled(M),this.element.appendChild(M),this.buttonElement=M;const B=o.createElement("div");B.classList.add(this.className_("i")),this.element.appendChild(B);const W=o.createElement("div");W.classList.add(this.className_("t")),F(l.props.value("title"),W),this.buttonElement.appendChild(W),this.titleElement=W;const de=o.createElement("div");de.classList.add(this.className_("m")),this.buttonElement.appendChild(de);const We=l.containerElement;We.classList.add(this.className_("c")),this.element.appendChild(We),this.containerElement=We}}class R extends hs{constructor(o,l){var p;const M=Ke.create((p=l.expanded)!==null&&p!==void 0?p:!0),B=new Gi(o,{blade:l.blade,root:l.root,viewProps:l.viewProps});super(Object.assign(Object.assign({},l),{rackController:B,view:new Ca(o,{containerElement:B.view.element,foldable:M,props:l.props,viewName:l.root?"rot":void 0,viewProps:l.viewProps})})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=l.props,this.foldable=M,xe(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const G={id:"folder",type:"blade",accept(h){const o=j,l=ae(h,{title:o.required.string,view:o.required.constant("folder"),expanded:o.optional.boolean});return l?{params:l}:null},controller(h){return new R(h.document,{blade:h.blade,expanded:h.params.expanded,props:z.fromObject({title:h.params.title}),viewProps:h.viewProps})},api(h){return h.controller instanceof R?new cs(h.controller,h.pool):null}};class K extends Ae{constructor(o,l){const p=l.valueController.viewProps;super(Object.assign(Object.assign({},l),{value:l.valueController.value,view:new Pe(o,{props:l.props,viewProps:p}),viewProps:p})),this.props=l.props,this.valueController=l.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}class Z extends i{}const H=S("spr");class pe{constructor(o,l){this.element=o.createElement("div"),this.element.classList.add(H()),l.viewProps.bindClassModifiers(this.element);const p=o.createElement("hr");p.classList.add(H("r")),this.element.appendChild(p)}}class be extends dt{constructor(o,l){super(Object.assign(Object.assign({},l),{view:new pe(o,{viewProps:l.viewProps})}))}}const Te={id:"separator",type:"blade",accept(h){const l=ae(h,{view:j.required.constant("separator")});return l?{params:l}:null},controller(h){return new be(h.document,{blade:h.blade,viewProps:h.viewProps})},api(h){return h.controller instanceof be?new Z(h.controller):null}},Re=S("tbi");class $e{constructor(o,l){this.element=o.createElement("div"),this.element.classList.add(Re()),l.viewProps.bindClassModifiers(this.element),U(l.props,"selected",B=>{B?this.element.classList.add(Re(void 0,"sel")):this.element.classList.remove(Re(void 0,"sel"))});const p=o.createElement("button");p.classList.add(Re("b")),l.viewProps.bindDisabled(p),this.element.appendChild(p),this.buttonElement=p;const M=o.createElement("div");M.classList.add(Re("t")),F(l.props.value("title"),M),this.buttonElement.appendChild(M),this.titleElement=M}}class Ze{constructor(o,l){this.emitter=new w,this.onClick_=this.onClick_.bind(this),this.props=l.props,this.viewProps=l.viewProps,this.view=new $e(o,{props:l.props,viewProps:l.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class Be{constructor(o,l){this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new Ze(o,{props:l.itemProps,viewProps:q.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.cc_=new Gi(o,{blade:nt(),viewProps:q.create()}),this.props=l.props,U(this.props,"selected",p=>{this.itemController.props.set("selected",p),this.contentController.viewProps.set("hidden",!p)})}get itemController(){return this.ic_}get contentController(){return this.cc_}onItemClick_(){this.props.set("selected",!0)}}class ct{constructor(o,l){this.controller_=o,this.rackApi_=l}get title(){var o;return(o=this.controller_.itemController.props.get("title"))!==null&&o!==void 0?o:""}set title(o){this.controller_.itemController.props.set("title",o)}get selected(){return this.controller_.props.get("selected")}set selected(o){this.controller_.props.set("selected",o)}get children(){return this.rackApi_.children}addButton(o){return this.rackApi_.addButton(o)}addFolder(o){return this.rackApi_.addFolder(o)}addSeparator(o){return this.rackApi_.addSeparator(o)}addTab(o){return this.rackApi_.addTab(o)}add(o,l){this.rackApi_.add(o,l)}remove(o){this.rackApi_.remove(o)}addInput(o,l,p){return this.rackApi_.addInput(o,l,p)}addMonitor(o,l,p){return this.rackApi_.addMonitor(o,l,p)}addBlade(o){return this.rackApi_.addBlade(o)}}class ft extends te{constructor(o,l){super(o,new gi(o.rackController,l)),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.onSelect_=this.onSelect_.bind(this),this.emitter_=new w,this.pageApiMap_=new Map,this.rackApi_.on("change",p=>{this.emitter_.emit("change",{event:p})}),this.rackApi_.on("update",p=>{this.emitter_.emit("update",{event:p})}),this.controller_.tab.selectedIndex.emitter.on("change",this.onSelect_),this.controller_.pageSet.emitter.on("add",this.onPageAdd_),this.controller_.pageSet.emitter.on("remove",this.onPageRemove_),this.controller_.pageSet.items.forEach(p=>{this.setUpPageApi_(p)})}get pages(){return this.controller_.pageSet.items.map(o=>{const l=this.pageApiMap_.get(o);if(!l)throw y.shouldNeverHappen();return l})}addPage(o){const l=this.controller_.view.element.ownerDocument,p=new Be(l,{itemProps:z.fromObject({selected:!1,title:o.title}),props:z.fromObject({selected:!1})});this.controller_.add(p,o.index);const M=this.pageApiMap_.get(p);if(!M)throw y.shouldNeverHappen();return M}removePage(o){this.controller_.remove(o)}on(o,l){const p=l.bind(this);return this.emitter_.on(o,M=>{p(M.event)}),this}setUpPageApi_(o){const l=this.rackApi_.apiSet_.find(M=>M.controller_===o.contentController);if(!l)throw y.shouldNeverHappen();const p=new ct(o,l);this.pageApiMap_.set(o,p)}onPageAdd_(o){this.setUpPageApi_(o.item)}onPageRemove_(o){if(!this.pageApiMap_.get(o.item))throw y.shouldNeverHappen();this.pageApiMap_.delete(o.item)}onSelect_(o){this.emitter_.emit("select",{event:new d(this,o.rawValue)})}}const Lt=-1;class Rt{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=ne(!0),this.selectedIndex=ne(Lt),this.items_=[]}add(o,l){const p=l??this.items_.length;this.items_.splice(p,0,o),o.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(o){const l=this.items_.indexOf(o);l<0||(this.items_.splice(l,1),o.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=Lt,this.empty.rawValue=!0;return}const o=this.items_.findIndex(l=>l.rawValue);o<0?(this.items_.forEach((l,p)=>{l.rawValue=p===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((l,p)=>{l.rawValue=p===o}),this.selectedIndex.rawValue=o),this.empty.rawValue=!1}onItemSelectedChange_(o){if(o.rawValue){const l=this.items_.findIndex(p=>p===o.sender);this.items_.forEach((p,M)=>{p.rawValue=M===l}),this.selectedIndex.rawValue=l}else this.keepSelection_()}}const ot=S("tab");class Ve{constructor(o,l){this.element=o.createElement("div"),this.element.classList.add(ot(),$r()),l.viewProps.bindClassModifiers(this.element),O(l.empty,C(this.element,ot(void 0,"nop")));const p=o.createElement("div");p.classList.add(ot("t")),this.element.appendChild(p),this.itemsElement=p;const M=o.createElement("div");M.classList.add(ot("i")),this.element.appendChild(M);const B=l.contentsElement;B.classList.add(ot("c")),this.element.appendChild(B),this.contentsElement=B}}class Bt extends hs{constructor(o,l){const p=new Gi(o,{blade:l.blade,viewProps:l.viewProps}),M=new Rt;super({blade:l.blade,rackController:p,view:new Ve(o,{contentsElement:p.view.element,empty:M.empty,viewProps:l.viewProps})}),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.pageSet_=new St(()=>null),this.pageSet_.emitter.on("add",this.onPageAdd_),this.pageSet_.emitter.on("remove",this.onPageRemove_),this.tab=M}get pageSet(){return this.pageSet_}add(o,l){this.pageSet_.add(o,l)}remove(o){this.pageSet_.remove(this.pageSet_.items[o])}onPageAdd_(o){const l=o.item;ue(this.view.itemsElement,l.itemController.view.element,o.index),l.itemController.viewProps.set("parent",this.viewProps),this.rackController.rack.add(l.contentController,o.index),this.tab.add(l.props.value("selected"))}onPageRemove_(o){const l=o.item;ie(l.itemController.view.element),l.itemController.viewProps.set("parent",null),this.rackController.rack.remove(l.contentController),this.tab.remove(l.props.value("selected"))}}const mt={id:"tab",type:"blade",accept(h){const o=j,l=ae(h,{pages:o.required.array(o.required.object({title:o.required.string})),view:o.required.constant("tab")});return!l||l.pages.length===0?null:{params:l}},controller(h){const o=new Bt(h.document,{blade:h.blade,viewProps:h.viewProps});return h.params.pages.forEach(l=>{const p=new Be(h.document,{itemProps:z.fromObject({selected:!1,title:l.title}),props:z.fromObject({selected:!1})});o.add(p)}),o},api(h){return h.controller instanceof Bt?new ft(h.controller,h.pool):null}};function _n(h,o){const l=h.accept(o.params);if(!l)return null;const p=j.optional.boolean(o.params.disabled).value,M=j.optional.boolean(o.params.hidden).value;return h.controller({blade:nt(),document:o.document,params:Object.assign(Object.assign({},l.params),{disabled:p,hidden:M}),viewProps:q.create({disabled:p,hidden:M})})}class vi{constructor(){this.disabled=!1,this.emitter=new w}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class rn{constructor(o,l){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=o,this.emitter=new w,this.interval_=l,this.setTimer_()}get disabled(){return this.disabled_}set disabled(o){this.disabled_=o,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const o=this.doc_.defaultView;o&&o.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const o=this.doc_.defaultView;o&&(this.timerId_=o.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class Hi{constructor(o){this.onValueChange_=this.onValueChange_.bind(this),this.reader=o.reader,this.writer=o.writer,this.emitter=new w,this.value=o.value,this.value.emitter.on("change",this.onValueChange_),this.target=o.target,this.read()}read(){const o=this.target.read();o!==void 0&&(this.value.rawValue=this.reader(o))}write_(o){this.writer(this.target,o)}onValueChange_(o){this.write_(o.rawValue),this.emitter.emit("change",{options:o.options,rawValue:o.rawValue,sender:this})}}function wt(h,o){for(;h.length<o;)h.push(void 0)}function un(h){const o=[];return wt(o,h),ne(o)}function dn(h){const o=h.indexOf(void 0);return o<0?h:h.slice(0,o)}function jt(h,o){const l=[...dn(h),o];return l.length>h.length?l.splice(0,l.length-h.length):wt(l,h.length),l}class Zt{constructor(o){this.onTick_=this.onTick_.bind(this),this.reader_=o.reader,this.target=o.target,this.emitter=new w,this.value=o.value,this.ticker=o.ticker,this.ticker.emitter.on("tick",this.onTick_),this.read()}dispose(){this.ticker.dispose()}read(){const o=this.target.read();if(o===void 0)return;const l=this.value.rawValue,p=this.reader_(o);this.value.rawValue=jt(l,p),this.emitter.emit("update",{rawValue:p,sender:this})}onTick_(o){this.read()}}class Zn{constructor(o){this.constraints=o}constrain(o){return this.constraints.reduce((l,p)=>p.constrain(l),o)}}function qt(h,o){if(h instanceof o)return h;if(h instanceof Zn){const l=h.constraints.reduce((p,M)=>p||(M instanceof o?M:null),null);if(l)return l}return null}class fs{constructor(o){this.values=z.fromObject({max:o.max,min:o.min})}constrain(o){const l=this.values.get("max"),p=this.values.get("min");return Math.min(Math.max(o,p),l)}}class lr{constructor(o){this.values=z.fromObject({options:o})}get options(){return this.values.get("options")}constrain(o){const l=this.values.get("options");return l.length===0||l.filter(M=>M.value===o).length>0?o:l[0].value}}class _h{constructor(o){this.values=z.fromObject({max:o.max,min:o.min})}get maxValue(){return this.values.get("max")}get minValue(){return this.values.get("min")}constrain(o){const l=this.values.get("max"),p=this.values.get("min");let M=o;return m(p)||(M=Math.max(M,p)),m(l)||(M=Math.min(M,l)),M}}class Kr{constructor(o,l=0){this.step=o,this.origin=l}constrain(o){const l=this.origin%this.step,p=Math.round((o-l)/this.step);return l+p*this.step}}const Ta=S("lst");class If{constructor(o,l){this.onValueChange_=this.onValueChange_.bind(this),this.props_=l.props,this.element=o.createElement("div"),this.element.classList.add(Ta()),l.viewProps.bindClassModifiers(this.element);const p=o.createElement("select");p.classList.add(Ta("s")),l.viewProps.bindDisabled(p),this.element.appendChild(p),this.selectElement=p;const M=o.createElement("div");M.classList.add(Ta("m")),M.appendChild(se(o,"dropdown")),this.element.appendChild(M),l.value.emitter.on("change",this.onValueChange_),this.value_=l.value,U(this.props_,"options",B=>{Ue(this.selectElement),B.forEach(W=>{const de=o.createElement("option");de.textContent=W.text,this.selectElement.appendChild(de)}),this.update_()})}update_(){const o=this.props_.get("options").map(l=>l.value);this.selectElement.selectedIndex=o.indexOf(this.value_.rawValue)}onValueChange_(){this.update_()}}class cr{constructor(o,l){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=l.props,this.value=l.value,this.viewProps=l.viewProps,this.view=new If(o,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(o){const l=o.currentTarget;this.value.rawValue=this.props.get("options")[l.selectedIndex].value}}const xh=S("pop");class Lf{constructor(o,l){this.element=o.createElement("div"),this.element.classList.add(xh()),l.viewProps.bindClassModifiers(this.element),O(l.shows,C(this.element,xh(void 0,"v")))}}class bh{constructor(o,l){this.shows=ne(!1),this.viewProps=l.viewProps,this.view=new Lf(o,{shows:this.shows,viewProps:this.viewProps})}}const yh=S("txt");class Df{constructor(o,l){this.onChange_=this.onChange_.bind(this),this.element=o.createElement("div"),this.element.classList.add(yh()),l.viewProps.bindClassModifiers(this.element),this.props_=l.props,this.props_.emitter.on("change",this.onChange_);const p=o.createElement("input");p.classList.add(yh("i")),p.type="text",l.viewProps.bindDisabled(p),this.element.appendChild(p),this.inputElement=p,l.value.emitter.on("change",this.onChange_),this.value_=l.value,this.refresh()}refresh(){const o=this.props_.get("formatter");this.inputElement.value=o(this.value_.rawValue)}onChange_(){this.refresh()}}class Zr{constructor(o,l){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=l.parser,this.props=l.props,this.value=l.value,this.viewProps=l.viewProps,this.view=new Df(o,{props:l.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(o){const p=o.currentTarget.value,M=this.parser_(p);m(M)||(this.value.rawValue=M),this.view.refresh()}}function Uf(h){return String(h)}function wh(h){return h==="false"?!1:!!h}function Sh(h){return Uf(h)}class Nf{constructor(o){this.text=o}evaluate(){return Number(this.text)}toString(){return this.text}}const Of={"**":(h,o)=>Math.pow(h,o),"*":(h,o)=>h*o,"/":(h,o)=>h/o,"%":(h,o)=>h%o,"+":(h,o)=>h+o,"-":(h,o)=>h-o,"<<":(h,o)=>h<<o,">>":(h,o)=>h>>o,">>>":(h,o)=>h>>>o,"&":(h,o)=>h&o,"^":(h,o)=>h^o,"|":(h,o)=>h|o};class Ff{constructor(o,l,p){this.left=l,this.operator=o,this.right=p}evaluate(){const o=Of[this.operator];if(!o)throw new Error(`unexpected binary operator: '${this.operator}`);return o(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const Bf={"+":h=>h,"-":h=>-h,"~":h=>~h};class kf{constructor(o,l){this.operator=o,this.expression=l}evaluate(){const o=Bf[this.operator];if(!o)throw new Error(`unexpected unary operator: '${this.operator}`);return o(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function Ra(h){return(o,l)=>{for(let p=0;p<h.length;p++){const M=h[p](o,l);if(M!=="")return M}return""}}function hr(h,o){var l;const p=h.substr(o).match(/^\s+/);return(l=p&&p[0])!==null&&l!==void 0?l:""}function zf(h,o){const l=h.substr(o,1);return l.match(/^[1-9]$/)?l:""}function ur(h,o){var l;const p=h.substr(o).match(/^[0-9]+/);return(l=p&&p[0])!==null&&l!==void 0?l:""}function Vf(h,o){const l=ur(h,o);if(l!=="")return l;const p=h.substr(o,1);if(o+=1,p!=="-"&&p!=="+")return"";const M=ur(h,o);return M===""?"":p+M}function Pa(h,o){const l=h.substr(o,1);if(o+=1,l.toLowerCase()!=="e")return"";const p=Vf(h,o);return p===""?"":l+p}function Mh(h,o){const l=h.substr(o,1);if(l==="0")return l;const p=zf(h,o);return o+=p.length,p===""?"":p+ur(h,o)}function Gf(h,o){const l=Mh(h,o);if(o+=l.length,l==="")return"";const p=h.substr(o,1);if(o+=p.length,p!==".")return"";const M=ur(h,o);return o+=M.length,l+p+M+Pa(h,o)}function Hf(h,o){const l=h.substr(o,1);if(o+=l.length,l!==".")return"";const p=ur(h,o);return o+=p.length,p===""?"":l+p+Pa(h,o)}function Wf(h,o){const l=Mh(h,o);return o+=l.length,l===""?"":l+Pa(h,o)}const Xf=Ra([Gf,Hf,Wf]);function Yf(h,o){var l;const p=h.substr(o).match(/^[01]+/);return(l=p&&p[0])!==null&&l!==void 0?l:""}function jf(h,o){const l=h.substr(o,2);if(o+=l.length,l.toLowerCase()!=="0b")return"";const p=Yf(h,o);return p===""?"":l+p}function qf(h,o){var l;const p=h.substr(o).match(/^[0-7]+/);return(l=p&&p[0])!==null&&l!==void 0?l:""}function $f(h,o){const l=h.substr(o,2);if(o+=l.length,l.toLowerCase()!=="0o")return"";const p=qf(h,o);return p===""?"":l+p}function Kf(h,o){var l;const p=h.substr(o).match(/^[0-9a-f]+/i);return(l=p&&p[0])!==null&&l!==void 0?l:""}function Zf(h,o){const l=h.substr(o,2);if(o+=l.length,l.toLowerCase()!=="0x")return"";const p=Kf(h,o);return p===""?"":l+p}const Jf=Ra([jf,$f,Zf]),Qf=Ra([Jf,Xf]);function em(h,o){const l=Qf(h,o);return o+=l.length,l===""?null:{evaluable:new Nf(l),cursor:o}}function tm(h,o){const l=h.substr(o,1);if(o+=l.length,l!=="(")return null;const p=Ah(h,o);if(!p)return null;o=p.cursor,o+=hr(h,o).length;const M=h.substr(o,1);return o+=M.length,M!==")"?null:{evaluable:p.evaluable,cursor:o}}function nm(h,o){var l;return(l=em(h,o))!==null&&l!==void 0?l:tm(h,o)}function Eh(h,o){const l=nm(h,o);if(l)return l;const p=h.substr(o,1);if(o+=p.length,p!=="+"&&p!=="-"&&p!=="~")return null;const M=Eh(h,o);return M?(o=M.cursor,{cursor:o,evaluable:new kf(p,M.evaluable)}):null}function im(h,o,l){l+=hr(o,l).length;const p=h.filter(M=>o.startsWith(M,l))[0];return p?(l+=p.length,l+=hr(o,l).length,{cursor:l,operator:p}):null}function sm(h,o){return(l,p)=>{const M=h(l,p);if(!M)return null;p=M.cursor;let B=M.evaluable;for(;;){const W=im(o,l,p);if(!W)break;p=W.cursor;const de=h(l,p);if(!de)return null;p=de.cursor,B=new Ff(W.operator,B,de.evaluable)}return B?{cursor:p,evaluable:B}:null}}const rm=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((h,o)=>sm(h,o),Eh);function Ah(h,o){return o+=hr(h,o).length,rm(h,o)}function om(h){const o=Ah(h,0);return!o||o.cursor+hr(h,o.cursor).length!==h.length?null:o.evaluable}function Jn(h){var o;const l=om(h);return(o=l==null?void 0:l.evaluate())!==null&&o!==void 0?o:null}function Ch(h){if(typeof h=="number")return h;if(typeof h=="string"){const o=Jn(h);if(!m(o))return o}return 0}function am(h){return String(h)}function $t(h){return o=>o.toFixed(Math.max(Math.min(h,20),0))}const lm=$t(0);function Jr(h){return lm(h)+"%"}function Th(h){return String(h)}function Ia(h){return h}function dr({primary:h,secondary:o,forward:l,backward:p}){let M=!1;function B(W){M||(M=!0,W(),M=!1)}h.emitter.on("change",W=>{B(()=>{o.setRawValue(l(h,o),W.options)})}),o.emitter.on("change",W=>{B(()=>{h.setRawValue(p(h,o),W.options)}),B(()=>{o.setRawValue(l(h,o),W.options)})}),B(()=>{o.setRawValue(l(h,o),{forceEmit:!1,last:!0})})}function pn(h,o){const l=h*(o.altKey?.1:1)*(o.shiftKey?10:1);return o.upKey?+l:o.downKey?-l:0}function pr(h){return{altKey:h.altKey,downKey:h.key==="ArrowDown",shiftKey:h.shiftKey,upKey:h.key==="ArrowUp"}}function Qn(h){return{altKey:h.altKey,downKey:h.key==="ArrowLeft",shiftKey:h.shiftKey,upKey:h.key==="ArrowRight"}}function cm(h){return h==="ArrowUp"||h==="ArrowDown"}function Rh(h){return cm(h)||h==="ArrowLeft"||h==="ArrowRight"}function La(h,o){var l,p;const M=o.ownerDocument.defaultView,B=o.getBoundingClientRect();return{x:h.pageX-(((l=M&&M.scrollX)!==null&&l!==void 0?l:0)+B.left),y:h.pageY-(((p=M&&M.scrollY)!==null&&p!==void 0?p:0)+B.top)}}class Wi{constructor(o){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=o,this.emitter=new w,o.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),o.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),o.addEventListener("touchend",this.onTouchEnd_),o.addEventListener("mousedown",this.onMouseDown_)}computePosition_(o){const l=this.elem_.getBoundingClientRect();return{bounds:{width:l.width,height:l.height},point:o?{x:o.x,y:o.y}:null}}onMouseDown_(o){var l;o.preventDefault(),(l=o.currentTarget)===null||l===void 0||l.focus();const p=this.elem_.ownerDocument;p.addEventListener("mousemove",this.onDocumentMouseMove_),p.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:o.altKey,data:this.computePosition_(La(o,this.elem_)),sender:this,shiftKey:o.shiftKey})}onDocumentMouseMove_(o){this.emitter.emit("move",{altKey:o.altKey,data:this.computePosition_(La(o,this.elem_)),sender:this,shiftKey:o.shiftKey})}onDocumentMouseUp_(o){const l=this.elem_.ownerDocument;l.removeEventListener("mousemove",this.onDocumentMouseMove_),l.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:o.altKey,data:this.computePosition_(La(o,this.elem_)),sender:this,shiftKey:o.shiftKey})}onTouchStart_(o){o.preventDefault();const l=o.targetTouches.item(0),p=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:o.altKey,data:this.computePosition_(l?{x:l.clientX-p.left,y:l.clientY-p.top}:void 0),sender:this,shiftKey:o.shiftKey}),this.lastTouch_=l}onTouchMove_(o){const l=o.targetTouches.item(0),p=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:o.altKey,data:this.computePosition_(l?{x:l.clientX-p.left,y:l.clientY-p.top}:void 0),sender:this,shiftKey:o.shiftKey}),this.lastTouch_=l}onTouchEnd_(o){var l;const p=(l=o.targetTouches.item(0))!==null&&l!==void 0?l:this.lastTouch_,M=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:o.altKey,data:this.computePosition_(p?{x:p.clientX-M.left,y:p.clientY-M.top}:void 0),sender:this,shiftKey:o.shiftKey})}}function Pt(h,o,l,p,M){const B=(h-o)/(l-o);return p+B*(M-p)}function Ph(h){return String(h.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function Vt(h,o,l){return Math.min(Math.max(h,o),l)}function Ih(h,o){return(h%o+o)%o}const Cn=S("txt");class hm{constructor(o,l){this.onChange_=this.onChange_.bind(this),this.props_=l.props,this.props_.emitter.on("change",this.onChange_),this.element=o.createElement("div"),this.element.classList.add(Cn(),Cn(void 0,"num")),l.arrayPosition&&this.element.classList.add(Cn(void 0,l.arrayPosition)),l.viewProps.bindClassModifiers(this.element);const p=o.createElement("input");p.classList.add(Cn("i")),p.type="text",l.viewProps.bindDisabled(p),this.element.appendChild(p),this.inputElement=p,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=l.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(Cn()),this.inputElement.classList.add(Cn("i"));const M=o.createElement("div");M.classList.add(Cn("k")),this.element.appendChild(M),this.knobElement=M;const B=o.createElementNS(Ne,"svg");B.classList.add(Cn("g")),this.knobElement.appendChild(B);const W=o.createElementNS(Ne,"path");W.classList.add(Cn("gb")),B.appendChild(W),this.guideBodyElem_=W;const de=o.createElementNS(Ne,"path");de.classList.add(Cn("gh")),B.appendChild(de),this.guideHeadElem_=de;const We=o.createElement("div");We.classList.add(S("tt")()),this.knobElement.appendChild(We),this.tooltipElem_=We,l.value.emitter.on("change",this.onChange_),this.value=l.value,this.refresh()}onDraggingChange_(o){if(o.rawValue===null){this.element.classList.remove(Cn(void 0,"drg"));return}this.element.classList.add(Cn(void 0,"drg"));const l=o.rawValue/this.props_.get("draggingScale"),p=l+(l>0?-1:l<0?1:0),M=Vt(-p,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${p+M},0 L${p},4 L${p+M},8`,`M ${l},-1 L${l},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${l},4`);const B=this.props_.get("formatter");this.tooltipElem_.textContent=B(this.value.rawValue),this.tooltipElem_.style.left=`${l}px`}refresh(){const o=this.props_.get("formatter");this.inputElement.value=o(this.value.rawValue)}onChange_(){this.refresh()}}class fr{constructor(o,l){var p;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=l.baseStep,this.parser_=l.parser,this.props=l.props,this.sliderProps_=(p=l.sliderProps)!==null&&p!==void 0?p:null,this.value=l.value,this.viewProps=l.viewProps,this.dragging_=ne(null),this.view=new hm(o,{arrayPosition:l.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const M=new Wi(this.view.knobElement);M.emitter.on("down",this.onPointerDown_),M.emitter.on("move",this.onPointerMove_),M.emitter.on("up",this.onPointerUp_)}constrainValue_(o){var l,p;const M=(l=this.sliderProps_)===null||l===void 0?void 0:l.get("minValue"),B=(p=this.sliderProps_)===null||p===void 0?void 0:p.get("maxValue");let W=o;return M!==void 0&&(W=Math.max(W,M)),B!==void 0&&(W=Math.min(W,B)),W}onInputChange_(o){const p=o.currentTarget.value,M=this.parser_(p);m(M)||(this.value.rawValue=this.constrainValue_(M)),this.view.refresh()}onInputKeyDown_(o){const l=pn(this.baseStep_,pr(o));l!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+l),{forceEmit:!1,last:!1})}onInputKeyUp_(o){pn(this.baseStep_,pr(o))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(o){if(!o.point)return null;const l=o.point.x-o.bounds.width/2;return this.constrainValue_(this.originRawValue_+l*this.props.get("draggingScale"))}onPointerMove_(o){const l=this.computeDraggingValue_(o.data);l!==null&&(this.value.setRawValue(l,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(o){const l=this.computeDraggingValue_(o.data);l!==null&&(this.value.setRawValue(l,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const Da=S("sld");class um{constructor(o,l){this.onChange_=this.onChange_.bind(this),this.props_=l.props,this.props_.emitter.on("change",this.onChange_),this.element=o.createElement("div"),this.element.classList.add(Da()),l.viewProps.bindClassModifiers(this.element);const p=o.createElement("div");p.classList.add(Da("t")),l.viewProps.bindTabIndex(p),this.element.appendChild(p),this.trackElement=p;const M=o.createElement("div");M.classList.add(Da("k")),this.trackElement.appendChild(M),this.knobElement=M,l.value.emitter.on("change",this.onChange_),this.value=l.value,this.update_()}update_(){const o=Vt(Pt(this.value.rawValue,this.props_.get("minValue"),this.props_.get("maxValue"),0,100),0,100);this.knobElement.style.width=`${o}%`}onChange_(){this.update_()}}class dm{constructor(o,l){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=l.baseStep,this.value=l.value,this.viewProps=l.viewProps,this.props=l.props,this.view=new um(o,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Wi(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(o,l){o.point&&this.value.setRawValue(Pt(Vt(o.point.x,0,o.bounds.width),0,o.bounds.width,this.props.get("minValue"),this.props.get("maxValue")),l)}onPointerDownOrMove_(o){this.handlePointerEvent_(o.data,{forceEmit:!1,last:!1})}onPointerUp_(o){this.handlePointerEvent_(o.data,{forceEmit:!0,last:!0})}onKeyDown_(o){const l=pn(this.baseStep_,Qn(o));l!==0&&this.value.setRawValue(this.value.rawValue+l,{forceEmit:!1,last:!1})}onKeyUp_(o){pn(this.baseStep_,Qn(o))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Ua=S("sldtxt");class pm{constructor(o,l){this.element=o.createElement("div"),this.element.classList.add(Ua());const p=o.createElement("div");p.classList.add(Ua("s")),this.sliderView_=l.sliderView,p.appendChild(this.sliderView_.element),this.element.appendChild(p);const M=o.createElement("div");M.classList.add(Ua("t")),this.textView_=l.textView,M.appendChild(this.textView_.element),this.element.appendChild(M)}}class Na{constructor(o,l){this.value=l.value,this.viewProps=l.viewProps,this.sliderC_=new dm(o,{baseStep:l.baseStep,props:l.sliderProps,value:l.value,viewProps:this.viewProps}),this.textC_=new fr(o,{baseStep:l.baseStep,parser:l.parser,props:l.textProps,sliderProps:l.sliderProps,value:l.value,viewProps:l.viewProps}),this.view=new pm(o,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}}function mr(h,o){h.write(o)}function Qr(h){const o=j;if(Array.isArray(h))return o.required.array(o.required.object({text:o.required.string,value:o.required.raw}))(h).value;if(typeof h=="object")return o.required.raw(h).value}function Lh(h){if(h==="inline"||h==="popup")return h}function _i(h){const o=j;return o.required.object({max:o.optional.number,min:o.optional.number,step:o.optional.number})(h).value}function Dh(h){if(Array.isArray(h))return h;const o=[];return Object.keys(h).forEach(l=>{o.push({text:l,value:h[l]})}),o}function Oa(h){return m(h)?null:new lr(Dh(h))}function fm(h){const o=h?qt(h,Kr):null;return o?o.step:null}function eo(h,o){const l=h&&qt(h,Kr);return l?Ph(l.step):Math.max(Ph(o),2)}function ms(h){const o=fm(h);return o??1}function gs(h,o){var l;const p=h&&qt(h,Kr),M=Math.abs((l=p==null?void 0:p.step)!==null&&l!==void 0?l:o);return M===0?.1:Math.pow(10,Math.floor(Math.log10(M))-1)}const to=S("ckb");class mm{constructor(o,l){this.onValueChange_=this.onValueChange_.bind(this),this.element=o.createElement("div"),this.element.classList.add(to()),l.viewProps.bindClassModifiers(this.element);const p=o.createElement("label");p.classList.add(to("l")),this.element.appendChild(p);const M=o.createElement("input");M.classList.add(to("i")),M.type="checkbox",p.appendChild(M),this.inputElement=M,l.viewProps.bindDisabled(this.inputElement);const B=o.createElement("div");B.classList.add(to("w")),p.appendChild(B);const W=se(o,"check");B.appendChild(W),l.value.emitter.on("change",this.onValueChange_),this.value=l.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class gm{constructor(o,l){this.onInputChange_=this.onInputChange_.bind(this),this.value=l.value,this.viewProps=l.viewProps,this.view=new mm(o,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(o){const l=o.currentTarget;this.value.rawValue=l.checked}}function vm(h){const o=[],l=Oa(h.options);return l&&o.push(l),new Zn(o)}const _m={id:"input-bool",type:"input",accept:(h,o)=>{if(typeof h!="boolean")return null;const p=ae(o,{options:j.optional.custom(Qr)});return p?{initialValue:h,params:p}:null},binding:{reader:h=>wh,constraint:h=>vm(h.params),writer:h=>mr},controller:h=>{const o=h.document,l=h.value,p=h.constraint,M=p&&qt(p,lr);return M?new cr(o,{props:new z({options:M.values.value("options")}),value:l,viewProps:h.viewProps}):new gm(o,{value:l,viewProps:h.viewProps})}},Xi=S("col");class xm{constructor(o,l){this.element=o.createElement("div"),this.element.classList.add(Xi()),l.foldable.bindExpandedClass(this.element,Xi(void 0,"expanded")),U(l.foldable,"completed",C(this.element,Xi(void 0,"cpl")));const p=o.createElement("div");p.classList.add(Xi("h")),this.element.appendChild(p);const M=o.createElement("div");M.classList.add(Xi("s")),p.appendChild(M),this.swatchElement=M;const B=o.createElement("div");if(B.classList.add(Xi("t")),p.appendChild(B),this.textElement=B,l.pickerLayout==="inline"){const W=o.createElement("div");W.classList.add(Xi("p")),this.element.appendChild(W),this.pickerElement=W}else this.pickerElement=null}}function bm(h,o,l){const p=Vt(h/255,0,1),M=Vt(o/255,0,1),B=Vt(l/255,0,1),W=Math.max(p,M,B),de=Math.min(p,M,B),We=W-de;let Ye=0,gt=0;const xt=(de+W)/2;return We!==0&&(gt=We/(1-Math.abs(W+de-1)),p===W?Ye=(M-B)/We:M===W?Ye=2+(B-p)/We:Ye=4+(p-M)/We,Ye=Ye/6+(Ye<0?1:0)),[Ye*360,gt*100,xt*100]}function ym(h,o,l){const p=(h%360+360)%360,M=Vt(o/100,0,1),B=Vt(l/100,0,1),W=(1-Math.abs(2*B-1))*M,de=W*(1-Math.abs(p/60%2-1)),We=B-W/2;let Ye,gt,xt;return p>=0&&p<60?[Ye,gt,xt]=[W,de,0]:p>=60&&p<120?[Ye,gt,xt]=[de,W,0]:p>=120&&p<180?[Ye,gt,xt]=[0,W,de]:p>=180&&p<240?[Ye,gt,xt]=[0,de,W]:p>=240&&p<300?[Ye,gt,xt]=[de,0,W]:[Ye,gt,xt]=[W,0,de],[(Ye+We)*255,(gt+We)*255,(xt+We)*255]}function wm(h,o,l){const p=Vt(h/255,0,1),M=Vt(o/255,0,1),B=Vt(l/255,0,1),W=Math.max(p,M,B),de=Math.min(p,M,B),We=W-de;let Ye;We===0?Ye=0:W===p?Ye=60*(((M-B)/We%6+6)%6):W===M?Ye=60*((B-p)/We+2):Ye=60*((p-M)/We+4);const gt=W===0?0:We/W,xt=W;return[Ye,gt*100,xt*100]}function Uh(h,o,l){const p=Ih(h,360),M=Vt(o/100,0,1),B=Vt(l/100,0,1),W=B*M,de=W*(1-Math.abs(p/60%2-1)),We=B-W;let Ye,gt,xt;return p>=0&&p<60?[Ye,gt,xt]=[W,de,0]:p>=60&&p<120?[Ye,gt,xt]=[de,W,0]:p>=120&&p<180?[Ye,gt,xt]=[0,W,de]:p>=180&&p<240?[Ye,gt,xt]=[0,de,W]:p>=240&&p<300?[Ye,gt,xt]=[de,0,W]:[Ye,gt,xt]=[W,0,de],[(Ye+We)*255,(gt+We)*255,(xt+We)*255]}function Sm(h,o,l){const p=l+o*(100-Math.abs(2*l-100))/200;return[h,p!==0?o*(100-Math.abs(2*l-100))/p:0,l+o*(100-Math.abs(2*l-100))/(2*100)]}function Mm(h,o,l){const p=100-Math.abs(l*(200-o)/100-100);return[h,p!==0?o*l/p:0,l*(200-o)/(2*100)]}function Yi(h){return[h[0],h[1],h[2]]}function Nh(h,o){return[h[0],h[1],h[2],o]}const Em={hsl:{hsl:(h,o,l)=>[h,o,l],hsv:Sm,rgb:ym},hsv:{hsl:Mm,hsv:(h,o,l)=>[h,o,l],rgb:Uh},rgb:{hsl:bm,hsv:wm,rgb:(h,o,l)=>[h,o,l]}};function no(h,o){return[o==="float"?1:h==="rgb"?255:360,o==="float"?1:h==="rgb"?255:100,o==="float"?1:h==="rgb"?255:100]}function Am(h,o){return h===o?o:Ih(h,o)}function Cm(h,o,l){var p;const M=no(o,l);return[o==="rgb"?Vt(h[0],0,M[0]):Am(h[0],M[0]),Vt(h[1],0,M[1]),Vt(h[2],0,M[2]),Vt((p=h[3])!==null&&p!==void 0?p:1,0,1)]}function Oh(h,o,l,p){const M=no(o,l),B=no(o,p);return h.map((W,de)=>W/M[de]*B[de])}function Tm(h,o,l){const p=Oh(h,o.mode,o.type,"int"),M=Em[o.mode][l.mode](...p);return Oh(M,l.mode,"int",l.type)}function io(h,o){return typeof h!="object"||m(h)?!1:o in h&&typeof h[o]=="number"}class at{static black(o="int"){return new at([0,0,0],"rgb",o)}static fromObject(o,l="int"){const p="a"in o?[o.r,o.g,o.b,o.a]:[o.r,o.g,o.b];return new at(p,"rgb",l)}static toRgbaObject(o,l="int"){return o.toRgbaObject(l)}static isRgbColorObject(o){return io(o,"r")&&io(o,"g")&&io(o,"b")}static isRgbaColorObject(o){return this.isRgbColorObject(o)&&io(o,"a")}static isColorObject(o){return this.isRgbColorObject(o)}static equals(o,l){if(o.mode!==l.mode)return!1;const p=o.comps_,M=l.comps_;for(let B=0;B<p.length;B++)if(p[B]!==M[B])return!1;return!0}constructor(o,l,p="int"){this.mode=l,this.type=p,this.comps_=Cm(o,l,p)}getComponents(o,l="int"){return Nh(Tm(Yi(this.comps_),{mode:this.mode,type:this.type},{mode:o??this.mode,type:l}),this.comps_[3])}toRgbaObject(o="int"){const l=this.getComponents("rgb",o);return{r:l[0],g:l[1],b:l[2],a:l[3]}}}const xi=S("colp");class Rm{constructor(o,l){this.alphaViews_=null,this.element=o.createElement("div"),this.element.classList.add(xi()),l.viewProps.bindClassModifiers(this.element);const p=o.createElement("div");p.classList.add(xi("hsv"));const M=o.createElement("div");M.classList.add(xi("sv")),this.svPaletteView_=l.svPaletteView,M.appendChild(this.svPaletteView_.element),p.appendChild(M);const B=o.createElement("div");B.classList.add(xi("h")),this.hPaletteView_=l.hPaletteView,B.appendChild(this.hPaletteView_.element),p.appendChild(B),this.element.appendChild(p);const W=o.createElement("div");if(W.classList.add(xi("rgb")),this.textView_=l.textView,W.appendChild(this.textView_.element),this.element.appendChild(W),l.alphaViews){this.alphaViews_={palette:l.alphaViews.palette,text:l.alphaViews.text};const de=o.createElement("div");de.classList.add(xi("a"));const We=o.createElement("div");We.classList.add(xi("ap")),We.appendChild(this.alphaViews_.palette.element),de.appendChild(We);const Ye=o.createElement("div");Ye.classList.add(xi("at")),Ye.appendChild(this.alphaViews_.text.element),de.appendChild(Ye),this.element.appendChild(de)}}get allFocusableElements(){const o=[this.svPaletteView_.element,this.hPaletteView_.element,this.textView_.modeSelectElement,...this.textView_.textViews.map(l=>l.inputElement)];return this.alphaViews_&&o.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),o}}function Pm(h){return h==="int"?"int":h==="float"?"float":void 0}function Fa(h){const o=j;return ae(h,{alpha:o.optional.boolean,color:o.optional.object({alpha:o.optional.boolean,type:o.optional.custom(Pm)}),expanded:o.optional.boolean,picker:o.optional.custom(Lh)})}function ji(h){return h?.1:1}function qi(h){var o;return(o=h.color)===null||o===void 0?void 0:o.type}function Im(h,o){return h.alpha===o.alpha&&h.mode===o.mode&&h.notation===o.notation&&h.type===o.type}function Tn(h,o){const l=h.match(/^(.+)%$/);return Math.min(l?parseFloat(l[1])*.01*o:parseFloat(h),o)}const Lm={deg:h=>h,grad:h=>h*360/400,rad:h=>h*360/(2*Math.PI),turn:h=>h*360};function Fh(h){const o=h.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!o)return parseFloat(h);const l=parseFloat(o[1]),p=o[2];return Lm[p](l)}function Bh(h){const o=h.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!o)return null;const l=[Tn(o[1],255),Tn(o[2],255),Tn(o[3],255)];return isNaN(l[0])||isNaN(l[1])||isNaN(l[2])?null:l}function kh(h){return o=>{const l=Bh(o);return l?new at(l,"rgb",h):null}}function zh(h){const o=h.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!o)return null;const l=[Tn(o[1],255),Tn(o[2],255),Tn(o[3],255),Tn(o[4],1)];return isNaN(l[0])||isNaN(l[1])||isNaN(l[2])||isNaN(l[3])?null:l}function Vh(h){return o=>{const l=zh(o);return l?new at(l,"rgb",h):null}}function Gh(h){const o=h.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!o)return null;const l=[Fh(o[1]),Tn(o[2],100),Tn(o[3],100)];return isNaN(l[0])||isNaN(l[1])||isNaN(l[2])?null:l}function Hh(h){return o=>{const l=Gh(o);return l?new at(l,"hsl",h):null}}function Wh(h){const o=h.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!o)return null;const l=[Fh(o[1]),Tn(o[2],100),Tn(o[3],100),Tn(o[4],1)];return isNaN(l[0])||isNaN(l[1])||isNaN(l[2])||isNaN(l[3])?null:l}function Xh(h){return o=>{const l=Wh(o);return l?new at(l,"hsl",h):null}}function Yh(h){const o=h.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(o)return[parseInt(o[1]+o[1],16),parseInt(o[2]+o[2],16),parseInt(o[3]+o[3],16)];const l=h.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return l?[parseInt(l[1],16),parseInt(l[2],16),parseInt(l[3],16)]:null}function Dm(h){const o=Yh(h);return o?new at(o,"rgb","int"):null}function jh(h){const o=h.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(o)return[parseInt(o[1]+o[1],16),parseInt(o[2]+o[2],16),parseInt(o[3]+o[3],16),Pt(parseInt(o[4]+o[4],16),0,255,0,1)];const l=h.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return l?[parseInt(l[1],16),parseInt(l[2],16),parseInt(l[3],16),Pt(parseInt(l[4],16),0,255,0,1)]:null}function Um(h){const o=jh(h);return o?new at(o,"rgb","int"):null}function qh(h){const o=h.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!o)return null;const l=[parseFloat(o[1]),parseFloat(o[2]),parseFloat(o[3])];return isNaN(l[0])||isNaN(l[1])||isNaN(l[2])?null:l}function $h(h){return o=>{const l=qh(o);return l?new at(l,"rgb",h):null}}function Kh(h){const o=h.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!o)return null;const l=[parseFloat(o[1]),parseFloat(o[2]),parseFloat(o[3]),parseFloat(o[4])];return isNaN(l[0])||isNaN(l[1])||isNaN(l[2])||isNaN(l[3])?null:l}function Zh(h){return o=>{const l=Kh(o);return l?new at(l,"rgb",h):null}}const Nm=[{parser:Yh,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:jh,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:Bh,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:zh,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:Gh,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:Wh,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:qh,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:Kh,result:{alpha:!0,mode:"rgb",notation:"object"}}];function Om(h){return Nm.reduce((o,{parser:l,result:p})=>o||(l(h)?p:null),null)}function Ba(h,o="int"){const l=Om(h);return l?l.notation==="hex"&&o!=="float"?Object.assign(Object.assign({},l),{type:"int"}):l.notation==="func"?Object.assign(Object.assign({},l),{type:o}):null:null}const Jh={int:[Dm,Um,kh("int"),Vh("int"),Hh("int"),Xh("int"),$h("int"),Zh("int")],float:[kh("float"),Vh("float"),Hh("float"),Xh("float"),$h("float"),Zh("float")]};function Fm(h){const o=Jh[h];return l=>{if(typeof l!="string")return at.black(h);const p=o.reduce((M,B)=>M||B(l),null);return p??at.black(h)}}function ka(h){const o=Jh[h];return l=>o.reduce((p,M)=>p||M(l),null)}function Qh(h){const o=Vt(Math.floor(h),0,255).toString(16);return o.length===1?`0${o}`:o}function eu(h,o="#"){const l=Yi(h.getComponents("rgb")).map(Qh).join("");return`${o}${l}`}function za(h,o="#"){const l=h.getComponents("rgb"),p=[l[0],l[1],l[2],l[3]*255].map(Qh).join("");return`${o}${p}`}function tu(h,o){const l=$t(o==="float"?2:0);return`rgb(${Yi(h.getComponents("rgb",o)).map(M=>l(M)).join(", ")})`}function Bm(h){return o=>tu(o,h)}function so(h,o){const l=$t(2),p=$t(o==="float"?2:0);return`rgba(${h.getComponents("rgb",o).map((B,W)=>(W===3?l:p)(B)).join(", ")})`}function km(h){return o=>so(o,h)}function zm(h){const o=[$t(0),Jr,Jr];return`hsl(${Yi(h.getComponents("hsl")).map((p,M)=>o[M](p)).join(", ")})`}function Vm(h){const o=[$t(0),Jr,Jr,$t(2)];return`hsla(${h.getComponents("hsl").map((p,M)=>o[M](p)).join(", ")})`}function nu(h,o){const l=$t(o==="float"?2:0),p=["r","g","b"];return`{${Yi(h.getComponents("rgb",o)).map((B,W)=>`${p[W]}: ${l(B)}`).join(", ")}}`}function Gm(h){return o=>nu(o,h)}function iu(h,o){const l=$t(2),p=$t(o==="float"?2:0),M=["r","g","b","a"];return`{${h.getComponents("rgb",o).map((W,de)=>{const We=de===3?l:p;return`${M[de]}: ${We(W)}`}).join(", ")}}`}function Hm(h){return o=>iu(o,h)}const Wm=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:eu},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:za},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:zm},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:Vm},...["int","float"].reduce((h,o)=>[...h,{format:{alpha:!1,mode:"rgb",notation:"func",type:o},stringifier:Bm(o)},{format:{alpha:!0,mode:"rgb",notation:"func",type:o},stringifier:km(o)},{format:{alpha:!1,mode:"rgb",notation:"object",type:o},stringifier:Gm(o)},{format:{alpha:!0,mode:"rgb",notation:"object",type:o},stringifier:Hm(o)}],[])];function Va(h){return Wm.reduce((o,l)=>o||(Im(l.format,h)?l.stringifier:null),null)}const gr=S("apl");class Xm{constructor(o,l){this.onValueChange_=this.onValueChange_.bind(this),this.value=l.value,this.value.emitter.on("change",this.onValueChange_),this.element=o.createElement("div"),this.element.classList.add(gr()),l.viewProps.bindClassModifiers(this.element),l.viewProps.bindTabIndex(this.element);const p=o.createElement("div");p.classList.add(gr("b")),this.element.appendChild(p);const M=o.createElement("div");M.classList.add(gr("c")),p.appendChild(M),this.colorElem_=M;const B=o.createElement("div");B.classList.add(gr("m")),this.element.appendChild(B),this.markerElem_=B;const W=o.createElement("div");W.classList.add(gr("p")),this.markerElem_.appendChild(W),this.previewElem_=W,this.update_()}update_(){const o=this.value.rawValue,l=o.getComponents("rgb"),p=new at([l[0],l[1],l[2],0],"rgb"),M=new at([l[0],l[1],l[2],255],"rgb"),B=["to right",so(p),so(M)];this.colorElem_.style.background=`linear-gradient(${B.join(",")})`,this.previewElem_.style.backgroundColor=so(o);const W=Pt(l[3],0,1,0,100);this.markerElem_.style.left=`${W}%`}onValueChange_(){this.update_()}}class Ym{constructor(o,l){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=l.value,this.viewProps=l.viewProps,this.view=new Xm(o,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Wi(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(o,l){if(!o.point)return;const p=o.point.x/o.bounds.width,M=this.value.rawValue,[B,W,de]=M.getComponents("hsv");this.value.setRawValue(new at([B,W,de,p],"hsv"),l)}onPointerDown_(o){this.handlePointerEvent_(o.data,{forceEmit:!1,last:!1})}onPointerMove_(o){this.handlePointerEvent_(o.data,{forceEmit:!1,last:!1})}onPointerUp_(o){this.handlePointerEvent_(o.data,{forceEmit:!0,last:!0})}onKeyDown_(o){const l=pn(ji(!0),Qn(o));if(l===0)return;const p=this.value.rawValue,[M,B,W,de]=p.getComponents("hsv");this.value.setRawValue(new at([M,B,W,de+l],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(o){pn(ji(!0),Qn(o))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const vs=S("coltxt");function jm(h){const o=h.createElement("select"),l=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"}];return o.appendChild(l.reduce((p,M)=>{const B=h.createElement("option");return B.textContent=M.text,B.value=M.value,p.appendChild(B),p},h.createDocumentFragment())),o}class qm{constructor(o,l){this.element=o.createElement("div"),this.element.classList.add(vs()),l.viewProps.bindClassModifiers(this.element);const p=o.createElement("div");p.classList.add(vs("m")),this.modeElem_=jm(o),this.modeElem_.classList.add(vs("ms")),p.appendChild(this.modeSelectElement),l.viewProps.bindDisabled(this.modeElem_);const M=o.createElement("div");M.classList.add(vs("mm")),M.appendChild(se(o,"dropdown")),p.appendChild(M),this.element.appendChild(p);const B=o.createElement("div");B.classList.add(vs("w")),this.element.appendChild(B),this.textsElem_=B,this.textViews_=l.textViews,this.applyTextViews_(),O(l.colorMode,W=>{this.modeElem_.value=W})}get modeSelectElement(){return this.modeElem_}get textViews(){return this.textViews_}set textViews(o){this.textViews_=o,this.applyTextViews_()}applyTextViews_(){Ue(this.textsElem_);const o=this.element.ownerDocument;this.textViews_.forEach(l=>{const p=o.createElement("div");p.classList.add(vs("c")),p.appendChild(l.element),this.textsElem_.appendChild(p)})}}function $m(h){return $t(h==="float"?2:0)}function Km(h,o,l){const p=no(h,o)[l];return new fs({min:0,max:p})}function Ga(h,o,l){return new fr(h,{arrayPosition:l===0?"fst":l===2?"lst":"mid",baseStep:ji(!1),parser:o.parser,props:z.fromObject({draggingScale:o.colorType==="float"?.01:1,formatter:$m(o.colorType)}),value:ne(0,{constraint:Km(o.colorMode,o.colorType,l)}),viewProps:o.viewProps})}class Zm{constructor(o,l){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=l.colorType,this.parser_=l.parser,this.value=l.value,this.viewProps=l.viewProps,this.colorMode=ne(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(o),this.view=new qm(o,{colorMode:this.colorMode,textViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view],viewProps:this.viewProps}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(o){const l={colorMode:this.colorMode.rawValue,colorType:this.colorType_,parser:this.parser_,viewProps:this.viewProps},p=[Ga(o,l,0),Ga(o,l,1),Ga(o,l,2)];return p.forEach((M,B)=>{dr({primary:this.value,secondary:M.value,forward:W=>W.rawValue.getComponents(this.colorMode.rawValue,this.colorType_)[B],backward:(W,de)=>{const We=this.colorMode.rawValue,Ye=W.rawValue.getComponents(We,this.colorType_);return Ye[B]=de.rawValue,new at(Nh(Yi(Ye),Ye[3]),We,this.colorType_)}})}),p}onModeSelectChange_(o){const l=o.currentTarget;this.colorMode.rawValue=l.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.textViews=[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}}const Ha=S("hpl");class Jm{constructor(o,l){this.onValueChange_=this.onValueChange_.bind(this),this.value=l.value,this.value.emitter.on("change",this.onValueChange_),this.element=o.createElement("div"),this.element.classList.add(Ha()),l.viewProps.bindClassModifiers(this.element),l.viewProps.bindTabIndex(this.element);const p=o.createElement("div");p.classList.add(Ha("c")),this.element.appendChild(p);const M=o.createElement("div");M.classList.add(Ha("m")),this.element.appendChild(M),this.markerElem_=M,this.update_()}update_(){const o=this.value.rawValue,[l]=o.getComponents("hsv");this.markerElem_.style.backgroundColor=tu(new at([l,100,100],"hsv"));const p=Pt(l,0,360,0,100);this.markerElem_.style.left=`${p}%`}onValueChange_(){this.update_()}}class Qm{constructor(o,l){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=l.value,this.viewProps=l.viewProps,this.view=new Jm(o,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Wi(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(o,l){if(!o.point)return;const p=Pt(Vt(o.point.x,0,o.bounds.width),0,o.bounds.width,0,360),M=this.value.rawValue,[,B,W,de]=M.getComponents("hsv");this.value.setRawValue(new at([p,B,W,de],"hsv"),l)}onPointerDown_(o){this.handlePointerEvent_(o.data,{forceEmit:!1,last:!1})}onPointerMove_(o){this.handlePointerEvent_(o.data,{forceEmit:!1,last:!1})}onPointerUp_(o){this.handlePointerEvent_(o.data,{forceEmit:!0,last:!0})}onKeyDown_(o){const l=pn(ji(!1),Qn(o));if(l===0)return;const p=this.value.rawValue,[M,B,W,de]=p.getComponents("hsv");this.value.setRawValue(new at([M+l,B,W,de],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(o){pn(ji(!1),Qn(o))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Wa=S("svp"),su=64;class eg{constructor(o,l){this.onValueChange_=this.onValueChange_.bind(this),this.value=l.value,this.value.emitter.on("change",this.onValueChange_),this.element=o.createElement("div"),this.element.classList.add(Wa()),l.viewProps.bindClassModifiers(this.element),l.viewProps.bindTabIndex(this.element);const p=o.createElement("canvas");p.height=su,p.width=su,p.classList.add(Wa("c")),this.element.appendChild(p),this.canvasElement=p;const M=o.createElement("div");M.classList.add(Wa("m")),this.element.appendChild(M),this.markerElem_=M,this.update_()}update_(){const o=T(this.canvasElement);if(!o)return;const p=this.value.rawValue.getComponents("hsv"),M=this.canvasElement.width,B=this.canvasElement.height,W=o.getImageData(0,0,M,B),de=W.data;for(let gt=0;gt<B;gt++)for(let xt=0;xt<M;xt++){const $i=Pt(xt,0,M,0,100),_r=Pt(gt,0,B,100,0),xr=Uh(p[0],$i,_r),ro=(gt*M+xt)*4;de[ro]=xr[0],de[ro+1]=xr[1],de[ro+2]=xr[2],de[ro+3]=255}o.putImageData(W,0,0);const We=Pt(p[1],0,100,0,100);this.markerElem_.style.left=`${We}%`;const Ye=Pt(p[2],0,100,100,0);this.markerElem_.style.top=`${Ye}%`}onValueChange_(){this.update_()}}class tg{constructor(o,l){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=l.value,this.viewProps=l.viewProps,this.view=new eg(o,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Wi(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(o,l){if(!o.point)return;const p=Pt(o.point.x,0,o.bounds.width,0,100),M=Pt(o.point.y,0,o.bounds.height,100,0),[B,,,W]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new at([B,p,M,W],"hsv"),l)}onPointerDown_(o){this.handlePointerEvent_(o.data,{forceEmit:!1,last:!1})}onPointerMove_(o){this.handlePointerEvent_(o.data,{forceEmit:!1,last:!1})}onPointerUp_(o){this.handlePointerEvent_(o.data,{forceEmit:!0,last:!0})}onKeyDown_(o){Rh(o.key)&&o.preventDefault();const[l,p,M,B]=this.value.rawValue.getComponents("hsv"),W=ji(!1),de=pn(W,Qn(o)),We=pn(W,pr(o));de===0&&We===0||this.value.setRawValue(new at([l,p+de,M+We,B],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(o){const l=ji(!1),p=pn(l,Qn(o)),M=pn(l,pr(o));p===0&&M===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class ng{constructor(o,l){this.value=l.value,this.viewProps=l.viewProps,this.hPaletteC_=new Qm(o,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new tg(o,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=l.supportsAlpha?{palette:new Ym(o,{value:this.value,viewProps:this.viewProps}),text:new fr(o,{parser:Jn,baseStep:.1,props:z.fromObject({draggingScale:.01,formatter:$t(2)}),value:ne(0,{constraint:new fs({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&dr({primary:this.value,secondary:this.alphaIcs_.text.value,forward:p=>p.rawValue.getComponents()[3],backward:(p,M)=>{const B=p.rawValue.getComponents();return B[3]=M.rawValue,new at(B,p.rawValue.mode)}}),this.textC_=new Zm(o,{colorType:l.colorType,parser:Jn,value:this.value,viewProps:this.viewProps}),this.view=new Rm(o,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:l.supportsAlpha,svPaletteView:this.svPaletteC_.view,textView:this.textC_.view,viewProps:this.viewProps})}get textController(){return this.textC_}}const Xa=S("colsw");class ig{constructor(o,l){this.onValueChange_=this.onValueChange_.bind(this),l.value.emitter.on("change",this.onValueChange_),this.value=l.value,this.element=o.createElement("div"),this.element.classList.add(Xa()),l.viewProps.bindClassModifiers(this.element);const p=o.createElement("div");p.classList.add(Xa("sw")),this.element.appendChild(p),this.swatchElem_=p;const M=o.createElement("button");M.classList.add(Xa("b")),l.viewProps.bindDisabled(M),this.element.appendChild(M),this.buttonElement=M,this.update_()}update_(){const o=this.value.rawValue;this.swatchElem_.style.backgroundColor=za(o)}onValueChange_(){this.update_()}}class sg{constructor(o,l){this.value=l.value,this.viewProps=l.viewProps,this.view=new ig(o,{value:this.value,viewProps:this.viewProps})}}class Ya{constructor(o,l){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=l.value,this.viewProps=l.viewProps,this.foldable_=Ke.create(l.expanded),this.swatchC_=new sg(o,{value:this.value,viewProps:this.viewProps});const p=this.swatchC_.view.buttonElement;p.addEventListener("blur",this.onButtonBlur_),p.addEventListener("click",this.onButtonClick_),this.textC_=new Zr(o,{parser:l.parser,props:z.fromObject({formatter:l.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new xm(o,{foldable:this.foldable_,pickerLayout:l.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=l.pickerLayout==="popup"?new bh(o,{viewProps:this.viewProps}):null;const M=new ng(o,{colorType:l.colorType,supportsAlpha:l.supportsAlpha,value:this.value,viewProps:this.viewProps});M.view.allFocusableElements.forEach(B=>{B.addEventListener("blur",this.onPopupChildBlur_),B.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=M,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(M.view.element),dr({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:B=>B.rawValue,backward:(B,W)=>W.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),xe(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(o){if(!this.popC_)return;const l=this.view.element,p=o.relatedTarget;(!p||!l.contains(p))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(o){if(!this.popC_)return;const l=this.popC_.view.element,p=Ce(o);p&&l.contains(p)||p&&p===this.swatchC_.view.buttonElement&&!pt(l.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(o){this.popC_?o.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&o.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function rg(h,o){return at.isColorObject(h)?at.fromObject(h,o):at.black(o)}function og(h){return Yi(h.getComponents("rgb")).reduce((o,l)=>o<<8|Math.floor(l)&255,0)}function ag(h){return h.getComponents("rgb").reduce((o,l,p)=>{const M=Math.floor(p===3?l*255:l)&255;return o<<8|M},0)>>>0}function lg(h){return new at([h>>16&255,h>>8&255,h&255],"rgb")}function cg(h){return new at([h>>24&255,h>>16&255,h>>8&255,Pt(h&255,0,255,0,1)],"rgb")}function hg(h){return typeof h!="number"?at.black():lg(h)}function ug(h){return typeof h!="number"?at.black():cg(h)}function dg(h){const o=Va(h);return o?(l,p)=>{mr(l,o(p))}:null}function pg(h){const o=h?ag:og;return(l,p)=>{mr(l,o(p))}}function fg(h,o,l){const p=o.toRgbaObject(l);h.writeProperty("r",p.r),h.writeProperty("g",p.g),h.writeProperty("b",p.b),h.writeProperty("a",p.a)}function mg(h,o,l){const p=o.toRgbaObject(l);h.writeProperty("r",p.r),h.writeProperty("g",p.g),h.writeProperty("b",p.b)}function gg(h,o){return(l,p)=>{h?fg(l,p,o):mg(l,p,o)}}function ja(h){var o;return!!(h!=null&&h.alpha||!((o=h==null?void 0:h.color)===null||o===void 0)&&o.alpha)}function vg(h){return h?o=>za(o,"0x"):o=>eu(o,"0x")}function _g(h){return"color"in h||"view"in h&&h.view==="color"}const xg={id:"input-color-number",type:"input",accept:(h,o)=>{if(typeof h!="number"||!_g(o))return null;const l=Fa(o);return l?{initialValue:h,params:l}:null},binding:{reader:h=>ja(h.params)?ug:hg,equals:at.equals,writer:h=>pg(ja(h.params))},controller:h=>{const o=ja(h.params),l="expanded"in h.params?h.params.expanded:void 0,p="picker"in h.params?h.params.picker:void 0;return new Ya(h.document,{colorType:"int",expanded:l??!1,formatter:vg(o),parser:ka("int"),pickerLayout:p??"popup",supportsAlpha:o,value:h.value,viewProps:h.viewProps})}};function bg(h){return at.isRgbaColorObject(h)}function yg(h){return o=>rg(o,h)}function wg(h,o){return l=>h?iu(l,o):nu(l,o)}const Sg={id:"input-color-object",type:"input",accept:(h,o)=>{if(!at.isColorObject(h))return null;const l=Fa(o);return l?{initialValue:h,params:l}:null},binding:{reader:h=>yg(qi(h.params)),equals:at.equals,writer:h=>gg(bg(h.initialValue),qi(h.params))},controller:h=>{var o;const l=at.isRgbaColorObject(h.initialValue),p="expanded"in h.params?h.params.expanded:void 0,M="picker"in h.params?h.params.picker:void 0,B=(o=qi(h.params))!==null&&o!==void 0?o:"int";return new Ya(h.document,{colorType:B,expanded:p??!1,formatter:wg(l,B),parser:ka(B),pickerLayout:M??"popup",supportsAlpha:l,value:h.value,viewProps:h.viewProps})}},Mg={id:"input-color-string",type:"input",accept:(h,o)=>{if(typeof h!="string"||"view"in o&&o.view==="text")return null;const l=Ba(h,qi(o));if(!l||!Va(l))return null;const M=Fa(o);return M?{initialValue:h,params:M}:null},binding:{reader:h=>{var o;return Fm((o=qi(h.params))!==null&&o!==void 0?o:"int")},equals:at.equals,writer:h=>{const o=Ba(h.initialValue,qi(h.params));if(!o)throw y.shouldNeverHappen();const l=dg(o);if(!l)throw y.notBindable();return l}},controller:h=>{const o=Ba(h.initialValue,qi(h.params));if(!o)throw y.shouldNeverHappen();const l=Va(o);if(!l)throw y.shouldNeverHappen();const p="expanded"in h.params?h.params.expanded:void 0,M="picker"in h.params?h.params.picker:void 0;return new Ya(h.document,{colorType:o.type,expanded:p??!1,formatter:l,parser:ka(o.type),pickerLayout:M??"popup",supportsAlpha:o.alpha,value:h.value,viewProps:h.viewProps})}};class bi{constructor(o){this.components=o.components,this.asm_=o.assembly}constrain(o){const l=this.asm_.toComponents(o).map((p,M)=>{var B,W;return(W=(B=this.components[M])===null||B===void 0?void 0:B.constrain(p))!==null&&W!==void 0?W:p});return this.asm_.fromComponents(l)}}const ru=S("pndtxt");class Eg{constructor(o,l){this.textViews=l.textViews,this.element=o.createElement("div"),this.element.classList.add(ru()),this.textViews.forEach(p=>{const M=o.createElement("div");M.classList.add(ru("a")),M.appendChild(p.element),this.element.appendChild(M)})}}function Ag(h,o,l){return new fr(h,{arrayPosition:l===0?"fst":l===o.axes.length-1?"lst":"mid",baseStep:o.axes[l].baseStep,parser:o.parser,props:o.axes[l].textProps,value:ne(0,{constraint:o.axes[l].constraint}),viewProps:o.viewProps})}class qa{constructor(o,l){this.value=l.value,this.viewProps=l.viewProps,this.acs_=l.axes.map((p,M)=>Ag(o,l,M)),this.acs_.forEach((p,M)=>{dr({primary:this.value,secondary:p.value,forward:B=>l.assembly.toComponents(B.rawValue)[M],backward:(B,W)=>{const de=l.assembly.toComponents(B.rawValue);return de[M]=W.rawValue,l.assembly.fromComponents(de)}})}),this.view=new Eg(o,{textViews:this.acs_.map(p=>p.view)})}}function ou(h,o){return"step"in h&&!m(h.step)?new Kr(h.step,o):null}function au(h){return!m(h.max)&&!m(h.min)?new fs({max:h.max,min:h.min}):!m(h.max)||!m(h.min)?new _h({max:h.max,min:h.min}):null}function Cg(h){const o=qt(h,fs);if(o)return[o.values.get("min"),o.values.get("max")];const l=qt(h,_h);return l?[l.minValue,l.maxValue]:[void 0,void 0]}function Tg(h,o){const l=[],p=ou(h,o);p&&l.push(p);const M=au(h);M&&l.push(M);const B=Oa(h.options);return B&&l.push(B),new Zn(l)}const Rg={id:"input-number",type:"input",accept:(h,o)=>{if(typeof h!="number")return null;const l=j,p=ae(o,{format:l.optional.function,max:l.optional.number,min:l.optional.number,options:l.optional.custom(Qr),step:l.optional.number});return p?{initialValue:h,params:p}:null},binding:{reader:h=>Ch,constraint:h=>Tg(h.params,h.initialValue),writer:h=>mr},controller:h=>{var o;const l=h.value,p=h.constraint,M=p&&qt(p,lr);if(M)return new cr(h.document,{props:new z({options:M.values.value("options")}),value:l,viewProps:h.viewProps});const B=(o="format"in h.params?h.params.format:void 0)!==null&&o!==void 0?o:$t(eo(p,l.rawValue)),W=p&&qt(p,fs);return W?new Na(h.document,{baseStep:ms(p),parser:Jn,sliderProps:new z({maxValue:W.values.value("max"),minValue:W.values.value("min")}),textProps:z.fromObject({draggingScale:gs(p,l.rawValue),formatter:B}),value:l,viewProps:h.viewProps}):new fr(h.document,{baseStep:ms(p),parser:Jn,props:z.fromObject({draggingScale:gs(p,l.rawValue),formatter:B}),value:l,viewProps:h.viewProps})}};class yi{constructor(o=0,l=0){this.x=o,this.y=l}getComponents(){return[this.x,this.y]}static isObject(o){if(m(o))return!1;const l=o.x,p=o.y;return!(typeof l!="number"||typeof p!="number")}static equals(o,l){return o.x===l.x&&o.y===l.y}toObject(){return{x:this.x,y:this.y}}}const lu={toComponents:h=>h.getComponents(),fromComponents:h=>new yi(...h)},_s=S("p2d");class Pg{constructor(o,l){this.element=o.createElement("div"),this.element.classList.add(_s()),l.viewProps.bindClassModifiers(this.element),O(l.expanded,C(this.element,_s(void 0,"expanded")));const p=o.createElement("div");p.classList.add(_s("h")),this.element.appendChild(p);const M=o.createElement("button");M.classList.add(_s("b")),M.appendChild(se(o,"p2dpad")),l.viewProps.bindDisabled(M),p.appendChild(M),this.buttonElement=M;const B=o.createElement("div");if(B.classList.add(_s("t")),p.appendChild(B),this.textElement=B,l.pickerLayout==="inline"){const W=o.createElement("div");W.classList.add(_s("p")),this.element.appendChild(W),this.pickerElement=W}else this.pickerElement=null}}const wi=S("p2dp");class Ig{constructor(o,l){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.invertsY_=l.invertsY,this.maxValue_=l.maxValue,this.element=o.createElement("div"),this.element.classList.add(wi()),l.layout==="popup"&&this.element.classList.add(wi(void 0,"p")),l.viewProps.bindClassModifiers(this.element);const p=o.createElement("div");p.classList.add(wi("p")),l.viewProps.bindTabIndex(p),this.element.appendChild(p),this.padElement=p;const M=o.createElementNS(Ne,"svg");M.classList.add(wi("g")),this.padElement.appendChild(M),this.svgElem_=M;const B=o.createElementNS(Ne,"line");B.classList.add(wi("ax")),B.setAttributeNS(null,"x1","0"),B.setAttributeNS(null,"y1","50%"),B.setAttributeNS(null,"x2","100%"),B.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(B);const W=o.createElementNS(Ne,"line");W.classList.add(wi("ax")),W.setAttributeNS(null,"x1","50%"),W.setAttributeNS(null,"y1","0"),W.setAttributeNS(null,"x2","50%"),W.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(W);const de=o.createElementNS(Ne,"line");de.classList.add(wi("l")),de.setAttributeNS(null,"x1","50%"),de.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(de),this.lineElem_=de;const We=o.createElement("div");We.classList.add(wi("m")),this.padElement.appendChild(We),this.markerElem_=We,l.value.emitter.on("change",this.onValueChange_),this.value=l.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[o,l]=this.value.rawValue.getComponents(),p=this.maxValue_,M=Pt(o,-p,+p,0,100),B=Pt(l,-p,+p,0,100),W=this.invertsY_?100-B:B;this.lineElem_.setAttributeNS(null,"x2",`${M}%`),this.lineElem_.setAttributeNS(null,"y2",`${W}%`),this.markerElem_.style.left=`${M}%`,this.markerElem_.style.top=`${W}%`}onValueChange_(){this.update_()}onFoldableChange_(){this.update_()}}function cu(h,o,l){return[pn(o[0],Qn(h)),pn(o[1],pr(h))*(l?1:-1)]}class Lg{constructor(o,l){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=l.value,this.viewProps=l.viewProps,this.baseSteps_=l.baseSteps,this.maxValue_=l.maxValue,this.invertsY_=l.invertsY,this.view=new Ig(o,{invertsY:this.invertsY_,layout:l.layout,maxValue:this.maxValue_,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Wi(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(o,l){if(!o.point)return;const p=this.maxValue_,M=Pt(o.point.x,0,o.bounds.width,-p,+p),B=Pt(this.invertsY_?o.bounds.height-o.point.y:o.point.y,0,o.bounds.height,-p,+p);this.value.setRawValue(new yi(M,B),l)}onPointerDown_(o){this.handlePointerEvent_(o.data,{forceEmit:!1,last:!1})}onPointerMove_(o){this.handlePointerEvent_(o.data,{forceEmit:!1,last:!1})}onPointerUp_(o){this.handlePointerEvent_(o.data,{forceEmit:!0,last:!0})}onPadKeyDown_(o){Rh(o.key)&&o.preventDefault();const[l,p]=cu(o,this.baseSteps_,this.invertsY_);l===0&&p===0||this.value.setRawValue(new yi(this.value.rawValue.x+l,this.value.rawValue.y+p),{forceEmit:!1,last:!1})}onPadKeyUp_(o){const[l,p]=cu(o,this.baseSteps_,this.invertsY_);l===0&&p===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class Dg{constructor(o,l){var p,M;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=l.value,this.viewProps=l.viewProps,this.foldable_=Ke.create(l.expanded),this.popC_=l.pickerLayout==="popup"?new bh(o,{viewProps:this.viewProps}):null;const B=new Lg(o,{baseSteps:[l.axes[0].baseStep,l.axes[1].baseStep],invertsY:l.invertsY,layout:l.pickerLayout,maxValue:l.maxValue,value:this.value,viewProps:this.viewProps});B.view.allFocusableElements.forEach(W=>{W.addEventListener("blur",this.onPopupChildBlur_),W.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=B,this.textC_=new qa(o,{assembly:lu,axes:l.axes,parser:l.parser,value:this.value,viewProps:this.viewProps}),this.view=new Pg(o,{expanded:this.foldable_.value("expanded"),pickerLayout:l.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(p=this.view.buttonElement)===null||p===void 0||p.addEventListener("blur",this.onPadButtonBlur_),(M=this.view.buttonElement)===null||M===void 0||M.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),dr({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:W=>W.rawValue,backward:(W,de)=>de.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),xe(this.foldable_,this.view.pickerElement))}onPadButtonBlur_(o){if(!this.popC_)return;const l=this.view.element,p=o.relatedTarget;(!p||!l.contains(p))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(o){if(!this.popC_)return;const l=this.popC_.view.element,p=Ce(o);p&&l.contains(p)||p&&p===this.view.buttonElement&&!pt(l.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(o){this.popC_?o.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&o.key==="Escape"&&this.view.buttonElement.focus()}}class xs{constructor(o=0,l=0,p=0){this.x=o,this.y=l,this.z=p}getComponents(){return[this.x,this.y,this.z]}static isObject(o){if(m(o))return!1;const l=o.x,p=o.y,M=o.z;return!(typeof l!="number"||typeof p!="number"||typeof M!="number")}static equals(o,l){return o.x===l.x&&o.y===l.y&&o.z===l.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const hu={toComponents:h=>h.getComponents(),fromComponents:h=>new xs(...h)};function Ug(h){return xs.isObject(h)?new xs(h.x,h.y,h.z):new xs}function Ng(h,o){h.writeProperty("x",o.x),h.writeProperty("y",o.y),h.writeProperty("z",o.z)}function Og(h,o){return new bi({assembly:hu,components:[ei("x"in h?h.x:void 0,o.x),ei("y"in h?h.y:void 0,o.y),ei("z"in h?h.z:void 0,o.z)]})}function $a(h,o){return{baseStep:ms(o),constraint:o,textProps:z.fromObject({draggingScale:gs(o,h),formatter:$t(eo(o,h))})}}const Fg={id:"input-point3d",type:"input",accept:(h,o)=>{if(!xs.isObject(h))return null;const l=j,p=ae(o,{x:l.optional.custom(_i),y:l.optional.custom(_i),z:l.optional.custom(_i)});return p?{initialValue:h,params:p}:null},binding:{reader:h=>Ug,constraint:h=>Og(h.params,h.initialValue),equals:xs.equals,writer:h=>Ng},controller:h=>{const o=h.value,l=h.constraint;if(!(l instanceof bi))throw y.shouldNeverHappen();return new qa(h.document,{assembly:hu,axes:[$a(o.rawValue.x,l.components[0]),$a(o.rawValue.y,l.components[1]),$a(o.rawValue.z,l.components[2])],parser:Jn,value:o,viewProps:h.viewProps})}};class bs{constructor(o=0,l=0,p=0,M=0){this.x=o,this.y=l,this.z=p,this.w=M}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(o){if(m(o))return!1;const l=o.x,p=o.y,M=o.z,B=o.w;return!(typeof l!="number"||typeof p!="number"||typeof M!="number"||typeof B!="number")}static equals(o,l){return o.x===l.x&&o.y===l.y&&o.z===l.z&&o.w===l.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const uu={toComponents:h=>h.getComponents(),fromComponents:h=>new bs(...h)};function Bg(h){return bs.isObject(h)?new bs(h.x,h.y,h.z,h.w):new bs}function kg(h,o){h.writeProperty("x",o.x),h.writeProperty("y",o.y),h.writeProperty("z",o.z),h.writeProperty("w",o.w)}function zg(h,o){return new bi({assembly:uu,components:[ei("x"in h?h.x:void 0,o.x),ei("y"in h?h.y:void 0,o.y),ei("z"in h?h.z:void 0,o.z),ei("w"in h?h.w:void 0,o.w)]})}function Vg(h,o){return{baseStep:ms(o),constraint:o,textProps:z.fromObject({draggingScale:gs(o,h),formatter:$t(eo(o,h))})}}const Gg={id:"input-point4d",type:"input",accept:(h,o)=>{if(!bs.isObject(h))return null;const l=j,p=ae(o,{x:l.optional.custom(_i),y:l.optional.custom(_i),z:l.optional.custom(_i),w:l.optional.custom(_i)});return p?{initialValue:h,params:p}:null},binding:{reader:h=>Bg,constraint:h=>zg(h.params,h.initialValue),equals:bs.equals,writer:h=>kg},controller:h=>{const o=h.value,l=h.constraint;if(!(l instanceof bi))throw y.shouldNeverHappen();return new qa(h.document,{assembly:uu,axes:o.rawValue.getComponents().map((p,M)=>Vg(p,l.components[M])),parser:Jn,value:o,viewProps:h.viewProps})}};function Hg(h){const o=[],l=Oa(h.options);return l&&o.push(l),new Zn(o)}const Wg={id:"input-string",type:"input",accept:(h,o)=>{if(typeof h!="string")return null;const p=ae(o,{options:j.optional.custom(Qr)});return p?{initialValue:h,params:p}:null},binding:{reader:h=>Th,constraint:h=>Hg(h.params),writer:h=>mr},controller:h=>{const o=h.document,l=h.value,p=h.constraint,M=p&&qt(p,lr);return M?new cr(o,{props:new z({options:M.values.value("options")}),value:l,viewProps:h.viewProps}):new Zr(o,{parser:B=>B,props:z.fromObject({formatter:Ia}),value:l,viewProps:h.viewProps})}},vr={monitor:{defaultInterval:200,defaultLineCount:3}},du=S("mll");class Xg{constructor(o,l){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=l.formatter,this.element=o.createElement("div"),this.element.classList.add(du()),l.viewProps.bindClassModifiers(this.element);const p=o.createElement("textarea");p.classList.add(du("i")),p.style.height=`calc(var(--bld-us) * ${l.lineCount})`,p.readOnly=!0,l.viewProps.bindDisabled(p),this.element.appendChild(p),this.textareaElem_=p,l.value.emitter.on("change",this.onValueUpdate_),this.value=l.value,this.update_()}update_(){const o=this.textareaElem_,l=o.scrollTop===o.scrollHeight-o.clientHeight,p=[];this.value.rawValue.forEach(M=>{M!==void 0&&p.push(this.formatter_(M))}),o.textContent=p.join(`
`),l&&(o.scrollTop=o.scrollHeight)}onValueUpdate_(){this.update_()}}class Ka{constructor(o,l){this.value=l.value,this.viewProps=l.viewProps,this.view=new Xg(o,{formatter:l.formatter,lineCount:l.lineCount,value:this.value,viewProps:this.viewProps})}}const pu=S("sgl");class Yg{constructor(o,l){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=l.formatter,this.element=o.createElement("div"),this.element.classList.add(pu()),l.viewProps.bindClassModifiers(this.element);const p=o.createElement("input");p.classList.add(pu("i")),p.readOnly=!0,p.type="text",l.viewProps.bindDisabled(p),this.element.appendChild(p),this.inputElement=p,l.value.emitter.on("change",this.onValueUpdate_),this.value=l.value,this.update_()}update_(){const o=this.value.rawValue,l=o[o.length-1];this.inputElement.value=l!==void 0?this.formatter_(l):""}onValueUpdate_(){this.update_()}}class Za{constructor(o,l){this.value=l.value,this.viewProps=l.viewProps,this.view=new Yg(o,{formatter:l.formatter,value:this.value,viewProps:this.viewProps})}}const jg={id:"monitor-bool",type:"monitor",accept:(h,o)=>{if(typeof h!="boolean")return null;const p=ae(o,{lineCount:j.optional.number});return p?{initialValue:h,params:p}:null},binding:{reader:h=>wh},controller:h=>{var o;return h.value.rawValue.length===1?new Za(h.document,{formatter:Sh,value:h.value,viewProps:h.viewProps}):new Ka(h.document,{formatter:Sh,lineCount:(o=h.params.lineCount)!==null&&o!==void 0?o:vr.monitor.defaultLineCount,value:h.value,viewProps:h.viewProps})}},Si=S("grl");class qg{constructor(o,l){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=o.createElement("div"),this.element.classList.add(Si()),l.viewProps.bindClassModifiers(this.element),this.formatter_=l.formatter,this.props_=l.props,this.cursor_=l.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const p=o.createElementNS(Ne,"svg");p.classList.add(Si("g")),p.style.height=`calc(var(--bld-us) * ${l.lineCount})`,this.element.appendChild(p),this.svgElem_=p;const M=o.createElementNS(Ne,"polyline");this.svgElem_.appendChild(M),this.lineElem_=M;const B=o.createElement("div");B.classList.add(Si("t"),S("tt")()),this.element.appendChild(B),this.tooltipElem_=B,l.value.emitter.on("change",this.onValueUpdate_),this.value=l.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const o=this.svgElem_.getBoundingClientRect(),l=this.value.rawValue.length-1,p=this.props_.get("minValue"),M=this.props_.get("maxValue"),B=[];this.value.rawValue.forEach((gt,xt)=>{if(gt===void 0)return;const $i=Pt(xt,0,l,0,o.width),_r=Pt(gt,p,M,o.height,0);B.push([$i,_r].join(","))}),this.lineElem_.setAttributeNS(null,"points",B.join(" "));const W=this.tooltipElem_,de=this.value.rawValue[this.cursor_.rawValue];if(de===void 0){W.classList.remove(Si("t","a"));return}const We=Pt(this.cursor_.rawValue,0,l,0,o.width),Ye=Pt(de,p,M,o.height,0);W.style.left=`${We}px`,W.style.top=`${Ye}px`,W.textContent=`${this.formatter_(de)}`,W.classList.contains(Si("t","a"))||(W.classList.add(Si("t","a"),Si("t","in")),Xe(W),W.classList.remove(Si("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class $g{constructor(o,l){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props_=l.props,this.value=l.value,this.viewProps=l.viewProps,this.cursor_=ne(-1),this.view=new qg(o,{cursor:this.cursor_,formatter:l.formatter,lineCount:l.lineCount,props:this.props_,value:this.value,viewProps:this.viewProps}),!pt(o))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const p=new Wi(this.view.element);p.emitter.on("down",this.onGraphPointerDown_),p.emitter.on("move",this.onGraphPointerMove_),p.emitter.on("up",this.onGraphPointerUp_)}}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(o){const l=this.view.element.getBoundingClientRect();this.cursor_.rawValue=Math.floor(Pt(o.offsetX,0,l.width,0,this.value.rawValue.length))}onGraphPointerDown_(o){this.onGraphPointerMove_(o)}onGraphPointerMove_(o){if(!o.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(Pt(o.data.point.x,0,o.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function Ja(h){return"format"in h&&!m(h.format)?h.format:$t(2)}function Kg(h){var o;return h.value.rawValue.length===1?new Za(h.document,{formatter:Ja(h.params),value:h.value,viewProps:h.viewProps}):new Ka(h.document,{formatter:Ja(h.params),lineCount:(o=h.params.lineCount)!==null&&o!==void 0?o:vr.monitor.defaultLineCount,value:h.value,viewProps:h.viewProps})}function Zg(h){var o,l,p;return new $g(h.document,{formatter:Ja(h.params),lineCount:(o=h.params.lineCount)!==null&&o!==void 0?o:vr.monitor.defaultLineCount,props:z.fromObject({maxValue:(l="max"in h.params?h.params.max:null)!==null&&l!==void 0?l:100,minValue:(p="min"in h.params?h.params.min:null)!==null&&p!==void 0?p:0}),value:h.value,viewProps:h.viewProps})}function fu(h){return"view"in h&&h.view==="graph"}const Jg={id:"monitor-number",type:"monitor",accept:(h,o)=>{if(typeof h!="number")return null;const l=j,p=ae(o,{format:l.optional.function,lineCount:l.optional.number,max:l.optional.number,min:l.optional.number,view:l.optional.string});return p?{initialValue:h,params:p}:null},binding:{defaultBufferSize:h=>fu(h)?64:1,reader:h=>Ch},controller:h=>fu(h.params)?Zg(h):Kg(h)},Qg={id:"monitor-string",type:"monitor",accept:(h,o)=>{if(typeof h!="string")return null;const l=j,p=ae(o,{lineCount:l.optional.number,multiline:l.optional.boolean});return p?{initialValue:h,params:p}:null},binding:{reader:h=>Th},controller:h=>{var o;const l=h.value;return l.rawValue.length>1||"multiline"in h.params&&h.params.multiline?new Ka(h.document,{formatter:Ia,lineCount:(o=h.params.lineCount)!==null&&o!==void 0?o:vr.monitor.defaultLineCount,value:l,viewProps:h.viewProps}):new Za(h.document,{formatter:Ia,value:l,viewProps:h.viewProps})}};function ev(h,o){var l;const p=h.accept(o.target.read(),o.params);if(m(p))return null;const M=j,B={target:o.target,initialValue:p.initialValue,params:p.params},W=h.binding.reader(B),de=h.binding.constraint?h.binding.constraint(B):void 0,We=ne(W(p.initialValue),{constraint:de,equals:h.binding.equals}),Ye=new Hi({reader:W,target:o.target,value:We,writer:h.binding.writer(B)}),gt=M.optional.boolean(o.params.disabled).value,xt=M.optional.boolean(o.params.hidden).value,$i=h.controller({constraint:de,document:o.document,initialValue:p.initialValue,params:p.params,value:Ye.value,viewProps:q.create({disabled:gt,hidden:xt})});return new it(o.document,{binding:Ye,blade:nt(),props:z.fromObject({label:"label"in o.params?(l=M.optional.string(o.params.label).value)!==null&&l!==void 0?l:null:o.target.key}),valueController:$i})}function tv(h,o){return o===0?new vi:new rn(h,o??vr.monitor.defaultInterval)}function nv(h,o){var l,p,M;const B=j,W=h.accept(o.target.read(),o.params);if(m(W))return null;const de={target:o.target,initialValue:W.initialValue,params:W.params},We=h.binding.reader(de),Ye=(p=(l=B.optional.number(o.params.bufferSize).value)!==null&&l!==void 0?l:h.binding.defaultBufferSize&&h.binding.defaultBufferSize(W.params))!==null&&p!==void 0?p:1,gt=B.optional.number(o.params.interval).value,xt=new Zt({reader:We,target:o.target,ticker:tv(o.document,gt),value:un(Ye)}),$i=B.optional.boolean(o.params.disabled).value,_r=B.optional.boolean(o.params.hidden).value,xr=h.controller({document:o.document,params:W.params,value:xt.value,viewProps:q.create({disabled:$i,hidden:_r})});return new Wt(o.document,{binding:xt,blade:nt(),props:z.fromObject({label:"label"in o.params?(M=B.optional.string(o.params.label).value)!==null&&M!==void 0?M:null:o.target.key}),valueController:xr})}class iv{constructor(){this.pluginsMap_={blades:[],inputs:[],monitors:[]}}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(o){o.type==="blade"?this.pluginsMap_.blades.unshift(o):o.type==="input"?this.pluginsMap_.inputs.unshift(o):o.type==="monitor"&&this.pluginsMap_.monitors.unshift(o)}createInput(o,l,p){const M=l.read();if(m(M))throw new y({context:{key:l.key},type:"nomatchingcontroller"});const B=this.pluginsMap_.inputs.reduce((W,de)=>W??ev(de,{document:o,target:l,params:p}),null);if(B)return B;throw new y({context:{key:l.key},type:"nomatchingcontroller"})}createMonitor(o,l,p){const M=this.pluginsMap_.monitors.reduce((B,W)=>B??nv(W,{document:o,params:p,target:l}),null);if(M)return M;throw new y({context:{key:l.key},type:"nomatchingcontroller"})}createBlade(o,l){const p=this.pluginsMap_.blades.reduce((M,B)=>M??_n(B,{document:o,params:l}),null);if(!p)throw new y({type:"nomatchingview",context:{params:l}});return p}createBladeApi(o){if(o instanceof it)return new Ft(o);if(o instanceof Wt)return new sn(o);if(o instanceof Gi)return new gi(o,this);const l=this.pluginsMap_.blades.reduce((p,M)=>p??M.api({controller:o,pool:this}),null);if(!l)throw y.shouldNeverHappen();return l}}function sv(){const h=new iv;return[hv,Fg,Gg,Wg,Rg,Mg,Sg,xg,_m,jg,Qg,Jg,qe,G,Te,mt].forEach(o=>{h.register(o)}),h}function rv(h){return yi.isObject(h)?new yi(h.x,h.y):new yi}function ov(h,o){h.writeProperty("x",o.x),h.writeProperty("y",o.y)}function ei(h,o){if(!h)return;const l=[],p=ou(h,o);p&&l.push(p);const M=au(h);return M&&l.push(M),new Zn(l)}function av(h,o){return new bi({assembly:lu,components:[ei("x"in h?h.x:void 0,o.x),ei("y"in h?h.y:void 0,o.y)]})}function mu(h,o){const[l,p]=h?Cg(h):[];if(!m(l)||!m(p))return Math.max(Math.abs(l??0),Math.abs(p??0));const M=ms(h);return Math.max(Math.abs(M)*10,Math.abs(o)*10)}function lv(h,o){const l=o instanceof bi?o.components[0]:void 0,p=o instanceof bi?o.components[1]:void 0,M=mu(l,h.x),B=mu(p,h.y);return Math.max(M,B)}function gu(h,o){return{baseStep:ms(o),constraint:o,textProps:z.fromObject({draggingScale:gs(o,h),formatter:$t(eo(o,h))})}}function cv(h){if(!("y"in h))return!1;const o=h.y;return o&&"inverted"in o?!!o.inverted:!1}const hv={id:"input-point2d",type:"input",accept:(h,o)=>{if(!yi.isObject(h))return null;const l=j,p=ae(o,{expanded:l.optional.boolean,picker:l.optional.custom(Lh),x:l.optional.custom(_i),y:l.optional.object({inverted:l.optional.boolean,max:l.optional.number,min:l.optional.number,step:l.optional.number})});return p?{initialValue:h,params:p}:null},binding:{reader:h=>rv,constraint:h=>av(h.params,h.initialValue),equals:yi.equals,writer:h=>ov},controller:h=>{const o=h.document,l=h.value,p=h.constraint;if(!(p instanceof bi))throw y.shouldNeverHappen();const M="expanded"in h.params?h.params.expanded:void 0,B="picker"in h.params?h.params.picker:void 0;return new Dg(o,{axes:[gu(l.rawValue.x,p.components[0]),gu(l.rawValue.y,p.components[1])],expanded:M??!1,invertsY:cv(h.params),maxValue:lv(l.rawValue,p),parser:Jn,pickerLayout:B??"popup",value:l,viewProps:h.viewProps})}};class vu extends i{constructor(o){super(o),this.emitter_=new w,this.controller_.valueController.value.emitter.on("change",l=>{this.emitter_.emit("change",{event:new a(this,l.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(o){this.controller_.props.set("label",o)}get options(){return this.controller_.valueController.props.get("options")}set options(o){this.controller_.valueController.props.set("options",o)}get value(){return this.controller_.valueController.value.rawValue}set value(o){this.controller_.valueController.value.rawValue=o}on(o,l){const p=l.bind(this);return this.emitter_.on(o,M=>{p(M.event)}),this}}class _u extends i{constructor(o){super(o),this.emitter_=new w,this.controller_.valueController.value.emitter.on("change",l=>{this.emitter_.emit("change",{event:new a(this,l.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(o){this.controller_.props.set("label",o)}get maxValue(){return this.controller_.valueController.sliderController.props.get("maxValue")}set maxValue(o){this.controller_.valueController.sliderController.props.set("maxValue",o)}get minValue(){return this.controller_.valueController.sliderController.props.get("minValue")}set minValue(o){this.controller_.valueController.sliderController.props.set("minValue",o)}get value(){return this.controller_.valueController.value.rawValue}set value(o){this.controller_.valueController.value.rawValue=o}on(o,l){const p=l.bind(this);return this.emitter_.on(o,M=>{p(M.event)}),this}}class xu extends i{constructor(o){super(o),this.emitter_=new w,this.controller_.valueController.value.emitter.on("change",l=>{this.emitter_.emit("change",{event:new a(this,l.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(o){this.controller_.props.set("label",o)}get formatter(){return this.controller_.valueController.props.get("formatter")}set formatter(o){this.controller_.valueController.props.set("formatter",o)}get value(){return this.controller_.valueController.value.rawValue}set value(o){this.controller_.valueController.value.rawValue=o}on(o,l){const p=l.bind(this);return this.emitter_.on(o,M=>{p(M.event)}),this}}const uv=function(){return{id:"list",type:"blade",accept(h){const o=j,l=ae(h,{options:o.required.custom(Qr),value:o.required.raw,view:o.required.constant("list"),label:o.optional.string});return l?{params:l}:null},controller(h){const o=new lr(Dh(h.params.options)),l=ne(h.params.value,{constraint:o}),p=new cr(h.document,{props:new z({options:o.values.value("options")}),value:l,viewProps:h.viewProps});return new K(h.document,{blade:h.blade,props:z.fromObject({label:h.params.label}),valueController:p})},api(h){return!(h.controller instanceof K)||!(h.controller.valueController instanceof cr)?null:new vu(h.controller)}}}();function dv(h){return h.reduce((o,l)=>Object.assign(o,{[l.presetKey]:l.read()}),{})}function pv(h,o){h.forEach(l=>{const p=o[l.target.presetKey];p!==void 0&&l.writer(l.target,l.reader(p))})}class fv extends cs{constructor(o,l){super(o,l)}get element(){return this.controller_.view.element}importPreset(o){const l=this.controller_.rackController.rack.find(it).map(p=>p.binding);pv(l,o),this.refresh()}exportPreset(){const o=this.controller_.rackController.rack.find(it).map(l=>l.binding.target);return dv(o)}refresh(){this.controller_.rackController.rack.find(it).forEach(o=>{o.binding.read()}),this.controller_.rackController.rack.find(Wt).forEach(o=>{o.binding.read()})}}class mv extends R{constructor(o,l){super(o,{expanded:l.expanded,blade:l.blade,props:l.props,root:!0,viewProps:l.viewProps})}}const gv={id:"slider",type:"blade",accept(h){const o=j,l=ae(h,{max:o.required.number,min:o.required.number,view:o.required.constant("slider"),format:o.optional.function,label:o.optional.string,value:o.optional.number});return l?{params:l}:null},controller(h){var o,l;const p=(o=h.params.value)!==null&&o!==void 0?o:0,M=new fs({max:h.params.max,min:h.params.min}),B=new Na(h.document,{baseStep:1,parser:Jn,sliderProps:new z({maxValue:M.values.value("max"),minValue:M.values.value("min")}),textProps:z.fromObject({draggingScale:gs(void 0,p),formatter:(l=h.params.format)!==null&&l!==void 0?l:am}),value:ne(p,{constraint:M}),viewProps:h.viewProps});return new K(h.document,{blade:h.blade,props:z.fromObject({label:h.params.label}),valueController:B})},api(h){return!(h.controller instanceof K)||!(h.controller.valueController instanceof Na)?null:new _u(h.controller)}},vv=function(){return{id:"text",type:"blade",accept(h){const o=j,l=ae(h,{parse:o.required.function,value:o.required.raw,view:o.required.constant("text"),format:o.optional.function,label:o.optional.string});return l?{params:l}:null},controller(h){var o;const l=new Zr(h.document,{parser:h.params.parse,props:z.fromObject({formatter:(o=h.params.format)!==null&&o!==void 0?o:p=>String(p)}),value:ne(h.params.value),viewProps:h.viewProps});return new K(h.document,{blade:h.blade,props:z.fromObject({label:h.params.label}),valueController:l})},api(h){return!(h.controller instanceof K)||!(h.controller.valueController instanceof Zr)?null:new xu(h.controller)}}}();function _v(h){const o=h.createElement("div");return o.classList.add(S("dfw")()),h.body&&h.body.appendChild(o),o}function bu(h,o,l){if(h.querySelector(`style[data-tp-style=${o}]`))return;const p=h.createElement("style");p.dataset.tpStyle=o,p.textContent=l,h.head.appendChild(p)}class xv extends fv{constructor(o){var l,p;const M=o??{},B=(l=M.document)!==null&&l!==void 0?l:N(),W=sv(),de=new mv(B,{expanded:M.expanded,blade:nt(),props:z.fromObject({title:M.title}),viewProps:q.create()});super(de,W),this.pool_=W,this.containerElem_=(p=M.container)!==null&&p!==void 0?p:_v(B),this.containerElem_.appendChild(this.element),this.doc_=B,this.usesDefaultWrapper_=!M.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw y.alreadyDisposed();return this.doc_}dispose(){const o=this.containerElem_;if(!o)throw y.alreadyDisposed();if(this.usesDefaultWrapper_){const l=o.parentElement;l&&l.removeChild(o)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(o){("plugin"in o?[o.plugin]:"plugins"in o?o.plugins:[]).forEach(p=>{this.pool_.register(p),this.embedPluginStyle_(p)})}embedPluginStyle_(o){o.css&&bu(this.document,`plugin-${o.id}`,o.css)}setUpDefaultPlugins_(){bu(this.document,"default",'.tp-tbiv_b,.tp-coltxtv_ms,.tp-ckbv_i,.tp-rotv_b,.tp-fldv_b,.tp-mllv_i,.tp-sglv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-mllv_i,.tp-sglv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--mo-fg);height:var(--bld-us);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-mllv_i::-webkit-scrollbar,.tp-sglv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-mllv_i::-webkit-scrollbar-corner,.tp-sglv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-mllv_i::-webkit-scrollbar-thumb,.tp-sglv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-br: var(--tp-base-border-radius, 6px);--cnt-h-p: var(--tp-container-horizontal-padding, 4px);--cnt-v-p: var(--tp-container-vertical-padding, 4px);--elm-br: var(--tp-element-border-radius, 2px);--bld-s: var(--tp-blade-spacing, 4px);--bld-us: var(--tp-blade-unit-size, 20px);--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tabv_c .tp-brkv>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-v-p))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tabv_c .tp-brkv>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--bld-s)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tabv_c .tp-brkv>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tabv_c .tp-brkv>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--elm-br);border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tabv_c .tp-brkv .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--elm-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);overflow:hidden;padding-left:var(--cnt-h-p);padding-right:calc(4px + var(--bld-us) + var(--cnt-h-p));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-h-p) + (var(--bld-us) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--elm-br);cursor:pointer;display:block;height:var(--bld-us);position:relative;width:var(--bld-us)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--bld-us)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--bld-s);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--bld-s)}.tp-colpv_rgb{display:flex;margin-top:var(--bld-s);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-v-p);padding-top:calc(var(--cnt-v-p) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--elm-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--bld-us)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--elm-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--elm-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;cursor:pointer;display:block;height:var(--bld-us);left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:var(--bld-us)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--elm-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--elm-br);color:var(--lbl-fg);cursor:pointer;height:var(--bld-us);line-height:var(--bld-us);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv.tp-fldv-not .tp-fldv_b{display:none}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--bld-us)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-h-p);padding-right:var(--cnt-h-p)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding:0 4px}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--bld-us)*3);line-height:var(--bld-us);padding:0 4px;resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--bld-us);margin-right:4px;position:relative;width:var(--bld-us)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--bld-s);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-p2dpv{padding-left:calc(var(--bld-us) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:6px;box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:168px;padding:var(--cnt-v-p) var(--cnt-h-p);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--bld-us);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--elm-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--bld-us) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_c{padding-bottom:var(--cnt-v-p);padding-left:4px;padding-top:var(--cnt-v-p)}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-h-p) + 4px);padding-right:calc(var(--cnt-h-p) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);bottom:2px;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);opacity:.5;overflow:hidden;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-txtv{position:relative}.tp-txtv_i{padding:0 4px}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:-3px;position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--bld-us) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--elm-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--font-family);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--bld-us) + var(--cnt-h-p));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv.tp-rotv-not .tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}'),this.pool_.getAll().forEach(o=>{this.embedPluginStyle_(o)}),this.registerPlugin({plugins:[gv,uv,mt,vv]})}}const bv=new n("3.1.10");t.BladeApi=i,t.ButtonApi=_,t.FolderApi=cs,t.InputBindingApi=Ft,t.ListApi=vu,t.MonitorBindingApi=sn,t.Pane=xv,t.SeparatorApi=Z,t.SliderApi=_u,t.TabApi=ft,t.TabPageApi=ct,t.TextApi=xu,t.TpChangeEvent=a,t.VERSION=bv,Object.defineProperty(t,"__esModule",{value:!0})})}(Cr,Cr.exports)),Cr.exports}var dw=uw();class Io extends os{constructor(e,t){super();const n=this,i={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4};this.object=e,this.domElement=t,this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.length=10,this.scale=.5,this.scale0=.5,this.aspect=1,this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:Qa.ROTATE,MIDDLE:Qa.DOLLY,RIGHT:Qa.PAN},this.autoRotate=!1,this.autoRotateSpeed=2,this.target=new L;const r=1e-6,a=new L;let c=1,u=i.NONE,d=i.NONE,f=0,m=0,v=0;const g=new L,b=new Ie,y=new Ie,x=new L,_=new Ie,w=new Ie,E=new Ie,S=new Ie,P=[],D={};this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.up0=this.object.up.clone(),this.zoom0=this.object.zoom;const O={type:"change"},U={type:"start"},I={type:"end"};this.handleResize=function(){const q=n.domElement.getBoundingClientRect(),_e=n.domElement.ownerDocument.documentElement;n.screen.left=q.left+window.pageXOffset-_e.clientLeft,n.screen.top=q.top+window.pageYOffset-_e.clientTop,n.screen.width=q.width,n.screen.height=q.height};const C=function(){const q=new Ie;return function(je,k){return q.set((je-n.screen.left)/n.screen.width,(k-n.screen.top)/n.screen.height),q}}(),F=function(){const q=new Ie;return function(je,k){return q.set((je-n.screen.width*.5-n.screen.left)/(n.screen.width*.5),(n.screen.height+2*(n.screen.top-k))/n.screen.width),q}}();function Y(q){return 2*Math.PI/60/60*n.autoRotateSpeed*(q*60)}this.rotateCamera=function(){const q=new L,_e=new Bi,je=new L,k=new L,dt=new L,Ne=new L;let Xe,De,pt;return function(N){De=y.x-b.x,pt=y.y-b.y,Ne.set(De,pt,0),Xe=Ne.length(),Xe*=n.rotateSpeed,n.autoRotate&&u===i.NONE&&(Xe=Y(N),De=Xe,pt=0,Ne.set(Xe,0,0)),Xe?(g.copy(n.object.position).sub(n.target),je.copy(g).normalize(),k.copy(n.object.up).normalize(),dt.crossVectors(k,je).normalize(),k.setLength(pt),dt.setLength(De),Ne.copy(k.add(dt)),q.crossVectors(Ne,g).normalize(),_e.setFromAxisAngle(q,Xe),g.applyQuaternion(_e),n.object.up.applyQuaternion(_e),x.copy(q),v=Xe):!n.staticMoving&&v&&(v*=Math.sqrt(1-n.dynamicDampingFactor),g.copy(n.object.position).sub(n.target),_e.setFromAxisAngle(x,v),g.applyQuaternion(_e),n.object.up.applyQuaternion(_e)),b.copy(y)}}(),this.zoomCamera=function(){let q;u===i.TOUCH_ZOOM_PAN?(q=f/m,f=m,n.object.isPerspectiveCamera?g.multiplyScalar(q):n.object.isOrthographicCamera?(n.scale=n.scale*q,n.object.zoom/=q,n.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(q=1+(w.y-_.y)*n.zoomSpeed,q!==1&&q>0&&(n.object.isPerspectiveCamera?g.multiplyScalar(q):n.object.isOrthographicCamera?(n.scale=n.scale*q,n.object.zoom/=q,n.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),n.staticMoving?_.copy(w):_.y+=(w.y-_.y)*this.dynamicDampingFactor)},this.panCamera=function(){const q=new Ie,_e=new L,je=new L;return function(){if(q.copy(S).sub(E),q.lengthSq()){if(n.object.isOrthographicCamera){const dt=(n.object.right-n.object.left)/n.object.zoom/n.domElement.clientWidth,Ne=(n.object.top-n.object.bottom)/n.object.zoom/n.domElement.clientWidth;q.x*=dt,q.y*=Ne}q.multiplyScalar(g.length()*n.panSpeed),je.copy(g).cross(n.object.up).setLength(q.x),je.add(_e.copy(n.object.up).setLength(q.y)),n.object.position.add(je),n.target.add(je),n.staticMoving?E.copy(S):E.add(q.subVectors(S,E).multiplyScalar(n.dynamicDampingFactor))}}}(),this.checkDistances=function(){(!n.noZoom||!n.noPan)&&(g.lengthSq()>n.maxDistance*n.maxDistance&&(n.object.position.addVectors(n.target,g.setLength(n.maxDistance)),_.copy(w)),g.lengthSq()<n.minDistance*n.minDistance&&(n.object.position.addVectors(n.target,g.setLength(n.minDistance)),_.copy(w)))},this.update=function(q){n.enabled!==!1&&(q=q||0,g.subVectors(n.object.position,n.target),n.noRotate||n.rotateCamera(q),n.noZoom||n.zoomCamera(),n.noPan||n.panCamera(),n.object.position.addVectors(n.target,g),n.object.isPerspectiveCamera?(n.checkDistances(),n.object.lookAt(n.target),a.distanceToSquared(n.object.position)>r&&(n.dispatchEvent(O),a.copy(n.object.position))):n.object.isOrthographicCamera?(n.object.lookAt(n.target),(a.distanceToSquared(n.object.position)>r||c!==n.object.zoom)&&(n.dispatchEvent(O),a.copy(n.object.position),c=n.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type"))},this.reset=function(){u=i.NONE,d=i.NONE,n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.up.copy(n.up0),n.object.zoom=n.zoom0,n.scale=n.scale0,n.object.updateProjectionMatrix(),g.subVectors(n.object.position,n.target),n.object.lookAt(n.target),n.dispatchEvent(O),a.copy(n.object.position),c=n.object.zoom};function X(q){n.enabled!==!1&&(P.length===0&&(n.domElement.setPointerCapture(q.pointerId),n.domElement.addEventListener("pointermove",J),n.domElement.addEventListener("pointerup",Q)),ve(q),q.pointerType==="touch"?He(q):ce(q))}function J(q){n.enabled!==!1&&(q.pointerType==="touch"?j(q):fe(q))}function Q(q){n.enabled!==!1&&(q.pointerType==="touch"?ae(q):me(),Le(q),P.length===0&&(n.domElement.releasePointerCapture(q.pointerId),n.domElement.removeEventListener("pointermove",J),n.domElement.removeEventListener("pointerup",Q)))}function ee(q){Le(q)}function ne(q){n.enabled!==!1&&(window.removeEventListener("keydown",ne),d===i.NONE&&(q.code===n.keys[i.ROTATE]&&!n.noRotate?d=i.ROTATE:q.code===n.keys[i.ZOOM]&&!n.noZoom?d=i.ZOOM:q.code===n.keys[i.PAN]&&!n.noPan&&(d=i.PAN)))}function z(q){n.enabled!==!1&&(d=i.NONE,window.addEventListener("keydown",ne))}function ce(q){if(u===i.NONE)switch(q.button){case n.mouseButtons.LEFT:u=i.ROTATE;break;case n.mouseButtons.MIDDLE:u=i.ZOOM;break;case n.mouseButtons.RIGHT:u=i.PAN;break}const _e=d!==i.NONE?d:u;_e===i.ROTATE&&!n.noRotate?(y.copy(F(q.pageX,q.pageY)),b.copy(y)):_e===i.ZOOM&&!n.noZoom?(_.copy(C(q.pageX,q.pageY)),w.copy(_)):_e===i.PAN&&!n.noPan&&(E.copy(C(q.pageX,q.pageY)),S.copy(E)),n.dispatchEvent(U)}function fe(q){const _e=d!==i.NONE?d:u;_e===i.ROTATE&&!n.noRotate?(b.copy(y),y.copy(F(q.pageX,q.pageY))):_e===i.ZOOM&&!n.noZoom?w.copy(C(q.pageX,q.pageY)):_e===i.PAN&&!n.noPan&&S.copy(C(q.pageX,q.pageY))}function me(){u=i.NONE,n.dispatchEvent(I)}function le(q){if(n.enabled!==!1&&n.noZoom!==!0){switch(q.preventDefault(),q.deltaMode){case 2:_.y-=q.deltaY*.025;break;case 1:_.y-=q.deltaY*.01;break;default:_.y-=q.deltaY*25e-5;break}n.dispatchEvent(U),n.dispatchEvent(I)}}function He(q){Fe(q);let _e,je,k,dt;switch(P.length){case 1:u=i.TOUCH_ROTATE,y.copy(F(P[0].pageX,P[0].pageY)),b.copy(y);break;default:u=i.TOUCH_ZOOM_PAN,_e=P[0].pageX-P[1].pageX,je=P[0].pageY-P[1].pageY,m=f=Math.sqrt(_e*_e+je*je),k=(P[0].pageX+P[1].pageX)/2,dt=(P[0].pageY+P[1].pageY)/2,E.copy(C(k,dt)),S.copy(E);break}n.dispatchEvent(U)}function j(q){Fe(q);let _e,je,k,dt,Ne;switch(P.length){case 1:b.copy(y),y.copy(F(q.pageX,q.pageY));break;default:_e=Ge(q),je=q.pageX-_e.x,k=q.pageY-_e.y,m=Math.sqrt(je*je+k*k),dt=(q.pageX+_e.x)/2,Ne=(q.pageY+_e.y)/2,S.copy(C(dt,Ne));break}}function ae(q){switch(P.length){case 0:u=i.NONE;break;case 1:u=i.TOUCH_ROTATE,y.copy(F(q.pageX,q.pageY)),b.copy(y);break;case 2:u=i.TOUCH_ZOOM_PAN,y.copy(F(q.pageX-b.x,q.pageY-b.y)),b.copy(y);break}n.dispatchEvent(I)}function Se(q){n.enabled!==!1&&q.preventDefault()}function ve(q){P.push(q)}function Le(q){delete D[q.pointerId];for(let _e=0;_e<P.length;_e++)if(P[_e].pointerId==q.pointerId){P.splice(_e,1);return}}function Fe(q){let _e=D[q.pointerId];_e===void 0&&(_e=new Ie,D[q.pointerId]=_e),_e.set(q.pageX,q.pageY)}function Ge(q){const _e=q.pointerId===P[0].pointerId?P[1]:P[0];return D[_e.pointerId]}this.dispose=function(){n.domElement.removeEventListener("contextmenu",Se),n.domElement.removeEventListener("pointerdown",X),n.domElement.removeEventListener("pointercancel",ee),n.domElement.removeEventListener("wheel",le),n.domElement.removeEventListener("pointermove",J),n.domElement.removeEventListener("pointerup",Q),window.removeEventListener("keydown",ne),window.removeEventListener("keyup",z)},this.domElement.addEventListener("contextmenu",Se),this.domElement.addEventListener("pointerdown",X),this.domElement.addEventListener("pointercancel",ee),this.domElement.addEventListener("wheel",le,{passive:!1}),window.addEventListener("keydown",ne),window.addEventListener("keyup",z),this.handleResize(),this.update()}}class pw{constructor(){this.beginTime=(performance||Date).now(),this.prevTime=this.beginTime,this.frames=0,this.lastFrameMs=0,this.lastFPS=0}begin(){this.beginTime=(performance||Date).now()}end(){this.frames++;const e=(performance||Date).now();return this.lastFrameMs=e-this.beginTime,e>=this.prevTime+1e3&&(this.lastFPS=this.frames*1e3/(e-this.prevTime),this.prevTime=e,this.frames=0),e}update(){this.beginTime=this.end()}}const fw=`
<svg enable-background="new 0 0 150 75.3" viewBox="0 0 150 75.3" xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <linearGradient id="a" gradientTransform="matrix(1 0 0 -1 0 76)" gradientUnits="userSpaceOnUse" x1=".3035"
    x2="149.6965" y1="19.59" y2="19.59">
    <stop offset="0" stop-color="currentColor" stop-opacity="0" />
    <stop offset=".16" stop-color="currentColor" />
    <stop offset=".84" stop-color="currentColor" />
    <stop offset="1" stop-color="currentColor" stop-opacity="0" />
  </linearGradient>
  <g fill="none">
    <path d="m.5 39.1 149 34.6" stroke="url(#a)" stroke-miterlimit="10" stroke-width="4" />
    <path d="m101.5 73.6 11-8.5" stroke="currentColor" stroke-miterlimit="10" stroke-width="4" />
    <path d="m25.1 55.7 11-8.5" stroke="currentColor" stroke-miterlimit="10" stroke-width="4" />
    <path
      d="m36.2 40c0-12 5.3-12.4 10.5-14.2 5-1.7 17.3 1.9 22.6 1.7s8-5 8.4-11.8c-.4 6.9 3.4 13.8 10 16.3 8 3 17.9 2.7 23.2 7.3 7 6 3.3 12.2 1.6 19.1"
      stroke="white" stroke-dasharray="2 4" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
  </g>
</svg>
`,Nr={int8:Int8Array,int16:Int16Array,int32:Int32Array,int64:globalThis.BigInt64Array,uint8:Uint8Array,uint16:Uint16Array,uint32:Uint32Array,uint64:globalThis.BigUint64Array,float32:Float32Array,float64:Float64Array};function mw(s){return s instanceof Float32Array||s instanceof Float64Array}const gw=0;var Je=(s=>(s[s.RAYMARCH=0]="RAYMARCH",s[s.PATHTRACE=1]="PATHTRACE",s[s.SLICE=2]="SLICE",s))(Je||{});const zn=s=>s&&s.isOrthographicCamera,vw=s=>s&&s.isPerspectiveCamera;var Ko=(s=>(s.TOP_LEFT="top_left",s.TOP_RIGHT="top_right",s.BOTTOM_LEFT="bottom_left",s.BOTTOM_RIGHT="bottom_right",s))(Ko||{});const Id=s=>s==="top_left"||s==="top_right",Ld=s=>s==="top_right"||s==="bottom_right";var ln=(s=>(s[s.MILLISECOND=0]="MILLISECOND",s[s.SECOND=1]="SECOND",s[s.MINUTE=2]="MINUTE",s[s.HOUR=3]="HOUR",s[s.DAY=4]="DAY",s))(ln||{});const _w={0:new Set(["ms","millisecond","milliseconds"]),1:new Set(["s","sec","second","seconds"]),2:new Set(["m","min","minute","minutes"]),3:new Set(["h","hr","hour","hours"]),4:new Set(["d","day","days"])};function xw(s){for(const[e,t]of Object.entries(_w))if(t.has(s))return e}var he=(s=>(s[s.TRANSFORM=1]="TRANSFORM",s[s.CAMERA=2]="CAMERA",s[s.BOUNDING_BOX=4]="BOUNDING_BOX",s[s.ROI=8]="ROI",s[s.MASK_ALPHA=16]="MASK_ALPHA",s[s.MATERIAL=32]="MATERIAL",s[s.SAMPLING=64]="SAMPLING",s[s.VIEW=128]="VIEW",s[s.MASK_DATA=256]="MASK_DATA",s[s.ALL=1023]="ALL",s))(he||{}),Dt=(s=>(s.X="x",s.Y="y",s.Z="z",s.XYZ="",s.NONE="",s))(Dt||{});class pi{constructor(e){this.translation=new L(0,0,0),this.rotation=new tn,this.scale=new L(1,1,1),this.isOrtho=!1,this.viewAxis="",this.orthoScale=1,this.flipAxes=new L(1,1,1),this.maskChannelIndex=-1,this.maskAlpha=1,this.gammaMin=0,this.gammaLevel=1,this.gammaMax=1,this.density=0,this.brightness=0,this.showBoundingBox=!1,this.bounds={bmin:new L(-.5,-.5,-.5),bmax:new L(.5,.5,.5)},this.boundingBoxColor=[1,1,0],this.primaryRayStepSize=1,this.secondaryRayStepSize=1,this.useInterpolation=!0,this.visible=!0,this.maxProjectMode=!1,e?(this.zSlice=Math.floor(e.imageInfo.subregionSize.z/2),this.diffuse=new Array(e.imageInfo.numChannels).fill([255,255,255]),this.specular=new Array(e.imageInfo.numChannels).fill([0,0,0]),this.emissive=new Array(e.imageInfo.numChannels).fill([0,0,0]),this.glossiness=new Array(e.imageInfo.numChannels).fill(0)):(this.zSlice=0,this.diffuse=[[255,255,255]],this.specular=[[0,0,0]],this.emissive=[[0,0,0]],this.glossiness=[0]),this.pixelSamplingRate=.75,this.resolution=new Ie(1,1)}resizeWithVolume(e){this.zSlice=Math.floor(e.imageInfo.subregionSize.z/2),this.diffuse=new Array(e.imageInfo.numChannels).fill([255,255,255]),this.specular=new Array(e.imageInfo.numChannels).fill([0,0,0]),this.emissive=new Array(e.imageInfo.numChannels).fill([0,0,0]),this.glossiness=new Array(e.imageInfo.numChannels).fill(0)}static compareArray(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++){const i=e[n],r=t[n];if(i instanceof Array&&r instanceof Array){if(!this.compareArray(i,r))return!1}else if(i!==r)return!1}return!0}isEqual(e){for(const t of Object.keys(this)){const n=this[t],i=e[t];if(n instanceof Array){if(!pi.compareArray(n,i))return!1}else if(n&&n.bmin!==void 0){const r=n,a=i;if(!r.bmin.equals(a.bmin)||!r.bmax.equals(a.bmax))return!1}else if(n instanceof L||n instanceof Ie||n instanceof tn){if(!n.equals(i))return!1}else if(n!==i)return!1}return!0}static deepCopyArray(e){const t=new Array(e.length);for(let n=0;n<e.length;n++){const i=e[n];i instanceof Array?t[n]=this.deepCopyArray(i):t[n]=i}return t}clone(){const e=new pi;for(const t of Object.keys(this)){const n=this[t];n instanceof Array?e[t]=pi.deepCopyArray(n):t==="bounds"?(e.bounds.bmax=this.bounds.bmax.clone(),e.bounds.bmin=this.bounds.bmin.clone()):n instanceof L||n instanceof Ie||n instanceof tn?e[t]=n.clone():n instanceof String?e[t]=""+n:e[t]=n}return e}}const qp=5,Xs=1e3,Or=Xs*60,Fr=Or*60,ra=Fr*24;function bw(s){const e=[8304,185,178,179,8308,8309,8310,8311,8312,8313];return String.fromCharCode(e[s])}function Dd(s,e=qp){const t=s.toExponential(e-1),[n,i]=t.split("e"),r=i[0]==="-"?"⁻":"",c=i.slice(1).split("").map(u=>bw(Number(u))).join("");return`${n}×10${r}${c}`}function yw(s,e){const t=Math.floor(Math.log10(Math.abs(s)));return s.toFixed(Math.max(e-t-1,0))}function ww(s,e){let t=s.length-1;for(;s[t]===e;)t--;return s.slice(0,t+1)}function oa(s,e=qp,t=e-2){const n=Math.abs(s);if(Number.isInteger(s))return n>=1e4?Dd(s,t):s.toString();{const i=yw(s,e),r=Math.abs(Number(i));if(r>=1e4||r<.01)return Dd(s,t);const a=ww(i,"0");return a.endsWith(".")?a.slice(0,-1):a}}const Sw={[ln.MILLISECOND]:1,[ln.SECOND]:Xs,[ln.MINUTE]:Or,[ln.HOUR]:Fr,[ln.DAY]:ra};function Ud(s,e){const t=Sw[e];if(t===void 0)throw new Error("Unrecognized time unit");return s*t}function Ll(s,e,t){return t?s.toString().padStart(e,"0"):s.toString()}function Nd(s,e){const{useMs:t,useSec:n,useMin:i,useHours:r,useDays:a}=e,c=[],u=[];if(a){const d=Math.floor(s/ra);c.push(d.toString()),u.push("d")}if(r){const d=Math.floor(s%ra/Fr);c.push(Ll(d,2,a)),u.push("h")}if(i){const d=Math.floor(s%Fr/Or);c.push(Ll(d,2,r)),u.push("m")}if(n){const d=Math.floor(s%Or/Xs);let f=Ll(d,2,i);if(u.push("s"),t){const m=Math.floor(s%Xs);f+="."+m.toString().padStart(3,"0")}c.push(f)}else if(t){const d=Math.floor(s%Xs);c.push(d.toString()),u.push("ms")}return{timestamp:c.join(":"),units:u.join(":")}}function Mw(s,e,t){const n=xw(t);if(n===void 0)return`${oa(s)} / ${oa(e)} ${t}`;const i=Ud(s,n),r=Ud(e,n),a={useMs:n==ln.MILLISECOND,useSec:n==ln.SECOND||n<=ln.SECOND&&r>=Xs,useMin:n==ln.MINUTE||n<=ln.MINUTE&&r>=Or,useHours:n==ln.HOUR||n<=ln.HOUR&&r>=Fr,useDays:n==ln.DAY||n<=ln.DAY&&r>=ra},{timestamp:c,units:u}=Nd(i,a),{timestamp:d}=Nd(r,a);return`${c} / ${d} ${u}`}function Ew(s,e,t){switch(t){case Dt.X:return[s[0],e[1],e[2]];case Dt.Y:return[e[0],s[1],e[2]];case Dt.Z:return[e[0],e[1],s[2]];default:return[...s]}}function Br(s){let e=s[0],t=s[0];for(let n=1;n<s.length;n++){const i=s[n];i<e?e=i:i>t&&(t=i)}return[e,t]}const aa=`
precision highp float;
precision highp int;
out vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`,$p=`
precision highp float;
precision highp int;
precision highp sampler2D;

in vec2 vUv;
uniform sampler2D image;

void main() {
  gl_FragColor = texture2D(image, vUv);
}
`;var Kp=(s=>(s[s.OPAQUE=0]="OPAQUE",s[s.TRANSPARENT=1]="TRANSPARENT",s))(Kp||{});class la{constructor(e,t,n=0){this.scene=new Fi,this.geometry=new zi(2,2),this.material=new nn({vertexShader:aa,fragmentShader:e,uniforms:t,transparent:n===1}),this.material.depthWrite=!1,this.material.depthTest=!1,this.mesh=new It(this.geometry,this.material),this.scene.add(this.mesh),this.camera=new ci(-1,1,1,-1,0,1)}render(e,t){e.setRenderTarget(t??null),e.render(this.scene,this.camera),e.setRenderTarget(null)}}const Zp=0,Gs=1,Aw=2,Cw=3,Tw=5,Od=.1,Fd=20,Dl=.5;class Rw{constructor(e,t){this.containerdiv=document.createElement("div"),this.containerdiv.style.position="relative",this.canvas=document.createElement("canvas"),this.containerdiv.appendChild(this.canvas),this.canvas.style.backgroundColor="black",e&&(this.canvas.height=e.offsetHeight,this.canvas.width=e.offsetWidth,e.appendChild(this.containerdiv)),this.scene=new Fi,this.meshRenderTarget=new Ln(this.canvas.width,this.canvas.height,{minFilter:At,magFilter:At,format:Ot,type:Yt,depthBuffer:!0}),this.meshRenderToBuffer=new la($p,{image:{value:this.meshRenderTarget.texture}}),this.meshRenderTarget.depthTexture=new eh(this.canvas.width,this.canvas.height),this.scaleBarContainerElement=document.createElement("div"),this.orthoScaleBarElement=document.createElement("div"),this.showOrthoScaleBar=!0,this.perspectiveScaleBarElement=document.createElement("div"),this.showPerspectiveScaleBar=!1,this.timestepIndicatorElement=document.createElement("div"),this.showTimestepIndicator=!1,this.animateFuncs=[],this.postMeshRenderFuncs=[],this.overlayRenderFuncs=[],this.inRenderLoop=!1,this.requestedRender=0,this.hasWebGL2=!1;const n=this.canvas.getContext("webgl2");n?(this.hasWebGL2=!0,this.renderer=new Ad({context:n,canvas:this.canvas,preserveDrawingBuffer:!0,alpha:!0,premultipliedAlpha:!1}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.state.setBlending($n),this.renderer.getContext().getExtension("EXT_color_buffer_float")):(console.warn("WebGL 2.0 not available. Some functionality may be limited. Please use a browser that supports WebGL 2.0."),this.renderer=new Ad({canvas:this.canvas,preserveDrawingBuffer:!0,alpha:!0,premultipliedAlpha:!1}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.state.setBlending($n)),this.renderer.localClippingEnabled=!0,e&&(this.renderer.setSize(e.offsetWidth,e.offsetHeight),this.meshRenderTarget.setSize(e.offsetWidth,e.offsetHeight)),this.timer=new pw;const i=Dl,r=this.getWidth()/this.getHeight();this.fov=20,this.perspectiveCamera=new fn(this.fov,r,Od,Fd),this.resetPerspectiveCamera(),this.perspectiveControls=new Io(this.perspectiveCamera,this.canvas),this.perspectiveControls.rotateSpeed=4/window.devicePixelRatio,this.perspectiveControls.autoRotate=!1,this.perspectiveControls.staticMoving=!0,this.perspectiveControls.length=10,this.perspectiveControls.enabled=!0,this.orthographicCameraX=new ci(-.5*r,i*r,i,-.5,.001,20),this.resetOrthographicCameraX(),this.orthoControlsX=new Io(this.orthographicCameraX,this.canvas),this.orthoControlsX.noRotate=!0,this.orthoControlsX.scale=i,this.orthoControlsX.scale0=i,this.orthoControlsX.aspect=r,this.orthoControlsX.staticMoving=!0,this.orthoControlsX.enabled=!1,this.orthoControlsX.panSpeed=this.canvas.clientWidth*.5,this.orthographicCameraY=new ci(-.5*r,i*r,i,-.5,.001,20),this.resetOrthographicCameraY(),this.orthoControlsY=new Io(this.orthographicCameraY,this.canvas),this.orthoControlsY.noRotate=!0,this.orthoControlsY.scale=i,this.orthoControlsY.scale0=i,this.orthoControlsY.aspect=r,this.orthoControlsY.staticMoving=!0,this.orthoControlsY.enabled=!1,this.orthoControlsY.panSpeed=this.canvas.clientWidth*.5,this.orthographicCameraZ=new ci(-.5*r,i*r,i,-.5,.001,20),this.resetOrthographicCameraZ(),this.orthoControlsZ=new Io(this.orthographicCameraZ,this.canvas),this.orthoControlsZ.noRotate=!0,this.orthoControlsZ.scale=i,this.orthoControlsZ.scale0=i,this.orthoControlsZ.aspect=r,this.orthoControlsZ.staticMoving=!0,this.orthoControlsZ.enabled=!1,this.orthoControlsZ.panSpeed=this.canvas.clientWidth*.5,this.camera=this.perspectiveCamera,this.controls=this.perspectiveControls,this.viewMode=Dt.NONE,this.axisCamera=new ci,this.axisHelperScene=new Fi,this.axisHelperObject=new Tt,this.axisHelperObject.name="axisHelperParentObject",this.showAxis=!1,this.axisScale=50,this.axisOffset=[66,66],this.setupAxisHelper(),this.setupIndicatorElements()}updateCameraFocus(e,t,n){this.perspectiveCamera.fov=e,this.fov=e,this.perspectiveCamera.updateProjectionMatrix()}resetPerspectiveCamera(){this.perspectiveCamera.position.x=0,this.perspectiveCamera.position.y=0,this.perspectiveCamera.position.z=Tw,this.perspectiveCamera.up.x=0,this.perspectiveCamera.up.y=1,this.perspectiveCamera.up.z=0}resetOrthographicCameraX(){this.orthographicCameraX.position.x=2,this.orthographicCameraX.position.y=0,this.orthographicCameraX.position.z=0,this.orthographicCameraX.up.x=0,this.orthographicCameraX.up.y=0,this.orthographicCameraX.up.z=1,this.orthographicCameraX.lookAt(new L(0,0,0))}resetOrthographicCameraY(){this.orthographicCameraY.position.x=0,this.orthographicCameraY.position.y=2,this.orthographicCameraY.position.z=0,this.orthographicCameraY.up.x=0,this.orthographicCameraY.up.y=0,this.orthographicCameraY.up.z=1,this.orthographicCameraY.lookAt(new L(0,0,0))}resetOrthographicCameraZ(){this.orthographicCameraZ.position.x=0,this.orthographicCameraZ.position.y=0,this.orthographicCameraZ.position.z=2,this.orthographicCameraZ.up.x=0,this.orthographicCameraZ.up.y=1,this.orthographicCameraZ.up.z=0,this.orthographicCameraZ.lookAt(new L(0,0,0))}requestCapture(e){this.dataurlcallback=e,this.redraw()}isVR(){return this.renderer.xr.enabled}resetToPerspectiveCamera(){const e=this.getWidth()/this.getHeight();this.perspectiveCamera=new fn(this.fov,e,Od,Fd),this.resetPerspectiveCamera(),this.switchViewMode("3D"),this.controls.object=this.perspectiveCamera,this.controls.enabled=!0,this.controls.reset()}resetCamera(){this.camera===this.perspectiveCamera?this.resetPerspectiveCamera():this.camera===this.orthographicCameraX?this.resetOrthographicCameraX():this.camera===this.orthographicCameraY?this.resetOrthographicCameraY():this.camera===this.orthographicCameraZ&&this.resetOrthographicCameraZ(),this.controls.reset()}setupAxisHelper(){const e=new Zc({color:11447469}),t=new ki(this.axisScale/5,this.axisScale/5,this.axisScale/5),n=new It(t,e);this.axisHelperObject.add(n);const i=new p_(this.axisScale);this.axisHelperObject.add(i),this.axisHelperScene.add(this.axisHelperObject),this.axisCamera=new ci(0,this.getWidth(),this.getHeight(),0,.001,this.axisScale*4),this.axisCamera.position.z=1,this.axisCamera.up.x=0,this.axisCamera.up.y=1,this.axisCamera.up.z=0,this.axisCamera.lookAt(new L(0,0,0)),this.axisCamera.position.set(-this.axisOffset[0],-this.axisOffset[1],this.axisScale*2)}setAxisPosition(e,t,n){this.axisOffset=[e+50,t+50],Id(n)&&(this.axisOffset[1]=this.getHeight()-this.axisOffset[1]),Ld(n)&&(this.axisOffset[0]=this.getWidth()-this.axisOffset[0]),this.axisCamera.position.set(-this.axisOffset[0],-this.axisOffset[1],this.axisScale*2)}orthoScreenPixelsToPhysicalUnits(e,t){const n=1/(this.camera.zoom*this.getHeight());return e*window.devicePixelRatio*n*t}setupIndicatorElements(){const e={fontFamily:"-apple-system, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif",position:"absolute",right:"169px",bottom:"20px"};Object.assign(this.scaleBarContainerElement.style,e),this.containerdiv.appendChild(this.scaleBarContainerElement);const t={border:"1px solid white",borderTop:"none",height:"10px",display:"none",color:"white",mixBlendMode:"difference",fontSize:"14px",textAlign:"right",lineHeight:"0",boxSizing:"border-box",paddingRight:"10px",marginRight:"40px"};Object.assign(this.orthoScaleBarElement.style,t),this.scaleBarContainerElement.appendChild(this.orthoScaleBarElement);const n={width:"75px",textAlign:"center",display:"none",color:"white"};Object.assign(this.perspectiveScaleBarElement.style,n),this.scaleBarContainerElement.appendChild(this.perspectiveScaleBarElement);const i=document.createElement("div"),r=document.createElement("div");r.style.color="rgb(255, 255, 0)",r.innerHTML=fw,this.perspectiveScaleBarElement.appendChild(i),this.perspectiveScaleBarElement.appendChild(r);const a={fontFamily:"-apple-system, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif",position:"absolute",right:"20px",bottom:"20px",color:"white",mixBlendMode:"difference",display:"none",lineHeight:"0.75"};Object.assign(this.timestepIndicatorElement.style,a),this.containerdiv.appendChild(this.timestepIndicatorElement)}updateOrthoScaleBar(e,t){const i=this.orthoScreenPixelsToPhysicalUnits(150,e),a=10**Math.floor(Math.log10(i)),c=Math.floor(i/a)*a,u=oa(c);this.orthoScaleBarElement.innerHTML=`${u}${t||""}`,this.orthoScaleBarElement.style.width=`${150*(c/i)}px`}updatePerspectiveScaleBar(e,t){const n=this.perspectiveScaleBarElement.firstChild;n.innerHTML=`${oa(e)}${t||""}`}updateTimestepIndicator(e,t,n){this.timestepIndicatorElement.innerHTML=Mw(e,t,n)}setPerspectiveScaleBarColor(e){const t=this.perspectiveScaleBarElement.lastChild;t.style.color=`rgb(${e[0]*255}, ${e[1]*255}, ${e[2]*255})`}updateScaleBarVisibility(){const e=zn(this.camera),t=e&&this.showOrthoScaleBar,n=!e&&this.showPerspectiveScaleBar;this.orthoScaleBarElement.style.display=t?"":"none",this.perspectiveScaleBarElement.style.display=n?"":"none"}setShowOrthoScaleBar(e){this.showOrthoScaleBar=e,this.updateScaleBarVisibility()}setShowPerspectiveScaleBar(e){this.showPerspectiveScaleBar=e,this.updateScaleBarVisibility()}setShowTimestepIndicator(e){this.showTimestepIndicator=e,this.timestepIndicatorElement.style.display=e?"":"none"}setIndicatorPosition(e,t,n,i){const{style:r}=e?this.timestepIndicatorElement:this.scaleBarContainerElement;r.removeProperty("top"),r.removeProperty("bottom"),r.removeProperty("left"),r.removeProperty("right");const a=Ld(i)?"right":"left",c=Id(i)?"top":"bottom";Object.assign(r,{[a]:t+"px",[c]:n+"px"})}setAutoRotate(e){this.controls.autoRotate=e}getAutoRotate(){return this.controls.autoRotate}replaceCamera(e){this.camera=e}replaceControls(e){this.controls!==e&&(this.controls.enabled=!1,this.removeControlHandlers(),this.controls=e,this.controls.enabled=!0,this.controlStartHandler&&this.controls.addEventListener("start",this.controlStartHandler),this.controlChangeHandler&&this.controls.addEventListener("change",this.controlChangeHandler),this.controlEndHandler&&this.controls.addEventListener("end",this.controlEndHandler),this.controls.update())}switchViewMode(e){switch(e=e.toUpperCase(),e){case"YZ":case"X":this.replaceCamera(this.orthographicCameraX),this.replaceControls(this.orthoControlsX),this.axisHelperObject.rotation.set(0,Math.PI*.5,0),this.viewMode=Dt.X;break;case"XZ":case"Y":this.replaceCamera(this.orthographicCameraY),this.replaceControls(this.orthoControlsY),this.axisHelperObject.rotation.set(Math.PI*.5,0,0),this.viewMode=Dt.Y;break;case"XY":case"Z":this.replaceCamera(this.orthographicCameraZ),this.replaceControls(this.orthoControlsZ),this.axisHelperObject.rotation.set(0,0,0),this.viewMode=Dt.Z;break;default:this.replaceCamera(this.perspectiveCamera),this.replaceControls(this.perspectiveControls),this.axisHelperObject.rotation.setFromRotationMatrix(this.camera.matrixWorldInverse),this.viewMode=Dt.NONE;break}this.updateScaleBarVisibility()}getMeshDepthTexture(){return this.meshRenderTarget.depthTexture}resize(e,t,n,i,r,a){var u,d;t=t||((u=this.containerdiv.parentElement)==null?void 0:u.offsetWidth)||this.containerdiv.offsetWidth,n=n||((d=this.containerdiv.parentElement)==null?void 0:d.offsetHeight)||this.containerdiv.offsetHeight,this.containerdiv.style.width=""+t+"px",this.containerdiv.style.height=""+n+"px";const c=t/n;this.perspectiveControls.aspect=c,this.orthoControlsZ.aspect=c,this.orthoControlsZ.panSpeed=t*.5,this.orthoControlsY.aspect=c,this.orthoControlsY.panSpeed=t*.5,this.orthoControlsX.aspect=c,this.orthoControlsX.panSpeed=t*.5,zn(this.camera)?(this.camera.left=-.5*c,this.camera.right=Dl*c,this.camera.updateProjectionMatrix()):(this.camera.aspect=c,this.camera.updateProjectionMatrix()),this.axisCamera.left=0,this.axisCamera.right=t,this.axisCamera.top=n,this.axisCamera.bottom=0,this.axisCamera.updateProjectionMatrix(),this.renderer.getPixelRatio()!==window.devicePixelRatio&&this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(t,n),this.meshRenderTarget.setSize(t,n),this.perspectiveControls.handleResize(),this.orthoControlsZ.handleResize(),this.orthoControlsY.handleResize(),this.orthoControlsX.handleResize()}setClearColor(e,t){this.renderer.setClearColor(e,t)}getWidth(){return this.renderer.getContext().canvas.width}getHeight(){return this.renderer.getContext().canvas.height}getCameraState(){return{position:this.camera.position.toArray(),up:this.camera.up.toArray(),target:this.controls.target.toArray(),orthoScale:zn(this.camera)?this.controls.scale:void 0,fov:vw(this.camera)?this.camera.fov:void 0}}setCameraState(e){const n={...this.getCameraState(),...e};this.camera.up.fromArray(n.up).normalize(),this.controls.target.fromArray(n.target);const i=Ew(n.position,n.target,this.viewMode);if(this.camera.position.fromArray(i),zn(this.camera)){const r=n.orthoScale||Dl;this.controls.scale=r,this.camera.zoom=.5/r}else this.camera.fov=n.fov||this.fov;this.controls.update(),this.camera.updateProjectionMatrix()}render(){zn(this.camera)||this.axisHelperObject.rotation.setFromRotationMatrix(this.camera.matrixWorldInverse);for(let e=0;e<this.animateFuncs.length;e++)this.animateFuncs[e]&&this.animateFuncs[e](this.renderer,this.camera,this.meshRenderTarget.depthTexture);this.camera.layers.set(Gs),this.renderer.setRenderTarget(this.meshRenderTarget),this.renderer.render(this.scene,this.camera),this.postMeshRenderFuncs.forEach(e=>{e(this.renderer,this.camera,this.meshRenderTarget.depthTexture)}),this.renderer.autoClear=!1,this.camera.layers.set(Aw),this.renderer.setRenderTarget(this.meshRenderTarget),this.renderer.render(this.scene,this.camera),this.meshRenderToBuffer.material.uniforms.image.value=this.meshRenderTarget.texture,this.meshRenderToBuffer.render(this.renderer),this.camera.layers.set(Zp),this.renderer.setRenderTarget(null),this.renderer.render(this.scene,this.camera),this.camera.layers.set(Cw),this.renderer.setRenderTarget(null),this.renderer.render(this.scene,this.camera),this.overlayRenderFuncs.forEach(e=>{e(this.renderer,this.camera,this.meshRenderTarget.depthTexture)}),this.renderer.autoClear=!0,this.showAxis&&(this.renderer.autoClear=!1,this.renderer.render(this.axisHelperScene,this.axisCamera),this.renderer.autoClear=!0),this.dataurlcallback&&(this.dataurlcallback(this.canvas.toDataURL()),this.dataurlcallback=void 0)}redraw(){this.inRenderLoop||(this.requestedRender&&cancelAnimationFrame(this.requestedRender),this.timer.begin(),this.requestedRender=requestAnimationFrame(this.onAnimationLoop.bind(this)))}onAnimationLoop(){var t;this.timer.update();const e=this.timer.lastFrameMs/1e3;this.controls.update(e),this.render(),(t=this.onRenderCallback)==null||t.call(this)}startRenderLoop(){this.inRenderLoop=!0,this.timer.begin(),this.renderer.setAnimationLoop(this.onAnimationLoop.bind(this))}stopRenderLoop(){this.renderer.setAnimationLoop(null),this.inRenderLoop=!1,this.requestedRender&&(cancelAnimationFrame(this.requestedRender),this.requestedRender=0),this.timer.end()}setOnRenderCallback(e){this.onRenderCallback=e??void 0}removeControlHandlers(){this.controlStartHandler&&this.controls.removeEventListener("start",this.controlStartHandler),this.controlChangeHandler&&this.controls.removeEventListener("change",this.controlChangeHandler),this.controlEndHandler&&this.controls.removeEventListener("end",this.controlEndHandler)}setControlHandlers(e,t,n){this.removeControlHandlers(),e&&(this.controlStartHandler=e,this.controls.addEventListener("start",this.controlStartHandler)),t&&(this.controlChangeHandler=t,this.controls.addEventListener("change",this.controlChangeHandler)),n&&(this.controlEndHandler=n,this.controls.addEventListener("end",this.controlEndHandler))}hitTest(e,t,n){if(!n)return-1;const i=new Ie;this.renderer.getSize(i);const r=e,a=i.y-t,c=Math.floor(r/i.x*n.width),u=Math.floor(a/i.y*n.height),d=new Float32Array(4).fill(-1);return this.renderer.readRenderTargetPixels(n,c,u,1,1,d),d[3]===-1||d[3]===0?-1:Math.round(d[1])}}const Pw=Object.freeze({angle:36*ta.DEG2RAD,castShadow:!1,color:16777215,intensity:15,position:{x:-4,y:3.5,z:7}}),Iw=Object.freeze({color:16777215,intensity:1.75}),Lw=Object.freeze({castShadow:!1,color:16746666,intensity:2,position:{x:1,y:-5,z:0}}),Dw=Object.freeze({castShadow:!1,color:15258025,intensity:1.5,position:{x:2.5,y:.2,z:1.5}}),zt={spotlightSettings:Pw,ambientLightSettings:Iw,reflectedLightSettings:Lw,fillLightSettings:Dw};class Uw{parse(e,t={}){t=Object.assign({binary:!1},t);const n=t.binary,i=[];let r=0;e.traverse(function(_){if(_.isMesh){const w=_.geometry,E=w.index,S=w.getAttribute("position");r+=E!==null?E.count/3:S.count/3,i.push({object3d:_,geometry:w})}});let a,c=80;if(n===!0){const _=r*2+r*3*4*4+80+4,w=new ArrayBuffer(_);a=new DataView(w),a.setUint32(c,r,!0),c+=4}else a="",a+=`solid exported
`;const u=new L,d=new L,f=new L,m=new L,v=new L,g=new L;for(let _=0,w=i.length;_<w;_++){const E=i[_].object3d,S=i[_].geometry,P=S.index,D=S.getAttribute("position");if(P!==null)for(let O=0;O<P.count;O+=3){const U=P.getX(O+0),I=P.getX(O+1),C=P.getX(O+2);b(U,I,C,D,E)}else for(let O=0;O<D.count;O+=3){const U=O+0,I=O+1,C=O+2;b(U,I,C,D,E)}}return n===!1&&(a+=`endsolid exported
`),a;function b(_,w,E,S,P){u.fromBufferAttribute(S,_),d.fromBufferAttribute(S,w),f.fromBufferAttribute(S,E),P.isSkinnedMesh===!0&&(P.applyBoneTransform(_,u),P.applyBoneTransform(w,d),P.applyBoneTransform(E,f)),u.applyMatrix4(P.matrixWorld),d.applyMatrix4(P.matrixWorld),f.applyMatrix4(P.matrixWorld),y(u,d,f),x(u),x(d),x(f),n===!0?(a.setUint16(c,0,!0),c+=2):(a+=`		endloop
`,a+=`	endfacet
`)}function y(_,w,E){m.subVectors(E,w),v.subVectors(_,w),m.cross(v).normalize(),g.copy(m).normalize(),n===!0?(a.setFloat32(c,g.x,!0),c+=4,a.setFloat32(c,g.y,!0),c+=4,a.setFloat32(c,g.z,!0),c+=4):(a+="	facet normal "+g.x+" "+g.y+" "+g.z+`
`,a+=`		outer loop
`)}function x(_){n===!0?(a.setFloat32(c,_.x,!0),c+=4,a.setFloat32(c,_.y,!0),c+=4,a.setFloat32(c,_.z,!0),c+=4):a+="			vertex "+_.x+" "+_.y+" "+_.z+`
`}}}const Bd={POSITION:["byte","byte normalized","unsigned byte","unsigned byte normalized","short","short normalized","unsigned short","unsigned short normalized"],NORMAL:["byte normalized","short normalized"],TANGENT:["byte normalized","short normalized"],TEXCOORD:["byte","byte normalized","unsigned byte","short","short normalized","unsigned short"]};class ca{constructor(){this.textureUtils=null,this.pluginCallbacks=[],this.register(function(e){return new Ww(e)}),this.register(function(e){return new Xw(e)}),this.register(function(e){return new $w(e)}),this.register(function(e){return new Kw(e)}),this.register(function(e){return new Zw(e)}),this.register(function(e){return new Jw(e)}),this.register(function(e){return new Yw(e)}),this.register(function(e){return new jw(e)}),this.register(function(e){return new qw(e)}),this.register(function(e){return new Qw(e)}),this.register(function(e){return new eS(e)}),this.register(function(e){return new tS(e)}),this.register(function(e){return new nS(e)}),this.register(function(e){return new iS(e)})}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}setTextureUtils(e){return this.textureUtils=e,this}parse(e,t,n,i){const r=new Hw,a=[];for(let c=0,u=this.pluginCallbacks.length;c<u;c++)a.push(this.pluginCallbacks[c](r));r.setPlugins(a),r.setTextureUtils(this.textureUtils),r.writeAsync(e,t,i).catch(n)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,i,r,t)})}}const lt={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,REPEAT:10497},Ul="KHR_mesh_quantization",En={};En[At]=lt.NEAREST;En[yp]=lt.NEAREST_MIPMAP_NEAREST;En[Er]=lt.NEAREST_MIPMAP_LINEAR;En[Nt]=lt.LINEAR;En[Ho]=lt.LINEAR_MIPMAP_NEAREST;En[Ii]=lt.LINEAR_MIPMAP_LINEAR;En[mn]=lt.CLAMP_TO_EDGE;En[Zo]=lt.REPEAT;En[Jo]=lt.MIRRORED_REPEAT;const kd={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},Nw=new ke,zd=12,Ow=1179937895,Fw=2,Vd=8,Bw=1313821514,kw=5130562;function Tr(s,e){return s.length===e.length&&s.every(function(t,n){return t===e[n]})}function zw(s){return new TextEncoder().encode(s).buffer}function Vw(s){return Tr(s.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function Gw(s,e,t){const n={min:new Array(s.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(s.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let i=e;i<e+t;i++)for(let r=0;r<s.itemSize;r++){let a;s.itemSize>4?a=s.array[i*s.itemSize+r]:(r===0?a=s.getX(i):r===1?a=s.getY(i):r===2?a=s.getZ(i):r===3&&(a=s.getW(i)),s.normalized===!0&&(a=ta.normalize(a,s.array))),n.min[r]=Math.min(n.min[r],a),n.max[r]=Math.max(n.max[r],a)}return n}function Jp(s){return Math.ceil(s/4)*4}function Nl(s,e=0){const t=Jp(s.byteLength);if(t!==s.byteLength){const n=new Uint8Array(t);if(n.set(new Uint8Array(s)),e!==0)for(let i=s.byteLength;i<t;i++)n[i]=e;return n.buffer}return s}function Gd(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}function Hd(s,e){if(s.toBlob!==void 0)return new Promise(n=>s.toBlob(n,e));let t;return e==="image/jpeg"?t=.92:e==="image/webp"&&(t=.8),s.convertToBlob({type:e,quality:t})}class Hw{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.extensionsRequired={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter r"+da}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map},this.textureUtils=null}setPlugins(e){this.plugins=e}setTextureUtils(e){this.textureUtils=e}async writeAsync(e,t,n={}){this.options=Object.assign({binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1},n),this.options.animations.length>0&&(this.options.trs=!0),await this.processInputAsync(e),await Promise.all(this.pending);const i=this,r=i.buffers,a=i.json;n=i.options;const c=i.extensionsUsed,u=i.extensionsRequired,d=new Blob(r,{type:"application/octet-stream"}),f=Object.keys(c),m=Object.keys(u);if(f.length>0&&(a.extensionsUsed=f),m.length>0&&(a.extensionsRequired=m),a.buffers&&a.buffers.length>0&&(a.buffers[0].byteLength=d.size),n.binary===!0){const v=new FileReader;v.readAsArrayBuffer(d),v.onloadend=function(){const g=Nl(v.result),b=new DataView(new ArrayBuffer(Vd));b.setUint32(0,g.byteLength,!0),b.setUint32(4,kw,!0);const y=Nl(zw(JSON.stringify(a)),32),x=new DataView(new ArrayBuffer(Vd));x.setUint32(0,y.byteLength,!0),x.setUint32(4,Bw,!0);const _=new ArrayBuffer(zd),w=new DataView(_);w.setUint32(0,Ow,!0),w.setUint32(4,Fw,!0);const E=zd+x.byteLength+y.byteLength+b.byteLength+g.byteLength;w.setUint32(8,E,!0);const S=new Blob([_,x,y,b,g],{type:"application/octet-stream"}),P=new FileReader;P.readAsArrayBuffer(S),P.onloadend=function(){t(P.result)}}}else if(a.buffers&&a.buffers.length>0){const v=new FileReader;v.readAsDataURL(d),v.onloadend=function(){const g=v.result;a.buffers[0].uri=g,t(a)}}else t(a)}serializeUserData(e,t){if(Object.keys(e.userData).length===0)return;const n=this.options,i=this.extensionsUsed;try{const r=JSON.parse(JSON.stringify(e.userData));if(n.includeCustomExtensions&&r.gltfExtensions){t.extensions===void 0&&(t.extensions={});for(const a in r.gltfExtensions)t.extensions[a]=r.gltfExtensions[a],i[a]=!0;delete r.gltfExtensions}Object.keys(r).length>0&&(t.extras=r)}catch(r){console.warn("THREE.GLTFExporter: userData of '"+e.name+"' won't be serialized because of JSON.stringify error - "+r.message)}}getUID(e,t=!1){if(this.uids.has(e)===!1){const i=new Map;i.set(!0,this.uid++),i.set(!1,this.uid++),this.uids.set(e,i)}return this.uids.get(e).get(t)}isNormalizedNormalAttribute(e){if(this.cache.attributesNormalized.has(e))return!1;const n=new L;for(let i=0,r=e.count;i<r;i++)if(Math.abs(n.fromBufferAttribute(e,i).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(e){const t=this.cache;if(t.attributesNormalized.has(e))return t.attributesNormalized.get(e);const n=e.clone(),i=new L;for(let r=0,a=n.count;r<a;r++)i.fromBufferAttribute(n,r),i.x===0&&i.y===0&&i.z===0?i.setX(1):i.normalize(),n.setXYZ(r,i.x,i.y,i.z);return t.attributesNormalized.set(e,n),n}applyTextureTransform(e,t){let n=!1;const i={};(t.offset.x!==0||t.offset.y!==0)&&(i.offset=t.offset.toArray(),n=!0),t.rotation!==0&&(i.rotation=t.rotation,n=!0),(t.repeat.x!==1||t.repeat.y!==1)&&(i.scale=t.repeat.toArray(),n=!0),n&&(e.extensions=e.extensions||{},e.extensions.KHR_texture_transform=i,this.extensionsUsed.KHR_texture_transform=!0)}async buildMetalRoughTextureAsync(e,t){if(e===t)return e;function n(g){return g.colorSpace===wn?function(y){return y<.04045?y*.0773993808:Math.pow(y*.9478672986+.0521327014,2.4)}:function(y){return y}}e instanceof yl&&(e=await this.decompressTextureAsync(e)),t instanceof yl&&(t=await this.decompressTextureAsync(t));const i=e?e.image:null,r=t?t.image:null,a=Math.max(i?i.width:0,r?r.width:0),c=Math.max(i?i.height:0,r?r.height:0),u=Gd();u.width=a,u.height=c;const d=u.getContext("2d",{willReadFrequently:!0});d.fillStyle="#00ffff",d.fillRect(0,0,a,c);const f=d.getImageData(0,0,a,c);if(i){d.drawImage(i,0,0,a,c);const g=n(e),b=d.getImageData(0,0,a,c).data;for(let y=2;y<b.length;y+=4)f.data[y]=g(b[y]/256)*256}if(r){d.drawImage(r,0,0,a,c);const g=n(t),b=d.getImageData(0,0,a,c).data;for(let y=1;y<b.length;y+=4)f.data[y]=g(b[y]/256)*256}d.putImageData(f,0,0);const v=(e||t).clone();return v.source=new Kc(u),v.colorSpace=li,v.channel=(e||t).channel,e&&t&&e.channel!==t.channel&&console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."),console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."),v}async decompressTextureAsync(e,t=1/0){if(this.textureUtils===null)throw new Error("THREE.GLTFExporter: setTextureUtils() must be called to process compressed textures.");return await this.textureUtils.decompress(e,t)}processBuffer(e){const t=this.json,n=this.buffers;return t.buffers||(t.buffers=[{byteLength:0}]),n.push(e),0}processBufferView(e,t,n,i,r){const a=this.json;a.bufferViews||(a.bufferViews=[]);let c;switch(t){case lt.BYTE:case lt.UNSIGNED_BYTE:c=1;break;case lt.SHORT:case lt.UNSIGNED_SHORT:c=2;break;default:c=4}let u=e.itemSize*c;r===lt.ARRAY_BUFFER&&(u=Math.ceil(u/4)*4);const d=Jp(i*u),f=new DataView(new ArrayBuffer(d));let m=0;for(let b=n;b<n+i;b++){for(let y=0;y<e.itemSize;y++){let x;e.itemSize>4?x=e.array[b*e.itemSize+y]:(y===0?x=e.getX(b):y===1?x=e.getY(b):y===2?x=e.getZ(b):y===3&&(x=e.getW(b)),e.normalized===!0&&(x=ta.normalize(x,e.array))),t===lt.FLOAT?f.setFloat32(m,x,!0):t===lt.INT?f.setInt32(m,x,!0):t===lt.UNSIGNED_INT?f.setUint32(m,x,!0):t===lt.SHORT?f.setInt16(m,x,!0):t===lt.UNSIGNED_SHORT?f.setUint16(m,x,!0):t===lt.BYTE?f.setInt8(m,x):t===lt.UNSIGNED_BYTE&&f.setUint8(m,x),m+=c}m%u!==0&&(m+=u-m%u)}const v={buffer:this.processBuffer(f.buffer),byteOffset:this.byteOffset,byteLength:d};return r!==void 0&&(v.target=r),r===lt.ARRAY_BUFFER&&(v.byteStride=u),this.byteOffset+=d,a.bufferViews.push(v),{id:a.bufferViews.length-1,byteLength:0}}processBufferViewImage(e){const t=this,n=t.json;return n.bufferViews||(n.bufferViews=[]),new Promise(function(i){const r=new FileReader;r.readAsArrayBuffer(e),r.onloadend=function(){const a=Nl(r.result),c={buffer:t.processBuffer(a),byteOffset:t.byteOffset,byteLength:a.byteLength};t.byteOffset+=a.byteLength,i(n.bufferViews.push(c)-1)}})}processAccessor(e,t,n,i){const r=this.json,a={1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",9:"MAT3",16:"MAT4"};let c;if(e.array.constructor===Float32Array)c=lt.FLOAT;else if(e.array.constructor===Int32Array)c=lt.INT;else if(e.array.constructor===Uint32Array)c=lt.UNSIGNED_INT;else if(e.array.constructor===Int16Array)c=lt.SHORT;else if(e.array.constructor===Uint16Array)c=lt.UNSIGNED_SHORT;else if(e.array.constructor===Int8Array)c=lt.BYTE;else if(e.array.constructor===Uint8Array)c=lt.UNSIGNED_BYTE;else throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: "+e.array.constructor.name);if(n===void 0&&(n=0),(i===void 0||i===1/0)&&(i=e.count),i===0)return null;const u=Gw(e,n,i);let d;t!==void 0&&(d=e===t.index?lt.ELEMENT_ARRAY_BUFFER:lt.ARRAY_BUFFER);const f=this.processBufferView(e,c,n,i,d),m={bufferView:f.id,byteOffset:f.byteOffset,componentType:c,count:i,max:u.max,min:u.min,type:a[e.itemSize]};return e.normalized===!0&&(m.normalized=!0),r.accessors||(r.accessors=[]),r.accessors.push(m)-1}processImage(e,t,n,i="image/png"){if(e!==null){const r=this,a=r.cache,c=r.json,u=r.options,d=r.pending;a.images.has(e)||a.images.set(e,{});const f=a.images.get(e),m=i+":flipY/"+n.toString();if(f[m]!==void 0)return f[m];c.images||(c.images=[]);const v={mimeType:i},g=Gd();g.width=Math.min(e.width,u.maxTextureSize),g.height=Math.min(e.height,u.maxTextureSize);const b=g.getContext("2d",{willReadFrequently:!0});if(n===!0&&(b.translate(0,g.height),b.scale(1,-1)),e.data!==void 0){t!==Ot&&console.error("GLTFExporter: Only RGBAFormat is supported.",t),(e.width>u.maxTextureSize||e.height>u.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",e);const x=new Uint8ClampedArray(e.height*e.width*4);for(let _=0;_<x.length;_+=4)x[_+0]=e.data[_+0],x[_+1]=e.data[_+1],x[_+2]=e.data[_+2],x[_+3]=e.data[_+3];b.putImageData(new ImageData(x,e.width,e.height),0,0)}else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas)b.drawImage(e,0,0,g.width,g.height);else throw new Error("THREE.GLTFExporter: Invalid image type. Use HTMLImageElement, HTMLCanvasElement, ImageBitmap or OffscreenCanvas.");u.binary===!0?d.push(Hd(g,i).then(x=>r.processBufferViewImage(x)).then(x=>{v.bufferView=x})):g.toDataURL!==void 0?v.uri=g.toDataURL(i):d.push(Hd(g,i).then(x=>new FileReader().readAsDataURL(x)).then(x=>{v.uri=x}));const y=c.images.push(v)-1;return f[m]=y,y}else throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.")}processSampler(e){const t=this.json;t.samplers||(t.samplers=[]);const n={magFilter:En[e.magFilter],minFilter:En[e.minFilter],wrapS:En[e.wrapS],wrapT:En[e.wrapT]};return t.samplers.push(n)-1}async processTextureAsync(e){const n=this.options,i=this.cache,r=this.json;if(i.textures.has(e))return i.textures.get(e);r.textures||(r.textures=[]),e instanceof yl&&(e=await this.decompressTextureAsync(e,n.maxTextureSize));let a=e.userData.mimeType;a==="image/webp"&&(a="image/png");const c={sampler:this.processSampler(e),source:this.processImage(e.image,e.format,e.flipY,a)};e.name&&(c.name=e.name),await this._invokeAllAsync(async function(d){d.writeTexture&&await d.writeTexture(e,c)});const u=r.textures.push(c)-1;return i.textures.set(e,u),u}async processMaterialAsync(e){const t=this.cache,n=this.json;if(t.materials.has(e))return t.materials.get(e);if(e.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;n.materials||(n.materials=[]);const i={pbrMetallicRoughness:{}};e.isMeshStandardMaterial!==!0&&e.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");const r=e.color.toArray().concat([e.opacity]);if(Tr(r,[1,1,1,1])||(i.pbrMetallicRoughness.baseColorFactor=r),e.isMeshStandardMaterial?(i.pbrMetallicRoughness.metallicFactor=e.metalness,i.pbrMetallicRoughness.roughnessFactor=e.roughness):(i.pbrMetallicRoughness.metallicFactor=0,i.pbrMetallicRoughness.roughnessFactor=1),e.metalnessMap||e.roughnessMap){const c=await this.buildMetalRoughTextureAsync(e.metalnessMap,e.roughnessMap),u={index:await this.processTextureAsync(c),texCoord:c.channel};this.applyTextureTransform(u,c),i.pbrMetallicRoughness.metallicRoughnessTexture=u}if(e.map){const c={index:await this.processTextureAsync(e.map),texCoord:e.map.channel};this.applyTextureTransform(c,e.map),i.pbrMetallicRoughness.baseColorTexture=c}if(e.emissive){const c=e.emissive;if(Math.max(c.r,c.g,c.b)>0&&(i.emissiveFactor=e.emissive.toArray()),e.emissiveMap){const d={index:await this.processTextureAsync(e.emissiveMap),texCoord:e.emissiveMap.channel};this.applyTextureTransform(d,e.emissiveMap),i.emissiveTexture=d}}if(e.normalMap){const c={index:await this.processTextureAsync(e.normalMap),texCoord:e.normalMap.channel};e.normalScale&&e.normalScale.x!==1&&(c.scale=e.normalScale.x),this.applyTextureTransform(c,e.normalMap),i.normalTexture=c}if(e.aoMap){const c={index:await this.processTextureAsync(e.aoMap),texCoord:e.aoMap.channel};e.aoMapIntensity!==1&&(c.strength=e.aoMapIntensity),this.applyTextureTransform(c,e.aoMap),i.occlusionTexture=c}e.transparent?i.alphaMode="BLEND":e.alphaTest>0&&(i.alphaMode="MASK",i.alphaCutoff=e.alphaTest),e.side===Bn&&(i.doubleSided=!0),e.name!==""&&(i.name=e.name),this.serializeUserData(e,i),await this._invokeAllAsync(async function(c){c.writeMaterialAsync&&await c.writeMaterialAsync(e,i)});const a=n.materials.push(i)-1;return t.materials.set(e,a),a}async processMeshAsync(e){const t=this.cache,n=this.json,i=[e.geometry.uuid];if(Array.isArray(e.material))for(let S=0,P=e.material.length;S<P;S++)i.push(e.material[S].uuid);else i.push(e.material.uuid);const r=i.join(":");if(t.meshes.has(r))return t.meshes.get(r);const a=e.geometry;let c;e.isLineSegments?c=lt.LINES:e.isLineLoop?c=lt.LINE_LOOP:e.isLine?c=lt.LINE_STRIP:e.isPoints?c=lt.POINTS:c=e.material.wireframe?lt.LINES:lt.TRIANGLES;const u={},d={},f=[],m=[],v={uv:"TEXCOORD_0",uv1:"TEXCOORD_1",uv2:"TEXCOORD_2",uv3:"TEXCOORD_3",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},g=a.getAttribute("normal");g!==void 0&&!this.isNormalizedNormalAttribute(g)&&(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),a.setAttribute("normal",this.createNormalizedNormalAttribute(g)));let b=null;for(let S in a.attributes){if(S.slice(0,5)==="morph")continue;const P=a.attributes[S];if(S=v[S]||S.toUpperCase(),/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(S)||(S="_"+S),t.attributes.has(this.getUID(P))){d[S]=t.attributes.get(this.getUID(P));continue}b=null;const O=P.array;S==="JOINTS_0"&&!(O instanceof Uint16Array)&&!(O instanceof Uint8Array)?(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),b=new Ut(new Uint16Array(O),P.itemSize,P.normalized)):(O instanceof Uint32Array||O instanceof Int32Array)&&!S.startsWith("_")&&(console.warn(`GLTFExporter: Attribute "${S}" converted to type FLOAT.`),b=ca.Utils.toFloat32BufferAttribute(P));const U=this.processAccessor(b||P,a);U!==null&&(S.startsWith("_")||this.detectMeshQuantization(S,P),d[S]=U,t.attributes.set(this.getUID(P),U))}if(g!==void 0&&a.setAttribute("normal",g),Object.keys(d).length===0)return null;if(e.morphTargetInfluences!==void 0&&e.morphTargetInfluences.length>0){const S=[],P=[],D={};if(e.morphTargetDictionary!==void 0)for(const O in e.morphTargetDictionary)D[e.morphTargetDictionary[O]]=O;for(let O=0;O<e.morphTargetInfluences.length;++O){const U={};let I=!1;for(const C in a.morphAttributes){if(C!=="position"&&C!=="normal"){I||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),I=!0);continue}const F=a.morphAttributes[C][O],Y=C.toUpperCase(),X=a.attributes[C];if(t.attributes.has(this.getUID(F,!0))){U[Y]=t.attributes.get(this.getUID(F,!0));continue}const J=F.clone();if(!a.morphTargetsRelative)for(let Q=0,ee=F.count;Q<ee;Q++)for(let ne=0;ne<F.itemSize;ne++)ne===0&&J.setX(Q,F.getX(Q)-X.getX(Q)),ne===1&&J.setY(Q,F.getY(Q)-X.getY(Q)),ne===2&&J.setZ(Q,F.getZ(Q)-X.getZ(Q)),ne===3&&J.setW(Q,F.getW(Q)-X.getW(Q));U[Y]=this.processAccessor(J,a),t.attributes.set(this.getUID(X,!0),U[Y])}m.push(U),S.push(e.morphTargetInfluences[O]),e.morphTargetDictionary!==void 0&&P.push(D[O])}u.weights=S,P.length>0&&(u.extras={},u.extras.targetNames=P)}const y=Array.isArray(e.material);if(y&&a.groups.length===0)return null;let x=!1;if(y&&a.index===null){const S=[];for(let P=0,D=a.attributes.position.count;P<D;P++)S[P]=P;a.setIndex(S),x=!0}const _=y?e.material:[e.material],w=y?a.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let S=0,P=w.length;S<P;S++){const D={mode:c,attributes:d};if(this.serializeUserData(a,D),m.length>0&&(D.targets=m),a.index!==null){let U=this.getUID(a.index);(w[S].start!==void 0||w[S].count!==void 0)&&(U+=":"+w[S].start+":"+w[S].count),t.attributes.has(U)?D.indices=t.attributes.get(U):(D.indices=this.processAccessor(a.index,a,w[S].start,w[S].count),t.attributes.set(U,D.indices)),D.indices===null&&delete D.indices}const O=await this.processMaterialAsync(_[w[S].materialIndex]);O!==null&&(D.material=O),f.push(D)}x===!0&&a.setIndex(null),u.primitives=f,n.meshes||(n.meshes=[]),await this._invokeAllAsync(function(S){S.writeMesh&&S.writeMesh(e,u)});const E=n.meshes.push(u)-1;return t.meshes.set(r,E),E}detectMeshQuantization(e,t){if(this.extensionsUsed[Ul])return;let n;switch(t.array.constructor){case Int8Array:n="byte";break;case Uint8Array:n="unsigned byte";break;case Int16Array:n="short";break;case Uint16Array:n="unsigned short";break;default:return}t.normalized&&(n+=" normalized");const i=e.split("_",1)[0];Bd[i]&&Bd[i].includes(n)&&(this.extensionsUsed[Ul]=!0,this.extensionsRequired[Ul]=!0)}processCamera(e){const t=this.json;t.cameras||(t.cameras=[]);const n=e.isOrthographicCamera,i={type:n?"orthographic":"perspective"};return n?i.orthographic={xmag:e.right*2,ymag:e.top*2,zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near}:i.perspective={aspectRatio:e.aspect,yfov:ta.degToRad(e.fov),zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near},e.name!==""&&(i.name=e.type),t.cameras.push(i)-1}processAnimation(e,t){const n=this.json,i=this.nodeMap;n.animations||(n.animations=[]),e=ca.Utils.mergeMorphTargetTracks(e.clone(),t);const r=e.tracks,a=[],c=[];for(let u=0;u<r.length;++u){const d=r[u],f=vt.parseTrackName(d.name);let m=vt.findNode(t,f.nodeName);const v=kd[f.propertyName];if(f.objectName==="bones"&&(m.isSkinnedMesh===!0?m=m.skeleton.getBoneByName(f.objectIndex):m=void 0),!m||!v){console.warn('THREE.GLTFExporter: Could not export animation track "%s".',d.name);continue}const g=1;let b=d.values.length/d.times.length;v===kd.morphTargetInfluences&&(b/=m.morphTargetInfluences.length);let y;d.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(y="CUBICSPLINE",b/=3):d.getInterpolation()===Kv?y="STEP":y="LINEAR",c.push({input:this.processAccessor(new Ut(d.times,g)),output:this.processAccessor(new Ut(d.values,b)),interpolation:y}),a.push({sampler:c.length-1,target:{node:i.get(m),path:v}})}return n.animations.push({name:e.name||"clip_"+n.animations.length,samplers:c,channels:a}),n.animations.length-1}processSkin(e){const t=this.json,n=this.nodeMap,i=t.nodes[n.get(e)],r=e.skeleton;if(r===void 0)return null;const a=e.skeleton.bones[0];if(a===void 0)return null;const c=[],u=new Float32Array(r.bones.length*16),d=new ut;for(let m=0;m<r.bones.length;++m)c.push(n.get(r.bones[m])),d.copy(r.boneInverses[m]),d.multiply(e.bindMatrix).toArray(u,m*16);return t.skins===void 0&&(t.skins=[]),t.skins.push({inverseBindMatrices:this.processAccessor(new Ut(u,16)),joints:c,skeleton:n.get(a)}),i.skin=t.skins.length-1}async processNodeAsync(e){const t=this.json,n=this.options,i=this.nodeMap;t.nodes||(t.nodes=[]);const r={};if(n.trs){const c=e.quaternion.toArray(),u=e.position.toArray(),d=e.scale.toArray();Tr(c,[0,0,0,1])||(r.rotation=c),Tr(u,[0,0,0])||(r.translation=u),Tr(d,[1,1,1])||(r.scale=d)}else e.matrixAutoUpdate&&e.updateMatrix(),Vw(e.matrix)===!1&&(r.matrix=e.matrix.elements);if(e.name!==""&&(r.name=String(e.name)),this.serializeUserData(e,r),e.isMesh||e.isLine||e.isPoints){const c=await this.processMeshAsync(e);c!==null&&(r.mesh=c)}else e.isCamera&&(r.camera=this.processCamera(e));if(e.isSkinnedMesh&&this.skins.push(e),e.children.length>0){const c=[];for(let u=0,d=e.children.length;u<d;u++){const f=e.children[u];if(f.visible||n.onlyVisible===!1){const m=await this.processNodeAsync(f);m!==null&&c.push(m)}}c.length>0&&(r.children=c)}await this._invokeAllAsync(function(c){c.writeNode&&c.writeNode(e,r)});const a=t.nodes.push(r)-1;return i.set(e,a),a}async processSceneAsync(e){const t=this.json,n=this.options;t.scenes||(t.scenes=[],t.scene=0);const i={};e.name!==""&&(i.name=e.name),t.scenes.push(i);const r=[];for(let a=0,c=e.children.length;a<c;a++){const u=e.children[a];if(u.visible||n.onlyVisible===!1){const d=await this.processNodeAsync(u);d!==null&&r.push(d)}}r.length>0&&(i.nodes=r),this.serializeUserData(e,i)}async processObjectsAsync(e){const t=new Fi;t.name="AuxScene";for(let n=0;n<e.length;n++)t.children.push(e[n]);await this.processSceneAsync(t)}async processInputAsync(e){const t=this.options;e=e instanceof Array?e:[e],await this._invokeAllAsync(function(i){i.beforeParse&&i.beforeParse(e)});const n=[];for(let i=0;i<e.length;i++)e[i]instanceof Fi?await this.processSceneAsync(e[i]):n.push(e[i]);n.length>0&&await this.processObjectsAsync(n);for(let i=0;i<this.skins.length;++i)this.processSkin(this.skins[i]);for(let i=0;i<t.animations.length;++i)this.processAnimation(t.animations[i],e[0]);await this._invokeAllAsync(function(i){i.afterParse&&i.afterParse(e)})}async _invokeAllAsync(e){for(let t=0,n=this.plugins.length;t<n;t++)await e(this.plugins[t])}}class Ww{constructor(e){this.writer=e,this.name="KHR_lights_punctual"}writeNode(e,t){if(!e.isLight)return;if(!e.isDirectionalLight&&!e.isPointLight&&!e.isSpotLight){console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",e);return}const n=this.writer,i=n.json,r=n.extensionsUsed,a={};e.name&&(a.name=e.name),a.color=e.color.toArray(),a.intensity=e.intensity,e.isDirectionalLight?a.type="directional":e.isPointLight?(a.type="point",e.distance>0&&(a.range=e.distance)):e.isSpotLight&&(a.type="spot",e.distance>0&&(a.range=e.distance),a.spot={},a.spot.innerConeAngle=(1-e.penumbra)*e.angle,a.spot.outerConeAngle=e.angle),e.decay!==void 0&&e.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),e.target&&(e.target.parent!==e||e.target.position.x!==0||e.target.position.y!==0||e.target.position.z!==-1)&&console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),r[this.name]||(i.extensions=i.extensions||{},i.extensions[this.name]={lights:[]},r[this.name]=!0);const c=i.extensions[this.name].lights;c.push(a),t.extensions=t.extensions||{},t.extensions[this.name]={light:c.length-1}}}class Xw{constructor(e){this.writer=e,this.name="KHR_materials_unlit"}async writeMaterialAsync(e,t){if(!e.isMeshBasicMaterial)return;const i=this.writer.extensionsUsed;t.extensions=t.extensions||{},t.extensions[this.name]={},i[this.name]=!0,t.pbrMetallicRoughness.metallicFactor=0,t.pbrMetallicRoughness.roughnessFactor=.9}}class Yw{constructor(e){this.writer=e,this.name="KHR_materials_clearcoat"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.clearcoat===0)return;const n=this.writer,i=n.extensionsUsed,r={};if(r.clearcoatFactor=e.clearcoat,e.clearcoatMap){const a={index:await n.processTextureAsync(e.clearcoatMap),texCoord:e.clearcoatMap.channel};n.applyTextureTransform(a,e.clearcoatMap),r.clearcoatTexture=a}if(r.clearcoatRoughnessFactor=e.clearcoatRoughness,e.clearcoatRoughnessMap){const a={index:await n.processTextureAsync(e.clearcoatRoughnessMap),texCoord:e.clearcoatRoughnessMap.channel};n.applyTextureTransform(a,e.clearcoatRoughnessMap),r.clearcoatRoughnessTexture=a}if(e.clearcoatNormalMap){const a={index:await n.processTextureAsync(e.clearcoatNormalMap),texCoord:e.clearcoatNormalMap.channel};e.clearcoatNormalScale.x!==1&&(a.scale=e.clearcoatNormalScale.x),n.applyTextureTransform(a,e.clearcoatNormalMap),r.clearcoatNormalTexture=a}t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class jw{constructor(e){this.writer=e,this.name="KHR_materials_dispersion"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.dispersion===0)return;const i=this.writer.extensionsUsed,r={};r.dispersion=e.dispersion,t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class qw{constructor(e){this.writer=e,this.name="KHR_materials_iridescence"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.iridescence===0)return;const n=this.writer,i=n.extensionsUsed,r={};if(r.iridescenceFactor=e.iridescence,e.iridescenceMap){const a={index:await n.processTextureAsync(e.iridescenceMap),texCoord:e.iridescenceMap.channel};n.applyTextureTransform(a,e.iridescenceMap),r.iridescenceTexture=a}if(r.iridescenceIor=e.iridescenceIOR,r.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],r.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1],e.iridescenceThicknessMap){const a={index:await n.processTextureAsync(e.iridescenceThicknessMap),texCoord:e.iridescenceThicknessMap.channel};n.applyTextureTransform(a,e.iridescenceThicknessMap),r.iridescenceThicknessTexture=a}t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class $w{constructor(e){this.writer=e,this.name="KHR_materials_transmission"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;const n=this.writer,i=n.extensionsUsed,r={};if(r.transmissionFactor=e.transmission,e.transmissionMap){const a={index:await n.processTextureAsync(e.transmissionMap),texCoord:e.transmissionMap.channel};n.applyTextureTransform(a,e.transmissionMap),r.transmissionTexture=a}t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class Kw{constructor(e){this.writer=e,this.name="KHR_materials_volume"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;const n=this.writer,i=n.extensionsUsed,r={};if(r.thicknessFactor=e.thickness,e.thicknessMap){const a={index:await n.processTextureAsync(e.thicknessMap),texCoord:e.thicknessMap.channel};n.applyTextureTransform(a,e.thicknessMap),r.thicknessTexture=a}e.attenuationDistance!==1/0&&(r.attenuationDistance=e.attenuationDistance),r.attenuationColor=e.attenuationColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class Zw{constructor(e){this.writer=e,this.name="KHR_materials_ior"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.ior===1.5)return;const i=this.writer.extensionsUsed,r={};r.ior=e.ior,t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class Jw{constructor(e){this.writer=e,this.name="KHR_materials_specular"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.specularIntensity===1&&e.specularColor.equals(Nw)&&!e.specularIntensityMap&&!e.specularColorMap)return;const n=this.writer,i=n.extensionsUsed,r={};if(e.specularIntensityMap){const a={index:await n.processTextureAsync(e.specularIntensityMap),texCoord:e.specularIntensityMap.channel};n.applyTextureTransform(a,e.specularIntensityMap),r.specularTexture=a}if(e.specularColorMap){const a={index:await n.processTextureAsync(e.specularColorMap),texCoord:e.specularColorMap.channel};n.applyTextureTransform(a,e.specularColorMap),r.specularColorTexture=a}r.specularFactor=e.specularIntensity,r.specularColorFactor=e.specularColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class Qw{constructor(e){this.writer=e,this.name="KHR_materials_sheen"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.sheen==0)return;const n=this.writer,i=n.extensionsUsed,r={};if(e.sheenRoughnessMap){const a={index:await n.processTextureAsync(e.sheenRoughnessMap),texCoord:e.sheenRoughnessMap.channel};n.applyTextureTransform(a,e.sheenRoughnessMap),r.sheenRoughnessTexture=a}if(e.sheenColorMap){const a={index:await n.processTextureAsync(e.sheenColorMap),texCoord:e.sheenColorMap.channel};n.applyTextureTransform(a,e.sheenColorMap),r.sheenColorTexture=a}r.sheenRoughnessFactor=e.sheenRoughness,r.sheenColorFactor=e.sheenColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class eS{constructor(e){this.writer=e,this.name="KHR_materials_anisotropy"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.anisotropy==0)return;const n=this.writer,i=n.extensionsUsed,r={};if(e.anisotropyMap){const a={index:await n.processTextureAsync(e.anisotropyMap)};n.applyTextureTransform(a,e.anisotropyMap),r.anisotropyTexture=a}r.anisotropyStrength=e.anisotropy,r.anisotropyRotation=e.anisotropyRotation,t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class tS{constructor(e){this.writer=e,this.name="KHR_materials_emissive_strength"}async writeMaterialAsync(e,t){if(!e.isMeshStandardMaterial||e.emissiveIntensity===1)return;const i=this.writer.extensionsUsed,r={};r.emissiveStrength=e.emissiveIntensity,t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class nS{constructor(e){this.writer=e,this.name="EXT_materials_bump"}async writeMaterialAsync(e,t){if(!e.isMeshStandardMaterial||e.bumpScale===1&&!e.bumpMap)return;const n=this.writer,i=n.extensionsUsed,r={};if(e.bumpMap){const a={index:await n.processTextureAsync(e.bumpMap),texCoord:e.bumpMap.channel};n.applyTextureTransform(a,e.bumpMap),r.bumpTexture=a}r.bumpFactor=e.bumpScale,t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class iS{constructor(e){this.writer=e,this.name="EXT_mesh_gpu_instancing"}writeNode(e,t){if(!e.isInstancedMesh)return;const n=this.writer,i=e,r=new Float32Array(i.count*3),a=new Float32Array(i.count*4),c=new Float32Array(i.count*3),u=new ut,d=new L,f=new Bi,m=new L;for(let g=0;g<i.count;g++)i.getMatrixAt(g,u),u.decompose(d,f,m),d.toArray(r,g*3),f.toArray(a,g*4),m.toArray(c,g*3);const v={TRANSLATION:n.processAccessor(new Ut(r,3)),ROTATION:n.processAccessor(new Ut(a,4)),SCALE:n.processAccessor(new Ut(c,3))};i.instanceColor&&(v._COLOR_0=n.processAccessor(i.instanceColor)),t.extensions=t.extensions||{},t.extensions[this.name]={attributes:v},n.extensionsUsed[this.name]=!0,n.extensionsRequired[this.name]=!0}}ca.Utils={insertKeyframe:function(s,e){const n=s.getValueSize(),i=new s.TimeBufferType(s.times.length+1),r=new s.ValueBufferType(s.values.length+n),a=s.createInterpolant(new s.ValueBufferType(n));let c;if(s.times.length===0){i[0]=e;for(let u=0;u<n;u++)r[u]=0;c=0}else if(e<s.times[0]){if(Math.abs(s.times[0]-e)<.001)return 0;i[0]=e,i.set(s.times,1),r.set(a.evaluate(e),0),r.set(s.values,n),c=0}else if(e>s.times[s.times.length-1]){if(Math.abs(s.times[s.times.length-1]-e)<.001)return s.times.length-1;i[i.length-1]=e,i.set(s.times,0),r.set(s.values,0),r.set(a.evaluate(e),s.values.length),c=i.length-1}else for(let u=0;u<s.times.length;u++){if(Math.abs(s.times[u]-e)<.001)return u;if(s.times[u]<e&&s.times[u+1]>e){i.set(s.times.slice(0,u+1),0),i[u+1]=e,i.set(s.times.slice(u+1),u+2),r.set(s.values.slice(0,(u+1)*n),0),r.set(a.evaluate(e),(u+1)*n),r.set(s.values.slice((u+1)*n),(u+2)*n),c=u+1;break}}return s.times=i,s.values=r,c},mergeMorphTargetTracks:function(s,e){const t=[],n={},i=s.tracks;for(let r=0;r<i.length;++r){let a=i[r];const c=vt.parseTrackName(a.name),u=vt.findNode(e,c.nodeName);if(c.propertyName!=="morphTargetInfluences"||c.propertyIndex===void 0){t.push(a);continue}if(a.createInterpolant!==a.InterpolantFactoryMethodDiscrete&&a.createInterpolant!==a.InterpolantFactoryMethodLinear){if(a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),a=a.clone(),a.setInterpolation(Zv)}const d=u.morphTargetInfluences.length,f=u.morphTargetDictionary[c.propertyIndex];if(f===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+c.propertyIndex);let m;if(n[u.uuid]===void 0){m=a.clone();const g=new m.ValueBufferType(d*m.times.length);for(let b=0;b<m.times.length;b++)g[b*d+f]=m.values[b];m.name=(c.nodeName||"")+".morphTargetInfluences",m.values=g,n[u.uuid]=m,t.push(m);continue}const v=a.createInterpolant(new a.ValueBufferType(1));m=n[u.uuid];for(let g=0;g<m.times.length;g++)m.values[g*d+f]=v.evaluate(m.times[g]);for(let g=0;g<a.times.length;g++){const b=this.insertKeyframe(m,a.times[g]);m.values[b*d+f]=a.values[g]}}return s.tracks=t,s},toFloat32BufferAttribute:function(s){const e=new Ut(new Float32Array(s.count*s.itemSize),s.itemSize,!1);if(!s.normalized&&!s.isInterleavedBufferAttribute)return e.array.set(s.array),e;for(let t=0,n=s.count;t<n;t++)for(let i=0;i<s.itemSize;i++)e.setComponent(t,i,s.getComponent(t,i));return e}};const Wd={shininess:1e3,specularColor:65793};new ke(16777215);class rs{static save(e,t){const n=window.URL.createObjectURL(e),i=document.createElement("a");i.href=n,i.download=t,i.style.display="none",document.body.appendChild(i),i.click(),document.body.removeChild(i),window.URL.revokeObjectURL(n)}static saveString(e,t){const n=new Blob([e],{type:"text/plain;charset=utf-8"});rs.save(n,t)}static saveBinary(e,t){const n=new Blob([new Uint8Array(e)],{type:"application/octet-stream"});rs.save(n,t)}static saveArrayBuffer(e,t){const n=new Blob([e],{type:"application/octet-stream"});rs.save(n,t)}}(function(){var s=new Int32Array(24),e=new Int32Array(256);(function(){for(var n=0,i=0;i<8;++i)for(var r=1;r<=4;r<<=1){var a=i^r;i<=a&&(s[n++]=i,s[n++]=a)}for(var i=0;i<256;++i){for(var c=0,r=0;r<24;r+=2){var u=!!(i&1<<s[r]),d=!!(i&1<<s[r+1]);c|=u!==d?1<<(r>>1):0}e[i]=c}})();var t=new Int32Array(4096);return function(n,i,r){var a=[],c=[],u=0,d=new Int32Array(3),f=new Int32Array([1,i[0]+1,(i[0]+1)*(i[1]+1)]),m=new Float32Array(8),v=1;for(f[2]*2>t.length&&(t=new Int32Array(f[2]*2)),d[2]=0;d[2]<i[2]-1;++d[2],u+=i[0],v^=1,f[2]=-f[2]){var g=1+(i[0]+1)*(1+v*(i[1]+1));for(d[1]=0;d[1]<i[1]-1;++d[1],++u,g+=2)for(d[0]=0;d[0]<i[0]-1;++d[0],++u,++g){for(var b=0,y=0,x=u,_=0;_<2;++_,x+=i[0]*(i[1]-2))for(var w=0;w<2;++w,x+=i[0]-2)for(var E=0;E<2;++E,++y,++x){var S=n[x]-r;m[y]=S,b|=S<0?1<<y:0}if(!(b===0||b===255)){for(var P=e[b],D=[0,0,0],O=0,E=0;E<12;++E)if(P&1<<E){++O;var U=s[E<<1],I=s[(E<<1)+1],C=m[U],F=m[I],Y=C-F;if(Math.abs(Y)>1e-6)Y=C/Y;else continue;for(var w=0,_=1;w<3;++w,_<<=1){var X=U&_,J=I&_;X!==J?D[w]+=X?1-Y:Y:D[w]+=X?1:0}}for(var Q=1/O,E=0;E<3;++E)D[E]=d[E]+Q*D[E];t[g]=a.length,a.push([2*D[0]/i[0]-1,2*D[1]/i[1]-1,2*D[2]/i[2]-1]);for(var E=0;E<3;++E)if(P&1<<E){var ee=(E+1)%3,ne=(E+2)%3;if(!(d[ee]===0||d[ne]===0)){var z=f[ee],ce=f[ne];b&1?c.push([t[g],t[g-z],t[g-z-ce],t[g-ce]]):c.push([t[g],t[g-ce],t[g-z-ce],t[g-z]])}}}}}return{vertices:a,faces:c}}})();class sS extends It{constructor(e,t,n,i,r,a){const c=new An;super(c,t),this.maxCount=16384,this.count=0,this.hasPositions=!1,this.hasNormals=!1,this.hasColors=!1,this.hasUvs=!1;const u=this;this.isovalue=0;const d=new Float32Array(12*3),f=new Float32Array(12*3);this.enableUvs=!!n,this.enableColors=!!i,this.enableNormals=!!r,this.dirty=!0,this.resolution=[0,0,0],this.stepSizeX=0,this.stepSizeY=0,this.stepSizeZ=0,this.sizeX=0,this.sizeY=0,this.sizeZ=0,this.sizeXY=0,this.sizeXYZ=0,this.size3=0,this.halfsizeX=0,this.halfsizeY=0,this.halfsizeZ=0,this.deltaX=0,this.deltaY=0,this.deltaZ=0,this.yd=0,this.zd=0,this.field=new Uint8Array,this.normal_cache=new Float32Array,this.positionArray=new Float32Array,this.normalArray=new Float32Array,this.uvArray=new Float32Array,this.colorArray=new Float32Array,this.init=function(w,E){this.dirty=!0,this.resolution=w,this.isovalue=.05,this.stepSizeX=1,this.stepSizeY=1,this.stepSizeZ=1,this.sizeX=w[0],this.sizeY=w[1],this.sizeZ=w[2],this.sizeXY=this.sizeX*this.sizeY,this.sizeXYZ=this.sizeXY*this.sizeZ,this.size3=this.sizeXYZ,this.halfsizeX=this.sizeX/2,this.halfsizeY=this.sizeY/2,this.halfsizeZ=this.sizeZ/2,this.deltaX=2/this.sizeX,this.deltaY=2/this.sizeY,this.deltaZ=2/this.sizeZ,this.yd=this.sizeX,this.zd=this.sizeXY,E?this.field=E:this.field=new Float32Array(this.size3),this.normal_cache=new Float32Array(this.size3*3),this.maxCount=16384,this.count=0,this.hasPositions=!1,this.hasNormals=!1,this.hasColors=!1,this.hasUvs=!1,this.positionArray=new Float32Array(this.maxCount*3),this.enableNormals&&(this.normalArray=new Float32Array(this.maxCount*3)),this.enableUvs&&(this.uvArray=new Float32Array(this.maxCount*2)),this.enableColors&&(this.colorArray=new Float32Array(this.maxCount*3))};function m(w,E,S){return w+(E-w)*S}function v(w,E,S,P,D,O,U,I){const C=(S-U)/(I-U),F=u.normal_cache;d[E+0]=P+C*u.deltaX*u.stepSizeX,d[E+1]=D,d[E+2]=O,f[E+0]=m(F[w+0],F[w+3],C),f[E+1]=m(F[w+1],F[w+4],C),f[E+2]=m(F[w+2],F[w+5],C)}function g(w,E,S,P,D,O,U,I){const C=(S-U)/(I-U),F=u.normal_cache;d[E+0]=P,d[E+1]=D+C*u.deltaY*u.stepSizeY,d[E+2]=O;const Y=w+u.yd*3;f[E+0]=m(F[w+0],F[Y+0],C),f[E+1]=m(F[w+1],F[Y+1],C),f[E+2]=m(F[w+2],F[Y+2],C)}function b(w,E,S,P,D,O,U,I){const C=(S-U)/(I-U),F=u.normal_cache;d[E+0]=P,d[E+1]=D,d[E+2]=O+C*u.deltaZ*u.stepSizeZ;const Y=w+u.zd*3;f[E+0]=m(F[w+0],F[Y+0],C),f[E+1]=m(F[w+1],F[Y+1],C),f[E+2]=m(F[w+2],F[Y+2],C)}function y(w){const E=w*3;u.normal_cache[E]===0&&(u.normal_cache[E+0]=u.field[w-1*u.stepSizeX]-u.field[w+1*u.stepSizeX],u.normal_cache[E+1]=u.field[w-u.yd*u.stepSizeY]-u.field[w+u.yd*u.stepSizeY],u.normal_cache[E+2]=u.field[w-u.zd*u.stepSizeZ]-u.field[w+u.zd*u.stepSizeZ])}function x(w,E,S,P,D,O){const U=P+1*u.stepSizeX,I=P+u.yd*u.stepSizeY,C=P+u.zd*u.stepSizeZ,F=U+u.yd*u.stepSizeY,Y=U+u.zd*u.stepSizeZ,X=P+u.yd*u.stepSizeY+u.zd*u.stepSizeZ,J=U+u.yd*u.stepSizeY+u.zd*u.stepSizeZ;let Q=0;const ee=u.field[P],ne=u.field[U],z=u.field[I],ce=u.field[F],fe=u.field[C],me=u.field[Y],le=u.field[X],He=u.field[J];ee<D&&(Q|=1),ne<D&&(Q|=2),z<D&&(Q|=8),ce<D&&(Q|=4),fe<D&&(Q|=16),me<D&&(Q|=32),le<D&&(Q|=128),He<D&&(Q|=64);const j=rS[Q];if(j===0)return 0;const ae=u.deltaX*u.stepSizeX,Se=u.deltaY*u.stepSizeY,ve=u.deltaZ*u.stepSizeZ,Le=w+ae,Fe=E+Se,Ge=S+ve;j&1&&(y(P),y(U),v(P*3,0,D,w,E,S,ee,ne)),j&2&&(y(U),y(F),g(U*3,3,D,Le,E,S,ne,ce)),j&4&&(y(I),y(F),v(I*3,6,D,w,Fe,S,z,ce)),j&8&&(y(P),y(I),g(P*3,9,D,w,E,S,ee,z)),j&16&&(y(C),y(Y),v(C*3,12,D,w,E,Ge,fe,me)),j&32&&(y(Y),y(J),g(Y*3,15,D,Le,E,Ge,me,He)),j&64&&(y(X),y(J),v(X*3,18,D,w,Fe,Ge,le,He)),j&128&&(y(C),y(X),g(C*3,21,D,w,E,Ge,fe,le)),j&256&&(y(P),y(C),b(P*3,24,D,w,E,S,ee,fe)),j&512&&(y(U),y(Y),b(U*3,27,D,Le,E,S,ne,me)),j&1024&&(y(F),y(J),b(F*3,30,D,Le,Fe,S,ce,He)),j&2048&&(y(I),y(X),b(I*3,33,D,w,Fe,S,z,le)),Q<<=4;let q,_e,je,k=0,dt=0;for(;Lo[Q+dt]!=-1;)q=Q+dt,_e=q+1,je=q+2,_(d,f,3*Lo[q],3*Lo[_e],3*Lo[je],O),dt+=3,k++;return k}function _(w,E,S,P,D,O){const U=u.count*3;if(u.positionArray[U+0]=w[S],u.positionArray[U+1]=w[S+1],u.positionArray[U+2]=w[S+2],u.positionArray[U+3]=w[P],u.positionArray[U+4]=w[P+1],u.positionArray[U+5]=w[P+2],u.positionArray[U+6]=w[D],u.positionArray[U+7]=w[D+1],u.positionArray[U+8]=w[D+2],u.enableNormals&&(u.normalArray[U+0]=E[S],u.normalArray[U+1]=E[S+1],u.normalArray[U+2]=E[S+2],u.normalArray[U+3]=E[P],u.normalArray[U+4]=E[P+1],u.normalArray[U+5]=E[P+2],u.normalArray[U+6]=E[D],u.normalArray[U+7]=E[D+1],u.normalArray[U+8]=E[D+2]),u.enableUvs){const I=u.count*2;u.uvArray[I+0]=w[S],u.uvArray[I+1]=w[S+2],u.uvArray[I+2]=w[P],u.uvArray[I+3]=w[P+2],u.uvArray[I+4]=w[D],u.uvArray[I+5]=w[D+2]}u.enableColors&&(u.colorArray[U+0]=w[S],u.colorArray[U+1]=w[S+1],u.colorArray[U+2]=w[S+2],u.colorArray[U+3]=w[P],u.colorArray[U+4]=w[P+1],u.colorArray[U+5]=w[P+2],u.colorArray[U+6]=w[D],u.colorArray[U+7]=w[D+1],u.colorArray[U+8]=w[D+2]),u.count+=3,u.count>=u.maxCount-3&&(u.hasPositions=!0,u.enableNormals&&(u.hasNormals=!0),u.enableUvs&&(u.hasUvs=!0),u.enableColors&&(u.hasColors=!0),O(u))}this.begin=function(){this.count=0,this.hasPositions=!1,this.hasNormals=!1,this.hasUvs=!1,this.hasColors=!1},this.end=function(w){if(this.count!==0){for(let E=this.count*3;E<this.positionArray.length;E++)this.positionArray[E]=0;this.hasPositions=!0,this.enableNormals&&(this.hasNormals=!0),this.enableUvs&&(this.hasUvs=!0),this.enableColors&&(this.hasColors=!0),w(this)}},this.reset=function(){var w;for(w=0;w<this.size3;w++)this.normal_cache[w*3]=0,this.field[w]=0},this.render=function(w){if(!this.dirty){this.end(w);return}this.begin();const E=this.sizeX-2,S=this.sizeY-2,P=this.sizeZ-2;for(let D=1;D<P;D+=this.stepSizeZ){const O=this.sizeXY*D,U=(D-this.halfsizeZ)/this.halfsizeZ;for(let I=1;I<S;I+=this.stepSizeY){const C=O+this.sizeX*I,F=(I-this.halfsizeY)/this.halfsizeY;for(let Y=1;Y<E;Y+=this.stepSizeX){const X=(Y-this.halfsizeX)/this.halfsizeX,J=C+Y;x(X,F,U,J,this.isovalue,w)}}}this.end(w)},this.generateGeometry=function(){if(!this.dirty)return;const w=[],E=function(S){const P=new An;P.setAttribute("position",new Ut(S.positionArray.slice(),3)),S.enableNormals&&P.setAttribute("normal",new Ut(S.normalArray.slice(),3));const D=new Uint16Array(S.count),O=S.count/3;for(let U=0;U<O;U++){const I=U*3,C=I+1,F=I+2;D[U*3+0]=I,D[U*3+1]=C,D[U*3+2]=F}P.setIndex(new Ut(D,1)),w.push(P),S.count=0};return this.render(E),this.dirty=!1,w},this.init(e,a)}}const rS=new Int32Array([0,265,515,778,1030,1295,1541,1804,2060,2309,2575,2822,3082,3331,3593,3840,400,153,915,666,1430,1183,1941,1692,2460,2197,2975,2710,3482,3219,3993,3728,560,825,51,314,1590,1855,1077,1340,2620,2869,2111,2358,3642,3891,3129,3376,928,681,419,170,1958,1711,1445,1196,2988,2725,2479,2214,4010,3747,3497,3232,1120,1385,1635,1898,102,367,613,876,3180,3429,3695,3942,2154,2403,2665,2912,1520,1273,2035,1786,502,255,1013,764,3580,3317,4095,3830,2554,2291,3065,2800,1616,1881,1107,1370,598,863,85,348,3676,3925,3167,3414,2650,2899,2137,2384,1984,1737,1475,1226,966,719,453,204,4044,3781,3535,3270,3018,2755,2505,2240,2240,2505,2755,3018,3270,3535,3781,4044,204,453,719,966,1226,1475,1737,1984,2384,2137,2899,2650,3414,3167,3925,3676,348,85,863,598,1370,1107,1881,1616,2800,3065,2291,2554,3830,4095,3317,3580,764,1013,255,502,1786,2035,1273,1520,2912,2665,2403,2154,3942,3695,3429,3180,876,613,367,102,1898,1635,1385,1120,3232,3497,3747,4010,2214,2479,2725,2988,1196,1445,1711,1958,170,419,681,928,3376,3129,3891,3642,2358,2111,2869,2620,1340,1077,1855,1590,314,51,825,560,3728,3993,3219,3482,2710,2975,2197,2460,1692,1941,1183,1430,666,915,153,400,3840,3593,3331,3082,2822,2575,2309,2060,1804,1541,1295,1030,778,515,265,0]),Lo=new Int32Array([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,9,8,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,2,10,0,2,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,8,3,2,10,8,10,9,8,-1,-1,-1,-1,-1,-1,-1,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,8,11,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,11,2,1,9,11,9,8,11,-1,-1,-1,-1,-1,-1,-1,3,10,1,11,10,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,10,1,0,8,10,8,11,10,-1,-1,-1,-1,-1,-1,-1,3,9,0,3,11,9,11,10,9,-1,-1,-1,-1,-1,-1,-1,9,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,7,3,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,1,9,4,7,1,7,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,4,7,3,0,4,1,2,10,-1,-1,-1,-1,-1,-1,-1,9,2,10,9,0,2,8,4,7,-1,-1,-1,-1,-1,-1,-1,2,10,9,2,9,7,2,7,3,7,9,4,-1,-1,-1,-1,8,4,7,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,4,7,11,2,4,2,0,4,-1,-1,-1,-1,-1,-1,-1,9,0,1,8,4,7,2,3,11,-1,-1,-1,-1,-1,-1,-1,4,7,11,9,4,11,9,11,2,9,2,1,-1,-1,-1,-1,3,10,1,3,11,10,7,8,4,-1,-1,-1,-1,-1,-1,-1,1,11,10,1,4,11,1,0,4,7,11,4,-1,-1,-1,-1,4,7,8,9,0,11,9,11,10,11,0,3,-1,-1,-1,-1,4,7,11,4,11,9,9,11,10,-1,-1,-1,-1,-1,-1,-1,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,5,4,1,5,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,5,4,8,3,5,3,1,5,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,10,4,9,5,-1,-1,-1,-1,-1,-1,-1,5,2,10,5,4,2,4,0,2,-1,-1,-1,-1,-1,-1,-1,2,10,5,3,2,5,3,5,4,3,4,8,-1,-1,-1,-1,9,5,4,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,0,8,11,4,9,5,-1,-1,-1,-1,-1,-1,-1,0,5,4,0,1,5,2,3,11,-1,-1,-1,-1,-1,-1,-1,2,1,5,2,5,8,2,8,11,4,8,5,-1,-1,-1,-1,10,3,11,10,1,3,9,5,4,-1,-1,-1,-1,-1,-1,-1,4,9,5,0,8,1,8,10,1,8,11,10,-1,-1,-1,-1,5,4,0,5,0,11,5,11,10,11,0,3,-1,-1,-1,-1,5,4,8,5,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,9,7,8,5,7,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,3,0,9,5,3,5,7,3,-1,-1,-1,-1,-1,-1,-1,0,7,8,0,1,7,1,5,7,-1,-1,-1,-1,-1,-1,-1,1,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,7,8,9,5,7,10,1,2,-1,-1,-1,-1,-1,-1,-1,10,1,2,9,5,0,5,3,0,5,7,3,-1,-1,-1,-1,8,0,2,8,2,5,8,5,7,10,5,2,-1,-1,-1,-1,2,10,5,2,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,7,9,5,7,8,9,3,11,2,-1,-1,-1,-1,-1,-1,-1,9,5,7,9,7,2,9,2,0,2,7,11,-1,-1,-1,-1,2,3,11,0,1,8,1,7,8,1,5,7,-1,-1,-1,-1,11,2,1,11,1,7,7,1,5,-1,-1,-1,-1,-1,-1,-1,9,5,8,8,5,7,10,1,3,10,3,11,-1,-1,-1,-1,5,7,0,5,0,9,7,11,0,1,0,10,11,10,0,-1,11,10,0,11,0,3,10,5,0,8,0,7,5,7,0,-1,11,10,5,7,11,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,0,1,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,1,9,8,5,10,6,-1,-1,-1,-1,-1,-1,-1,1,6,5,2,6,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,6,5,1,2,6,3,0,8,-1,-1,-1,-1,-1,-1,-1,9,6,5,9,0,6,0,2,6,-1,-1,-1,-1,-1,-1,-1,5,9,8,5,8,2,5,2,6,3,2,8,-1,-1,-1,-1,2,3,11,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,0,8,11,2,0,10,6,5,-1,-1,-1,-1,-1,-1,-1,0,1,9,2,3,11,5,10,6,-1,-1,-1,-1,-1,-1,-1,5,10,6,1,9,2,9,11,2,9,8,11,-1,-1,-1,-1,6,3,11,6,5,3,5,1,3,-1,-1,-1,-1,-1,-1,-1,0,8,11,0,11,5,0,5,1,5,11,6,-1,-1,-1,-1,3,11,6,0,3,6,0,6,5,0,5,9,-1,-1,-1,-1,6,5,9,6,9,11,11,9,8,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,4,7,3,6,5,10,-1,-1,-1,-1,-1,-1,-1,1,9,0,5,10,6,8,4,7,-1,-1,-1,-1,-1,-1,-1,10,6,5,1,9,7,1,7,3,7,9,4,-1,-1,-1,-1,6,1,2,6,5,1,4,7,8,-1,-1,-1,-1,-1,-1,-1,1,2,5,5,2,6,3,0,4,3,4,7,-1,-1,-1,-1,8,4,7,9,0,5,0,6,5,0,2,6,-1,-1,-1,-1,7,3,9,7,9,4,3,2,9,5,9,6,2,6,9,-1,3,11,2,7,8,4,10,6,5,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,2,4,2,0,2,7,11,-1,-1,-1,-1,0,1,9,4,7,8,2,3,11,5,10,6,-1,-1,-1,-1,9,2,1,9,11,2,9,4,11,7,11,4,5,10,6,-1,8,4,7,3,11,5,3,5,1,5,11,6,-1,-1,-1,-1,5,1,11,5,11,6,1,0,11,7,11,4,0,4,11,-1,0,5,9,0,6,5,0,3,6,11,6,3,8,4,7,-1,6,5,9,6,9,11,4,7,9,7,11,9,-1,-1,-1,-1,10,4,9,6,4,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,10,6,4,9,10,0,8,3,-1,-1,-1,-1,-1,-1,-1,10,0,1,10,6,0,6,4,0,-1,-1,-1,-1,-1,-1,-1,8,3,1,8,1,6,8,6,4,6,1,10,-1,-1,-1,-1,1,4,9,1,2,4,2,6,4,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,9,2,4,9,2,6,4,-1,-1,-1,-1,0,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,3,2,8,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,10,4,9,10,6,4,11,2,3,-1,-1,-1,-1,-1,-1,-1,0,8,2,2,8,11,4,9,10,4,10,6,-1,-1,-1,-1,3,11,2,0,1,6,0,6,4,6,1,10,-1,-1,-1,-1,6,4,1,6,1,10,4,8,1,2,1,11,8,11,1,-1,9,6,4,9,3,6,9,1,3,11,6,3,-1,-1,-1,-1,8,11,1,8,1,0,11,6,1,9,1,4,6,4,1,-1,3,11,6,3,6,0,0,6,4,-1,-1,-1,-1,-1,-1,-1,6,4,8,11,6,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,10,6,7,8,10,8,9,10,-1,-1,-1,-1,-1,-1,-1,0,7,3,0,10,7,0,9,10,6,7,10,-1,-1,-1,-1,10,6,7,1,10,7,1,7,8,1,8,0,-1,-1,-1,-1,10,6,7,10,7,1,1,7,3,-1,-1,-1,-1,-1,-1,-1,1,2,6,1,6,8,1,8,9,8,6,7,-1,-1,-1,-1,2,6,9,2,9,1,6,7,9,0,9,3,7,3,9,-1,7,8,0,7,0,6,6,0,2,-1,-1,-1,-1,-1,-1,-1,7,3,2,6,7,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,11,10,6,8,10,8,9,8,6,7,-1,-1,-1,-1,2,0,7,2,7,11,0,9,7,6,7,10,9,10,7,-1,1,8,0,1,7,8,1,10,7,6,7,10,2,3,11,-1,11,2,1,11,1,7,10,6,1,6,7,1,-1,-1,-1,-1,8,9,6,8,6,7,9,1,6,11,6,3,1,3,6,-1,0,9,1,11,6,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,8,0,7,0,6,3,11,0,11,6,0,-1,-1,-1,-1,7,11,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,1,9,8,3,1,11,7,6,-1,-1,-1,-1,-1,-1,-1,10,1,2,6,11,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,8,6,11,7,-1,-1,-1,-1,-1,-1,-1,2,9,0,2,10,9,6,11,7,-1,-1,-1,-1,-1,-1,-1,6,11,7,2,10,3,10,8,3,10,9,8,-1,-1,-1,-1,7,2,3,6,2,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,0,8,7,6,0,6,2,0,-1,-1,-1,-1,-1,-1,-1,2,7,6,2,3,7,0,1,9,-1,-1,-1,-1,-1,-1,-1,1,6,2,1,8,6,1,9,8,8,7,6,-1,-1,-1,-1,10,7,6,10,1,7,1,3,7,-1,-1,-1,-1,-1,-1,-1,10,7,6,1,7,10,1,8,7,1,0,8,-1,-1,-1,-1,0,3,7,0,7,10,0,10,9,6,10,7,-1,-1,-1,-1,7,6,10,7,10,8,8,10,9,-1,-1,-1,-1,-1,-1,-1,6,8,4,11,8,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,6,11,3,0,6,0,4,6,-1,-1,-1,-1,-1,-1,-1,8,6,11,8,4,6,9,0,1,-1,-1,-1,-1,-1,-1,-1,9,4,6,9,6,3,9,3,1,11,3,6,-1,-1,-1,-1,6,8,4,6,11,8,2,10,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,11,0,6,11,0,4,6,-1,-1,-1,-1,4,11,8,4,6,11,0,2,9,2,10,9,-1,-1,-1,-1,10,9,3,10,3,2,9,4,3,11,3,6,4,6,3,-1,8,2,3,8,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,0,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,4,2,4,6,4,3,8,-1,-1,-1,-1,1,9,4,1,4,2,2,4,6,-1,-1,-1,-1,-1,-1,-1,8,1,3,8,6,1,8,4,6,6,10,1,-1,-1,-1,-1,10,1,0,10,0,6,6,0,4,-1,-1,-1,-1,-1,-1,-1,4,6,3,4,3,8,6,10,3,0,3,9,10,9,3,-1,10,9,4,6,10,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,5,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,5,11,7,6,-1,-1,-1,-1,-1,-1,-1,5,0,1,5,4,0,7,6,11,-1,-1,-1,-1,-1,-1,-1,11,7,6,8,3,4,3,5,4,3,1,5,-1,-1,-1,-1,9,5,4,10,1,2,7,6,11,-1,-1,-1,-1,-1,-1,-1,6,11,7,1,2,10,0,8,3,4,9,5,-1,-1,-1,-1,7,6,11,5,4,10,4,2,10,4,0,2,-1,-1,-1,-1,3,4,8,3,5,4,3,2,5,10,5,2,11,7,6,-1,7,2,3,7,6,2,5,4,9,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,6,0,6,2,6,8,7,-1,-1,-1,-1,3,6,2,3,7,6,1,5,0,5,4,0,-1,-1,-1,-1,6,2,8,6,8,7,2,1,8,4,8,5,1,5,8,-1,9,5,4,10,1,6,1,7,6,1,3,7,-1,-1,-1,-1,1,6,10,1,7,6,1,0,7,8,7,0,9,5,4,-1,4,0,10,4,10,5,0,3,10,6,10,7,3,7,10,-1,7,6,10,7,10,8,5,4,10,4,8,10,-1,-1,-1,-1,6,9,5,6,11,9,11,8,9,-1,-1,-1,-1,-1,-1,-1,3,6,11,0,6,3,0,5,6,0,9,5,-1,-1,-1,-1,0,11,8,0,5,11,0,1,5,5,6,11,-1,-1,-1,-1,6,11,3,6,3,5,5,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,11,9,11,8,11,5,6,-1,-1,-1,-1,0,11,3,0,6,11,0,9,6,5,6,9,1,2,10,-1,11,8,5,11,5,6,8,0,5,10,5,2,0,2,5,-1,6,11,3,6,3,5,2,10,3,10,5,3,-1,-1,-1,-1,5,8,9,5,2,8,5,6,2,3,8,2,-1,-1,-1,-1,9,5,6,9,6,0,0,6,2,-1,-1,-1,-1,-1,-1,-1,1,5,8,1,8,0,5,6,8,3,8,2,6,2,8,-1,1,5,6,2,1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,6,1,6,10,3,8,6,5,6,9,8,9,6,-1,10,1,0,10,0,6,9,5,0,5,6,0,-1,-1,-1,-1,0,3,8,5,6,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,5,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,7,5,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,11,7,5,8,3,0,-1,-1,-1,-1,-1,-1,-1,5,11,7,5,10,11,1,9,0,-1,-1,-1,-1,-1,-1,-1,10,7,5,10,11,7,9,8,1,8,3,1,-1,-1,-1,-1,11,1,2,11,7,1,7,5,1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,7,1,7,5,7,2,11,-1,-1,-1,-1,9,7,5,9,2,7,9,0,2,2,11,7,-1,-1,-1,-1,7,5,2,7,2,11,5,9,2,3,2,8,9,8,2,-1,2,5,10,2,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,8,2,0,8,5,2,8,7,5,10,2,5,-1,-1,-1,-1,9,0,1,5,10,3,5,3,7,3,10,2,-1,-1,-1,-1,9,8,2,9,2,1,8,7,2,10,2,5,7,5,2,-1,1,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,7,0,7,1,1,7,5,-1,-1,-1,-1,-1,-1,-1,9,0,3,9,3,5,5,3,7,-1,-1,-1,-1,-1,-1,-1,9,8,7,5,9,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5,8,4,5,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,5,0,4,5,11,0,5,10,11,11,3,0,-1,-1,-1,-1,0,1,9,8,4,10,8,10,11,10,4,5,-1,-1,-1,-1,10,11,4,10,4,5,11,3,4,9,4,1,3,1,4,-1,2,5,1,2,8,5,2,11,8,4,5,8,-1,-1,-1,-1,0,4,11,0,11,3,4,5,11,2,11,1,5,1,11,-1,0,2,5,0,5,9,2,11,5,4,5,8,11,8,5,-1,9,4,5,2,11,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,5,10,3,5,2,3,4,5,3,8,4,-1,-1,-1,-1,5,10,2,5,2,4,4,2,0,-1,-1,-1,-1,-1,-1,-1,3,10,2,3,5,10,3,8,5,4,5,8,0,1,9,-1,5,10,2,5,2,4,1,9,2,9,4,2,-1,-1,-1,-1,8,4,5,8,5,3,3,5,1,-1,-1,-1,-1,-1,-1,-1,0,4,5,1,0,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,4,5,8,5,3,9,0,5,0,3,5,-1,-1,-1,-1,9,4,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,11,7,4,9,11,9,10,11,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,7,9,11,7,9,10,11,-1,-1,-1,-1,1,10,11,1,11,4,1,4,0,7,4,11,-1,-1,-1,-1,3,1,4,3,4,8,1,10,4,7,4,11,10,11,4,-1,4,11,7,9,11,4,9,2,11,9,1,2,-1,-1,-1,-1,9,7,4,9,11,7,9,1,11,2,11,1,0,8,3,-1,11,7,4,11,4,2,2,4,0,-1,-1,-1,-1,-1,-1,-1,11,7,4,11,4,2,8,3,4,3,2,4,-1,-1,-1,-1,2,9,10,2,7,9,2,3,7,7,4,9,-1,-1,-1,-1,9,10,7,9,7,4,10,2,7,8,7,0,2,0,7,-1,3,7,10,3,10,2,7,4,10,1,10,0,4,0,10,-1,1,10,2,8,7,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,7,1,3,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,0,8,1,8,7,1,-1,-1,-1,-1,4,0,3,7,4,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,8,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,11,9,10,-1,-1,-1,-1,-1,-1,-1,0,1,10,0,10,8,8,10,11,-1,-1,-1,-1,-1,-1,-1,3,1,10,11,3,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,11,1,11,9,9,11,8,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,1,2,9,2,11,9,-1,-1,-1,-1,0,2,11,8,0,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,2,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,10,8,9,-1,-1,-1,-1,-1,-1,-1,9,10,2,0,9,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,0,1,8,1,10,8,-1,-1,-1,-1,1,10,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,8,9,1,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,9,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,3,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]),Ol=.95;class oS{constructor(e){this.volume=e,this.meshRoot=new Tt,this.meshRoot.name="Mesh Surface Group",this.meshRoot.scale.setScalar(.5),this.meshPivot=new jn,this.meshPivot.name="MeshContainerNode",this.meshPivot.add(this.meshRoot),this.meshrep=[],this.channelColors=[],this.channelOpacities=[],this.scale=new L(1,1,1),this.bounds={bmin:new L(-.5,-.5,-.5),bmax:new L(.5,.5,.5)}}cleanup(){for(let e=0;e<this.volume.imageInfo.numChannels;++e)this.destroyIsosurface(e)}setVisible(e){this.meshRoot.visible=e}doRender(){}get3dObject(){return this.meshPivot}setScale(e,t=new L(0,0,0)){this.scale=e,this.meshRoot.scale.copy(e).multiplyScalar(.5),this.meshRoot.position.copy(t)}setFlipAxes(e,t,n){this.meshRoot.scale.copy(new L(.5*this.scale.x*e,.5*this.scale.y*t,.5*this.scale.z*n))}setTranslation(e){this.meshPivot.position.copy(e)}setRotation(e){this.meshPivot.rotation.copy(e),this.updateClipFromBounds()}setResolution(e,t){}setOrthoThickness(e){}setAxisClip(e,t,n,i){this.bounds.bmax[e]=n,this.bounds.bmin[e]=t,this.updateClipFromBounds()}updateMeshColors(e){this.channelColors=e;for(let t=0;t<this.volume.imageInfo.numChannels;++t){const n=this.meshrep[t];if(n){const i=e[t],r=i[0]<<16|i[1]<<8|i[2];n.traverse(function(a){a instanceof It&&(a.material.color=new ke(r))})}}}createMaterialForChannel(e,t,n){const i=e[0]<<16|e[1]<<8|e[2];return new J0({color:new ke(i),shininess:Wd.shininess,specular:new ke(Wd.specularColor),opacity:t,transparent:t<Ol,side:Bn})}createMeshForChannel(e,t,n,i,r){const a=this.generateIsosurfaceGeometry(e,n),c=this.createMaterialForChannel(t,i,r),u=new jn;u.name="Channel"+e,u.userData={isovalue:n};for(let d=0;d<a.length;++d){const f=new It(a[d],c);f.layers.set(Gs),u.add(f)}return u}updateIsovalue(e,t){const n=this.meshrep[e];if(!n||n.userData.isovalue===t)return;const i=this.channelOpacities[e],r=this.channelColors[e];this.destroyIsosurface(e);const a=this.createMeshForChannel(e,r,t,i,!1);this.meshrep[e]=a,this.meshRoot.add(a)}getIsovalue(e){const t=this.meshrep[e];return t==null?void 0:t.userData.isovalue}getOpacity(e){const t=this.meshrep[e];let n;return t==null||t.traverse(i=>{i instanceof It&&(n=i.material.opacity)}),n}updateClipRegion(e,t,n,i,r,a){this.bounds={bmin:new L(e-.5,n-.5,r-.5),bmax:new L(t-.5,i-.5,a-.5)},this.updateClipFromBounds()}updateClipFromBounds(){const e=this.bounds.bmin.x,t=this.bounds.bmin.y,n=this.bounds.bmin.z,i=this.bounds.bmax.x,r=this.bounds.bmax.y,a=this.bounds.bmax.z,c=this.meshPivot.rotation;for(let u=0;u<this.meshrep.length;++u){const d=this.meshrep[u];if(!d)continue;const f=[];e>-.5&&f.push(new Sn(new L(1,0,0).applyEuler(c),this.meshRoot.position.x+-e*this.scale.x)),t>-.5&&f.push(new Sn(new L(0,1,0).applyEuler(c),this.meshRoot.position.y+-t*this.scale.y)),n>-.5&&f.push(new Sn(new L(0,0,1).applyEuler(c),this.meshRoot.position.z+-n*this.scale.z)),i<.5&&f.push(new Sn(new L(-1,0,0).applyEuler(c),this.meshRoot.position.x+i*this.scale.x)),r<.5&&f.push(new Sn(new L(0,-1,0).applyEuler(c),this.meshRoot.position.y+r*this.scale.y)),a<.5&&f.push(new Sn(new L(0,0,-1).applyEuler(c),this.meshRoot.position.z+a*this.scale.z)),d.traverse(function(m){m instanceof It&&(m.material.clippingPlanes=f)})}}updateOpacity(e,t){this.channelOpacities[e]=t;const n=this.meshrep[e];n&&n.traverse(function(i){i instanceof It&&(i.material.opacity=t,i.material.transparent=t<Ol)})}hasIsosurface(e){return!!this.meshrep[e]}createIsosurface(e,t,n=127,i=1,r=i<Ol){if(!this.meshrep[e]){const a=this.createMeshForChannel(e,t,n,i,r);this.meshrep[e]=a,this.channelOpacities[e]=i,this.channelColors[e]=t,this.meshRoot.add(a)}}destroyIsosurface(e){const t=this.meshrep[e];t&&(this.meshRoot.remove(t),t.traverse(function(n){n instanceof It&&(n.material.dispose(),n.geometry.dispose())}),this.meshrep[e]=null)}saveChannelIsosurface(e,t,n){const i=this.meshrep[e];if(i){if(t==="STL")this.exportSTL(i,n+"_"+this.volume.channelNames[e]);else if(t==="GLTF"){const r=[];for(let a=0;a<this.meshrep.length;++a){const c=this.meshrep[a];c&&(r[a]=c.visible,c.visible=a===e)}this.exportGLTF(this.meshRoot,n+"_"+this.volume.channelNames[e]);for(let a=0;a<this.meshrep.length;++a){const c=this.meshrep[a];c&&(c.visible=r[a])}}}}exportSTL(e,t){const i=new Uw().parse(e,{binary:!0});rs.saveBinary(i.buffer,t+".stl")}exportGLTF(e,t){const n=new ca,i={trs:!1,onlyVisible:!0,truncateDrawRange:!0,binary:!0,forceIndices:!1,forcePowerOfTwoTextures:!0};n.parse(e,function(r){if(r instanceof ArrayBuffer)rs.saveArrayBuffer(r,t+".glb");else{const a=JSON.stringify(r,null,2);rs.saveString(a,t+".gltf")}},function(r){console.error(r)},i)}generateIsosurfaceGeometry(e,t){if(!this.volume)return[];const n=this.volume.channels[e].volumeData,i=this.volume.imageInfo.subregionSize.toArray();{const r=new sS(i,new as,!1,!1,!0,n);return r.position.copy(this.meshRoot.position),r.scale.set(.5*this.scale.x,.5*this.scale.y,.5*this.scale.z),r.isovalue=t,r.generateGeometry()||[]}}}var aS=`precision highp float;
precision highp int;
precision highp usampler2D;
precision highp sampler3D;

uniform sampler2D lutSampler;

uniform vec2 lutMinMax;
uniform uint highlightedId;

uniform usampler2D srcTexture;

void main() {
    ivec2 vUv = ivec2(int(gl_FragCoord.x), int(gl_FragCoord.y));
    uint intensity = texelFetch(srcTexture, vUv, 0).r;
    float ilookup = float(float(intensity) - lutMinMax.x) / float(lutMinMax.y - lutMinMax.x);
    
    vec4 pix = texture(lutSampler, vec2(ilookup, 0.5));
    gl_FragColor = vec4(pix.xyz * pix.w, pix.w);
}`,lS=`precision highp float;
precision highp int;
precision highp sampler2D;
precision highp sampler3D;

uniform sampler2D lutSampler;

uniform vec2 lutMinMax;

uniform sampler2D srcTexture;

void main()
{
    ivec2 vUv = ivec2(int(gl_FragCoord.x), int(gl_FragCoord.y));

    
    float intensity = texelFetch(srcTexture, vUv, 0).r;

    float ilookup = float(float(intensity) - lutMinMax.x) / float(lutMinMax.y - lutMinMax.x);
    
    vec4 pix = texture(lutSampler, vec2(ilookup, 0.5));
    gl_FragColor = vec4(pix.xyz*pix.w, pix.w);
}`,cS=`precision highp float;
precision highp int;
precision highp sampler2D;
precision highp sampler3D;

uniform sampler2D lutSampler;

uniform vec2 lutMinMax;

uniform isampler2D srcTexture;

void main()
{
    ivec2 vUv = ivec2(int(gl_FragCoord.x), int(gl_FragCoord.y));
    int intensity = texelFetch(srcTexture, vUv, 0).r;
    float ilookup = float(float(intensity) - lutMinMax.x) / float(lutMinMax.y - lutMinMax.x);
    
    vec4 pix = texture(lutSampler, vec2(ilookup, 0.5));
    gl_FragColor = vec4(pix.xyz*pix.w, pix.w);
}`,hS=`precision highp float;
precision highp int;
precision highp usampler2D;
precision highp sampler3D;

uniform sampler2D featureData;

uniform float featureColorRampMin;
uniform float featureColorRampMax;
uniform sampler2D colorRamp;
uniform usampler2D inRangeIds;
uniform usampler2D outlierData;

/**
 * LUT mapping from the segmentation ID (raw pixel value) to the
 * global ID (index in data buffers like \`featureData\` and \`outlierData\`).
 * 
 * For a given segmentation ID \`segId\`, the global ID is given by:
 * \`segIdToGlobalId[segId - segIdOffset] - 1\`.
*/
uniform usampler2D segIdToGlobalId;
uniform uint segIdOffset;

uniform vec3 outlineColor;

/** MUST be synchronized with the DrawMode enum in ColorizeCanvas! */
const uint DRAW_MODE_HIDE = 0u;
const uint DRAW_MODE_COLOR = 1u;
const uint BACKGROUND_ID = 0u;
const uint MISSING_DATA_ID = 0xFFFFFFFFu;

uniform vec3 outlierColor;
uniform uint outlierDrawMode;
uniform vec3 outOfRangeColor;
uniform uint outOfRangeDrawMode;

uniform uint highlightedId;

uniform bool useRepeatingCategoricalColors;

uniform usampler2D srcTexture;

vec4 getFloatFromTex(sampler2D tex, int index) {
  int width = textureSize(tex, 0).x;
  ivec2 featurePos = ivec2(index % width, index / width);
  return texelFetch(tex, featurePos, 0);
}
uvec4 getUintFromTex(usampler2D tex, int index) {
  int width = textureSize(tex, 0).x;
  ivec2 featurePos = ivec2(index % width, index / width);
  return texelFetch(tex, featurePos, 0);
}
uint getId(ivec2 uv) {
  uint rawId = texelFetch(srcTexture, uv, 0).r;
  if (rawId == 0u) {
    return BACKGROUND_ID;
  }
  uvec4 c = getUintFromTex(segIdToGlobalId, int(rawId - segIdOffset));
  
  
  
  uint globalId = c.r;
  if (globalId == 0u) {
    return MISSING_DATA_ID;
  }
  return globalId;
}

vec4 getColorRamp(float val) {
  float width = float(textureSize(colorRamp, 0).x);
  float range = (width - 1.0) / width;
  float adjustedVal = (0.5 / width) + (val * range);
  return texture(colorRamp, vec2(adjustedVal, 0.5));
}

vec4 getCategoricalColor(float featureValue) {
  float width = float(textureSize(colorRamp, 0).x);
  float modValue = mod(featureValue, width);
  
  
  return getColorRamp(modValue / (width - 1.0));
}

vec4 getColorFromDrawMode(uint drawMode, vec3 defaultColor) {
  const uint DRAW_MODE_HIDE = 0u;
  vec3 backgroundColor = vec3(0.0, 0.0, 0.0);
  if (drawMode == DRAW_MODE_HIDE) {
    return vec4(backgroundColor, 0.0);
  } else {
    return vec4(defaultColor, 1.0);
  }
}

float getFeatureVal(uint id) {
  
  return getFloatFromTex(featureData, int(id) - 1).r;
}
uint getOutlierVal(uint id) {
  
  return getUintFromTex(outlierData, int(id) - 1).r;
}
bool getIsInRange(uint id) {
  return getUintFromTex(inRangeIds, int(id) - 1).r == 1u;
}
bool getIsOutlier(float featureVal, uint outlierVal) {
  return isinf(featureVal) || outlierVal != 0u;
}

vec4 getObjectColor(ivec2 sUv, float opacity) {
  
  uint id = getId(sUv);

  
  if (id == BACKGROUND_ID) {
    return vec4(0, 0, 0, 0);
  }

  
  
  
  
  

  float featureVal = getFeatureVal(id);
  uint outlierVal = getOutlierVal(id);
  float normFeatureVal = (featureVal - featureColorRampMin) / (featureColorRampMax - featureColorRampMin);

  
  
  bool isInRange = getIsInRange(id);
  bool isOutlier = getIsOutlier(featureVal, outlierVal);
  bool isMissingData = (id == MISSING_DATA_ID);

  
  
  vec4 color;
  if (isMissingData) { 
    
    color = getColorFromDrawMode(outlierDrawMode, outlierColor);
  } else if (isInRange) {
    if (isOutlier) {
      color = getColorFromDrawMode(outlierDrawMode, outlierColor);
    } else if (useRepeatingCategoricalColors) {
      color = getCategoricalColor(featureVal);
    } else {
      color = getColorRamp(normFeatureVal);
    }
  } else {
    color = getColorFromDrawMode(outOfRangeDrawMode, outOfRangeColor);
  }
  color.a *= opacity;
  return color;
}

void main() {
  ivec2 vUv = ivec2(int(gl_FragCoord.x), int(gl_FragCoord.y));
  gl_FragColor = getObjectColor(vUv, 1.0);
}`;class Qp{constructor(e,t){this.width=e,this.height=t,this.maskTexture=new cn(new Uint8ClampedArray(this.width*this.height).fill(255),this.width,this.height,Gr,Yt),this.maskTexture.generateMipmaps=!1,this.maskTexture.magFilter=Nt,this.maskTexture.minFilter=Nt,this.maskTexture.wrapS=mn,this.maskTexture.wrapT=mn,this.maskTexture.unpackAlignment=1,this.fuseRequested=null,this.channelsDataToFuse=[],this.fuseScene=new Fi,this.quadCamera=new ci(-1,1,1,-1,0,1),this.fuseRenderTarget=new Ln(this.width,this.height,{minFilter:Nt,magFilter:Nt,format:Ot,type:Yt,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1,wrapS:mn,wrapT:mn}),this.fuseMaterialProps={vertexShader:aa,depthTest:!1,depthWrite:!1,blending:xp,blendSrc:jl,blendDst:jl,blendEquation:bp},this.fuseMaterialF=this.setupFuseMaterial(lS),this.fuseMaterialUI=this.setupFuseMaterial(aS),this.fuseMaterialI=this.setupFuseMaterial(cS),this.fuseMaterialColorizeUI=this.setupFuseColorizeMaterial(hS),this.fuseMaterialF.needsUpdate=!0,this.fuseMaterialUI.needsUpdate=!0,this.fuseMaterialI.needsUpdate=!0,this.fuseGeometry=new zi(2,2)}setupFuseMaterial(e){return new nn({uniforms:{highlightedId:{value:-1},lutSampler:{value:null},lutMinMax:{value:new Ie(0,255)},srcTexture:{value:null}},fragmentShader:e,...this.fuseMaterialProps})}setupFuseColorizeMaterial(e){return new nn({uniforms:{highlightedId:{value:-1},featureData:{value:null},outlierData:{value:null},inRangeIds:{value:null},srcTexture:{value:null},featureColorRampMin:{value:0},featureColorRampMax:{value:1},colorRamp:{value:null},useRepeatingCategoricalColors:{value:!1},outlineColor:{value:new ke(16777215)},outlierColor:{value:new ke(4473924)},outOfRangeColor:{value:new ke(4473924)},outlierDrawMode:{value:0},outOfRangeDrawMode:{value:0},hideOutOfRange:{value:!1},segIdToGlobalId:{value:new cn},segIdOffset:{value:0}},fragmentShader:e,...this.fuseMaterialProps})}getFusedTexture(){return this.fuseRenderTarget.texture}cleanup(){this.fuseScene.clear(),this.maskTexture.dispose()}getShader(e,t){switch(e){case"float32":return this.fuseMaterialF;case"uint8":case"uint16":case"uint32":return t?this.fuseMaterialColorizeUI:this.fuseMaterialUI;case"int8":case"int16":case"int32":return this.fuseMaterialI;default:throw new Error("Unsupported data type for fuse shader")}}fuse(e,t){let n=!1;for(let i=0;i<e.length;++i){const r=e[i],a=r.chIndex;t[a].loaded&&(r.lut=t[a].combineLuts(r.rgbColor,r.lut),n=!0)}if(!n){this.channelsDataToFuse=[],this.fuseRequested=[];return}this.fuseRequested=e,this.channelsDataToFuse=t}gpuFuse(e){const t=this.fuseRequested,n=this.channelsDataToFuse;if(t){this.fuseScene.traverse(i=>{i instanceof It&&i.material.dispose()}),this.fuseScene.clear();for(let i=0;i<t.length;++i)if(t[i].rgbColor){const r=t[i].chIndex;if(!n[r].loaded)continue;const a=t[i].feature!==void 0,c=this.getShader(n[r].dtype,a).clone();c.uniforms.srcTexture.value=n[r].dataTexture,c.uniforms.highlightedId.value=t[i].selectedID==null?-1:t[i].selectedID;const u=t[i].feature;if(a&&u){c.uniforms.featureData.value=u.idsToFeatureValue,c.uniforms.outlierData.value=u.outlierData,c.uniforms.inRangeIds.value=u.inRangeIds,c.uniforms.featureColorRampMin.value=u.featureMin,c.uniforms.featureColorRampMax.value=u.featureMax,c.uniforms.colorRamp.value=u.featureValueToColor,c.uniforms.useRepeatingCategoricalColors.value=u.useRepeatingColor,c.uniforms.outlineColor.value=u.outlineColor,c.uniforms.outlierColor.value=u.outlierColor,c.uniforms.outOfRangeColor.value=u.outOfRangeColor,c.uniforms.outlierDrawMode.value=u.outlierDrawMode,c.uniforms.outOfRangeDrawMode.value=u.outOfRangeDrawMode,c.uniforms.hideOutOfRange.value=u.hideOutOfRange;const d=n[r].frame;let f=u.frameToGlobalIdLookup.get(d);f||(console.warn(`FusedChannelData.gpuFuse: No global ID lookup info for frame ${d} in channel ${r}. A default lookup will be used, which may cause visual artifacts.`),f={texture:new cn(Uint32Array[0]),minSegId:1}),c.uniforms.segIdToGlobalId.value=f.texture,c.uniforms.segIdOffset.value=f.minSegId}else c.uniforms.lutMinMax.value=new Ie(n[r].rawMin,n[r].rawMax),c.uniforms.lutSampler.value=n[r].lutTexture;this.fuseScene.add(new It(this.fuseGeometry,c))}if(this.fuseScene.children.length>0){e.setRenderTarget(this.fuseRenderTarget),e.autoClearColor=!0;const i=new ke;e.getClearColor(i);const r=e.getClearAlpha();e.setClearColor(0,0),e.render(this.fuseScene,this.quadCamera),e.setRenderTarget(null),e.setClearColor(i,r)}this.fuseRequested=null}}setChannelAsMask(e,t){if(!t||!t.loaded)return!1;const n=new Uint8ClampedArray(t.imgData.data.length);for(let r=0;r<t.imgData.data.length;r++)n[r]=t.imgData.data[r]>0?255:0;const i={data:n,width:this.width,height:this.height,colorSpace:"srgb"};return this.maskTexture.image=i,this.maskTexture.needsUpdate=!0,!0}}var ef=`#ifdef GL_ES
precision highp float;
#endif

varying vec3 pObj;

void main() {
  pObj = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,uS=`#ifdef GL_ES
precision highp float;
#endif

#define M_PI 3.14159265358979323846

uniform vec2 iResolution;
uniform vec2 textureRes;
uniform float GAMMA_MIN;
uniform float GAMMA_MAX;
uniform float GAMMA_SCALE;
uniform float BRIGHTNESS;
uniform float DENSITY;
uniform float maskAlpha;
uniform vec2 ATLAS_DIMS;
uniform vec3 AABB_CLIP_MIN;
uniform float CLIP_NEAR;
uniform vec3 AABB_CLIP_MAX;
uniform float CLIP_FAR;
uniform sampler2D textureAtlas;
uniform sampler2D textureAtlasMask;
uniform sampler2D textureDepth;
uniform int usingPositionTexture;
uniform int BREAK_STEPS;
uniform float SLICES;
uniform float isOrtho;
uniform float orthoThickness;
uniform float orthoScale;
uniform int maxProject;
uniform bool interpolationEnabled;
uniform vec3 flipVolume;
uniform vec3 volumeScale;

uniform mat4 inverseModelViewMatrix;
uniform mat4 inverseProjMatrix;

varying vec3 pObj;

float powf(float a, float b) {
  return pow(a,b);
}

float rand(vec2 co) {
  float threadId = gl_FragCoord.x/(gl_FragCoord.y + 1.0);
  float bigVal = threadId*1299721.0/911.0;
  vec2 smallVal = vec2(threadId*7927.0/577.0, threadId*104743.0/1039.0);
  return fract(sin(dot(co, smallVal)) * bigVal);
}

vec4 luma2Alpha(vec4 color, float vmin, float vmax, float C) {
  float x = dot(color.rgb, vec3(0.2125, 0.7154, 0.0721));
  
  float xi = (x-vmin)/(vmax-vmin);
  xi = clamp(xi,0.0,1.0);
  float y = pow(xi,C);
  y = clamp(y,0.0,1.0);
  color[3] = y;
  return color;
}

vec2 offsetFrontBack(float t) {
  int a = int(t);
  int ax = int(ATLAS_DIMS.x);
  vec2 os = vec2(float(a - (a / ax) * ax), float(a / ax)) / ATLAS_DIMS;
  return clamp(os, vec2(0.0), vec2(1.0) - vec2(1.0) / ATLAS_DIMS);
}

vec4 sampleAtlasLinear(sampler2D tex, vec4 pos) {
  float bounds = float(pos[0] >= 0.0 && pos[0] <= 1.0 &&
                       pos[1] >= 0.0 && pos[1] <= 1.0 &&
                       pos[2] >= 0.0 && pos[2] <= 1.0 );
  float nSlices = float(SLICES);
  
  
  
  
  vec2 loc0 = ((pos.xy - 0.5) * flipVolume.xy + 0.5) / ATLAS_DIMS;

  
  
  loc0 = vec2(0.5) / textureRes + loc0 * (vec2(1.0) - ATLAS_DIMS / textureRes);
  
  
  float z = (pos.z)*(nSlices-1.0);
  float z0 = floor(z);
  float t = z-z0; 
  float z1 = min(z0+1.0, nSlices-1.0);

  
  if (flipVolume.z == -1.0) {
    z0 = nSlices - z0 - 1.0;
    z1 = nSlices - z1 - 1.0;
    t = 1.0 - t;
  }

  
  vec2 o0 = offsetFrontBack(z0) + loc0;
  vec2 o1 = offsetFrontBack(z1) + loc0;

  vec4 slice0Color = texture2D(tex, o0);
  vec4 slice1Color = texture2D(tex, o1);
  
  
  
  float slice0Mask = texture2D(textureAtlasMask, o0).x;
  float slice1Mask = texture2D(textureAtlasMask, o1).x;
  
  float maskVal = mix(slice0Mask, slice1Mask, t);
  
  maskVal = mix(maskVal, 1.0, maskAlpha);
  vec4 retval = mix(slice0Color, slice1Color, t);
  
  retval.rgb *= maskVal;
  return bounds*retval;
}

vec4 sampleAtlasNearest(sampler2D tex, vec4 pos) {
  float bounds = float(pos[0] >= 0.0 && pos[0] <= 1.0 &&
                       pos[1] >= 0.0 && pos[1] <= 1.0 &&
                       pos[2] >= 0.0 && pos[2] <= 1.0 );
  float nSlices = float(SLICES);

  vec2 loc0 = ((pos.xy - 0.5) * flipVolume.xy + 0.5) / ATLAS_DIMS;

  
  
  
  loc0 = floor(loc0 * textureRes) / textureRes;
  loc0 += vec2(0.5) / textureRes;

  float z = min(floor(pos.z * nSlices), nSlices-1.0);
  
  if (flipVolume.z == -1.0) {
    z = nSlices - z - 1.0;
  }

  vec2 o = offsetFrontBack(z) + loc0;
  vec4 voxelColor = texture2D(tex, o);

  
  float voxelMask = texture2D(textureAtlasMask, o).x;
  voxelMask = mix(voxelMask, 1.0, maskAlpha);
  voxelColor.rgb *= voxelMask;

  return bounds*voxelColor;
}

bool intersectBox(in vec3 r_o, in vec3 r_d, in vec3 boxMin, in vec3 boxMax,
                  out float tnear, out float tfar) {
  
  vec3 invR = vec3(1.0,1.0,1.0) / r_d;
  vec3 tbot = invR * (boxMin - r_o);
  vec3 ttop = invR * (boxMax - r_o);

  
  vec3 tmin = min(ttop, tbot);
  vec3 tmax = max(ttop, tbot);

  
  float largest_tmin  = max(max(tmin.x, tmin.y), tmin.z);
  float smallest_tmax = min(min(tmax.x, tmax.y), tmax.z);

  tnear = largest_tmin;
  tfar = smallest_tmax;

  
  return(smallest_tmax > largest_tmin);
}

vec4 accumulate(vec4 col, float s, vec4 C) {
  float stepScale = (1.0 - powf((1.0-col.w),s));
  col.w = stepScale;
  col.xyz *= col.w;
  col = clamp(col,0.0,1.0);

  C = (1.0-C.w)*col + C;
  return C;
}

vec4 integrateVolume(vec4 eye_o,vec4 eye_d,
                     float tnear,   float tfar,
                     float clipNear, float clipFar,
                     sampler2D textureAtlas
                     ) {
  vec4 C = vec4(0.0);
  

  
  const int maxSteps = 512;
  
  float scaledSteps = float(BREAK_STEPS) * length((eye_d.xyz/volumeScale));
  float csteps = clamp(float(scaledSteps), 1.0, float(maxSteps));
  float invstep = (tfar-tnear)/csteps;
  
  
  float r = (SLICES==1.0) ? 0.0 : rand(eye_d.xy);
  
  float tstep = invstep*orthoThickness;
  float tfarsurf = r*tstep;
  float overflow = mod((tfarsurf - tfar),tstep); 
  float t = tnear + overflow;
  t += r*tstep; 
  float tdist = 0.0;
  int numSteps = 0;
  vec4 pos, col;
  
  
  
  float s = 0.5 * float(maxSteps) / csteps;
  for (int i = 0; i < maxSteps; i++) {
    pos = eye_o + eye_d*t;
    
    
    
    pos.xyz = (pos.xyz-(-0.5))/((0.5)-(-0.5)); 

    vec4 col = interpolationEnabled ? sampleAtlasLinear(textureAtlas, pos) : sampleAtlasNearest(textureAtlas, pos);

    if (maxProject != 0) {
      col.xyz *= BRIGHTNESS;
      C = max(col, C);
    } else {
      col = luma2Alpha(col, GAMMA_MIN, GAMMA_MAX, GAMMA_SCALE);
      col.xyz *= BRIGHTNESS;
      
      col.w *= DENSITY;
      C = accumulate(col, s, C);
    }
    t += tstep;
    numSteps = i;

    if (t > tfar || t > tnear+clipFar ) break;
    if (C.w > 1.0 ) break;
  }

  return C;
}

void main() {
  gl_FragColor = vec4(0.0);
  vec2 vUv = gl_FragCoord.xy/iResolution.xy;

  vec3 eyeRay_o, eyeRay_d;

  if (isOrtho == 0.0) {
    
    
    
    eyeRay_o = (inverseModelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
    eyeRay_d = normalize(pObj - eyeRay_o);
  } else {
    
    float zDist = 2.0;
    eyeRay_d = (inverseModelViewMatrix*vec4(0.0, 0.0, -zDist, 0.0)).xyz;
    vec4 ray_o = vec4(2.0*vUv - 1.0, 1.0, 1.0);
    ray_o.xy *= orthoScale;
    ray_o.x *= iResolution.x/iResolution.y;
    eyeRay_o = (inverseModelViewMatrix*ray_o).xyz;
  }

  
  
  
  
  vec3 boxMin = AABB_CLIP_MIN;
  vec3 boxMax = AABB_CLIP_MAX;

  float tnear, tfar;
  bool hit = intersectBox(eyeRay_o, eyeRay_d, boxMin, boxMax, tnear, tfar);

  if (!hit) {
    
    
    gl_FragColor = vec4(0.0); 
    return;
  }

  float clipNear = 0.0;
  float clipFar  = 10000.0;

  
  
  
  vec4 meshPosSample = texture2D(textureDepth, vUv);
  
  
  bool hasDepthValue = usingPositionTexture == 0 && meshPosSample.r < 1.0;

  
  if (hasDepthValue || (usingPositionTexture == 1 && meshPosSample.a > 0.0)) {
    if (hasDepthValue) {
      
      
      vec4 meshProj = vec4(vUv * 2.0 - 1.0, meshPosSample.r * 2.0 - 1.0, 1.0);
      vec4 meshView = inverseProjMatrix * meshProj;
      meshPosSample = vec4(meshView.xyz / meshView.w, 1.0);
    }
    
    vec4 meshObj = inverseModelViewMatrix * meshPosSample;

    
    
    
    float tMesh = (meshObj.z - eyeRay_o.z) / eyeRay_d.z;
    if (tMesh < tfar) {
      clipFar = tMesh - tnear;
    }
  }

  vec4 C = integrateVolume(vec4(eyeRay_o,1.0), vec4(eyeRay_d,0.0),
                          tnear,    tfar, 
                          clipNear, clipFar,
                          textureAtlas);

  C = clamp(C, 0.0, 1.0);
  gl_FragColor = C;
  return;
}`;const dS=ef,pS=uS,fS=()=>({iResolution:{type:"v2",value:new Ie(100,100)},CLIP_NEAR:{type:"f",value:.1},CLIP_FAR:{type:"f",value:20},maskAlpha:{type:"f",value:1},BRIGHTNESS:{type:"f",value:0},DENSITY:{type:"f",value:1},GAMMA_MIN:{type:"f",value:0},GAMMA_MAX:{type:"f",value:1},GAMMA_SCALE:{type:"f",value:1},BREAK_STEPS:{type:"i",value:128},ATLAS_DIMS:{type:"v2",value:new Ie(6,6)},SLICES:{type:"f",value:50},isOrtho:{type:"f",value:0},orthoThickness:{type:"f",value:1},orthoScale:{type:"f",value:.5},AABB_CLIP_MIN:{type:"v3",value:new L(-.5,-.5,-.5)},AABB_CLIP_MAX:{type:"v3",value:new L(.5,.5,.5)},inverseModelViewMatrix:{type:"m4",value:new ut},inverseProjMatrix:{type:"m4",value:new ut},textureAtlas:{type:"t",value:new Mt},textureAtlasMask:{type:"t",value:new Mt},textureDepth:{type:"t",value:new Mt},usingPositionTexture:{type:"i",value:0},maxProject:{type:"i",value:0},interpolationEnabled:{type:"b",value:!0},flipVolume:{type:"v3",value:new L(1,1,1)},volumeScale:{type:"v3",value:new L(1,1,1)},textureRes:{type:"v2",value:new Ie(1,1)}}),Xd=new ke(16776960);class Yd{constructor(e,t=new pi(e)){this.volume=e,this.uniforms=fS(),[this.geometry,this.geometryMesh]=this.createGeometry(this.uniforms),this.boxHelper=new Gp(new vn(new L(-.5,-.5,-.5),new L(.5,.5,.5)),Xd),this.boxHelper.updateMatrixWorld(),this.boxHelper.visible=!1,this.tickMarksMesh=this.createTickMarks(),this.tickMarksMesh.updateMatrixWorld(),this.tickMarksMesh.visible=!1,this.geometryTransformNode=new jn,this.geometryTransformNode.name="VolumeContainerNode",this.geometryTransformNode.add(this.boxHelper,this.tickMarksMesh,this.geometryMesh),this.emptyPositionTex=new cn(new Uint8Array(Array(16).fill(0)),2,2),this.settings=t,this.updateSettings(t,he.ALL),this.updateVolumeDimensions()}updateVolumeDimensions(){var c;const{normPhysicalSize:e,normRegionSize:t}=this.volume;this.geometryMesh.position.copy(this.volume.getContentCenter().multiply(this.settings.scale));const n=e.clone().multiply(this.settings.scale);this.geometryMesh.scale.copy(n).multiply(t),this.setUniform("volumeScale",e),this.boxHelper.box.set(n.clone().multiplyScalar(-.5),n.clone().multiplyScalar(.5)),this.tickMarksMesh.scale.copy(n),this.settings&&this.updateSettings(this.settings,he.ROI);const{atlasTileDims:i,subregionSize:r}=this.volume.imageInfo,a=new Ie(r.x,r.y).multiply(i);this.setUniform("ATLAS_DIMS",i),this.setUniform("textureRes",a),this.setUniform("SLICES",this.volume.imageInfo.volumeSize.z),(!this.channelData||this.channelData.width!==a.x||this.channelData.height!==a.y)&&((c=this.channelData)==null||c.cleanup(),this.channelData=new Qp(a.x,a.y))}viewpointMoved(){}updateSettings(e,t){if(t===void 0&&(t=he.ALL),this.settings=e,t&he.VIEW){this.geometryMesh.visible=this.settings.visible,this.setUniform("orthoScale",this.settings.orthoScale),this.setUniform("isOrtho",this.settings.isOrtho?1:0);const n=this.settings.viewAxis;if(this.settings.isOrtho&&n){const i=this.settings.bounds.bmax[n],r=this.settings.bounds.bmin[n],a=i-r;this.setUniform("orthoThickness",a)}else this.setUniform("orthoThickness",1)}if((t&he.VIEW||t&he.BOUNDING_BOX)&&(this.tickMarksMesh.visible=this.settings.showBoundingBox&&!this.settings.isOrtho,this.setUniform("maxProject",this.settings.maxProjectMode?1:0)),t&he.BOUNDING_BOX){this.boxHelper.visible=this.settings.showBoundingBox;const n=this.settings.boundingBoxColor,i=new ke(n[0],n[1],n[2]);this.boxHelper.material.color=i,this.tickMarksMesh.material.color=i}if(t&he.TRANSFORM&&(this.geometryTransformNode.position.copy(this.settings.translation),this.geometryTransformNode.rotation.copy(this.settings.rotation),this.updateVolumeDimensions(),this.setUniform("flipVolume",this.settings.flipAxes)),t&he.MATERIAL&&this.setUniform("DENSITY",this.settings.density),t&he.CAMERA&&(this.setUniform("BRIGHTNESS",this.settings.brightness*2),this.setUniform("GAMMA_MIN",this.settings.gammaMin),this.setUniform("GAMMA_MAX",this.settings.gammaMax),this.setUniform("GAMMA_SCALE",this.settings.gammaLevel)),t&he.ROI){const n=this.settings.bounds,{normRegionSize:i,normRegionOffset:r}=this.volume,a=i.clone().divideScalar(2).add(r).subScalar(.5),c=n.bmin.clone().sub(a).divide(i).clampScalar(-.5,.5),u=n.bmax.clone().sub(a).divide(i).clampScalar(-.5,.5);this.setUniform("AABB_CLIP_MIN",c),this.setUniform("AABB_CLIP_MAX",u)}t&he.SAMPLING&&(this.setUniform("interpolationEnabled",this.settings.useInterpolation),this.setUniform("iResolution",this.settings.resolution)),t&he.MASK_ALPHA&&this.setUniform("maskAlpha",this.settings.maskChannelIndex<0?1:this.settings.maskAlpha),t&he.MASK_DATA&&this.channelData.setChannelAsMask(this.settings.maskChannelIndex,this.volume.getChannel(this.settings.maskChannelIndex))}createGeometry(e){const t=new ki(1,1,1),n=new nn({uniforms:e,vertexShader:dS,fragmentShader:pS,transparent:!0,depthTest:!0,depthWrite:!1}),i=new It(t,n);return i.name="Volume",[t,i]}createTickMarks(){const{tickMarkPhysicalLength:t,physicalScale:n,normPhysicalSize:i}=this.volume,r=n/t,a=[],c=.025/i.y+.5,u=1/(i.x*r);for(let g=-.5;g<=.5;g+=u)a.push(g,.5,.5,g,c,.5,g,-.5,-.5,g,-c,-.5,g,.5,-.5,g,c,-.5,g,-.5,.5,g,-c,.5);const d=.025/i.x+.5,f=1/(i.y*r);for(let g=.5;g>=-.5;g-=f)a.push(-.5,g,.5,-d,g,.5,-.5,g,-.5,-d,g,-.5,.5,g,-.5,d,g,-.5,.5,g,.5,d,g,.5);const m=1/(i.z*r);for(let g=.5;g>=-.5;g-=m)a.push(-.5,.5,g,-d,.5,g,-.5,-.5,g,-d,-.5,g,.5,-.5,g,d,-.5,g,.5,.5,g,d,.5,g);const v=new An;return v.setAttribute("position",new Ut(new Float32Array(a),3)),new Qc(v,new ga({color:Xd}))}cleanup(){this.geometry.dispose(),this.geometryMesh.material.dispose(),this.channelData.cleanup()}doRender(e,t,n){if(!this.geometryMesh.visible)return;const i=n??this.emptyPositionTex;this.setUniform("textureDepth",i),this.setUniform("usingPositionTexture",i.isDepthTexture?0:1),this.setUniform("CLIP_NEAR",t.near),this.setUniform("CLIP_FAR",t.far),this.channelData.gpuFuse(e),this.setUniform("textureAtlas",this.channelData.getFusedTexture()),this.geometryTransformNode.updateMatrixWorld(!0);const r=new ut;r.multiplyMatrices(t.matrixWorldInverse,this.geometryMesh.matrixWorld),r.invert(),this.setUniform("inverseModelViewMatrix",r),this.setUniform("inverseProjMatrix",t.projectionMatrixInverse)}get3dObject(){return this.geometryTransformNode}setUniform(e,t){this.uniforms[e]&&(this.uniforms[e].value=t)}updateActiveChannels(e,t){this.channelData.fuse(e,t),this.setUniform("textureAtlas",this.channelData.getFusedTexture()),this.setUniform("textureAtlasMask",this.channelData.maskTexture)}setRenderUpdateListener(e){}}var mS=`precision highp float;
precision highp int;
precision highp sampler2D;

uniform float gInvExposure;
uniform int gDenoiseWindowRadius;
uniform float gDenoiseNoise;
uniform float gDenoiseInvWindowArea;
uniform float gDenoiseWeightThreshold;
uniform float gDenoiseLerpThreshold;
uniform float gDenoiseLerpC;
uniform vec2 gDenoisePixelSize;

uniform sampler2D tTexture0;
in vec2 vUv;

const mat3 XYZ_2_RGB = (mat3(
 3.2404542, -1.5371385, -0.4985314,
 -0.9692660,  1.8760108,  0.0415560,
  0.0556434, -0.2040259,  1.0572252
));

vec3 XYZtoRGB(vec3 xyz) {
  return xyz * XYZ_2_RGB;
}

void main()
{
  vec4 pixelColor = texture(tTexture0, vUv);
  
  pixelColor.rgb = XYZtoRGB(pixelColor.rgb);

  pixelColor.rgb = 1.0-exp(-pixelColor.rgb*gInvExposure);
  pixelColor = clamp(pixelColor, 0.0, 1.0);

  /////////////////////
  /////////////////////
  /////////////////////
  /////////////////////
  //// DENOISING FILTER
  /////////////////////
  
  /////////////////////
  vec4 clr00 = pixelColor;

  float fCount = 0.0;
  float SumWeights = 0.0;
  vec3 clr = vec3(0.0, 0.0, 0.0);

  vec2 uvsample = vUv;
  vec3 rgbsample;
  for (int i = -gDenoiseWindowRadius; i <= gDenoiseWindowRadius; i++) {
    for (int j = -gDenoiseWindowRadius; j <= gDenoiseWindowRadius; j++) {

      
      vec3 clrIJ = texture(tTexture0, vUv + vec2(float(i)/gDenoisePixelSize.x, float(j)/gDenoisePixelSize.y)).rgb;
      

      rgbsample = XYZtoRGB(clrIJ);
      
      rgbsample = 1.0 - exp(-rgbsample * gInvExposure);
      rgbsample = clamp(rgbsample, 0.0, 1.0);

      clrIJ = rgbsample;

      float distanceIJ = (clr00.x-clrIJ.x)*(clr00.x-clrIJ.x) + (clr00.y-clrIJ.y)*(clr00.y-clrIJ.y) + (clr00.z-clrIJ.z)*(clr00.z-clrIJ.z);

      
      
      float weightIJ = exp(-(distanceIJ * gDenoiseNoise + float(i * i + j * j) * gDenoiseInvWindowArea));

      clr += (clrIJ * weightIJ);

      SumWeights += weightIJ;

      fCount += (weightIJ > gDenoiseWeightThreshold) ? gDenoiseInvWindowArea : 0.0;
    }
  }

  SumWeights = 1.0 / SumWeights;

  clr.rgb *= SumWeights;

  float LerpQ = (fCount > gDenoiseLerpThreshold) ? gDenoiseLerpC : 1.0f - gDenoiseLerpC;

  clr.rgb = mix(clr.rgb, clr00.rgb, LerpQ);
  clr.rgb = clamp(clr.rgb, 0.0, 1.0);

  pc_fragColor = vec4(clr.rgb, clr00.a);
}`;const gS=mS,Fl=3,jd=()=>({gInvExposure:{type:"f",value:1/(1-.75)},gDenoiseWindowRadius:{type:"i",value:Fl},gDenoiseNoise:{type:"f",value:.05},gDenoiseInvWindowArea:{type:"f",value:1/((2*Fl+1)*(2*Fl+1))},gDenoiseWeightThreshold:{type:"f",value:.1},gDenoiseLerpThreshold:{type:"f",value:0},gDenoiseLerpC:{type:"f",value:.01},gDenoisePixelSize:{type:"v2",value:new Ie(1,1)},tTexture0:{type:"t",value:null}});var vS=`precision highp float;
precision highp int;
precision highp sampler2D;

uniform float gInvExposure;
uniform sampler2D tTexture0;
in vec2 vUv;

const mat3 XYZ_2_RGB = (mat3(
  3.2404542, -1.5371385, -0.4985314,
 -0.9692660,  1.8760108,  0.0415560,
  0.0556434, -0.2040259,  1.0572252
));

vec3 XYZtoRGB(vec3 xyz) {
  return xyz * XYZ_2_RGB;
}

void main() {
  vec4 pixelColor = texture(tTexture0, vUv);

  pixelColor.rgb = XYZtoRGB(pixelColor.rgb);

  
  pixelColor.rgb = 1.0-exp(-pixelColor.rgb*gInvExposure);
  pixelColor = clamp(pixelColor, 0.0, 1.0);

  pc_fragColor = pixelColor; 
  
}`;const _S=vS,xS=()=>({gInvExposure:{type:"f",value:1/(1-.75)},tTexture0:{type:"t",value:null}}),_a=0,xa=1;class nr{constructor(e){this.mTheta=14*Math.PI/180,this.mPhi=54*Math.PI/180,this.mWidth=1,this.mHeight=1,this.mHalfWidth=.5*this.mWidth,this.mHalfHeight=.5*this.mHeight,this.mDistance=4,this.mSkyRadius=1e3,this.mP=new L,this.mTarget=new L,this.mArea=1,this.mAreaPdf=1/this.mArea,this.mColor=new L(75,75,75),this.mColorTop=new L(.3,.3,.3),this.mColorMiddle=new L(.3,.3,.3),this.mColorBottom=new L(.3,.3,.3),this.mT=e,this.mN=new L(0,0,1),this.mU=new L(1,0,0),this.mV=new L(0,1,0),this.update(new L(0,0,0))}update(e,t){this.mHalfWidth=.5*this.mWidth,this.mHalfHeight=.5*this.mHeight,this.mTarget.copy(e),this.mP.x=this.mDistance*Math.sin(this.mPhi)*Math.sin(this.mTheta),this.mP.z=this.mDistance*Math.sin(this.mPhi)*Math.cos(this.mTheta),this.mP.y=this.mDistance*Math.cos(this.mPhi),this.mP.add(this.mTarget),t&&(this.mP.applyMatrix4(t),this.mTarget.applyMatrix4(t)),this.mT===_a?(this.mArea=this.mWidth*this.mHeight,this.mAreaPdf=1/this.mArea):this.mT===xa&&(this.mP.copy(e),this.mTarget.addVectors(this.mP,new L(0,0,1)),this.mSkyRadius=1e3*e.length()*2,this.mArea=4*Math.PI*Math.pow(this.mSkyRadius,2),this.mAreaPdf=1/this.mArea),this.mN.subVectors(this.mTarget,this.mP).normalize(),this.mN.y===1||this.mN.y===-1?this.mU.crossVectors(this.mN,new L(1,0,0)).normalize():this.mU.crossVectors(this.mN,new L(0,1,0)).normalize(),this.mV.crossVectors(this.mN,this.mU).normalize()}}var bS=`precision highp float;
precision highp int;
precision highp sampler2D;
precision highp sampler3D;

#define PI (3.1415926535897932384626433832795)
#define PI_OVER_2 (1.57079632679489661923)
#define PI_OVER_4 (0.785398163397448309616)
#define INV_PI (1.0/PI)
#define INV_2_PI (0.5/PI)
#define INV_4_PI (0.25/PI)

const vec3 BLACK = vec3(0,0,0);
const vec3 WHITE = vec3(1.0,1.0,1.0);
const int ShaderType_Brdf = 0;
const int ShaderType_Phase = 1;
const int ShaderType_Mixed = 2;
const float MAX_RAY_LEN = 1500000.0f;

in vec2 vUv;

struct Camera {
  vec3 mFrom;
  vec3 mU, mV, mN;
  vec4 mScreen;  
  vec2 mInvScreen;  
  float mFocalDistance;
  float mApertureSize;
  float mIsOrtho; 
};

uniform Camera gCamera;

struct Light {
  float   mTheta;
  float   mPhi;
  float   mWidth;
  float   mHalfWidth;
  float   mHeight;
  float   mHalfHeight;
  float   mDistance;
  float   mSkyRadius;
  vec3    mP;
  vec3    mTarget;
  vec3    mN;
  vec3    mU;
  vec3    mV;
  float   mArea;
  float   mAreaPdf;
  vec3    mColor;
  vec3    mColorTop;
  vec3    mColorMiddle;
  vec3    mColorBottom;
  int     mT;
};
const int NUM_LIGHTS = 2;
uniform Light gLights[2];

uniform vec3 gClippedAaBbMin;
uniform vec3 gClippedAaBbMax;
uniform vec3 gVolCenter;
uniform float gDensityScale;
uniform float gStepSize;
uniform float gStepSizeShadow;
uniform sampler3D volumeTexture;
uniform vec3 gInvAaBbMax;
uniform int gNChannels;
uniform int gShadingType;
uniform vec3 gGradientDeltaX;
uniform vec3 gGradientDeltaY;
uniform vec3 gGradientDeltaZ;
uniform float gInvGradientDelta;
uniform float gGradientFactor;
uniform float uShowLights;
uniform vec3 flipVolume;

uniform sampler2D gLutTexture;
uniform vec4 gIntensityMax;
uniform vec4 gIntensityMin;
uniform float gOpacity[4];
uniform vec3 gEmissive[4];
uniform vec3 gDiffuse[4];
uniform vec3 gSpecular[4];
uniform float gGlossiness[4];

uniform float uFrameCounter;
uniform float uSampleCounter;
uniform vec2 uResolution;
uniform sampler2D tPreviousTexture;

float rand( inout uvec2 seed )
{
  seed += uvec2(1);
  uvec2 q = 1103515245U * ( (seed >> 1U) ^ (seed.yx) );
  uint  n = 1103515245U * ( (q.x) ^ (q.y >> 3U) );
  return float(n) * (1.0 / float(0xffffffffU));
}

vec3 XYZtoRGB(vec3 xyz) {
  return vec3(
    3.240479f*xyz[0] - 1.537150f*xyz[1] - 0.498535f*xyz[2],
    -0.969256f*xyz[0] + 1.875991f*xyz[1] + 0.041556f*xyz[2],
    0.055648f*xyz[0] - 0.204043f*xyz[1] + 1.057311f*xyz[2]
  );
}

const mat3 RGB_2_XYZ = (mat3(
  0.4124564, 0.3575761, 0.1804375,
  0.2126729, 0.7151522, 0.0721750,
  0.0193339, 0.1191920, 0.9503041
));
vec3 RGBtoXYZ(vec3 rgb) {
  return rgb * RGB_2_XYZ;
}

vec3 getUniformSphereSample(in vec2 U)
{
  float z = 1.f - 2.f * U.x;
  float r = sqrt(max(0.f, 1.f - z*z));
  float phi = 2.f * PI * U.y;
  float x = r * cos(phi);
  float y = r * sin(phi);
  return vec3(x, y, z);
}

float SphericalPhi(in vec3 Wl)
{
  float p = atan(Wl.z, Wl.x);
  return (p < 0.f) ? p + 2.f * PI : p;
}

float SphericalTheta(in vec3 Wl)
{
  return acos(clamp(Wl.y, -1.f, 1.f));
}

bool SameHemisphere(in vec3 Ww1, in vec3 Ww2)
{
   return (Ww1.z * Ww2.z) > 0.0f;
}

vec2 getConcentricDiskSample(in vec2 U)
{
  float r, theta;
  
  float sx = 2.0 * U.x - 1.0;
  float sy = 2.0 * U.y - 1.0;

  

  
  if (sx == 0.0 && sy == 0.0)
  {
    return vec2(0.0f, 0.0f);
  }

  
  if (sx >= -sy)
  {
    if (sx > sy)
    {
      r = sx;
      if (sy > 0.0)
        theta = sy/r;
      else
        theta = 8.0f + sy/r;
    }
    else
    {
      r = sy;
      theta = 2.0f - sx/r;
    }
  }
  else
  {
    if (sx <= sy)
    {
      r = -sx;
      theta = 4.0f - sy/r;
    }
    else
    {
      r = -sy;
      theta = 6.0f + sx/r;
    }
  }

  theta *= PI_OVER_4;

  return vec2(r*cos(theta), r*sin(theta));
}

vec3 getCosineWeightedHemisphereSample(in vec2 U)
{
  vec2 ret = getConcentricDiskSample(U);
  return vec3(ret.x, ret.y, sqrt(max(0.f, 1.f - ret.x * ret.x - ret.y * ret.y)));
}

struct Ray {
  vec3 m_O;
  vec3 m_D;
  float m_MinT, m_MaxT;
};

vec3 rayAt(Ray r, float t) {
  return r.m_O + t*r.m_D;
}

Ray GenerateCameraRay(in Camera cam, in vec2 Pixel, in vec2 ApertureRnd)
{
  
  
  vec2 ScreenPoint = vec2(
    cam.mScreen.x + (cam.mInvScreen.x * Pixel.x),
    cam.mScreen.z + (cam.mInvScreen.y * Pixel.y)
  );
  vec3 dxy = (ScreenPoint.x * cam.mU) + (-ScreenPoint.y * cam.mV);

  
  
  vec3 RayO = cam.mFrom + cam.mIsOrtho * dxy;
  vec3 RayD = normalize(cam.mN + (1.0 - cam.mIsOrtho) * dxy);

  if (cam.mApertureSize != 0.0f)
  {
    vec2 LensUV = cam.mApertureSize * getConcentricDiskSample(ApertureRnd);

    vec3 LI = cam.mU * LensUV.x + cam.mV * LensUV.y;
    RayO += LI;
    RayD = normalize((RayD * cam.mFocalDistance) - LI);
  }

  return Ray(RayO, RayD, 0.0, MAX_RAY_LEN);
}

bool IntersectBox(in Ray R, out float pNearT, out float pFarT)
{
  vec3 invR		= vec3(1.0f, 1.0f, 1.0f) / R.m_D;
  vec3 bottomT		= invR * (vec3(gClippedAaBbMin.x, gClippedAaBbMin.y, gClippedAaBbMin.z) - R.m_O);
  vec3 topT		= invR * (vec3(gClippedAaBbMax.x, gClippedAaBbMax.y, gClippedAaBbMax.z) - R.m_O);
  vec3 minT		= min(topT, bottomT);
  vec3 maxT		= max(topT, bottomT);
  float largestMinT = max(max(minT.x, minT.y), max(minT.x, minT.z));
  float smallestMaxT = min(min(maxT.x, maxT.y), min(maxT.x, maxT.z));

  pNearT = largestMinT;
  pFarT	= smallestMaxT;

  return smallestMaxT > largestMinT;
}

vec3 PtoVolumeTex(vec3 p) {
  vec3 uvw = (p - gVolCenter) * gInvAaBbMax + vec3(0.5, 0.5, 0.5);
  
  
  uvw = (flipVolume*(uvw - 0.5) + 0.5);
  return uvw;
}

const float UINT8_MAX = 1.0;

float GetNormalizedIntensityMax4ch(in vec3 P, out int ch)
{
  vec4 intensity = UINT8_MAX * texture(volumeTexture, PtoVolumeTex(P));

  
  vec4 ilut = vec4(0.0, 0.0, 0.0, 0.0);
  
  ilut.x = texture(gLutTexture, vec2(intensity.x, 0.5/4.0)).w / 255.0;
  ilut.y = texture(gLutTexture, vec2(intensity.y, 1.5/4.0)).w / 255.0;
  ilut.z = texture(gLutTexture, vec2(intensity.z, 2.5/4.0)).w / 255.0;
  ilut.w = texture(gLutTexture, vec2(intensity.w, 3.5/4.0)).w / 255.0;

  float maxIn = 0.0;
  float iOut = 0.0;
  ch = 0;
  for (int i = 0; i < min(gNChannels, 4); ++i) {
    if (ilut[i] > maxIn) {
      maxIn = ilut[i];
      ch = i;
      iOut = intensity[i];
    }
  }

  
  return iOut;
}

float GetNormalizedIntensity4ch(vec3 P, int ch)
{
  vec4 intensity = UINT8_MAX * texture(volumeTexture, PtoVolumeTex(P));
  
  float intensityf = intensity[ch];
  
  

  return intensityf;
}

vec3 Gradient4ch(vec3 P, int ch)
{
  vec3 Gradient;

  Gradient.x = (GetNormalizedIntensity4ch(P + (gGradientDeltaX), ch) - GetNormalizedIntensity4ch(P - (gGradientDeltaX), ch)) * gInvGradientDelta;
  Gradient.y = (GetNormalizedIntensity4ch(P + (gGradientDeltaY), ch) - GetNormalizedIntensity4ch(P - (gGradientDeltaY), ch)) * gInvGradientDelta;
  Gradient.z = (GetNormalizedIntensity4ch(P + (gGradientDeltaZ), ch) - GetNormalizedIntensity4ch(P - (gGradientDeltaZ), ch)) * gInvGradientDelta;

  return Gradient;
}

float GetOpacity(float NormalizedIntensity, int ch)
{
  
  float o = texture(gLutTexture, vec2(NormalizedIntensity, (0.5+float(ch))/4.0)).w / 255.0;
  float Intensity = o * gOpacity[ch];
  return Intensity;
}

vec3 GetEmissionN(float NormalizedIntensity, int ch)
{
  return gEmissive[ch];
}

vec3 GetDiffuseN(float NormalizedIntensity, int ch)
{
  vec4 col = texture(gLutTexture, vec2(NormalizedIntensity, (0.5+float(ch))/4.0));
  
  return col.xyz * gDiffuse[ch];
}

vec3 GetSpecularN(float NormalizedIntensity, int ch)
{
  return gSpecular[ch];
}

float GetGlossinessN(float NormalizedIntensity, int ch)
{
  return gGlossiness[ch];
}

struct LightingSample {
  float m_bsdfComponent;
  vec2  m_bsdfDir;
  vec2  m_lightPos;
  float m_lightComponent;
  float m_LightNum;
};

LightingSample LightingSample_LargeStep(inout uvec2 seed) {
  return LightingSample(
    rand(seed),
    vec2(rand(seed), rand(seed)),
    vec2(rand(seed), rand(seed)),
    rand(seed),
    rand(seed)
    );
}

vec3 Light_Le(in Light light, in vec2 UV)
{
  if (light.mT == 0)
    return RGBtoXYZ(light.mColor) / light.mArea;

  if (light.mT == 1)
  {
    if (UV.y > 0.0f)
      return RGBtoXYZ(mix(light.mColorMiddle, light.mColorTop, abs(UV.y)));
    else
      return RGBtoXYZ(mix(light.mColorMiddle, light.mColorBottom, abs(UV.y)));
  }

  return BLACK;
}

vec3 Light_SampleL(in Light light, in vec3 P, out Ray Rl, out float Pdf, in LightingSample LS)
{
  vec3 L = BLACK;
  Pdf = 0.0;
  vec3 Ro = vec3(0,0,0), Rd = vec3(0,0,1);
  if (light.mT == 0)
  {
    Ro = (light.mP + ((-0.5f + LS.m_lightPos.x) * light.mWidth * light.mU) + ((-0.5f + LS.m_lightPos.y) * light.mHeight * light.mV));
    Rd = normalize(P - Ro);
    L = dot(Rd, light.mN) > 0.0f ? Light_Le(light, vec2(0.0f)) : BLACK;
    Pdf = abs(dot(Rd, light.mN)) > 0.0f ? dot(P-Ro, P-Ro) / (abs(dot(Rd, light.mN)) * light.mArea) : 0.0f;
  }
  else if (light.mT == 1)
  {
    Ro = light.mP + light.mSkyRadius * getUniformSphereSample(LS.m_lightPos);
    Rd = normalize(P - Ro);
    L = Light_Le(light, vec2(1.0f) - 2.0f * LS.m_lightPos);
    Pdf = pow(light.mSkyRadius, 2.0f) / light.mArea;
  }

  Rl = Ray(Ro, Rd, 0.0f, length(P - Ro));

  return L;
}

bool Light_Intersect(Light light, inout Ray R, out float T, out vec3 L, out float pPdf)
{
  if (light.mT == 0)
  {
    
    float DotN = dot(R.m_D, light.mN);

    
    if (DotN >= 0.0f)
      return false;

    
    T = (-light.mDistance - dot(R.m_O, light.mN)) / DotN;

    
    if (T < R.m_MinT || T > R.m_MaxT)
      return false;

    
    vec3 Pl = rayAt(R, T);

    
    vec3 Wl = Pl - light.mP;

    
    vec2 UV = vec2(dot(Wl, light.mU), dot(Wl, light.mV));

    
    if (UV.x > light.mHalfWidth || UV.x < -light.mHalfWidth || UV.y > light.mHalfHeight || UV.y < -light.mHalfHeight)
      return false;

    R.m_MaxT = T;

    

    if (DotN < 0.0f)
      L = RGBtoXYZ(light.mColor) / light.mArea;
    else
      L = BLACK;

    pPdf = dot(R.m_O-Pl, R.m_O-Pl) / (DotN * light.mArea);

    return true;
  }

  else if (light.mT == 1)
  {
    T = light.mSkyRadius;

    
    if (T < R.m_MinT || T > R.m_MaxT)
      return false;

    R.m_MaxT = T;

    vec2 UV = vec2(SphericalPhi(R.m_D) * INV_2_PI, SphericalTheta(R.m_D) * INV_PI);

    L = Light_Le(light, vec2(1.0f,1.0f) - 2.0f * UV);

    pPdf = pow(light.mSkyRadius, 2.0f) / light.mArea;
    

    return true;
  }

  return false;
}

float Light_Pdf(in Light light, in vec3 P, in vec3 Wi)
{
  vec3 L;
  vec2 UV;
  float Pdf = 1.0f;

  Ray Rl = Ray(P, Wi, 0.0f, 100000.0f);

  if (light.mT == 0)
  {
    float T = 0.0f;

    if (!Light_Intersect(light, Rl, T, L, Pdf))
      return 0.0f;

    return pow(T, 2.0f) / (abs(dot(light.mN, -Wi)) * light.mArea);
  }

  else if (light.mT == 1)
  {
    return pow(light.mSkyRadius, 2.0f) / light.mArea;
  }

  return 0.0f;
}

struct VolumeShader {
  int m_Type; 

  vec3 m_Kd; 
  vec3 m_R; 
  float m_Ior;
  float m_Exponent;
  vec3 m_Nn;
  vec3 m_Nu;
  vec3 m_Nv;
};

vec3 ShaderPhase_F(in VolumeShader shader, in vec3 Wo, in vec3 Wi)
{
  return shader.m_Kd * INV_PI;
}

float ShaderPhase_Pdf(in VolumeShader shader, in vec3 Wo, in vec3 Wi)
{
  return INV_4_PI;
}

vec3 ShaderPhase_SampleF(in VolumeShader shader, in vec3 Wo, out vec3 Wi, out float Pdf, in vec2 U)
{
  Wi	= getUniformSphereSample(U);
  Pdf	= ShaderPhase_Pdf(shader, Wo, Wi);

  return ShaderPhase_F(shader, Wo, Wi);
}

vec3 Lambertian_F(in VolumeShader shader, in vec3 Wo, in vec3 Wi)
{
  return shader.m_Kd * INV_PI;
}

float Lambertian_Pdf(in VolumeShader shader, in vec3 Wo, in vec3 Wi)
{
  
  return SameHemisphere(Wo, Wi) ? abs(Wi.z) * INV_PI : 0.0f;
}

vec3 Lambertian_SampleF(in VolumeShader shader, in vec3 Wo, out vec3 Wi, out float Pdf, in vec2 U)
{
  Wi = getCosineWeightedHemisphereSample(U);

  if (Wo.z < 0.0f)
    Wi.z *= -1.0f;

  Pdf = Lambertian_Pdf(shader, Wo, Wi);

  return Lambertian_F(shader, Wo, Wi);
}

vec3 SphericalDirection(in float SinTheta, in float CosTheta, in float Phi)
{
  return vec3(SinTheta * cos(Phi), SinTheta * sin(Phi), CosTheta);
}

void Blinn_SampleF(in VolumeShader shader, in vec3 Wo, out vec3 Wi, out float Pdf, in vec2 U)
{
  
  float costheta = pow(U.x, 1.f / (shader.m_Exponent+1.0));
  float sintheta = sqrt(max(0.f, 1.f - costheta*costheta));
  float phi = U.y * 2.f * PI;

  vec3 wh = SphericalDirection(sintheta, costheta, phi);

  if (!SameHemisphere(Wo, wh))
    wh = -wh;

  
  Wi = -Wo + 2.f * dot(Wo, wh) * wh;

  
  float blinn_pdf = ((shader.m_Exponent + 1.f) * pow(costheta, shader.m_Exponent)) / (2.f * PI * 4.f * dot(Wo, wh));

  if (dot(Wo, wh) <= 0.f)
    blinn_pdf = 0.f;

  Pdf = blinn_pdf;
}

float Blinn_D(in VolumeShader shader, in vec3 wh)
{
  float costhetah = abs(wh.z);
  return (shader.m_Exponent+2.0) * INV_2_PI * pow(costhetah, shader.m_Exponent);
}
float Microfacet_G(in VolumeShader shader, in vec3 wo, in vec3 wi, in vec3 wh)
{
  float NdotWh = abs(wh.z);
  float NdotWo = abs(wo.z);
  float NdotWi = abs(wi.z);
  float WOdotWh = abs(dot(wo, wh));

  return min(1.f, min((2.f * NdotWh * NdotWo / WOdotWh), (2.f * NdotWh * NdotWi / WOdotWh)));
}

vec3 Microfacet_F(in VolumeShader shader, in vec3 wo, in vec3 wi)
{
  float cosThetaO = abs(wo.z);
  float cosThetaI = abs(wi.z);

  if (cosThetaI == 0.f || cosThetaO == 0.f)
    return BLACK;

  vec3 wh = wi + wo;

  if (wh.x == 0. && wh.y == 0. && wh.z == 0.)
    return BLACK;

  wh = normalize(wh);
  float cosThetaH = dot(wi, wh);

  vec3 F = WHITE;

  return shader.m_R * Blinn_D(shader, wh) * Microfacet_G(shader, wo, wi, wh) * F / (4.f * cosThetaI * cosThetaO);
}

vec3 ShaderBsdf_WorldToLocal(in VolumeShader shader, in vec3 W)
{
  return vec3(dot(W, shader.m_Nu), dot(W, shader.m_Nv), dot(W, shader.m_Nn));
}

vec3 ShaderBsdf_LocalToWorld(in VolumeShader shader, in vec3 W)
{
  return vec3(	shader.m_Nu.x * W.x + shader.m_Nv.x * W.y + shader.m_Nn.x * W.z,
    shader.m_Nu.y * W.x + shader.m_Nv.y * W.y + shader.m_Nn.y * W.z,
    shader.m_Nu.z * W.x + shader.m_Nv.z * W.y + shader.m_Nn.z * W.z);
}

float Blinn_Pdf(in VolumeShader shader, in vec3 Wo, in vec3 Wi)
{
  vec3 wh = normalize(Wo + Wi);

  float costheta = abs(wh.z);
  
  float blinn_pdf = ((shader.m_Exponent + 1.f) * pow(costheta, shader.m_Exponent)) / (2.f * PI * 4.f * dot(Wo, wh));

  if (dot(Wo, wh) <= 0.0f)
    blinn_pdf = 0.0f;

  return blinn_pdf;
}

vec3 Microfacet_SampleF(in VolumeShader shader, in vec3 wo, out vec3 wi, out float Pdf, in vec2 U)
{
  Blinn_SampleF(shader, wo, wi, Pdf, U);

  if (!SameHemisphere(wo, wi))
    return BLACK;

  return Microfacet_F(shader, wo, wi);
}

float Microfacet_Pdf(in VolumeShader shader, in vec3 wo, in vec3 wi)
{
  if (!SameHemisphere(wo, wi))
    return 0.0f;

  return Blinn_Pdf(shader, wo, wi);
}

vec3 ShaderBsdf_F(in VolumeShader shader, in vec3 Wo, in vec3 Wi)
{
  vec3 Wol = ShaderBsdf_WorldToLocal(shader, Wo);
  vec3 Wil = ShaderBsdf_WorldToLocal(shader, Wi);

  vec3 R = vec3(0,0,0);

  R += Lambertian_F(shader, Wol, Wil);
  R += Microfacet_F(shader, Wol, Wil);

  return R;
}

float ShaderBsdf_Pdf(in VolumeShader shader, in vec3 Wo, in vec3 Wi)
{
  vec3 Wol = ShaderBsdf_WorldToLocal(shader, Wo);
  vec3 Wil = ShaderBsdf_WorldToLocal(shader, Wi);

  float Pdf = 0.0f;

  Pdf += Lambertian_Pdf(shader, Wol, Wil);
  Pdf += Microfacet_Pdf(shader, Wol, Wil);

  return Pdf;
}

vec3 ShaderBsdf_SampleF(in VolumeShader shader, in LightingSample S, in vec3 Wo, out vec3 Wi, out float Pdf, in vec2 U)
{
  vec3 Wol = ShaderBsdf_WorldToLocal(shader, Wo);
  vec3 Wil = vec3(0,0,0);

  vec3 R = vec3(0,0,0);

  if (S.m_bsdfComponent <= 0.5f)
  {
    Lambertian_SampleF(shader, Wol, Wil, Pdf, S.m_bsdfDir);
  }
  else
  {
    Microfacet_SampleF(shader, Wol, Wil, Pdf, S.m_bsdfDir);
  }

  Pdf += Lambertian_Pdf(shader, Wol, Wil);
  Pdf += Microfacet_Pdf(shader, Wol, Wil);

  R += Lambertian_F(shader, Wol, Wil);
  R += Microfacet_F(shader, Wol, Wil);

  Wi = ShaderBsdf_LocalToWorld(shader, Wil);

  
  return R;
}

vec3 Shader_F(in VolumeShader shader, in vec3 Wo, in vec3 Wi)
{
  if (shader.m_Type == 0) {
    return ShaderBsdf_F(shader, Wo, Wi);
  }
  else {
    return ShaderPhase_F(shader, Wo, Wi);
  }
}

float Shader_Pdf(in VolumeShader shader, in vec3 Wo, in vec3 Wi)
{
  if (shader.m_Type == 0) {
    return ShaderBsdf_Pdf(shader, Wo, Wi);
  }
  else {
    return ShaderPhase_Pdf(shader, Wo, Wi);
  }
}

vec3 Shader_SampleF(in VolumeShader shader, in LightingSample S, in vec3 Wo, out vec3 Wi, out float Pdf, in vec2 U)
{
  
  if (shader.m_Type == 0) {
    return ShaderBsdf_SampleF(shader, S, Wo, Wi, Pdf, U);
  }
  else {
    return ShaderPhase_SampleF(shader, Wo, Wi, Pdf, U);
  }
}

bool IsBlack(in vec3 v) {
  return (v.x==0.0 && v.y == 0.0 && v.z == 0.0);
}

float PowerHeuristic(float nf, float fPdf, float ng, float gPdf)
{
  float f = nf * fPdf;
  float g = ng * gPdf;
  
  
  return (f * f) / (f * f + g * g);
}

float MISContribution(float pdf1, float pdf2)
{
  return PowerHeuristic(1.0f, pdf1, 1.0f, pdf2);
}

bool DoesSecondaryRayScatterInVolume(inout Ray R, inout uvec2 seed)
{
  float MinT;
  float MaxT;
  vec3 Ps;

  if (!IntersectBox(R, MinT, MaxT))
    return false;

  MinT = max(MinT, R.m_MinT);
  MaxT = min(MaxT, R.m_MaxT);

  
  float S	= -log(rand(seed)) / gDensityScale;
  float Sum = 0.0f;
  float SigmaT = 0.0f;

  MinT += rand(seed) * gStepSizeShadow;
  int ch = 0;
  float intensity = 0.0;
  while (Sum < S)
  {
    Ps = rayAt(R, MinT);  

    if (MinT > MaxT)
      return false;

    intensity = GetNormalizedIntensityMax4ch(Ps, ch);
    SigmaT = gDensityScale * GetOpacity(intensity, ch);

    Sum += SigmaT * gStepSizeShadow;
    MinT += gStepSizeShadow;
  }

  return true;
}

int GetNearestLight(Ray R, out vec3 oLightColor, out vec3 Pl, out float oPdf)
{
  int hit = -1;
  float T = 0.0f;
  Ray rayCopy = R;
  float pdf = 0.0f;

  for (int i = 0; i < 2; i++)
  {
    if (Light_Intersect(gLights[i], rayCopy, T, oLightColor, pdf))
    {
      Pl = rayAt(R, T);
      hit = i;
    }
  }
  oPdf = pdf;

  return hit;
}

vec3 EstimateDirectLight(int shaderType, float Density, int ch, in Light light, in LightingSample LS, in vec3 Wo, in vec3 Pe, in vec3 N, inout uvec2 seed)
{
  vec3 Ld = BLACK, Li = BLACK, F = BLACK;

  vec3 diffuse = GetDiffuseN(Density, ch);
  vec3 specular = GetSpecularN(Density, ch);
  float glossiness = GetGlossinessN(Density, ch);

  
  vec3 nu = normalize(cross(N, Wo));
  vec3 nv = normalize(cross(N, nu));

  
  VolumeShader Shader = VolumeShader(shaderType, RGBtoXYZ(diffuse), RGBtoXYZ(specular), 2.5f, glossiness, N, nu, nv);

  float LightPdf = 1.0f, ShaderPdf = 1.0f;

  Ray Rl = Ray(vec3(0,0,0), vec3(0,0,1.0), 0.0, MAX_RAY_LEN);
  
  Li = Light_SampleL(light, Pe, Rl, LightPdf, LS);

  
  vec3 Wi = -Rl.m_D, P = vec3(0,0,0);

  

  F = Shader_F(Shader,Wo, Wi);

  ShaderPdf = Shader_Pdf(Shader, Wo, Wi);

  
  if (!IsBlack(Li) && (ShaderPdf > 0.0f) && (LightPdf > 0.0f) && !DoesSecondaryRayScatterInVolume(Rl, seed))
  {
    

    float dotProd = 1.0;
    if (shaderType == ShaderType_Brdf){

      
      dotProd = abs(dot(Wi, N));
    }
    Ld += F * Li * dotProd * MISContribution(LightPdf, ShaderPdf) / LightPdf;

  }

  
  F = Shader_SampleF(Shader, LS, Wo, Wi, ShaderPdf, LS.m_bsdfDir);
  if (!IsBlack(F) && (ShaderPdf > 0.0f))
  {
    vec3 Pl = vec3(0,0,0);
    int n = GetNearestLight(Ray(Pe, Wi, 0.0f, 1000000.0f), Li, Pl, LightPdf);
    if (n > -1)
    {
      Light pLight = gLights[n];
      LightPdf = Light_Pdf(pLight, Pe, Wi);

      if ((LightPdf > 0.0f) && !IsBlack(Li)) {
        Ray rr = Ray(Pl, normalize(Pe - Pl), 0.0f, length(Pe - Pl));
        if (!DoesSecondaryRayScatterInVolume(rr, seed))
        {
          float dotProd = 1.0;
          if (shaderType == ShaderType_Brdf){

            
            dotProd = abs(dot(Wi, N));
          }
          
          Ld += F * Li * dotProd * MISContribution(ShaderPdf, LightPdf) / ShaderPdf;
        }

      }
    }
  }

  return Ld;

}

vec3 UniformSampleOneLight(int shaderType, float Density, int ch, in vec3 Wo, in vec3 Pe, in vec3 N, inout uvec2 seed)
{
  
  

  
  LightingSample LS = LightingSample_LargeStep(seed);

  int WhichLight = int(floor(LS.m_LightNum * float(NUM_LIGHTS)));

  Light light = gLights[WhichLight];

  return float(NUM_LIGHTS) * EstimateDirectLight(shaderType, Density, ch, light, LS, Wo, Pe, N, seed);

}

bool SampleScatteringEvent(inout Ray R, inout uvec2 seed, out vec3 Ps)
{
  float MinT;
  float MaxT;

  if (!IntersectBox(R, MinT, MaxT))
    return false;

  MinT = max(MinT, R.m_MinT);
  MaxT = min(MaxT, R.m_MaxT);

  

  
  
  
  
  

  

  

  
  
  
  
  
  

  

  
  
  float S	= -log(rand(seed)) / gDensityScale;

  float Sum		= 0.0f;
  float SigmaT	= 0.0f; 

  
  MinT += rand(seed) * gStepSize;

  int ch = 0;
  float intensity = 0.0;

  
  while (Sum < S)
  {
    Ps = rayAt(R, MinT);  

    
    if (MinT > MaxT)
      return false;

    intensity = GetNormalizedIntensityMax4ch(Ps, ch);
    SigmaT = gDensityScale * GetOpacity(intensity, ch);

    Sum += SigmaT * gStepSize;
    MinT += gStepSize;
  }

  
  

  return true;
}

vec4 CalculateRadiance(inout uvec2 seed) {
  float r = rand(seed);
  

  vec3 Lv = BLACK, Li = BLACK;

  

  vec2 UV = vUv*uResolution + vec2(rand(seed), rand(seed));

  Ray Re = GenerateCameraRay(gCamera, UV, vec2(rand(seed), rand(seed)));

  
  
  

  
  

  vec3 Pe = vec3(0,0,0), Pl = vec3(0,0,0);
  float lpdf = 0.0;

  float alpha = 0.0;
  
  if (SampleScatteringEvent(Re, seed, Pe))
  {
    alpha = 1.0;
    
    
    int i = GetNearestLight(Ray(Re.m_O, Re.m_D, 0.0f, length(Pe - Re.m_O)), Li, Pl, lpdf);
    if (i > -1)
    {
      
      return vec4(Li, 1.0);
    }

    int ch = 0;
    float D = GetNormalizedIntensityMax4ch(Pe, ch);

    
    Lv += RGBtoXYZ(GetEmissionN(D, ch));

    vec3 gradient = Gradient4ch(Pe, ch);
    
    switch (gShadingType)
    {
      case ShaderType_Brdf:
      {
        Lv += UniformSampleOneLight(ShaderType_Brdf, D, ch, normalize(-Re.m_D), Pe, normalize(gradient), seed);
        break;
      }

      case ShaderType_Phase:
      {
        Lv += 0.5f * UniformSampleOneLight(ShaderType_Phase, D, ch, normalize(-Re.m_D), Pe, normalize(gradient), seed);
        break;
      }

      case ShaderType_Mixed:
      {
        
        float GradMag = length(gradient);
        float PdfBrdf = (1.0f - exp(-gGradientFactor * GradMag));

        vec3 cls; 
        if (rand(seed) < PdfBrdf) {
          cls = UniformSampleOneLight(ShaderType_Brdf, D, ch, normalize(-Re.m_D), Pe, normalize(gradient), seed);
        }
        else {
          cls = 0.5f * UniformSampleOneLight(ShaderType_Phase, D, ch, normalize(-Re.m_D), Pe, normalize(gradient), seed);
        }

        Lv += cls;

        break;
      }
    }
  }
  else
  {
    
    
    
    
    
    
    
    
  }

  

  return vec4(Lv, alpha);
}

vec4 CumulativeMovingAverage(vec4 A, vec4 Ax, float N)
{
   return A + ((Ax - A) / max((N), 1.0f));
}

void main()
{
  
  uvec2 seed = uvec2(uFrameCounter, uFrameCounter + 1.0) * uvec2(gl_FragCoord);

  
  vec4 pixelColor = CalculateRadiance( seed );

  vec4 previousColor = texture(tPreviousTexture, vUv);
  if (uSampleCounter < 1.0) {
    previousColor = vec4(0,0,0,0);
  }

  pc_fragColor = CumulativeMovingAverage(previousColor, pixelColor, uSampleCounter);
}`;const yS=bS,wS=0,SS=()=>({tPreviousTexture:{type:"t",value:new Mt},uSampleCounter:{type:"f",value:0},uFrameCounter:{type:"f",value:1},uResolution:{type:"v2",value:new Ie},gClippedAaBbMin:{type:"v3",value:new L(0,0,0)},gClippedAaBbMax:{type:"v3",value:new L(1,1,1)},gVolCenter:{type:"v3",value:new L(0,0,0)},gDensityScale:{type:"f",value:50},gStepSize:{type:"f",value:1},gStepSizeShadow:{type:"f",value:1},gInvAaBbMax:{type:"v3",value:new L},gNChannels:{type:"i",value:0},gShadingType:{type:"i",value:wS},gGradientDeltaX:{type:"v3",value:new L(.01,0,0)},gGradientDeltaY:{type:"v3",value:new L(0,.01,0)},gGradientDeltaZ:{type:"v3",value:new L(0,0,.01)},gInvGradientDelta:{type:"f",value:0},gGradientFactor:{type:"f",value:.25},gCamera:{value:{mFrom:new L,mU:new L,mV:new L,mN:new L,mScreen:new Ct,mInvScreen:new Ie,mFocalDistance:0,mApertureSize:0,mIsOrtho:0}},gLights:{value:[new nr(xa),new nr(_a)]},volumeTexture:{type:"t",value:new Mt},gLutTexture:{type:"t",value:new Mt},gIntensityMax:{type:"v4",value:new Ct(1,1,1,1)},gIntensityMin:{type:"v4",value:new Ct(0,0,0,0)},gOpacity:{type:"1fv",value:[1,1,1,1]},gEmissive:{type:"v3v",value:[new L(0,0,0),new L(0,0,0),new L(0,0,0),new L(0,0,0)]},gDiffuse:{type:"v3v",value:[new L(1,0,0),new L(0,1,0),new L(0,0,1),new L(1,0,1)]},gSpecular:{type:"v3v",value:[new L(0,0,0),new L(0,0,0),new L(0,0,0),new L(0,0,0)]},gGlossiness:{type:"1fv",value:[1,1,1,1]},uShowLights:{type:"f",value:0},flipVolume:{type:"v3",value:new L(1,1,1)}}),Bl=[[255,0,255],[255,255,255],[0,255,255]];function MS(s,e,t){let n,i,r,a=0;if(arguments.length===1){const v=s;e=v.s,t=v.v,a=v.h}else a=s;const c=Math.floor(a*6),u=a*6-c,d=t*(1-e),f=t*(1-u*e),m=t*(1-(1-u)*e);switch(c%6){case 0:n=t,i=m,r=d;break;case 1:n=f,i=t,r=d;break;case 2:n=d,i=t,r=m;break;case 3:n=d,i=f,r=t;break;case 4:n=m,i=d,r=t;break;case 5:n=t,i=d,r=f;break}return[Math.round(n*255),Math.round(i*255),Math.round(r*255)]}function ES(s){return function(){return s=Math.imul(48271,s)|0%2147483647,(s&2147483647)/2147483648}}const kl=ES(123),Rr=s=>(Bl[s]||(Bl[s]=MS(kl(),kl()*.5+.5,kl()*.5+.5)),Bl[s]);function zs(s,e,t){return Math.min(Math.max(e,s),t)}function Li(s,e,t){return t*(e-s)+s}function AS(s,e,t,n,i,r,a){const c=(s-e)/(t-e),d=((a-r)*c+r-n)/(i-n);return e+d*(t-e)}function CS(s,e,t,n,i,r,a){const c=(s-e)/(t-e),d=((i-n)*c+n-r)/(a-r);return e+d*(t-e)}const qn=256,Mn=qn*4;function TS(s){const e=qn,t=new Uint8Array(e*4).fill(0);if(s.length===0)return t;if(s.sort((d,f)=>d.x-f.x),s.length===1){const d=Do(s[0]),f=zs(s[0].x,0,255);for(let m=f;m<e;++m)t[m*4+0]=d[0],t[m*4+1]=d[1],t[m*4+2]=d[2],t[m*4+3]=d[3];return t}let n=s[0],i=s[1],r=Do(n),a=Do(i),c=1,u=0;for(let d=0;d<e;++d){for(;d>i.x;)n=i,r=a,c++,c>=s.length?i={x:255,color:i.color,opacity:i.opacity}:i=s[c],a=Do(i);i.x===n.x?u=1:u=(d-n.x)/(i.x-n.x),t[d*4+0]=zs(Li(r[0],a[0],u),0,255),t[d*4+1]=zs(Li(r[1],a[1],u),0,255),t[d*4+2]=zs(Li(r[2],a[2],u),0,255),t[d*4+3]=zs(Li(r[3],a[3],u),0,255)}return t}function Do(s){return[s.color[0],s.color[1],s.color[2],Math.floor(s.opacity*255)]}const zl=(s=0,e=1)=>[{x:0,opacity:s,color:[255,255,255]},{x:255,opacity:e,color:[255,255,255]}];class ai{constructor(){this.lut=new Uint8Array(Mn),this.controlPoints=[],this.createFullRange()}createFromMinMax(e,t){if(t<e){const a=t;t=e,e=a}if(e<0&&t<0)return this.controlPoints=zl(1,1),this.createFromControlPoints(this.controlPoints);if(e>=255&&t>=255)return this.controlPoints=zl(0,0),this.createFromControlPoints(this.controlPoints);const n=[];let i=0;e<0&&(i=-e/(t-e)),n.push({x:0,opacity:i,color:[255,255,255]}),e>0&&n.push({x:e,opacity:0,color:[255,255,255]}),t<255&&(t===e?n.push({x:e+.5,opacity:1,color:[255,255,255]}):n.push({x:t,opacity:1,color:[255,255,255]}));let r=1;return t>255&&(r=(255-e)/(t-e)),n.push({x:255,opacity:r,color:[255,255,255]}),this.createFromControlPoints(n)}createFullRange(){return this.controlPoints=zl(),this.createFromControlPoints(this.controlPoints)}createFromWindowLevel(e,t){const n=t-e*.5,i=t+e*.5;return this.createFromMinMax(n*255,i*255)}createFromControlPoints(e){return this.lut=TS(e),this.controlPoints=e,this}createFromEqHistogram(e){const t=[];for(let i=0;i<e.getNumBins();++i)t[i]=0;t[0]=e.getBin(0);for(let i=1;i<e.getNumBins();++i)t[i]=t[i-1]+e.getBin(i);if(t[t.length-1]-t[0]>0){const i=[{x:0,opacity:0,color:[255,255,255]}];let r=0,a=0,c=0,u=0;for(let d=1;d<qn;++d)u=c,c=zs(Math.round(255*(t[d]-t[0])),0,255),r=c-u,r!=a&&(i.push({x:d-1,opacity:u/255,color:[255,255,255]}),a=r);return i.push({x:255,opacity:1,color:[255,255,255]}),this.createFromControlPoints(i)}else return this.createFullRange()}createLabelColors(e){const t=new Uint8Array(Mn).fill(0),n=[];n.push({x:0,opacity:0,color:[0,0,0]});let i=0,r=0,a=0,c=0,u=0,d=0,f=0,m=0;for(let v=1;v<qn;++v){const g=Math.floor(v/(qn-1)*(e.getNumBins()-1));if(e.getBin(g)>0){const b=Rr(g);t[v*4+0]=b[0],t[v*4+1]=b[1],t[v*4+2]=b[2],t[v*4+3]=255,u=b[0],d=b[1],f=b[2],m=1}else u=0,d=0,f=0,m=0;(u!==i||d!==r||f!==a||m!==c)&&(c===0&&n.push({x:v-.5,opacity:c,color:[i,r,a]}),n.push({x:v,opacity:m,color:[u,d,f]}),i=u,r=d,a=f,c=m)}return this.lut=t,this.controlPoints=n,this}remapDomains(e,t,n,i){this.lut=RS(this.lut,e,t,n,i),this.controlPoints=PS(this.controlPoints,e,t,n,i)}}function RS(s,e,t,n,i){const r=new Uint8Array(Mn);for(let a=0;a<qn;++a){let c=AS(a,0,qn-1,e,t,n,i);c<0&&(c=0),c>qn-1&&(c=qn-1);const u=Math.floor(c),d=Math.ceil(c),f=c-u;r[a*4+0]=Math.round(Li(s[u*4+0],s[d*4+0],f)),r[a*4+1]=Math.round(Li(s[u*4+1],s[d*4+1],f)),r[a*4+2]=Math.round(Li(s[u*4+2],s[d*4+2],f)),r[a*4+3]=Math.round(Li(s[u*4+3],s[d*4+3],f))}return r}function PS(s,e,t,n,i,r=!0){if(s.length===0)return s;const a=[],c=s[0].x,u=s[s.length-1].x;for(let d=0;d<s.length;++d){const f=s[d],v={x:CS(f.x,0,qn-1,e,t,n,i),opacity:f.opacity,color:[f.color[0],f.color[1],f.color[2]]};a.push(v)}return r?IS(a,c,u):a}function IS(s,e,t){const i=s[0],r=s[1],a=s[s.length-2],c=s[s.length-1];return Math.abs(i.opacity-((r==null?void 0:r.opacity)??1/0))<1e-4&&(i.x<0?i.x=Math.min(0,r.x-1):e<1e-4&&(i.x=0)),Math.abs(c.opacity-((a==null?void 0:a.opacity)??1/0))<1e-4&&(c.x>255?c.x=Math.max(255,a.x+1):t>255-1e-4&&(c.x=255)),s}class qd{constructor(e,t=new pi(e)){this.pathTracingUniforms=SS(),this.denoiseShaderUniforms=jd(),this.screenOutputShaderUniforms=xS(),this.volume=e,this.viewChannels=[-1,-1,-1,-1];const{x:n,y:i,z:r}=e.imageInfo.subregionSize,a=new Uint8Array(n*i*r*4).fill(0);this.volumeTexture=new Lp(a,n,i,r),this.volumeTexture.minFilter=this.volumeTexture.magFilter=Nt,this.volumeTexture.generateMipmaps=!1,this.volumeTexture.needsUpdate=!0;const c=new Uint8Array(Mn*4).fill(1),u=new cn(c,256,4,Ot,Yt);u.minFilter=u.magFilter=Nt,u.needsUpdate=!0,this.pathTracingUniforms.gLutTexture.value=u,this.cameraIsMoving=!1,this.sampleCounter=0,this.frameCounter=0,this.pathTracingRenderTarget=new Ln(2,2,{minFilter:At,magFilter:At,format:Ot,type:en,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1}),this.screenTextureRenderTarget=new Ln(2,2,{minFilter:At,magFilter:At,format:Ot,type:en,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1}),this.pathTracingUniforms.volumeTexture.value=this.volumeTexture,this.pathTracingUniforms.tPreviousTexture.value=this.screenTextureRenderTarget.texture,this.pathTracingRenderToBuffer=new la(yS,this.pathTracingUniforms),this.screenTextureRenderToBuffer=new la($p,{image:{value:this.pathTracingRenderTarget.texture}}),this.screenOutputGeometry=new zi(2,2),this.screenOutputMaterial=new nn({uniforms:this.screenOutputShaderUniforms,vertexShader:aa,fragmentShader:_S,depthWrite:!1,depthTest:!1,blending:$n,transparent:!0}),this.denoiseShaderUniforms=jd(),this.screenOutputDenoiseMaterial=new nn({uniforms:this.denoiseShaderUniforms,vertexShader:aa,fragmentShader:gS,depthWrite:!1,depthTest:!1,blending:$n,transparent:!0}),this.screenOutputMaterial.uniforms.tTexture0.value=this.pathTracingRenderTarget.texture,this.screenOutputDenoiseMaterial.uniforms.tTexture0.value=this.pathTracingRenderTarget.texture,this.screenOutputMesh=new It(this.screenOutputGeometry,this.screenOutputMaterial),this.gradientDelta=1/Math.max(n,Math.max(i,r));const d=1/this.gradientDelta;this.pathTracingUniforms.gGradientDeltaX.value=new L(this.gradientDelta,0,0),this.pathTracingUniforms.gGradientDeltaY.value=new L(0,this.gradientDelta,0),this.pathTracingUniforms.gGradientDeltaZ.value=new L(0,0,this.gradientDelta),this.pathTracingUniforms.gInvGradientDelta.value=d,this.pathTracingUniforms.gGradientFactor.value=50,this.updateSettings(t),this.settings=t;const f=this.getNormVolumeSize();this.pathTracingUniforms.gInvAaBbMax.value=new L(1/f.x,1/f.y,1/f.z).divide(e.normRegionSize),this.updateLightsSecondary()}cleanup(){this.volumeTexture.dispose()}setRenderUpdateListener(e){this.renderUpdateListener=e}resetProgress(){this.sampleCounter!==0&&this.renderUpdateListener&&this.renderUpdateListener(0),this.sampleCounter=0}getNormVolumeSize(){return this.volume.normPhysicalSize.clone().multiply(this.settings.scale)}updateSettings(e,t){if(t===void 0&&(t=he.ALL),this.settings=e,t&he.SAMPLING){const n=this.settings.resolution.clone(),i=window.devicePixelRatio?window.devicePixelRatio:1,r=Math.floor(n.x*this.settings.pixelSamplingRate/i),a=Math.floor(n.y*this.settings.pixelSamplingRate/i);this.pathTracingUniforms.uResolution.value.x=r,this.pathTracingUniforms.uResolution.value.y=a,this.pathTracingRenderTarget.setSize(r,a),this.screenTextureRenderTarget.setSize(r,a),this.pathTracingUniforms.gStepSize.value=this.settings.primaryRayStepSize*this.gradientDelta,this.pathTracingUniforms.gStepSizeShadow.value=this.settings.secondaryRayStepSize*this.gradientDelta}if(t&he.TRANSFORM&&(this.pathTracingUniforms.flipVolume.value=this.settings.flipAxes),t&he.MATERIAL&&(this.pathTracingUniforms.gDensityScale.value=this.settings.density*150,this.updateMaterial()),t&he.ROI){const{normRegionSize:n,normRegionOffset:i}=this.volume,{bmin:r,bmax:a}=this.settings.bounds,c=this.getNormVolumeSize(),u=i.clone().subScalar(.5).multiply(c),d=i.clone().add(n).subScalar(.5).multiply(c),f=r.clone().multiply(c);this.pathTracingUniforms.gClippedAaBbMin.value=f.clamp(u,d);const m=a.clone().multiply(c);this.pathTracingUniforms.gClippedAaBbMax.value=m.clamp(u,d),this.pathTracingUniforms.gVolCenter.value=this.volume.getContentCenter().multiply(this.settings.scale)}t&he.CAMERA&&this.updateExposure(this.settings.brightness),t&he.MASK_ALPHA&&this.updateVolumeData4(),t&he.VIEW&&(this.pathTracingUniforms.gCamera.value.mIsOrtho=this.settings.isOrtho?1:0),t&he.SAMPLING&&(this.volumeTexture.minFilter=this.volumeTexture.magFilter=e.useInterpolation?Nt:At,this.volumeTexture.needsUpdate=!0),this.resetProgress()}updateVolumeDimensions(){this.updateSettings(this.settings,he.ROI)}doRender(e,t){if(!this.volumeTexture)return;this.cameraIsMoving?(this.resetProgress(),this.frameCounter+=1):(this.sampleCounter+=1,this.frameCounter+=1,this.renderUpdateListener&&this.renderUpdateListener(this.sampleCounter)),this.pathTracingUniforms.uSampleCounter.value=this.sampleCounter,this.pathTracingUniforms.uFrameCounter.value=this.frameCounter,t.updateMatrixWorld(!0);const n=t.matrixWorld.clone();n.setPosition(new L(0,0,0)),this.updateLightsSecondary(n);let i=new L;i=t.getWorldDirection(i);const r=new L().copy(t.up),a=new L().copy(t.position),c=new ut().makeRotationFromQuaternion(new Bi().setFromEuler(this.settings.rotation).invert());a.sub(this.settings.translation),a.applyMatrix4(c),r.applyMatrix4(c),i.applyMatrix4(c),this.pathTracingUniforms.gCamera.value.mIsOrtho=zn(t)?1:0,this.pathTracingUniforms.gCamera.value.mFrom.copy(a),this.pathTracingUniforms.gCamera.value.mN.copy(i),this.pathTracingUniforms.gCamera.value.mU.crossVectors(this.pathTracingUniforms.gCamera.value.mN,r).normalize(),this.pathTracingUniforms.gCamera.value.mV.crossVectors(this.pathTracingUniforms.gCamera.value.mU,this.pathTracingUniforms.gCamera.value.mN).normalize();const u=zn(t)?Math.abs(t.top)/t.zoom:Math.tan(.5*t.fov*Math.PI/180),d=this.pathTracingUniforms.uResolution.value.x/this.pathTracingUniforms.uResolution.value.y;this.pathTracingUniforms.gCamera.value.mScreen.set(-u*d,u*d,u,-u);const f=this.pathTracingUniforms.gCamera.value.mScreen;this.pathTracingUniforms.gCamera.value.mInvScreen.set((f.y-f.x)/this.pathTracingUniforms.uResolution.value.x,(f.w-f.z)/this.pathTracingUniforms.uResolution.value.y);const m=.33*(Math.max(this.sampleCounter-1,1)*.035);m>0&&m<1?(this.screenOutputDenoiseMaterial.uniforms.gDenoiseLerpC.value=m,this.screenOutputMesh.material=this.screenOutputDenoiseMaterial):this.screenOutputMesh.material=this.screenOutputMaterial,this.screenOutputDenoiseMaterial.uniforms.gDenoisePixelSize.value.x=this.pathTracingUniforms.uResolution.value.x,this.screenOutputDenoiseMaterial.uniforms.gDenoisePixelSize.value.y=this.pathTracingUniforms.uResolution.value.y,this.pathTracingRenderToBuffer.render(e,this.pathTracingRenderTarget),this.screenTextureRenderToBuffer.render(e,this.screenTextureRenderTarget),e.setRenderTarget(null)}get3dObject(){return this.screenOutputMesh}onStartControls(){this.cameraIsMoving=!0}onChangeControls(){}onEndControls(){this.cameraIsMoving=!1,this.resetProgress()}viewpointMoved(){this.resetProgress()}updateActiveChannels(e,t){const n=[-1,-1,-1,-1];let i=0;const r=this.volume.imageInfo.numChannels,a=4;for(let u=0;u<r&&i<a;++u)e[u].rgbColor!==gw&&t[u].loaded&&(n[i]=u,i++);n.every((u,d)=>u===this.viewChannels[d],this)||(this.pathTracingUniforms.gNChannels.value=i,this.viewChannels=n,this.updateVolumeData4(),this.resetProgress(),this.updateLuts(e,t),this.updateMaterial())}updateVolumeData4(){const{x:e,y:t,z:n}=this.volume.imageInfo.subregionSize,i=new Uint8Array(e*t*n*4);i.fill(0);for(let r=0;r<4;++r){const a=this.viewChannels[r];if(a===-1)continue;const c=this.volume.getChannel(a);for(let u=0;u<n;++u)for(let d=0;d<t;++d)for(let f=0;f<e;++f)i[r+f*4+d*4*e+u*4*e*t]=255*c.normalizeRaw(c.getIntensity(f,d,u));if(this.settings.maskChannelIndex!==-1&&this.settings.maskAlpha<1){const u=this.volume.getChannel(this.settings.maskChannelIndex);let d=1;const f=this.settings.maskAlpha;for(let m=0;m<n;++m)for(let v=0;v<t;++v)for(let g=0;g<e;++g)d=u.getIntensity(g,v,m)>0?1:f,i[r+g*4+v*4*e+m*4*e*t]*=d}}this.volumeTexture.image.data.set(i),this.volumeTexture.needsUpdate=!0}updateLuts(e,t){for(let n=0;n<this.pathTracingUniforms.gNChannels.value;++n){const i=this.viewChannels[n],r=t[i].combineLuts(e[i].rgbColor);this.pathTracingUniforms.gLutTexture.value.image.data.set(r,n*Mn),this.pathTracingUniforms.gIntensityMax.value.setComponent(n,this.volume.channels[i].histogram.getMax()/255),this.pathTracingUniforms.gIntensityMin.value.setComponent(n,this.volume.channels[i].histogram.getMin()/255)}this.pathTracingUniforms.gLutTexture.value.needsUpdate=!0,this.resetProgress()}updateMaterial(){for(let e=0;e<this.viewChannels.length;++e){const t=this.viewChannels[e];if(t>-1){const i=this.volume.getChannel(t).combineLuts(this.settings.diffuse[t]);this.pathTracingUniforms.gLutTexture.value.image.data.set(i,e*Mn),this.pathTracingUniforms.gLutTexture.value.needsUpdate=!0,this.pathTracingUniforms.gDiffuse.value[e]=new L(1,1,1),this.pathTracingUniforms.gSpecular.value[e]=new L().fromArray(this.settings.specular[t]).multiplyScalar(1/255),this.pathTracingUniforms.gEmissive.value[e]=new L().fromArray(this.settings.emissive[t]).multiplyScalar(1/255),this.pathTracingUniforms.gGlossiness.value[e]=this.settings.glossiness[t]}}this.resetProgress()}updateShadingMethod(e){this.pathTracingUniforms.gShadingType.value=e,this.resetProgress()}updateShowLights(e){this.pathTracingUniforms.uShowLights.value=e,this.resetProgress()}updateExposure(e){e>.99999&&(e=.99999),this.screenOutputMaterial.uniforms.gInvExposure.value=1/(1-e)-1,this.screenOutputDenoiseMaterial.uniforms.gInvExposure.value=1/(1-e)-1,this.resetProgress()}updateCamera(e,t,n){this.pathTracingUniforms.gCamera.value.mApertureSize=n,this.pathTracingUniforms.gCamera.value.mFocalDistance=t,this.resetProgress()}updateLights(e){this.pathTracingUniforms.gLights.value[0].mColorTop=new L().copy(e[0].mColorTop),this.pathTracingUniforms.gLights.value[0].mColorMiddle=new L().copy(e[0].mColorMiddle),this.pathTracingUniforms.gLights.value[0].mColorBottom=new L().copy(e[0].mColorBottom),this.pathTracingUniforms.gLights.value[1].mColor=new L().copy(e[1].mColor),this.pathTracingUniforms.gLights.value[1].mTheta=e[1].mTheta,this.pathTracingUniforms.gLights.value[1].mPhi=e[1].mPhi,this.pathTracingUniforms.gLights.value[1].mDistance=e[1].mDistance,this.pathTracingUniforms.gLights.value[1].mWidth=e[1].mWidth,this.pathTracingUniforms.gLights.value[1].mHeight=e[1].mHeight,this.updateLightsSecondary(),this.resetProgress()}updateLightsSecondary(e){console.log("lights secondary");const t=this.getNormVolumeSize(),n=new L(t.x*.5,t.y*.5,t.z*.5);for(let i=0;i<2;++i)this.pathTracingUniforms.gLights.value[i].update(n,e)}updateClipRegion(e,t,n,i,r,a){this.settings.bounds={bmin:new L(e-.5,n-.5,r-.5),bmax:new L(t-.5,i-.5,a-.5)};const c=this.getNormVolumeSize();this.pathTracingUniforms.gClippedAaBbMin.value=new L(e*c.x-.5*c.x,n*c.y-.5*c.y,r*c.z-.5*c.z),this.pathTracingUniforms.gClippedAaBbMax.value=new L(t*c.x-.5*c.x,i*c.y-.5*c.y,a*c.z-.5*c.z),this.resetProgress()}setZSlice(e){return!0}}var LS=`#ifdef GL_ES
precision highp float;
precision highp usampler2D;
#endif

#define M_PI 3.14159265358979323846

uniform vec2 iResolution;
uniform vec2 textureRes;

uniform uvec2 ATLAS_DIMS;
uniform vec3 AABB_CLIP_MIN;
uniform float CLIP_NEAR;
uniform vec3 AABB_CLIP_MAX;
uniform float CLIP_FAR;

uniform usampler2D textureAtlas;

uniform sampler2D textureDepth;
uniform int usingPositionTexture;
uniform int BREAK_STEPS;
uniform float SLICES;
uniform float isOrtho;
uniform float orthoThickness;
uniform float orthoScale;
uniform int maxProject;
uniform vec3 flipVolume;
uniform vec3 volumeScale;

uniform mat4 inverseModelViewMatrix;
uniform mat4 inverseProjMatrix;

varying vec3 pObj;

float powf(float a, float b) {
  return pow(a,b);
}

float rand(vec2 co) {
  float threadId = gl_FragCoord.x/(gl_FragCoord.y + 1.0);
  float bigVal = threadId*1299721.0/911.0;
  vec2 smallVal = vec2(threadId*7927.0/577.0, threadId*104743.0/1039.0);
  return fract(sin(dot(co, smallVal)) * bigVal);
}

vec2 offsetFrontBack(uint a) {
  uint ax = ATLAS_DIMS.x;
  vec2 tiles = vec2(1.0f/float(ATLAS_DIMS.x), 1.0f/float(ATLAS_DIMS.y));
  vec2 os = vec2(float(a % ax), float(a / ax)) * tiles;
  return clamp(os, vec2(0.0), vec2(1.0) - vec2(1.0) * tiles);
}

uint sampleAtlasNearest(usampler2D tex, vec4 pos) {
  uint bounds = uint(pos[0] >= 0.0 && pos[0] <= 1.0 &&
                       pos[1] >= 0.0 && pos[1] <= 1.0 &&
                       pos[2] >= 0.0 && pos[2] <= 1.0 );
  float nSlices = float(SLICES);

  
  
  
  
  
  
  
  
  
  
  
  

  
  
  
  vec2 loc0 = ((pos.xy - 0.5) * flipVolume.xy + 0.5) / vec2(float(ATLAS_DIMS.x), float(ATLAS_DIMS.y));
  
  
  
  float z = min(floor(pos.z * nSlices), nSlices-1.0);
  
  if (flipVolume.z == -1.0) {
    z = nSlices - z - 1.0;
  }

  
  vec2 o = offsetFrontBack(uint(z)) + loc0;
  
  uint voxelColor = texelFetch(tex, ivec2(o * textureRes), 0).x;

  
  
  
  

  return bounds*voxelColor;
}

bool intersectBox(in vec3 r_o, in vec3 r_d, in vec3 boxMin, in vec3 boxMax,
                  out float tnear, out float tfar) {
  
  vec3 invR = vec3(1.0,1.0,1.0) / r_d;
  vec3 tbot = invR * (boxMin - r_o);
  vec3 ttop = invR * (boxMax - r_o);

  
  vec3 tmin = min(ttop, tbot);
  vec3 tmax = max(ttop, tbot);

  
  float largest_tmin  = max(max(tmin.x, tmin.y), tmin.z);
  float smallest_tmax = min(min(tmax.x, tmax.y), tmax.z);

  tnear = largest_tmin;
  tfar = smallest_tmax;

  
  return(smallest_tmax > largest_tmin);
}

vec4 integrateVolume(vec4 eye_o,vec4 eye_d,
                     float tnear,   float tfar,
                     float clipNear, float clipFar,
                     usampler2D textureAtlas
                     ) {
  uint C = 0u;
  

  
  const int maxSteps = 512;
  
  float scaledSteps = float(BREAK_STEPS) * length((eye_d.xyz/volumeScale));
  float csteps = clamp(float(scaledSteps), 1.0, float(maxSteps));
  float invstep = (tfar-tnear)/csteps;
  
  float r = 0.0; 
  
  float tstep = invstep*orthoThickness;
  float tfarsurf = r*tstep;
  float overflow = mod((tfarsurf - tfar),tstep); 
  float t = tnear + overflow;
  t += r*tstep; 
  float tdist = 0.0;
  int numSteps = 0;
  vec4 pos, col;
  for (int i = 0; i < maxSteps; i++) {
    pos = eye_o + eye_d*t;
    
    
    
    pos.xyz = (pos.xyz-(-0.5))/((0.5)-(-0.5)); 

    uint col = sampleAtlasNearest(textureAtlas, pos);

    

    if (maxProject != 0) {
      C = max(col, C);
    } else {
      if (col > 0u) {
        C = col;
        break;
      }
    }
    t += tstep;
    numSteps = i;

    if (t > tfar || t > tnear+clipFar ) break;
  }

  return vec4(float(C));
}

void main() {
  gl_FragColor = vec4(0.0);
  vec2 vUv = gl_FragCoord.xy/iResolution.xy;

  vec3 eyeRay_o, eyeRay_d;

  if (isOrtho == 0.0) {
    
    
    
    eyeRay_o = (inverseModelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
    eyeRay_d = normalize(pObj - eyeRay_o);
  } else {
    
    float zDist = 2.0;
    eyeRay_d = (inverseModelViewMatrix*vec4(0.0, 0.0, -zDist, 0.0)).xyz;
    vec4 ray_o = vec4(2.0*vUv - 1.0, 1.0, 1.0);
    ray_o.xy *= orthoScale;
    ray_o.x *= iResolution.x/iResolution.y;
    eyeRay_o = (inverseModelViewMatrix*ray_o).xyz;
  }

  
  
  
  
  vec3 boxMin = AABB_CLIP_MIN;
  vec3 boxMax = AABB_CLIP_MAX;

  float tnear, tfar;
  bool hit = intersectBox(eyeRay_o, eyeRay_d, boxMin, boxMax, tnear, tfar);

  if (!hit) {
    
    
    gl_FragColor = vec4(0.0); 
    return;
  }

  float clipNear = 0.0;
  float clipFar  = 10000.0;

  
  
  
  vec4 meshPosSample = texture2D(textureDepth, vUv);
  
  
  bool hasDepthValue = usingPositionTexture == 0 && meshPosSample.r < 1.0;

  
  if (hasDepthValue || (usingPositionTexture == 1 && meshPosSample.a > 0.0)) {
    if (hasDepthValue) {
      
      
      vec4 meshProj = vec4(vUv * 2.0 - 1.0, meshPosSample.r * 2.0 - 1.0, 1.0);
      vec4 meshView = inverseProjMatrix * meshProj;
      meshPosSample = vec4(meshView.xyz / meshView.w, 1.0);
    }
    
    vec4 meshObj = inverseModelViewMatrix * meshPosSample;

    
    
    
    float tMesh = (meshObj.z - eyeRay_o.z) / eyeRay_d.z;
    if (tMesh < tfar) {
      clipFar = tMesh - tnear;
    }
  }

  vec4 C = integrateVolume(vec4(eyeRay_o,1.0), vec4(eyeRay_d,0.0),
                          tnear,    tfar, 
                          clipNear, clipFar,
                          textureAtlas);

  gl_FragColor = C;
  return;
}`;const DS=ef,US=LS,NS=()=>({iResolution:{type:"v2",value:new Ie(100,100)},textureRes:{type:"v2",value:new Ie(1,1)},ATLAS_DIMS:{type:"v2",value:new Ie(6,6)},AABB_CLIP_MIN:{type:"v3",value:new L(-.5,-.5,-.5)},CLIP_NEAR:{type:"f",value:.1},AABB_CLIP_MAX:{type:"v3",value:new L(.5,.5,.5)},CLIP_FAR:{type:"f",value:20},textureAtlas:{type:"t",value:new Mt},textureDepth:{type:"t",value:new Mt},usingPositionTexture:{type:"i",value:0},BREAK_STEPS:{type:"i",value:128},SLICES:{type:"f",value:50},isOrtho:{type:"f",value:0},orthoThickness:{type:"f",value:1},orthoScale:{type:"f",value:.5},maxProject:{type:"i",value:0},flipVolume:{type:"v3",value:new L(1,1,1)},volumeScale:{type:"v3",value:new L(1,1,1)},inverseModelViewMatrix:{type:"m4",value:new ut},inverseProjMatrix:{type:"m4",value:new ut}});class Vl{constructor(e,t=new pi(e)){this.needRedraw=!1,this.channelToPick=0,this.volume=e,this.uniforms=NS(),[this.geometry,this.geometryMesh]=this.createGeometry(this.uniforms),this.geometryTransformNode=new jn,this.geometryTransformNode.name="PickVolumeContainerNode",this.geometryTransformNode.add(this.geometryMesh),this.scene=new Fi,this.scene.name="PickVolumeScene",this.scene.add(this.geometryTransformNode),this.emptyPositionTex=new cn(new Uint8Array(Array(16).fill(0)),2,2),this.pickBuffer=new Ln(2,2,{count:1,minFilter:At,magFilter:At,format:Ot,type:en,generateMipmaps:!1});const n=0;this.pickBuffer.textures[n].name="objectinfo",this.settings=t,this.updateSettings(t,he.ALL),this.updateVolumeDimensions()}setChannelToPick(e){this.channelToPick=e}getChannelToPick(){return this.channelToPick}getPickBuffer(){return this.pickBuffer}updateVolumeDimensions(){const{normPhysicalSize:e,normRegionSize:t}=this.volume;this.geometryMesh.position.copy(this.volume.getContentCenter().multiply(this.settings.scale));const n=e.clone().multiply(this.settings.scale);this.geometryMesh.scale.copy(n).multiply(t),this.setUniform("volumeScale",e),this.settings&&this.updateSettings(this.settings,he.ROI);const{atlasTileDims:i,subregionSize:r}=this.volume.imageInfo,a=new Ie(r.x,r.y).multiply(i);this.setUniform("ATLAS_DIMS",i),this.setUniform("textureRes",a),this.setUniform("SLICES",this.volume.imageInfo.volumeSize.z)}viewpointMoved(){this.needRedraw=!0}updateSettings(e,t){if(t===void 0&&(t=he.ALL),this.settings=e,t&he.VIEW){this.needRedraw=!0,this.geometryMesh.visible=this.settings.visible,this.setUniform("orthoScale",this.settings.orthoScale),this.setUniform("isOrtho",this.settings.isOrtho?1:0);const n=this.settings.viewAxis;if(this.settings.isOrtho&&n){const i=this.settings.bounds.bmax[n],r=this.settings.bounds.bmin[n],a=i-r;this.setUniform("orthoThickness",a)}else this.setUniform("orthoThickness",1)}if(t&he.VIEW||t&he.BOUNDING_BOX,t&he.TRANSFORM&&(this.needRedraw=!0,this.geometryTransformNode.position.copy(this.settings.translation),this.geometryTransformNode.rotation.copy(this.settings.rotation),this.updateVolumeDimensions(),this.setUniform("flipVolume",this.settings.flipAxes)),t&he.MATERIAL,t&he.CAMERA,t&he.ROI){this.needRedraw=!0;const n=this.settings.bounds,{normRegionSize:i,normRegionOffset:r}=this.volume,a=i.clone().divideScalar(2).add(r).subScalar(.5),c=n.bmin.clone().sub(a).divide(i).clampScalar(-.5,.5),u=n.bmax.clone().sub(a).divide(i).clampScalar(-.5,.5);this.setUniform("AABB_CLIP_MIN",c),this.setUniform("AABB_CLIP_MAX",u)}if(t&he.SAMPLING){this.needRedraw=!0;const n=this.settings.resolution.clone(),i=window.devicePixelRatio?window.devicePixelRatio:1,r=Math.floor(n.x/i),a=Math.floor(n.y/i);this.setUniform("iResolution",new Ie(r,a)),this.pickBuffer.setSize(r,a)}t&he.MASK_ALPHA,t&he.MASK_DATA}createGeometry(e){const t=new ki(1,1,1),n=new nn({uniforms:e,vertexShader:DS,fragmentShader:US,depthTest:!0,depthWrite:!1}),i=new It(t,n);return i.name="PickVolume",[t,i]}cleanup(){this.scene.clear(),this.geometryTransformNode.clear(),this.geometry.dispose(),this.geometryMesh.material.dispose()}doRender(e,t,n){if(!this.geometryMesh.visible||!this.needRedraw)return;this.needRedraw=!1,this.setUniform("iResolution",this.settings.resolution);const i=n??this.emptyPositionTex;this.setUniform("textureDepth",i),this.setUniform("usingPositionTexture",i.isDepthTexture?0:1),this.setUniform("CLIP_NEAR",t.near),this.setUniform("CLIP_FAR",t.far);const r=this.volume.getChannel(this.channelToPick).dataTexture;this.setUniform("textureAtlas",r),this.setUniform("textureRes",new Ie(r.image.width,r.image.height)),this.geometryTransformNode.updateMatrixWorld(!0);const a=new ut;a.multiplyMatrices(t.matrixWorldInverse,this.geometryMesh.matrixWorld),a.invert(),this.setUniform("inverseModelViewMatrix",a),this.setUniform("inverseProjMatrix",t.projectionMatrixInverse),t.layers.set(Zp),e.setRenderTarget(this.pickBuffer),e.autoClear=!0;const c=new ke;e.getClearColor(c);const u=e.getClearAlpha();e.setClearColor(0,0),e.render(this.scene,t),e.autoClear=!0,e.setClearColor(c,u),e.setRenderTarget(null)}get3dObject(){return this.geometryTransformNode}setUniform(e,t){this.uniforms[e]&&(this.uniforms[e].value=t)}updateActiveChannels(e,t){}setRenderUpdateListener(e){}}var OS=`precision highp float;
precision highp int;

varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix *
    modelViewMatrix *
    vec4(position, 1.0);
}`,FS=`#ifdef GL_ES
precision highp float;
#endif

uniform vec2 textureRes;
uniform float GAMMA_MIN;
uniform float GAMMA_MAX;
uniform float GAMMA_SCALE;
uniform float BRIGHTNESS;
uniform float DENSITY;
uniform float maskAlpha;
uniform vec2 ATLAS_DIMS;
uniform vec3 AABB_CLIP_MIN;
uniform vec3 AABB_CLIP_MAX;
uniform sampler2D textureAtlas;
uniform sampler2D textureAtlasMask;
uniform int Z_SLICE;
uniform float SLICES;
uniform bool interpolationEnabled;
uniform vec3 flipVolume;

varying vec2 vUv;

vec2 offsetFrontBack(float t) {
  int a = int(t);
  int ax = int(ATLAS_DIMS.x);
  vec2 os = vec2(float(a - (a / ax) * ax), float(a / ax)) / ATLAS_DIMS;
  return clamp(os, vec2(0.0), vec2(1.0) - vec2(1.0) / ATLAS_DIMS);
}

vec4 sampleAtlas(sampler2D tex, vec4 pos) {
  float bounds = float(pos[0] >= 0.0 && pos[0] <= 1.0 &&
    pos[1] >= 0.0 && pos[1] <= 1.0 &&
    pos[2] >= 0.0 && pos[2] <= 1.0);

  float nSlices = float(SLICES);

  vec2 loc0 = ((pos.xy - 0.5) * flipVolume.xy + 0.5) / ATLAS_DIMS;

  if (interpolationEnabled) {
    
    
    loc0 = loc0 * (vec2(1.0) - ATLAS_DIMS / textureRes);
  }
  else {
    
    loc0 = floor(loc0 * textureRes) / textureRes;
  }
  loc0 += vec2(0.5) / textureRes;

  float z = min(floor(pos.z * nSlices), nSlices - 1.0);

  if(flipVolume.z == -1.0) {
    z = nSlices - z - 1.0;
  }

  vec2 o = offsetFrontBack(z) + loc0;
  vec4 voxelColor = texture2D(tex, o);

  
  float voxelMask = texture2D(textureAtlasMask, o).x;
  voxelMask = mix(voxelMask, 1.0, maskAlpha);
  voxelColor.rgb *= voxelMask;

  return bounds * voxelColor;
}

void main() {
  gl_FragColor = vec4(0.0);

  vec3 boxMin = AABB_CLIP_MIN;
  vec3 boxMax = AABB_CLIP_MAX;
  
  vec2 normUv = vUv - vec2(0.5);

  
  if(normUv.x < boxMin.x || normUv.x > boxMax.x || normUv.y < boxMin.y || normUv.y > boxMax.y) {
    gl_FragColor = vec4(0.0);
    return;
  }

  
  vec4 pos = vec4(vUv, 
    (SLICES==1.0 && Z_SLICE==0) ? 0.0 : float(Z_SLICE) / (SLICES - 1.0), 
    0.0);

  vec4 C;
  C = sampleAtlas(textureAtlas, pos);
  C.xyz *= BRIGHTNESS;

  C = clamp(C, 0.0, 1.0);
  gl_FragColor = C;
  return;
}`;const BS=OS,kS=FS,zS=()=>({iResolution:{type:"v2",value:new Ie(100,100)},CLIP_NEAR:{type:"f",value:0},CLIP_FAR:{type:"f",value:1e4},maskAlpha:{type:"f",value:1},BRIGHTNESS:{type:"f",value:0},DENSITY:{type:"f",value:1},GAMMA_MIN:{type:"f",value:0},GAMMA_MAX:{type:"f",value:1},GAMMA_SCALE:{type:"f",value:1},BREAK_STEPS:{type:"i",value:128},ATLAS_DIMS:{type:"v2",value:new Ie(6,6)},Z_SLICE:{type:"i",value:0},SLICES:{type:"f",value:50},isOrtho:{type:"f",value:0},orthoThickness:{type:"f",value:1},orthoScale:{type:"f",value:.5},AABB_CLIP_MIN:{type:"v3",value:new L(-.5,-.5,-.5)},AABB_CLIP_MAX:{type:"v3",value:new L(.5,.5,.5)},inverseModelViewMatrix:{type:"m4",value:new ut},textureAtlas:{type:"t",value:new Mt},textureAtlasMask:{type:"t",value:new Mt},maxProject:{type:"i",value:0},interpolationEnabled:{type:"b",value:!0},flipVolume:{type:"v3",value:new L(1,1,1)},volumeScale:{type:"v3",value:new L(1,1,1)},textureRes:{type:"v2",value:new Ie(1,1)}}),VS=new ke(16776960);class GS{constructor(e,t=new pi(e)){this.sliceUpdateWaiting=!1,this.volume=e,this.uniforms=zS(),[this.geometry,this.geometryMesh]=this.createGeometry(this.uniforms),this.boxHelper=new Gp(new vn(new L(-.5,-.5,-.5),new L(.5,.5,.5)),VS),this.boxHelper.updateMatrixWorld(),this.boxHelper.visible=!1,this.geometryTransformNode=new jn,this.geometryTransformNode.name="VolumeContainerNode",this.geometryTransformNode.add(this.boxHelper,this.geometryMesh),this.setUniform("Z_SLICE",Math.floor(e.imageInfo.volumeSize.z/2)),this.settings=t,this.updateVolumeDimensions(),this.updateSettings(t,he.ALL)}updateSlice(){const e=Math.floor(this.settings.zSlice),t=this.volume.imageInfo.volumeSize.z;if(e<0||e>=t)return!1;const n=this.volume.imageInfo.subregionOffset.z,i=n+this.volume.imageInfo.subregionSize.z;return e<n||e>=i?this.sliceUpdateWaiting=!0:(this.setUniform("Z_SLICE",e),this.sliceUpdateWaiting=!1),!0}updateVolumeDimensions(){var u;const e=this.volume.normPhysicalSize.clone().multiply(this.settings.scale),t=e.clone().multiply(this.volume.normRegionSize),n=this.volume.getContentCenter().clone().multiply(this.settings.scale);this.geometryMesh.position.copy(n),this.geometryMesh.scale.copy(t),this.setUniform("volumeScale",t),this.boxHelper.box.set(e.clone().multiplyScalar(-.5),e.clone().multiplyScalar(.5));const{atlasTileDims:i,subregionSize:r,volumeSize:a}=this.volume.imageInfo,c=new Ie(r.x,r.y).multiply(i);this.setUniform("ATLAS_DIMS",i),this.setUniform("textureRes",c),this.setUniform("SLICES",a.z),this.sliceUpdateWaiting&&this.updateSlice(),(!this.channelData||this.channelData.width!==c.x||this.channelData.height!==c.y)&&((u=this.channelData)==null||u.cleanup(),this.channelData=new Qp(c.x,c.y))}updateSettings(e,t){if(t===void 0&&(t=he.ALL),this.settings=e,t&he.VIEW){this.geometryMesh.visible=this.settings.visible,this.setUniform("orthoScale",this.settings.orthoScale),this.setUniform("isOrtho",this.settings.isOrtho?1:0);const n=this.settings.viewAxis;if(this.settings.isOrtho&&n!==null){const i=this.settings.bounds.bmax[n],r=this.settings.bounds.bmin[n],a=i-r;this.setUniform("orthoThickness",a)}else this.setUniform("orthoThickness",1)}if(t&he.BOUNDING_BOX){this.boxHelper.visible=this.settings.showBoundingBox;const n=this.settings.boundingBoxColor,i=new ke(n[0],n[1],n[2]);this.boxHelper.material.color=i}if(t&he.TRANSFORM&&(this.geometryTransformNode.position.copy(this.settings.translation),this.geometryTransformNode.rotation.copy(this.settings.rotation),this.setUniform("flipVolume",this.settings.flipAxes)),t&he.MATERIAL&&this.setUniform("DENSITY",this.settings.density),t&he.CAMERA&&(this.setUniform("BRIGHTNESS",this.settings.brightness*2),this.setUniform("GAMMA_MIN",this.settings.gammaMin),this.setUniform("GAMMA_MAX",this.settings.gammaMax),this.setUniform("GAMMA_SCALE",this.settings.gammaLevel)),t&he.ROI){const n=this.settings.bounds,{normRegionSize:i,normRegionOffset:r}=this.volume,a=i.clone().divideScalar(2).add(r).subScalar(.5),c=n.bmin.clone().sub(a).divide(i).clampScalar(-.5,.5),u=n.bmax.clone().sub(a).divide(i).clampScalar(-.5,.5);if(this.setUniform("AABB_CLIP_MIN",c),this.setUniform("AABB_CLIP_MAX",u),this.updateSlice()){const f=Math.floor(this.settings.zSlice)/this.volume.imageInfo.volumeSize.z,m=(Math.floor(this.settings.zSlice)+1)/this.volume.imageInfo.volumeSize.z;this.volume.updateRequiredData({subregion:new vn(new L(0,0,f),new L(1,1,m))})}}t&he.SAMPLING&&(this.setUniform("interpolationEnabled",this.settings.useInterpolation),this.setUniform("iResolution",this.settings.resolution)),t&he.MASK_ALPHA&&this.setUniform("maskAlpha",this.settings.maskChannelIndex<0?1:this.settings.maskAlpha),t&he.MASK_DATA&&this.channelData.setChannelAsMask(this.settings.maskChannelIndex,this.volume.getChannel(this.settings.maskChannelIndex))}createGeometry(e){const t=new zi(1,1),n=new It(t);n.name="Plane";const i=BS,r=kS,a=new nn({uniforms:e,vertexShader:i,fragmentShader:r,transparent:!0,depthTest:!0,depthWrite:!1});return n.material=a,[t,n]}cleanup(){this.geometry.dispose(),this.geometryMesh.material.dispose(),this.channelData.cleanup()}viewpointMoved(){}doRender(e,t){if(!this.geometryMesh.visible)return;this.channelData.gpuFuse(e),this.setUniform("textureAtlas",this.channelData.getFusedTexture()),this.setUniform("textureAtlasMask",this.channelData.maskTexture),this.geometryTransformNode.updateMatrixWorld(!0);const n=new ut;n.multiplyMatrices(t.matrixWorldInverse,this.geometryMesh.matrixWorld);const i=new ut;i.copy(n).invert(),this.setUniform("inverseModelViewMatrix",i)}get3dObject(){return this.geometryTransformNode}updateActiveChannels(e,t){this.channelData.fuse(e,t),this.setUniform("textureAtlas",this.channelData.getFusedTexture()),this.setUniform("textureAtlasMask",this.channelData.maskTexture)}setUniform(e,t){this.uniforms[e]&&(this.uniforms[e].value=t)}setRenderUpdateListener(e){}}function HS(s,e,t){return Math.max(e,Math.min(t,s))}var WS=`precision highp float;
precision highp int;
precision highp usampler2D;
precision highp sampler3D;

uniform usampler2D localIdToGlobalId;
uniform uint localIdOffset;
uniform bool useGlobalIdLookup;
/* Pick buffer. Used to determine IDs. */
uniform sampler2D pickBuffer;

uniform int highlightedId;
uniform int outlineThickness;
uniform float outlineAlpha;
uniform vec3 outlineColor;
uniform float devicePixelRatio;

const uint BACKGROUND_ID = 0u;
const uint MISSING_DATA_ID = 0xFFFFFFFFu;
const int ID_OFFSET = 1;

uvec4 getUintFromTex(usampler2D tex, int index) {
  int width = textureSize(tex, 0).x;
  ivec2 featurePos = ivec2(index % width, index / width);
  return uvec4(texelFetch(tex, featurePos, 0));
}

uint getId(ivec2 uv) {
  float rawId = texelFetch(pickBuffer, uv, 0).g;
  if (rawId == 0.0) {
    return BACKGROUND_ID;
  }
  int localId = int(rawId) - int(localIdOffset);
  if (!useGlobalIdLookup) {
    return uint(localId + ID_OFFSET);
  }
  uvec4 c = getUintFromTex(localIdToGlobalId, localId);
  
  
  
  uint globalId = c.r;
  if (globalId == 0u) {
    return MISSING_DATA_ID;
  }
  return globalId;
}

bool isEdge(ivec2 uv, int id, int thickness) {
  float wStep = 1.0;
  float hStep = 1.0;
  float thicknessFloat = float(thickness);
  
  int R = int(getId(uv + ivec2(thicknessFloat * wStep, 0))) - ID_OFFSET;
  int L = int(getId(uv + ivec2(-thicknessFloat * wStep, 0))) - ID_OFFSET;
  int T = int(getId(uv + ivec2(0, thicknessFloat * hStep))) - ID_OFFSET;
  int B = int(getId(uv + ivec2(0, -thicknessFloat * hStep))) - ID_OFFSET;
  
  return id != -1 && (R != id || L != id || T != id || B != id);
}

void main(void) {
  ivec2 vUv = ivec2(int(gl_FragCoord.x / devicePixelRatio), int(gl_FragCoord.y / devicePixelRatio));

  uint rawId = getId(vUv);
  int id = int(rawId) - ID_OFFSET;

  if (id == highlightedId && isEdge(vUv, id, outlineThickness)) {
    gl_FragColor = vec4(outlineColor, outlineAlpha);
  } else {
    gl_FragColor = vec4(0, 0, 0, 0.0);
  }
}`;const XS=()=>{const s=new cn(new Float32Array([1,0,0,0]),1,1,Ot,en),e=new cn(new Uint32Array([0]),1,1,Pn,fi);return e.needsUpdate=!0,{pickBuffer:new On(s),highlightedId:new On(94),outlineThickness:new On(2),outlineColor:new On(new ke(1,0,1)),outlineAlpha:new On(1),useGlobalIdLookup:new On(!1),localIdToGlobalId:new On(e),localIdOffset:new On(0),devicePixelRatio:new On(1)}};class YS{constructor(){this.pass=new la(WS,XS(),Kp.TRANSPARENT),this.frameToGlobalIdLookup=null,this.frame=0}setOutlineColor(e,t=1){this.pass.material.uniforms.outlineColor.value=e,this.pass.material.uniforms.outlineAlpha.value=HS(t,0,1)}setOutlineThickness(e){this.pass.material.uniforms.outlineThickness.value=Math.floor(e)}syncGlobalIdLookup(){var n;const e=this.pass.material.uniforms,t=(n=this.frameToGlobalIdLookup)==null?void 0:n.get(this.frame);if(!t){e.useGlobalIdLookup.value=!1;return}e.useGlobalIdLookup.value=!0,e.localIdToGlobalId.value=t.texture,e.localIdOffset.value=t.minSegId}setGlobalIdLookup(e){this.frameToGlobalIdLookup!==e&&(this.frameToGlobalIdLookup=e,this.syncGlobalIdLookup())}setFrame(e){this.frame!==e&&(this.frame=e,this.syncGlobalIdLookup())}setHighlightedId(e){this.pass.material.uniforms.highlightedId.value=e}render(e,t,n){const i=this.pass.material.uniforms;i.devicePixelRatio.value=window.devicePixelRatio,i.pickBuffer.value=n.texture;const r=e.autoClear;e.autoClear=!1,this.pass.render(e,t??void 0),e.autoClear=r}}class jS{constructor(e,t){switch(this.volume=e,this.settings=new pi(e),this.onChannelDataReadyCallback=void 0,this.viewMode=Dt.NONE,this.channelColors=this.volume.channelColorsDefault.slice(),this.channelOptions=Array.from({length:this.volume.imageInfo.numChannels},()=>({})),this.fusion=this.channelColors.map((n,i)=>{let r;return n[0]===0&&n[1]===0&&n[2]===0?r=0:r=[n[0],n[1],n[2]],{chIndex:i,lut:new Uint8Array(Mn),rgbColor:r,selectedID:-1}}),this.sceneRoot=new Tt,this.childObjectsGroup=new jn,this.childObjects=new Set,this.sceneRoot.add(this.childObjectsGroup),t.renderMode=t.renderMode||Je.RAYMARCH,t.renderMode){case Je.PATHTRACE:this.renderMode=Je.PATHTRACE,this.volumeRendering=new qd(this.volume,this.settings);break;case Je.SLICE:case Je.RAYMARCH:default:this.renderMode=Je.RAYMARCH,this.volumeRendering=new Yd(this.volume,this.settings)}this.pickRendering&&(this.pickRendering=new Vl(this.volume,this.settings)),this.contourRendering=new YS,this.meshVolume=new oS(this.volume),(t.renderMode===Je.RAYMARCH||t.renderMode===Je.SLICE)&&(this.childObjectsGroup.add(this.meshVolume.get3dObject()),this.childObjects.add(this.meshVolume)),this.sceneRoot.add(this.volumeRendering.get3dObject()),this.sceneRoot.position.set(0,0,0),this.updateScale(),this.settings.translation=new L().fromArray(this.volume.getTranslation()),this.settings.rotation=new tn().fromArray(this.volume.getRotation()),this.setOptions(t)}getPickBuffer(){var e;return(e=this.pickRendering)==null?void 0:e.getPickBuffer()}updateChannelDataRequired(e){const{enabled:t,isosurfaceEnabled:n}=this.channelOptions[e],i=t||n||e===this.settings.maskChannelIndex,r=this.volume.loadSpecRequired.channels;r.includes(e)?i||this.volume.updateRequiredData({channels:r.filter(a=>a!==e)}):i&&this.volume.updateRequiredData({channels:[...r,e]})}setOptions(e){e=e||{},e.maskChannelIndex!==void 0&&this.setChannelAsMask(e.maskChannelIndex),e.maskAlpha!==void 0&&this.setMaskAlpha(e.maskAlpha),e.clipBounds!==void 0&&(this.settings.bounds={bmin:new L(e.clipBounds[0],e.clipBounds[2],e.clipBounds[4]),bmax:new L(e.clipBounds[1],e.clipBounds[3],e.clipBounds[5])},this.setAxisClip(Dt.X,e.clipBounds[0],e.clipBounds[1]),this.setAxisClip(Dt.Y,e.clipBounds[2],e.clipBounds[3]),this.setAxisClip(Dt.Z,e.clipBounds[4],e.clipBounds[5])),e.translation!==void 0&&this.setTranslation(new L().fromArray(e.translation)),e.rotation!==void 0&&this.setRotation(new tn().fromArray(e.rotation)),e.renderMode!==void 0&&this.setVolumeRendering(e.renderMode),(e.primaryRayStepSize!==void 0||e.secondaryRayStepSize!==void 0)&&this.setRayStepSizes(e.primaryRayStepSize,e.secondaryRayStepSize),e.showBoundingBox!==void 0&&this.setShowBoundingBox(e.showBoundingBox),e.boundingBoxColor!==void 0&&this.setBoundingBoxColor(e.boundingBoxColor),e.channels!==void 0&&(this.channelOptions=e.channels,this.channelOptions.forEach((t,n)=>{this.setChannelOptions(n,t)}))}setChannelOptions(e,t){if(this.channelOptions[e]=Object.assign(this.channelOptions[e],t),t.enabled!==void 0&&this.setVolumeChannelEnabled(e,t.enabled),t.color!==void 0&&this.updateChannelColor(e,t.color),t.isosurfaceEnabled!==void 0){const n=this.hasIsosurface(e);if(n!==t.isosurfaceEnabled){if(n&&!t.isosurfaceEnabled)this.meshVolume.destroyIsosurface(e);else if(!n&&t.isosurfaceEnabled&&this.volume.channels[e].loaded){const{isovalue:i,isosurfaceOpacity:r}=t;this.meshVolume.createIsosurface(e,this.channelColors[e],i,r)}this.updateChannelDataRequired(e)}else t.isosurfaceEnabled&&(t.isovalue!==void 0&&this.meshVolume.updateIsovalue(e,t.isovalue),t.isosurfaceOpacity!==void 0&&this.meshVolume.updateOpacity(e,t.isosurfaceOpacity))}else t.isovalue!==void 0&&this.meshVolume.updateIsovalue(e,t.isovalue),t.isosurfaceOpacity!==void 0&&this.meshVolume.updateOpacity(e,t.isosurfaceOpacity)}setRayStepSizes(e,t){var n;e===this.settings.primaryRayStepSize&&t===this.settings.secondaryRayStepSize||(e!==void 0&&(this.settings.primaryRayStepSize=e),t!==void 0&&(this.settings.secondaryRayStepSize=t),this.volumeRendering.updateSettings(this.settings,he.SAMPLING),(n=this.pickRendering)==null||n.updateSettings(this.settings,he.SAMPLING))}updateScale(){var i,r;const{normPhysicalSize:e,normRegionSize:t}=this.volume,n=e.clone().multiply(t).multiply(this.settings.scale);this.childObjectsGroup.scale.copy(n),this.childObjectsGroup.position.copy(this.volume.getContentCenter().multiply(this.settings.scale)),this.childObjects.forEach(a=>{var c;return(c=a.onParentTransformUpdated)==null?void 0:c.call(a)}),this.volumeRendering.updateVolumeDimensions(),this.volumeRendering.updateSettings(this.settings,he.TRANSFORM),(i=this.pickRendering)==null||i.updateVolumeDimensions(),(r=this.pickRendering)==null||r.updateSettings(this.settings,he.TRANSFORM)}setOrthoScale(e){var t;this.settings.orthoScale!==e&&(this.settings.orthoScale=e,this.volumeRendering.updateSettings(this.settings,he.VIEW),(t=this.pickRendering)==null||t.updateSettings(this.settings,he.VIEW))}setResolution(e,t){var i;const n=new Ie(e,t);if(!this.settings.resolution.equals(n)){for(const r of this.childObjects)r.setResolution(e,t);this.settings.resolution=n,this.volumeRendering.updateSettings(this.settings,he.SAMPLING),(i=this.pickRendering)==null||i.updateSettings(this.settings,he.SAMPLING)}}setAxisClip(e,t,n,i){var r;if(!(this.settings.bounds.bmax[e]===n&&this.settings.bounds.bmin[e]===t&&this.settings.viewAxis===e&&this.settings.isOrtho===(i||!1))){if(this.settings.bounds.bmax[e]=n,this.settings.bounds.bmin[e]=t,this.settings.viewAxis=e,this.settings.isOrtho=i||!1,e!==Dt.NONE&&this.renderMode!==Je.PATHTRACE)for(const a of this.childObjects)a.setAxisClip(e,t,n,!!i);this.volumeRendering.updateSettings(this.settings,he.ROI|he.VIEW),(r=this.pickRendering)==null||r.updateSettings(this.settings,he.ROI|he.VIEW)}}modeStringToAxis(e){return{X:Dt.X,YZ:Dt.X,Y:Dt.Y,XZ:Dt.Y,Z:Dt.Z,XY:Dt.Z}[e]||Dt.NONE}setViewMode(e,t){var i;const n=this.modeStringToAxis(e);this.viewMode=n,n===Dt.Z?(this.renderMode===Je.RAYMARCH||this.renderMode===Je.PATHTRACE)&&this.setVolumeRendering(Je.SLICE):this.renderMode===Je.SLICE&&this.setVolumeRendering(t),this.settings.viewAxis!==n&&(this.settings.viewAxis=n,this.volumeRendering.updateSettings(this.settings,he.VIEW),(i=this.pickRendering)==null||i.updateSettings(this.settings,he.VIEW))}setIsOrtho(e){var t;this.settings.isOrtho!==e&&(this.settings.isOrtho=e,this.volumeRendering.updateSettings(this.settings,he.VIEW),(t=this.pickRendering)==null||t.updateSettings(this.settings,he.VIEW))}setInterpolationEnabled(e){var t;this.settings.useInterpolation!==e&&(this.settings.useInterpolation=e,this.volumeRendering.updateSettings(this.settings,he.SAMPLING),(t=this.pickRendering)==null||t.updateSettings(this.settings,he.SAMPLING))}setOrthoThickness(e){if(this.renderMode!==Je.PATHTRACE)for(const t of this.childObjects)t.setOrthoThickness(e)}setGamma(e,t,n){var i;this.settings.gammaMin===e&&this.settings.gammaLevel===t&&this.settings.gammaMax===n||(this.settings.gammaMin=e,this.settings.gammaLevel=t,this.settings.gammaMax=n,this.volumeRendering.updateSettings(this.settings,he.CAMERA),(i=this.pickRendering)==null||i.updateSettings(this.settings,he.CAMERA))}setFlipAxes(e,t,n){var r;const i=new L(e,t,n);if(!this.settings.flipAxes.equals(i)){this.settings.flipAxes=i;for(const a of this.childObjects)a.setFlipAxes(e,t,n);this.volumeRendering.updateSettings(this.settings,he.TRANSFORM),(r=this.pickRendering)==null||r.updateSettings(this.settings,he.TRANSFORM)}}setMaxProjectMode(e){var t;this.settings.maxProjectMode!==e&&(this.settings.maxProjectMode=e,this.volumeRendering.updateSettings(this.settings,he.VIEW),(t=this.pickRendering)==null||t.updateSettings(this.settings,he.VIEW))}onAnimate(e,t,n){if(t.updateMatrixWorld(!0),t.matrixWorldInverse.copy(t.matrixWorld).invert(),this.volumeRendering.doRender(e,t,n),this.renderMode!==Je.PATHTRACE)for(const i of this.childObjects)i.doRender()}enablePicking(e,t){var n;e?(this.pickRendering||(this.pickRendering=new Vl(this.volume,this.settings)),this.pickRendering.setChannelToPick(t)):((n=this.pickRendering)==null||n.cleanup(),this.pickRendering=void 0)}fillPickBuffer(e,t,n){var i;(i=this.pickRendering)==null||i.doRender(e,t,n)}drawContours(e){!this.pickRendering||!this.contourRendering||this.contourRendering.render(e,e.getRenderTarget(),this.pickRendering.getPickBuffer())}getViewMode(){return this.viewMode}getIsovalue(e){return this.meshVolume.getIsovalue(e)}hasIsosurface(e){return this.meshVolume.hasIsosurface(e)}setSelectedID(e,t){return this.contourRendering.setHighlightedId(t),this.fusion.length>0&&t!==this.fusion[e].selectedID?(this.fusion[e].selectedID=t,!0):!1}fuse(){if(this.volume&&(this.volumeRendering.updateActiveChannels(this.fusion,this.volume.channels),this.pickRendering)){const e=this.pickRendering.getChannelToPick(),t=this.volume.channels[e];t&&this.contourRendering.setFrame(t.frame)}}setRenderUpdateListener(e){this.renderUpdateListener=e,this.renderMode===Je.PATHTRACE&&this.volumeRendering.setRenderUpdateListener(e)}updateShadingMethod(e){this.renderMode===Je.PATHTRACE&&this.volumeRendering.updateShadingMethod(e?1:0)}updateMaterial(){var e,t;this.volumeRendering.updateActiveChannels(this.fusion,this.volume.channels),this.volumeRendering.updateSettings(this.settings,he.MATERIAL),(e=this.pickRendering)==null||e.updateActiveChannels(this.fusion,this.volume.channels),(t=this.pickRendering)==null||t.updateSettings(this.settings,he.MATERIAL)}updateLuts(){var e,t;this.volumeRendering.updateActiveChannels(this.fusion,this.volume.channels),this.volumeRendering.updateSettings(this.settings,he.MATERIAL),(e=this.pickRendering)==null||e.updateActiveChannels(this.fusion,this.volume.channels),(t=this.pickRendering)==null||t.updateSettings(this.settings,he.MATERIAL)}setVoxelSize(e){this.volume.setVoxelSize(e),this.updateScale()}cleanup(){var e;for(const t of this.childObjects)t.cleanup();this.volumeRendering.cleanup(),(e=this.pickRendering)==null||e.cleanup()}getChannel(e){return this.volume.getChannel(e)}onChannelLoaded(e){var t;for(let n=0;n<e.length;++n){const i=e[n],r=this.channelOptions[i];if(this.setChannelOptions(i,r),r.isosurfaceEnabled){this.meshVolume.destroyIsosurface(i);const{isovalue:a,isosurfaceOpacity:c}=r;this.meshVolume.createIsosurface(i,this.channelColors[i],a,c)}}(t=this.onChannelDataReadyCallback)==null||t.call(this)}onChannelAdded(e){this.channelColors[e]=this.volume.channelColorsDefault[e],this.fusion[e]={chIndex:e,lut:new Uint8Array[Mn],rgbColor:[this.channelColors[e][0],this.channelColors[e][1],this.channelColors[e][2]],selectedID:-1},this.settings.diffuse[e]=[this.channelColors[e][0],this.channelColors[e][1],this.channelColors[e][2]],this.settings.specular[e]=[0,0,0],this.settings.emissive[e]=[0,0,0],this.settings.glossiness[e]=0}saveChannelIsosurface(e,t){this.meshVolume.saveChannelIsosurface(e,t,this.volume.name)}setVolumeChannelEnabled(e,t){var n;this.fusion[e].rgbColor=t?this.channelColors[e]:0,this.settings.visible=!this.fusion.every(i=>i.rgbColor===0),this.volumeRendering.updateSettings(this.settings,he.VIEW),(n=this.pickRendering)==null||n.updateSettings(this.settings,he.VIEW),this.updateChannelDataRequired(e)}isVolumeChannelEnabled(e){return this.fusion[e].rgbColor!==0}updateChannelColor(e,t){this.channelColors[e]&&(this.channelColors[e]=t,this.settings.diffuse[e]=t,this.fusion[e].rgbColor!==0&&(this.fusion[e].rgbColor=t),this.meshVolume.updateMeshColors(this.channelColors))}updateMeshColors(){this.meshVolume.updateMeshColors(this.channelColors)}getChannelColor(e){return this.channelColors[e]}updateChannelMaterial(e,t,n,i,r){this.channelColors[e]&&(this.updateChannelColor(e,t),this.settings.diffuse[e]=t,this.settings.specular[e]=n,this.settings.emissive[e]=i,this.settings.glossiness[e]=r)}setDensity(e){var t;this.settings.density=e,this.volumeRendering.updateSettings(this.settings,he.MATERIAL),(t=this.pickRendering)==null||t.updateSettings(this.settings,he.MATERIAL)}getDensity(){return this.settings.density}setBrightness(e){var t;this.settings.brightness=e,this.volumeRendering.updateSettings(this.settings,he.CAMERA),(t=this.pickRendering)==null||t.updateSettings(this.settings,he.CAMERA)}getBrightness(){return this.settings.brightness}setChannelAsMask(e){var t;!this.volume.channels[e]||!this.volume.channels[e].loaded||(this.settings.maskChannelIndex=e,this.updateChannelDataRequired(e),this.volumeRendering.updateSettings(this.settings,he.MASK_DATA),(t=this.pickRendering)==null||t.updateSettings(this.settings,he.MASK_DATA))}setChannelColorizeFeature(e,t){var n;t?(this.fusion[e].feature=t,this.contourRendering.setOutlineColor(t.outlineColor,t.outlineAlpha),this.contourRendering.setGlobalIdLookup(t.frameToGlobalIdLookup)):(this.fusion[e].feature=void 0,this.contourRendering.setGlobalIdLookup(null)),this.volumeRendering.updateSettings(this.settings,he.MATERIAL),(n=this.pickRendering)==null||n.updateSettings(this.settings,he.MATERIAL)}setMaskAlpha(e){var t;this.settings.maskAlpha=e,this.volumeRendering.updateSettings(this.settings,he.MASK_ALPHA),(t=this.pickRendering)==null||t.updateSettings(this.settings,he.MASK_ALPHA)}setShowBoundingBox(e){var t;this.settings.showBoundingBox=e,this.volumeRendering.updateSettings(this.settings,he.BOUNDING_BOX),(t=this.pickRendering)==null||t.updateSettings(this.settings,he.BOUNDING_BOX)}setBoundingBoxColor(e){var t;this.settings.boundingBoxColor=e,this.volumeRendering.updateSettings(this.settings,he.BOUNDING_BOX),(t=this.pickRendering)==null||t.updateSettings(this.settings,he.BOUNDING_BOX)}getIntensity(e,t,n,i){return this.volume.getIntensity(e,t,n,i)}onStartControls(){this.renderMode===Je.PATHTRACE&&this.volumeRendering.onStartControls()}onChangeControls(){var e;this.renderMode===Je.PATHTRACE&&this.volumeRendering.onChangeControls(),(e=this.pickRendering)==null||e.viewpointMoved()}onEndControls(){this.renderMode===Je.PATHTRACE&&this.volumeRendering.onEndControls()}onResetCamera(){var e;this.volumeRendering.viewpointMoved(),(e=this.pickRendering)==null||e.viewpointMoved()}onCameraChanged(e,t,n){var i;this.renderMode===Je.PATHTRACE&&this.volumeRendering.updateCamera(e,t,n),(i=this.pickRendering)==null||i.viewpointMoved()}updateClipRegion(e,t,n,i,r,a){var c;this.settings.bounds.bmin=new L(e-.5,n-.5,r-.5),this.settings.bounds.bmax=new L(t-.5,i-.5,a-.5);for(const u of this.childObjects)u.updateClipRegion(e,t,n,i,r,a);this.volumeRendering.updateSettings(this.settings,he.ROI),(c=this.pickRendering)==null||c.updateSettings(this.settings,he.ROI)}updateLights(e){this.renderMode===Je.PATHTRACE&&this.volumeRendering.updateLights(e)}setPixelSamplingRate(e){var t;this.settings.pixelSamplingRate=e,this.volumeRendering.updateSettings(this.settings,he.SAMPLING),(t=this.pickRendering)==null||t.updateSettings(this.settings,he.SAMPLING)}setVolumeRendering(e){var t;if(!(e===Je.PATHTRACE&&this.renderMode===Je.PATHTRACE)){switch((this.renderMode===Je.SLICE||this.renderMode===Je.RAYMARCH)&&this.childObjectsGroup.remove(this.meshVolume.get3dObject()),this.sceneRoot.remove(this.volumeRendering.get3dObject()),this.volumeRendering.cleanup(),(t=this.pickRendering)==null||t.cleanup(),e){case Je.PATHTRACE:this.volumeRendering=new qd(this.volume,this.settings),this.volume.updateRequiredData({subregion:new vn(new L(0,0,0),new L(1,1,1))}),this.volumeRendering.setRenderUpdateListener(this.renderUpdateListener);break;case Je.SLICE:this.volumeRendering=new GS(this.volume,this.settings);break;case Je.RAYMARCH:default:this.volumeRendering=new Yd(this.volume,this.settings),this.volume.updateRequiredData({subregion:new vn(new L(0,0,0),new L(1,1,1))});break}this.pickRendering&&(this.pickRendering=new Vl(this.volume,this.settings)),(e===Je.RAYMARCH||e===Je.SLICE)&&(this.renderUpdateListener&&this.renderUpdateListener(0),this.childObjectsGroup.add(this.meshVolume.get3dObject())),this.sceneRoot.add(this.volumeRendering.get3dObject()),this.renderMode=e,this.fuse()}}setTranslation(e){var t;this.settings.translation.copy(e),this.meshVolume.setTranslation(this.settings.translation),this.volumeRendering.updateSettings(this.settings,he.TRANSFORM),(t=this.pickRendering)==null||t.updateSettings(this.settings,he.TRANSFORM)}setRotation(e){var t;this.settings.rotation.copy(e),this.meshVolume.setRotation(this.settings.rotation),this.volumeRendering.updateSettings(this.settings,he.TRANSFORM),(t=this.pickRendering)==null||t.updateSettings(this.settings,he.TRANSFORM)}setScale(e){this.settings.scale.copy(e),this.updateScale()}addDrawableObject(e){this.childObjects.has(e)||(this.childObjectsGroup.add(e.get3dObject()),this.childObjects.add(e),this.updateScale())}hasDrawableObject(e){return this.childObjects.has(e)}removeDrawableObject(e){this.childObjects.has(e)&&(this.childObjects.delete(e),this.childObjectsGroup.remove(e.get3dObject()))}setupGui(e){e.addInput(this.settings,"translation").on("change",({value:i})=>this.setTranslation(i)),e.addInput(this.settings,"rotation").on("change",({value:i})=>this.setRotation(i));const t=e.addFolder({title:"Multiscale loading"});t.addInput(this.volume.loadSpecRequired,"maxAtlasEdge").on("change",({value:i})=>this.volume.updateRequiredData({maxAtlasEdge:i})),t.addInput(this.volume.loadSpecRequired,"useExplicitLevel").on("change",({value:i})=>this.volume.updateRequiredData({useExplicitLevel:i})),t.addInput(this.volume.loadSpecRequired,"scaleLevelBias").on("change",({value:i})=>this.volume.updateRequiredData({scaleLevelBias:i})),t.addInput(this.volume.loadSpecRequired,"multiscaleLevel").on("change",({value:i})=>this.volume.updateRequiredData({multiscaleLevel:i}));const n=e.addFolder({title:"Pathtrace",expanded:!1});n.addInput(this.settings,"primaryRayStepSize",{min:1,max:100}).on("change",({value:i})=>this.setRayStepSizes(i)),n.addInput(this.settings,"secondaryRayStepSize",{min:1,max:100}).on("change",({value:i})=>this.setRayStepSizes(void 0,i))}setZSlice(e){var n;const t=this.volume.imageInfo.volumeSize.z;return this.settings.zSlice!==e&&e<t&&e>=0?(this.settings.zSlice=e,this.volumeRendering.updateSettings(this.settings,he.ROI),(n=this.pickRendering)==null||n.updateSettings(this.settings,he.ROI),!0):!1}get showBoundingBox(){return this.settings.showBoundingBox}}const tf=Je.RAYMARCH,nf=Je.PATHTRACE,Gl={numChunksToPrefetchAhead:5,prefetchAlongNonPlayingAxis:!1,throttleArrivingChannelData:!0};class qS{constructor(e){this.handleKeydown=n=>{n.code==="Digit1"&&n.altKey&&n.ctrlKey&&(this.tweakpane?(this.tweakpane.dispose(),this.tweakpane=null):this.tweakpane=this.setupGui(this.canvas3d.containerdiv))};const t=(e==null?void 0:e.useWebGL2)===void 0?!0:e.useWebGL2;this.canvas3d=new Rw(e==null?void 0:e.parentElement,t),this.redraw=this.redraw.bind(this),this.scene=new Fi,this.backgroundColor=new ke(0),this.lights=[],this.pixelSamplingRate=.75,this.exposure=.5,this.volumeRenderMode=Je.RAYMARCH,window.addEventListener("resize",()=>this.resize(null)),this.lightContainer=new Tt,this.ambientLight=new ed,this.spotLight=new Qu,this.reflectedLight=new Ao,this.fillLight=new Ao,this.buildScene(),this.tweakpane=null,window.addEventListener("keydown",this.handleKeydown)}preRender(){const e=this.scene.getObjectByName("lightContainer");if(e&&e.rotation.setFromRotationMatrix(this.canvas3d.camera.matrixWorld),this.image&&zn(this.canvas3d.camera)){const{top:t,zoom:n}=this.canvas3d.camera;this.image.setOrthoScale(Math.abs(t)/n),this.updateOrthoScaleBar(this.image.volume)}}updateOrthoScaleBar(e){this.canvas3d.updateOrthoScaleBar(e.physicalScale,e.imageInfo.spatialUnit)}updatePerspectiveScaleBar(e){this.canvas3d.updatePerspectiveScaleBar(e.tickMarkPhysicalLength,e.imageInfo.spatialUnit)}updateTimestepIndicator(e){const{times:t,timeScale:n,timeUnit:i}=e.imageInfo,r=e.loadSpec.time;this.canvas3d.updateTimestepIndicator(r*n,t*n,i)}capture(e){return this.canvas3d.requestCapture(e)}getDOMElement(){return this.canvas3d.containerdiv}getCanvasDOMElement(){return this.canvas3d.renderer.domElement}getCameraState(){return this.canvas3d.getCameraState()}setCameraState(e){this.canvas3d.setCameraState(e),this.redraw()}getViewProjectionMatrix(){const e=this.canvas3d.camera;return new ut().multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse)}redraw(e=!1){e?this.canvas3d.onAnimationLoop():this.canvas3d.redraw()}setOnRenderCallback(e){this.canvas3d.setOnRenderCallback(e)}unsetImage(){return this.image&&(this.canvas3d.removeControlHandlers(),this.canvas3d.animateFuncs=[],this.canvas3d.postMeshRenderFuncs=[],this.canvas3d.overlayRenderFuncs=[],this.scene.remove(this.image.sceneRoot)),this.image}addVolume(e,t){e.addVolumeDataObserver(this),t=t||{},t.renderMode=this.volumeRenderMode,this.setImage(new jS(e,t))}setVolumeChannelOptions(e,t,n){var i;(i=this.image)==null||i.setChannelOptions(t,n),this.redraw()}setVolumeDisplayOptions(e,t){var n;(n=this.image)==null||n.setOptions(t),this.redraw()}removeVolume(e){const t=this.unsetImage();t&&t.cleanup(),e&&e.removeVolumeDataObserver(this)}removeAllVolumes(){this.image&&this.removeVolume(this.image.volume),this.image=void 0}setRenderUpdateListener(e){var t;this.renderUpdateListener=e,(t=this.image)==null||t.setRenderUpdateListener(e)}onVolumeData(e,t){var n,i;(n=this.image)==null||n.updateScale(),(i=this.image)==null||i.onChannelLoaded(t),e.isLoaded()&&this.tweakpane&&this.tweakpane.refresh()}onVolumeChannelAdded(e,t){var n;(n=this.image)==null||n.onChannelAdded(t)}onVolumeLoadError(e,t){var n;(n=this.loadErrorHandler)==null||n.call(this,e,t)}setLoadErrorHandler(e){this.loadErrorHandler=e}setTime(e,t,n){const i=Math.max(0,Math.min(t,e.imageInfo.times-1)),r=e.updateRequiredData({time:i},n);return this.updateTimestepIndicator(e),r}setScaleLevelBias(e,t){e.updateRequiredData({scaleLevelBias:t})}setVolumeChannelAsMask(e,t){var n;(n=this.image)==null||n.setChannelAsMask(t),this.redraw()}setChannelColorizeFeature(e,t,n){var i,r;(i=this.image)==null||i.setChannelColorizeFeature(t,n),(r=this.image)==null||r.fuse(),this.redraw()}setVoxelSize(e,t,n){this.image&&(this.image.setVoxelSize(new L().fromArray(t)),n&&this.image.volume.setUnitSymbol(n),this.updatePerspectiveScaleBar(this.image.volume)),this.redraw()}setRayStepSizes(e,t,n){var i;(i=this.image)==null||i.setRayStepSizes(t,n),this.redraw()}setShowBoundingBox(e,t){var n;(n=this.image)==null||n.setShowBoundingBox(t),this.canvas3d.setShowPerspectiveScaleBar(t&&this.canvas3d.showOrthoScaleBar&&this.volumeRenderMode!==Je.PATHTRACE),this.redraw()}setBoundingBoxColor(e,t){var n;(n=this.image)==null||n.setBoundingBoxColor(t),this.canvas3d.setPerspectiveScaleBarColor(t),this.redraw()}setBackgroundColor(e){const t=new ke().fromArray(e);this.backgroundColor=t,this.canvas3d.setClearColor(t,1),this.redraw()}hasIsosurface(e,t){var n;return((n=this.image)==null?void 0:n.hasIsosurface(t))||!1}saveChannelIsosurface(e,t,n){var i;(i=this.image)==null||i.saveChannelIsosurface(t,n)}setImage(e){const t=this.unsetImage();return this.image=e,this.scene.add(e.sceneRoot),this.image.setResolution(this.canvas3d.getWidth(),this.canvas3d.getHeight()),this.image.setIsOrtho(zn(this.canvas3d.camera)),this.image.setBrightness(this.exposure),this.canvas3d.setControlHandlers(this.onStartControls.bind(this),this.onChangeControls.bind(this),this.onEndControls.bind(this)),this.canvas3d.animateFuncs.push(this.preRender.bind(this)),this.canvas3d.animateFuncs.push(e.onAnimate.bind(e)),this.canvas3d.postMeshRenderFuncs.push(e.fillPickBuffer.bind(e)),this.canvas3d.overlayRenderFuncs.push(e.drawContours.bind(e)),this.updatePerspectiveScaleBar(e.volume),this.updateTimestepIndicator(e.volume),this.redraw(),t}onStartControls(){var e;this.volumeRenderMode!==Je.PATHTRACE&&this.canvas3d.startRenderLoop(),(e=this.image)==null||e.onStartControls()}onChangeControls(){var e;(e=this.image)==null||e.onChangeControls()}onEndControls(){var e;(e=this.image)==null||e.onEndControls(),this.volumeRenderMode!==Je.PATHTRACE&&!this.canvas3d.controls.autoRotate&&this.canvas3d.stopRenderLoop(),this.redraw()}buildScene(){this.scene=this.canvas3d.scene,this.canvas3d.setClearColor(this.backgroundColor,1),this.lights=[new nr(xa),new nr(_a)],this.lightContainer=new Tt,this.lightContainer.name="lightContainer",this.ambientLight=new ed(zt.ambientLightSettings.color,zt.ambientLightSettings.intensity),this.ambientLight.layers.enable(Gs),this.lightContainer.add(this.ambientLight),this.spotLight=new Qu(zt.spotlightSettings.color,zt.spotlightSettings.intensity),this.spotLight.position.set(zt.spotlightSettings.position.x,zt.spotlightSettings.position.y,zt.spotlightSettings.position.z),this.spotLight.target=new Tt,this.spotLight.angle=zt.spotlightSettings.angle,this.spotLight.layers.enable(Gs),this.lightContainer.add(this.spotLight),this.reflectedLight=new Ao(zt.reflectedLightSettings.color),this.reflectedLight.position.set(zt.reflectedLightSettings.position.x,zt.reflectedLightSettings.position.y,zt.reflectedLightSettings.position.z),this.reflectedLight.castShadow=zt.reflectedLightSettings.castShadow,this.reflectedLight.intensity=zt.reflectedLightSettings.intensity,this.reflectedLight.layers.enable(Gs),this.lightContainer.add(this.reflectedLight),this.fillLight=new Ao(zt.fillLightSettings.color),this.fillLight.position.set(zt.fillLightSettings.position.x,zt.fillLightSettings.position.y,zt.fillLightSettings.position.z),this.fillLight.castShadow=zt.fillLightSettings.castShadow,this.fillLight.intensity=zt.fillLightSettings.intensity,this.fillLight.layers.enable(Gs),this.lightContainer.add(this.fillLight),this.scene.add(this.lightContainer)}setCameraMode(e){var t,n;this.canvas3d.switchViewMode(e),(t=this.image)==null||t.setViewMode(e,this.volumeRenderMode),(n=this.image)==null||n.setIsOrtho(e!=="3D"),this.canvas3d.redraw()}setZSlice(e,t){var n;return(n=this.image)!=null&&n.setZSlice(t)?(this.canvas3d.redraw(),!0):!1}setShowAxis(e){this.canvas3d.showAxis=e,this.canvas3d.redraw()}setShowScaleBar(e){var t;this.canvas3d.setShowOrthoScaleBar(e),this.canvas3d.setShowPerspectiveScaleBar(e&&!!((t=this.image)!=null&&t.showBoundingBox)&&this.volumeRenderMode!==Je.PATHTRACE)}setShowTimestepIndicator(e){var i;const t=(i=this.image)==null?void 0:i.volume.imageInfo.times,n=!!t&&t>1;this.canvas3d.setShowTimestepIndicator(e&&n)}setAxisPosition(e,t,n=Ko.BOTTOM_LEFT){this.canvas3d.setAxisPosition(e,t,n),this.canvas3d.showAxis&&this.canvas3d.redraw()}setScaleBarPosition(e,t,n=Ko.BOTTOM_RIGHT){this.canvas3d.setIndicatorPosition(!1,e,t,n)}setTimestepIndicatorPosition(e,t,n=Ko.BOTTOM_RIGHT){this.canvas3d.setIndicatorPosition(!0,e,t,n)}setAutoRotate(e){this.canvas3d.setAutoRotate(e),e?this.onStartControls():this.onEndControls()}setScaleUnit(e){this.image&&(this.image.volume.setUnitSymbol(e),this.updatePerspectiveScaleBar(this.image.volume),zn(this.canvas3d.camera)&&this.updateOrthoScaleBar(this.image.volume))}setFlipVolume(e,t,n,i){var r;(r=this.image)==null||r.setFlipAxes(t,n,i),this.redraw()}setInterpolationEnabled(e,t){var n;(n=this.image)==null||n.setInterpolationEnabled(t),this.redraw()}resize(e,t,n,i,r,a){var c;this.canvas3d.resize(e,t,n,i,r,a),(c=this.image)==null||c.setResolution(this.canvas3d.getWidth(),this.canvas3d.getHeight()),this.redraw()}updateDensity(e,t){var n;(n=this.image)==null||n.setDensity(t),this.redraw()}updateShadingMethod(e,t){var n;(n=this.image)==null||n.updateShadingMethod(t)}setGamma(e,t,n,i){var r;(r=this.image)==null||r.setGamma(t,n,i),this.redraw()}setMaxProjectMode(e,t){var n;(n=this.image)==null||n.setMaxProjectMode(t),this.redraw()}updateActiveChannels(e){var t;(t=this.image)==null||t.fuse(),this.redraw()}updateLuts(e){var t;(t=this.image)==null||t.updateLuts(),this.redraw()}updateMaterial(e){var t;(t=this.image)==null||t.updateMaterial(),this.redraw()}updateExposure(e){var t;this.exposure=e,(t=this.image)==null||t.setBrightness(e),this.redraw()}updateCamera(e,t,n){var i;this.canvas3d.updateCameraFocus(e,t,n),(i=this.image)==null||i.onCameraChanged(e,t,n),this.redraw()}updateClipRegion(e,t,n,i,r,a,c){var u;(u=this.image)==null||u.updateClipRegion(t,n,i,r,a,c),this.redraw()}setAxisClip(e,t,n,i,r){var a;(a=this.image)==null||a.setAxisClip(t,n,i,r),this.redraw()}updateLights(e){var t;this.lights=e,(t=this.image)==null||t.updateLights(e)}updatePixelSamplingRate(e){var t;this.pixelSamplingRate!==e&&(this.pixelSamplingRate=e,(t=this.image)==null||t.setPixelSamplingRate(e))}updateMaskAlpha(e,t){var n;(n=this.image)==null||n.setMaskAlpha(t),this.redraw()}setVolumeChannelEnabled(e,t,n){var i;(i=this.image)==null||i.setChannelOptions(t,{enabled:n}),this.redraw()}updateChannelMaterial(e,t,n,i,r,a){var c;(c=this.image)==null||c.updateChannelMaterial(t,n,i,r,a)}updateChannelColor(e,t,n){var i;(i=this.image)==null||i.updateChannelColor(t,n)}setVolumeRenderMode(e){var t;if(e!==this.volumeRenderMode){if(this.volumeRenderMode=e,this.image){if(this.image.getViewMode()===Dt.Z)return;e===Je.PATHTRACE&&this.canvas3d.hasWebGL2?(this.image.setVolumeRendering(Je.PATHTRACE),this.image.updateLights(this.lights),this.canvas3d.startRenderLoop()):e===Je.RAYMARCH&&(this.image.setVolumeRendering(Je.RAYMARCH),this.canvas3d.redraw()),this.updatePixelSamplingRate(this.pixelSamplingRate),this.image.setIsOrtho(zn(this.canvas3d.camera)),this.image.setResolution(this.canvas3d.getWidth(),this.canvas3d.getHeight()),this.setAutoRotate(this.canvas3d.controls.autoRotate),this.image.setRenderUpdateListener(this.renderUpdateListener)}this.canvas3d.setShowPerspectiveScaleBar(this.canvas3d.showOrthoScaleBar&&!!((t=this.image)!=null&&t.showBoundingBox)&&e!==Je.PATHTRACE)}}setVolumeTranslation(e,t){var n;(n=this.image)==null||n.setTranslation(new L().fromArray(t)),this.redraw()}setVolumeRotation(e,t){var n;(n=this.image)==null||n.setRotation(new tn().fromArray(t)),this.redraw()}setVolumeScale(e,t){var n;(n=this.image)==null||n.setScale(new L().fromArray(t)),this.redraw()}resetCamera(){var e;this.canvas3d.resetCamera(),(e=this.image)==null||e.onResetCamera(),this.redraw()}hasWebGL2(){return this.canvas3d.hasWebGL2}removeEventListeners(){window.removeEventListener("keydown",this.handleKeydown)}setSelectedID(e,t,n){var r,a;((r=this.image)==null?void 0:r.setSelectedID(t,n))&&((a=this.image)==null||a.fuse(),this.redraw())}addLineObject(e){return this.addDrawableObject(e)}hasLineObject(e){return this.hasDrawableObject(e)}removeLineObject(e){return this.removeDrawableObject(e)}addDrawableObject(e){this.image&&(this.image.addDrawableObject(e),this.redraw())}hasDrawableObject(e){return this.image?this.image.hasDrawableObject(e):!1}removeDrawableObject(e){this.image&&(this.image.removeDrawableObject(e),this.redraw())}enablePicking(e,t,n=0){this.image&&this.image.enablePicking(t,n)}hitTest(e,t){return this.image?this.canvas3d.hitTest(e,t,this.image.getPickBuffer()):-1}setupGui(e){var u,d;const t=new dw.Pane({title:"Advanced Settings",container:e}),n={position:"absolute",top:"0",right:"0"};Object.assign(t.element.style,n);const i=t.addFolder({title:"Lights (isosurface)"}),r=(f,m)=>{const v=i.addFolder({title:m,expanded:!1});v.addInput(f,"color",{color:{type:"float"}}).on("change",g=>this.redraw()),v.addInput(f,"intensity",{min:0}).on("change",g=>this.redraw()),f.isAmbientLight||v.addInput(f,"position").on("change",g=>this.redraw())};r(this.spotLight,"spot light"),r(this.ambientLight,"ambient light"),r(this.reflectedLight,"reflected light"),r(this.fillLight,"fill light"),(u=this.image)==null||u.setupGui(t);const a=t.addFolder({title:"Prefetch"}),c=(d=this.image)==null?void 0:d.volume.loader;return a.addInput(Gl,"numChunksToPrefetchAhead").on("change",f=>{var m,v;(m=c==null?void 0:c.updateFetchOptions)==null||m.call(c,{maxPrefetchDistance:[f.value,f.value,f.value,f.value]}),(v=this.image)==null||v.volume.updateRequiredData({})}),a.addInput(Gl,"prefetchAlongNonPlayingAxis").on("change",f=>{var m;(m=c==null?void 0:c.updateFetchOptions)==null||m.call(c,{onlyPriorityDirections:!f.value})}),a.addInput(Gl,"throttleArrivingChannelData").on("change",f=>{var m;(m=c==null?void 0:c.getContext)==null||m.call(c).setThrottleChannelData(f.value)}),t}}const $d=256;class Di{constructor(e,t=void 0,n=void 0){this.dataMinBin=0,this.dataMaxBin=0,this.maxBin=0,this.bins=new Uint32Array,this.min=0,this.max=0,this.binSize=0;const i=Di.calculateHistogram(e,$d,t,n);this.bins=i.bins,this.min=i.min,this.max=i.max,this.binSize=i.binSize;for(let a=0;a<this.bins.length;a++)if(this.bins[a]>0){this.dataMinBin=a;break}for(let a=this.bins.length-1;a>=0;a--)if(this.bins[a]>0){this.dataMaxBin=a;break}this.pixelCount=e.length,this.maxBin=1;let r=this.bins[1];for(let a=1;a<this.bins.length;a++)this.bins[a]>r&&(this.maxBin=a,r=this.bins[a])}static findBin(e,t,n,i){const r=(e-t)/n;return i?Math.max(Math.min(Math.floor(r),$d-1),0):r}findBinOfValue(e){return Di.findBin(e,this.min,this.binSize,!0)}findFractionalBinOfValue(e){return Di.findBin(e,this.min,this.binSize,!1)}getValueFromBinIndex(e){return this.min+e*this.binSize}getDataMin(){return this.min}getDataMax(){return this.max}getMin(){return this.dataMinBin}getMax(){return this.dataMaxBin}getNumBins(){return this.bins.length}getBin(e){return this.bins[e]}getBinRange(e){return[this.min+e*this.binSize,this.min+(e+1)*this.binSize]}findBinOfPercentile(e){const t=this.pixelCount*e;let n=0,i=0;for(n=0;n<this.bins.length&&(i+=this.bins[n],!(i>t));++n);return n}findBestFitBins(){const t=this.pixelCount/10;let n=0,i=0;for(n=1;n<this.bins.length&&(i+=this.bins[n],!(i>t));++n);const r=n;for(i=0,n=this.bins.length-1;n>=1&&(i+=this.bins[n],!(i>t));--n);return[r,n]}findAutoIJBins(){const t=this.pixelCount,n=t/10,i=t/5e3;let r=this.bins.length-1,a=1;for(let c=1;c<this.bins.length;++c)if(this.bins[c]>i&&this.bins[c]<=n){r=c;break}for(let c=this.bins.length-1;c>=1;--c)if(this.bins[c]>i&&this.bins[c]<=n){a=c;break}return a<r&&(r=0,a=255),[r,a]}findAutoMinMax(){const t=Math.floor(this.bins[this.maxBin]*.1);let n=0,i=this.bins.length-1;for(let r=1;r<this.bins.length;++r)if(this.bins[r]>t){n=r;break}for(let r=this.bins.length-1;r>=1;--r)if(this.bins[r]>t){i=r;break}return[n,i]}static calculateHistogram(e,t=1,n=void 0,i=void 0){t<1&&(t=1);let r=n!==void 0?n:e[0],a=i!==void 0?i:e[0];(n===void 0||i===void 0)&&([r,a]=Br(e));const c=new Uint32Array(t).fill(0),u=mw(e)?a:a+1,d=u<=r?1:(u-r)/t;for(let f=0;f<e.length;f++){const m=e[f],v=Di.findBin(m,r,d,!0);c[v]++}return{bins:c,min:r,max:a,binSize:d}}}class Kd{constructor(e){this.loaded=!1,this.dtype="uint8",this.imgData={data:new Uint8Array,width:0,height:0},this.rawMin=0,this.rawMax=255,this.frame=0,this.dataTexture=new cn(new Uint8Array,0,0),this.lutTexture=new cn(new Uint8Array(Mn),256,1,Ot,Yt),this.lutTexture.minFilter=this.lutTexture.magFilter=Nt,this.lutTexture.generateMipmaps=!1,this.volumeData=new Uint8Array,this.name=e,this.histogram=new Di(new Uint8Array),this.dims=[0,0,0],this.lut=new ai().createFromMinMax(0,255),this.colorPalette=new Uint8Array(Mn).fill(0),this.colorPaletteAlpha=0}combineLuts(e,t){const n=t||new Uint8Array(Mn);if(!e)return n;const i=[e[0]/255,e[1]/255,e[2]/255];if(this.colorPaletteAlpha===1)n.set(this.colorPalette);else if(this.colorPaletteAlpha===0){n.set(this.lut.lut);for(let r=0;r<Mn/4;++r)n[r*4+0]*=i[0],n[r*4+1]*=i[1],n[r*4+2]*=i[2]}else for(let r=0;r<Mn/4;++r)n[r*4+0]=this.colorPalette[r*4+0]*this.colorPaletteAlpha+this.lut.lut[r*4+0]*(1-this.colorPaletteAlpha)*i[0],n[r*4+1]=this.colorPalette[r*4+1]*this.colorPaletteAlpha+this.lut.lut[r*4+1]*(1-this.colorPaletteAlpha)*i[1],n[r*4+2]=this.colorPalette[r*4+2]*this.colorPaletteAlpha+this.lut.lut[r*4+2]*(1-this.colorPaletteAlpha)*i[2],n[r*4+3]=this.colorPalette[r*4+3]*this.colorPaletteAlpha+this.lut.lut[r*4+3]*(1-this.colorPaletteAlpha);return this.lutTexture.image.data.set(n),this.lutTexture.needsUpdate=!0,n}setRawDataRange(e,t){!(this.rawMin===0&&this.rawMax===0)&&!(e===0&&t===0)&&(this.lut.remapDomains(this.rawMin,this.rawMax,e,t),this.rawMin=e,this.rawMax=t)}getHistogram(){return this.histogram}getIntensity(e,t,n){return this.volumeData[e+t*this.dims[0]+n*(this.dims[0]*this.dims[1])]}normalizeRaw(e){return(e-this.rawMin)/(this.rawMax-this.rawMin)}getIntensityFromAtlas(e,t,n){const i=this.imgData.width/this.dims[0],r=n%i,a=Math.floor(n/i),c=r*this.dims[0]+e+(a*this.dims[1]+t)*this.imgData.width;return this.imgData.data[c]}rebuildDataTexture(e,t,n){this.dataTexture&&this.dataTexture.dispose();let i=Yc,r=Yt,a="LUMINANCE";switch(this.dtype){case"uint8":r=Yt,i=Pn,a="R8UI";break;case"int8":r=Gc,i=Pn,a="R8I";break;case"uint16":r=Ks,i=Pn,a="R16UI";break;case"int16":r=Hc,i=Pn,a="R16I";break;case"uint32":r=fi,i=Pn,a="R32UI";break;case"int32":r=fa,i=Pn,a="R32I";break;case"float32":r=en,i=Gr,a="R32F";break;default:console.warn("unsupported dtype for channel data",this.dtype);break}this.dataTexture=new cn(e,t,n,i,r,Vc,mn,mn,At,At),this.dataTexture.internalFormat=a,this.dataTexture.needsUpdate=!0}setFromAtlas(e,t,n,i,r,a,c,u=0){this.dtype=i,this.imgData={data:e,width:t,height:n},this.rebuildDataTexture(this.imgData.data,t,n),this.loaded=!0,this.histogram=new Di(e,r,a),this.frame=u,this.setRawDataRange(r,a),this.unpackFromAtlas(c.x,c.y,c.z)}unpackFromAtlas(e,t,n){const i=this.imgData.data;this.dims=[e,t,n];const r=Nr[this.dtype];this.volumeData=new r(e*t*n);const a=this.imgData.width/e,c=this.imgData.width;let u=0,d=0,f=0,m=0,v=0;for(let g=0;g<n;++g){u=g%a,d=Math.floor(g/a),f=u*e+d*t*c;for(let b=0;b<t;++b)m=b*c,v=g*(e*t)+b*e,this.volumeData.set(i.subarray(f+m,f+m+e),v)}}setFromVolumeData(e,t,n,i,r,a,c,u,d,f=0){this.dims=[t,n,i],this.volumeData=e,this.dtype=d,this.frame=f,this.packToAtlas(t,n,i,r,a),this.loaded=!0,this.setRawDataRange(c,u),this.histogram=new Di(this.volumeData,c,u)}packToAtlas(e,t,n,i,r){(i%e!==0||r%t!==0||i/e*(r/t)<n)&&(console.log("ERROR - atlas and volume dims are inconsistent"),console.log(i,r,e,t,n));const a=Nr[this.dtype];this.imgData={width:i,height:r,data:new a(i*r)},this.imgData.data.fill(0);const c=this.imgData.data,u=e,d=t,f=n,m=this.imgData.width/u,v=this.imgData.width;let g=0,b=0,y=0,x=0,_=0;for(let w=0;w<f;++w){g=w%m,b=Math.floor(w/m),y=g*u+b*d*v;for(let E=0;E<d;++E)x=E*v,_=w*(u*d)+E*u,c.set(this.volumeData.subarray(_,_+u),y+x)}this.rebuildDataTexture(this.imgData.data,i,r)}setLut(e){this.lut=e}setColorPalette(e){this.colorPalette=e}setColorPaletteAlpha(e){this.colorPaletteAlpha=e}}function Zd(s){return new L(s.shape[4],s.shape[3],s.shape[2])}function $S(s){return new L(s.spacing[4],s.spacing[3],s.spacing[2])}function sf(){return{name:"",atlasTileDims:[1,1],subregionSize:[1,1,1],subregionOffset:[0,0,0],numChannelsPerSource:[1],channelNames:["0"],channelColors:[[255,255,255]],multiscaleLevel:0,multiscaleLevelDims:[{shape:[1,1,1,1,1],spacing:[1,1,1,1,1],spaceUnit:"",timeUnit:"",dataType:"uint8"}],transform:{translation:[0,0,0],rotation:[0,0,0],scale:[1,1,1]}}}class ba{constructor(e){this.imageInfo=e||sf()}get currentLevelDims(){return this.imageInfo.multiscaleLevelDims[this.imageInfo.multiscaleLevel]}get numChannels(){return this.imageInfo.numChannelsPerSource.reduce((e,t)=>e+t,0)}get numChannelsPerSource(){return this.imageInfo.numChannelsPerSource}get originalSize(){return Zd(this.imageInfo.multiscaleLevelDims[0])}get volumeSize(){return Zd(this.currentLevelDims)}get physicalPixelSize(){return $S(this.imageInfo.multiscaleLevelDims[0])}get spatialUnit(){return this.imageInfo.multiscaleLevelDims[0].spaceUnit}get times(){return this.currentLevelDims.shape[0]}get timeScale(){return this.currentLevelDims.spacing[0]}get timeUnit(){return this.currentLevelDims.timeUnit}get numMultiscaleLevels(){return this.imageInfo.multiscaleLevelDims.length}get channelNames(){return this.imageInfo.channelNames}get channelColors(){return this.imageInfo.channelColors}get subregionSize(){return new L(...this.imageInfo.subregionSize)}get subregionOffset(){return new L(...this.imageInfo.subregionOffset)}get multiscaleLevel(){return this.imageInfo.multiscaleLevel}get atlasTileDims(){return new Ie(...this.imageInfo.atlasTileDims)}get transform(){return{translation:new L(...this.imageInfo.transform.translation),rotation:new L(...this.imageInfo.transform.rotation),scale:new L(...this.imageInfo.transform.scale)}}}function rf(s){const{atlasTileDims:e}=s,t=s.multiscaleLevelDims[s.multiscaleLevel];return[e[0]*t.shape[4],e[1]*t.shape[3]]}const kr=4096;function Dc(s,e,t){let n=1,i=s,r=i*e/(n*t),a=n,c=i;for(;r>1;)a=n,c=i,i-=1,n=Math.ceil(s/i),r=i*e/(n*t);return new Ie(a,c)}function of(s,e=kr){const t=s[2],n=s[1],i=s[0],r=Math.floor(e/t),a=Math.floor(e/n);return r*a>=i}function KS(s,e=kr){if(s.length<=1)return 0;for(let t=0;t<s.length;++t)if(of(s[t],e))return t}function ZS(s,e){if(s.useExplicitLevel&&s.multiscaleLevel!==void 0)return Math.max(0,Math.min(e.length-1,s.multiscaleLevel));let t=KS(e,s.maxAtlasEdge);if(t!==void 0&&(t=Math.max(t+(s.scaleLevelBias??0),s.multiscaleLevel??0),t=Math.max(0,Math.min(e.length-1,t)),of(e[t],s.maxAtlasEdge)))return t;t===void 0&&(t=e.length-1);const n=e[t];return console.error(`Volume is too large; no multiscale level found that fits in preferred memory footprint. Selected level ${t}  has dimensions `,n,`. Max atlas edge allowed is ${s.maxAtlasEdge}.`),console.log("All available levels: ",e),t}function JS(s){for(const e in s)if(Object.prototype.hasOwnProperty.call(s,e))return!1;return!0}function QS(s){const e=new ba(s),t=e.volumeSize.clone().multiply(e.physicalPixelSize),n={};n.Dimensions={...e.subregionSize},n["Original dimensions"]={...e.originalSize},n["Physical size"]={x:t.x+e.spatialUnit,y:t.y+e.spatialUnit,z:t.z+e.spatialUnit},n["Physical size per pixel"]={x:e.physicalPixelSize.x+e.spatialUnit,y:e.physicalPixelSize.y+e.spatialUnit,z:e.physicalPixelSize.z+e.spatialUnit},n["Multiresolution levels"]=s.multiscaleLevelDims;const i=e.numChannelsPerSource.reduce((r,a)=>r+a,0);return n.Channels=i,n["Time series frames"]=e.times||1,s.userData&&!JS(s.userData)&&(n["User data"]=s.userData),n}class Hr{constructor(){this.time=0,this.subregion=new vn(new L(0,0,0),new L(1,1,1)),this.useExplicitLevel=!1}}class Wr{setPrefetchPriority(e){}syncMultichannelLoading(e){}updateFetchOptions(e){}async createVolume(e,t){const{imageInfo:n,loadSpec:i}=await this.createImageInfo(e),r=new af(n,i,this);return r.channelLoadCallback=t,r.imageMetadata=QS(n),r}async loadVolumeData(e,t,n){const i=(c,u)=>{c&&(e.imageInfo=new ba(c),e.updateDimensions()),e.loadSpec={...u,...a}},r=(c,u,d,f,m)=>{for(let v=0;v<c.length;v++){const g=c[v],b=u[v],y=d[v],x=f[v],_=e.loadSpec.time;m?e.setChannelDataFromAtlas(g,y,m[0],m[1],x,b,_):e.setChannelDataFromVolume(g,y,x,b,_),n==null||n(e,g)}},a={...e.loadSpec,...t};return this.loadRawChannelData(e.imageInfo.imageInfo,a,i,r)}}class af{constructor(e=sf(),t=new Hr,n){if(this.loaded=!1,this.imageInfo=new ba(e),this.name=e.name,this.loadSpec={multiscaleLevel:0,scaleLevelBias:0,maxAtlasEdge:kr,channels:Array.from({length:this.imageInfo.numChannels},(i,r)=>r),...t},this.loadSpecRequired={...this.loadSpec,channels:this.loadSpec.channels.slice(),subregion:this.loadSpec.subregion.clone()},this.loader=n,this.imageMetadata={},this.normRegionSize=new L(1,1,1),this.normRegionOffset=new L(0,0,0),this.physicalSize=new L(1,1,1),this.physicalScale=1,this.normPhysicalSize=new L(1,1,1),this.physicalPixelSize=this.imageInfo.physicalPixelSize,this.tickMarkPhysicalLength=1,this.setVoxelSize(this.physicalPixelSize),this.numChannels=this.imageInfo.numChannels,this.channelNames=this.imageInfo.channelNames.slice(),this.channelColorsDefault=this.imageInfo.channelColors?this.imageInfo.channelColors.map((i,r)=>i??Rr(r)):this.channelNames.map((i,r)=>Rr(r)),this.channelColorsDefault.length<this.imageInfo.numChannels)for(let i=this.channelColorsDefault.length-1;i<this.imageInfo.numChannels;++i)this.channelColorsDefault[i]=Rr(i);this.channels=[];for(let i=0;i<this.imageInfo.numChannels;++i){const r=new Kd(this.channelNames[i]);this.channels.push(r),r.dims=this.imageInfo.subregionSize.toArray()}this.physicalUnitSymbol=this.imageInfo.spatialUnit,this.volumeDataObservers=[]}setUnloaded(){this.loaded=!1,this.channels.forEach(e=>{e.loaded=!1})}isLoaded(){return this.loaded}updateDimensions(){const{volumeSize:e,subregionSize:t,subregionOffset:n}=this.imageInfo;this.setVoxelSize(this.physicalPixelSize),this.normRegionSize=t.clone().divide(e),this.normRegionOffset=n.clone().divide(e)}mustLoadNewData(){return this.loadSpec.useExplicitLevel!==this.loadSpecRequired.useExplicitLevel||this.loadSpec.time!==this.loadSpecRequired.time||!this.loadSpec.subregion.containsBox(this.loadSpecRequired.subregion)||this.loadSpecRequired.channels.some(e=>!this.loadSpec.channels.includes(e))}mayLoadNewScaleLevel(){return!this.loadSpec.subregion.equals(this.loadSpecRequired.subregion)||this.loadSpecRequired.maxAtlasEdge!==this.loadSpec.maxAtlasEdge||this.loadSpecRequired.multiscaleLevel!==this.loadSpec.multiscaleLevel||this.loadSpecRequired.scaleLevelBias!==this.loadSpec.scaleLevelBias}async updateRequiredData(e,t){this.loadSpecRequired={...this.loadSpecRequired,...e};let n=this.mustLoadNewData();if(!n&&this.mayLoadNewScaleLevel()){const i=await this.loadScaleLevelDims();if(i){const r=i.map(({shape:c})=>[c[2],c[3],c[4]]),a=ZS(this.loadSpecRequired,r);n=this.imageInfo.multiscaleLevel!==a}}n&&await this.loadNewData(t)}async loadScaleLevelDims(){var e;try{return await((e=this.loader)==null?void 0:e.loadDims(this.loadSpecRequired))}catch(t){this.volumeDataObservers.forEach(n=>n.onVolumeLoadError(this,t));return}}async loadNewData(e){var t;this.setUnloaded(),this.loadSpec={...this.loadSpecRequired,subregion:this.loadSpecRequired.subregion.clone()};try{await((t=this.loader)==null?void 0:t.loadVolumeData(this,void 0,e))}catch(n){throw this.volumeDataObservers.forEach(i=>i.onVolumeLoadError(this,n)),n}}setVoxelSize(e){e.x=e.x>0?e.x:1,e.y=e.y>0?e.y:1,e.z=e.z>0?e.z:1,this.physicalPixelSize=e,this.physicalSize=this.imageInfo.originalSize.clone().multiply(this.physicalPixelSize),this.physicalScale=Math.max(this.physicalSize.x,this.physicalSize.y,this.physicalSize.z),this.normPhysicalSize=this.physicalSize.clone().divideScalar(this.physicalScale),this.tickMarkPhysicalLength=10**Math.floor(Math.log10(this.physicalScale/2))}setUnitSymbol(e){this.physicalUnitSymbol=e}getContentCenter(){return this.normRegionSize.clone().divideScalar(2).add(this.normRegionOffset).subScalar(.5).multiply(this.normPhysicalSize)}cleanup(){}getChannel(e){return this.channels[e]}onChannelLoaded(e){this.loadSpec.channels.every(t=>this.channels[t].loaded)&&(this.loaded=!0),e.forEach(t=>{var n;return(n=this.channelLoadCallback)==null?void 0:n.call(this,this,t)}),this.volumeDataObservers.forEach(t=>t.onVolumeData(this,e))}setChannelDataFromAtlas(e,t,n,i,r,a="uint8",c=0){this.channels[e].setFromAtlas(t,n,i,a,r[0],r[1],this.imageInfo.subregionSize,c),this.onChannelLoaded([e])}setChannelDataFromVolume(e,t,n,i="uint8",r=0){const{subregionSize:a,atlasTileDims:c}=this.imageInfo;this.channels[e].setFromVolumeData(t,a.x,a.y,a.z,c.x*a.x,c.y*a.y,n[0],n[1],i,r),this.onChannelLoaded([e])}appendEmptyChannel(e,t){const n=this.imageInfo.numChannels,i=e||"channel_"+n,r=t||Rr(n);this.numChannels+=1,this.channelNames.push(i),this.channelColorsDefault.push(r),this.channels.push(new Kd(i));for(let a=0;a<this.volumeDataObservers.length;++a)this.volumeDataObservers[a].onVolumeChannelAdded(this,n);return n}getIntensity(e,t,n,i){return this.channels[e].getIntensity(t,n,i)}getHistogram(e){return this.channels[e].getHistogram()}setLut(e,t){this.channels[e].setLut(t)}setColorPalette(e,t){this.channels[e].setColorPalette(t)}setColorPaletteAlpha(e,t){this.channels[e].setColorPaletteAlpha(t)}getRotation(){return this.imageInfo.transform.rotation.toArray()}getTranslation(){return this.voxelsToWorldSpace(this.imageInfo.transform.translation.toArray())}voxelsToWorldSpace(e){const t=1/Math.max(this.physicalSize.x,Math.max(this.physicalSize.y,this.physicalSize.z));return new L().fromArray(e).multiply(this.physicalPixelSize).multiplyScalar(t).toArray()}addVolumeDataObserver(e){this.volumeDataObservers.push(e)}removeVolumeDataObserver(e){if(e){const t=this.volumeDataObservers.indexOf(e);t!==-1&&this.volumeDataObservers.splice(t,1)}}removeAllVolumeDataObservers(){this.volumeDataObservers=[]}}class ui{static createVolume(e,t,n,i,r="uint8"){const a=Nr[r],c=new a(e*t*n).fill(0),u=e/2,d=t/2,f=n/2;let m,v,g,b;for(let y=0;y<n;++y)for(let x=0;x<t;++x)for(let _=0;_<e;++_)m=y*(e*t)+x*e+_,v=_-u,g=x-d,b=y-f,i(v,g,b)<0?c[m]=255:c[m]=0;return c}static createSphere(e,t,n,i,r="uint8"){return ui.createVolume(e,t,n,(a,c,u)=>Math.sqrt(a*a+c*c+u*u)-i,r)}static createCylinder(e,t,n,i,r,a="uint8"){let c,u,d,f;return ui.createVolume(e,t,n,(m,v,g)=>(c=Math.abs(Math.sqrt(m*m+g*g))-i,u=Math.abs(v)-r,d=Math.max(c,0),f=Math.max(u,0),Math.min(Math.max(c,u),0)+Math.sqrt(d*d+f*f)),a)}static createTorus(e,t,n,i,r,a="uint8"){let c,u;return ui.createVolume(e,t,n,(d,f,m)=>(c=Math.sqrt(d*d+m*m)-i,u=f,Math.sqrt(c*c+u*u)-r),a)}static createCone(e,t,n,i,r,a="uint8"){let c;return ui.createVolume(e,t,n,(u,d,f)=>(c=Math.sqrt(u*u+d*d),i*c+r*f),a)}static concatenateArrays(e,t){if(e.length===0)throw new Error("Cannot concatenate empty array list");const n=e.reduce((a,c)=>a+c.length,0),i=new Nr[t](n);let r=0;for(const a of e)i.set(a,r),r+=a.length;return i}}const eM=s=>s.data!==void 0;class tM extends Error{constructor(e,t={}){super(`Node not found: ${e}`,t),this.name="NodeNotFoundError"}}class nM extends Error{constructor(e){super(`Missing key: ${e}`),this.name="KeyError"}}const iM="modulepreload",sM=function(s){return"/"+s},Jd={},ls=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){let a=function(d){return Promise.all(d.map(f=>Promise.resolve(f).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),u=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));i=a(t.map(d=>{if(d=sM(d),d in Jd)return;Jd[d]=!0;const f=d.endsWith(".css"),m=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${m}`))return;const v=document.createElement("link");if(v.rel=f?"stylesheet":iM,f||(v.as="script"),v.crossOrigin="",v.href=d,u&&v.setAttribute("nonce",u),document.head.appendChild(v),f)return new Promise((g,b)=>{v.addEventListener("load",g),v.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${d}`)))})}))}function r(a){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a}return i.then(a=>{for(const c of a||[])c.status==="rejected"&&r(c.reason);return e().catch(r)})},rM=[EvalError,RangeError,ReferenceError,SyntaxError,TypeError,URIError,globalThis.DOMException,globalThis.AssertionError,globalThis.SystemError].filter(Boolean).map(s=>[s.name,s]),ya=new Map(rM);class ah extends Error{constructor(t){super(ah._prepareSuperMessage(t));yu(this,"name","NonError")}static _prepareSuperMessage(t){try{return JSON.stringify(t)}catch{return String(t)}}}const oM=[{property:"name",enumerable:!1},{property:"message",enumerable:!1},{property:"stack",enumerable:!1},{property:"code",enumerable:!0},{property:"cause",enumerable:!1}],Uc=new WeakSet,aM=s=>{Uc.add(s);const e=s.toJSON();return Uc.delete(s),e},lf=s=>ya.get(s)??Error,cf=({from:s,seen:e,to:t,forceEnumerable:n,maxDepth:i,depth:r,useToJSON:a,serialize:c})=>{if(!t)if(Array.isArray(s))t=[];else if(Qd(s)){const d=lf(s.name);t=new d}else t={};if(e.push(s),r>=i)return t;if(a&&typeof s.toJSON=="function"&&!Uc.has(s))return aM(s);const u=d=>cf({from:d,seen:[...e],forceEnumerable:n,maxDepth:i,depth:r,useToJSON:a,serialize:c});for(const[d,f]of Object.entries(s)){if(f&&f instanceof Uint8Array&&f.constructor.name==="Buffer"){t[d]="[object Buffer]";continue}if(f!==null&&typeof f=="object"&&typeof f.pipe=="function"){t[d]="[object Stream]";continue}if(typeof f!="function"){if(!f||typeof f!="object"){try{t[d]=f}catch{}continue}if(!e.includes(s[d])){r++,t[d]=u(s[d]);continue}t[d]="[Circular]"}}for(const{property:d,enumerable:f}of oM)typeof s[d]<"u"&&s[d]!==null&&Object.defineProperty(t,d,{value:Qd(s[d])?u(s[d]):s[d],enumerable:n?!0:f,configurable:!0,writable:!0});return t};function hf(s,e={}){const{maxDepth:t=Number.POSITIVE_INFINITY}=e;if(s instanceof Error)return s;if(lM(s)){const n=lf(s.name);return cf({from:s,seen:[],to:new n,maxDepth:t,depth:0,serialize:!1})}return new ah(s)}function Qd(s){return!!s&&typeof s=="object"&&"name"in s&&"message"in s&&"stack"in s}function lM(s){return!!s&&typeof s=="object"&&"message"in s&&!Array.isArray(s)}var ha=(s=>(s.UNKNOWN="unknown",s.NOT_FOUND="not_found",s.TOO_LARGE="too_large",s.LOAD_DATA_FAILED="load_data_failed",s.INVALID_METADATA="invalid_metadata",s.INVALID_MULTI_SOURCE_ZARR="invalid_multi_source_zarr",s))(ha||{});class ua extends Error{constructor(e,t){super(e,t),this.name="VolumeLoadError",this.type=(t==null?void 0:t.type)??"unknown"}}ya.set("NodeNotFoundError",tM);ya.set("KeyError",nM);ya.set("VolumeLoadError",ua);function ep(s="Unknown error occurred while loading volume data",e="unknown",t){return n=>{throw n instanceof ua?n:(console.log(`Error loading volume data: ${n}`),new ua(s,{type:e,cause:n}))}}const uf=s=>{const e=s.pixel_size_x*s.width/s.tile_width,t=s.pixel_size_y*s.height/s.tile_height,n=s.pixel_size_z;return[e,t,n]},cM=s=>{var r,a;const[e,t,n]=uf(s),i=((r=s.transform)==null?void 0:r.translation)??[0,0,0];return i[0]=i[0]*s.tile_width/s.width,i[1]=i[1]*s.tile_height/s.height,{name:s.name,atlasTileDims:[s.cols,s.rows],subregionSize:[s.tile_width,s.tile_height,s.tiles],subregionOffset:[0,0,0],numChannelsPerSource:s.images.map(c=>c.channels.length),channelNames:s.channel_names,channelColors:s.channel_colors,multiscaleLevel:0,multiscaleLevelDims:[{shape:[s.times||1,s.channels,s.tiles,s.tile_height,s.tile_width],spacing:[s.time_scale||1,1,n,t,e],spaceUnit:s.pixel_size_unit||"μm",timeUnit:s.time_unit||"s",dataType:"uint8"}],transform:{translation:i,rotation:(a=s.transform)!=null&&a.rotation?s.transform.rotation:[0,0,0],scale:[1,1,1]},userData:{...s.userData,originalVolumeSize:[s.width,s.height,s.tiles],originalPhysicalPixelSize:[s.pixel_size_x,s.pixel_size_y,s.pixel_size_z]}}};class wa extends Wr{constructor(e,t){super(),this.syncChannels=!1,Array.isArray(e)?this.urls=e:this.urls=[e],this.jsonInfo=new Array(this.urls.length),this.cache=t}async getJsonImageInfo(e){const t=this.jsonInfo[e];if(t)return t;const i=await(await fetch(this.urls[e])).json();return i.pixel_size_unit=i.pixel_size_unit||"μm",i.times=i.times||this.urls.length,this.jsonInfo[e]=i,i}syncMultichannelLoading(e){this.syncChannels=e}async loadDims(e){const t=await this.getJsonImageInfo(e.time),[n,i,r]=uf(t);return[{shape:[t.times||1,t.channels,t.tiles,t.tile_height,t.tile_width],spacing:[1,1,r,i,n],spaceUnit:t.pixel_size_unit??"μm",dataType:"uint8",timeUnit:t.time_unit??"s"}]}async createImageInfo(e){const t=await this.getJsonImageInfo(e.time);return{imageInfo:cM(t),loadSpec:e}}async loadRawChannelData(e,t,n,i){const r=await this.getJsonImageInfo(t.time);let a=r==null?void 0:r.images;if(!a)return;const c=t.channels;c&&(a=a.filter(({channels:g})=>g.some(b=>c.includes(b))));const u=this.urls[t.time].replace(/[^/]*$/,"");a=a.map(g=>({...g,name:u+g.name}));const d={...t,subregion:new vn(new L(0,0,0),new L(1,1,1)),multiscaleLevel:0,channels:a.flatMap(({channels:g})=>g)};n(void 0,d);const[f,m]=rf(e),v=(g,b,y,x)=>i(g,b,y,x,[f,m]);await wa.loadVolumeAtlasData(a,v,this.cache,this.syncChannels)}static async loadVolumeAtlasData(e,t,n,i=!1){const r=[],a=[],c=[],u=[],d=e.map(async f=>{let m=!0;for(let P=0;P<Math.min(f.channels.length,4);++P){const D=f.channels[P],O=n==null?void 0:n.get(`${f.name}/${D}`);if(O&&!eM(O)){const U=new Uint8Array(O);i?(r.push(D),a.push("uint8"),c.push(U),u.push(Br(U))):t([D],["uint8"],[U],[Br(U)])}else{m=!1;break}}if(m)return;const g=await(await fetch(f.name,{mode:"cors"})).blob(),b=await createImageBitmap(g),x=new OffscreenCanvas(b.width,b.height).getContext("2d");if(!x){console.log("Error creating canvas 2d context for "+f.name);return}x.globalCompositeOperation="copy",x.globalAlpha=1,x.drawImage(b,0,0);const _=x.getImageData(0,0,b.width,b.height),w=[],E=b.width*b.height;for(let P=0;P<Math.min(f.channels.length,4);++P)w.push(new Uint8Array(E));const S=[];for(let P=0;P<Math.min(f.channels.length,4);++P){let D=1/0,O=-1/0;for(let U=0;U<E;U++)w[P][U]=_.data[U*4+P],D=Math.min(D,w[P][U]),O=Math.max(O,w[P][U]);S[P]=[D,O]}for(let P=0;P<Math.min(f.channels.length,4);++P){const D=f.channels[P];n==null||n.insert(`${f.name}/${D}`,w[P]),i?(r.push(D),a.push("uint8"),c.push(w[P]),u.push(S[P])):t([D],["uint8"],[w[P]],[S[P]],[b.width,b.height])}});await Promise.all(d),i&&t(r,a,c,u)}}function hM(s){switch(s){case"uint8":case"int8":return 1;case"uint16":case"int16":return 2;case"uint32":case"int32":case"float32":return 4;case"float64":return 8;default:throw new Error(`Unsupported dtype: ${s}`)}}const uM=(s,e)=>{const t=Dc(s.sizeZ,s.sizeX,s.sizeY);return{name:s.name,atlasTileDims:[t.x,t.y],subregionSize:[s.sizeX,s.sizeY,s.sizeZ],subregionOffset:[0,0,0],numChannelsPerSource:[s.sizeC],channelNames:s.channelNames,channelColors:void 0,multiscaleLevel:0,multiscaleLevelDims:[{shape:[1,s.sizeC,s.sizeZ,s.sizeY,s.sizeX],spacing:[1,1,s.physicalPixelSize[2],s.physicalPixelSize[1],s.physicalPixelSize[0]],spaceUnit:s.spatialUnit||"μm",timeUnit:"s",dataType:e}],transform:{translation:[0,0,0],rotation:[0,0,0],scale:[1,1,1]},userData:s.userData}};class dM extends Wr{constructor(e,t){if(super(),this.jsonInfo=t,this.data=e,this.data.shape[0]!==this.jsonInfo.sizeC||this.data.shape[1]!==this.jsonInfo.sizeZ||this.data.shape[2]!==this.jsonInfo.sizeY||this.data.shape[3]!==this.jsonInfo.sizeX)throw new Error("RawArrayLoader: data shape does not match metadata")}async loadDims(e){const t=this.jsonInfo;return[{shape:[1,t.sizeC,t.sizeZ,t.sizeY,t.sizeX],spacing:[1,1,t.physicalPixelSize[2],t.physicalPixelSize[1],t.physicalPixelSize[0]],spaceUnit:t.spatialUnit||"μm",dataType:this.data.dtype,timeUnit:"s"}]}async createImageInfo(e){return{imageInfo:uM(this.jsonInfo,this.data.dtype),loadSpec:e}}loadRawChannelData(e,t,n,i){const r=t.channels,a={...t,subregion:new vn(new L(0,0,0),new L(1,1,1)),multiscaleLevel:0};n(void 0,a);const c=e.numChannelsPerSource.reduce((u,d)=>u+d,0);for(let u=0;u<c;++u){if(r&&r.length>0&&!r.includes(u))continue;const d=this.data.shape[3]*this.data.shape[2]*this.data.shape[1],f=Nr[this.data.dtype],m=new f(this.data.buffer.buffer,u*d*hM(this.data.dtype),d),v=Br(m);i([u],[this.data.dtype],[m],[v])}return Promise.resolve()}}function Kt(s){return(e,...t)=>pM(s,e,t)}function or(s,e){return Kt(df(s,e).get)}const{apply:pM,getOwnPropertyDescriptor:df,getPrototypeOf:lh,ownKeys:fM}=Reflect,{iterator:Xr,toStringTag:mM}=Symbol,gM=Object,{create:ch,defineProperty:vM}=gM,_M=Array,xM=_M.prototype,pf=xM[Xr],bM=Kt(pf),ff=ArrayBuffer,yM=ff.prototype;or(yM,"byteLength");const tp=typeof SharedArrayBuffer<"u"?SharedArrayBuffer:null;tp&&or(tp.prototype,"byteLength");const mf=lh(Uint8Array);mf.from;const hn=mf.prototype;hn[Xr];Kt(hn.keys);Kt(hn.values);Kt(hn.entries);Kt(hn.set);Kt(hn.reverse);Kt(hn.fill);Kt(hn.copyWithin);Kt(hn.sort);Kt(hn.slice);Kt(hn.subarray);or(hn,"buffer");or(hn,"byteOffset");or(hn,"length");or(hn,mM);const wM=Uint8Array,gf=Uint16Array,hh=Uint32Array,SM=Float32Array,zr=lh([][Xr]()),vf=Kt(zr.next),MM=Kt(function*(){}().next),EM=lh(zr),AM=DataView.prototype,CM=Kt(AM.getUint16),uh=WeakMap,_f=uh.prototype,xf=Kt(_f.get),TM=Kt(_f.set),bf=new uh,RM=ch(null,{next:{value:function(){const e=xf(bf,this);return vf(e)}},[Xr]:{value:function(){return this}}});function PM(s){if(s[Xr]===pf&&zr.next===vf)return s;const e=ch(RM);return TM(bf,e,bM(s)),e}const IM=new uh,LM=ch(EM,{next:{value:function(){const e=xf(IM,this);return MM(e)},writable:!0,configurable:!0}});for(const s of fM(zr))s!=="next"&&vM(LM,s,df(zr,s));const yf=new ff(4),DM=new SM(yf),UM=new hh(yf),Gn=new gf(512),Hn=new wM(512);for(let s=0;s<256;++s){const e=s-127;e<-24?(Gn[s]=0,Gn[s|256]=32768,Hn[s]=24,Hn[s|256]=24):e<-14?(Gn[s]=1024>>-e-14,Gn[s|256]=1024>>-e-14|32768,Hn[s]=-e-1,Hn[s|256]=-e-1):e<=15?(Gn[s]=e+15<<10,Gn[s|256]=e+15<<10|32768,Hn[s]=13,Hn[s|256]=13):e<128?(Gn[s]=31744,Gn[s|256]=64512,Hn[s]=24,Hn[s|256]=24):(Gn[s]=31744,Gn[s|256]=64512,Hn[s]=13,Hn[s|256]=13)}const dh=new hh(2048);for(let s=1;s<1024;++s){let e=s<<13,t=0;for(;(e&8388608)===0;)e<<=1,t-=8388608;e&=-8388609,t+=947912704,dh[s]=e|t}for(let s=1024;s<2048;++s)dh[s]=939524096+(s-1024<<13);const ar=new hh(64);for(let s=1;s<31;++s)ar[s]=s<<23;ar[31]=1199570944;ar[32]=2147483648;for(let s=33;s<63;++s)ar[s]=2147483648+(s-32<<23);ar[63]=3347054592;const wf=new gf(64);for(let s=1;s<64;++s)s!==32&&(wf[s]=1024);function NM(s){const e=s>>10;return UM[0]=dh[wf[e]+(s&1023)]+ar[e],DM[0]}function Sf(s,e,...t){return NM(CM(s,e,...PM(t)))}var Uo={exports:{}},np;function OM(){if(np)return Uo.exports;np=1;function s(e,t,n){const i=n&&n.debug||!1;i&&console.log("[xml-utils] getting "+t+" in "+e);const r=typeof e=="object"?e.outer:e,a=r.slice(0,r.indexOf(">")+1),c=['"',"'"];for(let u=0;u<c.length;u++){const d=c[u],f=t+"\\="+d+"([^"+d+"]*)"+d;i&&console.log("[xml-utils] pattern:",f);const v=new RegExp(f).exec(a);if(i&&console.log("[xml-utils] match:",v),v)return v[1]}}return Uo.exports=s,Uo.exports.default=s,Uo.exports}var FM=OM();const Hl=oh(FM);var No={exports:{}},Oo={exports:{}},Fo={exports:{}},ip;function BM(){if(ip)return Fo.exports;ip=1;function s(e,t,n){const r=new RegExp(t).exec(e.slice(n));return r?n+r.index:-1}return Fo.exports=s,Fo.exports.default=s,Fo.exports}var Bo={exports:{}},sp;function kM(){if(sp)return Bo.exports;sp=1;function s(e,t,n){const r=new RegExp(t).exec(e.slice(n));return r?n+r.index+r[0].length-1:-1}return Bo.exports=s,Bo.exports.default=s,Bo.exports}var ko={exports:{}},rp;function zM(){if(rp)return ko.exports;rp=1;function s(e,t){const n=new RegExp(t,"g"),i=e.match(n);return i?i.length:0}return ko.exports=s,ko.exports.default=s,ko.exports}var op;function VM(){if(op)return Oo.exports;op=1;const s=BM(),e=kM(),t=zM();function n(i,r,a){const c=a&&a.debug||!1,u=!(a&&typeof a.nested===!1),d=a&&a.startIndex||0;c&&console.log("[xml-utils] starting findTagByName with",r," and ",a);const f=s(i,`<${r}[ 
>/]`,d);if(c&&console.log("[xml-utils] start:",f),f===-1)return;const m=i.slice(f+r.length);let v=e(m,"^[^<]*[ /]>",0);const g=v!==-1&&m[v-1]==="/";if(c&&console.log("[xml-utils] selfClosing:",g),g===!1)if(u){let _=0,w=1,E=0;for(;(v=e(m,"[ /]"+r+">",_))!==-1;){const S=m.substring(_,v+1);if(w+=t(S,"<"+r+`[ 
	>]`),E+=t(S,"</"+r+">"),E>=w)break;_=v}}else v=e(m,"[ /]"+r+">",0);const b=f+r.length+v+1;if(c&&console.log("[xml-utils] end:",b),b===-1)return;const y=i.slice(f,b);let x;return g?x=null:x=y.slice(y.indexOf(">")+1,y.lastIndexOf("<")),{inner:x,outer:y,start:f,end:b}}return Oo.exports=n,Oo.exports.default=n,Oo.exports}var ap;function GM(){if(ap)return No.exports;ap=1;const s=VM();function e(t,n,i){const r=[],a=i&&i.debug||!1,c=i&&typeof i.nested=="boolean"?i.nested:!0;let u=i&&i.startIndex||0,d;for(;d=s(t,n,{debug:a,startIndex:u});)c?u=d.start+1+n.length:u=d.end,r.push(d);return a&&console.log("findTagsByName found",r.length,"tags"),r}return No.exports=e,No.exports.default=e,No.exports}var HM=GM();const WM=oh(HM),Dr={315:"Artist",258:"BitsPerSample",265:"CellLength",264:"CellWidth",320:"ColorMap",259:"Compression",33432:"Copyright",306:"DateTime",338:"ExtraSamples",266:"FillOrder",289:"FreeByteCounts",288:"FreeOffsets",291:"GrayResponseCurve",290:"GrayResponseUnit",316:"HostComputer",270:"ImageDescription",257:"ImageLength",256:"ImageWidth",271:"Make",281:"MaxSampleValue",280:"MinSampleValue",272:"Model",254:"NewSubfileType",274:"Orientation",262:"PhotometricInterpretation",284:"PlanarConfiguration",296:"ResolutionUnit",278:"RowsPerStrip",277:"SamplesPerPixel",305:"Software",279:"StripByteCounts",273:"StripOffsets",255:"SubfileType",263:"Threshholding",282:"XResolution",283:"YResolution",326:"BadFaxLines",327:"CleanFaxData",343:"ClipPath",328:"ConsecutiveBadFaxLines",433:"Decode",434:"DefaultImageColor",269:"DocumentName",336:"DotRange",321:"HalftoneHints",346:"Indexed",347:"JPEGTables",285:"PageName",297:"PageNumber",317:"Predictor",319:"PrimaryChromaticities",532:"ReferenceBlackWhite",339:"SampleFormat",340:"SMinSampleValue",341:"SMaxSampleValue",559:"StripRowCounts",330:"SubIFDs",292:"T4Options",293:"T6Options",325:"TileByteCounts",323:"TileLength",324:"TileOffsets",322:"TileWidth",301:"TransferFunction",318:"WhitePoint",344:"XClipPathUnits",286:"XPosition",529:"YCbCrCoefficients",531:"YCbCrPositioning",530:"YCbCrSubSampling",345:"YClipPathUnits",287:"YPosition",37378:"ApertureValue",40961:"ColorSpace",36868:"DateTimeDigitized",36867:"DateTimeOriginal",34665:"Exif IFD",36864:"ExifVersion",33434:"ExposureTime",41728:"FileSource",37385:"Flash",40960:"FlashpixVersion",33437:"FNumber",42016:"ImageUniqueID",37384:"LightSource",37500:"MakerNote",37377:"ShutterSpeedValue",37510:"UserComment",33723:"IPTC",34675:"ICC Profile",700:"XMP",42112:"GDAL_METADATA",42113:"GDAL_NODATA",34377:"Photoshop",33550:"ModelPixelScale",33922:"ModelTiepoint",34264:"ModelTransformation",34735:"GeoKeyDirectory",34736:"GeoDoubleParams",34737:"GeoAsciiParams",50674:"LercParameters"},Wn={};for(const s in Dr)Dr.hasOwnProperty(s)&&(Wn[Dr[s]]=parseInt(s,10));const XM=[Wn.BitsPerSample,Wn.ExtraSamples,Wn.SampleFormat,Wn.StripByteCounts,Wn.StripOffsets,Wn.StripRowCounts,Wn.TileByteCounts,Wn.TileOffsets,Wn.SubIFDs],Wl={1:"BYTE",2:"ASCII",3:"SHORT",4:"LONG",5:"RATIONAL",6:"SBYTE",7:"UNDEFINED",8:"SSHORT",9:"SLONG",10:"SRATIONAL",11:"FLOAT",12:"DOUBLE",13:"IFD",16:"LONG8",17:"SLONG8",18:"IFD8"},et={};for(const s in Wl)Wl.hasOwnProperty(s)&&(et[Wl[s]]=parseInt(s,10));const yn={WhiteIsZero:0,BlackIsZero:1,RGB:2,Palette:3,CMYK:5,YCbCr:6,CIELab:8},YM={Unspecified:0},SA={AddCompression:1},MA={None:0,Deflate:1,Zstandard:2},jM={1024:"GTModelTypeGeoKey",1025:"GTRasterTypeGeoKey",1026:"GTCitationGeoKey",2048:"GeographicTypeGeoKey",2049:"GeogCitationGeoKey",2050:"GeogGeodeticDatumGeoKey",2051:"GeogPrimeMeridianGeoKey",2052:"GeogLinearUnitsGeoKey",2053:"GeogLinearUnitSizeGeoKey",2054:"GeogAngularUnitsGeoKey",2055:"GeogAngularUnitSizeGeoKey",2056:"GeogEllipsoidGeoKey",2057:"GeogSemiMajorAxisGeoKey",2058:"GeogSemiMinorAxisGeoKey",2059:"GeogInvFlatteningGeoKey",2060:"GeogAzimuthUnitsGeoKey",2061:"GeogPrimeMeridianLongGeoKey",2062:"GeogTOWGS84GeoKey",3072:"ProjectedCSTypeGeoKey",3073:"PCSCitationGeoKey",3074:"ProjectionGeoKey",3075:"ProjCoordTransGeoKey",3076:"ProjLinearUnitsGeoKey",3077:"ProjLinearUnitSizeGeoKey",3078:"ProjStdParallel1GeoKey",3079:"ProjStdParallel2GeoKey",3080:"ProjNatOriginLongGeoKey",3081:"ProjNatOriginLatGeoKey",3082:"ProjFalseEastingGeoKey",3083:"ProjFalseNorthingGeoKey",3084:"ProjFalseOriginLongGeoKey",3085:"ProjFalseOriginLatGeoKey",3086:"ProjFalseOriginEastingGeoKey",3087:"ProjFalseOriginNorthingGeoKey",3088:"ProjCenterLongGeoKey",3089:"ProjCenterLatGeoKey",3090:"ProjCenterEastingGeoKey",3091:"ProjCenterNorthingGeoKey",3092:"ProjScaleAtNatOriginGeoKey",3093:"ProjScaleAtCenterGeoKey",3094:"ProjAzimuthAngleGeoKey",3095:"ProjStraightVertPoleLongGeoKey",3096:"ProjRectifiedGridAngleGeoKey",4096:"VerticalCSTypeGeoKey",4097:"VerticalCitationGeoKey",4098:"VerticalDatumGeoKey",4099:"VerticalUnitsGeoKey"};function qM(s,e){const{width:t,height:n}=s,i=new Uint8Array(t*n*3);let r;for(let a=0,c=0;a<s.length;++a,c+=3)r=256-s[a]/e*256,i[c]=r,i[c+1]=r,i[c+2]=r;return i}function $M(s,e){const{width:t,height:n}=s,i=new Uint8Array(t*n*3);let r;for(let a=0,c=0;a<s.length;++a,c+=3)r=s[a]/e*256,i[c]=r,i[c+1]=r,i[c+2]=r;return i}function KM(s,e){const{width:t,height:n}=s,i=new Uint8Array(t*n*3),r=e.length/3,a=e.length/3*2;for(let c=0,u=0;c<s.length;++c,u+=3){const d=s[c];i[u]=e[d]/65536*256,i[u+1]=e[d+r]/65536*256,i[u+2]=e[d+a]/65536*256}return i}function ZM(s){const{width:e,height:t}=s,n=new Uint8Array(e*t*3);for(let i=0,r=0;i<s.length;i+=4,r+=3){const a=s[i],c=s[i+1],u=s[i+2],d=s[i+3];n[r]=255*((255-a)/256)*((255-d)/256),n[r+1]=255*((255-c)/256)*((255-d)/256),n[r+2]=255*((255-u)/256)*((255-d)/256)}return n}function JM(s){const{width:e,height:t}=s,n=new Uint8ClampedArray(e*t*3);for(let i=0,r=0;i<s.length;i+=3,r+=3){const a=s[i],c=s[i+1],u=s[i+2];n[r]=a+1.402*(u-128),n[r+1]=a-.34414*(c-128)-.71414*(u-128),n[r+2]=a+1.772*(c-128)}return n}const QM=.95047,eE=1,tE=1.08883;function nE(s){const{width:e,height:t}=s,n=new Uint8Array(e*t*3);for(let i=0,r=0;i<s.length;i+=3,r+=3){const a=s[i+0],c=s[i+1]<<24>>24,u=s[i+2]<<24>>24;let d=(a+16)/116,f=c/500+d,m=d-u/200,v,g,b;f=QM*(f*f*f>.008856?f*f*f:(f-16/116)/7.787),d=eE*(d*d*d>.008856?d*d*d:(d-16/116)/7.787),m=tE*(m*m*m>.008856?m*m*m:(m-16/116)/7.787),v=f*3.2406+d*-1.5372+m*-.4986,g=f*-.9689+d*1.8758+m*.0415,b=f*.0557+d*-.204+m*1.057,v=v>.0031308?1.055*v**(1/2.4)-.055:12.92*v,g=g>.0031308?1.055*g**(1/2.4)-.055:12.92*g,b=b>.0031308?1.055*b**(1/2.4)-.055:12.92*b,n[r]=Math.max(0,Math.min(1,v))*255,n[r+1]=Math.max(0,Math.min(1,g))*255,n[r+2]=Math.max(0,Math.min(1,b))*255}return n}const Mf=new Map;function Vi(s,e){Array.isArray(s)||(s=[s]),s.forEach(t=>Mf.set(t,e))}async function iE(s){const e=Mf.get(s.Compression);if(!e)throw new Error(`Unknown compression method identifier: ${s.Compression}`);const t=await e();return new t(s)}Vi([void 0,1],()=>ls(()=>import("./raw-in9isEBO.js"),__vite__mapDeps([0,1])).then(s=>s.default));Vi(5,()=>ls(()=>import("./lzw-_aCqfs4w.js"),__vite__mapDeps([2,1])).then(s=>s.default));Vi(6,()=>{throw new Error("old style JPEG compression is not supported.")});Vi(7,()=>ls(()=>import("./jpeg-CKYXsxFN.js"),__vite__mapDeps([3,1])).then(s=>s.default));Vi([8,32946],()=>ls(()=>import("./deflate-B9JhHpvg.js"),__vite__mapDeps([4,5,1])).then(s=>s.default));Vi(32773,()=>ls(()=>import("./packbits-DDWKfGV_.js"),__vite__mapDeps([6,1])).then(s=>s.default));Vi(34887,()=>ls(()=>import("./lerc-Dv3aPIzl.js"),__vite__mapDeps([7,5,1])).then(async s=>(await s.zstd.init(),s)).then(s=>s.default));Vi(50001,()=>ls(()=>import("./webimage-DBgUwIbt.js"),__vite__mapDeps([8,1])).then(s=>s.default));function Sa(s,e,t,n=1){return new(Object.getPrototypeOf(s)).constructor(e*t*n)}function sE(s,e,t,n,i){const r=e/n,a=t/i;return s.map(c=>{const u=Sa(c,n,i);for(let d=0;d<i;++d){const f=Math.min(Math.round(a*d),t-1);for(let m=0;m<n;++m){const v=Math.min(Math.round(r*m),e-1),g=c[f*e+v];u[d*n+m]=g}}return u})}function Ys(s,e,t){return(1-t)*s+t*e}function rE(s,e,t,n,i){const r=e/n,a=t/i;return s.map(c=>{const u=Sa(c,n,i);for(let d=0;d<i;++d){const f=a*d,m=Math.floor(f),v=Math.min(Math.ceil(f),t-1);for(let g=0;g<n;++g){const b=r*g,y=b%1,x=Math.floor(b),_=Math.min(Math.ceil(b),e-1),w=c[m*e+x],E=c[m*e+_],S=c[v*e+x],P=c[v*e+_],D=Ys(Ys(w,E,y),Ys(S,P,y),f%1);u[d*n+g]=D}}return u})}function oE(s,e,t,n,i,r="nearest"){switch(r.toLowerCase()){case"nearest":return sE(s,e,t,n,i);case"bilinear":case"linear":return rE(s,e,t,n,i);default:throw new Error(`Unsupported resampling method: '${r}'`)}}function aE(s,e,t,n,i,r){const a=e/n,c=t/i,u=Sa(s,n,i,r);for(let d=0;d<i;++d){const f=Math.min(Math.round(c*d),t-1);for(let m=0;m<n;++m){const v=Math.min(Math.round(a*m),e-1);for(let g=0;g<r;++g){const b=s[f*e*r+v*r+g];u[d*n*r+m*r+g]=b}}}return u}function lE(s,e,t,n,i,r){const a=e/n,c=t/i,u=Sa(s,n,i,r);for(let d=0;d<i;++d){const f=c*d,m=Math.floor(f),v=Math.min(Math.ceil(f),t-1);for(let g=0;g<n;++g){const b=a*g,y=b%1,x=Math.floor(b),_=Math.min(Math.ceil(b),e-1);for(let w=0;w<r;++w){const E=s[m*e*r+x*r+w],S=s[m*e*r+_*r+w],P=s[v*e*r+x*r+w],D=s[v*e*r+_*r+w],O=Ys(Ys(E,S,y),Ys(P,D,y),f%1);u[d*n*r+g*r+w]=O}}}return u}function cE(s,e,t,n,i,r,a="nearest"){switch(a.toLowerCase()){case"nearest":return aE(s,e,t,n,i,r);case"bilinear":case"linear":return lE(s,e,t,n,i,r);default:throw new Error(`Unsupported resampling method: '${a}'`)}}function hE(s,e,t){let n=0;for(let i=e;i<t;++i)n+=s[i];return n}function Nc(s,e,t){switch(s){case 1:if(e<=8)return new Uint8Array(t);if(e<=16)return new Uint16Array(t);if(e<=32)return new Uint32Array(t);break;case 2:if(e===8)return new Int8Array(t);if(e===16)return new Int16Array(t);if(e===32)return new Int32Array(t);break;case 3:switch(e){case 16:case 32:return new Float32Array(t);case 64:return new Float64Array(t)}break}throw Error("Unsupported data format/bitsPerSample")}function uE(s,e){return(s===1||s===2)&&e<=32&&e%8===0?!1:!(s===3&&(e===16||e===32||e===64))}function dE(s,e,t,n,i,r,a){const c=new DataView(s),u=t===2?a*r:a*r*n,d=t===2?1:n,f=Nc(e,i,u),m=parseInt("1".repeat(i),2);if(e===1){let v;t===1?v=n*i:v=i;let g=r*v;(g&7)!==0&&(g=g+7&-8);for(let b=0;b<a;++b){const y=b*g;for(let x=0;x<r;++x){const _=y+x*d*i;for(let w=0;w<d;++w){const E=_+w*i,S=(b*r+x)*d+w,P=Math.floor(E/8),D=E%8;if(D+i<=8)f[S]=c.getUint8(P)>>8-i-D&m;else if(D+i<=16)f[S]=c.getUint16(P)>>16-i-D&m;else if(D+i<=24){const O=c.getUint16(P)<<8|c.getUint8(P+2);f[S]=O>>24-i-D&m}else f[S]=c.getUint32(P)>>32-i-D&m}}}}return f.buffer}class pE{constructor(e,t,n,i,r,a){this.fileDirectory=e,this.geoKeys=t,this.dataView=n,this.littleEndian=i,this.tiles=r?{}:null,this.isTiled=!e.StripOffsets;const c=e.PlanarConfiguration;if(this.planarConfiguration=typeof c>"u"?1:c,this.planarConfiguration!==1&&this.planarConfiguration!==2)throw new Error("Invalid planar configuration.");this.source=a}getFileDirectory(){return this.fileDirectory}getGeoKeys(){return this.geoKeys}getWidth(){return this.fileDirectory.ImageWidth}getHeight(){return this.fileDirectory.ImageLength}getSamplesPerPixel(){return typeof this.fileDirectory.SamplesPerPixel<"u"?this.fileDirectory.SamplesPerPixel:1}getTileWidth(){return this.isTiled?this.fileDirectory.TileWidth:this.getWidth()}getTileHeight(){return this.isTiled?this.fileDirectory.TileLength:typeof this.fileDirectory.RowsPerStrip<"u"?Math.min(this.fileDirectory.RowsPerStrip,this.getHeight()):this.getHeight()}getBlockWidth(){return this.getTileWidth()}getBlockHeight(e){return this.isTiled||(e+1)*this.getTileHeight()<=this.getHeight()?this.getTileHeight():this.getHeight()-e*this.getTileHeight()}getBytesPerPixel(){let e=0;for(let t=0;t<this.fileDirectory.BitsPerSample.length;++t)e+=this.getSampleByteSize(t);return e}getSampleByteSize(e){if(e>=this.fileDirectory.BitsPerSample.length)throw new RangeError(`Sample index ${e} is out of range.`);return Math.ceil(this.fileDirectory.BitsPerSample[e]/8)}getReaderForSample(e){const t=this.fileDirectory.SampleFormat?this.fileDirectory.SampleFormat[e]:1,n=this.fileDirectory.BitsPerSample[e];switch(t){case 1:if(n<=8)return DataView.prototype.getUint8;if(n<=16)return DataView.prototype.getUint16;if(n<=32)return DataView.prototype.getUint32;break;case 2:if(n<=8)return DataView.prototype.getInt8;if(n<=16)return DataView.prototype.getInt16;if(n<=32)return DataView.prototype.getInt32;break;case 3:switch(n){case 16:return function(i,r){return Sf(this,i,r)};case 32:return DataView.prototype.getFloat32;case 64:return DataView.prototype.getFloat64}break}throw Error("Unsupported data format/bitsPerSample")}getSampleFormat(e=0){return this.fileDirectory.SampleFormat?this.fileDirectory.SampleFormat[e]:1}getBitsPerSample(e=0){return this.fileDirectory.BitsPerSample[e]}getArrayForSample(e,t){const n=this.getSampleFormat(e),i=this.getBitsPerSample(e);return Nc(n,i,t)}async getTileOrStrip(e,t,n,i,r){const a=Math.ceil(this.getWidth()/this.getTileWidth()),c=Math.ceil(this.getHeight()/this.getTileHeight());let u;const{tiles:d}=this;this.planarConfiguration===1?u=t*a+e:this.planarConfiguration===2&&(u=n*a*c+t*a+e);let f,m;this.isTiled?(f=this.fileDirectory.TileOffsets[u],m=this.fileDirectory.TileByteCounts[u]):(f=this.fileDirectory.StripOffsets[u],m=this.fileDirectory.StripByteCounts[u]);const v=(await this.source.fetch([{offset:f,length:m}],r))[0];let g;return d===null||!d[u]?(g=(async()=>{let b=await i.decode(this.fileDirectory,v);const y=this.getSampleFormat(),x=this.getBitsPerSample();return uE(y,x)&&(b=dE(b,y,this.planarConfiguration,this.getSamplesPerPixel(),x,this.getTileWidth(),this.getBlockHeight(t))),b})(),d!==null&&(d[u]=g)):g=d[u],{x:e,y:t,sample:n,data:await g}}async _readRaster(e,t,n,i,r,a,c,u,d){const f=this.getTileWidth(),m=this.getTileHeight(),v=this.getWidth(),g=this.getHeight(),b=Math.max(Math.floor(e[0]/f),0),y=Math.min(Math.ceil(e[2]/f),Math.ceil(v/f)),x=Math.max(Math.floor(e[1]/m),0),_=Math.min(Math.ceil(e[3]/m),Math.ceil(g/m)),w=e[2]-e[0];let E=this.getBytesPerPixel();const S=[],P=[];for(let U=0;U<t.length;++U)this.planarConfiguration===1?S.push(hE(this.fileDirectory.BitsPerSample,0,t[U])/8):S.push(0),P.push(this.getReaderForSample(t[U]));const D=[],{littleEndian:O}=this;for(let U=x;U<_;++U)for(let I=b;I<y;++I){let C;this.planarConfiguration===1&&(C=this.getTileOrStrip(I,U,0,r,d));for(let F=0;F<t.length;++F){const Y=F,X=t[F];this.planarConfiguration===2&&(E=this.getSampleByteSize(X),C=this.getTileOrStrip(I,U,X,r,d));const J=C.then(Q=>{const ee=Q.data,ne=new DataView(ee),z=this.getBlockHeight(Q.y),ce=Q.y*m,fe=Q.x*f,me=ce+z,le=(Q.x+1)*f,He=P[Y],j=Math.min(z,z-(me-e[3]),g-ce),ae=Math.min(f,f-(le-e[2]),v-fe);for(let Se=Math.max(0,e[1]-ce);Se<j;++Se)for(let ve=Math.max(0,e[0]-fe);ve<ae;++ve){const Le=(Se*f+ve)*E,Fe=He.call(ne,Le+S[Y],O);let Ge;i?(Ge=(Se+ce-e[1])*w*t.length+(ve+fe-e[0])*t.length+Y,n[Ge]=Fe):(Ge=(Se+ce-e[1])*w+ve+fe-e[0],n[Y][Ge]=Fe)}});D.push(J)}}if(await Promise.all(D),a&&e[2]-e[0]!==a||c&&e[3]-e[1]!==c){let U;return i?U=cE(n,e[2]-e[0],e[3]-e[1],a,c,t.length,u):U=oE(n,e[2]-e[0],e[3]-e[1],a,c,u),U.width=a,U.height=c,U}return n.width=a||e[2]-e[0],n.height=c||e[3]-e[1],n}async readRasters({window:e,samples:t=[],interleave:n,pool:i=null,width:r,height:a,resampleMethod:c,fillValue:u,signal:d}={}){const f=e||[0,0,this.getWidth(),this.getHeight()];if(f[0]>f[2]||f[1]>f[3])throw new Error("Invalid subsets");const m=f[2]-f[0],v=f[3]-f[1],g=m*v,b=this.getSamplesPerPixel();if(!t||!t.length)for(let w=0;w<b;++w)t.push(w);else for(let w=0;w<t.length;++w)if(t[w]>=b)return Promise.reject(new RangeError(`Invalid sample index '${t[w]}'.`));let y;if(n){const w=this.fileDirectory.SampleFormat?Math.max.apply(null,this.fileDirectory.SampleFormat):1,E=Math.max.apply(null,this.fileDirectory.BitsPerSample);y=Nc(w,E,g*t.length),u&&y.fill(u)}else{y=[];for(let w=0;w<t.length;++w){const E=this.getArrayForSample(t[w],g);Array.isArray(u)&&w<u.length?E.fill(u[w]):u&&!Array.isArray(u)&&E.fill(u),y.push(E)}}const x=i||await iE(this.fileDirectory);return await this._readRaster(f,t,y,n,x,r,a,c,d)}async readRGB({window:e,interleave:t=!0,pool:n=null,width:i,height:r,resampleMethod:a,enableAlpha:c=!1,signal:u}={}){const d=e||[0,0,this.getWidth(),this.getHeight()];if(d[0]>d[2]||d[1]>d[3])throw new Error("Invalid subsets");const f=this.fileDirectory.PhotometricInterpretation;if(f===yn.RGB){let _=[0,1,2];if(this.fileDirectory.ExtraSamples!==YM.Unspecified&&c){_=[];for(let w=0;w<this.fileDirectory.BitsPerSample.length;w+=1)_.push(w)}return this.readRasters({window:e,interleave:t,samples:_,pool:n,width:i,height:r,resampleMethod:a,signal:u})}let m;switch(f){case yn.WhiteIsZero:case yn.BlackIsZero:case yn.Palette:m=[0];break;case yn.CMYK:m=[0,1,2,3];break;case yn.YCbCr:case yn.CIELab:m=[0,1,2];break;default:throw new Error("Invalid or unsupported photometric interpretation.")}const v={window:d,interleave:!0,samples:m,pool:n,width:i,height:r,resampleMethod:a,signal:u},{fileDirectory:g}=this,b=await this.readRasters(v),y=2**this.fileDirectory.BitsPerSample[0];let x;switch(f){case yn.WhiteIsZero:x=qM(b,y);break;case yn.BlackIsZero:x=$M(b,y);break;case yn.Palette:x=KM(b,g.ColorMap);break;case yn.CMYK:x=ZM(b);break;case yn.YCbCr:x=JM(b);break;case yn.CIELab:x=nE(b);break;default:throw new Error("Unsupported photometric interpretation.")}if(!t){const _=new Uint8Array(x.length/3),w=new Uint8Array(x.length/3),E=new Uint8Array(x.length/3);for(let S=0,P=0;S<x.length;S+=3,++P)_[P]=x[S],w[P]=x[S+1],E[P]=x[S+2];x=[_,w,E]}return x.width=b.width,x.height=b.height,x}getTiePoints(){if(!this.fileDirectory.ModelTiepoint)return[];const e=[];for(let t=0;t<this.fileDirectory.ModelTiepoint.length;t+=6)e.push({i:this.fileDirectory.ModelTiepoint[t],j:this.fileDirectory.ModelTiepoint[t+1],k:this.fileDirectory.ModelTiepoint[t+2],x:this.fileDirectory.ModelTiepoint[t+3],y:this.fileDirectory.ModelTiepoint[t+4],z:this.fileDirectory.ModelTiepoint[t+5]});return e}getGDALMetadata(e=null){const t={};if(!this.fileDirectory.GDAL_METADATA)return null;const n=this.fileDirectory.GDAL_METADATA;let i=WM(n,"Item");e===null?i=i.filter(r=>Hl(r,"sample")===void 0):i=i.filter(r=>Number(Hl(r,"sample"))===e);for(let r=0;r<i.length;++r){const a=i[r];t[Hl(a,"name")]=a.inner}return t}getGDALNoData(){if(!this.fileDirectory.GDAL_NODATA)return null;const e=this.fileDirectory.GDAL_NODATA;return Number(e.substring(0,e.length-1))}getOrigin(){const e=this.fileDirectory.ModelTiepoint,t=this.fileDirectory.ModelTransformation;if(e&&e.length===6)return[e[3],e[4],e[5]];if(t)return[t[3],t[7],t[11]];throw new Error("The image does not have an affine transformation.")}getResolution(e=null){const t=this.fileDirectory.ModelPixelScale,n=this.fileDirectory.ModelTransformation;if(t)return[t[0],-t[1],t[2]];if(n)return n[1]===0&&n[4]===0?[n[0],-n[5],n[10]]:[Math.sqrt(n[0]*n[0]+n[4]*n[4]),-Math.sqrt(n[1]*n[1]+n[5]*n[5]),n[10]];if(e){const[i,r,a]=e.getResolution();return[i*e.getWidth()/this.getWidth(),r*e.getHeight()/this.getHeight(),a*e.getWidth()/this.getWidth()]}throw new Error("The image does not have an affine transformation.")}pixelIsArea(){return this.geoKeys.GTRasterTypeGeoKey===1}getBoundingBox(e=!1){const t=this.getHeight(),n=this.getWidth();if(this.fileDirectory.ModelTransformation&&!e){const[i,r,a,c,u,d,f,m]=this.fileDirectory.ModelTransformation,g=[[0,0],[0,t],[n,0],[n,t]].map(([x,_])=>[c+i*x+r*_,m+u*x+d*_]),b=g.map(x=>x[0]),y=g.map(x=>x[1]);return[Math.min(...b),Math.min(...y),Math.max(...b),Math.max(...y)]}else{const i=this.getOrigin(),r=this.getResolution(),a=i[0],c=i[1],u=a+r[0]*n,d=c+r[1]*t;return[Math.min(a,u),Math.min(c,d),Math.max(a,u),Math.max(c,d)]}}}class fE{constructor(e){this._dataView=new DataView(e)}get buffer(){return this._dataView.buffer}getUint64(e,t){const n=this.getUint32(e,t),i=this.getUint32(e+4,t);let r;if(t){if(r=n+2**32*i,!Number.isSafeInteger(r))throw new Error(`${r} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`);return r}if(r=2**32*n+i,!Number.isSafeInteger(r))throw new Error(`${r} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`);return r}getInt64(e,t){let n=0;const i=(this._dataView.getUint8(e+(t?7:0))&128)>0;let r=!0;for(let a=0;a<8;a++){let c=this._dataView.getUint8(e+(t?a:7-a));i&&(r?c!==0&&(c=~(c-1)&255,r=!1):c=~c&255),n+=c*256**a}return i&&(n=-n),n}getUint8(e,t){return this._dataView.getUint8(e,t)}getInt8(e,t){return this._dataView.getInt8(e,t)}getUint16(e,t){return this._dataView.getUint16(e,t)}getInt16(e,t){return this._dataView.getInt16(e,t)}getUint32(e,t){return this._dataView.getUint32(e,t)}getInt32(e,t){return this._dataView.getInt32(e,t)}getFloat16(e,t){return Sf(this._dataView,e,t)}getFloat32(e,t){return this._dataView.getFloat32(e,t)}getFloat64(e,t){return this._dataView.getFloat64(e,t)}}class mE{constructor(e,t,n,i){this._dataView=new DataView(e),this._sliceOffset=t,this._littleEndian=n,this._bigTiff=i}get sliceOffset(){return this._sliceOffset}get sliceTop(){return this._sliceOffset+this.buffer.byteLength}get littleEndian(){return this._littleEndian}get bigTiff(){return this._bigTiff}get buffer(){return this._dataView.buffer}covers(e,t){return this.sliceOffset<=e&&this.sliceTop>=e+t}readUint8(e){return this._dataView.getUint8(e-this._sliceOffset,this._littleEndian)}readInt8(e){return this._dataView.getInt8(e-this._sliceOffset,this._littleEndian)}readUint16(e){return this._dataView.getUint16(e-this._sliceOffset,this._littleEndian)}readInt16(e){return this._dataView.getInt16(e-this._sliceOffset,this._littleEndian)}readUint32(e){return this._dataView.getUint32(e-this._sliceOffset,this._littleEndian)}readInt32(e){return this._dataView.getInt32(e-this._sliceOffset,this._littleEndian)}readFloat32(e){return this._dataView.getFloat32(e-this._sliceOffset,this._littleEndian)}readFloat64(e){return this._dataView.getFloat64(e-this._sliceOffset,this._littleEndian)}readUint64(e){const t=this.readUint32(e),n=this.readUint32(e+4);let i;if(this._littleEndian){if(i=t+2**32*n,!Number.isSafeInteger(i))throw new Error(`${i} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`);return i}if(i=2**32*t+n,!Number.isSafeInteger(i))throw new Error(`${i} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`);return i}readInt64(e){let t=0;const n=(this._dataView.getUint8(e+(this._littleEndian?7:0))&128)>0;let i=!0;for(let r=0;r<8;r++){let a=this._dataView.getUint8(e+(this._littleEndian?r:7-r));n&&(i?a!==0&&(a=~(a-1)&255,i=!1):a=~a&255),t+=a*256**r}return n&&(t=-t),t}readOffset(e){return this._bigTiff?this.readUint64(e):this.readUint32(e)}}const lp=`\r
\r
`;function Ef(s){if(typeof Object.fromEntries<"u")return Object.fromEntries(s);const e={};for(const[t,n]of s)e[t.toLowerCase()]=n;return e}function gE(s){const e=s.split(`\r
`).map(t=>{const n=t.split(":").map(i=>i.trim());return n[0]=n[0].toLowerCase(),n});return Ef(e)}function vE(s){const[e,...t]=s.split(";").map(i=>i.trim()),n=t.map(i=>i.split("="));return{type:e,params:Ef(n)}}function Oc(s){let e,t,n;return s&&([,e,t,n]=s.match(/bytes (\d+)-(\d+)\/(\d+)/),e=parseInt(e,10),t=parseInt(t,10),n=parseInt(n,10)),{start:e,end:t,total:n}}function _E(s,e){let t=null;const n=new TextDecoder("ascii"),i=[],r=`--${e}`,a=`${r}--`;for(let c=0;c<10;++c)n.decode(new Uint8Array(s,c,r.length))===r&&(t=c);if(t===null)throw new Error("Could not find initial boundary");for(;t<s.byteLength;){const c=n.decode(new Uint8Array(s,t,Math.min(r.length+1024,s.byteLength-t)));if(c.length===0||c.startsWith(a))break;if(!c.startsWith(r))throw new Error("Part does not start with boundary");const u=c.substr(r.length+2);if(u.length===0)break;const d=u.indexOf(lp),f=gE(u.substr(0,d)),{start:m,end:v,total:g}=Oc(f["content-range"]),b=t+r.length+d+lp.length,y=parseInt(v,10)+1-parseInt(m,10);i.push({headers:f,data:s.slice(b,b+y),offset:m,length:y,fileSize:g}),t=b+y+4}return i}class Af{async fetch(e,t=void 0){return Promise.all(e.map(n=>this.fetchSlice(n,t)))}async fetchSlice(e){throw new Error(`fetching of slice ${e} not possible, not implemented`)}get fileSize(){return null}async close(){}}class xE extends Map{constructor(e={}){if(super(),!(e.maxSize&&e.maxSize>0))throw new TypeError("`maxSize` must be a number greater than 0");if(typeof e.maxAge=="number"&&e.maxAge===0)throw new TypeError("`maxAge` must be a number greater than 0");this.maxSize=e.maxSize,this.maxAge=e.maxAge||Number.POSITIVE_INFINITY,this.onEviction=e.onEviction,this.cache=new Map,this.oldCache=new Map,this._size=0}_emitEvictions(e){if(typeof this.onEviction=="function")for(const[t,n]of e)this.onEviction(t,n.value)}_deleteIfExpired(e,t){return typeof t.expiry=="number"&&t.expiry<=Date.now()?(typeof this.onEviction=="function"&&this.onEviction(e,t.value),this.delete(e)):!1}_getOrDeleteIfExpired(e,t){if(this._deleteIfExpired(e,t)===!1)return t.value}_getItemValue(e,t){return t.expiry?this._getOrDeleteIfExpired(e,t):t.value}_peek(e,t){const n=t.get(e);return this._getItemValue(e,n)}_set(e,t){this.cache.set(e,t),this._size++,this._size>=this.maxSize&&(this._size=0,this._emitEvictions(this.oldCache),this.oldCache=this.cache,this.cache=new Map)}_moveToRecent(e,t){this.oldCache.delete(e),this._set(e,t)}*_entriesAscending(){for(const e of this.oldCache){const[t,n]=e;this.cache.has(t)||this._deleteIfExpired(t,n)===!1&&(yield e)}for(const e of this.cache){const[t,n]=e;this._deleteIfExpired(t,n)===!1&&(yield e)}}get(e){if(this.cache.has(e)){const t=this.cache.get(e);return this._getItemValue(e,t)}if(this.oldCache.has(e)){const t=this.oldCache.get(e);if(this._deleteIfExpired(e,t)===!1)return this._moveToRecent(e,t),t.value}}set(e,t,{maxAge:n=this.maxAge}={}){const i=typeof n=="number"&&n!==Number.POSITIVE_INFINITY?Date.now()+n:void 0;return this.cache.has(e)?this.cache.set(e,{value:t,expiry:i}):this._set(e,{value:t,expiry:i}),this}has(e){return this.cache.has(e)?!this._deleteIfExpired(e,this.cache.get(e)):this.oldCache.has(e)?!this._deleteIfExpired(e,this.oldCache.get(e)):!1}peek(e){if(this.cache.has(e))return this._peek(e,this.cache);if(this.oldCache.has(e))return this._peek(e,this.oldCache)}delete(e){const t=this.cache.delete(e);return t&&this._size--,this.oldCache.delete(e)||t}clear(){this.cache.clear(),this.oldCache.clear(),this._size=0}resize(e){if(!(e&&e>0))throw new TypeError("`maxSize` must be a number greater than 0");const t=[...this._entriesAscending()],n=t.length-e;n<0?(this.cache=new Map(t),this.oldCache=new Map,this._size=t.length):(n>0&&this._emitEvictions(t.slice(0,n)),this.oldCache=new Map(t.slice(n)),this.cache=new Map,this._size=0),this.maxSize=e}*keys(){for(const[e]of this)yield e}*values(){for(const[,e]of this)yield e}*[Symbol.iterator](){for(const e of this.cache){const[t,n]=e;this._deleteIfExpired(t,n)===!1&&(yield[t,n.value])}for(const e of this.oldCache){const[t,n]=e;this.cache.has(t)||this._deleteIfExpired(t,n)===!1&&(yield[t,n.value])}}*entriesDescending(){let e=[...this.cache];for(let t=e.length-1;t>=0;--t){const n=e[t],[i,r]=n;this._deleteIfExpired(i,r)===!1&&(yield[i,r.value])}e=[...this.oldCache];for(let t=e.length-1;t>=0;--t){const n=e[t],[i,r]=n;this.cache.has(i)||this._deleteIfExpired(i,r)===!1&&(yield[i,r.value])}}*entriesAscending(){for(const[e,t]of this._entriesAscending())yield[e,t.value]}get size(){if(!this._size)return this.oldCache.size;let e=0;for(const t of this.oldCache.keys())this.cache.has(t)||e++;return Math.min(this._size+e,this.maxSize)}entries(){return this.entriesAscending()}forEach(e,t=this){for(const[n,i]of this.entriesAscending())e.call(t,i,n,this)}get[Symbol.toStringTag](){return JSON.stringify([...this.entriesAscending()])}}async function bE(s){return new Promise(e=>setTimeout(e,s))}function yE(s,e){const t=Array.isArray(s)?s:Array.from(s),n=Array.isArray(e)?e:Array.from(e);return t.map((i,r)=>[i,n[r]])}class ir extends Error{constructor(e){super(e),Error.captureStackTrace&&Error.captureStackTrace(this,ir),this.name="AbortError"}}class wE extends Error{constructor(e,t){super(t),this.errors=e,this.message=t,this.name="AggregateError"}}const SE=wE;class ME{constructor(e,t,n=null){this.offset=e,this.length=t,this.data=n}get top(){return this.offset+this.length}}class cp{constructor(e,t,n){this.offset=e,this.length=t,this.blockIds=n}}class EE extends Af{constructor(e,{blockSize:t=65536,cacheSize:n=100}={}){super(),this.source=e,this.blockSize=t,this.blockCache=new xE({maxSize:n,onEviction:(i,r)=>{this.evictedBlocks.set(i,r)}}),this.evictedBlocks=new Map,this.blockRequests=new Map,this.blockIdsToFetch=new Set,this.abortedBlockIds=new Set}get fileSize(){return this.source.fileSize}async fetch(e,t){const n=[],i=[],r=[];this.evictedBlocks.clear();for(const{offset:v,length:g}of e){let b=v+g;const{fileSize:y}=this;y!==null&&(b=Math.min(b,y));const x=Math.floor(v/this.blockSize)*this.blockSize;for(let _=x;_<b;_+=this.blockSize){const w=Math.floor(_/this.blockSize);!this.blockCache.has(w)&&!this.blockRequests.has(w)&&(this.blockIdsToFetch.add(w),i.push(w)),this.blockRequests.has(w)&&n.push(this.blockRequests.get(w)),r.push(w)}}await bE(),this.fetchBlocks(t);const a=[];for(const v of i)this.blockRequests.has(v)&&a.push(this.blockRequests.get(v));await Promise.allSettled(n),await Promise.allSettled(a);const c=[],u=r.filter(v=>this.abortedBlockIds.has(v)||!this.blockCache.has(v));if(u.forEach(v=>this.blockIdsToFetch.add(v)),u.length>0&&t&&!t.aborted){this.fetchBlocks(null);for(const v of u){const g=this.blockRequests.get(v);if(!g)throw new Error(`Block ${v} is not in the block requests`);c.push(g)}await Promise.allSettled(c)}if(t&&t.aborted)throw new ir("Request was aborted");const d=r.map(v=>this.blockCache.get(v)||this.evictedBlocks.get(v)),f=d.filter(v=>!v);if(f.length)throw new SE(f,"Request failed");const m=new Map(yE(r,d));return this.readSliceData(e,m)}fetchBlocks(e){if(this.blockIdsToFetch.size>0){const t=this.groupBlocks(this.blockIdsToFetch),n=this.source.fetch(t,e);for(let i=0;i<t.length;++i){const r=t[i];for(const a of r.blockIds)this.blockRequests.set(a,(async()=>{try{const c=(await n)[i],u=a*this.blockSize,d=u-c.offset,f=Math.min(d+this.blockSize,c.data.byteLength),m=c.data.slice(d,f),v=new ME(u,m.byteLength,m,a);this.blockCache.set(a,v),this.abortedBlockIds.delete(a)}catch(c){if(c.name==="AbortError")c.signal=e,this.blockCache.delete(a),this.abortedBlockIds.add(a);else throw c}finally{this.blockRequests.delete(a)}})())}this.blockIdsToFetch.clear()}}groupBlocks(e){const t=Array.from(e).sort((a,c)=>a-c);if(t.length===0)return[];let n=[],i=null;const r=[];for(const a of t)i===null||i+1===a?(n.push(a),i=a):(r.push(new cp(n[0]*this.blockSize,n.length*this.blockSize,n)),n=[a],i=a);return r.push(new cp(n[0]*this.blockSize,n.length*this.blockSize,n)),r}readSliceData(e,t){return e.map(n=>{let i=n.offset+n.length;this.fileSize!==null&&(i=Math.min(this.fileSize,i));const r=Math.floor(n.offset/this.blockSize),a=Math.floor(i/this.blockSize),c=new ArrayBuffer(n.length),u=new Uint8Array(c);for(let d=r;d<=a;++d){const f=t.get(d),m=f.offset-n.offset,v=f.top-i;let g=0,b=0,y;m<0?g=-m:m>0&&(b=m),v<0?y=f.length-g:y=i-f.offset-g;const x=new Uint8Array(f.data,g,y);u.set(x,b)}return c})}}class ph{get ok(){return this.status>=200&&this.status<=299}get status(){throw new Error("not implemented")}getHeader(e){throw new Error("not implemented")}async getData(){throw new Error("not implemented")}}class fh{constructor(e){this.url=e}async request({headers:e,signal:t}={}){throw new Error("request is not implemented")}}class AE extends ph{constructor(e){super(),this.response=e}get status(){return this.response.status}getHeader(e){return this.response.headers.get(e)}async getData(){return this.response.arrayBuffer?await this.response.arrayBuffer():(await this.response.buffer()).buffer}}class CE extends fh{constructor(e,t){super(e),this.credentials=t}async request({headers:e,signal:t}={}){const n=await fetch(this.url,{headers:e,credentials:this.credentials,signal:t});return new AE(n)}}class TE extends ph{constructor(e,t){super(),this.xhr=e,this.data=t}get status(){return this.xhr.status}getHeader(e){return this.xhr.getResponseHeader(e)}async getData(){return this.data}}class RE extends fh{constructRequest(e,t){return new Promise((n,i)=>{const r=new XMLHttpRequest;r.open("GET",this.url),r.responseType="arraybuffer";for(const[a,c]of Object.entries(e))r.setRequestHeader(a,c);r.onload=()=>{const a=r.response;n(new TE(r,a))},r.onerror=i,r.onabort=()=>i(new ir("Request aborted")),r.send(),t&&(t.aborted&&r.abort(),t.addEventListener("abort",()=>r.abort()))})}async request({headers:e,signal:t}={}){return await this.constructRequest(e,t)}}const Xl={};class PE extends ph{constructor(e,t){super(),this.response=e,this.dataPromise=t}get status(){return this.response.statusCode}getHeader(e){return this.response.headers[e]}async getData(){return await this.dataPromise}}class IE extends fh{constructor(e){super(e),this.parsedUrl=Xl.parse(this.url),this.httpApi=(this.parsedUrl.protocol==="http:",Xl)}constructRequest(e,t){return new Promise((n,i)=>{const r=this.httpApi.get({...this.parsedUrl,headers:e},a=>{const c=new Promise(u=>{const d=[];a.on("data",f=>{d.push(f)}),a.on("end",()=>{const f=Buffer.concat(d).buffer;u(f)}),a.on("error",i)});n(new PE(a,c))});r.on("error",i),t&&(t.aborted&&r.destroy(new ir("Request aborted")),t.addEventListener("abort",()=>r.destroy(new ir("Request aborted"))))})}async request({headers:e,signal:t}={}){return await this.constructRequest(e,t)}}class mh extends Af{constructor(e,t,n,i){super(),this.client=e,this.headers=t,this.maxRanges=n,this.allowFullFile=i,this._fileSize=null}async fetch(e,t){return this.maxRanges>=e.length?this.fetchSlices(e,t):(this.maxRanges>0&&e.length>1,Promise.all(e.map(n=>this.fetchSlice(n,t))))}async fetchSlices(e,t){const n=await this.client.request({headers:{...this.headers,Range:`bytes=${e.map(({offset:i,length:r})=>`${i}-${i+r}`).join(",")}`},signal:t});if(n.ok)if(n.status===206){const{type:i,params:r}=vE(n.getHeader("content-type"));if(i==="multipart/byteranges"){const m=_E(await n.getData(),r.boundary);return this._fileSize=m[0].fileSize||null,m}const a=await n.getData(),{start:c,end:u,total:d}=Oc(n.getHeader("content-range"));this._fileSize=d||null;const f=[{data:a,offset:c,length:u-c}];if(e.length>1){const m=await Promise.all(e.slice(1).map(v=>this.fetchSlice(v,t)));return f.concat(m)}return f}else{if(!this.allowFullFile)throw new Error("Server responded with full file");const i=await n.getData();return this._fileSize=i.byteLength,[{data:i,offset:0,length:i.byteLength}]}else throw new Error("Error fetching data.")}async fetchSlice(e,t){const{offset:n,length:i}=e,r=await this.client.request({headers:{...this.headers,Range:`bytes=${n}-${n+i}`},signal:t});if(r.ok)if(r.status===206){const a=await r.getData(),{total:c}=Oc(r.getHeader("content-range"));return this._fileSize=c||null,{data:a,offset:n,length:i}}else{if(!this.allowFullFile)throw new Error("Server responded with full file");const a=await r.getData();return this._fileSize=a.byteLength,{data:a,offset:0,length:a.byteLength}}else throw new Error("Error fetching data.")}get fileSize(){return this._fileSize}}function gh(s,{blockSize:e,cacheSize:t}){return e===null?s:new EE(s,{blockSize:e,cacheSize:t})}function LE(s,{headers:e={},credentials:t,maxRanges:n=0,allowFullFile:i=!1,...r}={}){const a=new CE(s,t),c=new mh(a,e,n,i);return gh(c,r)}function DE(s,{headers:e={},maxRanges:t=0,allowFullFile:n=!1,...i}={}){const r=new RE(s),a=new mh(r,e,t,n);return gh(a,i)}function UE(s,{headers:e={},maxRanges:t=0,allowFullFile:n=!1,...i}={}){const r=new IE(s),a=new mh(r,e,t,n);return gh(a,i)}function NE(s,{forceXHR:e=!1,...t}={}){return typeof fetch=="function"&&!e?LE(s,t):typeof XMLHttpRequest<"u"?DE(s,t):UE(s,t)}function Fc(s){switch(s){case et.BYTE:case et.ASCII:case et.SBYTE:case et.UNDEFINED:return 1;case et.SHORT:case et.SSHORT:return 2;case et.LONG:case et.SLONG:case et.FLOAT:case et.IFD:return 4;case et.RATIONAL:case et.SRATIONAL:case et.DOUBLE:case et.LONG8:case et.SLONG8:case et.IFD8:return 8;default:throw new RangeError(`Invalid field type: ${s}`)}}function OE(s){const e=s.GeoKeyDirectory;if(!e)return null;const t={};for(let n=4;n<=e[3]*4;n+=4){const i=jM[e[n]],r=e[n+1]?Dr[e[n+1]]:null,a=e[n+2],c=e[n+3];let u=null;if(!r)u=c;else{if(u=s[r],typeof u>"u"||u===null)throw new Error(`Could not get value of geoKey '${i}'.`);typeof u=="string"?u=u.substring(c,c+a-1):u.subarray&&(u=u.subarray(c,c+a),a===1&&(u=u[0]))}t[i]=u}return t}function Ns(s,e,t,n){let i=null,r=null;const a=Fc(e);switch(e){case et.BYTE:case et.ASCII:case et.UNDEFINED:i=new Uint8Array(t),r=s.readUint8;break;case et.SBYTE:i=new Int8Array(t),r=s.readInt8;break;case et.SHORT:i=new Uint16Array(t),r=s.readUint16;break;case et.SSHORT:i=new Int16Array(t),r=s.readInt16;break;case et.LONG:case et.IFD:i=new Uint32Array(t),r=s.readUint32;break;case et.SLONG:i=new Int32Array(t),r=s.readInt32;break;case et.LONG8:case et.IFD8:i=new Array(t),r=s.readUint64;break;case et.SLONG8:i=new Array(t),r=s.readInt64;break;case et.RATIONAL:i=new Uint32Array(t*2),r=s.readUint32;break;case et.SRATIONAL:i=new Int32Array(t*2),r=s.readInt32;break;case et.FLOAT:i=new Float32Array(t),r=s.readFloat32;break;case et.DOUBLE:i=new Float64Array(t),r=s.readFloat64;break;default:throw new RangeError(`Invalid field type: ${e}`)}if(e===et.RATIONAL||e===et.SRATIONAL)for(let c=0;c<t;c+=2)i[c]=r.call(s,n+c*a),i[c+1]=r.call(s,n+(c*a+4));else for(let c=0;c<t;++c)i[c]=r.call(s,n+c*a);return e===et.ASCII?new TextDecoder("utf-8").decode(i):i}class FE{constructor(e,t,n){this.fileDirectory=e,this.geoKeyDirectory=t,this.nextIFDByteOffset=n}}class zo extends Error{constructor(e){super(`No image at index ${e}`),this.index=e}}class BE{async readRasters(e={}){const{window:t,width:n,height:i}=e;let{resX:r,resY:a,bbox:c}=e;const u=await this.getImage();let d=u;const f=await this.getImageCount(),m=u.getBoundingBox();if(t&&c)throw new Error('Both "bbox" and "window" passed.');if(n||i){if(t){const[b,y]=u.getOrigin(),[x,_]=u.getResolution();c=[b+t[0]*x,y+t[1]*_,b+t[2]*x,y+t[3]*_]}const g=c||m;if(n){if(r)throw new Error("Both width and resX passed");r=(g[2]-g[0])/n}if(i){if(a)throw new Error("Both width and resY passed");a=(g[3]-g[1])/i}}if(r||a){const g=[];for(let b=0;b<f;++b){const y=await this.getImage(b),{SubfileType:x,NewSubfileType:_}=y.fileDirectory;(b===0||x===2||_&1)&&g.push(y)}g.sort((b,y)=>b.getWidth()-y.getWidth());for(let b=0;b<g.length;++b){const y=g[b],x=(m[2]-m[0])/y.getWidth(),_=(m[3]-m[1])/y.getHeight();if(d=y,r&&r>x||a&&a>_)break}}let v=t;if(c){const[g,b]=u.getOrigin(),[y,x]=d.getResolution(u);v=[Math.round((c[0]-g)/y),Math.round((c[1]-b)/x),Math.round((c[2]-g)/y),Math.round((c[3]-b)/x)],v=[Math.min(v[0],v[2]),Math.min(v[1],v[3]),Math.max(v[0],v[2]),Math.max(v[1],v[3])]}return d.readRasters({...e,window:v})}}class vh extends BE{constructor(e,t,n,i,r={}){super(),this.source=e,this.littleEndian=t,this.bigTiff=n,this.firstIFDOffset=i,this.cache=r.cache||!1,this.ifdRequests=[],this.ghostValues=null}async getSlice(e,t){const n=this.bigTiff?4048:1024;return new mE((await this.source.fetch([{offset:e,length:typeof t<"u"?t:n}]))[0],e,this.littleEndian,this.bigTiff)}async parseFileDirectoryAt(e){const t=this.bigTiff?20:12,n=this.bigTiff?8:2;let i=await this.getSlice(e);const r=this.bigTiff?i.readUint64(e):i.readUint16(e),a=r*t+(this.bigTiff?16:6);i.covers(e,a)||(i=await this.getSlice(e,a));const c={};let u=e+(this.bigTiff?8:2);for(let m=0;m<r;u+=t,++m){const v=i.readUint16(u),g=i.readUint16(u+2),b=this.bigTiff?i.readUint64(u+4):i.readUint32(u+4);let y,x;const _=Fc(g),w=u+(this.bigTiff?12:8);if(_*b<=(this.bigTiff?8:4))y=Ns(i,g,b,w);else{const E=i.readOffset(w),S=Fc(g)*b;if(i.covers(E,S))y=Ns(i,g,b,E);else{const P=await this.getSlice(E,S);y=Ns(P,g,b,E)}}b===1&&XM.indexOf(v)===-1&&!(g===et.RATIONAL||g===et.SRATIONAL)?x=y[0]:x=y,c[Dr[v]]=x}const d=OE(c),f=i.readOffset(e+n+t*r);return new FE(c,d,f)}async requestIFD(e){if(this.ifdRequests[e])return this.ifdRequests[e];if(e===0)return this.ifdRequests[e]=this.parseFileDirectoryAt(this.firstIFDOffset),this.ifdRequests[e];if(!this.ifdRequests[e-1])try{this.ifdRequests[e-1]=this.requestIFD(e-1)}catch(t){throw t instanceof zo?new zo(e):t}return this.ifdRequests[e]=(async()=>{const t=await this.ifdRequests[e-1];if(t.nextIFDByteOffset===0)throw new zo(e);return this.parseFileDirectoryAt(t.nextIFDByteOffset)})(),this.ifdRequests[e]}async getImage(e=0){const t=await this.requestIFD(e);return new pE(t.fileDirectory,t.geoKeyDirectory,this.dataView,this.littleEndian,this.cache,this.source)}async getImageCount(){let e=0,t=!0;for(;t;)try{await this.requestIFD(e),++e}catch(n){if(n instanceof zo)t=!1;else throw n}return e}async getGhostValues(){const e=this.bigTiff?16:8;if(this.ghostValues)return this.ghostValues;const t="GDAL_STRUCTURAL_METADATA_SIZE=",n=t.length+100;let i=await this.getSlice(e,n);if(t===Ns(i,et.ASCII,t.length,e)){const a=Ns(i,et.ASCII,n,e).split(`
`)[0],c=Number(a.split("=")[1].split(" ")[0])+a.length;c>n&&(i=await this.getSlice(e,c));const u=Ns(i,et.ASCII,c,e);this.ghostValues={},u.split(`
`).filter(d=>d.length>0).map(d=>d.split("=")).forEach(([d,f])=>{this.ghostValues[d]=f})}return this.ghostValues}static async fromSource(e,t,n){const i=(await e.fetch([{offset:0,length:1024}],n))[0],r=new fE(i),a=r.getUint16(0,0);let c;if(a===18761)c=!0;else if(a===19789)c=!1;else throw new TypeError("Invalid byte order value.");const u=r.getUint16(2,c);let d;if(u===42)d=!1;else if(u===43){if(d=!0,r.getUint16(4,c)!==8)throw new Error("Unsupported offset byte-size.")}else throw new TypeError("Invalid magic number.");const f=d?r.getUint64(8,c):r.getUint32(4,c);return new vh(e,c,d,f,t)}close(){return typeof this.source.close=="function"?this.source.close():!1}}async function kE(s,e={},t){return vh.fromSource(NE(s,e),t)}function zE(s){return s&&s.trim().replace(/\0/g,"").trim()}function VE(s){if(typeof s!="string")return;const e=new DOMParser;try{return e.parseFromString(s,"text/xml").getElementsByTagName("OME")[0]}catch{return}}class Cf{constructor(){this.sizex=0,this.sizey=0,this.sizez=1,this.sizec=1,this.sizet=1,this.unit="",this.pixeltype="",this.dimensionorder="",this.pixelsizex=1,this.pixelsizey=1,this.pixelsizez=1,this.channelnames=[]}}function hp(s){const t={uint8:"uint8",uint16:"uint16",uint32:"uint32",int8:"int8",int16:"int16",int32:"int32",float:"float32"}[s];return t===void 0?(console.warn(`Unsupported OME pixel type ${s}; defaulting to uint8`),"uint8"):t}function up(s,e){const t=s.getAttribute(e);if(t===null)throw new ua(`Missing attribute ${e} in OME-TIFF metadata`,{type:ha.INVALID_METADATA});return t}function GE(s){const e=new Cf,t=s.getElementsByTagName("Pixels")[0];e.sizex=Number(up(t,"SizeX")),e.sizey=Number(up(t,"SizeY")),e.sizez=Number(t.getAttribute("SizeZ")),e.sizec=Number(t.getAttribute("SizeC")),e.sizet=Number(t.getAttribute("SizeT")),e.unit=t.getAttribute("PhysicalSizeXUnit")||"",e.pixeltype=t.getAttribute("Type")||"",e.dimensionorder=t.getAttribute("DimensionOrder")||"XYZCT",e.pixelsizex=Number(t.getAttribute("PhysicalSizeX")),e.pixelsizey=Number(t.getAttribute("PhysicalSizeY")),e.pixelsizez=Number(t.getAttribute("PhysicalSizeZ"));const n=t.getElementsByTagName("Channel");for(let i=0;i<n.length;++i){const r=n[i].getAttribute("Name"),a=n[i].getAttribute("ID");e.channelnames.push(r||a||"Channel"+i)}return e}const HE=s=>s==="uint8"?1:s==="uint16"?2:4,WE=s=>s===1?"uint8":s===2?"uint16":"uint32";class XE extends Wr{constructor(e){super(),this.url=e}async loadOmeDims(){if(!this.dims){const e=await kE(this.url[0],{allowFullFile:!0}).catch(ep(`Could not open TIFF file at ${this.url[0]}`,ha.NOT_FOUND)),t=await e.getImage().catch(ep("Failed to open TIFF image",ha.NOT_FOUND)),n=t.getFileDirectory().ImageDescription,i=zE(n),r=VE(i);if(r!==void 0){const a=r.getElementsByTagName("Image")[0];this.dims=GE(a)}else{console.warn("Could not read OME-TIFF metadata from file. Doing our best with base TIFF metadata."),this.dims=new Cf;let a=[];if(typeof i=="string")try{const c=JSON.parse(i);Array.isArray(c.shape)&&(a=c.shape)}catch{}this.dims.sizex=a[a.length-1]??t.getWidth(),this.dims.sizey=a[a.length-2]??t.getHeight(),this.dims.sizez=a[a.length-3]??await e.getImageCount(),this.url.length>1?this.dims.sizec=this.url.length:this.dims.sizec=a[a.length-4]??1,this.dims.pixeltype=WE(t.getBytesPerPixel()),this.dims.channelnames=Array.from({length:this.dims.sizec},(c,u)=>"Channel"+u)}}return this.dims}async loadDims(e){const t=await this.loadOmeDims(),n=Dc(t.sizez,t.sizex,t.sizey),i=kr,r=Math.floor(i/n.x),a=Math.floor(i/n.y);return[{shape:[t.sizet,t.sizec,t.sizez,a,r],spacing:[1,1,t.pixelsizez,t.pixelsizey*t.sizey/a,t.pixelsizex*t.sizex/r],spaceUnit:t.unit?t.unit:"micron",dataType:hp(t.pixeltype),timeUnit:"s"}]}async createImageInfo(e){const t=await this.loadOmeDims(),n=Dc(t.sizez,t.sizex,t.sizey),i=kr,r=Math.floor(i/n.x),a=Math.floor(i/n.y),c=this.url.length>1?Array(this.url.length).fill(1):[t.sizec];return{imageInfo:{name:"TEST",atlasTileDims:[n.x,n.y],subregionSize:[r,a,t.sizez],subregionOffset:[0,0,0],numChannelsPerSource:c,channelNames:t.channelnames,multiscaleLevel:0,multiscaleLevelDims:[{shape:[t.sizet,t.sizec,t.sizez,a,r],spacing:[1,1,t.pixelsizez,t.pixelsizey*t.sizey/a,t.pixelsizex*t.sizex/r],spaceUnit:t.unit||"",timeUnit:"",dataType:hp(t.pixeltype)}],transform:{translation:[0,0,0],rotation:[0,0,0],scale:[1,1,1]}},loadSpec:new Hr}}async loadRawChannelData(e,t,n,i){const r=await this.loadOmeDims(),c=new ba(e).volumeSize,u=[];for(let d=0;d<e.numChannelsPerSource.length;++d){const f=e.numChannelsPerSource[d];for(let m=0;m<f;++m){const v=new Promise((g,b)=>{const y={channel:m,tilesizex:c.x,tilesizey:c.y,sizec:f,sizez:c.z,dimensionOrder:r.dimensionorder,bytesPerSample:HE(r.pixeltype),url:this.url[d]},x=new Worker(new URL("/assets/FetchTiffWorker-Bv7diNfJ.js",import.meta.url),{type:"module"});x.onmessage=_=>{if(_.data.isError){b(hf(_.data.error));return}const{data:w,dtype:E,channel:S,range:P}=_.data;i([S],[E],[w],[P]),x.terminate(),g()},x.postMessage(y)});u.push(v)}}await Promise.all(u)}}var Et=(s=>(s.ZARR="zarr",s.JSON="json",s.TIFF="tiff",s.DATA="data",s))(Et||{});function YE(s){return s.endsWith(".json")?"json":s.endsWith(".tif")||s.endsWith(".tiff")?"tiff":"zarr"}var Vo={exports:{}},dp;function jE(){return dp||(dp=1,function(s,e){Object.defineProperty(e,"__esModule",{value:!0});function t(n,i,r){r===void 0&&(r=!1),r&&(i=i/n,n=1);var a=[],c=0,u=0,d,f=function(){var m=c+i,v=Date.now();if(v<m){d!==void 0&&clearTimeout(d),d=setTimeout(f,m-v);return}c=v,u=0;for(var g=0,b=a.splice(0,n);g<b.length;g++){var y=b[g];u++,y()}a.length?d=setTimeout(f,i):d=void 0};return function(m){return new Promise(function(v,g){var b=function(){return Promise.resolve().then(m).then(v).catch(g)},y=Date.now();d===void 0&&y-c>i&&(c=y,u=0),u++<n?b():(a.push(b),d===void 0&&(d=setTimeout(f,c+i-y)))})}}s.exports=t,e.default=t}(Vo,Vo.exports)),Vo.exports}var qE=jE();const $E=oh(qE);var Xn=(s=>(s[s.INIT=0]="INIT",s[s.CREATE_LOADER=1]="CREATE_LOADER",s[s.CLOSE_LOADER=2]="CLOSE_LOADER",s[s.CREATE_VOLUME=3]="CREATE_VOLUME",s[s.LOAD_DIMS=4]="LOAD_DIMS",s[s.LOAD_VOLUME_DATA=5]="LOAD_VOLUME_DATA",s[s.SET_PREFETCH_PRIORITY_DIRECTIONS=6]="SET_PREFETCH_PRIORITY_DIRECTIONS",s[s.SYNCHRONIZE_MULTICHANNEL_LOADING=7]="SYNCHRONIZE_MULTICHANNEL_LOADING",s[s.UPDATE_FETCH_OPTIONS=8]="UPDATE_FETCH_OPTIONS",s))(Xn||{}),Bc=(s=>(s[s.SUCCESS=0]="SUCCESS",s[s.ERROR=1]="ERROR",s[s.EVENT=2]="EVENT",s))(Bc||{}),kc=(s=>(s[s.METADATA_UPDATE=0]="METADATA_UPDATE",s[s.CHANNEL_LOAD=1]="CHANNEL_LOAD",s))(kc||{});function pp(s){return{...s,subregion:new vn(new L().copy(s.subregion.min),new L().copy(s.subregion.max))}}const KE=$E(1,16);class ZE{constructor(){this.pendingRequests=[],this.workerOpen=!0,this.onEvent=void 0,this.worker=new Worker(new URL("/assets/VolumeLoadWorker-DHALSEVA.js",import.meta.url),{type:"module"}),this.worker.onmessage=this.receiveMessage.bind(this)}registerMessagePromise(e){for(const[t,n]of this.pendingRequests.entries())if(n===void 0)return this.pendingRequests[t]=e,t;return this.pendingRequests.push(e)-1}get isOpen(){return this.workerOpen}close(){this.worker.terminate(),this.workerOpen=!1}sendMessage(e,t,n){let i=-1;const r=new Promise((c,u)=>{i=this.registerMessagePromise({type:e,resolve:c,reject:u})}),a={msgId:i,type:e,payload:t,loaderId:n};return this.worker.postMessage(a),r}receiveMessage({data:e}){var t;if(e.responseResult===Bc.EVENT)(t=this.onEvent)==null||t.call(this,e);else{const n=this.pendingRequests[e.msgId];if(n===void 0)throw new Error(`Received response for unknown message ID ${e.msgId}`);if(n.type!==e.type)throw new Error(`Received response of type ${e.type} for message of type ${n.type}`);e.responseResult===Bc.ERROR?n.reject(hf(e.payload)):n.resolve(e.payload),this.pendingRequests[e.msgId]=void 0}}}class JE{constructor(e,t,n){this.throttleChannelData=!1,this.workerHandle=new ZE,this.workerHandle.onEvent=this.handleEvent.bind(this),this.loaders=new Map,this.openPromise=this.workerHandle.sendMessage(Xn.INIT,{maxCacheSize:e,maxActiveRequests:t,maxLowPriorityRequests:n})}onOpen(){return this.workerHandle.isOpen?this.openPromise:Promise.reject("Worker is closed")}close(){this.workerHandle.close()}handleEvent(e){const t=this.loaders.get(e.loaderId);t&&(e.eventType===kc.CHANNEL_LOAD?this.throttleChannelData?KE(()=>t.onChannelData(e)):t.onChannelData(e):e.eventType===kc.METADATA_UPDATE&&t.onUpdateMetadata(e))}async createLoader(e,t){const n=Array.isArray(e)?e[0]:e,i=(t==null?void 0:t.fileType)||YE(n);if(i===Et.TIFF){const c=Array.isArray(e)?e:[e];return new XE(c)}else if(i===Et.DATA){if(!(t!=null&&t.rawArrayOptions))throw new Error("Failed to create loader: Must provide RawArrayOptions for RawArrayLoader");return new dM(t.rawArrayOptions.data,t.rawArrayOptions.metadata)}const r=await this.workerHandle.sendMessage(Xn.CREATE_LOADER,{path:e,options:t});if(r===void 0)throw new Error("Failed to create loader");const a=new QE(r,this.workerHandle,this);return this.loaders.set(r,a),a}setThrottleChannelData(e){this.throttleChannelData=e}}class QE extends Wr{constructor(e,t,n){super(),this.currentLoadId=-1,this.currentLoadCallback=void 0,this.currentMetadataUpdateCallback=void 0,this.loaderId=e,this.workerHandle=t,this.context=n}getLoaderId(){if(this.loaderId===void 0||!this.workerHandle.isOpen)throw new Error("Tried to use a closed loader");return this.loaderId}getContext(){return this.context}close(){this.loaderId!==void 0&&(this.workerHandle.sendMessage(Xn.CLOSE_LOADER,void 0,this.loaderId),this.loaderId=void 0)}setPrefetchPriority(e){return this.workerHandle.sendMessage(Xn.SET_PREFETCH_PRIORITY_DIRECTIONS,e,this.getLoaderId())}updateFetchOptions(e){return this.workerHandle.sendMessage(Xn.UPDATE_FETCH_OPTIONS,e,this.getLoaderId())}syncMultichannelLoading(e){return this.workerHandle.sendMessage(Xn.SYNCHRONIZE_MULTICHANNEL_LOADING,e,this.getLoaderId())}loadDims(e){return this.workerHandle.sendMessage(Xn.LOAD_DIMS,e,this.getLoaderId())}async createImageInfo(e){const{imageInfo:t,loadSpec:n}=await this.workerHandle.sendMessage(Xn.CREATE_VOLUME,e,this.getLoaderId());return{imageInfo:t,loadSpec:pp(n)}}loadRawChannelData(e,t,n,i){this.currentLoadCallback=i,this.currentMetadataUpdateCallback=n,this.currentLoadId+=1;const r={imageInfo:e,loadSpec:t,loadId:this.currentLoadId};return this.workerHandle.sendMessage(Xn.LOAD_VOLUME_DATA,r,this.getLoaderId())}onChannelData(e){var t;e.loaderId!==this.loaderId||e.loadId!==this.currentLoadId||(t=this.currentLoadCallback)==null||t.call(this,e.channelIndex,e.dtype,e.data,e.ranges,e.atlasDims)}onUpdateMetadata(e){var i;if(e.loaderId!==this.loaderId||e.loadId!==this.currentLoadId)return;const t=e.imageInfo,n=e.loadSpec&&pp(e.loadSpec);(i=this.currentMetadataUpdateCallback)==null||i.call(this,t,n)}}class eA extends Wr{async loadDims(e){return[{shape:[1,2,27,600,600],spacing:[1,1,2,1,1],spaceUnit:"",dataType:"uint8",timeUnit:""}]}async createImageInfo(e){return{imageInfo:{name:"TEST",atlasTileDims:[27,1],subregionSize:[600,600,27],subregionOffset:[0,0,0],numChannelsPerSource:[2],channelNames:["DNA","Structure"],multiscaleLevel:0,multiscaleLevelDims:[{shape:[1,2,27,600,600],spacing:[1,1,2,1,1],spaceUnit:"µm",timeUnit:"",dataType:"uint8"}],transform:{translation:[0,0,0],rotation:[0,0,0],scale:[1,1,1]}},loadSpec:new Hr}}loadRawChannelData(e,t,n,i){const r=[{name:"https://opencell.czbiohub.org/data/opencell-microscopy/roi/czML0383-P0007/czML0383-P0007-A02-PML0308-S13_ROI-0424-0025-0600-0600-LQTILE-CH405.jpg",channels:[0]},{name:"https://opencell.czbiohub.org/data/opencell-microscopy/roi/czML0383-P0007/czML0383-P0007-A02-PML0308-S13_ROI-0424-0025-0600-0600-LQTILE-CH488.jpg",channels:[1]}],[a,c]=rf(e);return wa.loadVolumeAtlasData(r,(u,d,f)=>i(u,d,f,f.map(Br),[a,c]))}}const tA=1e9,nA=8,iA=3,fp=[5,5,5,5],mp=25,sA=80,gp={cellpainting:{type:Et.TIFF,url:[["https://cellpainting-gallery.s3.us-east-1.amazonaws.com/cpg0000-jump-pilot/source_4/images/2020_12_08_CPJUMP1_Bleaching/images/BR00116992E__2020-11-12T01_22_40-Measurement1/Images/r01c01f01p01-ch1sk5fk1fl1.tiff","https://cellpainting-gallery.s3.us-east-1.amazonaws.com/cpg0000-jump-pilot/source_4/images/2020_12_08_CPJUMP1_Bleaching/images/BR00116992E__2020-11-12T01_22_40-Measurement1/Images/r01c01f01p01-ch2sk5fk1fl1.tiff","https://cellpainting-gallery.s3.us-east-1.amazonaws.com/cpg0000-jump-pilot/source_4/images/2020_12_08_CPJUMP1_Bleaching/images/BR00116992E__2020-11-12T01_22_40-Measurement1/Images/r01c01f01p01-ch3sk5fk1fl1.tiff","https://cellpainting-gallery.s3.us-east-1.amazonaws.com/cpg0000-jump-pilot/source_4/images/2020_12_08_CPJUMP1_Bleaching/images/BR00116992E__2020-11-12T01_22_40-Measurement1/Images/r01c01f01p01-ch4sk5fk1fl1.tiff","https://cellpainting-gallery.s3.us-east-1.amazonaws.com/cpg0000-jump-pilot/source_4/images/2020_12_08_CPJUMP1_Bleaching/images/BR00116992E__2020-11-12T01_22_40-Measurement1/Images/r01c01f01p01-ch5sk5fk1fl1.tiff","https://cellpainting-gallery.s3.us-east-1.amazonaws.com/cpg0000-jump-pilot/source_4/images/2020_12_08_CPJUMP1_Bleaching/images/BR00116992E__2020-11-12T01_22_40-Measurement1/Images/r01c01f01p01-ch6sk5fk1fl1.tiff","https://cellpainting-gallery.s3.us-east-1.amazonaws.com/cpg0000-jump-pilot/source_4/images/2020_12_08_CPJUMP1_Bleaching/images/BR00116992E__2020-11-12T01_22_40-Measurement1/Images/r01c01f01p01-ch7sk5fk1fl1.tiff","https://cellpainting-gallery.s3.us-east-1.amazonaws.com/cpg0000-jump-pilot/source_4/images/2020_12_08_CPJUMP1_Bleaching/images/BR00116992E__2020-11-12T01_22_40-Measurement1/Images/r01c01f01p01-ch8sk5fk1fl1.tiff"]]},testpick:{type:Et.ZARR,url:"https://allencell.s3.amazonaws.com/aics/nuc-morph-dataset/hipsc_fov_nuclei_timelapse_dataset/hipsc_fov_nuclei_timelapse_data_used_for_analysis/baseline_colonies_fov_timelapse_dataset/20200323_09_small/seg.ome.zarr"},timeSeries:{type:Et.JSON,url:"https://animatedcell-test-data.s3.us-west-2.amazonaws.com/timelapse/test_parent_T49.ome_%%_atlas.json",times:46},omeTiff:{type:Et.TIFF,url:"https://animatedcell-test-data.s3.us-west-2.amazonaws.com/AICS-12_881.ome.tif"},zarrEMT:{url:"https://dev-aics-dtp-001.int.allencell.org/dan-data/3500005818_20230811__20x_Timelapse-02(P27-E7).ome.zarr",type:Et.ZARR},zarrIDR1:{type:Et.ZARR,url:"https://uk1s3.embassy.ebi.ac.uk/idr/zarr/v0.4/idr0076A/10501752.zarr"},zarrIDR2:{type:Et.ZARR,url:"https://uk1s3.embassy.ebi.ac.uk/idr/zarr/v0.4/idr0054A/5025553.zarr"},zarrVariance:{type:Et.ZARR,url:["https://animatedcell-test-data.s3.us-west-2.amazonaws.com/variance/1.zarr","https://animatedcell-test-data.s3.us-west-2.amazonaws.com/variance/2.zarr"]},zarrNucmorph0:{type:Et.ZARR,url:"https://animatedcell-test-data.s3.us-west-2.amazonaws.com/20200323_F01_001/P13-C4.zarr/"},zarrNucmorph1:{type:Et.ZARR,url:"https://animatedcell-test-data.s3.us-west-2.amazonaws.com/20200323_F01_001/P15-C3.zarr/"},zarrNucmorph2:{type:Et.ZARR,url:"https://animatedcell-test-data.s3.us-west-2.amazonaws.com/20200323_F01_001/P7-B4.zarr/"},zarrNucmorph3:{type:Et.ZARR,url:"https://animatedcell-test-data.s3.us-west-2.amazonaws.com/20200323_F01_001/P8-B4.zarr/"},zarrFlyBrain:{type:Et.ZARR,url:"https://uk1s3.embassy.ebi.ac.uk/idr/zarr/v0.4/idr0048A/9846152.zarr/"},zarrUK:{type:Et.ZARR,url:"https://uk1s3.embassy.ebi.ac.uk/idr/zarr/v0.4/idr0062A/6001240.zarr"},opencell:{type:"opencell",url:""},cfeJson:{type:Et.JSON,url:"AICS-12_881_atlas.json"},abm:{type:Et.TIFF,url:"https://animatedcell-test-data.s3.us-west-2.amazonaws.com/HAMILTONIAN_TERM_FOV_VSAHJUP_0000_000192.ome.tif"},procedural:{type:Et.DATA,url:"",dtype:"uint8"},procedural2:{type:Et.DATA,url:"",dtype:"uint16"},procedural3:{type:Et.DATA,url:"",dtype:"float32"}};let re;const Yl=new JE(tA,nA,iA),A={file:"",volume:new af,currentFrame:0,lastFrameTime:0,isPlaying:!1,timerId:0,scene:0,loader:[new wa("https://animatedcell-test-data.s3.us-west-2.amazonaws.com/timelapse/test_parent_T49.ome_%%_atlas.json")],density:12.5,maskAlpha:1,exposure:.75,aperture:0,fov:20,focalDistance:4,lights:[new nr(xa),new nr(_a)],skyTopIntensity:.3,skyMidIntensity:.3,skyBotIntensity:.3,skyTopColor:[255,255,255],skyMidColor:[255,255,255],skyBotColor:[255,255,255],lightColor:[255,255,255],lightIntensity:75,lightTheta:14,lightPhi:54,xmin:0,ymin:0,zmin:0,xmax:1,ymax:1,zmax:1,samplingRate:.25,primaryRay:1,secondaryRay:1,isPT:!1,isMP:!1,interpolationActive:!0,isTurntable:!1,isAxisShowing:!1,isAligned:!0,showScaleBar:!0,showBoundingBox:!1,boundingBoxColor:[255,255,0],backgroundColor:[0,0,0],flipX:1,flipY:1,flipZ:1,channelFolderNames:[],channelGui:[],currentImageStore:"",currentImageName:"",colorizeEnabled:!1,colorizeChannel:0,feature:"feature1",colormap:"viridis",featureMin:0,featureMax:1},Ma=()=>A.totalFrames||A.volume.imageInfo.times;function Tf(s){return s/50}function rA(){A.lights[0].mColorTop=new L(A.skyTopColor[0]/255*A.skyTopIntensity,A.skyTopColor[1]/255*A.skyTopIntensity,A.skyTopColor[2]/255*A.skyTopIntensity),A.lights[0].mColorMiddle=new L(A.skyMidColor[0]/255*A.skyMidIntensity,A.skyMidColor[1]/255*A.skyMidIntensity,A.skyMidColor[2]/255*A.skyMidIntensity),A.lights[0].mColorBottom=new L(A.skyBotColor[0]/255*A.skyBotIntensity,A.skyBotColor[1]/255*A.skyBotIntensity,A.skyBotColor[2]/255*A.skyBotIntensity),A.lights[1].mTheta=A.lightTheta*Math.PI/180,A.lights[1].mPhi=A.lightPhi*Math.PI/180,A.lights[1].mColor=new L(A.lightColor[0]/255*A.lightIntensity,A.lightColor[1]/255*A.lightIntensity,A.lightColor[2]/255*A.lightIntensity),re.updateLights(A.lights)}function oA(){A.isPT&&A.isMP&&(A.isMP=!1),re.setVolumeRenderMode(A.isPT?nf:tf),re.setMaxProjectMode(A.volume,A.isMP)}let Fn;function aA(){Fn=new rh,Fn.add(A,"density").max(100).min(0).step(.001).onChange(function(n){re.updateDensity(A.volume,Tf(n))}),Fn.add(A,"maskAlpha").max(1).min(0).step(.001).onChange(function(n){re.updateMaskAlpha(A.volume,n)}),Fn.add(A,"primaryRay").max(40).min(1).step(.1).onChange(function(){re.setRayStepSizes(A.volume,A.primaryRay,A.secondaryRay)}),Fn.add(A,"secondaryRay").max(40).min(1).step(.1).onChange(function(){re.setRayStepSizes(A.volume,A.primaryRay,A.secondaryRay)});const s=Fn.addFolder("Camera").close();s.add(A,"exposure").max(1).min(0).step(.001).onChange(function(n){re.updateExposure(n)}),s.add(A,"aperture").max(.1).min(0).step(.001).onChange(function(){re.updateCamera(A.fov,A.focalDistance,A.aperture)}),s.add(A,"focalDistance").max(5).min(.1).step(.001).onChange(function(){re.updateCamera(A.fov,A.focalDistance,A.aperture)}),s.add(A,"fov").max(90).min(0).step(.001).onChange(function(){re.updateCamera(A.fov,A.focalDistance,A.aperture)}),s.add(A,"samplingRate").max(1).min(.1).step(.001).onChange(function(n){re.updatePixelSamplingRate(n)});const e=Fn.addFolder("Clipping Box").close();e.add(A,"xmin").max(1).min(0).step(.001).onChange(function(){re.updateClipRegion(A.volume,A.xmin,A.xmax,A.ymin,A.ymax,A.zmin,A.zmax)}),e.add(A,"xmax").max(1).min(0).step(.001).onChange(function(){re.updateClipRegion(A.volume,A.xmin,A.xmax,A.ymin,A.ymax,A.zmin,A.zmax)}),e.add(A,"ymin").max(1).min(0).step(.001).onChange(function(){re.updateClipRegion(A.volume,A.xmin,A.xmax,A.ymin,A.ymax,A.zmin,A.zmax)}),e.add(A,"ymax").max(1).min(0).step(.001).onChange(function(){re.updateClipRegion(A.volume,A.xmin,A.xmax,A.ymin,A.ymax,A.zmin,A.zmax)}),e.add(A,"zmin").max(1).min(0).step(.001).onChange(function(){re.updateClipRegion(A.volume,A.xmin,A.xmax,A.ymin,A.ymax,A.zmin,A.zmax)}),e.add(A,"zmax").max(1).min(0).step(.001).onChange(function(){re.updateClipRegion(A.volume,A.xmin,A.xmax,A.ymin,A.ymax,A.zmin,A.zmax)});const t=Fn.addFolder("Lighting").close();t.addColor(A,"skyTopColor",255).name("Sky Top").onChange(function(){A.lights[0].mColorTop=new L(A.skyTopColor[0]/255*A.skyTopIntensity,A.skyTopColor[1]/255*A.skyTopIntensity,A.skyTopColor[2]/255*A.skyTopIntensity),re.updateLights(A.lights)}),t.add(A,"skyTopIntensity").max(100).min(.01).step(.1).onChange(function(){A.lights[0].mColorTop=new L(A.skyTopColor[0]/255*A.skyTopIntensity,A.skyTopColor[1]/255*A.skyTopIntensity,A.skyTopColor[2]/255*A.skyTopIntensity),re.updateLights(A.lights)}),t.addColor(A,"skyMidColor",255).name("Sky Mid").onChange(function(){A.lights[0].mColorMiddle=new L(A.skyMidColor[0]/255*A.skyMidIntensity,A.skyMidColor[1]/255*A.skyMidIntensity,A.skyMidColor[2]/255*A.skyMidIntensity),re.updateLights(A.lights)}),t.add(A,"skyMidIntensity").max(100).min(.01).step(.1).onChange(function(){A.lights[0].mColorMiddle=new L(A.skyMidColor[0]/255*A.skyMidIntensity,A.skyMidColor[1]/255*A.skyMidIntensity,A.skyMidColor[2]/255*A.skyMidIntensity),re.updateLights(A.lights)}),t.addColor(A,"skyBotColor",255).name("Sky Bottom").onChange(function(){A.lights[0].mColorBottom=new L(A.skyBotColor[0]/255*A.skyBotIntensity,A.skyBotColor[1]/255*A.skyBotIntensity,A.skyBotColor[2]/255*A.skyBotIntensity),re.updateLights(A.lights)}),t.add(A,"skyBotIntensity").max(100).min(.01).step(.1).onChange(function(){A.lights[0].mColorBottom=new L(A.skyBotColor[0]/255*A.skyBotIntensity,A.skyBotColor[1]/255*A.skyBotIntensity,A.skyBotColor[2]/255*A.skyBotIntensity),re.updateLights(A.lights)}),t.add(A.lights[1],"mDistance").max(10).min(0).step(.1).onChange(function(){re.updateLights(A.lights)}),t.add(A,"lightTheta").max(180).min(-180).step(1).onChange(function(n){A.lights[1].mTheta=n*Math.PI/180,re.updateLights(A.lights)}),t.add(A,"lightPhi").max(180).min(0).step(1).onChange(function(n){A.lights[1].mPhi=n*Math.PI/180,re.updateLights(A.lights)}),t.add(A.lights[1],"mWidth").max(100).min(.01).step(.1).onChange(function(n){A.lights[1].mWidth=n,A.lights[1].mHeight=n,re.updateLights(A.lights)}),t.add(A,"lightIntensity").max(1e3).min(.01).step(.1).onChange(function(){A.lights[1].mColor=new L(A.lightColor[0]/255*A.lightIntensity,A.lightColor[1]/255*A.lightIntensity,A.lightColor[2]/255*A.lightIntensity),re.updateLights(A.lights)}),t.addColor(A,"lightColor",255).name("lightColor").onChange(function(){A.lights[1].mColor=new L(A.lightColor[0]/255*A.lightIntensity,A.lightColor[1]/255*A.lightIntensity,A.lightColor[2]/255*A.lightIntensity),re.updateLights(A.lights)}),rA()}function lA(s){const e=Fn.folders.find(t=>t._title===s);e&&(e.close(),e.destroy())}function cA(){const s=Ma(),e=document.getElementById("timeSlider");e&&(e.max=`${s-1}`);const t=document.getElementById("timeValue");t&&(t.max=`${s-1}`);const n=document.getElementById("playBtn");s<2?n.disabled=!0:n.disabled=!1;const i=document.getElementById("pauseBtn");s<2?i.disabled=!0:i.disabled=!1}function hA(){const s=A.loader.length-1,e=document.getElementById("sceneValue");e.max=`${s}`,e.value=`${Math.min(A.scene,s)}`}function uA(s,e){const t=s.channels[e],n=s.imageInfo.channelNames,i=Fn.folders.find(a=>a._title==="Channel "+n[e]);if(!i)return;const r=i.controllers.find(a=>a._name==="isovalue");r&&(r.min(t.rawMin),r.max(t.rawMax))}function dA(s){const e=document.getElementById("zSlider"),t=document.getElementById("zValue"),n=s.imageInfo.volumeSize.z;e.max=`${n-1}`,t.max=`${n-1}`,t.value=`${Math.floor(n/2)}`,e.value=`${Math.floor(n/2)}`}function pA(s){if(A&&A.channelFolderNames)for(let n=0;n<A.channelFolderNames.length;++n)lA(A.channelFolderNames[n]);const e=s.imageInfo.numChannels,t=s.imageInfo.channelNames;A.channelGui=[],A.channelFolderNames=[];for(let n=0;n<e;++n){A.channelGui.push({colorD:s.channelColorsDefault[n],colorS:[0,0,0],colorE:[0,0,0],window:1,level:.5,glossiness:0,isovalue:128,isosurface:!1,enabled:n<3,reset:function(r){return function(){const a=new ai().createFullRange();s.setLut(r,a),re.updateLuts(s)}}(n),autoIJ:function(r){return function(){const[a,c]=s.getHistogram(r).findAutoIJBins(),u=new ai().createFromMinMax(a,c);s.setLut(r,u),re.updateLuts(s)}}(n),auto0:function(r){return function(){const[a,c]=s.getHistogram(r).findAutoMinMax(),u=new ai().createFromMinMax(a,c);s.setLut(r,u),re.updateLuts(s)}}(n),bestFit:function(r){return function(){const[a,c]=s.getHistogram(r).findBestFitBins(),u=new ai().createFromMinMax(a,c);s.setLut(r,u),re.updateLuts(s)}}(n),pct50_98:function(r){return function(){const a=s.getHistogram(r).findBinOfPercentile(.5),c=s.getHistogram(r).findBinOfPercentile(.983),u=new ai().createFromMinMax(a,c);s.setLut(r,u),re.updateLuts(s)}}(n),colorizeEnabled:!1,colorize:function(r){return function(){const a=new ai().createLabelColors(s.getHistogram(r));s.setColorPalette(r,a.lut),A.channelGui[r].colorizeEnabled=!A.channelGui[r].colorizeEnabled,A.channelGui[r].colorizeEnabled?s.setColorPaletteAlpha(r,A.channelGui[r].colorizeAlpha):s.setColorPaletteAlpha(r,0),re.updateLuts(s)}}(n),colorizeAlpha:0});const i=Fn.addFolder("Channel "+t[n]);n>0&&i.close(),A.channelFolderNames.push("Channel "+t[n]),i.add(A.channelGui[n],"enabled").onChange(function(r){return function(a){re.setVolumeChannelEnabled(s,r,!!a),re.updateActiveChannels(s)}}(n)),i.add(A.channelGui[n],"isosurface").onChange(function(r){return function(a){re.setVolumeChannelOptions(s,r,{isosurfaceEnabled:a})}}(n)),i.add(A.channelGui[n],"isovalue").max(255).min(0).step(1).onChange(function(r){return function(a){re.setVolumeChannelOptions(s,r,{isovalue:a})}}(n)),i.addColor(A.channelGui[n],"colorD",255).name("Diffuse").onChange(function(r){return function(){re.updateChannelMaterial(s,r,A.channelGui[r].colorD,A.channelGui[r].colorS,A.channelGui[r].colorE,A.channelGui[r].glossiness),re.updateMaterial(s)}}(n)),i.addColor(A.channelGui[n],"colorS",255).name("Specular").onChange(function(r){return function(){re.updateChannelMaterial(s,r,A.channelGui[r].colorD,A.channelGui[r].colorS,A.channelGui[r].colorE,A.channelGui[r].glossiness),re.updateMaterial(s)}}(n)),i.addColor(A.channelGui[n],"colorE",255).name("Emissive").onChange(function(r){return function(){re.updateChannelMaterial(s,r,A.channelGui[r].colorD,A.channelGui[r].colorS,A.channelGui[r].colorE,A.channelGui[r].glossiness),re.updateMaterial(s)}}(n)),i.add(A.channelGui[n],"window").max(1).min(0).step(.001).onChange(function(r){return function(a){const c=a,u=A.channelGui[r].level,d=new ai().createFromWindowLevel(c,u);s.setLut(r,d),re.updateLuts(s)}}(n)),i.add(A.channelGui[n],"level").max(1).min(0).step(.001).onChange(function(r){return function(a){const c=A.channelGui[r].window,u=a,d=new ai().createFromWindowLevel(c,u);s.setLut(r,d),re.updateLuts(s)}}(n)),i.add(A.channelGui[n],"reset"),i.add(A.channelGui[n],"autoIJ"),i.add(A.channelGui[n],"auto0"),i.add(A.channelGui[n],"bestFit"),i.add(A.channelGui[n],"pct50_98"),i.add(A.channelGui[n],"colorize"),i.add(A.channelGui[n],"colorizeAlpha").max(1).min(0).onChange(function(r){return function(a){A.channelGui[r].colorizeEnabled&&(s.setColorPaletteAlpha(r,a),re.updateLuts(s))}}(n)),i.add(A.channelGui[n],"glossiness").max(100).min(0).onChange(function(r){return function(){re.updateChannelMaterial(s,r,A.channelGui[r].colorD,A.channelGui[r].colorS,A.channelGui[r].colorE,A.channelGui[r].glossiness),re.updateMaterial(s)}}(n))}}function fA(s,e){const t=s;re.onVolumeData(t,[e]),re.setVolumeChannelEnabled(t,e,A.channelGui[e].enabled),re.updateActiveChannels(t),re.updateLuts(t),t.isLoaded()&&console.log("currentVol with name "+t.name+" is loaded"),uA(t,e),re.redraw()}function mA(s,e){const t=e.imageInfo;if(A.volume=e,A.currentImageName=s,re.removeAllVolumes(),re.addVolume(A.volume),oA(),re.updateActiveChannels(A.volume),re.updateLuts(A.volume),re.updateLights(A.lights),re.updateDensity(A.volume,Tf(A.density)),re.updateExposure(A.exposure),t.transform){const n=t.imageInfo.transform;re.setVolumeTranslation(A.volume,A.volume.voxelsToWorldSpace(n.translation)),re.setVolumeRotation(A.volume,n.rotation),re.setVolumeScale(A.volume,n.scale)}s==="testpick"?re.enablePicking(A.volume,!0,0):re.enablePicking(A.volume,!1),cA(),hA(),dA(A.volume),pA(A.volume)}function Rf(s){A.loader.forEach(e=>e.syncMultichannelLoading(s))}function gA(s){window.clearTimeout(A.timerId),Rf(!0),A.isPlaying=!0;const e=()=>{A.lastFrameTime=Date.now();const t=(A.currentFrame+1)%Ma();re.setTime(A.volume,t,n=>{if(n.isLoaded()&&(A.currentFrame=t,s(),A.isPlaying)){const i=Date.now()-A.lastFrameTime;A.timerId=window.setTimeout(e,sA-i)}})};e()}function Pi(){return A.currentFrame}function Go(s){return console.log("going to Frame "+s),s>Ma()-1||s<0?(console.log(`frame ${s} out of bounds`),!1):(re.setTime(A.volume,s),A.currentFrame=s,!0)}function Pr(s){if(re.setZSlice(A.volume,s)){const e=document.getElementById("zSlider"),t=document.getElementById("zValue");return t.value=`${s}`,e.value=`${s}`,!0}else return!1}function vA(s){const i={name:"AICS-10_5_5",sizeX:64,sizeY:64,sizeZ:64,sizeC:3,physicalPixelSize:[1,1,1],spatialUnit:"",channelNames:["DRAQ5","EGFP","SEG_Memb"]},r=[ui.createSphere(64,64,64,24),ui.createTorus(64,64,64,24,8),ui.createCone(64,64,64,24,24)],a=ui.concatenateArrays(r,s);return{metadata:i,data:{dtype:s,shape:[r.length,64,64,64],buffer:new DataView(a.buffer)}}}async function _A(s){if(s.type==="opencell")return[new eA];await Yl.onOpen();const e={};if(Array.isArray(s.url)){const t={fetchOptions:{maxPrefetchDistance:fp,maxPrefetchChunks:mp}},n=s.url.map(i=>Yl.createLoader(i,t));return Promise.all(n)}else{let t=s.url;if(s.type===Et.JSON){const i=s.url,r=s.times||0;t=[...Array(r+1).keys()].map(c=>i.replace("%%",c.toString()))}else if(s.type===Et.DATA){const i=vA(s.dtype||"uint8");e.fileType=Et.DATA,e.rawArrayOptions={data:i.data,metadata:i.metadata}}return[await Yl.createLoader(t,{...e,fetchOptions:{maxPrefetchDistance:fp,maxPrefetchChunks:mp}})]}}async function Pf(s,e,t){const n=await t.loadDims(e);console.log(n);const i=await t.createVolume(e,fA);mA(s,i),t.loadVolumeData(i),Pr(Math.floor(i.imageInfo.subregionSize.z/2))}async function vp(s,e){A.loader=await _A(e);const t=new Hr;A.totalFrames=e.times;const n=A.loader[Math.max(A.scene,A.loader.length-1)];Pf(s,t,n)}function Os(s){let e=Number(s[0]),t=Number(s[1]),n=Number(s[2]);(t>n||t<e)&&(t=.5*(e+n));const i=255;e/=i,n/=i,t/=i;const r=n-e,a=(t-e)/r;let c=4*a*a;return(t-.5)*(t-.5)<5e-4&&(c=1),[e,n,c]}function Fs(){if(A.colorizeEnabled){const s=cw[A.feature],e=lw[A.colormap].tex;return{idsToFeatureValue:s.featureTex,featureValueToColor:e,outlierData:s.outlierData,inRangeIds:s.inRangeIds,featureMin:A.featureMin,featureMax:A.featureMax,outlineColor:new ke(16777215),outlineAlpha:1,outlierColor:new ke(4473924),outOfRangeColor:new ke(4473924),outlierDrawMode:0,outOfRangeDrawMode:0,hideOutOfRange:!1,frameToGlobalIdLookup:new Map,useRepeatingColor:!1}}else return null}function xA(){const s=document.getElementById("colorize");s==null||s.addEventListener("click",()=>{A.colorizeEnabled=!A.colorizeEnabled,re.setChannelColorizeFeature(A.volume,A.colorizeChannel,Fs())});const e=document.getElementById("segchannel");e==null||e.addEventListener("change",()=>{const a=Number(e.value);A.colorizeChannel=a,re.setChannelColorizeFeature(A.volume,A.colorizeChannel,Fs())});const t=document.getElementById("colormap");t==null||t.addEventListener("change",()=>{const a=t.value;A.colormap=a,re.setChannelColorizeFeature(A.volume,A.colorizeChannel,Fs())});const n=document.getElementById("feature");n==null||n.addEventListener("change",()=>{const a=n.value;A.feature=a,re.setChannelColorizeFeature(A.volume,A.colorizeChannel,Fs())});const i=document.getElementById("featmin");i==null||i.addEventListener("change",()=>{const a=Number(i.value)/100;console.log("featureMin: "+a),A.featureMin=a,re.setChannelColorizeFeature(A.volume,A.colorizeChannel,Fs())});const r=document.getElementById("featmax");r==null||r.addEventListener("change",()=>{const a=Number(r.value)/100;console.log("featureMax: "+a),A.featureMax=a,re.setChannelColorizeFeature(A.volume,A.colorizeChannel,Fs())})}function bA(){const s=document.getElementById("vol-e");if(!s)return;re=new qS({parentElement:s}),s.addEventListener("mousemove",me=>{const le=me,He=re.hitTest(le.offsetX,le.offsetY);He!==-1?(s.style.cursor="pointer",console.log("picked "+He),re.setSelectedID(A.volume,A.colorizeChannel,He)):(s.style.cursor="default",re.setSelectedID(A.volume,A.colorizeChannel,-1))});const e=document.getElementById("testData");e==null||e.addEventListener("change",({currentTarget:me})=>{const le=me==null?void 0:me.value,He=gp[le];He&&vp(le,He)});const t=document.getElementById("X");t==null||t.addEventListener("click",()=>{re.setCameraMode("X")});const n=document.getElementById("Y");n==null||n.addEventListener("click",()=>{re.setCameraMode("Y")});const i=document.getElementById("Z");i==null||i.addEventListener("click",()=>{re.setCameraMode("Z")});const r=document.getElementById("3D");r==null||r.addEventListener("click",()=>{re.setCameraMode("3D")});const a=document.getElementById("rotBtn");a==null||a.addEventListener("click",()=>{A.isTurntable=!A.isTurntable,re.setAutoRotate(A.isTurntable)});const c=document.getElementById("axisBtn");c==null||c.addEventListener("click",()=>{A.isAxisShowing=!A.isAxisShowing,re.setShowAxis(A.isAxisShowing)});const u=document.getElementById("showBoundingBox");u==null||u.addEventListener("click",()=>{A.showBoundingBox=!A.showBoundingBox,re.setShowBoundingBox(A.volume,A.showBoundingBox)});const d=document.getElementById("showScaleBar");d==null||d.addEventListener("click",()=>{A.showScaleBar=!A.showScaleBar,re.setShowScaleBar(A.showScaleBar)});function f(me,le){const He=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(me);return He?[parseInt(He[1],16)/255,parseInt(He[2],16)/255,parseInt(He[3],16)/255]:le}const m=document.getElementById("boundingBoxColor");m==null||m.addEventListener("change",me=>{var le;A.boundingBoxColor=f((le=me.target)==null?void 0:le.value,A.boundingBoxColor),re.setBoundingBoxColor(A.volume,A.boundingBoxColor)});const v=document.getElementById("backgroundColor");v==null||v.addEventListener("change",me=>{var le;A.backgroundColor=f((le=me.target)==null?void 0:le.value,A.backgroundColor),re.setBackgroundColor(A.backgroundColor)});const g=document.getElementById("flipXBtn");g==null||g.addEventListener("click",()=>{A.flipX*=-1,re.setFlipVolume(A.volume,A.flipX,A.flipY,A.flipZ)});const b=document.getElementById("flipYBtn");b==null||b.addEventListener("click",()=>{A.flipY*=-1,re.setFlipVolume(A.volume,A.flipX,A.flipY,A.flipZ)});const y=document.getElementById("flipZBtn");y==null||y.addEventListener("click",()=>{A.flipZ*=-1,re.setFlipVolume(A.volume,A.flipX,A.flipY,A.flipZ)});const x=document.getElementById("playBtn");x==null||x.addEventListener("click",()=>{A.currentFrame>=Ma()-1&&(A.currentFrame=-1),gA(()=>{P&&(P.value=""+Pi()),S&&(S.value=""+Pi())})});const _=document.getElementById("pauseBtn");_==null||_.addEventListener("click",()=>{window.clearTimeout(A.timerId),A.isPlaying=!1,Rf(!1)});const w=document.getElementById("forwardBtn"),E=document.getElementById("backBtn"),S=document.getElementById("timeSlider"),P=document.getElementById("timeValue"),D=document.getElementById("sceneValue");w==null||w.addEventListener("click",()=>{Go(Pi()+1)&&(P&&(P.value=""+Pi()),S&&(S.value=""+Pi()))}),E==null||E.addEventListener("click",()=>{Go(Pi()-1)&&(P&&(P.value=""+Pi()),S&&(S.value=""+Pi()))}),S==null||S.addEventListener("change",()=>{Go(S==null?void 0:S.valueAsNumber)&&P&&(P.value=S.value)}),P==null||P.addEventListener("change",()=>{Go(P==null?void 0:P.valueAsNumber)&&S&&(S.value=P.value)}),D==null||D.addEventListener("change",()=>{A.loader.length>1&&A.scene!==D.valueAsNumber&&(A.scene=D.valueAsNumber,Pf(A.currentImageName,new Hr,A.loader[A.scene]))});const O=document.getElementById("zforwardBtn"),U=document.getElementById("zbackBtn"),I=document.getElementById("zSlider"),C=document.getElementById("zValue");O==null||O.addEventListener("click",()=>{Pr((I==null?void 0:I.valueAsNumber)+1)}),U==null||U.addEventListener("click",()=>{Pr((I==null?void 0:I.valueAsNumber)-1)}),I==null||I.addEventListener("change",()=>{Pr(I==null?void 0:I.valueAsNumber)}),C==null||C.addEventListener("change",()=>{Pr(C==null?void 0:C.valueAsNumber)});const F=document.getElementById("xfBtn");F==null||F.addEventListener("click",()=>{A.isAligned=!A.isAligned,re.setVolumeTranslation(A.volume,A.isAligned?A.volume.getTranslation():[0,0,0]),re.setVolumeRotation(A.volume,A.isAligned?A.volume.getRotation():[0,0,0])});const Y=document.getElementById("resetCamBtn");Y==null||Y.addEventListener("click",()=>{re.resetCamera()});const X=document.getElementById("counter");X&&re.setRenderUpdateListener(me=>{X.innerHTML=""+me});const J=document.getElementById("renderMode"),Q=(me,le)=>{A.isPT=me,A.isMP=le,re.setVolumeRenderMode(me?nf:tf),re.setMaxProjectMode(A.volume,le)};J==null||J.addEventListener("change",({currentTarget:me})=>{const le=me;le.value==="PT"?re.hasWebGL2()&&Q(!0,!1):le.value==="MP"?Q(!1,!0):Q(!1,!1)});const ee=document.getElementById("interpolateBtn");ee==null||ee.addEventListener("click",()=>{A.interpolationActive=!A.interpolationActive,re.setInterpolationEnabled(A.volume,A.interpolationActive)});const ne=document.getElementById("screenshotBtn");ne==null||ne.addEventListener("click",()=>{re.capture(me=>{const le=document.createElement("a");le.href=me,le.download="screenshot.png",le.click()})});const z=document.getElementById("gammaMin"),ce=document.getElementById("gammaMax"),fe=document.getElementById("gammaScale");z==null||z.addEventListener("change",({currentTarget:me})=>{const le=Os([z.valueAsNumber,fe.valueAsNumber,ce.valueAsNumber]);re.setGamma(A.volume,le[0],le[1],le[2])}),z==null||z.addEventListener("input",({currentTarget:me})=>{const le=Os([z.valueAsNumber,fe.valueAsNumber,ce.valueAsNumber]);re.setGamma(A.volume,le[0],le[1],le[2])}),ce==null||ce.addEventListener("change",({currentTarget:me})=>{const le=Os([z.valueAsNumber,fe.valueAsNumber,ce.valueAsNumber]);re.setGamma(A.volume,le[0],le[1],le[2])}),ce==null||ce.addEventListener("input",({currentTarget:me})=>{const le=Os([z.valueAsNumber,fe.valueAsNumber,ce.valueAsNumber]);re.setGamma(A.volume,le[0],le[1],le[2])}),fe==null||fe.addEventListener("change",({currentTarget:me})=>{const le=Os([z.valueAsNumber,fe.valueAsNumber,ce.valueAsNumber]);re.setGamma(A.volume,le[0],le[1],le[2])}),fe==null||fe.addEventListener("input",({currentTarget:me})=>{const le=Os([z.valueAsNumber,fe.valueAsNumber,ce.valueAsNumber]);re.setGamma(A.volume,le[0],le[1],le[2])}),xA(),aA(),vp(e==null?void 0:e.value,gp[e==null?void 0:e.value])}document.body.onload=()=>{bA()};export{SA as L,MA as a,oh as g};
