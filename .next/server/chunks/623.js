exports.id = 623;
exports.ids = [623];
exports.modules = {

/***/ 4977:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9222, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 8301, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3751, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4765, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 5192, 23))

/***/ }),

/***/ 404:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4123))

/***/ }),

/***/ 4123:
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
;// CONCATENATED MODULE: ./components/modalForm.tsx


const ModalForm = ()=>{
    const [isOpen, setIsOpen] = (0,react_.useState)(false);
    const [formData, setFormData] = (0,react_.useState)({
        name: "",
        email: "",
        message: "",
        isOperable: false,
        openAirCarrier: false,
        shipTo: ""
    });
    const [isSubmitted, setIsSubmitted] = (0,react_.useState)(false);
    const [estimatedPrice, setEstimatedPrice] = (0,react_.useState)("");
    const [isCalculating, setIsCalculating] = (0,react_.useState)(false);
    const handleInputChange = (e)=>{
        const { name , value , type , checked  } = e.target;
        const inputValue = type === "checkbox" ? checked : value;
        setFormData((prevData)=>({
                ...prevData,
                [name]: inputValue
            }));
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        setIsCalculating(true);
        setTimeout(()=>{
            const basePrice = 200;
            const shipToOptions = [
                "AL",
                "AK",
                "AZ",
                "AR",
                "CA",
                "CO",
                "CT",
                "DE",
                "FL",
                "GA",
                "HI",
                "ID",
                "IL",
                "IN",
                "IA",
                "KS",
                "KY",
                "LA",
                "ME",
                "MD"
            ];
            const selectedIndex = shipToOptions.indexOf(formData.shipTo);
            const price = 21 * 100;
            setEstimatedPrice(`$${price}`);
            setIsSubmitted(true);
            setIsCalculating(false);
        }, 3000);
    };
    const handleBookNow = ()=>{
        console.log("Book Now clicked");
    };
    (0,react_.useEffect)(()=>{
        if (isCalculating) {
            setIsOpen(true);
        }
    }, [
        isCalculating
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: "btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3",
                onClick: ()=>setIsOpen(true),
                children: "FREE QUOTE"
            }),
            isOpen && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    zIndex: 9999
                },
                children: !isSubmitted ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    style: {
                        backgroundColor: "white",
                        borderRadius: "8px",
                        padding: "20px",
                        maxWidth: "90%",
                        maxHeight: "90%",
                        overflow: "auto"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            style: {
                                position: "absolute",
                                top: "10px",
                                right: "10px",
                                cursor: "pointer"
                            },
                            onClick: ()=>setIsOpen(false),
                            children: "\xd7"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            children: "Get A Free Quote"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                            onSubmit: handleSubmit,
                            style: {
                                color: "black"
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                    style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        marginBottom: "10px"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Car Model:"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "text",
                                            name: "carModel",
                                            placeholder: "Enter Car Model",
                                            onChange: handleInputChange,
                                            style: {
                                                padding: "5px",
                                                borderRadius: "4px",
                                                border: "2px solid #ccc",
                                                outline: "none"
                                            },
                                            required: true
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                    style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        marginBottom: "10px"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Car Year:"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "number",
                                            name: "carYear",
                                            placeholder: "Enter Car Year",
                                            onChange: handleInputChange,
                                            style: {
                                                padding: "5px",
                                                borderRadius: "4px",
                                                border: "2px solid #ccc",
                                                outline: "none"
                                            },
                                            required: true
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                    style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        marginBottom: "10px"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Ship From:"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                            name: "location",
                                            onChange: handleInputChange,
                                            style: {
                                                padding: "5px",
                                                borderRadius: "4px",
                                                border: "2px solid #ccc",
                                                outline: "none"
                                            },
                                            required: true,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "",
                                                    children: "Select a State"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "AL",
                                                    children: "Alabama"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "AK",
                                                    children: "Alaska"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "AZ",
                                                    children: "Arizona"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "AR",
                                                    children: "Arkansas"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "CA",
                                                    children: "California"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "CO",
                                                    children: "Colorado"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "CT",
                                                    children: "Connecticut"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "DE",
                                                    children: "Delaware"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "FL",
                                                    children: "Florida"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "GA",
                                                    children: "Georgia"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "HI",
                                                    children: "Hawaii"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "ID",
                                                    children: "Idaho"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "IL",
                                                    children: "Illinois"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "IN",
                                                    children: "Indiana"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "IA",
                                                    children: "Iowa"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "KS",
                                                    children: "Kansas"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "KY",
                                                    children: "Kentucky"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "LA",
                                                    children: "Louisiana"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "ME",
                                                    children: "Maine"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "MD",
                                                    children: "Maryland"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                    style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        marginBottom: "10px"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Ship To:"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                            name: "location",
                                            onChange: handleInputChange,
                                            style: {
                                                padding: "5px",
                                                borderRadius: "4px",
                                                border: "2px solid #ccc",
                                                outline: "none"
                                            },
                                            required: true,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "",
                                                    children: "Select a State"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "AL",
                                                    children: "Alabama"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "AK",
                                                    children: "Alaska"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "AZ",
                                                    children: "Arizona"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "AR",
                                                    children: "Arkansas"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "CA",
                                                    children: "California"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "CO",
                                                    children: "Colorado"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "CT",
                                                    children: "Connecticut"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "DE",
                                                    children: "Delaware"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "FL",
                                                    children: "Florida"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "GA",
                                                    children: "Georgia"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "HI",
                                                    children: "Hawaii"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "ID",
                                                    children: "Idaho"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "IL",
                                                    children: "Illinois"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "IN",
                                                    children: "Indiana"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "IA",
                                                    children: "Iowa"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "KS",
                                                    children: "Kansas"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "KY",
                                                    children: "Kentucky"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "LA",
                                                    children: "Louisiana"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "ME",
                                                    children: "Maine"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "MD",
                                                    children: "Maryland"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                    style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        marginBottom: "10px"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Delivery Date:"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "date",
                                            name: "carYear",
                                            placeholder: "Delivery Date",
                                            onChange: handleInputChange,
                                            style: {
                                                padding: "5px",
                                                borderRadius: "4px",
                                                border: "2px solid #ccc",
                                                outline: "none"
                                            },
                                            required: true
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                    style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        marginBottom: "10px"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "checkbox",
                                            name: "isOperable",
                                            checked: formData.isOperable,
                                            onChange: handleInputChange
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Is the car operable?"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                    style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        marginBottom: "10px"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "checkbox",
                                            name: "openAirCarrier",
                                            checked: formData.openAirCarrier,
                                            onChange: handleInputChange
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Open air carrier preferred?"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    type: "submit",
                                    style: {
                                        padding: "8px 16px",
                                        borderRadius: "4px",
                                        backgroundColor: "#333",
                                        color: "#fff",
                                        border: "none",
                                        marginTop: "16px",
                                        cursor: "pointer"
                                    },
                                    children: "Calculate"
                                })
                            ]
                        })
                    ]
                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    style: {
                        backgroundColor: "white",
                        borderRadius: "8px",
                        padding: "20px",
                        maxWidth: "90%",
                        maxHeight: "90%",
                        overflow: "auto"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            style: {
                                color: "black"
                            },
                            children: "Estimated Price"
                        }),
                        isCalculating ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "text-center text-xl",
                            children: "Calculating..."
                        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    style: {
                                        position: "absolute",
                                        top: "10px",
                                        right: "10px",
                                        cursor: "pointer"
                                    },
                                    onClick: ()=>setIsOpen(false),
                                    children: "\xd7"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    style: {
                                        color: "black"
                                    },
                                    children: [
                                        "Your estimated price is: ",
                                        estimatedPrice
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "btn-sm text-white bg-purple-600 hover:bg-purple-700",
                                    onClick: ()=>setIsOpen(false),
                                    children: "Book Now"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const modalForm = (ModalForm);

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
                            children: /*#__PURE__*/ jsx_runtime_.jsx(modalForm, {})
                        }),
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
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(modalForm, {})
                                }),
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