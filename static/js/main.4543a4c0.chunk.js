(this.webpackJsonplgv2=this.webpackJsonplgv2||[]).push([[0],{205:function(e,t,n){},207:function(e,t,n){},220:function(e,t){},229:function(e,t){},247:function(e,t){},249:function(e,t){},266:function(e,t){},267:function(e,t){},331:function(e,t){},333:function(e,t){},342:function(e,t){},344:function(e,t){},369:function(e,t){},371:function(e,t){},372:function(e,t){},378:function(e,t){},391:function(e,t){},403:function(e,t){},406:function(e,t){},411:function(e,t){},422:function(e,t){},425:function(e,t){},478:function(e,t,n){"use strict";n.r(t);var a=n(49),s=n.n(a),o=n(194),i=n.n(o),c=(n(205),n(22)),u=n.n(c),r=n(103),p=n(4),l=n(6),d=n(11),b=n(10),y=(n.p,n(207),n(195)),f=new(n.n(y).a)(window.web3.currentProvider),m=new f.eth.Contract([{constant:!1,inputs:[],name:"claim",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"getAirdrop",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"newLG_Addr",type:"address"}],name:"modifyLGAddr",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_AirdropAmount",type:"uint256"}],name:"setAirdropAmount",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"newOwner",type:"address"}],name:"transferOwer",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{inputs:[{name:"_LG",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{constant:!0,inputs:[],name:"AirdropAmount",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"isget",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"LG",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"}],"0x6ce2f1206a8b6736543e357049a7e17f0cb29368"),h=new f.eth.Contract([{constant:!1,inputs:[{name:"spender",type:"address"},{name:"value",type:"uint256"}],name:"approve",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"from",type:"address"},{name:"to",type:"address"},{name:"value",type:"uint256"}],name:"transferFrom",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"spender",type:"address"},{name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"owner",type:"address"}],name:"balanceOf",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"spender",type:"address"},{name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"to",type:"address"},{name:"value",type:"uint256"}],name:"transfer",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],name:"allowance",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Approval",type:"event"}],"0x7cc0c1a34b1ae55f9bd2a19ece9d4b166b66e70c"),j=n(8),x=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={AirdropAmount:"",user:"",LGbalance:"",Airdrop_LGbalance:"",balance:"",value:"",airdrop_adr:"0x6ce2f1206a8b6736543e357049a7e17f0cb29368"},e.getAirdrop=function(){m.methods.getAirdrop().send({from:window.defaultAccount})},e.onSubmit=function(){var t=Object(r.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.preventDefault(),m.methods.setAirdropAmount(f.utils.toWei(e.state.value,"ether")).send({from:window.defaultAccount});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(r.a)(u.a.mark((function e(){var t,n,a,s,o,i,c,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("undefined"===typeof window.ethereum){e.next=21;break}return(t=window.ethereum).autoRefreshOnNetwoorkChange=!1,e.prev=3,e.next=6,t.enable();case 6:n=e.sent,console.log(n),a=window.ethereum,console.log(a),console.log(a.chainId),window.defaultAccount=n[0].toLowerCase(),console.log(window.defaultAccount),t.on("accountsChanged",(function(e){console.log("accountsChanged:"+e)})),t.on((function(e){console.log(e)})),e.next=19;break;case 17:e.prev=17,e.t0=e.catch(3);case 19:e.next=22;break;case 21:console.log("\u6ca1\u6709metamask");case 22:return s=window.defaultAccount,this.setState({user:s}),e.next=26,m.methods.AirdropAmount().call();case 26:return o=e.sent,this.setState({AirdropAmount:o}),e.next=30,h.methods.balanceOf(window.defaultAccount).call();case 30:return i=e.sent,this.setState({LGbalance:i}),e.next=34,h.methods.balanceOf(this.state.airdrop_adr).call();case 34:return c=e.sent,this.setState({Airdrop_LGbalance:c}),e.next=38,f.eth.getBalance(window.defaultAccount);case 38:r=e.sent,this.setState({balance:r});case 40:case"end":return e.stop()}}),e,this,[[3,17]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{style:{margin:5,lineHeight:"100%"},children:[Object(j.jsx)("div",{children:Object(j.jsx)("p",{style:{color:"red",fontSize:"10px"},children:"\u514d\u8d23\u58f0\u660e: \u672c\u5e73\u53f0\u7cfb\u533a\u5757\u94fe\u7231\u597d\u8005\u521b\u7acb\uff0c\u65e8\u5728\u5f00\u53d1\u5404\u7c7b\u667a\u80fd\u5408\u7ea6\u8ba9\u533a\u5757\u94fe\u843d\u5730\u5e94\u7528\u3002\u575a\u5b88\u9053\u5fb7\u51c6\u7ef3\u3002 \u8bf7\u5145\u5206\u4e86\u89e3\u533a\u5757\u94fe\u884c\u4e1a\u7684\u5404\u79cd\u98ce\u9669\uff0c\u672c\u5e73\u53f0\u4e0d\u627f\u62c5\u4efb\u4f55\u539f\u56e0\u5bfc\u81f4\u7684\u60a8\u7684\u635f\u5931\uff0c \u5305\u62ec\u672c\u5e73\u53f0\u53ef\u80fd\u5b58\u5728\u7684\u4ee3\u7801\u6f0f\u6d1e\u3001\u9ed1\u5ba2\u653b\u51fb\u7b49\u3002"})}),Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:"\u60a8\u7684\u5f53\u524d\u5e10\u6237:"}),Object(j.jsx)("p",{style:{fontSize:"15px"},children:this.state.user})]}),Object(j.jsx)("hr",{}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"\u60a8\u7684\u8d44\u4ea7\u4f59\u989d"}),Object(j.jsxs)("p",{children:["HT----",f.utils.fromWei(this.state.balance,"ether")]}),Object(j.jsxs)("p",{children:["LG----",f.utils.fromWei(this.state.LGbalance,"ether")]})]}),Object(j.jsx)("hr",{}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"LG\u7a7a\u6295"}),Object(j.jsx)("p",{style:{lineHeight:"50%"},children:Object(j.jsx)("nobr",{style:{color:"blue",fontSize:"13px"},children:"\u5408\u7ea6\u5730\u5740: 0x7cc0c1a34b1ae55f9bd2a19ece9d4b166b66e70c"})}),Object(j.jsxs)("p",{children:["\u7a7a\u6295\u6c60\u4f59\u989d:  ",f.utils.fromWei(this.state.Airdrop_LGbalance,"ether"),"LG",Object(j.jsx)("nobr",{style:{color:"blue",fontSize:"10px"},children:"\uff08\u4e0d\u5b9a\u671f\u6dfb\u52a0\u4f59\u989d\uff0c\u5c11\u4e8e100\u65f6\u8bf7\u4e0d\u8981\u9886\u53d6\uff09"})]}),Object(j.jsxs)("p",{children:["\u6bcf\u4e2a\u5e10\u6237\u53ef\u9886\u53d6\u6570\u91cf\uff1a ",this.state.AirdropAmount/Math.pow(10,18),"LG"]}),Object(j.jsx)("button",{onClick:function(){e.getAirdrop()},children:"\u9886\u53d6\u7a7a\u6295"})]}),Object(j.jsx)("hr",{}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"LG\u751f\u6001\u4e4b\u7ea2\u5305\u53d1\u53d1\u53d1"}),Object(j.jsx)("p",{children:"\u656c\u8bf7\u671f\u5f85\u2026\u2026"})]}),Object(j.jsx)("hr",{}),Object(j.jsx)("hr",{}),Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:"\u7ba1\u7406\u5458\u64cd\u4f5c\u90e8\u5206"}),Object(j.jsx)("form",{onSubmit:this.onSubmit,children:Object(j.jsxs)("p",{children:["\u4fee\u6539\u7a7a\u6295\u91cf",Object(j.jsx)("input",{value:this.state.value,onChange:function(t){e.setState({value:t.target.value})}}),Object(j.jsx)("button",{children:"\u53d1\u9001"})]})})]})]})}}]),n}(a.Component),w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,482)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),o(e),i(e)}))};i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root")),w()}},[[478,1,2]]]);
//# sourceMappingURL=main.4543a4c0.chunk.js.map