!(function (t) {
  function e(e) {
    for (
      var i, u, o = e[0], s = e[1], l = e[2], d = 0, f = [];
      d < o.length;
      d++
    )
      (u = o[d]), a[u] && f.push(a[u][0]), (a[u] = 0);
    for (i in s) Object.prototype.hasOwnProperty.call(s, i) && (t[i] = s[i]);
    for (c && c(e); f.length; ) f.shift()();
    return r.push.apply(r, l || []), n();
  }

  function n() {
    for (var t, e = 0; e < r.length; e++) {
      for (var n = r[e], i = !0, o = 1; o < n.length; o++) {
        var s = n[o];
        0 !== a[s] && (i = !1);
      }
      i && (r.splice(e--, 1), (t = u((u.s = n[0]))));
    }
    return t;
  }
  var i = {},
    a = {
      2: 0,
    },
    r = [];

  function u(e) {
    if (i[e]) return i[e].exports;
    var n = (i[e] = {
      i: e,
      l: !1,
      exports: {},
    });
    return t[e].call(n.exports, n, n.exports, u), (n.l = !0), n.exports;
  }
  (u.m = t),
    (u.c = i),
    (u.d = function (t, e, n) {
      u.o(t, e) ||
        Object.defineProperty(t, e, {
          enumerable: !0,
          get: n,
        });
    }),
    (u.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, {
          value: "Module",
        }),
        Object.defineProperty(t, "__esModule", {
          value: !0,
        });
    }),
    (u.t = function (t, e) {
      if ((1 & e && (t = u(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (u.r(n),
        Object.defineProperty(n, "default", {
          enumerable: !0,
          value: t,
        }),
        2 & e && "string" != typeof t)
      )
        for (var i in t)
          u.d(
            n,
            i,
            function (e) {
              return t[e];
            }.bind(null, i)
          );
      return n;
    }),
    (u.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return u.d(e, "a", e), e;
    }),
    (u.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (u.p = "");
  var o = (window.shopifySlateJsonp = window.shopifySlateJsonp || []),
    s = o.push.bind(o);
  (o.push = e), (o = o.slice());
  for (var l = 0; l < o.length; l++) e(o[l]);
  var c = s;
  r.push([263, 0]), n();
})([
  ,
  ,
  ,
  ,
  ,
  ,
  function (t, e) {
    t.exports = window.jQuery;
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.SWELL_DISCOUNT_CODE = "kf-swell-coupon-code"),
      (e.SWELL_DISCOUNT_CODE_TYPE = "kf-swell-coupon-type"),
      (e.SWELL_DISCOUNT_AMOUNT = "kf-swell-coupon-amount"),
      (e.SWELL_CART_REGISTRATION = "kf-registration-from-cart");
  },
  ,
  function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(26),
      a = n.n(i);
    for (var r in i)
      "default" !== r &&
        (function (t) {
          n.d(e, t, function () {
            return i[t];
          });
        })(r);
    e.default = a.a;
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.default = {});
  },
  function (t, e, n) {},
  function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(29),
      a = n.n(i);
    for (var r in i)
      "default" !== r &&
        (function (t) {
          n.d(e, t, function () {
            return i[t];
          });
        })(r);
    e.default = a.a;
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    });
    var i = n(10),
      a = o(n(79)),
      r = n(11),
      u = o(n(35));

    function o(t) {
      return t && t.__esModule
        ? t
        : {
            default: t,
          };
    }
    e.default = {
      components: {
        SwellMessage: a.default,
      },
      mounted: function () {},
      methods: {
        formatMoney: function (t) {
          return (0, r.formatMoney)(t);
        },
        redeemPoints: function () {
          this.$store.dispatch("redeemPoints", {
            redemptionOptionId: this.$refs.redemptionAmount.value,
          });
        },
      },
      computed: Object.assign(
        {},
        (0, i.mapState)({
          customer: function (t) {
            return t.cart[u.default.SWELL_CUSTOMER.stateKey];
          },
          isSubmitting: function (t) {
            return t.cart[u.default.SWELL_DISCOUNT_CODE.loadingKey];
          },
          redemptionOptions: function (t) {
            var e = t.cart[u.default.SWELL_REDEMPTION_OPTIONS.stateKey],
              n = t.cart[u.default.SWELL_CUSTOMER.stateKey].pointsBalance;
            return e.length
              ? e.filter(function (t) {
                  return n >= t.costInPoints;
                })
              : [];
          },
          availableCredit: function (t) {
            var e = t.cart[u.default.SWELL_CUSTOMER.stateKey].pointsBalance;
            return "You have %s in redeemable credit.".replace(
              "%s",
              (0, r.formatMoney)(10 * e)
            );
          },
        })
      ),
    };
  },
  ,
  ,
  ,
  ,
  ,
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    });
    var i = (function (t) {
        return t && t.__esModule
          ? t
          : {
              default: t,
            };
      })(n(221)),
      a = function (t) {
        return {
          SUCCESS: t + "_SUCCESS",
          FAILURE: t + "_FAILURE",
          PENDING: t + "_PENDING",
          loadingKey: (0, i.default)(t + "_PENDING"),
          stateKey: (0, i.default)(t + "_DATA"),
        };
      },
      r = {
        ITEMS: a("ITEMS"),
        ADD_ITEM: a("ADD_ITEM"),
        UPDATE_QUANTITY: a("UPDATE_QUANTITY"),
        SWELL_CUSTOMER: a("SWELL_CUSTOMER"),
        SWELL_REDEMPTION: a("SWELL_REDEMPTION"),
        SWELL_REDEMPTION_OPTIONS: a("SWELL_REDEMPTION_OPTIONS"),
        SWELL_DISCOUNT_CODE: a("SWELL_DISCOUNT_CODE"),
      };
    e.default = r;
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (t, e, n) {
    "use strict";
    var i = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          {
            staticClass: "transition-opacity duration-150",
            class: {
              "opacity-50 pointer-events-none": t.isSubmitting,
            },
          },
          [
            n("SwellMessage", [
              t._v("\n    " + t._s(t.availableCredit) + "\n  "),
            ]),
            t._v(" "),
            n(
              "div",
              {
                staticClass: "row my-4",
              },
              [
                n(
                  "div",
                  {
                    staticClass: "col w-1/2",
                  },
                  [
                    n(
                      "select",
                      {
                        ref: "redemptionAmount",
                        staticClass: "form-control rounded-full",
                      },
                      t._l(t.redemptionOptions, function (e) {
                        return n(
                          "option",
                          {
                            key: "opt-" + e.id,
                            domProps: {
                              value: e.id,
                            },
                          },
                          [
                            t._v(
                              "\n          " +
                                t._s(t.formatMoney(e.discountAmountCents)) +
                                "\n        "
                            ),
                          ]
                        );
                      }),
                      0
                    ),
                  ]
                ),
                t._v(" "),
                n(
                  "div",
                  {
                    staticClass: "col w-1/2",
                  },
                  [
                    n(
                      "button",
                      {
                        staticClass: "btn btn-black block w-full leading-none",
                        attrs: {
                          type: "button",
                          disabled: t.isSubmitting,
                        },
                        on: {
                          click: function (e) {
                            return e.preventDefault(), t.redeemPoints(e);
                          },
                        },
                      },
                      [
                        t.isSubmitting
                          ? n("span", [t._v("Applying…")])
                          : n("span", [t._v("Redeem")]),
                      ]
                    ),
                  ]
                ),
              ]
            ),
          ],
          1
        );
      },
      a = [];
    n.d(e, "a", function () {
      return i;
    }),
      n.d(e, "b", function () {
        return a;
      });
  },
  function (t, e, n) {
    "use strict";
    var i = function (t, e) {
        return (0, e._c)(
          "div",
          {
            staticClass:
              "rounded-lg p-3 swell-redeem-message text-white text-base leading-snug",
          },
          [
            e._t("default", [
              e._v(
                " Reward discount will be applied automatically at checkout. "
              ),
            ]),
          ],
          2
        );
      },
      a = [];
    n.d(e, "a", function () {
      return i;
    }),
      n.d(e, "b", function () {
        return a;
      });
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(51),
      a = n(25);
    for (var r in a)
      "default" !== r &&
        (function (t) {
          n.d(e, t, function () {
            return a[t];
          });
        })(r);
    n(149);
    var u = n(0),
      o = Object(u.a)(a.default, i.a, i.b, !0, null, null, null);
    e.default = o.exports;
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(90),
      a = n.n(i);
    for (var r in i)
      "default" !== r &&
        (function (t) {
          n.d(e, t, function () {
            return i[t];
          });
        })(r);
    e.default = a.a;
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    });
    var i = u(n(290)),
      a = u(n(291)),
      r = u(n(320));

    function u(t) {
      return t && t.__esModule
        ? t
        : {
            default: t,
          };
    }
    u(n(214)),
      (e.default = {
        components: {
          SlideUpDown: r.default,
          SearchForm: i.default,
          NavItem: a.default,
        },
        data: function () {
          return {
            items: [],
            open: !1,
            mobile: !1,
          };
        },
        mounted: function () {
          this.initialState(), this.setup(), this.listeners();
        },
        methods: {
          afterLeave: function () {
            window.PubSub.publish("header:nav:close");
          },
          initialState: function () {
            var t = this;
            window.PrimaryNavigationItems
              ? (this.items = JSON.parse(window.PrimaryNavigationItems))
              : fetch(
                  "https://www.katefarms.com/wp-json/wp-api-menus/v2/menu-locations/primary_navigation/"
                )
                  .then(function (t) {
                    return t.clone().json();
                  })
                  .then(function (e) {
                    return (t.items = e);
                  });
          },
          setup: function () {
            this.mobile = -1 == ["xl"].indexOf(this.$mq);
          },
          listeners: function () {
            var t = this;
            window.PubSub.subscribe("header:nav:reset", function () {
              t.open = !1;
            }),
              window.PubSub.subscribe("header:nav:toggle", function () {
                t.open = !t.open;
              });
          },
        },
        computed: {
          isMobile: function () {
            return this.mobile;
          },
          allProductsUrl: function () {
            return "/";
          },
          widgetContents: function () {
            return document.querySelector("[data-super-header-widgets]")
              .innerHTML;
          },
        },
        watch: {
          $mq: function (t, e) {
            this.mobile = -1 == ["xl"].indexOf(t);
          },
          mobile: function () {
            (this.open = !1), window.PubSub.publish("header:nav:reset");
          },
        },
      });
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(92),
      a = n.n(i);
    for (var r in i)
      "default" !== r &&
        (function (t) {
          n.d(e, t, function () {
            return i[t];
          });
        })(r);
    e.default = a.a;
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.default = {
        data: function () {
          return {
            searchTerm: "",
          };
        },
        mounted: function () {
          this.getSearchTerm();
        },
        methods: {
          getSearchTerm: function () {
            var t = window.location.search;
            if (0 !== t.length && -1 !== t.indexOf("s=")) {
              var e = "";
              (t = t
                .substring(1)
                .split("&")
                .forEach(function (t) {
                  t.indexOf("s=") > -1 && (e = t.substring(2));
                })),
                (this.term = e);
            }
          },
        },
        computed: {
          action: function () {
            return "/";
          },
        },
      });
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(94),
      a = n.n(i);
    for (var r in i)
      "default" !== r &&
        (function (t) {
          n.d(e, t, function () {
            return i[t];
          });
        })(r);
    e.default = a.a;
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (function (t) {
        t && t.__esModule;
      })(n(214)),
      (e.default = {
        name: "NavItem",
        data: function () {
          return {
            open: !1,
          };
        },
        props: {
          item: {
            type: Object,
            required: !0,
          },
          depth: {
            type: Number,
            default: 1,
          },
          openOverride: {
            type: Boolean,
            default: !1,
          },
        },
        mounted: function () {
          this.propOverrides(), this.events();
        },
        methods: {
          propOverrides: function () {
            this.openOverride && (this.open = !0);
          },
          events: function () {
            var t = this;
            window.PubSub.subscribe("header:nav:reset", function () {
              t.open = !1;
            });
          },
          toggle: function (t) {
            this.item.children.length > 0 &&
              ((this.open = !this.open),
              t.preventDefault(),
              t.stopPropagation());
          },
          navClassWithPrefix: function (t) {
            return t.length > 0 && "nav-item--" + t;
          },
        },
        computed: {
          classes: function () {
            var t = this,
              e = ["nav-item"];
            return (
              this.item.classes &&
                this.item.classes.split(" ").forEach(function (n) {
                  e.push(t.navClassWithPrefix(n));
                }),
              this.depth > 1 && e.push("nav-item--child"),
              e.push("nav-item--depth-" + this.depth),
              this.item.children &&
                this.item.children.length > 0 &&
                e.push("nav-item--parent"),
              this.open && (e.push("nav-item--open"), e.push("relative")),
              e
            );
          },
          fullWidth: function () {
            return this.item.classes.indexOf("full-width") > -1;
          },
          children: function () {
            return this.item.children;
          },
        },
      });
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(96),
      a = n.n(i);
    for (var r in i)
      "default" !== r &&
        (function (t) {
          n.d(e, t, function () {
            return i[t];
          });
        })(r);
    e.default = a.a;
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    });
    var i = n(323),
      a = o(n(324)),
      r = o(n(325)),
      u = n(10);

    function o(t) {
      return t && t.__esModule
        ? t
        : {
            default: t,
          };
    }
    e.default = {
      data: function () {
        return {
          cartOpen: !1,
        };
      },
      components: {
        FocusTrap: i.FocusTrap,
        ProductCartOverlay: a.default,
        ProductCartDrawer: r.default,
      },
      mounted: function () {
        this.events(), this.setup();
      },
      computed: Object.assign(
        {},
        (0, u.mapState)({
          open: function (t) {
            return t.cart.open;
          },
          items: function (t) {
            return t.cart.itemsData.items;
          },
        })
      ),
      methods: Object.assign({}, (0, u.mapActions)(["addLineItem"]), {
        setup: function () {
          this.$store.dispatch("getItemsAsync");
        },
        events: function () {
          var t = this;
          window.PubSub.subscribe("cart:table:quantity-updated", function () {
            t.$store.dispatch("getItemsAsync");
          }),
            window.PubSub.subscribe("product:form:submit", function (e, n) {
              var i = n.data;
              t.$store.dispatch("openCart"),
                t.$nextTick(function () {
                  t.addLineItem(i);
                });
            }),
            window.PubSub.subscribe("document:keyup", function (e, n) {
              27 == n.code && t.$store.dispatch("closeCart");
            }),
            window.PubSub.subscribe("cart:open", function () {
              t.$store.dispatch("openCart"), (t.cartOpen = !0);
            }),
            window.PubSub.subscribe("cart:close", function () {
              t.$store.dispatch("closeCart"), (t.cartOpen = !1);
            });
        },
      }),
    };
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(98),
      a = n.n(i);
    for (var r in i)
      "default" !== r &&
        (function (t) {
          n.d(e, t, function () {
            return i[t];
          });
        })(r);
    e.default = a.a;
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    });
    var i = n(10);
    e.default = {
      data: function () {
        return {
          visible: !0,
        };
      },
      methods: Object.assign({}, (0, i.mapActions)(["closeCart"])),
    };
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(100),
      a = n.n(i);
    for (var r in i)
      "default" !== r &&
        (function (t) {
          n.d(e, t, function () {
            return i[t];
          });
        })(r);
    e.default = a.a;
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    });
    var i = f(n(326)),
      a = f(n(328)),
      r = f(n(219)),
      u = f(n(348)),
      o = f(n(349)),
      s = f(n(351)),
      l = (n(260), n(10)),
      c = n(353),
      d = f(n(35));

    function f(t) {
      return t && t.__esModule
        ? t
        : {
            default: t,
          };
    }
    e.default = {
      data: function () {
        return {
          shippingText: null,
          returnsText: null,
          finePrint: null,
          dataObject: null,
        };
      },
      components: {
        CartProgress: i.default,
        CartSummary: a.default,
        CartSubtotal: r.default,
        CloseButton: u.default,
        Product: o.default,
        ProductPlaceholder: s.default,
      },
      mounted: function () {
        var t = this;
        window.PubSub.subscribe("cart:opened", function (e) {
          t.$nextTick(function () {
            (0, c.disableBodyScroll)(document.querySelector(".cart-outer"));
          });
        }),
          window.PubSub.subscribe("cart:closed", c.clearAllBodyScrollLocks);
      },
      computed: Object.assign(
        {
          loginUrl: function () {
            return (
              "/account/login?return_url=" +
              encodeURIComponent(window.location.pathname + "?opencart=1")
            );
          },
        },
        (0, l.mapState)({
          token: function (t) {
            return t.cart.itemsData.token;
          },
          items: function (t) {
            return t.cart.itemsData && t.cart.itemsData.items
              ? t.cart.itemsData.items
              : [];
          },
          itemCount: function (t) {
            return t.cart
              ? t.cart.itemsData.items
                  .filter(function (t) {
                    return !t.placeholder;
                  })
                  .reduce(function (t, e) {
                    return t + e.quantity;
                  }, 0)
              : "";
          },
          subscriptionItemsCount: function (t) {
            return this.items.reduce(function (t, e) {
              return e.properties && e.properties.subscription_id
                ? t + e.quantity
                : t;
            }, 0);
          },
          hasSubscriptionItems: function (t) {
            var e = !1;
            return (
              t.cart.itemsData.items.forEach(function (t) {
                t.properties &&
                  t.properties.shipping_interval_frequency &&
                  (e = !0);
              }),
              e
            );
          },
          specialText: function () {
            var t = !1;
            return (this.shippingText || this.returnsText) && (t = !0), t;
          },
          isUpdating: function (t) {
            return t.cart[d.default.UPDATE_QUANTITY.loadingKey];
          },
          needsProgressBar: function (t) {
            var e = t.cart[d.default.ITEMS.stateKey].items;
            return this.hasSubscriptionItems
              ? 0 ==
                  (e = e.filter(this.isSubscriptionItem).filter(function (t) {
                    return (
                      t &&
                      t.product_type &&
                      t.product_type.indexOf("4-Pack Bundle") > -1
                    );
                  })).length
              : 0 ==
                  (e = e.filter(function (t) {
                    return (
                      t &&
                      t.product_type &&
                      t.product_type.indexOf("4-Pack Bundle") > -1
                    );
                  })).length;
          },
        }),
        {
          notInCartItems: function () {
            var t = this.items.map(function (t) {
              return t.id;
            });
            return this.crossSellItems.filter(function (e) {
              return !t.includes(e.id);
            });
          },
          needsRecommendations: function () {
            var t = !1;
            return this.notInCartItems.length > 0 && (t = !0), t;
          },
        }
      ),
      methods: Object.assign({}, (0, l.mapActions)(["closeCart"]), {
        submitHandler: function (t) {
          if ((t.target, document.body.classList.contains("template-cart")))
            document.querySelector('#MainContent [name="checkout"]').click();
          else if (this.hasSubscriptionItems) {
            var e =
                "&cart_token=" +
                (document.cookie.match("(^|; )cart=([^;]*)") || 0)[2],
              n = "myshopify_domain=" + window.Shopify.shop,
              i = "",
              a = "",
              r = "";
            try {
              i = "&" + ga.getAll()[0].get("linkerParam");
            } catch (t) {
              i = "";
            }
            window.customerIsLoggedIn &&
              (a =
                "&customer_id=" +
                window.customer.customer_id +
                "&customer_email=" +
                window.customer.customer_email);
            var u =
              this.$store.state.cart[d.default.SWELL_DISCOUNT_CODE.stateKey]
                .code;
            u && (u = "&discount=" + u);
            var o = this.$refs.cartForm.querySelector(
              '[name="attributes[sitedomain]"]'
            );
            o && (r = "&shopdomain=" + o.value);
            var s = "";
            if (window.convert) {
              var l = window.convert.getCookie("_conv_v"),
                c = window.convert.getCookie("_conv_s");
              l && (s += "&_conv_v=" + encodeURIComponent(l)),
                c && (s += "&_conv_s=" + encodeURIComponent(c));
            }
            window.location =
              "https://checkout.rechargeapps.com/r/checkout?" +
              n +
              e +
              i +
              a +
              u +
              r +
              s;
          } else this.$refs.cartForm.submit();
        },
        isSubscriptionItem: function (t) {
          return t.properties && t.properties.subscription_id;
        },
      }),
    };
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(102),
      a = n.n(i);
    for (var r in i)
      "default" !== r &&
        (function (t) {
          n.d(e, t, function () {
            return i[t];
          });
        })(r);
    e.default = a.a;
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    });
    var i = n(10),
      a = (n(260), n(11));
    e.default = {
      props: {
        remaining: Number,
        hasSubscriptionItems: Boolean,
      },
      computed: Object.assign(
        {
          barWidth: function () {
            return {
              width: 25 * (1 - this.remaining) + "%",
            };
          },
          itemType: function () {
            var t = "item";
            return (
              this.remaining > 1 && (t = "items"),
              this.hasSubscriptionItems && (t = "<b>subscription</b> " + t),
              t
            );
          },
          remainingMessage: function () {
            return 4 === Number(this.remaining)
              ? "Four product minimum required to purchase."
              : "Add " +
                  this.remaining +
                  " more " +
                  this.itemType +
                  " to your cart to check out.";
          },
        },
        (0, i.mapState)({
          subtotal: function (t) {
            return t.cart.itemsData.items_subtotal_price;
          },
          freeShippingRemainder: function (t) {
            return (0, a.formatMoney)(7500 - this.subtotal);
          },
        })
      ),
    };
  },
  function (t, e, n) {},
  function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(105),
      a = n.n(i);
    for (var r in i)
      "default" !== r &&
        (function (t) {
          n.d(e, t, function () {
            return i[t];
          });
        })(r);
    e.default = a.a;
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    });
    var i = n(10),
      a = s(n(219)),
      r = s(n(79)),
      u = s(n(150)),
      o = s(n(35));

    function s(t) {
      return t && t.__esModule
        ? t
        : {
            default: t,
          };
    }
    e.default = {
      components: {
        CartSubtotal: a.default,
        SwellMessage: r.default,
        PointsRedemptionForm: u.default,
      },
      data: function () {
        return {
          isSubmitting: !1,
        };
      },
      computed: Object.assign(
        {},
        (0, i.mapState)({
          discount: function (t) {
            return t.cart[o.default.SWELL_DISCOUNT_CODE.stateKey].code;
          },
          discountType: function (t) {
            return t.cart[o.default.SWELL_DISCOUNT_CODE.stateKey].type;
          },
        }),
        (0, i.mapGetters)(["showRedeemForm"])
      ),
    };
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(107),
      a = n.n(i);
    for (var r in i)
      "default" !== r &&
        (function (t) {
          n.d(e, t, function () {
            return i[t];
          });
        })(r);
    e.default = a.a;
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    });
    var i = n(10),
      a = n(11),
      r = s(n(220)),
      u = s(n(329)),
      o = s(n(35));

    function s(t) {
      return t && t.__esModule
        ? t
        : {
            default: t,
          };
    }
    e.default = {
      components: {
        CartSubtotalRow: r.default,
        CartDiscounts: u.default,
      },
      computed: Object.assign(
        {},
        (0, i.mapState)({
          subtotal: function (t) {
            return (0, a.formatMoney)(t.cart.itemsData.items_subtotal_price);
          },
          total: function (t) {
            var e = t.cart.itemsData.total_price;
            return (
              t.cart[o.default.SWELL_DISCOUNT_CODE.stateKey].amount &&
                (e -= t.cart[o.default.SWELL_DISCOUNT_CODE.stateKey].amount),
              (0, a.formatMoney)(e)
            );
          },
          discountAmount: function (t) {
            return t.cart[o.default.SWELL_DISCOUNT_CODE.stateKey].amount || 1e3;
          },
          discountCode: function (t) {
            return t.cart[o.default.SWELL_DISCOUNT_CODE.stateKey].code;
          },
        })
      ),
    };
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(109),
      a = n.n(i);
    for (var r in i)
      "default" !== r &&
        (function (t) {
          n.d(e, t, function () {
            return i[t];
          });
        })(r);
    e.default = a.a;
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.default = {
        props: ["label", "value"],
      });
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(111),
      a = n.n(i);
    for (var r in i)
      "default" !== r &&
        (function (t) {
          n.d(e, t, function () {
            return i[t];
          });
        })(r);
    e.default = a.a;
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    });
    var i = (function (t) {
        return t && t.__esModule
          ? t
          : {
              default: t,
            };
      })(n(220)),
      a = n(11),
      r = n(10);
    e.default = {
      props: {
        code: String,
        amount: {
          required: !0,
          type: [Number, String],
          default: 1e3,
        },
      },
      components: {
        CartSubtotalRow: i.default,
      },
      computed: {
        formattedAmount: function () {
          return (0, a.formatMoney)(this.amount);
        },
      },
      methods: Object.assign({}, (0, r.mapActions)(["removeDiscountCode"])),
    };
  },
  function (t, e, n) {},
  function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(114),
      a = n.n(i);
    for (var r in i)
      "default" !== r &&
        (function (t) {
          n.d(e, t, function () {
            return i[t];
          });
        })(r);
    e.default = a.a;
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    });
    var i = n(10);
    e.default = {
      mounted: function () {
        this.$refs.closeButton.focus();
      },
      methods: Object.assign({}, (0, i.mapActions)(["closeCart"])),
    };
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(116),
      a = n.n(i);
    for (var r in i)
      "default" !== r &&
        (function (t) {
          n.d(e, t, function () {
            return i[t];
          });
        })(r);
    e.default = a.a;
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    });
    var i = (function (t) {
        return t && t.__esModule
          ? t
          : {
              default: t,
            };
      })(n(350)),
      a = n(11);
    e.default = {
      data: function () {
        return {
          itemQuantity: 0,
        };
      },
      props: {
        item: Object,
        id: Number,
        product_title: String,
        quantity: Number,
        properties: Object,
        line_price: [Number, String],
        image: String,
        url: String,
        productKey: String,
      },
      mounted: function () {
        this.itemQuantity = this.quantity;
      },
      components: {
        NumberField: i.default,
      },
      computed: {
        isSubscriptionItem: function () {
          return this.properties && this.properties.shipping_interval_unit_type;
        },
        deliverySchedule: function () {
          if (this.isSubscriptionItem) {
            var t = this.properties,
              e = t.shipping_interval_frequency,
              n = t.shipping_interval_unit_type.toLowerCase();
            return e + " " + (e > 1 ? n : n.replace("s", ""));
          }
          return "";
        },
        lineItemPrice: function () {
          var t = this.line_price;
          return (
            "string" == typeof this.line_price &&
              (t = 100 * parseFloat(this.line_price)),
            (0, a.formatMoney)(t)
          );
        },
        renderedTitle: function () {
          return this.product_title.replace(
            "(",
            '<br class="hidden xxs:block"> ('
          );
        },
        productUrl: function () {
          return this.isSubscriptionItem
            ? this.url.replace("-1", "")
            : this.url;
        },
      },
      methods: {
        removeProduct: function () {
          this.updateCartIconsCount(this.itemQuantity);
          this.$store.dispatch("quantityChanged", {
            id: "" + this.productKey,
            quantity: 0,
          }),
            window.PubSub.publish("product:remove", {
              id: "" + this.id,
              quantity: 0,
              product_key: this.productKey,
            });
        },
        updateCartIconsCount: function (t) {
          document
            .querySelectorAll("[data-header-cart-count]")
            .forEach(function (e) {
              let result = e.innerText - t;
              console.log(result);
              if (result == 0) {
                $("[data-header-cart-count]").addClass("cart_zero_hidden");
              }
              return (e.innerText = result);
            });
        },
      },
    };
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(118),
      a = n.n(i);
    for (var r in i)
      "default" !== r &&
        (function (t) {
          n.d(e, t, function () {
            return i[t];
          });
        })(r);
    e.default = a.a;
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (function (t) {
        t && t.__esModule;
      })(n(34)),
      (e.default = {
        data: function () {
          return {
            value: 0,
          };
        },
        props: ["amount", "variant-id", "product-key"],
        mounted: function () {
          this.setup();
        },
        methods: {
          setup: function () {
            this.amount && (this.value = this.amount),
              (this.value = this.amount);
          },
          updateValue: function (t) {
            (this.value = t),
              this.$store.dispatch("quantityChanged", {
                id: "" + this.variantId,
                quantity: this.value,
              });
          },
        },
      });
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(120),
      a = n.n(i);
    for (var r in i)
      "default" !== r &&
        (function (t) {
          n.d(e, t, function () {
            return i[t];
          });
        })(r);
    e.default = a.a;
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    });
    var i = n(352);
    e.default = {
      components: {
        ContentLoader: i.ContentLoader,
      },
    };
  },
  function (t, e, n) {},
  function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(123),
      a = n.n(i);
    for (var r in i)
      "default" !== r &&
        (function (t) {
          n.d(e, t, function () {
            return i[t];
          });
        })(r);
    e.default = a.a;
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    });
    var i = window.localStorage;
    e.default = {
      data: function () {
        return {
          items: [],
          menu: [],
          heading: "",
        };
      },
      props: {
        title: {
          type: Number,
          required: !0,
        },
        location: {
          type: String,
          required: !0,
        },
        options: {
          type: String,
          required: !1,
          default: "",
        },
      },
      mounted: function () {
        this.fetch_menu_items(), this.fetch_menu_name(), this.overrides();
      },
      methods: {
        apiRouteBase: function () {
          return "https://www.katefarms.com/wp-json/wp-api-menus/v2";
        },
        fetch_menu_items: function () {
          var t = this,
            e = i.getItem(this.location + "_items");
          e && 0 != e.length
            ? (this.items = e)
            : fetch(
                this.apiRouteBase() + "/menu-locations/" + this.location + "/"
              )
                .then(function (t) {
                  return t.clone().json();
                })
                .then(function (e) {
                  return (t.items = e);
                });
        },
        fetch_menu_name: function () {
          var t = this,
            e = i.getItem(this.location + "_menu");
          e
            ? (this.menu = e)
            : fetch(this.apiRouteBase() + "/menus/" + this.title + "/")
                .then(function (t) {
                  return t.clone().json();
                })
                .then(function (e) {
                  return (t.menu = e);
                });
        },
        overrides: function () {
          this.menu &&
            this.menu.name &&
            this.menu.name.length > 0 &&
            (this.heading = this.menu.name);
        },
      },
    };
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(125),
      a = n.n(i);
    for (var r in i)
      "default" !== r &&
        (function (t) {
          n.d(e, t, function () {
            return i[t];
          });
        })(r);
    e.default = a.a;
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.default = {
        data: function () {
          return {
            items: [],
            icons: {
              Facebook:
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48.89 48.89" v-bind:svg-inline="\'\'" v-bind:class="\'full-current\'" v-bind:role="\'presentation\'" v-bind:focusable="\'false\'" v-bind:tabindex="\'-1\'"><g data-name="Layer 2"><path d="M24.44 0A24.44 24.44 0 000 24.44a24.45 24.45 0 0024.44 24.45 24.45 24.45 0 0024.45-24.45A24.45 24.45 0 0024.44 0zm6.47 24.42h-4.14v14.9h-6.15V24.48h-3.1v-5.25h3.1v-3.88c0-3.89 2.13-5.78 6.52-5.78h4.22V15H28c-1 0-1.27.33-1.27 1.54v2.74h4.6z" data-name="Layer 1"/></g></svg>',
              Instagram:
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48.89 48.89" v-bind:svg-inline="\'\'" v-bind:class="\'full-current\'" v-bind:role="\'presentation\'" v-bind:focusable="\'false\'" v-bind:tabindex="\'-1\'"><g data-name="Layer 2"><g data-name="Layer 1"><path d="M33.82 15.07a4.11 4.11 0 00-1.51-1 7.28 7.28 0 00-2.46-.46c-1.41-.06-1.83-.07-5.41-.07s-4 0-5.41.07a7.2 7.2 0 00-2.45.46 4 4 0 00-1.51 1 4.07 4.07 0 00-1 1.5 7.4 7.4 0 00-.44 2.43c-.06 1.41-.08 1.84-.08 5.41s0 4 .08 5.41a7.28 7.28 0 00.46 2.46 4.11 4.11 0 001 1.51 4.15 4.15 0 001.51 1 7.33 7.33 0 002.45.45c1.42.07 1.84.08 5.41.08s4 0 5.41-.08a7.47 7.47 0 002.46-.45 4.32 4.32 0 002.49-2.49 7.35 7.35 0 00.45-2.46c.07-1.41.08-1.83.08-5.41s0-4-.08-5.41a7.47 7.47 0 00-.45-2.46 4.2 4.2 0 00-1-1.49zm-9.38 16.35a7 7 0 117-7 7 7 0 01-7 7zM31.6 19a1.71 1.71 0 111.7-1.71A1.71 1.71 0 0131.6 19z"/><path d="M24.44 20.07a4.37 4.37 0 104.37 4.37 4.37 4.37 0 00-4.37-4.37z"/><path d="M24.44 0A24.44 24.44 0 000 24.44a24.45 24.45 0 1048.89 0A24.45 24.45 0 0024.44 0zm13.42 30a10 10 0 01-.63 3.29 6.64 6.64 0 01-1.56 2.41 6.77 6.77 0 01-2.41 1.56 9.92 9.92 0 01-3.29.63c-1.44.07-1.91.08-5.53.08s-4.09 0-5.53-.08a9.91 9.91 0 01-3.28-.63 6.68 6.68 0 01-2.41-1.56 6.8 6.8 0 01-1.57-2.41A10.18 10.18 0 0111 30c-.06-1.41-.08-1.89-.08-5.53s0-4.11.08-5.53a10.17 10.17 0 01.63-3.28 7 7 0 014-4 9.91 9.91 0 013.28-.66c1.44-.06 1.91-.08 5.53-.08s4.1 0 5.53.08a9.92 9.92 0 013.29.63 6.91 6.91 0 014 4 9.91 9.91 0 01.63 3.28c.07 1.44.08 1.91.08 5.53s-.04 4.1-.11 5.56z"/></g></g></svg>',
              Twitter:
                '<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 29.43" v-bind:svg-inline="\'\'" v-bind:class="\'full-current\'" v-bind:role="\'presentation\'" v-bind:focusable="\'false\'" v-bind:tabindex="\'-1\'"><path d="M36 3.43a15.51 15.51 0 01-4.2 1.2A7.28 7.28 0 0035 .53a12.77 12.77 0 01-4.7 1.8 7.35 7.35 0 00-12.7 5.1 9.85 9.85 0 00.2 1.7 20.94 20.94 0 01-15.2-7.7 7.36 7.36 0 002.3 9.9 8.2 8.2 0 01-3.4-.9v.1a7.38 7.38 0 005.9 7.2 6.45 6.45 0 01-2 .3 6.15 6.15 0 01-1.4-.1A7.29 7.29 0 0010.9 23 15.25 15.25 0 010 26.13a20.69 20.69 0 0011.3 3.3c13.6 0 21-11.2 21-21v-1a19.76 19.76 0 003.7-4"/></svg>',
              LinkedIn:
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48.89 48.89" v-bind:svg-inline="\'\'" v-bind:class="\'full-current\'" v-bind:role="\'presentation\'" v-bind:focusable="\'false\'" v-bind:tabindex="\'-1\'"><g data-name="Layer 2"><path d="M24.44 0A24.44 24.44 0 000 24.44a24.45 24.45 0 1048.89 0A24.45 24.45 0 0024.44 0zm-5.92 35.44h-5.26V18.89h5.26zM15.86 17A3.12 3.12 0 1119 13.84 3.1 3.1 0 0115.86 17zm21.62 18.44h-5.24v-8.68c0-2.37-.89-3.57-2.65-3.57-1.93 0-3 1.27-3 3.57v8.68h-5.04V18.89h5.05v2a5.88 5.88 0 014.83-2.46c3.79 0 6 2.46 6 6.59z" data-name="Layer 1"/></g></svg>',
            },
            heading: "",
          };
        },
        mounted: function () {
          this.fetch_menu_items();
        },
        methods: {
          fetch_menu_items: function () {
            var t = this;
            fetch(
              "https://www.katefarms.com/wp-json/wp-api-menus/v2/menu-locations/social_navigation/"
            )
              .then(function (t) {
                return t.clone().json();
              })
              .then(function (e) {
                return (t.items = e);
              });
          },
        },
      });
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(127),
      a = n.n(i);
    for (var r in i)
      "default" !== r &&
        (function (t) {
          n.d(e, t, function () {
            return i[t];
          });
        })(r);
    e.default = a.a;
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.default = {
        data: function () {
          return {
            menus: [],
          };
        },
        mounted: function () {
          this.fetch();
        },
        methods: {
          fetch: (function (t) {
            function e() {
              return t.apply(this, arguments);
            }
            return (
              (e.toString = function () {
                return t.toString();
              }),
              e
            );
          })(function () {
            var t = this;
            fetch(
              "https://www.katefarms.com/wp-json/wp-api-menus/v2/menu-locations/"
            )
              .then(function (t) {
                return t.clone().json();
              })
              .then(function (e) {
                return (t.menus = e);
              });
          }),
        },
      });
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(129),
      a = n.n(i);
    for (var r in i)
      "default" !== r &&
        (function (t) {
          n.d(e, t, function () {
            return i[t];
          });
        })(r);
    e.default = a.a;
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.default = {
        data: function () {
          return {
            items: [],
          };
        },
        mounted: function () {
          this.fetch_menu_items();
        },
        methods: {
          fetch_menu_items: function () {
            var t = this;
            fetch(
              "https://www.katefarms.com/wp-json/wp-api-menus/v2/menu-locations/policy_navigation/"
            )
              .then(function (t) {
                return t.clone().json();
              })
              .then(function (e) {
                return (t.items = e);
              });
          },
        },
      });
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (t, e, n) {
    "use strict";
    var i = n(27);
    n.n(i).a;
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(50),
      a = n(28);
    for (var r in a)
      "default" !== r &&
        (function (t) {
          n.d(e, t, function () {
            return a[t];
          });
        })(r);
    var u = n(0),
      o = Object(u.a)(a.default, i.a, i.b, !1, null, null, null);
    e.default = o.exports;
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (t, e, n) {
    "use strict";
    var i = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "transition",
          {
            attrs: {
              "enter-active-class": "opacity-0 transform scale-95",
              "enter-class": "opacity-0 transform scale-95",
              "enter-to-class": "opacity-100 scale-100",
              "leave-active-class": "opacity-100 transform scale-100",
              "leave-class": "opacity-100 transform scale-100",
              "leave-to-class": "opacity-0 scale-95",
            },
            on: {
              "after-leave": t.afterLeave,
            },
          },
          [
            !t.isMobile || (t.isMobile && t.open)
              ? n(
                  "div",
                  {
                    staticClass:
                      "transition-all duration-75 ease-in-out nav-primary-wrapper h-screen xl:h-auto xl:transition-none",
                  },
                  [
                    t.items.length
                      ? n(
                          "ul",
                          {
                            staticClass:
                              "nav nav--primary shadow-inner xl:shadow-none",
                          },
                          t._l(t.items, function (e) {
                            return n("NavItem", {
                              key: "item-" + e.ID,
                              attrs: {
                                item: e,
                                "data-item-id": e.ID,
                              },
                              scopedSlots: t._u(
                                [
                                  {
                                    key: "after",
                                    fn: function (e) {
                                      var i = e.item,
                                        a = e.fullWidth,
                                        r = e.subnavOpen;
                                      return [
                                        !a && r && i.children.length
                                          ? n(
                                              "ul",
                                              {
                                                staticClass:
                                                  "sub-nav xl:whitespace-no-wrap",
                                              },
                                              t._l(i.children, function (t) {
                                                return n("NavItem", {
                                                  key: "child-" + t.ID,
                                                  attrs: {
                                                    depth: 2,
                                                    item: t,
                                                  },
                                                });
                                              }),
                                              1
                                            )
                                          : t._e(),
                                        t._v(" "),
                                        a && r && i.children.length
                                          ? n(
                                              "div",
                                              {
                                                staticClass:
                                                  "mega-menu-wrap border-t border-gray-300 xl:border-t-0 xl:absolute xl:top-full xl:inset-x-0 bg-off-white xl:bg-white",
                                              },
                                              [
                                                n(
                                                  "ul",
                                                  {
                                                    staticClass:
                                                      "xl:flex xl:flex-wrap container px-0",
                                                  },
                                                  [
                                                    t._l(
                                                      i.children,
                                                      function (e) {
                                                        return n(
                                                          "li",
                                                          {
                                                            key:
                                                              "fw-child-" +
                                                              e.ID,
                                                            staticClass:
                                                              "xl:flex-1 xl:py-4 nav-item nav-item--megamenu",
                                                          },
                                                          [
                                                            n(
                                                              "a",
                                                              {
                                                                staticClass:
                                                                  "nav-item__link",
                                                                attrs: {
                                                                  href: e.url,
                                                                  target:
                                                                    e.target,
                                                                },
                                                              },
                                                              [
                                                                n("div", {
                                                                  staticClass:
                                                                    "nav-item__megamenu__title",
                                                                  domProps: {
                                                                    innerHTML:
                                                                      t._s(
                                                                        e.title
                                                                      ),
                                                                  },
                                                                }),
                                                                t._v(" "),
                                                                n("span", {
                                                                  staticClass:
                                                                    "xl:hidden",
                                                                }),
                                                                t._v(" "),
                                                                e.description
                                                                  ? n(
                                                                      "div",
                                                                      {
                                                                        staticClass:
                                                                          "nav-item__megamenu__description text-black mt-3 leading-normal xl:mt-0",
                                                                      },
                                                                      [
                                                                        t._v(
                                                                          t._s(
                                                                            e.description
                                                                          )
                                                                        ),
                                                                      ]
                                                                    )
                                                                  : t._e(),
                                                              ]
                                                            ),
                                                          ]
                                                        );
                                                      }
                                                    ),
                                                    t._v(" "),
                                                    n(
                                                      "li",
                                                      {
                                                        staticClass:
                                                          "nav-item nav-item--all-products w-full border-b-0 xl:border-solid xl:border-t xl:border-gray-200 xl:mx-4 xl:py-4",
                                                      },
                                                      [
                                                        n(
                                                          "a",
                                                          {
                                                            staticClass:
                                                              "nav-item__link underline xl:-mx-4 text-ada-teal hover:text-primary-blue focus:text-primary-blue",
                                                            attrs: {
                                                              href: t.allProductsUrl,
                                                            },
                                                          },
                                                          [
                                                            n(
                                                              "span",
                                                              {
                                                                staticClass:
                                                                  "xl:hidden",
                                                              },
                                                              [t._v("View")]
                                                            ),
                                                            t._v(
                                                              " All Products\n                "
                                                            ),
                                                          ]
                                                        ),
                                                      ]
                                                    ),
                                                  ],
                                                  2
                                                ),
                                              ]
                                            )
                                          : t._e(),
                                      ];
                                    },
                                  },
                                ],
                                null,
                                !0
                              ),
                            });
                          }),
                          1
                        )
                      : t._e(),
                    t._v(" "),
                    n(
                      "div",
                      {
                        staticClass:
                          "py-2 text-center px-0 sm:flex sm:flex-wrap sm:items-center xl:hidden container",
                      },
                      [
                        n(
                          "div",
                          {
                            staticClass: "col w-full sm:w-1 mobile-menu-search",
                          },
                          [n("SearchForm")],
                          1
                        ),
                        t._v(" "),
                        n(
                          "div",
                          {
                            staticClass: "col w-full sm:w-1",
                          },
                          [
                            n(
                              "div",
                              {
                                staticClass:
                                  "super-header-widgets mt-6 sm:mt-0",
                              },
                              [
                                n("div", {
                                  domProps: {
                                    innerHTML: t._s(t.widgetContents),
                                  },
                                }),
                              ]
                            ),
                          ]
                        ),
                      ]
                    ),
                  ]
                )
              : t._e(),
          ]
        );
      },
      a = [];
    n.d(e, "a", function () {
      return i;
    }),
      n.d(e, "b", function () {
        return a;
      });
  },
  function (t, e, n) {
    "use strict";
    var i = function () {
        var t = this.$createElement,
          e = this._self._c || t;
        return e(
          "div",
          [
            e(
              "transition",
              {
                attrs: {
                  "enter-active-class":
                    "transition-opacity duration-150 ease-in-out",
                  "leave-active-class":
                    "transition-opacity duration-150 ease-in-out",
                  "enter-class": "opacity-0",
                  "enter-to-class": "opacity-100",
                  "leave-class": "opacity-100",
                  "leave-to-class": "opacity-0",
                },
              },
              [this.open ? e("product-cart-overlay") : this._e()],
              1
            ),
            this._v(" "),
            e(
              "transition",
              {
                attrs: {
                  "enter-active-class":
                    "transition-all duration-150 ease-in-out transform",
                  "leave-active-class":
                    "transition-all duration-150 ease-in-out transform",
                  "enter-class": " translate-x-full",
                  "enter-to-class": "translate-x-0",
                  "leave-class": "translate-x-0",
                  "leave-to-class": " translate-x-full",
                },
              },
              [this.open && this.items ? e("product-cart-drawer") : this._e()],
              1
            ),
          ],
          1
        );
      },
      a = [];
    n.d(e, "a", function () {
      return i;
    }),
      n.d(e, "b", function () {
        return a;
      });
  },
  function (t, e, n) {
    "use strict";
    var i = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          {
            staticClass: "navigation",
          },
          [
            t.menu.name
              ? n("div", {
                  staticClass:
                    "navigation__heading text-2xl md:text-3xl font-bold pb-4 md:pb-6",
                  domProps: {
                    innerHTML: t._s(t.menu.name),
                  },
                })
              : t._e(),
            t._v(" "),
            t.items.length > 0
              ? n(
                  "ul",
                  {
                    staticClass: "nav text-lg",
                  },
                  t._l(t.items, function (e) {
                    return n(
                      "li",
                      {
                        key: e.ID,
                        staticClass: "mb-1",
                      },
                      [
                        n("a", {
                          staticClass:
                            "block py-2 font-light hover:underline focus:underline",
                          attrs: {
                            href: e.url,
                            title: e.title,
                            target: e.target,
                          },
                          domProps: {
                            innerHTML: t._s(e.title),
                          },
                        }),
                      ]
                    );
                  }),
                  0
                )
              : t._e(),
          ]
        );
      },
      a = [];
    n.d(e, "a", function () {
      return i;
    }),
      n.d(e, "b", function () {
        return a;
      });
  },
  function (t, e, n) {
    "use strict";
    var i = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return t.items.length
          ? n(
              "ul",
              {
                staticClass: "flex social items-end pt-4 md:pt-0",
                attrs: {
                  id: "menu-social-navigation",
                },
              },
              t._l(t.items, function (e) {
                return n(
                  "li",
                  {
                    key: e.ID,
                    staticClass:
                      "menu-item inline nav-item-social inline pr-8 md:px-4",
                    class: "nav-item-" + e.title,
                  },
                  [
                    n(
                      "a",
                      {
                        attrs: {
                          href: e.url,
                          title: e.title,
                          target: e.target,
                          rel: "noopener noreferrer",
                        },
                      },
                      t._l(t.icons, function (i, a) {
                        return n(
                          "div",
                          {
                            key: i.index,
                          },
                          [
                            a == e.title
                              ? n("div", {
                                  domProps: {
                                    innerHTML: t._s(i),
                                  },
                                })
                              : t._e(),
                          ]
                        );
                      }),
                      0
                    ),
                  ]
                );
              }),
              0
            )
          : t._e();
      },
      a = [];
    n.d(e, "a", function () {
      return i;
    }),
      n.d(e, "b", function () {
        return a;
      });
  },
  function (t, e, n) {
    "use strict";
    var i = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          {
            staticClass: "row",
          },
          [
            n(
              "div",
              {
                staticClass: "col py-4 tiny-w-full w-1/2 lg:w-1/4",
              },
              [
                t.menus.footer_navigation_one
                  ? n("navigation", {
                      attrs: {
                        title: t.menus.footer_navigation_one.ID,
                        location: "footer_navigation_one",
                      },
                    })
                  : t._e(),
              ],
              1
            ),
            t._v(" "),
            n(
              "div",
              {
                staticClass: "col py-4 tiny-w-full w-1/2 lg:w-1/4",
              },
              [
                t.menus.footer_navigation_two
                  ? n("navigation", {
                      attrs: {
                        title: t.menus.footer_navigation_two.ID,
                        location: "footer_navigation_two",
                      },
                    })
                  : t._e(),
              ],
              1
            ),
            t._v(" "),
            n(
              "div",
              {
                staticClass: "col py-4 tiny-w-full w-1/2 lg:w-1/4",
              },
              [
                t.menus.footer_navigation_three
                  ? n("navigation", {
                      attrs: {
                        title: t.menus.footer_navigation_three.ID,
                        location: "footer_navigation_three",
                      },
                    })
                  : t._e(),
              ],
              1
            ),
            t._v(" "),
            n(
              "div",
              {
                staticClass: "col py-4 tiny-w-full w-1/2 lg:w-1/4",
              },
              [
                t.menus.footer_navigation_four
                  ? n("navigation", {
                      attrs: {
                        title: t.menus.footer_navigation_four.ID,
                        location: "footer_navigation_four",
                      },
                    })
                  : t._e(),
              ],
              1
            ),
          ]
        );
      },
      a = [];
    n.d(e, "a", function () {
      return i;
    }),
      n.d(e, "b", function () {
        return a;
      });
  },
  function (t, e, n) {
    "use strict";
    // var i = function () {
    //     var t = this,
    //       e = t.$createElement,
    //       n = t._self._c || e;
    //     return n("div", {
    //       staticClass: "col navigation"
    //     }, [t.items.length ? n("ul", {
    //       staticClass: "nav text-xs"
    //     }, t._l(t.items, function (e) {
    //       return n("li", {
    //         key: e.ID,
    //         staticClass: "mb-1 block md:inline"
    //       }, [n("a", {
    //         staticClass: "py-2 md:p-2 font-light hover:underline focus:underline",
    //         attrs: {
    //           href: e.url,
    //           title: e.title,
    //           target: e.target
    //         }
    //       }, [t._v(t._s(e.title))])])
    //     }), 0) : t._e()])
    //   },
    //   a = [];
    // n.d(e, "a", function () {
    //   return i
    // }), n.d(e, "b", function () {
    //   return a
    // })
  },
  ,
  function (t, e, n) {
    "use strict";
    var i = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "form",
          {
            staticClass: "search-form",
            attrs: {
              method: "get",
              id: "searchform",
              action: t.action,
            },
          },
          [
            n(
              "label",
              {
                staticClass: "sr-only",
                attrs: {
                  for: "s",
                },
              },
              [t._v("Search")]
            ),
            t._v(" "),
            n(
              "div",
              {
                staticClass: "relative",
              },
              [
                n("input", {
                  attrs: {
                    type: "hidden",
                    name: "post_type",
                    value: "any",
                  },
                }),
                t._v(" "),
                n("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: t.searchTerm,
                      expression: "searchTerm",
                    },
                  ],
                  staticClass:
                    "search-form__input bg-white border border-gray-500 rounded-full leading-none p-3 pl-12 w-full",
                  attrs: {
                    type: "text",
                    name: "s",
                    id: "s",
                    placeholder: "Search",
                  },
                  domProps: {
                    value: t.searchTerm,
                  },
                  on: {
                    input: function (e) {
                      e.target.composing || (t.searchTerm = e.target.value);
                    },
                  },
                }),
                t._v(" "),
                n(
                  "button",
                  {
                    staticClass:
                      "search-form__submit submit block absolute left-0 inset-y-0 ml-1 my-2 w-10 p-1 text-gray-600",
                    attrs: {
                      type: "submit",
                      id: "searchsubmit",
                    },
                  },
                  [
                    n(
                      "svg",
                      {
                        class: "fill-current",
                        attrs: {
                          viewBox: "0 0 19.97 19.96",
                          xmlns: "http://www.w3.org/2000/svg",
                          "svg-inline": "",
                          role: "presentation",
                          focusable: "false",
                          tabindex: "-1",
                        },
                      },
                      [
                        n("path", {
                          attrs: {
                            d: "M14.33 12.9l1.1 1.1a1.53 1.53 0 011.14.44l3 3a1.5 1.5 0 01-2.12 2.12l-3-3a1.52 1.52 0 01-.45-1.14l-1.1-1.1a8 8 0 111.41-1.41zM8 14a6 6 0 10-6-6 6 6 0 006 6z",
                          },
                        }),
                      ]
                    ),
                    t._v(" "),
                    n(
                      "span",
                      {
                        staticClass: "sr-only",
                      },
                      [t._v("Search>")]
                    ),
                  ]
                ),
              ]
            ),
          ]
        );
      },
      a = [];
    n.d(e, "a", function () {
      return i;
    }),
      n.d(e, "b", function () {
        return a;
      });
  },
  function (t, e, n) {
    "use strict";
    var i = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "li",
          {
            class: t.classes,
          },
          [
            t._t(
              "default",
              [
                n(
                  "a",
                  {
                    staticClass: "nav-item__link nav-item__link--transparent",
                    attrs: {
                      href: t.item.url,
                      "data-nav-link-type": t.item.type,
                    },
                    on: {
                      click: t.toggle,
                    },
                  },
                  [
                    n("span", {
                      domProps: {
                        innerHTML: t._s(t.item.title),
                      },
                    }),
                    t._v(" "),
                    n(
                      "span",
                      {
                        staticClass: "",
                      },
                      [
                        n(
                          "svg",
                          {
                            class:
                              "fill-current hidden xl:block xl:w-full xl:h-full",
                            attrs: {
                              viewBox: "0 0 28.29 16.18",
                              xmlns: "http://www.w3.org/2000/svg",
                              "svg-inline": "",
                              role: "presentation",
                              focusable: "false",
                              tabindex: "-1",
                            },
                          },
                          [
                            n("path", {
                              attrs: {
                                d: "M14.1 16.18a2 2 0 01-1.41-.58L.58 3.48a2 2 0 010-2.82 2 2 0 012.82 0l10.7 10.69L24.8.66a2 2 0 013 2.68.93.93 0 01-.14.14L15.51 15.6a2 2 0 01-1.41.58z",
                              },
                            }),
                          ]
                        ),
                      ]
                    ),
                  ]
                ),
              ],
              null,
              {
                item: t.item,
              }
            ),
            t._v(" "),
            t._t("after", null, null, {
              item: t.item,
              fullWidth: t.fullWidth,
              subnavOpen: t.open,
            }),
          ],
          2
        );
      },
      a = [];
    n.d(e, "a", function () {
      return i;
    }),
      n.d(e, "b", function () {
        return a;
      });
  },
  function (t, e, n) {
    "use strict";
    var i = function () {
        var t = this.$createElement,
          e = this._self._c || t;
        return this.visible
          ? e(
              "div",
              {
                staticClass: "fixed z-10 inset-0 cursor-pointer flex",
                on: {
                  click: this.closeCart,
                },
              },
              [
                e("div", {
                  staticClass: "w-full h-full bg-black opacity-50",
                }),
              ]
            )
          : this._e();
      },
      a = [];
    n.d(e, "a", function () {
      return i;
    }),
      n.d(e, "b", function () {
        return a;
      });
  },
  function (t, e, n) {
    "use strict";
    var i = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          {
            ref: "cartOuter",
            staticClass:
              "cart-outer fixed right-0 top-0 z-20 h-full bottom-0 bg-white w-full overflow-auto flex shadow",
          },
          [
            n(
              "form",
              {
                ref: "cartForm",
                staticClass: "cart-form flex-col w-full px-4 pt-6 relative",
                attrs: {
                  action: "/checkout",
                  method: "post",
                  novalidate: "",
                },
                on: {
                  submit: function (e) {
                    return e.preventDefault(), t.submitHandler(e);
                  },
                },
              },
              [
                t.hasSubscriptionItems
                  ? n("input", {
                      attrs: {
                        type: "hidden",
                        value: "katefarms.com",
                        name: "attributes[sitedomain]",
                      },
                    })
                  : t._e(),
                t._v(" "),
                n(
                  "div",
                  {
                    staticClass: "cart-form__wrapper flex-1 w-full relative",
                  },
                  [
                    n(
                      "div",
                      {
                        staticClass:
                          "cart-drawer__header pb-4 leading-none relative text-black",
                      },
                      [
                        t.items.length
                          ? n(
                              "h2",
                              {
                                staticClass:
                                  "my-0 mr-6 inline-block align-baseline",
                              },
                              [t._v("\n          Cart\n        ")]
                            )
                          : t._e(),
                        t._v(" "),
                        t.itemCount
                          ? n(
                              "div",
                              {
                                staticClass:
                                  "leading-none inline-block align-baseline",
                              },
                              [
                                t._v(
                                  "\n          " +
                                    t._s(t.itemCount) +
                                    "\n          "
                                ),
                                t.itemCount > 1
                                  ? n("span", [t._v("items")])
                                  : n("span", [t._v("item")]),
                              ]
                            )
                          : t._e(),
                        t._v(" "),
                        n("CloseButton", {
                          staticClass: "-mr-2",
                        }),
                      ],
                      1
                    ),
                    t._v(" "),
                    t.items && t.items.length
                      ? n(
                          "div",
                          {
                            staticClass:
                              "relative transition transition-duration-300",
                            class: {
                              "opacity-25 pointer-events-none": t.isUpdating,
                            },
                          },
                          t._l(t.items, function (e, i) {
                            return n(
                              "div",
                              {
                                key: e.id + "-" + i,
                              },
                              [
                                e.placeholder
                                  ? n("ProductPlaceholder")
                                  : n(
                                      "Product",
                                      t._b(
                                        {
                                          attrs: {
                                            item: e,
                                            id: e.id,
                                            product_title: e.title,
                                            quantity: e.quantity,
                                            properties: e.properties,
                                            line_price: e.line_price,
                                            image: e.image,
                                            url: e.url,
                                            "product-key": e.key,
                                          },
                                        },
                                        "Product",
                                        e,
                                        !1
                                      )
                                    ),
                              ],
                              1
                            );
                          }),
                          0
                        )
                      : 0 == t.items.length
                      ? n(
                          "h3",
                          {
                            staticClass: "text-center text-2xl my-8",
                          },
                          [t._v("\n        Your Cart is Empty!\n      ")]
                        )
                      : t._e(),
                    t._v(" "),
                    t.specialText
                      ? n(
                          "div",
                          {
                            staticClass:
                              "py-3 border-b border-black border-opacity-33",
                          },
                          [
                            t.shippingText
                              ? n(
                                  "div",
                                  {
                                    staticClass: "mx-1",
                                  },
                                  [
                                    n(
                                      "div",
                                      {
                                        staticClass: "text-xl font-bold pb-2",
                                      },
                                      [t._v("Shipping")]
                                    ),
                                    t._v(" "),
                                    n(
                                      "p",
                                      {
                                        staticClass: "text-base",
                                      },
                                      [t._v(t._s(t.shippingText))]
                                    ),
                                  ]
                                )
                              : t._e(),
                            t._v(" "),
                            t.returnsText
                              ? n(
                                  "div",
                                  {
                                    staticClass: "mx-1",
                                  },
                                  [
                                    n(
                                      "div",
                                      {
                                        staticClass: "text-xl font-bold pb-2",
                                      },
                                      [t._v("Returns")]
                                    ),
                                    t._v(" "),
                                    n(
                                      "p",
                                      {
                                        staticClass: "text-base",
                                      },
                                      [t._v(t._s(t.returnsText))]
                                    ),
                                  ]
                                )
                              : t._e(),
                          ]
                        )
                      : t._e(),
                  ]
                ),
                t._v(" "),
                t.itemCount > 0 ? n("CartSummary") : t._e(),
                t._v(" "),
                t._m(0),
              ],
              1
            ),
          ]
        );
      },
      a = [
        function () {
          var t = this.$createElement,
            e = this._self._c || t;
          return e(
            "div",
            {
              staticClass: "text-center pb-6",
            },
            [
              e("a", {
                // staticClass: "text-xl underline inline-block text-ada-clinicians-aqua hover:text-black focus:text-black",
                // attrs: {
                //   href: "/cart",
                //   title: "View Cart"
                // }
              }),
            ]
          );
        },
      ];
    n.d(e, "a", function () {
      return i;
    }),
      n.d(e, "b", function () {
        return a;
      });
  },
  ,
  ,
  function (t, e, n) {
    "use strict";
    var i = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          {
            staticClass:
              "cart-progress bg-purple-light -mx-4 px-4 py-3 flex items-center justify-start",
          },
          [
            n(
              "div",
              {
                staticClass: "flex-1 w-full",
              },
              [
                Number.isNaN(t.remaining) || t.remaining
                  ? n("div", [
                      n("div", {
                        staticClass:
                          "font-medium text-sm sm:text-base mb-2 leading-tight",
                        class: {
                          "mt-2": 1 == t.remaining,
                        },
                        domProps: {
                          innerHTML: t._s(t.remainingMessage),
                        },
                      }),
                      t._v(" "),
                      t.remaining < 1
                        ? n(
                            "div",
                            {
                              staticClass:
                                "progress-bar rounded-full bg-white overflow-hidden relative",
                            },
                            [
                              n("div", {
                                staticClass:
                                  "progress-bar__overlay absolute left-0 inset-y-0 rounded-full transition-all transition-timing-ease-in-out bg-purple-light",
                                style: t.barWidth,
                              }),
                            ]
                          )
                        : t._e(),
                    ])
                  : t._e(),
                t._v(" "),
                t.remaining
                  ? t._e()
                  : n(
                      "div",
                      {
                        staticClass: "font-bold leading-tight",
                      },
                      [
                        t.subtotal < 7500
                          ? n("div", [
                              t._v(
                                "You’re " +
                                  t._s(t.freeShippingRemainder) +
                                  " away from free shipping!\n        "
                              ),
                              t._m(0),
                            ])
                          : n("div", [t._v("You've got free shipping!")]),
                      ]
                    ),
              ]
            ),
          ]
        );
      },
      a = [
        function () {
          var t = this.$createElement,
            e = this._self._c || t;
          return e(
            "div",
            {
              staticClass: "text-sm font-normal",
            },
            [
              this._v("\n          Total must be $75+ "),
              e("em", [this._v("after discounts")]),
              this._v(" to receive free shipping.\n        "),
            ]
          );
        },
      ];
    n.d(e, "a", function () {
      return i;
    }),
      n.d(e, "b", function () {
        return a;
      });
  },
  function (t, e, n) {
    "use strict";
    var i = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          {
            staticClass: "p-4 -mx-4",
          },
          [
            n("CartSubtotal"),
            t._v(" "),
            t.showRedeemForm ? n("PointsRedemptionForm") : t._e(),
            t._v(" "),
            n(
              "button",
              {
                staticClass:
                  "cart__checkout-btn btn btn-black btn--no-hover block text-xl w-full py-4 px-6 mx-0 group relative",
                attrs: {
                  name: "checkout",
                  "data-disable-recharge": "true",
                  type: "submit",
                },
                on: {
                  click: function (e) {
                    t.isSubmitting = !0;
                  },
                },
              },
              [
                t._v(
                  "\n    " +
                    t._s(
                      t.isSubmitting ? "Please wait..." : "Proceed to checkout"
                    ) +
                    "\n  "
                ),
              ]
            ),
            t._v(" "),
            // n("div", {
            //   staticClass: "text-base mt-4 leading-tight text-black text-center"
            // }, [t._v("\n    Free 2-day shipping\n  ")])
          ],
          1
        );
      },
      a = [];
    n.d(e, "a", function () {
      return i;
    }),
      n.d(e, "b", function () {
        return a;
      });
  },
  function (t, e, n) {
    "use strict";
    var i = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          {
            staticClass: "border-t border-b border-gray-200 mb-5",
          },
          [
            n("CartSubtotalRow", {
              attrs: {
                label: "Subtotal",
                value: t.subtotal,
              },
            }),
            t._v(" "),
            n("CartSubtotalRow", {
              attrs: {
                label: "Estimated shipping",
                value: "FREE",
              },
            }),
            t._v(" "),
            t.discountCode
              ? n("CartDiscounts", {
                  attrs: {
                    code: t.discountCode,
                    amount: t.discountAmount,
                  },
                })
              : t._e(),
            t._v(" "),
            n(
              "div",
              {
                staticClass: "pt-2 mt-2 leading-tight border-t border-gray-200",
              },
              [
                n("CartSubtotalRow", {
                  scopedSlots: t._u([
                    {
                      key: "label",
                      fn: function () {
                        return [
                          n(
                            "div",
                            {
                              staticClass: "text-left font-bold text-xl",
                            },
                            [t._v("Total")]
                          ),
                        ];
                      },
                      proxy: !0,
                    },
                    {
                      key: "value",
                      fn: function () {
                        return [
                          n("div", {
                            staticClass: "text-right font-bold text-xl",
                            domProps: {
                              textContent: t._s(t.total),
                            },
                          }),
                        ];
                      },
                      proxy: !0,
                    },
                  ]),
                }),
              ],
              1
            ),
          ],
          1
        );
      },
      a = [];
    n.d(e, "a", function () {
      return i;
    }),
      n.d(e, "b", function () {
        return a;
      });
  },
  function (t, e, n) {
    "use strict";
    var i = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "button",
          {
            ref: "closeButton",
            staticClass:
              "close-btn cursor-pointer absolute right-0 top-0 rounded-full -mt-2 appearance-none w-10 h-10 hover:bg-black focus:bg-black  hover:outline-none focus:outline-none text-black hover:text-white focus:text-white",
            attrs: {
              type: "button",
              "aria-label": "Close dialog",
            },
            on: {
              click: function (e) {
                return e.preventDefault(), t.closeCart(e);
              },
            },
          },
          [
            n("span", {
              staticClass: "close-btn__icon-bar block bg-current",
            }),
            t._v(" "),
            n("span", {
              staticClass: "close-btn__icon-bar block bg-current",
            }),
          ]
        );
      },
      a = [];
    n.d(e, "a", function () {
      return i;
    }),
      n.d(e, "b", function () {
        return a;
      });
  },
  function (t, e, n) {
    "use strict";
    var i = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          {
            staticClass: "py-4 relative",
          },
          [
            n(
              "div",
              {
                staticClass: "row",
              },
              [
                n(
                  "div",
                  {
                    staticClass: "col w-1/3",
                  },
                  [
                    t.image
                      ? n(
                          "div",
                          {
                            staticClass:
                              "line-item__image w-full bg-contain bg-center bg-no-repeat lazyload",
                            attrs: {
                              "data-bgset": t.image,
                            },
                          },
                          [
                            n("div", {
                              staticClass: "pt-full",
                            }),
                          ]
                        )
                      : t._e(),
                  ]
                ),
                t._v(" "),
                n(
                  "div",
                  {
                    staticClass: "line-item__content flex-1 col w-2/3 pl-0",
                  },
                  [
                    n(
                      "p",
                      {
                        staticClass: "h4 text-lg mb-0",
                      },
                      [
                        n(
                          "a",
                          {
                            staticClass:
                              "inline-block no-underline leading-tight",
                            attrs: {
                              title: t.product_title,
                              href: t.productUrl,
                            },
                          },
                          [
                            n("strong", {
                              domProps: {
                                innerHTML: t._s(t.renderedTitle),
                              },
                            }),
                          ]
                        ),
                      ]
                    ),
                    t._v(" "),
                    t.isSubscriptionItem
                      ? n(
                          "div",
                          {
                            staticClass:
                              "subscription-badge inline-block text-black text-base rounded",
                          },
                          [t._v("\n        Subscription\n      ")]
                        )
                      : n(
                          "div",
                          {
                            staticClass:
                              "inline-block text-black text-base rounded",
                          },
                          [t._v("\n        One-Time Purchase\n      ")]
                        ),
                    t._v(" "),
                    t.isSubscriptionItem
                      ? n(
                          "p",
                          {
                            staticClass: "text-black text-base mb-0",
                          },
                          [
                            t._v(
                              "\n        Delivered every " +
                                t._s(t.deliverySchedule) +
                                "\n      "
                            ),
                          ]
                        )
                      : t._e(),
                    t._v(" "),
                    n(
                      "div",
                      {
                        staticClass: "sr-only",
                      },
                      [t._v("Price")]
                    ),
                    t._v(" "),
                    n(
                      "div",
                      {
                        staticClass: "text-base text-black mt-2",
                      },
                      [t._v("\n        " + t._s(t.lineItemPrice) + "\n      ")]
                    ),
                    t._v(" "),
                    n("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: t.itemQuantity,
                          expression: "itemQuantity",
                        },
                      ],
                      attrs: {
                        type: "hidden",
                        name: "",
                      },
                      domProps: {
                        value: t.itemQuantity,
                      },
                      on: {
                        input: function (e) {
                          e.target.composing ||
                            (t.itemQuantity = e.target.value);
                        },
                      },
                    }),
                  ]
                ),
              ]
            ),
            t._v(" "),
            n(
              "div",
              {
                staticClass: "row justify-between mt-4",
              },
              [
                n(
                  "div",
                  {
                    staticClass: "col w-auto",
                  },
                  [
                    n(
                      "div",
                      {
                        staticClass: "sr-only",
                      },
                      [t._v("Quantity")]
                    ),
                    t._v(" "),
                    n("number-field", {
                      staticClass: "w-40 max-w-full",
                      attrs: {
                        "variant-id": t.item.variant_id,
                        amount: t.quantity,
                        "product-key": t.productKey,
                      },
                    }),
                  ],
                  1
                ),
                t._v(" "),
                n(
                  "div",
                  {
                    staticClass: "col w-auto",
                  },
                  [
                    n(
                      "button",
                      {
                        staticClass:
                          "cursor-pointer text-left text-lg text-ada-clinicians-aqua underline appearance-none p-0 inline-block",
                        attrs: {
                          type: "button",
                        },
                        on: {
                          click: function (e) {
                            return e.preventDefault(), t.removeProduct(e);
                          },
                        },
                      },
                      [t._v("\n        Remove\n      ")]
                    ),
                  ]
                ),
              ]
            ),
          ]
        );
      },
      a = [];
    n.d(e, "a", function () {
      return i;
    }),
      n.d(e, "b", function () {
        return a;
      });
  },
  function (t, e, n) {
    "use strict";
    var i = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          {
            staticClass:
              "border-b border-purple-light py-4 pl-2 pr-8 relative flex",
          },
          [
            n(
              "div",
              {
                staticClass: "block w-full flex-1",
              },
              [
                n(
                  "div",
                  {
                    staticClass: "xs:hidden",
                  },
                  [
                    n(
                      "content-loader",
                      {
                        attrs: {
                          height: 112,
                          width: 335,
                          speed: 2,
                          primaryColor: "#d8d8d8",
                          secondaryColor: "#cccccc",
                        },
                      },
                      [
                        n("rect", {
                          attrs: {
                            width: "38",
                            height: "38",
                          },
                        }),
                        t._v(" "),
                        n("rect", {
                          attrs: {
                            x: "44",
                            width: "253",
                            height: "13",
                          },
                        }),
                        t._v(" "),
                        n("rect", {
                          attrs: {
                            x: "44",
                            y: "16",
                            width: "154",
                            height: "13",
                          },
                        }),
                        t._v(" "),
                        n("rect", {
                          attrs: {
                            x: "44",
                            y: "37",
                            width: "154",
                            height: "13",
                          },
                        }),
                        t._v(" "),
                        n("rect", {
                          attrs: {
                            x: "44",
                            y: "81",
                            width: "94",
                            height: "31",
                          },
                        }),
                      ]
                    ),
                  ],
                  1
                ),
                t._v(" "),
                n(
                  "div",
                  {
                    staticClass: "hidden xs:block",
                  },
                  [
                    n(
                      "content-loader",
                      {
                        attrs: {
                          height: 98,
                          width: 440,
                          speed: 2,
                          primaryColor: "#6a5497",
                          secondaryColor: "#f4f3f7",
                        },
                      },
                      [
                        n("rect", {
                          attrs: {
                            width: "64",
                            height: "64",
                          },
                        }),
                        t._v(" "),
                        n("rect", {
                          attrs: {
                            x: "72",
                            y: "2",
                            width: "311",
                            height: "17",
                          },
                        }),
                        t._v(" "),
                        n("rect", {
                          attrs: {
                            x: "72",
                            y: "21",
                            width: "76",
                            height: "17",
                          },
                        }),
                        t._v(" "),
                        n("rect", {
                          attrs: {
                            x: "72",
                            y: "40",
                            width: "95",
                            height: "17",
                          },
                        }),
                        t._v(" "),
                        n("rect", {
                          attrs: {
                            x: "72",
                            y: "66",
                            width: "95",
                            height: "32",
                          },
                        }),
                      ]
                    ),
                  ],
                  1
                ),
              ]
            ),
          ]
        );
      },
      a = [];
    n.d(e, "a", function () {
      return i;
    }),
      n.d(e, "b", function () {
        return a;
      });
  },
  ,
  function (t, e, n) {
    "use strict";
    var i = function (t, e) {
        var n = e._c;
        return n(
          "div",
          {
            staticClass:
              "flex items-center justify-between my-1 text-lg text-black",
          },
          [
            e._t("label", [
              n(
                "div",
                {
                  staticClass: "text-left",
                },
                [e._v(e._s(e.props.label))]
              ),
            ]),
            e._v(" "),
            e._t("value", [
              n(
                "div",
                {
                  staticClass: "text-right",
                },
                [e._v(e._s(e.props.value))]
              ),
            ]),
          ],
          2
        );
      },
      a = [];
    n.d(e, "a", function () {
      return i;
    }),
      n.d(e, "b", function () {
        return a;
      });
  },
  function (t, e, n) {
    "use strict";
    var i = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          [
            t.amount > 0
              ? n("CartSubtotalRow", {
                  scopedSlots: t._u(
                    [
                      {
                        key: "label",
                        fn: function () {
                          return [
                            n(
                              "div",
                              {
                                staticClass: "font-bold",
                              },
                              [t._v("Discounts")]
                            ),
                          ];
                        },
                        proxy: !0,
                      },
                      {
                        key: "value",
                        fn: function () {
                          return [
                            n(
                              "div",
                              {
                                staticClass: "text-right",
                              },
                              [t._v("-" + t._s(t.formattedAmount))]
                            ),
                          ];
                        },
                        proxy: !0,
                      },
                    ],
                    null,
                    !1,
                    3128655088
                  ),
                })
              : t._e(),
            t._v(" "),
            n("div", [
              t._v("\n    " + t._s(t.code) + "\n    "),
              n(
                "button",
                {
                  staticClass:
                    "inline-block ml-2 text-ada-clinicians-aqua underline hover:text-black focus:text-black",
                  attrs: {
                    type: "button",
                  },
                  on: {
                    click: function (e) {
                      return e.preventDefault(), t.removeDiscountCode(e);
                    },
                  },
                },
                [t._v("\n      Remove\n    ")]
              ),
            ]),
            t._v(" "),
            n("input", {
              attrs: {
                type: "hidden",
                name: "discount",
              },
              domProps: {
                value: t.code,
              },
            }),
          ],
          1
        );
      },
      a = [];
    n.d(e, "a", function () {
      return i;
    }),
      n.d(e, "b", function () {
        return a;
      });
  },
  function (t, e, n) {
    "use strict";
    var i = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          {
            staticClass: "number-field relative inline-block",
          },
          [
            n(
              "button",
              {
                staticClass:
                  "product-quantity-switch number-less js cursor-pointer text-primary-blue hover:text-black focus:text-black px-4 py-3 absolute left-0 top-1/2",
                attrs: {
                  type: "button",
                  "aria-label": "Decrease Number",
                },
                on: {
                  click: function (e) {
                    e.preventDefault(),
                      t.updateValue(Math.max(Number(t.value) - 1, 0));
                  },
                },
              },
              [t._v("\n    –\n  ")]
            ),
            t._v(" "),
            n(
              "button",
              {
                staticClass:
                  "product-quantity-switch number-more js cursor-pointer text-primary-blue hover:text-black focus:text-black px-4 py-3 absolute right-0 top-1/2",
                attrs: {
                  type: "button",
                  "aria-label": "Increase quantity",
                },
                on: {
                  click: function (e) {
                    e.preventDefault(), t.updateValue(Number(t.value) + 1);
                  },
                },
              },
              [t._v("\n    +\n  ")]
            ),
            t._v(" "),
            n("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: t.value,
                  expression: "value",
                },
              ],
              staticClass:
                "remove-number-spinner text-lg text-primary-blue border border-lightest-green inline-block leading-tight py-3 px-6 text-center rounded-full block w-full",
              attrs: {
                type: "number",
                name: "updates[]",
              },
              domProps: {
                value: t.value,
              },
              on: {
                change: function (e) {
                  return t.updateValue(t.value);
                },
                input: function (e) {
                  e.target.composing || (t.value = e.target.value);
                },
              },
            }),
          ]
        );
      },
      a = [];
    n.d(e, "a", function () {
      return i;
    }),
      n.d(e, "b", function () {
        return a;
      });
  },
  ,
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.events = void 0),
      (e.default = function (t) {
        return (0, i.default)(a, (0, i.default)(t));
      });
    var i = (function (t) {
        return t && t.__esModule
          ? t
          : {
              default: t,
            };
      })(n(71)),
      a = (e.events = {
        header: {
          nav: {
            toggle: "header:nav:toggle",
            reset: "header:nav:reset",
            item: {
              toggle: "header:nav:item:toggle",
              close: "header:nav:item:close",
            },
          },
        },
      });
  },
  ,
  ,
  ,
  ,
  function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(205),
      a = n(106);
    for (var r in a)
      "default" !== r &&
        (function (t) {
          n.d(e, t, function () {
            return a[t];
          });
        })(r);
    var u = n(0),
      o = Object(u.a)(a.default, i.a, i.b, !1, null, null, null);
    e.default = o.exports;
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(210),
      a = n(108);
    for (var r in a)
      "default" !== r &&
        (function (t) {
          n.d(e, t, function () {
            return a[t];
          });
        })(r);
    var u = n(0),
      o = Object(u.a)(a.default, i.a, i.b, !0, null, null, null);
    e.default = o.exports;
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (t, e, n) {
    "use strict";
    var i = n(7),
      a = n(70);
    n(273), n(274), n(275), n(278);
    var r = (function (t) {
      return t && t.__esModule
        ? t
        : {
            default: t,
          };
    })(n(279));
    n(280),
      n(281),
      n(282),
      n(283),
      n(52),
      n(284),
      n(285),
      n(286),
      n(321),
      n(411),
      n(416),
      n(420),
      (window.PubSub = n(421)),
      (0, a.focusHash)(),
      (0, a.bindInPageLinks)(),
      $(document).on("swell:setup", function () {
        window.PubSub.publish("swell:setup");
      }),
      window.navigator.cookieEnabled &&
        (document.documentElement.className =
          document.documentElement.className.replace(
            "supports-no-cookies",
            "supports-cookies"
          )),
      (0, i.load)("*"),
      document.addEventListener("DOMContentLoaded", function () {
        (0, r.default)();
      });
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (t, e, n) {
    "use strict";
    window.NodeList &&
      !NodeList.prototype.forEach &&
      (NodeList.prototype.forEach = Array.prototype.forEach);
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (t, e, n) {},
  function (t, e, n) {
    "use strict";
    var i = n(7),
      a = o(n(34)),
      r = o(n(287)),
      u = o(n(289));

    function o(t) {
      return t && t.__esModule
        ? t
        : {
            default: t,
          };
    }
    var s = "[data-header-nav-toggle]",
      l = "nav--is-active";
    (0, i.register)("header", {
      onLoad: function () {
        (this.header = this.container.querySelector("[data-header-nav]")),
          (this.navToggle = this.container.querySelector(s)),
          (this.navWrapper = this.container.querySelector(
            "[data-header-nav-outer]"
          )),
          (this.navOpen = !1),
          (this.activeNavItem = !1),
          this.header &&
            (a.default.use(r.default, {
              breakpoints: {
                sm: 768,
                md: 992,
                lg: 1140,
                xl: 1 / 0,
              },
            }),
            new a.default({
              render: function (t) {
                return t(u.default);
              },
            }).$mount(this.header)),
          this.events.call(this),
          this.container.addEventListener("click", this.toggle.bind(this)),
          this.container.addEventListener("click", this.cartIcon.bind(this));
      },
      events: function () {
        var t = this;
        window.PubSub.subscribe("header:nav:toggle", function (e, n) {
          n.open, t.navWrapper.classList.toggle(l);
        }),
          window.PubSub.subscribe("header:nav:close", function () {
            t.navWrapper.classList.remove(l);
          }),
          window.PubSub.subscribe("header:nav:reset", function () {
            t.navWrapper.classList.remove(l);
          });
      },
      toggle: function (t) {
        t.target.closest(s) &&
          ((this.navOpen = !this.navOpen),
          window.PubSub.publish("header:nav:toggle", {
            open: this.navOpen,
          }));
        replaceShopToOrder();
      },
      cartIcon: function (t) {
        t.target.closest("[data-header-cart]") &&
          (t.preventDefault(), window.PubSub.publish("cart:open"));
      },
    });
  },
  ,
  ,
  function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(190),
      a = n(89);
    for (var r in a)
      "default" !== r &&
        (function (t) {
          n.d(e, t, function () {
            return a[t];
          });
        })(r);
    var u = n(0),
      o = Object(u.a)(a.default, i.a, i.b, !1, null, null, null);
    e.default = o.exports;
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(197),
      a = n(91);
    for (var r in a)
      "default" !== r &&
        (function (t) {
          n.d(e, t, function () {
            return a[t];
          });
        })(r);
    var u = n(0),
      o = Object(u.a)(a.default, i.a, i.b, !1, null, null, null);
    e.default = o.exports;
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(198),
      a = n(93);
    for (var r in a)
      "default" !== r &&
        (function (t) {
          n.d(e, t, function () {
            return a[t];
          });
        })(r);
    var u = n(0),
      o = Object(u.a)(a.default, i.a, i.b, !1, null, null, null);
    e.default = o.exports;
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (t, e, n) {
    "use strict";
    var i = s(n(34)),
      a = n(7),
      r = s(n(322)),
      u = n(11),
      o = s(n(35));

    function s(t) {
      return t && t.__esModule
        ? t
        : {
            default: t,
          };
    }
    window.Vue || (window.Vue = i.default),
      (window.store = n(355).default),
      (0, a.register)("slide-out-cart", {
        onLoad: function () {
          this.setupSlideoutCart.call(this);
        },
        setupSlideoutCart: function () {
          new window.Vue({
            el: this.container,
            store: window.store,
            render: function (t) {
              return t(r.default);
            },
          }),
            /opencart=1/.test(window.location.href) &&
              window.store.dispatch("openCart"),
            document.addEventListener("keydown", function (t) {
              window.store.state.cart.open &&
                ((t.code && 27 === t.code) || 27 == t.keyCode) &&
                store.dispatch("closeCart");
            }),
            window.store.commit("setLoggedIn", window.customerIsLoggedIn),
            $(document).on("swell:setup", function () {
              window.store.commit(o.default.SWELL_CUSTOMER.SUCCESS, {
                customer: swellAPI.getCustomerDetails(),
              }),
                window.store.commit(
                  o.default.SWELL_REDEMPTION_OPTIONS.SUCCESS,
                  {
                    redemptionOptions: swellAPI.getActiveRedemptionOptions(),
                  }
                ),
                window.store.dispatch("getSwellReferralDiscount");
            }),
            window.PubSub.subscribe("cart:update-items", function () {
              window.store.dispatch("getItemsAsync");
            }),
            window.PubSub.subscribe(
              "cart:items-updated",
              this.itemsUpdated.bind(this)
            );
        },
        itemsUpdated: function (t, e) {
          var n = e.item_count;
          this.updateCartIconsCount.call(this, n);
        },
        handleUpdate: function (t, e) {
          var n = this,
            i = e.field,
            a = {
              quantity: e.quantity,
              id: i.dataset.variantId,
            };
          fetch("/cart/change.js", {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(a),
          })
            .then(function (t) {
              return t.json();
            })
            .then(function (t) {
              var e = t.items,
                i = t.total_price,
                a = t.items_subtotal_price,
                r = t.item_count;
              (n.container.querySelector("[data-cart-subtotal]").innerText = (0,
              u.formatMoney)(a)),
                (n.container.querySelector(
                  "[data-cart-total-price]"
                ).innerText = (0, u.formatMoney)(i)),
                e.forEach(function (t) {
                  n.container.querySelector(
                    (function (t) {
                      return '[data-line-item-total="' + t + '"]';
                    })(t.variant_id)
                  ).innerText = (0, u.formatMoney)(t.final_line_price);
                }),
                n.updateCartIconsCount.call(n, r);
            });
        },
        updateCartIconsCount: function (t) {
          document
            .querySelectorAll("[data-header-cart-count]")
            .forEach(function (e) {
              if (t > 0) {
                $("[data-header-cart-count]").removeClass("cart_zero_hidden");
              } else {
                $("[data-header-cart-count]").addClass("cart_zero_hidden");
              }
              return (e.innerText = t);
            });
        },
      });
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(191),
      a = n(95);
    for (var r in a)
      "default" !== r &&
        (function (t) {
          n.d(e, t, function () {
            return a[t];
          });
        })(r);
    var u = n(0),
      o = Object(u.a)(a.default, i.a, i.b, !1, null, null, null);
    e.default = o.exports;
  },
  ,
  function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(199),
      a = n(97);
    for (var r in a)
      "default" !== r &&
        (function (t) {
          n.d(e, t, function () {
            return a[t];
          });
        })(r);
    var u = n(0),
      o = Object(u.a)(a.default, i.a, i.b, !1, null, null, null);
    e.default = o.exports;
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(200),
      a = n(99);
    for (var r in a)
      "default" !== r &&
        (function (t) {
          n.d(e, t, function () {
            return a[t];
          });
        })(r);
    n(354);
    var u = n(0),
      o = Object(u.a)(a.default, i.a, i.b, !1, null, null, null);
    e.default = o.exports;
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(203),
      a = n(101);
    for (var r in a)
      "default" !== r &&
        (function (t) {
          n.d(e, t, function () {
            return a[t];
          });
        })(r);
    n(327);
    var u = n(0),
      o = Object(u.a)(a.default, i.a, i.b, !1, null, null, null);
    e.default = o.exports;
  },
  function (t, e, n) {
    "use strict";
    var i = n(103);
    n.n(i).a;
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(204),
      a = n(104);
    for (var r in a)
      "default" !== r &&
        (function (t) {
          n.d(e, t, function () {
            return a[t];
          });
        })(r);
    n(347);
    var u = n(0),
      o = Object(u.a)(a.default, i.a, i.b, !1, null, null, null);
    e.default = o.exports;
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(211),
      a = n(110);
    for (var r in a)
      "default" !== r &&
        (function (t) {
          n.d(e, t, function () {
            return a[t];
          });
        })(r);
    var u = n(0),
      o = Object(u.a)(a.default, i.a, i.b, !1, null, null, null);
    e.default = o.exports;
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (t, e, n) {
    "use strict";
    var i = n(112);
    n.n(i).a;
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(206),
      a = n(113);
    for (var r in a)
      "default" !== r &&
        (function (t) {
          n.d(e, t, function () {
            return a[t];
          });
        })(r);
    var u = n(0),
      o = Object(u.a)(a.default, i.a, i.b, !1, null, null, null);
    e.default = o.exports;
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(207),
      a = n(115);
    for (var r in a)
      "default" !== r &&
        (function (t) {
          n.d(e, t, function () {
            return a[t];
          });
        })(r);
    var u = n(0),
      o = Object(u.a)(a.default, i.a, i.b, !1, null, null, null);
    e.default = o.exports;
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(212),
      a = n(117);
    for (var r in a)
      "default" !== r &&
        (function (t) {
          n.d(e, t, function () {
            return a[t];
          });
        })(r);
    var u = n(0),
      o = Object(u.a)(a.default, i.a, i.b, !1, null, null, null);
    e.default = o.exports;
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(208),
      a = n(119);
    for (var r in a)
      "default" !== r &&
        (function (t) {
          n.d(e, t, function () {
            return a[t];
          });
        })(r);
    var u = n(0),
      o = Object(u.a)(a.default, i.a, i.b, !1, null, null, null);
    e.default = o.exports;
  },
  ,
  ,
  function (t, e, n) {
    "use strict";
    var i = n(121);
    n.n(i).a;
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    });
    var i = r(n(10)),
      a = r(n(356));

    function r(t) {
      return t && t.__esModule
        ? t
        : {
            default: t,
          };
    }
    window.Vue.use(i.default);
    var u = new i.default.Store({
      modules: {
        cart: a.default,
      },
    });
    e.default = u;
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    });
    var i,
      a,
      r = f(n(357)),
      u = f(n(34)),
      o = f(n(360)),
      s = f(n(35)),
      l = f(n(361)),
      c = n(410),
      d = n(23);

    function f(t) {
      return t && t.__esModule
        ? t
        : {
            default: t,
          };
    }
    var p =
        ((i = {
          open: !1,
          itemsData: {
            items: [],
          },
          loggedIn: !1,
        }),
        (0, r.default)(i, s.default.SWELL_CUSTOMER.stateKey, {}),
        (0, r.default)(i, s.default.SWELL_REDEMPTION.stateKey, {}),
        (0, r.default)(i, s.default.SWELL_REDEMPTION_OPTIONS.stateKey, {}),
        (0, r.default)(i, s.default.SWELL_DISCOUNT_CODE.stateKey, {
          code: "",
          type: "",
          amount: 0,
        }),
        (0, r.default)(i, "addItemData", []),
        i),
      v = {
        addLineItem: function (t, e) {
          t.commit("addPlaceholder"),
            (0, o.default)(
              t,
              {
                url: (0, c.getenv)("shopify.urls.cartAdd"),
                method: "post",
                dataType: "jsonp",
                data: e,
              },
              {
                mutationTypes: s.default.ADD_ITEM,
              }
            ).then(function (e) {
              t.dispatch("getItemsAsync");
            });
        },
        getItemsAsync: function (t) {
          (0, o.default)(
            t,
            {
              url: (0, c.getenv)("shopify.urls.cart"),
              dataType: "jsonp",
            },
            {
              mutationTypes: s.default.ITEMS,
            }
          ).then(function (t) {
            window.PubSub.publish("cart:items-updated", t);
          });
        },
        closeCart: function (t) {
          (0, t.commit)("closeCart"), window.PubSub.publish("cart:closed");
        },
        openCart: function (t) {
          (0, t.commit)("openCart"), window.PubSub.publish("cart:opened");
        },
        quantityChanged: function (t, e) {
          (0, o.default)(
            t,
            {
              url: "/cart/change.js",
              method: "post",
              dataType: "json",
              data: e,
            },
            {
              mutationTypes: s.default.UPDATE_QUANTITY,
            }
          ).then(function (n) {
            window.PubSub.publish("cart:updated", {
              cart: t.state.itemsData,
            });
            var i = (0, l.default)(t.state.itemsData.items, function (t) {
              return t.variant_id == e.id;
            });
            i &&
              window.PubSub.publish("product:quantity:change", {
                variant: e.id,
                quantity: i.quantity,
                key: i.key,
                lineItemTotal: i.final_line_price,
              });
          });
        },
        redeemPoints: function (t, e) {
          new Promise(function (n, i) {
            t.commit(s.default.SWELL_DISCOUNT_CODE.PENDING),
              swellAPI.makeRedemption(
                Object.assign({}, e, {
                  delayPointDeduction: !0,
                }),
                n,
                i
              );
          })
            .then(function (e) {
              var n = e.redemptionOption.discount_amount_cents;
              t.commit(s.default.SWELL_REDEMPTION.SUCCESS, e),
                t.commit(s.default.SWELL_DISCOUNT_CODE.SUCCESS, {
                  code: e.couponCode,
                  amount: n,
                  type: "points",
                }),
                sessionStorage.setItem(d.SWELL_DISCOUNT_CODE, e.couponCode),
                sessionStorage.setItem(d.SWELL_DISCOUNT_CODE_TYPE, "points"),
                sessionStorage.setItem(d.SWELL_DISCOUNT_AMOUNT, n),
                window.PubSub.publish("cart:code-added", {
                  response: e,
                  code: e.couponCode,
                });
            })
            .catch(function (e) {
              t.commit(s.default.SWELL_REDEMPTION.FAILURE, e);
            });
        },
        getSwellReferralDiscount: function (t) {
          var e = t.commit,
            n = sessionStorage.getItem(d.SWELL_DISCOUNT_CODE),
            i = sessionStorage.getItem(d.SWELL_DISCOUNT_CODE_TYPE),
            a = sessionStorage.getItem(d.SWELL_DISCOUNT_AMOUNT);
          (i = i || "referral"),
            n &&
              e(s.default.SWELL_DISCOUNT_CODE.SUCCESS, {
                type: i,
                code: n,
                amount: a,
              });
        },
        removeDiscountCode: function (t) {
          (0, t.commit)("removeDiscountCode"),
            sessionStorage.removeItem(d.SWELL_DISCOUNT_CODE),
            sessionStorage.removeItem(d.SWELL_DISCOUNT_CODE_TYPE),
            sessionStorage.removeItem(d.SWELL_DISCOUNT_AMOUNT),
            window.PubSub.publish("cart:code-removed");
        },
      },
      m =
        ((a = {
          closeCart: function (t) {
            u.default.set(t, "open", !1);
          },
          openCart: function (t) {
            u.default.set(t, "open", !0);
          },
          addPlaceholder: function (t) {
            var e = t[s.default.ITEMS.stateKey],
              n = e.items;
            n.unshift({
              placeholder: !0,
            }),
              (e = Object.assign({}, e, n)),
              u.default.set(t, "" + s.default.ITEMS.stateKey, e);
          },
          setLoggedIn: function (t, e) {
            u.default.set(t, "loggedIn", e);
          },
        }),
        (0, r.default)(a, s.default.ITEMS.SUCCESS, function (t, e) {
          u.default.set(t, s.default.ITEMS.loadingKey, !1),
            u.default.set(t, s.default.ADD_ITEM.loadingKey, !1),
            u.default.set(t, s.default.ITEMS.stateKey, e);
        }),
        (0, r.default)(a, s.default.ITEMS.PENDING, function (t) {
          u.default.set(t, s.default.ITEMS.loadingKey, !0);
        }),
        (0, r.default)(a, s.default.ADD_ITEM.SUCCESS, function (t, e) {
          var n = t[s.default.ITEMS.stateKey].items,
            i = !1;
          (n = n.filter(function (t) {
            return !t.placeholder;
          })),
            e.properties && e.properties.shipping_interval_frequency
              ? n.forEach(function (t, n) {
                  t.id == e.id &&
                    e.properties.shipping_interval_frequency ==
                      t.properties.shipping_interval_frequency &&
                    (i = n);
                })
              : n.forEach(function (t, n) {
                  t.id == e.id && (i = n);
                }),
            !1 !== i ? (n[i] = Object.assign({}, n[i], e)) : n.unshift(e);
          var a = Object.assign({}, t[s.default.ITEMS.stateKey], {
              items: n,
            }),
            r = a.items.reduce(function (t, e) {
              return t + e.final_line_price;
            }, 0);
          (a.items_subtotal_price = r),
            u.default.set(t, "" + s.default.ITEMS.stateKey, a),
            u.default.set(t, "open", !0),
            window.PubSub.publish("cart:updated", {
              cart: {
                subtotal: t.itemsData.items_subtotal_price,
                total: t.itemsData.total_price,
                items: n,
              },
            });
        }),
        (0, r.default)(a, s.default.ADD_ITEM.PENDING, function (t) {
          u.default.set(t, s.default.ADD_ITEM.loadingKey, !0);
        }),
        (0, r.default)(a, s.default.ADD_ITEM.FAILURE, function (t) {
          u.default.set(t, s.default.ADD_ITEM.loadingKey, !1);
        }),
        (0, r.default)(a, s.default.UPDATE_QUANTITY.SUCCESS, function (t, e) {
          u.default.set(t, [s.default.ITEMS.stateKey], e),
            u.default.set(t, [s.default.UPDATE_QUANTITY.loadingKey], !1);
        }),
        (0, r.default)(a, s.default.UPDATE_QUANTITY.PENDING, function (t) {
          u.default.set(t, [s.default.UPDATE_QUANTITY.loadingKey], !0);
        }),
        (0, r.default)(a, s.default.UPDATE_QUANTITY.FAILURE, function (t) {
          u.default.set(t, [s.default.UPDATE_QUANTITY.loadingKey], !1);
        }),
        (0, r.default)(a, s.default.SWELL_CUSTOMER.SUCCESS, function (t, e) {
          u.default.set(t, s.default.SWELL_CUSTOMER.stateKey, e.customer);
        }),
        (0, r.default)(
          a,
          s.default.SWELL_REDEMPTION_OPTIONS.SUCCESS,
          function (t, e) {
            u.default.set(
              t,
              s.default.SWELL_REDEMPTION_OPTIONS.stateKey,
              e.redemptionOptions
            );
          }
        ),
        (0, r.default)(a, s.default.SWELL_REDEMPTION.SUCCESS, function (t, e) {
          u.default.set(t, s.default.SWELL_REDEMPTION.stateKey, e);
        }),
        (0, r.default)(a, s.default.SWELL_REDEMPTION.FAILURE, function (t, e) {
          u.default.set(t, s.default.SWELL_REDEMPTION.stateKey, e);
        }),
        (0, r.default)(
          a,
          s.default.SWELL_DISCOUNT_CODE.SUCCESS,
          function (t, e) {
            u.default.set(t, s.default.SWELL_DISCOUNT_CODE.stateKey, e),
              u.default.set(t, s.default.SWELL_DISCOUNT_CODE.loadingKey, !1);
          }
        ),
        (0, r.default)(a, s.default.SWELL_DISCOUNT_CODE.PENDING, function (t) {
          u.default.set(t, s.default.SWELL_DISCOUNT_CODE.loadingKey, !0);
        }),
        (0, r.default)(a, "removeDiscountCode", function (t) {
          u.default.set(t, s.default.SWELL_DISCOUNT_CODE.stateKey, {});
        }),
        a),
      h = {
        showRedeemForm: function (t) {
          return (
            !!t.loggedIn &&
            !!t[s.default.SWELL_CUSTOMER.stateKey].pointsBalance &&
            !t[s.default.SWELL_DISCOUNT_CODE.stateKey].code
          );
        },
      };
    e.default = {
      state: p,
      actions: v,
      mutations: m,
      getters: h,
    };
  },
  ,
  ,
  ,
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.default = function (t, e, n) {
        var i = n.mutationTypes;
        return (
          t.commit(i.PENDING),
          $.ajax(e)
            .done(function (e) {
              return t.commit(i.SUCCESS, e), e;
            })
            .fail(function (e, n) {
              return (
                t.commit(i.FAILURE, e),
                {
                  error: e,
                  status: n,
                }
              );
            })
        );
      });
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.getenv = void 0);
    var i = (function (t) {
        return t && t.__esModule
          ? t
          : {
              default: t,
            };
      })(n(71)),
      a = {
        shopify: {
          url: "https://katefarmshealth.com",
          urls: {
            cart: "https://nutritioncommunity.katefarmshealth.com/cart.json",
            cartAdd:
              "https://nutritioncommunity.katefarmshealth.com/cart/add.json",
          },
        },
        wordpress: {
          url: "https://www.katefarms.com",
        },
      };
    (e.default = a),
      (e.getenv = function (t) {
        return (0, i.default)(a, t);
      });
  },
  function (t, e, n) {
    "use strict";
    var i = n(7),
      a = l(n(34)),
      r = l(n(412)),
      u = l(n(413)),
      o = l(n(414)),
      s = l(n(415));

    function l(t) {
      return t && t.__esModule
        ? t
        : {
            default: t,
          };
    }
    (0, i.register)("footer", {
      onLoad: function () {
        a.default.component("Navigation", r.default),
          new a.default({
            render: function (t) {
              return t(o.default);
            },
          }).$mount("#footer-nav"),
          new a.default({
            render: function (t) {
              return t(u.default);
            },
          }).$mount("#social-nav"),
          new a.default({
            render: function (t) {
              return t(s.default);
            },
          }).$mount("#policy-nav");
      },
    });
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(192),
      a = n(122);
    for (var r in a)
      "default" !== r &&
        (function (t) {
          n.d(e, t, function () {
            return a[t];
          });
        })(r);
    var u = n(0),
      o = Object(u.a)(a.default, i.a, i.b, !1, null, null, null);
    e.default = o.exports;
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(193),
      a = n(124);
    for (var r in a)
      "default" !== r &&
        (function (t) {
          n.d(e, t, function () {
            return a[t];
          });
        })(r);
    var u = n(0),
      o = Object(u.a)(a.default, i.a, i.b, !1, null, null, null);
    e.default = o.exports;
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(194),
      a = n(126);
    for (var r in a)
      "default" !== r &&
        (function (t) {
          n.d(e, t, function () {
            return a[t];
          });
        })(r);
    var u = n(0),
      o = Object(u.a)(a.default, i.a, i.b, !1, null, null, null);
    e.default = o.exports;
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(195),
      a = n(128);
    for (var r in a)
      "default" !== r &&
        (function (t) {
          n.d(e, t, function () {
            return a[t];
          });
        })(r);
    var u = n(0),
      o = Object(u.a)(a.default, i.a, i.b, !1, null, null, null);
    e.default = o.exports;
  },
  function (t, e, n) {
    "use strict";
    var i = u(n(6)),
      a = u(n(55)),
      r = u(n(418));

    function u(t) {
      return t && t.__esModule
        ? t
        : {
            default: t,
          };
    }
    n(419);
    var o = (0, i.default)(window);
    document.addEventListener("DOMContentLoaded", function () {
      document.querySelectorAll("[data-number-switch]").forEach(function (t) {
        new r.default(t);
      });
    }),
      document.addEventListener("DOMContentLoaded", function () {
        window.PubSub.publish("window:scroll", {
          top: o.scrollTop(),
        }),
          window.PubSub.publish("window:resize", {
            width: o.width(),
            height: o.height(),
          });
      }),
      o.on(
        "scroll",
        (0, a.default)(function () {
          window.PubSub.publish("window:scroll", {
            top: o.scrollTop(),
          });
        }, 20)
      );
  },
  ,
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    });
    var i = r(n(9)),
      a = r(n(12));

    function r(t) {
      return t && t.__esModule
        ? t
        : {
            default: t,
          };
    }
    r(n(55));
    var u = (function () {
      function t(e) {
        (0, i.default)(this, t),
          (this.el = e),
          (this.target = document.querySelector(this.el.dataset.numberTarget)),
          (this.amount = "numberIncrement" in this.el.dataset ? 1 : -1),
          this.el.addEventListener("click", this.clickHandler.bind(this));
      }
      return (
        (0, a.default)(t, [
          {
            key: "clickHandler",
            value: function (t) {
              t.preventDefault(),
                (this.target.value = Number(this.target.value) + this.amount),
                this.target.value < this.target.getAttribute("min") &&
                  (this.target.value = this.target.getAttribute("min")),
                window.PubSub.publish("cart:quantity:update", {
                  quantity: this.target.value,
                  field: this.target,
                });
            },
          },
        ]),
        t
      );
    })();
    e.default = u;
  },
  function (t, e, n) {
    "use strict";
    var i = (function (t) {
      return t && t.__esModule
        ? t
        : {
            default: t,
          };
    })(n(6));
    (0, i.default)(".c-accordion__title").click(function () {
      var t = (0, i.default)(this),
        e = (0, i.default)("#" + t.attr("aria-controls")),
        n = t.closest(".c-accordion__item");
      "true" === t.attr("aria-expanded")
        ? (t.attr("aria-expanded", "false"),
          n.removeClass("is-open"),
          e.slideUp(200, function () {
            e.attr("hidden", "hidden");
          }))
        : (t.attr("aria-expanded", "true"),
          n.addClass("is-open"),
          e.slideDown(200),
          e.prop("hidden", !1)),
        window.PubSub.publish("accordion:toggle", {
          open: "true" === t.attr("aria-expanded"),
        });
    });
  },
  function (t, e, n) {
    "use strict";
    n(6),
      $(function () {
        document.querySelector("#ReCharge") &&
          (function () {
            var t = $(".discount-form #discount_code");
            console.log(t, t.length),
              t.length &&
                t.on("keydown", function (e) {
                  console.log(e, e.keyCode, e.which),
                    13 === Number(e.keyCode) &&
                      t.next(".action__applyDiscount").trigger("click");
                });
          })();
      });
  },
]);

//
function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

var replaceShopToOrder = debounce(function () {
  // hide all old navs
  var navLinks = [...document.querySelectorAll(".nav-item--depth-1")];
  navLinks.forEach((nl) => {
    const nlText = nl.querySelector("span");
    const nlLink = nl.querySelector("a");
    nlLink.classList.remove("nav-item__link--transparent");
  });
}, 700);

replaceShopToOrder();

function resourceAccordion() {
  var $accordion = {
    body: $("body"),
    ddl_link: $(".accordion-container > a"),
  };

  $($accordion.ddl_link).each(function () {
    $(this).on("click", function (e) {
      e.preventDefault();
      if (
        $(this).closest(".accordion-container").hasClass("submenu--expanded")
      ) {
        $(this)
          .closest(".accordion-container")
          .removeClass("submenu--expanded")
          .find(".ceus-accordion__panel")
          .slideUp();
      } else {
        $(this)
          .closest(".accordion-container")
          .addClass("submenu--expanded")
          .find(".ceus-accordion__panel")
          .slideDown();
        $(this)
          .closest(".accordion-container")
          .siblings()
          .removeClass("submenu--expanded")
          .find(".ceus-accordion__panel")
          .slideUp();
      }
    });
  });
}

resourceAccordion();

$(window).on("load", function () {
  if ($(".accordion-container").length > 0) {
    $(".accordion-container").each(function (index) {
      var targetAccordion = "." + $(this).attr("targetForJS");
      new Accordion(targetAccordion);
    });
  }
});

$(".nav-toggle").on("click", function () {
  $(".main-navigation .menu").toggleClass("visible-on-mobile");
  $("#MainContent").toggleClass("mobile-menu-open");
  $("#shopify-section-main-navigation").toggleClass("mobile-menu-open");
});

$(window).on("load", function () {

  $(".presenter-item").on("click", function(){
    const openThisModal = "." + $(this).attr("id");
    $(openThisModal).toggleClass("active");
    $(".modal-body-cover").toggleClass("active");
    $("body").toggleClass("modal-open");
  })

  $(".close-pop-up").on("click", function(){
    $(this).closest(".presenter-pop-up").toggleClass("active");
    $(".modal-body-cover").toggleClass("active");
    $("body").toggleClass("modal-open");
  })

});
