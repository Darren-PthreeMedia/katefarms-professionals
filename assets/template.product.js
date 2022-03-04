!function(t) {
    function e(e) {
        for (var n, o, s = e[0], u = e[1], c = e[2], d = 0, p = []; d < s.length; d++) o = s[d], i[o] && p.push(i[o][0]), i[o] = 0;
        for (n in u) Object.prototype.hasOwnProperty.call(u, n) && (t[n] = u[n]);
        for (l && l(e); p.length;) p.shift()();
        return a.push.apply(a, c || []), r()
    }

    function r() {
        for (var t, e = 0; e < a.length; e++) {
            for (var r = a[e], n = !0, s = 1; s < r.length; s++) {
                var u = r[s];
                0 !== i[u] && (n = !1)
            }
            n && (a.splice(e--, 1), t = o(o.s = r[0]))
        }
        return t
    }
    var n = {},
        i = {
            11: 0
        },
        a = [];

    function o(e) {
        if (n[e]) return n[e].exports;
        var r = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(r.exports, r, r.exports, o), r.l = !0, r.exports
    }
    o.m = t, o.c = n, o.d = function(t, e, r) {
        o.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
        })
    }, o.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, o.t = function(t, e) {
        if (1 & e && (t = o(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (o.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var n in t) o.d(r, n, function(e) {
                return t[e]
            }.bind(null, n));
        return r
    }, o.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return o.d(e, "a", e), e
    }, o.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, o.p = "";
    var s = window.shopifySlateJsonp = window.shopifySlateJsonp || [],
        u = s.push.bind(s);
    s.push = e, s = s.slice();
    for (var c = 0; c < s.length; c++) e(s[c]);
    var l = u;
    a.push([533, 0, 1]), r()
}({
    132: function(t, e, r) {
        "use strict";
        r.r(e);
        var n = r(133),
            i = r.n(n);
        for (var a in n) "default" !== a && function(t) {
            r.d(e, t, function() {
                return n[t]
            })
        }(a);
        e.default = i.a
    },
    133: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = a(r(536)),
            i = a(r(537));

        function a(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        e.default = {
            props: {
                tableData: {
                    type: Array,
                    default: function() {
                        return []
                    }
                }
            },
            components: {
                CompareTableTitle: n.default,
                CompareTable: i.default
            },
            data: function() {
                return {
                    tables: [],
                    widthClass: "",
                    active: !0
                }
            },
            mounted: function() {
                this.initialState(), this.events()
            },
            methods: {
                initialState: function() {
                    this.tableData.length > 0 && this.setTableData.call(this), this.widthClass = "w-1/" + this.tables.length
                },
                events: function() {
                    window.PubSub.subscribe("accordion:toggle", this.cellHeight)
                },
                cellHeight: function(t, e) {
                    e.open && $(".dataTable-lead tr:first-child th").css("height", $(".tablepress-comparison thead").outerHeight())
                },
                setTableData: function() {
                    var t = this;
                    this.tables = this.tableData.map(function(e, r) {
                        var n = e.id,
                            i = e.data,
                            a = JSON.parse(i.content.rendered);
                        return a = a.map(function(e) {
                            return t.formatRow(e)
                        }), i.active = 0 === r, i.content.parsed = a, i.id = n, i
                    })
                },
                formatRow: function(t) {
                    return t.map(function(t) {
                        return t.replace("][/img]", ">").replace("[img", "<img").replace(/\/\//g, "<br>").replace(":<br>", "://").replace("×", "x").replace("{{", "<i>").replace("}}", "</i>")
                    })
                },
                activateTable: function(t, e) {
                    this.tables.forEach(function(t) {
                        t.active = t.id === e
                    })
                }
            }
        }
    },
    134: function(t, e, r) {
        "use strict";
        r.r(e);
        var n = r(135),
            i = r.n(n);
        for (var a in n) "default" !== a && function(t) {
            r.d(e, t, function() {
                return n[t]
            })
        }(a);
        e.default = i.a
    },
    135: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = {
            props: {
                title: {
                    type: String
                },
                id: {
                    type: Number
                },
                active: {
                    type: Boolean
                }
            },
            mounted: function() {
                this.title = this.title
            },
            methods: {
                activate: function() {
                    window.PubSub.unsubscribe("comparison-table:scroll"), window.PubSub.publish("comparison-table:activate", this.id)
                }
            }
        }
    },
    136: function(t, e, r) {
        "use strict";
        r.r(e);
        var n = r(137),
            i = r.n(n);
        for (var a in n) "default" !== a && function(t) {
            r.d(e, t, function() {
                return n[t]
            })
        }(a);
        e.default = i.a
    },
    137: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = a(r(55)),
            i = a(r(538));

        function a(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        e.default = {
            props: ["table"],
            data: function() {
                return {
                    theadRows: [],
                    tbodyRows: [],
                    tbodyRowLeads: [],
                    active: !1
                }
            },
            components: {
                CompareTableStickyHeader: i.default
            },
            mounted: function() {
                this.setTableData.call(this)
            },
            methods: {
                setTableData: function() {
                    var t = [],
                        e = [],
                        r = !0;
                    this.table.content.parsed.forEach(function(n) {
                        r ? t.push(n) : e.push(n), r = !1
                    }), this.tbodyRowLeads = this.table.content.parsed.map(function(t) {
                        return t[0]
                    }), this.theadRows = t, this.tbodyRows = e, this.formatCells.call(this), this.setLeadCellHeight.call(this), $(window).on("load resize", this.setLeadCellHeight)
                },
                formatCells: function() {
                    $(".vue-table-wrap-scroller").scroll((0, n.default)(function(t) {
                        var e = $(this).scrollLeft() > 25 ? "addClass" : "removeClass";
                        $(".vue-table-wrap")[e]("lead-in")
                    }, 5)), $(".vue-table-wrap-scroller .dataTables_wrapper").on("scroll", function() {
                        window.PubSub.publish("comparison-table:scroll", $(this).scrollLeft())
                    })
                },
                setLeadCellHeight: function() {
                    $(".dataTable-lead tr:first-child th").css("height", $(".tablepress-comparison thead").outerHeight())
                }
            }
        }
    },
    138: function(t, e, r) {
        "use strict";
        r.r(e);
        var n = r(139),
            i = r.n(n);
        for (var a in n) "default" !== a && function(t) {
            r.d(e, t, function() {
                return n[t]
            })
        }(a);
        e.default = i.a
    },
    139: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = {
            data: function() {
                return {
                    isSticky: !1,
                    width: "auto",
                    offsetTop: "0",
                    bottomedOut: !1
                }
            },
            props: ["cells"],
            mounted: function() {
                window.PubSub.subscribe("comparison-table:scroll", this.overflowScroll), window.PubSub.subscribe("window:scroll", this.shouldStickHeader), window.PubSub.subscribe("window:resize", this.stickyPosition), this.stickyPosition(), this.shouldStickHeader("window:scroll", {
                    top: $(window).scrollTop()
                })
            },
            methods: {
                overflowScroll: function(t, e) {
                    this.$refs.stickyHeader.style.left = "-" + e + "px"
                },
                shouldStickHeader: function(t, e) {
                    var r = e.top,
                        n = $(this.$refs.stickyHeader),
                        i = $(".tablepress-comparison"),
                        a = i.find("tbody"),
                        o = $(".sticky-header").outerHeight() + n.outerHeight();
                    this.isSticky = r > a.offset().top - o, this.bottomedOut = r > i.offset().top + i.outerHeight() - o
                },
                stickyPosition: function(t) {
                    this.width = $(".tablepress-comparison").outerWidth(), this.offsetTop = $(".sticky-header").outerHeight()
                }
            },
            computed: {
                dimensions: function() {
                    return {
                        width: "String" == typeof this.width ? this.width : this.width + "px",
                        top: this.offsetTop + "px"
                    }
                }
            }
        }
    },
    140: function(t, e, r) {},
    184: function(t, e, r) {
        "use strict";
        var n = u(r(57)),
            i = u(r(58)),
            a = u(r(34)),
            o = r(7),
            s = u(r(185));

        function u(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(0, o.register)("product-ingredients-nutrition", {
            onLoad: function() {
                var t = this;
                return (0, i.default)(n.default.mark(function e() {
                    var r;
                    return n.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (r = t.container.querySelector("[data-product-details-json]")) {
                                    e.next = 3;
                                    break
                                }
                                return e.abrupt("return");
                            case 3:
                                if (t.info = JSON.parse(r.innerHTML), !t.info.wordpress_product_id) {
                                    e.next = 10;
                                    break
                                }
                                return e.next = 7, t.getWordPressProductInformation.call(t);
                            case 7:
                                t.apiResponse = e.sent, t.addProductInformation.call(t), t.addNutritionFacts.call(t);
                            case 10:
                            case "end":
                                return e.stop()
                        }
                    }, e, t)
                }))()
            },
            getWordPressProductInformation: function() {
                return fetch("https://www.katefarms.com/wp-json/wp/v2/products-api/" + this.info.wordpress_product_id).then(function(t) {
                    return t.json()
                })
            },
            createInformationRow: function(t, e) {
                // var r = document.createElement("div");
                // return r.className = "product-information-row pb-2", r.innerHTML = '<h4 class="mb-0">' + t + "</h4>" + e, r
            },
            addProductInformation: function() {
                var t = this,
                    e = this.container.querySelector("[data-product-details-content]"),
                    r = {
                        ingredients: "Ingredients",
                        age_indication: "Age Indication",
                        dri_guidelines: "DRI Guidelines",
                        instructions: "Instructions",
                        storage: "Storage",
                        certifications: "Certifications",
                        insurance_code: "Insurance Code"
                    };
                if (this.apiResponse.meta) {
                    var n = this.apiResponse.meta;
                    Object.keys(r).forEach(function(i) {
                        n && i in n && n[i].content.trim().length > 0 && e.appendChild(t.createInformationRow(r[i], n[i].content))
                    }), n && "insurance_code" in n && n.insurance_code.content.trim().length > 0 && document.querySelectorAll("[data-product-insurance-code]").forEach(function(t) {
                        t.innerHTML = n.insurance_code.content, t.innerHTML = '<span class="font-medium">Insurance Code: </span> ' + t.innerText
                    })
                }
            },
            addNutritionFacts: function() {
                var t = this,
                    e = this.container.querySelector("[data-product-details-nutrifacts]");
                new a.default({
                    render: function(e) {
                        return e(s.default, {
                            props: {
                                footnote: t.apiResponse.meta.ingredients.fine_print,
                                columns: [{
                                    field: "nutrient",
                                    label: "Composition",
                                    tdClass: "text-sm px-4 py-2 leading-tight",
                                    thClass: "text-left text-xl font-bold px-4 py-3",
                                    html: !0
                                }, {
                                    field: "unit",
                                    label: "",
                                    tdClass: "text-sm text-right px-4 py-2 leading-tight"
                                }, {
                                    field: "amount",
                                    label: "Amount",
                                    tdClass: "text-sm text-right px-4 py-2 leading-tight",
                                    thClass: "text-right text-xl font-bold px-4 py-3"
                                }],
                                rows: t.apiResponse.meta.formula_calculator.table.filter(function(t) {
                                    return !t.exclude_from_ni
                                })
                            }
                        })
                    }
                }).$mount(e)
            }
        })
    },
    185: function(t, e, r) {
        "use strict";
        r.r(e);
        var n = r(49),
            i = r(30);
        for (var a in i) "default" !== a && function(t) {
            r.d(e, t, function() {
                return i[t]
            })
        }(a);
        r(186);
        var o = r(0),
            s = Object(o.a)(i.default, n.a, n.b, !1, null, null, null);
        e.default = s.exports
    },
    186: function(t, e, r) {
        "use strict";
        var n = r(32);
        r.n(n).a
    },
    196: function(t, e, r) {
        "use strict";
        var n = function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    staticClass: "col w-full"
                }, [this.tables.length > 1 ? e("div", {
                    staticClass: "flex mb-4 border-b-2 border-gray lg:px-2"
                }, this._l(this.tables, function(t) {
                    return e("CompareTableTitle", {
                        key: t.id,
                        attrs: {
                            id: t.id,
                            title: t.title.rendered,
                            active: t.active
                        }
                    })
                }), 1) : this._e(), this._v(" "), this._l(this.tables, function(t) {
                    return e("CompareTable", {
                        key: t.id,
                        attrs: {
                            table: t
                        }
                    })
                })], 2)
            },
            i = [];
        r.d(e, "a", function() {
            return n
        }), r.d(e, "b", function() {
            return i
        })
    },
    201: function(t, e, r) {
        "use strict";
        var n = function() {
                var t = this.$createElement;
                return (this._self._c || t)("div", {
                    staticClass: "comparison-table-tab cursor-pointer font-medium text-sm xs:text-base leading-tight transition flex items-center justify-center p-4 xs:px-6 rounded-t border-gray border-t-2 border-l-2 border-r-2 text-center flex-1",
                    class: {
                        "active border-navy bg-navy text-white": this.active, "border-gray-dark bg-white text-gray-dark": !this.active
                    },
                    on: {
                        click: this.activate
                    }
                }, [this._v(this._s(this.title))])
            },
            i = [];
        r.d(e, "a", function() {
            return n
        }), r.d(e, "b", function() {
            return i
        })
    },
    202: function(t, e, r) {
        "use strict";
        var n = function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "vue-table-wrap relative sm:mx-0"
                }, [r("div", {
                    staticClass: "dataTable-lead absolute top-0 left-0 z-40 overflow-hidden"
                }, [r("div", {
                    staticClass: "dataTables_wrapper no-footer"
                }, [r("table", {
                    staticClass: "tablepress dataTable no-footer"
                }, [r("tbody", t._l(t.tbodyRowLeads, function(e, n) {
                    return r("tr", {
                        key: "lead-" + n
                    }, [r("th", [r("span", {
                        domProps: {
                            innerHTML: t._s(e)
                        }
                    })])])
                }), 0)])])]), t._v(" "), r("div", {
                    staticClass: "vue-table-wrap-scroller"
                }, [r("compare-table-sticky-header", {
                    attrs: {
                        cells: t.theadRows[0]
                    }
                }), t._v(" "), r("div", {
                    staticClass: "dataTables_wrapper no-footer relative z-0"
                }, [r("table", {
                    ref: "tableelement",
                    staticClass: "tablepress tablepress-comparison dataTable no-footer"
                }, [r("thead", t._l(t.theadRows, function(e, n) {
                    return r("tr", {
                        key: "row-head-" + n
                    }, t._l(e, function(e, n) {
                        return r("th", {
                            key: "item-head-" + n
                        }, [r("span", {
                            domProps: {
                                innerHTML: t._s(e)
                            }
                        })])
                    }), 0)
                }), 0), t._v(" "), r("tbody", t._l(t.tbodyRows, function(e, n) {
                    return r("tr", {
                        key: "row-body-" + n
                    }, t._l(e, function(e, n) {
                        return r("td", {
                            key: "item-head-" + n
                        }, [r("span", {
                            domProps: {
                                innerHTML: t._s(e)
                            }
                        })])
                    }), 0)
                }), 0)])])], 1)])
            },
            i = [];
        r.d(e, "a", function() {
            return n
        }), r.d(e, "b", function() {
            return i
        })
    },
    209: function(t, e, r) {
        "use strict";
        var n = function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("table", {
                    ref: "stickyHeader",
                    staticClass: "tablepress comparison-table-sticky-header bg-white fixed top-0 z-30",
                    class: {
                        "opacity-1": this.isSticky && !this.bottomedOut, "opacity-0 pointer-events-none": !this.isSticky || this.bottomedOut
                    },
                    style: t.dimensions
                }, [r("thead", [r("tr", t._l(t.cells, function(e, n) {
                    return r("th", {
                        key: "cell-" + n
                    }, [r("span", {
                        staticClass: "block mx-auto",
                        domProps: {
                            innerHTML: t._s(e)
                        }
                    })])
                }), 0)])])
            },
            i = [];
        r.d(e, "a", function() {
            return n
        }), r.d(e, "b", function() {
            return i
        })
    },
    30: function(t, e, r) {
        "use strict";
        r.r(e);
        var n = r(31),
            i = r.n(n);
        for (var a in n) "default" !== a && function(t) {
            r.d(e, t, function() {
                return n[t]
            })
        }(a);
        e.default = i.a
    },
    31: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = {
            props: {
                footnote: {
                    type: String
                },
                columns: {
                    type: Array
                },
                rows: {
                    type: Array
                }
            }
        }
    },
    32: function(t, e, r) {},
    49: function(t, e, r) {
        "use strict";
        var n = function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "w-full"
                }, [r("div", {
                    staticClass: "w-full border-t border-b sm:max-w-md sm:border lg:max-w-none border-gray-150 bg-indigo-white"
                }, [t._m(0), t._v(" "), r("table", {
                    staticClass: "vgt-table"
                }, [t._m(1), t._v(" "), r("tbody", t._l(t.rows, function(e, n) {
                    return r("tr", {
                        key: n
                    }, [r("td", {
                        staticClass: "text-primary-blue text-sm text-left px-4 py-2 leading-tight",
                        domProps: {
                            innerHTML: t._s(e.nutrient)
                        }
                    }), t._v(" "), r("td", {
                        staticClass: "text-primary-blue text-sm text-right p-2 leading-tight",
                        domProps: {
                            innerHTML: t._s(e.unit)
                        }
                    }), t._v(" "), r("td", {
                        staticClass: "text-primary-blue text-sm text-right pl-2 pr-4 py-2 leading-tight",
                        domProps: {
                            innerHTML: t._s(e.amount)
                        }
                    })])
                }), 0)])]), t._v(" "), t.footnote ? r("div", {
                    staticClass: "nutrition-facts-footnote mt-4 text-xs text-navy-500",
                    domProps: {
                        innerHTML: t._s(t.footnote)
                    }
                }) : t._e()])
            },
            i = [function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    staticClass: "product-table"
                }, [e("div", {
                    staticClass: "product-table__header border-b border-gray-150 px-4 pt-6 pb-3"
                }, [e("h3", {
                    staticClass: "leading-none font-bold m-0 text-2xl"
                }, [this._v("Nutrition")])])])
            }, function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("thead", [e("tr", [e("th", {
                    staticClass: "text-left text-xl font-bold px-4 py-3",
                    attrs: {
                        colspan: "2"
                    }
                }, [this._v("\n            Composition\n          ")]), this._v(" "), e("th", {
                    staticClass: "text-right text-xl font-bold px-4 py-3"
                }, [this._v("Amount")])])])
            }];
        r.d(e, "a", function() {
            return n
        }), r.d(e, "b", function() {
            return i
        })
    },
    533: function(t, e, r) {
        "use strict";
        var n = r(7);
        r(66), r(534), r(184), (0, n.load)("*")
    },
    534: function(t, e, r) {
        "use strict";
        var n = u(r(57)),
            i = u(r(58)),
            a = u(r(34)),
            o = r(7),
            s = u(r(535));

        function u(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(0, o.register)("product-comparison-table", {
            onLoad: function() {
                var t = this;
                return (0, i.default)(n.default.mark(function e() {
                    return n.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (t.tableRoot = t.container.querySelector("[data-comparison-table-root]"), t.tableId = t.tableRoot.dataset.comparisonTableRoot, !t.tableId) {
                                    e.next = 7;
                                    break
                                }
                                return e.next = 5, t.getTablepressData.call(t);
                            case 5:
                                t.apiResponse = e.sent, t.setupTable.call(t);
                            case 7:
                            case "end":
                                return e.stop()
                        }
                    }, e, t)
                }))()
            },
            getTablepressData: function() {
                return fetch("https://www.katefarms.com/wp-json/katefarms/v1/table/" + this.tableId).then(function(t) {
                    return t.json()
                })
            },
            setupTable: function() {
                var t = this;
                new a.default({
                    render: function(e) {
                        return e(s.default, {
                            props: {
                                tableData: [{
                                    id: t.tableId,
                                    data: t.apiResponse
                                }]
                            }
                        })
                    }
                }).$mount(this.tableRoot)
            }
        })
    },
    535: function(t, e, r) {
        "use strict";
        r.r(e);
        var n = r(196),
            i = r(132);
        for (var a in i) "default" !== a && function(t) {
            r.d(e, t, function() {
                return i[t]
            })
        }(a);
        var o = r(0),
            s = Object(o.a)(i.default, n.a, n.b, !1, null, null, null);
        e.default = s.exports
    },
    536: function(t, e, r) {
        "use strict";
        r.r(e);
        var n = r(201),
            i = r(134);
        for (var a in i) "default" !== a && function(t) {
            r.d(e, t, function() {
                return i[t]
            })
        }(a);
        var o = r(0),
            s = Object(o.a)(i.default, n.a, n.b, !1, null, null, null);
        e.default = s.exports
    },
    537: function(t, e, r) {
        "use strict";
        r.r(e);
        var n = r(202),
            i = r(136);
        for (var a in i) "default" !== a && function(t) {
            r.d(e, t, function() {
                return i[t]
            })
        }(a);
        var o = r(0),
            s = Object(o.a)(i.default, n.a, n.b, !1, null, null, null);
        e.default = s.exports
    },
    538: function(t, e, r) {
        "use strict";
        r.r(e);
        var n = r(209),
            i = r(138);
        for (var a in i) "default" !== a && function(t) {
            r.d(e, t, function() {
                return i[t]
            })
        }(a);
        r(539);
        var o = r(0),
            s = Object(o.a)(i.default, n.a, n.b, !1, null, null, null);
        e.default = s.exports
    },
    539: function(t, e, r) {
        "use strict";
        var n = r(140);
        r.n(n).a
    },
    6: function(t, e) {
        t.exports = window.jQuery
    },
    66: function(t, e, r) {
        "use strict";
        var n = h(r(57)),
            i = h(r(58)),
            a = h(r(6)),
            o = h(r(55)),
            s = r(187),
            u = r(11),
            c = r(7),
            l = r(70),
            d = r(179),
            p = h(d),
            f = function(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e.default = t, e
            }(r(180));

        function h(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var m = (0, a.default)(window),
            b = "hide",
            v = "bar-in",
            y = {
                submitButton: "[data-submit-button]",
                submitButtonText: "[data-submit-button-text]",
                comparePrice: "[data-compare-price]",
                compareDisplay: "#compareAt",
                comparePriceText: "[data-compare-text]",
                priceWrapper: "[data-price-wrapper]",
                imageWrapper: "[data-product-image-wrapper]",
                visibleImageWrapper: "[data-product-image-wrapper]:not(.hide)",
                imageWrapperById: function(t) {
                    return y.imageWrapper + "[data-image-id='" + t + "']"
                },
                productForm: "[data-product-form]",
                productPrice: "[data-product-price]",
                productUnitPrice: "[data-product-unit-price]",
                thumbnail: "[data-product-single-thumbnail]",
                thumbnailById: function(t) {
                    return "[data-thumbnail-id='" + t + "']"
                },
                thumbnailActive: "[data-product-single-thumbnail][aria-current]",
                quantity: "#Quantity",
                priceInformation: "[data-pricing-information]",
                gallery: ".product-gallery",
                buyNowCta: "[data-bar-buy-now]",
                prices: {
                    normal: "#rc_price_onetime",
                    autodeliver: "#rc_price_autodeliver"
                },
                shippingModalTrigger: "[data-shipping-modal-trigger]",
                shippingModalClose: "[data-shipping-modal-close]",
                shippingModalContent: "[data-shipping-modal-content]"
            };
        (0, c.register)("product", {
            onLoad: function() {
                var t = this;
                return (0, i.default)(n.default.mark(function e() {
                    var r, i;
                    return n.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (r = document.querySelector(y.productForm), t.setupGallery.call(t), r) {
                                    e.next = 4;
                                    break
                                }
                                return e.abrupt("return");
                            case 4:
                                return e.next = 6, t.getProductJson(r.dataset.productHandle);
                            case 6:
                                t.product = e.sent, t.productForm = new s.ProductForm(r, t.product, {
                                    onOptionChange: t.onFormOptionChange.bind(t)
                                }), t.productForm.element.addEventListener("submit", t.onFormSubmit.bind(t)), t.quantity = t.container.querySelector(y.quantity), t.prices = {}, t.prices.onetime = t.product.price, t.compareDisplay = t.container.querySelector(y.compareDisplay), t.compareTotal = t.product.compare_at_price, (i = t.container.querySelector(y.prices.autodeliver)) && (t.prices.autodeliver = Number(i.innerText.replace(/\D/g, ""))), t.selectedFrequency = "onetime", t.onThumbnailClick = t.onThumbnailClick.bind(t), t.onThumbnailKeyup = t.onThumbnailKeyup.bind(t), t.onFrequencyChange = t.onFrequencyChange.bind(t), t.container.addEventListener("click", t.onThumbnailClick), t.container.addEventListener("keyup", t.onThumbnailKeyup), t.container.querySelectorAll("[name=purchase_type]").forEach(function(e) {
                                    e.addEventListener("change", t.onFrequencyChange.bind(t, e)), e.addEventListener("click", t.onFrequencyChange.bind(t, e))
                                }), t.prices = JSON.parse(t.container.querySelector(y.priceInformation).innerText), t.quantity && t.quantity.addEventListener("input", t.updateProductPrice.call(t)), t.setupDefaultFrequency.call(t), t.shippingContentInstance = f.create(t.container.querySelector(y.shippingModalContent)), t.container.addEventListener("click", function(e) {
                                    if (e.target.closest(y.shippingModalTrigger)) return e.preventDefault(), void t.shippingContentInstance.show()
                                }), document.addEventListener("click", function(e) {
                                    if (e.target.closest(y.shippingModalClose)) return e.preventDefault(), void t.shippingContentInstance.close()
                                }), t.container.addEventListener("click", function(e) {
                                    e.target.closest(y.buyNowCta) && (e.preventDefault(), window.outerWidth < 350 ? (0, a.default)("body,html").animate({
                                        scrollTop: t.container.offsetTop + 350
                                    }) : window.outerWidth < 375 ? (0, a.default)("body,html").animate({
                                        scrollTop: t.container.offsetTop + 375
                                    }) : window.outerWidth < 768 ? (0, a.default)("body,html").animate({
                                        scrollTop: t.container.offsetTop + 400
                                    }) : (0, a.default)("body,html").animate({
                                        scrollTop: t.container.offsetTop - 40
                                    }))
                                }), m.on("scroll", (0, o.default)(t.handleScroll.bind(t), 50)), window.PubSub.subscribe("cart:quantity:update", function() {
                                    t.updateProductPrice.call(t)
                                });
                            case 32:
                            case "end":
                                return e.stop()
                        }
                    }, e, t)
                }))()
            },
            updateProductPrice: function() {
                var t = this.quantity.value,
                    e = this.prices[this.selectedFrequency];
                if (this.container.querySelector(y.productPrice).innerText = (0, u.formatMoney)(t * Number(e)), this.compareTotal) {
                    var r = this.compareTotal;
                    this.container.querySelector(y.compareDisplay).innerText = (0, u.formatMoney)(t * Number(r))
                }
            },
            onFrequencyChange: function(t) {
                this.selectedFrequency = t.value;
                var e = this.quantity.value;
                this.container.querySelector(y.productPrice).innerText = (0, u.formatMoney)(e * this.prices[this.selectedFrequency]), this.container.querySelector(y.productUnitPrice).innerText = (0, u.formatMoney)(this.prices[this.selectedFrequency] / 12)
            },
            formatFrequencyText: function(t) {
                var e = t.replace(/\D/g, "");
                return e + (Number(e) > 1 ? " Weeks" : " Week")
            },
            setupGallery: function() {
                new p.default(y.gallery, {
                    type: "carousel",
                    gap: 0
                }).mount({
                    Controls: d.Controls,
                    Swipe: d.Swipe
                })
            },
            setupDefaultFrequency: function() {
                var t = this,
                    e = setInterval(function() {
                        window.ReCharge && (clearInterval(e), t.setupRcOptions.call(t), t.frequencyUpdates.call(t))
                    })
            },
            frequencyUpdates: function() {
                var t = this,
                    e = this.container.querySelector(".rc_select__frequency"),
                    r = this.container.querySelector("[data-product-frequency]"),
                    n = this.container.querySelector("[data-product-frequency-wrapper]");
                e.addEventListener("change", function() {
                    var n = e.querySelector('[value="' + e.value + '"]');
                    r.innerText = t.formatFrequencyText(n.innerText).replace("(Default)", "").toLowerCase()
                });
                var i = e.querySelector('[value="' + e.value + '"]');
                r.innerText = this.formatFrequencyText(i.innerText).replace("(Default)", "").toLowerCase(), (0, a.default)("input[name=purchase_type]").on("change", function() {
                    var t = "autodeliver" == (0, a.default)("input[name=purchase_type]:checked").val();
                    n.style.display = t ? "inline-block" : "none"
                }), n.style.display = "autodeliver" == (0, a.default)("input[name=purchase_type]:checked").val() ? "block" : "none"
            },
            setupRcOptions: function() {
                var t = this,
                    e = Array.prototype.slice.call(this.container.querySelectorAll(".rc_select__frequency option")),
                    r = e.map(function(e) {
                        return t.formatFrequencyText(e.innerText)
                    }).indexOf("4 Weeks");
                r > -1 && (e[r].innerText = "4 Weeks (Default)", e[r].selected = !0)
            },
            handleScroll: function() {
                m.scrollTop() >= this.container.offsetTop + this.container.offsetHeight ? this.container.classList.add(v) : this.container.classList.remove(v)
            },
            onUnload: function() {
                this.productForm.destroy(), this.removeEventListener("click", this.onThumbnailClick), this.removeEventListener("keyup", this.onThumbnailKeyup)
            },
            getProductJson: function(t) {
                return fetch("/products/" + t + ".js").then(function(t) {
                    return t.json()
                })
            },
            onFormOptionChange: function(t) {
                var e = t.dataset.variant;
                this.renderImages(e), this.renderPrice(e), this.renderComparePrice(e), this.renderSubmitButton(e), this.updateBrowserHistory(e)
            },
            onThumbnailClick: function(t) {
                var e = t.target.closest(y.thumbnail);
                e && (t.preventDefault(), this.renderFeaturedImage(e.dataset.thumbnailId), this.renderActiveThumbnail(e.dataset.thumbnailId))
            },
            onThumbnailKeyup: function(t) {
                if (13 === t.keyCode && t.target.closest(y.thumbnail)) {
                    var e = this.container.querySelector(y.visibleImageWrapper);
                    (0, l.forceFocus)(e)
                }
            },
            renderSubmitButton: function(t) {
                var e = this.container.querySelector(y.submitButton),
                    r = this.container.querySelector(y.submitButtonText);
                t ? t.available ? (e.disabled = !1, r.innerText = theme.strings.addToCart) : (e.disabled = !0, r.innerText = theme.strings.soldOut) : (e.disabled = !0, r.innerText = theme.strings.unavailable)
            },
            renderImages: function(t) {
                t && null !== t.featured_image && (this.renderFeaturedImage(t.featured_image.id), this.renderActiveThumbnail(t.featured_image.id))
            },
            renderPrice: function(t) {
                var e = this.container.querySelector(y.productPrice);
                this.container.querySelector(y.priceWrapper).classList.toggle(b, !t), t && (e.innerText = (0, u.formatMoney)(t.price, theme.moneyFormat))
            },
            renderComparePrice: function(t) {
                if (t) {
                    var e = this.container.querySelector(y.comparePrice),
                        r = this.container.querySelector(y.comparePriceText);
                    e && r && (t.compare_at_price > t.price ? (e.innerText = (0, u.formatMoney)(t.compare_at_price, theme.moneyFormat), r.classList.remove(b), e.classList.remove(b)) : (e.innerText = "", r.classList.add(b), e.classList.add(b)))
                }
            },
            renderActiveThumbnail: function(t) {
                var e = this.container.querySelector(y.thumbnailById(t)),
                    r = this.container.querySelector(y.thumbnailActive);
                e !== r && (r.removeAttribute("aria-current"), e.setAttribute("aria-current", !0))
            },
            renderFeaturedImage: function(t) {
                var e = this.container.querySelector(y.visibleImageWrapper),
                    r = this.container.querySelector(y.imageWrapperById(t));
                e.classList.add(b), r.classList.remove(b)
            },
            updateBrowserHistory: function(t) {
                var e = this.productForm.element.dataset.enableHistoryState;
                if (t && "true" === e) {
                    var r = (0, s.getUrlWithVariant)(window.location.href, t.id);
                    window.history.replaceState({
                        path: r
                    }, "", r)
                }
            },
            onFormSubmit: function(t) {
                // t.preventDefault();
                // var e = this.container.querySelector(y.submitButton);
                // e.disabled = !0;
                // var r = {};
                // setTimeout(function() {
                //     (0, a.default)(y.productForm).serializeArray().forEach(function(t, e) {
                //         r[t.name] = t.value
                //     });
                //     var t = {};
                //     t.quantity = Number(r.quantity), t.id = Number(r.id), r.purchase_type && "autodeliver" == r.purchase_type && (t.properties = {
                //         shipping_interval_frequency: r["properties[shipping_interval_frequency]"],
                //         shipping_interval_unit_type: r["properties[shipping_interval_unit_type]"]
                //     }), window.PubSub.publish("product:form:submit", {
                //         data: t
                //     }), e.disabled = !1
                // }, 50)
            }
        })
    }
});