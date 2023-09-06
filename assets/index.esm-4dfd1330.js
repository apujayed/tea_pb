import{G as v,r as i,m as $,j as w}from"./index-e267a7dd.js";import{g as B,c as J,b as a1,S as K,D as j,y as D,a as G,o as A,X as F,I as Q,w as l1,u as O,E as R,N as Z,e as s1,n as b,O as H,M as m,t as i1}from"./combobox-940fce81.js";function R1(e){return v({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M3.00488 6.99981L11.4502 1.36961C11.7861 1.14568 12.2237 1.14568 12.5596 1.36961L21.0049 6.99981V20.9998C21.0049 21.5521 20.5572 21.9998 20.0049 21.9998H4.00488C3.4526 21.9998 3.00488 21.5521 3.00488 20.9998V6.99981ZM5.00488 8.07018V19.9998H19.0049V8.07018L12.0049 3.40351L5.00488 8.07018ZM8.00488 15.9998H16.0049V17.9998H8.00488V15.9998ZM8.00488 12.9998H16.0049V14.9998H8.00488V12.9998ZM12.0049 10.9998C10.9003 10.9998 10.0049 10.1044 10.0049 8.99981C10.0049 7.89524 10.9003 6.99981 12.0049 6.99981C13.1095 6.99981 14.0049 7.89524 14.0049 8.99981C14.0049 10.1044 13.1095 10.9998 12.0049 10.9998Z"}}]})(e)}function O1(e){return v({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"}}]})(e)}function c1(){let e=i.useRef(!1);return B(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function o1({onFocus:e}){let[t,r]=i.useState(!0),n=c1();return t?$.createElement(J,{as:"button",type:"button",features:a1.Focusable,onFocus:s=>{s.preventDefault();let a,c=50;function f(){if(c--<=0){a&&cancelAnimationFrame(a);return}if(e()){if(cancelAnimationFrame(a),!n.current)return;r(!1);return}a=requestAnimationFrame(f)}a=requestAnimationFrame(f)}}):null}const e1=i.createContext(null);function u1(){return{groups:new Map,get(e,t){var r;let n=this.groups.get(e);n||(n=new Map,this.groups.set(e,n));let s=(r=n.get(t))!=null?r:0;n.set(t,s+1);let a=Array.from(n.keys()).indexOf(t);function c(){let f=n.get(t);f>1?n.set(t,f-1):n.delete(t)}return[a,c]}}}function d1({children:e}){let t=i.useRef(u1());return i.createElement(e1.Provider,{value:t},e)}function t1(e){let t=i.useContext(e1);if(!t)throw new Error("You must wrap your component in a <StableCollection>");let r=L1(),[n,s]=t.current.get(e,r);return i.useEffect(()=>s,[]),n}function L1(){var e,t,r;let n=(r=(t=(e=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)==null?void 0:e.ReactCurrentOwner)==null?void 0:t.current)!=null?r:null;if(!n)return Symbol();let s=[],a=n;for(;a;)s.push(a.index),a=a.return;return"$."+s.join(".")}var p1=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(p1||{}),f1=(e=>(e[e.Less=-1]="Less",e[e.Equal=0]="Equal",e[e.Greater=1]="Greater",e))(f1||{}),g1=(e=>(e[e.SetSelectedIndex=0]="SetSelectedIndex",e[e.RegisterTab=1]="RegisterTab",e[e.UnregisterTab=2]="UnregisterTab",e[e.RegisterPanel=3]="RegisterPanel",e[e.UnregisterPanel=4]="UnregisterPanel",e))(g1||{});let h1={0(e,t){var r;let n=R(e.tabs,u=>u.current),s=R(e.panels,u=>u.current),a=n.filter(u=>{var T;return!((T=u.current)!=null&&T.hasAttribute("disabled"))}),c={...e,tabs:n,panels:s};if(t.index<0||t.index>n.length-1){let u=O(Math.sign(t.index-e.selectedIndex),{[-1]:()=>1,0:()=>O(Math.sign(t.index),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0});return a.length===0?c:{...c,selectedIndex:O(u,{0:()=>n.indexOf(a[0]),1:()=>n.indexOf(a[a.length-1])})}}let f=n.slice(0,t.index),M=[...n.slice(t.index),...f].find(u=>a.includes(u));if(!M)return c;let g=(r=n.indexOf(M))!=null?r:e.selectedIndex;return g===-1&&(g=e.selectedIndex),{...c,selectedIndex:g}},1(e,t){var r;if(e.tabs.includes(t.tab))return e;let n=e.tabs[e.selectedIndex],s=R([...e.tabs,t.tab],c=>c.current),a=(r=s.indexOf(n))!=null?r:e.selectedIndex;return a===-1&&(a=e.selectedIndex),{...e,tabs:s,selectedIndex:a}},2(e,t){return{...e,tabs:e.tabs.filter(r=>r!==t.tab)}},3(e,t){return e.panels.includes(t.panel)?e:{...e,panels:R([...e.panels,t.panel],r=>r.current)}},4(e,t){return{...e,panels:e.panels.filter(r=>r!==t.panel)}}},U=i.createContext(null);U.displayName="TabsDataContext";function z(e){let t=i.useContext(U);if(t===null){let r=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,z),r}return t}let q=i.createContext(null);q.displayName="TabsActionsContext";function X(e){let t=i.useContext(q);if(t===null){let r=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,X),r}return t}function v1(e,t){return O(t.type,h1,e,t)}let x1=i.Fragment;function b1(e,t){let{defaultIndex:r=0,vertical:n=!1,manual:s=!1,onChange:a,selectedIndex:c=null,...f}=e;const M=n?"vertical":"horizontal",g=s?"manual":"auto";let u=c!==null,T=D(t),[o,x]=i.useReducer(v1,{selectedIndex:c??r,tabs:[],panels:[]}),L=i.useMemo(()=>({selectedIndex:o.selectedIndex}),[o.selectedIndex]),k=G(a||(()=>{})),S=G(o.tabs),p=i.useMemo(()=>({orientation:M,activation:g,...o}),[M,g,o]),h=A(d=>(x({type:1,tab:d}),()=>x({type:2,tab:d}))),P=A(d=>(x({type:3,panel:d}),()=>x({type:4,panel:d}))),E=A(d=>{y.current!==d&&k.current(d),u||x({type:0,index:d})}),y=G(u?e.selectedIndex:o.selectedIndex),W=i.useMemo(()=>({registerTab:h,registerPanel:P,change:E}),[]);B(()=>{x({type:0,index:c??r})},[c]),B(()=>{if(y.current===void 0||o.tabs.length<=0)return;let d=R(o.tabs,C=>C.current);d.some((C,l)=>o.tabs[l]!==C)&&E(d.indexOf(o.tabs[y.current]))});let _={ref:T};return $.createElement(d1,null,$.createElement(q.Provider,{value:W},$.createElement(U.Provider,{value:p},p.tabs.length<=0&&$.createElement(o1,{onFocus:()=>{var d,C;for(let l of S.current)if(((d=l.current)==null?void 0:d.tabIndex)===0)return(C=l.current)==null||C.focus(),!0;return!1}}),F({ourProps:_,theirProps:f,slot:L,defaultTag:x1,name:"Tabs"}))))}let m1="div";function M1(e,t){let{orientation:r,selectedIndex:n}=z("Tab.List"),s=D(t);return F({ourProps:{ref:s,role:"tablist","aria-orientation":r},theirProps:e,slot:{selectedIndex:n},defaultTag:m1,name:"Tabs.List"})}let I1="button";function T1(e,t){var r,n;let s=Q(),{id:a=`headlessui-tabs-tab-${s}`,...c}=e,{orientation:f,activation:M,selectedIndex:g,tabs:u,panels:T}=z("Tab"),o=X("Tab"),x=z("Tab"),L=i.useRef(null),k=D(L,t);B(()=>o.registerTab(L),[o,L]);let S=t1("tabs"),p=u.indexOf(L);p===-1&&(p=S);let h=p===g,P=A(l=>{var I;let N=l();if(N===Z.Success&&M==="auto"){let r1=(I=s1(L))==null?void 0:I.activeElement,Y=x.tabs.findIndex(n1=>n1.current===r1);Y!==-1&&o.change(Y)}return N}),E=A(l=>{let I=u.map(N=>N.current).filter(Boolean);if(l.key===b.Space||l.key===b.Enter){l.preventDefault(),l.stopPropagation(),o.change(p);return}switch(l.key){case b.Home:case b.PageUp:return l.preventDefault(),l.stopPropagation(),P(()=>H(I,m.First));case b.End:case b.PageDown:return l.preventDefault(),l.stopPropagation(),P(()=>H(I,m.Last))}if(P(()=>O(f,{vertical(){return l.key===b.ArrowUp?H(I,m.Previous|m.WrapAround):l.key===b.ArrowDown?H(I,m.Next|m.WrapAround):Z.Error},horizontal(){return l.key===b.ArrowLeft?H(I,m.Previous|m.WrapAround):l.key===b.ArrowRight?H(I,m.Next|m.WrapAround):Z.Error}}))===Z.Success)return l.preventDefault()}),y=i.useRef(!1),W=A(()=>{var l;y.current||(y.current=!0,(l=L.current)==null||l.focus(),o.change(p),i1(()=>{y.current=!1}))}),_=A(l=>{l.preventDefault()}),d=i.useMemo(()=>({selected:h}),[h]),C={ref:k,onKeyDown:E,onMouseDown:_,onClick:W,id:a,role:"tab",type:l1(e,L),"aria-controls":(n=(r=T[p])==null?void 0:r.current)==null?void 0:n.id,"aria-selected":h,tabIndex:h?0:-1};return F({ourProps:C,theirProps:c,slot:d,defaultTag:I1,name:"Tabs.Tab"})}let C1="div";function w1(e,t){let{selectedIndex:r}=z("Tab.Panels"),n=D(t),s=i.useMemo(()=>({selectedIndex:r}),[r]);return F({ourProps:{ref:n},theirProps:e,slot:s,defaultTag:C1,name:"Tabs.Panels"})}let P1="div",E1=K.RenderStrategy|K.Static;function y1(e,t){var r,n,s,a;let c=Q(),{id:f=`headlessui-tabs-panel-${c}`,tabIndex:M=0,...g}=e,{selectedIndex:u,tabs:T,panels:o}=z("Tab.Panel"),x=X("Tab.Panel"),L=i.useRef(null),k=D(L,t);B(()=>x.registerPanel(L),[x,L]);let S=t1("panels"),p=o.indexOf(L);p===-1&&(p=S);let h=p===u,P=i.useMemo(()=>({selected:h}),[h]),E={ref:k,id:f,role:"tabpanel","aria-labelledby":(n=(r=T[p])==null?void 0:r.current)==null?void 0:n.id,tabIndex:h?M:-1};return!h&&((s=g.unmount)==null||s)&&!((a=g.static)!=null&&a)?$.createElement(J,{as:"span",...E}):F({ourProps:E,theirProps:g,slot:P,defaultTag:P1,features:E1,visible:h,name:"Tabs.Panel"})}let A1=j(T1),H1=j(b1),$1=j(M1),z1=j(w1),k1=j(y1),V=Object.assign(A1,{Group:H1,List:$1,Panels:z1,Panel:k1});function B1({tabsData:e}){return w.jsx("div",{className:"",children:w.jsx("div",{className:"",children:w.jsxs(V.Group,{children:[w.jsx(V.List,{className:"mx-3 mt-4 flex flex-row justify-start items-center",children:e.map((t,r)=>w.jsx(V,{className:"w-[225px] text-lg rounded-lg mx-[1%]",children:({selected:n})=>w.jsx("div",{className:n?" bg-black text-white rounded-lg py-4 border-none":" py-4 border-2 rounded-lg border-black/20 ",children:t.name})},r))}),w.jsx(V.Panels,{children:e.map((t,r)=>w.jsx(V.Panel,{children:t.content},r))})]})})})}function j1(e){return v({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M594.3 601.5a111.8 111.8 0 0 0 29.1-75.5c0-61.9-49.9-112-111.4-112s-111.4 50.1-111.4 112c0 29.1 11 55.5 29.1 75.5a158.09 158.09 0 0 0-74.6 126.1 8 8 0 0 0 8 8.4H407c4.2 0 7.6-3.3 7.9-7.5 3.8-50.6 46-90.5 97.2-90.5s93.4 40 97.2 90.5c.3 4.2 3.7 7.5 7.9 7.5H661a8 8 0 0 0 8-8.4c-2.8-53.3-32-99.7-74.7-126.1zM512 578c-28.5 0-51.7-23.3-51.7-52s23.2-52 51.7-52 51.7 23.3 51.7 52-23.2 52-51.7 52zm416-354H768v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H548v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H328v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H96c-17.7 0-32 14.3-32 32v576c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V256c0-17.7-14.3-32-32-32zm-40 568H136V296h120v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h148v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h148v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h120v496z"}}]})(e)}function D1(e){return v({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]})(e)}function F1(e){return v({tag:"svg",attr:{t:"1569683645783",viewBox:"0 0 1024 1024",version:"1.1"},child:[{tag:"defs",attr:{},child:[]},{tag:"path",attr:{d:"M600 395.4h91V649h79V267c0-4.4-3.6-8-8-8h-48.2c-3.7 0-7 2.6-7.7 6.3-2.6 12.1-6.9 22.3-12.9 30.9-7.2 10.1-15.9 18.2-26.3 24.4-10.3 6.2-22 10.5-35 12.9-10.4 1.9-21 3-32 3.1-4.4 0.1-7.9 3.6-7.9 8v42.8c0 4.4 3.6 8 8 8zM871 702H567c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h304c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM443.9 312.7c-16.1-19-34.4-32.4-55.2-40.4-21.3-8.2-44.1-12.3-68.4-12.3-23.9 0-46.4 4.1-67.7 12.3-20.8 8-39 21.4-54.8 40.3-15.9 19.1-28.7 44.7-38.3 77-9.6 32.5-14.5 73-14.5 121.5 0 49.9 4.9 91.4 14.5 124.4 9.6 32.8 22.4 58.7 38.3 77.7 15.8 18.9 34 32.3 54.8 40.3 21.3 8.2 43.8 12.3 67.7 12.3 24.4 0 47.2-4.1 68.4-12.3 20.8-8 39.2-21.4 55.2-40.4 16.1-19 29-44.9 38.6-77.7 9.6-33 14.5-74.5 14.5-124.4 0-48.4-4.9-88.9-14.5-121.5-9.5-32.1-22.4-57.7-38.6-76.8z m-29.5 251.7c-1 21.4-4.2 42-9.5 61.9-5.5 20.7-14.5 38.5-27 53.4-13.6 16.3-33.2 24.3-57.6 24.3-24 0-43.2-8.1-56.7-24.4-12.2-14.8-21.1-32.6-26.6-53.3-5.3-19.9-8.5-40.6-9.5-61.9-1-20.8-1.5-38.5-1.5-53.2 0-8.8 0.1-19.4 0.4-31.8 0.2-12.7 1.1-25.8 2.6-39.2 1.5-13.6 4-27.1 7.6-40.5 3.7-13.8 8.8-26.3 15.4-37.4 6.9-11.6 15.8-21.1 26.7-28.3 11.4-7.6 25.3-11.3 41.5-11.3 16.1 0 30.1 3.7 41.7 11.2 11.1 7.2 20.3 16.6 27.4 28.2 6.9 11.2 12.1 23.8 15.6 37.7 3.3 13.2 5.8 26.6 7.5 40.1 1.8 13.5 2.8 26.6 3 39.4 0.2 12.4 0.4 23 0.4 31.8 0.1 14.8-0.4 32.5-1.4 53.3z"}}]})(e)}function N1(e){return v({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M464 512a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm200 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm-400 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm661.2-173.6c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 0 0-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 0 0-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 0 0 112 714v152a46 46 0 0 0 46 46h152.1A449.4 449.4 0 0 0 510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 0 0 142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z"}}]})(e)}function Z1(e){return v({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M434.8 137.65l-149.36-68.1c-16.19-7.4-42.69-7.4-58.88 0L77.3 137.65c-17.6 8-17.6 21.09 0 29.09l148 67.5c16.89 7.7 44.69 7.7 61.58 0l148-67.5c17.52-8 17.52-21.1-.08-29.09zM160 308.52l-82.7 37.11c-17.6 8-17.6 21.1 0 29.1l148 67.5c16.89 7.69 44.69 7.69 61.58 0l148-67.5c17.6-8 17.6-21.1 0-29.1l-79.94-38.47"}},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M160 204.48l-82.8 37.16c-17.6 8-17.6 21.1 0 29.1l148 67.49c16.89 7.7 44.69 7.7 61.58 0l148-67.49c17.7-8 17.7-21.1.1-29.1L352 204.48"}}]})(e)}function W1(e){return v({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M403.29 32H280.36a14.46 14.46 0 00-10.2 4.2L24.4 281.9a28.85 28.85 0 000 40.7l117 117a28.86 28.86 0 0040.71 0L427.8 194a14.46 14.46 0 004.2-10.2v-123A28.66 28.66 0 00403.29 32z"}},{tag:"path",attr:{d:"M352 144a32 32 0 1132-32 32 32 0 01-32 32z"}},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M230 480l262-262a13.81 13.81 0 004-10V80"}}]})(e)}function _1(e){return v({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M476.59 227.05l-.16-.07L49.35 49.84A23.56 23.56 0 0027.14 52 24.65 24.65 0 0016 72.59v113.29a24 24 0 0019.52 23.57l232.93 43.07a4 4 0 010 7.86L35.53 303.45A24 24 0 0016 327v113.31A23.57 23.57 0 0026.59 460a23.94 23.94 0 0013.22 4 24.55 24.55 0 009.52-1.93L476.4 285.94l.19-.09a32 32 0 000-58.8z"}}]})(e)}function G1(e){return v({tag:"svg",attr:{viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M 6 3 L 6 29 L 22 29 L 22 27 L 8 27 L 8 5 L 18 5 L 18 11 L 24 11 L 24 13 L 26 13 L 26 9.5996094 L 25.699219 9.3007812 L 19.699219 3.3007812 L 19.400391 3 L 6 3 z M 20 6.4003906 L 22.599609 9 L 20 9 L 20 6.4003906 z M 10 13 L 10 15 L 22 15 L 22 13 L 10 13 z M 27 15 L 27 17 C 25.3 17.3 24 18.7 24 20.5 C 24 22.5 25.5 24 27.5 24 L 28.5 24 C 29.3 24 30 24.7 30 25.5 C 30 26.3 29.3 27 28.5 27 L 25 27 L 25 29 L 27 29 L 27 31 L 29 31 L 29 29 C 30.7 28.7 32 27.3 32 25.5 C 32 23.5 30.5 22 28.5 22 L 27.5 22 C 26.7 22 26 21.3 26 20.5 C 26 19.7 26.7 19 27.5 19 L 31 19 L 31 17 L 29 17 L 29 15 L 27 15 z M 10 18 L 10 20 L 17 20 L 17 18 L 10 18 z M 19 18 L 19 20 L 22 20 L 22 18 L 19 18 z M 10 22 L 10 24 L 17 24 L 17 22 L 10 22 z M 19 22 L 19 24 L 22 24 L 22 22 L 19 22 z"}}]})(e)}function U1(e){return v({tag:"svg",attr:{viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M 7.21875 5.78125 L 5.78125 7.21875 L 14.5625 16 L 5.78125 24.78125 L 7.21875 26.21875 L 16 17.4375 L 24.78125 26.21875 L 26.21875 24.78125 L 17.4375 16 L 26.21875 7.21875 L 24.78125 5.78125 L 16 14.5625 Z"}}]})(e)}function q1(e){return v({tag:"svg",attr:{viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M 4 6 L 4 26 L 28 26 L 28 6 Z M 6 8 L 26 8 L 26 24 L 6 24 Z M 16 10 C 11.667969 10 8.4375 12.15625 8.4375 12.15625 L 7.65625 12.6875 L 8.15625 13.5 L 11.15625 18.5 L 11.4375 19 L 20.5625 19 L 20.84375 18.5 L 23.84375 13.5 L 24.34375 12.6875 L 23.5625 12.15625 C 23.5625 12.15625 20.332031 10 16 10 Z M 16 12 C 18.824219 12 20.6875 12.90625 21.59375 13.40625 L 19.46875 17 L 17.625 17 L 18.90625 14.4375 L 17.09375 13.5625 L 15.375 17 L 12.53125 17 L 10.40625 13.40625 C 11.3125 12.90625 13.175781 12 16 12 Z"}}]})(e)}export{N1 as A,_1 as I,U1 as L,R1 as R,B1 as T,D1 as a,F1 as b,j1 as c,Z1 as d,G1 as e,c1 as f,q1 as g,W1 as h,O1 as i};
