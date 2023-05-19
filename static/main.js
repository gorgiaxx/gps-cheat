(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/cygnus/git/gps_cheat/ui/gps-cheat/src/main.ts */"zUnb");


/***/ }),

/***/ "6i++":
/*!****************************************!*\
  !*** ./src/app/autofocus.directive.ts ***!
  \****************************************/
/*! exports provided: AutofocusDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutofocusDirective", function() { return AutofocusDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AutofocusDirective {
    constructor(el) {
        this.el = el;
        this.focus = true;
    }
    ngOnInit() {
        if (this.focus) {
            window.setTimeout(() => {
                this.el.nativeElement.focus();
            });
        }
    }
    set autofocus(condition) {
        this.focus = condition !== false;
    }
}
AutofocusDirective.ɵfac = function AutofocusDirective_Factory(t) { return new (t || AutofocusDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
AutofocusDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AutofocusDirective, selectors: [["", "autofocus", ""]], inputs: { autofocus: "autofocus" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutofocusDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: "[autofocus]"
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { autofocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "D3KO":
/*!*****************************!*\
  !*** ./src/app/app.menu.ts ***!
  \*****************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/menu */ "Q8cG");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/space */ "4xsP");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _autofocus_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./autofocus.directive */ "6i++");














function MenuComponent_button_26_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_button_26_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.changeTracksName(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.tracksName);
} }
function MenuComponent_input_27_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MenuComponent_input_27_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.tracksName = $event; })("keyup.enter", function MenuComponent_input_27_Template_input_keyup_enter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.saveTracksName(); })("blur", function MenuComponent_input_27_Template_input_blur_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.saveTracksName(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.tracksName);
} }
function MenuComponent_button_38_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_button_38_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.generateFakeLocationFromECEF(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u751F\u6210\u8F68\u8FF9\u4FE1\u53F7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MenuComponent_button_39_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_button_39_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.stopSDRTransmitter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u505C\u6B62\u53D1\u5C04\u4FE1\u53F7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MenuComponent_span_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u5728\u7EBF");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MenuComponent_span_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u79BB\u7EBF");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
// 考虑一下添加的交互，有两种：
// 1. 先点添加，在地图选择起始点，终点，自动寻路，显示路线列表，选择路线
// 2. 点击添加，在座标处选择起始点，终点，选择两点之间的直线，这种属于手动选点
class MenuComponent {
    constructor(nzMessageService) {
        this.nzMessageService = nzMessageService;
        this.showTrackNameInput = false;
        this.switchValue = false;
        this.childEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    addPath() {
        this.childEvent.emit({ method: 'addPath', data: {} });
    }
    realtimeLocation(enable) {
        console.info("realtimeLocation", enable, this.switchValue);
        if (this.SDRonline === false) {
            this.childEvent.emit({ method: 'startRealtimeLocation', data: {} });
        }
        else {
            this.childEvent.emit({ method: 'stopRealtimeLocation', data: {} });
            // this.switchValue = true
        }
    }
    searchTrack() {
        this.childEvent.emit({ method: 'searchTrack', data: {} });
    }
    saveTracksName() {
        this.showTrackNameInput = false;
    }
    saveTracks() {
        this.showTrackNameInput = false;
        if (this.tracksName !== '' && this.tracksName !== '请输入轨迹名') {
            this.childEvent.emit({ method: 'saveTrack', data: this.tracksName });
        }
        else {
            this.nzMessageService.error('轨迹名称错误');
        }
    }
    changeTracksName() {
        this.showTrackNameInput = true;
    }
    saveECEF() {
        this.childEvent.emit({ method: 'saveECEF', data: this.tracksName });
    }
    saveNMEA() {
        this.childEvent.emit({ method: 'saveNMEA', data: this.tracksName });
    }
    showTracksList() {
        this.childEvent.emit({ method: 'showTracksList', data: this.tracksName });
    }
    showLocalTrackFiles() {
        this.childEvent.emit({ method: 'showLocalTrackFiles', data: this.tracksName });
    }
    showSdrSetting() {
        this.childEvent.emit({ method: 'showSdrSetting', data: '' });
    }
    generateFakeLocationFromECEF() {
        this.childEvent.emit({ method: 'generateFakeLocationFromECEF', data: this.tracksName });
    }
    stopSDRTransmitter() {
        this.childEvent.emit({ method: 'stopSDRTransmitter', data: '' });
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_1__["NzMessageService"])); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["menu-component"]], inputs: { SDRonline: "SDRonline", tracksName: "tracksName", SDRTransmitting: "SDRTransmitting" }, outputs: { childEvent: "childEvent" }, decls: 46, vars: 6, consts: [["nz-row", ""], ["nz-col", "", "nzSpan", "12"], ["nz-menu", "", "nzMode", "horizontal"], ["nz-menu-item", "", "nzSelected", "", 3, "click"], ["nz-icon", "", "nzType", "ordered-list", "nzTheme", "outline"], ["nz-menu-item", "", 3, "click"], ["nz-icon", "", "nzType", "heart", "nzTheme", "outline"], ["nz-submenu", "", "nzTitle", "\u7CFB\u7EDF\u8BBE\u7F6E", "nzIcon", "setting"], ["nz-menu-item", "", "nzDisabled", ""], ["nz-submenu", "", "nzTitle", "\u4FDD\u5B58", "nzIcon", "save", "nzTheme", "outline"], ["nz-col", "", "nzSpan", "2", 1, "nav-button"], ["nz-button", "", "nzType", "text", 3, "click", 4, "ngIf"], ["class", "ant-input", "nz-input", "", "placeholder", "\u8BF7\u586B\u5199\u8F68\u8FF9\u540D\u79F0", 3, "autofocus", "ngModel", "ngModelChange", "keyup.enter", "blur", 4, "ngIf"], ["nz-col", "", "nzSpan", "4", 1, "nav-button"], ["nz-button", "", "nzType", "primary", 3, "click"], ["nz-button", "", "nzType", "primary", 3, "click", 4, "ngIf"], ["nz-button", "", "nzType", "primary", "nzDanger", "", 3, "click", 4, "ngIf"], ["style", " color: #01bd01;", 4, "ngIf"], ["style", " color: #bd0101;", 4, "ngIf"], ["nz-button", "", "nzType", "text", 3, "click"], ["nz-input", "", "placeholder", "\u8BF7\u586B\u5199\u8F68\u8FF9\u540D\u79F0", 1, "ant-input", 3, "autofocus", "ngModel", "ngModelChange", "keyup.enter", "blur"], ["nz-button", "", "nzType", "primary", "nzDanger", "", 3, "click"], [2, "color", "#01bd01"], [2, "color", "#bd0101"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_li_click_3_listener() { return ctx.showTracksList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \u8DEF\u5F84\u961F\u5217 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_li_click_6_listener() { return ctx.showLocalTrackFiles(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u5DF2\u5B58\u8F68\u8FF9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u9ED8\u8BA4\u8F68\u8FF9\u53C2\u6570\u8BBE\u7F6E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_li_click_13_listener() { return ctx.showSdrSetting(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u65E0\u7EBF\u7535\u53C2\u6570\u8BBE\u7F6E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u7F51\u7EDC\u8BBE\u7F6E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_li_click_19_listener() { return ctx.saveTracks(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u4FDD\u5B58\u5F53\u524D\u961F\u5217\u5230\u7CFB\u7EDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_li_click_21_listener() { return ctx.saveNMEA(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u4FDD\u5B58\u4E3ANMEA\u683C\u5F0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_li_click_23_listener() { return ctx.saveECEF(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u4FDD\u5B58\u4E3AECEF\u683C\u5F0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, MenuComponent_button_26_Template, 2, 1, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, MenuComponent_input_27_Template, 1, 1, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "nz-space");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_button_click_32_listener() { return ctx.searchTrack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u81EA\u52A8\u5BFB\u8DEF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_button_click_35_listener() { return ctx.addPath(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u6DFB\u52A0\u8DEF\u5F84");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, MenuComponent_button_38_Template, 2, 0, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, MenuComponent_button_39_Template, 2, 0, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "nz-space");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, MenuComponent_span_44_Template, 2, 0, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, MenuComponent_span_45_Template, 2, 0, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showTrackNameInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showTrackNameInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.SDRTransmitting);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.SDRTransmitting);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.SDRonline);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.SDRonline);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzColDirective"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_3__["NzMenuDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_3__["NzMenuItemDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconDirective"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_3__["NzSubMenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_7__["NzSpaceComponent"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_7__["NzSpaceItemComponent"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_9__["NzWaveDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _autofocus_directive__WEBPACK_IMPORTED_MODULE_12__["AutofocusDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'menu-component',
                templateUrl: './app.menu.html',
            }]
    }], function () { return [{ type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_1__["NzMessageService"] }]; }, { SDRonline: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], tracksName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], SDRTransmitting: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], childEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "SGxG":
/*!**************************************!*\
  !*** ./src/app/websocket.service.ts ***!
  \**************************************/
/*! exports provided: WebsocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsocketService", function() { return WebsocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



'';
class WebsocketService {
    constructor() { }
    // 返回一个可观测的流，包括服务器返回的消息
    createObservableSocket(url) {
        this.ws = new WebSocket(url);
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](observer => {
            this.ws.onmessage = (event) => observer.next(event.data);
            this.ws.onerror = (event) => observer.error(event);
            this.ws.onclose = (event) => observer.complete();
        });
    }
    // 向服务器端发送消息
    sendMessage(message) {
        this.ws.send(JSON.stringify(message));
    }
}
WebsocketService.ɵfac = function WebsocketService_Factory(t) { return new (t || WebsocketService)(); };
WebsocketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WebsocketService, factory: WebsocketService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebsocketService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "VyMb":
/*!**************************************!*\
  !*** ./src/app/sdr/sdr.component.ts ***!
  \**************************************/
/*! exports provided: SdrComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SdrComponent", function() { return SdrComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/space */ "4xsP");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ "0lU3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "nJia");











function SdrComponent_ng_container_1_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 15);
} }
function SdrComponent_ng_container_1_ng_template_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 16);
} }
function SdrComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-space", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-space-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "GPS\u65F6\u95F4(\u9ED8\u8BA4\u7559\u7A7A)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nz-date-picker", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SdrComponent_ng_container_1_Template_nz_date_picker_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.gps_time = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nz-space-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u91C7\u6837\u7387");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "nz-input-group", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SdrComponent_ng_container_1_Template_input_ngModelChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.sampleRate = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, SdrComponent_ng_container_1_ng_template_20_Template, 1, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "nz-space-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u5E26\u5BBD");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "nz-input-group", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SdrComponent_ng_container_1_Template_input_ngModelChange_30_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.bandwidth = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, SdrComponent_ng_container_1_ng_template_31_Template, 1, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzAllowClear", true)("ngModel", ctx_r0.gps_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSuffix", _r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.sampleRate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSuffix", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.bandwidth);
} }
class SdrComponent {
    constructor() {
        this.gps_time = null;
        this.sampleRate = 2600000;
        this.bandwidth = 2500000;
        this.childEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    handleOk() {
        this.isVisible = false;
        this.childEvent.emit({
            method: 'saveSdrConf',
            data: {
                gps_time: this.gps_time,
                sampleRate: this.sampleRate,
                bandwidth: this.bandwidth
            }
        });
    }
    handleCancel() {
        this.isVisible = false;
        this.childEvent.emit({
            method: 'cancel',
            data: {}
        });
    }
}
SdrComponent.ɵfac = function SdrComponent_Factory(t) { return new (t || SdrComponent)(); };
SdrComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SdrComponent, selectors: [["app-sdr"]], inputs: { isVisible: "isVisible" }, outputs: { childEvent: "childEvent" }, decls: 2, vars: 1, consts: [["nzTitle", "\u65E0\u7EBF\u7535\u53C2\u6570\u8BBE\u7F6E", 3, "nzVisible", "nzVisibleChange", "nzOnCancel", "nzOnOk"], [4, "nzModalContent"], ["nzDirection", "vertical"], ["nz-row", ""], ["nz-col", "", "nzSpan", "2"], ["nz-col", "", "nzSpan", "10"], ["nz-col", "", "nzSpan", "8"], ["nzShowTime", "", "nzFormat", "yyyy-MM-dd HH:mm:ss", 2, "width", "180px", 3, "nzAllowClear", "ngModel", "ngModelChange"], ["nz-col", "", "nzSpan", "4"], ["nz-col", "", "nzSpan", "12"], [3, "nzSuffix"], ["type", "number", "nz-input", "", "placeholder", "\u8BF7\u8F93\u5165\u91C7\u6837\u7387", "width", "600", 3, "ngModel", "ngModelChange"], ["sampleRateTemplate", ""], ["type", "number", "nz-input", "", "placeholder", "\u8BF7\u8F93\u5165\u5E26\u5BBD", "width", "600", 3, "ngModel", "ngModelChange"], ["bandwidthTemplate", ""], ["nz-icon", "", "nz-tooltip", "", "nzTooltipTitle", "GPS\u91C7\u6837\u7387\uFF0C\u63A8\u83502.6M", "nzType", "info-circle"], ["nz-icon", "", "nz-tooltip", "", "nzTooltipTitle", "GPS\u5E26\u5BBD\uFF0C\u6BD4\u91C7\u6837\u7387\u5C0F", "nzType", "info-circle"]], template: function SdrComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-modal", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzVisibleChange", function SdrComponent_Template_nz_modal_nzVisibleChange_0_listener($event) { return ctx.isVisible = $event; })("nzOnCancel", function SdrComponent_Template_nz_modal_nzOnCancel_0_listener() { return ctx.handleCancel(); })("nzOnOk", function SdrComponent_Template_nz_modal_nzOnOk_0_listener() { return ctx.handleOk(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SdrComponent_ng_container_1_Template, 33, 6, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzVisible", ctx.isVisible);
    } }, directives: [ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_1__["NzModalComponent"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_1__["NzModalContentDirective"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_2__["NzSpaceComponent"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_2__["NzSpaceItemComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzColDirective"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_4__["NzDatePickerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__["ɵNzTransitionPatchDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__["NzInputGroupComponent"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__["NzInputGroupWhitSuffixOrPrefixDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__["NzIconDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_9__["NzTooltipDirective"]], styles: [""] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SdrComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sdr',
                templateUrl: './sdr.component.html',
                styleUrls: ['./sdr.component.css']
            }]
    }], function () { return []; }, { childEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], isVisible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Y01n":
/*!****************************!*\
  !*** ./src/app/app.map.ts ***!
  \****************************/
/*! exports provided: AppMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMap", function() { return AppMap; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! file-saver */ "Iab2");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _websocket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./websocket.service */ "SGxG");
/* harmony import */ var _coordtransform_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./coordtransform.service */ "sJYD");
/* harmony import */ var _app_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.menu */ "D3KO");
/* harmony import */ var _app_advanced__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.advanced */ "v4U5");
/* harmony import */ var _sdr_sdr_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sdr/sdr.component */ "VyMb");
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/tag */ "ZyQt");
/* harmony import */ var ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/popover */ "+oEP");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/popconfirm */ "KupA");
/* harmony import */ var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/empty */ "QlLE");
/* harmony import */ var _location_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./location.pipe */ "lwqm");


























function AppMap_ng_container_12_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppMap_ng_container_12_ng_template_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const track_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.addTrackFromDirection(track_r7.list); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u6DFB\u52A0\u6B64\u8DEF\u7EBF\u5230\u8DEF\u5F84\u961F\u5217");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppMap_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-tag", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppMap_ng_container_12_Template_nz_tag_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const track_r7 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.showDirectionTrack(track_r7.list); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppMap_ng_container_12_ng_template_3_Template, 2, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const track_r7 = ctx.$implicit;
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzColor", "#108ee9")("nzPopoverContent", _r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](track_r7.name);
} }
function AppMap_ng_container_13_nz_table_1_tr_16_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "location");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppMap_ng_container_13_nz_table_1_tr_16_ng_container_3_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const data_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r21.copyToClipboard(data_r17.start_location.lng + ", " + data_r17.start_location.lat); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "location");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppMap_ng_container_13_nz_table_1_tr_16_ng_container_3_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const data_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r24.copyToClipboard(data_r17.end_location.lng + ", " + data_r17.end_location.lat); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppMap_ng_container_13_nz_table_1_tr_16_ng_container_3_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const data_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r26.editPath(data_r17.order); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u7F16\u8F91");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppMap_ng_container_13_nz_table_1_tr_16_ng_container_3_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const data_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return _r0.showModal(data_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u9AD8\u7EA7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppMap_ng_container_13_nz_table_1_tr_16_ng_container_3_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const data_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r30.deletePath(data_r17.order); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u5220\u9664");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, data_r17.start_location), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 4, data_r17.end_location), " ");
} }
function AppMap_ng_container_13_nz_table_1_tr_16_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-input-group", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppMap_ng_container_13_nz_table_1_tr_16_ng_template_4_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const data_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r33.editCache[data_r17.order].data.start_location.lng = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppMap_ng_container_13_nz_table_1_tr_16_ng_template_4_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const data_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r36.editCache[data_r17.order].data.start_location.lat = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppMap_ng_container_13_nz_table_1_tr_16_ng_template_4_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const data_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r38.selectStartLocation(data_r17.order); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u9009\u70B9");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nz-input-group", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppMap_ng_container_13_nz_table_1_tr_16_ng_template_4_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const data_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r40.editCache[data_r17.order].data.end_location.lng = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppMap_ng_container_13_nz_table_1_tr_16_ng_template_4_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const data_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r42.editCache[data_r17.order].data.end_location.lat = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppMap_ng_container_13_nz_table_1_tr_16_ng_template_4_Template_a_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const data_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r44.selectEndLocation(data_r17.order); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u9009\u70B9");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppMap_ng_container_13_nz_table_1_tr_16_ng_template_4_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const data_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r46.saveEditPath(data_r17.order); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u4FDD\u5B58");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOnConfirm", function AppMap_ng_container_13_nz_table_1_tr_16_ng_template_4_Template_button_nzOnConfirm_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const data_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r48.cancelEditPath(data_r17.order); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u53D6\u6D88\u7F16\u8F91");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r20.editCache[data_r17.order].data.start_location.lng);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r20.editCache[data_r17.order].data.start_location.lat);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r20.editCache[data_r17.order].data.end_location.lng);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r20.editCache[data_r17.order].data.end_location.lat);
} }
function AppMap_ng_container_13_nz_table_1_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppMap_ng_container_13_nz_table_1_tr_16_ng_container_3_Template, 18, 6, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppMap_ng_container_13_nz_table_1_tr_16_ng_template_4_Template, 19, 4, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r17 = ctx.$implicit;
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r17.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r16.editCache[data_r17.order].edit)("ngIfElse", _r19);
} }
const _c0 = function () { return { y: "250px" }; };
function AppMap_ng_container_13_nz_table_1_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-table", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u987A\u5E8F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u8D77\u59CB\u5EA7\u6807 (\u7ECF\u5EA6\uFF0C\u7EAC\u5EA6)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u7ED3\u675F\u5EA7\u6807 (\u7ECF\u5EA6\uFF0C\u7EAC\u5EA6)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u64CD\u4F5C\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppMap_ng_container_13_nz_table_1_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return _r0.showModal(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u9AD8\u7EA7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppMap_ng_container_13_nz_table_1_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r53.listOfData = []; return ctx_r53.reflushPathOrder(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u5220\u9664");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tbody", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function AppMap_ng_container_13_nz_table_1_Template_tbody_cdkDropListDropped_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r54.dropPath($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AppMap_ng_container_13_nz_table_1_tr_16_Template, 6, 3, "tr", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0))("nzData", ctx_r15.listOfData);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r15.listOfData);
} }
function AppMap_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppMap_ng_container_13_nz_table_1_Template, 17, 4, "nz-table", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.listOfData.length > 0)("ngIfElse", _r5);
} }
function AppMap_ng_container_14_nz_table_1_tr_14_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppMap_ng_container_14_nz_table_1_tr_14_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const data_r57 = ctx.$implicit; const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r58.selectTrack(data_r57.file_name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u9009\u62E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOnConfirm", function AppMap_ng_container_14_nz_table_1_tr_14_Template_button_nzOnConfirm_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const data_r57 = ctx.$implicit; const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r60.deleteTrack(data_r57.file_name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u5220\u9664");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r57 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r57.file_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 3, data_r57.modify_time, "yyyy-MM-dd HH:mm:ss"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r57.file_size);
} }
function AppMap_ng_container_14_nz_table_1_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-table", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u6587\u4EF6\u540D\u79F0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u4FEE\u6539\u65E5\u671F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u6587\u4EF6\u5927\u5C0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u64CD\u4F5C\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppMap_ng_container_14_nz_table_1_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r61.trackFilesList = []; return ctx_r61.deleteAllTracks(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u6279\u91CF\u5220\u9664");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AppMap_ng_container_14_nz_table_1_tr_14_Template, 13, 6, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0))("nzData", ctx_r55.trackFilesList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r55.trackFilesList);
} }
function AppMap_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppMap_ng_container_14_nz_table_1_Template, 15, 4, "nz-table", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.trackFilesList.length > 0)("ngIfElse", _r5);
} }
function AppMap_ng_template_15_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u5217\u8868\u4E3A\u7A7A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppMap_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-empty", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppMap_ng_template_15_ng_template_2_Template, 2, 0, "ng-template", null, 40, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzNotFoundContent", _r63)("nzNotFoundFooter", ctx_r6.footerTpl);
} }
class AppMap {
    constructor(nzMessageService, httpClient, ws, coordtransform) {
        this.nzMessageService = nzMessageService;
        this.httpClient = httpClient;
        this.ws = ws;
        this.coordtransform = coordtransform;
        this.title = 'gps-cheat';
        this.data = [];
        this.isVisible = false;
        this.listOfData = [];
        this.editCache = {};
        this.selectStartLocationFlag = false;
        this.selectStartLocationOrder = 0;
        this.selectEndLocationFlag = false;
        this.selectEndLocationOrder = 0;
        this.currentLng = 116.404;
        this.currentLat = 39.915;
        this.trackList = [];
        this.tracksName = '请输入轨迹名';
        this.showLocalTrackFiles = false;
        this.trackFilesList = [];
    }
    // constructor() { }
    ngOnInit() {
        // ak 34430619c31d50da34793e0df057d60b
        // work 116.498125,39.989547
        // home 116.558646,40.014718
        //@ts-ignore
        this.map = new BMapGL.Map("container");
        this.map.setMapStyleV2({
            styleId: '5438f5e231cf7de5fd6874458f20b742'
        });
        this.map.addEventListener('click', this.handleMapClick(this));
        this.map.addEventListener('mousemove', this.handleMapMouseMove(this));
        //@ts-ignore
        this.map.addControl(new BMapGL.ScaleControl());
        //@ts-ignore
        this.map.addControl(new BMapGL.ZoomControl());
        //@ts-ignore
        this.map.centerAndZoom(new BMapGL.Point(116.404, 39.915), 12);
        this.map.enableScrollWheelZoom(true);
        // //@ts-ignore
        // var p1 = new BMapGL.Point(116.301934, 39.977552)
        // //@ts-ignore
        // var p2 = new BMapGL.Point(116.508328, 39.919141)
        // //@ts-ignore
        // var driving = new BMapGL.DrivingRoute(this.map, { renderOptions: { map: this.map, autoViewport: true } })
        // driving.search(p1, p2)
        //@ts-ignore
        let menu = new BMapGL.ContextMenu();
        let txtMenuItem = [
            {
                text: '设为起点',
                callback: this.setTrackStartLocation(this)
            }, {
                text: '设为终点',
                callback: this.setTrackEndLocation(this)
            }, {
                text: '实时定位',
                callback: this.setRealtimeLocation(this)
            }, {
                text: '取消位置标记',
                callback: this.clearTrackLocation(this)
            }
        ];
        for (let i = 0; i < txtMenuItem.length; i++) {
            //@ts-ignore
            menu.addItem(new BMapGL.MenuItem(txtMenuItem[i].text, txtMenuItem[i].callback, 100));
        }
        //@ts-ignore
        this.map.addContextMenu(menu);
        //@ts-ignore
        this.locationStart = new BMapGL.Icon("assets/pin-green-48.png", new BMapGL.Size(48, 48));
        //@ts-ignore
        this.locationEnd = new BMapGL.Icon("assets/pin-red-48.png", new BMapGL.Size(48, 48));
        //@ts-ignore
        this.locationRealtime = new BMapGL.Icon("assets/pin-blue-48.png", new BMapGL.Size(48, 48));
        const temp = [];
        this.trackStartLocation = {
            lng: 0,
            lat: 0
        };
        this.trackEndLocation = {
            lng: 0,
            lat: 0
        };
        this.realtimeLocation = {
            lng: 0,
            lat: 0
        };
        this.listOfData = temp;
        this.drawTrack();
        this.updateEditCache();
        this.getSDRStatus();
        document.getElementsByClassName("anchorBL")[0].remove();
    }
    showModal() {
        this.isVisible = true;
    }
    handleOk() {
        console.log('Button ok clicked!');
        this.isVisible = false;
    }
    handleCancel() {
        console.log('Button cancel clicked!');
        this.isVisible = false;
    }
    copyToClipboard(text) {
        var txtArea = document.createElement("textarea");
        txtArea.id = 'txt';
        txtArea.style.position = 'fixed';
        txtArea.style.top = '0';
        txtArea.style.left = '0';
        txtArea.style.opacity = '0';
        txtArea.value = text;
        document.body.appendChild(txtArea);
        txtArea.select();
        try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
            console.log('Copying text command was ' + msg);
            if (successful) {
                this.nzMessageService.success("已复制到剪贴板");
                return true;
            }
        }
        catch (err) {
            console.log('Oops, unable to copy');
        }
        finally {
            document.body.removeChild(txtArea);
        }
        this.nzMessageService.error("复制失败");
        return false;
    }
    selectStartLocation(order) {
        const index = this.listOfData.findIndex(d => d.order === order);
        let a = this.editCache[order].data.start_location.lng + ', ' + this.editCache[order].data.start_location.lat;
        // console.info('selectStartLocationValue', a)
        this.selectStartLocationFlag = true;
        this.selectStartLocationOrder = order;
        // console.info('selectStartLocationOrder', order)
    }
    selectEndLocation(order) {
        const index = this.listOfData.findIndex(d => d.order === order);
        let a = this.editCache[order].data.end_location.lng + ', ' + this.editCache[order].data.end_location.lat;
        // console.info('selectEndLocationValue', a)
        this.selectEndLocationFlag = true;
        this.selectEndLocationOrder = order;
        // console.info('selectEndLocationOrder', order)
    }
    updateEditCache() {
        this.editCache = {};
        this.listOfData.forEach(item => {
            this.editCache[item.order] = {
                edit: false,
                data: Object.assign({}, item)
            };
        });
    }
    saveDate(order) {
        let begin_time = new Date(this.editCache[order].data.begin_time);
        this.editCache[order].data.begin_time = Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(begin_time, 'yyyy-MM-dd HH:mm:ss', 'en-US');
    }
    getSDRStatus() {
        let that = this;
        // SDR Status
        this.SDRStatusInterval = setInterval(function () {
            that.httpClient.get('/api/sdr', { responseType: "json" }).subscribe({
                complete: () => { },
                error: err => console.error(err),
                next: d => {
                    that.SDRonline = d.online;
                    that.SDRTransmitting = d.transmitting;
                }
            });
        }, 1000);
    }
    sdrEventHandler(msg) {
        if (msg.method === 'cancel') {
            this.sdrSettingIsVisible = false;
        }
        else if (msg.method === 'saveSdrConf') {
            this.sdrSettingIsVisible = false;
            console.log(msg.data);
            msg.data.gps_time = Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(msg.data.gps_time, 'yyyy-MM-dd HH:mm:ss', 'en-US');
            this.httpClient.post('/api/sdrConfig', msg.data, { responseType: "json" }).subscribe({
                complete: () => { },
                error: err => console.error(err),
                next: d => {
                    this.nzMessageService.success('保存成功！');
                    // let blob = new Blob([JSON.stringify(d)], { type: "application/json;charset=utf-8" })
                    // saveAs(blob, msg.data)
                }
            });
        }
    }
    advancedEventHandler(msg) {
        if (msg.method === 'saveConf') {
            const index = this.listOfData.findIndex(d => d.order === msg.data.order);
            Object.assign(this.listOfData[index].motion_conf, msg.data.motion);
            this.nzMessageService.success("序号" + msg.data.order + "已保存");
        }
        else if (msg.method === 'saveAllConf') {
            for (let i = 0; i < this.listOfData.length; i++) {
                Object.assign(this.listOfData[i].motion_conf, msg.data);
            }
        }
    }
    menuEventHandler(msg) {
        if (msg.method === 'addPath') {
            this.addPath();
        }
        else if (msg.method === 'showTracksList') {
            this.showLocalTrackFiles = false;
        }
        else if (msg.method === 'showSdrSetting') {
            this.sdrSettingIsVisible = true;
        }
        else if (msg.method === 'showLocalTrackFiles') {
            this.getLocalTracks();
            this.showLocalTrackFiles = true;
        }
        else if (msg.method === 'searchTrack') {
            this.httpClient.post('/api/driving-direction', { origin: this.trackStartLocation.lat + ',' + this.trackStartLocation.lng, destination: this.trackEndLocation.lat + ',' + this.trackEndLocation.lng }, { responseType: "json" }).subscribe({
                complete: () => {
                    console.log('completed');
                },
                error: err => console.error(err),
                next: d => {
                    this.trackList = [];
                    d.result.routes.forEach(route => {
                        let pathList = [this.trackStartLocation.lng + ',' + this.trackStartLocation.lat];
                        let newPathList = [];
                        let lastPoint = '';
                        route.steps.forEach(step => {
                            let tempPath = step.path.split(';');
                            if (tempPath[0] === lastPoint) {
                                pathList.pop();
                            }
                            lastPoint = tempPath[tempPath.length - 1];
                            pathList = pathList.concat(tempPath);
                        });
                        pathList.forEach(path => {
                            let lnglat = path.split(',');
                            newPathList.push({
                                lng: parseFloat(lnglat[0]),
                                lat: parseFloat(lnglat[1])
                            });
                        });
                        this.trackList.push({
                            name: route.tag,
                            distance: route.distance,
                            duration: route.duration,
                            list: newPathList
                        });
                    });
                    // console.info('trackList', this.trackList)
                }
            });
        }
        else if (msg.method === 'saveTrack') {
            this.httpClient.post('/api/track', { name: msg.data, data: this.listOfData }, { responseType: "json" }).subscribe({
                complete: () => { },
                error: err => console.error(err),
                next: d => {
                    this.nzMessageService.success('保存成功！');
                    // let blob = new Blob([JSON.stringify(d)], { type: "application/json;charset=utf-8" })
                    // saveAs(blob, msg.data)
                }
            });
        }
        else if (msg.method === 'saveECEF') {
            this.httpClient.post('/api/save-ECEF', { name: msg.data, data: this.listOfData }, {}).subscribe({
                complete: () => { },
                error: err => console.error(err),
                next: d => {
                    let blob = new Blob([d], { type: "text/txt;charset=utf-8" });
                    Object(file_saver__WEBPACK_IMPORTED_MODULE_3__["saveAs"])(blob, msg.data + ".ecef");
                }
            });
        }
        else if (msg.method === 'saveNMEA') {
            this.httpClient.post('/api/save-NMEA', { name: msg.data, data: this.listOfData }, {}).subscribe({
                complete: () => { },
                error: err => console.error(err),
                next: d => {
                    let blob = new Blob([d], { type: "text/txt;charset=utf-8" });
                    Object(file_saver__WEBPACK_IMPORTED_MODULE_3__["saveAs"])(blob, msg.data + ".nmea");
                }
            });
        }
        else if (msg.method === 'generateFakeLocationFromECEF') {
            this.httpClient.post('/api/save-NMEA-on-server', { name: msg.data, data: this.listOfData }, {}).subscribe({
                complete: () => { },
                error: err => console.error(err),
                next: d => {
                    this.startFakeLocationFromECEF(msg.data);
                }
            });
        }
        else if (msg.method === 'stopSDRTransmitter') {
            this.httpClient.request('put', '/api/sdr', {}).subscribe({
                complete: () => { },
                error: err => console.error(err),
                next: d => {
                    this.SDRTransmitting = false;
                }
            });
        }
    }
    syncLocation() {
        if (this.SDRonline) {
            let coord = this.coordtransform.bd09towgs84({ lng: this.realtimeLocation.lng, lat: this.realtimeLocation.lat });
            // console.log(this.realtimeLocation.lng, this.realtimeLocation.lat)
            // console.log(coord.lng, coord.lat)
            this.httpClient.post('/api/sdr', { lng: parseFloat(Number(coord.lng).toFixed(6)), lat: parseFloat(Number(coord.lat).toFixed(6)), h: 100 }, { responseType: "json" }).subscribe({
                complete: () => { },
                error: err => console.error(err),
                next: d => {
                    console.info('status', d.status);
                    if (d.status === 'ok') {
                        this.SDRTransmitting = true;
                    }
                    else {
                        this.nzMessageService.error("请连接SDR");
                    }
                }
            });
        }
        else {
            this.nzMessageService.error("请连接SDR");
        }
    }
    startFakeLocationFromECEF(name) {
        if (this.SDRonline) {
            this.httpClient.post('/api/sdr', { name: this.tracksName, realtime: true }, { responseType: "json" }).subscribe({
                complete: () => { },
                error: err => console.error(err),
                next: d => {
                    console.info('status', d.status);
                    if (d.status === 'ok') {
                        this.SDRTransmitting = true;
                    }
                    else {
                        this.nzMessageService.error("请连接SDR");
                    }
                }
            });
        }
        else {
            this.nzMessageService.error("请连接SDR");
        }
    }
    showDirectionTrack(route) {
        let allOverlay = this.map.getOverlays();
        allOverlay.map(item => {
            if (item.name === 'routePolylines') {
                this.map.removeOverlay(item);
            }
        });
        let pointList = [];
        route.forEach(item => {
            // @ts-ignore
            pointList.push(new BMapGL.Point(item.lng, item.lat));
        });
        // @ts-ignore
        let polyline = new BMapGL.Polyline(pointList, {
            strokeColor: 'blue',
            strokeWeight: 3,
            strokeOpacity: 0.5
        });
        polyline.name = 'routePolylines';
        this.map.addOverlay(polyline);
        let viewport = this.map.getViewport(pointList);
        this.map.centerAndZoom(viewport.center, viewport.zoom);
    }
    addTrackFromDirection(route) {
        for (let index = 0; index < route.length; index++) {
            // console.info('lng', route[index].lng, 'lat', route[index].lat)
            if (index + 1 === route.length) {
                break;
            }
            else {
                let item = {
                    order: 999,
                    begin_time: "2021-01-04 12:00:00",
                    distance: 0,
                    duration: 0,
                    speed: 0,
                    start_location: {
                        lng: route[index].lng,
                        lat: route[index].lat
                    },
                    end_location: {
                        lng: route[index + 1].lng,
                        lat: route[index + 1].lat
                    },
                    motion_conf: {
                        maxLongAcc: 6.95,
                        maxLatAcc: 6.95,
                        maxJerk: 5,
                        maxSpeed: 27.8,
                        stationaryPeriod: 5,
                        stationaryPeriodEnd: 5,
                        positionSmoothingFactor: 5,
                        speedSmoothingFactor: 6,
                        speedChangeList: [{
                                id: 1,
                                angleStart: 180,
                                angleEnd: 150,
                                speedDecayRate: 1,
                                acc: 10,
                                jerk: 10
                            }, {
                                id: 2,
                                angleStart: 150,
                                angleEnd: 130,
                                speedDecayRate: 0.5,
                                acc: 10,
                                jerk: 10
                            }, {
                                id: 3,
                                angleStart: 130,
                                angleEnd: 120,
                                speedDecayRate: 0.4,
                                acc: 10,
                                jerk: 10
                            }, {
                                id: 4,
                                angleStart: 120,
                                angleEnd: 110,
                                speedDecayRate: 0.2,
                                acc: 10,
                                jerk: 10
                            }, {
                                id: 5,
                                angleStart: 110,
                                angleEnd: 100,
                                speedDecayRate: 0.15,
                                acc: 10,
                                jerk: 10,
                            }, {
                                id: 6,
                                angleStart: 100,
                                angleEnd: 90,
                                speedDecayRate: 0.1,
                                acc: 10,
                                jerk: 10,
                            }, {
                                id: 7,
                                angleStart: 90,
                                angleEnd: 0,
                                speedDecayRate: 0,
                                acc: 10,
                                jerk: 10,
                            }]
                    }
                };
                this.listOfData = [
                    ...this.listOfData,
                    item
                ];
            }
        }
        let allOverlay = this.map.getOverlays();
        allOverlay.map(item => {
            if (item.name === 'routePolylines') {
                this.map.removeOverlay(item);
            }
        });
        this.reflushPathOrder();
    }
    addPath() {
        let item = {
            order: 999,
            begin_time: "2021-01-04 12:00:00",
            distance: 0,
            duration: 0,
            speed: 0,
            start_location: {
                lng: this.trackStartLocation.lng,
                lat: this.trackStartLocation.lat
            },
            end_location: {
                lng: this.trackEndLocation.lng,
                lat: this.trackEndLocation.lat
            },
            motion_conf: {
                maxLongAcc: 5,
                maxLatAcc: 5,
                maxJerk: 5,
                maxSpeed: 5,
                stationaryPeriod: 5,
                stationaryPeriodEnd: 5,
                positionSmoothingFactor: 5,
                speedSmoothingFactor: 5,
                speedChangeList: [{
                        id: 1,
                        angleStart: 180,
                        angleEnd: 150,
                        speedDecayRate: 1,
                        acc: 10,
                        jerk: 10
                    }, {
                        id: 2,
                        angleStart: 150,
                        angleEnd: 130,
                        speedDecayRate: 0.5,
                        acc: 10,
                        jerk: 10
                    }, {
                        id: 3,
                        angleStart: 130,
                        angleEnd: 120,
                        speedDecayRate: 0.4,
                        acc: 10,
                        jerk: 10
                    }, {
                        id: 4,
                        angleStart: 120,
                        angleEnd: 110,
                        speedDecayRate: 0.2,
                        acc: 10,
                        jerk: 10
                    }, {
                        id: 5,
                        angleStart: 110,
                        angleEnd: 100,
                        speedDecayRate: 0.15,
                        acc: 10,
                        jerk: 10,
                    }, {
                        id: 6,
                        angleStart: 100,
                        angleEnd: 90,
                        speedDecayRate: 0.1,
                        acc: 10,
                        jerk: 10,
                    }, {
                        id: 7,
                        angleStart: 90,
                        angleEnd: 0,
                        speedDecayRate: 0,
                        acc: 10,
                        jerk: 10,
                    }]
            }
        };
        this.listOfData = [
            ...this.listOfData,
            item
        ];
        this.reflushPathOrder();
        if ((this.trackStartLocation.lng === 0 && this.trackStartLocation.lat === 0) || (this.trackEndLocation.lng === 0 && this.trackEndLocation.lat === 0)) {
        }
        let allOverlay = this.map.getOverlays();
        allOverlay.map(item => {
            if (item.name === 'trackEndLocation') {
                item.removeEventListener('dragend', this.handleTrackEndPinDrag(this));
                this.map.removeOverlay(item);
            }
            else if (item.name === 'trackStartLocation') {
                item.removeEventListener('dragend', this.handleTrackStartPinDrag(this));
                this.map.removeOverlay(item);
            }
        });
        this.trackStartLocation.lng = this.trackEndLocation.lng;
        this.trackStartLocation.lat = this.trackEndLocation.lat;
        console.info(this.trackStartLocation.lng, this.trackStartLocation.lat);
        // @ts-ignore
        let pt = new BMapGL.Point(this.trackStartLocation.lng, this.trackStartLocation.lat);
        // @ts-ignore
        let marker = new BMapGL.Marker(pt, { offset: new BMapGL.Size(0, -24), icon: this.locationStart, enableDragging: true });
        marker.addEventListener('dragend', this.handleTrackStartPinDrag(this));
        marker.name = 'trackStartLocation';
        this.map.addOverlay(marker);
    }
    reflushPathOrder() {
        // this.listOfData.sort(
        //   function (a: ItemData, b: ItemData) {
        //     return a.order - b.order
        //   }
        // )
        let i = 1;
        this.listOfData.forEach(item => {
            item.order = i++;
        });
        // TODO 更新时间
        this.updateEditCache();
        this.drawTrack();
    }
    drawTrack() {
        // this.map.clearOverlays();
        let allOverlay = this.map.getOverlays();
        allOverlay.map(item => {
            if (item.name === 'trackPolylines') {
                this.map.removeOverlay(item);
            }
        });
        let pointList = [];
        this.listOfData.forEach(item => {
            // console.info("fuck", item.start_location.lng, item.start_location.lat)
            // @ts-ignore
            pointList.push(new BMapGL.Point(item.start_location.lng, item.start_location.lat));
            // @ts-ignore
            pointList.push(new BMapGL.Point(item.end_location.lng, item.end_location.lat));
        });
        if (pointList.length > 0) {
            // @ts-ignore
            let polyline = new BMapGL.Polyline(pointList, {
                strokeColor: '#1AFF00',
                strokeWeight: 4,
                strokeOpacity: 1
            });
            polyline.name = 'trackPolylines';
            this.map.addOverlay(polyline);
            let viewport = this.map.getViewport(pointList);
            this.map.centerAndZoom(viewport.center, viewport.zoom);
        }
    }
    dropPath(event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(this.listOfData, event.previousIndex, event.currentIndex);
        this.reflushPathOrder();
    }
    editPath(order) {
        this.editCache[order].edit = true;
    }
    cancelEditPath(order) {
        const index = this.listOfData.findIndex(d => d.order === order);
        this.editCache[order] = {
            data: Object.assign({}, this.listOfData[index]),
            edit: false
        };
        this.nzMessageService.info("序号" + order + "编辑已取消");
    }
    saveEditPath(order) {
        const index = this.listOfData.findIndex(d => d.order === order);
        // let newOrder = this.editCache[order].data.order
        // // 序号和其他轨迹重复
        // if (newOrder !== order && this.listOfData.findIndex(d => d.order === newOrder) !== -1) {
        //   console.info("new order index", this.listOfData.findIndex(d => d.order === newOrder))
        //   this.nzMessageService.error("序号" + newOrder + "已重复")
        // // 修改了序号
        // } else if (newOrder !== order) {
        //   Object.assign(this.listOfData[index], this.editCache[newOrder].data);
        //   this.editCache[newOrder].edit = false;
        //   this.nzMessageService.info("序号" + newOrder + "已保存")
        // // 只修改数据
        // } else {
        //   Object.assign(this.listOfData[index], this.editCache[order].data);
        //   this.editCache[order].edit = false;
        //   this.nzMessageService.info("序号" + order + "已保存")
        // }
        Object.assign(this.listOfData[index], this.editCache[order].data);
        this.editCache[order].edit = false;
        this.editCache[order].data.start_location.lng = parseFloat(Number(this.editCache[order].data.start_location.lng).toFixed(6));
        this.editCache[order].data.start_location.lat = parseFloat(Number(this.editCache[order].data.start_location.lat).toFixed(6));
        this.nzMessageService.success("序号" + order + "已保存");
        this.reflushPathOrder();
    }
    deletePath(order) {
        this.listOfData = this.listOfData.filter(d => d.order !== order);
        this.reflushPathOrder();
    }
    selectTrack(name) {
        this.httpClient.get('/api/track?name=' + name).subscribe({
            complete: () => { },
            error: err => console.error(err),
            next: d => {
                this.listOfData = d;
                this.showLocalTrackFiles = false;
                this.tracksName = name;
                this.reflushPathOrder();
            }
        });
    }
    getLocalTracks() {
        this.httpClient.get('/api/track').subscribe({
            complete: () => { },
            error: err => console.error(err),
            next: d => {
                this.trackFilesList = d;
            }
        });
    }
    deleteAllTracks() {
        this.httpClient.request('delete', '/api/track').subscribe({
            complete: () => { },
            error: err => console.error(err),
            next: d => {
                this.nzMessageService.success("文件 " + name + " 已删除");
                this.trackFilesList = [];
            }
        });
    }
    deleteTrack(name) {
        this.httpClient.delete('/api/track?name=' + name).subscribe({
            complete: () => { },
            error: err => console.error(err),
            next: d => {
                this.nzMessageService.success("文件 " + name + " 已删除");
                this.getLocalTracks();
            }
        });
    }
    handleMapClick(mapComponent) {
        return function (e) {
            // console.info('点击的经纬度：' + e.latlng.lng + ', ' + e.latlng.lat);
            if (mapComponent.selectStartLocationFlag === true) {
                mapComponent.editCache[mapComponent.selectStartLocationOrder].data.start_location.lng = parseFloat(Number(e.latlng.lng).toFixed(6));
                mapComponent.editCache[mapComponent.selectStartLocationOrder].data.start_location.lat = parseFloat(Number(e.latlng.lat).toFixed(6));
                // console.info("mapComponent.editCache[mapComponent.selectStartLocationOrder].data", mapComponent.editCache[mapComponent.selectStartLocationOrder].data)
                mapComponent.selectStartLocationFlag = false;
            }
            else if (mapComponent.selectEndLocationFlag === true) {
                mapComponent.editCache[mapComponent.selectEndLocationOrder].data.end_location.lng = parseFloat(Number(e.latlng.lng).toFixed(6));
                mapComponent.editCache[mapComponent.selectEndLocationOrder].data.end_location.lat = parseFloat(Number(e.latlng.lat).toFixed(6));
                // console.info("mapComponent.editCache[mapComponent.selectEndLocationOrder].data", mapComponent.editCache[mapComponent.selectEndLocationOrder].data)
                mapComponent.selectEndLocationFlag = false;
            }
        };
    }
    handleMapMouseMove(mapComponent) {
        return function (e) {
            mapComponent.currentLng = parseFloat(Number(e.latlng.lng).toFixed(6));
            mapComponent.currentLat = parseFloat(Number(e.latlng.lat).toFixed(6));
        };
    }
    handleTrackStartPinDrag(mapComponent) {
        // 移动的时候，最好放在pin的尖尖，放大地图，因为获取到的座标是鼠标指针座标，如果缩放比例太小，那么误差就会变大。这是百度地图也存在的问题，百度地图的默认标注连尖尖都对不齐
        return function (e) {
            // console.info(e)
            mapComponent.trackStartLocation.lng = parseFloat(Number(e.latLng.lng).toFixed(6));
            mapComponent.trackStartLocation.lat = parseFloat(Number(e.latLng.lat).toFixed(6));
        };
    }
    handleTrackEndPinDrag(mapComponent) {
        // 移动的时候，最好放在pin的尖尖，放大地图，因为获取到的座标是鼠标指针座标，如果缩放比例太小，那么误差就会变大。这是百度地图也存在的问题，百度地图的默认标注连尖尖都对不齐
        return function (e) {
            // console.info(e)
            mapComponent.trackEndLocation.lng = parseFloat(Number(e.latLng.lng).toFixed(6));
            mapComponent.trackEndLocation.lat = parseFloat(Number(e.latLng.lat).toFixed(6));
        };
    }
    handleRealtimePinDrag(mapComponent) {
        // 移动的时候，最好放在pin的尖尖，放大地图，因为获取到的座标是鼠标指针座标，如果缩放比例太小，那么误差就会变大。这是百度地图也存在的问题，百度地图的默认标注连尖尖都对不齐
        return function (e) {
            // console.info(e)
            mapComponent.realtimeLocation.lng = parseFloat(Number(e.latLng.lng).toFixed(6));
            mapComponent.realtimeLocation.lat = parseFloat(Number(e.latLng.lat).toFixed(6));
            mapComponent.syncLocation();
        };
    }
    // translateLocation(lng: number, lat: number, from: number, to: number):any {
    //   convertor.translate(pointArr, 1, 5, translateCallback)
    // }
    handleTranslateLocation(mapComponent) {
    }
    setTrackStartLocation(mapComponent) {
        return function (e) {
            if (mapComponent.trackStartLocation.lng === 0 && mapComponent.trackStartLocation.lat === 0) {
            }
            else {
                mapComponent.nzMessageService.info("重设起点座标");
                let allOverlay = mapComponent.map.getOverlays();
                allOverlay.map(item => {
                    if (item.name === 'trackStartLocation') {
                        item.removeEventListener('dragend', mapComponent.handleTrackStartPinDrag(mapComponent));
                        mapComponent.map.removeOverlay(item);
                    }
                });
            }
            mapComponent.trackStartLocation.lng = parseFloat(Number(e.lng).toFixed(6));
            mapComponent.trackStartLocation.lat = parseFloat(Number(e.lat).toFixed(6));
            // @ts-ignore
            let pt = new BMapGL.Point(e.lng, e.lat);
            // @ts-ignore
            let marker = new BMapGL.Marker(pt, { offset: new BMapGL.Size(0, -24), icon: mapComponent.locationStart, enableDragging: true });
            marker.addEventListener('dragend', mapComponent.handleTrackStartPinDrag(mapComponent));
            marker.name = 'trackStartLocation';
            mapComponent.map.addOverlay(marker);
        };
    }
    setTrackEndLocation(mapComponent) {
        return function (e) {
            if (mapComponent.trackEndLocation.lng === 0 && mapComponent.trackEndLocation.lat === 0) {
            }
            else {
                mapComponent.nzMessageService.info("重设终点座标");
                let allOverlay = mapComponent.map.getOverlays();
                allOverlay.map(item => {
                    if (item.name === 'trackEndLocation') {
                        item.removeEventListener('dragend', mapComponent.handleTrackEndPinDrag(mapComponent));
                        mapComponent.map.removeOverlay(item);
                    }
                });
            }
            mapComponent.trackEndLocation.lng = parseFloat(Number(e.lng).toFixed(6));
            mapComponent.trackEndLocation.lat = parseFloat(Number(e.lat).toFixed(6));
            // @ts-ignore
            let pt = new BMapGL.Point(e.lng, e.lat);
            // @ts-ignore
            let marker = new BMapGL.Marker(pt, { offset: new BMapGL.Size(0, -24), icon: mapComponent.locationEnd, enableDragging: true });
            marker.addEventListener('dragend', mapComponent.handleTrackEndPinDrag(mapComponent));
            marker.name = 'trackEndLocation';
            mapComponent.map.addOverlay(marker);
        };
    }
    setRealtimeLocation(mapComponent) {
        return function (e) {
            if (mapComponent.realtimeLocation.lng === 0 && mapComponent.realtimeLocation.lat === 0) {
            }
            else {
                mapComponent.nzMessageService.info("重设实时定位座标");
                let allOverlay = mapComponent.map.getOverlays();
                allOverlay.map(item => {
                    if (item.name === 'realtimeLocation') {
                        item.removeEventListener('dragend', mapComponent.handleRealtimePinDrag(mapComponent));
                        mapComponent.map.removeOverlay(item);
                    }
                });
            }
            mapComponent.realtimeLocation.lng = parseFloat(Number(e.lng).toFixed(6));
            mapComponent.realtimeLocation.lat = parseFloat(Number(e.lat).toFixed(6));
            // @ts-ignore
            let pt = new BMapGL.Point(e.lng, e.lat);
            // @ts-ignore
            let marker = new BMapGL.Marker(pt, { offset: new BMapGL.Size(0, -24), icon: mapComponent.locationRealtime, enableDragging: true });
            marker.addEventListener('dragend', mapComponent.handleRealtimePinDrag(mapComponent));
            marker.name = 'realtimeLocation';
            mapComponent.map.addOverlay(marker);
            mapComponent.syncLocation();
        };
    }
    clearTrackLocation(mapComponent) {
        return function (e) {
            mapComponent.trackStartLocation.lng = '';
            mapComponent.trackStartLocation.lat = '';
            mapComponent.trackEndLocation.lng = '';
            mapComponent.trackEndLocation.lat = '';
            mapComponent.realtimeLocation.lng = '';
            mapComponent.realtimeLocation.lat = '';
            let allOverlay = mapComponent.map.getOverlays();
            allOverlay.map(item => {
                if (item.name === 'trackStartLocation') {
                    mapComponent.map.removeOverlay(item);
                }
                if (item.name === 'trackEndLocation') {
                    mapComponent.map.removeOverlay(item);
                }
                if (item.name === 'realtimeLocation') {
                    mapComponent.map.removeOverlay(item);
                }
            });
        };
    }
}
AppMap.ɵfac = function AppMap_Factory(t) { return new (t || AppMap)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_websocket_service__WEBPACK_IMPORTED_MODULE_6__["WebsocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_coordtransform_service__WEBPACK_IMPORTED_MODULE_7__["CoordtransformService"])); };
AppMap.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppMap, selectors: [["app-map"]], decls: 17, vars: 11, consts: [["id", "container"], [3, "SDRonline", "tracksName", "SDRTransmitting", "childEvent"], [3, "childEvent"], ["advanced", ""], [3, "isVisible", "childEvent"], ["sdr", ""], [1, "locationinfo"], [2, "width", "102.3px", "text-align", "center", 3, "nzColor"], [1, "tracksList"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["nzEmpty", ""], ["nz-popover", "", 3, "nzColor", "nzPopoverContent", "click"], ["selectDirectionTrack", ""], ["nz-button", "", "nzType", "text", 3, "click"], ["nzSize", "small", 3, "nzScroll", "nzData", 4, "ngIf", "ngIfElse"], ["nzSize", "small", 3, "nzScroll", "nzData"], ["nzWidth", "50px"], ["nzWidth", "410px"], ["nzWidth", "400px"], ["nz-button", "", "nzType", "primary", "nzSize", "small", 1, "option-button", 3, "click"], ["nz-button", "", "nzType", "primary", "nzSize", "small", "nzDanger", "", 1, "option-button", 3, "click"], ["cdkDropList", "", 3, "cdkDropListDropped"], ["cdkDrag", "", 4, "ngFor", "ngForOf"], ["cdkDrag", ""], [4, "ngIf", "ngIfElse"], ["editTemplate", ""], ["nz-button", "", "nzType", "link", 3, "click"], ["nz-icon", "", "nzType", "copy", "nzTheme", "outline"], ["nz-button", "", "nzType", "primary", 1, "option-button", 3, "click"], ["nz-button", "", "nzType", "primary", "nzDanger", "", 1, "option-button", 3, "click"], ["nzCompact", ""], ["type", "text", "nz-input", "", 2, "width", "96px", 3, "ngModel", "ngModelChange"], ["nz-icon", "", "nzType", "aim", "nzTheme", "outline"], ["type", "number", "nz-input", "", 2, "width", "96px", 3, "ngModel", "ngModelChange"], ["nz-popconfirm", "", "nzPopconfirmTitle", "\u786E\u5B9A\u53D6\u6D88\u7F16\u8F91\u5417?", "nz-button", "", "nzType", "primary", 1, "option-button", 3, "nzOnConfirm"], ["nzWidth", "200px"], ["nzWidth", "80px"], ["nz-popconfirm", "", "nzPopconfirmTitle", "\u786E\u5B9A\u5220\u9664\u5417?", "nz-button", "", "nzType", "primary", "nzDanger", "", 1, "option-button", 3, "nzOnConfirm"], [3, "nzNotFoundContent", "nzNotFoundFooter"], ["contentTpl", ""]], template: function AppMap_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "menu-component", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("childEvent", function AppMap_Template_menu_component_childEvent_1_listener($event) { return ctx.menuEventHandler($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "advanced-component", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("childEvent", function AppMap_Template_advanced_component_childEvent_2_listener($event) { return ctx.advancedEventHandler($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-sdr", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("childEvent", function AppMap_Template_app_sdr_childEvent_4_listener($event) { return ctx.sdrEventHandler($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nz-tag", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nz-tag", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppMap_ng_container_12_Template, 5, 3, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppMap_ng_container_13_Template, 2, 2, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AppMap_ng_container_14_Template, 2, 2, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AppMap_ng_template_15_Template, 4, 2, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("SDRonline", ctx.SDRonline)("tracksName", ctx.tracksName)("SDRTransmitting", ctx.SDRTransmitting);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isVisible", ctx.sdrSettingIsVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzColor", "purple");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Lng: ", ctx.currentLng, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzColor", "geekblue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Lat: ", ctx.currentLat, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.trackList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showLocalTrackFiles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showLocalTrackFiles);
    } }, directives: [_app_menu__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"], _app_advanced__WEBPACK_IMPORTED_MODULE_9__["AdvancedComponent"], _sdr_sdr_component__WEBPACK_IMPORTED_MODULE_10__["SdrComponent"], ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_11__["NzTagComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_12__["NzPopoverDirective"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__["NzButtonComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_14__["ɵNzTransitionPatchDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__["NzThMeasureDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_16__["NzWaveDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__["NzTbodyComponent"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDropList"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDrag"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_17__["NzIconDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_18__["NzInputGroupComponent"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_18__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NumberValueAccessor"], ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_20__["NzPopconfirmDirective"], ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_21__["NzEmptyComponent"]], pipes: [_location_pipe__WEBPACK_IMPORTED_MODULE_22__["LocationPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: [".save[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppMap, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-map',
                templateUrl: './app.map.html',
                styleUrls: ['./app.map.css']
            }]
    }], function () { return [{ type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }, { type: _websocket_service__WEBPACK_IMPORTED_MODULE_6__["WebsocketService"] }, { type: _coordtransform_service__WEBPACK_IMPORTED_MODULE_7__["CoordtransformService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.map */ "Y01n");
/* harmony import */ var _app_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.menu */ "D3KO");
/* harmony import */ var _app_advanced__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.advanced */ "v4U5");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/locales/en */ "tAZD");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "Rm4T");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/menu */ "Q8cG");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "nJia");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/switch */ "EGpF");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/popconfirm */ "KupA");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ "0lU3");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/space */ "4xsP");
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/tag */ "ZyQt");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-zorro-antd/input-number */ "z4wI");
/* harmony import */ var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-zorro-antd/empty */ "QlLE");
/* harmony import */ var ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng-zorro-antd/popover */ "+oEP");
/* harmony import */ var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @ant-design/icons-angular/icons */ "kVq8");
/* harmony import */ var _autofocus_directive__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./autofocus.directive */ "6i++");
/* harmony import */ var _location_pipe__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./location.pipe */ "lwqm");
/* harmony import */ var _sdr_sdr_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./sdr/sdr.component */ "VyMb");






































const icons = [_ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_31__["AppstoreOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_31__["SettingOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_31__["MailOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_31__["MenuFoldOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_31__["MenuUnfoldOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_31__["OrderedListOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_31__["PlusOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_31__["HeartOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_31__["SaveOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_31__["AimOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_31__["CopyOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_31__["InfoCircleOutline"]];
Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["registerLocaleData"])(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_10___default.a);
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_map__WEBPACK_IMPORTED_MODULE_2__["AppMap"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{ provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["NZ_I18N"], useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["en_US"] }, { provide: ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__["NZ_ICONS"], useValue: icons }], imports: [[
            ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_15__["NzButtonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_17__["NzGridModule"],
            ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__["NzIconModule"].forRoot(icons),
            ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_13__["NzMenuModule"],
            ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_14__["NzToolTipModule"],
            ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__["NzTableModule"],
            ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_18__["NzSwitchModule"],
            ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_19__["NzModalModule"],
            ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_20__["NzFormModule"],
            ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_21__["NzSelectModule"],
            ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_22__["NzPopconfirmModule"],
            ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_23__["NzMessageModule"],
            ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_24__["NzDatePickerModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["DragDropModule"],
            ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_25__["NzSpaceModule"],
            ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_26__["NzTagModule"],
            ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_27__["NzInputModule"],
            ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_28__["NzInputNumberModule"],
            ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_29__["NzEmptyModule"],
            ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_30__["NzPopoverModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_map__WEBPACK_IMPORTED_MODULE_2__["AppMap"],
        _app_menu__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"],
        _app_advanced__WEBPACK_IMPORTED_MODULE_4__["AdvancedComponent"],
        _autofocus_directive__WEBPACK_IMPORTED_MODULE_32__["AutofocusDirective"],
        _location_pipe__WEBPACK_IMPORTED_MODULE_33__["LocationPipe"],
        _sdr_sdr_component__WEBPACK_IMPORTED_MODULE_34__["SdrComponent"]], imports: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_15__["NzButtonModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
        ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_17__["NzGridModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__["NzIconModule"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_13__["NzMenuModule"],
        ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_14__["NzToolTipModule"],
        ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__["NzTableModule"],
        ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_18__["NzSwitchModule"],
        ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_19__["NzModalModule"],
        ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_20__["NzFormModule"],
        ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_21__["NzSelectModule"],
        ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_22__["NzPopconfirmModule"],
        ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_23__["NzMessageModule"],
        ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_24__["NzDatePickerModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["DragDropModule"],
        ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_25__["NzSpaceModule"],
        ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_26__["NzTagModule"],
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_27__["NzInputModule"],
        ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_28__["NzInputNumberModule"],
        ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_29__["NzEmptyModule"],
        ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_30__["NzPopoverModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_map__WEBPACK_IMPORTED_MODULE_2__["AppMap"],
                    _app_menu__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"],
                    _app_advanced__WEBPACK_IMPORTED_MODULE_4__["AdvancedComponent"],
                    _autofocus_directive__WEBPACK_IMPORTED_MODULE_32__["AutofocusDirective"],
                    _location_pipe__WEBPACK_IMPORTED_MODULE_33__["LocationPipe"],
                    _sdr_sdr_component__WEBPACK_IMPORTED_MODULE_34__["SdrComponent"],
                ],
                imports: [
                    ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_15__["NzButtonModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                    ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_17__["NzGridModule"],
                    ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__["NzIconModule"].forRoot(icons),
                    ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_13__["NzMenuModule"],
                    ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_14__["NzToolTipModule"],
                    ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__["NzTableModule"],
                    ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_18__["NzSwitchModule"],
                    ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_19__["NzModalModule"],
                    ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_20__["NzFormModule"],
                    ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_21__["NzSelectModule"],
                    ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_22__["NzPopconfirmModule"],
                    ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_23__["NzMessageModule"],
                    ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_24__["NzDatePickerModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["DragDropModule"],
                    ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_25__["NzSpaceModule"],
                    ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_26__["NzTagModule"],
                    ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_27__["NzInputModule"],
                    ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_28__["NzInputNumberModule"],
                    ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_29__["NzEmptyModule"],
                    ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_30__["NzPopoverModule"]
                ],
                providers: [{ provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["NZ_I18N"], useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["en_US"] }, { provide: ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__["NZ_ICONS"], useValue: icons }],
                bootstrap: [_app_map__WEBPACK_IMPORTED_MODULE_2__["AppMap"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "lwqm":
/*!**********************************!*\
  !*** ./src/app/location.pipe.ts ***!
  \**********************************/
/*! exports provided: LocationPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationPipe", function() { return LocationPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LocationPipe {
    transform(value) {
        let v = value;
        if (!value)
            return value;
        return v.lng + ', ' + v.lat;
    }
}
LocationPipe.ɵfac = function LocationPipe_Factory(t) { return new (t || LocationPipe)(); };
LocationPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "location", type: LocationPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocationPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'location'
            }]
    }], null, null); })();


/***/ }),

/***/ "sJYD":
/*!*******************************************!*\
  !*** ./src/app/coordtransform.service.ts ***!
  \*******************************************/
/*! exports provided: CoordtransformService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoordtransformService", function() { return CoordtransformService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CoordtransformService {
    constructor() {
        // 定义一些常量
        this.x_PI = 3.14159265358979324 * 3000.0 / 180.0;
        this.PI = 3.1415926535897932384626;
        this.a = 6378245.0;
        this.ee = 0.00669342162296594323;
    }
    /**
     * 百度坐标系 (BD-09) 与 火星坐标系 (GCJ-02) 的转换
     * 即 百度 转 谷歌、高德
     * @param bd_lng
     * @param bd_lat
     * @returns {*[]}
     */
    bd09togcj02(coord) {
        let bd_lng = +coord.lng;
        let bd_lat = +coord.lat;
        let x = bd_lng - 0.0065;
        let y = bd_lat - 0.006;
        let z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * this.x_PI);
        let theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * this.x_PI);
        let gg_lng = z * Math.cos(theta);
        let gg_lat = z * Math.sin(theta);
        return { lng: gg_lng, lat: gg_lat };
    }
    ;
    bd09towgs84(coord) {
        let bd_lng = +coord.lng;
        let bd_lat = +coord.lat;
        let x = bd_lng - 0.0065;
        let y = bd_lat - 0.006;
        let z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * this.x_PI);
        let theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * this.x_PI);
        let lng = z * Math.cos(theta);
        let lat = z * Math.sin(theta);
        if (this.out_of_china(lng, lat)) {
            return { lng: lng, lat: lat };
        }
        else {
            let dlat = this.transformlat(lng - 105.0, lat - 35.0);
            let dlng = this.transformlng(lng - 105.0, lat - 35.0);
            let radlat = lat / 180.0 * this.PI;
            let magic = Math.sin(radlat);
            magic = 1 - this.ee * magic * magic;
            let sqrtmagic = Math.sqrt(magic);
            dlat = (dlat * 180.0) / ((this.a * (1 - this.ee)) / (magic * sqrtmagic) * this.PI);
            dlng = (dlng * 180.0) / (this.a / sqrtmagic * Math.cos(radlat) * this.PI);
            let mglat = lat + dlat;
            let mglng = lng + dlng;
            return { lng: lng * 2 - mglng, lat: lat * 2 - mglat };
        }
    }
    ;
    /**
     * 火星坐标系 (GCJ-02) 与百度坐标系 (BD-09) 的转换
     * 即 谷歌、高德 转 百度
     * @param lng
     * @param lat
     * @returns {*[]}
     */
    gcj02tobd09(coord) {
        let lng = +coord.lng;
        let lat = +coord.lat;
        let z = Math.sqrt(lng * lng + lat * lat) + 0.00002 * Math.sin(lat * this.x_PI);
        let theta = Math.atan2(lat, lng) + 0.000003 * Math.cos(lng * this.x_PI);
        let bd_lng = z * Math.cos(theta) + 0.0065;
        let bd_lat = z * Math.sin(theta) + 0.006;
        return { lng: bd_lng, lat: bd_lat };
    }
    ;
    /**
     * WGS-84 转 GCJ-02
     * @param lng
     * @param lat
     * @returns {*[]}
     */
    wgs84togcj02(coord) {
        let lng = +coord.lng;
        let lat = +coord.lat;
        if (this.out_of_china(lng, lat)) {
            return { lng: lng, lat: lat };
        }
        else {
            let dlat = this.transformlat(lng - 105.0, lat - 35.0);
            let dlng = this.transformlng(lng - 105.0, lat - 35.0);
            let radlat = lat / 180.0 * this.PI;
            let magic = Math.sin(radlat);
            magic = 1 - this.ee * magic * magic;
            let sqrtmagic = Math.sqrt(magic);
            dlat = (dlat * 180.0) / ((this.a * (1 - this.ee)) / (magic * sqrtmagic) * this.PI);
            dlng = (dlng * 180.0) / (this.a / sqrtmagic * Math.cos(radlat) * this.PI);
            let mglat = lat + dlat;
            let mglng = lng + dlng;
            return { lng: mglng, lat: mglat };
        }
    }
    ;
    /**
     * GCJ-02 转换为 WGS-84
     * @param lng
     * @param lat
     * @returns {*[]}
     */
    gcj02towgs84(coord) {
        let lng = +coord.lng;
        let lat = +coord.lat;
        if (this.out_of_china(lng, lat)) {
            return { lng: lng, lat: lat };
        }
        else {
            let dlat = this.transformlat(lng - 105.0, lat - 35.0);
            let dlng = this.transformlng(lng - 105.0, lat - 35.0);
            let radlat = lat / 180.0 * this.PI;
            let magic = Math.sin(radlat);
            magic = 1 - this.ee * magic * magic;
            let sqrtmagic = Math.sqrt(magic);
            dlat = (dlat * 180.0) / ((this.a * (1 - this.ee)) / (magic * sqrtmagic) * this.PI);
            dlng = (dlng * 180.0) / (this.a / sqrtmagic * Math.cos(radlat) * this.PI);
            let mglat = lat + dlat;
            let mglng = lng + dlng;
            return { lng: lng * 2 - mglng, lat: lat * 2 - mglat };
        }
    }
    ;
    transformlat(lng, lat) {
        lat = +lat;
        lng = +lng;
        let ret = -100.0 + 2.0 * lng + 3.0 * lat + 0.2 * lat * lat + 0.1 * lng * lat + 0.2 * Math.sqrt(Math.abs(lng));
        ret += (20.0 * Math.sin(6.0 * lng * this.PI) + 20.0 * Math.sin(2.0 * lng * this.PI)) * 2.0 / 3.0;
        ret += (20.0 * Math.sin(lat * this.PI) + 40.0 * Math.sin(lat / 3.0 * this.PI)) * 2.0 / 3.0;
        ret += (160.0 * Math.sin(lat / 12.0 * this.PI) + 320 * Math.sin(lat * this.PI / 30.0)) * 2.0 / 3.0;
        return ret;
    }
    ;
    transformlng(lng, lat) {
        lat = +lat;
        lng = +lng;
        let ret = 300.0 + lng + 2.0 * lat + 0.1 * lng * lng + 0.1 * lng * lat + 0.1 * Math.sqrt(Math.abs(lng));
        ret += (20.0 * Math.sin(6.0 * lng * this.PI) + 20.0 * Math.sin(2.0 * lng * this.PI)) * 2.0 / 3.0;
        ret += (20.0 * Math.sin(lng * this.PI) + 40.0 * Math.sin(lng / 3.0 * this.PI)) * 2.0 / 3.0;
        ret += (150.0 * Math.sin(lng / 12.0 * this.PI) + 300.0 * Math.sin(lng / 30.0 * this.PI)) * 2.0 / 3.0;
        return ret;
    }
    ;
    /**
     * 判断是否在国内，不在国内则不做偏移
     * @param lng
     * @param lat
     * @returns {boolean}
     */
    out_of_china(lng, lat) {
        lat = +lat;
        lng = +lng;
        // 纬度 3.86~53.55, 经度 73.66~135.05 
        return !(lng > 73.66 && lng < 135.05 && lat > 3.86 && lat < 53.55);
    }
    ;
}
CoordtransformService.ɵfac = function CoordtransformService_Factory(t) { return new (t || CoordtransformService)(); };
CoordtransformService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CoordtransformService, factory: CoordtransformService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoordtransformService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "v4U5":
/*!*********************************!*\
  !*** ./src/app/app.advanced.ts ***!
  \*********************************/
/*! exports provided: AdvancedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancedComponent", function() { return AdvancedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/space */ "4xsP");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "nJia");















function AdvancedComponent_ng_container_1_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 36);
} }
function AdvancedComponent_ng_container_1_ng_template_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 36);
} }
function AdvancedComponent_ng_container_1_ng_template_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 37);
} }
function AdvancedComponent_ng_container_1_ng_template_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 38);
} }
function AdvancedComponent_ng_container_1_ng_template_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 39);
} }
function AdvancedComponent_ng_container_1_ng_template_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 40);
} }
function AdvancedComponent_ng_container_1_ng_template_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 41);
} }
function AdvancedComponent_ng_container_1_ng_template_109_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 42);
} }
function AdvancedComponent_ng_container_1_tr_129_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdvancedComponent_ng_container_1_tr_129_ng_container_1_Template_a_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const data_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r23.startEdit(data_r19.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r19.angleStart);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r19.angleEnd);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r19.speedDecayRate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r19.acc);
} }
function AdvancedComponent_ng_container_1_tr_129_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdvancedComponent_ng_container_1_tr_129_ng_template_2_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const data_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r27.editCache[data_r19.id].data.angleStart = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdvancedComponent_ng_container_1_tr_129_ng_template_2_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const data_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r30.editCache[data_r19.id].data.angleEnd = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdvancedComponent_ng_container_1_tr_129_ng_template_2_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const data_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r32.editCache[data_r19.id].data.speedDecayRate = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdvancedComponent_ng_container_1_tr_129_ng_template_2_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const data_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r34.editCache[data_r19.id].data.acc = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdvancedComponent_ng_container_1_tr_129_ng_template_2_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const data_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r36.saveEdit(data_r19.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdvancedComponent_ng_container_1_tr_129_ng_template_2_Template_a_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const data_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r38.cancelEdit(data_r19.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r22.editCache[data_r19.id].data.angleStart);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r22.editCache[data_r19.id].data.angleEnd);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r22.editCache[data_r19.id].data.speedDecayRate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r22.editCache[data_r19.id].data.acc);
} }
function AdvancedComponent_ng_container_1_tr_129_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdvancedComponent_ng_container_1_tr_129_ng_container_1_Template, 12, 4, "ng-container", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AdvancedComponent_ng_container_1_tr_129_ng_template_2_Template, 13, 4, "ng-template", null, 44, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r19 = ctx.$implicit;
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r18.editCache[data_r19.id].edit)("ngIfElse", _r21);
} }
function AdvancedComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-space", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-space-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u79FB\u52A8\u7279\u5F81\u6A21\u677F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nz-select", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdvancedComponent_ng_container_1_Template_nz_select_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r41.selectedValue = $event; })("ngModelChange", function AdvancedComponent_ng_container_1_Template_nz_select_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r43.motionModelChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "nz-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "nz-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "nz-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "nz-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "nz-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nz-space-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u6700\u5927\u7EB5\u5411\u52A0\u901F\u5EA6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "nz-input-group", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdvancedComponent_ng_container_1_Template_input_ngModelChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r44.motionConf.maxLongAcc = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AdvancedComponent_ng_container_1_ng_template_25_Template, 1, 0, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "nz-space-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u6700\u5927\u7EB5\u5411\u52A0\u901F\u5EA6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "nz-input-group", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdvancedComponent_ng_container_1_Template_input_ngModelChange_36_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r45.motionConf.maxLatAcc = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, AdvancedComponent_ng_container_1_ng_template_37_Template, 1, 0, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "nz-space-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\u6025\u52A8\u5EA6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "nz-input-group", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdvancedComponent_ng_container_1_Template_input_ngModelChange_48_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r46.motionConf.maxJerk = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, AdvancedComponent_ng_container_1_ng_template_49_Template, 1, 0, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "nz-space-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\u6700\u5927\u901F\u5EA6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "nz-input-group", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdvancedComponent_ng_container_1_Template_input_ngModelChange_60_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r47.motionConf.maxSpeed = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, AdvancedComponent_ng_container_1_ng_template_61_Template, 1, 0, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "nz-space-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "\u8D77\u6B65\u65F6\u95F4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "nz-input-group", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdvancedComponent_ng_container_1_Template_input_ngModelChange_72_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r48.motionConf.stationaryPeriod = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, AdvancedComponent_ng_container_1_ng_template_73_Template, 1, 0, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "nz-space-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "\u505C\u8F66\u65F6\u95F4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "nz-input-group", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdvancedComponent_ng_container_1_Template_input_ngModelChange_84_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r49.motionConf.stationaryPeriodEnd = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, AdvancedComponent_ng_container_1_ng_template_85_Template, 1, 0, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "nz-space-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "\u79FB\u52A8\u5E73\u6ED1\u7CFB\u6570");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "nz-input-group", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdvancedComponent_ng_container_1_Template_input_ngModelChange_96_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r50.motionConf.positionSmoothingFactor = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](97, AdvancedComponent_ng_container_1_ng_template_97_Template, 1, 0, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "nz-space-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "\u901F\u5EA6\u6296\u52A8\u7CFB\u6570");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "nz-input-group", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdvancedComponent_ng_container_1_Template_input_ngModelChange_108_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r51.motionConf.speedSmoothingFactor = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](109, AdvancedComponent_ng_container_1_ng_template_109_Template, 1, 0, "ng-template", null, 30, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdvancedComponent_ng_container_1_Template_button_click_112_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r52.addRow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "nz-table", 32, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "\u8F6C\u5411\u89D2\u8D77\u59CB");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "\u8F6C\u5411\u89D2\u7ED3\u675F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "\u51CF\u901F\u767E\u5206\u6BD4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "\u51CF\u901F\u52A0\u901F\u5EA6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "\u64CD\u4F5C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](129, AdvancedComponent_ng_container_1_tr_129_Template, 4, 2, "tr", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](50);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](62);
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](74);
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](86);
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](98);
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](110);
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](115);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.selectedValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSuffix", _r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.motionConf.maxLongAcc);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSuffix", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.motionConf.maxLatAcc);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSuffix", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.motionConf.maxJerk);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSuffix", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.motionConf.maxSpeed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSuffix", _r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.motionConf.stationaryPeriod);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSuffix", _r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.motionConf.stationaryPeriodEnd);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSuffix", _r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.motionConf.positionSmoothingFactor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSuffix", _r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.motionConf.speedSmoothingFactor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzHideOnSinglePage", true)("nzData", ctx_r0.motionConf.speedChangeList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r17.data);
} }
class AdvancedComponent {
    constructor(fb) {
        this.fb = fb;
        this.isVisible = false;
        this.motionConf = {
            maxLongAcc: 1.5,
            maxLatAcc: 1.5,
            maxJerk: 1,
            maxSpeed: 1.5,
            stationaryPeriod: 1.5,
            stationaryPeriodEnd: 1.5,
            positionSmoothingFactor: 3,
            speedSmoothingFactor: 3,
            speedChangeList: [{
                    id: 1,
                    angleStart: 180,
                    angleEnd: 150,
                    speedDecayRate: 1,
                    acc: 10,
                    jerk: 10
                }, {
                    id: 2,
                    angleStart: 150,
                    angleEnd: 130,
                    speedDecayRate: 0.5,
                    acc: 10,
                    jerk: 10
                }, {
                    id: 3,
                    angleStart: 130,
                    angleEnd: 120,
                    speedDecayRate: 0.4,
                    acc: 10,
                    jerk: 10
                }, {
                    id: 4,
                    angleStart: 120,
                    angleEnd: 110,
                    speedDecayRate: 0.2,
                    acc: 10,
                    jerk: 10
                }, {
                    id: 5,
                    angleStart: 110,
                    angleEnd: 100,
                    speedDecayRate: 0.15,
                    acc: 10,
                    jerk: 10,
                }, {
                    id: 6,
                    angleStart: 100,
                    angleEnd: 90,
                    speedDecayRate: 0.1,
                    acc: 10,
                    jerk: 10,
                }, {
                    id: 7,
                    angleStart: 90,
                    angleEnd: 0,
                    speedDecayRate: 0,
                    acc: 10,
                    jerk: 10,
                }]
        };
        this.id = this.motionConf.speedChangeList.length + 1;
        this.isBatch = false;
        this.selectedValue = '';
        this.motionTemplate = {
            "walk": {
                maxLongAcc: 1.5,
                maxLatAcc: 1.5,
                maxJerk: 1,
                maxSpeed: 1.5,
                stationaryPeriod: 1.5,
                stationaryPeriodEnd: 1.5,
                positionSmoothingFactor: 3,
                speedSmoothingFactor: 3,
                speedChangeList: [{
                        id: 1,
                        angleStart: 180,
                        angleEnd: 150,
                        speedDecayRate: 1,
                        acc: 10,
                        jerk: 10
                    }, {
                        id: 2,
                        angleStart: 150,
                        angleEnd: 130,
                        speedDecayRate: 0.5,
                        acc: 10,
                        jerk: 10
                    }, {
                        id: 3,
                        angleStart: 130,
                        angleEnd: 120,
                        speedDecayRate: 0.4,
                        acc: 10,
                        jerk: 10
                    }, {
                        id: 4,
                        angleStart: 120,
                        angleEnd: 110,
                        speedDecayRate: 0.2,
                        acc: 10,
                        jerk: 10
                    }, {
                        id: 5,
                        angleStart: 110,
                        angleEnd: 100,
                        speedDecayRate: 0.15,
                        acc: 10,
                        jerk: 10,
                    }, {
                        id: 6,
                        angleStart: 100,
                        angleEnd: 90,
                        speedDecayRate: 0.1,
                        acc: 10,
                        jerk: 10,
                    }, {
                        id: 7,
                        angleStart: 90,
                        angleEnd: 0,
                        speedDecayRate: 0,
                        acc: 10,
                        jerk: 10,
                    }]
            },
            "marathon": {
                maxLongAcc: 2,
                maxLatAcc: 2,
                maxJerk: 2,
                maxSpeed: 4,
                stationaryPeriod: 1.5,
                stationaryPeriodEnd: 1.5,
                positionSmoothingFactor: 3,
                speedSmoothingFactor: 3,
                speedChangeList: [{
                        id: 1,
                        angleStart: 180,
                        angleEnd: 150,
                        speedDecayRate: 1,
                        acc: 10,
                        jerk: 10
                    }, {
                        id: 2,
                        angleStart: 150,
                        angleEnd: 130,
                        speedDecayRate: 0.5,
                        acc: 10,
                        jerk: 10
                    }, {
                        id: 3,
                        angleStart: 130,
                        angleEnd: 120,
                        speedDecayRate: 0.4,
                        acc: 10,
                        jerk: 10
                    }, {
                        id: 4,
                        angleStart: 120,
                        angleEnd: 110,
                        speedDecayRate: 0.2,
                        acc: 10,
                        jerk: 10
                    }, {
                        id: 5,
                        angleStart: 110,
                        angleEnd: 100,
                        speedDecayRate: 0.15,
                        acc: 10,
                        jerk: 10,
                    }, {
                        id: 6,
                        angleStart: 100,
                        angleEnd: 90,
                        speedDecayRate: 0.1,
                        acc: 10,
                        jerk: 10,
                    }, {
                        id: 7,
                        angleStart: 90,
                        angleEnd: 0,
                        speedDecayRate: 0,
                        acc: 10,
                        jerk: 10,
                    }]
            },
            "bike": {
                maxLongAcc: 2,
                maxLatAcc: 2,
                maxJerk: 2,
                maxSpeed: 5.6,
                stationaryPeriod: 5,
                stationaryPeriodEnd: 5,
                positionSmoothingFactor: 5,
                speedSmoothingFactor: 6,
                speedChangeList: [{
                        id: 1,
                        angleStart: 180,
                        angleEnd: 150,
                        speedDecayRate: 1,
                        acc: 10,
                        jerk: 10
                    }, {
                        id: 2,
                        angleStart: 150,
                        angleEnd: 130,
                        speedDecayRate: 0.5,
                        acc: 10,
                        jerk: 10
                    }, {
                        id: 3,
                        angleStart: 130,
                        angleEnd: 120,
                        speedDecayRate: 0.4,
                        acc: 10,
                        jerk: 10
                    }, {
                        id: 4,
                        angleStart: 120,
                        angleEnd: 110,
                        speedDecayRate: 0.2,
                        acc: 10,
                        jerk: 10
                    }, {
                        id: 5,
                        angleStart: 110,
                        angleEnd: 100,
                        speedDecayRate: 0.15,
                        acc: 10,
                        jerk: 10,
                    }, {
                        id: 6,
                        angleStart: 100,
                        angleEnd: 90,
                        speedDecayRate: 0.1,
                        acc: 10,
                        jerk: 10,
                    }, {
                        id: 7,
                        angleStart: 90,
                        angleEnd: 0,
                        speedDecayRate: 0,
                        acc: 10,
                        jerk: 10,
                    }]
            },
            "motobike": {
                maxLongAcc: 6.95,
                maxLatAcc: 6.95,
                maxJerk: 5,
                maxSpeed: 27.8,
                stationaryPeriod: 5,
                stationaryPeriodEnd: 5,
                positionSmoothingFactor: 5,
                speedSmoothingFactor: 6,
                speedChangeList: [{
                        id: 1,
                        angleStart: 180,
                        angleEnd: 150,
                        speedDecayRate: 1,
                        acc: 7,
                        jerk: 7
                    }, {
                        id: 2,
                        angleStart: 150,
                        angleEnd: 130,
                        speedDecayRate: 0.5,
                        acc: 7,
                        jerk: 7
                    }, {
                        id: 3,
                        angleStart: 130,
                        angleEnd: 120,
                        speedDecayRate: 0.4,
                        acc: 7,
                        jerk: 7
                    }, {
                        id: 4,
                        angleStart: 120,
                        angleEnd: 110,
                        speedDecayRate: 0.2,
                        acc: 7,
                        jerk: 7
                    }, {
                        id: 5,
                        angleStart: 110,
                        angleEnd: 100,
                        speedDecayRate: 0.15,
                        acc: 7,
                        jerk: 7,
                    }, {
                        id: 6,
                        angleStart: 100,
                        angleEnd: 90,
                        speedDecayRate: 0.1,
                        acc: 7,
                        jerk: 7,
                    }, {
                        id: 7,
                        angleStart: 90,
                        angleEnd: 0,
                        speedDecayRate: 0,
                        acc: 7,
                        jerk: 7,
                    }]
            },
            "car": {
                maxLongAcc: 6.95,
                maxLatAcc: 6.95,
                maxJerk: 5,
                maxSpeed: 27.8,
                stationaryPeriod: 5,
                stationaryPeriodEnd: 5,
                positionSmoothingFactor: 5,
                speedSmoothingFactor: 6,
                speedChangeList: [{
                        id: 1,
                        angleStart: 180,
                        angleEnd: 150,
                        speedDecayRate: 1,
                        acc: 10,
                        jerk: 10
                    }, {
                        id: 2,
                        angleStart: 150,
                        angleEnd: 130,
                        speedDecayRate: 0.5,
                        acc: 10,
                        jerk: 10
                    }, {
                        id: 3,
                        angleStart: 130,
                        angleEnd: 120,
                        speedDecayRate: 0.4,
                        acc: 10,
                        jerk: 10
                    }, {
                        id: 4,
                        angleStart: 120,
                        angleEnd: 110,
                        speedDecayRate: 0.2,
                        acc: 10,
                        jerk: 10
                    }, {
                        id: 5,
                        angleStart: 110,
                        angleEnd: 100,
                        speedDecayRate: 0.15,
                        acc: 10,
                        jerk: 10,
                    }, {
                        id: 6,
                        angleStart: 100,
                        angleEnd: 90,
                        speedDecayRate: 0.1,
                        acc: 10,
                        jerk: 10,
                    }, {
                        id: 7,
                        angleStart: 90,
                        angleEnd: 0,
                        speedDecayRate: 0,
                        acc: 10,
                        jerk: 10,
                    }]
            },
        };
        this.childEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.editCache = {};
        this.captchaTooltipIcon = {
            type: 'info-circle',
            theme: 'twotone'
        };
    }
    showModal(data) {
        this.selectedValue = '';
        if (typeof (data) === 'boolean') {
            this.isBatch = data;
            this.motionConf = this.motionTemplate['walk'];
        }
        else {
            this.data = data;
            this.motionConf = this.data.motion_conf;
        }
        this.isVisible = true;
    }
    handleOk() {
        this.isVisible = false;
        if (this.isBatch) {
            this.childEvent.emit({
                method: 'saveAllConf',
                data: this.motionConf
            });
        }
        else {
            this.childEvent.emit({
                method: 'saveConf',
                data: {
                    order: this.data.order,
                    motion: this.motionConf
                }
            });
        }
        this.isBatch = false;
    }
    handleCancel() {
        this.isVisible = false;
        this.isBatch = false;
        this.selectedValue = '';
    }
    startEdit(id) {
        this.editCache[id].edit = true;
    }
    cancelEdit(id) {
        const index = this.motionConf.speedChangeList.findIndex(item => item.id === id);
        this.editCache[id] = {
            data: Object.assign({}, this.motionConf.speedChangeList[index]),
            edit: false
        };
    }
    saveEdit(id) {
        const index = this.motionConf.speedChangeList.findIndex(item => item.id === id);
        Object.assign(this.motionConf.speedChangeList[index], this.editCache[id].data);
        this.editCache[id].edit = false;
    }
    updateEditCache() {
        this.motionConf.speedChangeList.forEach(item => {
            this.editCache[item.id] = {
                edit: false,
                data: Object.assign({}, item)
            };
        });
    }
    addRow() {
        this.motionConf.speedChangeList = [
            ...this.motionConf.speedChangeList,
            {
                id: this.id,
                angleStart: -99,
                angleEnd: 150,
                speedDecayRate: 1,
                acc: 10,
                jerk: 10
            }
        ];
        this.id++;
        this.updateEditCache();
    }
    motionModelChange(e) {
        if (e !== null) {
            this.motionConf = this.motionTemplate[e];
        }
    }
    ngOnInit() {
        this.updateEditCache();
    }
}
AdvancedComponent.ɵfac = function AdvancedComponent_Factory(t) { return new (t || AdvancedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
AdvancedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdvancedComponent, selectors: [["advanced-component"]], outputs: { childEvent: "childEvent" }, decls: 2, vars: 1, consts: [["nzTitle", "\u9AD8\u7EA7\u8F68\u8FF9\u8BBE\u7F6E", "nzWidth", "600px", 3, "nzVisible", "nzVisibleChange", "nzOnCancel", "nzOnOk"], [4, "nzModalContent"], ["nzDirection", "vertical"], ["nz-row", ""], ["nz-col", "", "nzSpan", "2"], ["nz-col", "", "nzSpan", "10"], ["nz-col", "", "nzSpan", "8"], ["ngModel", "walk", "nzShowSearch", "", "nzAllowClear", "", "nzPlaceHolder", "\u9009\u62E9\u6A21\u677F", 3, "ngModel", "ngModelChange"], ["nzValue", "walk", "nzLabel", "\u6B65\u884C"], ["nzValue", "marathon", "nzLabel", "\u957F\u8DD1"], ["nzValue", "bike", "nzLabel", "\u81EA\u884C\u8F66"], ["nzValue", "motobike", "nzLabel", "\u6469\u6258\u8F66"], ["nzValue", "car", "nzLabel", "\u8F7F\u8F66"], ["nz-col", "", "nzSpan", "4"], [3, "nzSuffix"], ["type", "number", "nz-input", "", "placeholder", "\u8BF7\u8F93\u5165\u6700\u5927\u7EB5\u5411\u52A0\u901F\u5EA6", 3, "ngModel", "ngModelChange"], ["maxLongAccTemplate", ""], ["type", "number", "nz-input", "", "placeholder", "\u8BF7\u8F93\u5165\u6700\u5927\u6A2A\u5411\u52A0\u901F\u5EA6", 3, "ngModel", "ngModelChange"], ["maxLatAccTemplate", ""], ["type", "number", "nz-input", "", "placeholder", "\u8BF7\u8F93\u5165\u6025\u52A8\u5EA6", 3, "ngModel", "ngModelChange"], ["maxJerkTemplate", ""], ["type", "number", "nz-input", "", "placeholder", "\u8BF7\u8F93\u5165\u6700\u5927\u901F\u5EA6", 3, "ngModel", "ngModelChange"], ["maxSpeedTemplate", ""], ["type", "number", "nz-input", "", "placeholder", "\u8BF7\u8F93\u5165\u8D77\u6B65\u65F6\u95F4", 3, "ngModel", "ngModelChange"], ["stationaryPeriodTemplate", ""], ["type", "number", "nz-input", "", "placeholder", "\u8BF7\u8F93\u5165\u505C\u8F66\u65F6\u95F4", 3, "ngModel", "ngModelChange"], ["stationaryPeriodEndTemplate", ""], ["type", "number", "nz-input", "", "placeholder", "\u8BF7\u8F93\u5165\u79FB\u52A8\u5E73\u6ED1\u7CFB\u6570", 3, "ngModel", "ngModelChange"], ["positionSmoothingFactorTemplate", ""], ["type", "number", "nz-input", "", "placeholder", "\u8BF7\u8F93\u5165\u901F\u5EA6\u6296\u52A8\u7CFB\u6570", 3, "ngModel", "ngModelChange"], ["speedSmoothingFactorTemplate", ""], ["nz-button", "", "nzType", "primary", 3, "click"], ["nzBordered", "", "nzSize", "small", "nzTableLayout", "fixed", 3, "nzHideOnSinglePage", "nzData"], ["editRowTable", ""], ["nzWidth", "100"], [4, "ngFor", "ngForOf"], ["nz-icon", "", "nz-tooltip", "", "nzTooltipTitle", "\u6700\u5927\u7EB5\u5411\u52A0\u901F\u5EA6", "nzType", "info-circle"], ["nz-icon", "", "nz-tooltip", "", "nzTooltipTitle", "\u5F00\u7684\u8D8A\u731B\u6025\u52A8\u5EA6\u8D8A\u5927", "nzType", "info-circle"], ["nz-icon", "", "nz-tooltip", "", "nzTooltipTitle", "\u6574\u6761\u8DEF\u5F84\u7684\u6700\u5927\u901F\u5EA6", "nzType", "info-circle"], ["nz-icon", "", "nz-tooltip", "", "nzTooltipTitle", "\u505C\u8F66\u540E\u7684\u8D77\u6B65\u65F6\u95F4", "nzType", "info-circle"], ["nz-icon", "", "nz-tooltip", "", "nzTooltipTitle", "\u51CF\u901F\u5230\u505C\u8F66\u7684\u65F6\u95F4", "nzType", "info-circle"], ["nz-icon", "", "nz-tooltip", "", "nzTooltipTitle", "\u4E24\u70B9\u4E4B\u95F4\u8FD0\u52A8\u7684\u65B9\u5411\u7A33\u5B9A\u7A0B\u5EA6", "nzType", "info-circle"], ["nz-icon", "", "nz-tooltip", "", "nzTooltipTitle", "\u4E24\u70B9\u4E4B\u95F4\u8FD0\u52A8\u7684\u901F\u5EA6\u7A33\u5B9A\u7A0B\u5EA6", "nzType", "info-circle"], [4, "ngIf", "ngIfElse"], ["editTemplate", ""], [3, "click"], ["type", "number", "type", "text", "nz-input", "", 3, "ngModel", "ngModelChange"], [1, "save", 3, "click"]], template: function AdvancedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-modal", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzVisibleChange", function AdvancedComponent_Template_nz_modal_nzVisibleChange_0_listener($event) { return ctx.isVisible = $event; })("nzOnCancel", function AdvancedComponent_Template_nz_modal_nzOnCancel_0_listener() { return ctx.handleCancel(); })("nzOnOk", function AdvancedComponent_Template_nz_modal_nzOnOk_0_listener() { return ctx.handleOk(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdvancedComponent_ng_container_1_Template, 130, 20, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzVisible", ctx.isVisible);
    } }, directives: [ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_2__["NzModalComponent"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_2__["NzModalContentDirective"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_3__["NzSpaceComponent"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_3__["NzSpaceItemComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__["NzColDirective"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_5__["NzSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_5__["NzOptionComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__["ɵNzTransitionPatchDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__["NzInputGroupComponent"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__["NzInputGroupWhitSuffixOrPrefixDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_9__["NzWaveDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_10__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_10__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_10__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_10__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_10__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_10__["NzTbodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__["NzIconDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_13__["NzTooltipDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdvancedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'advanced-component',
                templateUrl: './app.advanced.html',
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, { childEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);