(self.webpackChunkwebpack5 = self.webpackChunkwebpack5 || []).push([[143], {
  5262: function (e, t, n) {
    var a = {
      "./accordion": 5145,
      "./accordion.js": 5145,
      "./carousel": 5389,
      "./carousel.js": 5389,
      "./customScroll": 3744,
      "./customScroll.js": 3744,
      "./fancybox": 4571,
      "./fancybox.js": 4571,
      "./footer": 9845,
      "./footer.js": 9845,
      "./header": 7321,
      "./header.js": 7321,
      "./heroBanner": 1560,
      "./heroBanner.js": 1560,
      "./lazyload": 8075,
      "./lazyload.js": 8075,
      "./popup": 4611,
      "./popup.js": 4611,
      "./scrollTo": 8279,
      "./scrollTo.js": 8279,
      "./selectBox": 4267,
      "./selectBox.js": 4267,
      "./tabs": 8735,
      "./tabs.js": 8735,
      "./toggle": 7865,
      "./toggle.js": 7865
    };

    function o(e) {
      var t = i(e);
      return n(t)
    }

    function i(e) {
      if (!n.o(a, e)) {
        var t = new Error("Cannot find module '" + e + "'");
        throw t.code = "MODULE_NOT_FOUND", t
      }
      return a[e]
    }

    o.keys = function () {
      return Object.keys(a)
    }, o.resolve = i, e.exports = o, o.id = 5262
  }, 4986: function (e, t, n) {
    window.$ = window.jQuery = n(3609), document.addEventListener("DOMContentLoaded", (function (e) {
      window.myApp = {}, function (e) {
        for (var t = 0; t < e.length; t++) new (n(5262)("./".concat(e[t])).default)
      }(function (e) {
        for (var t = [], n = 0; n < e.length; n++) {
          var a = e[n];
          -1 === t.indexOf(a.toString()) && t.push(a)
        }
        return t
      }(function () {
        for (var e = document.querySelectorAll("[data-module]"), t = [], n = 0; n < e.length; n++) for (var a = e[n].getAttribute("data-module").split(" "), o = 0; o < a.length; o++) 0 != a[o].trim().length && t.push(a[o]);
        return t
      }()))
    }))
  }, 5145: function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
      default: function () {
        return i
      }
    });
    var a = n(3609);

    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var a = t[n];
        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
      }
    }

    var i = function () {
      function e() {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), this.ele = ".js-accordion", this.init()
      }

      var t, n, i;
      return t = e, (n = [{
        key: "init", value: function () {
          var e = this;
          a(this.ele).each((function (t, n) {
            e.controller(n, a(n).attr("data-accordion-show1"))
          }))
        }
      }, {
        key: "controller", value: function (e, t) {
          var n = a(e).find(".js-accordion-item-btn"), o = "true" == t;
          n.on("click", (function () {
            a(this).closest(".js-accordion-item").toggleClass("is-opened").find(".js-accordion-item-content").stop().slideToggle(), !0 === o && a(this).closest(".js-accordion-item").siblings().removeClass("is-opened").find(".js-accordion-item-content").slideUp()
          }))
        }
      }]) && o(t.prototype, n), i && o(t, i), e
    }()
  }, 5389: function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
      default: function () {
        return c
      }
    });
    var a = n(8831), o = n.n(a), i = n(2442), r = n.n(i), s = n(3609);

    function l(e, t) {
      for (var n = 0; n < t.length; n++) {
        var a = t[n];
        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
      }
    }

    r().setJQuery(s), o()("flickity", r(), s);
    var c = function () {
      function e() {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), this.mainSlider(), this.articleCarousel(), this.onLoad(), myApp.updateSlider = this.updateSlider.bind(this.data), myApp.updateSliderDraggable = this.updateDraggable.bind(this.data)
      }

      var t, n, a;
      return t = e, (n = [{
        key: "onLoad", value: function () {
          var e = this;
          s(window).on("load", (function (t) {
            setTimeout((function (t) {
              e.updateSlider()
            }), 10)
          }))
        }
      }, {
        key: "mainSlider", value: function () {
          s(".js-slider").length > 0 && s(".js-slider").flickity({pageDots: !0, prevNextButtons: !0, draggable: !0})
        }
      }, {
        key: "articleCarousel", value: function () {
          s(".article-carousel.flickity-enabled").each((function (e, t) {
            var n;
            s(window).on("resize", (function () {
              s(t).find(".flickity-viewport").css("height", ""), (n = r().data(t)).resize(), n.reposition()
            }))
          }))
        }
      }, {
        key: "updateSlider", value: function (e) {
          var t, n;
          (n = e ? s(e).find(".flickity-enabled") : s(".flickity-enabled")).length > 0 && n.each((function (e, n) {
            void 0 !== s(n).data("flickity") ? (s(n).flickity("resize"), s(n).flickity("reposition")) : ((t = r().data(n)).resize(), t.reposition())
          }))
        }
      }, {
        key: "updateDraggable", value: function (e) {
          var t;
          (t = e ? s(e).find(".flickity-enabled") : s(".flickity-enabled")).length > 0 && t.each((function (e, t) {
            void 0 !== s(t).data("flickity") ? s(t).flickity("updateDraggable") : r().data(t).updateDraggable()
          }))
        }
      }]) && l(t.prototype, n), a && l(t, a), e
    }()
  }, 3744: function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
      default: function () {
        return r
      }
    });
    n(450), n(1232);
    var a = n(3609);

    function o(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var a = t[n];
        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
      }
    }

    var r = function () {
      function e() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        o(this, e), this.data = n, this.options = t, this.initEvents(), myApp.dataXHR = this.getData.bind(this.data)
      }

      var t, n, r;
      return t = e, (n = [{
        key: "getData", value: function (e) {
          this.data = e
        }
      }, {
        key: "initEvents", value: function () {
          a(".js-custom-scroll").mCustomScrollbar(), a(".js-custom-scroll-outside").mCustomScrollbar({scrollbarPosition: "outside"})
        }
      }]) && i(t.prototype, n), r && i(t, r), e
    }()
  }, 4571: function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
      default: function () {
        return i
      }
    });
    var a = n(3609);

    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var a = t[n];
        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
      }
    }

    n(4155);
    var i = function () {
      function e() {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), this.video()
      }

      var t, n, i;
      return t = e, (n = [{
        key: "video", value: function () {
          a(".js-fancybox-video").fancybox({
            smallBtn: !1,
            btnTpl: {
              close: '<button data-fancybox-close class="fancybox-close-btn popup__close"> <span></span> </button>',
              zoom: "  ",
              play: " ",
              arrowLeft: '<button data-fancybox-prev="" class="fancybox-button fancybox-button--arrow_left" title="Previous"><div><svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M15.9237 0L14.4901 1.41563L18.0694 4.94531H0V7.05469H18.0694L14.4901 10.5844L15.9237 12L22 6L15.9237 0Z" fill="white"/> </svg></div></button> ',
              arrowRight: '<button data-fancybox-next="" class="fancybox-button fancybox-button--arrow_right" title="Next"><div><svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M15.9237 0L14.4901 1.41563L18.0694 4.94531H0V7.05469H18.0694L14.4901 10.5844L15.9237 12L22 6L15.9237 0Z" fill="white"/> </svg> </div></button>'
            },
            beforeShow: function () {
            },
            afterClose: function () {
            }
          })
        }
      }, {
        key: "fancyBoxHasText", value: function () {
          a(".fancybox").fancybox({
            autoPlay: !0,
            btnTpl: {close: '<button data-fancybox-close class="fancybox-close-btn popup__close"> <span></span> </button>'},
            baseTpl: '<div class="fancybox-container pop-up-video-caption" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="bg-white text-center"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div><div class="fancybox-stage"></div></div></div></div>',
            beforeShow: function () {
              window.innerWidth > 1199 && (a("html").css({"padding-right": 17}), a(".header").css({width: "calc(100% - 17px)"}), a(".header-sticky").css({
                width: "calc(100% - 17px)",
                transition: "0s"
              }))
            },
            afterClose: function () {
              window.innerWidth > 1199 && (a("html, body").removeClass("popup-active").removeAttr("style"), a(".header").removeAttr("style"), a(".header-sticky").css({
                width: "100%",
                transition: "0s"
              }), setTimeout((function () {
                a(".header-sticky").removeAttr("style")
              }), 300))
            }
          })
        }
      }]) && o(t.prototype, n), i && o(t, i), e
    }()
  }, 9845: function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
      default: function () {
        return i
      }
    });
    var a = n(3609);

    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var a = t[n];
        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
      }
    }

    var i = function () {
      function e() {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), this.expBtn = ".footer__expand-btn", this.navMB()
      }

      var t, n, i;
      return t = e, (n = [{
        key: "navMB", value: function () {
          a(this.expBtn).on("click", (function (e) {
            var t = a(e.currentTarget), n = t.closest("li");
            n.hasClass("is-opened") ? (t.siblings("ul").slideUp(), n.removeClass("is-opened")) : (t.siblings("ul").slideDown(), n.addClass("is-opened"))
          }))
        }
      }]) && o(t.prototype, n), i && o(t, i), e
    }()
  }, 7321: function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
      default: function () {
        return i
      }
    });
    var a = n(3609);

    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var a = t[n];
        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
      }
    }

    var i = function () {
      function e() {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), this.header = ".header", this.hbg = ".header-mobile__hbg-btn", this.close = ".header-mobile__close-btn", this.menu = ".mobile-menu", this.expBtn = ".main-menu-mobile__expand-btn", this.searchMbBtn = ".header-mobile__search-btn", this.searchMB = ".header__top", this.headerStickyEle = ".header", this.menuInit(), window.innerWidth > 1199 ? (this.headerSticky(), this.search()) : (this.menuControllerMB(), this.searchMo())
      }

      var t, n, i;
      return t = e, (n = [{
        key: "menuInit", value: function () {
        }
      }, {
        key: "menuController", value: function () {
        }
      }, {
        key: "headerSticky", value: function () {
          var e = a(this.headerStickyEle), t = a(".header__main").offset().top;
          a(window).on("scroll", (function () {
            a(window).scrollTop() > t ? e.addClass("is-sticky") : e.removeClass("is-sticky")
          }))
        }
      }, {
        key: "search", value: function () {
          var e = a(".header-search");
          a(".header-search__btn").on("click", (function (t) {
            return !!e.hasClass("is-opened") || (e.addClass("is-opened"), !1)
          })), a(document).on("click", (function (t) {
            t.currentTarget, 0 === a(t.target).closest(".header-search").length && e.removeClass("is-opened")
          }))
        }
      }, {
        key: "searchMo", value: function () {
          var e = a(".header-mobile__search");
          a(".header-mobile__search-btn").on("click", (function (t) {
            return !!e.hasClass("is-opened") || (e.addClass("is-opened"), a(".header-mobile__logo-mb").css("opacity", "0"), !1)
          })), a(document).on("click", (function (t) {
            t.currentTarget, 0 === a(t.target).closest(".header-mobile__search").length && (e.removeClass("is-opened"), a(".header-mobile__logo-mb").removeAttr("style"))
          }))
        }
      }, {
        key: "menuControllerMB", value: function () {
          var e = this, t = (a(this.header), a(this.hbg)), n = a(this.close), o = a(this.expBtn);
          a(this.searchMbBtn), t.on("click", (function (t) {
            a(t.currentTarget).hasClass("is-opened") ? e.closeMenu(e.hbg, e.menu) : e.openMenu(e.hbg, e.menu)
          })), n.on("click", (function (t) {
            a(t.currentTarget), e.closeMenu(e.hbg, e.menu)
          })), o.on("click", (function (e) {
            var t = a(e.currentTarget), n = t.closest("li");
            n.hasClass("is-opened") ? (t.siblings("ul").slideUp(), n.removeClass("is-opened")) : (t.siblings("ul").slideDown(), n.addClass("is-opened"))
          })), a(".main-menu-mobile a").on("click", (function (t) {
            a(t.currentTarget).attr("href").split("#")[1] && e.closeMenu(e.hbg, e.menu)
          }))
        }
      }, {
        key: "openMenu", value: function (e, t) {
          var n = a(t), o = a(e), i = a(this.close);
          if (a(".popup").hide(), n.addClass("is-opened"), o.addClass("is-opened"), i.addClass("is-opened"), a("html, body").addClass("popup-active").css({overflow: "hidden"}), 1 == (!!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform))) {
            var r = a(window).scrollTop();
            a("body").addClass("body-fixed").attr("last-posY", r), a("body").css("top", -r)
          }
        }
      }, {
        key: "closeMenu", value: function (e, t) {
          var n = a(t), o = a(e), i = a(this.close);
          if (n.removeClass("is-opened"), o.removeClass("is-opened"), i.removeClass("is-opened"), a("html, body").removeClass("popup-active").removeAttr("style"), 1 == (!!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform))) {
            var r = a("body").attr("last-posY");
            a("body").removeClass("body-fixed").removeAttr("style"), a(window).scrollTop(r)
          }
        }
      }]) && o(t.prototype, n), i && o(t, i), e
    }()
  }, 1560: function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
      default: function () {
        return c
      }
    });
    var a = n(8831), o = n.n(a), i = n(2442), r = n.n(i), s = n(3609);

    function l(e, t) {
      for (var n = 0; n < t.length; n++) {
        var a = t[n];
        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
      }
    }

    r().setJQuery(s), o()("flickity", r(), s);
    var c = function () {
      function e() {
        var t = this;
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), this.ele = ".hero-banner__list", this.init(), s(window).on("load", (function () {
          t.playBtnPosition()
        }))
      }

      var t, n, a;
      return t = e, (n = [{
        key: "init", value: function () {
          var e, t = "", n = s(".hero-banner__play-btn"), a = new (r())(this.ele, {
            prevNextButtons: !1,
            autoPlay: 4500,
            pauseAutoPlayOnHover: !1,
            wrapAround: !0,
            adaptiveHeight: !0,
            on: {
              ready: function () {
                o(0)
              }
            }
          });

          function o(a) {
            (e = s(".hero-banner__cell").eq(a)).find(".hero-banner__video__link").length > 0 ? (t = e.find(".hero-banner__video__link").attr("href"), n.attr("href", t).addClass("is-visible")) : n.removeClass("is-visible")
          }

          a.on("change", (function (e) {
            o(e)
          })), s(window).on("load", (function () {
            a.resize(), a.reposition()
          }))
        }
      }, {
        key: "pauseAllVideo", value: function () {
        }
      }, {
        key: "playBtnPosition", value: function () {
          var e = s(".hero-banner .flickity-page-dots"), t = s(".hero-banner__play-btn"), n = 0, a = 0, o = 0;

          function i() {
            n = e.offset().left + 30, a = e.offset().top + 10, window.innerWidth < 1200 && (a -= 60), o = e.width(), t.css({
              left: n + o,
              top: a
            })
          }

          s(".hero-banner__video__link").length > 0 && i(), s(window).on("resize", (function () {
            i(), setTimeout((function () {
              i()
            }), 300)
          }))
        }
      }]) && l(t.prototype, n), a && l(t, a), e
    }()
  }, 8075: function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
      default: function () {
        return s
      }
    });
    var a = n(7059), o = n.n(a), i = n(3609);

    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var a = t[n];
        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
      }
    }

    var s = function () {
      function e() {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), this.init(), myApp.reInitLozad = this.init.bind(this)
      }

      var t, n, a;
      return t = e, (n = [{
        key: "init", value: function () {
          (!1 in window && !1 in window && !1 in window.IntersectionObserverEntry.prototype || 1 == this.isIE11()) && i(".lozad").each((function () {
            i(this).addClass("loaded"), i(this).attr("data-src") && i(this).attr("src", i(this).attr("data-src")), i(this).attr("data-background-image") && i(this).css("background-image", "url(".concat(i(this).attr("data-background-image"), ")"))
          })), o()(".lozad", {
            rootMargin: "0px 0px", loaded: function (e) {
              i(e).attr("data-background-image") && e.classList.add("loaded"), e.onload = function () {
                e.classList.add("loaded")
              }
            }
          }).observe(), i("html").hasClass("ie11") && i(".lozad").addClass("loaded")
        }
      }, {
        key: "isIE11", value: function () {
          return !!("Microsoft Internet Explorer" == navigator.appName || navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/) || void 0 !== i.browser && 1 == i.browser.msi)
        }
      }]) && r(t.prototype, n), a && r(t, a), e
    }()
  }, 4611: function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
      default: function () {
        return i
      }
    });
    var a = n(3609);

    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var a = t[n];
        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
      }
    }

    var i = function () {
      function e() {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), this.action(), myApp.openPopup = this.openPopup.bind(this), myApp.closePopup = this.closePopup.bind(this)
      }

      var t, n, i;
      return t = e, (n = [{
        key: "openPopup", value: function (e) {
          if (a(".popup").hide(), a(e).fadeIn(200).addClass("is-opened"), a(window).width() < window.innerWidth && (a("html").css({"padding-right": 17}), a("html, body").addClass("popup-is-overflowing")), a("html, body").addClass("popup-active").css({overflow: "hidden"}), a(e).attr("data-url")) {
            var t = a(e).data("url");
            window.history.pushState({urlPath: ""}, "", t)
          }
          if (1 == (!!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform))) {
            var n = a(window).scrollTop();
            a("body").addClass("body-fixed").attr("last-posY", n), a("body").css("top", -n)
          }
          a(".popup .flickity-enabled").flickity("resize")
        }
      }, {
        key: "closePopup", value: function (e) {
          if (a(e).find(".popup__content"), a(e).find(".popup__close"), a(".wrapper"), a(e).fadeOut(300).removeClass("is-opened"), setTimeout((function () {
            a("html, body").removeClass("popup-active popup-is-overflowing").removeAttr("style"), a(e).hasClass("js-close-youtube") && a(e).find("iframe").remove()
          }), 300), a(e).attr("data-url") && (a(e).data("url"), window.history.pushState({urlPath: ""}, "", " ")), 1 == (!!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform))) {
            var t = a("body").attr("last-posY");
            a("body").removeClass("body-fixed").removeAttr("style"), a(window).scrollTop(t)
          }
        }
      }, {
        key: "action", value: function () {
          var e = this;
          a(document).on("click", ".popup__close, .js-popup-close", (function (t) {
            var n = t.currentTarget, o = "#" + a(n).parents(".popup").attr("id");
            e.closePopup(o), t.preventDefault()
          })), a(".popup").click((function (t) {
            var n = t.currentTarget;
            if (0 === a(t.target).closest(".popup__container").length) {
              if (a(n).hasClass("disable-outside-close")) return !1;
              var o = "#" + a(t.target).closest(".popup").attr("id");
              e.closePopup(o)
            }
          })), a(document).on("click", ".js-popup-open", (function (t) {
            var n = t.currentTarget, o = a(n).attr("href") ? a(n).attr("href") : a(n).attr("data-target");
            e.openPopup(o), a(n).hasClass("js-active-part") && e.activePart(o, a(n).closest(".parts-gallery__item ").index()), t.preventDefault()
          }))
        }
      }, {
        key: "activePart", value: function (e, t) {
          a(e).find(".popup-parts__carousel").flickity("select", t, !1, !0)
        }
      }]) && o(t.prototype, n), i && o(t, i), e
    }()
  }, 8279: function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
      default: function () {
        return i
      }
    });
    var a = n(3609);

    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var a = t[n];
        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
      }
    }

    var i = function () {
      function e() {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), this.init(), this.scrollToTop(), myApp.scrollTo = this.scrollTo.bind(this)
      }

      var t, n, i;
      return t = e, (n = [{
        key: "init", value: function () {
          var e, t, n = this;
          a(".js-scroll-to").on("click", (function (o) {
            var i = a(o.currentTarget);
            return e = (e = i.attr("data-href") ? i.attr("data-href") : i.attr("data-target")).substring(e.indexOf("#")), t = i.attr("data-offset") ? i.attr("data-offset") : 0, n.scrollTo(e, t), o.preventDefault(), !1
          }))
        }
      }, {
        key: "scrollTo", value: function (e, t) {
          var n = 0, o = a(".header__menu").outerHeight();
          t && (n = parseInt(t)), window.innerWidth < 1200 && (o = a(".header-mobile").outerHeight()), window.innerWidth < 992 && a(".research-achievements__nav").length > 0 && (o = a(".header-mobile").outerHeight() + a(".research-achievements__nav").outerHeight()), a("body,html").stop().animate({scrollTop: a(e).offset().top + n - o}, 800)
        }
      }, {
        key: "scrollToTop", value: function () {
          var e = a(".js-scroll-to-top"), t = window.innerHeight;
          a(window).on("scroll", (function (n) {
            a(window).scrollTop() > t ? e.addClass("is-shown") : e.removeClass("is-shown")
          })), e.on("click", (function (e) {
            a("body,html").stop().animate({scrollTop: 0}, 800)
          }))
        }
      }]) && o(t.prototype, n), i && o(t, i), e
    }()
  }, 4267: function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
      default: function () {
        return i
      }
    });
    var a = n(3609);

    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var a = t[n];
        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
      }
    }

    var i = function () {
      function e() {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), this.ele = ".js-selectBox", this.eleClass = "select-box", this.init(), this.controller(), this.clickBodyToHideDropDown(), myApp.selectBoxInit = this.init.bind(this), myApp.selectBoxDestroy = this.destroy.bind(this), myApp.selectBoxReInit = this.reInit.bind(this)
      }

      var t, n, i;
      return t = e, (n = [{
        key: "init", value: function () {
          var e = this;
          a(this.ele).each((function (t, n) {
            0 != a(n).find(e.eleClass + "__select").length || a(n).hasClass(e.eleClass + "__select") || e.initSelect(n)
          }))
        }
      }, {
        key: "initSelect", value: function (e) {
          var t, n = a(e), o = n.children(), i = n.children("option:selected");
          for (n.addClass(this.eleClass + "__select").wrap('<div class="'.concat(this.eleClass, '"></div>')), n.before('<span class="'.concat(this.eleClass, '__current">').concat(i.text(), "</span>")), n.before('<ul class="'.concat(this.eleClass, '__dropdown"></ul>')), t = 0; t < o.length; t++) t != i.index() ? n.prev("ul").append('<li data-value="'.concat(o.eq(t).attr("value"), '">').concat(o.eq(t).text(), "</li>")) : n.prev("ul").append('<li class="active" data-value="'.concat(o.eq(t).attr("value"), '">').concat(o.eq(t).text(), "</li>"))
        }
      }, {
        key: "controller", value: function () {
          var e = this;
          a("." + this.eleClass).find("li").on("click", (function (t) {
            var n = a(t.currentTarget);
            n.closest("." + e.eleClass).find(".".concat(e.eleClass, "__select")).val(n.attr("data-value")).trigger("change")
          })), a("." + this.eleClass).find(".".concat(this.eleClass, "__current")).on("click", (function (t) {
            var n = a(t.currentTarget).closest("." + e.eleClass);
            n.hasClass("open") ? a(".".concat(e.eleClass, ".open")).removeClass("open") : (a(".".concat(e.eleClass, ".open")).removeClass("open"), n.addClass("open"))
          })), a(this.ele).on("change", (function (t) {
            var n = a(t.currentTarget), o = n.val();
            n.siblings(".".concat(e.eleClass, "__dropdown")).find('li[data-value="' + o + '"]').addClass("active").siblings("li").removeClass("active"), n.siblings(".".concat(e.eleClass, "__current")).html(n.siblings(".".concat(e.eleClass, "__dropdown")).find(".active").html())
          }))
        }
      }, {
        key: "clickBodyToHideDropDown", value: function () {
          var e = this;
          a(document).on("click", (function (t) {
            0 == a(t.target).closest(".".concat(e.eleClass, "__current")).length && a(".".concat(e.eleClass)).removeClass("open")
          }))
        }
      }, {
        key: "destroy", value: function () {
          var e = a(this.ele).removeClass(this.eleClass + "__select");
          e.siblings().remove(), e.unwrap()
        }
      }, {
        key: "reInit", value: function () {
          this.destroy(), this.init(), this.controller()
        }
      }]) && o(t.prototype, n), i && o(t, i), e
    }()
  }, 8735: function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
      default: function () {
        return i
      }
    });
    var a = n(3609);

    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var a = t[n];
        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
      }
    }

    var i = function () {
      function e() {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), this.init(), this.controller()
      }

      var t, n, i;
      return t = e, (n = [{
        key: "init", value: function () {
          a(".tabs").each((function () {
            var e = a(this).find(".tabs__nav > li"), t = a(this).find(".tabs__content > li");
            0 === e.filter(".active").length && e.eq(0).addClass("active"), 0 === t.filter(".active").length && t.filter(":first-child").addClass("active")
          }))
        }
      }, {
        key: "controller", value: function () {
          var e = this;
          a(".tabs__nav a, .tabs__nav button").click((function (t) {
            var n = a(t.currentTarget).attr("href") ? a(t.currentTarget).attr("href") : a(t.currentTarget).attr("data-target"),
              o = a(t.currentTarget).closest(".tabs");
            e.changeTab(o, n), t.preventDefault()
          }))
        }
      }, {
        key: "changeTab", value: function (e, t) {
          var n = e.find('.tabs__nav a[href="' + t + '"], .tabs__nav button[data-target="' + t + '"], .tabs__nav button[href="' + t + '"]');
          "LI" == n.parent().prop("tagName") ? n.parent().addClass("active").siblings().removeClass("active") : n.addClass("active").siblings().removeClass("active"), e.find(t).fadeIn().css("display", "block").siblings().hide(), a(e).find(t).find(".flickity-slider").length > 0 && (myApp.updateSlider(e), myApp.updateSliderDraggable(e))
        }
      }]) && o(t.prototype, n), i && o(t, i), e
    }()
  }, 7865: function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
      default: function () {
        return i
      }
    });
    var a = n(3609);

    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var a = t[n];
        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
      }
    }

    var i = function () {
      function e() {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), this.toggleClass(), this.toggleSlide()
      }

      var t, n, i;
      return t = e, (n = [{
        key: "toggleClass", value: function () {
          var e, t;
          a(".js-toggle-class").on("click", (function (n) {
            (t = a(n.currentTarget)).toggleClass("is-toggled"), e = t.attr("data-target") ? t.attr("data-target") : t.attr("href"), a(e).toggleClass("is-toggled")
          }))
        }
      }, {
        key: "toggleSlide", value: function () {
          var e, t;
          a(".js-toggle-slide").on("click", (function (n) {
            (t = a(n.currentTarget)).toggleClass("is-toggled"), e = t.attr("data-target") ? t.attr("data-target") : t.attr("href"), a(e).toggleClass("is-toggled").stop().slideToggle();
            var o = t.attr("text-open"), i = t.attr("text-close");
            if (i && o) {
              var r = t.hasClass("is-toggled") ? i : o;
              t.find(".js-toggle-slide-text-update").text(r)
            }
            n.preventDefault()
          }))
        }
      }]) && o(t.prototype, n), i && o(t, i), e
    }()
  }, 7059: function (e) {
    e.exports = function () {
      "use strict";
      var e = "undefined" != typeof document && document.documentMode, t = {
        rootMargin: "0px", threshold: 0, load: function (t) {
          if ("picture" === t.nodeName.toLowerCase()) {
            var n = t.querySelector("img"), a = !1;
            null === n && (n = document.createElement("img"), a = !0), e && t.getAttribute("data-iesrc") && (n.src = t.getAttribute("data-iesrc")), t.getAttribute("data-alt") && (n.alt = t.getAttribute("data-alt")), a && t.append(n)
          }
          if ("video" === t.nodeName.toLowerCase() && !t.getAttribute("data-src") && t.children) {
            for (var o = t.children, i = void 0, r = 0; r <= o.length - 1; r++) (i = o[r].getAttribute("data-src")) && (o[r].src = i);
            t.load()
          }
          t.getAttribute("data-poster") && (t.poster = t.getAttribute("data-poster")), t.getAttribute("data-src") && (t.src = t.getAttribute("data-src")), t.getAttribute("data-srcset") && t.setAttribute("srcset", t.getAttribute("data-srcset"));
          var s = ",";
          if (t.getAttribute("data-background-delimiter") && (s = t.getAttribute("data-background-delimiter")), t.getAttribute("data-background-image")) t.style.backgroundImage = "url('" + t.getAttribute("data-background-image").split(s).join("'),url('") + "')"; else if (t.getAttribute("data-background-image-set")) {
            var l = t.getAttribute("data-background-image-set").split(s), c = l[0].substr(0, l[0].indexOf(" ")) || l[0];
            c = -1 === c.indexOf("url(") ? "url(" + c + ")" : c, 1 === l.length ? t.style.backgroundImage = c : t.setAttribute("style", (t.getAttribute("style") || "") + "background-image: " + c + "; background-image: -webkit-image-set(" + l + "); background-image: image-set(" + l + ")")
          }
          t.getAttribute("data-toggle-class") && t.classList.toggle(t.getAttribute("data-toggle-class"))
        }, loaded: function () {
        }
      };

      function n(e) {
        e.setAttribute("data-loaded", !0)
      }

      var a = function (e) {
        return "true" === e.getAttribute("data-loaded")
      }, o = function (e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : document;
        return e instanceof Element ? [e] : e instanceof NodeList ? e : t.querySelectorAll(e)
      };
      return function () {
        var e, i, r = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ".lozad",
          s = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, l = Object.assign({}, t, s),
          c = l.root, u = l.rootMargin, d = l.threshold, f = l.load, p = l.loaded, h = void 0;
        "undefined" != typeof window && window.IntersectionObserver && (h = new IntersectionObserver((e = f, i = p, function (t, o) {
          t.forEach((function (t) {
            (0 < t.intersectionRatio || t.isIntersecting) && (o.unobserve(t.target), a(t.target) || (e(t.target), n(t.target), i(t.target)))
          }))
        }), {root: c, rootMargin: u, threshold: d}));
        for (var v, b = o(r, c), g = 0; g < b.length; g++) (v = b[g]).getAttribute("data-placeholder-background") && (v.style.background = v.getAttribute("data-placeholder-background"));
        return {
          observe: function () {
            for (var e = o(r, c), t = 0; t < e.length; t++) a(e[t]) || (h ? h.observe(e[t]) : (f(e[t]), n(e[t]), p(e[t])))
          }, triggerLoad: function (e) {
            a(e) || (f(e), n(e), p(e))
          }, observer: h
        }
      }
    }()
  }
}, 0, [[4986, 736]]]);