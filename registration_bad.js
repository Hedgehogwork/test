webpackJsonp([13], {
    0: function(e, t, n) {
        "use strict";
        n(318),
        n(1043),
        n(1044),
        n(1045),
        n(1046),
        n(1047),
        n(1026),
        n(713),
        n(1027),
        n(1048),
        n(980),
        n(981),
        n(982),
        n(1049),
        n(665),
        n(1050),
        n(1051)
    },
    1043: function(e, t, n) {
        "use strict";
        n(305);
        var a = function(e, t, n, a, i) {
            return {
                require: "ngModel",
                restrict: "A",
                priority: -280,
                link: function(r, o, s, c) {
                    c.$asyncValidators.validateAsyncCode = function() {
                        var a = t.defer()
                          , o = 429;
                        return i(function() {
                            var t = n(s.validateAsyncCodeParams)(r);
                            e.get(s.validateAsyncCode, {
                                params: t
                            }).success(function(e) {
                                e.success ? a.resolve(e.success) : a.reject(),
                                c.$setValidity("invalidCode", e.success)
                            }).error(function(e, t) {
                                var n = t === o
                                  , i = t !== o;
                                c.$setValidity("tooManyRetries", !n),
                                c.$setValidity("invalidCode", !i),
                                a.reject()
                            })
                        }, 0),
                        c.$setValidity("tooManyRetries", !0),
                        c.$setValidity("invalidCode", !0),
                        a.promise
                    }
                    ;
                    var l = function() {
                        return c.$validate()
                    };
                    r.$watch(s.ngModel, a(500, l), !0)
                }
            }
        };
        angular.module("ExnessApp").directive("validateAsyncCode", ["$http", "$q", "$parse", "throttle", "$timeout", a])
    },
    1044: function(e, t, n) {
        "use strict";
        n(305),
        angular.module("ExnessApp").directive("validateCompareTo", ["$interpolate", function(e) {
            return {
                require: "ngModel",
                restrict: "A",
                priority: -280,
                link: function(t, n, a, i) {
                    i.$validators.validateCompareTo = function(n) {
                        return n === e("{{" + a.validateCompareTo + "}}")(t)
                    }
                    ,
                    t.$watch(a.validateCompareTo, function() {
                        return i.$validate()
                    })
                }
            }
        }
        ])
    },
    1045: function(e, t, n) {
        "use strict";
        n(305),
        angular.module("ExnessApp").directive("validateNotCompareTo", ["$interpolate", function(e) {
            return {
                require: "ngModel",
                restrict: "A",
                priority: -280,
                link: function(t, n, a, i) {
                    i.$validators.validateNotCompareTo = function(n) {
                        var i = e("{{" + a.validateNotCompareTo + "}}")(t);
                        return !n && !i || n !== i
                    }
                    ,
                    t.$watch(a.validateNotCompareTo, function() {
                        return i.$validate()
                    })
                }
            }
        }
        ])
    },
    1046: function(e, t, n) {
        "use strict";
        n(305),
        angular.module("ExnessApp").directive("validateWordNumber", [function() {
            return {
                require: "ngModel",
                restrict: "A",
                priority: -290,
                link: function(e, t, n, a) {
                    var i = !0;
                    a.$validators.validateWordNumber = function(e) {
                        return /^[\da-z]+$/i.test(e)
                    }
                    ,
                    e.$watch(n.ngModel, function(e, t) {
                        i && e !== t && (i = !1,
                        a.$validate())
                    })
                }
            }
        }
        ])
    },
    1047: function(e, t, n) {
        "use strict";
        function a(e) {
            var t = /.*\d.*/
              , n = /.*[a-zA-Z].*/
              , a = /[\da-zA-Z]+/
              , i = 0;
            return !!(e.match(t) && e.match(n) && e.match(a)) && (e.search(/[a-z]/) !== -1 && (i += 1),
            e.search(/[A-Z]/) !== -1 && (i += 1),
            e.search(/\d/) !== -1 && (i += 1),
            i >= 2)
        }
        n(305),
        angular.module("ExnessApp").directive("validateWordNumberTwo", [function() {
            return {
                require: "ngModel",
                restrict: "A",
                priority: -300,
                link: function(e, t, n, i) {
                    var r = !0;
                    i.$validators.validateWordNumberTwo = function(e) {
                        return a(e)
                    }
                    ,
                    e.$watch(n.ngModel, function(e, t) {
                        r && e !== t && (r = !1,
                        i.$validate())
                    })
                }
            }
        }
        ])
    },
    1048: function(e, t, n) {
        "use strict";
        n(305),
        angular.module("ExnessApp").factory("countDownService", ["$timeout", function(e) {
            function t(e) {
                this.count = "",
                this.time = "",
                this.getTimer(e)
            }
            function n(e) {
                return new t(e)
            }
            return t.prototype = {
                getTimer: function(e) {
                    return this.count = e,
                    this.nextTime(),
                    this
                },
                nextTime: function() {
                    var t, n;
                    this.count -= 1,
                    t = Math.floor(this.count / 60),
                    n = this.count % 60,
                    n = this.count % 60,
                    n < 10 && (n = "0" + n),
                    this.time = t + ":" + n,
                    this.count > 0 && e(this.nextTime.bind(this), 1e3)
                }
            },
            {
                getTimer: n
            }
        }
        ])
    },
    1049: function(e, t, n) {
        "use strict";
        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function i(e, t, n) {
            function a(e, t) {
                var n = +e || 0
                  , a = n / 1e3
                  , i = Date.now() / 1e3
                  , r = a + t - i;
                return r > 0 ? Math.floor(r) : 0
            }
            function i(e, t) {
                var i = n[e.cookieName];
                return i ? a(i, t) : 0
            }
            function o(e) {
                var n = i(e, _);
                n = 0 === n ? f : n,
                e.timeDown = t.getTimer(n)
            }
            function c(t, n) {
                e.$watch(t + ".timeDown", n || function(n) {
                    n && 0 === n.count && (e[t].status = v,
                    e[t].timeDown = null)
                }
                , !0)
            }
            function l() {
                e.sendCode = {
                    show: !1,
                    status: h,
                    timeDown: t.getTimer(f),
                    cookieName: "codeResendBlocked"
                },
                o(e.sendCode),
                c("sendCode")
            }
            function u(e, t) {
                var a, i, r, o = e.cookieName;
                n[o] || (a = (new Date).getTime(),
                i = new Date(a + 1e3 * t).toUTCString(),
                r = o + "=" + a + "; expires=" + i,
                document.cookie = r)
            }
            function d(t, n) {
                var a = (0,
                s.default)(t);
                e[n].show = !0,
                window.reload_captcha(a),
                a.find(".auth-registerCaptcha input[text]").val(""),
                a.find(".js-error").addClass("hidden")
            }
            function m(n, a) {
                var i = (0,
                s.default)(n)
                  , o = i.attr("action")
                  , c = e.form.verify_uid;
                i.addClass("blocked"),
                s.default.ajax({
                    method: "POST",
                    url: "" + o + c + "/",
                    data: i.serialize(),
                    dataType: "json",
                    success: function(n) {
                        i.removeClass("blocked"),
                        n.success ? e.$apply(function() {
                            e[a].show = !1,
                            e[a].status = h,
                            e[a].timeDown = t.getTimer(f)
                        }) : n.errors.forEach(function(e) {
                            var t = r(e, 2)
                              , n = t[0]
                              , a = t[1];
                            return i.find('[data-for="' + n + '"]').removeClass("hidden").html(a)
                        }),
                        n.verify_uid && e.$apply(function() {
                            return e.form.verify_uid = n.verify_uid
                        }),
                        window.reload_captcha(i)
                    },
                    error: function(n) {
                        i.removeClass("blocked"),
                        window.reload_captcha(i),
                        429 === n.status && e.$apply(function() {
                            e[a].show = !1,
                            e[a].status = h,
                            e[a].timeDown = t.getTimer(_),
                            u(e[a], _)
                        })
                    }
                })
            }
            function g(t) {
                (e.forbiddenToProceed || e.submitProcess) && t.preventDefault(),
                e.submitProcess = !0
            }
            var h = 2
              , v = 3
              , f = 60
              , _ = 600;
            (0,
            s.default)("#resend-popup").removeClass("hidden"),
            l(),
            e.show = d,
            e.send = m,
            e.submit = g
        }
        var r = function() {
            function e(e, t) {
                var n, a, i = [], r = !0, o = !1, s = void 0;
                try {
                    for (n = e[Symbol.iterator](); !(r = (a = n.next()).done) && (i.push(a.value),
                    !t || i.length !== t); r = !0)
                        ;
                } catch (e) {
                    o = !0,
                    s = e
                } finally {
                    try {
                        !r && n.return && n.return()
                    } finally {
                        if (o)
                            throw s
                    }
                }
                return i
            }
            return function(t, n) {
                if (Array.isArray(t))
                    return t;
                if (Symbol.iterator in Object(t))
                    return e(t, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }()
          , o = n(249)
          , s = a(o);
        n(305),
        angular.module("ExnessApp").controller("AuthForgotPasswordConfirmSecurityCtrl", ["$scope", "countDownService", "$cookies", i])
    },
    1050: function(e, t, n) {
        "use strict";
        var a = n(251);
        window.Registr || (window.Registr = {}),
        Registr.dispatcher = new a.ExnessDispatcher
    },
    1051: function(e, t, n) {
        "use strict";
        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function i(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function r(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function o(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var s = function e(t, n, a) {
            var i, r, o;
            return null === t && (t = Function.prototype),
            i = Object.getOwnPropertyDescriptor(t, n),
            void 0 === i ? (r = Object.getPrototypeOf(t),
            null === r ? void 0 : e(r, n, a)) : "value"in i ? i.value : (o = i.get,
            void 0 !== o ? o.call(a) : void 0)
        }
          , c = function() {
            function e(e, t) {
                var n, a;
                for (n = 0; n < t.length; n++)
                    a = t[n],
                    a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value"in a && (a.writable = !0),
                    Object.defineProperty(e, a.key, a)
            }
            return function(t, n, a) {
                return n && e(t.prototype, n),
                a && e(t, a),
                t
            }
        }()
          , l = n(249)
          , u = a(l)
          , d = n(263)
          , m = a(d)
          , g = n(84)
          , h = a(g)
          , v = n(111)
          , f = a(v)
          , _ = n(300)
          , p = a(_)
          , y = n(251);
        window.Webtv || (window.Webtv = {}),
        Registr.Store = function(e) {
            function t(e) {
                i(this, t);
                var n = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.state = {
                    listMonth: [{
                        name: __i18n.January,
                        value: "01"
                    }, {
                        name: __i18n.February,
                        value: "02"
                    }, {
                        name: __i18n.March,
                        value: "03"
                    }, {
                        name: __i18n.April,
                        value: "04"
                    }, {
                        name: __i18n.May,
                        value: "05"
                    }, {
                        name: __i18n.June,
                        value: "06"
                    }, {
                        name: __i18n.July,
                        value: "07"
                    }, {
                        name: __i18n.August,
                        value: "08"
                    }, {
                        name: __i18n.September,
                        value: "09"
                    }, {
                        name: __i18n.October,
                        value: "10"
                    }, {
                        name: __i18n.November,
                        value: "11"
                    }, {
                        name: __i18n.December,
                        value: "12"
                    }],
                    choosedMonth: "01",
                    choosedYear: 2e3,
                    choosedDay: "01",
                    listYears: [{
                        name: "",
                        value: "",
                        selected: !1
                    }]
                },
                n.bindAll("changeMonth", "changeYear", "changeDay"),
                n
            }
            return o(t, e),
            c(t, [{
                key: "listDay",
                value: function e() {
                    var t = 1
                      , e = []
                      , n = (0,
                    p.default)(this.state.choosedYear + "-" + this.state.choosedMonth, "YYYY-MM").daysInMonth();
                    if (n > 0)
                        for (; t < n + 1; )
                            e.push({
                                name: (0,
                                p.default)(this.state.choosedYear + this.state.choosedMonth + t, ["YYYYMMDD"]).format("DD"),
                                value: (0,
                                p.default)(this.state.choosedYear + this.state.choosedMonth + t, ["YYYYMMDD"]).format("DD")
                            }),
                            t++;
                    return e
                }
            }, {
                key: "listYear",
                value: function() {
                    for (var e = [], t = (0,
                    p.default)().year(), n = t - 100; n < t; )
                        e.push({
                            name: n,
                            value: n,
                            selected: n == this.state.choosedYear
                        }),
                        n++;
                    this.setState({
                        listYears: e
                    })
                }
            }, {
                key: "insertDataInInput",
                value: function(e, t, n) {
                    (0,
                    u.default)("#id_date_of_birth").val(e + "-" + t + "-" + n)
                }
            }, {
                key: "changeMonth",
                value: function(e) {
                    this.setState({
                        choosedMonth: e.value
                    }),
                    this.insertDataInInput(this.state.choosedYear, e.value, this.state.choosedDay)
                }
            }, {
                key: "changeYear",
                value: function(e) {
                    this.setState({
                        choosedYear: e.value
                    }),
                    this.insertDataInInput(e.value, this.state.choosedMonth, this.state.choosedDay)
                }
            }, {
                key: "changeDay",
                value: function(e) {
                    this.insertDataInInput(this.state.choosedYear, this.state.choosedMonth, e.value)
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    this.listYear(),
                    this.insertDataInInput(this.state.choosedYear, this.state.choosedMonth, this.state.choosedDay)
                }
            }, {
                key: "render",
                value: function() {
                    return h.default.createElement("div", {
                        className: ""
                    }, h.default.createElement("div", {
                        className: "col-lg-1 col-sm-3 col-padding-right__md"
                    }, h.default.createElement(y.ExnessSelectList, {
                        name: "date_of_birth_day",
                        options: this.listDay(),
                        className: "ui-select ui-select__sizeliketext",
                        onChanged: this.changeDay
                    })), h.default.createElement("div", {
                        className: "col-lg-2 col-sm-3 col-padding-right__md"
                    }, h.default.createElement(y.ExnessSelectList, {
                        name: "date_of_birth_month",
                        options: this.state.listMonth,
                        className: "ui-select ui-select__sizeliketext",
                        onChanged: this.changeMonth
                    })), h.default.createElement("div", {
                        className: "col-lg-1 col-sm-3"
                    }, h.default.createElement(y.ExnessSelectList, {
                        name: "date_of_birth_year",
                        options: this.state.listYears,
                        className: "ui-select ui-select__sizeliketext",
                        onChanged: this.changeYear
                    })))
                }
            }]),
            t
        }(y.ExnessBaseComponent),
        Exness.LeverageSelectList = function(e) {
            function t(e) {
                i(this, t);
                var n = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.state = {
                    cy: Registration.config.cy || !1
                },
                n
            }
            return o(t, e),
            c(t, [{
                key: "_getSelectWrapperAttrs",
                value: function() {
                    var e = s(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "getSelectWrapperAttrs", this).call(this);
                    return Object.assign({}, e, this.props)
                }
            }, {
                key: "handleInnerClick",
                value: function() {
                    this.state.isListOpen ? this.hideList() : this.showList(),
                    this.state.cy || this.animationForVC()
                }
            }, {
                key: "animationForVC",
                value: function() {
                    var e = document.getElementById("id_Leveragee_Note").offsetHeight
                      , t = 0
                      , n = document.getElementById("id_Leveragee_Note_Attention").offsetHeight;
                    n = (n + 2) * -1,
                    Registration.config.onFocuseLeverageOnFocus = !0,
                    Registration.config.onFocusePhoneOnBlur && Registration.config.onFocusePhoneOnFocus && (t = 500),
                    setTimeout(function() {
                        document.getElementsByClassName("ui-select-registration-leverage")[0].classList.add("animate"),
                        document.getElementById("id_Leverage_Wrapper").style.height = e + 2 + "px",
                        document.getElementById("id_Leveragee_Note").classList.add("animate"),
                        document.getElementById("id_Leverage_Wrapper").classList.add("animate"),
                        document.getElementById("id_Leverage_Wrapper").classList.contains("animate-Attention") || (document.getElementById("id_Leveragee_Note").style.top = n + "px"),
                        Registration.config.onFocusePhoneOnBlur = !1,
                        Registration.config.onFocusePhoneOnFocus = !1
                    }, t)
                }
            }, {
                key: "handleOuterClick",
                value: function() {
                    this.hideList(),
                    document.getElementsByClassName("ui-select-registration-leverage")[0].classList.remove("animate"),
                    document.getElementById("id_Leveragee_Note").classList.remove("animate"),
                    document.getElementById("id_Leverage_Wrapper").style.height = 0,
                    document.getElementById("id_Leverage_Wrapper").classList.remove("animate"),
                    Registration.config.onFocuseLeverageOnBlur = !0,
                    setTimeout(function() {
                        Registration.config.onFocuseLeverageOnFocus = !1
                    }, 600)
                }
            }, {
                key: "handleItemClick",
                value: function(e) {
                    var t = this.getSelected();
                    "4200000000" != e.value && (e === t ? this.props.onSelect(e) : (this.setSelected(e),
                    this.props.onChanged(e)))
                }
            }, {
                key: "handleGlobalClick",
                value: function(e) {
                    var t, n = this.refs.selectWrapper;
                    n && (t = e.target == n || (0,
                    u.default)(n).has(e.target).length,
                    this[t ? "handleInnerClick" : "handleOuterClick"](e))
                }
            }, {
                key: "_getSelectListAttrs",
                value: function() {
                    return {
                        className: (0,
                        m.default)({
                            "ui-selectList": !0,
                            "ui-selectList-Leverage": !0,
                            "ui-selectList__preOpened": !0,
                            hidden: !this.state.isListOpen
                        }),
                        ref: "selectList"
                    }
                }
            }]),
            t
        }(y.ExnessSelectList),
        Registr.Leverage = function(e) {
            function t(e) {
                i(this, t);
                var n = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.state = {
                    leverage: Registration.config.Leverage.choices || [],
                    cy: Registration.config.cy || !1,
                    __i18n: Registration.config.__i18n || []
                },
                n.bindAll("changeLeverage", "clickLeverage", "onBlurLeverage", "onFocusLeverage", "renderUnlimLeverageInfo"),
                n
            }
            return o(t, e),
            c(t, [{
                key: "onBlurLeverage",
                value: function() {
                    document.getElementById("id_Leveragee_Note").classList.remove("hover")
                }
            }, {
                key: "onFocusLeverage",
                value: function() {
                    document.getElementById("id_Leveragee_Note").classList.add("hover")
                }
            }, {
                key: "animationForCY",
                value: function(e) {
                    var t = document.getElementById("id_Leveragee_Note_Attention").offsetHeight
                      , n = 0;
                    Registration.config.onFocusePhoneOnBlur && Registration.config.onFocusePhoneOnFocus && (n = 500),
                    setTimeout(function() {
                        document.getElementsByClassName("ui-select-registration-leverage")[0].classList.add("animate"),
                        document.getElementById("id_Leveragee_Note").style.height = t + 2 + "px",
                        document.getElementById("id_Leveragee_Note").classList.add("animate"),
                        document.getElementById("id_Leverage_Wrapper").style.height = t + 2 + "px",
                        document.getElementById("id_Leveragee_Note_Attention").style.borderBottom = "0px",
                        document.getElementById("id_Leverage_Wrapper").classList.add("animate"),
                        document.getElementById("id_Leveragee_Note").style.top = "-1px",
                        document.getElementById("id_Leverage_Wrapper").classList.add("animate-Attention"),
                        Registration.config.onFocusePhoneOnBlur = !1,
                        Registration.config.onFocusePhoneOnFocus = !1
                    }, n),
                    Registration.config.onFocuseLeverageOnFocus = !0,
                    Registration.config.onFocuseLeverageOnBlur = !0
                }
            }, {
                key: "changeLeverage",
                value: function(e) {
                    var t = document.getElementById("id_Leveragee_Note_Attention").offsetHeight
                      , n = (t + 2) * -1;
                    e.value > 100 ? this.state.cy ? this.animationForCY() : (document.getElementById("id_Leveragee_Note").style.top = "-1px",
                    document.getElementById("id_Leverage_Wrapper").classList.add("animate-Attention")) : (document.getElementById("id_Leveragee_Note").style.top = n + "px",
                    document.getElementById("id_Leverage_Wrapper").classList.remove("animate-Attention"),
                    this.state.cy && (document.getElementsByClassName("ui-select-registration-leverage")[0].classList.remove("animate"),
                    document.getElementById("id_Leverage_Wrapper").style.height = "0px",
                    document.getElementById("id_Leverage_Wrapper").classList.remove("animate"),
                    document.getElementById("id_Leveragee_Note").classList.remove("animate"))),
                    42e8 == e.value
                }
            }, {
                key: "renderUnlimLeverageInfo",
                value: function() {
                    return this.state.cy ? "" : h.default.createElement("div", {
                        className: "auth-LeverageNoteMessage"
                    }, h.default.createElement("div", {
                        className: "auth-LeverageTypeIcon auth-LeverageTypeIcon__leverage"
                    }), h.default.createElement("div", {
                        className: "auth-LeverageNoteMessage-Info"
                    }, h.default.createElement("div", {
                        className: "auth-LeverageNoteMessage-Info__txt"
                    }, this.state.__i18n["Unlimited leverage is only availa ..."]), h.default.createElement("div", {
                        className: "auth-LeverageNoteMessage-tableWrapper"
                    }, h.default.createElement("table", {
                        className: "auth-LeverageNoteMessage-table"
                    }, h.default.createElement("tr", null, h.default.createElement("th", {
                        className: "registration-leverage-td-1"
                    }, this.state.__i18n.Equity), h.default.createElement("th", {
                        className: "registration-leverage-td-2"
                    }, this.state.__i18n["Minimum lots"]), h.default.createElement("th", {
                        className: "registration-leverage-td-3"
                    }, this.state.__i18n["Minimum positions"])), h.default.createElement("tr", null, h.default.createElement("td", null, this.state.__i18n["Less than 1000USD"]), h.default.createElement("td", null, h.default.createElement("div", null, "5 ", this.state.__i18n.lots, " (500 ", this.state.__i18n["cent lots"], ")")), h.default.createElement("td", null, this.state.__i18n["10 positions"]))))))
                }
            }, {
                key: "render",
                value: function() {
                    return h.default.createElement("div", {
                        className: ""
                    }, h.default.createElement("div", {
                        className: "col-lg-6 col-md-4"
                    }, h.default.createElement(Exness.LeverageSelectList, {
                        name: "Leverage",
                        options: this.state.leverage,
                        className: "ui-select ui-select__sizeliketext ui-select-registration-leverage",
                        onChanged: this.changeLeverage,
                        onMouseOver: this.onFocusLeverage,
                        onMouseOut: this.onBlurLeverage
                    }), h.default.createElement("div", {
                        className: "auth-LeverageNote-wrapper",
                        id: "id_Leverage_Wrapper"
                    }, h.default.createElement("div", {
                        className: "auth-LeverageNote",
                        id: "id_Leveragee_Note"
                    }, h.default.createElement("div", {
                        className: "auth-warningRegisterLeverage",
                        id: "id_Leveragee_Note_Attention"
                    }, h.default.createElement("span", {
                        className: "auth-warningRegisterLeverage-title"
                    }, this.state.__i18n.Attention, "!"), h.default.createElement("span", {
                        className: "auth-warningRegisterLeverage-text"
                    }, this.state.__i18n["Using leverage higher than 1:100 ..."])), this.renderUnlimLeverageInfo()))))
                }
            }]),
            t
        }(y.ExnessBaseComponent),
        Registr.Currency = function(e) {
            function t(e) {
                i(this, t);
                var n = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.state = {
                    currency: Registration.config.currency.choices || []
                },
                n
            }
            return o(t, e),
            c(t, [{
                key: "render",
                value: function() {
                    return h.default.createElement("div", {
                        className: ""
                    }, h.default.createElement("div", {
                        className: "col-lg-6 col-md-4"
                    }, h.default.createElement(y.ExnessSelectList, {
                        name: "Currency",
                        options: this.state.currency,
                        className: "ui-select ui-select__sizeliketext"
                    })))
                }
            }]),
            t
        }(y.ExnessBaseComponent),
        Registr.start = function() {
            var e = document.getElementById("date_of_birth");
            return e ? void f.default.render(h.default.createElement(Registr.Store, null), e) : setTimeout(Registr.start, 100)
        }
        ,
        Registr.startLeverage = function() {
            var e = document.getElementById("select_leverage");
            return e ? void f.default.render(h.default.createElement(Registr.Leverage, null), e) : setTimeout(Registr.startLeverage, 100)
        }
        ,
        (0,
        u.default)(document).ready(Registr.start),
        (0,
        u.default)(document).ready(Registr.startLeverage)
    }
});

