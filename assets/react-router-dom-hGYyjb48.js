import{r as t,R as k}from"./react-guWHuPmL.js";import{R as A}from"./react-dom-0hMCjGys.js";import{D as N,a as j,R as z,u as Y}from"./react-router-AhTgVm6z.js";/**
 * React Router DOM v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const q=t.createContext({isTransitioning:!1}),B=t.createContext(new Map),G="startTransition",U=k[G],H="flushSync",I=A[H];function J(n){U?U(n):n()}function p(n){I?I(n):n()}class K{constructor(){this.status="pending",this.promise=new Promise((S,e)=>{this.resolve=a=>{this.status==="pending"&&(this.status="resolved",S(a))},this.reject=a=>{this.status==="pending"&&(this.status="rejected",e(a))}})}}function $(n){let{fallbackElement:S,router:e,future:a}=n,[o,T]=t.useState(e.state),[f,w]=t.useState(),[d,h]=t.useState({isTransitioning:!1}),[s,x]=t.useState(),[v,g]=t.useState(),[m,C]=t.useState(),R=t.useRef(new Map),{v7_startTransition:F}=a||{},L=t.useCallback(i=>{F?J(i):i()},[F]),b=t.useCallback((i,l)=>{let{deletedFetchers:r,unstable_flushSync:P,unstable_viewTransitionOpts:u}=l;r.forEach(c=>R.current.delete(c)),i.fetchers.forEach((c,O)=>{c.data!==void 0&&R.current.set(O,c.data)});let M=e.window==null||typeof e.window.document.startViewTransition!="function";if(!u||M){P?p(()=>T(i)):L(()=>T(i));return}if(P){p(()=>{v&&(s&&s.resolve(),v.skipTransition()),h({isTransitioning:!0,flushSync:!0,currentLocation:u.currentLocation,nextLocation:u.nextLocation})});let c=e.window.document.startViewTransition(()=>{p(()=>T(i))});c.finished.finally(()=>{p(()=>{x(void 0),g(void 0),w(void 0),h({isTransitioning:!1})})}),p(()=>g(c));return}v?(s&&s.resolve(),v.skipTransition(),C({state:i,currentLocation:u.currentLocation,nextLocation:u.nextLocation})):(w(i),h({isTransitioning:!0,flushSync:!1,currentLocation:u.currentLocation,nextLocation:u.nextLocation}))},[e.window,v,s,R,L]);t.useLayoutEffect(()=>e.subscribe(b),[e,b]),t.useEffect(()=>{d.isTransitioning&&!d.flushSync&&x(new K)},[d]),t.useEffect(()=>{if(s&&f&&e.window){let i=f,l=s.promise,r=e.window.document.startViewTransition(async()=>{L(()=>T(i)),await l});r.finished.finally(()=>{x(void 0),g(void 0),w(void 0),h({isTransitioning:!1})}),g(r)}},[L,f,s,e.window]),t.useEffect(()=>{s&&f&&o.location.key===f.location.key&&s.resolve()},[s,v,o.location,f]),t.useEffect(()=>{!d.isTransitioning&&m&&(w(m.state),h({isTransitioning:!0,flushSync:!1,currentLocation:m.currentLocation,nextLocation:m.nextLocation}),C(void 0))},[d.isTransitioning,m]),t.useEffect(()=>{},[]);let y=t.useMemo(()=>({createHref:e.createHref,encodeLocation:e.encodeLocation,go:i=>e.navigate(i),push:(i,l,r)=>e.navigate(i,{state:l,preventScrollReset:r==null?void 0:r.preventScrollReset}),replace:(i,l,r)=>e.navigate(i,{replace:!0,state:l,preventScrollReset:r==null?void 0:r.preventScrollReset})}),[e]),E=e.basename||"/",D=t.useMemo(()=>({router:e,navigator:y,static:!1,basename:E}),[e,y,E]);return t.createElement(t.Fragment,null,t.createElement(N.Provider,{value:D},t.createElement(j.Provider,{value:o},t.createElement(B.Provider,{value:R.current},t.createElement(q.Provider,{value:d},t.createElement(z,{basename:E,location:o.location,navigationType:o.historyAction,navigator:y,future:{v7_relativeSplatPath:e.future.v7_relativeSplatPath}},o.initialized||e.future.v7_partialHydration?t.createElement(Q,{routes:e.routes,future:e.future,state:o}):S))))),null)}function Q(n){let{routes:S,future:e,state:a}=n;return Y(S,void 0,a,e)}var V;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(V||(V={}));var _;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(_||(_={}));export{$ as R};
