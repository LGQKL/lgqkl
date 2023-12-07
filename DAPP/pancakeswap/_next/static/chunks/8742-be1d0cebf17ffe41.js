"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8742],{32115:function(n,t,e){var o=e(82670),i=e(26042),r=e(69396),c=e(85893),l=e(67294),u=e(73935),d=e(89145),f=e(51847),a=e(70032),C=function(n){var t,e,C,s=n.component,p=n.options,h=n.children,v=n.isOpen,m=void 0!==v&&v,Z=(0,l.useState)(null),x=Z[0],g=Z[1],w=(0,l.useState)(null),b=w[0],j=w[1],M=null!==(t=null==p?void 0:p.placement)&&void 0!==t?t:"bottom",I=null!==(e=null==p?void 0:p.offset)&&void 0!==e?e:[0,10],y=null!==(C=null==p?void 0:p.padding)&&void 0!==C?C:{left:16,right:16},k=(0,l.useState)(m),R=k[0],P=k[1],E=function(){P(function(n){return!n})},L=function(){P(!0)},D=function(){P(!1)};(0,l.useEffect)(function(){P(m)},[m,P]),(0,l.useEffect)(function(){if(null!==b&&null!==x){var n=function(n){var t=n.target;!(0,o.Z)(t,Node)||b.contains(t)||x.contains(t)||P(!1)};return document.addEventListener("click",n),function(){document.removeEventListener("click",n)}}},[b,x]);var F=(0,d.D)(x,b,{placement:M,modifiers:[{name:"offset",options:{offset:I}},{name:"preventOverflow",options:{padding:y}},]}),O=F.styles,S=F.attributes,z=(0,c.jsx)("div",(0,r.Z)((0,i.Z)({ref:j,style:O.popper},S.popper),{children:"function"==typeof h?h({toggle:E,open:L,close:D}):h})),B=(0,a.Z)(),_=B?(0,u.createPortal)(z,B):z;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(f.j5,{ref:g,onClick:E,children:s}),R&&_]})};t.Z=C},42906:function(n,t,e){var o=e(26042),i=e(69396),r=e(99534),c=e(85893);e(67294);var l=e(32115),u=e(51847),d=function(n){var t=n.children,e=n.component,d=n.options,f=n.isOpen,a=(0,r.Z)(n,["children","component","options","isOpen"]);return(0,c.jsx)(l.Z,{component:e,options:d,isOpen:void 0!==f&&f,children:(0,c.jsx)(u.lz,(0,i.Z)((0,o.Z)({},a),{children:t}))})};t.Z=d},51847:function(n,t,e){e.d(t,{j5:function(){return s},lz:function(){return C},vE:function(){return p},xm:function(){return a}});var o=e(7297),i=e(87379),r=e(44147),c=e(75943);function l(){var n=(0,o.Z)(["\n  background-color: ",";\n  border-radius: ",";\n  box-shadow: ",";\n"]);return l=function(){return n},n}function u(){var n=(0,o.Z)(["\n  flex-direction: column;\n  overflow: hidden;\n  min-width: 136px;\n  background: ",";\n  border-radius: ",";\n  border: ",";\n"]);return u=function(){return n},n}function d(){var n=(0,o.Z)(["\n  cursor: pointer;\n  display: inline-flex;\n"]);return d=function(){return n},n}function f(){var n=(0,o.Z)(["\n  border: 0;\n  outline: 0;\n  cursor: pointer;\n  background: transparent;\n  padding: 8px 16px;\n  color: ",";\n  width: 100%;\n  font-size: 16px;\n  text-align: left;\n\n  &:hover {\n    background-color: ",";\n    text-decoration: none;\n  }\n"]);return f=function(){return n},n}var a=(0,i.ZP)(r.Z).withConfig({componentId:"sc-be5f5450-0"}).withConfig({componentId:"sc-902e6bb1-0"})(l(),function(n){return n.theme.colors.backgroundAlt},function(n){return n.theme.radii.card},function(n){return n.theme.shadows.tooltip}),C=(0,i.ZP)(c.Z).withConfig({componentId:"sc-be5f5450-1"}).withConfig({componentId:"sc-902e6bb1-1"})(u(),function(n){return n.theme.colors.input},function(n){return n.theme.radii.default},function(n){var t=n.theme;return"1px solid ".concat(t.colors.inputSecondary)}),s=i.ZP.div.withConfig({componentId:"sc-be5f5450-2"}).withConfig({componentId:"sc-902e6bb1-2"})(d()),p=i.ZP.button.withConfig({componentId:"sc-be5f5450-3"}).withConfig({componentId:"sc-902e6bb1-3"})(f(),function(n){return n.theme.colors.text},function(n){return n.theme.colors.inputSecondary})},65916:function(n,t,e){var o=e(7297),i=e(36305),r=e(85893),c=e(67294),l=e(87379),u=e(57247),d=e(37303);function f(){var n=(0,o.Z)(["\n  align-items: center;\n  color: ",";\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  "," {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  "," {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"]);return f=function(){return n},n}function a(){var n=(0,o.Z)(["\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  a {\n    color: ",";\n\n    &:hover {\n      color: ",";\n    }\n  }\n\n  ","\n"]);return a=function(){return n},n}var C=l.ZP.div.withConfig({componentId:"sc-b9c7047c-0"}).withConfig({componentId:"sc-9f0b852c-0"})(f(),function(n){return n.theme.colors.textDisabled},function(n){return n.theme.mediaQueries.sm},function(n){return n.theme.mediaQueries.md}),s=l.ZP.ul.withConfig({componentId:"sc-b9c7047c-1"}).withConfig({componentId:"sc-9f0b852c-1"})(a(),function(n){return n.theme.colors.primary},function(n){return n.theme.colors.primaryBright},u.Dh),p=(0,r.jsx)(d.Z,{color:"currentColor",width:"24px"}),h=function(n){var t,e,o=n.separator,l=n.children,u=(t=c.Children.toArray(l).filter(function(n){return(0,c.isValidElement)(n)}),e=void 0===o?p:o,t.reduce(function(n,t,o){return 0===o?(0,i.Z)(n).concat([t]):(0,i.Z)(n).concat([(0,r.jsx)(C,{"aria-hidden":!0,children:e},"separator-".concat(o)),t,])},[]));return(0,r.jsx)(s,{children:u.map(function(n,t){return(0,r.jsx)("li",{children:n},"child-".concat(t))})})};t.Z=h},69136:function(n,t,e){e.d(t,{Z:function(){return w}});var o=e(7297),i=e(85893);e(67294);var r=e(87379),c=e(26042),l=e(69396),u=e(44976),d=function(n){return(0,i.jsxs)(u.Z,(0,l.Z)((0,c.Z)({viewBox:"0 0 256 256"},n),{children:[(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M166.898 204.279C172.402 190.795 170.197 176.127 166.942 163.633C164.747 155.208 156.522 149.043 143.339 146.339C130.289 143.662 113.23 144.62 95.212 149.658C77.1941 154.696 61.9863 162.761 52.0088 171.877C41.9295 181.085 37.8164 190.7 40.0117 199.126C43.2669 211.619 48.4857 225.444 59.7919 234.228C70.9463 242.894 88.7701 247.193 118.461 238.891C148.152 230.589 161.467 217.582 166.898 204.279ZM119.268 241.986C179.746 225.075 176.514 188.072 169.929 162.798C164.622 142.43 131.106 136.301 94.4056 146.563C57.7053 156.825 31.7183 179.593 37.0251 199.961C43.6102 225.235 58.7891 258.897 119.268 241.986Z",fill:"#464649"}),(0,i.jsx)("path",{d:"M155.801 175.68C158.653 186.628 180.351 181.576 214.977 171.894C249.604 162.212 257.158 150.578 254.305 139.63C251.453 128.682 244.685 121.053 216.678 128.884C182.051 138.566 152.948 164.732 155.801 175.68Z",fill:"#606063"}),(0,i.jsx)("path",{d:"M159.97 178.737L175.437 178.709C178.284 178.704 178.523 174.429 177.474 164.815C176.82 158.816 173.457 154.101 171.27 155.477L159.942 163.875L159.97 178.737Z",fill:"#464649"}),(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M162.261 177.996C160.059 177.319 159.158 176.266 158.788 174.845C158.644 174.296 158.636 173.375 159.104 171.965C159.566 170.568 160.432 168.889 161.754 166.98C164.397 163.161 168.612 158.775 174.091 154.332C185.037 145.456 200.6 136.7 217.484 131.979C231.34 128.104 239.201 128.297 243.777 130.191C248.018 131.946 250.005 135.425 251.319 140.465C251.901 142.7 251.928 144.848 251.283 146.962C250.634 149.091 249.235 151.411 246.622 153.858C241.312 158.83 231.342 163.998 214.171 168.799C196.798 173.657 182.967 177.263 173.149 178.336C168.216 178.875 164.644 178.728 162.261 177.996ZM214.977 171.894C180.351 181.576 158.653 186.628 155.801 175.68C152.948 164.732 182.051 138.566 216.678 128.884C244.685 121.053 251.453 128.682 254.305 139.63C257.158 150.578 249.604 162.212 214.977 171.894Z",fill:"#464649"}),(0,i.jsx)("path",{d:"M169.925 161.024C176.511 186.298 179.743 223.301 119.264 240.212C58.7859 257.123 43.607 223.461 37.022 198.187C31.7151 177.819 57.7022 155.052 94.4024 144.789C131.103 134.527 164.619 140.656 169.925 161.024Z",fill:"#606063"}),(0,i.jsx)("path",{d:"M62.2322 217.512C45.5076 212.12 42.4613 203.795 40.3848 196.052L41.9594 211.275L50.2352 225.685L64.4374 238.481L80.947 244.327C82.4065 243.612 89.4986 243.299 83.1029 242.028C76.7073 240.758 72.7474 234.756 69.9914 231.378C68.2638 226.484 67.7365 219.287 62.2322 217.512Z",fill:"#464649"}),(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M166.895 202.505C172.399 189.021 170.194 174.353 166.939 161.86C164.744 153.434 156.519 147.269 143.336 144.565C130.286 141.888 113.227 142.846 95.2088 147.884C77.1909 152.922 61.9831 160.987 52.0056 170.103C41.9263 179.311 37.8132 188.926 40.0086 197.352C43.2637 209.845 48.4825 223.67 59.7887 232.454C70.9431 241.12 88.7669 245.419 118.458 237.117C148.149 228.815 161.464 215.809 166.895 202.505ZM119.264 240.212C179.743 223.301 176.511 186.298 169.925 161.024C164.619 140.656 131.103 134.527 94.4024 144.789C57.7022 155.052 31.7151 177.819 37.022 198.187C43.607 223.461 58.7859 257.123 119.264 240.212Z",fill:"#464649"}),(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M164.233 181.686C165.018 182.322 165.157 183.497 164.543 184.311C162.98 186.382 161.187 188.422 159.188 190.412C158.469 191.128 157.327 191.104 156.636 190.36C155.945 189.615 155.968 188.431 156.687 187.716C158.576 185.834 160.252 183.925 161.7 182.007C162.314 181.193 163.448 181.05 164.233 181.686ZM57.4215 216.239C57.6566 215.235 58.6323 214.619 59.6008 214.863C73.2899 218.308 91.7045 217.793 111.035 212.388C120.262 209.808 128.779 206.37 136.271 202.374C137.157 201.901 138.245 202.263 138.701 203.181C139.157 204.099 138.809 205.226 137.923 205.699C130.195 209.821 121.438 213.352 111.976 215.998C92.2044 221.527 73.1589 222.124 58.7494 218.497C57.7809 218.253 57.1863 217.242 57.4215 216.239Z",fill:"#979797"}),(0,i.jsx)("path",{d:"M159.836 163.292C164.405 180.829 141.059 195.381 109.857 204.106C78.655 212.831 51.4793 212.682 46.8428 194.887C42.2064 177.092 65.6193 162.798 96.8214 154.074C128.024 145.349 155.266 145.755 159.836 163.292Z",fill:"#464649"}),(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M145.831 183.549C154.508 176.998 157.462 170.578 155.854 164.406C154.245 158.233 148.575 154.225 137.894 153.086C127.333 151.96 113.281 153.898 97.8965 158.2C82.4985 162.506 69.3986 168.094 60.8132 174.54C52.1526 181.043 49.1801 187.461 50.825 193.774C52.4698 200.087 58.1557 204.083 68.7987 205.189C79.3491 206.285 93.384 204.285 108.782 199.98C124.166 195.678 137.251 190.028 145.831 183.549ZM110.264 205.113C141.466 196.388 164.405 180.829 159.836 163.292C155.266 145.755 128.024 145.349 96.8214 154.074C65.6193 162.798 42.2064 177.092 46.8428 194.887C51.4793 212.682 79.0614 213.838 110.264 205.113Z",fill:"#737373"}),(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M103.877 181.153C89.0555 185.297 76.4977 192.072 68.1169 199.619C67.3647 200.297 66.2249 200.214 65.5711 199.434C64.9173 198.655 64.997 197.474 65.7492 196.796C74.622 188.806 87.7006 181.803 102.936 177.543C106.034 176.676 109.107 175.955 112.134 175.375C113.114 175.187 114.056 175.858 114.237 176.873C114.419 177.889 113.771 178.864 112.792 179.052C109.86 179.614 106.881 180.313 103.877 181.153ZM123.847 175.658C123.792 174.627 124.554 173.745 125.549 173.688C132.378 173.297 138.774 173.682 144.424 174.797C145.403 174.991 146.046 175.97 145.86 176.984C145.673 177.999 144.728 178.664 143.749 178.471C138.431 177.421 132.333 177.045 125.749 177.422C124.753 177.479 123.902 176.69 123.847 175.658Z",fill:"#606063"})]}))},f=function(n){return(0,i.jsx)(u.Z,(0,l.Z)((0,c.Z)({viewBox:"0 0 128 128"},n),{children:(0,i.jsxs)("svg",{width:"128",height:"128",viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("path",{d:"M56.7204 37.5858C56.7204 45.3822 58.0271 54.1169 60.2906 60.8591C61.4246 64.2369 62.7705 67.0285 64.249 68.946C65.742 70.8826 67.1906 71.7103 68.5307 71.7103C71.1919 71.7103 74.4165 70.5307 77.8384 68.3524C81.235 66.1902 84.7001 63.1234 87.8127 59.5481C94.0844 52.3439 98.6784 43.3694 98.6784 35.942C98.6784 28.1653 97.1567 21.2636 93.9931 16.3543C90.8793 11.5222 86.1363 8.54284 79.3564 8.54284C72.6009 8.54284 66.9825 11.9157 63.0072 17.2564C59.0174 22.6164 56.7204 29.9263 56.7204 37.5858Z",fill:"#FEDC90",stroke:"#D1884F",strokeWidth:"2.89134"}),(0,i.jsx)("path",{d:"M32.7442 66.7859C39.4364 62.9222 47.2575 60.5211 53.8454 59.9252C57.1411 59.6272 60.0564 59.7876 62.336 60.3933C64.6294 61.0028 66.1079 62.0118 66.8368 63.2742C69.6116 68.0804 69.9429 76.4856 67.7501 84.8501C65.5656 93.1829 61.0085 100.957 54.6069 104.653C47.9434 108.5 40.9505 110.185 34.8292 109.454C28.7533 108.729 23.476 105.626 20.0729 99.7316C16.6658 93.8305 16.5364 87.5528 18.8757 81.7754C21.228 75.9659 26.1018 70.6209 32.7442 66.7859Z",fill:"#D1884F",stroke:"#633001",strokeWidth:"2.89134"}),(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M73.6122 7.76013C69.4145 8.86483 64.8207 11.0867 61.24 16.1556C53.2804 27.4231 51.7006 41.9592 58.5495 60.7386C65.3984 79.518 63.3431 89.9236 56.0487 98.3189C48.7543 106.714 29.475 108.685 23.3482 101.929C21.8481 100.274 17.4954 97.4588 20.3675 102.54C23.2397 107.622 30.7527 111.748 39.59 111.748C48.4273 111.748 55.5943 108.146 61.958 101.338C68.3217 94.5306 74.292 78.3883 68.3268 61.7709C60.6331 40.3385 62.8311 27.508 68.2893 19.7815C71.0879 15.8198 75.5453 12.3629 78.6077 10.5868C81.8233 8.72183 84.8797 8.42294 86.8682 8.42294C83.3332 6.65548 77.8099 6.65542 73.6122 7.76013Z",fill:"#633001"})]})}))};function a(){var n=(0,o.Z)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);return a=function(){return n},n}function C(){var n=(0,o.Z)(["\n	0% {\n		transform: translatey(0px);\n	}\n	50% {\n		transform: translatey(10px);\n	}\n	100% {\n		transform: translatey(0px);\n	}\n"]);return C=function(){return n},n}function s(){var n=(0,o.Z)(["\n  position: relative;\n"]);return s=function(){return n},n}function p(){var n=(0,o.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: "," 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"]);return p=function(){return n},n}function h(){var n=(0,o.Z)(["\n  animation: "," 6s ease-in-out infinite;\n  transform: translate3d(0, 0, 0);\n"]);return h=function(){return n},n}var v=(0,r.F4)(a()),m=(0,r.F4)(C()),Z=r.ZP.div.withConfig({componentId:"sc-da0aae9d-0"}).withConfig({componentId:"sc-746f83e0-0"})(s()),x=(0,r.ZP)(f).withConfig({componentId:"sc-da0aae9d-1"}).withConfig({componentId:"sc-746f83e0-1"})(p(),v),g=(0,r.ZP)(d).withConfig({componentId:"sc-da0aae9d-2"}).withConfig({componentId:"sc-746f83e0-2"})(h(),m),w=function(n){var t=n.size,e=void 0===t?128:t;return(0,i.jsxs)(Z,{children:[(0,i.jsx)(x,{width:"".concat(.5*e,"px")}),(0,i.jsx)(g,{width:"".concat(e,"px")})]})}}}]);