(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9001],{56029:function(e,t,n){var r=n(33448);e.exports=function(e,t,n){for(var o=-1,u=e.length;++o<u;){var a=e[o],i=t(a);if(null!=i&&(void 0===s?i==i&&!r(i):n(i,s)))var s=i,c=a}return c}},53325:function(e){function t(e,t){return e>t}e.exports=t},84753:function(e,t,n){var r=n(56029),o=n(53325),u=n(67206);e.exports=function(e,t){return e&&e.length?r(e,u(t,2),o):void 0}},3945:function(e,t,n){var r=n(79833);e.exports=function(e){return r(e).toUpperCase()}},70257:function(e,t,n){"use strict";var r=n(7297),o=n(87379),u=n(57247);function a(){var e=(0,r.Z)(["\n  ","\n"]);return a=function(){return e},e}var i=o.ZP.div.withConfig({componentId:"sc-df4f0a61-0"}).withConfig({componentId:"sc-657c9e-0"})(a(),u.Dh);i.defaultProps={p:"24px"},t.Z=i},1274:function(e,t,n){"use strict";var r=n(26042),o=n(69396),u=n(85893);n(67294);var a=n(44976),i=function(e){return(0,u.jsx)(a.Z,(0,o.Z)((0,r.Z)({viewBox:"0 0 24 24"},e),{children:(0,u.jsx)("path",{d:"M8.11997 14.7101L12 10.8301L15.88 14.7101C16.27 15.1001 16.9 15.1001 17.29 14.7101C17.68 14.3201 17.68 13.6901 17.29 13.3001L12.7 8.7101C12.31 8.3201 11.68 8.3201 11.29 8.7101L6.69997 13.3001C6.30997 13.6901 6.30997 14.3201 6.69997 14.7101C7.08997 15.0901 7.72997 15.1001 8.11997 14.7101Z"})}))};t.Z=i},13351:function(e,t,n){"use strict";n.d(t,{A:function(){return a},Z:function(){return i}});var r=n(85893),o=n(67294),u=n(9473),a=(0,o.createContext)(null);function i(e){var t=e.children,n=e.store;return(0,r.jsx)(u.zt,{store:n,context:a,children:t})}},29807:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(67294),o=n(50308),u=n.n(o),a=n(13351);function i(){var e,t=(0,r.useContext)(a.A),n=(0,r.useCallback)(u(),[]);return(null==t?void 0:null===(e=t.store)||void 0===e?void 0:e.dispatch)||n}},89890:function(e,t,n){"use strict";n.d(t,{WR:function(){return j},Dh:function(){return en},n3:function(){return w},XM:function(){return G},dJ:function(){return I},Gc:function(){return q},ds:function(){return z},sz:function(){return D},pw:function(){return $},J7:function(){return U},m3:function(){return T},Wx:function(){return _},dW:function(){return W},YY:function(){return Y},Gy:function(){return X},AC:function(){return V},HF:function(){return J},Ok:function(){return Q},eI:function(){return K},nB:function(){return ee},hU:function(){return M},Z_:function(){return E},dm:function(){return N},Aq:function(){return O},YF:function(){return R},e:function(){return L},b1:function(){return et}});var r=n(67294),o=n(97119),u=n(29807),a=n(9473),i=n(13351),s=(0,a.gR)(i.A),c=n(24179),l=n(14924),d=n(26042),f=n(69396),h=n(2593),p=n(75472),m=n.n(p),b=n(68697),g=n(79279),y=function(e){return e.currentEpoch},v=function(e){return e.rounds},Z=function(e){return e.ledgers},S=function(e){return e.claimableStatuses},k=function(e){return e.minBetAmount},C=function(e){return e.intervalSeconds},P=(0,b.P1)([v],function(e){return Object.keys(e).reduce(function(t,n){var r=(0,g.zN)(e[n]);return(0,f.Z)((0,d.Z)({},t),(0,l.Z)({},r.closeOracleId,r))},{})}),A=(0,b.P1)([v],function(e){return Object.keys(e).reduce(function(t,n){return(0,f.Z)((0,d.Z)({},t),(0,l.Z)({},n,(0,g.zN)(e[n])))},{})}),B=(0,b.P1)([A],function(e){return m()(Object.values(e),["epoch"],["asc"])}),F=(0,b.P1)([y,B],function(e,t){return{currentEpoch:e,rounds:t}}),H=(0,b.P1)([k],h.O$.from),x=(0,b.P1)([y,A,C],function(e,t,n){if(e){var r=t[e-1];return r?r.closeTimestamp?r.closeTimestamp:r.lockTimestamp+n:void 0}}),E=function(){return s(P)},N=function(){return s(B)},O=function(){return s(F)},w=function(e,t){var n=(0,r.useMemo)(function(){var n,r;return(0,b.P1)([Z],function(n){return n[e]&&n[e][t]?(0,g.zN)(n[e][t]):null})},[e,t]);return s(n)},_=function(e){var t=(0,r.useMemo)(function(){var t;return(0,b.P1)([S],function(t){return t[e]||!1})},[e]);return s(t)},L=function(){return s(function(e){return e.isHistoryPaneOpen})},R=function(){return s(function(e){return e.isChartPaneOpen})},j=function(){return s(function(e){return e.chartView})},I=function(){return s(function(e){return e.currentEpoch})},T=function(){return s(function(e){return e.intervalSeconds})},M=function(){return s(function(e){return e.status})},U=function(){return s(function(e){return e.historyFilter})},D=function(){return s(function(e){return e.hasHistoryLoaded})},q=function(){return s(function(e){return e.currentHistoryPage})},K=function(){return s(H)},G=function(){return s(function(e){return e.bufferSeconds})},W=function(){return s(function(e){return e.isFetchingHistory})},$=function(){return s(function(e){return e.history})},z=function(){return s(x)},V=function(){return s(function(e){return e.leaderboard.loadingState})},J=function(){return s(function(e){return e.leaderboard.results})},Y=function(){return s(function(e){return e.leaderboard.filters})},Q=function(){return s(function(e){return e.leaderboard.skip})},X=function(){return s(function(e){return e.leaderboard.hasMoreResults})},ee=function(e){var t,n=s(function(t){return t.leaderboard.addressResults[e]}),a=(0,u.Z)();return(0,r.useEffect)(function(){var t=(0,o.UJ)(e);!n&&null!==n&&t&&a((0,c.nI)(e))},[a,e,n]),n},et=function(e){var t=s(function(e){return e.leaderboard.selectedAddress}),n=e||t,r=ee(n),o=V();return{address:n,result:r,leaderboardLoadingState:o}},en=function(){var e=W(),t=$();return{isLoadingHistory:e,history:t}}},24179:function(e,t,n){"use strict";n.d(t,{E3:function(){return O},G$:function(){return z},Mk:function(){return M},S9:function(){return _},Ub:function(){return L},WB:function(){return $},Yq:function(){return G},bq:function(){return K},dG:function(){return I},l3:function(){return V},nI:function(){return T},nQ:function(){return q},uP:function(){return j},uw:function(){return w},vR:function(){return W}});var r,o,u,a,i,s,c=n(47568),l=n(14924),d=n(26042),f=n(69396),h=n(10253),p=n(36305),m=n(70655),b=n(5700),g=n(2593),y=n(61744),v=n(84753),Z=n.n(v),S=n(82492),k=n.n(S),C=n(96026),P=n.n(C),A=n(35937),B=n.n(A),F=n(96470),H=n(75759),x=n(81272),E=n(79279),N=n(51904),O={status:F.Gw.INITIAL,chartView:F.RU.Chainlink,isLoading:!1,isHistoryPaneOpen:!1,isChartPaneOpen:!1,isFetchingHistory:!1,historyFilter:F.dZ.ALL,currentEpoch:0,intervalSeconds:300,minBetAmount:"10000000000000",bufferSeconds:60,rounds:{},history:[],totalHistory:0,currentHistoryPage:1,hasHistoryLoaded:!1,ledgers:{},claimableStatuses:{},leaderboard:{selectedAddress:null,loadingState:H.iF.Idle,filters:{address:null,orderBy:"totalBets",timePeriod:"all"},skip:0,hasMoreResults:!0,addressResults:{},results:[]}},w=(0,b.hg)("predictions/initialize",(0,c.Z)(function(){var e,t,n,r,o,u,a,i,s,c,p=arguments;return(0,m.__generator)(this,function(o){switch(o.label){case 0:return e=p.length>0&&void 0!==p[0]?p[0]:null,t=(p.length>1?p[1]:void 0).extra,[4,(0,E.n)(t.address)];case 1:return r=(n=o.sent()).currentEpoch>x.v9?P()(n.currentEpoch,n.currentEpoch-x.v9):[n.currentEpoch],[4,(0,E.$8)(r,t.address)];case 2:if(u=o.sent().reduce(function(e,t){var n=(0,E.WB)(t);return(0,f.Z)((0,d.Z)({},e),(0,l.Z)({},n.epoch.toString(),n))},{}),a=(0,f.Z)((0,d.Z)({},n),{rounds:u,ledgers:{},claimableStatuses:{}}),!e)return[2,a];return[4,Promise.all([(0,E.Tq)(e,r,t.address),(0,E.jG)(e,r,t.address)])];case 3:return s=(i=h.Z.apply(void 0,[o.sent(),2]))[0],c=i[1],[2,k()({},a,{ledgers:(0,E.a8)(e,s,r),claimableStatuses:c})]}})})),_=(0,b.hg)("predictions/fetchPredictionData",(0,c.Z)(function(){var e,t,n,r,o,u,a,i,s,c,p,b,g,y,v,Z=arguments;return(0,m.__generator)(this,function(s){switch(s.label){case 0:return e=Z.length>0&&void 0!==Z[0]?Z[0]:null,t=(Z.length>1?Z[1]:void 0).extra,[4,(0,E.n)(t.address)];case 1:return r=(n=s.sent()).status,o=n.currentEpoch,u=n.intervalSeconds,a=n.minBetAmount,i=[o,o-1,o-2],[4,(0,E.$8)(i,t.address)];case 2:if(p={status:r,currentEpoch:o,intervalSeconds:u,minBetAmount:a,rounds:s.sent().reduce(function(e,t){if(!t)return e;var n=(0,E.WB)(t);return(0,f.Z)((0,d.Z)({},e),(0,l.Z)({},n.epoch.toString(),n))},{}),ledgers:{},claimableStatuses:{}},!e)return[2,p];return b=o>x.v9?P()(o,o-x.v9):[o],[4,Promise.all([(0,E.Tq)(e,b,t.address),(0,E.jG)(e,b,t.address)])];case 3:return y=(g=h.Z.apply(void 0,[s.sent(),2]))[0],v=g[1],[2,k()({},p,{ledgers:(0,E.a8)(e,y,b),claimableStatuses:v})]}})})),L=(0,b.hg)("predictions/fetchLedgerData",(r=(0,c.Z)(function(e,t){var n,r,o,u;return(0,m.__generator)(this,function(a){switch(a.label){case 0:return n=e.account,r=e.epochs,o=t.extra,[4,(0,E.Tq)(n,r,o.address)];case 1:return u=a.sent(),[2,(0,E.a8)(n,u,r)]}})}),function(e,t){return r.apply(this,arguments)})),R=(0,b.hg)("predictions/fetchHistory",(o=(0,c.Z)(function(e,t){var n,r,o,u,a,i;return(0,m.__generator)(this,function(i){switch(i.label){case 0:return n=e.account,r=e.claimed,o=t.extra,[4,(0,E.Fr)({user:n.toLowerCase(),claimed:r},void 0,void 0,o.api,o.token.symbol)];case 1:return u=i.sent(),a=(0,E.ld)(o.token.symbol),[2,{account:n,bets:u.map(a)}]}})}),function(e,t){return o.apply(this,arguments)})),j=(0,b.hg)("predictions/fetchNodeHistory",(u=(0,c.Z)(function(e,t){var n,r,o,u,a,i,s,c,l,d,f,b,v,Z,S,k,C;return(0,m.__generator)(this,function(m){switch(m.label){case 0:return n=e.account,o=void 0===(r=e.page)?1:r,u=t.getState,a=t.extra,[4,(0,E.t$)(n,a.address)];case 1:if(s={bets:[],claimableStatuses:{},totalHistory:(i=m.sent()).toNumber()},c=i.lte(x.yg)?1:Math.ceil(i.toNumber()/x.yg),i.eq(0)||o>c)return[2,s];return l=i.sub(x.yg*o),d=c===o?i.sub(x.yg*(o-1)).toNumber():x.yg,[4,(0,E.oO)(n,l.lt(0)?0:l.toNumber(),d,a.address)];case 2:if(!(f=m.sent()))return[2,s];return b=Object.keys(f).map(function(e){return Number(e)}),[4,Promise.all([(0,E.$8)(b,a.address),(0,E.jG)(n,b,a.address)])];case 3:return Z=(v=h.Z.apply(void 0,[m.sent(),2]))[0],S=v[1],k=u().bufferSeconds,[2,{bets:Z.reduce(function(e,t){var n=(0,E.WB)(t),r=f[n.epoch],o=g.O$.from(r.amount),u=t.closePrice?parseFloat((0,y.formatUnits)(t.closePrice,8)):null,a=t.lockPrice?parseFloat((0,y.formatUnits)(t.lockPrice,8)):null;return(0,p.Z)(e).concat([{id:null,hash:null,amount:parseFloat((0,y.formatUnits)(o)),position:r.position,claimed:r.claimed,claimedAt:null,claimedHash:null,claimedBNB:0,claimedNetBNB:0,createdAt:null,updatedAt:null,block:0,round:{id:null,epoch:t.epoch.toNumber(),failed:(0,E.HJ)(n.oracleCalled,n.closeTimestamp,k),startBlock:null,startAt:t.startTimestamp?t.startTimestamp.toNumber():null,startHash:null,lockAt:t.lockTimestamp?t.lockTimestamp.toNumber():null,lockBlock:null,lockPrice:a,lockHash:null,lockRoundId:t.lockOracleId?t.lockOracleId.toString():null,closeRoundId:t.closeOracleId?t.closeOracleId.toString():null,closeHash:null,closeAt:null,closePrice:u,closeBlock:null,totalBets:0,totalAmount:parseFloat((0,y.formatUnits)(t.totalAmount)),bullBets:0,bullAmount:parseFloat((0,y.formatUnits)(t.bullAmount)),bearBets:0,bearAmount:parseFloat((0,y.formatUnits)(t.bearAmount)),position:u?t.closePrice.eq(t.lockPrice)?F.Tu.HOUSE:t.closePrice.gt(t.lockPrice)?F.Tu.BULL:F.Tu.BEAR:null}},])},[]),claimableStatuses:S,page:o,totalHistory:i.toNumber()}]}})}),function(e,t){return u.apply(this,arguments)})),I=(0,b.hg)("predictions/filterLeaderboard",(a=(0,c.Z)(function(e,t){var n,r,o,u;return(0,m.__generator)(this,function(a){switch(a.label){case 0:return n=e.filters,r=t.extra,[4,(0,E.D)({skip:0,orderBy:n.orderBy,where:(0,l.Z)({totalBets_gte:x.eQ},"".concat(n.orderBy,"_gt"),0)},r.api,r.token.symbol)];case 1:return o=a.sent(),u=(0,E.r3)(r.token.symbol),[2,{results:o.map(u)}]}})}),function(e,t){return a.apply(this,arguments)})),T=(0,b.hg)("predictions/fetchAddressResult",(i=(0,c.Z)(function(e,t){var n,r,o;return(0,m.__generator)(this,function(u){switch(u.label){case 0:return n=t.rejectWithValue,r=t.extra,[4,(0,E.s9)(e,r.api,r.token.symbol)];case 1:if(!(o=u.sent()))return[2,n(e)];return[2,{account:e,data:(0,E.r3)(r.token.symbol)(o)}]}})}),function(e,t){return i.apply(this,arguments)})),M=(0,b.hg)("predictions/filterNextPageLeaderboard",(s=(0,c.Z)(function(e,t){var n,r,o,u,a;return(0,m.__generator)(this,function(i){switch(i.label){case 0:return n=t.getState,r=t.extra,o=n(),[4,(0,E.D)({skip:e,orderBy:o.leaderboard.filters.orderBy,where:(0,l.Z)({totalBets_gte:x.eQ},"".concat(o.leaderboard.filters.orderBy,"_gt"),0)},r.api,r.token.symbol)];case 1:return u=i.sent(),a=(0,E.r3)(r.token.symbol),[2,{results:u.map(a),skip:e}]}})}),function(e,t){return s.apply(this,arguments)})),U=(0,b.oM)({name:"predictions",initialState:O,reducers:{setLeaderboardFilter:function(e,t){e.leaderboard.filters=(0,d.Z)({},e.leaderboard.filters,t.payload),e.leaderboard.skip=0,e.leaderboard.hasMoreResults=!0},setHistoryPaneState:function(e,t){e.isHistoryPaneOpen=t.payload,e.historyFilter=F.dZ.ALL},setChartPaneState:function(e,t){e.isChartPaneOpen=t.payload},setChartView:function(e,t){e.chartView=t.payload},setHistoryFilter:function(e,t){e.historyFilter=t.payload},markAsCollected:function(e,t){e.claimableStatuses=(0,d.Z)({},e.claimableStatuses,t.payload)},setSelectedAddress:function(e,t){e.leaderboard.selectedAddress=t.payload}},extraReducers:function(e){e.addCase(N.t,function(e){e.claimableStatuses={},e.ledgers={},e.isFetchingHistory=!1,e.history=[],e.hasHistoryLoaded=!1,e.totalHistory=0,e.currentHistoryPage=1}),e.addCase(I.pending,function(e){e.leaderboard.loadingState===H.iF.Fetched&&(e.leaderboard.loadingState=H.iF.Fetching)}),e.addCase(I.fulfilled,function(e,t){var n=t.payload.results;e.leaderboard.loadingState=H.iF.Fetched,e.leaderboard.results=n,n.length<E.ub&&(e.leaderboard.hasMoreResults=!1),e.leaderboard.addressResults=(0,d.Z)({},e.leaderboard.addressResults,n.reduce(function(e,t){return(0,f.Z)((0,d.Z)({},e),(0,l.Z)({},t.id,t))},{}))}),e.addCase(T.pending,function(e){e.leaderboard.loadingState=H.iF.Fetching}),e.addCase(T.fulfilled,function(e,t){var n=t.payload,r=n.account,o=n.data;e.leaderboard.loadingState=H.iF.Fetched,e.leaderboard.addressResults[r]=o}),e.addCase(T.rejected,function(e,t){e.leaderboard.loadingState=H.iF.Fetched,e.leaderboard.addressResults[t.payload]=null}),e.addCase(M.pending,function(e){e.leaderboard.loadingState=H.iF.Fetching}),e.addCase(M.fulfilled,function(e,t){var n=t.payload,r=n.results,o=n.skip;e.leaderboard.loadingState=H.iF.Fetched,e.leaderboard.results=(0,p.Z)(e.leaderboard.results).concat((0,p.Z)(r)),e.leaderboard.skip=o,r.length<E.ub&&(e.leaderboard.hasMoreResults=!1)}),e.addCase(L.fulfilled,function(e,t){e.ledgers=k()({},e.ledgers,t.payload)}),e.addCase(_.fulfilled,function(e,t){var n=t.payload,r=n.status,o=n.currentEpoch,u=n.intervalSeconds,a=n.minBetAmount,i=n.rounds,s=n.claimableStatuses,c=n.ledgers,h=k()({},e.rounds,i),p=B()(h,function(t,n){return Number(n)>e.currentEpoch-x.v9});if(e.currentEpoch!==o){var m=Z()(Object.values(e.rounds),"epoch"),b=(0,E.CM)(m.epoch+1,m.startTimestamp+u+x.fq);p=(0,f.Z)((0,d.Z)({},p),(0,l.Z)({},b.epoch,b))}e.status=r,e.currentEpoch=o,e.intervalSeconds=u,e.minBetAmount=a,e.claimableStatuses=k()({},e.claimableStatuses,s),e.ledgers=k()({},e.ledgers,c),e.rounds=p}),e.addCase(w.fulfilled,function(e,t){for(var n=t.payload,r=n.status,o=n.currentEpoch,u=n.intervalSeconds,a=n.rounds,i=n.claimableStatuses,s=n.ledgers,c=[],l=a[o],h=1;h<=x.ND;h++)c.push((0,E.CM)(o+h,l.startTimestamp+u*h));return(0,f.Z)((0,d.Z)({},e),{status:r,currentEpoch:o,intervalSeconds:u,claimableStatuses:i,ledgers:s,rounds:k()({},a,(0,E.D5)(c))})}),e.addCase(R.pending,function(e){e.isFetchingHistory=!0}),e.addCase(R.rejected,function(e){e.isFetchingHistory=!1}),e.addCase(R.fulfilled,function(e,t){var n,r=t.payload,o=r.account,u=r.bets;e.isFetchingHistory=!1,e.history[o]=k()([],null!==(n=e.history[o])&&void 0!==n?n:[],u)}),e.addCase(j.pending,function(e){e.isFetchingHistory=!0}),e.addCase(j.rejected,function(e){e.isFetchingHistory=!1}),e.addCase(j.fulfilled,function(e,t){var n=t.payload,r=n.bets,o=n.claimableStatuses,u=n.page,a=n.totalHistory;e.isFetchingHistory=!1,e.history=1===u?r:(0,p.Z)(e.history).concat((0,p.Z)(r)),e.claimableStatuses=(0,d.Z)({},e.claimableStatuses,o),e.hasHistoryLoaded=e.history.length===a||0===r.length,e.totalHistory=a,e.currentHistoryPage=u})}}),D=U.actions,q=D.setChartPaneState,K=D.setChartView,G=D.setHistoryFilter,W=D.setHistoryPaneState,$=D.markAsCollected,z=D.setLeaderboardFilter,V=D.setSelectedAddress;t.ZP=U.reducer},65238:function(e,t,n){"use strict";n.d(t,{ZP:function(){return i},ZR:function(){return a}});var r=n(85893),o=n(67294),u=(0,o.createContext)(null);function a(){return(0,o.useContext)(u)}function i(e){var t=e.children,n=e.config;return(0,r.jsx)(u.Provider,{value:n,children:t})}},63322:function(e,t,n){"use strict";n.d(t,{Z:function(){return Z}});var r=n(85893),o=n(67294),u=n(13351),a=n(5700),i=n(96470),s=n(24179),c=n(11163),l=n(3945),d=n.n(l),f=n(65238),h=n(87338),p=n(6680),m=n(69352),b=n(40370),g=n(2593).O$.from(1e4),y={BNB:{address:(0,m.Kn)(h.Z.predictionsBNB),api:p.GZ,chainlinkOracleAddress:(0,m.Kn)(h.Z.chainlinkOracleBNB),minPriceUsdDisplayed:g,displayedDecimals:4,token:b.ds.bnb},CAKE:{address:(0,m.Kn)(h.Z.predictionsCAKE),api:p.fO,chainlinkOracleAddress:(0,m.Kn)(h.Z.chainlinkOracleCAKE),minPriceUsdDisplayed:g,displayedDecimals:4,token:b.ds.cake}},v="prediction-token",Z=function(e){var t=e.children,n=(0,c.useRouter)().query.token,l=(0,o.useState)(function(){var e=null==localStorage?void 0:localStorage.getItem(v);return[i.ru.BNB,i.ru.CAKE].includes(e)?e:i.ru.CAKE}),h=l[0],p=l[1];(0,o.useEffect)(function(){var e=d()(n);[i.ru.BNB,i.ru.CAKE].includes(e)&&(p(e),null==localStorage||localStorage.setItem(v,e))},[n]);var m=(0,o.useMemo)(function(){return y[h]},[h]),b=(0,o.useMemo)(function(){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0;return(0,a.xC)({reducer:e,middleware:function(e){return e({thunk:{extraArgument:n}})},preloadedState:t})}(s.ZP,s.E3,m)},[m]);return(0,r.jsx)(f.ZP,{config:m,children:(0,r.jsx)(u.Z,{store:b,children:t})})}}}]);