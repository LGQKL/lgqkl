(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9533],{73779:function(n,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ifo/history",function(){return o(63088)}])},39665:function(n,t,o){"use strict";var e=o(26042),r=o(69396),i=o(99534),a=o(85893);o(67294);var u=o(75943),c=o(44147),s=o(24686),d=o(62077),l=o(82004),f=function(n){var t=n.value,o=n.placeholder,f=n.onUserInput,m=n.currencyValue,h=n.inputProps,p=n.innerRef,g=n.isWarning,Z=n.decimals,v=n.unit,x=n.switchEditingUnits,b=(0,i.Z)(n,["value","placeholder","onUserInput","currencyValue","inputProps","innerRef","isWarning","decimals","unit","switchEditingUnits"]),w=function(n){n.currentTarget.validity.valid&&f(n.currentTarget.value.replace(/,/g,"."))};return(0,a.jsx)(l.FX,(0,r.Z)((0,e.Z)({isWarning:void 0!==g&&g},b),{children:(0,a.jsxs)(u.Z,{justifyContent:"flex-end",children:[(0,a.jsxs)(c.Z,{children:[(0,a.jsxs)(u.Z,{alignItems:"center",children:[(0,a.jsx)(l.Fy,(0,e.Z)({pattern:"^[0-9]*[.,]?[0-9]{0,".concat(void 0===Z?18:Z,"}$"),inputMode:"decimal",min:"0",value:t,onChange:w,placeholder:void 0===o?"0.0":o,ref:p},h)),v&&(0,a.jsx)(l.HH,{children:v})]}),m&&(0,a.jsx)(d.Z,{fontSize:"12px",textAlign:"right",color:"textSubtle",children:m})]}),x&&(0,a.jsx)(u.Z,{alignItems:"center",pl:"12px",children:(0,a.jsx)(l.sN,{scale:"sm",variant:"text",onClick:x,children:(0,a.jsx)(s.Z,{color:"textSubtle"})})})]})}))};t.Z=f},82004:function(n,t,o){"use strict";o.d(t,{FX:function(){return p},Fy:function(){return g},HH:function(){return h},sN:function(){return m}});var e=o(7297),r=o(87379),i=o(44147),a=o(32762),u=o(62077),c=o(89663);function s(){var n=(0,e.Z)(["\n  width: 16px;\n"]);return s=function(){return n},n}function d(){var n=(0,e.Z)(["\n  margin-left: 4px;\n  text-align: right;\n  color: ",";\n  white-space: nowrap;\n"]);return d=function(){return n},n}function l(){var n=(0,e.Z)(["\n  background-color: ",";\n  border: 1px solid ",";\n  border-radius: 16px;\n  box-shadow: ",";\n  padding: 8px 16px;\n"]);return l=function(){return n},n}function f(){var n=(0,e.Z)(["\n  background: transparent;\n  border-radius: 0;\n  box-shadow: none;\n  padding-left: 0;\n  padding-right: 0;\n  text-align: ",";\n  border: none;\n\n  ::placeholder {\n    color: ",";\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: none;\n  }\n"]);return f=function(){return n},n}var m=(0,r.ZP)(c.Z).withConfig({componentId:"sc-e3b8048d-0"}).withConfig({componentId:"sc-e7fff275-0"})(s()),h=(0,r.ZP)(u.Z).withConfig({componentId:"sc-e3b8048d-1"}).withConfig({componentId:"sc-e7fff275-1"})(d(),function(n){return n.theme.colors.textSubtle}),p=(0,r.ZP)(i.Z).withConfig({componentId:"sc-e3b8048d-2"}).withConfig({componentId:"sc-e7fff275-2"})(l(),function(n){return n.theme.colors.input},function(n){return n.theme.colors.inputSecondary},function(n){var t=n.theme,o=n.isWarning;return t.shadows[o?"warning":"inset"]}),g=(0,r.ZP)(a.Z).withConfig({componentId:"sc-e3b8048d-3"}).withConfig({componentId:"sc-e7fff275-3"})(f(),function(n){var t=n.textAlign;return void 0===t?"right":t},function(n){return n.theme.colors.textSubtle})},56063:function(n,t,o){"use strict";o.d(t,{L:function(){return s},N:function(){return c}});var e=o(85893);o(67294);var r=o(1274),i=o(57049),a=o(98553),u=o(89663),c=function(n){var t=n.onClick,o=n.expanded,a=n.children;return(0,e.jsxs)(u.Z,{"aria-label":"Hide or show expandable content",onClick:t,children:[a,o?(0,e.jsx)(r.Z,{color:"invertedContrast"}):(0,e.jsx)(i.Z,{color:"invertedContrast"})]})};c.defaultProps={expanded:!1};var s=function(n){var t=n.onClick,o=n.expanded,u=n.children;return(0,e.jsx)(a.Z,{variant:"text","aria-label":"Hide or show expandable content",onClick:t,endIcon:o?(0,e.jsx)(r.Z,{color:"primary"}):(0,e.jsx)(i.Z,{color:"primary"}),children:u})};s.defaultProps={expanded:!1}},5349:function(n,t,o){"use strict";var e=o(7297),r=o(87379),i=o(57247);function a(){var n=(0,e.Z)(["\n  border-top: 1px solid ",";\n  ","\n"]);return a=function(){return n},n}var u=r.ZP.div.withConfig({componentId:"sc-5ed8a823-0"}).withConfig({componentId:"sc-cddac6ee-0"})(a(),function(n){return n.theme.colors.cardBorder},i.Dh);u.defaultProps={p:"24px"},t.Z=u},55209:function(n,t,o){"use strict";var e=o(7297),r=o(87379),i=o(57247);function a(){var n=(0,e.Z)(["\n  background: ",";\n  border-radius: ",";\n  ","\n"]);return a=function(){return n},n}var u=r.ZP.div.withConfig({componentId:"sc-e97edbbd-0"}).withConfig({componentId:"sc-206fd2b9-0"})(a(),function(n){var t=n.theme,o=n.variant;return t.card.cardHeaderBackground[void 0===o?"default":o]},function(n){var t=n.theme;return"".concat(t.radii.card," ").concat(t.radii.card," 0 0")},i.Dh);u.defaultProps={p:"24px"},t.Z=u},16789:function(n,t,o){"use strict";var e=o(7297),r=o(87379),i=o(63970);function a(){var n=(0,e.Z)(['\n  &:before {\n    border-radius: 50%;\n    border: 1px solid rgba(0, 0, 0, 0.25);\n    content: "";\n    height: 100%;\n    left: 0;\n    position: absolute;\n    top: 0;\n    width: 100%;\n    z-index: 7;\n  }\n']);return a=function(){return n},n}var u=(0,r.ZP)(i.Z).withConfig({componentId:"sc-cc5dea0d-0"}).withConfig({componentId:"sc-3ddd1e56-0"})(a());t.Z=u},41768:function(n,t,o){"use strict";o.d(t,{Z:function(){return b}});var e,r,i=o(26042),a=o(69396),u=o(99534),c=o(85893);o(67294);var s={DEFAULT:"default",INVERTED:"inverted"},d=o(14924),l=o(7297),f=o(87379),m=o(57247),h=o(16789);function p(){var n=(0,l.Z)(["\n  position: absolute;\n  width: ","; // 92, 82 are arbitrary numbers to fit the variant\n\n  ","\n"]);return p=function(){return n},n}function g(){var n=(0,l.Z)(["\n  position: absolute;\n  width: 50%;\n\n  ","\n"]);return g=function(){return n},n}var Z=(0,f.ZP)(h.Z).withConfig({componentId:"sc-d928f27a-0"}).withConfig({componentId:"sc-39331779-0"})(p(),function(n){return n.variant===s.DEFAULT?"92%":"82%"},(0,m.bU)({variants:(e={},(0,d.Z)(e,s.DEFAULT,{bottom:"auto",left:0,right:"auto",top:0,zIndex:5}),(0,d.Z)(e,s.INVERTED,{bottom:0,left:"auto",right:0,top:"auto",zIndex:6}),e)})),v=(0,f.ZP)(h.Z).withConfig({componentId:"sc-d928f27a-1"}).withConfig({componentId:"sc-39331779-1"})(g(),(0,m.bU)({variants:(r={},(0,d.Z)(r,s.DEFAULT,{bottom:0,left:"auto",right:0,top:"auto",zIndex:6}),(0,d.Z)(r,s.INVERTED,{bottom:"auto",left:0,right:"auto",top:0,zIndex:5}),r)})),x=o(25934),b=function(n){var t=n.primarySrc,o=n.secondarySrc,e=n.width,r=n.height,d=n.variant,l=void 0===d?s.DEFAULT:d,f=n.primaryImageProps,m=n.secondaryImageProps,h=(0,u.Z)(n,["primarySrc","secondarySrc","width","height","variant","primaryImageProps","secondaryImageProps"]),p=Math.floor(e/2);return(0,c.jsxs)(x.Z,(0,a.Z)((0,i.Z)({position:"relative",width:e,height:r},h),{children:[(0,c.jsx)(Z,(0,i.Z)({variant:l,src:t,width:e,height:r},void 0===f?{}:f)),(0,c.jsx)(v,(0,i.Z)({variant:l,src:o,width:p,height:p},void 0===m?{}:m))]}))}},1274:function(n,t,o){"use strict";var e=o(26042),r=o(69396),i=o(85893);o(67294);var a=o(44976),u=function(n){return(0,i.jsx)(a.Z,(0,r.Z)((0,e.Z)({viewBox:"0 0 24 24"},n),{children:(0,i.jsx)("path",{d:"M8.11997 14.7101L12 10.8301L15.88 14.7101C16.27 15.1001 16.9 15.1001 17.29 14.7101C17.68 14.3201 17.68 13.6901 17.29 13.3001L12.7 8.7101C12.31 8.3201 11.68 8.3201 11.29 8.7101L6.69997 13.3001C6.30997 13.6901 6.30997 14.3201 6.69997 14.7101C7.08997 15.0901 7.72997 15.1001 8.11997 14.7101Z"})}))};t.Z=u},94998:function(n,t,o){"use strict";var e=o(7297),r=o(87379),i=o(62077);function a(){var n=(0,e.Z)(["\n  text-decoration: underline dotted;\n  text-decoration-color: ",";\n  text-underline-offset: 0.1em;\n"]);return a=function(){return n},n}var u=(0,r.ZP)(i.Z).withConfig({componentId:"sc-5b87ff15-0"}).withConfig({componentId:"sc-b03971-0"})(a(),function(n){var t,o=n.theme,e=n.decorationColor;return"".concat((null==o?void 0:o.colors)&&e?o.colors[e]:null==o?void 0:null===(t=o.colors)||void 0===t?void 0:t.textSubtle)});t.Z=u},95934:function(n,t,o){"use strict";o.d(t,{h2:function(){return m},hl:function(){return l},m5:function(){return f}});var e=o(7297),r=o(87379),i=o(44147);function a(){var n=(0,e.Z)(["\n  width: ",";\n  padding: ",";\n  border: ",";\n  border-radius: ",";\n  background-color: ",";\n"]);return a=function(){return n},n}function u(){var n=(0,e.Z)(["\n  border: 1px solid ",";\n  background-color: ",";\n"]);return u=function(){return n},n}function c(){var n=(0,e.Z)(["\n  border: 1px solid ",";\n  background-color: ",";\n"]);return c=function(){return n},n}function s(){var n=(0,e.Z)(["\n  background-color: ",";\n"]);return s=function(){return n},n}var d=(0,r.ZP)(i.Z).withConfig({componentId:"sc-21be8dee-0"})(a(),function(n){var t=n.width;return null!=t?t:"100%"},function(n){var t=n.padding;return null!=t?t:"1.25rem"},function(n){return n.border},function(n){var t=n.borderRadius;return null!=t?t:"16px"},function(n){return n.theme.colors.background});t.ZP=d;var l=(0,r.ZP)(d).withConfig({componentId:"sc-21be8dee-1"})(u(),function(n){return n.theme.colors.cardBorder},function(n){return n.theme.colors.backgroundAlt}),f=(0,r.ZP)(d).withConfig({componentId:"sc-21be8dee-2"})(c(),function(n){return n.theme.colors.cardBorder},function(n){return n.theme.colors.background}),m=(0,r.ZP)(d).withConfig({componentId:"sc-21be8dee-3"})(s(),function(n){return n.theme.colors.dropdown})},49923:function(n,t,o){"use strict";var e=o(7297),r=o(87379);function i(){var n=(0,e.Z)(["\n  border: 1px solid ",";\n  width: 100%;\n"]);return i=function(){return n},n}var a=r.ZP.hr.withConfig({componentId:"sc-d9299de2-0"})(i(),function(n){return n.theme.colors.cardBorder});t.Z=a},39023:function(n,t,o){"use strict";o.d(t,{O:function(){return l},q:function(){return d}});var e=o(26042),r=o(99534),i=o(85893),a=o(41768),u=o(16789),c=o(46472),s=function(n){var t=(null==n?void 0:n.isNative)?n.wrapped.address:n.address;return n.chainId!==c.a_.BSC?"/images/".concat(n.chainId,"/tokens/").concat(t,".png"):"/images/tokens/".concat(t,".png")},d=function(n){var t=n.primaryToken,o=n.secondaryToken,u=(0,r.Z)(n,["primaryToken","secondaryToken"]);return(0,i.jsx)(a.Z,(0,e.Z)({primarySrc:s(t),secondarySrc:s(o)},u))},l=function(n){var t=n.token,o=(0,r.Z)(n,["token"]);return(0,i.jsx)(u.Z,(0,e.Z)({src:s(t)},o))}},85900:function(n,t,o){"use strict";o.d(t,{d:function(){return m}});var e=o(47568),r=o(26042),i=o(69396),a=o(36305),u=o(70655),c=o(67294),s=o(921),d=o(27361),l=o.n(d),f=o(92876);function m(){var n,t=(0,s.Fh)();return{callWithGasPrice:(0,c.useCallback)((n=(0,e.Z)(function(n,o){var e,c,s,d,m,h,p=arguments;return(0,u.__generator)(this,function(u){switch(u.label){case 0:return e=p.length>2&&void 0!==p[2]?p[2]:[],c=p.length>3&&void 0!==p[3]?p[3]:null,(0,f.n_)({type:"Transaction",message:"Call with gas price: ".concat(t),data:{contractAddress:n.address,methodName:o,methodArgs:e,overrides:c}}),s=l()(n,o),d=null==c?void 0:c.gasPrice,[4,s.apply(void 0,(0,a.Z)(e).concat([d?(0,r.Z)({},c):(0,i.Z)((0,r.Z)({},c),{gasPrice:t})]))];case 1:return(m=u.sent())&&(0,f.n_)({type:"Transaction",message:"Transaction sent: ".concat(m.hash),data:{hash:m.hash,from:m.from,gasLimit:null===(h=m.gasLimit)||void 0===h?void 0:h.toString(),nonce:m.nonce}}),[2,m]}})}),function(t,o){return n.apply(this,arguments)}),[t])}}},63088:function(n,t,o){"use strict";o.r(t),o.d(t,{default:function(){return J}});var e=o(85893),r=o(79637),i=o(42918),a=o(44305),u=o(47568),c=o(14924),s=o(26042),d=o(69396),l=o(10253),f=o(70655),m=o(67294),h=o(44431),p=o.n(h),g=o(97478),Z=o(75759),v=o(48674),x=o(87318),b=o(9796),w=o(70950),I=o(81379),P=function(n){var t,o=n.address,e=n.releaseBlockNumber,r=(0,v.w5)(n.currency.symbol),i=(0,m.useState)((0,c.Z)({isInitialized:!1,status:"idle",blocksRemaining:0,secondsUntilStart:0,progress:5,secondsUntilEnd:0,startBlockNum:0,endBlockNum:0,numberPoints:null,thresholdPoints:void 0},Z.vr.poolUnlimited,{raisingAmountPool:x.HW,totalAmountPool:x.HW,offeringAmountPool:x.HW,limitPerUserInLP:x.HW,taxRate:0,sumTaxesOverflow:x.HW})),a=i[0],h=i[1],P=(0,m.useCallback)((t=(0,u.Z)(function(n){var t,r,i,a,u,m,v,P,C,k,y,A;return(0,f.__generator)(this,function(f){switch(f.label){case 0:return t=["startBlock","endBlock","raisingAmount","totalAmount"].map(function(n){return{address:o,name:n}}),[4,(0,b.v)({abi:w,calls:t})];case 1:return i=(r=l.Z.apply(void 0,[f.sent(),4]))[0],a=r[1],u=r[2],m=r[3],v=i?i[0].toNumber():0,P=a?a[0].toNumber():0,C=(0,I.l)(n,v,P),k=P-v,y=P-n,A=n>v?(n-v)/k*100:(n-e)/(v-e)*100,h(function(t){return(0,d.Z)((0,s.Z)({},t),(0,c.Z)({isInitialized:!0,status:C,blocksRemaining:y,secondsUntilStart:(v-n)*g.hJ,progress:A,secondsUntilEnd:y*g.hJ,startBlockNum:v,endBlockNum:P},Z.vr.poolUnlimited,(0,d.Z)((0,s.Z)({},t.poolUnlimited),{raisingAmountPool:u?new(p())(u[0].toString()):x.HW,totalAmountPool:m?new(p())(m[0].toString()):x.HW})))}),[2]}})}),function(n){return t.apply(this,arguments)}),[o,e]);return(0,d.Z)((0,s.Z)({},a),{currencyPriceInUSD:r,fetchIfoData:P})},C=o(29315),k=o(36963),y=o(65585),A=(0,c.Z)({isInitialized:!1},Z.vr.poolUnlimited,{amountTokenCommittedInLP:x.HW,hasClaimed:!1,isPendingTx:!1,offeringAmountInToken:x.HW,refundingAmountInLP:x.HW,taxAmountInLP:x.HW}),T=function(n){var t=(0,m.useState)(A),o=t[0],e=t[1],r=n.address,i=n.currency,a=o.poolUnlimited,h=(0,C.Ge)().account,g=(0,k.nc)(r),v=(0,k.X_)(i.address,!1),I=(0,y.Z)(v,r,a.isPendingTx),P=function(n){return e(function(t){return(0,d.Z)((0,s.Z)({},t),(0,c.Z)({},Z.vr.poolUnlimited,(0,d.Z)((0,s.Z)({},t.poolUnlimited),{isPendingTx:n})))})},T=function(){e(function(n){return(0,d.Z)((0,s.Z)({},n),(0,c.Z)({},Z.vr.poolUnlimited,(0,d.Z)((0,s.Z)({},n.poolUnlimited),{hasClaimed:!0})))})},U=(0,m.useCallback)((0,u.Z)(function(){var n,t,o,i,a,u;return(0,f.__generator)(this,function(f){switch(f.label){case 0:return n=["getOfferingAmount","userInfo","getRefundingAmount"].map(function(n){return{address:r,name:n,params:[h]}}),[4,(0,b.v)({abi:w,calls:n})];case 1:return o=(t=l.Z.apply(void 0,[f.sent(),3]))[0],i=t[1],a=t[2],u=i?{amount:new(p())(i.amount.toString()),claimed:i.claimed}:{amount:x.HW,claimed:!1},e(function(n){return(0,c.Z)({isInitialized:!0},Z.vr.poolUnlimited,(0,d.Z)((0,s.Z)({},n.poolUnlimited),{amountTokenCommittedInLP:u.amount,hasClaimed:u.claimed,offeringAmountInToken:o?new(p())(o[0].toString()):x.HW,refundingAmountInLP:a?new(p())(a[0].toString()):x.HW}))}),[2]}})}),[h,r]),H=(0,m.useCallback)(function(){e(A)},[]);return(0,d.Z)((0,s.Z)({},o),{allowance:I,contract:g,setPendingTx:P,setIsClaimed:T,fetchIfoData:U,resetIfoData:H})},U=o(64468),H=function(n){var t=n.ifo,o=P(t),r=T(t);return(0,e.jsx)(U.ZP,{ifo:t,publicIfoData:o,walletIfoData:r})},S=o(4554),W=o(40370),L=o(20335),j=L.xs.from(1e10),N=function(n){return{raisingAmountPool:n?new(p())(n[0].toString()):x.HW,offeringAmountPool:n?new(p())(n[1].toString()):x.HW,limitPerUserInLP:n?new(p())(n[2].toString()):x.HW,hasTax:!!n&&n[3],totalAmountPool:n?new(p())(n[4].toString()):x.HW,sumTaxesOverflow:n?new(p())(n[5].toString()):x.HW}},B=function(n){var t,o=n.address,e=n.releaseBlockNumber,r=(0,v.Iu)(),i=(0,v.w5)(n.currency.symbol),a=n.currency===W.ds.cake?r:i,c=(0,m.useState)({isInitialized:!1,status:"idle",blocksRemaining:0,secondsUntilStart:0,progress:5,secondsUntilEnd:0,poolBasic:{raisingAmountPool:x.HW,offeringAmountPool:x.HW,limitPerUserInLP:x.HW,taxRate:0,totalAmountPool:x.HW,sumTaxesOverflow:x.HW},poolUnlimited:{raisingAmountPool:x.HW,offeringAmountPool:x.HW,limitPerUserInLP:x.HW,taxRate:0,totalAmountPool:x.HW,sumTaxesOverflow:x.HW},thresholdPoints:void 0,startBlockNum:0,endBlockNum:0,numberPoints:0}),h=c[0],p=c[1],Z=(0,m.useCallback)((t=(0,u.Z)(function(n){var t,r,i,a,u,c,m,h,Z,v,x,w,P,C,k,y,A;return(0,f.__generator)(this,function(f){switch(f.label){case 0:return[4,(0,b.v)({abi:S,calls:[{address:o,name:"startBlock"},{address:o,name:"endBlock"},{address:o,name:"viewPoolInformation",params:[0]},{address:o,name:"viewPoolInformation",params:[1]},{address:o,name:"viewPoolTaxRateOverflow",params:[1]},{address:o,name:"numberPoints"},{address:o,name:"thresholdPoints"}].filter(Boolean)})];case 1:return r=(t=l.Z.apply(void 0,[f.sent(),7]))[0],i=t[1],a=t[2],u=t[3],c=t[4],m=t[5],h=t[6],Z=N(a),v=N(u),x=r?r[0].toNumber():0,w=i?i[0].toNumber():0,P=c?L.xs.from(c[0]).divUnsafe(j).toUnsafeFloat():0,C=(0,I.l)(n,x,w),k=w-x,y=w-n,A=n>x?(n-x)/k*100:(n-e)/(x-e)*100,p(function(t){return(0,d.Z)((0,s.Z)({},t),{isInitialized:!0,secondsUntilEnd:y*g.hJ,secondsUntilStart:(x-n)*g.hJ,poolBasic:(0,d.Z)((0,s.Z)({},Z),{taxRate:0}),poolUnlimited:(0,d.Z)((0,s.Z)({},v),{taxRate:P}),status:C,progress:A,blocksRemaining:y,startBlockNum:x,endBlockNum:w,thresholdPoints:h&&h[0],numberPoints:m?m[0].toNumber():0})}),[2]}})}),function(n){return t.apply(this,arguments)}),[e,o]);return(0,d.Z)((0,s.Z)({},h),{currencyPriceInUSD:a,fetchIfoData:Z})},_={isInitialized:!1,poolBasic:{amountTokenCommittedInLP:x.HW,offeringAmountInToken:x.HW,refundingAmountInLP:x.HW,taxAmountInLP:x.HW,hasClaimed:!1,isPendingTx:!1},poolUnlimited:{amountTokenCommittedInLP:x.HW,offeringAmountInToken:x.HW,refundingAmountInLP:x.HW,taxAmountInLP:x.HW,hasClaimed:!1,isPendingTx:!1}},D=function(n){var t=(0,m.useState)(_),o=t[0],e=t[1],r=n.address,i=n.currency,a=(0,C.Ge)().account,h=(0,k.gx)(r),g=(0,k.X_)(i.address,!1),Z=(0,y.Z)(g,r),v=function(n,t){return e(function(o){return(0,d.Z)((0,s.Z)({},o),(0,c.Z)({},t,(0,d.Z)((0,s.Z)({},o[t]),{isPendingTx:n})))})},x=function(n){e(function(t){return(0,d.Z)((0,s.Z)({},t),(0,c.Z)({},n,(0,d.Z)((0,s.Z)({},t[n]),{hasClaimed:!0})))})},w=(0,m.useCallback)((0,u.Z)(function(){var n,t,o,i;return(0,f.__generator)(this,function(u){switch(u.label){case 0:return n=["viewUserInfo","viewUserOfferingAndRefundingAmountsForPools"].map(function(n){return{address:r,name:n,params:[a,[0,1]]}}),[4,(0,b.v)({abi:S,calls:n})];case 1:return o=(t=l.Z.apply(void 0,[u.sent(),2]))[0],i=t[1],e(function(n){return(0,d.Z)((0,s.Z)({},n),{isInitialized:!0,poolBasic:(0,d.Z)((0,s.Z)({},n.poolBasic),{amountTokenCommittedInLP:new(p())(o[0][0].toString()),offeringAmountInToken:new(p())(i[0][0][0].toString()),refundingAmountInLP:new(p())(i[0][0][1].toString()),taxAmountInLP:new(p())(i[0][0][2].toString()),hasClaimed:o[1][0]}),poolUnlimited:(0,d.Z)((0,s.Z)({},n.poolUnlimited),{amountTokenCommittedInLP:new(p())(o[0][1].toString()),offeringAmountInToken:new(p())(i[0][1][0].toString()),refundingAmountInLP:new(p())(i[0][1][1].toString()),taxAmountInLP:new(p())(i[0][1][2].toString()),hasClaimed:o[1][1]})})}),[2]}})}),[a,r]),I=(0,m.useCallback)(function(){e((0,s.Z)({},_))},[]);return(0,d.Z)((0,s.Z)({},o),{allowance:Z,contract:h,setPendingTx:v,setIsClaimed:x,fetchIfoData:w,resetIfoData:I})},E=function(n){var t=n.ifo,o=B(t),r=D(t);return(0,e.jsx)(U.ZP,{ifo:t,publicIfoData:o,walletIfoData:r})},R=o(50258),z=o(47228),F=function(n){var t=n.ifo,o=(0,R.Z)(t),r=(0,z.Z)(t);return(0,e.jsx)(U.ZP,{ifo:t,publicIfoData:o,walletIfoData:r})},O=o(80099),M=i.Q2.filter(function(n){return!n.isActive}),X=function(){return(0,e.jsx)(a.Z,{children:(0,e.jsx)(O.Z,{maxWidth:"736px",m:"auto",width:"100%",id:"past-ifos",py:["24px","24px","40px"],children:M.map(function(n){switch(n.version){case 1:return(0,e.jsx)(H,{ifo:n},n.id);case 2:return(0,e.jsx)(E,{ifo:n},n.id);case 3:case 3.1:case 3.2:return(0,e.jsx)(F,{ifo:n},n.id);default:return null}})})})},V=function(){return(0,e.jsx)(X,{})};V.Layout=r.t;var J=V},13471:function(n,t){"use strict";var o=function(n){var t=Math.abs(n),o={years:0,months:0,days:0,hours:0,minutes:0,seconds:0};return t>=31557600&&(o.years=Math.floor(t/31557600),t-=31557600*o.years),t>=2629800&&(o.months=Math.floor(t/2629800),t-=2629800*o.months),t>=86400&&(o.days=Math.floor(t/86400),t-=86400*o.days),t>=3600&&(o.hours=Math.floor(t/3600),t-=3600*o.hours),t>=60&&(o.minutes=Math.floor(t/60),t-=60*o.minutes),o.seconds=t,o};t.Z=o}},function(n){n.O(0,[2298,7978,8451,5837,2766,9774,2888,179],function(){return n(n.s=73779)}),_N_E=n.O()}]);