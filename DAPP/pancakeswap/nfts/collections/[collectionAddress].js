"use strict";
(() => {
var exports = {};
exports.id = 1455;
exports.ids = [1455];
exports.modules = {

/***/ 13638:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66405);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_popper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42932);
/* harmony import */ var react_popper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_popper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9476);
/* harmony import */ var _util_getPortalRoot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35383);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_styles__WEBPACK_IMPORTED_MODULE_5__]);
_styles__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const BaseMenu = ({ component , options , children , isOpen =false  })=>{
    const { 0: targetElement , 1: setTargetElement  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: menuElement , 1: setMenuElement  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const placement = options?.placement ?? "bottom";
    const offset = options?.offset ?? [
        0,
        10
    ];
    const padding = options?.padding ?? {
        left: 16,
        right: 16
    };
    const { 0: isMenuOpen , 1: setIsMenuOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(isOpen);
    const toggle = ()=>{
        setIsMenuOpen((prev)=>!prev);
    };
    const open = ()=>{
        setIsMenuOpen(true);
    };
    const close = ()=>{
        setIsMenuOpen(false);
    };
    // Allow for component to be controlled
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setIsMenuOpen(isOpen);
    }, [
        isOpen,
        setIsMenuOpen
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (menuElement !== null && targetElement !== null) {
            const handleClickOutside = ({ target  })=>{
                if (target instanceof Node && !menuElement.contains(target) && !targetElement.contains(target)) {
                    setIsMenuOpen(false);
                }
            };
            document.addEventListener("click", handleClickOutside);
            return ()=>{
                document.removeEventListener("click", handleClickOutside);
            };
        }
        return undefined;
    }, [
        menuElement,
        targetElement
    ]);
    const { styles , attributes  } = (0,react_popper__WEBPACK_IMPORTED_MODULE_3__.usePopper)(targetElement, menuElement, {
        placement,
        modifiers: [
            {
                name: "offset",
                options: {
                    offset
                }
            },
            {
                name: "preventOverflow",
                options: {
                    padding
                }
            }, 
        ]
    });
    const menu = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: setMenuElement,
        style: styles.popper,
        ...attributes.popper,
        children: typeof children === "function" ? children({
            toggle,
            open,
            close
        }) : children
    });
    const portal = (0,_util_getPortalRoot__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const renderMenu = portal ? /*#__PURE__*/ (0,react_dom__WEBPACK_IMPORTED_MODULE_2__.createPortal)(menu, portal) : menu;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_5__/* .ClickableElementContainer */ .j5, {
                ref: setTargetElement,
                onClick: toggle,
                children: component
            }),
            isMenuOpen && renderMenu
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseMenu);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 27843:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BaseMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13638);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9476);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_BaseMenu__WEBPACK_IMPORTED_MODULE_2__, _styles__WEBPACK_IMPORTED_MODULE_3__]);
([_BaseMenu__WEBPACK_IMPORTED_MODULE_2__, _styles__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const InlineMenu = ({ children , component , isOpen =false , ...props })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BaseMenu__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        options: {
            placement: "bottom"
        },
        component: component,
        isOpen: isOpen,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_3__/* .InlineMenuContainer */ .xm, {
            ...props,
            children: children
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InlineMenu);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9476:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j5": () => (/* binding */ ClickableElementContainer),
/* harmony export */   "lz": () => (/* binding */ SubMenuContainer),
/* harmony export */   "vE": () => (/* binding */ SubMenuItem),
/* harmony export */   "xm": () => (/* binding */ InlineMenuContainer)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85118);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10993);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Box__WEBPACK_IMPORTED_MODULE_1__, _Box__WEBPACK_IMPORTED_MODULE_2__]);
([_Box__WEBPACK_IMPORTED_MODULE_1__, _Box__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const InlineMenuContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Box__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z).withConfig({
    componentId: "sc-be5f5450-0"
}).withConfig({
    componentId: "sc-c2a2e186-0"
})`
  background-color: ${({ theme  })=>theme.colors.backgroundAlt};
  border-radius: ${({ theme  })=>theme.radii.card};
  box-shadow: ${({ theme  })=>theme.shadows.tooltip};
`;
const SubMenuContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Box__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z).withConfig({
    componentId: "sc-be5f5450-1"
}).withConfig({
    componentId: "sc-c2a2e186-1"
})`
  flex-direction: column;
  overflow: hidden;
  min-width: 136px;
  background: ${({ theme  })=>theme.colors.input};
  border-radius: ${({ theme  })=>theme.radii.default};
  border: ${({ theme  })=>`1px solid ${theme.colors.inputSecondary}`};
`;
const ClickableElementContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-be5f5450-2"
}).withConfig({
    componentId: "sc-c2a2e186-2"
})`
  cursor: pointer;
  display: inline-flex;
`;
const SubMenuItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
    componentId: "sc-be5f5450-3"
}).withConfig({
    componentId: "sc-c2a2e186-3"
})`
  border: 0;
  outline: 0;
  cursor: pointer;
  background: transparent;
  padding: 8px 16px;
  color: ${({ theme  })=>theme.colors.text};
  width: 100%;
  font-size: 16px;
  text-align: left;

  &:hover {
    background-color: ${({ theme  })=>theme.colors.inputSecondary};
    text-decoration: none;
  }
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 94729:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Button_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37562);





const getBackgroundColor = ({ theme , variant  })=>{
    return theme.colors[variant === _Button_types__WEBPACK_IMPORTED_MODULE_4__/* .variants.SUBTLE */ .o.SUBTLE ? "input" : "tertiary"];
};
const getBorderColor = ({ theme , variant  })=>{
    return theme.colors[variant === _Button_types__WEBPACK_IMPORTED_MODULE_4__/* .variants.SUBTLE */ .o.SUBTLE ? "inputSecondary" : "disabled"];
};
const StyledButtonMenu = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-15e0dcc-0"
}).withConfig({
    componentId: "sc-a53b3b97-0"
})`
  background-color: ${getBackgroundColor};
  border-radius: 16px;
  display: ${({ fullWidth  })=>fullWidth ? "flex" : "inline-flex"};
  border: 1px solid ${getBorderColor};
  width: ${({ fullWidth  })=>fullWidth ? "100%" : "auto"};

  & > button,
  & > a {
    flex: ${({ fullWidth  })=>fullWidth ? 1 : "auto"};
  }

  & > button + button,
  & > a + a {
    margin-left: 2px; // To avoid focus shadow overlap
  }

  & > button,
  & a {
    box-shadow: none;
  }

  ${({ disabled , theme , variant  })=>{
    if (disabled) {
        return `
        opacity: 0.5;

        & > button:disabled {
          background-color: transparent;
          color: ${variant === _Button_types__WEBPACK_IMPORTED_MODULE_4__/* .variants.PRIMARY */ .o.PRIMARY ? theme.colors.primary : theme.colors.textSubtle};
        }
    `;
    }
    return "";
}}
  ${styled_system__WEBPACK_IMPORTED_MODULE_3__.space}
`;
const ButtonMenu = ({ activeIndex =0 , scale =_Button_types__WEBPACK_IMPORTED_MODULE_4__/* .scales.MD */ .Q.MD , variant =_Button_types__WEBPACK_IMPORTED_MODULE_4__/* .variants.PRIMARY */ .o.PRIMARY , onItemClick , disabled , children , fullWidth =false , ...props })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledButtonMenu, {
        disabled: disabled,
        variant: variant,
        fullWidth: fullWidth,
        ...props,
        children: react__WEBPACK_IMPORTED_MODULE_1__.Children.map(children, (child, index)=>{
            return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(child, {
                isActive: activeIndex === index,
                onClick: onItemClick ? ()=>onItemClick(index) : undefined,
                scale,
                variant,
                disabled
            });
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonMenu);


/***/ }),

/***/ 24302:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61629);
/* harmony import */ var _Button_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37562);





const InactiveButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_Button_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z).withConfig({
    componentId: "sc-baf98d6e-0"
}).withConfig({
    componentId: "sc-bede416c-0"
})`
  background-color: transparent;
  color: ${({ theme , variant  })=>variant === _Button_types__WEBPACK_IMPORTED_MODULE_4__/* .variants.PRIMARY */ .o.PRIMARY ? theme.colors.primary : theme.colors.textSubtle};
  &:hover:not(:disabled):not(:active) {
    background-color: transparent;
  }
`;
const ButtonMenuItem = ({ isActive =false , variant =_Button_types__WEBPACK_IMPORTED_MODULE_4__/* .variants.PRIMARY */ .o.PRIMARY , as , ...props })=>{
    if (!isActive) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(InactiveButton, {
            forwardedAs: as,
            variant: variant,
            ...props
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        as: as,
        variant: variant,
        ...props
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonMenuItem);


/***/ }),

/***/ 13030:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ DropdownMenuItemType)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var DropdownMenuItemType;
(function(DropdownMenuItemType) {
    DropdownMenuItemType[DropdownMenuItemType["INTERNAL_LINK"] = 0] = "INTERNAL_LINK";
    DropdownMenuItemType[DropdownMenuItemType["EXTERNAL_LINK"] = 1] = "EXTERNAL_LINK";
    DropdownMenuItemType[DropdownMenuItemType["BUTTON"] = 2] = "BUTTON";
    DropdownMenuItemType[DropdownMenuItemType["DIVIDER"] = 3] = "DIVIDER";
})(DropdownMenuItemType || (DropdownMenuItemType = {}));


/***/ }),

/***/ 95487:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _Box_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85118);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47495);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5221);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Box_Box__WEBPACK_IMPORTED_MODULE_4__]);
_Box_Box__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const getPadding = (scale, hasIcon)=>{
    if (!hasIcon) {
        return "16px";
    }
    switch(scale){
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .scales.SM */ .Q.SM:
            return "32px";
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .scales.LG */ .Q.LG:
            return "56px";
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .scales.MD */ .Q.MD:
        default:
            return "48px";
    }
};
const StyledInputGroup = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_Box_Box__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z).withConfig({
    componentId: "sc-148bad35-0"
}).withConfig({
    componentId: "sc-3583f158-0"
})`
  ${_Input__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z} {
    padding-left: ${({ hasStartIcon , scale  })=>getPadding(scale, hasStartIcon)};
    padding-right: ${({ hasEndIcon , scale  })=>getPadding(scale, hasEndIcon)};
  }
`;
const InputIcon = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-148bad35-1"
}).withConfig({
    componentId: "sc-3583f158-1"
})`
  align-items: center;
  display: flex;
  height: 100%;
  position: absolute;
  top: 0;

  ${({ isEndIcon , scale  })=>isEndIcon ? `
    right: ${scale === _types__WEBPACK_IMPORTED_MODULE_3__/* .scales.SM */ .Q.SM ? "8px" : "16px"};
  ` : `
    left: ${scale === _types__WEBPACK_IMPORTED_MODULE_3__/* .scales.SM */ .Q.SM ? "8px" : "16px"};
  `}
`;
const InputGroup = ({ scale =_types__WEBPACK_IMPORTED_MODULE_3__/* .scales.MD */ .Q.MD , startIcon , endIcon , children , ...props })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledInputGroup, {
        scale: scale,
        width: "100%",
        position: "relative",
        hasStartIcon: !!startIcon,
        hasEndIcon: !!endIcon,
        ...props,
        children: [
            startIcon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(InputIcon, {
                scale: scale,
                children: startIcon
            }),
            /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(children, {
                scale
            }),
            endIcon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(InputIcon, {
                scale: scale,
                isEndIcon: true,
                children: endIcon
            })
        ]
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputGroup);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 52569:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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

/***/ 92087:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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

/***/ 83686:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
            d: "M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 78927:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
            d: "M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 62362:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
            d: "M13 19V7.83001L17.88 12.71C18.27 13.1 18.91 13.1 19.3 12.71C19.69 12.32 19.69 11.69 19.3 11.3L12.71 4.71001C12.32 4.32001 11.69 4.32001 11.3 4.71001L4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7C5.08997 13.09 5.71997 13.09 6.10997 12.7L11 7.83001V19C11 19.55 11.45 20 12 20C12.55 20 13 19.55 13 19Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 99762:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 77577:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 91370:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
            d: "M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 29562:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
            d: "M15.5 13.9996H14.71L14.43 13.7296C15.63 12.3296 16.25 10.4196 15.91 8.38965C15.44 5.60965 13.12 3.38965 10.32 3.04965C6.09001 2.52965 2.53002 6.08965 3.05002 10.3196C3.39002 13.1196 5.61002 15.4396 8.39002 15.9096C10.42 16.2496 12.33 15.6296 13.73 14.4296L14 14.7096V15.4996L18.25 19.7496C18.66 20.1596 19.33 20.1596 19.74 19.7496C20.15 19.3396 20.15 18.6696 19.74 18.2596L15.5 13.9996ZM9.50002 13.9996C7.01002 13.9996 5.00002 11.9896 5.00002 9.49965C5.00002 7.00965 7.01002 4.99965 9.50002 4.99965C11.99 4.99965 14 7.00965 14 9.49965C14 11.9896 11.99 13.9996 9.50002 13.9996Z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 35383:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const getPortalRoot = ()=> false && (0);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getPortalRoot);


/***/ }),

/***/ 83468:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ MenuContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const MenuContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
    linkComponent: "a"
});


/***/ }),

/***/ 32711:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(77067);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85118);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(47495);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97119);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52775);
/* harmony import */ var components_Loader_CircleLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(83743);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__]);
_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







var ResultStatus;
(function(ResultStatus) {
    ResultStatus[ResultStatus["NOT_VALID"] = 0] = "NOT_VALID";
    ResultStatus[ResultStatus["FOUND"] = 1] = "FOUND";
    ResultStatus[ResultStatus["NOT_FOUND"] = 2] = "NOT_FOUND";
})(ResultStatus || (ResultStatus = {}));
const SubMenu = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-64ff24db-0"
})`
  align-items: center;
  background: ${({ theme  })=>theme.colors.input};
  border: 1px solid ${({ theme  })=>theme.colors.inputSecondary};
  border-radius: 0 0 ${({ theme  })=>theme.radii.default} ${({ theme  })=>theme.radii.default};
  left: 0;
  padding-bottom: 8px;
  padding-top: 16px;
  position: absolute;
  top: calc(100% - 12px);
  transition: transform 0.15s, opacity 0.15s;
  transform: scaleY(0);
  transform-origin: top;
  width: 100%;
  z-index: 15;

  ${({ isOpen  })=>isOpen && `
    height: auto;
    opacity: 1;
    transform: scaleY(1);
  `}
`;
const AddressLink = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z).withConfig({
    componentId: "sc-64ff24db-1"
})`
  cursor: pointer;
  overflow-wrap: break-word;
  font-weight: bold;
  padding-left: 16px;
  padding-right: 16px;
`;
const initialState = {
    isFetching: false,
    resultFound: ResultStatus.NOT_VALID,
    value: ""
};
const defaultValidAddressHandler = ()=>Promise.resolve(true);
const AddressInputSelect = ({ onValidAddress =defaultValidAddressHandler , onAddressClick , ...props })=>{
    const { 0: state , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialState);
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__/* .useTranslation */ .$G)();
    const { isFetching , resultFound , value  } = state;
    const handleChange = (evt)=>{
        const { value: newValue  } = evt.target;
        setState((prevState)=>({
                ...prevState,
                value: newValue
            }));
    };
    const handleClick = ()=>{
        setState(initialState);
        onAddressClick(state.value);
    };
    // When we have a valid address fetch the data
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const isValidAddress = (0,utils__WEBPACK_IMPORTED_MODULE_3__/* .isAddress */ .UJ)(value) !== false;
        const validAddressHandler = async ()=>{
            try {
                setState((prevState)=>({
                        ...prevState,
                        isFetching: true
                    }));
                const hasResults = await onValidAddress(value);
                setState((prevState)=>({
                        ...prevState,
                        isFetching: false,
                        resultFound: hasResults ? ResultStatus.FOUND : ResultStatus.NOT_FOUND
                    }));
            } catch  {
                setState((prevState)=>({
                        ...prevState,
                        isFetching: false
                    }));
            }
        };
        if (isValidAddress) {
            validAddressHandler();
        } else {
            setState((prevState)=>({
                    ...prevState,
                    resultFound: ResultStatus.NOT_VALID
                }));
        }
    }, [
        value,
        onValidAddress,
        setState
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        position: "relative",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                placeholder: t("Search %subject%", {
                    subject: t("Address").toLowerCase()
                }),
                value: state.value,
                onChange: handleChange,
                style: {
                    position: "relative",
                    zIndex: 16,
                    paddingRight: "40px"
                }
            }),
            isFetching && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                position: "absolute",
                top: "12px",
                right: "16px",
                style: {
                    zIndex: 17
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Loader_CircleLoader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SubMenu, {
                isOpen: resultFound !== ResultStatus.NOT_VALID,
                children: resultFound === ResultStatus.FOUND ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AddressLink, {
                    onClick: handleClick,
                    children: state.value
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    px: "16px",
                    fontWeight: "bold",
                    children: t("No results found.")
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddressInputSelect);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 83743:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CircleLoader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const rotate = styled_components__WEBPACK_IMPORTED_MODULE_1__.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const StyledSVG = styled_components__WEBPACK_IMPORTED_MODULE_1___default().svg.withConfig({
    componentId: "sc-fa227f0-0"
})`
  animation: 2s ${rotate} linear infinite;
  height: ${({ size  })=>size};
  width: ${({ size  })=>size};
  path {
    stroke: ${({ stroke , theme  })=>stroke ?? theme.colors.primary};
  }
`;
/**
 * Takes in custom size and stroke for circle color, default to primary color as fill,
 * need ...rest for layered styles on top
 */ function CircleLoader({ size ="16px" , stroke , ...rest }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledSVG, {
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        size: size,
        stroke: stroke,
        ...rest,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.27455 20.9097 6.80375 19.1414 5",
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    });
}


/***/ }),

/***/ 71476:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70617);
/* harmony import */ var _Layout_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Layout_Page__WEBPACK_IMPORTED_MODULE_2__]);
_Layout_Page__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Layout_Page__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z).withConfig({
    componentId: "sc-5ad34a86-0"
})`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PageLoader = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Wrapper, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageLoader);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5498:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85118);
/* harmony import */ var _Layout_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44305);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Layout_Container__WEBPACK_IMPORTED_MODULE_2__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__]);
([_Layout_Container__WEBPACK_IMPORTED_MODULE_2__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const Outer = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z).withConfig({
    componentId: "sc-77de9e7a-0"
})`
  background: ${({ theme , background  })=>background || theme.colors.gradientBubblegum};
`;
const Inner = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Layout_Container__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z).withConfig({
    componentId: "sc-77de9e7a-1"
})`
  padding-top: 32px;
  padding-bottom: 32px;
  position: relative;
`;
const PageHeader = ({ background , children , ...props })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Outer, {
        background: background,
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Inner, {
            children: children
        })
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageHeader);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 36099:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _PageHeader__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _PageHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5498);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_PageHeader__WEBPACK_IMPORTED_MODULE_0__]);
_PageHeader__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 77137:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61629);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(62362);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1381);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_3__);





const FixedContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-4c40c406-0"
})`
  position: fixed;
  right: 5%;
  bottom: calc(110px + env(safe-area-inset-bottom));
`;
const ScrollToTopButton = ()=>{
    const { 0: visible , 1: setVisible  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const scrollToTop = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const toggleVisible = ()=>{
            const scrolled = document.documentElement.scrollTop;
            if (scrolled > 500) {
                setVisible(true);
            } else if (scrolled <= 500) {
                setVisible(false);
            }
        };
        const throttledToggleVisible = lodash_throttle__WEBPACK_IMPORTED_MODULE_3___default()(toggleVisible, 200);
        window.addEventListener("scroll", throttledToggleVisible);
        return ()=>window.removeEventListener("scroll", throttledToggleVisible);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FixedContainer, {
        style: {
            display: visible ? "inline" : "none"
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            width: 48,
            height: 48,
            endIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                color: "white",
                style: {
                    marginLeft: 0
                }
            }),
            onClick: scrollToTop
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScrollToTopButton);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 76688:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85118);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(77067);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(78927);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__]);
_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const DropDownHeader = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-4cf597bc-0"
})`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 16px;
  box-shadow: ${({ theme  })=>theme.shadows.inset};
  border: 1px solid ${({ theme  })=>theme.colors.inputSecondary};
  border-radius: 16px;
  background: ${({ theme  })=>theme.colors.input};
  transition: border-radius 0.15s;
`;
const DropDownListContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-4cf597bc-1"
})`
  min-width: 136px;
  height: 0;
  position: absolute;
  overflow: hidden;
  background: ${({ theme  })=>theme.colors.input};
  z-index: ${({ theme  })=>theme.zIndices.dropdown};
  transition: transform 0.15s, opacity 0.15s;
  transform: scaleY(0);
  transform-origin: top;
  opacity: 0;
  width: 100%;

  ${({ theme  })=>theme.mediaQueries.sm} {
    min-width: 168px;
  }
`;
const DropDownContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z).withConfig({
    componentId: "sc-4cf597bc-2"
})`
  cursor: pointer;
  width: 100%;
  position: relative;
  background: ${({ theme  })=>theme.colors.input};
  border-radius: 16px;
  height: 40px;
  min-width: 136px;
  user-select: none;
  z-index: 20;

  ${({ theme  })=>theme.mediaQueries.sm} {
    min-width: 168px;
  }

  ${(props)=>props.isOpen && styled_components__WEBPACK_IMPORTED_MODULE_2__.css`
      ${DropDownHeader} {
        border-bottom: 1px solid ${({ theme  })=>theme.colors.inputSecondary};
        box-shadow: ${({ theme  })=>theme.tooltip.boxShadow};
        border-radius: 16px 16px 0 0;
      }

      ${DropDownListContainer} {
        height: auto;
        transform: scaleY(1);
        opacity: 1;
        border: 1px solid ${({ theme  })=>theme.colors.inputSecondary};
        border-top-width: 0;
        border-radius: 0 0 16px 16px;
        box-shadow: ${({ theme  })=>theme.tooltip.boxShadow};
      }
    `}

  svg {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
`;
const DropDownList = styled_components__WEBPACK_IMPORTED_MODULE_2___default().ul.withConfig({
    componentId: "sc-4cf597bc-3"
})`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  z-index: ${({ theme  })=>theme.zIndices.dropdown};
`;
const ListItem = styled_components__WEBPACK_IMPORTED_MODULE_2___default().li.withConfig({
    componentId: "sc-4cf597bc-4"
})`
  list-style: none;
  padding: 8px 16px;
  &:hover {
    background: ${({ theme  })=>theme.colors.inputSecondary};
  }
`;
const Select = ({ options , onOptionChange , defaultOptionIndex =0 , placeHolderText , ...props })=>{
    const { 0: isOpen , 1: setIsOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: optionSelected , 1: setOptionSelected  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: selectedOptionIndex , 1: setSelectedOptionIndex  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultOptionIndex);
    const toggling = (event)=>{
        setIsOpen(!isOpen);
        event.stopPropagation();
    };
    const onOptionClicked = (selectedIndex)=>()=>{
            setSelectedOptionIndex(selectedIndex);
            setIsOpen(false);
            setOptionSelected(true);
            if (onOptionChange) {
                onOptionChange(options[selectedIndex]);
            }
        };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handleClickOutside = ()=>{
            setIsOpen(false);
        };
        document.addEventListener("click", handleClickOutside);
        return ()=>{
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (defaultOptionIndex) {
            setSelectedOptionIndex(defaultOptionIndex - 1);
            setOptionSelected(true);
        }
    }, [
        defaultOptionIndex
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(DropDownContainer, {
        isOpen: isOpen,
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DropDownHeader, {
                onClick: toggling,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    color: !optionSelected && placeHolderText ? "text" : undefined,
                    children: !optionSelected && placeHolderText ? placeHolderText : options[selectedOptionIndex].label
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                color: "text",
                onClick: toggling
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DropDownListContainer, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DropDownList, {
                    children: options.map((option, index)=>placeHolderText || index !== selectedOptionIndex ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ListItem, {
                            onClick: onOptionClicked(index),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                children: option.label
                            })
                        }, option.label) : null)
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Select);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 63850:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "jV": () => (/* binding */ COOKIE_THEME_KEY),
/* harmony export */   "zE": () => (/* binding */ THEME_DOMAIN)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69915);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_1__]);
js_cookie__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const COOKIE_THEME_KEY = "theme";
const THEME_DOMAIN = ".pancakeswap.finance";
const useTheme = ()=>{
    const { resolvedTheme , setTheme  } = (0,next_themes__WEBPACK_IMPORTED_MODULE_3__.useTheme)();
    const theme = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(styled_components__WEBPACK_IMPORTED_MODULE_2__.ThemeContext);
    const handleSwitchTheme = (themeValue)=>{
        try {
            setTheme(themeValue);
            js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].set(COOKIE_THEME_KEY, themeValue, {
                domain: THEME_DOMAIN
            });
        } catch (err) {
        // ignore set cookie error for perp theme
        }
    };
    return {
        isDark: resolvedTheme === "dark",
        theme,
        setTheme: handleSwitchTheme
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useTheme);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 22937:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15941);
/* harmony import */ var state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16008);
/* harmony import */ var views_Nft_market_Collection_CollectionPageRouter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85885);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__, views_Nft_market_Collection_CollectionPageRouter__WEBPACK_IMPORTED_MODULE_3__]);
([swr__WEBPACK_IMPORTED_MODULE_1__, views_Nft_market_Collection_CollectionPageRouter__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

// eslint-disable-next-line camelcase



const CollectionPage = ({ fallback ={}  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swr__WEBPACK_IMPORTED_MODULE_1__.SWRConfig, {
        value: {
            fallback
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_Nft_market_Collection_CollectionPageRouter__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
    });
};
const getStaticPaths = async ()=>{
    return {
        fallback: true,
        paths: []
    };
};
const getStaticProps = async ({ params  })=>{
    const { collectionAddress  } = params;
    if (typeof collectionAddress !== "string") {
        return {
            notFound: true
        };
    }
    try {
        const collectionData = await (0,state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_2__/* .getCollection */ ._N)(collectionAddress);
        if (collectionData) {
            return {
                props: {
                    fallback: {
                        [(0,swr__WEBPACK_IMPORTED_MODULE_1__.unstable_serialize)([
                            "nftMarket",
                            "collections",
                            collectionAddress.toLowerCase()
                        ])]: {
                            ...collectionData
                        }
                    }
                },
                revalidate: 60 * 60 * 6
            };
        }
        return {
            notFound: true,
            revalidate: 60
        };
    } catch (error) {
        return {
            notFound: true,
            revalidate: 60
        };
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CollectionPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 85885:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Loader_PageLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71476);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2276);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Loader_PageLoader__WEBPACK_IMPORTED_MODULE_2__, _index__WEBPACK_IMPORTED_MODULE_3__]);
([components_Loader_PageLoader__WEBPACK_IMPORTED_MODULE_2__, _index__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const CollectionPageRouter = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    if (router.isFallback) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Loader_PageLoader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {});
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_index__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {});
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CollectionPageRouter);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 96356:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(77067);
/* harmony import */ var utils_formatBalance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59123);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52775);
/* harmony import */ var components_Layout_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44305);
/* harmony import */ var _components_MarketPageHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26920);
/* harmony import */ var _components_MarketPageTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8783);
/* harmony import */ var _components_StatBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17870);
/* harmony import */ var _components_BannerHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(25673);
/* harmony import */ var _components_BannerHeader_AvatarImage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(23273);
/* harmony import */ var _components_BaseSubMenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2390);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(30723);
/* harmony import */ var _TopBar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(31416);
/* harmony import */ var _LowestPriceStatBoxItem__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(82499);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Layout_Container__WEBPACK_IMPORTED_MODULE_4__, _components_MarketPageHeader__WEBPACK_IMPORTED_MODULE_5__, _components_MarketPageTitle__WEBPACK_IMPORTED_MODULE_6__, _components_StatBox__WEBPACK_IMPORTED_MODULE_7__, _components_BannerHeader__WEBPACK_IMPORTED_MODULE_8__, _components_BaseSubMenu__WEBPACK_IMPORTED_MODULE_10__, _TopBar__WEBPACK_IMPORTED_MODULE_12__, _LowestPriceStatBoxItem__WEBPACK_IMPORTED_MODULE_13__]);
([components_Layout_Container__WEBPACK_IMPORTED_MODULE_4__, _components_MarketPageHeader__WEBPACK_IMPORTED_MODULE_5__, _components_MarketPageTitle__WEBPACK_IMPORTED_MODULE_6__, _components_StatBox__WEBPACK_IMPORTED_MODULE_7__, _components_BannerHeader__WEBPACK_IMPORTED_MODULE_8__, _components_BaseSubMenu__WEBPACK_IMPORTED_MODULE_10__, _TopBar__WEBPACK_IMPORTED_MODULE_12__, _LowestPriceStatBoxItem__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const Header = ({ collection  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const collectionAddress = router.query.collectionAddress;
    const { totalSupply , numberTokensListed , totalVolumeBNB , banner , avatar  } = collection;
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .$G)();
    const volume = totalVolumeBNB ? parseFloat(totalVolumeBNB).toLocaleString(undefined, {
        minimumFractionDigits: 3,
        maximumFractionDigits: 3
    }) : "0";
    const itemsConfig = [
        {
            label: t("Items"),
            href: `${_constants__WEBPACK_IMPORTED_MODULE_11__/* .nftsBaseUrl */ .V}/collections/${collectionAddress}`
        },
        {
            label: t("Traits"),
            href: `${_constants__WEBPACK_IMPORTED_MODULE_11__/* .nftsBaseUrl */ .V}/collections/${collectionAddress}#traits`
        },
        {
            label: t("Activity"),
            href: `${_constants__WEBPACK_IMPORTED_MODULE_11__/* .nftsBaseUrl */ .V}/collections/${collectionAddress}#activity`
        }, 
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_MarketPageHeader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TopBar__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_BannerHeader__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        bannerImage: banner.large,
                        avatar: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_BannerHeader_AvatarImage__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                            src: avatar
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MarketPageTitle__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        title: collection.name,
                        description: collection.description ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                            color: "textSubtle",
                            children: t(collection.description)
                        }) : null,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_StatBox__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_StatBox__WEBPACK_IMPORTED_MODULE_7__/* .StatBoxItem */ .B, {
                                    title: t("Items"),
                                    stat: (0,utils_formatBalance__WEBPACK_IMPORTED_MODULE_2__/* .formatNumber */ .uf)(Number(totalSupply), 0, 0)
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_StatBox__WEBPACK_IMPORTED_MODULE_7__/* .StatBoxItem */ .B, {
                                    title: t("Items listed"),
                                    stat: numberTokensListed ? (0,utils_formatBalance__WEBPACK_IMPORTED_MODULE_2__/* .formatNumber */ .uf)(Number(numberTokensListed), 0, 0) : "0"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LowestPriceStatBoxItem__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                    collectionAddress: collection.address
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_StatBox__WEBPACK_IMPORTED_MODULE_7__/* .StatBoxItem */ .B, {
                                    title: t("Vol. (%symbol%)", {
                                        symbol: "BNB"
                                    }),
                                    stat: volume
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Layout_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_BaseSubMenu__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    items: itemsConfig,
                    activeItem: router.asPath,
                    mt: "24px",
                    mb: "8px"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 13610:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61629);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52775);
/* harmony import */ var state_nftMarket_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12016);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([state_nftMarket_storage__WEBPACK_IMPORTED_MODULE_2__]);
state_nftMarket_storage__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const ClearAllButton = ({ collectionAddress , ...props })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    const { removeAllItemFilters  } = (0,state_nftMarket_storage__WEBPACK_IMPORTED_MODULE_2__/* .useNftStorage */ .q)();
    const clearAll = ()=>{
        removeAllItemFilters(collectionAddress);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        variant: "text",
        scale: "sm",
        onClick: clearAll,
        ...props,
        children: t("Clear")
    }, "clear-all");
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClearAllButton);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 97062:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10993);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(77067);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71946);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(61629);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(99762);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(91388);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52775);
/* harmony import */ var _components_GridPlaceholder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65053);
/* harmony import */ var _components_CollectibleCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73449);
/* harmony import */ var _hooks_useCollectionNfts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(96911);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_GridPlaceholder__WEBPACK_IMPORTED_MODULE_3__, _components_CollectibleCard__WEBPACK_IMPORTED_MODULE_4__, _hooks_useCollectionNfts__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__]);
([_components_GridPlaceholder__WEBPACK_IMPORTED_MODULE_3__, _components_CollectibleCard__WEBPACK_IMPORTED_MODULE_4__, _hooks_useCollectionNfts__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const CollectionNfts = ({ collection  })=>{
    const { address: collectionAddress  } = collection || {};
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    const { nfts , isFetchingNfts , page , setPage , resultSize , isLastPage  } = (0,_hooks_useCollectionNfts__WEBPACK_IMPORTED_MODULE_5__/* .useCollectionNfts */ .X)(collectionAddress);
    const handleLoadMore = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        setPage(page + 1);
    }, [
        setPage,
        page
    ]);
    if ((!nfts || nfts?.length === 0) && isFetchingNfts) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_GridPlaceholder__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {});
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            resultSize && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                p: "16px",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    bold: true,
                    children: [
                        resultSize,
                        " ",
                        t("Results")
                    ]
                })
            }),
            nfts.length > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        gridGap: "16px",
                        gridTemplateColumns: [
                            "1fr",
                            null,
                            "repeat(3, 1fr)",
                            null,
                            "repeat(4, 1fr)"
                        ],
                        alignItems: "start",
                        children: nfts.map((nft)=>{
                            const currentAskPriceAsNumber = nft.marketData && parseFloat(nft?.marketData?.currentAskPrice);
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CollectibleCard__WEBPACK_IMPORTED_MODULE_4__/* .CollectibleLinkCard */ .ts, {
                                nft: nft,
                                currentAskPrice: currentAskPriceAsNumber > 0 ? currentAskPriceAsNumber : undefined
                            }, nft.tokenId);
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        mt: "60px",
                        mb: "12px",
                        justifyContent: "center",
                        children: !isLastPage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                            onClick: handleLoadMore,
                            scale: "sm",
                            disabled: isFetchingNfts,
                            endIcon: isFetchingNfts ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                spin: true,
                                color: "currentColor"
                            }) : undefined,
                            children: isFetchingNfts ? t("Loading") : t("Load more")
                        })
                    })
                ]
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                alignItems: "center",
                py: "48px",
                flexDirection: "column",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        width: "96px",
                        mb: "24px"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        fontWeight: 600,
                        children: t("No NFTs found")
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CollectionNfts);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 56167:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66405);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85118);
/* harmony import */ var components_Layout_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44305);
/* harmony import */ var components_ScrollToTopButton_ScrollToTopButtonV2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77137);
/* harmony import */ var _Filters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11354);
/* harmony import */ var _CollectionNfts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97062);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Layout_Container__WEBPACK_IMPORTED_MODULE_2__, components_ScrollToTopButton_ScrollToTopButtonV2__WEBPACK_IMPORTED_MODULE_3__, _Filters__WEBPACK_IMPORTED_MODULE_4__, _CollectionNfts__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__]);
([components_Layout_Container__WEBPACK_IMPORTED_MODULE_2__, components_ScrollToTopButton_ScrollToTopButtonV2__WEBPACK_IMPORTED_MODULE_3__, _Filters__WEBPACK_IMPORTED_MODULE_4__, _CollectionNfts__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const CollectionWrapper = ({ collection  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        py: "32px",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Layout_Container__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                px: [
                    0,
                    null,
                    "24px"
                ],
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Filters__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    address: collection?.address || "",
                    attributes: collection?.attributes
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Layout_Container__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CollectionNfts__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    collection: collection
                })
            }),
            /*#__PURE__*/ (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ScrollToTopButton_ScrollToTopButtonV2__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}), document.body)
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CollectionWrapper);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 11354:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(71946);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(77067);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(85118);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(10993);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(94729);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(24302);
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59969);
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_capitalize__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89699);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9882);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52775);
/* harmony import */ var views_Nft_market_components_Filters__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(30414);
/* harmony import */ var state_nftMarket_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12016);
/* harmony import */ var lodash_groupBy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(98492);
/* harmony import */ var lodash_groupBy__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_groupBy__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _hooks_useGetCollectionDistribution__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(31377);
/* harmony import */ var _ClearAllButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(13610);
/* harmony import */ var _SortSelect__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(22897);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_5__, views_Nft_market_components_Filters__WEBPACK_IMPORTED_MODULE_7__, state_nftMarket_storage__WEBPACK_IMPORTED_MODULE_8__, _hooks_useGetCollectionDistribution__WEBPACK_IMPORTED_MODULE_10__, _ClearAllButton__WEBPACK_IMPORTED_MODULE_11__, _SortSelect__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__]);
([state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_5__, views_Nft_market_components_Filters__WEBPACK_IMPORTED_MODULE_7__, state_nftMarket_storage__WEBPACK_IMPORTED_MODULE_8__, _hooks_useGetCollectionDistribution__WEBPACK_IMPORTED_MODULE_10__, _ClearAllButton__WEBPACK_IMPORTED_MODULE_11__, _SortSelect__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const GridContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z).withConfig({
    componentId: "sc-cd3bb50c-0"
})`
  margin-bottom: 16px;
  padding: 0 16px;
  grid-gap: 8px 16px;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    'filterByTitle .'
    'attributeFilters attributeFilters'
    '. sortByTitle'
    'filterByControls sortByControls';
  ${({ theme  })=>theme.mediaQueries.sm} {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
      'filterByTitle . .'
      'attributeFilters attributeFilters attributeFilters'
      '. . sortByTitle'
      'filterByControls . sortByControls';
  }
  ${({ theme  })=>theme.mediaQueries.md} {
    grid-template-columns: 2fr 5fr 1fr;
    grid-template-areas:
      'filterByTitle . .'
      'filterByControls attributeFilters attributeFilters'
      '. . sortByTitle'
      '. . sortByControls';
  }
  ${({ theme  })=>theme.mediaQueries.lg} {
    grid-template-columns: 1.3fr 5fr 1fr;
    grid-template-areas:
      'filterByTitle . sortByTitle'
      'filterByControls attributeFilters sortByControls';
  }
  ${({ theme  })=>theme.mediaQueries.xxl} {
    grid-template-columns: 1fr 5fr 1fr;
  }
`;
const FilterByTitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z).withConfig({
    componentId: "sc-cd3bb50c-1"
})`
  grid-area: filterByTitle;
`;
const FilterByControls = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z).withConfig({
    componentId: "sc-cd3bb50c-2"
})`
  grid-area: filterByControls;
`;
const SortByTitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z).withConfig({
    componentId: "sc-cd3bb50c-3"
})`
  grid-area: sortByTitle;
`;
const SortByControls = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z).withConfig({
    componentId: "sc-cd3bb50c-4"
})`
  grid-area: sortByControls;
`;
const ScrollableFlexContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z).withConfig({
    componentId: "sc-cd3bb50c-5"
})`
  grid-area: attributeFilters;
  align-items: center;
  flex: 1;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;

  ${({ theme  })=>theme.mediaQueries.md} {
    flex-wrap: wrap;
    overflow-x: revert;
  }
`;
const Filters = ({ address , attributes  })=>{
    const { data  } = (0,_hooks_useGetCollectionDistribution__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(address);
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_6__/* .useTranslation */ .$G)();
    const showOnlyNftsOnSale = (0,state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useGetNftShowOnlyOnSale */ .q4)(address);
    const { setShowOnlyOnSale  } = (0,state_nftMarket_storage__WEBPACK_IMPORTED_MODULE_8__/* .useNftStorage */ .q)();
    const { 0: activeButtonIndex , 1: setActiveButtonIndex  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(showOnlyNftsOnSale ? 1 : 0);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setActiveButtonIndex(showOnlyNftsOnSale ? 1 : 0);
    }, [
        showOnlyNftsOnSale
    ]);
    const onActiveButtonChange = (newIndex)=>{
        setShowOnlyOnSale({
            collection: address,
            showOnlyOnSale: newIndex === 1
        });
    };
    const nftFilters = (0,state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useGetNftFilters */ .DI)(address);
    const attrsByType = attributes ? lodash_groupBy__WEBPACK_IMPORTED_MODULE_9___default()(attributes, (attr)=>attr.traitType) : null;
    const uniqueTraitTypes = attrsByType ? Object.keys(attrsByType) : [];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(GridContainer, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FilterByTitle, {
                textTransform: "uppercase",
                color: "textSubtle",
                fontSize: "12px",
                bold: true,
                children: t("Filter by")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FilterByControls, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                    scale: "sm",
                    activeIndex: activeButtonIndex,
                    onItemClick: onActiveButtonChange,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                            children: t("All")
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                            children: t("On Sale")
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SortByTitle, {
                fontSize: "12px",
                textTransform: "uppercase",
                color: "textSubtle",
                fontWeight: 600,
                mb: "4px",
                children: t("Sort By")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SortByControls, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SortSelect__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                    collectionAddress: address
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ScrollableFlexContainer, {
                children: [
                    uniqueTraitTypes.map((traitType)=>{
                        const attrs = attrsByType[traitType];
                        const items = attrs.map((attr)=>({
                                label: lodash_capitalize__WEBPACK_IMPORTED_MODULE_3___default()(attr.value),
                                count: data && data[traitType] ? data[traitType][attr.value] : undefined,
                                attr
                            }));
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_Nft_market_components_Filters__WEBPACK_IMPORTED_MODULE_7__/* .ListTraitFilter */ .y, {
                            title: lodash_capitalize__WEBPACK_IMPORTED_MODULE_3___default()(traitType),
                            traitType: traitType,
                            items: items,
                            collectionAddress: address
                        }, traitType);
                    }),
                    !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_4___default()(nftFilters) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ClearAllButton__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        collectionAddress: address,
                        mb: "4px"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Filters);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 11817:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71946);
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49949);
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_orderBy__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_CollectibleCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73449);
/* harmony import */ var _hooks_useAllPancakeBunnyNfts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96724);
/* harmony import */ var _components_GridPlaceholder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65053);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_CollectibleCard__WEBPACK_IMPORTED_MODULE_2__, _components_GridPlaceholder__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__]);
([_components_CollectibleCard__WEBPACK_IMPORTED_MODULE_2__, _components_GridPlaceholder__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const PancakeBunniesCollectionNfts = ({ address , sortBy ="updatedAt" ,  })=>{
    const allPancakeBunnyNfts = (0,_hooks_useAllPancakeBunnyNfts__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(address);
    const sortedNfts = allPancakeBunnyNfts ? lodash_orderBy__WEBPACK_IMPORTED_MODULE_1___default()(allPancakeBunnyNfts, (nft)=>nft.meta[sortBy] ? Number(nft?.meta[sortBy]) : 0, [
        sortBy === "currentAskPrice" ? "asc" : "desc", 
    ]) : [];
    if (!sortedNfts.length) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_GridPlaceholder__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {});
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            gridGap: "16px",
            gridTemplateColumns: [
                "1fr",
                null,
                "repeat(3, 1fr)",
                null,
                "repeat(4, 1fr)"
            ],
            alignItems: "start",
            children: sortedNfts.map((nft)=>{
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CollectibleCard__WEBPACK_IMPORTED_MODULE_2__/* .CollectibleLinkCard */ .ts, {
                    nft: nft
                }, `${nft?.tokenId}-${nft?.collectionName}`);
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PancakeBunniesCollectionNfts);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 22897:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Select_Select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76688);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52775);
/* harmony import */ var state_nftMarket_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12016);
/* harmony import */ var state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9882);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Select_Select__WEBPACK_IMPORTED_MODULE_1__, state_nftMarket_storage__WEBPACK_IMPORTED_MODULE_3__, state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_4__]);
([components_Select_Select__WEBPACK_IMPORTED_MODULE_1__, state_nftMarket_storage__WEBPACK_IMPORTED_MODULE_3__, state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const SortSelect = ({ collectionAddress  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    const { setOrdering  } = (0,state_nftMarket_storage__WEBPACK_IMPORTED_MODULE_3__/* .useNftStorage */ .q)();
    const selectedOrder = (0,state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useGetNftOrdering */ .D7)(collectionAddress);
    const handleChange = (newOption)=>{
        const { field , direction  } = newOption.value;
        setOrdering({
            collection: collectionAddress,
            field,
            direction
        });
    };
    const sortByItems = [
        {
            label: t("Recently listed"),
            value: {
                field: "updatedAt",
                direction: "desc"
            }
        },
        {
            label: t("Lowest price"),
            value: {
                field: "currentAskPrice",
                direction: "asc"
            }
        },
        {
            label: t("Highest price"),
            value: {
                field: "currentAskPrice",
                direction: "desc"
            }
        },
        {
            label: t("Token ID"),
            value: {
                field: "tokenId",
                direction: "asc"
            }
        }, 
    ];
    const defaultOptionIndex = sortByItems.findIndex((option)=>option.value.field === selectedOrder.field && option.value.direction === selectedOrder.direction);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Select_Select__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        options: sortByItems,
        onOptionChange: handleChange,
        defaultOptionIndex: defaultOptionIndex !== -1 ? defaultOptionIndex : undefined
    }, defaultOptionIndex !== -1 ? defaultOptionIndex : undefined);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SortSelect);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7333:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(10993);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(85118);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(77067);
/* harmony import */ var state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9882);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52775);
/* harmony import */ var components_Select_Select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(76688);
/* harmony import */ var components_Layout_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(44305);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(30723);
/* harmony import */ var _PancakeBunniesCollectionNfts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(11817);
/* harmony import */ var _CollectionWrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(56167);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_3__, components_Select_Select__WEBPACK_IMPORTED_MODULE_5__, components_Layout_Container__WEBPACK_IMPORTED_MODULE_6__, _PancakeBunniesCollectionNfts__WEBPACK_IMPORTED_MODULE_8__, _CollectionWrapper__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__]);
([state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_3__, components_Select_Select__WEBPACK_IMPORTED_MODULE_5__, components_Layout_Container__WEBPACK_IMPORTED_MODULE_6__, _PancakeBunniesCollectionNfts__WEBPACK_IMPORTED_MODULE_8__, _CollectionWrapper__WEBPACK_IMPORTED_MODULE_9__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const Items = ()=>{
    const collectionAddress = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)().query.collectionAddress;
    const { 0: sortBy , 1: setSortBy  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("updatedAt");
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_4__/* .useTranslation */ .$G)();
    const collection = (0,state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useGetCollection */ .YD)(collectionAddress);
    const isPBCollection = collectionAddress.toLowerCase() === _constants__WEBPACK_IMPORTED_MODULE_7__/* .pancakeBunniesAddress.toLowerCase */ .J.toLowerCase();
    const sortByItems = [
        {
            label: t("Recently listed"),
            value: "updatedAt"
        },
        {
            label: t("Lowest price"),
            value: "currentAskPrice"
        }, 
    ];
    const handleChange = (newOption)=>{
        setSortBy(newOption.value);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: isPBCollection ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layout_Container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            mb: "24px",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    alignItems: "center",
                    justifyContent: [
                        "flex-start",
                        null,
                        null,
                        "flex-end"
                    ],
                    mb: "24px",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        minWidth: "165px",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                fontSize: "12px",
                                textTransform: "uppercase",
                                color: "textSubtle",
                                fontWeight: 600,
                                mb: "4px",
                                children: t("Sort By")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Select_Select__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                options: sortByItems,
                                onOptionChange: handleChange
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PancakeBunniesCollectionNfts__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    address: collection?.address,
                    sortBy: sortBy
                })
            ]
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CollectionWrapper__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            collection: collection
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Items);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 82499:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15941);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52775);
/* harmony import */ var state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16008);
/* harmony import */ var _components_StatBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17870);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__, _components_StatBox__WEBPACK_IMPORTED_MODULE_4__]);
([swr__WEBPACK_IMPORTED_MODULE_1__, _components_StatBox__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const LowestPriceStatBoxItem = ({ collectionAddress , ...props })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    const { data: lowestCollectionPrice = null  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__["default"])(collectionAddress ? [
        collectionAddress,
        "lowestPrice"
    ] : null, ()=>(0,state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_3__/* .getLeastMostPriceInCollection */ .Um)(collectionAddress));
    const formattedLowestPrice = lowestCollectionPrice !== null ? lowestCollectionPrice ? lowestCollectionPrice.toLocaleString(undefined, {
        minimumFractionDigits: 3,
        maximumFractionDigits: 3
    }) : "-" : null;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_StatBox__WEBPACK_IMPORTED_MODULE_4__/* .StatBoxItem */ .B, {
        title: t("Lowest (%symbol%)", {
            symbol: "BNB"
        }),
        stat: formattedLowestPrice,
        ...props
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LowestPriceStatBoxItem);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 31416:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10993);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(77577);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(85118);
/* harmony import */ var components_NextLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12966);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52775);
/* harmony import */ var views_Nft_market_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30723);
/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60658);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_SearchBar__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__]);
([_components_SearchBar__WEBPACK_IMPORTED_MODULE_5__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const BackLink = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(components_NextLink__WEBPACK_IMPORTED_MODULE_1__/* .NextLinkFromReactRouter */ .a).withConfig({
    componentId: "sc-835603fd-0"
})`
  align-items: center;
  color: ${({ theme  })=>theme.colors.primary};
  display: inline-flex;
  font-weight: 600;
`;
const TopBar = ()=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .$G)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        alignItems: "center",
        justifyContent: "space-between",
        mb: "24px",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(BackLink, {
                to: `${views_Nft_market_constants__WEBPACK_IMPORTED_MODULE_4__/* .nftsBaseUrl */ .V}/collections`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        color: "primary",
                        width: "24px"
                    }),
                    t("All Collections")
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SearchBar__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TopBar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 83950:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ REQUEST_SIZE)
/* harmony export */ });
const REQUEST_SIZE = 100;


/***/ }),

/***/ 2276:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Loader_PageLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71476);
/* harmony import */ var components_Layout_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75915);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9882);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(96356);
/* harmony import */ var _Items__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7333);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Loader_PageLoader__WEBPACK_IMPORTED_MODULE_1__, components_Layout_Page__WEBPACK_IMPORTED_MODULE_2__, state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_6__, _Header__WEBPACK_IMPORTED_MODULE_7__, _Items__WEBPACK_IMPORTED_MODULE_8__]);
([components_Loader_PageLoader__WEBPACK_IMPORTED_MODULE_1__, components_Layout_Page__WEBPACK_IMPORTED_MODULE_2__, state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_6__, _Header__WEBPACK_IMPORTED_MODULE_7__, _Items__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const Traits = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>Promise.all(/* import() */[__webpack_require__.e(3393), __webpack_require__.e(904), __webpack_require__.e(7193)]).then(__webpack_require__.bind(__webpack_require__, 67193)), {
    loadableGenerated: {
        modules: [
            "..\\views\\Nft\\market\\Collection\\index.tsx -> " + "./Traits"
        ]
    },
    loading: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Loader_PageLoader__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
});
const Activity = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>Promise.all(/* import() */[__webpack_require__.e(309), __webpack_require__.e(4141), __webpack_require__.e(7357), __webpack_require__.e(8134), __webpack_require__.e(904), __webpack_require__.e(5602), __webpack_require__.e(1696)]).then(__webpack_require__.bind(__webpack_require__, 41696)), {
    loadableGenerated: {
        modules: [
            "..\\views\\Nft\\market\\Collection\\index.tsx -> " + "./Activity"
        ]
    },
    loading: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Loader_PageLoader__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
});
const getHashFromRouter = (router)=>router.asPath.match(/#([a-z0-9]+)/gi);
const Collection = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const collectionAddress = router.query.collectionAddress;
    const collection = (0,state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useGetCollection */ .YD)(collectionAddress);
    const hash = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(()=>getHashFromRouter(router)?.[0], [
        router
    ]);
    if (!collection) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Loader_PageLoader__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {});
    }
    let content = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Items__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {});
    if (hash === "#traits") {
        content = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Traits, {});
    }
    if (hash === "#activity") {
        content = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Activity, {});
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Layout_Page__WEBPACK_IMPORTED_MODULE_2__/* .PageMeta */ .V, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Header__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                collection: collection
            }),
            content
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Collection);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 23273:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const AvatarImage = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.attrs(({ alt  })=>({
        alt
    })).withConfig({
    componentId: "sc-20e79e7-0"
})`
  background: url('${({ src  })=>src}');
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  position: relative;
  width: 96px;
  height: 96px;
  border: 4px ${({ borderColor  })=>borderColor || "#f2ecf2"} solid;

  & > img {
    border-radius: 50%;
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AvatarImage);


/***/ }),

/***/ 15210:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const StyledBannerImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-c46f9cd7-0"
})`
  ${({ theme  })=>`background-color: ${theme.colors.cardBorder}`};
  flex: none;
  position: relative;
  width: 100%;
  border-radius: 32px;
  height: 123px;
  overflow: hidden;

  ${({ theme  })=>theme.mediaQueries.sm} {
    height: 192px;
  }

  ${({ theme  })=>theme.mediaQueries.md} {
    height: 256px;
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyledBannerImageWrapper);


/***/ }),

/***/ 25673:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10993);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85118);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BannerImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15210);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__]);
([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const BannerHeader = ({ bannerImage , bannerAlt , avatar , children , ...props })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        flexDirection: "column",
        mb: "24px",
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            position: "relative",
            pb: "56px",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BannerImage__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                        src: bannerImage,
                        alt: bannerAlt,
                        layout: "fill",
                        objectFit: "cover",
                        priority: true
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    position: "absolute",
                    bottom: 0,
                    left: -4,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        alignItems: "flex-end",
                        children: [
                            avatar,
                            children
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BannerHeader);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2390:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92087);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__]);
_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const BaseSubMenu = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z).withConfig({
    componentId: "sc-8f8e612f-0"
})`
  background-color: transparent;
  border-bottom: 1px ${({ theme  })=>theme.colors.cardBorder} solid;

  > div {
    background-color: transparent;
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseSubMenu);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 11393:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);


const FilterFooter = ({ children , ...props })=>/*#__PURE__*/ _jsx(Grid, {
        gridGap: "16px",
        gridTemplateColumns: "repeat(2,1fr)",
        ...props,
        px: "24px",
        py: "16px",
        borderTop: "1px solid",
        borderTopColor: "cardBorder",
        children: children
    });
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (FilterFooter)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 25896:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ak": () => (/* binding */ StyledItemRow),
/* harmony export */   "Lb": () => (/* binding */ FilterButton),
/* harmony export */   "PZ": () => (/* binding */ CloseButton),
/* harmony export */   "Re": () => (/* binding */ ItemImage),
/* harmony export */   "_8": () => (/* binding */ SearchWrapper),
/* harmony export */   "yR": () => (/* binding */ TriggerButton)
/* harmony export */ });
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10993);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90599);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61629);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6657);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__]);
_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const StyledItemRow = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z).withConfig({
    componentId: "sc-b19fec1f-0"
})`
  cursor: pointer;
  user-select: none;
`;
const ItemImage = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z).withConfig({
    componentId: "sc-b19fec1f-1"
})`
  border-radius: 50%;
`;
const SearchWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z).withConfig({
    componentId: "sc-b19fec1f-2"
})`
  background: ${({ theme  })=>theme.colors.dropdown};
  border-radius: 24px 24px 0 0;
`;
const FilterButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z).withConfig({
    componentId: "sc-b19fec1f-3"
})`
  align-items: center;
  cursor: pointer;
  user-select: none;

  svg {
    pointer-events: none;
  }
`;
const TriggerButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z).withConfig({
    componentId: "sc-b19fec1f-4"
})`
  white-space: nowrap;
  ${({ hasItem  })=>hasItem && `  
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    padding-right: 8px;
  `}
`;
const CloseButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z).withConfig({
    componentId: "sc-b19fec1f-5"
})`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 19829:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ ListTraitFilter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(61629);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6657);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(10993);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(85118);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(27843);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(95487);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(29562);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(47495);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(77067);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(62362);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(83686);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(4953);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52775);
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49949);
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_orderBy__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9882);
/* harmony import */ var state_nftMarket_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12016);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ListFilter_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(25896);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(57584);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_4__, state_nftMarket_storage__WEBPACK_IMPORTED_MODULE_5__, _ListFilter_styles__WEBPACK_IMPORTED_MODULE_7__, _styles__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__]);
([state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_4__, state_nftMarket_storage__WEBPACK_IMPORTED_MODULE_5__, _ListFilter_styles__WEBPACK_IMPORTED_MODULE_7__, _styles__WEBPACK_IMPORTED_MODULE_8__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const TriggerButton = styled_components__WEBPACK_IMPORTED_MODULE_6___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z).withConfig({
    componentId: "sc-6650057c-0"
})`
  ${({ hasItem  })=>hasItem && `
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    padding-right: 8px;
  `}
`;
const CloseButton = styled_components__WEBPACK_IMPORTED_MODULE_6___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z).withConfig({
    componentId: "sc-6650057c-1"
})`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;
const ListTraitFilter = ({ title , traitType , items , collectionAddress ,  })=>{
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    const { updateItemFilters  } = (0,state_nftMarket_storage__WEBPACK_IMPORTED_MODULE_5__/* .useNftStorage */ .q)();
    const { 0: isOpen , 1: setIsOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: query , 1: setQuery  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: orderState , 1: setOrderState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        orderKey: "count",
        orderDir: "asc"
    });
    const wrapperRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const menuRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const nftFilters = (0,state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useGetNftFilters */ .DI)(collectionAddress);
    const { orderKey , orderDir  } = orderState;
    const traitFilter = nftFilters[traitType];
    const isTraitSelected = !!traitFilter;
    const filteredItems = query && query.length > 1 ? items.filter((item)=>item.label.toLowerCase().indexOf(query.toLowerCase()) !== -1) : items;
    const handleClearItem = ()=>{
        const newFilters = {
            ...nftFilters
        };
        delete newFilters[traitType];
        updateItemFilters({
            collectionAddress,
            nftFilters: newFilters
        });
    };
    const handleMenuClick = ()=>setIsOpen(!isOpen);
    const handleChange = (evt)=>{
        const { value  } = evt.target;
        setQuery(value);
    };
    const handleItemSelect = ({ attr  })=>{
        updateItemFilters({
            collectionAddress,
            nftFilters: {
                ...nftFilters,
                [traitType]: attr
            }
        });
    };
    const toggleSort = (newOrderKey)=>()=>{
            setOrderState((prevOrderDir)=>{
                if (prevOrderDir.orderKey !== newOrderKey) {
                    return {
                        orderKey: newOrderKey,
                        orderDir: "asc"
                    };
                }
                return {
                    orderKey: newOrderKey,
                    orderDir: prevOrderDir.orderDir === "asc" ? "desc" : "asc"
                };
            });
        };
    // @TODO Fix this in the Toolkit
    // This is a fix to ensure the "isOpen" value is aligned with the menus's (to avoid a double click)
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handleClickOutside = ({ target  })=>{
            if (wrapperRef.current && menuRef.current && !menuRef.current.contains(target) && !wrapperRef.current.contains(target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return ()=>{
            document.removeEventListener("click", handleClickOutside);
        };
    }, [
        setIsOpen,
        wrapperRef,
        menuRef
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
        alignItems: "center",
        mr: "4px",
        mb: "4px",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                ref: wrapperRef,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                    component: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TriggerButton, {
                        onClick: handleMenuClick,
                        variant: isTraitSelected ? "subtle" : "light",
                        scale: "sm",
                        hasItem: isTraitSelected,
                        children: title
                    }),
                    isOpen: isOpen,
                    options: {
                        placement: "bottom"
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                        maxWidth: "375px",
                        ref: menuRef,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ListFilter_styles__WEBPACK_IMPORTED_MODULE_7__/* .SearchWrapper */ ._8, {
                                alignItems: "center",
                                p: "16px",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                    startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                        color: "textSubtle"
                                    }),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                        name: "query",
                                        placeholder: t("Search"),
                                        onChange: handleChange,
                                        value: query
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                alignItems: "center",
                                p: "16px",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_ListFilter_styles__WEBPACK_IMPORTED_MODULE_7__/* .FilterButton */ .Lb, {
                                        onClick: toggleSort("label"),
                                        style: {
                                            flex: 1
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                                fontSize: "12px",
                                                color: "secondary",
                                                fontWeight: "bold",
                                                textTransform: "uppercase",
                                                children: t("Name")
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                width: "18px",
                                                children: [
                                                    orderKey === "label" && orderDir === "asc" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                                        width: "18px",
                                                        color: "secondary"
                                                    }),
                                                    orderKey === "label" && orderDir === "desc" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                                                        width: "18px",
                                                        color: "secondary"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_ListFilter_styles__WEBPACK_IMPORTED_MODULE_7__/* .FilterButton */ .Lb, {
                                        onClick: toggleSort("count"),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                                fontSize: "12px",
                                                color: "secondary",
                                                fontWeight: "bold",
                                                textTransform: "uppercase",
                                                children: t("Count")
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                width: "18px",
                                                children: [
                                                    orderKey === "count" && orderDir === "asc" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                                        width: "18px",
                                                        color: "secondary"
                                                    }),
                                                    orderKey === "count" && orderDir === "desc" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                                                        width: "18px",
                                                        color: "secondary"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                height: "240px",
                                overflowY: "auto",
                                children: filteredItems.length > 0 ? lodash_orderBy__WEBPACK_IMPORTED_MODULE_3___default()(filteredItems, orderKey, orderDir).map((filteredItem)=>{
                                    const handleSelect = ()=>handleItemSelect(filteredItem);
                                    const isItemSelected = traitFilter ? traitFilter.value === filteredItem.attr.value : false;
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_8__/* .TraitItemRow */ .u, {
                                        item: filteredItem,
                                        isSelected: isItemSelected,
                                        onSelect: handleSelect
                                    }, filteredItem.label);
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                    alignItems: "center",
                                    justifyContent: "center",
                                    height: "230px",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                        color: "textDisabled",
                                        textAlign: "center",
                                        children: t("No results found")
                                    })
                                })
                            })
                        ]
                    })
                })
            }),
            isTraitSelected && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CloseButton, {
                variant: isTraitSelected ? "subtle" : "light",
                scale: "sm",
                onClick: handleClearItem,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                    color: "currentColor",
                    width: "18px"
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 57584:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ TraitItemRow)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(77067);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19145);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87553);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_formatBalance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59123);
/* harmony import */ var _ListFilter_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25896);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ListFilter_styles__WEBPACK_IMPORTED_MODULE_3__]);
_ListFilter_styles__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const TraitItemRow = ({ item , isSelected , onSelect  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_ListFilter_styles__WEBPACK_IMPORTED_MODULE_3__/* .StyledItemRow */ .Ak, {
        alignItems: "center",
        px: "16px",
        py: "8px",
        onClick: onSelect,
        children: [
            item.image && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ListFilter_styles__WEBPACK_IMPORTED_MODULE_3__/* .ItemImage */ .Re, {
                src: item.image,
                height: 48,
                width: 48,
                mr: "16px"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                style: {
                    flex: 1
                },
                children: item.label
            }),
            item.count !== undefined && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                color: "textSubtle",
                px: "8px",
                children: (0,utils_formatBalance__WEBPACK_IMPORTED_MODULE_2__/* .formatNumber */ .uf)(item.count, 0, 0)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                name: "item-select",
                scale: "sm",
                checked: isSelected,
                value: item.label,
                onChange: (lodash_noop__WEBPACK_IMPORTED_MODULE_1___default()),
                ml: "24px"
            })
        ]
    });

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 69208:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export MinMaxFilter */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52775);
/* harmony import */ var _FilterFooter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11393);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_FilterFooter__WEBPACK_IMPORTED_MODULE_3__]);
_FilterFooter__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const MinMaxFilter = ({ onApply , onClear , max , min =0 , ...props })=>{
    const { t  } = useTranslation();
    const { 0: currentMax , 1: setCurrentMax  } = useState(max);
    const { 0: currentMin , 1: setCurrentMin  } = useState(min);
    const { 0: isError , 1: setIsError  } = useState(min > max);
    const handleMinChange = (newMin)=>{
        setCurrentMin(newMin ? parseFloat(newMin) : 0);
    };
    const handleMaxChange = (newMax)=>{
        setCurrentMax(parseFloat(newMax));
    };
    const handleApply = ()=>{
        onApply(currentMin, currentMax);
    };
    // TODO: circle back to this
    const handleClear = ()=>{
        setCurrentMax(max);
        setCurrentMin(min);
        if (onClear) {
            onClear();
        }
    };
    // If a change comes down from the top update local state
    useEffect(()=>{
        setCurrentMax(max);
    }, [
        max,
        setCurrentMax
    ]);
    useEffect(()=>{
        setCurrentMin(min);
    }, [
        min,
        setCurrentMin
    ]);
    useEffect(()=>{
        setIsError(currentMin > currentMax);
    }, [
        currentMin,
        currentMax,
        setIsError
    ]);
    return /*#__PURE__*/ _jsx(InlineMenu, {
        component: /*#__PURE__*/ _jsx(Button, {
            variant: "light",
            scale: "sm",
            children: t("Price")
        }),
        ...props,
        children: /*#__PURE__*/ _jsxs(Box, {
            width: "320px",
            children: [
                /*#__PURE__*/ _jsx(Box, {
                    px: "24px",
                    py: "16px",
                    children: /*#__PURE__*/ _jsxs(Grid, {
                        gridGap: "16px",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        children: [
                            /*#__PURE__*/ _jsx(TextField, {
                                label: t("Min"),
                                value: currentMin,
                                onUserInput: handleMinChange,
                                isWarning: isError
                            }),
                            /*#__PURE__*/ _jsx(TextField, {
                                label: t("Max"),
                                value: currentMax,
                                onUserInput: handleMaxChange,
                                isWarning: isError
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ _jsxs(FilterFooter, {
                    children: [
                        /*#__PURE__*/ _jsx(Button, {
                            variant: "secondary",
                            onClick: handleClear,
                            children: t("Clear")
                        }),
                        /*#__PURE__*/ _jsx(Button, {
                            onClick: handleApply,
                            disabled: isError,
                            children: t("Apply")
                        })
                    ]
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 30414:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* reexport safe */ _ListTraitFilter__WEBPACK_IMPORTED_MODULE_0__.y)
/* harmony export */ });
/* harmony import */ var _ListTraitFilter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19829);
/* harmony import */ var _MinMaxFilter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69208);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ListTraitFilter__WEBPACK_IMPORTED_MODULE_0__, _MinMaxFilter__WEBPACK_IMPORTED_MODULE_1__]);
([_ListTraitFilter__WEBPACK_IMPORTED_MODULE_0__, _MinMaxFilter__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 65053:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export GridPlaceholderItem */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85118);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97458);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71946);
/* harmony import */ var lodash_times__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4354);
/* harmony import */ var lodash_times__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_times__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__]);
([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const GridPlaceholderItem = (props)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                height: "258px",
                mb: "8px"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                width: "30%",
                mb: "4px"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                width: "45%",
                mb: "16px"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
        ]
    });
const GridPlaceholder = ({ numItems =12 , ...props })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        gridGap: "16px",
        gridTemplateColumns: [
            "1fr",
            null,
            null,
            "repeat(4, 1fr)"
        ],
        ...props,
        children: lodash_times__WEBPACK_IMPORTED_MODULE_1___default()(numItems).map((itemKey)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GridPlaceholderItem, {}, itemKey))
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GridPlaceholder);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 26920:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_PageHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36099);
/* harmony import */ var hooks_useTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63850);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_PageHeader__WEBPACK_IMPORTED_MODULE_1__, hooks_useTheme__WEBPACK_IMPORTED_MODULE_2__]);
([components_PageHeader__WEBPACK_IMPORTED_MODULE_1__, hooks_useTheme__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const MarketPageHeader = (props)=>{
    const { theme  } = (0,hooks_useTheme__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)();
    const background = theme.isDark ? "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)" : "linear-gradient(111.68deg, #f2ecf2 0%, #e8f2f6 100%)";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_PageHeader__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        background: background,
        ...props
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MarketPageHeader);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8783:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71946);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85118);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77208);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__]);
([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const MarketPageTitle = ({ title , description , children , ...props })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        gridGap: "16px",
        alignItems: "center",
        gridTemplateColumns: [
            "1fr",
            null,
            null,
            null,
            "repeat(2, 1fr)"
        ],
        ...props,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        as: "h1",
                        scale: "xl",
                        color: "secondary",
                        mb: "16px",
                        children: title
                    }),
                    description
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                children: children
            })
        ]
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MarketPageTitle);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 60658:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_AddressInputSelect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32711);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_AddressInputSelect__WEBPACK_IMPORTED_MODULE_1__]);
components_AddressInputSelect__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const SearchBar = (props)=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const handleAddressClick = (value)=>{
        router.push(`/profile/${value}`);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_AddressInputSelect__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        onAddressClick: handleAddressClick,
        ...props
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchBar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 17870:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ StatBoxItem),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85118);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77067);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(97458);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10993);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__]);
([_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const StatBoxItem = ({ title , stat , ...props })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                fontSize: "12px",
                color: "textSubtle",
                textAlign: "center",
                children: title
            }),
            stat === null ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                height: "24px",
                width: "50%",
                mx: "auto"
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                fontWeight: "600",
                textAlign: "center",
                children: stat
            })
        ]
    });
const StatBox = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z).withConfig({
    componentId: "sc-5a83567f-0"
})`
  align-items: center;
  background: ${({ theme  })=>theme.colors.invertedContrast};
  border: 1px solid ${({ theme  })=>theme.colors.cardBorder};
  border-radius: ${({ theme  })=>theme.radii.card};
  justify-content: space-around;
  padding: 8px;
  width: 100%;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StatBox);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 96724:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16008);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30723);



// If collection is PancakeBunnies - gets all available bunnies, otherwise - null
const useAllPancakeBunnyNfts = (collectionAddress)=>{
    const { 0: allPancakeBunnyNfts , 1: setAllPancakeBunnyNfts  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const isPBCollection = collectionAddress === _constants__WEBPACK_IMPORTED_MODULE_2__/* .pancakeBunniesAddress */ .J;
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const fetchPancakeBunnies = async ()=>{
            // In order to not define special TS type just for PancakeBunnies display we're hacking a little bit into NftToken type.
            // On this page we just want to display all bunnies with their lowest prices and updates on the market
            // Since some bunnies might not be on the market at all, we don't refer to the redux nfts state (which stores NftToken with actual token ids)
            // We merely request from API all available bunny ids with their metadata and query subgraph for lowest price and latest updates.
            const response = await (0,state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_1__/* .getNftsFromCollectionApi */ .Rq)(_constants__WEBPACK_IMPORTED_MODULE_2__/* .pancakeBunniesAddress */ .J);
            if (!response) return;
            const { data  } = response;
            const bunnyIds = Object.keys(data);
            const [lowestPrices, latestUpdates] = await Promise.all([
                (0,state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_1__/* .getAllPancakeBunniesLowestPrice */ .LU)(bunnyIds),
                (0,state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_1__/* .getAllPancakeBunniesRecentUpdatedAt */ .nP)(bunnyIds), 
            ]);
            const allBunnies = bunnyIds.map((bunnyId)=>{
                return {
                    // tokenId here is just a dummy one to satisfy TS. TokenID does not play any role in gird display below
                    tokenId: data[bunnyId].name,
                    name: data[bunnyId].name,
                    description: data[bunnyId].description,
                    collectionAddress: _constants__WEBPACK_IMPORTED_MODULE_2__/* .pancakeBunniesAddress */ .J,
                    collectionName: data[bunnyId].collection.name,
                    image: data[bunnyId].image,
                    attributes: [
                        {
                            traitType: "bunnyId",
                            value: bunnyId,
                            displayType: null
                        }, 
                    ],
                    meta: {
                        currentAskPrice: lowestPrices[bunnyId],
                        updatedAt: latestUpdates[bunnyId]
                    }
                };
            });
            setAllPancakeBunnyNfts(allBunnies);
        };
        if (isPBCollection && !allPancakeBunnyNfts) {
            fetchPancakeBunnies();
        }
    }, [
        isPBCollection,
        allPancakeBunnyNfts
    ]);
    return allPancakeBunnyNfts;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useAllPancakeBunnyNfts);


/***/ }),

/***/ 96911:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ useCollectionNfts)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9882);
/* harmony import */ var config_constants_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75759);
/* harmony import */ var state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16008);
/* harmony import */ var swr_infinite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(91448);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89699);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69309);
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqBy__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_fromPairs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57626);
/* harmony import */ var lodash_fromPairs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_fromPairs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Collection_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(83950);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_1__, swr_infinite__WEBPACK_IMPORTED_MODULE_4__]);
([state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_1__, swr_infinite__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const fetchTokenIdsFromFilter = async (address, settings)=>{
    const filterObject = settings.nftFilters;
    const attrParams = lodash_fromPairs__WEBPACK_IMPORTED_MODULE_7___default()(Object.values(filterObject).map((attr)=>[
            attr.traitType,
            attr.value
        ]));
    const attrFilters = !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_5___default()(attrParams) ? await (0,state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_3__/* .fetchNftsFiltered */ .nh)(address, attrParams) : null;
    return attrFilters ? Object.values(attrFilters.data).map((apiToken)=>apiToken.tokenId) : null;
};
const fetchMarketDataNfts = async (collection, settings, page, tokenIdsFromFilter)=>{
    const whereClause = tokenIdsFromFilter ? {
        collection: collection.address.toLowerCase(),
        isTradable: true,
        tokenId_in: tokenIdsFromFilter
    } : {
        collection: collection.address.toLowerCase(),
        isTradable: true
    };
    const subgraphRes = await (0,state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_3__/* .getNftsMarketData */ .T5)(whereClause, _Collection_config__WEBPACK_IMPORTED_MODULE_8__/* .REQUEST_SIZE */ .z, settings.field, settings.direction, page * _Collection_config__WEBPACK_IMPORTED_MODULE_8__/* .REQUEST_SIZE */ .z);
    const apiRequestPromises = subgraphRes.map((marketNft)=>(0,state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_3__/* .getNftApi */ .hb)(collection.address, marketNft.tokenId));
    const apiResponses = await Promise.all(apiRequestPromises);
    const newNfts = apiResponses.reduce((acc, apiNft)=>{
        if (apiNft) {
            acc.push({
                ...apiNft,
                collectionAddress: collection.address,
                collectionName: apiNft.collection.name,
                marketData: subgraphRes.find((marketNft)=>marketNft.tokenId === apiNft.tokenId)
            });
        }
        return acc;
    }, []);
    return newNfts;
};
const tokenIdsFromFallback = (collection, tokenIdsFromFilter, fetchedNfts, fallbackPage)=>{
    let tokenIds = [];
    const startIndex = fallbackPage * _Collection_config__WEBPACK_IMPORTED_MODULE_8__/* .REQUEST_SIZE */ .z;
    const endIndex = (fallbackPage + 1) * _Collection_config__WEBPACK_IMPORTED_MODULE_8__/* .REQUEST_SIZE */ .z;
    if (tokenIdsFromFilter) {
        tokenIds = tokenIdsFromFilter.filter((tokenId)=>!fetchedNfts.some((fetchedNft)=>fetchedNft.tokenId === tokenId)).slice(startIndex, endIndex);
    } else {
        const totalSupply = parseInt(collection?.totalSupply);
        let counter = startIndex;
        let index = startIndex;
        while(counter < endIndex){
            if (index > totalSupply) {
                break;
            }
            // eslint-disable-next-line no-loop-func
            if (!fetchedNfts.some((fetchedNft)=>parseInt(fetchedNft.tokenId) === index)) {
                tokenIds.push(index.toString());
                counter++;
            }
            index++;
        }
    }
    return tokenIds;
};
const fetchAllNfts = async (collection, settings, page, tokenIdsFromFilter, fetchedNfts, nftFallbackMode, nftFallbackPage)=>{
    const newNfts = [];
    let tokenIds = [];
    let collectionNftsResponse = null;
    let fallbackMode = nftFallbackMode;
    let fallbackPage = nftFallbackPage;
    if (settings.field !== "tokenId" && !fallbackMode) {
        const marketDataNfts = await fetchMarketDataNfts(collection, settings, page, tokenIdsFromFilter);
        if (marketDataNfts.length) {
            newNfts.push(...marketDataNfts);
        }
        if (newNfts.length < _Collection_config__WEBPACK_IMPORTED_MODULE_8__/* .REQUEST_SIZE */ .z) {
            // eslint-disable-next-line no-param-reassign
            fallbackMode = true;
            fetchedNfts.push(...newNfts);
        } else {
            return {
                nfts: newNfts,
                fallbackMode,
                fallbackPage
            };
        }
    }
    if (fallbackMode) {
        tokenIds = tokenIdsFromFallback(collection, tokenIdsFromFilter, fetchedNfts, fallbackPage);
        // eslint-disable-next-line no-param-reassign
        fallbackPage += 1;
    } else if (tokenIdsFromFilter) {
        tokenIds = tokenIdsFromFilter.slice(page * _Collection_config__WEBPACK_IMPORTED_MODULE_8__/* .REQUEST_SIZE */ .z, (page + 1) * _Collection_config__WEBPACK_IMPORTED_MODULE_8__/* .REQUEST_SIZE */ .z);
    } else {
        collectionNftsResponse = await (0,state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_3__/* .getNftsFromCollectionApi */ .Rq)(collection.address, _Collection_config__WEBPACK_IMPORTED_MODULE_8__/* .REQUEST_SIZE */ .z, page + 1);
        if (collectionNftsResponse?.data) {
            tokenIds = Object.values(collectionNftsResponse.data).map((nft)=>nft.tokenId);
        }
    }
    if (tokenIds.length) {
        const nftsMarket = await (0,state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_3__/* .getMarketDataForTokenIds */ .Z1)(collection.address, tokenIds);
        const responsesPromises = tokenIds.map(async (id)=>{
            const apiMetadata = collectionNftsResponse ? collectionNftsResponse.data[id] : await (0,state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_3__/* .getNftApi */ .hb)(collection.address, id);
            if (apiMetadata) {
                const marketData = nftsMarket.find((nft)=>nft.tokenId === id);
                return {
                    tokenId: id,
                    name: apiMetadata.name,
                    description: apiMetadata.description,
                    collectionName: apiMetadata.collection.name,
                    collectionAddress: collection.address,
                    image: apiMetadata.image,
                    attributes: apiMetadata.attributes,
                    marketData
                };
            }
            return null;
        });
        const responseNfts = (await Promise.all(responsesPromises)).filter((x)=>x);
        newNfts.push(...responseNfts);
        return {
            nfts: newNfts,
            fallbackMode,
            fallbackPage
        };
    }
    return {
        nfts: [],
        fallbackMode,
        fallbackPage
    };
};
const useCollectionNfts = (collectionAddress)=>{
    const fetchedNfts = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);
    const fallbackMode = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    const fallbackModePage = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
    const isLastPage = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    const collection = (0,state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useGetCollection */ .YD)(collectionAddress);
    const { field , direction  } = (0,state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useGetNftOrdering */ .D7)(collectionAddress);
    const showOnlyNftsOnSale = (0,state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useGetNftShowOnlyOnSale */ .q4)(collectionAddress);
    const nftFilters = (0,state_nftMarket_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useGetNftFilters */ .DI)(collectionAddress);
    const { 0: itemListingSettings , 1: setItemListingSettings  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        field,
        direction,
        showOnlyNftsOnSale,
        nftFilters
    });
    // We don't know the amount in advance if nft filters exist
    const resultSize = !Object.keys(nftFilters).length && collection ? showOnlyNftsOnSale ? collection.numberTokensListed : collection?.totalSupply : null;
    const itemListingSettingsJson = JSON.stringify(itemListingSettings);
    const filtersJson = JSON.stringify(nftFilters);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        setItemListingSettings(()=>({
                field,
                direction,
                showOnlyNftsOnSale,
                nftFilters: JSON.parse(filtersJson)
            }));
        fallbackMode.current = false;
        fallbackModePage.current = 0;
        fetchedNfts.current = [];
        isLastPage.current = false;
    }, [
        field,
        direction,
        showOnlyNftsOnSale,
        filtersJson
    ]);
    const { data: nfts , status , size , setSize ,  } = (0,swr_infinite__WEBPACK_IMPORTED_MODULE_4__["default"])((pageIndex, previousPageData)=>{
        if (pageIndex !== 0 && previousPageData && !previousPageData.length) return null;
        return [
            collectionAddress,
            itemListingSettingsJson,
            pageIndex,
            "collectionNfts"
        ];
    }, async (address, settingsJson, page)=>{
        const settings = JSON.parse(settingsJson);
        const tokenIdsFromFilter = await fetchTokenIdsFromFilter(collection?.address, settings);
        let newNfts = [];
        if (settings.showOnlyNftsOnSale) {
            newNfts = await fetchMarketDataNfts(collection, settings, page, tokenIdsFromFilter);
        } else {
            const { nfts: allNewNfts , fallbackMode: newFallbackMode , fallbackPage: newFallbackPage ,  } = await fetchAllNfts(collection, settings, page, tokenIdsFromFilter, fetchedNfts.current, fallbackMode.current, fallbackModePage.current);
            newNfts = allNewNfts;
            fallbackMode.current = newFallbackMode;
            fallbackModePage.current = newFallbackPage;
        }
        if (newNfts.length < _Collection_config__WEBPACK_IMPORTED_MODULE_8__/* .REQUEST_SIZE */ .z) {
            isLastPage.current = true;
        }
        return newNfts;
    }, {
        revalidateAll: true
    });
    const uniqueNftList = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>nfts ? lodash_uniqBy__WEBPACK_IMPORTED_MODULE_6___default()(nfts.flat(), "tokenId") : [], [
        nfts
    ]);
    fetchedNfts.current = uniqueNftList;
    return {
        nfts: uniqueNftList,
        isFetchingNfts: status !== config_constants_types__WEBPACK_IMPORTED_MODULE_2__/* .FetchStatus.Fetched */ .iF.Fetched,
        page: size,
        setPage: setSize,
        resultSize,
        isLastPage: isLastPage.current
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 31377:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "q": () => (/* binding */ useGetCollectionDistributionPB)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16008);
/* harmony import */ var utils_addressHelpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69352);
/* harmony import */ var utils_multicall__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9796);
/* harmony import */ var config_abi_pancakeBunnies_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60664);
/* harmony import */ var swr_immutable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79847);
/* harmony import */ var config_constants_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(75759);
/* harmony import */ var lodash_fromPairs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57626);
/* harmony import */ var lodash_fromPairs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_fromPairs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(30723);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr_immutable__WEBPACK_IMPORTED_MODULE_5__]);
swr_immutable__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const useGetCollectionDistribution = (collectionAddress)=>{
    const { data , status  } = (0,swr_immutable__WEBPACK_IMPORTED_MODULE_5__["default"])(collectionAddress ? [
        "distribution",
        collectionAddress
    ] : null, async ()=>(await (0,state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_1__/* .getCollectionDistributionApi */ .iE)(collectionAddress)).data);
    return {
        data,
        isFetching: status !== config_constants_types__WEBPACK_IMPORTED_MODULE_6__/* .FetchStatus.Fetched */ .iF.Fetched
    };
};
const useGetCollectionDistributionPB = ()=>{
    const { 0: state , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        isFetching: false,
        data: null
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const fetchTokens = async ()=>{
            setState((prevState)=>({
                    ...prevState,
                    isFetching: true
                }));
            let apiResponse;
            try {
                apiResponse = await (0,state_nftMarket_helpers__WEBPACK_IMPORTED_MODULE_1__/* .getNftsFromCollectionApi */ .Rq)(_constants__WEBPACK_IMPORTED_MODULE_8__/* .pancakeBunniesAddress */ .J);
                if (!apiResponse) {
                    setState((prevState)=>({
                            ...prevState,
                            isFetching: false
                        }));
                    return;
                }
            } catch (error) {
                setState((prevState)=>({
                        ...prevState,
                        isFetching: false
                    }));
                return;
            }
            // Use on chain data to get most updated totalSupply and bunnyCount data. Nft Api Data not updated frequently.
            const tokenIds = Object.keys(apiResponse.attributesDistribution);
            const bunnyCountCalls = tokenIds.map((tokenId)=>({
                    address: (0,utils_addressHelpers__WEBPACK_IMPORTED_MODULE_2__/* .getPancakeBunniesAddress */ .GI)(),
                    name: "bunnyCount",
                    params: [
                        tokenId
                    ]
                }));
            try {
                const response = await (0,utils_multicall__WEBPACK_IMPORTED_MODULE_3__/* .multicallv2 */ .v)({
                    abi: config_abi_pancakeBunnies_json__WEBPACK_IMPORTED_MODULE_4__,
                    calls: bunnyCountCalls
                });
                const tokenListResponse = response.reduce((obj, tokenCount, index)=>{
                    return {
                        ...obj,
                        [tokenIds[index]]: {
                            ...apiResponse.data[index],
                            tokenCount: tokenCount[0].toNumber()
                        }
                    };
                }, {});
                setState({
                    isFetching: false,
                    data: tokenListResponse
                });
            } catch (error1) {
                // Use nft api data if on chain multicall fails
                const tokenListResponse1 = lodash_fromPairs__WEBPACK_IMPORTED_MODULE_7___default()(Object.entries(apiResponse.data).map(([tokenId, tokenData])=>{
                    return [
                        tokenId,
                        {
                            ...tokenData,
                            tokenCount: apiResponse.attributesDistribution[tokenId]
                        }
                    ];
                }));
                setState({
                    isFetching: false,
                    data: tokenListResponse1
                });
            }
        };
        fetchTokens();
    }, []);
    return state;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useGetCollectionDistribution);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6187:
/***/ ((module) => {

module.exports = require("@ethersproject/abi");

/***/ }),

/***/ 51541:
/***/ ((module) => {

module.exports = require("@ethersproject/address");

/***/ }),

/***/ 65757:
/***/ ((module) => {

module.exports = require("@ethersproject/bignumber");

/***/ }),

/***/ 49935:
/***/ ((module) => {

module.exports = require("@ethersproject/bytes");

/***/ }),

/***/ 26644:
/***/ ((module) => {

module.exports = require("@ethersproject/constants");

/***/ }),

/***/ 12792:
/***/ ((module) => {

module.exports = require("@ethersproject/contracts");

/***/ }),

/***/ 90399:
/***/ ((module) => {

module.exports = require("@ethersproject/providers");

/***/ }),

/***/ 76693:
/***/ ((module) => {

module.exports = require("@ethersproject/solidity");

/***/ }),

/***/ 93138:
/***/ ((module) => {

module.exports = require("@ethersproject/units");

/***/ }),

/***/ 18310:
/***/ ((module) => {

module.exports = require("@gnosis.pm/safe-apps-wagmi");

/***/ }),

/***/ 75184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 22534:
/***/ ((module) => {

module.exports = require("@wagmi/core");

/***/ }),

/***/ 22575:
/***/ ((module) => {

module.exports = require("big.js");

/***/ }),

/***/ 34215:
/***/ ((module) => {

module.exports = require("bignumber.js");

/***/ }),

/***/ 97312:
/***/ ((module) => {

module.exports = require("decimal.js-light");

/***/ }),

/***/ 64175:
/***/ ((module) => {

module.exports = require("fast-json-stable-stringify");

/***/ }),

/***/ 5805:
/***/ ((module) => {

module.exports = require("graphql-request");

/***/ }),

/***/ 52424:
/***/ ((module) => {

module.exports = require("jsbi");

/***/ }),

/***/ 72607:
/***/ ((module) => {

module.exports = require("local-storage");

/***/ }),

/***/ 59969:
/***/ ((module) => {

module.exports = require("lodash/capitalize");

/***/ }),

/***/ 90221:
/***/ ((module) => {

module.exports = require("lodash/chunk");

/***/ }),

/***/ 59591:
/***/ ((module) => {

module.exports = require("lodash/cloneDeep");

/***/ }),

/***/ 93908:
/***/ ((module) => {

module.exports = require("lodash/debounce");

/***/ }),

/***/ 57626:
/***/ ((module) => {

module.exports = require("lodash/fromPairs");

/***/ }),

/***/ 1712:
/***/ ((module) => {

module.exports = require("lodash/get");

/***/ }),

/***/ 98492:
/***/ ((module) => {

module.exports = require("lodash/groupBy");

/***/ }),

/***/ 89699:
/***/ ((module) => {

module.exports = require("lodash/isEmpty");

/***/ }),

/***/ 50541:
/***/ ((module) => {

module.exports = require("lodash/memoize");

/***/ }),

/***/ 61831:
/***/ ((module) => {

module.exports = require("lodash/merge");

/***/ }),

/***/ 87553:
/***/ ((module) => {

module.exports = require("lodash/noop");

/***/ }),

/***/ 49949:
/***/ ((module) => {

module.exports = require("lodash/orderBy");

/***/ }),

/***/ 64042:
/***/ ((module) => {

module.exports = require("lodash/range");

/***/ }),

/***/ 19318:
/***/ ((module) => {

module.exports = require("lodash/shuffle");

/***/ }),

/***/ 95594:
/***/ ((module) => {

module.exports = require("lodash/sum");

/***/ }),

/***/ 1381:
/***/ ((module) => {

module.exports = require("lodash/throttle");

/***/ }),

/***/ 4354:
/***/ ((module) => {

module.exports = require("lodash/times");

/***/ }),

/***/ 10582:
/***/ ((module) => {

module.exports = require("lodash/toNumber");

/***/ }),

/***/ 18459:
/***/ ((module) => {

module.exports = require("lodash/uniq");

/***/ }),

/***/ 69309:
/***/ ((module) => {

module.exports = require("lodash/uniqBy");

/***/ }),

/***/ 51162:
/***/ ((module) => {

module.exports = require("next-themes");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 92796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 94957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 34014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 50744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 35843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 78524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 95832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 78020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 64406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 24964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 11751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 46220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 10299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 23938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 29565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 35789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 28854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 91292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 34567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 80979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 93297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 36052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 84226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 95052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 59232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 40968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 71853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 59819:
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ 16689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 66405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 42932:
/***/ ((module) => {

module.exports = require("react-popper");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 20997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 14161:
/***/ ((module) => {

module.exports = require("redux-persist");

/***/ }),

/***/ 98936:
/***/ ((module) => {

module.exports = require("redux-persist/lib/storage");

/***/ }),

/***/ 57518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 95834:
/***/ ((module) => {

module.exports = require("styled-system");

/***/ }),

/***/ 8780:
/***/ ((module) => {

module.exports = require("tiny-invariant");

/***/ }),

/***/ 60656:
/***/ ((module) => {

module.exports = require("tiny-warning");

/***/ }),

/***/ 86350:
/***/ ((module) => {

module.exports = require("toformat");

/***/ }),

/***/ 8906:
/***/ ((module) => {

module.exports = require("wagmi");

/***/ }),

/***/ 22216:
/***/ ((module) => {

module.exports = require("wagmi/chains");

/***/ }),

/***/ 51276:
/***/ ((module) => {

module.exports = require("wagmi/connectors/coinbaseWallet");

/***/ }),

/***/ 74738:
/***/ ((module) => {

module.exports = require("wagmi/connectors/injected");

/***/ }),

/***/ 79035:
/***/ ((module) => {

module.exports = require("wagmi/connectors/metaMask");

/***/ }),

/***/ 61556:
/***/ ((module) => {

module.exports = require("wagmi/connectors/walletConnect");

/***/ }),

/***/ 21176:
/***/ ((module) => {

module.exports = require("wagmi/providers/jsonRpc");

/***/ }),

/***/ 66197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ }),

/***/ 82451:
/***/ ((module) => {

module.exports = import("jotai");;

/***/ }),

/***/ 69915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ }),

/***/ 15941:
/***/ ((module) => {

module.exports = import("swr");;

/***/ }),

/***/ 79847:
/***/ ((module) => {

module.exports = import("swr/immutable");;

/***/ }),

/***/ 91448:
/***/ ((module) => {

module.exports = import("swr/infinite");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8177,676,1664,5675,5152,3893,8726,3035,8538,5915,9694,5551,7458,2408,3966,7495,5529,599,6008,617,1388,9145,4286,8692,5636,9459,3449], () => (__webpack_exec__(22937)));
module.exports = __webpack_exports__;

})();