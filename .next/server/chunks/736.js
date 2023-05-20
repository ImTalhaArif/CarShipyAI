exports.id = 736;
exports.ids = [736];
exports.modules = {

/***/ 404:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 162))

/***/ }),

/***/ 9481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_modalForm_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7164);
/* harmony import */ var _components_modalForm_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_modalForm_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ default auto */ 

 // Import CSS file for styling
const ModalForm = ()=>{
    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        name: "",
        email: "",
        message: ""
    });
    const handleInputChange = (e)=>{
        const { name , value  } = e.target;
        setFormData((prevData)=>({
                ...prevData,
                [name]: value
            }));
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        // Perform form submission logic here
        console.log(formData);
        // Reset form data and close the modal
        setFormData({
            name: "",
            email: "",
            message: ""
        });
        setIsOpen(false);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: "btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3",
                onClick: ()=>setIsOpen(true),
                children: "FREE QUOTE"
            }),
            isOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_components_modalForm_module_css__WEBPACK_IMPORTED_MODULE_2___default().modal),
                style: {
                    backgroundColor: "black",
                    background: "linear-gradient(to bottom, #4e54c8, #8f94fb)",
                    animation: "fadeIn 0.7s ease-in"
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_components_modalForm_module_css__WEBPACK_IMPORTED_MODULE_2___default().modalContent),
                    style: {
                        backgroundColor: "transparent",
                        color: "white"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: (_components_modalForm_module_css__WEBPACK_IMPORTED_MODULE_2___default().closeButton),
                            onClick: ()=>setIsOpen(false),
                            style: {
                                color: "white",
                                cursor: "pointer"
                            },
                            children: "\xd7"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            children: "Get A Free Quote"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                            className: (_components_modalForm_module_css__WEBPACK_IMPORTED_MODULE_2___default().modalForm),
                            onSubmit: handleSubmit,
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: "10px",
                                padding: "20px",
                                borderRadius: "8px",
                                width: "500px",
                                backdropFilter: "blur(10px)",
                                position: "relative",
                                backgroundColor: "rgba(0, 0, 0, 0.6)"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    style: {
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        right: 7,
                                        bottom: 0,
                                        zIndex: -1,
                                        backgroundImage: "url('public/images/car-carrier-image.jpg')",
                                        opacity: 0.6,
                                        backgroundRepeat: "repeat",
                                        animation: "glowingStarsAnimation 10s linear infinite"
                                    }
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                    style: {
                                        display: "flex",
                                        flexDirection: "column"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Car Model:"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "text",
                                            name: "carModel",
                                            placeholder: "Enter Car Model",
                                            onChange: handleInputChange,
                                            style: {
                                                padding: "5px",
                                                borderRadius: "4px",
                                                border: "2px solid #fff",
                                                boxShadow: "0 0 10px rgba(255, 255, 255, 0.5) inset",
                                                outline: "none",
                                                background: "transparent",
                                                color: "#fff",
                                                textShadow: "0 0 10px rgba(255, 255, 255, 0.5)"
                                            },
                                            required: true
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                    style: {
                                        display: "flex",
                                        flexDirection: "column"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Car Year:"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "number",
                                            name: "carYear",
                                            placeholder: "Enter Car Year",
                                            onChange: handleInputChange,
                                            style: {
                                                padding: "5px",
                                                borderRadius: "4px",
                                                border: "2px solid #fff",
                                                boxShadow: "0 0 10px rgba(255, 255, 255, 0.5) inset",
                                                outline: "none",
                                                background: "transparent",
                                                color: "#fff",
                                                textShadow: "0 0 10px rgba(255, 255, 255, 0.5)"
                                            },
                                            required: true
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                    style: {
                                        display: "flex",
                                        flexDirection: "column"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Ship From:"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                            name: "location",
                                            onChange: handleInputChange,
                                            style: {
                                                padding: "5px",
                                                borderRadius: "4px",
                                                border: "2px solid #fff",
                                                boxShadow: "0 0 10px rgba(255, 255, 255, 0.5) inset",
                                                outline: "none",
                                                background: "transparent",
                                                color: "#fff",
                                                textShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
                                                appearance: "none",
                                                /* Hide the default arrow */ WebkitAppearance: "none",
                                                /* Removearrow in Chrome/Safari */ MozAppearance: "none",
                                                /* Remove arrow in Firefox */ paddingRight: "20px"
                                            },
                                            required: true,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "",
                                                    children: "Select a State"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "AL",
                                                    children: "Alabama"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "AK",
                                                    children: "Alaska"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "AZ",
                                                    children: "Arizona"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "AR",
                                                    children: "Arkansas"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "CA",
                                                    children: "California"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "CO",
                                                    children: "Colorado"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "CT",
                                                    children: "Connecticut"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "DE",
                                                    children: "Delaware"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "FL",
                                                    children: "Florida"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "GA",
                                                    children: "Georgia"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "HI",
                                                    children: "Hawaii"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "ID",
                                                    children: "Idaho"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "IL",
                                                    children: "Illinois"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "IN",
                                                    children: "Indiana"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "IA",
                                                    children: "Iowa"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "KS",
                                                    children: "Kansas"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "KY",
                                                    children: "Kentucky"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "LA",
                                                    children: "Louisiana"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "ME",
                                                    children: "Maine"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "MD",
                                                    children: "Maryland"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                    style: {
                                        display: "flex",
                                        flexDirection: "column"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Ship To:"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                            name: "location",
                                            onChange: handleInputChange,
                                            style: {
                                                padding: "5px",
                                                borderRadius: "4px",
                                                border: "2px solid #fff",
                                                boxShadow: "0 0 10px rgba(255, 255, 255, 0.5) inset",
                                                outline: "none",
                                                background: "transparent",
                                                color: "#fff",
                                                textShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
                                                appearance: "none",
                                                /* Hide the default arrow */ WebkitAppearance: "none",
                                                /* Removearrow in Chrome/Safari */ MozAppearance: "none",
                                                /* Remove arrow in Firefox */ paddingRight: "20px"
                                            },
                                            required: true,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "",
                                                    children: "Select a State"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "AL",
                                                    children: "Alabama"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "AK",
                                                    children: "Alaska"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "AZ",
                                                    children: "Arizona"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "AR",
                                                    children: "Arkansas"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "CA",
                                                    children: "California"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "CO",
                                                    children: "Colorado"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "CT",
                                                    children: "Connecticut"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "DE",
                                                    children: "Delaware"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "FL",
                                                    children: "Florida"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "GA",
                                                    children: "Georgia"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "HI",
                                                    children: "Hawaii"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "ID",
                                                    children: "Idaho"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "IL",
                                                    children: "Illinois"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "IN",
                                                    children: "Indiana"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "IA",
                                                    children: "Iowa"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "KS",
                                                    children: "Kansas"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "KY",
                                                    children: "Kentucky"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "LA",
                                                    children: "Louisiana"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "ME",
                                                    children: "Maine"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "MD",
                                                    children: "Maryland"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                    style: {
                                        display: "flex",
                                        flexDirection: "column"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Delivery Date:"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "date",
                                            name: "carYear",
                                            placeholder: "Delivery Date",
                                            onChange: handleInputChange,
                                            style: {
                                                padding: "5px",
                                                borderRadius: "4px",
                                                border: "2px solid #fff",
                                                boxShadow: "0 0 10px rgba(255, 255, 255, 0.5) inset",
                                                outline: "none",
                                                background: "transparent",
                                                color: "#fff",
                                                textShadow: "0 0 10px rgba(255, 255, 255, 0.5)"
                                            },
                                            required: true
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    type: "submit",
                                    style: {
                                        padding: "8px 16px",
                                        borderRadius: "50px",
                                        backgroundColor: "#333",
                                        color: "#fff",
                                        border: "none",
                                        cursor: "pointer",
                                        marginTop: "20px"
                                    },
                                    children: "Submit"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalForm);


/***/ }),

/***/ 162:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Header)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/modalForm.tsx
var modalForm = __webpack_require__(9481);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(8148);
;// CONCATENATED MODULE: ./components/ui/mobile-menu.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



function MobileMenu() {
    const [mobileNavOpen, setMobileNavOpen] = (0,react_.useState)(false);
    const proxy = (0,module_proxy/* createProxy */.D)("C:/Users/arif_/Downloads/open-react-template-master/components/ui/mobile-menu.tsx");
    const trigger = (0,react_.useRef)(null);
    const mobileNav = (0,react_.useRef)(null);
    // close the mobile menu on click outside
    (0,react_.useEffect)(()=>{
        const clickHandler = ({ target  })=>{
            if (!mobileNav.current || !trigger.current) return;
            if (!mobileNavOpen || mobileNav.current.contains(target) || trigger.current.contains(target)) return;
            setMobileNavOpen(false);
        };
        document.addEventListener("click", clickHandler);
        return ()=>document.removeEventListener("click", clickHandler);
    });
    // close the mobile menu if the esc key is pressed
    (0,react_.useEffect)(()=>{
        const keyHandler = ({ keyCode  })=>{
            if (!mobileNavOpen || keyCode !== 27) return;
            setMobileNavOpen(false);
        };
        document.addEventListener("keydown", keyHandler);
        return ()=>document.removeEventListener("keydown", keyHandler);
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "md:hidden",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                ref: trigger,
                className: `hamburger ${mobileNavOpen && "active"}`,
                "aria-controls": "mobile-nav",
                "aria-expanded": mobileNavOpen,
                onClick: ()=>setMobileNavOpen(!mobileNavOpen),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "sr-only",
                        children: "Menu"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                        className: "w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out",
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                y: "4",
                                width: "24",
                                height: "2",
                                rx: "1"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                y: "11",
                                width: "24",
                                height: "2",
                                rx: "1"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                y: "18",
                                width: "24",
                                height: "2",
                                rx: "1"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                id: "mobile-nav",
                ref: mobileNav,
                className: "absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out",
                style: mobileNavOpen ? {
                    maxHeight: mobileNav.current?.scrollHeight,
                    opacity: 1
                } : {
                    maxHeight: 0,
                    opacity: 0.8
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    className: "bg-gray-800 px-4 py-2",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/signin",
                                className: "font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out",
                                children: "Sign in"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/about",
                                className: "font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out",
                                children: "About"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/contact",
                                className: "font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out",
                                children: "Contact"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/carrier",
                                className: "font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out",
                                children: "Our Carriers"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/signup",
                                className: "btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3",
                                children: "Sign up"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/quote",
                                className: "btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3",
                                children: "Free Quote"
                            })
                        })
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/ui/header.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




function Header() {
    const [isModalOpen, setIsModalOpen] = (0,react_.useState)(false);
    const openModal = ()=>{
        setIsModalOpen(true);
    };
    const closeModal = ()=>{
        setIsModalOpen(false);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: "absolute w-full z-30",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "max-w-6xl mx-auto px-4 sm:px-6",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center justify-between h-20",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "shrink-0 mr-4",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            className: "block",
                            "aria-label": "Cruip",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                className: "w-8 h-8 fill-current text-purple-600",
                                viewBox: "0 0 32 32",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    d: "M31.952 14.751a260.51 260.51 0 00-4.359-4.407C23.932 6.734 20.16 3.182 16.171 0c1.634.017 3.21.28 4.692.751 3.487 3.114 6.846 6.398 10.163 9.737.493 1.346.811 2.776.926 4.262zm-1.388 7.883c-2.496-2.597-5.051-5.12-7.737-7.471-3.706-3.246-10.693-9.81-15.736-7.418-4.552 2.158-4.717 10.543-4.96 16.238A15.926 15.926 0 010 16C0 9.799 3.528 4.421 8.686 1.766c1.82.593 3.593 1.675 5.038 2.587 6.569 4.14 12.29 9.71 17.792 15.57-.237.94-.557 1.846-.952 2.711zm-4.505 5.81a56.161 56.161 0 00-1.007-.823c-2.574-2.054-6.087-4.805-9.394-4.044-3.022.695-4.264 4.267-4.97 7.52a15.945 15.945 0 01-3.665-1.85c.366-3.242.89-6.675 2.405-9.364 2.315-4.107 6.287-3.072 9.613-1.132 3.36 1.96 6.417 4.572 9.313 7.417a16.097 16.097 0 01-2.295 2.275z"
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                        className: "hidden md:flex md:grow",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "flex grow justify-end flex-wrap items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/signin",
                                        className: "font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out",
                                        children: "Sign in"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/about",
                                        className: "font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out",
                                        children: "About"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/contact",
                                        className: "font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out",
                                        children: "Contact"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/carrier",
                                        className: "font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out",
                                        children: "Our Carriers"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/signup",
                                        className: "btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3",
                                        children: "Sign up"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(modalForm["default"], {})
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(MobileMenu, {})
                ]
            })
        })
    });
}


/***/ }),

/***/ 7164:
/***/ ((module) => {

// Exports
module.exports = {
	"modal": "modalForm_modal__J61Nx",
	"fadeIn": "modalForm_fadeIn__xJR8D",
	"modalContent": "modalForm_modalContent__dObx2",
	"closeButton": "modalForm_closeButton__eC6Vx",
	"qform": "modalForm_qform__nvQYd",
	"fadeOut": "modalForm_fadeOut__dLWWG"
};


/***/ }),

/***/ 789:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  "metadata": () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"app\\layout.tsx","import":"Inter","arguments":[{"subsets":["latin"],"variable":"--font-inter","display":"swap"}],"variableName":"inter"}
var target_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variable_font_inter_display_swap_variableName_inter_ = __webpack_require__(8772);
var target_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variable_font_inter_display_swap_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(target_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variable_font_inter_display_swap_variableName_inter_);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"app\\layout.tsx","import":"Architects_Daughter","arguments":[{"subsets":["latin"],"variable":"--font-architects-daughter","weight":"400","display":"swap"}],"variableName":"architects_daughter"}
var target_path_app_layout_tsx_import_Architects_Daughter_arguments_subsets_latin_variable_font_architects_daughter_weight_400_display_swap_variableName_architects_daughter_ = __webpack_require__(9267);
var target_path_app_layout_tsx_import_Architects_Daughter_arguments_subsets_latin_variable_font_architects_daughter_weight_400_display_swap_variableName_architects_daughter_default = /*#__PURE__*/__webpack_require__.n(target_path_app_layout_tsx_import_Architects_Daughter_arguments_subsets_latin_variable_font_architects_daughter_weight_400_display_swap_variableName_architects_daughter_);
// EXTERNAL MODULE: ./app/css/style.css
var style = __webpack_require__(1893);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(5985);
;// CONCATENATED MODULE: ./components/ui/header.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\arif_\Documents\Carshipy Official\components\ui\header.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const header = (__default__);
;// CONCATENATED MODULE: ./app/layout.tsx





const metadata = {
    title: "Create Next App",
    description: "Generated by create next app"
};
function RootLayout({ children  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            className: `${(target_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variable_font_inter_display_swap_variableName_inter_default()).variable} ${(target_path_app_layout_tsx_import_Architects_Daughter_arguments_subsets_latin_variable_font_architects_daughter_weight_400_display_swap_variableName_architects_daughter_default()).variable} font-inter antialiased bg-gray-900 text-gray-200 tracking-tight`,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col min-h-screen overflow-hidden",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(header, {}),
                    children
                ]
            })
        })
    });
}


/***/ }),

/***/ 1893:
/***/ (() => {



/***/ })

};
;