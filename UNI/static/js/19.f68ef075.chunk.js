(this["webpackJsonp@uniswap/interface"]=this["webpackJsonp@uniswap/interface"]||[]).push([[19],{1899:function(e,t,n){},1970:function(e,t,n){"use strict";n.r(t);var r,i=n(2),o=n(31),c=n(115),a=n(27),l=n(207),s=n(488),d=n(172),u=n(316),p=n(97),h=n(4),f=n.n(h),g=n(17),j=n(10),b=n(522),m=n(138),x=n(1678),O=n(1),v=n(188),w=n(0),y=i.default.div.withConfig({componentId:"sc-oqttp6-0"})(["display:flex;max-width:592px;width:100%;@media only screen and (max-width:","){height:320px;}"],(function(e){var t=e.theme;return"".concat(t.breakpoint.sm,"px")})),k=i.default.div.withConfig({componentId:"sc-oqttp6-1"})(["max-width:512px;position:relative;width:100%;overflow-x:hidden;"]),C=Object(i.default)(v.a.div).withConfig({componentId:"sc-oqttp6-2"})(["position:absolute;padding-left:16px;padding-right:16px;display:flex;top:3px;height:280px;will-change:transform;justify-content:center;@media only screen and (max-width:","){height:296px;}"],(function(e){var t=e.theme;return"".concat(t.breakpoint.md,"px")})),z=i.default.div.withConfig({componentId:"sc-oqttp6-3"})(["display:flex;height:280px;justify-content:center;align-items:center;cursor:pointer;padding:8px;",";color:",";:hover{opacity:",";}@media only screen and (max-width:","){height:296px;}@media only screen and (max-width:","){display:none;}"],(function(e){return e.right?"transform: rotate(180deg)":void 0}),(function(e){return e.theme.textPrimary}),(function(e){return e.theme.opacity.hover}),(function(e){var t=e.theme;return"".concat(t.breakpoint.md,"px")}),(function(e){var t=e.theme;return"".concat(t.breakpoint.sm,"px")})),I=function(e){var t=e.children,n=Object(b.a)().width,r=Object(O.useRef)(null),i=Object(O.useState)(512),o=Object(j.a)(i,2),c=o[0],a=o[1],l=Object(O.useReducer)((function(e){return!e}),!1),s=Object(j.a)(l,2),d=s[0],u=s[1];Object(O.useEffect)((function(){r.current&&a(Math.min(r.current.offsetWidth,512))}),[n]);var p=Object(O.useCallback)((function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.length;return Object(x.c)(e,n)}),[t]),h=Object(O.useCallback)((function(e,t,n){return Object(x.d)(e,t,n,p)}),[p]),I=Object(v.useSprings)(t.length,(function(e){return{x:(e<t.length-1?e:-1)*c+0}})),H=Object(j.a)(I,2),S=H[0],F=H[1],P=Object(O.useRef)([0,1]),T=Object(O.useCallback)((function(e,n){var r=p(Math.floor(e/c)%t.length),i=n<0?t.length-2:1;F((function(o){var a=h(o,r,i),l=h(o,P.current[0],P.current[1]),s=Object(x.e)(r,i,a,t.length,e);return{x:-e%(c*t.length)+c*s+0,immediate:n<0?l>a:l<a,config:{tension:250,friction:30}}})),P.current=[r,i]}),[p,h,F,c,t.length]);Object(O.useEffect)((function(){T(E.current,0)}),[T]);var E=Object(O.useRef)(0),M=Object(O.useCallback)((function(e){var t=c*e;E.current+=t,T(E.current,e),u()}),[T,c]);return Object(O.useEffect)((function(){var e=setInterval(Object(g.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:M(1);case 1:case"end":return e.stop()}}),e)}))),7e3);return function(){clearInterval(e)}}),[M,d]),Object(w.jsxs)(y,{children:[Object(w.jsx)(z,{onClick:function(){return M(-1)},children:Object(w.jsx)(m.p,{width:"16px",height:"16px"})}),Object(w.jsx)(k,{ref:r,children:S.map((function(e,n){var r=e.x;return Object(w.jsx)(C,{style:{width:c,x:r},children:t[n]},n)}))}),Object(w.jsx)(z,{right:!0,onClick:function(){return M(1)},children:Object(w.jsx)(m.p,{width:"16px",height:"16px"})})]})},H=n(7),S=n(168),F=n(308),P=n(11),T=i.default.div.withConfig({componentId:"sc-1j367rv-0"})(["display:flex;flex-direction:column;gap:20px;background-color:",";border-radius:20px;outline:1px solid ",";width:100%;cursor:pointer;overflow:hidden;:hover{outline:3px solid ",";box-shadow:",";}"],(function(e){return e.theme.backgroundSurface}),(function(e){return e.theme.backgroundOutline}),(function(e){return e.theme.backgroundOutline}),(function(e){return e.theme.deepShadow})),E=i.default.div.withConfig({componentId:"sc-1j367rv-1"})(["position:relative;width:100%;height:108px;padding-top:32px;padding-bottom:16px;padding-left:28px;padding-right:28px;background-image:",";background-size:cover;background-position:center;"],(function(e){var t=e.src;return"url(".concat(t,")")})),M=i.default.div.withConfig({componentId:"sc-1j367rv-2"})(["position:relative;width:100%;height:108px;padding-top:32px;padding-bottom:16px;padding-left:28px;padding-right:28px;animation:"," 1.5s infinite;animation-fill-mode:both;background:linear-gradient( to left,"," 25%,"," 50%,"," 75% );will-change:background-position;background-size:400%;"],S.c,(function(e){return e.theme.backgroundInteractive}),(function(e){return e.theme.backgroundOutline}),(function(e){return e.theme.backgroundInteractive})),D=i.default.div.withConfig({componentId:"sc-1j367rv-3"})(["position:relative;z-index:1;display:flex;gap:12px;align-items:center;"]),V=i.default.div.withConfig({componentId:"sc-1j367rv-4"})(["display:flex;gap:2px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;"]),L=i.default.div.withConfig({componentId:"sc-1j367rv-5"})(["display:flex;flex-shrink:0;align-items:center;"]),R=i.default.div.withConfig({componentId:"sc-1j367rv-6"})(["display:flex;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;"]),N=Object(i.default)(F.a).withConfig({componentId:"sc-1j367rv-7"})(["width:50%;"]),A=i.default.div.withConfig({componentId:"sc-1j367rv-8"})(["position:absolute;height:108px;top:0px;right:0px;left:0px;background:linear-gradient(180deg,rgba(0,0,0,0) 0%,rgba(0,0,0,0.6) 100%,rgba(0,0,0,0.08));z-index:0;"]),B=i.default.img.withConfig({componentId:"sc-1j367rv-9"})(["width:60px;height:60px;background:",";border:2px solid ",";border-radius:100px;"],(function(e){return e.theme.accentTextLightPrimary}),(function(e){return e.theme.accentTextLightPrimary})),q=i.default.div.withConfig({componentId:"sc-1j367rv-10"})(["width:60px;height:60px;border-radius:100px;animation:"," 1.5s infinite;animation-fill-mode:both;background:linear-gradient( to left,"," 25%,"," 50%,"," 75% );will-change:background-position;background-size:400%;"],S.c,(function(e){return e.theme.backgroundInteractive}),(function(e){return e.theme.backgroundOutline}),(function(e){return e.theme.backgroundInteractive})),G=i.default.div.withConfig({componentId:"sc-1j367rv-11"})(["display:grid;grid-template-columns:auto auto auto;row-gap:16px;column-gap:20px;padding-right:28px;padding-left:28px;padding-bottom:20px;justify-content:space-between;@media only screen and (max-width:","){row-gap:12px;}"],(function(e){var t=e.theme;return"".concat(t.breakpoint.lg,"px")})),W=i.default.div.withConfig({componentId:"sc-1j367rv-12"})(["color:",";font-size:16px;line-height:24px;font-weight:500;@media only screen and (max-width:","){row-gap:12px;font-size:14px;line-height:20px;}"],(function(e){return e.theme.userThemeColor}),(function(e){var t=e.theme;return"".concat(t.breakpoint.lg,"px")})),U=Object(i.default)(F.a).withConfig({componentId:"sc-1j367rv-13"})(["width:50px;"]),_=i.default.div.withConfig({componentId:"sc-1j367rv-14"})(["color:",";font-size:14px;font-weight:400;line-height:20px;"],(function(e){return e.theme.textSecondary})),Q=function(e){var t=e.marketplace,n=e.floor,r=e.listings;return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(_,{children:t}),Object(w.jsx)(_,{children:null!==n&&void 0!==n?n:"-"}),Object(w.jsx)(_,{children:null!==r&&void 0!==r?r:"-"})]})},X=[d.h.Opensea,d.h.X2Y2,d.h.LooksRare],Y=(r={},Object(H.a)(r,d.h.Opensea,"OpenSea"),Object(H.a)(r,d.h.X2Y2,"X2Y2"),Object(H.a)(r,d.h.LooksRare,"LooksRare"),r),J=function(e){var t,n=e.collection,r=e.onClick,o=Object(u.useQuery)(["trendingCollectionStats",n.address],(function(){return Object(s.b)(n.address)}),{refetchOnWindowFocus:!1,refetchOnMount:!1,refetchOnReconnect:!1}),c=o.data,a=o.isLoading,l=Object(i.useTheme)();return Object(w.jsxs)(T,{onClick:r,children:[Object(w.jsxs)(E,{src:n.bannerImageUrl,children:[Object(w.jsxs)(D,{children:[Object(w.jsx)(B,{src:n.imageUrl}),Object(w.jsxs)(V,{children:[Object(w.jsx)(R,{children:Object(w.jsx)(P.r.MediumHeader,{color:l.accentTextLightPrimary,fontWeight:"500",lineHeight:"28px",children:n.name})}),n.isVerified&&Object(w.jsx)(L,{children:Object(w.jsx)(m.ob,{width:"24px",height:"24px"})})]})]}),Object(w.jsx)(A,{})]}),Object(w.jsx)(G,{children:a||!c?Object(w.jsx)(K,{}):Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(W,{children:"Uniswap"}),Object(w.jsxs)(W,{children:[Object(x.n)(n.floor.toString())," ETH Floor"]}),Object(w.jsxs)(W,{children:[null===(t=c.marketplaceCount)||void 0===t?void 0:t.reduce((function(e,t){return e+t.count}),0)," Listings"]}),X.map((function(e){var t,r=null===(t=c.marketplaceCount)||void 0===t?void 0:t.find((function(t){return t.marketplace===e}));return Object(w.jsx)(Q,{marketplace:Y[e],listings:null===r||void 0===r?void 0:r.count.toString()},"trendingCollection"+n.address)}))]})})]})},K=function(){return Object(w.jsx)(w.Fragment,{children:Object(a.a)(Array(12)).map((function(e){return Object(w.jsx)(U,{},e)}))})},Z=function(){return Object(w.jsxs)(T,{children:[Object(w.jsxs)(M,{children:[Object(w.jsxs)(D,{children:[Object(w.jsx)(q,{}),Object(w.jsx)(N,{})]}),Object(w.jsx)(A,{})]}),Object(w.jsx)(G,{children:Object(w.jsx)(K,{})})]})},$=i.default.div.withConfig({componentId:"sc-1cwmkpz-0"})(["display:flex;flex-direction:row;width:100%;height:320px;margin-top:24px;gap:36px;max-width:1200px;justify-content:space-between;@media only screen and (max-width:","){flex-direction:column;height:100%;gap:14px;margin-top:4px;margin-bottom:6px;}"],(function(e){var t=e.theme;return"".concat(t.breakpoint.sm,"px")})),ee=i.default.div.withConfig({componentId:"sc-1cwmkpz-1"})(["display:flex;max-width:500px;font-weight:500;font-size:60px;line-height:73px;justify-content:start;align-items:start;padding-top:40px;flex-shrink:0;background:linear-gradient(180deg,rgba(255,255,255,0.4) 0%,rgba(255,255,255,0) 100%),#fc72ff;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;text-fill-color:transparent;@media only screen and (max-width:","){font-size:48px;line-height:67px;}@media only screen and (max-width:","){font-size:36px;line-height:50px;}@media only screen and (max-width:","){font-size:20px;line-height:28px;justify-content:center;align-items:center;padding-top:0px;}"],(function(e){var t=e.theme;return"".concat(t.breakpoint.lg,"px")}),(function(e){var t=e.theme;return"".concat(t.breakpoint.md,"px")}),(function(e){var t=e.theme;return"".concat(t.breakpoint.sm,"px")})),te=function(){var e=Object(p.g)(),t=Object(l.i)(),n=Object(u.useQuery)(["trendingCollections"],(function(){return Object(s.m)({volumeType:"eth",timePeriod:d.k.OneDay,size:5})}),{refetchOnReconnect:!1,refetchOnWindowFocus:!1,refetchOnMount:!1}).data;return Object(w.jsxs)($,{children:[Object(w.jsxs)(ee,{children:["Best price. ",!t&&Object(w.jsx)("br",{}),"Every listing."]}),n?Object(w.jsx)(I,{children:n.map((function(t){return Object(w.jsx)(J,{collection:t,onClick:function(){return e("/nfts/collection/".concat(t.address))}},t.address)}))}):Object(w.jsx)(I,{children:Object(a.a)(Array(5)).map((function(e){return Object(w.jsx)(Z,{},"carouselCard"+e)}))})]})},ne=n(5),re=n(68),ie=n(140),oe=n(339);var ce,ae=n(72),le=(n(112),n(314),n(487),i.default.div.withConfig({componentId:"sc-1qdt28z-0"})(["display:flex;padding:14px 0px 14px 8px;align-items:center;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;"])),se=i.default.div.withConfig({componentId:"sc-1qdt28z-1"})(["margin-left:8px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;"]),de=Object(i.default)(P.r.SubHeader).withConfig({componentId:"sc-1qdt28z-2"})(["overflow:hidden;white-space:nowrap;text-overflow:ellipsis;"]),ue=i.default.div.withConfig({componentId:"sc-1qdt28z-3"})(["height:36px;width:36px;border-radius:36px;background:",";background-size:cover;background-position:center;flex-shrink:0;"],(function(e){var t=e.src,n=e.theme;return t?"url(".concat(t,")"):n.backgroundModule})),pe=i.default.div.withConfig({componentId:"sc-1qdt28z-4"})(["display:flex;color:",";justify-content:end;align-items:center;gap:2px;"],(function(e){var t=e.theme;return e.change>=0?t.accentSuccess:t.accentFailure})),he=i.default.div.withConfig({componentId:"sc-1qdt28z-5"})(["display:flex;justify-content:end;"]),fe=function(e){var t=e.value;return Object(w.jsxs)(le,{children:[Object(w.jsx)(ue,{src:t.logo}),Object(w.jsx)(se,{children:Object(w.jsx)(de,{children:t.name})}),t.isVerified&&Object(w.jsx)("span",{className:"rgw6ezj5 rgw6ez40t rgw6ez2k5 rgw6ez17h rgw6ez10t rgw6ez41n",children:Object(w.jsx)(m.ob,{})})]})},ge=function(e){var t=e.value;return Object(w.jsx)("span",{children:t.value?Object(x.D)(t.value):"-"})},je=function(e,t,n,r){return e===d.e.ETH?n:r&&n?r*(t?parseFloat(Object(ie.formatEther)(n)):n):void 0},be=function(e){var t=e.value,n=e.denomination,r=e.usdPrice,i=je(n,!0,t,r),o=i?n===d.e.ETH?Object(oe.f)(i.toString(),!0)+" ETH":Object(oe.a)(i,!0,!1,!0):"-";return Object(w.jsx)(he,{children:Object(w.jsx)(P.r.BodyPrimary,{children:t?o:"-"})})},me=function(e){var t=e.value,n=e.denomination,r=e.usdPrice,i=je(n,!1,t,r),o=i?n===d.e.ETH?Object(oe.a)(i.toString(),!1,!1,!0)+" ETH":Object(oe.a)(i,!0,!1,!0):"-";return Object(w.jsx)(he,{children:Object(w.jsx)(P.r.BodyPrimary,{children:t?o:"-"})})},xe=function(e){var t=e.change;return Object(w.jsxs)(pe,{change:null!==t&&void 0!==t?t:0,children:[!t||t>0?Object(w.jsx)(m.gb,{width:"20px",height:"20px"}):Object(w.jsx)(m.fb,{width:"20px",height:"20px"}),Object(w.jsxs)(P.r.BodyPrimary,{color:"currentColor",children:[t?Math.abs(Math.round(t)):0,"%"]})]})},Oe=n(78),ve=n(229),we=n(1897),ye=(n(1899),"_1mor7veg rgw6ez4ih rgw6ez14n rgw6ez6m5 rgw6ez6kt"),ke="rgw6ezpb rgw6ez4yz rgw6ez6ud rgw6ez6ld",Ce="_1mor7vej rgw6ezcb rgw6ezab rgw6ez6zl rgw6ez49t rgw6ez2kt rgw6ez24b",ze=["columns","data","smallHiddenColumns","mediumHiddenColumns","largeHiddenColumns","classNames"],Ie=["headerGroups","visibleColumns"],He=i.default.div.withConfig({componentId:"sc-iwpsza-0"})(["display:flex;align-items:center;padding-left:24px;gap:12px;@media only screen and (max-width:","){padding-left:8px;}"],(function(e){var t=e.theme;return"".concat(t.breakpoint.sm,"px")})),Se=i.default.tr.withConfig({componentId:"sc-iwpsza-1"})(["cursor:pointer;:hover{background:",";}:active{background:",";}"],(function(e){return e.theme.stateOverlayHover}),(function(e){return e.theme.stateOverlayPressed})),Fe=i.default.tr.withConfig({componentId:"sc-iwpsza-2"})(["height:80px;"]),Pe=i.default.th.withConfig({componentId:"sc-iwpsza-3"})(["",":hover{","}:active{","}"],(function(e){return!e.isFirstHeader&&"cursor: pointer;"}),(function(e){var t=e.theme;return!e.isFirstHeader&&"opacity: ".concat(t.opacity.hover,";")}),(function(e){var t=e.theme;return!e.isFirstHeader&&"opacity: ".concat(t.opacity.click,";")})),Te=i.default.div.withConfig({componentId:"sc-iwpsza-4"})(["display:flex;width:100%;justify-content:end;align-items:center;"]),Ee=i.default.div.withConfig({componentId:"sc-iwpsza-5"})(["display:flex;margin-left:24px;gap:8px;align-items:center;"]),Me=Object(i.default)(F.a).withConfig({componentId:"sc-iwpsza-6"})(["width:36px;height:36px;border-radius:36px;"]),De=Object(i.default)(F.a).withConfig({componentId:"sc-iwpsza-7"})(["width:8px;height:16px;margin-right:12px;"]);function Ve(e){var t=e.columns,n=e.data,r=e.smallHiddenColumns,o=e.mediumHiddenColumns,c=e.largeHiddenColumns,a=e.classNames,s=Object(Oe.a)(e,ze),d=Object(i.useTheme)(),u=Object(b.a)().width,h=Object(l.i)(),f=Object(we.useTable)(Object(ne.a)({columns:t,data:n,initialState:{sortBy:[{desc:!0,id:ce.Volume}]}},s),we.useSortBy),g=f.getTableProps,j=f.getTableBodyProps,x=f.headerGroups,v=f.rows,y=f.prepareRow,k=f.setHiddenColumns,C=f.visibleColumns,z=Object(p.g)();return Object(O.useEffect)((function(){u&&(u<d.breakpoint.sm?k(r):u<d.breakpoint.md?k(o):u<d.breakpoint.lg?k(c):k([]))}),[u,k,t,r,o,c,d.breakpoint]),0===n.length?Object(w.jsx)(Le,Object(ne.a)({headerGroups:x,visibleColumns:C},g())):Object(w.jsxs)("table",Object(ne.a)(Object(ne.a)({},g()),{},{className:ye,children:[Object(w.jsx)("thead",{className:ke,children:x.map((function(e){return Object(O.createElement)("tr",Object(ne.a)(Object(ne.a)({},e.getHeaderGroupProps()),{},{key:e.id}),e.headers.map((function(e,t){return Object(O.createElement)(Pe,Object(ne.a)(Object(ne.a)({className:Ce},e.getHeaderProps(e.getSortByToggleProps())),{},{style:{textAlign:0===t?"left":"right",paddingLeft:0===t?h?"16px":"52px":0},isFirstHeader:0===t,key:t}),Object(w.jsx)(ae.b,{as:"span",color:"accentAction",position:"relative",children:e.isSorted?e.isSortedDesc?Object(w.jsx)(m.f,{style:{transform:"rotate(90deg)",position:"absolute"}}):Object(w.jsx)(m.f,{style:{transform:"rotate(-90deg)",position:"absolute"}}):""}),Object(w.jsx)(ae.b,{as:"span",paddingLeft:e.isSorted?"18":"0",children:e.render("Header")}))})))}))}),Object(w.jsx)("tbody",Object(ne.a)(Object(ne.a)({},j()),{},{children:v.map((function(e,t){return y(e),Object(O.createElement)(Se,Object(ne.a)(Object(ne.a)({},e.getRowProps()),{},{key:e.id,onClick:function(){return z("/nfts/collection/".concat(e.original.collection.address))}}),e.cells.map((function(e,n){return Object(O.createElement)("td",Object(ne.a)(Object(ne.a)({className:Object(ve.default)("_1mor7vel rgw6ezcb rgw6ezan rgw6ez6zt rgw6ez2kh rgw6ez23z rgw6ez1gt rgw6ez41t rgw6ez44n",null===a||void 0===a?void 0:a.td)},e.getCellProps()),{},{key:n}),0===n?Object(w.jsxs)(He,{children:[!h&&Object(w.jsx)(P.r.BodySecondary,{fontSize:"14px",lineHeight:"20px",children:t+1}),e.render("Cell")]}):e.render("Cell"))})))}))}))]}))}function Le(e){var t=e.headerGroups,n=e.visibleColumns,r=Object(Oe.a)(e,Ie);return Object(w.jsxs)("table",Object(ne.a)(Object(ne.a)({},r),{},{className:ye,children:[Object(w.jsx)("thead",{className:ke,children:t.map((function(e){return Object(O.createElement)("tr",Object(ne.a)(Object(ne.a)({},e.getHeaderGroupProps()),{},{key:e.id}),e.headers.map((function(e,t){return Object(O.createElement)(Pe,Object(ne.a)(Object(ne.a)({className:Ce},e.getHeaderProps(e.getSortByToggleProps())),{},{style:{textAlign:0===t?"left":"right",paddingLeft:0===t?"52px":0},isFirstHeader:0===t,key:t}),Object(w.jsx)(ae.b,{as:"span",color:"accentAction",position:"relative",children:e.isSorted?e.isSortedDesc?Object(w.jsx)(m.f,{style:{transform:"rotate(90deg)",position:"absolute"}}):Object(w.jsx)(m.f,{style:{transform:"rotate(-90deg)",position:"absolute"}}):""}),Object(w.jsx)(ae.b,{as:"span",paddingLeft:e.isSorted?"18":"0",children:e.render("Header")}))})))}))}),Object(w.jsx)("tbody",Object(ne.a)(Object(ne.a)({},r),{},{children:Object(a.a)(Array(10)).map((function(e,t){return Object(w.jsx)(Fe,{children:Object(a.a)(Array(n.length)).map((function(e,t){return Object(w.jsx)("td",{className:"_1mor7ven rgw6ezcb rgw6ezan rgw6ez6zt rgw6ez2kh rgw6ez23z rgw6ez1gt rgw6ez41t rgw6ez44n",children:0===t?Object(w.jsxs)(Ee,{children:[Object(w.jsx)(De,{}),Object(w.jsx)(Me,{}),Object(w.jsx)(F.a,{})]}):Object(w.jsx)(Te,{children:Object(w.jsx)(F.a,{})})},t)}))},t)}))}))]}))}!function(e){e.Volume="Volume",e.VolumeChange="Volume change",e.Floor="Floor",e.FloorChange="Floor change",e.Sales="Sales",e.Items="Items",e.Owners="Owners"}(ce||(ce={}));var Re=function(e,t){return Math.round(1e5*e)>=Math.round(1e5*t)?1:-1},Ne=function(e){var t=e.data,n=Object(O.useMemo)((function(){return function(e,t){var n=re.a.from(e.original.floor.value),r=re.a.from(t.original.floor.value);return n.gte(r)?1:-1}}),[]),r=Object(O.useMemo)((function(){return function(e,t){return Re(e.original.floor.change,t.original.floor.change)}}),[]),i=Object(O.useMemo)((function(){return function(e,t){return Re(e.original.volume.value,t.original.volume.value)}}),[]),o=Object(O.useMemo)((function(){return function(e,t){return Re(e.original.volume.change,t.original.volume.change)}}),[]),c=Object(O.useMemo)((function(){return[{Header:"Collection name",accessor:"collection",Cell:fe,disableSortBy:!0},{id:ce.Floor,Header:ce.Floor,accessor:function(e){return e.floor.value},sortType:n,Cell:function(e){return Object(w.jsx)(be,{value:e.row.original.floor.value,denomination:e.row.original.denomination,usdPrice:e.row.original.usdPrice})}},{id:ce.FloorChange,Header:ce.FloorChange,accessor:function(e){return e.floor.value},sortDescFirst:!0,sortType:r,Cell:function(e){return Object(w.jsx)(xe,{change:e.row.original.floor.change})}},{id:ce.Volume,Header:ce.Volume,accessor:function(e){return e.volume.value},sortDescFirst:!0,sortType:i,Cell:function(e){return Object(w.jsx)(me,{value:e.row.original.volume.value,denomination:e.row.original.denomination,usdPrice:e.row.original.usdPrice})}},{id:ce.VolumeChange,Header:ce.VolumeChange,accessor:function(e){return e.volume.value},sortDescFirst:!0,sortType:o,Cell:function(e){return Object(w.jsx)(xe,{change:e.row.original.volume.change})}},{id:ce.Items,Header:ce.Items,accessor:"totalSupply",sortDescFirst:!0,Cell:function(e){return Object(w.jsx)(ge,{value:{value:e.row.original.totalSupply}})}},{Header:ce.Owners,accessor:function(e){return e.owners.value},sortDescFirst:!0,Cell:function(e){return Object(w.jsx)(ge,{value:e.row.original.owners})}}]}),[r,n,o,i]);return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(Ve,{smallHiddenColumns:[ce.Items,ce.FloorChange,ce.Volume,ce.VolumeChange,ce.Owners],mediumHiddenColumns:[ce.Items,ce.FloorChange,ce.VolumeChange,ce.Owners],largeHiddenColumns:[ce.Items,ce.Owners],data:t,columns:c})})},Ae=[{label:"1D",value:d.k.OneDay},{label:"1W",value:d.k.SevenDays},{label:"1M",value:d.k.ThirtyDays},{label:"All",value:d.k.AllTime}],Be=i.default.div.withConfig({componentId:"sc-1dnk851-0"})(["display:flex;flex-direction:column;width:100%;max-width:1200px;"]),qe=i.default.div.withConfig({componentId:"sc-1dnk851-1"})(["color:",";font-size:36px;line-height:44px;weight:500;@media only screen and (max-width:","){font-size:20px;line-height:28px;}"],(function(e){return e.theme.textPrimary}),(function(e){var t=e.theme;return"".concat(t.breakpoint.sm,"px")})),Ge=i.default.div.withConfig({componentId:"sc-1dnk851-2"})(["display:flex;justify-content:space-between;margin-top:36px;margin-bottom:20px;@media only screen and (max-width:","){margin-bottom:16px;margin-top:16px;}"],(function(e){var t=e.theme;return"".concat(t.breakpoint.sm,"px")})),We=i.default.div.withConfig({componentId:"sc-1dnk851-3"})(["display:flex;outline:1px solid ",";border-radius:16px;padding:4px;"],(function(e){return e.theme.backgroundOutline})),Ue=i.default.div.withConfig({componentId:"sc-1dnk851-4"})(["padding:8px 12px;border-radius:12px;background:",";cursor:pointer;:hover{opacity:",";}:active{opacity:",";}"],(function(e){var t=e.active,n=e.theme;return t?n.backgroundInteractive:"none"}),(function(e){return e.theme.opacity.hover}),(function(e){return e.theme.opacity.click})),_e=Object(i.default)(P.r.SubHeader).withConfig({componentId:"sc-1dnk851-5"})(["color:",";"],(function(e){var t=e.theme;return e.active?t.textPrimary:t.textSecondary})),Qe=function(){var e=Object(O.useState)(d.k.OneDay),t=Object(j.a)(e,2),n=t[0],r=t[1],i=Object(O.useState)(!0),o=Object(j.a)(i,2),c=o[0],a=o[1],l=Object(u.useQuery)(["trendingCollections",n],(function(){return Object(s.m)({volumeType:"eth",timePeriod:n,size:100})}),{refetchOnReconnect:!1,refetchOnWindowFocus:!1,refetchOnMount:!1,refetchInterval:5e3}),p=l.isSuccess,h=l.data,f=Object(u.useQuery)(["fetchPrice",{}],(function(){return Object(x.h)()}),{refetchOnReconnect:!1,refetchOnWindowFocus:!1,refetchOnMount:!1,refetchInterval:6e4}).data,g=Object(O.useMemo)((function(){return p&&h?h.map((function(e){return Object(ne.a)(Object(ne.a)({},e),{},{collection:{name:e.name,logo:e.imageUrl,address:e.address,isVerified:e.isVerified},volume:{value:e.volume,change:e.volumeChange,type:"eth"},floor:{value:e.floor,change:e.floorChange},owners:{value:e.owners,change:e.ownersChange},sales:e.sales,totalSupply:e.totalSupply,denomination:c?d.e.ETH:d.e.USD,usdPrice:f})})):[]}),[h,p,c,f]);return Object(w.jsxs)(Be,{children:[Object(w.jsx)(qe,{children:"Trending NFT collections"}),Object(w.jsxs)(Ge,{children:[Object(w.jsx)(We,{children:Ae.map((function(e){return Object(w.jsx)(Ue,{active:e.value===n,onClick:function(){return r(e.value)},children:Object(w.jsx)(_e,{lineHeight:"20px",active:e.value===n,children:e.label})},e.value)}))}),Object(w.jsxs)(We,{onClick:function(){return a(!c)},children:[Object(w.jsx)(Ue,{active:c,children:Object(w.jsx)(_e,{lineHeight:"20px",active:c,children:"ETH"})}),Object(w.jsx)(Ue,{active:!c,children:Object(w.jsx)(_e,{lineHeight:"20px",active:!c,children:"USD"})})]})]}),Object(w.jsx)(Ne,{data:g})]})},Xe=i.default.div.withConfig({componentId:"sc-j2zxi9-0"})(["display:flex;flex-direction:column;align-items:center;width:100%;padding:16px;@media only screen and (max-width:","){gap:16px;}@media only screen and (max-width:","){gap:0px;}"],(function(e){var t=e.theme;return"".concat(t.breakpoint.md,"px")}),(function(e){var t=e.theme;return"".concat(t.breakpoint.sm,"px")}));t.default=function(){return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(c.a,{page:o.i.NFT_EXPLORE_PAGE,shouldLogImpression:!0,children:Object(w.jsxs)(Xe,{children:[Object(w.jsx)(te,{}),Object(w.jsx)(Qe,{})]})})})}}}]);
//# sourceMappingURL=19.f68ef075.chunk.js.map