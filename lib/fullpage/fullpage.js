/*!
 * fullPage 3.0.5
 * https://github.com/alvarotrigo/fullPage.js
 *
 * @license GPLv3 for open source use only
 * or Fullpage Commercial License for commercial use
 * http://alvarotrigo.com/fullPage/pricing/
 *
 * Copyright (C) 2018 http://alvarotrigo.com/fullPage - A project by Alvaro Trigo
 */
! function(e, t, n, o, r) { "function" == typeof define && define.amd ? define(function() { return e.fullpage = o(t, n), e.fullpage }) : "object" == typeof exports ? module.exports = o(t, n) : t.fullpage = o(t, n) }(this, window, document, function(Lt, xt) { "use strict"; var At = "fullpage-wrapper",
        Tt = "." + At,
        kt = "fp-responsive",
        Mt = "fp-notransition",
        Ot = "fp-destroyed",
        Ct = "fp-enabled",
        Ht = "fp-viewing",
        It = "active",
        Bt = "." + It,
        Rt = "fp-completely",
        zt = "fp-section",
        jt = "." + zt,
        Nt = jt + Bt,
        Pt = "fp-tableCell",
        Dt = "." + Pt,
        Vt = "fp-auto-height",
        Wt = "fp-normal-scroll",
        Yt = "fp-nav",
        Ft = "#" + Yt,
        Ut = "fp-tooltip",
        Xt = "fp-slide",
        _t = "." + Xt,
        Kt = _t + Bt,
        $t = "fp-slides",
        qt = "." + $t,
        Qt = "fp-slidesContainer",
        Gt = "." + Qt,
        Jt = "fp-table",
        Zt = "fp-slidesNav",
        en = "." + Zt,
        tn = en + " a",
        e = "fp-controlArrow",
        nn = "." + e,
        on = "fp-prev",
        rn = nn + ".fp-prev",
        ln = nn + ".fp-next";

    function an(e, t) { Lt.console && Lt.console[e] && Lt.console[e]("fullPage: " + t) }

    function sn(e, t) { return (t = 1 < arguments.length ? t : xt) ? t.querySelectorAll(e) : null }

    function cn(e) { e = e || {}; for (var t = 1, n = arguments.length; t < n; ++t) { var o = arguments[t]; if (o)
                for (var r in o) o.hasOwnProperty(r) && ("[object Object]" !== Object.prototype.toString.call(o[r]) ? e[r] = o[r] : e[r] = cn(e[r], o[r])) } return e }

    function un(e, t) { return null != e && (e.classList ? e.classList.contains(t) : new RegExp("(^| )" + t + "( |$)", "gi").test(e.className)) }

    function fn() { return "innerHeight" in Lt ? Lt.innerHeight : xt.documentElement.offsetHeight }

    function dn(e, t) { var n; for (n in e = l(e), t)
            if (t.hasOwnProperty(n) && null !== n)
                for (var o = 0; o < e.length; o++) { e[o].style[n] = t[n] }
            return e }

    function n(e, t, n) { for (var o = e[n]; o && !zn(o, t);) o = o[n]; return o }

    function vn(e, t) { return n(e, t, "previousElementSibling") }

    function pn(e, t) { return n(e, t, "nextElementSibling") }

    function hn(e) { return e.previousElementSibling }

    function gn(e) { return e.nextElementSibling }

    function mn(e) { return e[e.length - 1] }

    function Sn(e, t) { e = i(e) ? e[0] : e; for (var n = null != t ? sn(t, e.parentNode) : e.parentNode.childNodes, o = 0, r = 0; r < n.length; r++) { if (n[r] == e) return o;
            1 == n[r].nodeType && o++ } return -1 }

    function l(e) { return i(e) ? e : [e] }

    function bn(e) { e = l(e); for (var t = 0; t < e.length; t++) e[t].style.display = "none"; return e }

    function wn(e) { e = l(e); for (var t = 0; t < e.length; t++) e[t].style.display = "block"; return e }

    function i(e) { return "[object Array]" === Object.prototype.toString.call(e) || "[object NodeList]" === Object.prototype.toString.call(e) }

    function yn(e, t) { e = l(e); for (var n = 0; n < e.length; n++) { var o = e[n];
            o.classList ? o.classList.add(t) : o.className += " " + t } return e }

    function En(e, t) { e = l(e); for (var n = t.split(" "), o = 0; o < n.length; o++) { t = n[o]; for (var r = 0; r < e.length; r++) { var i = e[r];
                i.classList ? i.classList.remove(t) : i.className = i.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " ") } } return e }

    function Ln(e, t) { t.appendChild(e) }

    function o(e, t, n) { var o;
        t = t || xt.createElement("div"); for (var r = 0; r < e.length; r++) { var i = e[r];
            (n && !r || !n) && (o = t.cloneNode(!0), i.parentNode.insertBefore(o, i)), o.appendChild(i) } return e }

    function xn(e, t) { o(e, t, !0) }

    function An(e, t) { for ("string" == typeof t && (t = Nn(t)), e.appendChild(t); e.firstChild !== t;) t.appendChild(e.firstChild) }

    function Tn(e) { for (var t = xt.createDocumentFragment(); e.firstChild;) t.appendChild(e.firstChild);
        e.parentNode.replaceChild(t, e) }

    function kn(e, t) { return e && 1 === e.nodeType ? zn(e, t) ? e : kn(e.parentNode, t) : null }

    function Mn(e, t) { r(e, e.nextSibling, t) }

    function On(e, t) { r(e, e, t) }

    function r(e, t, n) { i(n) || ("string" == typeof n && (n = Nn(n)), n = [n]); for (var o = 0; o < n.length; o++) e.parentNode.insertBefore(n[o], t) }

    function Cn() { var e = xt.documentElement; return (Lt.pageYOffset || e.scrollTop) - (e.clientTop || 0) }

    function Hn(t) { return Array.prototype.filter.call(t.parentNode.children, function(e) { return e !== t }) }

    function In(e) { e.preventDefault ? e.preventDefault() : e.returnValue = !1 }

    function Bn(e) { if ("function" == typeof e) return !0; var t = Object.prototype.toString(e); return "[object Function]" === t || "[object GeneratorFunction]" === t }

    function Rn(e, t, n) { var o;
        n = void 0 === n ? {} : n, "function" == typeof Lt.CustomEvent ? o = new CustomEvent(t, { detail: n }) : (o = xt.createEvent("CustomEvent")).initCustomEvent(t, !0, !0, n), e.dispatchEvent(o) }

    function zn(e, t) { return (e.matches || e.matchesSelector || e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.oMatchesSelector).call(e, t) }

    function jn(e, t) { if ("boolean" == typeof t)
            for (var n = 0; n < e.length; n++) e[n].style.display = t ? "block" : "none"; return e }

    function Nn(e) { var t = xt.createElement("div"); return t.innerHTML = e.trim(), t.firstChild }

    function Pn(e) { e = l(e); for (var t = 0; t < e.length; t++) { var n = e[t];
            n && n.parentElement && n.parentNode.removeChild(n) } }

    function a(e, t, n) { for (var o = e[n], r = []; o;)(zn(o, t) || null == t) && r.push(o), o = o[n]; return r }

    function Dn(e, t) { return a(e, t, "nextElementSibling") }

    function Vn(e, t) { return a(e, t, "previousElementSibling") } return Lt.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = function(e, t) { t = t || Lt; for (var n = 0; n < this.length; n++) e.call(t, this[n], n, this) }), Lt.fp_utils = { $: sn, deepExtend: cn, hasClass: un, getWindowHeight: fn, css: dn, until: n, prevUntil: vn, nextUntil: pn, prev: hn, next: gn, last: mn, index: Sn, getList: l, hide: bn, show: wn, isArrayOrList: i, addClass: yn, removeClass: En, appendTo: Ln, wrap: o, wrapAll: xn, wrapInner: An, unwrap: Tn, closest: kn, after: Mn, before: On, insertBefore: r, getScrollTop: Cn, siblings: Hn, preventDefault: In, isFunction: Bn, trigger: Rn, matches: zn, toggle: jn, createElementFromHTML: Nn, remove: Pn, filter: function(e, t) { Array.prototype.filter.call(e, t) }, untilAll: a, nextAll: Dn, prevAll: Vn, showError: an },
        function(e, E) { var n = E && new RegExp("([\\d\\w]{8}-){3}[\\d\\w]{8}|^(?=.*?[A-Y])(?=.*?[a-y])(?=.*?[0-8])(?=.*?[#?!@$%^&*-]).{8,}$").test(E.licenseKey) || -1 < xt.domain.indexOf("alvarotrigo.com"); if (!un(sn("html"), Ct)) { var r = sn("html, body"),
                    L = sn("body")[0],
                    h = {};
                E = cn({ menu: !1, anchors: [], lockAnchors: !1, navigation: !1, navigationPosition: "right", navigationTooltips: [], showActiveTooltip: !1, slidesNavigation: !1, slidesNavPosition: "bottom", scrollBar: !1, hybrid: !1, css3: !0, scrollingSpeed: 700, autoScrolling: !0, fitToSection: !0, fitToSectionDelay: 1e3, easing: "easeInOutCubic", easingcss3: "ease", loopBottom: !1, loopTop: !1, loopHorizontal: !0, continuousVertical: !1, continuousHorizontal: !1, scrollHorizontally: !1, interlockedSlides: !1, dragAndMove: !1, offsetSections: !1, resetSliders: !1, fadingEffect: !1, normalScrollElements: null, scrollOverflow: !1, scrollOverflowReset: !1, scrollOverflowHandler: Lt.fp_scrolloverflow ? Lt.fp_scrolloverflow.iscrollHandler : null, scrollOverflowOptions: null, touchSensitivity: 5, touchWrapper: "string" == typeof e ? sn(e)[0] : e, normalScrollElementTouchThreshold: 5, bigSectionsDestination: null, keyboardScrolling: !0, animateAnchor: !0, recordHistory: !0, controlArrows: !0, controlArrowColor: "#fff", verticalCentered: !0, sectionsColor: [], paddingTop: 0, paddingBottom: 0, fixedElements: null, responsive: 0, responsiveWidth: 0, responsiveHeight: 0, responsiveSlides: !1, parallax: !1, parallaxOptions: { type: "reveal", percentage: 62, property: "translate" }, cards: !1, cardsOptions: { perspective: 100, fadeContent: !0, fadeBackground: !0 }, sectionSelector: ".section", slideSelector: ".slide", v2compatible: !1, afterLoad: null, onLeave: null, afterRender: null, afterResize: null, afterReBuild: null, afterSlideLoad: null, onSlideLeave: null, afterResponsive: null, lazyLoading: !0 }, E); var x, i, c, u, a = !1,
                    o = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),
                    l = "ontouchstart" in Lt || 0 < navigator.msMaxTouchPoints || navigator.maxTouchPoints,
                    f = "string" == typeof e ? sn(e)[0] : e,
                    A = fn(),
                    g = !1,
                    t = !0,
                    T = !0,
                    d = [],
                    v = { m: { up: !0, down: !0, left: !0, right: !0 } };
                v.k = cn({}, v.m); var p, s, m, S, k, M, b, w = Lt.PointerEvent ? { down: "pointerdown", move: "pointermove" } : { down: "MSPointerDown", move: "MSPointerMove" },
                    y = { touchmove: "ontouchmove" in Lt ? "touchmove" : w.move, touchstart: "ontouchstart" in Lt ? "touchstart" : w.down },
                    O = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',
                    C = !1; try { var H = Object.defineProperty({}, "passive", { get: function() { C = !0 } });
                    Lt.addEventListener("testPassive", null, H), Lt.removeEventListener("testPassive", null, H) } catch (e) {} var I, B = cn({}, E),
                    R = !1,
                    z = !0;
                mt(), Lt.fp_easings = cn(Lt.fp_easings, { easeInOutCubic: function(e, t, n, o) { return (e /= o / 2) < 1 ? n / 2 * e * e * e + t : n / 2 * ((e -= 2) * e * e + 2) + t } }), f && (h.version = "3.0.5", h.setAutoScrolling = _, h.setRecordHistory = K, h.setScrollingSpeed = $, h.setFitToSection = q, h.setLockAnchors = function(e) { E.lockAnchors = e }, h.setMouseWheelScrolling = Q, h.setAllowScrolling = G, h.setKeyboardScrolling = Z, h.moveSectionUp = ee, h.moveSectionDown = te, h.silentMoveTo = ne, h.moveTo = oe, h.moveSlideRight = re, h.moveSlideLeft = ie, h.fitToSection = he, h.reBuild = le, h.setResponsive = ae, h.getFullpageData = function() { return E }, h.destroy = function(e) { _(!1, "internal"), G(!0), J(!1), Z(!1), yn(f, Ot), clearTimeout(S), clearTimeout(m), clearTimeout(s), clearTimeout(k), clearTimeout(M), Lt.removeEventListener("scroll", pe), Lt.removeEventListener("hashchange", Pe), Lt.removeEventListener("resize", qe), xt.removeEventListener("keydown", Ve), xt.removeEventListener("keyup", We), ["click", "touchstart"].forEach(function(e) { xt.removeEventListener(e, se) }), ["mouseenter", "touchstart", "mouseleave", "touchend"].forEach(function(e) { xt.removeEventListener(e, ue, !0) }), clearTimeout(S), clearTimeout(m), e && (vt(0), sn("img[data-src], source[data-src], audio[data-src], iframe[data-src]", f).forEach(function(e) { He(e, "src") }), sn("img[data-srcset]").forEach(function(e) { He(e, "srcset") }), Pn(sn(Ft + ", " + en + ", " + nn)), dn(sn(jt), { height: "", "background-color": "", padding: "" }), dn(sn(_t), { width: "" }), dn(f, { height: "", position: "", "-ms-touch-action": "", "touch-action": "" }), dn(r, { overflow: "", height: "" }), En(sn("html"), Ct), En(L, kt), L.className.split(/\s+/).forEach(function(e) { 0 === e.indexOf(Ht) && En(L, e) }), sn(jt + ", " + _t).forEach(function(e) { E.scrollOverflowHandler && E.scrollOverflow && E.scrollOverflowHandler.remove(e), En(e, Jt + " " + It + " " + Rt); var t = e.getAttribute("data-fp-styles");
                        t && e.setAttribute("style", e.getAttribute("data-fp-styles")), un(e, zt) && !R && e.removeAttribute("data-anchor") }), Je(f), [Dt, Gt, qt].forEach(function(e) { sn(e, f).forEach(function(e) { Tn(e) }) }), dn(f, { "-webkit-transition": "none", transition: "none" }), Lt.scrollTo(0, 0), [zt, Xt, Qt].forEach(function(e) { En(sn("." + e), e) })) }, h.getActiveSection = function() { return new yt(sn(Nt)[0]) }, h.getActiveSlide = function() { return Me(sn(Kt, sn(Nt)[0])[0]) }, h.test = { top: "0px", translate3d: "translate3d(0px, 0px, 0px)", translate3dH: function() { for (var e = [], t = 0; t < sn(E.sectionSelector, f).length; t++) e.push("translate3d(0px, 0px, 0px)"); return e }(), left: function() { for (var e = [], t = 0; t < sn(E.sectionSelector, f).length; t++) e.push(0); return e }(), options: E, setAutoScrolling: _ }, h.shared = { afterRenderActions: ve }, Lt.fullpage_api = h, E.$ && (E.$.fn.fullpage = h), E.css3 && (E.css3 = function() { var e, t = xt.createElement("p"),
                        n = { webkitTransform: "-webkit-transform", OTransform: "-o-transform", msTransform: "-ms-transform", MozTransform: "-moz-transform", transform: "transform" }; for (var o in t.style.display = "block", xt.body.insertBefore(t, null), n) void 0 !== t.style[o] && (t.style[o] = "translate3d(1px,1px,1px)", e = Lt.getComputedStyle(t).getPropertyValue(n[o])); return xt.body.removeChild(t), void 0 !== e && 0 < e.length && "none" !== e }()), E.scrollBar = E.scrollBar || E.hybrid, function() { if (!E.anchors.length) { var e = "[data-anchor]",
                            t = sn(E.sectionSelector.split(",").join(e + ",") + e, f);
                        t.length && (R = !0, t.forEach(function(e) { E.anchors.push(e.getAttribute("data-anchor").toString()) })) } if (!E.navigationTooltips.length) { var e = "[data-tooltip]",
                            n = sn(E.sectionSelector.split(",").join(e + ",") + e, f);
                        n.length && n.forEach(function(e) { E.navigationTooltips.push(e.getAttribute("data-tooltip").toString()) }) } }(), function() { dn(f, { height: "100%", position: "relative" }), yn(f, At), yn(sn("html"), Ct), A = fn(), En(f, Ot), yn(sn(E.sectionSelector, f), zt), yn(sn(E.slideSelector, f), Xt); for (var e = sn(jt), t = 0; t < e.length; t++) { var n = t,
                            o = e[t],
                            r = sn(_t, o),
                            i = r.length;
                        o.setAttribute("data-fp-styles", o.getAttribute("style")), s = o, (c = n) || null != sn(Nt)[0] || yn(s, It), u = sn(Nt)[0], dn(s, { height: A + "px" }), E.paddingTop && dn(s, { "padding-top": E.paddingTop }), E.paddingBottom && dn(s, { "padding-bottom": E.paddingBottom }), void 0 !== E.sectionsColor[c] && dn(s, { "background-color": E.sectionsColor[c] }), void 0 !== E.anchors[c] && s.setAttribute("data-anchor", E.anchors[c]), l = o, a = n, void 0 !== E.anchors[a] && un(l, It) && Ze(E.anchors[a], a), E.menu && E.css3 && null != kn(sn(E.menu)[0], Tt) && sn(E.menu).forEach(function(e) { L.appendChild(e) }), 0 < i ? fe(o, r, i) : E.verticalCentered && tt(o) } var l, a, s, c;
                    E.fixedElements && E.css3 && sn(E.fixedElements).forEach(function(e) { L.appendChild(e) }), E.navigation && function() { var e = xt.createElement("div");
                        e.setAttribute("id", Yt); var t = xt.createElement("ul");
                        e.appendChild(t), Ln(e, L); var n = sn(Ft)[0];
                        yn(n, "fp-" + E.navigationPosition), E.showActiveTooltip && yn(n, "fp-show-active"); for (var o = "", r = 0; r < sn(jt).length; r++) { var i = "";
                            E.anchors.length && (i = E.anchors[r]), o += '<li><a href="#' + i + '"><span class="fp-sr-only">' + de(r, "Section") + "</span><span></span></a>"; var l = E.navigationTooltips[r];
                            void 0 !== l && "" !== l && (o += '<div class="' + Ut + " fp-" + E.navigationPosition + '">' + l + "</div>"), o += "</li>" }
                        sn("ul", n)[0].innerHTML = o, dn(sn(Ft), { "margin-top": "-" + sn(Ft)[0].offsetHeight / 2 + "px" }), yn(sn("a", sn("li", sn(Ft)[0])[Sn(sn(Nt)[0], jt)]), It) }(), sn('iframe[src*="youtube.com/embed/"]', f).forEach(function(e) { var t, n, o;
                        n = "enablejsapi=1", o = (t = e).getAttribute("src"), t.setAttribute("src", o + (/\?/.test(o) ? "&" : "?") + n) }), E.scrollOverflow && (p = E.scrollOverflowHandler.init(E)) }(), G(!0), J(!0), _(E.autoScrolling, "internal"), Qe(), ut(), "complete" === xt.readyState && Ne(), Lt.addEventListener("load", Ne), E.scrollOverflow || ve(), Lt.addEventListener("scroll", pe), Lt.addEventListener("hashchange", Pe), Lt.addEventListener("blur", Xe), Lt.addEventListener("resize", qe), xt.addEventListener("keydown", Ve), xt.addEventListener("keyup", We), ["click", "touchstart"].forEach(function(e) { xt.addEventListener(e, se) }), E.normalScrollElements && (["mouseenter", "touchstart"].forEach(function(e) { ce(e, !1) }), ["mouseleave", "touchend"].forEach(function(e) { ce(e, !0) }))); var j = !1,
                    N = 0,
                    P = 0,
                    D = 0,
                    V = 0,
                    W = 0,
                    Y = (new Date).getTime(),
                    F = 0,
                    U = 0,
                    X = A; return h }

            function _(e, t) { e || vt(0), gt("autoScrolling", e, t); var n = sn(Nt)[0]; if (E.autoScrolling && !E.scrollBar) dn(r, { overflow: "hidden", height: "100%" }), K(B.recordHistory, "internal"), dn(f, { "-ms-touch-action": "none", "touch-action": "none" }), null != n && vt(n.offsetTop);
                else if (dn(r, { overflow: "visible", height: "initial" }), K(!!E.autoScrolling && B.recordHistory, "internal"), dn(f, { "-ms-touch-action": "", "touch-action": "" }), null != n) { var o = Oe(n.offsetTop);
                    o.element.scrollTo(0, o.options) } }

            function K(e, t) { gt("recordHistory", e, t) }

            function $(e, t) { gt("scrollingSpeed", e, t) }

            function q(e, t) { gt("fitToSection", e, t) }

            function Q(e) { e ? (function() { var e, t = "";
                    Lt.addEventListener ? e = "addEventListener" : (e = "attachEvent", t = "on"); var n = "onwheel" in xt.createElement("div") ? "wheel" : void 0 !== xt.onmousewheel ? "mousewheel" : "DOMMouseScroll",
                        o = !!C && { passive: !1 }; "DOMMouseScroll" == n ? xt[e](t + "MozMousePixelScroll", Ee, o) : xt[e](t + n, Ee, o) }(), f.addEventListener("mousedown", Ye), f.addEventListener("mouseup", Fe)) : (xt.addEventListener ? (xt.removeEventListener("mousewheel", Ee, !1), xt.removeEventListener("wheel", Ee, !1), xt.removeEventListener("MozMousePixelScroll", Ee, !1)) : xt.detachEvent("onmousewheel", Ee), f.removeEventListener("mousedown", Ye), f.removeEventListener("mouseup", Fe)) }

            function G(t, e) { void 0 !== e ? (e = e.replace(/ /g, "").split(",")).forEach(function(e) { ht(t, e, "m") }) : ht(t, "all", "m") }

            function J(e) { e ? (Q(!0), function() { if (o || l) { E.autoScrolling && (L.removeEventListener(y.touchmove, me, { passive: !1 }), L.addEventListener(y.touchmove, me, { passive: !1 })); var e = E.touchWrapper;
                        e.removeEventListener(y.touchstart, we), e.removeEventListener(y.touchmove, Se, { passive: !1 }), e.addEventListener(y.touchstart, we), e.addEventListener(y.touchmove, Se, { passive: !1 }) } }()) : (Q(!1), function() { if (o || l) { E.autoScrolling && (L.removeEventListener(y.touchmove, Se, { passive: !1 }), L.removeEventListener(y.touchmove, me, { passive: !1 })); var e = E.touchWrapper;
                        e.removeEventListener(y.touchstart, we), e.removeEventListener(y.touchmove, Se, { passive: !1 }) } }()) }

            function Z(t, e) { void 0 !== e ? (e = e.replace(/ /g, "").split(",")).forEach(function(e) { ht(t, e, "k") }) : (ht(t, "all", "k"), E.keyboardScrolling = t) }

            function ee() { var e = vn(sn(Nt)[0], jt);
                e || !E.loopTop && !E.continuousVertical || (e = mn(sn(jt))), null != e && Ae(e, null, !0) }

            function te() { var e = pn(sn(Nt)[0], jt);
                e || !E.loopBottom && !E.continuousVertical || (e = sn(jt)[0]), null != e && Ae(e, null, !1) }

            function ne(e, t) { $(0, "internal"), oe(e, t), $(B.scrollingSpeed, "internal") }

            function oe(e, t) { var n = rt(e);
                void 0 !== t ? it(e, t) : null != n && Ae(n) }

            function re(e) { Le("right", e) }

            function ie(e) { Le("left", e) }

            function le(e) { if (!un(f, Ot)) { g = !0, A = fn(); for (var t = sn(jt), n = 0; n < t.length; ++n) { var o = t[n],
                            r = sn(qt, o)[0],
                            i = sn(_t, o);
                        E.verticalCentered && dn(sn(Dt, o), { height: nt(o) + "px" }), dn(o, { height: A + "px" }), 1 < i.length && Ke(r, sn(Kt, r)[0]) }
                    E.scrollOverflow && p.createScrollBarForAll(); var l = Sn(sn(Nt)[0], jt);
                    l && ne(l + 1), g = !1, Bn(E.afterResize) && e && E.afterResize.call(f, Lt.innerWidth, Lt.innerHeight), Bn(E.afterReBuild) && !e && E.afterReBuild.call(f) } }

            function ae(e) { var t = un(L, kt);
                e ? t || (_(!1, "internal"), q(!1, "internal"), bn(sn(Ft)), yn(L, kt), Bn(E.afterResponsive) && E.afterResponsive.call(f, e), E.scrollOverflow && p.createScrollBarForAll()) : t && (_(B.autoScrolling, "internal"), q(B.autoScrolling, "internal"), wn(sn(Ft)), En(L, kt), Bn(E.afterResponsive) && E.afterResponsive.call(f, e)) }

            function se(e) { var t = e.target;
                t && kn(t, Ft + " a") ? function(e) { In(e); var t = Sn(kn(this, Ft + " li"));
                    Ae(sn(jt)[t]) }.call(t, e) : zn(t, ".fp-tooltip") ? function() { Rn(hn(this), "click") }.call(t) : zn(t, nn) ? function() { var e = kn(this, jt);
                    un(this, on) ? v.m.left && ie(e) : v.m.right && re(e) }.call(t, e) : zn(t, tn) || null != kn(t, tn) ? function(e) { In(e); var t = sn(qt, kn(this, jt))[0],
                        n = sn(_t, t)[Sn(kn(this, "li"))];
                    Ke(t, n) }.call(t, e) : kn(t, E.menu + " [data-menuanchor]") && function(e) {!sn(E.menu)[0] || !E.lockAnchors && E.anchors.length || (In(e), oe(this.getAttribute("data-menuanchor"))) }.call(t, e) }

            function ce(e, t) { xt["fp_" + e] = t, xt.addEventListener(e, ue, !0) }

            function ue(t) { t.target != xt && ("touchend" === t.type && (z = !1, setTimeout(function() { z = !0 }, 800)), ("mouseenter" !== t.type || z) && E.normalScrollElements.split(",").forEach(function(e) { null != kn(t.target, e) && J(xt["fp_" + t.type]) })) }

            function fe(e, t, n) { var o = 100 * n,
                    r = 100 / n,
                    i = xt.createElement("div");
                i.className = $t, xn(t, i); var l, a, s = xt.createElement("div");
                s.className = Qt, xn(t, s), dn(sn(Gt, e), { width: o + "%" }), 1 < n && (E.controlArrows && (l = e, a = [Nn('<div class="fp-controlArrow fp-prev"></div>'), Nn('<div class="fp-controlArrow fp-next"></div>')], Mn(sn(qt, l)[0], a), "#fff" !== E.controlArrowColor && (dn(sn(ln, l), { "border-color": "transparent transparent transparent " + E.controlArrowColor }), dn(sn(rn, l), { "border-color": "transparent " + E.controlArrowColor + " transparent transparent" })), E.loopHorizontal || bn(sn(rn, l))), E.slidesNavigation && function(e, t) { Ln(Nn('<div class="' + Zt + '"><ul></ul></div>'), e); var n = sn(en, e)[0];
                    yn(n, "fp-" + E.slidesNavPosition); for (var o = 0; o < t; o++) Ln(Nn('<li><a href="#"><span class="fp-sr-only">' + de(o, "Slide") + "</span><span></span></a></li>"), sn("ul", n)[0]);
                    dn(n, { "margin-left": "-" + n.innerWidth / 2 + "px" }), yn(sn("a", sn("li", n)[0]), It) }(e, n)), t.forEach(function(e) { dn(e, { width: r + "%" }), E.verticalCentered && tt(e) }); var c = sn(Kt, e)[0];
                null != c && (0 !== Sn(sn(Nt), jt) || 0 === Sn(sn(Nt), jt) && 0 !== Sn(c)) ? dt(c, "internal") : yn(t[0], It) }

            function de(e, t) { return E.navigationTooltips[e] || E.anchors[e] || t + " " + (e + 1) }

            function ve() { var e, t = sn(Nt)[0];
                yn(t, Rt), Ie(t), Be(t), E.scrollOverflow && E.scrollOverflowHandler.afterLoad(), (!(e = rt(De().section)) || void 0 !== e && Sn(e) === Sn(u)) && Bn(E.afterLoad) && Te("afterLoad", { activeSection: null, element: t, direction: null, anchorLink: t.getAttribute("data-anchor"), sectionIndex: Sn(t, jt) }), Bn(E.afterRender) && Te("afterRender") }

            function pe() { var e, t, n, o, r, i; if (!E.autoScrolling || E.scrollBar) { var l = Cn(),
                        a = (i = N < (r = l) ? "down" : "up", F = N = r, i),
                        s = 0,
                        c = l + fn() / 2,
                        u = L.offsetHeight - fn() === l,
                        f = sn(jt); if (u) s = f.length - 1;
                    else if (l)
                        for (var d = 0; d < f.length; ++d) f[d].offsetTop <= c && (s = d);
                    else s = 0; if (t = a, n = sn(Nt)[0].offsetTop, o = n + fn(), ("up" != t ? n <= Cn() : o >= Cn() + fn()) && (un(sn(Nt)[0], Rt) || (yn(sn(Nt)[0], Rt), En(Hn(sn(Nt)[0]), Rt))), !un(e = f[s], It)) { j = !0; var v, p, h = sn(Nt)[0],
                            g = Sn(h, jt) + 1,
                            m = et(e),
                            S = e.getAttribute("data-anchor"),
                            b = Sn(e, jt) + 1,
                            w = sn(Kt, e)[0],
                            y = { activeSection: h, sectionIndex: b - 1, anchorLink: S, element: e, leavingSection: g, direction: m };
                        w && (p = w.getAttribute("data-anchor"), v = Sn(w)), T && (yn(e, It), En(Hn(e), It), Bn(E.onLeave) && Te("onLeave", y), Bn(E.afterLoad) && Te("afterLoad", y), ze(h), Ie(e), Be(e), Ze(S, b - 1), E.anchors.length && (x = S), at(v, p, S)), clearTimeout(k), k = setTimeout(function() { j = !1 }, 100) }
                    E.fitToSection && (clearTimeout(M), M = setTimeout(function() { E.fitToSection && sn(Nt)[0].offsetHeight <= A && he() }, E.fitToSectionDelay)) } }

            function he() { T && (g = !0, Ae(sn(Nt)[0]), g = !1) }

            function ge(e) { if (v.m[e]) { var t = "down" === e ? te : ee; if (E.scrollOverflow) { var n = E.scrollOverflowHandler.scrollable(sn(Nt)[0]),
                            o = "down" === e ? "bottom" : "top"; if (null != n) { if (!E.scrollOverflowHandler.isScrolled(o, n)) return !0;
                            t() } else t() } else t() } }

            function me(e) { E.autoScrolling && be(e) && v.m.up && In(e) }

            function Se(e) { var t = kn(e.target, jt) || sn(Nt)[0]; if (be(e)) { E.autoScrolling && In(e); var n = ft(e);
                    V = n.y, W = n.x, sn(qt, t).length && Math.abs(D - W) > Math.abs(P - V) ? !a && Math.abs(D - W) > Lt.innerWidth / 100 * E.touchSensitivity && (W < D ? v.m.right && re(t) : v.m.left && ie(t)) : E.autoScrolling && T && Math.abs(P - V) > Lt.innerHeight / 100 * E.touchSensitivity && (V < P ? ge("down") : P < V && ge("up")) } }

            function be(e) { return void 0 === e.pointerType || "mouse" != e.pointerType }

            function we(e) { if (E.fitToSection && (I = !1), be(e)) { var t = ft(e);
                    P = t.y, D = t.x } }

            function ye(e, t) { for (var n = 0, o = e.slice(Math.max(e.length - t, 1)), r = 0; r < o.length; r++) n += o[r]; return Math.ceil(n / t) }

            function Ee(e) { var t = (new Date).getTime(),
                    n = un(sn(".fp-completely")[0], Wt); if (!v.m.down && !v.m.up) return In(e), !1; if (E.autoScrolling && !c && !n) { var o = (e = e || Lt.event).wheelDelta || -e.deltaY || -e.detail,
                        r = Math.max(-1, Math.min(1, o)),
                        i = void 0 !== e.wheelDeltaX || void 0 !== e.deltaX,
                        l = Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta) || Math.abs(e.deltaX) < Math.abs(e.deltaY) || !i;
                    149 < d.length && d.shift(), d.push(Math.abs(o)), E.scrollBar && In(e); var a = t - Y; if (Y = t, 200 < a && (d = []), T) { var s = ye(d, 10);
                        ye(d, 70) <= s && l && ge(r < 0 ? "down" : "up") } return !1 }
                E.fitToSection && (I = !1) }

            function Le(e, t) { var n = null == t ? sn(Nt)[0] : t,
                    o = sn(qt, n)[0]; if (!(null == o || a || sn(_t, o).length < 2)) { var r = sn(Kt, o)[0],
                        i = null; if (null == (i = "left" === e ? vn(r, _t) : pn(r, _t))) { if (!E.loopHorizontal) return; var l = Hn(r);
                        i = "left" === e ? l[l.length - 1] : l[0] }
                    a = !h.test.isTesting, Ke(o, i, e) } }

            function xe() { for (var e = sn(Kt), t = 0; t < e.length; t++) dt(e[t], "internal") }

            function Ae(e, t, n) { if (null != e) { var o, r, i, l, a, s, c, u, f, d = { element: e, callback: t, isMovementUp: n, dtop: (r = (o = e).offsetHeight, i = o.offsetTop, a = F < (l = i), s = l - A + r, c = E.bigSectionsDestination, A < r ? (a || c) && "bottom" !== c || (l = s) : (a || g && null == gn(o)) && (l = s), F = l), yMovement: et(e), anchorLink: e.getAttribute("data-anchor"), sectionIndex: Sn(e, jt), activeSlide: sn(Kt, e)[0], activeSection: sn(Nt)[0], leavingSection: Sn(sn(Nt), jt) + 1, localIsResizing: g }; if (!(d.activeSection == e && !g || E.scrollBar && Cn() === d.dtop && !un(e, Vt))) { if (null != d.activeSlide && (u = d.activeSlide.getAttribute("data-anchor"), f = Sn(d.activeSlide)), !d.localIsResizing) { var v = d.yMovement; if (void 0 !== n && (v = n ? "up" : "down"), d.direction = v, Bn(E.onLeave) && !1 === Te("onLeave", d)) return }
                        E.autoScrolling && E.continuousVertical && void 0 !== d.isMovementUp && (!d.isMovementUp && "up" == d.yMovement || d.isMovementUp && "down" == d.yMovement) && ((p = d).isMovementUp ? On(sn(Nt)[0], Dn(p.activeSection, jt)) : Mn(sn(Nt)[0], Vn(p.activeSection, jt).reverse()), vt(sn(Nt)[0].offsetTop), xe(), p.wrapAroundElements = p.activeSection, p.dtop = p.element.offsetTop, p.yMovement = et(p.element), p.leavingSection = Sn(p.activeSection, jt) + 1, p.sectionIndex = Sn(p.element, jt), d = p), d.localIsResizing || ze(d.activeSection), E.scrollOverflow && E.scrollOverflowHandler.beforeLeave(), yn(e, It), En(Hn(e), It), Ie(e), E.scrollOverflow && E.scrollOverflowHandler.onLeave(), T = h.test.isTesting, at(f, u, d.anchorLink, d.sectionIndex),
                            function(e) { if (E.css3 && E.autoScrolling && !E.scrollBar) { var t = "translate3d(0px, -" + Math.round(e.dtop) + "px, 0px)";
                                    ot(t, !0), E.scrollingSpeed ? (clearTimeout(m), m = setTimeout(function() { Ce(e) }, E.scrollingSpeed)) : Ce(e) } else { var n = Oe(e.dtop);
                                    h.test.top = -e.dtop + "px", St(n.element, n.options, E.scrollingSpeed, function() { E.scrollBar ? setTimeout(function() { Ce(e) }, 30) : Ce(e) }) } }(d), x = d.anchorLink, Ze(d.anchorLink, d.sectionIndex) } } var p }

            function Te(e, t) { var n, o, r, i, l = (o = e, r = t, (i = E.v2compatible ? { afterRender: function() { return [f] }, onLeave: function() { return [r.activeSection, r.leavingSection, r.sectionIndex + 1, r.direction] }, afterLoad: function() { return [r.element, r.anchorLink, r.sectionIndex + 1] }, afterSlideLoad: function() { return [r.destiny, r.anchorLink, r.sectionIndex + 1, r.slideAnchor, r.slideIndex] }, onSlideLeave: function() { return [r.prevSlide, r.anchorLink, r.sectionIndex + 1, r.prevSlideIndex, r.direction, r.slideIndex] } } : { afterRender: function() { return { section: ke(sn(Nt)[0]), slide: Me(sn(Kt, sn(Nt)[0])[0]) } }, onLeave: function() { return { origin: ke(r.activeSection), destination: ke(r.element), direction: r.direction } }, afterLoad: function() { return i.onLeave() }, afterSlideLoad: function() { return { section: ke(r.section), origin: Me(r.prevSlide), destination: Me(r.destiny), direction: r.direction } }, onSlideLeave: function() { return i.afterSlideLoad() } })[o]()); if (E.v2compatible) { if (!1 === E[e].apply(l[0], l.slice(1))) return !1 } else if (Rn(f, e, l), !1 === E[e].apply(l[Object.keys(l)[0]], (n = l, Object.keys(n).map(function(e) { return n[e] })))) return !1; return !0 }

            function ke(e) { return e ? new yt(e) : null }

            function Me(e) { return e ? new Et(e) : null }

            function Oe(e) { var t = {}; return E.autoScrolling && !E.scrollBar ? (t.options = -e, t.element = sn(Tt)[0]) : (t.options = e, t.element = Lt), t }

            function Ce(e) { var t;
                null != (t = e).wrapAroundElements && (t.isMovementUp ? On(sn(jt)[0], t.wrapAroundElements) : Mn(sn(jt)[sn(jt).length - 1], t.wrapAroundElements), vt(sn(Nt)[0].offsetTop), xe()), Bn(E.afterLoad) && !e.localIsResizing && Te("afterLoad", e), E.scrollOverflow && E.scrollOverflowHandler.afterLoad(), e.localIsResizing || Be(e.element), yn(e.element, Rt), En(Hn(e.element), Rt), T = !0, Bn(e.callback) && e.callback() }

            function He(e, t) { e.setAttribute(t, e.getAttribute("data-" + t)), e.removeAttribute("data-" + t) }

            function Ie(e) { E.lazyLoading && sn("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]", je(e)).forEach(function(n) { if (["src", "srcset"].forEach(function(e) { var t = n.getAttribute("data-" + e);
                            null != t && t && He(n, e) }), zn(n, "source")) { var e = kn(n, "video, audio");
                        e && e.load() } }) }

            function Be(e) { var t = je(e);
                sn("video, audio", t).forEach(function(e) { e.hasAttribute("data-autoplay") && "function" == typeof e.play && e.play() }), sn('iframe[src*="youtube.com/embed/"]', t).forEach(function(e) { e.hasAttribute("data-autoplay") && Re(e), e.onload = function() { e.hasAttribute("data-autoplay") && Re(e) } }) }

            function Re(e) { e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*") }

            function ze(e) { var t = je(e);
                sn("video, audio", t).forEach(function(e) { e.hasAttribute("data-keepplaying") || "function" != typeof e.pause || e.pause() }), sn('iframe[src*="youtube.com/embed/"]', t).forEach(function(e) { /youtube\.com\/embed\//.test(e.getAttribute("src")) && !e.hasAttribute("data-keepplaying") && e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*") }) }

            function je(e) { var t = sn(Kt, e); return t.length && (e = t[0]), e }

            function Ne() { var e = De(),
                    t = e.section,
                    n = e.slide;
                t && (E.animateAnchor ? it(t, n) : ne(t, n)) }

            function Pe() { if (!j && !E.lockAnchors) { var e = De(),
                        t = e.section,
                        n = e.slide,
                        o = void 0 === x,
                        r = void 0 === x && void 0 === n && !a;
                    t && t.length && (t && t !== x && !o || r || !a && i != n) && it(t, n) } }

            function De() { var e, t, n = Lt.location.hash; if (n.length) { var o = n.replace("#", "").split("/"),
                        r = -1 < n.indexOf("#/");
                    e = r ? "/" + o[1] : decodeURIComponent(o[0]); var i = r ? o[2] : o[1];
                    i && i.length && (t = decodeURIComponent(i)) } return { section: e, slide: t } }

            function Ve(e) { clearTimeout(b); var t = xt.activeElement,
                    n = e.keyCode;
                9 === n ? function(e) { var t, n, o, r, i, l, a, s = e.shiftKey,
                        c = xt.activeElement,
                        u = Ue(je(sn(Nt)[0]));

                    function f(e) { return In(e), u[0] ? u[0].focus() : null }(t = e, n = Ue(xt), o = n.indexOf(xt.activeElement), r = t.shiftKey ? o - 1 : o + 1, i = n[r], l = Me(kn(i, _t)), a = ke(kn(i, jt)), l || a) && (c ? null == kn(c, Nt + "," + Nt + " " + Kt) && (c = f(e)) : f(e), (!s && c == u[u.length - 1] || s && c == u[0]) && In(e)) }(e) : zn(t, "textarea") || zn(t, "input") || zn(t, "select") || "true" === t.getAttribute("contentEditable") || "" === t.getAttribute("contentEditable") || !E.keyboardScrolling || !E.autoScrolling || (-1 < [40, 38, 32, 33, 34].indexOf(n) && In(e), c = e.ctrlKey, b = setTimeout(function() {! function(e) { var t = e.shiftKey; if (T || !([37, 39].indexOf(e.keyCode) < 0)) switch (e.keyCode) {
                            case 38:
                            case 33:
                                v.k.up && ee(); break;
                            case 32:
                                if (t && v.k.up) { ee(); break }
                            case 40:
                            case 34:
                                v.k.down && te(); break;
                            case 36:
                                v.k.up && oe(1); break;
                            case 35:
                                v.k.down && oe(sn(jt).length); break;
                            case 37:
                                v.k.left && ie(); break;
                            case 39:
                                v.k.right && re() } }(e) }, 150)) }

            function We(e) { t && (c = e.ctrlKey) }

            function Ye(e) { 2 == e.which && (U = e.pageY, f.addEventListener("mousemove", _e)) }

            function Fe(e) { 2 == e.which && f.removeEventListener("mousemove", _e) }

            function Ue(e) { return [].slice.call(sn(O, e)).filter(function(e) { return "-1" !== e.getAttribute("tabindex") && null !== e.offsetParent }) }

            function Xe() { c = t = !1 }

            function _e(e) { T && (e.pageY < U && v.m.up ? ee() : e.pageY > U && v.m.down && te()), U = e.pageY }

            function Ke(e, t, n) { var o, r, i = kn(e, jt),
                    l = { slides: e, destiny: t, direction: n, destinyPos: { left: t.offsetLeft }, slideIndex: Sn(t), section: i, sectionIndex: Sn(i, jt), anchorLink: i.getAttribute("data-anchor"), slidesNav: sn(en, i)[0], slideAnchor: ct(t), prevSlide: sn(Kt, i)[0], prevSlideIndex: Sn(sn(Kt, i)[0]), localIsResizing: g };
                l.xMovement = (o = l.prevSlideIndex, r = l.slideIndex, o == r ? "none" : r < o ? "left" : "right"), l.direction = l.direction ? l.direction : l.xMovement, l.localIsResizing || (T = !1), E.onSlideLeave && !l.localIsResizing && "none" !== l.xMovement && Bn(E.onSlideLeave) && !1 === Te("onSlideLeave", l) ? a = !1 : (yn(t, It), En(Hn(t), It), l.localIsResizing || (ze(l.prevSlide), Ie(t)), !E.loopHorizontal && E.controlArrows && (jn(sn(rn, i), 0 !== l.slideIndex), jn(sn(ln, i), null != gn(t))), un(i, It) && !l.localIsResizing && at(l.slideIndex, l.slideAnchor, l.anchorLink, l.sectionIndex), function(e, t, n) { var o = t.destinyPos; if (E.css3) { var r = "translate3d(-" + Math.round(o.left) + "px, 0px, 0px)";
                        h.test.translate3dH[t.sectionIndex] = r, dn(Ge(sn(Gt, e)), pt(r)), S = setTimeout(function() { n && $e(t) }, E.scrollingSpeed) } else h.test.left[t.sectionIndex] = Math.round(o.left), St(e, Math.round(o.left), E.scrollingSpeed, function() { n && $e(t) }) }(e, l, !0)) }

            function $e(e) { var t, n;
                t = e.slidesNav, n = e.slideIndex, E.slidesNavigation && null != t && (En(sn(Bt, t), It), yn(sn("a", sn("li", t)[n]), It)), e.localIsResizing || (Bn(E.afterSlideLoad) && Te("afterSlideLoad", e), T = !0, Be(e.destiny)), a = !1 }

            function qe() { if (Qe(), o) { var e = xt.activeElement; if (!zn(e, "textarea") && !zn(e, "input") && !zn(e, "select")) { var t = fn();
                        Math.abs(t - X) > 20 * Math.max(X, t) / 100 && (s = setTimeout(function() { le(!0), X = t }, navigator.userAgent.match("CriOS") ? 50 : 0)) } } else clearTimeout(s), s = setTimeout(function() { le(!0) }, 350) }

            function Qe() { var e = E.responsive || E.responsiveWidth,
                    t = E.responsiveHeight,
                    n = e && Lt.innerWidth < e,
                    o = t && Lt.innerHeight < t;
                e && t ? ae(n || o) : e ? ae(n) : t && ae(o) }

            function Ge(e) { var t = "all " + E.scrollingSpeed + "ms " + E.easingcss3; return En(e, Mt), dn(e, { "-webkit-transition": t, transition: t }) }

            function Je(e) { return yn(e, Mt) }

            function Ze(e, t) { var n, o, r;
                n = e, sn(E.menu).forEach(function(e) { E.menu && null != e && (En(sn(Bt, e), It), yn(sn('[data-menuanchor="' + n + '"]', e), It)) }), o = e, r = t, E.navigation && null != sn(Ft)[0] && (En(sn(Bt, sn(Ft)[0]), It), yn(o ? sn('a[href="#' + o + '"]', sn(Ft)[0]) : sn("a", sn("li", sn(Ft)[0])[r]), It)) }

            function et(e) { var t = Sn(sn(Nt)[0], jt),
                    n = Sn(e, jt); return t == n ? "none" : n < t ? "up" : "down" }

            function tt(e) { if (!un(e, Jt)) { var t = xt.createElement("div");
                    t.className = Pt, t.style.height = nt(e) + "px", yn(e, Jt), An(e, t) } }

            function nt(e) { var t = A; if (E.paddingTop || E.paddingBottom) { var n = e;
                    un(n, zt) || (n = kn(e, jt)); var o = parseInt(getComputedStyle(n)["padding-top"]) + parseInt(getComputedStyle(n)["padding-bottom"]);
                    t = A - o } return t }

            function ot(e, t) { t ? Ge(f) : Je(f), dn(f, pt(e)), h.test.translate3d = e, setTimeout(function() { En(f, Mt) }, 10) }

            function rt(e) { var t = sn(jt + '[data-anchor="' + e + '"]', f)[0]; if (!t) { var n = void 0 !== e ? e - 1 : 0;
                    t = sn(jt)[n] } return t }

            function it(e, t) { var n = rt(e); if (null != n) { var o, r, i, l = (null == (i = sn(_t + '[data-anchor="' + (o = t) + '"]', r = n)[0]) && (o = void 0 !== o ? o : 0, i = sn(_t, r)[o]), i);
                    ct(n) === x || un(n, It) ? lt(l) : Ae(n, function() { lt(l) }) } }

            function lt(e) { null != e && Ke(kn(e, qt), e) }

            function at(e, t, n, o) { var r = "";
                E.anchors.length && !E.lockAnchors && (e ? (null != n && (r = n), null == t && (t = e), st(r + "/" + (i = t))) : (null != e && (i = t), st(n))), ut() }

            function st(e) { if (E.recordHistory) location.hash = e;
                else if (o || l) Lt.history.replaceState(void 0, void 0, "#" + e);
                else { var t = Lt.location.href.split("#")[0];
                    Lt.location.replace(t + "#" + e) } }

            function ct(e) { if (!e) return null; var t = e.getAttribute("data-anchor"),
                    n = Sn(e); return null == t && (t = n), t }

            function ut() { var e = sn(Nt)[0],
                    t = sn(Kt, e)[0],
                    n = ct(e),
                    o = ct(t),
                    r = String(n);
                t && (r = r + "-" + o), r = r.replace("/", "-").replace("#", ""); var i = new RegExp("\\b\\s?" + Ht + "-[^\\s]+\\b", "g");
                L.className = L.className.replace(i, ""), yn(L, Ht + "-" + r) }

            function ft(e) { var t = []; return t.y = void 0 !== e.pageY && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY, t.x = void 0 !== e.pageX && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX, l && be(e) && E.scrollBar && void 0 !== e.touches && (t.y = e.touches[0].pageY, t.x = e.touches[0].pageX), t }

            function dt(e, t) { $(0, "internal"), void 0 !== t && (g = !0), Ke(kn(e, qt), e), void 0 !== t && (g = !1), $(B.scrollingSpeed, "internal") }

            function vt(e) { var t = Math.round(e); if (E.css3 && E.autoScrolling && !E.scrollBar) ot("translate3d(0px, -" + t + "px, 0px)", !1);
                else if (E.autoScrolling && !E.scrollBar) dn(f, { top: -t + "px" }), h.test.top = -t + "px";
                else { var n = Oe(t);
                    bt(n.element, n.options) } }

            function pt(e) { return { "-webkit-transform": e, "-moz-transform": e, "-ms-transform": e, transform: e } }

            function ht(t, e, n) { "all" !== e ? v[n][e] = t : Object.keys(v[n]).forEach(function(e) { v[n][e] = t }) }

            function gt(e, t, n) { E[e] = t, "internal" !== n && (B[e] = t) }

            function mt() { var e = E.licenseKey,
                    t = "font-size: 15px;background:yellow;";
                n ? e && e.length < 20 && (console.warn("%c This website was made using fullPage.js slider. More info on the following website:", t), console.warn("%c https://alvarotrigo.com/fullPage/", t)) : (an("error", "Fullpage.js version 3 has changed its license to GPLv3 and it requires a `licenseKey` option. Read about it here:"), an("error", "https://github.com/alvarotrigo/fullPage.js#options.")), un(sn("html"), Ct) ? an("error", "Fullpage.js can only be initialized once and you are doing it multiple times!") : (E.continuousVertical && (E.loopTop || E.loopBottom) && (E.continuousVertical = !1, an("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), !E.scrollOverflow || !E.scrollBar && E.autoScrolling || an("warn", "Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"), !E.continuousVertical || !E.scrollBar && E.autoScrolling || (E.continuousVertical = !1, an("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), E.scrollOverflow && null == E.scrollOverflowHandler && (E.scrollOverflow = !1, an("error", "The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")), ["fadingEffect", "continuousHorizontal", "scrollHorizontally", "interlockedSlides", "resetSliders", "responsiveSlides", "offsetSections", "dragAndMove", "scrollOverflowReset", "parallax", "cards"].forEach(function(e) { E[e] && an("warn", "fullpage.js extensions require fullpage.extensions.min.js file instead of the usual fullpage.js. Requested: " + e) }), E.anchors.forEach(function(t) { var e = [].slice.call(sn("[name]")).filter(function(e) { return e.getAttribute("name") && e.getAttribute("name").toLowerCase() == t.toLowerCase() }),
                        n = [].slice.call(sn("[id]")).filter(function(e) { return e.getAttribute("id") && e.getAttribute("id").toLowerCase() == t.toLowerCase() });
                    (n.length || e.length) && (an("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."), n.length && an("error", '"' + t + '" is is being used by another element `id` property'), e.length && an("error", '"' + t + '" is is being used by another element `name` property')) })) }

            function St(t, n, o, r) { var e, i = (e = t).self != Lt && un(e, $t) ? e.scrollLeft : !E.autoScrolling || E.scrollBar ? Cn() : e.offsetTop,
                    l = n - i,
                    a = 0;
                I = !0; var s = function() { if (I) { var e = n;
                        a += 20, o && (e = Lt.fp_easings[E.easing](a, i, l, o)), bt(t, e), a < o ? setTimeout(s, 20) : void 0 !== r && r() } else a < o && r() };
                s() }

            function bt(e, t) {!E.autoScrolling || E.scrollBar || e.self != Lt && un(e, $t) ? e.self != Lt && un(e, $t) ? e.scrollLeft = t : e.scrollTo(0, t) : e.style.top = t + "px" }

            function wt(e, t) { this.anchor = e.getAttribute("data-anchor"), this.item = e, this.index = Sn(e, t), this.isLast = this.index === e.parentElement.querySelectorAll(t).length - 1, this.isFirst = !this.index }

            function yt(e) { wt.call(this, e, jt) }

            function Et(e) { wt.call(this, e, _t) }
            mt() } }), window.jQuery && window.fullpage && function(t, n) { "use strict";
    t && n ? t.fn.fullpage = function(e) { e.$ = t, new n(this[0], e) } : window.fp_utils.showError("error", "jQuery is required to use the jQuery fullpage adapter!") }(window.jQuery, window.fullpage);