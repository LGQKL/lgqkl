(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888,8134,8326];
exports.modules = {

/***/ 90321:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58097);
/* harmony import */ var _sentry_nextjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__);
global.__rewriteFramesDistDir__ = ".next";
// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;
const ENV = process.env.VERCEL_ENV || "production";
(0,_sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__.init)({
    dsn: SENTRY_DSN,
    environment: ENV === "production" ? "production" : "development",
    // Adjust this value in production, or use tracesSampler for greater control
    tracesSampleRate: 0
});


/***/ }),

/***/ 24155:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ UIKitProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_MatchBreakpoints_Provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16588);
/* harmony import */ var _contexts_ToastsContext_Provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86521);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_contexts_ToastsContext_Provider__WEBPACK_IMPORTED_MODULE_3__]);
_contexts_ToastsContext_Provider__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const UIKitProvider = ({ theme , children ,  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(styled_components__WEBPACK_IMPORTED_MODULE_1__.ThemeProvider, {
        theme: theme,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_contexts_MatchBreakpoints_Provider__WEBPACK_IMPORTED_MODULE_2__/* .MatchBreakpointsProvider */ .mh, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_contexts_ToastsContext_Provider__WEBPACK_IMPORTED_MODULE_3__/* .ToastsProvider */ .d, {
                children: children
            })
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 59327:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ResetCSS = styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle`
  /* prettier-ignore */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  /* prettier-ignore */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
    font-size: 16px;
  }
  ol,
  ul {
    list-style: disc;
    list-style-position: inside;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  [role="button"] {
    cursor: pointer;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  * {
    font-family: 'Kanit', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Number */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type=number] {
    -moz-appearance: textfield;
  }

  /* Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme  })=>theme.colors.textSubtle}; 
    border-radius: 8px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px ${({ theme  })=>theme.colors.input}; 
    border-radius: 10px;
  }

  /* Slider */ 
  input[type=range] {
    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
    width: 100%; /* Specific width is required for Firefox. */
    background: transparent; /* Otherwise white in Chrome */
  }
  input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
  }
  input[type=range]:focus {
    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
  }
  input[type=range]::-ms-track {
    width: 100%;
    cursor: pointer;
    /* Hides the slider so custom styles can be added */
    background: transparent; 
    border-color: transparent;
    color: transparent;
  }  
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResetCSS);


/***/ }),

/***/ 62975:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Svg_Icons_CheckmarkCircle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(46344);
/* harmony import */ var _Svg_Icons_Error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(77525);
/* harmony import */ var _Svg_Icons_Block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15501);
/* harmony import */ var _Svg_Icons_Info__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(79578);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(77067);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6657);
/* harmony import */ var _Svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4953);
/* harmony import */ var _Box_Flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(10993);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29047);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Box_Flex__WEBPACK_IMPORTED_MODULE_8__]);
_Box_Flex__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












const getThemeColor = ({ theme , variant =_types__WEBPACK_IMPORTED_MODULE_3__/* .variants.INFO */ .o.INFO  })=>{
    switch(variant){
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .variants.DANGER */ .o.DANGER:
            return theme.colors.failure;
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .variants.WARNING */ .o.WARNING:
            return theme.colors.warning;
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .variants.SUCCESS */ .o.SUCCESS:
            return theme.colors.success;
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .variants.INFO */ .o.INFO:
        default:
            return theme.colors.secondary;
    }
};
const getIcon = (variant = _types__WEBPACK_IMPORTED_MODULE_3__/* .variants.INFO */ .o.INFO)=>{
    switch(variant){
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .variants.DANGER */ .o.DANGER:
            return _Svg_Icons_Block__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z;
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .variants.WARNING */ .o.WARNING:
            return _Svg_Icons_Error__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z;
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .variants.SUCCESS */ .o.SUCCESS:
            return _Svg_Icons_CheckmarkCircle__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z;
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .variants.INFO */ .o.INFO:
        default:
            return _Svg_Icons_Info__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z;
    }
};
const IconLabel = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-c80d62ca-0"
}).withConfig({
    componentId: "sc-6355327b-0"
})`
  background-color: ${getThemeColor};
  border-radius: 16px 0 0 16px;
  color: ${({ theme  })=>theme.alert.background};
  padding: 12px;
`;
const withHandlerSpacing = 32 + 12 + 8; // button size + inner spacing + handler position
const Details = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-c80d62ca-1"
}).withConfig({
    componentId: "sc-6355327b-1"
})`
  flex: 1;
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: ${({ hasHandler  })=>hasHandler ? `${withHandlerSpacing}px` : "12px"};
  padding-top: 12px;
`;
const CloseHandler = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-c80d62ca-2"
}).withConfig({
    componentId: "sc-6355327b-2"
})`
  border-radius: 0 16px 16px 0;
  right: 8px;
  position: absolute;
  top: 8px;
`;
const StyledAlert = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_Box_Flex__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z).withConfig({
    componentId: "sc-c80d62ca-3"
}).withConfig({
    componentId: "sc-6355327b-3"
})`
  position: relative;
  background-color: ${({ theme  })=>theme.alert.background};
  border-radius: 16px;
  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);
`;
const Alert = ({ title , children , variant , onClick  })=>{
    const Icon = getIcon(variant);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledAlert, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(IconLabel, {
                variant: variant,
                hasDescription: !!children,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
                    color: "currentColor",
                    width: "24px"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Details, {
                hasHandler: !!onClick,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Text__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        bold: true,
                        children: title
                    }),
                    typeof children === "string" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Text__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        as: "p",
                        children: children
                    }) : children
                ]
            }),
            onClick && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CloseHandler, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    scale: "sm",
                    variant: "text",
                    onClick: onClick,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Svg__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        width: "24px",
                        color: "currentColor"
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Alert);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 29047:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ variants)
/* harmony export */ });
const variants = {
    INFO: "info",
    DANGER: "danger",
    SUCCESS: "success",
    WARNING: "warning"
};


/***/ }),

/***/ 75389:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _widgets_Menu_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83468);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10993);
/* harmony import */ var _Svg_AnimatedIconComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(98325);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71236);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Box__WEBPACK_IMPORTED_MODULE_3__]);
_Box__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const BottomNavItem = ({ label , icon , fillIcon , href , showItemsOnMobile =false , isActive =false , disabled =false , ...props })=>{
    const { linkComponent  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_widgets_Menu_context__WEBPACK_IMPORTED_MODULE_2__/* .MenuContext */ .p);
    const bottomNavItemContent = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Box__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        children: [
            icon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Svg_AnimatedIconComponent__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                icon: icon,
                fillIcon: fillIcon,
                height: "22px",
                width: "21px",
                color: isActive ? "secondary" : "textSubtle",
                isActive: isActive,
                activeBackgroundColor: "backgroundAlt"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_5__/* .StyledBottomNavText */ .M, {
                color: isActive ? "text" : "textSubtle",
                fontWeight: isActive ? "600" : "400",
                fontSize: "10px",
                children: label
            })
        ]
    });
    return showItemsOnMobile ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_5__/* .StyledBottomNavItem */ .o, {
        style: {
            opacity: disabled ? 0.5 : 1
        },
        type: "button",
        ...props,
        children: bottomNavItemContent
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_5__/* .StyledBottomNavItem */ .o, {
        style: {
            opacity: disabled ? 0.5 : 1
        },
        as: linkComponent,
        href: href,
        ...props,
        children: bottomNavItemContent
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BottomNavItem);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 71236:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ StyledBottomNavText),
/* harmony export */   "o": () => (/* binding */ StyledBottomNavItem)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77067);


const StyledBottomNavItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
    componentId: "sc-7b8c54f4-0"
}).withConfig({
    componentId: "sc-37836b9a-0"
})`
  display: block;
  border: 0;
  background: transparent;
  cursor: pointer;
  height: 44px;
  padding: 4px 12px;
  &:hover {
    border-radius: 16px;
  }
  &:hover,
  &:hover div {
    background: ${({ theme  })=>theme.colors.tertiary};
  }
`;
const StyledBottomNavText = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Text__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z).withConfig({
    componentId: "sc-7b8c54f4-1"
}).withConfig({
    componentId: "sc-37836b9a-1"
})`
  display: -webkit-box;
  overflow: hidden;
  user-select: none;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
`;


/***/ }),

/***/ 14291:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BottomNavItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(75389);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20081);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85118);
/* harmony import */ var _DropdownMenu_DropdownMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(84610);
/* harmony import */ var _NotificationDot__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45670);
/* harmony import */ var _Overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84917);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Overlay__WEBPACK_IMPORTED_MODULE_2__, _styles__WEBPACK_IMPORTED_MODULE_3__, _DropdownMenu_DropdownMenu__WEBPACK_IMPORTED_MODULE_4__, _Box__WEBPACK_IMPORTED_MODULE_5__, _BottomNavItem__WEBPACK_IMPORTED_MODULE_7__]);
([_Overlay__WEBPACK_IMPORTED_MODULE_2__, _styles__WEBPACK_IMPORTED_MODULE_3__, _DropdownMenu_DropdownMenu__WEBPACK_IMPORTED_MODULE_4__, _Box__WEBPACK_IMPORTED_MODULE_5__, _BottomNavItem__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const BottomNav = ({ items =[] , activeItem ="" , activeSubItem ="" , ...props })=>{
    const { 0: menuOpenByIndex , 1: setMenuOpenByIndex  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const isBottomMenuOpen = Object.values(menuOpenByIndex).some((acc)=>acc);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            isBottomMenuOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Overlay__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                justifyContent: "space-around",
                ...props,
                children: items.map(({ label , items: menuItems , href , icon , fillIcon , showOnMobile =true , showItemsOnMobile =true , disabled  }, index)=>{
                    const statusColor = menuItems?.find((menuItem)=>menuItem.status !== undefined)?.status?.color;
                    return showOnMobile && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DropdownMenu_DropdownMenu__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        items: menuItems,
                        isBottomNav: true,
                        activeItem: activeSubItem,
                        showItemsOnMobile: showItemsOnMobile,
                        setMenuOpenByIndex: setMenuOpenByIndex,
                        index: index,
                        isDisabled: disabled,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Box__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NotificationDot__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                show: !!statusColor,
                                color: statusColor,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BottomNavItem__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                    href: href,
                                    disabled: disabled,
                                    isActive: href === activeItem,
                                    label: label,
                                    icon: icon,
                                    fillIcon: fillIcon,
                                    showItemsOnMobile: showItemsOnMobile
                                })
                            })
                        })
                    }, `${label}#${href}`);
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(BottomNav));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 20081:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10993);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Box__WEBPACK_IMPORTED_MODULE_1__]);
_Box__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const StyledBottomNav = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Box__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z).withConfig({
    componentId: "sc-760c5199-0"
}).withConfig({
    componentId: "sc-cb662fc0-0"
})`
  position: fixed;
  bottom: 0px;
  width: 100%;
  padding: 5px 8px;
  background: ${({ theme  })=>theme.colors.backgroundAlt};
  border-top: 1px solid ${({ theme  })=>theme.colors.cardBorder};
  padding-bottom: env(safe-area-inset-bottom);
  html[data-useragent*="TokenPocket_iOS"] & {
    padding-bottom: 45px;
  }
  z-index: 20;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyledBottomNav);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 10993:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85118);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Box__WEBPACK_IMPORTED_MODULE_2__]);
_Box__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Flex = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Box__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z).withConfig({
    componentId: "sc-32d5f017-0"
}).withConfig({
    componentId: "sc-9a9f8ccb-0"
})`
  display: flex;
  ${styled_system__WEBPACK_IMPORTED_MODULE_1__.flexbox}
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Flex);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 22478:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Svg_Icons_LogoRound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84357);
/* harmony import */ var _Text_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(77067);
/* harmony import */ var _Skeleton_Skeleton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97458);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Skeleton_Skeleton__WEBPACK_IMPORTED_MODULE_5__]);
_Skeleton_Skeleton__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const PriceLink = styled_components__WEBPACK_IMPORTED_MODULE_2___default().a.withConfig({
    componentId: "sc-777c9bae-0"
}).withConfig({
    componentId: "sc-e9d2e3af-0"
})`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;
const CakePrice = ({ cakePriceUsd , color ="textSubtle" , showSkeleton =true ,  })=>{
    return cakePriceUsd ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(PriceLink, {
        href: "https://pancakeswap.finance/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82&chainId=56",
        target: "_blank",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Svg_Icons_LogoRound__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                width: "24px",
                mr: "8px"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Text_Text__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                color: color,
                bold: true,
                children: `$${cakePriceUsd.toFixed(3)}`
            })
        ]
    }) : showSkeleton ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Skeleton_Skeleton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        width: 80,
        height: 24
    }) : null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(CakePrice));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 84610:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_popper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42932);
/* harmony import */ var react_popper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_popper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27627);
/* harmony import */ var _widgets_Menu_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83468);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85118);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(10993);
/* harmony import */ var _Svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(41532);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19278);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13030);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Box__WEBPACK_IMPORTED_MODULE_5__, _Box__WEBPACK_IMPORTED_MODULE_8__]);
([_Box__WEBPACK_IMPORTED_MODULE_5__, _Box__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable react/no-array-index-key */ 








const DropdownMenu = ({ children , isBottomNav =false , showItemsOnMobile =false , activeItem ="" , items =[] , index , setMenuOpenByIndex , isDisabled , ...props })=>{
    const { linkComponent  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_widgets_Menu_context__WEBPACK_IMPORTED_MODULE_3__/* .MenuContext */ .p);
    const { 0: isOpen , 1: setIsOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: targetRef , 1: setTargetRef  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: tooltipRef , 1: setTooltipRef  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const hasItems = items.length > 0;
    const { styles , attributes  } = (0,react_popper__WEBPACK_IMPORTED_MODULE_2__.usePopper)(targetRef, tooltipRef, {
        strategy: isBottomNav ? "absolute" : "fixed",
        placement: isBottomNav ? "top" : "bottom-start",
        modifiers: [
            {
                name: "offset",
                options: {
                    offset: [
                        0,
                        isBottomNav ? 6 : 0
                    ]
                }
            }
        ]
    });
    const isMenuShow = isOpen && (isBottomNav && showItemsOnMobile || !isBottomNav);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const showDropdownMenu = ()=>{
            setIsOpen(true);
        };
        const hideDropdownMenu = (evt)=>{
            const target = evt.target;
            return target && !tooltipRef?.contains(target) && setIsOpen(false);
        };
        targetRef?.addEventListener("mouseenter", showDropdownMenu);
        targetRef?.addEventListener("mouseleave", hideDropdownMenu);
        return ()=>{
            targetRef?.removeEventListener("mouseenter", showDropdownMenu);
            targetRef?.removeEventListener("mouseleave", hideDropdownMenu);
        };
    }, [
        targetRef,
        tooltipRef,
        setIsOpen,
        isBottomNav
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (setMenuOpenByIndex && index !== undefined) {
            setMenuOpenByIndex((prevValue)=>({
                    ...prevValue,
                    [index]: isMenuShow
                }));
        }
    }, [
        isMenuShow,
        setMenuOpenByIndex,
        index
    ]);
    (0,_hooks__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(targetRef, (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        setIsOpen(false);
    }, [
        setIsOpen
    ]));
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Box__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        ref: setTargetRef,
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Box__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                onPointerDown: ()=>{
                    setIsOpen((s)=>!s);
                },
                children: children
            }),
            hasItems && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_6__/* .StyledDropdownMenu */ .Lw, {
                style: styles.popper,
                ref: setTooltipRef,
                ...attributes.popper,
                $isBottomNav: isBottomNav,
                $isOpen: isMenuShow,
                children: items.filter((item)=>!item.isMobileOnly).map(({ type =_types__WEBPACK_IMPORTED_MODULE_7__/* .DropdownMenuItemType.INTERNAL_LINK */ .l.INTERNAL_LINK , label , href ="/" , status , disabled , ...itemProps }, itemItem)=>{
                    const MenuItemContent = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            label,
                            status && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_6__/* .LinkStatus */ .Dt, {
                                color: status.color,
                                fontSize: "14px",
                                children: status.text
                            })
                        ]
                    });
                    const isActive = href === activeItem;
                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_6__/* .StyledDropdownMenuItemContainer */ .gL, {
                        children: [
                            type === _types__WEBPACK_IMPORTED_MODULE_7__/* .DropdownMenuItemType.BUTTON */ .l.BUTTON && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_6__/* .DropdownMenuItem */ .Xi, {
                                $isActive: isActive,
                                disabled: disabled || isDisabled,
                                type: "button",
                                ...itemProps,
                                children: MenuItemContent
                            }),
                            type === _types__WEBPACK_IMPORTED_MODULE_7__/* .DropdownMenuItemType.INTERNAL_LINK */ .l.INTERNAL_LINK && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_6__/* .DropdownMenuItem */ .Xi, {
                                $isActive: isActive,
                                disabled: disabled || isDisabled,
                                as: linkComponent,
                                href: href,
                                onClick: ()=>{
                                    setIsOpen(false);
                                },
                                ...itemProps,
                                children: MenuItemContent
                            }),
                            type === _types__WEBPACK_IMPORTED_MODULE_7__/* .DropdownMenuItemType.EXTERNAL_LINK */ .l.EXTERNAL_LINK && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_6__/* .DropdownMenuItem */ .Xi, {
                                $isActive: isActive,
                                disabled: disabled || isDisabled,
                                as: "a",
                                href: href,
                                target: "_blank",
                                onClick: ()=>{
                                    setIsOpen(false);
                                },
                                ...itemProps,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Box__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    width: "100%",
                                    children: [
                                        label,
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Svg__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
                                    ]
                                })
                            }),
                            type === _types__WEBPACK_IMPORTED_MODULE_7__/* .DropdownMenuItemType.DIVIDER */ .l.DIVIDER && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_6__/* .DropdownMenuDivider */ .uJ, {})
                        ]
                    }, itemItem);
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DropdownMenu);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 19278:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dt": () => (/* binding */ LinkStatus),
/* harmony export */   "Lw": () => (/* binding */ StyledDropdownMenu),
/* harmony export */   "Xi": () => (/* binding */ DropdownMenuItem),
/* harmony export */   "gL": () => (/* binding */ StyledDropdownMenuItemContainer),
/* harmony export */   "uJ": () => (/* binding */ DropdownMenuDivider)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77067);


const getTextColor = ({ $isActive , disabled , theme  })=>{
    if (disabled) return theme.colors.textDisabled;
    if ($isActive) return theme.colors.secondary;
    return theme.colors.textSubtle;
};
const DropdownMenuItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
    componentId: "sc-c11809c1-0"
}).withConfig({
    componentId: "sc-c1a62b5f-0"
})`
  align-items: center;
  border: 0;
  background: transparent;
  color: ${({ theme , disabled , $isActive  })=>getTextColor({
        theme,
        disabled,
        $isActive
    })};
  cursor: pointer;
  font-weight: ${({ $isActive =false  })=>$isActive ? "600" : "400"};
  display: flex;
  font-size: 16px;
  height: 48px;
  justify-content: space-between;
  outline: 0;
  padding-left: 16px;
  padding-right: 16px;
  width: 100%;

  &:is(button) {
    cursor: ${({ disabled  })=>disabled ? "not-allowed" : "pointer"};
  }

  &:hover:not(:disabled) {
    background-color: ${({ theme  })=>theme.colors.tertiary};
  }

  &:active:not(:disabled) {
    opacity: 0.85;
    transform: translateY(1px);
  }
`;
const StyledDropdownMenuItemContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-c11809c1-1"
}).withConfig({
    componentId: "sc-c1a62b5f-1"
})`
  &:first-child > ${DropdownMenuItem} {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  &:last-child > ${DropdownMenuItem} {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;
const DropdownMenuDivider = styled_components__WEBPACK_IMPORTED_MODULE_0___default().hr.withConfig({
    componentId: "sc-c11809c1-2"
}).withConfig({
    componentId: "sc-c1a62b5f-2"
})`
  border-color: ${({ theme  })=>theme.colors.cardBorder};
  border-style: solid;
  border-width: 1px 0 0;
  margin: 4px 0;
`;
const StyledDropdownMenu = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-c11809c1-3"
}).withConfig({
    componentId: "sc-c1a62b5f-3"
})`
  background-color: ${({ theme  })=>theme.card.background};
  border: 1px solid ${({ theme  })=>theme.colors.cardBorder};
  border-radius: 16px;
  padding-bottom: 4px;
  padding-top: 4px;
  pointer-events: auto;
  margin-bottom: 0;
  width: ${({ $isBottomNav  })=>$isBottomNav ? "calc(100% - 32px)" : "280px"};
  visibility: visible;
  z-index: 1001;

  ${({ $isOpen  })=>!$isOpen && `
    pointer-events: none;
    visibility: hidden;
  `}
`;
const LinkStatus = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Text__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z).withConfig({
    componentId: "sc-c11809c1-4"
}).withConfig({
    componentId: "sc-c1a62b5f-4"
})`
  border-radius: ${({ theme  })=>theme.radii.default};
  padding: 0 8px;
  border: 2px solid;
  border-color: ${({ theme , color  })=>theme.colors[color]};
  box-shadow: none;
  color: ${({ theme , color  })=>theme.colors[color]};
  margin-left: 8px;
`;


/***/ }),

/***/ 3672:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1381);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85551);





const getLeft = ({ position  })=>{
    if (position === "top-right") {
        return "100%";
    }
    return "50%";
};
const getBottom = ({ position  })=>{
    if (position === "top" || position === "top-right") {
        return "100%";
    }
    return "auto";
};
const DropdownContent = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-ee5ec6ea-0"
}).withConfig({
    componentId: "sc-27f42276-0"
})`
  width: max-content;
  display: flex;
  flex-direction: column;
  position: absolute;
  transform: translate(-50%, 0);
  left: ${getLeft};
  bottom: ${getBottom};
  background-color: ${({ theme  })=>theme.nav.background};
  box-shadow: ${({ theme  })=>theme.shadows.level1};
  padding: 16px;
  max-height: 0px;
  overflow: hidden;
  z-index: ${({ theme  })=>theme.zIndices.dropdown};
  border-radius: ${({ theme  })=>theme.radii.small};
  opacity: 0;
  transition: max-height 0s 0.3s, opacity 0.3s ease-in-out;
  will-change: opacity;
  pointer-events: none;
`;
const Container = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-ee5ec6ea-1"
}).withConfig({
    componentId: "sc-27f42276-1"
})`
  position: relative;
  ${({ $scrolling  })=>!$scrolling && styled_components__WEBPACK_IMPORTED_MODULE_3__.css`
      &:hover ${DropdownContent}, &:focus-within ${DropdownContent} {
        opacity: 1;
        max-height: 400px;
        overflow-y: auto;
        transition: max-height 0s 0s, opacity 0.3s ease-in-out;
        pointer-events: auto;
      }
    `}
`;
const Dropdown = ({ target , position ="bottom" , children  })=>{
    const { 0: scrolling , 1: setScrolling  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { isMobile  } = (0,_contexts__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (isMobile) {
            let scrollEndTimer;
            const handleScroll = ()=>{
                if (scrollEndTimer) clearTimeout(scrollEndTimer);
                setScrolling(true);
                // @ts-ignore
                scrollEndTimer = setTimeout(()=>{
                    setScrolling(false);
                }, 300);
            };
            const throttledHandleScroll = lodash_throttle__WEBPACK_IMPORTED_MODULE_2___default()(handleScroll, 200);
            document.addEventListener("scroll", throttledHandleScroll);
            return ()=>{
                document.removeEventListener("scroll", throttledHandleScroll);
            };
        }
        return undefined;
    }, [
        isMobile
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
        $scrolling: scrolling,
        children: [
            target,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DropdownContent, {
                position: position,
                children: children
            })
        ]
    });
};
Dropdown.defaultProps = {
    // eslint-disable-next-line react/default-props-match-prop-types
    position: "bottom"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dropdown);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 71524:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Box_Flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10993);
/* harmony import */ var _Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3672);
/* harmony import */ var _Link_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(30822);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53525);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Box_Flex__WEBPACK_IMPORTED_MODULE_2__, _Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_4__]);
([_Box_Flex__WEBPACK_IMPORTED_MODULE_2__, _Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const SocialLinks = ({ ...props })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Box_Flex__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        ...props,
        "data-theme": "dark",
        children: _config__WEBPACK_IMPORTED_MODULE_3__/* .socials.map */ .UY.map((social, index)=>{
            const iconProps = {
                width: "20px",
                color: "textSubtle",
                style: {
                    cursor: "pointer"
                }
            };
            const Icon = social.icon;
            const mr = index < _config__WEBPACK_IMPORTED_MODULE_3__/* .socials.length */ .UY.length - 1 ? "24px" : 0;
            if (social.items) {
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    position: "top",
                    target: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
                        ...iconProps,
                        mr: mr
                    }),
                    children: social.items.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Link_Link__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            external: true,
                            href: item.href,
                            "aria-label": item.label,
                            color: "textSubtle",
                            children: item.label
                        }, item.label))
                }, social.label);
            }
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Link_Link__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                external: true,
                href: social.href,
                "aria-label": social.label,
                mr: mr,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
                    ...iconProps
                })
            }, social.label);
        })
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(SocialLinks, ()=>true));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 54015:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_ui_css_vars_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41727);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10993);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85118);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(30822);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73126);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(61629);
/* harmony import */ var _CakePrice_CakePrice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(22478);
/* harmony import */ var _LangSelector_LangSelector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(44765);
/* harmony import */ var _Svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48333);
/* harmony import */ var _Svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(45613);
/* harmony import */ var _ThemeSwitcher__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(66133);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_styles__WEBPACK_IMPORTED_MODULE_3__, _Box__WEBPACK_IMPORTED_MODULE_4__, _Box__WEBPACK_IMPORTED_MODULE_7__, _ThemeSwitcher__WEBPACK_IMPORTED_MODULE_8__, _LangSelector_LangSelector__WEBPACK_IMPORTED_MODULE_9__, _CakePrice_CakePrice__WEBPACK_IMPORTED_MODULE_10__]);
([_styles__WEBPACK_IMPORTED_MODULE_3__, _Box__WEBPACK_IMPORTED_MODULE_4__, _Box__WEBPACK_IMPORTED_MODULE_7__, _ThemeSwitcher__WEBPACK_IMPORTED_MODULE_8__, _LangSelector_LangSelector__WEBPACK_IMPORTED_MODULE_9__, _CakePrice_CakePrice__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const MenuItem = ({ items , isDark , toggleTheme , currentLang , langs , setLang , cakePriceUsd , buyCakeLabel , ...props })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_3__/* .StyledFooter */ .tc, {
        "data-theme": "dark",
        p: [
            "40px 16px",
            null,
            "56px 40px 32px 40px"
        ],
        ...props,
        justifyContent: "center",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Box__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            flexDirection: "column",
            width: [
                "100%",
                null,
                "1200px;"
            ],
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_3__/* .StyledIconMobileContainer */ .HY, {
                    display: [
                        "block",
                        null,
                        "none"
                    ],
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Svg__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        isDark: true,
                        width: "130px"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Box__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    order: [
                        2,
                        null,
                        1
                    ],
                    flexDirection: [
                        "column",
                        null,
                        "row"
                    ],
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    mb: [
                        "42px",
                        null,
                        "36px"
                    ],
                    children: [
                        items?.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_3__/* .StyledList */ .CK, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_3__/* .StyledListItem */ .oH, {
                                        children: item.label
                                    }),
                                    item.items?.map(({ label , href , isHighlighted =false  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_3__/* .StyledListItem */ .oH, {
                                            children: href ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                "data-theme": "dark",
                                                href: href,
                                                target: "_blank",
                                                rel: "noreferrer noopener",
                                                color: isHighlighted ? _pancakeswap_ui_css_vars_css__WEBPACK_IMPORTED_MODULE_1__/* .vars.colors.warning */ .g.colors.warning : "text",
                                                bold: false,
                                                children: label
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_3__/* .StyledText */ .qY, {
                                                children: label
                                            })
                                        }, label))
                                ]
                            }, item.label)),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Box__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            display: [
                                "none",
                                null,
                                "block"
                            ],
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Svg__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                isDark: true,
                                width: "160px"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_3__/* .StyledSocialLinks */ .aW, {
                    order: [
                        2
                    ],
                    pb: [
                        "42px",
                        null,
                        "32px"
                    ],
                    mb: [
                        "0",
                        null,
                        "32px"
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_3__/* .StyledToolsContainer */ .jQ, {
                    "data-theme": "dark",
                    order: [
                        1,
                        null,
                        3
                    ],
                    flexDirection: [
                        "column",
                        null,
                        "row"
                    ],
                    justifyContent: "space-between",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Box__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            order: [
                                2,
                                null,
                                1
                            ],
                            alignItems: "center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ThemeSwitcher__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                    isDark: isDark,
                                    toggleTheme: toggleTheme
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LangSelector_LangSelector__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                    currentLang: currentLang,
                                    langs: langs,
                                    setLang: setLang,
                                    color: "textSubtle",
                                    dropdownPosition: "top-right"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Box__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            order: [
                                1,
                                null,
                                2
                            ],
                            mb: [
                                "24px",
                                null,
                                "0"
                            ],
                            justifyContent: "space-between",
                            alignItems: "center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Box__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                    mr: "20px",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CakePrice_CakePrice__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                        cakePriceUsd: cakePriceUsd,
                                        color: "textSubtle"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                    "data-theme": "light",
                                    as: "a",
                                    href: "https://pancakeswap.finance/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82&chainId=56",
                                    target: "_blank",
                                    scale: "sm",
                                    endIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Svg__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                        color: "backgroundAlt"
                                    }),
                                    children: buyCakeLabel
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuItem);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 53525:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "UY": () => (/* binding */ socials)
});

// UNUSED EXPORTS: footerLinks, langs

// EXTERNAL MODULE: ./packages/uikit/src/components/Svg/Icons/Twitter.tsx
var Twitter = __webpack_require__(54463);
// EXTERNAL MODULE: ./packages/uikit/src/components/Svg/Icons/Telegram.tsx
var Telegram = __webpack_require__(66132);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: ./packages/uikit/src/components/Svg/Svg.tsx
var Svg = __webpack_require__(18222);
;// CONCATENATED MODULE: ./packages/uikit/src/components/Svg/Icons/Reddit.tsx



const Icon = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Svg/* default */.Z, {
        viewBox: "0 0 20 20",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M12.09 13.412c-.448.447-1.408.607-2.09.607-.682 0-1.642-.16-2.09-.607a.27.27 0 00-.383 0 .27.27 0 000 .383c.714.704 2.068.757 2.473.757.405 0 1.76-.053 2.473-.767a.27.27 0 000-.384.28.28 0 00-.383.01zM8.753 11.034c0-.576-.47-1.045-1.045-1.045-.576 0-1.045.47-1.045 1.045 0 .576.47 1.045 1.045 1.045.576 0 1.045-.47 1.045-1.045z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M10 0C4.478 0 0 4.478 0 10s4.478 10 10 10 10-4.467 10-10c-.01-5.522-4.478-10-10-10zm5.8 11.333c.02.138.032.287.032.437 0 2.25-2.612 4.062-5.832 4.062-3.22 0-5.832-1.813-5.832-4.062 0-.15.011-.299.032-.437A1.447 1.447 0 013.337 10 1.463 1.463 0 015.81 8.945c1.013-.736 2.41-1.194 3.966-1.237 0-.021.736-3.486.736-3.486 0-.064.042-.128.096-.16a.263.263 0 01.202-.043l2.42.523c.17-.342.523-.587.928-.587A1.04 1.04 0 0115.203 5a1.04 1.04 0 01-1.045 1.045 1.034 1.034 0 01-1.034-.992l-2.175-.469-.661 3.124c1.535.053 2.91.522 3.902 1.237a1.454 1.454 0 012.473 1.044 1.48 1.48 0 01-.863 1.344z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M12.292 10c-.576 0-1.045.47-1.045 1.045s.47 1.045 1.045 1.045c.576 0 1.045-.47 1.045-1.045A1.06 1.06 0 0012.292 10z"
            })
        ]
    });
};
/* harmony default export */ const Reddit = (Icon);

// EXTERNAL MODULE: ./packages/uikit/src/components/Svg/Icons/Instagram.tsx
var Instagram = __webpack_require__(77913);
;// CONCATENATED MODULE: ./packages/uikit/src/components/Svg/Icons/Github.tsx



const Github_Icon = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(Svg/* default */.Z, {
        viewBox: "0 0 20 20",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M9.97 0C4.464 0 0 4.465 0 9.97c0 4.403 2.875 8.134 6.789 9.48.49.06.673-.245.673-.49v-1.712c-2.753.611-3.364-1.346-3.364-1.346-.428-1.162-1.101-1.468-1.101-1.468-.917-.611.061-.611.061-.611.979.06 1.53 1.04 1.53 1.04.917 1.528 2.323 1.1 2.874.856a2.13 2.13 0 01.611-1.346c-2.201-.245-4.526-1.1-4.526-4.954 0-1.101.367-1.957 1.04-2.691-.061-.184-.428-1.223.122-2.569 0 0 .857-.245 2.753 1.04.795-.245 1.651-.306 2.507-.306.857 0 1.713.122 2.508.306 1.896-1.285 2.752-1.04 2.752-1.04.55 1.346.184 2.385.123 2.63a3.956 3.956 0 011.04 2.691c0 3.853-2.325 4.648-4.527 4.893.367.306.673.918.673 1.835v2.752c0 .245.184.55.673.49A9.98 9.98 0 0020 9.97C19.939 4.464 15.474 0 9.97 0z"
        })
    });
};
/* harmony default export */ const Github = (Github_Icon);

;// CONCATENATED MODULE: ./packages/uikit/src/components/Svg/Icons/Discord.tsx



const Discord_Icon = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(Svg/* default */.Z, {
        viewBox: "0 0 20 16",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M16.93 1.644A16.491 16.491 0 0012.86.38a.062.062 0 00-.066.031c-.175.313-.37.72-.506 1.041a15.226 15.226 0 00-4.573 0A10.54 10.54 0 007.2.412a.064.064 0 00-.065-.031 16.447 16.447 0 00-4.07 1.263.058.058 0 00-.028.023C.444 5.54-.266 9.319.083 13.05a.069.069 0 00.026.047 16.584 16.584 0 004.994 2.525.064.064 0 00.07-.023c.385-.526.728-1.08 1.022-1.662a.063.063 0 00-.035-.088 10.917 10.917 0 01-1.56-.744.064.064 0 01-.007-.106c.105-.079.21-.16.31-.243a.062.062 0 01.065-.009c3.273 1.495 6.817 1.495 10.051 0a.062.062 0 01.066.008c.1.083.204.165.31.244a.064.064 0 01-.005.106c-.499.291-1.017.537-1.561.743a.064.064 0 00-.034.089c.3.582.643 1.135 1.02 1.66a.063.063 0 00.07.025 16.53 16.53 0 005.003-2.525.064.064 0 00.026-.046c.417-4.314-.699-8.061-2.957-11.384a.05.05 0 00-.026-.023zM6.684 10.778c-.985 0-1.797-.905-1.797-2.016 0-1.11.796-2.015 1.797-2.015 1.01 0 1.814.912 1.798 2.015 0 1.111-.796 2.016-1.798 2.016zm6.646 0c-.986 0-1.797-.905-1.797-2.016 0-1.11.796-2.015 1.797-2.015 1.009 0 1.813.912 1.797 2.015 0 1.111-.788 2.016-1.797 2.016z"
        })
    });
};
/* harmony default export */ const Discord = (Discord_Icon);

;// CONCATENATED MODULE: ./packages/uikit/src/components/Svg/Icons/Medium.tsx



const Medium_Icon = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(Svg/* default */.Z, {
        viewBox: "0 0 24 24",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M7.64 6.32c3.116 0 5.641 2.544 5.641 5.68 0 3.137-2.525 5.68-5.64 5.68C4.526 17.68 2 15.136 2 12c0-3.136 2.525-5.68 5.64-5.68zm9.008.333c1.558 0 2.82 2.394 2.82 5.347h.001c0 2.953-1.263 5.347-2.82 5.347-1.558 0-2.82-2.395-2.82-5.347 0-2.952 1.262-5.347 2.82-5.347zm4.36.557c.548 0 .992 2.145.992 4.79s-.444 4.79-.992 4.79-.992-2.145-.992-4.79.444-4.79.992-4.79z"
        })
    });
};
/* harmony default export */ const Medium = (Medium_Icon);

;// CONCATENATED MODULE: ./packages/uikit/src/components/Footer/config.tsx

const footerLinks = [
    {
        label: "About",
        items: [
            {
                label: "Contact",
                href: "https://docs.pancakeswap.finance/contact-us"
            },
            {
                label: "Blog",
                href: "https://medium.com/pancakeswap"
            },
            {
                label: "Community",
                href: "https://docs.pancakeswap.finance/contact-us/telegram"
            },
            {
                label: "CAKE",
                href: "https://docs.pancakeswap.finance/tokenomics/cake"
            },
            {
                label: "—"
            },
            {
                label: "Online Store",
                href: "https://pancakeswap.creator-spring.com/",
                isHighlighted: true
            }, 
        ]
    },
    {
        label: "Help",
        items: [
            {
                label: "Customer",
                href: "Support https://docs.pancakeswap.finance/contact-us/customer-support"
            },
            {
                label: "Troubleshooting",
                href: "https://docs.pancakeswap.finance/help/troubleshooting"
            },
            {
                label: "Guides",
                href: "https://docs.pancakeswap.finance/get-started"
            }, 
        ]
    },
    {
        label: "Developers",
        items: [
            {
                label: "Github",
                href: "https://github.com/pancakeswap"
            },
            {
                label: "Documentation",
                href: "https://docs.pancakeswap.finance"
            },
            {
                label: "Bug Bounty",
                href: "https://app.gitbook.com/@pancakeswap-1/s/pancakeswap/code/bug-bounty"
            },
            {
                label: "Audits",
                href: "https://docs.pancakeswap.finance/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited"
            },
            {
                label: "Careers",
                href: "https://docs.pancakeswap.finance/hiring/become-a-chef"
            }, 
        ]
    }, 
];
const socials = [
    {
        label: "Twitter",
        icon: Twitter/* default */.Z,
        href: "https://twitter.com/pancakeswap"
    },
    {
        label: "Telegram",
        icon: Telegram/* default */.Z,
        items: [
            {
                label: "English",
                href: "https://t.me/pancakeswap"
            },
            {
                label: "Bahasa Indonesia",
                href: "https://t.me/PancakeSwapIndonesia"
            },
            {
                label: "中文",
                href: "https://t.me/PancakeSwap_CN"
            },
            {
                label: "Tiếng Việt",
                href: "https://t.me/PancakeSwapVN"
            },
            {
                label: "Italiano",
                href: "https://t.me/pancakeswap_ita"
            },
            {
                label: "русский",
                href: "https://t.me/pancakeswap_ru"
            },
            {
                label: "T\xfcrkiye",
                href: "https://t.me/pancakeswapturkiye"
            },
            {
                label: "Portugu\xeas",
                href: "https://t.me/PancakeSwapPortuguese"
            },
            {
                label: "Espa\xf1ol",
                href: "https://t.me/PancakeswapEs"
            },
            {
                label: "日本語",
                href: "https://t.me/pancakeswapjp"
            },
            {
                label: "Fran\xe7ais",
                href: "https://t.me/pancakeswapfr"
            },
            {
                label: "Deutsch",
                href: "https://t.me/PancakeSwap_DE"
            },
            {
                label: "Filipino",
                href: "https://t.me/Pancakeswap_Ph"
            },
            {
                label: "ქართული ენა",
                href: "https://t.me/PancakeSwapGeorgia"
            },
            {
                label: "हिन्दी",
                href: "https://t.me/PancakeSwapINDIA"
            },
            {
                label: "Announcements",
                href: "https://t.me/PancakeSwapAnn"
            }, 
        ]
    },
    {
        label: "Reddit",
        icon: Reddit,
        href: "https://reddit.com/r/pancakeswap"
    },
    {
        label: "Instagram",
        icon: Instagram/* default */.Z,
        href: "https://instagram.com/pancakeswap_official"
    },
    {
        label: "Github",
        icon: Github,
        href: "https://github.com/pancakeswap/"
    },
    {
        label: "Discord",
        icon: Discord,
        href: "https://discord.gg/pancakeswap"
    },
    {
        label: "Medium",
        icon: Medium,
        href: "https://medium.com/pancakeswap"
    }, 
];
const langs = [
    ...Array(20)
].map((_, i)=>({
        code: `en${i}`,
        language: `English${i}`,
        locale: `Locale${i}`
    }));


/***/ }),

/***/ 73126:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CK": () => (/* binding */ StyledList),
/* harmony export */   "HY": () => (/* binding */ StyledIconMobileContainer),
/* harmony export */   "aW": () => (/* binding */ StyledSocialLinks),
/* harmony export */   "jQ": () => (/* binding */ StyledToolsContainer),
/* harmony export */   "oH": () => (/* binding */ StyledListItem),
/* harmony export */   "qY": () => (/* binding */ StyledText),
/* harmony export */   "tc": () => (/* binding */ StyledFooter)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75336);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10993);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85118);
/* harmony import */ var _Components_SocialLinks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71524);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Box__WEBPACK_IMPORTED_MODULE_1__, _Box__WEBPACK_IMPORTED_MODULE_3__, _Components_SocialLinks__WEBPACK_IMPORTED_MODULE_4__]);
([_Box__WEBPACK_IMPORTED_MODULE_1__, _Box__WEBPACK_IMPORTED_MODULE_3__, _Components_SocialLinks__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const StyledFooter = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Box__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z).withConfig({
    componentId: "sc-d87f9a25-0"
}).withConfig({
    componentId: "sc-342e072c-0"
})`
  background: ${_theme_colors__WEBPACK_IMPORTED_MODULE_2__/* .darkColors.backgroundAlt */ ._.backgroundAlt};
`;
const StyledList = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
    componentId: "sc-d87f9a25-1"
}).withConfig({
    componentId: "sc-342e072c-1"
})`
  list-style: none;
  margin-bottom: 40px;

  ${({ theme  })=>theme.mediaQueries.md} {
    margin-bottom: 0px;
  }
`;
const StyledListItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default().li.withConfig({
    componentId: "sc-d87f9a25-2"
}).withConfig({
    componentId: "sc-342e072c-2"
})`
  font-size: 16px;
  margin-bottom: 8px;
  text-transform: capitalize;

  &:first-child {
    color: ${_theme_colors__WEBPACK_IMPORTED_MODULE_2__/* .darkColors.secondary */ ._.secondary};
    font-weight: 600;
    text-transform: uppercase;
  }
`;
const StyledIconMobileContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Box__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z).withConfig({
    componentId: "sc-d87f9a25-3"
}).withConfig({
    componentId: "sc-342e072c-3"
})`
  margin-bottom: 24px;
`;
const StyledToolsContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Box__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z).withConfig({
    componentId: "sc-d87f9a25-4"
}).withConfig({
    componentId: "sc-342e072c-4"
})`
  border-color: ${_theme_colors__WEBPACK_IMPORTED_MODULE_2__/* .darkColors.cardBorder */ ._.cardBorder};
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-style: solid;
  padding: 24px 0;
  margin-bottom: 24px;

  ${({ theme  })=>theme.mediaQueries.sm} {
    border-top-width: 0;
    border-bottom-width: 0;
    padding: 0 0;
    margin-bottom: 0;
  }
`;
const StyledSocialLinks = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Components_SocialLinks__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z).withConfig({
    componentId: "sc-d87f9a25-5"
}).withConfig({
    componentId: "sc-342e072c-5"
})`
  border-bottom: 1px solid ${_theme_colors__WEBPACK_IMPORTED_MODULE_2__/* .darkColors.cardBorder */ ._.cardBorder};
`;
const StyledText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
    componentId: "sc-d87f9a25-6"
}).withConfig({
    componentId: "sc-342e072c-6"
})`
  color: ${_theme_colors__WEBPACK_IMPORTED_MODULE_2__/* .darkColors.text */ ._.text};
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 44765:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Text_Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(77067);
/* harmony import */ var _Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3672);
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61629);
/* harmony import */ var _Svg_Icons_Language__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8976);
/* harmony import */ var _MenuButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(43382);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_2__]);
_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const LangSelector = ({ currentLang , langs , color , setLang , dropdownPosition ="bottom" , buttonScale ="md" , hideLanguage =false ,  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        position: dropdownPosition,
        target: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            scale: buttonScale,
            variant: "text",
            startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Svg_Icons_Language__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                color: color,
                width: "24px"
            }),
            children: !hideLanguage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Text_Text__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                color: color,
                children: currentLang?.toUpperCase()
            })
        }),
        children: langs.map((lang)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MenuButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                fullWidth: true,
                onClick: ()=>setLang(lang),
                // Safari fix
                style: {
                    minHeight: "32px",
                    height: "auto"
                },
                children: lang.language
            }, lang.locale))
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(LangSelector, (prev, next)=>prev.currentLang === next.currentLang));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 43382:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61629);


const MenuButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Button_Button__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z).withConfig({
    componentId: "sc-f81265b6-0"
}).withConfig({
    componentId: "sc-6d015665-0"
})`
  color: ${({ theme  })=>theme.colors.text};
  padding: 0 8px;
  border-radius: 8px;
`;
MenuButton.defaultProps = {
    variant: "text",
    size: "sm"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuButton);


/***/ }),

/***/ 52569:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _widgets_Menu_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83468);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36191);
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85551);





const MenuItem = ({ children , href , isActive =false , isDisabled =false , variant ="default" , scrollLayerRef , statusColor , ...props })=>{
    const { isMobile  } = (0,_contexts__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    const menuItemRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { linkComponent  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_widgets_Menu_context__WEBPACK_IMPORTED_MODULE_3__/* .MenuContext */ .p);
    const itemLinkProps = href ? {
        as: linkComponent,
        href
    } : {
        as: "div"
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!isMobile || !isActive || !menuItemRef.current || !scrollLayerRef?.current) return;
        const scrollLayer = scrollLayerRef.current;
        const menuNode = menuItemRef.current.parentNode;
        if (!menuNode) return;
        if (scrollLayer.scrollLeft > menuNode.offsetLeft || scrollLayer.scrollLeft + scrollLayer.offsetWidth < menuNode.offsetLeft + menuNode.offsetWidth) {
            scrollLayer.scrollLeft = menuNode.offsetLeft;
        }
    }, [
        isActive,
        isMobile,
        scrollLayerRef
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_4__/* .StyledMenuItemContainer */ .p, {
        $isActive: isActive,
        $variant: variant,
        ref: menuItemRef,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            ...itemLinkProps,
            $isActive: isActive,
            $isDisabled: isDisabled,
            $variant: variant,
            $statusColor: statusColor,
            ...props,
            children: children
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuItem);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 36191:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "p": () => (/* binding */ StyledMenuItemContainer)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const StyledMenuItemContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-ae81c2e-0"
}).withConfig({
    componentId: "sc-f15858f3-0"
})`
  position: relative;

  ${({ $isActive , $variant , theme  })=>$isActive && $variant === "subMenu" && `
      &:after{
        content: "";
        position: absolute;
        bottom: 0;
        height: 4px;
        width: 100%;
        background-color: ${theme.colors.primary};
        border-radius: 2px 2px 0 0;
      }
    `};
`;
const StyledMenuItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default().a.withConfig({
    componentId: "sc-ae81c2e-1"
}).withConfig({
    componentId: "sc-f15858f3-1"
})`
  position: relative;
  display: flex;
  align-items: center;

  color: ${({ theme , $isActive  })=>$isActive ? theme.colors.secondary : theme.colors.textSubtle};
  font-size: 16px;
  font-weight: ${({ $isActive  })=>$isActive ? "600" : "400"};
  opacity: ${({ $isDisabled  })=>$isDisabled ? 0.5 : 1};

  ${({ $statusColor , theme  })=>$statusColor && `
    &:after {
      content: "";
      border-radius: 100%;
      background: ${theme.colors[$statusColor]};
      height: 8px;
      width: 8px;
      margin-left: 12px;
    }
  `}

  ${({ $variant  })=>$variant === "default" ? `
    padding: 0 16px;
    height: 48px;
  ` : `
    padding: 4px 4px 0px 4px;
    height: 42px;
  `}

  &:hover {
    background: ${({ theme  })=>theme.colors.tertiary};
    ${({ $variant  })=>$variant === "default" && "border-radius: 16px;"};
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyledMenuItem);


/***/ }),

/***/ 50115:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10993);
/* harmony import */ var _util_isTouchDevice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76366);
/* harmony import */ var _DropdownMenu_DropdownMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(84610);
/* harmony import */ var _MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52569);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Box__WEBPACK_IMPORTED_MODULE_2__, _DropdownMenu_DropdownMenu__WEBPACK_IMPORTED_MODULE_4__, _MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_5__]);
([_Box__WEBPACK_IMPORTED_MODULE_2__, _DropdownMenu_DropdownMenu__WEBPACK_IMPORTED_MODULE_4__, _MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable @typescript-eslint/no-explicit-any */ 





const MenuItems = ({ items =[] , activeItem , activeSubItem , ...props })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Box__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        ...props,
        children: items.map(({ label , items: menuItems = [] , href , icon , disabled  })=>{
            const statusColor = menuItems?.find((menuItem)=>menuItem.status !== undefined)?.status?.color;
            const isActive = activeItem === href;
            const linkProps = (0,_util_isTouchDevice__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)() && menuItems && menuItems.length > 0 ? {} : {
                href
            };
            const Icon = icon;
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DropdownMenu_DropdownMenu__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                items: menuItems,
                py: 1,
                activeItem: activeSubItem,
                isDisabled: disabled,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    ...linkProps,
                    isActive: isActive,
                    statusColor: statusColor,
                    isDisabled: disabled,
                    children: label || icon && /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(Icon, {
                        color: isActive ? "secondary" : "textSubtle"
                    })
                })
            }, `${label}#${href}`);
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(MenuItems));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 92087:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93908);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85551);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(85118);
/* harmony import */ var _DropdownMenu_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13030);
/* harmony import */ var _MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(52569);
/* harmony import */ var _Svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(77577);
/* harmony import */ var _Svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(27309);
/* harmony import */ var _Svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(91370);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75376);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_styles__WEBPACK_IMPORTED_MODULE_4__, _MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_8__, _Box__WEBPACK_IMPORTED_MODULE_9__]);
([_styles__WEBPACK_IMPORTED_MODULE_4__, _MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_8__, _Box__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const SUBMENU_CHEVRON_CLICK_MOVE_PX = 100;
const SUBMENU_SCROLL_DEVIATION = 3;
const SubMenuItems = ({ items =[] , activeItem , isMobileOnly =false , ...props })=>{
    const { isMobile  } = (0,_contexts__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const scrollLayerRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const chevronLeftRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const chevronRightRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const layerController = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        if (!scrollLayerRef.current || !chevronLeftRef.current || !chevronRightRef.current) return;
        const scrollLayer = scrollLayerRef.current;
        if (scrollLayer.scrollLeft === 0) chevronLeftRef.current.classList.add("hide");
        else chevronLeftRef.current.classList.remove("hide");
        if (scrollLayer.scrollLeft + scrollLayer.offsetWidth < scrollLayer.scrollWidth - SUBMENU_SCROLL_DEVIATION) chevronRightRef.current.classList.remove("hide");
        else chevronRightRef.current.classList.add("hide");
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        layerController();
    }, [
        layerController
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_4__/* .SubMenuItemWrapper */ .nY, {
        $isMobileOnly: isMobileOnly,
        ...props,
        children: [
            isMobile && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_4__/* .LeftMaskLayer */ .r7, {
                ref: chevronLeftRef,
                onClick: ()=>{
                    if (!scrollLayerRef.current) return;
                    scrollLayerRef.current.scrollLeft -= SUBMENU_CHEVRON_CLICK_MOVE_PX;
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Svg__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
            }),
            isMobile && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_4__/* .RightMaskLayer */ .x$, {
                ref: chevronRightRef,
                onClick: ()=>{
                    if (!scrollLayerRef.current) return;
                    scrollLayerRef.current.scrollLeft += SUBMENU_CHEVRON_CLICK_MOVE_PX;
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Svg__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
                justifyContent: [
                    isMobileOnly ? "flex-end" : "start",
                    null,
                    "center"
                ],
                pl: [
                    "12px",
                    null,
                    "0px"
                ],
                onScroll: lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default()(layerController, 100),
                ref: scrollLayerRef,
                children: items.map(({ label , href , icon , itemProps , type , disabled  })=>{
                    const Icon = icon;
                    const isExternalLink = type === _DropdownMenu_types__WEBPACK_IMPORTED_MODULE_7__/* .DropdownMenuItemType.EXTERNAL_LINK */ .l.EXTERNAL_LINK;
                    const linkProps = isExternalLink ? {
                        as: "a",
                        target: "_blank"
                    } : {};
                    const isActive = href === activeItem;
                    return label && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_4__/* .StyledSubMenuItemWrapper */ .bQ, {
                        mr: "20px",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            href: href,
                            scrollLayerRef: scrollLayerRef,
                            isActive: isActive,
                            isDisabled: disabled,
                            variant: "subMenu",
                            ...itemProps,
                            ...linkProps,
                            children: [
                                Icon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
                                    color: isActive ? "secondary" : "textSubtle",
                                    mr: "4px"
                                }),
                                label,
                                isExternalLink && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Box__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                    display: [
                                        "none",
                                        null,
                                        "flex"
                                    ],
                                    style: {
                                        alignItems: "center"
                                    },
                                    ml: "4px",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Svg__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                        color: "textSubtle"
                                    })
                                })
                            ]
                        })
                    }, label);
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubMenuItems);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 75376:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "bQ": () => (/* binding */ StyledSubMenuItemWrapper),
/* harmony export */   "nY": () => (/* binding */ SubMenuItemWrapper),
/* harmony export */   "r7": () => (/* binding */ LeftMaskLayer),
/* harmony export */   "x$": () => (/* binding */ RightMaskLayer)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10993);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85118);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Box__WEBPACK_IMPORTED_MODULE_1__, _Box__WEBPACK_IMPORTED_MODULE_2__]);
([_Box__WEBPACK_IMPORTED_MODULE_1__, _Box__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const SubMenuItemWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Box__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z).withConfig({
    componentId: "sc-22a2e93a-0"
}).withConfig({
    componentId: "sc-f62ceaaa-0"
})`
  ${({ theme  })=>theme.mediaQueries.sm} {
    ${({ $isMobileOnly  })=>$isMobileOnly ? "display:none" : ""};
  }
  width: 100%;
  overflow: hidden;
  position: relative;
`;
const StyledSubMenuItems = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Box__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z).withConfig({
    componentId: "sc-22a2e93a-1"
}).withConfig({
    componentId: "sc-f62ceaaa-1"
})`
  position: relative;
  z-index: 1;
  width: 100%;
  display: block;
  white-space: nowrap;
  scroll-behavior: smooth;
  ${({ theme  })=>theme.mediaQueries.md} {
    width: auto;
    display: flex;
  }
  flex-grow: 1;
  background-color: ${({ theme  })=>`${theme.colors.backgroundAlt2}`};
  box-shadow: inset 0px -2px 0px -8px rgba(133, 133, 133, 0.1);
  overflow-x: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const maskSharedStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
  position: absolute;
  z-index: 2;
  width: 48px;
  height: 100%;
  top: 0px;
  display: flex;
  justify-content: center;
  opacity: 1;
  will-change: opacity;
  transition: 0.25s ease-in opacity;
  &.hide {
    pointer-events: none;
    opacity: 0;
    transition: 0.25s ease-out opacity;
  }
`;
const LeftMaskLayer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-22a2e93a-2"
}).withConfig({
    componentId: "sc-f62ceaaa-2"
})`
  ${maskSharedStyle}
  left: 0px;
  background: ${({ theme  })=>theme.isDark ? `linear-gradient(90deg, #27262c 29.76%, rgba(39,38,44, 0) 100%)` : `linear-gradient(90deg, #ffffff 29.76%, rgba(255, 255, 255, 0) 100%)`};
`;
const RightMaskLayer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-22a2e93a-3"
}).withConfig({
    componentId: "sc-f62ceaaa-3"
})`
  ${maskSharedStyle}
  right: 0px;
  background: ${({ theme  })=>theme.isDark ? `linear-gradient(270deg, #27262c 0%, rgba(39,38,44, 0) 87.5%)` : `linear-gradient(270deg, #ffffff 0%, rgba(255, 255, 255, 0) 87.5%)`};
`;
const StyledSubMenuItemWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Box__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z).withConfig({
    componentId: "sc-22a2e93a-4"
}).withConfig({
    componentId: "sc-f62ceaaa-4"
})`
  display: inline-block;
  vertical-align: top;
  scroll-snap-align: start;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyledSubMenuItems);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 98325:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Svg_AnimatedIconComponent)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(57518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./packages/uikit/src/components/Svg/styles.tsx

const StyledIconContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-bfd9d551-0"
}).withConfig({
    componentId: "sc-214b72d-0"
})`
  background: ${({ activeBackgroundColor , theme  })=>activeBackgroundColor ? theme.colors[activeBackgroundColor] : "transparent"};
`;
const StyledAnimatedIconComponent = external_styled_components_default().div.withConfig({
    componentId: "sc-bfd9d551-1"
}).withConfig({
    componentId: "sc-214b72d-1"
})`
  position: relative;
  ${({ height  })=>height && `height: ${height}`};
  ${({ width  })=>`width: ${width || "100%"}`};

  div:first-child {
    ${({ height  })=>height && `height: ${height}`};
    ${({ width  })=>`width: ${width || "100%"}`};
    z-index: 0;
  }
  ${({ hasFillIcon  })=>hasFillIcon && `
    div, svg {
      position: absolute;
      left: 0;
      bottom: 0;
      overflow:hidden;
    }

    div:last-child {
      height: 0;
      z-index: 5;
      transition: height 0.25s ease;
    }
  `}

  ${({ isActive , height , width , hasFillIcon  })=>isActive && `
    div:last-child {
      ${height && hasFillIcon && `height:${height}`};
      ${`width: ${width || "100%"}`};
    }
  `}
`;

;// CONCATENATED MODULE: ./packages/uikit/src/components/Svg/AnimatedIconComponent.tsx


const AnimatedIconComponent = ({ icon , fillIcon , color ="textSubtle" , activeColor ="secondary" , activeBackgroundColor , isActive =false , ...props })=>{
    const IconElement = icon;
    const IconElementFill = fillIcon;
    return IconElement ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledAnimatedIconComponent, {
        isActive: isActive,
        hasFillIcon: !!IconElementFill,
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(StyledIconContainer, {
                activeBackgroundColor: activeBackgroundColor,
                children: /*#__PURE__*/ jsx_runtime_.jsx(IconElement, {
                    color: color
                })
            }),
            !!IconElementFill && /*#__PURE__*/ jsx_runtime_.jsx(StyledIconContainer, {
                activeBackgroundColor: activeBackgroundColor,
                ...props,
                children: /*#__PURE__*/ jsx_runtime_.jsx(IconElementFill, {
                    color: activeColor
                })
            })
        ]
    }) : null;
};
/* harmony default export */ const Svg_AnimatedIconComponent = (AnimatedIconComponent);


/***/ }),

/***/ 99762:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18222);



const Icon = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Svg__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        viewBox: "0 0 24 24",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M12 6V7.79C12 8.24 12.54 8.46 12.85 8.14L15.64 5.35C15.84 5.15 15.84 4.84 15.64 4.64L12.85 1.85C12.54 1.54 12 1.76 12 2.21V4C7.58 4 4 7.58 4 12C4 13.04 4.2 14.04 4.57 14.95C4.84 15.62 5.7 15.8 6.21 15.29C6.48 15.02 6.59 14.61 6.44 14.25C6.15 13.56 6 12.79 6 12C6 8.69 8.69 6 12 6ZM17.79 8.71C17.52 8.98 17.41 9.4 17.56 9.75C17.84 10.45 18 11.21 18 12C18 15.31 15.31 18 12 18V16.21C12 15.76 11.46 15.54 11.15 15.86L8.36 18.65C8.16 18.85 8.16 19.16 8.36 19.36L11.15 22.15C11.46 22.46 12 22.24 12 21.8V20C16.42 20 20 16.42 20 12C20 10.96 19.8 9.96 19.43 9.05C19.16 8.38 18.3 8.2 17.79 8.71Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 15501:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18222);



const Icon = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Svg__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        viewBox: "0 0 24 24",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22ZM12 4C16.42 4 20 7.58 20 12C20 13.85 19.37 15.55 18.31 16.9L7.1 5.69C8.45 4.63 10.15 4 12 4ZM5.69 7.1L16.9 18.31C15.55 19.37 13.85 20 12 20C7.58 20 4 16.42 4 12C4 10.15 4.63 8.45 5.69 7.1Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 46344:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18222);



const Icon = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Svg__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        viewBox: "0 0 24 24",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.88 8.29L10 14.17L8.12 12.29C7.73 11.9 7.1 11.9 6.71 12.29C6.32 12.68 6.32 13.31 6.71 13.7L9.3 16.29C9.69 16.68 10.32 16.68 10.71 16.29L17.3 9.7C17.69 9.31 17.69 8.68 17.3 8.29C16.91 7.9 16.27 7.9 15.88 8.29Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 85838:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18222);



const Icon = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Svg__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        viewBox: "0 0 24 24",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 77577:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18222);



const Icon = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Svg__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        viewBox: "0 0 24 24",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M14.71 15.88L10.83 12L14.71 8.12001C15.1 7.73001 15.1 7.10001 14.71 6.71001C14.32 6.32001 13.69 6.32001 13.3 6.71001L8.70998 11.3C8.31998 11.69 8.31998 12.32 8.70998 12.71L13.3 17.3C13.69 17.69 14.32 17.69 14.71 17.3C15.09 16.91 15.1 16.27 14.71 15.88Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 27309:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18222);



const Icon = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Svg__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        viewBox: "0 0 24 24",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M9.29006 15.88L13.1701 12L9.29006 8.12001C8.90006 7.73001 8.90006 7.10001 9.29006 6.71001C9.68006 6.32001 10.3101 6.32001 10.7001 6.71001L15.2901 11.3C15.6801 11.69 15.6801 12.32 15.2901 12.71L10.7001 17.3C10.3101 17.69 9.68006 17.69 9.29006 17.3C8.91006 16.91 8.90006 16.27 9.29006 15.88Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 79578:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18222);



const Icon = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Svg__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        viewBox: "0 0 24 24",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M11 7H13V9H11V7ZM12 17C12.55 17 13 16.55 13 16V12C13 11.45 12.55 11 12 11C11.45 11 11 11.45 11 12V16C11 16.55 11.45 17 12 17ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 77913:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18222);



const Icon = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Svg__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        viewBox: "0 0 18 18",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M9 1.625c2.407 0 2.685.01 3.641.052.874.04 1.358.185 1.666.308.422.165.72.36 1.04.669.318.319.514.617.668 1.039.123.318.267.792.308 1.666.042.946.052 1.234.052 3.641s-.01 2.685-.052 3.641c-.04.874-.185 1.358-.308 1.666-.165.422-.36.72-.669 1.04a2.66 2.66 0 01-1.039.668c-.318.123-.792.267-1.666.308-.946.042-1.234.052-3.641.052s-2.685-.01-3.641-.052c-.874-.04-1.358-.185-1.666-.308a2.911 2.911 0 01-1.04-.669 2.659 2.659 0 01-.668-1.039c-.123-.318-.267-.792-.308-1.666-.042-.946-.052-1.234-.052-3.641s.01-2.685.052-3.641c.04-.874.185-1.358.308-1.666.165-.422.36-.72.669-1.04a2.658 2.658 0 011.039-.668c.318-.123.792-.267 1.666-.308.956-.042 1.234-.052 3.641-.052zM9 0C6.552 0 6.254.01 5.287.051c-.957.052-1.615.196-2.18.422a4.311 4.311 0 00-1.595 1.039A4.311 4.311 0 00.473 3.106c-.226.566-.37 1.224-.422 2.18C.011 6.255 0 6.553 0 9s.01 2.746.051 3.713c.042.957.196 1.615.422 2.18.226.597.535 1.091 1.039 1.595.504.504.998.813 1.594 1.039.576.226 1.224.37 2.18.422.957.04 1.266.051 3.714.051s2.746-.01 3.713-.051c.957-.042 1.615-.196 2.18-.422a4.311 4.311 0 001.595-1.039 4.311 4.311 0 001.039-1.594c.226-.576.37-1.224.422-2.18.04-.957.051-1.266.051-3.714s-.01-2.746-.051-3.713c-.042-.957-.196-1.615-.422-2.18a4.312 4.312 0 00-1.039-1.595A4.311 4.311 0 0014.894.473c-.576-.226-1.224-.37-2.18-.422C11.745.011 11.447 0 9 0z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M9 4.382a4.618 4.618 0 100 9.236 4.618 4.618 0 000-9.236zm0 7.621A3.007 3.007 0 015.997 9 3.007 3.007 0 019 5.997 3.007 3.007 0 0112.003 9 3.007 3.007 0 019 12.003zM13.803 5.277a1.08 1.08 0 100-2.16 1.08 1.08 0 000 2.16z"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 8976:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18222);



const Icon = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Svg__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        viewBox: "0 0 24 24",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM18.92 8H15.97C15.65 6.75 15.19 5.55 14.59 4.44C16.43 5.07 17.96 6.35 18.92 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.57 18.93 6.04 17.66 5.08 16ZM8.03 8H5.08C6.04 6.34 7.57 5.07 9.41 4.44C8.81 5.55 8.35 6.75 8.03 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM14.34 14H9.66C9.57 13.34 9.5 12.68 9.5 12C9.5 11.32 9.57 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.96 17.65 16.43 18.93 14.59 19.56ZM16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14H16.36Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 38326:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18222);



const Icon = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Svg__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        viewBox: "0 0 198 199",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M98.552 198.607c-29.49-.022-53.246-7.027-69.844-19.609C11.91 166.265 3 148.195 3 127.748c0-19.701 8.891-33.907 18.952-43.51 7.884-7.525 16.584-12.344 22.642-15.117-1.37-4.162-3.079-9.61-4.608-15.238-2.046-7.53-4.053-16.366-4.053-22.84 0-7.663 1.687-15.36 6.238-21.34C46.98 3.385 54.218 0 62.926 0c6.806 0 12.584 2.499 17.108 6.81 4.324 4.12 7.202 9.593 9.189 15.298 3.491 10.024 4.85 22.618 5.232 35.187h8.341c.382-12.569 1.741-25.163 5.233-35.187 1.987-5.705 4.865-11.177 9.189-15.298C121.741 2.5 127.519 0 134.325 0c8.708 0 15.947 3.385 20.755 9.703 4.551 5.98 6.239 13.677 6.239 21.34 0 6.474-2.007 15.31-4.054 22.84-1.529 5.628-3.238 11.076-4.608 15.238 6.058 2.773 14.759 7.592 22.643 15.118 10.06 9.602 18.952 23.808 18.952 43.509 0 20.447-8.911 38.517-25.708 51.25-16.598 12.582-40.354 19.587-69.844 19.609h-.148z",
                fill: "#633001"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M62.926 7.288c-12.754 0-18.626 9.516-18.626 22.675 0 10.46 6.822 31.408 9.621 39.563.63 1.835-.36 3.844-2.164 4.555-10.222 4.031-40.39 18.789-40.39 52.588 0 35.603 30.658 62.448 87.191 62.49h.135c56.534-.042 87.19-26.887 87.19-62.49 0-33.799-30.167-48.557-40.389-52.588-1.804-.71-2.794-2.72-2.164-4.555 2.799-8.154 9.621-29.103 9.621-39.563 0-13.16-5.871-22.675-18.626-22.675-18.36 0-22.936 26.007-23.263 53.92-.022 1.863-1.528 3.375-3.392 3.375H89.58c-1.863 0-3.37-1.512-3.391-3.375-.326-27.913-4.903-53.92-23.263-53.92z",
                fill: "#D1884F"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M98.693 177.755c-41.538 0-87.253-22.235-87.325-51.018v.134c0 35.632 30.705 62.491 87.325 62.491 56.62 0 87.325-26.859 87.325-62.491v-.134c-.072 28.783-45.787 51.018-87.325 51.018z",
                fill: "#FEDC90"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "eye",
                d: "M75.614 117.896c0 9.718-4.593 14.779-10.258 14.779-5.665 0-10.258-5.061-10.258-14.779s4.593-14.779 10.258-14.779c5.665 0 10.258 5.061 10.258 14.779zM142.288 117.896c0 9.718-4.592 14.779-10.257 14.779-5.666 0-10.258-5.061-10.258-14.779s4.592-14.779 10.258-14.779c5.665 0 10.257 5.061 10.257 14.779z",
                fill: "#633001"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 84357:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18222);



const Icon = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Svg__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        viewBox: "0 0 96 96",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                cx: 48,
                cy: 48,
                r: 48,
                fill: "url(#paint0_linear_10493)"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M47.858 79.875c-9.342-.007-16.866-2.249-22.124-6.275-5.321-4.075-8.144-9.857-8.144-16.4 0-6.304 2.817-10.85 6.004-13.923 2.497-2.408 5.253-3.95 7.172-4.838a99.818 99.818 0 01-1.46-4.876c-.648-2.41-1.284-5.237-1.284-7.309 0-2.452.535-4.915 1.977-6.829 1.523-2.021 3.816-3.104 6.574-3.104 2.156 0 3.986.8 5.42 2.179 1.369 1.318 2.28 3.07 2.91 4.895 1.106 3.208 1.537 7.238 1.657 11.26h2.643c.12-4.022.551-8.052 1.657-11.26.63-1.825 1.541-3.577 2.91-4.895 1.434-1.38 3.264-2.18 5.42-2.18 2.758 0 5.051 1.084 6.574 3.105 1.442 1.914 1.977 4.377 1.977 6.83 0 2.071-.636 4.898-1.284 7.308a99.707 99.707 0 01-1.46 4.876c1.919.888 4.675 2.43 7.172 4.838 3.187 3.073 6.004 7.619 6.004 13.923 0 6.543-2.823 12.325-8.144 16.4-5.257 4.026-12.782 6.268-22.124 6.275h-.047z",
                fill: "#633001"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M36.573 18.653c-4.04 0-5.9 3.045-5.9 7.256 0 3.347 2.16 10.05 3.048 12.66.199.587-.114 1.23-.686 1.458-3.238 1.29-12.794 6.012-12.794 16.828 0 11.393 9.711 19.983 27.619 19.997h.043c17.908-.014 27.619-8.604 27.619-19.997 0-10.816-9.556-15.539-12.794-16.828a1.176 1.176 0 01-.686-1.458c.887-2.61 3.048-9.313 3.048-12.66 0-4.211-1.86-7.256-5.9-7.256-5.816 0-7.266 8.322-7.37 17.254a1.084 1.084 0 01-1.074 1.08h-5.73c-.59 0-1.067-.484-1.074-1.08-.103-8.932-1.553-17.254-7.369-17.254z",
                fill: "#D1884F"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M47.903 73.202c-13.158 0-27.64-7.115-27.662-16.326v.043c0 11.403 9.727 19.997 27.662 19.997s27.661-8.594 27.661-19.997v-.043c-.022 9.21-14.503 16.326-27.661 16.326z",
                fill: "#FEDC90"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M40.592 54.047c0 3.11-1.455 4.73-3.25 4.73-1.794 0-3.249-1.62-3.249-4.73 0-3.11 1.455-4.73 3.25-4.73 1.794 0 3.249 1.62 3.249 4.73zM61.712 54.047c0 3.11-1.455 4.73-3.25 4.73-1.794 0-3.248-1.62-3.248-4.73 0-3.11 1.454-4.73 3.249-4.73 1.794 0 3.25 1.62 3.25 4.73z",
                fill: "#633001"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                    id: "paint0_linear_10493",
                    x1: 48,
                    y1: 0,
                    x2: 48,
                    y2: 96,
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                            stopColor: "#53DEE9"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                            offset: 1,
                            stopColor: "#1FC7D4"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 48333:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18222);



const Logo = ({ isDark , ...props })=>{
    const textColor = isDark ? "#FFFFFF" : "#000000";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Svg__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        viewBox: "0 0 1281 199",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M247.013 153.096c-2.979 0-5.085-.617-6.318-1.849-1.13-1.233-1.695-3.185-1.695-5.856v-89.22c0-2.672.616-4.624 1.849-5.856 1.233-1.336 3.287-2.004 6.164-2.004h37.753c14.382 0 24.963 3.031 31.744 9.092 6.78 6.061 10.17 15.101 10.17 27.12 0 11.917-3.39 20.906-10.17 26.967-6.678 5.959-17.259 8.938-31.744 8.938h-14.639v24.963c0 2.671-.616 4.623-1.849 5.856-1.233 1.232-3.339 1.849-6.318 1.849h-14.947zm35.288-55.012c4.212 0 7.448-1.13 9.708-3.39 2.362-2.26 3.544-5.65 3.544-10.17 0-4.623-1.182-8.065-3.544-10.325-2.26-2.26-5.496-3.39-9.708-3.39h-12.174v27.275h12.174zM363.071 155.407c-9.656 0-17.412-3.082-23.268-9.245-5.753-6.267-8.629-15.05-8.629-26.351 0-8.629 1.952-16.18 5.855-22.652 4.007-6.472 9.606-11.454 16.797-14.947 7.294-3.595 15.666-5.393 25.117-5.393 7.808 0 14.691.873 20.649 2.62 6.061 1.643 11.608 4.057 16.642 7.242v61.638c0 1.952-.359 3.236-1.079 3.852-.719.617-2.157.925-4.314.925h-15.718c-1.13 0-2.003-.154-2.619-.463-.617-.41-1.13-1.027-1.541-1.849l-2.004-4.622c-2.979 3.184-6.574 5.496-10.786 6.934-4.109 1.541-9.143 2.311-15.102 2.311zm11.558-20.957c4.006 0 7.139-.976 9.399-2.927 2.26-1.952 3.39-4.726 3.39-8.322V99.163c-1.951-.925-4.417-1.387-7.396-1.387-5.445 0-9.811 1.9-13.098 5.701-3.185 3.801-4.777 9.143-4.777 16.026 0 9.965 4.16 14.947 12.482 14.947zM437.679 153.096c-2.98 0-5.086-.617-6.318-1.849-1.233-1.233-1.849-3.185-1.849-5.856V83.907c0-1.849.308-3.082.924-3.698.719-.72 2.157-1.079 4.315-1.079h15.872c1.232 0 2.157.206 2.773.617.719.308 1.13.924 1.233 1.849l.77 4.623c2.877-2.877 6.627-5.137 11.249-6.78 4.726-1.747 9.965-2.62 15.718-2.62 8.321 0 15.05 2.363 20.186 7.088 5.137 4.623 7.705 11.506 7.705 20.649v40.835c0 2.671-.616 4.623-1.849 5.856-1.13 1.232-3.185 1.849-6.164 1.849h-14.947c-2.979 0-5.136-.617-6.472-1.849-1.233-1.233-1.849-3.185-1.849-5.856v-38.832c0-3.082-.668-5.29-2.003-6.626-1.336-1.335-3.442-2.003-6.318-2.003-3.082 0-5.548.822-7.397 2.465-1.746 1.644-2.619 3.904-2.619 6.781v38.215c0 2.671-.617 4.623-1.849 5.856-1.13 1.232-3.185 1.849-6.164 1.849h-14.947zM564.725 155.407c-14.382 0-25.477-3.339-33.285-10.016-7.807-6.677-11.711-16.385-11.711-29.124 0-7.807 1.798-14.69 5.393-20.648 3.596-5.959 8.784-10.582 15.564-13.869 6.883-3.287 14.999-4.931 24.347-4.931 7.088 0 13.047.668 17.875 2.003 4.931 1.336 9.297 3.39 13.098 6.164 1.13.72 1.695 1.644 1.695 2.774 0 .822-.411 1.9-1.233 3.236l-6.318 10.94c-.719 1.439-1.592 2.158-2.619 2.158-.617 0-1.593-.411-2.928-1.233-2.774-1.746-5.393-3.03-7.859-3.852-2.363-.822-5.342-1.233-8.937-1.233-5.137 0-9.297 1.644-12.482 4.931-3.082 3.287-4.623 7.807-4.623 13.56 0 5.856 1.592 10.376 4.777 13.56 3.185 3.082 7.551 4.623 13.098 4.623 3.287 0 6.267-.462 8.938-1.387 2.671-.924 5.393-2.208 8.167-3.852 1.438-.822 2.465-1.233 3.082-1.233.924 0 1.746.719 2.465 2.158l6.934 11.865c.514 1.027.771 1.849.771 2.465 0 .925-.617 1.798-1.849 2.62-4.315 2.774-9.041 4.828-14.177 6.164-5.034 1.438-11.095 2.157-18.183 2.157zM638.004 155.407c-9.657 0-17.413-3.082-23.268-9.245-5.753-6.267-8.63-15.05-8.63-26.351 0-8.629 1.952-16.18 5.856-22.652 4.006-6.472 9.605-11.454 16.796-14.947 7.294-3.595 15.667-5.393 25.118-5.393 7.807 0 14.69.873 20.648 2.62 6.061 1.643 11.609 4.057 16.643 7.242v61.638c0 1.952-.36 3.236-1.079 3.852-.719.617-2.157.925-4.315.925h-15.717c-1.13 0-2.004-.154-2.62-.463-.616-.41-1.13-1.027-1.541-1.849l-2.003-4.622c-2.979 3.184-6.575 5.496-10.787 6.934-4.109 1.541-9.143 2.311-15.101 2.311zm11.557-20.957c4.007 0 7.14-.976 9.4-2.927 2.26-1.952 3.39-4.726 3.39-8.322V99.163c-1.952-.925-4.417-1.387-7.397-1.387-5.444 0-9.81 1.9-13.098 5.701-3.184 3.801-4.777 9.143-4.777 16.026 0 9.965 4.161 14.947 12.482 14.947zM787.963 147.24c.719.822 1.079 1.747 1.079 2.774 0 .924-.308 1.695-.925 2.311-.616.514-1.438.771-2.465.771h-23.885c-1.438 0-2.517-.103-3.236-.308-.616-.309-1.284-.874-2.003-1.695l-20.957-28.508v22.806c0 2.671-.616 4.623-1.849 5.856-1.233 1.232-3.339 1.849-6.318 1.849h-14.947c-2.979 0-5.085-.617-6.318-1.849-1.13-1.233-1.695-3.185-1.695-5.856v-89.22c0-2.672.616-4.624 1.849-5.856 1.233-1.336 3.288-2.004 6.164-2.004h14.947c2.979 0 5.085.668 6.318 2.004 1.233 1.232 1.849 3.184 1.849 5.855v51.622l20.341-26.504c.616-.822 1.284-1.387 2.003-1.695.719-.309 1.798-.463 3.236-.463h23.885c1.027 0 1.797.309 2.311.925.616.514.925 1.233.925 2.157 0 1.028-.36 1.952-1.079 2.774l-26.35 30.203 27.12 32.051zM837.998 155.407c-8.629 0-16.334-1.438-23.114-4.314-6.677-2.877-11.968-7.192-15.872-12.944-3.903-5.753-5.855-12.79-5.855-21.111 0-13.047 3.698-23.012 11.095-29.895 7.396-6.883 18.029-10.324 31.897-10.324 13.561 0 23.834 3.39 30.819 10.17 7.089 6.678 10.633 15.975 10.633 27.891 0 5.137-2.26 7.705-6.78 7.705h-48.386c0 4.417 1.643 7.808 4.931 10.17 3.39 2.363 8.475 3.544 15.255 3.544 4.212 0 7.705-.359 10.479-1.078 2.876-.822 5.753-2.003 8.629-3.544 1.233-.514 2.055-.771 2.465-.771.925 0 1.695.617 2.312 1.849l5.239 9.862c.514 1.028.771 1.798.771 2.312 0 .924-.617 1.798-1.85 2.619-4.211 2.774-8.988 4.777-14.33 6.01-5.342 1.233-11.455 1.849-18.338 1.849zm11.866-48.077c0-3.904-1.13-6.935-3.39-9.092-2.26-2.157-5.651-3.236-10.171-3.236s-7.961 1.13-10.324 3.39c-2.363 2.158-3.544 5.137-3.544 8.938h27.429zM930.417 155.407c-8.63 0-16.797-.873-24.501-2.619-7.705-1.85-13.92-4.418-18.646-7.705-1.746-1.13-2.619-2.312-2.619-3.544 0-.822.308-1.695.924-2.62l7.551-12.019c.822-1.233 1.643-1.849 2.465-1.849.514 0 1.387.359 2.62 1.078 3.801 2.158 8.115 3.904 12.944 5.239 4.828 1.336 9.605 2.004 14.331 2.004 4.828 0 8.372-.719 10.632-2.158 2.363-1.438 3.544-3.749 3.544-6.934 0-3.082-1.284-5.496-3.852-7.242-2.466-1.747-7.14-3.955-14.023-6.626-10.375-3.904-18.491-8.27-24.347-13.099-5.753-4.93-8.629-11.608-8.629-20.032 0-10.17 3.647-17.926 10.941-23.268C907.046 48.67 916.753 46 928.876 46c8.423 0 15.615.77 21.573 2.311 6.061 1.439 11.197 3.699 15.409 6.78 1.747 1.336 2.62 2.569 2.62 3.699 0 .719-.308 1.54-.925 2.465l-7.55 12.02c-.925 1.232-1.747 1.849-2.466 1.849-.513 0-1.387-.36-2.619-1.079-5.959-3.904-13.047-5.855-21.265-5.855-4.418 0-7.808.719-10.171 2.157-2.362 1.438-3.544 3.801-3.544 7.088 0 2.26.617 4.11 1.849 5.548 1.233 1.438 2.877 2.722 4.931 3.852 2.158 1.027 5.445 2.363 9.862 4.007l2.928 1.078c7.602 2.98 13.561 5.856 17.875 8.63 4.418 2.67 7.756 6.009 10.016 10.016 2.26 3.903 3.39 8.834 3.39 14.793 0 9.143-3.441 16.437-10.324 21.881-6.78 5.445-16.796 8.167-30.048 8.167zM1003.53 153.096c-1.54 0-2.72-.257-3.544-.771-.822-.513-1.439-1.541-1.85-3.082l-19.878-66.569c-.205-.616-.308-1.078-.308-1.386 0-1.438 1.027-2.158 3.082-2.158h20.338c1.34 0 2.31.257 2.93.77.62.412 1.03 1.13 1.23 2.158l8.32 34.98 10.48-28.2c.52-1.232 1.03-2.054 1.54-2.465.62-.514 1.65-.77 3.09-.77h9.7c1.44 0 2.42.256 2.93.77.62.41 1.18 1.233 1.7 2.465l10.32 28.2 8.48-34.98c.3-1.027.71-1.746 1.23-2.157.51-.514 1.44-.77 2.77-.77h20.5c2.05 0 3.08.719 3.08 2.157 0 .308-.1.77-.31 1.386l-20.03 66.569c-.41 1.541-1.03 2.569-1.85 3.082-.72.514-1.85.771-3.39.771h-15.1c-1.44 0-2.52-.257-3.24-.771-.72-.616-1.33-1.643-1.85-3.082l-10.17-27.891-10.17 27.891c-.41 1.439-1.03 2.466-1.85 3.082-.72.514-1.79.771-3.23.771h-14.95zM1128.73 155.407c-9.66 0-17.41-3.082-23.27-9.245-5.75-6.267-8.63-15.05-8.63-26.351 0-8.629 1.95-16.18 5.86-22.652 4-6.472 9.6-11.454 16.79-14.947 7.3-3.595 15.67-5.393 25.12-5.393 7.81 0 14.69.873 20.65 2.62 6.06 1.643 11.61 4.057 16.64 7.242v61.638c0 1.952-.36 3.236-1.08 3.852-.72.617-2.15.925-4.31.925h-15.72c-1.13 0-2-.154-2.62-.463-.62-.41-1.13-1.027-1.54-1.849l-2-4.622c-2.98 3.184-6.58 5.496-10.79 6.934-4.11 1.541-9.14 2.311-15.1 2.311zm11.56-20.957c4 0 7.14-.976 9.4-2.927 2.26-1.952 3.39-4.726 3.39-8.322V99.163c-1.96-.925-4.42-1.387-7.4-1.387-5.45 0-9.81 1.9-13.1 5.701-3.18 3.801-4.78 9.143-4.78 16.026 0 9.965 4.17 14.947 12.49 14.947zM1203.18 184.223c-2.98 0-5.08-.616-6.32-1.849-1.13-1.233-1.69-3.185-1.69-5.856V88.222c4.62-3.287 10.43-6.01 17.41-8.167 6.99-2.157 14.28-3.236 21.88-3.236 31.03 0 46.54 13.15 46.54 39.448 0 11.917-3.29 21.419-9.86 28.508-6.58 7.088-15.87 10.632-27.89 10.632-3.39 0-6.68-.411-9.87-1.233-3.08-.821-5.65-1.951-7.7-3.39v25.734c0 2.671-.62 4.623-1.85 5.856-1.23 1.233-3.34 1.849-6.32 1.849h-14.33zm33.44-49.619c4.42 0 7.71-1.643 9.86-4.931 2.26-3.39 3.39-7.91 3.39-13.56 0-6.677-1.33-11.352-4-14.023-2.57-2.773-6.58-4.16-12.02-4.16-3.5 0-6.27.462-8.32 1.387v24.501c0 3.493.97 6.164 2.92 8.013 1.96 1.849 4.68 2.773 8.17 2.773z",
                fill: textColor
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M97.556 198.607c-29.192-.022-52.708-7.027-69.138-19.609-16.627-12.733-25.448-30.803-25.448-51.25 0-19.701 8.801-33.907 18.76-43.51 7.805-7.525 16.417-12.344 22.414-15.117-1.356-4.162-3.048-9.61-4.562-15.238-2.025-7.53-4.012-16.366-4.012-22.84 0-7.663 1.67-15.36 6.175-21.34C46.505 3.385 53.671 0 62.291 0c6.737 0 12.457 2.499 16.934 6.81 4.28 4.12 7.13 9.593 9.097 15.298 3.456 10.024 4.802 22.618 5.179 35.187h8.257c.378-12.569 1.723-25.163 5.18-35.187 1.967-5.705 4.815-11.177 9.096-15.298C120.512 2.5 126.231 0 132.968 0c8.621 0 15.786 3.385 20.546 9.703 4.505 5.98 6.176 13.677 6.176 21.34 0 6.474-1.988 15.31-4.013 22.84-1.514 5.628-3.206 11.076-4.562 15.238 5.997 2.773 14.61 7.592 22.414 15.118 9.959 9.602 18.76 23.808 18.76 43.509 0 20.447-8.82 38.517-25.448 51.25-16.43 12.582-39.946 19.587-69.138 19.609h-.147z",
                fill: "#633001"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M62.29 7.288c-12.625 0-18.437 9.516-18.437 22.675 0 10.46 6.753 31.408 9.523 39.563.624 1.835-.356 3.844-2.142 4.555-10.119 4.031-39.981 18.789-39.981 52.588 0 35.603 30.347 62.448 86.31 62.491l.066-.001.067.001c55.962-.043 86.309-26.888 86.309-62.491 0-33.799-29.862-48.557-39.981-52.588-1.786-.71-2.765-2.72-2.142-4.555 2.771-8.154 9.524-29.103 9.524-39.563 0-13.16-5.812-22.675-18.438-22.675-18.174 0-22.705 26.007-23.028 53.92-.021 1.863-1.513 3.375-3.357 3.375H88.676c-1.845 0-3.336-1.512-3.358-3.375-.323-27.913-4.853-53.92-23.028-53.92z",
                fill: "#D1884F"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M97.696 177.755c-41.118 0-86.372-22.235-86.443-51.018v.134c0 35.632 30.395 62.491 86.443 62.491s86.443-26.859 86.443-62.491v-.134c-.071 28.783-45.325 51.018-86.443 51.018z",
                fill: "#FEDC90"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "eye",
                d: "M74.85 117.896c0 9.718-4.546 14.779-10.154 14.779s-10.154-5.061-10.154-14.779 4.546-14.779 10.154-14.779 10.154 5.061 10.154 14.779zM140.851 117.896c0 9.718-4.546 14.779-10.154 14.779s-10.154-5.061-10.154-14.779 4.546-14.779 10.154-14.779 10.154 5.061 10.154 14.779z",
                fill: "#633001"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(Logo, (prev, next)=>prev.isDark === next.isDark));


/***/ }),

/***/ 41532:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18222);



const Icon = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Svg__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        viewBox: "0 0 24 24",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M16.3 8.09014C15.91 8.48014 15.91 9.10014 16.3 9.49014L18.2 11.3901H9C8.45 11.3901 8 11.8401 8 12.3901C8 12.9401 8.45 13.3901 9 13.3901H18.2L16.3 15.2901C15.91 15.6801 15.91 16.3001 16.3 16.6901C16.69 17.0801 17.31 17.0801 17.7 16.6901L21.29 13.1001C21.68 12.7101 21.68 12.0801 21.29 11.6901L17.7 8.09014C17.31 7.70014 16.69 7.70014 16.3 8.09014ZM4 19.3901H11C11.55 19.3901 12 19.8401 12 20.3901C12 20.9401 11.55 21.3901 11 21.3901H4C2.9 21.3901 2 20.4901 2 19.3901V5.39014C2 4.29014 2.9 3.39014 4 3.39014H11C11.55 3.39014 12 3.84014 12 4.39014C12 4.94014 11.55 5.39014 11 5.39014H4V19.3901Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 70973:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18222);



const Icon = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Svg__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        viewBox: "0 0 24 24",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M17.65 6.35C16.02 4.72 13.71 3.78 11.17 4.04C7.50002 4.41 4.48002 7.39 4.07002 11.06C3.52002 15.91 7.27002 20 12 20C15.19 20 17.93 18.13 19.21 15.44C19.53 14.77 19.05 14 18.31 14C17.94 14 17.59 14.2 17.43 14.53C16.3 16.96 13.59 18.5 10.63 17.84C8.41002 17.35 6.62002 15.54 6.15002 13.32C5.31002 9.44 8.26002 6 12 6C13.66 6 15.14 6.69 16.22 7.78L14.71 9.29C14.08 9.92 14.52 11 15.41 11H19C19.55 11 20 10.55 20 10V6.41C20 5.52 18.92 5.07 18.29 5.7L17.65 6.35Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 66132:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18222);



const Icon = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Svg__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        viewBox: "0 0 20 20",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M10 0C4.478 0 0 4.478 0 9.99 0 15.511 4.478 20 10 20s10-4.488 10-10.01C20 4.477 15.522 0 10 0zm4.925 6.28c-.064.927-1.78 7.856-1.78 7.856s-.107.406-.48.416a.644.644 0 01-.49-.192c-.395-.33-1.29-.97-2.132-1.556a.953.953 0 01-.107.096c-.192.17-.48.416-.789.714a10.7 10.7 0 00-.373.352l-.01.01a2.214 2.214 0 01-.193.171c-.415.341-.458.053-.458-.096l.224-2.441v-.021l.01-.022c.011-.032.033-.043.033-.043s4.36-3.88 4.477-4.296c.01-.021-.021-.042-.074-.021-.288.096-5.31 3.273-5.864 3.625-.032.02-.128.01-.128.01l-2.441-.8s-.288-.117-.192-.383c.021-.053.053-.107.17-.181.544-.384 10-3.785 10-3.785s.267-.085.427-.032c.074.032.117.064.16.17.01.043.021.128.021.224 0 .054-.01.118-.01.224z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 54463:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18222);



const Icon = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Svg__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        viewBox: "0 0 18 15",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            fill: "currentColor",
            d: "M5.659 15c6.79 0 10.507-5.766 10.507-10.763 0-.16 0-.32-.01-.49A7.578 7.578 0 0018 1.79c-.663.3-1.376.5-2.127.6a3.824 3.824 0 001.63-2.1c-.713.44-1.503.75-2.352.92A3.6 3.6 0 0012.46 0C10.419 0 8.76 1.699 8.76 3.787c0 .3.039.58.098.86-3.064-.15-5.786-1.669-7.61-3.957A3.858 3.858 0 00.75 2.598c0 1.31.654 2.469 1.64 3.148a3.638 3.638 0 01-1.669-.47v.05c0 1.83 1.278 3.368 2.956 3.708-.312.09-.634.13-.976.13-.234 0-.468-.02-.692-.07.468 1.509 1.834 2.598 3.453 2.628a7.284 7.284 0 01-4.585 1.62c-.293 0-.595-.01-.878-.05A10.206 10.206 0 005.659 15z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 74774:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18222);



const Icon = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Svg__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        viewBox: "0 0 24 24",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M17 4C18.5 4 19 4.5 19 6L19 8C20.1046 8 21 8.89543 21 10L21 17C21 19 20 20 17.999 20H6C4 20 3 19 3 17L3 7C3 5.5 4.5 4 6 4L17 4ZM5 7C5 6.44772 5.44772 6 6 6L19 6L19 8L6 8C5.44772 8 5 7.55229 5 7ZM17 16C18 16 19.001 15 19 14C18.999 13 18 12 17 12C16 12 15 13 15 14C15 15 16 16 17 16Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 78857:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ Toast)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84466);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29047);
/* harmony import */ var _Alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(62975);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90663);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Alert__WEBPACK_IMPORTED_MODULE_6__]);
_Alert__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const alertTypeMap = {
    [_types__WEBPACK_IMPORTED_MODULE_4__/* .types.INFO */ .V.INFO]: _Alert__WEBPACK_IMPORTED_MODULE_5__/* .variants.INFO */ .o.INFO,
    [_types__WEBPACK_IMPORTED_MODULE_4__/* .types.SUCCESS */ .V.SUCCESS]: _Alert__WEBPACK_IMPORTED_MODULE_5__/* .variants.SUCCESS */ .o.SUCCESS,
    [_types__WEBPACK_IMPORTED_MODULE_4__/* .types.DANGER */ .V.DANGER]: _Alert__WEBPACK_IMPORTED_MODULE_5__/* .variants.DANGER */ .o.DANGER,
    [_types__WEBPACK_IMPORTED_MODULE_4__/* .types.WARNING */ .V.WARNING]: _Alert__WEBPACK_IMPORTED_MODULE_5__/* .variants.WARNING */ .o.WARNING
};
const StyledToast = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-eff9dc52-0"
}).withConfig({
    componentId: "sc-9012e429-0"
})`
  right: 16px;
  position: fixed;
  max-width: calc(100% - 32px);
  transition: all 250ms ease-in;
  width: 100%;

  ${({ theme  })=>theme.mediaQueries.sm} {
    max-width: 400px;
  }
`;
const Toast = ({ toast , onRemove , style , ttl , ...props })=>{
    const timer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const { id , title , description , type  } = toast;
    const handleRemove = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>onRemove(id), [
        id,
        onRemove
    ]);
    const handleMouseEnter = ()=>{
        clearTimeout(timer.current);
    };
    const handleMouseLeave = ()=>{
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(()=>{
            handleRemove();
        }, ttl);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(()=>{
            handleRemove();
        }, ttl);
        return ()=>{
            clearTimeout(timer.current);
        };
    }, [
        timer,
        ttl,
        handleRemove
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_2__.CSSTransition, {
        timeout: 250,
        style: style,
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledToast, {
            onMouseEnter: handleMouseEnter,
            onMouseLeave: handleMouseLeave,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Alert__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                title: title,
                variant: alertTypeMap[type],
                onClick: handleRemove,
                children: description
            })
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 28582:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ ToastContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84466);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78857);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Toast__WEBPACK_IMPORTED_MODULE_3__]);
_Toast__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const ZINDEX = 1000;
const TOP_POSITION = 80; // Initial position from the top
const StyledToastContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-2711bd7c-0"
}).withConfig({
    componentId: "sc-20f30f6f-0"
})`
  .enter,
  .appear {
    opacity: 0.01;
  }

  .enter.enter-active,
  .appear.appear-active {
    opacity: 1;
    transition: opacity 250ms ease-in;
  }

  .exit {
    opacity: 1;
  }

  .exit.exit-active {
    opacity: 0.01;
    transition: opacity 250ms ease-out;
  }
`;
const ToastContainer = ({ toasts , onRemove , ttl =6000 , stackSpacing =24 ,  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledToastContainer, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_1__.TransitionGroup, {
            children: toasts.map((toast, index)=>{
                const zIndex = (ZINDEX - index).toString();
                const top = TOP_POSITION + index * stackSpacing;
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Toast__WEBPACK_IMPORTED_MODULE_3__/* .Toast */ .F, {
                    toast: toast,
                    onRemove: onRemove,
                    ttl: ttl,
                    style: {
                        top: `${top}px`,
                        zIndex
                    }
                }, toast.id);
            })
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 74086:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28582);
/* harmony import */ var _useToast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4690);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useToast__WEBPACK_IMPORTED_MODULE_2__, _components_Toast__WEBPACK_IMPORTED_MODULE_3__]);
([_useToast__WEBPACK_IMPORTED_MODULE_2__, _components_Toast__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const ToastListener = ()=>{
    const { toasts , remove  } = (0,_useToast__WEBPACK_IMPORTED_MODULE_2__/* .useToast */ .p)();
    const handleRemove = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((id)=>remove(id), [
        remove
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Toast__WEBPACK_IMPORTED_MODULE_3__/* .ToastContainer */ .I, {
        toasts: toasts,
        onRemove: handleRemove
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToastListener);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 27627:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useOnClickOutside = (htmlNode, handler)=>{
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (htmlNode) {
            const listener = (event)=>{
                // Do nothing if clicking ref's element or descendent elements
                if (htmlNode.contains(event.target)) {
                    return;
                }
                handler(event);
            };
            document.addEventListener("mousedown", listener);
            document.addEventListener("touchstart", listener);
            return ()=>{
                document.removeEventListener("mousedown", listener);
                document.removeEventListener("touchstart", listener);
            };
        }
        return undefined;
    }, // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [
        htmlNode,
        handler
    ]);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useOnClickOutside);


/***/ }),

/***/ 18121:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1381);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_BottomNav__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(14291);
/* harmony import */ var _components_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85118);
/* harmony import */ var _components_Box_Flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(10993);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(54015);
/* harmony import */ var _components_MenuItems_MenuItems__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(50115);
/* harmony import */ var _components_SubMenuItems__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(92087);
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85551);
/* harmony import */ var _components_CakePrice_CakePrice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(22478);
/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(84086);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75804);
/* harmony import */ var _components_LangSelector_LangSelector__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(44765);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(83468);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Box__WEBPACK_IMPORTED_MODULE_5__, _components_Box_Flex__WEBPACK_IMPORTED_MODULE_8__, _components_Logo__WEBPACK_IMPORTED_MODULE_9__, _components_MenuItems_MenuItems__WEBPACK_IMPORTED_MODULE_10__, _components_CakePrice_CakePrice__WEBPACK_IMPORTED_MODULE_11__, _components_LangSelector_LangSelector__WEBPACK_IMPORTED_MODULE_12__, _components_SubMenuItems__WEBPACK_IMPORTED_MODULE_13__, _components_Footer__WEBPACK_IMPORTED_MODULE_14__, _components_BottomNav__WEBPACK_IMPORTED_MODULE_15__]);
([_components_Box__WEBPACK_IMPORTED_MODULE_5__, _components_Box_Flex__WEBPACK_IMPORTED_MODULE_8__, _components_Logo__WEBPACK_IMPORTED_MODULE_9__, _components_MenuItems_MenuItems__WEBPACK_IMPORTED_MODULE_10__, _components_CakePrice_CakePrice__WEBPACK_IMPORTED_MODULE_11__, _components_LangSelector_LangSelector__WEBPACK_IMPORTED_MODULE_12__, _components_SubMenuItems__WEBPACK_IMPORTED_MODULE_13__, _components_Footer__WEBPACK_IMPORTED_MODULE_14__, _components_BottomNav__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-353f3479-0"
}).withConfig({
    componentId: "sc-39cd8a76-0"
})`
  position: relative;
  width: 100%;
`;
const StyledNav = styled_components__WEBPACK_IMPORTED_MODULE_3___default().nav.withConfig({
    componentId: "sc-353f3479-1"
}).withConfig({
    componentId: "sc-39cd8a76-1"
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${_config__WEBPACK_IMPORTED_MODULE_4__/* .MENU_HEIGHT */ .d0}px;
  background-color: ${({ theme  })=>theme.nav.background};
  border-bottom: 1px solid ${({ theme  })=>theme.colors.cardBorder};
  transform: translate3d(0, 0, 0);

  padding-left: 16px;
  padding-right: 16px;
`;
const FixedContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-353f3479-2"
}).withConfig({
    componentId: "sc-39cd8a76-2"
})`
  position: fixed;
  top: ${({ showMenu , height  })=>showMenu ? 0 : `-${height}px`};
  left: 0;
  transition: top 0.2s;
  height: ${({ height  })=>`${height}px`};
  width: 100%;
  z-index: 20;
`;
const TopBannerContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-353f3479-3"
}).withConfig({
    componentId: "sc-39cd8a76-3"
})`
  height: ${({ height  })=>`${height}px`};
  min-height: ${({ height  })=>`${height}px`};
  max-height: ${({ height  })=>`${height}px`};
  width: 100%;
`;
const BodyWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_components_Box__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z).withConfig({
    componentId: "sc-353f3479-4"
}).withConfig({
    componentId: "sc-39cd8a76-4"
})`
  position: relative;
  display: flex;
`;
const Inner = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-353f3479-5"
}).withConfig({
    componentId: "sc-39cd8a76-5"
})`
  flex-grow: 1;
  transition: margin-top 0.2s, margin-left 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate3d(0, 0, 0);
  max-width: 100%;
`;
const Menu = ({ linkComponent ="a" , banner , rightSide , isDark , toggleTheme , currentLang , setLang , cakePriceUsd , links , subLinks , footerLinks , activeItem , activeSubItem , langs , buyCakeLabel , children ,  })=>{
    const { isMobile , isMd  } = (0,_contexts__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const { 0: showMenu , 1: setShowMenu  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const refPrevOffset = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)( true ? 0 : 0);
    const topBannerHeight = isMobile ? _config__WEBPACK_IMPORTED_MODULE_4__/* .TOP_BANNER_HEIGHT_MOBILE */ .Mf : _config__WEBPACK_IMPORTED_MODULE_4__/* .TOP_BANNER_HEIGHT */ .pZ;
    const totalTopMenuHeight = banner ? _config__WEBPACK_IMPORTED_MODULE_4__/* .MENU_HEIGHT */ .d0 + topBannerHeight : _config__WEBPACK_IMPORTED_MODULE_4__/* .MENU_HEIGHT */ .d0;
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const handleScroll = ()=>{
            const currentOffset = window.pageYOffset;
            const isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
            const isTopOfPage = currentOffset === 0;
            // Always show the menu when user reach the top
            if (isTopOfPage) {
                setShowMenu(true);
            } else if (!isBottomOfPage) {
                if (currentOffset < refPrevOffset.current || currentOffset <= totalTopMenuHeight) {
                    // Has scroll up
                    setShowMenu(true);
                } else {
                    // Has scroll down
                    setShowMenu(false);
                }
            }
            refPrevOffset.current = currentOffset;
        };
        const throttledHandleScroll = lodash_throttle__WEBPACK_IMPORTED_MODULE_1___default()(handleScroll, 200);
        window.addEventListener("scroll", throttledHandleScroll);
        return ()=>{
            window.removeEventListener("scroll", throttledHandleScroll);
        };
    }, [
        totalTopMenuHeight
    ]);
    // Find the home link if provided
    const homeLink = links.find((link)=>link.label === "Home");
    const subLinksWithoutMobile = subLinks?.filter((subLink)=>!subLink.isMobileOnly);
    const subLinksMobileOnly = subLinks?.filter((subLink)=>subLink.isMobileOnly);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_context__WEBPACK_IMPORTED_MODULE_7__/* .MenuContext.Provider */ .p.Provider, {
        value: {
            linkComponent
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FixedContainer, {
                    showMenu: showMenu,
                    height: totalTopMenuHeight,
                    children: [
                        banner && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TopBannerContainer, {
                            height: topBannerHeight,
                            children: banner
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledNav, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Box_Flex__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Logo__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                            isDark: isDark,
                                            href: homeLink?.href ?? "/"
                                        }),
                                        !isMobile && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MenuItems_MenuItems__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                            items: links,
                                            activeItem: activeItem,
                                            activeSubItem: activeSubItem,
                                            ml: "24px"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Box_Flex__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                    alignItems: "center",
                                    height: "100%",
                                    children: [
                                        !isMobile && !isMd && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Box__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            mr: "12px",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CakePrice_CakePrice__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                                showSkeleton: false,
                                                cakePriceUsd: cakePriceUsd
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Box__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            mt: "4px",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LangSelector_LangSelector__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                currentLang: currentLang,
                                                langs: langs,
                                                setLang: setLang,
                                                buttonScale: "xs",
                                                color: "textSubtle",
                                                hideLanguage: true
                                            })
                                        }),
                                        rightSide
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                subLinks && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Box_Flex__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    justifyContent: "space-around",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SubMenuItems__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                            items: subLinksWithoutMobile,
                            mt: `${totalTopMenuHeight + 1}px`,
                            activeItem: activeSubItem
                        }),
                        subLinksMobileOnly?.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SubMenuItems__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                            items: subLinksMobileOnly,
                            mt: `${totalTopMenuHeight + 1}px`,
                            activeItem: activeSubItem,
                            isMobileOnly: true
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BodyWrapper, {
                    mt: !subLinks ? `${totalTopMenuHeight + 1}px` : "0",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Inner, {
                        isPushed: false,
                        showMenu: showMenu,
                        children: [
                            children,
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                items: footerLinks,
                                isDark: isDark,
                                toggleTheme: toggleTheme,
                                langs: langs,
                                setLang: setLang,
                                currentLang: currentLang,
                                cakePriceUsd: cakePriceUsd,
                                buyCakeLabel: buyCakeLabel,
                                mb: [
                                    `${_config__WEBPACK_IMPORTED_MODULE_4__/* .MOBILE_MENU_HEIGHT */ .GR}px`,
                                    null,
                                    "0px"
                                ]
                            })
                        ]
                    })
                }),
                isMobile && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_BottomNav__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                    items: links,
                    activeItem: activeItem,
                    activeSubItem: activeSubItem
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 84086:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Box_Flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10993);
/* harmony import */ var _components_Svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38326);
/* harmony import */ var _components_Svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48333);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83468);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Box_Flex__WEBPACK_IMPORTED_MODULE_6__]);
_components_Box_Flex__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const blink = styled_components__WEBPACK_IMPORTED_MODULE_2__.keyframes`
  0%,  100% { transform: scaleY(1); }
  50% { transform:  scaleY(0.1); }
`;
const StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_2___default()("a").withConfig({
    componentId: "sc-3bc6b17f-0"
}).withConfig({
    componentId: "sc-bbf004b3-0"
})`
  display: flex;
  align-items: center;
  .mobile-icon {
    width: 32px;
    ${({ theme  })=>theme.mediaQueries.lg} {
      display: none;
    }
  }
  .desktop-icon {
    width: 160px;
    display: none;
    ${({ theme  })=>theme.mediaQueries.lg} {
      display: block;
    }
  }
  .eye {
    animation-delay: 20ms;
  }
  &:hover {
    .eye {
      transform-origin: center 60%;
      animation-name: ${blink};
      animation-duration: 350ms;
      animation-iteration-count: 1;
    }
  }
`;
const Logo = ({ isDark , href  })=>{
    const { linkComponent  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context__WEBPACK_IMPORTED_MODULE_3__/* .MenuContext */ .p);
    const isAbsoluteUrl = href.startsWith("http");
    const innerLogo = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Svg__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                className: "mobile-icon"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Svg__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                className: "desktop-icon",
                isDark: isDark
            })
        ]
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Box_Flex__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        children: isAbsoluteUrl ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledLink, {
            as: "a",
            href: href,
            "aria-label": "Pancake home page",
            children: innerLogo
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledLink, {
            href: href,
            as: linkComponent,
            "aria-label": "Pancake home page",
            children: innerLogo
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(Logo, (prev, next)=>prev.isDark === next.isDark));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 17219:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports NoProfileMenuIcon, PendingMenuIcon, WarningMenuIcon, DangerMenuIcon */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(89736);
/* harmony import */ var _components_Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90599);
/* harmony import */ var _components_Svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74774);
/* harmony import */ var _components_Svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70973);
/* harmony import */ var _components_Svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22188);






const MenuIconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-e5a41a22-0"
}).withConfig({
    componentId: "sc-31050b19-0"
})`
  align-items: center;
  background-color: ${({ theme  })=>theme.colors.background};
  border-color: ${({ theme , borderColor  })=>theme.colors[borderColor]};
  border-radius: 50%;
  border-style: solid;
  border-width: 2px;
  display: flex;
  height: 32px;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  width: 32px;
  z-index: 102;
`;
const ProfileIcon = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_components_Image__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z).withConfig({
    componentId: "sc-e5a41a22-1"
}).withConfig({
    componentId: "sc-31050b19-1"
})`
  left: 0;
  position: absolute;
  top: 0;
  z-index: 102;

  & > img {
    border-radius: 50%;
  }
`;
const NoProfileMenuIcon = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MenuIconWrapper, {
        borderColor: "primary",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Svg__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            color: "primary",
            width: "24px"
        })
    });
const PendingMenuIcon = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MenuIconWrapper, {
        borderColor: "secondary",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Svg__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            color: "secondary",
            width: "24px",
            spin: true
        })
    });
const WarningMenuIcon = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MenuIconWrapper, {
        borderColor: "warning",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Svg__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            color: "warning",
            width: "24px"
        })
    });
const DangerMenuIcon = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MenuIconWrapper, {
        borderColor: "failure",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Svg__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            color: "failure",
            width: "24px"
        })
    });
const MenuIcon = ({ avatarSrc , variant ,  })=>{
    if (variant === _types__WEBPACK_IMPORTED_MODULE_7__/* .variants.DANGER */ .o.DANGER) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DangerMenuIcon, {});
    }
    if (variant === _types__WEBPACK_IMPORTED_MODULE_7__/* .variants.WARNING */ .o.WARNING) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(WarningMenuIcon, {});
    }
    if (variant === _types__WEBPACK_IMPORTED_MODULE_7__/* .variants.PENDING */ .o.PENDING) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PendingMenuIcon, {});
    }
    if (!avatarSrc) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NoProfileMenuIcon, {});
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ProfileIcon, {
        src: avatarSrc,
        height: 32,
        width: 32
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuIcon);


/***/ }),

/***/ 42736:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports StyledUserMenu, LabelText */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_popper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42932);
/* harmony import */ var react_popper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_popper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10993);
/* harmony import */ var _components_Box__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(85118);
/* harmony import */ var _components_Svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(85838);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89736);
/* harmony import */ var _MenuIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17219);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2302);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Box__WEBPACK_IMPORTED_MODULE_4__, _components_Box__WEBPACK_IMPORTED_MODULE_9__]);
([_components_Box__WEBPACK_IMPORTED_MODULE_4__, _components_Box__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const StyledUserMenu = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_components_Box__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z).withConfig({
    componentId: "sc-9ad39da0-0"
}).withConfig({
    componentId: "sc-e838f330-0"
})`
  align-items: center;
  background-color: ${({ theme  })=>theme.colors.tertiary};
  border-radius: 16px;
  box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: inline-flex;
  height: 32px;
  padding-left: 32px;
  padding-right: 8px;
  position: relative;

  &:hover {
    opacity: 0.65;
  }
`;
const LabelText = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-9ad39da0-1"
}).withConfig({
    componentId: "sc-e838f330-1"
})`
  color: ${({ theme  })=>theme.colors.text};
  display: none;
  font-weight: 600;

  ${({ theme  })=>theme.mediaQueries.sm} {
    display: block;
    margin-left: 8px;
    margin-right: 4px;
  }
`;
const Menu = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-9ad39da0-2"
}).withConfig({
    componentId: "sc-e838f330-2"
})`
  background-color: ${({ theme  })=>theme.card.background};
  border: 1px solid ${({ theme  })=>theme.colors.cardBorder};
  border-radius: 16px;
  padding-bottom: 4px;
  padding-top: 4px;
  pointer-events: auto;
  width: 280px;
  visibility: visible;
  z-index: 1001;

  ${({ isOpen  })=>!isOpen && `
    pointer-events: none;
    visibility: hidden;
  `}

  ${_styles__WEBPACK_IMPORTED_MODULE_5__/* .UserMenuItem */ .l}:first-child {
    border-radius: 8px 8px 0 0;
  }

  ${_styles__WEBPACK_IMPORTED_MODULE_5__/* .UserMenuItem */ .l}:last-child {
    border-radius: 0 0 8px 8px;
  }
`;
const UserMenu = ({ account , text , avatarSrc , variant =_types__WEBPACK_IMPORTED_MODULE_6__/* .variants.DEFAULT */ .o.DEFAULT , children , disabled , ...props })=>{
    const { 0: isOpen , 1: setIsOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: targetRef , 1: setTargetRef  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: tooltipRef , 1: setTooltipRef  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const accountEllipsis = account ? `${account.substring(0, 2)}...${account.substring(account.length - 4)}` : null;
    const { styles , attributes  } = (0,react_popper__WEBPACK_IMPORTED_MODULE_2__.usePopper)(targetRef, tooltipRef, {
        strategy: "fixed",
        placement: "bottom-end",
        modifiers: [
            {
                name: "offset",
                options: {
                    offset: [
                        0,
                        0
                    ]
                }
            }
        ]
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const showDropdownMenu = ()=>{
            setIsOpen(true);
        };
        const hideDropdownMenu = (evt)=>{
            const target = evt.target;
            if (target && !tooltipRef?.contains(target)) {
                setIsOpen(false);
                evt.stopPropagation();
            }
        };
        targetRef?.addEventListener("mouseenter", showDropdownMenu);
        targetRef?.addEventListener("mouseleave", hideDropdownMenu);
        return ()=>{
            targetRef?.removeEventListener("mouseenter", showDropdownMenu);
            targetRef?.removeEventListener("mouseleave", hideDropdownMenu);
        };
    }, [
        targetRef,
        tooltipRef,
        setIsOpen
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Box__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        alignItems: "center",
        height: "100%",
        ref: setTargetRef,
        ...props,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledUserMenu, {
                onTouchStart: ()=>{
                    setIsOpen((s)=>!s);
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MenuIcon__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP, {
                        avatarSrc: avatarSrc,
                        variant: variant
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LabelText, {
                        title: typeof text === "string" ? text || account : account,
                        children: text || accountEllipsis
                    }),
                    !disabled && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Svg__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        color: "text",
                        width: "24px"
                    })
                ]
            }),
            !disabled && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Menu, {
                style: styles.popper,
                ref: setTooltipRef,
                ...attributes.popper,
                isOpen: isOpen,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Box__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    onClick: ()=>setIsOpen(false),
                    children: children?.({
                        isOpen
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserMenu);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2302:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ UserMenuItem),
/* harmony export */   "v": () => (/* binding */ UserMenuDivider)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const UserMenuDivider = styled_components__WEBPACK_IMPORTED_MODULE_0___default().hr.withConfig({
    componentId: "sc-41c17261-0"
}).withConfig({
    componentId: "sc-203dbc6e-0"
})`
  border-color: ${({ theme  })=>theme.colors.cardBorder};
  border-style: solid;
  border-width: 1px 0 0;
  margin: 4px 0;
`;
const UserMenuItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
    componentId: "sc-41c17261-1"
}).withConfig({
    componentId: "sc-203dbc6e-1"
})`
  align-items: center;
  border: 0;
  background: transparent;
  color: ${({ theme , disabled  })=>theme.colors[disabled ? "textDisabled" : "textSubtle"]};
  cursor: pointer;
  display: flex;
  font-size: 16px;
  height: 48px;
  justify-content: space-between;
  outline: 0;
  padding-left: 16px;
  padding-right: 16px;
  width: 100%;

  &:is(button) {
    cursor: ${({ disabled  })=>disabled ? "not-allowed" : "pointer"};
  }

  &:hover:not(:disabled) {
    background-color: ${({ theme  })=>theme.colors.tertiary};
  }

  &:active:not(:disabled) {
    opacity: 0.85;
    transform: translateY(1px);
  }
`;


/***/ }),

/***/ 89736:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ variants)
/* harmony export */ });
const variants = {
    DEFAULT: "default",
    WARNING: "warning",
    DANGER: "danger",
    PENDING: "pending"
};


/***/ }),

/***/ 83468:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ MenuContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const MenuContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
    linkComponent: "a"
});


/***/ }),

/***/ 77944:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(24155);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5422);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(78007);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(36690);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15941);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52775);
/* harmony import */ var hooks_useSWRContract__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22408);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71933);
/* harmony import */ var utils_wagmi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(18480);
/* harmony import */ var contexts_HistoryContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16860);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_2__, hooks_useSWRContract__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__]);
([swr__WEBPACK_IMPORTED_MODULE_2__, hooks_useSWRContract__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const StyledUIKitProvider = ({ children , ...props })=>{
    const { resolvedTheme  } = (0,next_themes__WEBPACK_IMPORTED_MODULE_5__.useTheme)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* .UIKitProvider */ .J, {
        theme: resolvedTheme === "dark" ? _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z : _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,
        ...props,
        children: children
    });
};
const Providers = ({ children , store ,  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_6__/* .WagmiProvider */ .FL, {
        client: utils_wagmi__WEBPACK_IMPORTED_MODULE_7__/* .client */ .Lp,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {
            store: store,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_themes__WEBPACK_IMPORTED_MODULE_5__.ThemeProvider, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledUIKitProvider, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__/* .LanguageProvider */ .iL, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swr__WEBPACK_IMPORTED_MODULE_2__.SWRConfig, {
                            value: {
                                use: [
                                    hooks_useSWRContract__WEBPACK_IMPORTED_MODULE_4__/* .fetchStatusMiddleware */ .qf
                                ]
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(contexts_HistoryContext__WEBPACK_IMPORTED_MODULE_8__/* .HistoryManagerProvider */ .E, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                    children: children
                                })
                            })
                        })
                    })
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Providers);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 16817:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export ErrorBoundary */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


class ErrorBoundary extends (/* unused pure expression or super */ null && (Component)) {
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        };
    }
    static getDerivedStateFromError(_error) {
        // Update state so the next render will show the fallback UI.
        return {
            hasError: true
        };
    }
    componentDidCatch(error, errorInfo) {
        console.error(error, errorInfo);
    }
    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return this.props.fallback || /*#__PURE__*/ _jsx("h1", {
                children: "Something went wrong."
            });
        }
        return this.props.children;
    }
}


/***/ }),

/***/ 29018:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ SentryErrorBoundary)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sentry_nextjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58097);
/* harmony import */ var _sentry_nextjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sentry_nextjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Layout_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75915);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52775);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10993);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(38326);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(77067);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6657);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(18462);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(61629);
/* harmony import */ var _pancakeswap_utils_copyText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(34939);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Layout_Page__WEBPACK_IMPORTED_MODULE_2__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__]);
([components_Layout_Page__WEBPACK_IMPORTED_MODULE_2__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function SentryErrorBoundary({ children  }) {
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .$G)();
    const handleOnClick = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(()=>window.location.reload(), []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_sentry_nextjs__WEBPACK_IMPORTED_MODULE_1__.ErrorBoundary, {
        beforeCapture: (scope)=>{
            scope.setLevel("fatal");
        },
        fallback: ({ eventId  })=>{
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Layout_Page__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            width: "64px",
                            mb: "8px"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            mb: "16px",
                            children: t("Oops, something wrong.")
                        }),
                        eventId && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            flexDirection: "column",
                            style: {
                                textAlign: "center"
                            },
                            mb: "8px",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                    children: t("Error Tracking Id")
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    alignItems: "center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                            children: eventId
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                            variant: "text",
                                            onClick: ()=>(0,_pancakeswap_utils_copyText__WEBPACK_IMPORTED_MODULE_9__/* .copyText */ .z)(eventId),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                color: "primary",
                                                width: "24px"
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                            onClick: handleOnClick,
                            children: t("Click here to reset!")
                        })
                    ]
                })
            });
        },
        children: children
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 65362:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* reexport safe */ _SentryErrorBoundary__WEBPACK_IMPORTED_MODULE_0__.A)
/* harmony export */ });
/* harmony import */ var _SentryErrorBoundary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29018);
/* harmony import */ var _ErrorBoundary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16817);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_SentryErrorBoundary__WEBPACK_IMPORTED_MODULE_0__]);
_SentryErrorBoundary__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 86669:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(97357);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(10993);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(85118);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(77067);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(61629);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(99762);
/* harmony import */ var canvas_confetti__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45245);
/* harmony import */ var canvas_confetti__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(canvas_confetti__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52775);
/* harmony import */ var lodash_delay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64854);
/* harmony import */ var lodash_delay__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_delay__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_Loader_Dots__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(32519);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8906);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__]);
([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const AnniversaryImage = styled_components__WEBPACK_IMPORTED_MODULE_5___default().img.withConfig({
    componentId: "sc-630321cb-0"
})`
  border-radius: 50%;
  height: 128px;
  margin-right: 8px;
  width: 128px;
`;
const showConfetti = ()=>{
    canvas_confetti__WEBPACK_IMPORTED_MODULE_1___default()({
        particleCount: 200,
        startVelocity: 30,
        gravity: 0.5,
        spread: 350,
        origin: {
            x: 0.5,
            y: 0.3
        }
    });
};
const AnniversaryAchievementModal = ({ onDismiss , onClick  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    const { address  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_8__.useAccount)();
    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const handleClick = async ()=>{
        setIsLoading(true);
        try {
            await onClick();
        } finally{
            onDismiss();
            if (address) {
                router.push(`/profile/${address}/achievements`);
            }
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        lodash_delay__WEBPACK_IMPORTED_MODULE_3___default()(showConfetti, 100);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        title: t("Congratulations!"),
        onDismiss: onDismiss,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "450px",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AnniversaryImage, {
                        src: "/images/achievements/2-year.svg"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                    textAlign: "center",
                    bold: true,
                    fontSize: "24px",
                    children: "2 Years"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                    textAlign: "center",
                    children: [
                        "+100 ",
                        t("Points")
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                    textAlign: "center",
                    bold: true,
                    color: "secondary",
                    mb: "24px",
                    children: t("You won points and achievements for taking part in our two years journey. Now let’s celebrate our 2nd Birthday!")
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                    disabled: isLoading,
                    onClick: handleClick,
                    endIcon: isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                        spin: true,
                        color: "currentColor"
                    }) : undefined,
                    children: isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Loader_Dots__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        children: t("Claiming")
                    }) : t("Claim now")
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnniversaryAchievementModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3272:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52775);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4690);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(24141);
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71933);
/* harmony import */ var components_Toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33537);
/* harmony import */ var hooks_useContract__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82688);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _AnniversaryAchievementModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(86669);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__, components_Toast__WEBPACK_IMPORTED_MODULE_3__, hooks_useContract__WEBPACK_IMPORTED_MODULE_4__, _AnniversaryAchievementModal__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__]);
([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__, components_Toast__WEBPACK_IMPORTED_MODULE_3__, hooks_useContract__WEBPACK_IMPORTED_MODULE_4__, _AnniversaryAchievementModal__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









// change it to true if we have events to check claim status
const enable = true;
const GlobalCheckClaimStatus = (props)=>{
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3React */ .Ge)();
    if (!enable) {
        return null;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GlobalCheckClaim, {
        ...props
    }, account);
};
/**
 * This is represented as a component rather than a hook because we need to keep it
 * inside the Router.
 *
 * TODO: Put global checks in redux or make a generic area to house global checks
 */ const GlobalCheckClaim = ({ excludeLocations  })=>{
    const hasDisplayedModal = (0,react__WEBPACK_IMPORTED_MODULE_6__.useRef)(false);
    const { toastError , toastSuccess  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* .useToast */ .p)();
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const { 0: canClaimAnniversaryPoints , 1: setCanClaimAnniversaryPoints  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
    const { canClaim , claimAnniversaryPoints  } = (0,hooks_useContract__WEBPACK_IMPORTED_MODULE_4__/* .useAnniversaryAchievementContract */ .bb)();
    const [onPresentAnniversaryModal] = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AnniversaryAchievementModal__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        onClick: async ()=>{
            try {
                const tx = await claimAnniversaryPoints();
                toastSuccess(t("Success!"), /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Toast__WEBPACK_IMPORTED_MODULE_3__/* .ToastDescriptionWithTx */ .Y, {
                    txHash: tx.hash
                }));
                await tx.wait();
            } catch (error) {
                const errorDescription = `${error.message} - ${error.data?.message}`;
                toastError(t("Failed to claim"), errorDescription);
            }
        }
    }));
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3React */ .Ge)();
    const { pathname  } = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    // Check claim status
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        const fetchClaimAnniversaryStatus = async ()=>{
            const canClaimAnniversary = await canClaim(account);
            setCanClaimAnniversaryPoints(canClaimAnniversary);
        };
        if (account) {
            fetchClaimAnniversaryStatus();
        }
    }, [
        account,
        canClaim
    ]);
    // // Check if we need to display the modal
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        const matchesSomeLocations = excludeLocations.some((location)=>pathname.includes(location));
        if (canClaimAnniversaryPoints && !matchesSomeLocations && !hasDisplayedModal.current) {
            onPresentAnniversaryModal();
            hasDisplayedModal.current = true;
        }
    }, [
        pathname,
        excludeLocations,
        hasDisplayedModal,
        canClaim,
        canClaimAnniversaryPoints,
        onPresentAnniversaryModal
    ]);
    // Reset the check flag when account changes
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        hasDisplayedModal.current = false;
    }, [
        account,
        hasDisplayedModal
    ]);
    return null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobalCheckClaimStatus);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 32519:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Dots = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
    componentId: "sc-818b03ea-0"
})`
  &::after {
    display: inline-block;
    animation: ellipsis 1.25s infinite;
    content: '.';
    width: 1em;
    text-align: left;
  }
  @keyframes ellipsis {
    0% {
      content: '.';
    }
    33% {
      content: '..';
    }
    66% {
      content: '...';
    }
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dots);


/***/ }),

/***/ 49432:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10993);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85118);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52775);
/* harmony import */ var _CopyButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17235);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CopyButton__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__]);
([_CopyButton__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z).withConfig({
    componentId: "sc-6718a3bb-0"
})`
  align-items: center;
  background-color: ${({ theme  })=>theme.colors.dropdown};
  border-radius: 16px;
  position: relative;
`;
const Address = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-6718a3bb-1"
})`
  flex: 1;
  position: relative;
  padding-left: 16px;

  & > input {
    background: transparent;
    border: 0;
    color: ${({ theme  })=>theme.colors.text};
    display: block;
    font-weight: 600;
    font-size: 16px;
    padding: 0;
    width: 100%;

    &:focus {
      outline: 0;
    }
  }

  &:after {
    background: linear-gradient(
      to right,
      ${({ theme  })=>theme.colors.background}00,
      ${({ theme  })=>theme.colors.background}E6
    );
    content: '';
    height: 100%;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    width: 40px;
  }
`;
const CopyAddress = ({ account , ...props })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        position: "relative",
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Address, {
                    title: account,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        readOnly: true,
                        value: account
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    margin: "12px",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CopyButton__WEBPACK_IMPORTED_MODULE_3__/* .CopyButton */ .q, {
                        width: "24px",
                        text: account,
                        tooltipMessage: t("Copied"),
                        tooltipTop: -40
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CopyAddress);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 87739:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2302);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(97458);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10993);
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71933);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52775);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__]);
([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const Dot = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-4b7982a8-0"
})`
  background-color: ${({ theme  })=>theme.colors.failure};
  border-radius: 50%;
  height: 8px;
  width: 8px;
`;
const ProfileUserMenuItem = ({ isLoading , hasProfile , disabled ,  })=>{
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_3__/* .useWeb3React */ .Ge)();
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__/* .useTranslation */ .$G)();
    if (isLoading) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* .UserMenuItem */ .l, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                height: "24px",
                width: "35%"
            })
        });
    }
    if (!hasProfile) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: "/create-profile",
            passHref: true,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* .UserMenuItem */ .l, {
                as: "a",
                disabled: disabled,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    children: [
                        t("Make a Profile"),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Dot, {})
                    ]
                })
            })
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: `/profile/${account?.toLowerCase()}/achievements`,
        passHref: true,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* .UserMenuItem */ .l, {
            as: "a",
            disabled: disabled,
            children: t("Your Profile")
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileUserMenuItem);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 72290:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10993);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(30822);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(70973);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(46344);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15501);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(91370);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52775);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97119);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__]);
_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const TxnIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z).withConfig({
    componentId: "sc-3a4284b1-0"
})`
  align-items: center;
  flex: none;
  width: 24px;
`;
const Summary = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-3a4284b1-1"
})`
  flex: 1;
  padding: 0 8px;
`;
const TxnLink = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z).withConfig({
    componentId: "sc-3a4284b1-2"
})`
  align-items: center;
  color: ${({ theme  })=>theme.colors.text};
  display: flex;
  margin-bottom: 16px;
  width: 100%;

  &:hover {
    text-decoration: none;
  }
`;
const renderIcon = (txn)=>{
    if (!txn.receipt) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            spin: true,
            width: "24px"
        });
    }
    return txn.receipt?.status === 1 || typeof txn.receipt?.status === "undefined" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        color: "success",
        width: "24px"
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        color: "failure",
        width: "24px"
    });
};
const TransactionRow = ({ txn , chainId  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    if (!txn) {
        return null;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(TxnLink, {
        href: (0,utils__WEBPACK_IMPORTED_MODULE_3__/* .getBlockExploreLink */ .C)(txn.hash, "transaction", chainId),
        external: true,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TxnIcon, {
                children: renderIcon(txn)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Summary, {
                children: txn.translatableSummary ? t(txn.translatableSummary.text, txn.translatableSummary.data) : txn.summary ?? txn.hash
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TxnIcon, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    width: "24px",
                    color: "primary"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TransactionRow);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 36336:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(77067);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(21014);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(85118);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(10993);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(97458);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(77921);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(61629);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21050);
/* harmony import */ var config_constants_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75759);
/* harmony import */ var hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97477);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52775);
/* harmony import */ var hooks_useAuth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49444);
/* harmony import */ var hooks_useNativeCurrency__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19915);
/* harmony import */ var hooks_useTokenBalance__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(94186);
/* harmony import */ var components_Logo_ChainLogo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(62787);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(97119);
/* harmony import */ var utils_formatBalance__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(59123);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8906);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _CopyAddress__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(49432);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__, hooks_useAuth__WEBPACK_IMPORTED_MODULE_5__, hooks_useNativeCurrency__WEBPACK_IMPORTED_MODULE_6__, hooks_useTokenBalance__WEBPACK_IMPORTED_MODULE_7__, components_Logo_ChainLogo__WEBPACK_IMPORTED_MODULE_8__, _CopyAddress__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__]);
([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__, hooks_useAuth__WEBPACK_IMPORTED_MODULE_5__, hooks_useNativeCurrency__WEBPACK_IMPORTED_MODULE_6__, hooks_useTokenBalance__WEBPACK_IMPORTED_MODULE_7__, components_Logo_ChainLogo__WEBPACK_IMPORTED_MODULE_8__, _CopyAddress__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const WalletInfo = ({ hasLowNativeBalance , onDismiss  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__/* .useTranslation */ .$G)();
    const { account , chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const { data , isFetched  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_11__.useBalance)({
        addressOrName: account
    });
    const native = (0,hooks_useNativeCurrency__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const { balance: cakeBalance , fetchStatus: cakeFetchStatus  } = (0,hooks_useTokenBalance__WEBPACK_IMPORTED_MODULE_7__/* .useGetCakeBalance */ .Nn)();
    const { logout  } = (0,hooks_useAuth__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const handleLogout = ()=>{
        onDismiss?.();
        logout();
    };
    const isBSC = native.chainId === _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.BSC */ .a_.BSC;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                color: "secondary",
                fontSize: "12px",
                textTransform: "uppercase",
                fontWeight: "bold",
                mb: "8px",
                children: t("Your Address")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CopyAddress__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                account: account,
                mb: "24px"
            }),
            hasLowNativeBalance && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                variant: "warning",
                mb: "24px",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                            fontWeight: "bold",
                            children: t("%currency% Balance Low", {
                                currency: native.symbol
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                            as: "p",
                            children: t("You need %currency% for transaction fees.", {
                                currency: native.symbol
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                alignItems: "center",
                justifyContent: "space-between",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                        children: [
                            !isBSC && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Logo_ChainLogo__WEBPACK_IMPORTED_MODULE_8__/* .ChainLogo */ .E, {
                                chainId: native.chainId
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                ml: isBSC ? 0 : "8px",
                                color: "textSubtle",
                                children: [
                                    native.symbol,
                                    " ",
                                    t("Balance")
                                ]
                            })
                        ]
                    }),
                    !isFetched ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                        height: "22px",
                        width: "60px"
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                        children: (0,utils_formatBalance__WEBPACK_IMPORTED_MODULE_10__/* .formatBigNumber */ .dp)(data.value, 6)
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                alignItems: "center",
                justifyContent: "space-between",
                mb: "24px",
                mt: "12px",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                        alignItems: "center",
                        children: [
                            !isBSC && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Logo_ChainLogo__WEBPACK_IMPORTED_MODULE_8__/* .ChainLogo */ .E, {
                                chainId: 56
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                ml: isBSC ? 0 : "8px",
                                color: "textSubtle",
                                children: t("CAKE Balance")
                            })
                        ]
                    }),
                    cakeFetchStatus !== config_constants_types__WEBPACK_IMPORTED_MODULE_2__/* .FetchStatus.Fetched */ .iF.Fetched ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                        height: "22px",
                        width: "60px"
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                        children: (0,utils_formatBalance__WEBPACK_IMPORTED_MODULE_10__/* .formatBigNumber */ .dp)(cakeBalance, 3)
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                alignItems: "center",
                justifyContent: "end",
                mb: "24px",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                    href: (0,utils__WEBPACK_IMPORTED_MODULE_9__/* .getBlockExploreLink */ .C)(account, "address", chainId),
                    children: t("View on %site%", {
                        site: (0,utils__WEBPACK_IMPORTED_MODULE_9__/* .getBlockExploreName */ .X0)(chainId)
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                variant: "secondary",
                width: "100%",
                onClick: handleLogout,
                children: t("Disconnect Wallet")
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WalletInfo);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 41857:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gh": () => (/* binding */ LOW_BNB_BALANCE),
/* harmony export */   "L9": () => (/* binding */ WalletView),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ethersproject_units__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93138);
/* harmony import */ var _ethersproject_units__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_units__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(48329);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(94729);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(24302);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(77208);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6657);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(4953);
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71933);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52775);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8906);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _WalletInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(36336);
/* harmony import */ var _WalletTransactions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(66955);
/* harmony import */ var _WalletWrongNetwork__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(33856);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__, _WalletInfo__WEBPACK_IMPORTED_MODULE_7__, _WalletTransactions__WEBPACK_IMPORTED_MODULE_8__, _WalletWrongNetwork__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__]);
([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__, _WalletInfo__WEBPACK_IMPORTED_MODULE_7__, _WalletTransactions__WEBPACK_IMPORTED_MODULE_8__, _WalletWrongNetwork__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











var WalletView;
(function(WalletView) {
    WalletView[WalletView["WALLET_INFO"] = 0] = "WALLET_INFO";
    WalletView[WalletView["TRANSACTIONS"] = 1] = "TRANSACTIONS";
    WalletView[WalletView["WRONG_NETWORK"] = 2] = "WRONG_NETWORK";
})(WalletView || (WalletView = {}));
const LOW_BNB_BALANCE = (0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_1__.parseUnits)("2", "gwei");
const ModalHeader = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* .ModalHeader */ .xB).withConfig({
    componentId: "sc-a72c0a02-0"
})`
  background: ${({ theme  })=>theme.colors.gradientBubblegum};
`;
const Tabs = styled_components__WEBPACK_IMPORTED_MODULE_5___default().div.withConfig({
    componentId: "sc-a72c0a02-1"
})`
  background-color: ${({ theme  })=>theme.colors.dropdown};
  border-bottom: 1px solid ${({ theme  })=>theme.colors.cardBorder};
  padding: 16px 24px;
`;
const WalletModal = ({ initialView =WalletView.WALLET_INFO , onDismiss ,  })=>{
    const { 0: view , 1: setView  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(initialView);
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__/* .useTranslation */ .$G)();
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3React */ .Ge)();
    const { data , isFetched  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_6__.useBalance)({
        addressOrName: account
    });
    const hasLowNativeBalance = isFetched && data && data.value.lte(LOW_BNB_BALANCE);
    const handleClick = (newIndex)=>{
        setView(newIndex);
    };
    const TabsComponent = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Tabs, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                scale: "sm",
                variant: "subtle",
                onItemClick: handleClick,
                activeIndex: view,
                fullWidth: true,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                        children: t("Wallet")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                        children: t("Transactions")
                    })
                ]
            })
        });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* .ModalContainer */ .F0, {
        title: t("Welcome!"),
        $minWidth: "320px",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ModalHeader, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* .ModalTitle */ .r6, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                            children: t("Your Wallet")
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                        variant: "text",
                        onClick: onDismiss,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                            width: "24px",
                            color: "text"
                        })
                    })
                ]
            }),
            view !== WalletView.WRONG_NETWORK && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TabsComponent, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* .ModalBody */ .fe, {
                p: "24px",
                width: "100%",
                children: [
                    view === WalletView.WALLET_INFO && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_WalletInfo__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        hasLowNativeBalance: hasLowNativeBalance,
                        onDismiss: onDismiss
                    }),
                    view === WalletView.TRANSACTIONS && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_WalletTransactions__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
                    view === WalletView.WRONG_NETWORK && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_WalletWrongNetwork__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        onDismiss: onDismiss
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WalletModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 66955:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(85118);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(10993);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(77067);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(61629);
/* harmony import */ var state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14265);
/* harmony import */ var state_transactions_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56906);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52775);
/* harmony import */ var state_transactions_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44824);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89699);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _TransactionRow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(72290);
/* harmony import */ var _utils_wagmi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(18480);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([state_transactions_hooks__WEBPACK_IMPORTED_MODULE_3__, _TransactionRow__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__]);
([state_transactions_hooks__WEBPACK_IMPORTED_MODULE_3__, _TransactionRow__WEBPACK_IMPORTED_MODULE_7__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const TransactionsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z).withConfig({
    componentId: "sc-92c51dde-0"
})`
  max-height: 300px;
  overflow-y: auto;
`;
const WalletTransactions = ()=>{
    const dispatch = (0,state__WEBPACK_IMPORTED_MODULE_2__/* .useAppDispatch */ .TL)();
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__/* .useTranslation */ .$G)();
    const sortedTransactions = (0,state_transactions_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useAllSortedRecentTransactions */ .Fn)();
    const hasTransactions = !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6___default()(sortedTransactions);
    const handleClearAll = ()=>{
        dispatch((0,state_transactions_actions__WEBPACK_IMPORTED_MODULE_5__/* .clearAllTransactions */ .fY)());
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        minHeight: "120px",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                alignItems: "center",
                justifyContent: "space-between",
                mb: "24px",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        color: "secondary",
                        fontSize: "12px",
                        textTransform: "uppercase",
                        fontWeight: "bold",
                        children: t("Recent Transactions")
                    }),
                    hasTransactions && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                        scale: "sm",
                        onClick: handleClearAll,
                        variant: "text",
                        px: "0",
                        children: t("Clear all")
                    })
                ]
            }),
            hasTransactions ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TransactionsContainer, {
                children: Object.entries(sortedTransactions).map(([chainId, transactions])=>{
                    const chainIdNumber = Number(chainId);
                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                fontSize: "12px",
                                color: "textSubtle",
                                mb: "4px",
                                children: _utils_wagmi__WEBPACK_IMPORTED_MODULE_8__/* .chains.find */ .p5.find((c)=>c.id === chainIdNumber)?.name ?? "Unknown network"
                            }),
                            Object.values(transactions).map((txn)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TransactionRow__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                    txn: txn,
                                    chainId: chainIdNumber
                                }, txn.hash))
                        ]
                    }, chainId);
                })
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                textAlign: "center",
                children: t("No recent transactions")
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WalletTransactions);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 13303:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2302);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10993);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(22188);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52775);
/* harmony import */ var hooks_useTokenBalance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94186);
/* harmony import */ var config_constants_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75759);
/* harmony import */ var _WalletModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41857);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useTokenBalance__WEBPACK_IMPORTED_MODULE_2__, _WalletModal__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__]);
([hooks_useTokenBalance__WEBPACK_IMPORTED_MODULE_2__, _WalletModal__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const WalletUserMenuItem = ({ isWrongNetwork , onPresentWalletModal ,  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const { balance , fetchStatus  } = (0,hooks_useTokenBalance__WEBPACK_IMPORTED_MODULE_2__/* .useGetBnbBalance */ .nu)();
    const hasLowBnbBalance = fetchStatus === config_constants_types__WEBPACK_IMPORTED_MODULE_3__/* .FetchStatus.Fetched */ .iF.Fetched && balance.lte(_WalletModal__WEBPACK_IMPORTED_MODULE_4__/* .LOW_BNB_BALANCE */ .Gh);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* .UserMenuItem */ .l, {
        as: "button",
        onClick: onPresentWalletModal,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            children: [
                t("Wallet"),
                hasLowBnbBalance && !isWrongNetwork && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    color: "warning",
                    width: "24px"
                }),
                isWrongNetwork && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    color: "failure",
                    width: "24px"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WalletUserMenuItem);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 33856:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52775);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(30822);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(77067);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(61629);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(35934);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21050);
/* harmony import */ var hooks_useSwitchNetwork__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85240);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useSwitchNetwork__WEBPACK_IMPORTED_MODULE_4__]);
hooks_useSwitchNetwork__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z).withConfig({
    componentId: "sc-b13b3dbb-0"
})`
  width: 100%;
  &:hover {
    text-decoration: initial;
  }
`;
const WalletWrongNetwork = ({ onDismiss  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    const { switchNetworkAsync , canSwitch  } = (0,hooks_useSwitchNetwork__WEBPACK_IMPORTED_MODULE_4__/* .useSwitchNetwork */ .g)();
    const handleSwitchNetwork = async ()=>{
        await switchNetworkAsync(_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.BSC */ .a_.BSC);
        onDismiss?.();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                mb: "24px",
                children: t("You’re connected to the wrong network.")
            }),
            canSwitch && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                onClick: handleSwitchNetwork,
                mb: "24px",
                children: t("Switch Network")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledLink, {
                href: "https://docs.pancakeswap.finance/get-started/connection-guide",
                external: true,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    width: "100%",
                    variant: "secondary",
                    children: [
                        t("Learn How"),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            color: "primary",
                            ml: "6px"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WalletWrongNetwork);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 59952:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52775);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21050);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(24141);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2302);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(70973);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(10993);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(41532);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(42736);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(85118);
/* harmony import */ var components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7447);
/* harmony import */ var components_Trans__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4369);
/* harmony import */ var hooks_useActiveChainId__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56797);
/* harmony import */ var hooks_useAuth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(49444);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var state_profile_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(28134);
/* harmony import */ var state_transactions_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(56906);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8906);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _ProfileUserMenuItem__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(87739);
/* harmony import */ var _WalletModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(41857);
/* harmony import */ var _WalletUserMenuItem__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(13303);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_3__, hooks_useActiveChainId__WEBPACK_IMPORTED_MODULE_5__, hooks_useAuth__WEBPACK_IMPORTED_MODULE_6__, state_profile_hooks__WEBPACK_IMPORTED_MODULE_9__, state_transactions_hooks__WEBPACK_IMPORTED_MODULE_10__, _ProfileUserMenuItem__WEBPACK_IMPORTED_MODULE_12__, _WalletModal__WEBPACK_IMPORTED_MODULE_13__, _WalletUserMenuItem__WEBPACK_IMPORTED_MODULE_14__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__]);
([components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_3__, hooks_useActiveChainId__WEBPACK_IMPORTED_MODULE_5__, hooks_useAuth__WEBPACK_IMPORTED_MODULE_6__, state_profile_hooks__WEBPACK_IMPORTED_MODULE_9__, state_transactions_hooks__WEBPACK_IMPORTED_MODULE_10__, _ProfileUserMenuItem__WEBPACK_IMPORTED_MODULE_12__, _WalletModal__WEBPACK_IMPORTED_MODULE_13__, _WalletUserMenuItem__WEBPACK_IMPORTED_MODULE_14__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















const UserMenu = ()=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const { address: account  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_11__.useAccount)();
    const { chainId , isWrongNetwork  } = (0,hooks_useActiveChainId__WEBPACK_IMPORTED_MODULE_5__/* .useActiveChainId */ .gi)();
    const { logout  } = (0,hooks_useAuth__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const { hasPendingTransactions , pendingNumber  } = (0,state_transactions_hooks__WEBPACK_IMPORTED_MODULE_10__/* .usePendingTransactions */ .VQ)();
    const { isInitialized , isLoading , profile  } = (0,state_profile_hooks__WEBPACK_IMPORTED_MODULE_9__/* .useProfile */ .Un)();
    const [onPresentWalletModal] = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_WalletModal__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .ZP, {
        initialView: _WalletModal__WEBPACK_IMPORTED_MODULE_13__/* .WalletView.WALLET_INFO */ .L9.WALLET_INFO
    }));
    const [onPresentTransactionModal] = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_WalletModal__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .ZP, {
        initialView: _WalletModal__WEBPACK_IMPORTED_MODULE_13__/* .WalletView.TRANSACTIONS */ .L9.TRANSACTIONS
    }));
    const [onPresentWrongNetworkModal] = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_WalletModal__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .ZP, {
        initialView: _WalletModal__WEBPACK_IMPORTED_MODULE_13__/* .WalletView.WRONG_NETWORK */ .L9.WRONG_NETWORK
    }));
    const hasProfile = isInitialized && !!profile;
    const avatarSrc = profile?.nft?.image?.thumbnail;
    const { 0: userMenuText , 1: setUserMenuText  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)("");
    const { 0: userMenuVariable , 1: setUserMenuVariable  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)("default");
    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{
        if (hasPendingTransactions) {
            setUserMenuText(t("%num% Pending", {
                num: pendingNumber
            }));
            setUserMenuVariable("pending");
        } else {
            setUserMenuText("");
            setUserMenuVariable("default");
        }
    }, [
        hasPendingTransactions,
        pendingNumber,
        t
    ]);
    const onClickWalletMenu = ()=>{
        if (isWrongNetwork) {
            onPresentWrongNetworkModal();
        } else {
            onPresentWalletModal();
        }
    };
    const UserMenuItems = ()=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_WalletUserMenuItem__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                    isWrongNetwork: isWrongNetwork,
                    onPresentWalletModal: onClickWalletMenu
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* .UserMenuItem */ .l, {
                    as: "button",
                    disabled: isWrongNetwork,
                    onClick: onPresentTransactionModal,
                    children: [
                        t("Recent Transactions"),
                        hasPendingTransactions && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                            spin: true
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* .UserMenuDivider */ .v, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                    href: `/profile/${account?.toLowerCase()}`,
                    passHref: true,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* .UserMenuItem */ .l, {
                        as: "a",
                        disabled: isWrongNetwork || chainId !== _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_2__/* .ChainId.BSC */ .a_.BSC,
                        children: t("Your NFTs")
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProfileUserMenuItem__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                    isLoading: isLoading,
                    hasProfile: hasProfile,
                    disabled: isWrongNetwork || chainId !== _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_2__/* .ChainId.BSC */ .a_.BSC
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* .UserMenuDivider */ .v, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* .UserMenuItem */ .l, {
                    as: "button",
                    onClick: logout,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%",
                        children: [
                            t("Disconnect"),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {})
                        ]
                    })
                })
            ]
        });
    };
    if (account) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .ZP, {
            account: account,
            avatarSrc: avatarSrc,
            text: userMenuText,
            variant: userMenuVariable,
            children: ({ isOpen  })=>isOpen ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UserMenuItems, {}) : null
        });
    }
    if (isWrongNetwork) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .ZP, {
            text: t("Network"),
            variant: "danger",
            children: ({ isOpen  })=>isOpen ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UserMenuItems, {}) : null
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        scale: "sm",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                display: [
                    "none",
                    ,
                    ,
                    "block"
                ],
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Trans__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    children: "Connect Wallet"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                display: [
                    "block",
                    ,
                    ,
                    "none"
                ],
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Trans__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    children: "Connect"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserMenu);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 46045:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ footerLinks)
/* harmony export */ });
const footerLinks = (t)=>[
        {
            label: t("About"),
            items: [
                {
                    label: t("Contact"),
                    href: "https://docs.pancakeswap.finance/contact-us",
                    isHighlighted: true
                },
                {
                    label: t("Brand"),
                    href: "https://docs.pancakeswap.finance/brand"
                },
                {
                    label: t("Blog"),
                    href: "https://medium.com/pancakeswap"
                },
                {
                    label: t("Community"),
                    href: "https://docs.pancakeswap.finance/contact-us/telegram"
                },
                {
                    label: t("Litepaper"),
                    href: "https://v2litepaper.pancakeswap.finance/"
                },
                {
                    label: "—"
                },
                {
                    label: t("Online Store"),
                    href: "https://pancakeswap.creator-spring.com/"
                }, 
            ]
        },
        {
            label: t("Help"),
            items: [
                {
                    label: t("Customer Support"),
                    href: "https://docs.pancakeswap.finance/contact-us/customer-support"
                },
                {
                    label: t("Troubleshooting"),
                    href: "https://docs.pancakeswap.finance/help/troubleshooting"
                },
                {
                    label: t("Guides"),
                    href: "https://docs.pancakeswap.finance/get-started"
                }, 
            ]
        },
        {
            label: t("Developers"),
            items: [
                {
                    label: "Github",
                    href: "https://github.com/pancakeswap"
                },
                {
                    label: t("Documentation"),
                    href: "https://docs.pancakeswap.finance"
                },
                {
                    label: t("Bug Bounty"),
                    href: "https://docs.pancakeswap.finance/code/bug-bounty"
                },
                {
                    label: t("Audits"),
                    href: "https://docs.pancakeswap.finance/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited"
                },
                {
                    label: t("Careers"),
                    href: "https://docs.pancakeswap.finance/hiring/become-a-chef"
                }, 
            ]
        }, 
    ];


/***/ }),

/***/ 1647:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_NextLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12966);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(18121);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52775);
/* harmony import */ var components_PhishingWarningBanner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(83731);
/* harmony import */ var components_NetworkSwitcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19358);
/* harmony import */ var hooks_useTheme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63850);
/* harmony import */ var hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2629);
/* harmony import */ var state_user_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(921);
/* harmony import */ var _UserMenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(59952);
/* harmony import */ var _hooks_useMenuItems__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(93262);
/* harmony import */ var _GlobalSettings__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(69425);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(11803);
/* harmony import */ var _config_footerConfig__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(46045);
/* harmony import */ var _GlobalSettings_types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(47756);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_PhishingWarningBanner__WEBPACK_IMPORTED_MODULE_5__, components_NetworkSwitcher__WEBPACK_IMPORTED_MODULE_6__, hooks_useTheme__WEBPACK_IMPORTED_MODULE_7__, hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_8__, state_user_hooks__WEBPACK_IMPORTED_MODULE_9__, _UserMenu__WEBPACK_IMPORTED_MODULE_10__, _hooks_useMenuItems__WEBPACK_IMPORTED_MODULE_11__, _GlobalSettings__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__]);
([components_PhishingWarningBanner__WEBPACK_IMPORTED_MODULE_5__, components_NetworkSwitcher__WEBPACK_IMPORTED_MODULE_6__, hooks_useTheme__WEBPACK_IMPORTED_MODULE_7__, hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_8__, state_user_hooks__WEBPACK_IMPORTED_MODULE_9__, _UserMenu__WEBPACK_IMPORTED_MODULE_10__, _hooks_useMenuItems__WEBPACK_IMPORTED_MODULE_11__, _GlobalSettings__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















const Menu = (props)=>{
    const { isDark , setTheme  } = (0,hooks_useTheme__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP)();
    const cakePriceUsd = (0,hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_8__/* .useCakeBusdPrice */ .S9)({
        forceMainnet: true
    });
    const { currentLanguage , setLanguage , t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__/* .useTranslation */ .$G)();
    const { pathname  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const [showPhishingWarningBanner] = (0,state_user_hooks__WEBPACK_IMPORTED_MODULE_9__/* .usePhishingBannerManager */ .FT)();
    const menuItems = (0,_hooks_useMenuItems__WEBPACK_IMPORTED_MODULE_11__/* .useMenuItems */ .J)();
    const activeMenuItem = (0,_utils__WEBPACK_IMPORTED_MODULE_13__/* .getActiveMenuItem */ .t)({
        menuConfig: menuItems,
        pathname
    });
    const activeSubMenuItem = (0,_utils__WEBPACK_IMPORTED_MODULE_13__/* .getActiveSubMenuItem */ .u)({
        menuItem: activeMenuItem,
        pathname
    });
    const toggleTheme = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return ()=>setTheme(isDark ? "light" : "dark");
    }, [
        setTheme,
        isDark
    ]);
    const getFooterLinks = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return (0,_config_footerConfig__WEBPACK_IMPORTED_MODULE_15__/* .footerLinks */ .d)(t);
    }, [
        t
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
            linkComponent: (linkProps)=>{
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_NextLink__WEBPACK_IMPORTED_MODULE_3__/* .NextLinkFromReactRouter */ .a, {
                    to: linkProps.href,
                    ...linkProps,
                    prefetch: false
                });
            },
            rightSide: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_GlobalSettings__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                        mode: _GlobalSettings_types__WEBPACK_IMPORTED_MODULE_14__/* .SettingsMode.GLOBAL */ .a.GLOBAL
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_NetworkSwitcher__WEBPACK_IMPORTED_MODULE_6__/* .NetworkSwitcher */ .m, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UserMenu__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})
                ]
            }),
            banner: showPhishingWarningBanner && "undefined" !== "undefined" && /*#__PURE__*/ 0,
            isDark: isDark,
            toggleTheme: toggleTheme,
            currentLang: currentLanguage.code,
            langs: _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__/* .languageList */ .s0,
            setLang: setLanguage,
            cakePriceUsd: cakePriceUsd,
            links: menuItems,
            subLinks: activeMenuItem?.hideSubNav || activeSubMenuItem?.hideSubNav ? [] : activeMenuItem?.items,
            footerLinks: getFooterLinks,
            activeItem: activeMenuItem?.href,
            activeSubItem: activeSubMenuItem?.href,
            buyCakeLabel: t("Buy CAKE"),
            ...props
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 19358:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ NetworkSwitcher)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(85118);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(77067);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2302);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(51429);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(10993);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(79578);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(62362);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(83686);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(61629);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(42736);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21050);
/* harmony import */ var hooks_useActiveChainId__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56797);
/* harmony import */ var hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97477);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52775);
/* harmony import */ var hooks_useSessionChainId__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67994);
/* harmony import */ var hooks_useHover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14826);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8906);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var hooks_useSwitchNetwork__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(85240);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var utils_wagmi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(18480);
/* harmony import */ var _Logo_ChainLogo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(62787);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useActiveChainId__WEBPACK_IMPORTED_MODULE_2__, hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__, hooks_useSessionChainId__WEBPACK_IMPORTED_MODULE_5__, hooks_useSwitchNetwork__WEBPACK_IMPORTED_MODULE_8__, _Logo_ChainLogo__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__]);
([hooks_useActiveChainId__WEBPACK_IMPORTED_MODULE_2__, hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__, hooks_useSessionChainId__WEBPACK_IMPORTED_MODULE_5__, hooks_useSwitchNetwork__WEBPACK_IMPORTED_MODULE_8__, _Logo_ChainLogo__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const NetworkSelect = ({ switchNetwork , chainId  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__/* .useTranslation */ .$G)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                px: "16px",
                py: "8px",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                    color: "textSubtle",
                    children: t("Select a Network")
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* .UserMenuDivider */ .v, {}),
            utils_wagmi__WEBPACK_IMPORTED_MODULE_10__/* .chains.map */ .p5.map((chain)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* .UserMenuItem */ .l, {
                    style: {
                        justifyContent: "flex-start"
                    },
                    onClick: ()=>chain.id !== chainId && switchNetwork(chain.id),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Logo_ChainLogo__WEBPACK_IMPORTED_MODULE_11__/* .ChainLogo */ .E, {
                            chainId: chain.id
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                            color: chain.id === chainId ? "secondary" : "text",
                            bold: chain.id === chainId,
                            pl: "12px",
                            children: chain.name
                        })
                    ]
                }, chain.id))
        ]
    });
};
const WrongNetworkSelect = ({ switchNetwork , chainId  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__/* .useTranslation */ .$G)();
    const { targetRef , tooltip , tooltipVisible  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(t("The URL you are accessing (Chain id: %chainId%) belongs to %network%; mismatching your wallet’s network. Please switch the network to continue.", {
        chainId,
        network: utils_wagmi__WEBPACK_IMPORTED_MODULE_10__/* .chains.find */ .p5.find((c)=>c.id === chainId)?.name ?? "Unknown network"
    }), {
        placement: "auto-start",
        hideTimeout: 0
    });
    const { chain  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_7__.useNetwork)();
    const localChainId = (0,hooks_useActiveChainId__WEBPACK_IMPORTED_MODULE_2__/* .useLocalNetworkChain */ .ZC)() || _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.BSC */ .a_.BSC;
    const [, setSessionChainId] = (0,hooks_useSessionChainId__WEBPACK_IMPORTED_MODULE_5__/* .useSessionChainId */ .o)();
    const localChainName = utils_wagmi__WEBPACK_IMPORTED_MODULE_10__/* .chains.find */ .p5.find((c)=>c.id === localChainId)?.name ?? "BSC";
    const [ref1, isHover] = (0,hooks_useHover__WEBPACK_IMPORTED_MODULE_6__/* .useHover */ .X)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                ref: targetRef,
                alignItems: "center",
                px: "16px",
                py: "8px",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                        color: "textSubtle"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                        color: "textSubtle",
                        pl: "6px",
                        children: t("Please switch network")
                    })
                ]
            }),
            tooltipVisible && tooltip,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* .UserMenuDivider */ .v, {}),
            chain && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* .UserMenuItem */ .l, {
                ref: ref1,
                onClick: ()=>setSessionChainId(chain.id),
                style: {
                    justifyContent: "flex-start"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Logo_ChainLogo__WEBPACK_IMPORTED_MODULE_11__/* .ChainLogo */ .E, {
                        chainId: chain.id
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                        color: "secondary",
                        bold: true,
                        pl: "12px",
                        children: chain.name
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                px: "16px",
                pt: "8px",
                children: isHover ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                    color: "text"
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                    color: "text"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* .UserMenuItem */ .l, {
                onClick: ()=>switchNetwork(localChainId),
                style: {
                    justifyContent: "flex-start"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Logo_ChainLogo__WEBPACK_IMPORTED_MODULE_11__/* .ChainLogo */ .E, {
                        chainId: localChainId
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                        pl: "12px",
                        children: localChainName
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                mx: "16px",
                my: "8px",
                scale: "sm",
                onClick: ()=>switchNetwork(localChainId),
                children: t("Switch network in wallet")
            })
        ]
    });
};
const NetworkSwitcher = ()=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__/* .useTranslation */ .$G)();
    const { chainId , isWrongNetwork , isNotMatched  } = (0,hooks_useActiveChainId__WEBPACK_IMPORTED_MODULE_2__/* .useActiveChainId */ .gi)();
    const { pendingChainId , isLoading , canSwitch , switchNetworkAsync  } = (0,hooks_useSwitchNetwork__WEBPACK_IMPORTED_MODULE_8__/* .useSwitchNetwork */ .g)();
    (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__/* .useNetworkConnectorUpdater */ .V)();
    const foundChain = (0,react__WEBPACK_IMPORTED_MODULE_9__.useMemo)(()=>utils_wagmi__WEBPACK_IMPORTED_MODULE_10__/* .chains.find */ .p5.find((c)=>c.id === (isLoading ? pendingChainId || chainId : chainId)), [
        isLoading,
        pendingChainId,
        chainId
    ]);
    const symbol = _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_1__/* .NATIVE */ .B5[foundChain?.id]?.symbol ?? foundChain?.nativeCurrency?.symbol;
    const cannotChangeNetwork = !canSwitch;
    if (!chainId || chainId === _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.BSC */ .a_.BSC) {
        return null;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .ZP, {
            mr: "8px",
            variant: isLoading ? "pending" : isWrongNetwork ? "danger" : "default",
            avatarSrc: `/images/chains/${chainId}.png`,
            disabled: cannotChangeNetwork,
            text: isLoading ? t("Requesting") : isWrongNetwork ? t("Network") : foundChain ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                        display: [
                            "none",
                            null,
                            null,
                            null,
                            null,
                            "block"
                        ],
                        children: foundChain.name
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                        display: [
                            "block",
                            null,
                            null,
                            null,
                            null,
                            "none"
                        ],
                        children: symbol
                    })
                ]
            }) : t("Select a Network"),
            children: ()=>isNotMatched ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(WrongNetworkSelect, {
                    switchNetwork: switchNetworkAsync,
                    chainId: chainId
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NetworkSelect, {
                    switchNetwork: switchNetworkAsync,
                    chainId: chainId
                })
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 12966:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ NextLinkFromReactRouter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);




const A = styled_components__WEBPACK_IMPORTED_MODULE_2___default().a.withConfig({
    componentId: "sc-a01cb22d-0"
})``;
/**
 * temporary solution for migrating React Router to Next.js Link
 */ const NextLinkFromReactRouter = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(({ to , replace , children , prefetch , ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
        href: to,
        replace: replace,
        passHref: true,
        prefetch: prefetch,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(A, {
            ref: ref,
            ...props,
            children: children
        })
    }));


/***/ }),

/***/ 83731:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10993);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(77067);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52775);
/* harmony import */ var state_user_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(921);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([state_user_hooks__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__]);
([state_user_hooks__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z).withConfig({
    componentId: "sc-9b88e4-0"
})`
  overflow: hidden;
  height: 100%;
  padding: 12px;
  align-items: center;
  background: linear-gradient(0deg, rgba(39, 38, 44, 0.4), rgba(39, 38, 44, 0.4)),
    linear-gradient(180deg, #8051d6 0%, #492286 100%);
  ${({ theme  })=>theme.mediaQueries.md} {
    padding: 0px;
    background: linear-gradient(180deg, #8051d6 0%, #492286 100%);
  }
`;
const InnerContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z).withConfig({
    componentId: "sc-9b88e4-1"
})`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const SpeechBubble = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-9b88e4-2"
})`
  background: rgba(39, 38, 44, 0.4);
  border-radius: 16px;
  padding: 8px;
  width: 60%;
  height: 80%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  & ${_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z} {
    flex-shrink: 0;
    margin-right: 4px;
  }
`;
const PhishingWarningBanner = ()=>{
    const { t  } = useTranslation();
    const [, hideBanner] = usePhishingBannerManager();
    const { isMobile , isMd  } = useMatchBreakpoints();
    const warningTextAsParts = useMemo(()=>{
        const warningText = t("please make sure you're visiting https://pancakeswap.finance - check the URL carefully.");
        return warningText.split(/(https:\/\/pancakeswap.finance)/g);
    }, [
        t
    ]);
    const warningTextComponent = /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx(Text, {
                as: "span",
                color: "warning",
                small: true,
                bold: true,
                textTransform: "uppercase",
                children: t("Phishing warning: ")
            }),
            warningTextAsParts.map((text, i)=>/*#__PURE__*/ _jsx(Text, {
                    small: true,
                    as: "span",
                    bold: text === "https://pancakeswap.finance",
                    color: text === "https://pancakeswap.finance" ? "#FFFFFF" : "#BDC2C4",
                    children: text
                }, i))
        ]
    });
    return /*#__PURE__*/ _jsx(Container, {
        className: "warning-banner",
        children: isMobile || isMd ? /*#__PURE__*/ _jsxs(_Fragment, {
            children: [
                /*#__PURE__*/ _jsx(Box, {
                    children: warningTextComponent
                }),
                /*#__PURE__*/ _jsx(IconButton, {
                    onClick: hideBanner,
                    variant: "text",
                    children: /*#__PURE__*/ _jsx(CloseIcon, {
                        color: "#FFFFFF"
                    })
                })
            ]
        }) : /*#__PURE__*/ _jsxs(_Fragment, {
            children: [
                /*#__PURE__*/ _jsxs(InnerContainer, {
                    children: [
                        /*#__PURE__*/ _jsx("img", {
                            src: "/images/decorations/phishing-warning-bunny.webp",
                            alt: "phishing-warning",
                            width: "92px",
                            onError: (e)=>{
                                const fallbackSrc = "/images/decorations/phishing-warning-bunny.png";
                                if (!e.currentTarget.src.endsWith(fallbackSrc)) {
                                    // eslint-disable-next-line no-param-reassign
                                    e.currentTarget.src = fallbackSrc;
                                }
                            }
                        }),
                        /*#__PURE__*/ _jsx(SpeechBubble, {
                            children: warningTextComponent
                        })
                    ]
                }),
                /*#__PURE__*/ _jsx(IconButton, {
                    onClick: hideBanner,
                    variant: "text",
                    children: /*#__PURE__*/ _jsx(CloseIcon, {
                        color: "#FFFFFF"
                    })
                })
            ]
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (PhishingWarningBanner)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 66722:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ FixedSubgraphHealthIndicator)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);



const SubgraphHealthIndicator = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(null, {
    loadableGenerated: {
        modules: [
            "..\\components\\SubgraphHealthIndicator\\FixedSubgraphHealthIndicator.tsx -> " + "components/SubgraphHealthIndicator"
        ]
    },
    ssr: false
});
const FixedSubgraphHealthIndicator = ()=>{
    const { pathname  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const isOnNftPages = pathname.includes("nfts");
    return isOnNftPages ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SubgraphHealthIndicator, {
        subgraphName: "pancakeswap/nft-market"
    }) : null;
};


/***/ }),

/***/ 21854:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(77067);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(30822);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97119);
/* harmony import */ var hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97477);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52775);
/* harmony import */ var _pancakeswap_utils_truncateHash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15260);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_2__]);
hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const DescriptionWithTx = ({ txHash , children  })=>{
    const { chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .$G)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            typeof children === "string" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                as: "p",
                children: children
            }) : children,
            txHash && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                external: true,
                href: (0,utils__WEBPACK_IMPORTED_MODULE_1__/* .getBlockExploreLink */ .C)(txHash, "transaction", chainId),
                children: [
                    t("View on %site%", {
                        site: (0,utils__WEBPACK_IMPORTED_MODULE_1__/* .getBlockExploreName */ .X0)(chainId)
                    }),
                    ": ",
                    (0,_pancakeswap_utils_truncateHash__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(txHash, 8, 0)
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DescriptionWithTx);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 33537:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* reexport safe */ _DescriptionWithTx__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _DescriptionWithTx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21854);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_DescriptionWithTx__WEBPACK_IMPORTED_MODULE_0__]);
_DescriptionWithTx__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 12734:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ campaignMap)
/* harmony export */ });
/**
 * id: The campaign id (required)
 * type: The type of the achievement
 * title: A string or an object to be translated.
 * Note: If the value is a string it is likely used as data in a translation object
 *
 * badge: Achievement avatar
 */ const campaigns = [
    {
        id: "511110000",
        type: "ifo",
        title: "Kalmar",
        badge: "ifo-kalm.svg"
    },
    {
        id: "511100000",
        type: "ifo",
        title: "Hotcross",
        badge: "ifo-hotcross.svg"
    },
    {
        id: "511090000",
        type: "ifo",
        title: "Horizon Protocol",
        badge: "ifo-hzn.svg"
    },
    {
        id: "511080000",
        type: "ifo",
        title: "Belt",
        badge: "ifo-belt.svg"
    },
    {
        id: "511070000",
        type: "ifo",
        title: "Yieldwatch",
        badge: "ifo-watch.svg"
    },
    {
        id: "511060000",
        type: "ifo",
        title: "Berry",
        badge: "ifo-bry.svg"
    },
    {
        id: "511050000",
        type: "ifo",
        title: "Soteria",
        badge: "ifo-wsote.svg"
    },
    {
        id: "511040000",
        type: "ifo",
        title: "Helmet",
        badge: "ifo-helmet.svg"
    },
    {
        id: "511030000",
        type: "ifo",
        title: "Tenet",
        badge: "ifo-ten.svg"
    },
    {
        id: "511020000",
        type: "ifo",
        title: "Ditto",
        badge: "ifo-ditto.svg"
    },
    {
        id: "511010000",
        type: "ifo",
        title: "Blink",
        badge: "ifo-blink.svg"
    },
    {
        id: "512010001",
        type: "teambattle",
        title: "Easter Champion: Gold",
        badge: "easter-champion-gold.svg"
    },
    {
        id: "512010002",
        type: "teambattle",
        title: "Easter Top 500: Gold",
        badge: "easter-top-500-gold.svg"
    },
    {
        id: "512010003",
        type: "teambattle",
        title: "Easter Top 500: Gold",
        badge: "easter-top-500-gold.svg"
    },
    {
        id: "512010004",
        type: "teambattle",
        title: "Easter Top 500: Gold",
        badge: "easter-top-500-gold.svg"
    },
    {
        id: "512010005",
        type: "teambattle",
        title: "Easter Participant: Gold",
        badge: "easter-participant-gold.svg"
    },
    {
        id: "512010006",
        type: "teambattle",
        title: "Easter Champion: Silver",
        badge: "easter-champion-silver.svg"
    },
    {
        id: "512010007",
        type: "teambattle",
        title: "Easter Top 500: Silver",
        badge: "easter-top-500-silver.svg"
    },
    {
        id: "512010008",
        type: "teambattle",
        title: "Easter Top 500: Silver",
        badge: "easter-top-500-silver.svg"
    },
    {
        id: "512010009",
        type: "teambattle",
        title: "Easter Top 500: Silver",
        badge: "easter-top-500-silver.svg"
    },
    {
        id: "512010010",
        type: "teambattle",
        title: "Easter Participant: Silver",
        badge: "easter-participant-silver.svg"
    },
    {
        id: "512010011",
        type: "teambattle",
        title: "Easter Champion: Bronze",
        badge: "easter-champion-bronze.svg"
    },
    {
        id: "512010012",
        type: "teambattle",
        title: "Easter Top 500: Bronze",
        badge: "easter-top-500-bronze.svg"
    },
    {
        id: "512010013",
        type: "teambattle",
        title: "Easter Top 500: Bronze",
        badge: "easter-top-500-bronze.svg"
    },
    {
        id: "512010014",
        type: "teambattle",
        title: "Easter Top 500: Bronze",
        badge: "easter-top-500-bronze.svg"
    },
    {
        id: "512010015",
        type: "teambattle",
        title: "Easter Participant: Bronze",
        badge: "easter-participant-bronze.svg"
    },
    {
        id: "513010001",
        type: "participation",
        title: "Syrup Soaker",
        description: "Took a dip in the early days of the Auto CAKE Pool",
        badge: "syrup-soaker.svg"
    },
    {
        id: "514010001",
        type: "participation",
        title: "Clairvoyant",
        description: "Played a round of Prediction before round 12,120",
        badge: "clairvoyant.svg"
    },
    {
        id: "515010001",
        type: "participation",
        title: "Lottie",
        description: "Joined a round in the early days of Lottery V2",
        badge: "lottie.svg"
    },
    {
        id: "515020001",
        type: "participation",
        title: "Lucky",
        description: "Won a round in the early days of Lottery V2",
        badge: "lucky.svg"
    },
    {
        id: "515030001",
        type: "participation",
        title: "Baller",
        description: "Top 100 ticket buyer in the early days of Lottery V2",
        badge: "baller.svg"
    },
    {
        id: "516010001",
        type: "participation",
        title: "1 Year",
        description: "Joined PancakeSwap during the first year of our journey!",
        badge: "1-year.svg"
    },
    {
        id: "516020001",
        type: "participation",
        title: "2 Year",
        description: "Celebrate our 2nd birthday with us",
        badge: "2-year.svg"
    },
    {
        id: "511120000",
        type: "ifo",
        title: "Duelist King",
        badge: "ifo-dkt.svg"
    },
    {
        id: "511130000",
        type: "ifo",
        title: "Mines of Dalarnia",
        badge: "ifo-dar.svg"
    },
    {
        id: "511140000",
        type: "ifo",
        title: "FC Porto Fan Token",
        badge: "ifo-porto.svg"
    },
    {
        id: "511150000",
        type: "ifo",
        title: "FC Santos Fan Token",
        badge: "ifo-santos.svg"
    },
    {
        id: "512020001",
        type: "teambattle",
        title: "Fan Token Champion: Gold",
        badge: "fan-token-champion-gold.svg"
    },
    {
        id: "512020002",
        type: "teambattle",
        title: "Fan Token Top 10: Gold",
        badge: "fan-token-top-10-gold.svg"
    },
    {
        id: "512020003",
        type: "teambattle",
        title: "Fan Token Top 100: Gold",
        badge: "fan-token-top-100-gold.svg"
    },
    {
        id: "512020004",
        type: "teambattle",
        title: "Fan Token Top 500: Gold",
        badge: "fan-token-top-500-gold.svg"
    },
    {
        id: "512020005",
        type: "teambattle",
        title: "Fan Token Participant: Gold",
        badge: "fan-token-participant-gold.svg"
    },
    {
        id: "512020006",
        type: "teambattle",
        title: "Fan Token Champion: Silver",
        badge: "fan-token-champion-silver.svg"
    },
    {
        id: "512020007",
        type: "teambattle",
        title: "Fan Token Top 10: Silver",
        badge: "fan-token-top-10-silver.svg"
    },
    {
        id: "512020008",
        type: "teambattle",
        title: "Fan Token Top 100: Silver",
        badge: "fan-token-top-100-silver.svg"
    },
    {
        id: "512020009",
        type: "teambattle",
        title: "Fan Token Top 500: Silver",
        badge: "fan-token-top-500-silver.svg"
    },
    {
        id: "512020010",
        type: "teambattle",
        title: "Fan Token Participant: Silver",
        badge: "fan-token-participant-silver.svg"
    },
    {
        id: "512020011",
        type: "teambattle",
        title: "Fan Token Champion: Bronze",
        badge: "fan-token-champion-bronze.svg"
    },
    {
        id: "512020012",
        type: "teambattle",
        title: "Fan Token Top 10: Bronze",
        badge: "fan-token-top-10-bronze.svg"
    },
    {
        id: "512020013",
        type: "teambattle",
        title: "Fan Token Top 100: Bronze",
        badge: "fan-token-top-100-bronze.svg"
    },
    {
        id: "512020014",
        type: "teambattle",
        title: "Fan Token Top 500: Bronze",
        badge: "fan-token-top-500-bronze.svg"
    },
    {
        id: "512020015",
        type: "teambattle",
        title: "Fan Token Participant: Bronze",
        badge: "fan-token-participant-bronze.svg"
    },
    {
        id: "511160000",
        type: "ifo",
        title: "Diviner Protocol",
        badge: "ifo-dpt.svg"
    },
    {
        id: "511170000",
        type: "ifo",
        title: "Froyo Games",
        badge: "ifo-froyo.svg"
    },
    {
        id: "511180000",
        type: "ifo",
        title: "Era7",
        badge: "ifo-era.svg"
    },
    {
        id: "511190000",
        type: "ifo",
        title: "Duet",
        badge: "ifo-duet.svg"
    },
    {
        id: "511200000",
        type: "ifo",
        title: "Trivia",
        badge: "ifo-trivia.svg"
    },
    {
        id: "511300000",
        type: "ifo",
        title: "Peel",
        badge: "ifo-peel.svg"
    },
    {
        id: "511400000",
        type: "ifo",
        title: "Wom",
        badge: "ifo-wom.svg"
    },
    {
        id: "511500000",
        type: "ifo",
        title: "Hoop",
        badge: "ifo-hoop.svg"
    },
    {
        id: "512030001",
        type: "teambattle",
        title: "Mobox Champion: Gold",
        badge: "MBOX-champion-gold.svg"
    },
    {
        id: "512030002",
        type: "teambattle",
        title: "Mobox Top 10: Gold",
        badge: "MBOX-top-10-gold.svg"
    },
    {
        id: "512030003",
        type: "teambattle",
        title: "Mobox Top 100: Gold",
        badge: "MBOX-top-100-gold.svg"
    },
    {
        id: "512030004",
        type: "teambattle",
        title: "Mobox Top 500: Gold",
        badge: "MBOX-top-500-gold.svg"
    },
    {
        id: "512030005",
        type: "teambattle",
        title: "Mobox Participant: Gold",
        badge: "MBOX-participant-gold.svg"
    },
    {
        id: "512030006",
        type: "teambattle",
        title: "Mobox Champion: Silver",
        badge: "MBOX-champion-silver.svg"
    },
    {
        id: "512030007",
        type: "teambattle",
        title: "Mobox Top 10: Silver",
        badge: "MBOX-top-10-silver.svg"
    },
    {
        id: "512030008",
        type: "teambattle",
        title: "Mobox Top 100: Silver",
        badge: "MBOX-top-100-silver.svg"
    },
    {
        id: "512030009",
        type: "teambattle",
        title: "Mobox Top 500: Silver",
        badge: "MBOX-top-500-silver.svg"
    },
    {
        id: "512030010",
        type: "teambattle",
        title: "Mobox Participant: Silver",
        badge: "MBOX-participant-silver.svg"
    },
    {
        id: "512030011",
        type: "teambattle",
        title: "Mobox Champion: Bronze",
        badge: "MBOX-champion-bronze.svg"
    },
    {
        id: "512030012",
        type: "teambattle",
        title: "Mobox Top 10: Bronze",
        badge: "MBOX-top-10-bronze.svg"
    },
    {
        id: "512030013",
        type: "teambattle",
        title: "Mobox Top 100: Bronze",
        badge: "MBOX-top-100-bronze.svg"
    },
    {
        id: "512030014",
        type: "teambattle",
        title: "Mobox Top 500: Bronze",
        badge: "MBOX-top-500-bronze.svg"
    },
    {
        id: "512030015",
        type: "teambattle",
        title: "Mobox Participant: Bronze",
        badge: "MBOX-participant-bronze.svg"
    },
    {
        id: "512040001",
        type: "teambattle",
        title: "MoD Champion: Gold",
        badge: "MoD-champion-gold.svg"
    },
    {
        id: "512040002",
        type: "teambattle",
        title: "MoD Top 10: Gold",
        badge: "MoD-top-10-gold.svg"
    },
    {
        id: "512040003",
        type: "teambattle",
        title: "MoD Top 100: Gold",
        badge: "MoD-top-100-gold.svg"
    },
    {
        id: "512040004",
        type: "teambattle",
        title: "MoD Top 500: Gold",
        badge: "MoD-top-500-gold.svg"
    },
    {
        id: "512040005",
        type: "teambattle",
        title: "MoD Participant: Gold",
        badge: "MoD-participant-gold.svg"
    },
    {
        id: "512040006",
        type: "teambattle",
        title: "MoD Champion: Silver",
        badge: "MoD-champion-silver.svg"
    },
    {
        id: "512040007",
        type: "teambattle",
        title: "MoD Top 10: Silver",
        badge: "MoD-top-10-silver.svg"
    },
    {
        id: "512040008",
        type: "teambattle",
        title: "MoD Top 100: Silver",
        badge: "MoD-top-100-silver.svg"
    },
    {
        id: "512040009",
        type: "teambattle",
        title: "MoD Top 500: Silver",
        badge: "MoD-top-500-silver.svg"
    },
    {
        id: "512040010",
        type: "teambattle",
        title: "MoD Participant: Silver",
        badge: "MoD-participant-silver.svg"
    },
    {
        id: "512040011",
        type: "teambattle",
        title: "MoD Champion: Bronze",
        badge: "MoD-champion-bronze.svg"
    },
    {
        id: "512040012",
        type: "teambattle",
        title: "MoD Top 10: Bronze",
        badge: "MoD-top-10-bronze.svg"
    },
    {
        id: "512040013",
        type: "teambattle",
        title: "MoD Top 100: Bronze",
        badge: "MoD-top-100-bronze.svg"
    },
    {
        id: "512040014",
        type: "teambattle",
        title: "MoD Top 500: Bronze",
        badge: "MoD-top-500-bronze.svg"
    },
    {
        id: "512040015",
        type: "teambattle",
        title: "MoD Participant: Bronze",
        badge: "MoD-participant-bronze.svg"
    }, 
];
/**
 * Transform the campaign config into a map. Keeps the config the same
 * as the others and allows easy access to a campaign by id
 */ const campaignMap = new Map();
campaigns.forEach((campaign)=>{
    campaignMap.set(campaign.id, campaign);
});
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (campaigns)));


/***/ }),

/***/ 48746:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const DELIST_COLLECTIONS = {
    "0x4D89eBf7b1F66806A4C99Df71D22b7b9efC6bB0b": {
        active: false,
        address: "0x4D89eBf7b1F66806A4C99Df71D22b7b9efC6bB0b",
        avatar: "",
        banner: {
            large: "",
            small: ""
        },
        createdAt: "",
        creatorAddress: "",
        creatorFee: "",
        description: "",
        id: "0x4d89ebf7b1f66806a4c99df71d22b7b9efc6bb0b",
        name: "Baked Potatoes",
        numberTokensListed: "76",
        owner: "0xCd1B0abBc3E55E91FCC5AEE393525e68478C2952",
        symbol: "POT",
        totalSupply: "",
        totalTrades: "",
        totalVolumeBNB: "",
        tradingFee: "",
        updatedAt: "",
        verified: true,
        whitelistChecker: ""
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DELIST_COLLECTIONS);


/***/ }),

/***/ 32733:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97478);

const teams = [
    {
        id: 1,
        name: "Syrup Storm",
        description: "The storm's a-comin! Watch out! These bulls are stampeding in a syrupy surge!",
        images: {
            lg: "syrup-storm-lg.png",
            md: "syrup-storm-md.png",
            sm: "syrup-storm-sm.png",
            alt: "syrup-storm-alt.png",
            ipfs: `${_index__WEBPACK_IMPORTED_MODULE_0__/* .IPFS_GATEWAY */ .Gs}/QmXKzSojwzYjtDCVgR6mVx7w7DbyYpS7zip4ovJB9fQdMG/syrup-storm.png`
        },
        background: "syrup-storm-bg.svg",
        textColor: "#191326",
        users: 0,
        points: 0
    },
    {
        id: 2,
        name: "Fearsome Flippers",
        description: "The flippening is coming. Don't get in these bunnies' way, or you'll get flipped, too!",
        images: {
            lg: "fearsome-flippers-lg.png",
            md: "fearsome-flippers-md.png",
            sm: "fearsome-flippers-sm.png",
            alt: "fearsome-flippers-alt.png",
            ipfs: `${_index__WEBPACK_IMPORTED_MODULE_0__/* .IPFS_GATEWAY */ .Gs}/QmXKzSojwzYjtDCVgR6mVx7w7DbyYpS7zip4ovJB9fQdMG/fearsome-flippers.png`
        },
        background: "fearsome-flippers-bg.svg",
        textColor: "#FFFFFF",
        users: 0,
        points: 0
    },
    {
        id: 3,
        name: "Chaotic Cakers",
        description: "Can you stand the heat? Stay out of the kitchen or you might get burned to a crisp!",
        images: {
            lg: "chaotic-cakers-lg.png",
            md: "chaotic-cakers-md.png",
            sm: "chaotic-cakers-sm.png",
            alt: "chaotic-cakers-alt.png",
            ipfs: `${_index__WEBPACK_IMPORTED_MODULE_0__/* .IPFS_GATEWAY */ .Gs}/QmXKzSojwzYjtDCVgR6mVx7w7DbyYpS7zip4ovJB9fQdMG/chaotic-cakers.png`
        },
        background: "chaotic-cakers-bg.svg",
        textColor: "#191326",
        users: 0,
        points: 0
    }, 
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (teams);


/***/ }),

/***/ 40107:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ FLAG_FARM)
/* harmony export */ });
const FLAG_FARM = "pkg";


/***/ }),

/***/ 92577:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ useAccountEventListener)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_utils_replaceBrowserHistory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36399);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14265);
/* harmony import */ var _utils_clearUserStates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44205);
/* harmony import */ var _useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97477);
/* harmony import */ var _useSessionChainId__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67994);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_clearUserStates__WEBPACK_IMPORTED_MODULE_2__, _useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__, _useSessionChainId__WEBPACK_IMPORTED_MODULE_4__]);
([_utils_clearUserStates__WEBPACK_IMPORTED_MODULE_2__, _useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__, _useSessionChainId__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const useAccountEventListener = ()=>{
    const { account , chainId , connector  } = (0,_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const [, setSessionChainId] = (0,_useSessionChainId__WEBPACK_IMPORTED_MODULE_4__/* .useSessionChainId */ .o)();
    const dispatch = (0,_state__WEBPACK_IMPORTED_MODULE_1__/* .useAppDispatch */ .TL)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (account && connector) {
            const handleUpdateEvent = (e)=>{
                if (e?.chain?.id && !(e?.chain?.unsupported ?? false)) {
                    (0,_pancakeswap_utils_replaceBrowserHistory__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)("chainId", e.chain.id);
                    setSessionChainId(e.chain.id);
                }
                (0,_utils_clearUserStates__WEBPACK_IMPORTED_MODULE_2__/* .clearUserStates */ .J)(dispatch, {
                    chainId,
                    newChainId: e?.chain?.id
                });
            };
            const handleDeactiveEvent = ()=>{
                (0,_utils_clearUserStates__WEBPACK_IMPORTED_MODULE_2__/* .clearUserStates */ .J)(dispatch, {
                    chainId,
                    isDeactive: true
                });
            };
            connector.addListener("disconnect", handleDeactiveEvent);
            connector.addListener("change", handleUpdateEvent);
            return ()=>{
                connector.removeListener("disconnect", handleDeactiveEvent);
                connector.removeListener("change", handleUpdateEvent);
            };
        }
        return undefined;
    }, [
        account,
        chainId,
        dispatch,
        connector,
        setSessionChainId
    ]);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 52687:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useDebounce)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

// modified from https://usehooks.com/useDebounce/
function useDebounce(value, delay) {
    const { 0: debouncedValue , 1: setDebouncedValue  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        // Update debounced value after delay
        const handler = setTimeout(()=>{
            setDebouncedValue(value);
        }, delay);
        // Cancel the timeout if value changes (also on delay change or unmount)
        // This is how we prevent debounced value from updating if value is changed ...
        // .. within the delay period. Timeout gets cleared and restarted.
        return ()=>{
            clearTimeout(handler);
        };
    }, [
        value,
        delay
    ]);
    return debouncedValue;
}


/***/ }),

/***/ 759:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8906);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const SAFE_ID = "safe";
const useEagerConnect = ()=>{
    const client = (0,wagmi__WEBPACK_IMPORTED_MODULE_0__.useClient)();
    const { connectAsync , connectors  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_0__.useConnect)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const connectorInstance = connectors.find((c)=>c.id === SAFE_ID && c.ready);
        if (connectorInstance && // @ts-ignore
        !window.cy) {
            connectAsync({
                connector: connectorInstance
            }).catch(()=>{
                client.autoConnect();
            });
        } else {
            client.autoConnect();
        }
    }, [
        client,
        connectAsync,
        connectors
    ]);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useEagerConnect);


/***/ }),

/***/ 61202:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ featureFarmApiAtom),
/* harmony export */   "y": () => (/* binding */ useFeatureFlag)
/* harmony export */ });
/* harmony import */ var config_flag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40107);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82451);
/* harmony import */ var jotai_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2752);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_0__, jotai_utils__WEBPACK_IMPORTED_MODULE_1__]);
([jotai__WEBPACK_IMPORTED_MODULE_0__, jotai_utils__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const storage = (0,jotai_utils__WEBPACK_IMPORTED_MODULE_1__.createJSONStorage)(()=>sessionStorage);
const featureFarmApiAtom = (0,jotai_utils__WEBPACK_IMPORTED_MODULE_1__.atomWithStorage)("feature-farm-api", config_flag__WEBPACK_IMPORTED_MODULE_2__/* .FLAG_FARM */ .u, // @ts-ignore
storage);
featureFarmApiAtom.onMount = (set)=>{
    const params = new URL(window.location.href).searchParams;
    const flag = params.get("use");
    if (flag === "farmApi") {
        set("api");
    }
};
function useFeatureFlag(featureAtom) {
    return (0,jotai__WEBPACK_IMPORTED_MODULE_0__.useAtomValue)(featureAtom);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 14826:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ useHover)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useHover() {
    const { 0: value , 1: setValue  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const { 0: ref , 1: setRef  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const node = ref;
        if (node) {
            node.addEventListener("mouseover", ()=>setValue(true));
            node.addEventListener("mouseout", ()=>setValue(false));
            return ()=>{
                node.removeEventListener("mouseover", ()=>setValue(false));
                node.removeEventListener("mouseout", ()=>setValue(true));
            };
        }
        return undefined;
    }, [
        ref
    ]);
    return [
        setRef,
        value
    ];
}


/***/ }),

/***/ 33533:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ useSlowRefreshEffect),
/* harmony export */   "a": () => (/* binding */ useFastRefreshEffect)
/* harmony export */ });
/* harmony import */ var config_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42918);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15941);
/* harmony import */ var _useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97477);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_2__, _useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__]);
([swr__WEBPACK_IMPORTED_MODULE_2__, _useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const EMPTY_ARRAY = [];
function useFastRefreshEffect(effect, deps) {
    const { chainId  } = (0,_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const { data =0  } = (0,swr__WEBPACK_IMPORTED_MODULE_2__["default"])([
        config_constants__WEBPACK_IMPORTED_MODULE_0__/* .FAST_INTERVAL */ .sR,
        "blockNumber",
        chainId
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(effect.bind(null, data), [
        data,
        ...deps || EMPTY_ARRAY
    ]);
}
function useSlowRefreshEffect(effect, deps) {
    const { chainId  } = (0,_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const { data =0  } = (0,swr__WEBPACK_IMPORTED_MODULE_2__["default"])([
        config_constants__WEBPACK_IMPORTED_MODULE_0__/* .SLOW_INTERVAL */ .KI,
        "blockNumber",
        chainId
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(effect.bind(null, data), [
        data,
        ...deps || EMPTY_ARRAY
    ]);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 89541:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58097);
/* harmony import */ var _sentry_nextjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71933);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__]);
_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function useSentryUser() {
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3React */ .Ge)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (account) {
            (0,_sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__.setUser)({
                account
            });
        }
    }, [
        account
    ]);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSentryUser);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 69038:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69915);
/* harmony import */ var hooks_useTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63850);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_2__, hooks_useTheme__WEBPACK_IMPORTED_MODULE_3__]);
([js_cookie__WEBPACK_IMPORTED_MODULE_2__, hooks_useTheme__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const useThemeCookie = ()=>{
    const theme = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(styled_components__WEBPACK_IMPORTED_MODULE_1__.ThemeContext);
    const themeValue = theme.isDark ? "dark" : "light";
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const getThemeCookie = js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].get(hooks_useTheme__WEBPACK_IMPORTED_MODULE_3__/* .COOKIE_THEME_KEY */ .jV, {
            domain: hooks_useTheme__WEBPACK_IMPORTED_MODULE_3__/* .THEME_DOMAIN */ .zE
        });
        if (!getThemeCookie && getThemeCookie !== themeValue) {
            js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].set(hooks_useTheme__WEBPACK_IMPORTED_MODULE_3__/* .COOKIE_THEME_KEY */ .jV, themeValue, {
                domain: hooks_useTheme__WEBPACK_IMPORTED_MODULE_3__/* .THEME_DOMAIN */ .zE
            });
        }
    }, [
        themeValue
    ]);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useThemeCookie);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 94186:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Nn": () => (/* binding */ useGetCakeBalance),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "nu": () => (/* binding */ useGetBnbBalance)
/* harmony export */ });
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71933);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34215);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40370);
/* harmony import */ var config_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42918);
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65757);
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ethersproject_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26644);
/* harmony import */ var _ethersproject_constants__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_constants__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21050);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15941);
/* harmony import */ var utils_bigNumber__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(87318);
/* harmony import */ var utils_providers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(62621);
/* harmony import */ var _useContract__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(82688);
/* harmony import */ var _useSWRContract__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(22408);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_0__, swr__WEBPACK_IMPORTED_MODULE_8__, _useContract__WEBPACK_IMPORTED_MODULE_11__, _useSWRContract__WEBPACK_IMPORTED_MODULE_12__]);
([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_0__, swr__WEBPACK_IMPORTED_MODULE_8__, _useContract__WEBPACK_IMPORTED_MODULE_11__, _useSWRContract__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const useTokenBalance = (tokenAddress, forceBSC)=>{
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_0__/* .useWeb3React */ .Ge)();
    const contract = (0,_useContract__WEBPACK_IMPORTED_MODULE_11__/* .useTokenContract */ .Ib)(tokenAddress, false);
    const key = (0,react__WEBPACK_IMPORTED_MODULE_7__.useMemo)(()=>account ? {
            contract: forceBSC ? contract.connect(utils_providers__WEBPACK_IMPORTED_MODULE_10__/* .bscRpcProvider */ .v) : contract,
            methodName: "balanceOf",
            params: [
                account
            ]
        } : null, [
        account,
        contract,
        forceBSC
    ]);
    const { data , status , ...rest } = (0,_useSWRContract__WEBPACK_IMPORTED_MODULE_12__/* .useSWRContract */ .Av)(key, {
        refreshInterval: config_constants__WEBPACK_IMPORTED_MODULE_3__/* .FAST_INTERVAL */ .sR
    });
    return {
        ...rest,
        fetchStatus: status,
        balance: data ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_1___default())(data.toString()) : utils_bigNumber__WEBPACK_IMPORTED_MODULE_9__/* .BIG_ZERO */ .HW
    };
};
const useGetBnbBalance = ()=>{
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_0__/* .useWeb3React */ .Ge)();
    const { status , data , mutate  } = (0,swr__WEBPACK_IMPORTED_MODULE_8__["default"])([
        account,
        "bnbBalance"
    ], async ()=>{
        return utils_providers__WEBPACK_IMPORTED_MODULE_10__/* .bscRpcProvider.getBalance */ .v.getBalance(account);
    });
    return {
        balance: data || _ethersproject_constants__WEBPACK_IMPORTED_MODULE_5__.Zero,
        fetchStatus: status,
        refresh: mutate
    };
};
const useGetCakeBalance = ()=>{
    const { chainId  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_0__/* .useWeb3React */ .Ge)();
    const { balance , fetchStatus  } = useTokenBalance(_pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_2__/* .CAKE */ .cr[chainId]?.address || _pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_2__/* .CAKE */ .cr[_pancakeswap_sdk__WEBPACK_IMPORTED_MODULE_6__/* .ChainId.BSC */ .a_.BSC]?.address, true);
    // TODO: Remove ethers conversion once useTokenBalance is converted to ethers.BigNumber
    return {
        balance: _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_4__.BigNumber.from(balance.toString()),
        fetchStatus
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useTokenBalance);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 21571:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useUserAgent = ()=>{
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        document.documentElement.setAttribute("data-useragent", navigator.userAgent);
    }, []);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useUserAgent);


/***/ }),

/***/ 15562:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ Blocklist),
/* harmony export */   "y": () => (/* binding */ Updaters)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71933);
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42918);
/* harmony import */ var _state_lists_updater__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50373);
/* harmony import */ var _state_multicall_updater__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61502);
/* harmony import */ var _state_transactions_updater__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(98834);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__, _state_lists_updater__WEBPACK_IMPORTED_MODULE_4__, _state_multicall_updater__WEBPACK_IMPORTED_MODULE_5__, _state_transactions_updater__WEBPACK_IMPORTED_MODULE_6__]);
([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__, _state_lists_updater__WEBPACK_IMPORTED_MODULE_4__, _state_multicall_updater__WEBPACK_IMPORTED_MODULE_5__, _state_transactions_updater__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function Updaters() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_state_lists_updater__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_state_transactions_updater__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_state_multicall_updater__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP, {})
        ]
    });
}
function Blocklist({ children  }) {
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3React */ .Ge)();
    const blocked = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>Boolean(account && _config_constants__WEBPACK_IMPORTED_MODULE_3__/* .BLOCKED_ADDRESSES.indexOf */ .mj.indexOf(account) !== -1), [
        account
    ]);
    if (blocked) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: "Blocked address"
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: children
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 84774:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(59327);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(74086);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34215);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_GlobalCheckClaimStatus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3272);
/* harmony import */ var components_NetworkModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98381);
/* harmony import */ var components_SubgraphHealthIndicator_FixedSubgraphHealthIndicator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(66722);
/* harmony import */ var hooks_useAccountEventListener__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92577);
/* harmony import */ var hooks_useEagerConnect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(759);
/* harmony import */ var hooks_useEagerConnect_bmp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2359);
/* harmony import */ var hooks_useSentryUser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(89541);
/* harmony import */ var hooks_useThemeCookie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(69038);
/* harmony import */ var hooks_useUserAgent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(21571);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(40968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4298);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(61127);
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var state__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(14265);
/* harmony import */ var state_block_hooks__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(88770);
/* harmony import */ var state_farms_hooks__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(2735);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(15562);
/* harmony import */ var _components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(65362);
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(1647);
/* harmony import */ var _Providers__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(77944);
/* harmony import */ var _style_Global__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(54852);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_GlobalCheckClaimStatus__WEBPACK_IMPORTED_MODULE_2__, components_NetworkModal__WEBPACK_IMPORTED_MODULE_3__, hooks_useAccountEventListener__WEBPACK_IMPORTED_MODULE_5__, hooks_useEagerConnect_bmp__WEBPACK_IMPORTED_MODULE_7__, hooks_useSentryUser__WEBPACK_IMPORTED_MODULE_8__, hooks_useThemeCookie__WEBPACK_IMPORTED_MODULE_9__, state_block_hooks__WEBPACK_IMPORTED_MODULE_17__, state_farms_hooks__WEBPACK_IMPORTED_MODULE_18__, ___WEBPACK_IMPORTED_MODULE_19__, _components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_20__, _components_Menu__WEBPACK_IMPORTED_MODULE_21__, _Providers__WEBPACK_IMPORTED_MODULE_22__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_25__]);
([components_GlobalCheckClaimStatus__WEBPACK_IMPORTED_MODULE_2__, components_NetworkModal__WEBPACK_IMPORTED_MODULE_3__, hooks_useAccountEventListener__WEBPACK_IMPORTED_MODULE_5__, hooks_useEagerConnect_bmp__WEBPACK_IMPORTED_MODULE_7__, hooks_useSentryUser__WEBPACK_IMPORTED_MODULE_8__, hooks_useThemeCookie__WEBPACK_IMPORTED_MODULE_9__, state_block_hooks__WEBPACK_IMPORTED_MODULE_17__, state_farms_hooks__WEBPACK_IMPORTED_MODULE_18__, ___WEBPACK_IMPORTED_MODULE_19__, _components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_20__, _components_Menu__WEBPACK_IMPORTED_MODULE_21__, _Providers__WEBPACK_IMPORTED_MODULE_22__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_25__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

























const EasterEgg = next_dynamic__WEBPACK_IMPORTED_MODULE_11___default()(null, {
    loadableGenerated: {
        modules: [
            "_app.tsx -> " + "components/EasterEgg"
        ]
    },
    ssr: false
});
// This config is required for number formatting
bignumber_js__WEBPACK_IMPORTED_MODULE_1___default().config({
    EXPONENTIAL_AT: 1000,
    DECIMAL_PLACES: 80
});
function GlobalHooks() {
    (0,state_block_hooks__WEBPACK_IMPORTED_MODULE_17__/* .usePollBlockNumber */ .hd)();
    (0,hooks_useEagerConnect__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    (0,state_farms_hooks__WEBPACK_IMPORTED_MODULE_18__/* .usePollCoreFarmData */ .QN)();
    (0,hooks_useUserAgent__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)();
    (0,hooks_useAccountEventListener__WEBPACK_IMPORTED_MODULE_5__/* .useAccountEventListener */ .T)();
    (0,hooks_useSentryUser__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
    (0,hooks_useThemeCookie__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)();
    return null;
}
function MPGlobalHooks() {
    (0,state_block_hooks__WEBPACK_IMPORTED_MODULE_17__/* .usePollBlockNumber */ .hd)();
    (0,hooks_useEagerConnect_bmp__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP)();
    (0,state_farms_hooks__WEBPACK_IMPORTED_MODULE_18__/* .usePollCoreFarmData */ .QN)();
    (0,hooks_useUserAgent__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)();
    (0,hooks_useAccountEventListener__WEBPACK_IMPORTED_MODULE_5__/* .useAccountEventListener */ .T)();
    (0,hooks_useSentryUser__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
    return null;
}
function MyApp(props) {
    const { pageProps , Component  } = props;
    const store = (0,state__WEBPACK_IMPORTED_MODULE_16__/* .useStore */ .oR)(pageProps.initialReduxState);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_12___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1, maximum-scale=5, minimum-scale=1, viewport-fit=cover"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Cheaper and faster than Uniswap? Discover PancakeSwap, the leading DEX on BNB Smart Chain (BSC) with the best farms in DeFi and a lottery for CAKE."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "theme-color",
                        content: "#1FC7D4"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:image",
                        content: "https://pancakeswap.finance/images/hero.png"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:description",
                        content: "The most popular AMM on BSC! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by PancakeSwap), NFTs, and more, on a platform you can trust."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:title",
                        content: "\uD83E\uDD5E PancakeSwap - A next evolution DeFi exchange on BNB Smart Chain (BSC)"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "PancakeSwap"
                    }),
                    Component.mp && // eslint-disable-next-line @next/next/no-sync-scripts
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                        src: "https://public.bnbstatic.com/static/js/mp-webview-sdk/webview-v1.0.0.min.js",
                        id: "mp-webview"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Providers__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                store: store,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(___WEBPACK_IMPORTED_MODULE_19__/* .Blocklist */ .P, {
                    children: [
                        Component.mp ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MPGlobalHooks, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GlobalHooks, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_style_Global__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_GlobalCheckClaimStatus__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            excludeLocations: []
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_15__.PersistGate, {
                            loading: null,
                            persistor: state__WEBPACK_IMPORTED_MODULE_16__/* .persistor */ .Dj,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(___WEBPACK_IMPORTED_MODULE_19__/* .Updaters */ .y, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(App, {
                                    ...props
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_13___default()), {
                strategy: "afterInteractive",
                id: "google-tag",
                dangerouslySetInnerHTML: {
                    __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${"GTM-TLF66T4"}');
          `
                }
            })
        ]
    });
}
const ProductionErrorBoundary =  true ? _components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_20__/* .SentryErrorBoundary */ .A : 0;
const App = ({ Component , pageProps  })=>{
    if (Component.pure) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
            ...pageProps
        });
    }
    // Use the layout defined at the page level, if available
    const Layout = Component.Layout || react__WEBPACK_IMPORTED_MODULE_14__.Fragment;
    const ShowMenu = Component.mp ? react__WEBPACK_IMPORTED_MODULE_14__.Fragment : _components_Menu__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ProductionErrorBoundary, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ShowMenu, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Layout, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                        ...pageProps
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(EasterEgg, {
                iterations: 2
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_SubgraphHealthIndicator_FixedSubgraphHealthIndicator__WEBPACK_IMPORTED_MODULE_4__/* .FixedSubgraphHealthIndicator */ .k, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_NetworkModal__WEBPACK_IMPORTED_MODULE_3__/* .NetworkModal */ .B, {
                pageSupportedChains: Component.chains
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 66966:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ getAchievements)
/* harmony export */ });
/* unused harmony export getUserPointIncreaseEvents */
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5805);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var config_constants_campaigns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12734);
/* harmony import */ var config_constants_endpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6680);
/* harmony import */ var utils_achievements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76227);




/**
 * Gets all user point increase events on the profile filtered by wallet address
 */ const getUserPointIncreaseEvents = async (account)=>{
    try {
        const { user  } = await (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.request)(config_constants_endpoints__WEBPACK_IMPORTED_MODULE_2__/* .GRAPH_API_PROFILE */ .YP, graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql`
        query getUserPointIncreaseEvents($account: ID!) {
          user(id: $account) {
            points {
              id
              campaignId
              points
            }
          }
        }
      `, {
            account: account.toLowerCase()
        });
        return user.points;
    } catch (error) {
        return null;
    }
};
/**
 * Gets all user point increase events and adds achievement meta
 */ const getAchievements = async (account)=>{
    const pointIncreaseEvents = await getUserPointIncreaseEvents(account);
    if (!pointIncreaseEvents) {
        return [];
    }
    return pointIncreaseEvents.reduce((accum, userPoint)=>{
        if (!config_constants_campaigns__WEBPACK_IMPORTED_MODULE_1__/* .campaignMap.has */ .T.has(userPoint.campaignId)) {
            return accum;
        }
        const campaignMeta = config_constants_campaigns__WEBPACK_IMPORTED_MODULE_1__/* .campaignMap.get */ .T.get(userPoint.campaignId);
        accum.push({
            id: userPoint.campaignId,
            type: campaignMeta.type,
            address: userPoint.id,
            title: (0,utils_achievements__WEBPACK_IMPORTED_MODULE_3__/* .getAchievementTitle */ .hi)(campaignMeta),
            description: (0,utils_achievements__WEBPACK_IMPORTED_MODULE_3__/* .getAchievementDescription */ .A9)(campaignMeta),
            badge: campaignMeta.badge,
            points: Number(userPoint.points)
        });
        return accum;
    }, []);
};


/***/ }),

/***/ 2735:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cs": () => (/* binding */ usePollFarmsWithUserData),
/* harmony export */   "Dx": () => (/* binding */ useFarmUser),
/* harmony export */   "E2": () => (/* binding */ useFarms),
/* harmony export */   "Iu": () => (/* binding */ usePriceCakeBusd),
/* harmony export */   "QN": () => (/* binding */ usePollCoreFarmData),
/* harmony export */   "f5": () => (/* binding */ useFarmsLength),
/* harmony export */   "f6": () => (/* binding */ useFarmFromPid),
/* harmony export */   "w5": () => (/* binding */ useLpTokenPrice)
/* harmony export */ });
/* unused harmony exports useFarmsPoolLength, useFarmFromLpSymbol, useBusdPriceFromPid */
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34215);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97477);
/* harmony import */ var config_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42918);
/* harmony import */ var hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2629);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14265);
/* harmony import */ var swr_immutable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(79847);
/* harmony import */ var utils_bigNumber__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(87318);
/* harmony import */ var views_Farms_hooks_useBCakeProxyContractAddress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(80922);
/* harmony import */ var utils_contractHelpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(86192);
/* harmony import */ var hooks_useRefreshEffect__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(33533);
/* harmony import */ var hooks_useFeatureFlag__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(61202);
/* harmony import */ var _pancakeswap_farms_constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(37971);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(66947);
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(50246);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_1__, hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_3__, swr_immutable__WEBPACK_IMPORTED_MODULE_7__, views_Farms_hooks_useBCakeProxyContractAddress__WEBPACK_IMPORTED_MODULE_9__, hooks_useRefreshEffect__WEBPACK_IMPORTED_MODULE_11__, hooks_useFeatureFlag__WEBPACK_IMPORTED_MODULE_12__]);
([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_1__, hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_3__, swr_immutable__WEBPACK_IMPORTED_MODULE_7__, views_Farms_hooks_useBCakeProxyContractAddress__WEBPACK_IMPORTED_MODULE_9__, hooks_useRefreshEffect__WEBPACK_IMPORTED_MODULE_11__, hooks_useFeatureFlag__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















function useFarmsLength() {
    const { chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    return (0,swr_immutable__WEBPACK_IMPORTED_MODULE_7__["default"])(chainId ? [
        "farmsLength",
        chainId
    ] : null, async ()=>{
        const mc = (0,utils_contractHelpers__WEBPACK_IMPORTED_MODULE_10__/* .getMasterchefContract */ .aE)(undefined, chainId);
        return (await mc.poolLength()).toNumber();
    });
}
const usePollFarmsWithUserData = ()=>{
    const dispatch = (0,state__WEBPACK_IMPORTED_MODULE_6__/* .useAppDispatch */ .TL)();
    const { account , chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    const { proxyAddress , proxyCreated , isLoading: isProxyContractLoading ,  } = (0,views_Farms_hooks_useBCakeProxyContractAddress__WEBPACK_IMPORTED_MODULE_9__/* .useBCakeProxyContractAddress */ .A)(account, chainId);
    const farmFlag = (0,hooks_useFeatureFlag__WEBPACK_IMPORTED_MODULE_12__/* .useFeatureFlag */ .y)(hooks_useFeatureFlag__WEBPACK_IMPORTED_MODULE_12__/* .featureFarmApiAtom */ .x);
    (0,swr_immutable__WEBPACK_IMPORTED_MODULE_7__["default"])(chainId ? [
        "publicFarmData",
        chainId
    ] : null, async ()=>{
        const farmsConfig = await (0,_pancakeswap_farms_constants__WEBPACK_IMPORTED_MODULE_15__.getFarmConfig)(chainId);
        const pids = farmsConfig.map((farmToFetch)=>farmToFetch.pid);
        dispatch((0,___WEBPACK_IMPORTED_MODULE_13__/* .fetchFarmsPublicDataAsync */ .eG)({
            pids,
            chainId,
            flag: farmFlag
        }));
    }, {
        refreshInterval: farmFlag === "api" ? 50 * 1000 : config_constants__WEBPACK_IMPORTED_MODULE_2__/* .SLOW_INTERVAL */ .KI
    });
    const name = proxyCreated ? [
        "farmsWithUserData",
        account,
        proxyAddress,
        chainId
    ] : [
        "farmsWithUserData",
        account,
        chainId
    ];
    (0,swr_immutable__WEBPACK_IMPORTED_MODULE_7__["default"])(account && chainId && !isProxyContractLoading ? name : null, async ()=>{
        const farmsConfig = await (0,_pancakeswap_farms_constants__WEBPACK_IMPORTED_MODULE_15__.getFarmConfig)(chainId);
        const pids = farmsConfig.map((farmToFetch)=>farmToFetch.pid);
        const params = proxyCreated ? {
            account,
            pids,
            proxyAddress,
            chainId
        } : {
            account,
            pids,
            chainId
        };
        dispatch((0,___WEBPACK_IMPORTED_MODULE_13__/* .fetchFarmUserDataAsync */ .IV)(params));
    }, {
        refreshInterval: config_constants__WEBPACK_IMPORTED_MODULE_2__/* .SLOW_INTERVAL */ .KI
    });
};
/**
 * Fetches the "core" farm data used globally
 * 2 = CAKE-BNB LP
 * 3 = BUSD-BNB LP
 */ const coreFarmPIDs = {
    56: [
        2,
        3
    ],
    97: [
        4,
        10
    ],
    5: [
        1,
        2
    ]
};
const usePollCoreFarmData = ()=>{
    const dispatch = (0,state__WEBPACK_IMPORTED_MODULE_6__/* .useAppDispatch */ .TL)();
    const { chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    const farmFlag = (0,hooks_useFeatureFlag__WEBPACK_IMPORTED_MODULE_12__/* .useFeatureFlag */ .y)(hooks_useFeatureFlag__WEBPACK_IMPORTED_MODULE_12__/* .featureFarmApiAtom */ .x);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (chainId) {
            dispatch((0,___WEBPACK_IMPORTED_MODULE_13__/* .fetchInitialFarmsData */ .$j)({
                chainId
            }));
        }
    }, [
        chainId,
        dispatch
    ]);
    (0,hooks_useRefreshEffect__WEBPACK_IMPORTED_MODULE_11__/* .useFastRefreshEffect */ .a)(()=>{
        if (chainId && farmFlag !== "api") {
            dispatch((0,___WEBPACK_IMPORTED_MODULE_13__/* .fetchFarmsPublicDataAsync */ .eG)({
                pids: coreFarmPIDs[chainId],
                chainId,
                flag: farmFlag
            }));
        }
    }, [
        dispatch,
        chainId,
        farmFlag
    ]);
};
const useFarms = ()=>{
    const { chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    return (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>(0,_selectors__WEBPACK_IMPORTED_MODULE_14__/* .farmSelector */ .b4)(chainId), [
        chainId
    ]));
};
const useFarmsPoolLength = ()=>{
    return useSelector((state)=>state.farms.poolLength);
};
const useFarmFromPid = (pid)=>{
    const farmFromPid = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>(0,_selectors__WEBPACK_IMPORTED_MODULE_14__/* .makeFarmFromPidSelector */ .Fy)(pid), [
        pid
    ]);
    return (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(farmFromPid);
};
const useFarmFromLpSymbol = (lpSymbol)=>{
    const farmFromLpSymbol = useMemo(()=>farmFromLpSymbolSelector(lpSymbol), [
        lpSymbol
    ]);
    return useSelector(farmFromLpSymbol);
};
const useFarmUser = (pid)=>{
    const farmFromPidUser = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>(0,_selectors__WEBPACK_IMPORTED_MODULE_14__/* .makeUserFarmFromPidSelector */ .RL)(pid), [
        pid
    ]);
    return (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(farmFromPidUser);
};
// Return the base token price for a farm, from a given pid
const useBusdPriceFromPid = (pid)=>{
    const busdPriceFromPid = useMemo(()=>makeBusdPriceFromPidSelector(pid), [
        pid
    ]);
    return useSelector(busdPriceFromPid);
};
const useLpTokenPrice = (symbol)=>{
    const lpTokenPriceFromLpSymbol = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>(0,_selectors__WEBPACK_IMPORTED_MODULE_14__/* .makeLpTokenPriceFromLpSymbolSelector */ .Ud)(symbol), [
        symbol
    ]);
    return (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(lpTokenPriceFromLpSymbol);
};
/**
 * @deprecated use the BUSD hook in /hooks
 */ const usePriceCakeBusd = ({ forceMainnet  } = {
    forceMainnet: false
})=>{
    const price = (0,hooks_useBUSDPrice__WEBPACK_IMPORTED_MODULE_3__/* .useCakeBusdPrice */ .S9)({
        forceMainnet
    });
    return (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>price ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(price.toSignificant(6)) : utils_bigNumber__WEBPACK_IMPORTED_MODULE_8__/* .BIG_ZERO */ .HW, [
        price
    ]);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 50246:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fy": () => (/* binding */ makeFarmFromPidSelector),
/* harmony export */   "RL": () => (/* binding */ makeUserFarmFromPidSelector),
/* harmony export */   "Ud": () => (/* binding */ makeLpTokenPriceFromLpSymbolSelector),
/* harmony export */   "b4": () => (/* binding */ farmSelector)
/* harmony export */ });
/* unused harmony exports makeBusdPriceFromPidSelector, priceCakeFromPidSelector, farmFromLpSymbolSelector */
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34215);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns_addSeconds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64150);
/* harmony import */ var date_fns_addSeconds__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns_addSeconds__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_bigNumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87318);
/* harmony import */ var utils_formatBalance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59123);
/* harmony import */ var _pancakeswap_utils_isUndefinedOrNull__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(95923);
/* harmony import */ var _pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40370);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(42918);








const deserializeFarmUserData = (farm)=>{
    return {
        allowance: farm.userData ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(farm.userData.allowance) : utils_bigNumber__WEBPACK_IMPORTED_MODULE_2__/* .BIG_ZERO */ .HW,
        tokenBalance: farm.userData ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(farm.userData.tokenBalance) : utils_bigNumber__WEBPACK_IMPORTED_MODULE_2__/* .BIG_ZERO */ .HW,
        stakedBalance: farm.userData ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(farm.userData.stakedBalance) : utils_bigNumber__WEBPACK_IMPORTED_MODULE_2__/* .BIG_ZERO */ .HW,
        earnings: farm.userData ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(farm.userData.earnings) : utils_bigNumber__WEBPACK_IMPORTED_MODULE_2__/* .BIG_ZERO */ .HW,
        proxy: {
            allowance: farm?.userData?.proxy ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(farm?.userData?.proxy.allowance) : utils_bigNumber__WEBPACK_IMPORTED_MODULE_2__/* .BIG_ZERO */ .HW,
            tokenBalance: farm?.userData?.proxy ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(farm?.userData?.proxy.tokenBalance) : utils_bigNumber__WEBPACK_IMPORTED_MODULE_2__/* .BIG_ZERO */ .HW,
            stakedBalance: farm?.userData?.proxy ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(farm?.userData?.proxy.stakedBalance) : utils_bigNumber__WEBPACK_IMPORTED_MODULE_2__/* .BIG_ZERO */ .HW,
            earnings: farm?.userData?.proxy ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(farm?.userData?.proxy.earnings) : utils_bigNumber__WEBPACK_IMPORTED_MODULE_2__/* .BIG_ZERO */ .HW
        }
    };
};
const deserializeFarm = (farm)=>{
    const { lpAddress , lpSymbol , pid , dual , multiplier , isCommunity , auctionHostingStartSeconds , quoteTokenPriceBusd , tokenPriceBusd , boosted , infoStableSwapAddress ,  } = farm;
    const auctionHostingStartDate = !(0,_pancakeswap_utils_isUndefinedOrNull__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(auctionHostingStartSeconds) ? new Date(auctionHostingStartSeconds * 1000) : null;
    const auctionHostingEndDate = auctionHostingStartDate ? date_fns_addSeconds__WEBPACK_IMPORTED_MODULE_1___default()(auctionHostingStartDate, _config_constants__WEBPACK_IMPORTED_MODULE_6__/* .FARM_AUCTION_HOSTING_IN_SECONDS */ .ki) : null;
    const now = Date.now();
    const isFarmCommunity = isCommunity || !!(auctionHostingStartDate && auctionHostingEndDate && auctionHostingStartDate.getTime() < now && auctionHostingEndDate.getTime() > now);
    return {
        lpAddress,
        lpSymbol,
        pid,
        dual,
        multiplier,
        isCommunity: isFarmCommunity,
        auctionHostingEndDate: auctionHostingEndDate?.toJSON(),
        quoteTokenPriceBusd,
        tokenPriceBusd,
        token: (0,_pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_4__/* .deserializeToken */ .iG)(farm.token),
        quoteToken: (0,_pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_4__/* .deserializeToken */ .iG)(farm.quoteToken),
        userData: deserializeFarmUserData(farm),
        tokenAmountTotal: farm.tokenAmountTotal ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(farm.tokenAmountTotal) : utils_bigNumber__WEBPACK_IMPORTED_MODULE_2__/* .BIG_ZERO */ .HW,
        quoteTokenAmountTotal: farm.quoteTokenAmountTotal ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(farm.quoteTokenAmountTotal) : utils_bigNumber__WEBPACK_IMPORTED_MODULE_2__/* .BIG_ZERO */ .HW,
        lpTotalInQuoteToken: farm.lpTotalInQuoteToken ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(farm.lpTotalInQuoteToken) : utils_bigNumber__WEBPACK_IMPORTED_MODULE_2__/* .BIG_ZERO */ .HW,
        lpTotalSupply: farm.lpTotalSupply ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(farm.lpTotalSupply) : utils_bigNumber__WEBPACK_IMPORTED_MODULE_2__/* .BIG_ZERO */ .HW,
        tokenPriceVsQuote: farm.tokenPriceVsQuote ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(farm.tokenPriceVsQuote) : utils_bigNumber__WEBPACK_IMPORTED_MODULE_2__/* .BIG_ZERO */ .HW,
        poolWeight: farm.poolWeight ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(farm.poolWeight) : utils_bigNumber__WEBPACK_IMPORTED_MODULE_2__/* .BIG_ZERO */ .HW,
        boosted,
        isStable: Boolean(infoStableSwapAddress)
    };
};
const selectCakeFarm = (state)=>state.farms.data.find((f)=>f.pid === 2);
const selectFarmByKey = (key, value)=>(state)=>state.farms.data.find((f)=>f[key] === value);
const makeFarmFromPidSelector = (pid)=>(0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__.createSelector)([
        selectFarmByKey("pid", pid)
    ], (farm)=>deserializeFarm(farm));
const makeBusdPriceFromPidSelector = (pid)=>createSelector([
        selectFarmByKey("pid", pid)
    ], (farm)=>{
        return farm && new BigNumber(farm.tokenPriceBusd);
    });
const makeUserFarmFromPidSelector = (pid)=>(0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__.createSelector)([
        selectFarmByKey("pid", pid)
    ], (farm)=>{
        const { allowance , tokenBalance , stakedBalance , earnings , proxy  } = deserializeFarmUserData(farm);
        return {
            allowance,
            tokenBalance,
            stakedBalance,
            earnings,
            proxy
        };
    });
const priceCakeFromPidSelector = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__.createSelector)([
    selectCakeFarm
], (cakeBnbFarm)=>{
    const cakePriceBusdAsString = cakeBnbFarm?.tokenPriceBusd;
    return new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(cakePriceBusdAsString);
});
const farmFromLpSymbolSelector = (lpSymbol)=>createSelector([
        selectFarmByKey("lpSymbol", lpSymbol)
    ], (farm)=>deserializeFarm(farm));
const makeLpTokenPriceFromLpSymbolSelector = (lpSymbol)=>(0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__.createSelector)([
        selectFarmByKey("lpSymbol", lpSymbol)
    ], (farm)=>{
        let lpTokenPrice = utils_bigNumber__WEBPACK_IMPORTED_MODULE_2__/* .BIG_ZERO */ .HW;
        if (farm) {
            const lpTotalInQuoteToken = farm.lpTotalInQuoteToken ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(farm.lpTotalInQuoteToken) : utils_bigNumber__WEBPACK_IMPORTED_MODULE_2__/* .BIG_ZERO */ .HW;
            const lpTotalSupply = farm.lpTotalSupply ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(farm.lpTotalSupply) : utils_bigNumber__WEBPACK_IMPORTED_MODULE_2__/* .BIG_ZERO */ .HW;
            if (lpTotalSupply.gt(0) && lpTotalInQuoteToken.gt(0)) {
                const farmTokenPriceInUsd = new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(farm.tokenPriceBusd);
                const tokenAmountTotal = farm.tokenAmountTotal ? new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(farm.tokenAmountTotal) : utils_bigNumber__WEBPACK_IMPORTED_MODULE_2__/* .BIG_ZERO */ .HW;
                // Total value of base token in LP
                const valueOfBaseTokenInFarm = farmTokenPriceInUsd.times(tokenAmountTotal);
                // Double it to get overall value in LP
                const overallValueOfAllTokensInFarm = valueOfBaseTokenInFarm.times(2);
                // Divide total value of all tokens, by the number of LP tokens
                const totalLpTokens = (0,utils_formatBalance__WEBPACK_IMPORTED_MODULE_3__/* .getBalanceAmount */ .U4)(lpTotalSupply);
                lpTokenPrice = overallValueOfAllTokensInFarm.div(totalLpTokens);
            }
        }
        return lpTokenPrice;
    });
const farmSelector = (chainId)=>(0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__.createSelector)((state)=>state.farms, (farms)=>{
        const deserializedFarmsData = farms.data.map(deserializeFarm).filter((farm)=>farm.token.chainId === chainId);
        const { loadArchivedFarmsData , userDataLoaded , poolLength , regularCakePerBlock  } = farms;
        return {
            loadArchivedFarmsData,
            userDataLoaded,
            data: deserializedFarmsData,
            poolLength,
            regularCakePerBlock
        };
    });


/***/ }),

/***/ 50373:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Updater)
/* harmony export */ });
/* harmony import */ var _pancakeswap_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74903);
/* harmony import */ var _pancakeswap_token_lists__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36410);
/* harmony import */ var _pancakeswap_token_lists_src_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5898);
/* harmony import */ var _uniswap_token_lists__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51554);
/* harmony import */ var _uniswap_token_lists__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_uniswap_token_lists__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var config_constants_lists__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(77310);
/* harmony import */ var hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97477);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var state_lists_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(56192);
/* harmony import */ var _lists__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(92088);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_token_lists__WEBPACK_IMPORTED_MODULE_1__, hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_5__, state_lists_hooks__WEBPACK_IMPORTED_MODULE_8__, _lists__WEBPACK_IMPORTED_MODULE_9__]);
([_pancakeswap_token_lists__WEBPACK_IMPORTED_MODULE_1__, hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_5__, state_lists_hooks__WEBPACK_IMPORTED_MODULE_8__, _lists__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











function Updater() {
    const { provider  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const [, dispatch] = (0,_lists__WEBPACK_IMPORTED_MODULE_9__/* .useListState */ .n)();
    const isWindowVisible = (0,_pancakeswap_hooks__WEBPACK_IMPORTED_MODULE_0__/* .useIsWindowVisible */ .yr)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const includeListUpdater = (0,react__WEBPACK_IMPORTED_MODULE_7__.useMemo)(()=>{
        return [
            "/swap",
            "/limit-orders",
            "liquidity",
            "/add",
            "/find",
            "/remove"
        ].some((item)=>{
            return router.pathname.startsWith(item);
        });
    }, [
        router.pathname
    ]);
    // get all loaded lists, and the active urls
    const lists = (0,state_lists_hooks__WEBPACK_IMPORTED_MODULE_8__/* .useAllLists */ .R0)();
    const activeListUrls = (0,state_lists_hooks__WEBPACK_IMPORTED_MODULE_8__/* .useActiveListUrls */ .v0)();
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        dispatch((0,_pancakeswap_token_lists_src_actions__WEBPACK_IMPORTED_MODULE_2__/* .updateListVersion */ .Lr)());
    }, [
        dispatch
    ]);
    const fetchList = (0,_pancakeswap_token_lists__WEBPACK_IMPORTED_MODULE_1__/* .useFetchListCallback */ .jn)(dispatch);
    const fetchAllListsCallback = (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)(()=>{
        if (!isWindowVisible) return;
        Object.keys(lists).forEach((url)=>fetchList(url).catch((error)=>console.debug("interval list fetching error", error)));
    }, [
        fetchList,
        isWindowVisible,
        lists
    ]);
    // fetch all lists every 10 minutes, but only after we initialize library and page has currency input
    (0,_pancakeswap_hooks__WEBPACK_IMPORTED_MODULE_0__/* .useInterval */ .Yz)(fetchAllListsCallback, provider ? 1000 * 60 * 10 : null, true, includeListUpdater);
    // whenever a list is not loaded and not loading, try again to load it
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        Object.keys(lists).forEach((listUrl)=>{
            const list = lists[listUrl];
            if (!list.current && !list.loadingRequestId && !list.error) {
                fetchList(listUrl).catch((error)=>console.debug("list added fetching error", error));
            }
        });
    }, [
        fetchList,
        provider,
        lists
    ]);
    // if any lists from unsupported lists are loaded, check them too (in case new updates since last visit)
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        Object.keys(config_constants_lists__WEBPACK_IMPORTED_MODULE_4__/* .UNSUPPORTED_LIST_URLS */ .US).forEach((listUrl)=>{
            const list = lists[listUrl];
            if (!list || !list.current && !list.loadingRequestId && !list.error) {
                fetchList(listUrl).catch((error)=>console.debug("list added fetching error", error));
            }
        });
    }, [
        fetchList,
        provider,
        lists
    ]);
    // automatically update lists if versions are minor/patch
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        Object.keys(lists).forEach((listUrl)=>{
            const list = lists[listUrl];
            if (list.current && list.pendingUpdate) {
                const bump = (0,_uniswap_token_lists__WEBPACK_IMPORTED_MODULE_3__.getVersionUpgrade)(list.current.version, list.pendingUpdate.version);
                // eslint-disable-next-line default-case
                switch(bump){
                    case _uniswap_token_lists__WEBPACK_IMPORTED_MODULE_3__.VersionUpgrade.NONE:
                        throw new Error("unexpected no version bump");
                    // update any active or inactive lists
                    case _uniswap_token_lists__WEBPACK_IMPORTED_MODULE_3__.VersionUpgrade.PATCH:
                    case _uniswap_token_lists__WEBPACK_IMPORTED_MODULE_3__.VersionUpgrade.MINOR:
                    case _uniswap_token_lists__WEBPACK_IMPORTED_MODULE_3__.VersionUpgrade.MAJOR:
                        dispatch((0,_pancakeswap_token_lists_src_actions__WEBPACK_IMPORTED_MODULE_2__/* .acceptListUpdate */ .xJ)(listUrl));
                }
            }
        });
    }, [
        dispatch,
        lists,
        activeListUrls
    ]);
    return null;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9629:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ chunkArray)
/* harmony export */ });
// chunks array into chunks of maximum size
// evenly distributes items among the chunks
function chunkArray(items, maxChunkSize) {
    if (maxChunkSize < 1) throw new Error("maxChunkSize must be gte 1");
    if (items.length <= maxChunkSize) return [
        items
    ];
    const numChunks = Math.ceil(items.length / maxChunkSize);
    const chunkSize = Math.ceil(items.length / numChunks);
    return [
        ...Array(numChunks).keys()
    ].map((ix)=>items.slice(ix * chunkSize, ix * chunkSize + chunkSize));
}


/***/ }),

/***/ 18114:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "XD": () => (/* binding */ retry),
/* harmony export */   "p8": () => (/* binding */ CancelledError),
/* harmony export */   "s1": () => (/* binding */ RetryableError)
/* harmony export */ });
/* eslint-disable */ function wait(ms) {
    return new Promise((resolve)=>setTimeout(resolve, ms));
}
function waitRandom(min, max) {
    return wait(min + Math.round(Math.random() * Math.max(0, max - min)));
}
/**
 * This error is thrown if the function is cancelled before completing
 */ class CancelledError extends Error {
    constructor(){
        super("Cancelled");
    }
}
/**
 * Throw this error if the function should retry
 */ class RetryableError extends Error {
}
/**
 * Retries the function that returns the promise until the promise successfully resolves up to n retries
 * @param fn function to retry
 * @param n how many times to retry
 * @param minWait min wait between retries in ms
 * @param maxWait max wait between retries in ms
 */ function retry(fn, { n , minWait , maxWait  }) {
    let completed = false;
    let rejectCancelled;
    const promise = new Promise(async (resolve, reject)=>{
        rejectCancelled = reject;
        while(true){
            let result;
            try {
                result = await fn();
                if (!completed) {
                    resolve(result);
                    completed = true;
                }
                break;
            } catch (error) {
                console.error(error);
                if (completed) {
                    break;
                }
                if (n <= 0 || !(error instanceof RetryableError)) {
                    reject(error);
                    completed = true;
                    break;
                }
                n--;
            }
            await waitRandom(minWait, maxWait);
        }
    });
    return {
        promise,
        cancel: ()=>{
            if (completed) return;
            completed = true;
            rejectCancelled(new CancelledError());
        }
    };
} /* eslint-enable */ 


/***/ }),

/***/ 61502:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (/* binding */ Updater)
/* harmony export */ });
/* unused harmony exports activeListeningKeys, outdatedListeningKeys */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var state_block_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88770);
/* harmony import */ var hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97477);
/* harmony import */ var _hooks_useContract__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82688);
/* harmony import */ var _hooks_useDebounce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52687);
/* harmony import */ var _retry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18114);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14265);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(94692);
/* harmony import */ var _chunkArray__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9629);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([state_block_hooks__WEBPACK_IMPORTED_MODULE_2__, hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__, _hooks_useContract__WEBPACK_IMPORTED_MODULE_4__]);
([state_block_hooks__WEBPACK_IMPORTED_MODULE_2__, hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__, _hooks_useContract__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










// chunk calls so we do not exceed the gas limit
const CALL_CHUNK_SIZE = 500;
/**
 * Fetches a chunk of calls, enforcing a minimum block number constraint
 * @param multicallContract multicall contract to fetch against
 * @param chunk chunk of calls to make
 * @param minBlockNumber minimum block number of the result set
 */ async function fetchChunk(multicallContract, chunk, minBlockNumber) {
    console.debug("Fetching chunk", multicallContract, chunk, minBlockNumber);
    let resultsBlockNumber;
    let returnData;
    try {
        // prettier-ignore
        [resultsBlockNumber, , returnData] = await multicallContract.callStatic.tryBlockAndAggregate(false, chunk.map((obj)=>({
                callData: obj.callData,
                target: obj.address
            })), {
            blockTag: minBlockNumber
        });
    } catch (err) {
        const error = err;
        if (error.code === -32000 || error?.data?.message && error?.data?.message?.indexOf("header not found") !== -1 || error.message?.indexOf("header not found") !== -1) {
            throw new _retry__WEBPACK_IMPORTED_MODULE_6__/* .RetryableError */ .s1(`header not found for block number ${minBlockNumber}`);
        } else if (error.code === -32603 || error.message?.indexOf("execution ran out of gas") !== -1) {
            if (chunk.length > 1) {
                if (false) {}
                const half = Math.floor(chunk.length / 2);
                const [c0, c1] = await Promise.all([
                    fetchChunk(multicallContract, chunk.slice(0, half), minBlockNumber),
                    fetchChunk(multicallContract, chunk.slice(half, chunk.length), minBlockNumber), 
                ]);
                return {
                    results: c0.results.concat(c1.results),
                    blockNumber: c1.blockNumber
                };
            }
        }
        console.debug("Failed to fetch chunk inside retry", error);
        throw error;
    }
    if (resultsBlockNumber?.toNumber() < minBlockNumber) {
        console.debug(`Fetched results for old block number: ${resultsBlockNumber.toString()} vs. ${minBlockNumber}`);
    }
    return {
        results: returnData,
        blockNumber: resultsBlockNumber?.toNumber()
    };
}
/**
 * From the current all listeners state, return each call key mapped to the
 * minimum number of blocks per fetch. This is how often each key must be fetched.
 * @param allListeners the all listeners state
 * @param chainId the current chain id
 */ function activeListeningKeys(allListeners, chainId) {
    if (!allListeners || !chainId) return {};
    const listeners = allListeners[chainId];
    if (!listeners) return {};
    return Object.keys(listeners).reduce((memo, callKey)=>{
        const keyListeners = listeners[callKey];
        memo[callKey] = Object.keys(keyListeners).filter((key)=>{
            const blocksPerFetch = parseInt(key);
            if (blocksPerFetch <= 0) return false;
            return keyListeners[blocksPerFetch] > 0;
        }).reduce((previousMin, current)=>{
            return Math.min(previousMin, parseInt(current));
        }, Infinity);
        return memo;
    }, {});
}
/**
 * Return the keys that need to be refetched
 * @param callResults current call result state
 * @param listeningKeys each call key mapped to how old the data can be in blocks
 * @param chainId the current chain id
 * @param currentBlock the latest block number
 */ function outdatedListeningKeys(callResults, listeningKeys, chainId, currentBlock) {
    if (!chainId || !currentBlock) return [];
    const results = callResults[chainId];
    // no results at all, load everything
    if (!results) return Object.keys(listeningKeys);
    return Object.keys(listeningKeys).filter((callKey)=>{
        const blocksPerFetch = listeningKeys[callKey];
        const data = callResults[chainId][callKey];
        // no data, must fetch
        if (!data) return true;
        const minDataBlockNumber = currentBlock - (blocksPerFetch - 1);
        // already fetching it for a recent enough block, don't refetch it
        if (data.fetchingBlockNumber && data.fetchingBlockNumber >= minDataBlockNumber) return false;
        // if data is older than minDataBlockNumber, fetch it
        return !data.blockNumber || data.blockNumber < minDataBlockNumber;
    });
}
function Updater() {
    const dispatch = (0,_index__WEBPACK_IMPORTED_MODULE_7__/* .useAppDispatch */ .TL)();
    const state = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((s)=>s.multicall);
    // wait for listeners to settle before triggering updates
    const debouncedListeners = (0,_hooks_useDebounce__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(state.callListeners, 100);
    const currentBlock = (0,state_block_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useCurrentBlock */ .je)();
    const { chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const multicallContract = (0,_hooks_useContract__WEBPACK_IMPORTED_MODULE_4__/* .useMulticallContract */ .gq)();
    const cancellations = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    const listeningKeys = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        return activeListeningKeys(debouncedListeners, chainId);
    }, [
        debouncedListeners,
        chainId
    ]);
    const unserializedOutdatedCallKeys = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        return outdatedListeningKeys(state.callResults, listeningKeys, chainId, currentBlock);
    }, [
        chainId,
        state.callResults,
        listeningKeys,
        currentBlock
    ]);
    const serializedOutdatedCallKeys = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>JSON.stringify(unserializedOutdatedCallKeys.sort()), [
        unserializedOutdatedCallKeys
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!currentBlock || !chainId || !multicallContract) return;
        const outdatedCallKeys = JSON.parse(serializedOutdatedCallKeys);
        if (outdatedCallKeys.length === 0) return;
        const calls = outdatedCallKeys.map((key)=>(0,_actions__WEBPACK_IMPORTED_MODULE_8__/* .parseCallKey */ .gl)(key));
        const chunkedCalls = (0,_chunkArray__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(calls, CALL_CHUNK_SIZE);
        if (cancellations.current?.blockNumber !== currentBlock) {
            cancellations.current?.cancellations?.forEach((c)=>c());
        }
        dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_8__/* .fetchingMulticallResults */ .nu)({
            calls,
            chainId,
            fetchingBlockNumber: currentBlock
        }));
        cancellations.current = {
            blockNumber: currentBlock,
            cancellations: chunkedCalls.map((chunk, index)=>{
                const { cancel , promise  } = (0,_retry__WEBPACK_IMPORTED_MODULE_6__/* .retry */ .XD)(()=>fetchChunk(multicallContract, chunk, currentBlock), {
                    n: Infinity,
                    minWait: 2500,
                    maxWait: 3500
                });
                promise.then(({ results: returnData , blockNumber: fetchBlockNumber  })=>{
                    cancellations.current = {
                        cancellations: [],
                        blockNumber: currentBlock
                    };
                    // accumulates the length of all previous indices
                    const firstCallKeyIndex = chunkedCalls.slice(0, index).reduce((memo, curr)=>memo + curr.length, 0);
                    const lastCallKeyIndex = firstCallKeyIndex + returnData.length;
                    const { erroredCalls , results  } = outdatedCallKeys.slice(firstCallKeyIndex, lastCallKeyIndex).reduce((memo, callKey, i)=>{
                        if (returnData[i].success) {
                            memo.results[callKey] = returnData[i].returnData ?? null;
                        } else {
                            memo.erroredCalls.push((0,_actions__WEBPACK_IMPORTED_MODULE_8__/* .parseCallKey */ .gl)(callKey));
                        }
                        return memo;
                    }, {
                        erroredCalls: [],
                        results: {}
                    });
                    if (Object.keys(results).length > 0) {
                        dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_8__/* .updateMulticallResults */ .zT)({
                            chainId,
                            results,
                            blockNumber: fetchBlockNumber
                        }));
                    }
                    if (erroredCalls.length > 0) {
                        dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_8__/* .errorFetchingMulticallResults */ .wC)({
                            calls: erroredCalls,
                            chainId,
                            fetchingBlockNumber: fetchBlockNumber
                        }));
                    }
                }).catch((error)=>{
                    if (error instanceof _retry__WEBPACK_IMPORTED_MODULE_6__/* .CancelledError */ .p8) {
                        console.debug("Cancelled fetch for blockNumber", currentBlock);
                        return;
                    }
                    console.error("Failed to fetch multicall chunk", chunk, chainId, error, currentBlock);
                    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_8__/* .errorFetchingMulticallResults */ .wC)({
                        calls: chunk,
                        chainId,
                        fetchingBlockNumber: currentBlock
                    }));
                });
                return cancel;
            })
        };
    }, [
        chainId,
        multicallContract,
        dispatch,
        serializedOutdatedCallKeys,
        currentBlock
    ]);
    return null;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 16008:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "HD": () => (/* binding */ combineApiAndSgResponseToNftToken),
  "nh": () => (/* binding */ fetchNftsFiltered),
  "LU": () => (/* binding */ getAllPancakeBunniesLowestPrice),
  "nP": () => (/* binding */ getAllPancakeBunniesRecentUpdatedAt),
  "_N": () => (/* binding */ getCollection),
  "Du": () => (/* binding */ getCollectionActivity),
  "iE": () => (/* binding */ getCollectionDistributionApi),
  "bG": () => (/* binding */ getCollections),
  "A8": () => (/* binding */ getCompleteAccountNftData),
  "dk": () => (/* binding */ getLatestListedNfts),
  "Um": () => (/* binding */ getLeastMostPriceInCollection),
  "Z1": () => (/* binding */ getMarketDataForTokenIds),
  "M2": () => (/* binding */ getMetadataWithFallback),
  "hb": () => (/* binding */ getNftApi),
  "Rq": () => (/* binding */ getNftsFromCollectionApi),
  "_C": () => (/* binding */ getNftsFromDifferentCollectionsApi),
  "T5": () => (/* binding */ getNftsMarketData),
  "DS": () => (/* binding */ getNftsOnChainMarketData),
  "tU": () => (/* binding */ getNftsUpdatedMarketData),
  "rD": () => (/* binding */ getPancakeBunniesAttributesField),
  "AC": () => (/* binding */ getTokenActivity),
  "_z": () => (/* binding */ getUserActivity)
});

// UNUSED EXPORTS: attachMarketDataToWalletNfts, combineCollectionData, combineNftMarketAndMetadata, fetchWalletTokenIdsForCollections, getAccountNftsOnChainMarketData, getCollectionApi, getCollectionSg, getCollectionsApi, getCollectionsSg, getNftLocationForMarketNft, getNftsByBunnyIdSg, getNftsFromCollectionSg

// EXTERNAL MODULE: external "graphql-request"
var external_graphql_request_ = __webpack_require__(5805);
// EXTERNAL MODULE: external "querystring"
var external_querystring_ = __webpack_require__(59819);
// EXTERNAL MODULE: ./src/config/constants/endpoints.ts
var endpoints = __webpack_require__(6680);
// EXTERNAL MODULE: ./src/utils/multicall.ts
var multicall = __webpack_require__(9796);
// EXTERNAL MODULE: ./src/config/abi/erc721.json
var erc721 = __webpack_require__(53400);
// EXTERNAL MODULE: external "lodash/range"
var range_ = __webpack_require__(64042);
var range_default = /*#__PURE__*/__webpack_require__.n(range_);
// EXTERNAL MODULE: external "lodash/groupBy"
var groupBy_ = __webpack_require__(98492);
var groupBy_default = /*#__PURE__*/__webpack_require__.n(groupBy_);
// EXTERNAL MODULE: ./src/utils/contractHelpers.ts + 26 modules
var contractHelpers = __webpack_require__(86192);
// EXTERNAL MODULE: ./src/config/constants/index.ts
var constants = __webpack_require__(42918);
// EXTERNAL MODULE: ./src/config/constants/nftsCollections/delist.ts
var delist = __webpack_require__(48746);
// EXTERNAL MODULE: ./src/views/Nft/market/constants.ts
var market_constants = __webpack_require__(30723);
// EXTERNAL MODULE: ./src/utils/formatBalance.ts
var formatBalance = __webpack_require__(59123);
// EXTERNAL MODULE: ./src/utils/addressHelpers.ts
var addressHelpers = __webpack_require__(69352);
// EXTERNAL MODULE: ./src/config/abi/nftMarket.json
var nftMarket = __webpack_require__(60290);
// EXTERNAL MODULE: external "lodash/fromPairs"
var fromPairs_ = __webpack_require__(57626);
var fromPairs_default = /*#__PURE__*/__webpack_require__.n(fromPairs_);
// EXTERNAL MODULE: ./src/state/nftMarket/types.ts
var types = __webpack_require__(91186);
;// CONCATENATED MODULE: ./src/state/nftMarket/queries.ts
const queries_baseNftFields = `
  tokenId
  metadataUrl
  currentAskPrice
  currentSeller
  latestTradedPriceInBNB
  tradeVolumeBNB
  totalTrades
  isTradable
  updatedAt
  otherId
  collection {
    id
  }
`;
const baseTransactionFields = `
  id
  block
  timestamp
  askPrice
  netPrice
  withBNB
  buyer {
    id
  }
  seller {
    id
  }
`;
const collectionBaseFields = `
  id
  name
  symbol
  active
  totalTrades
  totalVolumeBNB
  numberTokensListed
  creatorAddress
  tradingFee
  creatorFee
  whitelistChecker
`;

;// CONCATENATED MODULE: ./src/state/nftMarket/helpers.ts

















/**
 * API HELPERS
 */ /**
 * Fetch static data from all collections using the API
 * @returns
 */ const getCollectionsApi = async ()=>{
    const res = await fetch(`${endpoints/* API_NFT */.C1}/collections`);
    if (res.ok) {
        const json = await res.json();
        return json;
    }
    console.error("Failed to fetch NFT collections", res.statusText);
    return null;
};
const fetchCollectionsTotalSupply = async (collections)=>{
    const totalSupplyCalls = collections.filter((collection)=>collection?.address).map((collection)=>({
            address: collection.address.toLowerCase(),
            name: "totalSupply"
        }));
    if (totalSupplyCalls.length > 0) {
        const totalSupplyRaw = await (0,multicall/* multicallv2 */.v)({
            abi: erc721,
            calls: totalSupplyCalls,
            options: {
                requireSuccess: false
            }
        });
        const totalSupply = totalSupplyRaw.flat();
        return totalSupply.map((totalCount)=>totalCount ? totalCount.toNumber() : 0);
    }
    return [];
};
/**
 * Fetch all collections data by combining data from the API (static metadata) and the Subgraph (dynamic market data)
 */ const getCollections = async ()=>{
    try {
        const [collections, collectionsMarket] = await Promise.all([
            getCollectionsApi(),
            getCollectionsSg()
        ]);
        const collectionApiData = collections?.data ?? [];
        const collectionsTotalSupply = await fetchCollectionsTotalSupply(collectionApiData);
        const collectionApiDataCombinedOnChain = collectionApiData.map((collection, index)=>{
            const totalSupplyFromApi = Number(collection?.totalSupply) || 0;
            const totalSupplyFromOnChain = collectionsTotalSupply[index];
            return {
                ...collection,
                totalSupply: Math.max(totalSupplyFromApi, totalSupplyFromOnChain).toString()
            };
        });
        return combineCollectionData(collectionApiDataCombinedOnChain, collectionsMarket);
    } catch (error) {
        console.error("Unable to fetch data:", error);
        return null;
    }
};
/**
 * Fetch collection data by combining data from the API (static metadata) and the Subgraph (dynamic market data)
 */ const getCollection = async (collectionAddress)=>{
    try {
        const [collection, collectionMarket] = await Promise.all([
            getCollectionApi(collectionAddress),
            getCollectionSg(collectionAddress), 
        ]);
        const collectionsTotalSupply = await fetchCollectionsTotalSupply([
            collection
        ]);
        const totalSupplyFromApi = Number(collection?.totalSupply) || 0;
        const totalSupplyFromOnChain = collectionsTotalSupply[0];
        const collectionApiDataCombinedOnChain = {
            ...collection,
            totalSupply: Math.max(totalSupplyFromApi, totalSupplyFromOnChain).toString()
        };
        return combineCollectionData([
            collectionApiDataCombinedOnChain
        ], [
            collectionMarket
        ]);
    } catch (error) {
        console.error("Unable to fetch data:", error);
        return null;
    }
};
/**
 * Fetch static data from a collection using the API
 * @returns
 */ const getCollectionApi = async (collectionAddress)=>{
    const res = await fetch(`${endpoints/* API_NFT */.C1}/collections/${collectionAddress}`);
    if (res.ok) {
        const json = await res.json();
        return json.data;
    }
    console.error(`API: Failed to fetch NFT collection ${collectionAddress}`, res.statusText);
    return null;
};
/**
 * Fetch static data for all nfts in a collection using the API
 * @param collectionAddress
 * @param size
 * @param page
 * @returns
 */ const getNftsFromCollectionApi = async (collectionAddress, size = 100, page = 1)=>{
    const isPBCollection = collectionAddress.toLowerCase() === market_constants/* pancakeBunniesAddress.toLowerCase */.J.toLowerCase();
    const requestPath = `${endpoints/* API_NFT */.C1}/collections/${collectionAddress}/tokens${!isPBCollection ? `?page=${page}&size=${size}` : ``}`;
    try {
        const res = await fetch(requestPath);
        if (res.ok) {
            const data = await res.json();
            const filteredAttributesDistribution = Object.entries(data.attributesDistribution).filter(([, value])=>Boolean(value));
            const filteredData = Object.entries(data.data).filter(([, value])=>Boolean(value));
            const filteredTotal = filteredData.length;
            return {
                ...data,
                total: filteredTotal,
                attributesDistribution: fromPairs_default()(filteredAttributesDistribution),
                data: fromPairs_default()(filteredData)
            };
        }
        console.error(`API: Failed to fetch NFT tokens for ${collectionAddress} collection`, res.statusText);
        return null;
    } catch (error) {
        console.error(`API: Failed to fetch NFT tokens for ${collectionAddress} collection`, error);
        return null;
    }
};
/**
 * Fetch a single NFT using the API
 * @param collectionAddress
 * @param tokenId
 * @returns NFT from API
 */ const getNftApi = async (collectionAddress, tokenId)=>{
    const res = await fetch(`${endpoints/* API_NFT */.C1}/collections/${collectionAddress}/tokens/${tokenId}`);
    if (res.ok) {
        const json = await res.json();
        return json.data;
    }
    console.error(`API: Can't fetch NFT token ${tokenId} in ${collectionAddress}`, res.status);
    return null;
};
/**
 * Fetch a list of NFT from different collections
 * @param from Array of { collectionAddress: string; tokenId: string }
 * @returns Array of NFT from API
 */ const getNftsFromDifferentCollectionsApi = async (from)=>{
    const promises = from.map((nft)=>getNftApi(nft.collectionAddress, nft.tokenId));
    const responses = await Promise.all(promises);
    // Sometimes API can't find some tokens (e.g. 404 response)
    // at least return the ones that returned successfully
    return responses.filter((resp)=>resp).map((res, index)=>({
            tokenId: res.tokenId,
            name: res.name,
            collectionName: res.collection.name,
            collectionAddress: from[index].collectionAddress,
            description: res.description,
            attributes: res.attributes,
            createdAt: res.createdAt,
            updatedAt: res.updatedAt,
            image: res.image
        }));
};
/**
 * SUBGRAPH HELPERS
 */ /**
 * Fetch market data from a collection using the Subgraph
 * @returns
 */ const getCollectionSg = async (collectionAddress)=>{
    try {
        const res = await (0,external_graphql_request_.request)(endpoints/* GRAPH_API_NFTMARKET */.Bd, external_graphql_request_.gql`
        query getCollectionData($collectionAddress: String!) {
          collection(id: $collectionAddress) {
            ${collectionBaseFields}
          }
        }
      `, {
            collectionAddress: collectionAddress.toLowerCase()
        });
        return res.collection;
    } catch (error) {
        console.error("Failed to fetch collection", error);
        return null;
    }
};
/**
 * Fetch market data from all collections using the Subgraph
 * @returns
 */ const getCollectionsSg = async ()=>{
    try {
        const res = await (0,external_graphql_request_.request)(endpoints/* GRAPH_API_NFTMARKET */.Bd, external_graphql_request_.gql`
        {
          collections {
            ${collectionBaseFields}
          }
        }
      `);
        return res.collections;
    } catch (error) {
        console.error("Failed to fetch NFT collections", error);
        return [];
    }
};
/**
 * Fetch market data for nfts in a collection using the Subgraph
 * @param collectionAddress
 * @param first
 * @param skip
 * @returns
 */ const getNftsFromCollectionSg = async (collectionAddress, first = 1000, skip = 0)=>{
    // Squad to be sorted by tokenId as this matches the order of the paginated API return. For PBs - get the most recent,
    const isPBCollection = collectionAddress.toLowerCase() === pancakeBunniesAddress.toLowerCase();
    try {
        const res = await request(GRAPH_API_NFTMARKET, gql`
        query getNftCollectionMarketData($collectionAddress: String!) {
          collection(id: $collectionAddress) {
            id
            nfts(orderBy:${isPBCollection ? "updatedAt" : "tokenId"}, skip: $skip, first: $first) {
             ${baseNftFields}
            }
          }
        }
      `, {
            collectionAddress: collectionAddress.toLowerCase(),
            skip,
            first
        });
        return res.collection.nfts;
    } catch (error) {
        console.error("Failed to fetch NFTs from collection", error);
        return [];
    }
};
/**
 * Fetch market data for PancakeBunnies NFTs by bunny id using the Subgraph
 * @param bunnyId - bunny id to query
 * @param existingTokenIds - tokens that are already loaded into redux
 * @returns
 */ const getNftsByBunnyIdSg = async (bunnyId, existingTokenIds, orderDirection)=>{
    try {
        const where = existingTokenIds.length > 0 ? {
            otherId: bunnyId,
            isTradable: true,
            tokenId_not_in: existingTokenIds
        } : {
            otherId: bunnyId,
            isTradable: true
        };
        const res = await request(GRAPH_API_NFTMARKET, gql`
        query getNftsByBunnyIdSg($collectionAddress: String!, $where: NFT_filter, $orderDirection: String!) {
          nfts(first: 30, where: $where, orderBy: currentAskPrice, orderDirection: $orderDirection) {
            ${baseNftFields}
          }
        }
      `, {
            collectionAddress: pancakeBunniesAddress.toLowerCase(),
            where,
            orderDirection
        });
        return res.nfts;
    } catch (error) {
        console.error(`Failed to fetch collection NFTs for bunny id ${bunnyId}`, error);
        return [];
    }
};
/**
 * Fetch market data for PancakeBunnies NFTs by bunny id using the Subgraph
 * @param bunnyId - bunny id to query
 * @param existingTokenIds - tokens that are already loaded into redux
 * @returns
 */ const getMarketDataForTokenIds = async (collectionAddress, existingTokenIds)=>{
    try {
        if (existingTokenIds.length === 0) {
            return [];
        }
        const res = await (0,external_graphql_request_.request)(endpoints/* GRAPH_API_NFTMARKET */.Bd, external_graphql_request_.gql`
        query getMarketDataForTokenIds($collectionAddress: String!, $where: NFT_filter) {
          collection(id: $collectionAddress) {
            id
            nfts(first: 1000, where: $where) {
              ${queries_baseNftFields}
            }
          }
        }
      `, {
            collectionAddress: collectionAddress.toLowerCase(),
            where: {
                tokenId_in: existingTokenIds
            }
        });
        return res.collection.nfts;
    } catch (error) {
        console.error(`Failed to fetch market data for NFTs stored tokens`, error);
        return [];
    }
};
const getNftsOnChainMarketData = async (collectionAddress, tokenIds)=>{
    try {
        const nftMarketContract = (0,contractHelpers/* getNftMarketContract */.X$)();
        const response = await nftMarketContract.viewAsksByCollectionAndTokenIds(collectionAddress.toLowerCase(), tokenIds);
        const askInfo = response?.askInfo;
        if (!askInfo) return [];
        return askInfo.map((tokenAskInfo, index)=>{
            if (!tokenAskInfo.seller || !tokenAskInfo.price) return null;
            const currentSeller = tokenAskInfo.seller;
            const isTradable = currentSeller.toLowerCase() !== constants/* NOT_ON_SALE_SELLER */.Vc;
            const currentAskPrice = tokenAskInfo.price && (0,formatBalance/* formatBigNumber */.dp)(tokenAskInfo.price);
            return {
                collection: {
                    id: collectionAddress.toLowerCase()
                },
                tokenId: tokenIds[index],
                currentSeller,
                isTradable,
                currentAskPrice
            };
        }).filter(Boolean);
    } catch (error) {
        console.error("Failed to fetch NFTs onchain market data", error);
        return [];
    }
};
const getNftsUpdatedMarketData = async (collectionAddress, tokenIds)=>{
    try {
        const nftMarketContract = (0,contractHelpers/* getNftMarketContract */.X$)();
        const response = await nftMarketContract.viewAsksByCollectionAndTokenIds(collectionAddress.toLowerCase(), tokenIds);
        const askInfo = response?.askInfo;
        if (!askInfo) return null;
        return askInfo.map((tokenAskInfo, index)=>{
            const isTradable = tokenAskInfo.seller ? tokenAskInfo.seller.toLowerCase() !== constants/* NOT_ON_SALE_SELLER */.Vc : false;
            return {
                tokenId: tokenIds[index],
                currentSeller: tokenAskInfo.seller,
                isTradable,
                currentAskPrice: tokenAskInfo.price
            };
        });
    } catch (error) {
        console.error("Failed to fetch updated NFT market data", error);
        return null;
    }
};
const getAccountNftsOnChainMarketData = async (collections, account)=>{
    try {
        const nftMarketAddress = (0,addressHelpers/* getNftMarketAddress */.D4)();
        const collectionList = Object.values(collections);
        const askCalls = collectionList.map((collection)=>{
            const { address: collectionAddress  } = collection;
            return {
                address: nftMarketAddress,
                name: "viewAsksByCollectionAndSeller",
                params: [
                    collectionAddress,
                    account,
                    0,
                    1000
                ]
            };
        });
        const askCallsResultsRaw = await (0,multicall/* multicallv2 */.v)({
            abi: nftMarket,
            calls: askCalls,
            options: {
                requireSuccess: false
            }
        });
        const askCallsResults = askCallsResultsRaw.map((askCallsResultRaw, askCallIndex)=>{
            if (!askCallsResultRaw?.tokenIds || !askCallsResultRaw?.askInfo || !collectionList[askCallIndex]?.address) return null;
            return askCallsResultRaw.tokenIds.map((tokenId, tokenIdIndex)=>{
                if (!tokenId || !askCallsResultRaw.askInfo[tokenIdIndex] || !askCallsResultRaw.askInfo[tokenIdIndex].price) return null;
                const currentAskPrice = (0,formatBalance/* formatBigNumber */.dp)(askCallsResultRaw.askInfo[tokenIdIndex].price);
                return {
                    collection: {
                        id: collectionList[askCallIndex].address.toLowerCase()
                    },
                    tokenId: tokenId.toString(),
                    account,
                    isTradable: true,
                    currentAskPrice
                };
            }).filter(Boolean);
        }).flat().filter(Boolean);
        return askCallsResults;
    } catch (error) {
        console.error("Failed to fetch NFTs onchain market data", error);
        return [];
    }
};
const getNftsMarketData = async (where = {}, first = 1000, orderBy = "id", orderDirection = "desc", skip = 0)=>{
    try {
        const res = await (0,external_graphql_request_.request)(endpoints/* GRAPH_API_NFTMARKET */.Bd, external_graphql_request_.gql`
        query getNftsMarketData($first: Int, $skip: Int!, $where: NFT_filter, $orderBy: NFT_orderBy, $orderDirection: OrderDirection) {
          nfts(where: $where, first: $first, orderBy: $orderBy, orderDirection: $orderDirection, skip: $skip) {
            ${queries_baseNftFields}
            transactionHistory {
              ${baseTransactionFields}
            }
          }
        }
      `, {
            where,
            first,
            skip,
            orderBy,
            orderDirection
        });
        return res.nfts;
    } catch (error) {
        console.error("Failed to fetch NFTs market data", error);
        return [];
    }
};
const getAllPancakeBunniesLowestPrice = async (bunnyIds)=>{
    try {
        const singlePancakeBunnySubQueries = bunnyIds.map((bunnyId)=>`b${bunnyId}:nfts(first: 1, where: { otherId: ${bunnyId}, isTradable: true }, orderBy: currentAskPrice, orderDirection: asc) {
        currentAskPrice
      }
    `);
        const rawResponse = await (0,external_graphql_request_.request)(endpoints/* GRAPH_API_NFTMARKET */.Bd, external_graphql_request_.gql`
        query getAllPancakeBunniesLowestPrice {
          ${singlePancakeBunnySubQueries}
        }
      `);
        return fromPairs_default()(Object.keys(rawResponse).map((subQueryKey)=>{
            const bunnyId = subQueryKey.split("b")[1];
            return [
                bunnyId,
                rawResponse[subQueryKey].length > 0 ? parseFloat(rawResponse[subQueryKey][0].currentAskPrice) : Infinity, 
            ];
        }));
    } catch (error) {
        console.error("Failed to fetch PancakeBunnies lowest prices", error);
        return {};
    }
};
const getAllPancakeBunniesRecentUpdatedAt = async (bunnyIds)=>{
    try {
        const singlePancakeBunnySubQueries = bunnyIds.map((bunnyId)=>`b${bunnyId}:nfts(first: 1, where: { otherId: ${bunnyId}, isTradable: true }, orderBy: updatedAt, orderDirection: desc) {
        updatedAt
      }
    `);
        const rawResponse = await (0,external_graphql_request_.request)(endpoints/* GRAPH_API_NFTMARKET */.Bd, external_graphql_request_.gql`
        query getAllPancakeBunniesLowestPrice {
          ${singlePancakeBunnySubQueries}
        }
      `);
        return fromPairs_default()(Object.keys(rawResponse).map((subQueryKey)=>{
            const bunnyId = subQueryKey.split("b")[1];
            return [
                bunnyId,
                rawResponse[subQueryKey].length > 0 ? Number(rawResponse[subQueryKey][0].updatedAt) : -Infinity, 
            ];
        }));
    } catch (error) {
        console.error("Failed to fetch PancakeBunnies latest market updates", error);
        return {};
    }
};
/**
 * Returns the lowest/highest price of any NFT in a collection
 */ const getLeastMostPriceInCollection = async (collectionAddress, orderDirection = "asc")=>{
    try {
        const response = await getNftsMarketData({
            collection: collectionAddress.toLowerCase(),
            isTradable: true
        }, 1, "currentAskPrice", orderDirection);
        if (response.length === 0) {
            return 0;
        }
        const [nftSg] = response;
        return parseFloat(nftSg.currentAskPrice);
    } catch (error) {
        console.error(`Failed to lowest price NFTs in collection ${collectionAddress}`, error);
        return 0;
    }
};
/**
 * Fetch user trading data for buyTradeHistory, sellTradeHistory and askOrderHistory from the Subgraph
 * @param where a User_filter where condition
 * @returns a UserActivity object
 */ const getUserActivity = async (address)=>{
    try {
        const res = await (0,external_graphql_request_.request)(endpoints/* GRAPH_API_NFTMARKET */.Bd, external_graphql_request_.gql`
        query getUserActivity($address: String!) {
          user(id: $address) {
            buyTradeHistory(first: 250, orderBy: timestamp, orderDirection: desc) {
              ${baseTransactionFields}
              nft {
                ${queries_baseNftFields}
              }
            }
            sellTradeHistory(first: 250, orderBy: timestamp, orderDirection: desc) {
              ${baseTransactionFields}
              nft {
                ${queries_baseNftFields}
              }
            }
            askOrderHistory(first: 500, orderBy: timestamp, orderDirection: desc) {
              id
              block
              timestamp
              orderType
              askPrice
              nft {
                ${queries_baseNftFields}
              }
            }
          }
        }
      `, {
            address
        });
        return res.user || {
            askOrderHistory: [],
            buyTradeHistory: [],
            sellTradeHistory: []
        };
    } catch (error) {
        console.error("Failed to fetch user Activity", error);
        return {
            askOrderHistory: [],
            buyTradeHistory: [],
            sellTradeHistory: []
        };
    }
};
const getCollectionActivity = async (address, nftActivityFilter, itemPerQuery)=>{
    const getAskOrderEvent = (orderType)=>{
        switch(orderType){
            case types/* MarketEvent.CANCEL */.YG.CANCEL:
                return types/* AskOrderType.CANCEL */.cP.CANCEL;
            case types/* MarketEvent.MODIFY */.YG.MODIFY:
                return types/* AskOrderType.MODIFY */.cP.MODIFY;
            case types/* MarketEvent.NEW */.YG.NEW:
                return types/* AskOrderType.NEW */.cP.NEW;
            default:
                return types/* AskOrderType.MODIFY */.cP.MODIFY;
        }
    };
    const isFetchAllCollections = address === "";
    const hasCollectionFilter = nftActivityFilter.collectionFilters.length > 0;
    const collectionFilterGql = !isFetchAllCollections ? `collection: ${JSON.stringify(address)}` : hasCollectionFilter ? `collection_in: ${JSON.stringify(nftActivityFilter.collectionFilters)}` : ``;
    const askOrderTypeFilter = nftActivityFilter.typeFilters.filter((marketEvent)=>marketEvent !== types/* MarketEvent.SELL */.YG.SELL).map((marketEvent)=>getAskOrderEvent(marketEvent));
    const askOrderIncluded = nftActivityFilter.typeFilters.length === 0 || askOrderTypeFilter.length > 0;
    const askOrderTypeFilterGql = askOrderTypeFilter.length > 0 ? `orderType_in: ${JSON.stringify(askOrderTypeFilter)}` : ``;
    const transactionIncluded = nftActivityFilter.typeFilters.length === 0 || nftActivityFilter.typeFilters.some((marketEvent)=>marketEvent === types/* MarketEvent.BUY */.YG.BUY || marketEvent === types/* MarketEvent.SELL */.YG.SELL);
    let askOrderQueryItem = itemPerQuery / 2;
    let transactionQueryItem = itemPerQuery / 2;
    if (!askOrderIncluded || !transactionIncluded) {
        askOrderQueryItem = !askOrderIncluded ? 0 : itemPerQuery;
        transactionQueryItem = !transactionIncluded ? 0 : itemPerQuery;
    }
    const askOrderGql = askOrderIncluded ? `askOrders(first: ${askOrderQueryItem}, orderBy: timestamp, orderDirection: desc, where:{
            ${collectionFilterGql}, ${askOrderTypeFilterGql}
          }) {
              id
              block
              timestamp
              orderType
              askPrice
              seller {
                id
              }
              nft {
                ${queries_baseNftFields}
              }
          }` : ``;
    const transactionGql = transactionIncluded ? `transactions(first: ${transactionQueryItem}, orderBy: timestamp, orderDirection: desc, where:{
            ${collectionFilterGql}
          }) {
            ${baseTransactionFields}
              nft {
                ${queries_baseNftFields}
              }
          }` : ``;
    try {
        const res = await (0,external_graphql_request_.request)(endpoints/* GRAPH_API_NFTMARKET */.Bd, external_graphql_request_.gql`
        query getCollectionActivity {
          ${askOrderGql}
          ${transactionGql}
        }
      `);
        return res || {
            askOrders: [],
            transactions: []
        };
    } catch (error) {
        console.error("Failed to fetch collection Activity", error);
        return {
            askOrders: [],
            transactions: []
        };
    }
};
const getTokenActivity = async (tokenId, collectionAddress)=>{
    try {
        const res = await (0,external_graphql_request_.request)(endpoints/* GRAPH_API_NFTMARKET */.Bd, external_graphql_request_.gql`
        query getCollectionActivity($tokenId: BigInt!, $address: ID!) {
          nfts(where:{tokenId: $tokenId, collection: $address}) {
            transactionHistory(orderBy: timestamp, orderDirection: desc) {
              ${baseTransactionFields}
                nft {
                  ${queries_baseNftFields}
                }
            }
            askHistory(orderBy: timestamp, orderDirection: desc) {
                id
                block
                timestamp
                orderType
                askPrice
                seller {
                  id
                }
                nft {
                  ${queries_baseNftFields}
                }
            }
          }
        }
      `, {
            tokenId,
            address: collectionAddress
        });
        if (res.nfts.length > 0) {
            return {
                askOrders: res.nfts[0].askHistory,
                transactions: res.nfts[0].transactionHistory
            };
        }
        return {
            askOrders: [],
            transactions: []
        };
    } catch (error) {
        console.error("Failed to fetch token Activity", error);
        return {
            askOrders: [],
            transactions: []
        };
    }
};
/**
 * Get the most recently listed NFTs
 * @param first Number of nfts to retrieve
 * @returns NftTokenSg[]
 */ const getLatestListedNfts = async (first)=>{
    try {
        const res = await (0,external_graphql_request_.request)(endpoints/* GRAPH_API_NFTMARKET */.Bd, external_graphql_request_.gql`
        query getLatestNftMarketData($first: Int) {
          nfts(where: { isTradable: true }, orderBy: updatedAt , orderDirection: desc, first: $first) {
            ${queries_baseNftFields}
            collection {
              id
            }
          }
        }
      `, {
            first
        });
        return res.nfts;
    } catch (error) {
        console.error("Failed to fetch NFTs market data", error);
        return [];
    }
};
/**
 * Filter NFTs from a collection
 * @param collectionAddress
 * @returns
 */ const fetchNftsFiltered = async (collectionAddress, filters)=>{
    const res = await fetch(`${endpoints/* API_NFT */.C1}/collections/${collectionAddress}/filter?${(0,external_querystring_.stringify)(filters)}`);
    if (res.ok) {
        const data = await res.json();
        return data;
    }
    console.error(`API: Failed to fetch NFT collection ${collectionAddress}`, res.statusText);
    return null;
};
/**
 * OTHER HELPERS
 */ const getMetadataWithFallback = (apiMetadata, bunnyId)=>{
    // The fallback is just for the testnet where some bunnies don't exist
    return apiMetadata[bunnyId] ?? {
        name: "",
        description: "",
        collection: {
            name: "Pancake Bunnies"
        },
        image: {
            original: "",
            thumbnail: ""
        }
    };
};
const getPancakeBunniesAttributesField = (bunnyId)=>{
    // Generating attributes field that is not returned by API
    // but can be "faked" since objects are keyed with bunny id
    return [
        {
            traitType: "bunnyId",
            value: bunnyId,
            displayType: null
        }, 
    ];
};
const combineApiAndSgResponseToNftToken = (apiMetadata, marketData, attributes)=>{
    return {
        tokenId: marketData.tokenId,
        name: apiMetadata.name,
        description: apiMetadata.description,
        collectionName: apiMetadata.collection.name,
        collectionAddress: market_constants/* pancakeBunniesAddress */.J,
        image: apiMetadata.image,
        marketData,
        attributes
    };
};
const fetchWalletTokenIdsForCollections = async (account, collections)=>{
    const balanceOfCalls = Object.values(collections).map((collection)=>{
        const { address: collectionAddress  } = collection;
        return {
            address: collectionAddress,
            name: "balanceOf",
            params: [
                account
            ]
        };
    });
    const balanceOfCallsResultRaw = await (0,multicall/* multicallv2 */.v)({
        abi: erc721,
        calls: balanceOfCalls,
        options: {
            requireSuccess: false
        }
    });
    const balanceOfCallsResult = balanceOfCallsResultRaw.flat();
    const tokenIdCalls = Object.values(collections).map((collection, index)=>{
        const balanceOf = balanceOfCallsResult[index]?.toNumber() ?? 0;
        const { address: collectionAddress  } = collection;
        return range_default()(balanceOf).map((tokenIndex)=>{
            return {
                address: collectionAddress,
                name: "tokenOfOwnerByIndex",
                params: [
                    account,
                    tokenIndex
                ]
            };
        });
    }).flat();
    const tokenIdResultRaw = await (0,multicall/* multicallv2 */.v)({
        abi: erc721,
        calls: tokenIdCalls,
        options: {
            requireSuccess: false
        }
    });
    const tokenIdResult = tokenIdResultRaw.flat();
    const nftLocation = types/* NftLocation.WALLET */.Fb.WALLET;
    const walletNfts = tokenIdResult.reduce((acc, tokenIdBn, index)=>{
        if (tokenIdBn) {
            const { address: collectionAddress  } = tokenIdCalls[index];
            acc.push({
                tokenId: tokenIdBn.toString(),
                collectionAddress,
                nftLocation
            });
        }
        return acc;
    }, []);
    return walletNfts;
};
/**
 * Helper to combine data from the collections' API and subgraph
 */ const combineCollectionData = (collectionApiData, collectionSgData)=>{
    const collectionsMarketObj = fromPairs_default()(collectionSgData.map((current)=>[
            current.id,
            current
        ]));
    return fromPairs_default()(collectionApiData.filter((collection)=>collection?.address).map((current)=>{
        const collectionMarket = collectionsMarketObj[current.address.toLowerCase()];
        const collection = {
            ...current,
            ...collectionMarket
        };
        if (current.name) {
            collection.name = current.name;
        }
        return [
            current.address,
            collection
        ];
    }));
};
/**
 * Evaluate whether a market NFT is in a users wallet, their profile picture, or on sale
 * @param tokenId string
 * @param tokenIdsInWallet array of tokenIds in wallet
 * @param tokenIdsForSale array of tokenIds on sale
 * @param profileNftId Optional tokenId of users' profile picture
 * @returns NftLocation enum value
 */ const getNftLocationForMarketNft = (tokenId, tokenIdsInWallet, tokenIdsForSale, profileNftId)=>{
    if (tokenId === profileNftId) {
        return types/* NftLocation.PROFILE */.Fb.PROFILE;
    }
    if (tokenIdsForSale.includes(tokenId)) {
        return types/* NftLocation.FORSALE */.Fb.FORSALE;
    }
    if (tokenIdsInWallet.includes(tokenId)) {
        return types/* NftLocation.WALLET */.Fb.WALLET;
    }
    console.error(`Cannot determine location for tokenID ${tokenId}, defaulting to NftLocation.WALLET`);
    return types/* NftLocation.WALLET */.Fb.WALLET;
};
/**
 * Construct complete TokenMarketData entities with a users' wallet NFT ids and market data for their wallet NFTs
 * @param walletNfts TokenIdWithCollectionAddress
 * @param marketDataForWalletNfts TokenMarketData[]
 * @returns TokenMarketData[]
 */ const attachMarketDataToWalletNfts = (walletNfts, marketDataForWalletNfts)=>{
    const walletNftsWithMarketData = walletNfts.map((walletNft)=>{
        const marketData = marketDataForWalletNfts.find((marketNft)=>marketNft.tokenId === walletNft.tokenId && marketNft.collection.id.toLowerCase() === walletNft.collectionAddress.toLowerCase());
        return marketData ?? {
            tokenId: walletNft.tokenId,
            collection: {
                id: walletNft.collectionAddress.toLowerCase()
            },
            nftLocation: walletNft.nftLocation,
            metadataUrl: null,
            transactionHistory: null,
            currentSeller: null,
            isTradable: null,
            currentAskPrice: null,
            latestTradedPriceInBNB: null,
            tradeVolumeBNB: null,
            totalTrades: null,
            otherId: null
        };
    });
    return walletNftsWithMarketData;
};
/**
 * Attach TokenMarketData and location to NftToken
 * @param nftsWithMetadata NftToken[] with API metadata
 * @param nftsForSale  market data for nfts that are on sale (i.e. not in a user's wallet)
 * @param walletNfts market data for nfts in a user's wallet
 * @param tokenIdsInWallet array of token ids in user's wallet
 * @param tokenIdsForSale array of token ids of nfts that are on sale
 * @param profileNftId profile picture token id
 * @returns NFT[]
 */ const combineNftMarketAndMetadata = (nftsWithMetadata, nftsForSale, walletNfts, tokenIdsInWallet, tokenIdsForSale, profileNftId)=>{
    const completeNftData = nftsWithMetadata.map((nft)=>{
        // Get metadata object
        let marketData = nftsForSale.find((forSaleNft)=>forSaleNft.tokenId === nft.tokenId && forSaleNft.collection && forSaleNft.collection.id === nft.collectionAddress);
        if (!marketData) {
            marketData = walletNfts.find((marketNft)=>marketNft.collection && marketNft.collection.id === nft.collectionAddress && marketNft.tokenId === nft.tokenId);
        }
        const location = getNftLocationForMarketNft(nft.tokenId, tokenIdsInWallet, tokenIdsForSale, profileNftId);
        return {
            ...nft,
            marketData,
            location
        };
    });
    return completeNftData;
};
const fetchWalletMarketData = async (walletNftsByCollection)=>{
    const walletMarketDataRequests = Object.entries(walletNftsByCollection).map(async ([collectionAddress, tokenIdsWithCollectionAddress])=>{
        const tokenIdIn = tokenIdsWithCollectionAddress.map((walletNft)=>walletNft.tokenId);
        const [nftsOnChainMarketData, nftsMarketData] = await Promise.all([
            getNftsOnChainMarketData(collectionAddress.toLowerCase(), tokenIdIn),
            getNftsMarketData({
                tokenId_in: tokenIdIn,
                collection: collectionAddress.toLowerCase()
            }), 
        ]);
        return tokenIdIn.map((tokenId)=>{
            const nftMarketData = nftsMarketData.find((tokenMarketData)=>tokenMarketData.tokenId === tokenId);
            const onChainMarketData = nftsOnChainMarketData.find((onChainTokenMarketData)=>onChainTokenMarketData.tokenId === tokenId);
            if (!nftMarketData && !onChainMarketData) return null;
            return {
                ...nftMarketData,
                ...onChainMarketData
            };
        }).filter(Boolean);
    });
    const walletMarketDataResponses = await Promise.all(walletMarketDataRequests);
    return walletMarketDataResponses.flat();
};
/**
 * Get in-wallet, on-sale & profile pic NFT metadata, complete with market data for a given account
 * @param account
 * @param collections
 * @param profileNftWithCollectionAddress
 * @returns Promise<NftToken[]>
 */ const getCompleteAccountNftData = async (account, collections, profileNftWithCollectionAddress)=>{
    // Add delist collections to allow user reclaim their NFTs
    const collectionsWithDelist = {
        ...collections,
        ...delist/* default */.Z
    };
    const [walletNftIdsWithCollectionAddress, onChainForSaleNfts] = await Promise.all([
        fetchWalletTokenIdsForCollections(account, collectionsWithDelist),
        getAccountNftsOnChainMarketData(collectionsWithDelist, account), 
    ]);
    if (profileNftWithCollectionAddress?.tokenId) {
        walletNftIdsWithCollectionAddress.unshift(profileNftWithCollectionAddress);
    }
    const walletNftsByCollection = groupBy_default()(walletNftIdsWithCollectionAddress, (walletNftId)=>walletNftId.collectionAddress);
    const walletMarketData = await fetchWalletMarketData(walletNftsByCollection);
    const walletNftsWithMarketData = attachMarketDataToWalletNfts(walletNftIdsWithCollectionAddress, walletMarketData);
    const walletTokenIds = walletNftIdsWithCollectionAddress.filter((walletNft)=>{
        // Profile Pic NFT is no longer wanted in this array, hence the filter
        return profileNftWithCollectionAddress?.tokenId !== walletNft.tokenId;
    }).map((nft)=>nft.tokenId);
    const tokenIdsForSale = onChainForSaleNfts.map((nft)=>nft.tokenId);
    const forSaleNftIds = onChainForSaleNfts.map((nft)=>{
        return {
            collectionAddress: nft.collection.id,
            tokenId: nft.tokenId
        };
    });
    const metadataForAllNfts = await getNftsFromDifferentCollectionsApi([
        ...forSaleNftIds,
        ...walletNftIdsWithCollectionAddress, 
    ]);
    const completeNftData = combineNftMarketAndMetadata(metadataForAllNfts, onChainForSaleNfts, walletNftsWithMarketData, walletTokenIds, tokenIdsForSale, profileNftWithCollectionAddress?.tokenId);
    return completeNftData;
};
/**
 * Fetch distribution information for a collection
 * @returns
 */ const getCollectionDistributionApi = async (collectionAddress)=>{
    const res = await fetch(`${endpoints/* API_NFT */.C1}/collections/${collectionAddress}/distribution`);
    if (res.ok) {
        const data = await res.json();
        return data;
    }
    console.error(`API: Failed to fetch NFT collection ${collectionAddress} distribution`, res.statusText);
    return null;
};


/***/ }),

/***/ 91186:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fb": () => (/* binding */ NftLocation),
/* harmony export */   "YG": () => (/* binding */ MarketEvent),
/* harmony export */   "cP": () => (/* binding */ AskOrderType)
/* harmony export */ });
var AskOrderType;
(function(AskOrderType) {
    AskOrderType["NEW"] = "New";
    AskOrderType["MODIFY"] = "Modify";
    AskOrderType["CANCEL"] = "Cancel";
})(AskOrderType || (AskOrderType = {}));
var NftLocation;
(function(NftLocation) {
    NftLocation["FORSALE"] = "For Sale";
    NftLocation["PROFILE"] = "Profile Pic";
    NftLocation["WALLET"] = "In Wallet";
})(NftLocation || (NftLocation = {}));
var MarketEvent;
(function(MarketEvent) {
    MarketEvent["NEW"] = "NEW";
    MarketEvent["CANCEL"] = "CANCEL";
    MarketEvent["MODIFY"] = "MODIFY";
    MarketEvent["BUY"] = "BUY";
    MarketEvent["SELL"] = "SELL";
})(MarketEvent || (MarketEvent = {}));


/***/ }),

/***/ 29150:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ getProfile)
/* harmony export */ });
/* unused harmony export getUsername */
/* harmony import */ var config_abi_pancakeProfile_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92335);
/* harmony import */ var config_constants_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6680);
/* harmony import */ var state_teams_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52060);
/* harmony import */ var state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16008);
/* harmony import */ var utils_multicall__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9796);
/* harmony import */ var utils_addressHelpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69352);






const transformProfileResponse = (profileResponse)=>{
    const { 0: userId , 1: numberPoints , 2: teamId , 3: collectionAddress , 4: tokenId , 5: isActive  } = profileResponse;
    return {
        userId: userId.toNumber(),
        points: numberPoints.toNumber(),
        teamId: teamId.toNumber(),
        tokenId: tokenId.toNumber(),
        collectionAddress,
        isActive
    };
};
const getUsername = async (address)=>{
    try {
        const response = await fetch(`${config_constants_endpoints__WEBPACK_IMPORTED_MODULE_1__/* .API_PROFILE */ .dm}/api/users/${address.toLowerCase()}`);
        if (!response.ok) {
            return "";
        }
        const { username =""  } = await response.json();
        return username;
    } catch (error) {
        return "";
    }
};
const getProfile = async (address)=>{
    try {
        const profileCalls = [
            "hasRegistered",
            "getUserProfile"
        ].map((method)=>{
            return {
                address: (0,utils_addressHelpers__WEBPACK_IMPORTED_MODULE_5__/* .getPancakeProfileAddress */ .Re)(),
                name: method,
                params: [
                    address
                ]
            };
        });
        const profileCallsResult = await (0,utils_multicall__WEBPACK_IMPORTED_MODULE_4__/* .multicallv2 */ .v)({
            abi: config_abi_pancakeProfile_json__WEBPACK_IMPORTED_MODULE_0__,
            calls: profileCalls,
            options: {
                requireSuccess: false
            }
        });
        const [[hasRegistered], profileResponse] = profileCallsResult;
        if (!hasRegistered) {
            return {
                hasRegistered,
                profile: null
            };
        }
        const { userId , points , teamId , tokenId , collectionAddress , isActive  } = transformProfileResponse(profileResponse);
        const [team, username, nftRes] = await Promise.all([
            (0,state_teams_helpers__WEBPACK_IMPORTED_MODULE_2__/* .getTeam */ .V)(teamId),
            getUsername(address),
            isActive ? (0,state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_3__/* .getNftApi */ .hb)(collectionAddress, tokenId.toString()) : Promise.resolve(null), 
        ]);
        let nftToken;
        // If the profile is not active the tokenId returns 0, which is still a valid token id
        // so only fetch the nft data if active
        if (nftRes) {
            nftToken = {
                tokenId: nftRes.tokenId,
                name: nftRes.name,
                collectionName: nftRes.collection.name,
                collectionAddress,
                description: nftRes.description,
                attributes: nftRes.attributes,
                createdAt: nftRes.createdAt,
                updatedAt: nftRes.updatedAt,
                image: {
                    original: nftRes.image?.original,
                    thumbnail: nftRes.image?.thumbnail
                }
            };
        }
        const profile = {
            userId,
            points,
            teamId,
            tokenId,
            username,
            collectionAddress,
            isActive,
            nft: nftToken,
            team
        };
        return {
            hasRegistered,
            profile
        };
    } catch (e) {
        console.error(e);
        return null;
    }
};


/***/ }),

/***/ 28134:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$v": () => (/* binding */ useAchievementsForAddress),
/* harmony export */   "Un": () => (/* binding */ useProfile),
/* harmony export */   "lC": () => (/* binding */ useProfileForAddress)
/* harmony export */ });
/* harmony import */ var _pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71933);
/* harmony import */ var state_achievements_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66966);
/* harmony import */ var config_constants_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75759);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15941);
/* harmony import */ var hooks_useSWRContract__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22408);
/* harmony import */ var swr_immutable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79847);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(29150);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_0__, swr__WEBPACK_IMPORTED_MODULE_3__, hooks_useSWRContract__WEBPACK_IMPORTED_MODULE_4__, swr_immutable__WEBPACK_IMPORTED_MODULE_5__]);
([_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_0__, swr__WEBPACK_IMPORTED_MODULE_3__, hooks_useSWRContract__WEBPACK_IMPORTED_MODULE_4__, swr_immutable__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const useProfileForAddress = (address, fetchConfiguration = {
    revalidateIfStale: true,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
})=>{
    const { data , status , mutate , isValidating  } = (0,swr__WEBPACK_IMPORTED_MODULE_3__["default"])(address ? [
        address,
        "profile"
    ] : null, ()=>(0,_helpers__WEBPACK_IMPORTED_MODULE_6__/* .getProfile */ .A)(address), fetchConfiguration);
    const { profile  } = data ?? {
        profile: null
    };
    return {
        profile,
        isFetching: status === config_constants_types__WEBPACK_IMPORTED_MODULE_2__/* .FetchStatus.Fetching */ .iF.Fetching,
        isValidating,
        refresh: mutate
    };
};
const useAchievementsForAddress = (address)=>{
    const { data , status , mutate  } = (0,swr_immutable__WEBPACK_IMPORTED_MODULE_5__["default"])(address ? [
        address,
        "achievements"
    ] : null, ()=>(0,state_achievements_helpers__WEBPACK_IMPORTED_MODULE_1__/* .getAchievements */ .j)(address));
    return {
        achievements: data || [],
        isFetching: status === config_constants_types__WEBPACK_IMPORTED_MODULE_2__/* .FetchStatus.Fetching */ .iF.Fetching,
        refresh: mutate
    };
};
const useProfile = ()=>{
    const { account  } = (0,_pancakeswap_wagmi__WEBPACK_IMPORTED_MODULE_0__/* .useWeb3React */ .Ge)();
    const { data , status , mutate  } = (0,swr_immutable__WEBPACK_IMPORTED_MODULE_5__["default"])(account ? [
        account,
        "profile"
    ] : null, ()=>(0,_helpers__WEBPACK_IMPORTED_MODULE_6__/* .getProfile */ .A)(account), {
        use: [
            hooks_useSWRContract__WEBPACK_IMPORTED_MODULE_4__/* .localStorageMiddleware */ .PI
        ]
    });
    const { profile , hasRegistered  } = data ?? {
        profile: null,
        hasRegistered: false
    };
    const isLoading = status === config_constants_types__WEBPACK_IMPORTED_MODULE_2__/* .FetchStatus.Fetching */ .iF.Fetching;
    const isInitialized = status === config_constants_types__WEBPACK_IMPORTED_MODULE_2__/* .FetchStatus.Fetched */ .iF.Fetched || status === config_constants_types__WEBPACK_IMPORTED_MODULE_2__/* .FetchStatus.Failed */ .iF.Failed;
    const hasProfile = isInitialized && hasRegistered;
    const hasActiveProfile = hasProfile && profile?.isActive;
    return {
        profile,
        hasProfile,
        hasActiveProfile,
        isInitialized,
        isLoading,
        refresh: mutate
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 52060:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ getTeams),
/* harmony export */   "V": () => (/* binding */ getTeam)
/* harmony export */ });
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61831);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var config_constants_teams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32733);
/* harmony import */ var utils_contractHelpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86192);
/* harmony import */ var utils_multicall__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9796);
/* harmony import */ var config_abi_pancakeProfile_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92335);
/* harmony import */ var utils_addressHelpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69352);






const profileContract = (0,utils_contractHelpers__WEBPACK_IMPORTED_MODULE_2__/* .getProfileContract */ .Y4)();
const getTeam = async (teamId)=>{
    try {
        const { 0: teamName , 2: numberUsers , 3: numberPoints , 4: isJoinable  } = await profileContract.getTeamProfile(teamId);
        const staticTeamInfo = config_constants_teams__WEBPACK_IMPORTED_MODULE_1__/* ["default"].find */ .Z.find((staticTeam)=>staticTeam.id === teamId);
        return lodash_merge__WEBPACK_IMPORTED_MODULE_0___default()({}, staticTeamInfo, {
            isJoinable,
            name: teamName,
            users: numberUsers.toNumber(),
            points: numberPoints.toNumber()
        });
    } catch (error) {
        return null;
    }
};
/**
 * Gets on-chain data and merges it with the existing static list of teams
 */ const getTeams = async ()=>{
    try {
        const teamsById = config_constants_teams__WEBPACK_IMPORTED_MODULE_1__/* ["default"].reduce */ .Z.reduce((accum, team)=>{
            return {
                ...accum,
                [team.id]: team
            };
        }, {});
        const nbTeams = await profileContract.numberTeams();
        const calls = [];
        for(let i = 1; i <= nbTeams.toNumber(); i++){
            calls.push({
                address: (0,utils_addressHelpers__WEBPACK_IMPORTED_MODULE_5__/* .getPancakeProfileAddress */ .Re)(),
                name: "getTeamProfile",
                params: [
                    i
                ]
            });
        }
        const teamData = await (0,utils_multicall__WEBPACK_IMPORTED_MODULE_3__/* .multicallv2 */ .v)({
            abi: config_abi_pancakeProfile_json__WEBPACK_IMPORTED_MODULE_4__,
            calls
        });
        const onChainTeamData = teamData.reduce((accum, team, index)=>{
            const { 0: teamName , 2: numberUsers , 3: numberPoints , 4: isJoinable  } = team;
            return {
                ...accum,
                [index + 1]: {
                    name: teamName,
                    users: numberUsers.toNumber(),
                    points: numberPoints.toNumber(),
                    isJoinable
                }
            };
        }, {});
        return lodash_merge__WEBPACK_IMPORTED_MODULE_0___default()({}, teamsById, onChainTeamData);
    } catch (error) {
        return null;
    }
};


/***/ }),

/***/ 98834:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Updater)
/* harmony export */ });
/* unused harmony export shouldCheck */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52775);
/* harmony import */ var hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97477);
/* harmony import */ var state_block_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88770);
/* harmony import */ var components_Toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33537);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4690);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14265);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(44824);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(56906);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__, state_block_hooks__WEBPACK_IMPORTED_MODULE_4__, components_Toast__WEBPACK_IMPORTED_MODULE_5__, _hooks__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__]);
([hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__, state_block_hooks__WEBPACK_IMPORTED_MODULE_4__, components_Toast__WEBPACK_IMPORTED_MODULE_5__, _hooks__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function shouldCheck(currentBlock, tx) {
    if (tx.receipt) return false;
    if (!tx.lastCheckedBlockNumber) return true;
    const blocksSinceCheck = currentBlock - tx.lastCheckedBlockNumber;
    if (blocksSinceCheck < 1) return false;
    const minutesPending = (new Date().getTime() - tx.addedTime) / 1000 / 60;
    if (minutesPending > 60) {
        // every 10 blocks if pending for longer than an hour
        return blocksSinceCheck > 9;
    }
    if (minutesPending > 5) {
        // every 3 blocks if pending more than 5 minutes
        return blocksSinceCheck > 2;
    }
    // otherwise every block
    return true;
}
function Updater() {
    const { chainId , provider  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    const currentBlock = (0,state_block_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useCurrentBlock */ .je)();
    const dispatch = (0,_index__WEBPACK_IMPORTED_MODULE_6__/* .useAppDispatch */ .TL)();
    const transactions = (0,_hooks__WEBPACK_IMPORTED_MODULE_8__/* .useAllChainTransactions */ .tm)();
    const { toastError , toastSuccess  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* .useToast */ .p)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!chainId || !provider || !currentBlock) return;
        Object.keys(transactions).filter((hash)=>shouldCheck(currentBlock, transactions[hash])).forEach((hash)=>{
            provider.getTransactionReceipt(hash).then((receipt)=>{
                if (receipt) {
                    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_7__/* .finalizeTransaction */ .Aw)({
                        chainId,
                        hash,
                        receipt: {
                            blockHash: receipt.blockHash,
                            blockNumber: receipt.blockNumber,
                            contractAddress: receipt.contractAddress,
                            from: receipt.from,
                            status: receipt.status,
                            to: receipt.to,
                            transactionHash: receipt.transactionHash,
                            transactionIndex: receipt.transactionIndex
                        }
                    }));
                    const toast = receipt.status === 1 ? toastSuccess : toastError;
                    toast(t("Transaction receipt"), /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Toast__WEBPACK_IMPORTED_MODULE_5__/* .ToastDescriptionWithTx */ .Y, {
                        txHash: receipt.transactionHash
                    }));
                } else {
                    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_7__/* .checkedTransaction */ .LN)({
                        chainId,
                        hash,
                        blockNumber: currentBlock
                    }));
                }
            }).catch((error)=>{
                console.error(`failed to check transaction hash: ${hash}`, error);
            });
        });
    }, [
        chainId,
        provider,
        transactions,
        currentBlock,
        dispatch,
        toastSuccess,
        toastError,
        t
    ]);
    return null;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 54852:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle`
  * {
    font-family: 'Kanit', sans-serif;
  }
  body {
    background-color: ${({ theme  })=>theme.colors.background};

    img {
      height: auto;
      max-width: 100%;
    }
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobalStyle);


/***/ }),

/***/ 76227:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A9": () => (/* binding */ getAchievementDescription),
/* harmony export */   "Cl": () => (/* binding */ getClaimableIfoData),
/* harmony export */   "hi": () => (/* binding */ getAchievementTitle)
/* harmony export */ });
/* harmony import */ var config_constants_ifo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88221);
/* harmony import */ var config_constants_campaigns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12734);
/* harmony import */ var utils_multicall__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9796);
/* harmony import */ var utils_addressHelpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69352);
/* harmony import */ var config_abi_pointCenterIfo_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58750);





const getAchievementTitle = (campaign)=>{
    switch(campaign.type){
        case "ifo":
            return {
                key: "IFO Shopper: %title%",
                data: {
                    title: campaign.title
                }
            };
        default:
            return campaign.title;
    }
};
const getAchievementDescription = (campaign)=>{
    switch(campaign.type){
        case "ifo":
            return {
                key: "Committed more than $5 worth of LP in the %title% IFO",
                data: {
                    title: campaign.title
                }
            };
        default:
            return campaign.description;
    }
};
/**
 * Checks if a wallet is eligible to claim points from valid IFO's
 */ const getClaimableIfoData = async (account)=>{
    const ifoCampaigns = config_constants_ifo__WEBPACK_IMPORTED_MODULE_0__/* ["default"].filter */ .Z.filter((ifoItem)=>ifoItem.campaignId !== undefined);
    // Returns the claim status of every IFO with a campaign ID
    const claimStatusCalls = ifoCampaigns.map(({ address  })=>{
        return {
            address: (0,utils_addressHelpers__WEBPACK_IMPORTED_MODULE_3__/* .getPointCenterIfoAddress */ .Cf)(),
            name: "checkClaimStatus",
            params: [
                account,
                address
            ]
        };
    });
    const claimStatuses = await (0,utils_multicall__WEBPACK_IMPORTED_MODULE_2__/* .multicallv2 */ .v)({
        abi: config_abi_pointCenterIfo_json__WEBPACK_IMPORTED_MODULE_4__,
        calls: claimStatusCalls,
        options: {
            requireSuccess: false
        }
    });
    // Get IFO data for all IFO's that are eligible to claim
    const claimableIfoData = await (0,utils_multicall__WEBPACK_IMPORTED_MODULE_2__/* .multicallv2 */ .v)({
        abi: config_abi_pointCenterIfo_json__WEBPACK_IMPORTED_MODULE_4__,
        calls: claimStatuses.reduce((accum, claimStatusArr, index)=>{
            if (claimStatusArr === null) {
                return accum;
            }
            const [claimStatus] = claimStatusArr;
            if (claimStatus === true) {
                return [
                    ...accum,
                    {
                        address: (0,utils_addressHelpers__WEBPACK_IMPORTED_MODULE_3__/* .getPointCenterIfoAddress */ .Cf)(),
                        name: "ifos",
                        params: [
                            ifoCampaigns[index].address
                        ]
                    }
                ];
            }
            return accum;
        }, [])
    });
    // Transform response to an Achievement
    return claimableIfoData.reduce((accum, claimableIfoDataItem)=>{
        const claimableCampaignId = claimableIfoDataItem.campaignId.toString();
        if (!config_constants_campaigns__WEBPACK_IMPORTED_MODULE_1__/* .campaignMap.has */ .T.has(claimableCampaignId)) {
            return accum;
        }
        const campaignMeta = config_constants_campaigns__WEBPACK_IMPORTED_MODULE_1__/* .campaignMap.get */ .T.get(claimableCampaignId);
        const { address  } = ifoCampaigns.find((ifoCampaign)=>ifoCampaign.campaignId === claimableCampaignId);
        return [
            ...accum,
            {
                address,
                id: claimableCampaignId,
                type: "ifo",
                title: getAchievementTitle(campaignMeta),
                description: getAchievementDescription(campaignMeta),
                badge: campaignMeta.badge,
                points: claimableIfoDataItem.numberPoints.toNumber()
            }, 
        ];
    }, []);
};


/***/ }),

/***/ 80922:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ useBCakeProxyContractAddress)
/* harmony export */ });
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15941);
/* harmony import */ var config_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42918);
/* harmony import */ var hooks_useContract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82688);
/* harmony import */ var config_constants_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75759);
/* harmony import */ var _pancakeswap_farms_src_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16549);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_0__, hooks_useContract__WEBPACK_IMPORTED_MODULE_2__]);
([swr__WEBPACK_IMPORTED_MODULE_0__, hooks_useContract__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const useBCakeProxyContractAddress = (account, chainId)=>{
    const bCakeFarmBoosterContract = (0,hooks_useContract__WEBPACK_IMPORTED_MODULE_2__/* .useBCakeFarmBoosterContract */ .gh)();
    const isSupportedChain = _pancakeswap_farms_src_index__WEBPACK_IMPORTED_MODULE_4__/* .bCakeSupportedChainId.includes */ .P4.includes(chainId);
    const { data , status , mutate  } = (0,swr__WEBPACK_IMPORTED_MODULE_0__["default"])(account && isSupportedChain && [
        "proxyAddress",
        account
    ], async ()=>bCakeFarmBoosterContract.proxyContract(account));
    const isLoading = isSupportedChain ? status !== config_constants_types__WEBPACK_IMPORTED_MODULE_3__/* .FetchStatus.Fetched */ .iF.Fetched : false;
    return {
        proxyAddress: data,
        isLoading,
        proxyCreated: data && data !== config_constants__WEBPACK_IMPORTED_MODULE_1__/* .NO_PROXY_CONTRACT */ .h5,
        refreshProxyAddress: mutate
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4298:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(83798)


/***/ }),

/***/ 6187:
/***/ ((module) => {

"use strict";
module.exports = require("@ethersproject/abi");

/***/ }),

/***/ 51541:
/***/ ((module) => {

"use strict";
module.exports = require("@ethersproject/address");

/***/ }),

/***/ 65757:
/***/ ((module) => {

"use strict";
module.exports = require("@ethersproject/bignumber");

/***/ }),

/***/ 49935:
/***/ ((module) => {

"use strict";
module.exports = require("@ethersproject/bytes");

/***/ }),

/***/ 26644:
/***/ ((module) => {

"use strict";
module.exports = require("@ethersproject/constants");

/***/ }),

/***/ 12792:
/***/ ((module) => {

"use strict";
module.exports = require("@ethersproject/contracts");

/***/ }),

/***/ 90399:
/***/ ((module) => {

"use strict";
module.exports = require("@ethersproject/providers");

/***/ }),

/***/ 76693:
/***/ ((module) => {

"use strict";
module.exports = require("@ethersproject/solidity");

/***/ }),

/***/ 49213:
/***/ ((module) => {

"use strict";
module.exports = require("@ethersproject/strings");

/***/ }),

/***/ 93138:
/***/ ((module) => {

"use strict";
module.exports = require("@ethersproject/units");

/***/ }),

/***/ 18310:
/***/ ((module) => {

"use strict";
module.exports = require("@gnosis.pm/safe-apps-wagmi");

/***/ }),

/***/ 75184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 58097:
/***/ ((module) => {

"use strict";
module.exports = require("@sentry/nextjs");

/***/ }),

/***/ 51554:
/***/ ((module) => {

"use strict";
module.exports = require("@uniswap/token-lists");

/***/ }),

/***/ 22534:
/***/ ((module) => {

"use strict";
module.exports = require("@wagmi/core");

/***/ }),

/***/ 75888:
/***/ ((module) => {

"use strict";
module.exports = require("ajv");

/***/ }),

/***/ 22575:
/***/ ((module) => {

"use strict";
module.exports = require("big.js");

/***/ }),

/***/ 34215:
/***/ ((module) => {

"use strict";
module.exports = require("bignumber.js");

/***/ }),

/***/ 45245:
/***/ ((module) => {

"use strict";
module.exports = require("canvas-confetti");

/***/ }),

/***/ 74146:
/***/ ((module) => {

"use strict";
module.exports = require("date-fns");

/***/ }),

/***/ 64150:
/***/ ((module) => {

"use strict";
module.exports = require("date-fns/addSeconds");

/***/ }),

/***/ 97312:
/***/ ((module) => {

"use strict";
module.exports = require("decimal.js-light");

/***/ }),

/***/ 64175:
/***/ ((module) => {

"use strict";
module.exports = require("fast-json-stable-stringify");

/***/ }),

/***/ 5805:
/***/ ((module) => {

"use strict";
module.exports = require("graphql-request");

/***/ }),

/***/ 52424:
/***/ ((module) => {

"use strict";
module.exports = require("jsbi");

/***/ }),

/***/ 72607:
/***/ ((module) => {

"use strict";
module.exports = require("local-storage");

/***/ }),

/***/ 3182:
/***/ ((module) => {

"use strict";
module.exports = require("localforage");

/***/ }),

/***/ 90221:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/chunk");

/***/ }),

/***/ 93908:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/debounce");

/***/ }),

/***/ 64854:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/delay");

/***/ }),

/***/ 38190:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/flatMap");

/***/ }),

/***/ 57626:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/fromPairs");

/***/ }),

/***/ 1712:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/get");

/***/ }),

/***/ 98492:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/groupBy");

/***/ }),

/***/ 89699:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isEmpty");

/***/ }),

/***/ 51546:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/kebabCase");

/***/ }),

/***/ 63385:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/keyBy");

/***/ }),

/***/ 9941:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/mapValues");

/***/ }),

/***/ 50541:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/memoize");

/***/ }),

/***/ 61831:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/merge");

/***/ }),

/***/ 87553:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/noop");

/***/ }),

/***/ 66011:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/omitBy");

/***/ }),

/***/ 49949:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/orderBy");

/***/ }),

/***/ 20808:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/pickBy");

/***/ }),

/***/ 64042:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/range");

/***/ }),

/***/ 1381:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/throttle");

/***/ }),

/***/ 10582:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/toNumber");

/***/ }),

/***/ 18459:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/uniq");

/***/ }),

/***/ 69309:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/uniqBy");

/***/ }),

/***/ 51162:
/***/ ((module) => {

"use strict";
module.exports = require("next-themes");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 92796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 94957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 34014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 64486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 50744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 35843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 78524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 95832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 78020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 64406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 24964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 11751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 46220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 10299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 23938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 29565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 35789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 28854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 91292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 34567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 80979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 93297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 36052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 84226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 95052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 59232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 40968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 71853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 59819:
/***/ ((module) => {

"use strict";
module.exports = require("querystring");

/***/ }),

/***/ 16689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 23599:
/***/ ((module) => {

"use strict";
module.exports = require("react-device-detect");

/***/ }),

/***/ 66405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 42932:
/***/ ((module) => {

"use strict";
module.exports = require("react-popper");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 84466:
/***/ ((module) => {

"use strict";
module.exports = require("react-transition-group");

/***/ }),

/***/ 20997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 14161:
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist");

/***/ }),

/***/ 61127:
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist/integration/react");

/***/ }),

/***/ 98936:
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist/lib/storage");

/***/ }),

/***/ 57518:
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ }),

/***/ 95834:
/***/ ((module) => {

"use strict";
module.exports = require("styled-system");

/***/ }),

/***/ 8780:
/***/ ((module) => {

"use strict";
module.exports = require("tiny-invariant");

/***/ }),

/***/ 60656:
/***/ ((module) => {

"use strict";
module.exports = require("tiny-warning");

/***/ }),

/***/ 86350:
/***/ ((module) => {

"use strict";
module.exports = require("toformat");

/***/ }),

/***/ 8906:
/***/ ((module) => {

"use strict";
module.exports = require("wagmi");

/***/ }),

/***/ 22216:
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/chains");

/***/ }),

/***/ 51276:
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/connectors/coinbaseWallet");

/***/ }),

/***/ 74738:
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/connectors/injected");

/***/ }),

/***/ 79035:
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/connectors/metaMask");

/***/ }),

/***/ 61556:
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/connectors/walletConnect");

/***/ }),

/***/ 21176:
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/providers/jsonRpc");

/***/ }),

/***/ 66197:
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ }),

/***/ 82451:
/***/ ((module) => {

"use strict";
module.exports = import("jotai");;

/***/ }),

/***/ 2752:
/***/ ((module) => {

"use strict";
module.exports = import("jotai/utils");;

/***/ }),

/***/ 69915:
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ }),

/***/ 15941:
/***/ ((module) => {

"use strict";
module.exports = import("swr");;

/***/ }),

/***/ 79847:
/***/ ((module) => {

"use strict";
module.exports = import("swr/immutable");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8177,676,1664,2681,5675,5152,1608,3893,8726,3035,8538,5915,5551,7458,309,921,4141,2408,3966,7921,7495,5529,4690,599,7357,1429,7447,3768,3473], () => (__webpack_exec__(90321), __webpack_exec__(84774)));
module.exports = __webpack_exports__;

})();