(this.webpackJsonplgweb3=this.webpackJsonplgweb3||[]).push([[0],{205:function(t,n,e){},218:function(t,n){},227:function(t,n){},245:function(t,n){},247:function(t,n){},264:function(t,n){},265:function(t,n){},330:function(t,n){},332:function(t,n){},341:function(t,n){},343:function(t,n){},368:function(t,n){},370:function(t,n){},371:function(t,n){},377:function(t,n){},390:function(t,n){},402:function(t,n){},405:function(t,n){},410:function(t,n){},421:function(t,n){},424:function(t,n){},476:function(t){t.exports=JSON.parse('{"abi":[{"constant":false,"inputs":[],"name":"claim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"getAirdrop","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newLG_Addr","type":"address"}],"name":"modifyLGAddr","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_AirdropAmount","type":"uint256"}],"name":"setAirdropAmount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_LG","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":true,"inputs":[],"name":"AirdropAmount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"isget","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"LG","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"}]}')},478:function(t,n,e){"use strict";e.r(n);var o=e(16),a=e(49),c=e.n(a),i=e(192),s=e.n(i),u=(e(205),e(26)),r=e.n(u),l=e(193),p=e(4),f=e(6),d=e(10),b=e(9),y=e(194),h=e.n(y),m=function(t){Object(d.a)(a,t);var n=Object(b.a)(a);function a(t){var e;return Object(p.a)(this,a),(e=n.call(this,t)).Getter=function(){window.myContract.methods.AirdropAmount().call().then((function(t){console.log(t),e.setState({AirdropAmount:t})}))},e.getAirdrop=function(){window.myContract.methods.getAirdrop().send({from:window.defaultAccount}).on("transactionHash",(function(t){console.log("transactionHash",t)})).on("receipt",(function(t){console.log({receipt:t})})).on("error",(function(t,n){console.log({error:t,receipt:n})}))},e.state={AirdropAmount:0},e}return Object(f.a)(a,[{key:"componentDidMount",value:function(){var t=Object(l.a)(r.a.mark((function t(){var n,o,a,c,i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("undefined"===typeof window.ethereum){t.next=27;break}return(n=window.ethereum).autoRefreshOnNetwoorkChange=!1,t.prev=3,t.next=6,n.enable();case 6:o=t.sent,console.log(o),a=window.ethereum,console.log(a),console.log(a.chainId),c=new h.a(a),console.log(c),i=e(476),"0x6ce2f1206a8b6736543e357049a7e17f0cb29368",window.myContract=new c.eth.Contract(i.abi,"0x6ce2f1206a8b6736543e357049a7e17f0cb29368"),console.log(window.myContract),window.defaultAccount=o[0].toLowerCase(),console.log(window.defaultAccount),n.on("accountsChanged",(function(t){console.log("accountsChanged:"+t)})),n.on("networkChanged",(function(t){console.log("networkChanged:"+t)})),t.next=25;break;case 23:t.prev=23,t.t0=t.catch(3);case 25:t.next=28;break;case 27:console.log("\u6ca1\u6709metamask");case 28:case"end":return t.stop()}}),t,null,[[3,23]])})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this;return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"LG\u7a7a\u6295\u9886\u53d6"}),Object(o.jsx)("p",{children:"\u6bcf\u4e2a\u4eba\u53ea\u53ef\u9886\u53d6\u4e00\u6b21\uff0c\u8bf7\u52ff\u91cd\u590d\u9886\u53d6"})]}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsxs)("div",{children:["\xa0\xa0 ",Object(o.jsx)("button",{onClick:function(){t.Getter()},children:Object(o.jsx)("h4",{children:"\u6bcf\u4eba\u53ef\u9886\u6570\u91cf"})}),"\xa0 ",this.state.AirdropAmount/Math.pow(10,18)]}),Object(o.jsx)("hr",{}),"\xa0\xa0",Object(o.jsx)("button",{onClick:function(){t.getAirdrop()},children:Object(o.jsx)("h2",{children:"\u9886\u53d6\u7a7a\u6295"})})]})}}]),a}(a.Component),w=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,481)).then((function(n){var e=n.getCLS,o=n.getFID,a=n.getFCP,c=n.getLCP,i=n.getTTFB;e(t),o(t),a(t),c(t),i(t)}))};s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root")),w()}},[[478,1,2]]]);
//# sourceMappingURL=main.27fe3d89.chunk.js.map