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
// EXTERNAL MODULE: ./node_modules/react-datepicker/dist/index.js
var dist = __webpack_require__(5435);
// EXTERNAL MODULE: ./node_modules/react-datepicker/dist/react-datepicker.css
var react_datepicker = __webpack_require__(7441);
;// CONCATENATED MODULE: ./components/modalForm.tsx




const ModalForm = ()=>{
    const [isOpen, setIsOpen] = (0,react_.useState)(false);
    const [formData, setFormData] = (0,react_.useState)({});
    const [currentQuestionIndex, setCurrentQuestionIndex] = (0,react_.useState)(0);
    const [estimatedPrice, setEstimatedPrice] = (0,react_.useState)(null);
    const [isLoading, setIsLoading] = (0,react_.useState)(false);
    const questions = [
        {
            label: "Your Name",
            name: "name",
            type: "text",
            required: true
        },
        {
            label: "Email Address",
            name: "email",
            type: "email",
            required: true
        },
        {
            label: "Phone Number",
            name: "number",
            type: "number",
            required: true
        },
        {
            label: "The model of Car",
            name: "model",
            type: "text",
            required: true
        },
        {
            label: "The make of Car",
            name: "make",
            type: "text",
            required: true
        },
        {
            label: "The year of Car",
            name: "year",
            type: "number",
            required: true
        },
        {
            label: "Is the Vehicle Operable?",
            name: "operable",
            type: "checkbox"
        },
        {
            label: "Would you prefer an open air carrier?",
            name: "carrier",
            type: "checkbox"
        },
        {
            label: "Pick up City",
            name: "city",
            type: "select",
            options: [
                "New York",
                "California",
                "Texas",
                "Florida",
                "Illinois",
                "Pennsylvania",
                "Ohio",
                "Georgia",
                "North Carolina",
                "Michigan"
            ],
            required: true
        },
        {
            label: "Desired Pick up date",
            name: "dates",
            type: "date",
            required: true
        },
        {
            label: "Destination City",
            name: "destination",
            type: "select",
            options: [
                "New York",
                "California",
                "Texas",
                "Florida",
                "Illinois",
                "Pennsylvania",
                "Ohio",
                "Georgia",
                "North Carolina",
                "Michigan"
            ],
            required: true
        }
    ];
    const handleInputChange = (e)=>{
        const { name , value , type  } = e.target;
        const inputValue = type === "checkbox" ? e.target.checked : value;
        setFormData((prevData)=>({
                ...prevData,
                [name]: inputValue
            }));
    };
    const calculateEstimatedPrice = ()=>{
        // Your calculation logic goes here
        // Example: Set the estimated price based on some formula or algorithm
        const price = Math.random() * 1000;
        setEstimatedPrice(price);
    };
    const handleSubmit = (event)=>{
        event.preventDefault();
        setFormData((prevData)=>({
                ...prevData,
                [questions[currentQuestionIndex].name]: undefined
            }));
        setCurrentQuestionIndex((prevIndex)=>prevIndex + 1);
        if (currentQuestionIndex === questions.length - 1) {
            setIsLoading(true);
            setTimeout(()=>{
                calculateEstimatedPrice();
                setIsLoading(false);
            }, 3000);
        }
    };
    const handleBookNow = ()=>{
        alert("Details will be emailed to you shortly");
        window.location.reload();
    };
    const renderQuestion = (question)=>{
        switch(question.type){
            case "checkbox":
                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                    style: {
                        display: "inline-flex",
                        alignItems: "center",
                        marginTop: "1.5rem"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "checkbox",
                            name: question.name,
                            checked: formData[question.name],
                            onChange: handleInputChange,
                            style: {
                                marginRight: "0.5rem"
                            }
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: question.label
                        })
                    ]
                });
            case "date":
                return /*#__PURE__*/ jsx_runtime_.jsx(dist/* default */.ZP, {
                    name: question.name,
                    selected: formData[question.name],
                    onChange: (date)=>setFormData((prevData)=>({
                                ...prevData,
                                [question.name]: date
                            })),
                    dateFormat: "yyyy-MM-dd",
                    placeholderText: "yyyy-MM-dd",
                    className: "form-control"
                });
            case "select":
                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                    name: question.name,
                    value: formData[question.name],
                    onChange: handleInputChange,
                    style: {
                        color: "black",
                        fontWeight: 700
                    },
                    required: question.required,
                    className: "form-control",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                            value: "",
                            children: "Select an option"
                        }),
                        question.options?.map((option)=>/*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: option,
                                children: option
                            }, option))
                    ]
                });
            default:
                return /*#__PURE__*/ jsx_runtime_.jsx("input", {
                    type: question.type,
                    name: question.name,
                    style: {
                        color: "black",
                        fontWeight: "700"
                    },
                    value: formData[question.name],
                    onChange: handleInputChange,
                    required: question.required,
                    className: "form-control"
                });
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: "btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3",
                onClick: ()=>setIsOpen(true),
                style: {
                    backgroundColor: "#6B46C1",
                    color: "white",
                    padding: "0.5rem 1rem",
                    border: "none",
                    borderRadius: "4px",
                    fontSize: "14px",
                    cursor: "pointer"
                },
                children: "FREE QUOTE"
            }),
            isOpen && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "modal-overlay",
                style: {
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "modal-content",
                    style: {
                        backgroundColor: "transparent",
                        color: "white",
                        padding: "2rem",
                        borderRadius: "4px",
                        maxWidth: "400px",
                        textAlign: "center"
                    },
                    children: [
                        currentQuestionIndex < questions.length && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    children: questions[currentQuestionIndex].label
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                    onSubmit: handleSubmit,
                                    children: [
                                        renderQuestion(questions[currentQuestionIndex]),
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            className: "form-button",
                                            type: "submit",
                                            style: {
                                                backgroundColor: "#6B46C1",
                                                color: "white",
                                                padding: "0.5rem 1rem",
                                                marginLeft: "3px",
                                                border: "none",
                                                borderRadius: "4px",
                                                fontSize: "14px",
                                                cursor: "pointer"
                                            },
                                            children: "Next"
                                        })
                                    ]
                                })
                            ]
                        }),
                        currentQuestionIndex === questions.length && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    children: "Estimated Price:"
                                }),
                                isLoading ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "Loading..."
                                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    children: [
                                        "$",
                                        estimatedPrice !== null ? estimatedPrice.toFixed(2) : "N/A"
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "form-button",
                                    onClick: handleBookNow,
                                    style: {
                                        backgroundColor: "#6B46C1",
                                        color: "white",
                                        padding: "0.5rem 1rem",
                                        border: "none",
                                        borderRadius: "4px",
                                        fontSize: "14px",
                                        cursor: "pointer"
                                    },
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