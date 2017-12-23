webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/showcase/components/alert/showcase-alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-primary\" role=\"alert\">\n    This is a primary alert—check it out!\n</div>\n<div class=\"alert alert-secondary\" role=\"alert\">\n    This is a secondary alert—check it out!\n</div>\n<div class=\"alert alert-success\" role=\"alert\">\n    This is a success alert—check it out!\n</div>\n<div class=\"alert alert-danger\" role=\"alert\">\n    This is a danger alert—check it out!\n</div>\n<div class=\"alert alert-warning\" role=\"alert\">\n    This is a warning alert—check it out!\n</div>\n<div class=\"alert alert-info\" role=\"alert\">\n    This is a info alert—check it out!\n</div>\n<div class=\"alert alert-light\" role=\"alert\">\n    This is a light alert—check it out!\n</div>\n<div class=\"alert alert-dark\" role=\"alert\">\n    This is a dark alert—check it out!\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/alert/showcase-alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowcaseAlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShowcaseAlertComponent = (function () {
    function ShowcaseAlertComponent() {
    }
    return ShowcaseAlertComponent;
}());
ShowcaseAlertComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'showcase-alert',
        template: __webpack_require__("../../../../../src/app/showcase/components/alert/showcase-alert.component.html")
    }),
    __metadata("design:paramtypes", [])
], ShowcaseAlertComponent);

//# sourceMappingURL=showcase-alert.component.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/application-frame/application-frame-dialog/showcase-application-frame-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<systelab-app-frame [userName]=\"userName\" [userFullName]=\"userFullName\" [hospitalName]=\"hospitalName\" [menu]=\"menu\"\n                    [tabs]=\"sidetabs\" [actions]=\"sideactions\" (selected)=\"doSelect($event)\">\n    <div header-content>\n        <button type=\"button\" class=\"btn btn-sm\">Button Top</button>\n    </div>\n    <div class=\"h-100 w-100 p-2\" style=\"overflow: auto;\" main-content>\n        <div *ngIf=\"currentTab==='T1'\"></div>\n        <div *ngIf=\"currentTab==='T2'\"></div>\n    </div>\n</systelab-app-frame>\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/application-frame/application-frame-dialog/showcase-application-frame-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ShowcaseApplicationFrameDialogParameters */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowcaseApplicationFrameDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_modialog__ = __webpack_require__("../../../../ngx-modialog/bundle/ngx-modialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__systelab_components_modal_plugin_modulab_modal_context__ = __webpack_require__("../../../../../src/app/systelab-components/modal/plugin/modulab/modal-context.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__systelab_components_modal_message_popup_message_popup_view_component__ = __webpack_require__("../../../../../src/app/systelab-components/modal/message-popup/message-popup-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__systelab_components_modal_dialog_dialog_service__ = __webpack_require__("../../../../../src/app/systelab-components/modal/dialog/dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__systelab_components_modal_message_popup_message_popup_service__ = __webpack_require__("../../../../../src/app/systelab-components/modal/message-popup/message-popup.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__systelab_components_applicationframe_header_app_header_component__ = __webpack_require__("../../../../../src/app/systelab-components/applicationframe/header/app-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__systelab_components_applicationframe_sidebar_app_sidebar_component__ = __webpack_require__("../../../../../src/app/systelab-components/applicationframe/sidebar/app-sidebar.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ShowcaseApplicationFrameDialogParameters = (function (_super) {
    __extends(ShowcaseApplicationFrameDialogParameters, _super);
    function ShowcaseApplicationFrameDialogParameters() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fullScreen = true;
        return _this;
    }
    return ShowcaseApplicationFrameDialogParameters;
}(__WEBPACK_IMPORTED_MODULE_2__systelab_components_modal_plugin_modulab_modal_context__["a" /* ModulabModalContext */]));

var ShowcaseApplicationFrameDialog = (function (_super) {
    __extends(ShowcaseApplicationFrameDialog, _super);
    function ShowcaseApplicationFrameDialog(dialog, messagePopupService, dialogService) {
        var _this = _super.call(this, dialog) || this;
        _this.dialog = dialog;
        _this.messagePopupService = messagePopupService;
        _this.dialogService = dialogService;
        _this.currentTab = 'T1';
        _this.frameWidth = 0;
        _this.frameHeight = 0;
        _this.menu = [];
        _this.sideactions = [];
        _this.sidetabs = [];
        _this.parameters = dialog.context;
        _this.frameWidth = (window.innerWidth);
        _this.frameHeight = (window.innerHeight);
        return _this;
    }
    ShowcaseApplicationFrameDialog.prototype.close = function () {
        this.dialog.close('This is a test');
    };
    ShowcaseApplicationFrameDialog.getParameters = function () {
        return new ShowcaseApplicationFrameDialogParameters();
    };
    ShowcaseApplicationFrameDialog.prototype.ngOnInit = function () {
        var _this = this;
        this.userName = 'admin';
        this.userFullName = 'Administrator';
        this.hospitalName = 'Customer name';
        this.setMenu();
        this.sidetabs.push(new __WEBPACK_IMPORTED_MODULE_7__systelab_components_applicationframe_sidebar_app_sidebar_component__["c" /* ApplicationSidebarTab */]('T1', 'Tab One', true));
        this.sidetabs.push(new __WEBPACK_IMPORTED_MODULE_7__systelab_components_applicationframe_sidebar_app_sidebar_component__["c" /* ApplicationSidebarTab */]('T2', 'Tab Two', false));
        this.sideactions.push(new __WEBPACK_IMPORTED_MODULE_7__systelab_components_applicationframe_sidebar_app_sidebar_component__["a" /* ApplicationSidebarAction */]('Button 1', function () { return _this.action1(); }));
        this.sideactions.push(new __WEBPACK_IMPORTED_MODULE_7__systelab_components_applicationframe_sidebar_app_sidebar_component__["a" /* ApplicationSidebarAction */]('Close', function () { return _this.close(); }));
    };
    ShowcaseApplicationFrameDialog.prototype.setMenu = function () {
        var _this = this;
        this.menu = [];
        if (this.frameWidth < 1024) {
            this.menu.push(new __WEBPACK_IMPORTED_MODULE_6__systelab_components_applicationframe_header_app_header_component__["b" /* ApplicationHeaderMenuEntry */]('Tab One', false, function () { return _this.doSelect('T1'); }));
            this.menu.push(new __WEBPACK_IMPORTED_MODULE_6__systelab_components_applicationframe_header_app_header_component__["b" /* ApplicationHeaderMenuEntry */]('Tab Two', false, function () { return _this.doSelect('T2'); }));
            this.menu.push(new __WEBPACK_IMPORTED_MODULE_6__systelab_components_applicationframe_header_app_header_component__["b" /* ApplicationHeaderMenuEntry */]('', true));
            this.menu.push(new __WEBPACK_IMPORTED_MODULE_6__systelab_components_applicationframe_header_app_header_component__["b" /* ApplicationHeaderMenuEntry */]('Close', false, function () { return _this.close(); }));
            this.menu.push(new __WEBPACK_IMPORTED_MODULE_6__systelab_components_applicationframe_header_app_header_component__["b" /* ApplicationHeaderMenuEntry */]('', true));
        }
        this.menu.push(new __WEBPACK_IMPORTED_MODULE_6__systelab_components_applicationframe_header_app_header_component__["b" /* ApplicationHeaderMenuEntry */]('Menu 1', false, function () { return _this.action1(); }));
        this.menu.push(new __WEBPACK_IMPORTED_MODULE_6__systelab_components_applicationframe_header_app_header_component__["b" /* ApplicationHeaderMenuEntry */]('Menu 2', false, function () { return _this.action1(); }));
        this.menu.push(new __WEBPACK_IMPORTED_MODULE_6__systelab_components_applicationframe_header_app_header_component__["b" /* ApplicationHeaderMenuEntry */]('Menu 3', false, function () { return _this.action1(); }));
        this.menu.push(new __WEBPACK_IMPORTED_MODULE_6__systelab_components_applicationframe_header_app_header_component__["b" /* ApplicationHeaderMenuEntry */]('', true));
        this.menu.push(new __WEBPACK_IMPORTED_MODULE_6__systelab_components_applicationframe_header_app_header_component__["b" /* ApplicationHeaderMenuEntry */]('Menu 4', false, function () { return _this.action1(); }));
    };
    ShowcaseApplicationFrameDialog.prototype.onResize = function (event) {
        this.frameWidth = (window.innerWidth);
        this.frameHeight = (window.innerHeight);
        this.setMenu();
    };
    ShowcaseApplicationFrameDialog.prototype.doSelect = function (id) {
        this.currentTab = id;
    };
    ShowcaseApplicationFrameDialog.prototype.action1 = function () {
    };
    return ShowcaseApplicationFrameDialog;
}(__WEBPACK_IMPORTED_MODULE_3__systelab_components_modal_message_popup_message_popup_view_component__["a" /* DefaultModalActions */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ShowcaseApplicationFrameDialog.prototype, "onResize", null);
ShowcaseApplicationFrameDialog = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/showcase/components/application-frame/application-frame-dialog/showcase-application-frame-dialog.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_modialog__["c" /* DialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_modialog__["c" /* DialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__systelab_components_modal_message_popup_message_popup_service__["a" /* MessagePopupService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__systelab_components_modal_message_popup_message_popup_service__["a" /* MessagePopupService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__systelab_components_modal_dialog_dialog_service__["a" /* DialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__systelab_components_modal_dialog_dialog_service__["a" /* DialogService */]) === "function" && _c || Object])
], ShowcaseApplicationFrameDialog);

var _a, _b, _c;
//# sourceMappingURL=showcase-application-frame-dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/application-frame/showcase-application-frame.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pt-2\">\n    <button type=\"button\" class=\"btn btn-lg\" (click)=\"showApplicationFrame();\"><i\n            class=\"icon-info-circle\"></i> Show Frame\n    </button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/application-frame/showcase-application-frame.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowcaseApplicationFrameComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__application_frame_dialog_showcase_application_frame_dialog_component__ = __webpack_require__("../../../../../src/app/showcase/components/application-frame/application-frame-dialog/showcase-application-frame-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__systelab_components_modal_dialog_dialog_service__ = __webpack_require__("../../../../../src/app/systelab-components/modal/dialog/dialog.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShowcaseApplicationFrameComponent = (function () {
    function ShowcaseApplicationFrameComponent(dialogService) {
        this.dialogService = dialogService;
    }
    ShowcaseApplicationFrameComponent.prototype.showApplicationFrame = function () {
        this.dialogService.showDialog(__WEBPACK_IMPORTED_MODULE_1__application_frame_dialog_showcase_application_frame_dialog_component__["a" /* ShowcaseApplicationFrameDialog */], __WEBPACK_IMPORTED_MODULE_1__application_frame_dialog_showcase_application_frame_dialog_component__["a" /* ShowcaseApplicationFrameDialog */].getParameters());
    };
    return ShowcaseApplicationFrameComponent;
}());
ShowcaseApplicationFrameComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'showcase-application-frame',
        template: __webpack_require__("../../../../../src/app/showcase/components/application-frame/showcase-application-frame.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__systelab_components_modal_dialog_dialog_service__["a" /* DialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__systelab_components_modal_dialog_dialog_service__["a" /* DialogService */]) === "function" && _a || Object])
], ShowcaseApplicationFrameComponent);

var _a;
//# sourceMappingURL=showcase-application-frame.component.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/button/showcase-button.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row align-items-center mt-1\">\n    <label class=\"col slab-label slab-label-215\" for=\"full-width-input\">Regular</label>\n    <div class=\"col-sm\">\n        <button type=\"button\" class=\"btn btn-primary mt-2\">Primary</button>\n        <button type=\"button\" class=\"btn btn-secondary mt-2\">Secondary</button>\n        <button type=\"button\" class=\"btn btn-success mt-2\">Success</button>\n        <button type=\"button\" class=\"btn btn-danger mt-2\">Danger</button>\n        <button type=\"button\" class=\"btn btn-warning mt-2\">Warning</button>\n        <button type=\"button\" class=\"btn btn-info mt-2\">Info</button>\n        <button type=\"button\" class=\"btn btn-light mt-2\">Light</button>\n        <button type=\"button\" class=\"btn btn-dark mt-2\">Dark</button>\n        <button type=\"button\" class=\"btn btn-link mt-2\">Link</button>\n    </div>\n</div>\n\n<div class=\"row align-items-center mt-1\">\n    <label class=\"col slab-label slab-label-215\" for=\"full-width-input\">Outline</label>\n    <div class=\"col-sm\">\n        <button type=\"button\" class=\"btn btn-outline-primary mt-2\">Primary</button>\n        <button type=\"button\" class=\"btn btn-outline-secondary mt-2\">Secondary</button>\n        <button type=\"button\" class=\"btn btn-outline-success mt-2\">Success</button>\n        <button type=\"button\" class=\"btn btn-outline-danger mt-2\">Danger</button>\n        <button type=\"button\" class=\"btn btn-outline-warning mt-2\">Warning</button>\n        <button type=\"button\" class=\"btn btn-outline-info mt-2\">Info</button>\n        <button type=\"button\" class=\"btn btn-outline-light mt-2\">Light</button>\n        <button type=\"button\" class=\"btn btn-outline-dark mt-2\">Dark</button>\n    </div>\n</div>\n\n<div class=\"row align-items-center mt-1\">\n    <label class=\"col slab-label slab-label-215\" for=\"full-width-input\">Group</label>\n    <div class=\"col-sm\">\n        <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\n            <button type=\"button\" class=\"btn btn-secondary\">Left</button>\n            <button type=\"button\" class=\"btn btn-secondary\">Middle</button>\n            <button type=\"button\" class=\"btn btn-secondary\">Right</button>\n        </div>\n    </div>\n</div>\n\n<div class=\"row align-items-center mt-1\">\n    <label class=\"col slab-label slab-label-215\" for=\"full-width-input\">Small</label>\n    <div class=\"col-sm\">\n        <button type=\"button\" class=\"btn btn-primary mt-2\">Primary</button>\n        <button type=\"button\" class=\"btn btn-secondary mt-2\">Secondary</button>\n    </div>\n</div>\n\n<div class=\"row align-items-center mt-1\">\n    <label class=\"col slab-label slab-label-215\" for=\"full-width-input\">Large</label>\n    <div class=\"col-sm\">\n        <button type=\"button\" class=\"btn btn-lg btn-primary mt-2\">Primary</button>\n        <button type=\"button\" class=\"btn btn-lg btn-secondary mt-2\">Secondary</button>\n    </div>\n</div>\n\n\n\n<div class=\"row align-items-center mt-1\">\n    <label class=\"col slab-label slab-label-215\" for=\"full-width-input\">Segmented</label>\n    <div class=\"col-sm\">\n        <div class=\"input-group\">\n            <input type=\"text\" class=\"form-control\" aria-label=\"Text input with segmented button dropdown\">\n            <div class=\"input-group-btn\">\n                <button type=\"button\" class=\"btn btn-secondary\">Action</button>\n                <button type=\"button\" class=\"btn btn-secondary dropdown-toggle dropdown-toggle-split\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    <span class=\"sr-only\">Toggle Dropdown</span>\n                </button>\n                <div class=\"dropdown-menu dropdown-menu-right\">\n                    <a class=\"dropdown-item\" href=\"#\">Action</a>\n                    <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                    <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                    <div role=\"separator\" class=\"dropdown-divider\"></div>\n                    <a class=\"dropdown-item\" href=\"#\">Separated link</a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/button/showcase-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowcaseButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShowcaseButtonComponent = (function () {
    function ShowcaseButtonComponent() {
    }
    return ShowcaseButtonComponent;
}());
ShowcaseButtonComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'showcase-button',
        template: __webpack_require__("../../../../../src/app/showcase/components/button/showcase-button.component.html")
    }),
    __metadata("design:paramtypes", [])
], ShowcaseButtonComponent);

//# sourceMappingURL=showcase-button.component.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/checkbox/showcase-checkbox.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row align-items-center mt-1\">\n    <label class=\"col slab-label slab-label-215\">Switcher</label>\n    <div class=\"col-sm\">\n        <systelab-switch id=\"enabled\" name=\"enabled\"\n                         [(isChecked)]=\"check2\"></systelab-switch>\n        <systelab-switch [disabled]=\"true\" id=\"enabled\" name=\"enabled\"\n                         [(isChecked)]=\"check1\"></systelab-switch>\n        <systelab-switch [disabled]=\"true\" id=\"enabled\" name=\"enabled\"\n                         [(isChecked)]=\"check3\"></systelab-switch>\n    </div>\n</div>\n\n<div class=\"row align-items-top mt-3\">\n    <label class=\"col slab-label slab-label-215\">Column</label>\n    <div class=\"col-sm\">\n        <div>\n            <input type=\"checkbox\" id=\"check_urgent\">\n            <label for=\"check_urgent\"> Urgent</label>\n        </div>\n        <div>\n            <input type=\"checkbox\" checked id=\"check_not_urgent\">\n            <label for=\"check_not_urgent\"> Not Urgent</label>\n        </div>\n    </div>\n</div>\n\n<div class=\"row align-items-center mt-3\">\n    <label class=\"col slab-label slab-label-215\">Inline (using a grid)</label>\n    <div class=\"col-sm-2\">\n        <input type=\"checkbox\" id=\"check_urgent2\">\n        <label for=\"check_urgent2\"> Urgent</label>\n    </div>\n    <div class=\"col-sm-2\">\n        <input type=\"checkbox\" checked id=\"check_not_urgent2\">\n        <label for=\"check_not_urgent2\"> Not Urgent</label>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/checkbox/showcase-checkbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowcaseCheckboxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShowcaseCheckboxComponent = (function () {
    function ShowcaseCheckboxComponent() {
        this.check1 = false;
        this.check2 = false;
        this.check3 = true;
    }
    return ShowcaseCheckboxComponent;
}());
ShowcaseCheckboxComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'showcase-checkbox',
        template: __webpack_require__("../../../../../src/app/showcase/components/checkbox/showcase-checkbox.component.html")
    }),
    __metadata("design:paramtypes", [])
], ShowcaseCheckboxComponent);

//# sourceMappingURL=showcase-checkbox.component.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/combobox/showcase-combobox.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row align-items-center mt-1\">\n    <label class=\"col slab-label slab-label-215\" for=\"form-h-s\">Sin buscador</label>\n    <systelab-select\n            class=\"col-sm\"\n            [values]=\"comboOptionList\"\n            (change)=\"comboChangeEvent($event)\">\n    </systelab-select>\n</div>\n<div class=\"row align-items-center mt-1\">\n    <label class=\"col slab-label slab-label-215\" for=\"form-h-s\">Con valor asignado</label>\n    <systelab-select\n            class=\"col-sm\"\n            [description]=\"'San Petersburgo'\"\n            [id]=\"1\"\n            [values]=\"comboOptionList\"\n            (change)=\"comboChangeEvent($event)\">\n    </systelab-select>\n</div>\n<div class=\"row align-items-center mt-1\">\n    <label class=\"col slab-label slab-label-215\" for=\"form-h-s\">Con buscador</label>\n    <systelab-select\n            class=\"col-sm\"\n            [values]=\"comboOptionList\" [filter]=\"true\"\n            (change)=\"comboChangeEvent($event)\">\n    </systelab-select>\n</div>\n<div class=\"row align-items-center mt-1\">\n    <label class=\"col slab-label slab-label-215\" for=\"form-h-s\">Color Picker</label>\n    <systelab-colorpicker\n            class=\"col-sm\"\n            [(id)]=\"colorId\">\n    </systelab-colorpicker>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/combobox/showcase-combobox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowcaseComboboxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShowcaseComboboxComponent = (function () {
    function ShowcaseComboboxComponent() {
        this.comboOptionList = [];
        this.comboOptionList = [
            { description: 'New York', id: 1 },
            { description: 'Rome', id: 2 },
            { description: 'London', id: 3 },
            { description: 'Barcelona', id: 4 },
            { description: 'París', id: 5 },
            { description: 'Berlín', id: 6 },
            { description: 'Oslo', id: 7 },
            { description: 'Atenas', id: 8 },
            { description: 'Lisboa', id: 9 },
            { description: 'Amsterdam', id: 10 },
            { description: 'St Petersburgo', id: 11 }
        ];
    }
    ShowcaseComboboxComponent.prototype.comboChangeEvent = function (event) {
        console.log('comboValue ', event);
        console.log(this.colorId);
        console.log(this.colorValue);
    };
    return ShowcaseComboboxComponent;
}());
ShowcaseComboboxComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'showcase-combobox',
        template: __webpack_require__("../../../../../src/app/showcase/components/combobox/showcase-combobox.component.html")
    }),
    __metadata("design:paramtypes", [])
], ShowcaseComboboxComponent);

//# sourceMappingURL=showcase-combobox.component.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/datepicker/showcase-datepicker.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row align-items-center mt-1\">\n    <label class=\"col slab-label slab-label-215\" for=\"form-h-s\">Datepicker Time</label>\n    <div class=\"col\">\n        <systelab-date-time\n                [(currentDate)]=\"myDate\"></systelab-date-time>\n    </div>\n</div>\n<div class=\"row align-items-center mt-1\">\n    <label class=\"col slab-label slab-label-215\" for=\"form-h-s\">Date error always</label>\n    <div class=\"col-sm-4\">\n        <div class=\"slab-form-icon\">\n            <systelab-datepicker\n                    [error]=\"true\"\n                    [(currentDate)]=\"myDate\"\n                    class=\"w-33\"></systelab-datepicker>\n        </div>\n    </div>\n</div>\n<div class=\"row align-items-center mt-1\">\n    <label class=\"col slab-label slab-label-215\" for=\"form-h-s\">Date error (red is past)</label>\n    <div class=\"col-sm-4\">\n        <div class=\"slab-form-icon\">\n            <systelab-datepicker\n                    [(currentDate)]=\"myDate\"\n                    [markPreviousDate]=\"true\"\n                    class=\"w-33\"></systelab-datepicker>\n        </div>\n    </div>\n</div>\n<div class=\"row align-items-center mt-1\">\n    <label class=\"col slab-label slab-label-215\" for=\"form-h-s\">Date required bottom</label>\n    <div class=\"col-sm-4\">\n        <div class=\"slab-form-icon\">\n            <systelab-datepicker\n                    [isRequired]=\"true\"\n                    [(currentDate)]=\"myDate\"\n                    class=\"w-33\"></systelab-datepicker>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/datepicker/showcase-datepicker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowcaseDatepickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShowcaseDatepickerComponent = (function () {
    function ShowcaseDatepickerComponent() {
        this.myDate = new Date();
    }
    return ShowcaseDatepickerComponent;
}());
ShowcaseDatepickerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'showcase-datepicker',
        template: __webpack_require__("../../../../../src/app/showcase/components/datepicker/showcase-datepicker.component.html")
    }),
    __metadata("design:paramtypes", [])
], ShowcaseDatepickerComponent);

//# sourceMappingURL=showcase-datepicker.component.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/dialog/full-flex/showcase-full-flex-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"slab-dialog-header\">Flex</div>\n<div class=\"slab-dialog-message\">\n    <showcase-full-flex>...</showcase-full-flex>\n</div>\n<div class=\"slab-dialog-buttons\">\n    <button type=\"button\" class=\"btn btn-primary float-right\" (click)=\"close()\"> Submit</button>\n</div>\n<div class=\"slab-dialog-close\" (click)=\"close()\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/dialog/full-flex/showcase-full-flex-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ShowcaseFullFlexDialogParameters */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowcaseFullFlexDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_modialog__ = __webpack_require__("../../../../ngx-modialog/bundle/ngx-modialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__systelab_components_modal_plugin_modulab_modal_context__ = __webpack_require__("../../../../../src/app/systelab-components/modal/plugin/modulab/modal-context.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__systelab_components_modal_message_popup_message_popup_view_component__ = __webpack_require__("../../../../../src/app/systelab-components/modal/message-popup/message-popup-view.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShowcaseFullFlexDialogParameters = (function (_super) {
    __extends(ShowcaseFullFlexDialogParameters, _super);
    function ShowcaseFullFlexDialogParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ShowcaseFullFlexDialogParameters;
}(__WEBPACK_IMPORTED_MODULE_2__systelab_components_modal_plugin_modulab_modal_context__["a" /* ModulabModalContext */]));

var ShowcaseFullFlexDialog = (function (_super) {
    __extends(ShowcaseFullFlexDialog, _super);
    function ShowcaseFullFlexDialog(dialog) {
        var _this = _super.call(this, dialog) || this;
        _this.dialog = dialog;
        _this.parameters = dialog.context;
        return _this;
    }
    ShowcaseFullFlexDialog.prototype.close = function () {
        this.dialog.close('This is a test');
    };
    ShowcaseFullFlexDialog.getParameters = function () {
        return new ShowcaseFullFlexDialogParameters();
    };
    return ShowcaseFullFlexDialog;
}(__WEBPACK_IMPORTED_MODULE_3__systelab_components_modal_message_popup_message_popup_view_component__["a" /* DefaultModalActions */]));
ShowcaseFullFlexDialog = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/showcase/components/dialog/full-flex/showcase-full-flex-dialog.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_modialog__["c" /* DialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_modialog__["c" /* DialogRef */]) === "function" && _a || Object])
], ShowcaseFullFlexDialog);

var _a;
//# sourceMappingURL=showcase-full-flex-dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/dialog/full-flex/showcase-full-flex.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"h-100 d-flex flex-row flex-nowrap\">\n    <div class=\"text-center text-nowrap bg-primary d-flex align-items-center justify-content-center\">\n        <div>Content width div</div>\n    </div>\n    <div class=\"w-100 text-center bg-secondary\">\n\n        <div class=\"h-100\">\n            <div class=\"h-100 d-flex flex-column flex-nowrap\">\n\n                <div class=\"text-center text-nowrap bg-warning d-flex align-items-center justify-content-center\" style=\"height: 200px;\">\n                    <div>Content height div</div>\n                </div>\n                <div class=\"d-flex flex-column flex-nowrap h-100 bg-danger\">\n\n                <textarea readonly name=\"\" id=\"\" class=\"h-100 no-resize\">\nMarkup example:\nMarkup example:\n\n(You can also use this form as an example, this very textarea is also flexed)\n                </textarea>\n                </div>\n                <div class=\"text-center text-nowrap bg-info d-flex align-items-center justify-content-center\"  style=\"height: 120px;\">\n                    <div>Content height div</div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n    <div class=\"text-center text-nowrap bg-success d-flex align-items-center justify-content-center\" style=\"width: 300px;\">\n        <div class=\"align-middle\">Content width div</div>\n    </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/dialog/full-flex/showcase-full-flex.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowcaseFullFlexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__systelab_components_spinner_touch_spin_values__ = __webpack_require__("../../../../../src/app/systelab-components/spinner/touch.spin-values.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShowcaseFullFlexComponent = (function () {
    function ShowcaseFullFlexComponent() {
        this.touchSpinValues1 = new __WEBPACK_IMPORTED_MODULE_1__systelab_components_spinner_touch_spin_values__["a" /* TouchSpinValues */](1, 1, 10);
        this.touchSpinValues2 = new __WEBPACK_IMPORTED_MODULE_1__systelab_components_spinner_touch_spin_values__["a" /* TouchSpinValues */](5, 1, 20, 2);
    }
    return ShowcaseFullFlexComponent;
}());
ShowcaseFullFlexComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'showcase-full-flex',
        template: __webpack_require__("../../../../../src/app/showcase/components/dialog/full-flex/showcase-full-flex.component.html")
    }),
    __metadata("design:paramtypes", [])
], ShowcaseFullFlexComponent);

//# sourceMappingURL=showcase-full-flex.component.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/dialog/lower-flex/showcase-lower-flex-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"slab-dialog-header\">Form + lower flex textarea</div>\n<div class=\"slab-dialog-message\">\n    <showcase-lower-flex [language]=\"parameters.language\"></showcase-lower-flex>\n</div>\n<div class=\"slab-dialog-buttons\">\n    <div class=\"dropup slab-button-dropdown\">\n        <!-- This is the element toggling the dropdown -->\n        <button type=\"button\" class=\"btn btn-lg dropdown-toogle\" data-toggle=\"dropdown\">Drop down bottom-left <i\n                class=\"icon-chevron-up\"></i></button>\n        <!-- This is the dropdown -->\n        <div class=\"dropdown-menu slab-dropdown\">\n            <ul>\n                <li><a>Action 1</a></li>\n                <li><a>Action 2</a></li>\n            </ul>\n        </div>\n    </div>\n    <button type=\"button\" class=\"btn btn-lg float-right\" (click)=\"close()\"> Submit</button>\n</div>\n<div class=\"slab-dialog-close\" (click)=\"close()\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/dialog/lower-flex/showcase-lower-flex-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LowerFlexDialogParameters */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowcaseLowerFlexDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_modialog__ = __webpack_require__("../../../../ngx-modialog/bundle/ngx-modialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__systelab_components_modal_plugin_modulab_modal_context__ = __webpack_require__("../../../../../src/app/systelab-components/modal/plugin/modulab/modal-context.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__systelab_components_modal_message_popup_message_popup_view_component__ = __webpack_require__("../../../../../src/app/systelab-components/modal/message-popup/message-popup-view.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LowerFlexDialogParameters = (function (_super) {
    __extends(LowerFlexDialogParameters, _super);
    function LowerFlexDialogParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LowerFlexDialogParameters;
}(__WEBPACK_IMPORTED_MODULE_2__systelab_components_modal_plugin_modulab_modal_context__["a" /* ModulabModalContext */]));

var ShowcaseLowerFlexDialog = (function (_super) {
    __extends(ShowcaseLowerFlexDialog, _super);
    function ShowcaseLowerFlexDialog(dialog) {
        var _this = _super.call(this, dialog) || this;
        _this.dialog = dialog;
        _this.parameters = dialog.context;
        return _this;
    }
    ShowcaseLowerFlexDialog.prototype.close = function () {
        this.dialog.close('This is a test');
    };
    ShowcaseLowerFlexDialog.getParameters = function () {
        return new LowerFlexDialogParameters();
    };
    return ShowcaseLowerFlexDialog;
}(__WEBPACK_IMPORTED_MODULE_3__systelab_components_modal_message_popup_message_popup_view_component__["a" /* DefaultModalActions */]));
ShowcaseLowerFlexDialog = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/showcase/components/dialog/lower-flex/showcase-lower-flex-dialog.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_modialog__["c" /* DialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_modialog__["c" /* DialogRef */]) === "function" && _a || Object])
], ShowcaseLowerFlexDialog);

var _a;
//# sourceMappingURL=showcase-lower-flex-dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/dialog/lower-flex/showcase-lower-flex.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"d-flex flex-column h-100 w-100 p-3\">\n    <div class=\"align-self-end\">\n        <systelab-switch id=\"switch1\" name=\"enabled\"></systelab-switch>\n        <label for=\"switch1\">Omit</label>\n    </div>\n    <div class=\"w-100\">\n        <div class=\"row align-items-center mt-1\">\n            <label class=\"col slab-label slab-label-215\">\n                Date\n            </label>\n            <div class=\"col d-flex\">\n                <div class=\"col px-0 mr-1\">\n                    <systelab-datepicker [(currentDate)]=\"myDate\"></systelab-datepicker>\n                </div>\n                <systelab-spinner class=\"mx-1\" [spinValues]=\"touchSpinValues1\" id=\"percentSample1\">\n                </systelab-spinner>\n                <systelab-spinner class=\"mx-1\" [spinValues]=\"touchSpinValues2\" id=\"percentSample2\">\n                </systelab-spinner>\n                <systelab-spinner class=\"ml-1\" [spinValues]=\"touchSpinValues3\" id=\"percentSample3\">\n                </systelab-spinner>\n            </div>\n        </div>\n        <div class=\"row align-items-center mt-1\">\n            <label class=\"col slab-label slab-label-215\" for=\"valueid\">\n                Value\n            </label>\n            <div class=\"col\">\n                <input type=\"text\" id=\"valueid\" class=\"form-control\" name=\"value\">\n            </div>\n        </div>\n        <div class=\"row align-items-center mt-1\">\n            <label class=\"col slab-label slab-label-215\" for=\"to-input\">\n                Entered by\n            </label>\n            <div class=\"col\">\n                <input type=\"text\" id=\"to-input\" class=\"form-control\" name=\"user\">\n            </div>\n        </div>\n        <div class=\"row align-items-center mt-1\">\n            <label class=\"col slab-label slab-label-215\" for=\"to-input\">\n                Subindex\n            </label>\n            <div class=\"col\">\n                <div class=\"slab-input form-control w-100\">\n                    <font>1<sub>2S</sub>,</font>\n                    <font class=\"text-warning\">1<sub>2.5S</sub>,</font>\n                    <font class=\"text-danger\">1<sub>3S</sub></font>\n                </div>\n            </div>\n        </div>\n        <div class=\"row align-items-center mt-1\">\n            <label class=\"col slab-label slab-label-215\" for=\"to-input\">\n                Across Flags\n            </label>\n            <div class=\"col\">\n                <systelab-select></systelab-select>\n            </div>\n        </div>\n    </div>\n    <div class=\"w-100 h-100 d-flex\">\n        <div class=\"row no-gutters mt-1 w-100\">\n            <label class=\"col slab-label slab-label-215\" for=\"to-input\">\n                Comments\n            </label>\n            <div class=\"col\">\n                <textarea readonly name=\"\" id=\"\" class=\"form-control slab-textarea slab-textarea-no-resize h-100\">\n                </textarea>\n            </div>\n        </div>\n    </div>\n</form>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/dialog/lower-flex/showcase-lower-flex.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowcaseLowerFlexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__systelab_components_spinner_touch_spin_values__ = __webpack_require__("../../../../../src/app/systelab-components/spinner/touch.spin-values.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShowcaseLowerFlexComponent = (function () {
    function ShowcaseLowerFlexComponent() {
        this.touchSpinValues1 = new __WEBPACK_IMPORTED_MODULE_1__systelab_components_spinner_touch_spin_values__["a" /* TouchSpinValues */](1, 1, 10);
        this.touchSpinValues2 = new __WEBPACK_IMPORTED_MODULE_1__systelab_components_spinner_touch_spin_values__["a" /* TouchSpinValues */](5, 1, 20, 2);
        this.touchSpinValues3 = new __WEBPACK_IMPORTED_MODULE_1__systelab_components_spinner_touch_spin_values__["a" /* TouchSpinValues */](5, 1, 20, 2);
    }
    return ShowcaseLowerFlexComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ShowcaseLowerFlexComponent.prototype, "language", void 0);
ShowcaseLowerFlexComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'showcase-lower-flex',
        template: __webpack_require__("../../../../../src/app/showcase/components/dialog/lower-flex/showcase-lower-flex.component.html")
    }),
    __metadata("design:paramtypes", [])
], ShowcaseLowerFlexComponent);

//# sourceMappingURL=showcase-lower-flex.component.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/dialog/progressbar-dialog/showcase-progressbar-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"slab-dialog-header d-flex\">Progresss Bar\n    <div class=\"slab-progress ml-auto\">\n        <div class=\"slab-progress-bar\" style=\"width: 40%;\"></div>\n    </div>\n</div>\n<div class=\"slab-dialog-message\">\n\n</div>\n<div class=\"slab-dialog-buttons\">\n    <button type=\"button\" class=\"btn btn-lg float-right\" (click)=\"close()\"> Submit</button>\n</div>\n<div class=\"slab-dialog-close\" (click)=\"close()\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/dialog/progressbar-dialog/showcase-progressbar-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ShowcaseProgressBarDialogParameters */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowcaseProgressBarDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_modialog__ = __webpack_require__("../../../../ngx-modialog/bundle/ngx-modialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__systelab_components_modal_plugin_modulab_modal_context__ = __webpack_require__("../../../../../src/app/systelab-components/modal/plugin/modulab/modal-context.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__systelab_components_modal_message_popup_message_popup_view_component__ = __webpack_require__("../../../../../src/app/systelab-components/modal/message-popup/message-popup-view.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShowcaseProgressBarDialogParameters = (function (_super) {
    __extends(ShowcaseProgressBarDialogParameters, _super);
    function ShowcaseProgressBarDialogParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ShowcaseProgressBarDialogParameters;
}(__WEBPACK_IMPORTED_MODULE_2__systelab_components_modal_plugin_modulab_modal_context__["a" /* ModulabModalContext */]));

var ShowcaseProgressBarDialog = (function (_super) {
    __extends(ShowcaseProgressBarDialog, _super);
    function ShowcaseProgressBarDialog(dialog) {
        var _this = _super.call(this, dialog) || this;
        _this.dialog = dialog;
        _this.parameters = dialog.context;
        return _this;
    }
    ShowcaseProgressBarDialog.prototype.close = function () {
        this.dialog.close('This is a test');
    };
    ShowcaseProgressBarDialog.getParameters = function () {
        return new ShowcaseProgressBarDialogParameters();
    };
    return ShowcaseProgressBarDialog;
}(__WEBPACK_IMPORTED_MODULE_3__systelab_components_modal_message_popup_message_popup_view_component__["a" /* DefaultModalActions */]));
ShowcaseProgressBarDialog = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/showcase/components/dialog/progressbar-dialog/showcase-progressbar-dialog.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_modialog__["c" /* DialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_modialog__["c" /* DialogRef */]) === "function" && _a || Object])
], ShowcaseProgressBarDialog);

var _a;
//# sourceMappingURL=showcase-progressbar-dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/dialog/showcase-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <button type=\"button\" class=\"btn btn-lg mt-2\"\n            (click)=\"showLowerFlexDialog();\">Form + lower flex textarea\n    </button>\n    <button type=\"button\" class=\"btn btn-lg mt-2\"\n            (click)=\"showTwoTabsDialog();\">Two tab rows\n    </button>\n    <button type=\"button\" class=\"btn btn-lg mt-2\"\n            (click)=\"showTwoColumnsDialog();\">Two columns\n    </button>\n    <button type=\"button\" class=\"btn btn-lg mt-2\"\n            (click)=\"showCalendarDialog();\">Calendar\n    </button>\n    <button type=\"button\" class=\"btn btn-lg mt-2\"\n            (click)=\"showFullFlexDialog();\">Flex\n    </button>\n    <button type=\"button\" class=\"btn btn-lg mt-2\"\n            (click)=\"showSplitDialog();\">Split\n    </button>\n    <button type=\"button\" class=\"btn btn-lg mt-2\"\n            (click)=\"showStandardDialog();\">Standard\n    </button>\n    <button type=\"button\" class=\"btn btn-lg mt-2\"\n            (click)=\"showProgressBarDialog();\">Progress bar\n    </button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/dialog/showcase-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowcaseDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__systelab_components_modal_dialog_dialog_service__ = __webpack_require__("../../../../../src/app/systelab-components/modal/dialog/dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lower_flex_showcase_lower_flex_dialog_component__ = __webpack_require__("../../../../../src/app/showcase/components/dialog/lower-flex/showcase-lower-flex-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__split_showcase_split_dialog_component__ = __webpack_require__("../../../../../src/app/showcase/components/dialog/split/showcase-split-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__systelab_components_calendar_calendar_dialog_component__ = __webpack_require__("../../../../../src/app/systelab-components/calendar/calendar-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__full_flex_showcase_full_flex_dialog_component__ = __webpack_require__("../../../../../src/app/showcase/components/dialog/full-flex/showcase-full-flex-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__progressbar_dialog_showcase_progressbar_dialog_component__ = __webpack_require__("../../../../../src/app/showcase/components/dialog/progressbar-dialog/showcase-progressbar-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__two_columns_showcase_two_columns_dialog_component__ = __webpack_require__("../../../../../src/app/showcase/components/dialog/two-columns/showcase-two-columns-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__two_tabs_showcase_two_tabs_dialog_component__ = __webpack_require__("../../../../../src/app/showcase/components/dialog/two-tabs/showcase-two-tabs-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__standard_dialog_showcase_standard_dialog_component__ = __webpack_require__("../../../../../src/app/showcase/components/dialog/standard-dialog/showcase-standard-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ShowcaseDialogComponent = (function () {
    function ShowcaseDialogComponent(dialogService) {
        this.dialogService = dialogService;
    }
    ShowcaseDialogComponent.prototype.showLowerFlexDialog = function () {
        var parameters = __WEBPACK_IMPORTED_MODULE_2__lower_flex_showcase_lower_flex_dialog_component__["a" /* ShowcaseLowerFlexDialog */].getParameters();
        parameters.width = 960;
        parameters.height = 600;
        parameters.index = 4;
        this.dialogService.showDialog(__WEBPACK_IMPORTED_MODULE_2__lower_flex_showcase_lower_flex_dialog_component__["a" /* ShowcaseLowerFlexDialog */], parameters);
    };
    ShowcaseDialogComponent.prototype.showSplitDialog = function () {
        var parameters = __WEBPACK_IMPORTED_MODULE_3__split_showcase_split_dialog_component__["a" /* ShowcaseSplitDialog */].getParameters();
        this.dialogService.showDialog(__WEBPACK_IMPORTED_MODULE_3__split_showcase_split_dialog_component__["a" /* ShowcaseSplitDialog */], parameters);
    };
    ShowcaseDialogComponent.prototype.showCalendarDialog = function () {
        var parameters = __WEBPACK_IMPORTED_MODULE_4__systelab_components_calendar_calendar_dialog_component__["a" /* CalendarDialog */].getParameters();
        this.dialogService.showDialog(__WEBPACK_IMPORTED_MODULE_4__systelab_components_calendar_calendar_dialog_component__["a" /* CalendarDialog */], parameters);
    };
    ShowcaseDialogComponent.prototype.showTwoTabsDialog = function () {
        var parameters = __WEBPACK_IMPORTED_MODULE_8__two_tabs_showcase_two_tabs_dialog_component__["a" /* ShowcaseTwoTabsDialog */].getParameters();
        parameters.width = 960;
        parameters.height = 600;
        parameters.index = 4;
        this.dialogService.showDialog(__WEBPACK_IMPORTED_MODULE_8__two_tabs_showcase_two_tabs_dialog_component__["a" /* ShowcaseTwoTabsDialog */], parameters);
    };
    ShowcaseDialogComponent.prototype.showFullFlexDialog = function () {
        var parameters = __WEBPACK_IMPORTED_MODULE_5__full_flex_showcase_full_flex_dialog_component__["a" /* ShowcaseFullFlexDialog */].getParameters();
        parameters.index = 4;
        parameters.dialogClass = 'w-66 h-66';
        this.dialogService.showDialog(__WEBPACK_IMPORTED_MODULE_5__full_flex_showcase_full_flex_dialog_component__["a" /* ShowcaseFullFlexDialog */], parameters);
    };
    ShowcaseDialogComponent.prototype.showProgressBarDialog = function () {
        var parameters = __WEBPACK_IMPORTED_MODULE_6__progressbar_dialog_showcase_progressbar_dialog_component__["a" /* ShowcaseProgressBarDialog */].getParameters();
        parameters.dialogClass = 'w-50 h-25';
        this.dialogService.showDialog(__WEBPACK_IMPORTED_MODULE_6__progressbar_dialog_showcase_progressbar_dialog_component__["a" /* ShowcaseProgressBarDialog */], parameters);
    };
    ShowcaseDialogComponent.prototype.showTwoColumnsDialog = function () {
        var parameters = __WEBPACK_IMPORTED_MODULE_7__two_columns_showcase_two_columns_dialog_component__["a" /* ShowcaseTwoColumnsDialog */].getParameters();
        parameters.width = 960;
        parameters.height = 600;
        parameters.index = 4;
        this.dialogService.showDialog(__WEBPACK_IMPORTED_MODULE_7__two_columns_showcase_two_columns_dialog_component__["a" /* ShowcaseTwoColumnsDialog */], parameters);
    };
    ShowcaseDialogComponent.prototype.showStandardDialog = function () {
        this.dialogService.showDialog(__WEBPACK_IMPORTED_MODULE_9__standard_dialog_showcase_standard_dialog_component__["a" /* ShowcaseStandardDialog */], __WEBPACK_IMPORTED_MODULE_9__standard_dialog_showcase_standard_dialog_component__["a" /* ShowcaseStandardDialog */].getParameters());
    };
    return ShowcaseDialogComponent;
}());
ShowcaseDialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'showcase-dialog',
        template: __webpack_require__("../../../../../src/app/showcase/components/dialog/showcase-dialog.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__systelab_components_modal_dialog_dialog_service__["a" /* DialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__systelab_components_modal_dialog_dialog_service__["a" /* DialogService */]) === "function" && _a || Object])
], ShowcaseDialogComponent);

var _a;
//# sourceMappingURL=showcase-dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/dialog/split/showcase-split-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"slab-dialog-header ng-binding\">Split</div>\n<div class=\"slab-dialog-message w-100\">\n\n    <split direction=\"horizontal\" (dragProgress)=\"dragProgressHorizontal($event)\">\n        <split-area [size]=\"testSelectorSize\" [visible]=\"isShowSelector\">\n            <div class=\"h-100\" style=\"background-color: violet;\"></div>\n        </split-area>\n        <split-area [size]=\"100-testSelectorSize\">\n            <split direction=\"vertical\" (dragProgress)=\"dragProgressVertical($event)\">\n                <split-area [size]=\"100-tableSize\">\n                    <div class=\"h-100\" style=\"background-color: red;\"></div>\n                </split-area>\n                <split-area [size]=\"tableSize\" [visible]=\"isShowDetails\">\n                    <div class=\"h-100\" style=\"background-color: green;\"></div>\n                </split-area>\n            </split>\n        </split-area>\n    </split>\n</div>\n<div class=\"slab-dialog-buttons\">\n    <button type=\"button\" class=\"btn btn-lg\" (click)=\"setShowDetails()\"\n            [class.btn-primary]=\"isShowDetails\">Details\n    </button>\n    <button type=\"button\" class=\"btn btn-lg\" (click)=\"setShowSelector()\"\n            [class.btn-primary]=\"isShowSelector\">Selector\n    </button>\n</div>\n<div class=\"slab-dialog-close\" (click)=\"close()\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/dialog/split/showcase-split-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SplitShowcaseDialogParameters */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowcaseSplitDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_modialog__ = __webpack_require__("../../../../ngx-modialog/bundle/ngx-modialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_systelab_preferences_lib_preferences_service__ = __webpack_require__("../../../../systelab-preferences/lib/preferences.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_systelab_preferences_lib_preferences_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_systelab_preferences_lib_preferences_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__systelab_components_modal_plugin_modulab_modal_context__ = __webpack_require__("../../../../../src/app/systelab-components/modal/plugin/modulab/modal-context.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__systelab_components_modal_message_popup_message_popup_view_component__ = __webpack_require__("../../../../../src/app/systelab-components/modal/message-popup/message-popup-view.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SplitShowcaseDialogParameters = (function (_super) {
    __extends(SplitShowcaseDialogParameters, _super);
    function SplitShowcaseDialogParameters() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fullScreen = true;
        return _this;
    }
    return SplitShowcaseDialogParameters;
}(__WEBPACK_IMPORTED_MODULE_3__systelab_components_modal_plugin_modulab_modal_context__["a" /* ModulabModalContext */]));

var ShowcaseSplitDialog = (function (_super) {
    __extends(ShowcaseSplitDialog, _super);
    function ShowcaseSplitDialog(dialog, preferencesService) {
        var _this = _super.call(this, dialog) || this;
        _this.dialog = dialog;
        _this.preferencesService = preferencesService;
        _this.isShowDetails = true;
        _this.isShowSelector = true;
        _this.testSelectorSize = 30;
        _this.tableSize = 20;
        _this.parameters = dialog.context;
        if (preferencesService.get('split1Size')) {
            _this.testSelectorSize = preferencesService.get('split1Size');
        }
        if (preferencesService.get('split2Size')) {
            _this.tableSize = preferencesService.get('split2Size');
        }
        return _this;
    }
    ShowcaseSplitDialog.prototype.close = function () {
        this.dialog.close();
    };
    ShowcaseSplitDialog.getParameters = function () {
        return new SplitShowcaseDialogParameters();
    };
    ShowcaseSplitDialog.prototype.dragProgressVertical = function (event) {
        this.preferencesService.put('split2Size', event[1]);
    };
    ShowcaseSplitDialog.prototype.dragProgressHorizontal = function (event) {
        this.preferencesService.put('split1Size', event[0]);
    };
    ShowcaseSplitDialog.prototype.setShowDetails = function () {
        this.isShowDetails = !this.isShowDetails;
    };
    ShowcaseSplitDialog.prototype.setShowSelector = function () {
        this.isShowSelector = !this.isShowSelector;
    };
    return ShowcaseSplitDialog;
}(__WEBPACK_IMPORTED_MODULE_4__systelab_components_modal_message_popup_message_popup_view_component__["a" /* DefaultModalActions */]));
ShowcaseSplitDialog = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/showcase/components/dialog/split/showcase-split-dialog.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_modialog__["c" /* DialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_modialog__["c" /* DialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_systelab_preferences_lib_preferences_service__["PreferencesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_systelab_preferences_lib_preferences_service__["PreferencesService"]) === "function" && _b || Object])
], ShowcaseSplitDialog);

var _a, _b;
//# sourceMappingURL=showcase-split-dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/dialog/standard-dialog/showcase-standard-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"slab-dialog-header\">Title</div>\n<systelab-tabs class=\"slab-flex-1 d-flex flex-column\">\n    <systelab-tab [title]=\"'title 1'\" [id]=\"'1'\">\n        <showcase-standard></showcase-standard>\n    </systelab-tab>\n    <systelab-tab [title]=\"'title 2'\" [id]=\"'2'\">\n        <showcase-standard></showcase-standard>\n    </systelab-tab>\n    <systelab-tab [title]=\"'title 3'\" [id]=\"'3'\">\n        <showcase-standard></showcase-standard>\n    </systelab-tab>\n</systelab-tabs>\n\n<div class=\"slab-dialog-buttons\">\n    <div class=\"dropup slab-button-dropdown\">\n        <button type=\"button\" class=\"btn btn-lg float-right\" (click)=\"close()\"> Submit</button>\n    </div>\n    <button type=\"button\" class=\"btn btn-lg float-right\" (click)=\"close()\"> Submit</button>\n</div>\n<div class=\"slab-dialog-close\" (click)=\"close()\"></div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/dialog/standard-dialog/showcase-standard-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ShowcaseStandardDialogParameters */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowcaseStandardDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_modialog__ = __webpack_require__("../../../../ngx-modialog/bundle/ngx-modialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__systelab_components_modal_plugin_modulab_modal_context__ = __webpack_require__("../../../../../src/app/systelab-components/modal/plugin/modulab/modal-context.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__systelab_components_modal_message_popup_message_popup_view_component__ = __webpack_require__("../../../../../src/app/systelab-components/modal/message-popup/message-popup-view.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShowcaseStandardDialogParameters = (function (_super) {
    __extends(ShowcaseStandardDialogParameters, _super);
    function ShowcaseStandardDialogParameters() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.width = 1000;
        _this.height = 600;
        return _this;
    }
    return ShowcaseStandardDialogParameters;
}(__WEBPACK_IMPORTED_MODULE_2__systelab_components_modal_plugin_modulab_modal_context__["a" /* ModulabModalContext */]));

var ShowcaseStandardDialog = (function (_super) {
    __extends(ShowcaseStandardDialog, _super);
    function ShowcaseStandardDialog(dialog) {
        var _this = _super.call(this, dialog) || this;
        _this.dialog = dialog;
        _this.parameters = dialog.context;
        return _this;
    }
    ShowcaseStandardDialog.prototype.close = function () {
        this.dialog.close('This is a test');
    };
    ShowcaseStandardDialog.getParameters = function () {
        return new ShowcaseStandardDialogParameters();
    };
    return ShowcaseStandardDialog;
}(__WEBPACK_IMPORTED_MODULE_3__systelab_components_modal_message_popup_message_popup_view_component__["a" /* DefaultModalActions */]));
ShowcaseStandardDialog = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/showcase/components/dialog/standard-dialog/showcase-standard-dialog.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_modialog__["c" /* DialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_modialog__["c" /* DialogRef */]) === "function" && _a || Object])
], ShowcaseStandardDialog);

var _a;
//# sourceMappingURL=showcase-standard-dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/dialog/standard-dialog/showcase-standard.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"d-flex flex-column h-100 w-100 p-2\">\n\n    <div class=\"row align-items-center mt-1\">\n        <label for=\"full_name_id\" class=\"col slab-label slab-label-165 text-truncate\">Full Name</label>\n        <div class=\"col\">\n            <input type=\"text\" class=\"form-control\" id=\"full_name_id\" name=\"full_name\" placeholder=\"John Deer\">\n        </div>\n    </div>\n\n    <div class=\"row align-items-center mt-1\">\n        <label for=\"field1\" class=\"col slab-label slab-label-165 text-truncate\">Field 1</label>\n        <div class=\"col\">\n            <input type=\"text\" class=\"form-control\" id=\"field1\" name=\"field1\">\n        </div>\n        <label for=\"field2\" class=\"slab-label text-truncate\">Field 2</label>\n        <div class=\"col\">\n            <input type=\"text\" class=\"form-control\" id=\"field2\" name=\"field2\">\n        </div>\n    </div>\n\n    <div class=\"row align-items-center mt-1\">\n        <label for=\"field3\" class=\"col slab-label slab-label-165 text-truncate\">Field 3</label>\n        <div class=\"col\">\n            <input type=\"text\" class=\"form-control\" id=\"field3\" name=\"field3\">\n        </div>\n        <label for=\"field3\" class=\"slab-label text-truncate\">Field 4</label>\n        <div class=\"col\">\n            <input type=\"text\" class=\"form-control\" id=\"field3\" name=\"field3\">\n        </div>\n        <div class=\"col\">\n            <input type=\"text\" class=\"form-control\" id=\"field3\" name=\"field3\">\n        </div>\n    </div>\n\n    <div class=\"row align-items-center mt-1\">\n        <label for=\"street1_id\" class=\"col slab-label slab-label-165 text-truncate\">Street Address 1</label>\n        <div class=\"col\">\n            <input type=\"text\" class=\"form-control\" id=\"street1_id\" name=\"street1_id\">\n        </div>\n    </div>\n\n    <div class=\"row align-items-center mt-1\">\n        <label for=\"field5\" class=\"col slab-label slab-label-165 text-truncate\">Field 5</label>\n        <div class=\"col\">\n            <input type=\"text\" class=\"form-control\" id=\"field5\" name=\"field5\">\n        </div>\n        <label for=\"field6\" class=\"slab-label text-truncate\">Field 6</label>\n        <div class=\"col\">\n            <input type=\"text\" class=\"form-control\" id=\"field6\" name=\"field6\">\n        </div>\n        <label for=\"field7\" class=\"slab-label text-truncate\">Field 7</label>\n        <div class=\"col\">\n            <input type=\"text\" class=\"form-control\" id=\"field7\" name=\"field7\">\n        </div>\n    </div>\n\n    <div class=\"row align-items-center mt-1\">\n        <label for=\"field8\" class=\"col slab-label slab-label-165 text-truncate\">Field 8</label>\n        <div class=\"col\">\n            <input type=\"text\" class=\"form-control\" id=\"field8\" name=\"field8\">\n        </div>\n        <div class=\"col\">\n            <input type=\"text\" class=\"form-control\" id=\"field81\" name=\"field81\">\n        </div>\n    </div>\n\n    <div class=\"row align-items-center mt-1\">\n        <label for=\"field\" class=\"col slab-label slab-label-165 text-truncate\">Field 9</label>\n        <div class=\"col d-flex justify-content-between\">\n            <input name=\"status-radio2\" type=\"radio\" id=\"radio-urgent2\"> <label\n            for=\"radio-urgent2\">Urgent</label>\n            <input name=\"status-radio2\" type=\"radio\" id=\"radio-urgent3\"> <label\n            for=\"radio-urgent2\">Urgent</label>\n            <input name=\"status-radio2\" type=\"radio\" checked id=\"radio-urgent4\"> <label\n            for=\"radio-urgent2\">Urgent</label>\n            <input name=\"status-radio2\" type=\"radio\" id=\"radio-urgent5\"> <label\n            for=\"radio-urgent2\">Urgent</label>\n        </div>\n    </div>\n\n\n    <div class=\"row align-items-center mt-1\">\n        <label for=\"field10\" class=\"col slab-label slab-label-165 text-truncate\">Field 10</label>\n        <div class=\"col\">\n            <systelab-select></systelab-select>\n        </div>\n        <div class=\"col\">\n            <systelab-select></systelab-select>\n        </div>\n    </div>\n\n    <div class=\"row align-items-center mt-1\">\n        <label for=\"field11\" class=\"col slab-label slab-label-165 text-truncate\">Field 11</label>\n        <div class=\"col\">\n            <systelab-select></systelab-select>\n        </div>\n        <label for=\"field12\" class=\"slab-label text-truncate\">Field 12</label>\n        <div class=\"col\">\n            <systelab-select></systelab-select>\n        </div>\n    </div>\n\n    <div class=\"row align-items-center mt-1\">\n        <label for=\"field13\" class=\"col slab-label slab-label-165 text-truncate\">Field 13</label>\n        <div class=\"col\">\n            <systelab-datepicker></systelab-datepicker>\n        </div>\n        <label for=\"field14\" class=\"slab-label text-truncate\">Field 14</label>\n        <div class=\"col\">\n            <systelab-datepicker></systelab-datepicker>\n        </div>\n    </div>\n    <div class=\"row align-items-center mt-1\">\n        <label for=\"field15\" class=\"col slab-label slab-label-165 text-truncate\">Field 15</label>\n        <div class=\"col\">\n            <systelab-date-time></systelab-date-time>\n        </div>\n    </div>\n    \n    <div class=\"row align-items-center mt-1\">\n        <label for=\"field16\" class=\"col slab-label slab-label-165 text-truncate\">Field 16</label>\n        <div class=\"col\">\n            <systelab-date-time></systelab-date-time>\n        </div>\n    </div>\n\n</form>\n    "

/***/ }),

/***/ "../../../../../src/app/showcase/components/dialog/standard-dialog/showcase-standard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowcaseStandardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ShowcaseStandardComponent = (function () {
    function ShowcaseStandardComponent() {
    }
    return ShowcaseStandardComponent;
}());
ShowcaseStandardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'showcase-standard',
        template: __webpack_require__("../../../../../src/app/showcase/components/dialog/standard-dialog/showcase-standard.component.html"),
    })
], ShowcaseStandardComponent);

//# sourceMappingURL=showcase-standard.component.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/dialog/two-columns/showcase-two-columns-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"slab-dialog-header\">Inline Inputs</div>\n<div class=\"slab-dialog-message\">\n    <showcase-two-columns-panel>Haill</showcase-two-columns-panel>\n</div>\n<div class=\"slab-dialog-buttons\">\n    <button type=\"button\" class=\"btn btn-lg float-right\" (click)=\"close()\"> Submit</button>\n</div>\n<div class=\"slab-dialog-close\" (click)=\"close()\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/dialog/two-columns/showcase-two-columns-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ShowcaseTwoColumnsDialogParameters */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowcaseTwoColumnsDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_modialog__ = __webpack_require__("../../../../ngx-modialog/bundle/ngx-modialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__systelab_components_modal_plugin_modulab_modal_context__ = __webpack_require__("../../../../../src/app/systelab-components/modal/plugin/modulab/modal-context.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__systelab_components_modal_message_popup_message_popup_view_component__ = __webpack_require__("../../../../../src/app/systelab-components/modal/message-popup/message-popup-view.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShowcaseTwoColumnsDialogParameters = (function (_super) {
    __extends(ShowcaseTwoColumnsDialogParameters, _super);
    function ShowcaseTwoColumnsDialogParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ShowcaseTwoColumnsDialogParameters;
}(__WEBPACK_IMPORTED_MODULE_2__systelab_components_modal_plugin_modulab_modal_context__["a" /* ModulabModalContext */]));

var ShowcaseTwoColumnsDialog = (function (_super) {
    __extends(ShowcaseTwoColumnsDialog, _super);
    function ShowcaseTwoColumnsDialog(dialog) {
        var _this = _super.call(this, dialog) || this;
        _this.dialog = dialog;
        _this.parameters = dialog.context;
        return _this;
    }
    ShowcaseTwoColumnsDialog.prototype.close = function () {
        this.dialog.close('This is a test');
    };
    ShowcaseTwoColumnsDialog.getParameters = function () {
        return new ShowcaseTwoColumnsDialogParameters();
    };
    return ShowcaseTwoColumnsDialog;
}(__WEBPACK_IMPORTED_MODULE_3__systelab_components_modal_message_popup_message_popup_view_component__["a" /* DefaultModalActions */]));
ShowcaseTwoColumnsDialog = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/showcase/components/dialog/two-columns/showcase-two-columns-dialog.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_modialog__["c" /* DialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_modialog__["c" /* DialogRef */]) === "function" && _a || Object])
], ShowcaseTwoColumnsDialog);

var _a;
//# sourceMappingURL=showcase-two-columns-dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/dialog/two-columns/showcase-two-columns.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"d-flex flex-column h-100 w-100 p-4\">\n    <div class=\"row align-items-center my-2\">\n        <h4 class=\"col slab-form-title\">Row system</h4>\n    </div>\n    <div class=\"row align-items-center my-1\">\n        <label class=\"col slab-label slab-label-165\" for=\"valueid\">\n            Description\n        </label>\n        <div class=\"col\">\n            <input type=\"text\" id=\"row-element-1\" class=\"form-control\" name=\"value\">\n        </div>\n        <label class=\"col slab-label slab-label-165\" for=\"valueid\">\n            Mnemonic\n        </label>\n        <div class=\"col\">\n            <input type=\"text\" id=\"row-element-2\" class=\"form-control\" name=\"value\">\n        </div>\n    </div>\n    <div class=\"row align-items-center my-1\">\n        <label class=\"col slab-label slab-label-165\" for=\"valueid\">\n            Lot Number\n        </label>\n        <div class=\"col\">\n            <input type=\"text\" id=\"row-element-3\" class=\"form-control\" name=\"value\">\n        </div>\n        <label class=\"col slab-label slab-label-165\" for=\"valueid\">\n            Expiration date\n        </label>\n        <div class=\"col\">\n            <input type=\"text\" id=\"row-element-4\" class=\"form-control\" name=\"value\">\n        </div>\n    </div>\n    <div class=\"row align-items-center my-1\">\n        <label class=\"col slab-label slab-label-165\" for=\"valueid\">\n            Status\n        </label>\n        <div class=\"col\">\n            <input type=\"text\" id=\"row-element-5\" class=\"form-control\" name=\"value\">\n        </div>\n        <label class=\"col slab-label slab-label-165\" for=\"valueid\">\n            Sort\n        </label>\n        <div class=\"col\">\n            <systelab-spinner [spinValues]=\"touchSpinValues1\" id=\"touch1\"></systelab-spinner>\n        </div>\n    </div>\n    <div class=\"row align-items-center my-1\">\n        <label class=\"col slab-label slab-label-165\" for=\"valueid\">\n            Activation Date\n        </label>\n        <div class=\"col\">\n            <input type=\"text\" id=\"row-element-7\" class=\"form-control\" name=\"value\">\n        </div>\n        <label class=\"col slab-label slab-label-165\" for=\"valueid\">\n            Deactivations Date\n        </label>\n        <div class=\"col\">\n            <input type=\"text\" id=\"row-element-8\" class=\"form-control\" name=\"value\">\n        </div>\n    </div>\n\n\n    <div class=\"row align-items-center mt-4 mb-2\">\n        <h4 class=\"col slab-form-title\">Column system</h4>\n    </div>\n    <div class=\"row mx-0\">\n        <div class=\"col pl-0\">\n            <div class=\"row align-items-center\">\n                <label class=\"col slab-label slab-label-165\" for=\"valueid\">\n                    Description\n                </label>\n                <div class=\"col my-1\">\n                    <input type=\"text\" id=\"col-element-1\" class=\"form-control\" name=\"value\">\n                </div>\n            </div>\n            <div class=\"row align-items-center\">\n                <label class=\"col slab-label slab-label-165\" for=\"valueid\">\n                    Lot number\n                </label>\n                <div class=\"col my-1\">\n                    <input type=\"text\" id=\"col-element-2\" class=\"form-control\" name=\"value\">\n                </div>\n            </div>\n            <div class=\"row align-items-center\">\n                <label class=\"col slab-label slab-label-165\" for=\"valueid\">\n                    Status\n                </label>\n                <div class=\"col my-1\">\n                    <input type=\"text\" id=\"col-element-3\" class=\"form-control\" name=\"value\">\n                </div>\n            </div>\n            <div class=\"row align-items-center\">\n                <label class=\"col slab-label slab-label-165\" for=\"valueid\">\n                    Activation Date\n                </label>\n                <div class=\"col my-1\">\n                    <input type=\"text\" id=\"col-element-4\" class=\"form-control\" name=\"value\">\n                </div>\n            </div>\n        </div>\n        <div class=\"col pr-0\">\n            <div class=\"row align-items-center\">\n                <label class=\"col slab-label slab-label-165\" for=\"valueid\">\n                    Mnemonic\n                </label>\n                <div class=\"col my-1\">\n                    <input type=\"text\" id=\"col-element-5\" class=\"form-control\" name=\"value\">\n                </div>\n            </div>\n            <div class=\"row align-items-center\">\n                <label class=\"col slab-label slab-label-165\" for=\"valueid\">\n                    Expiration Date\n                </label>\n                <div class=\"col my-1\">\n                    <input type=\"text\" id=\"col-element-6\" class=\"form-control\" name=\"value\">\n                </div>\n            </div>\n            <div class=\"row align-items-center\">\n                <label class=\"col slab-label slab-label-165\" for=\"valueid\">\n                    Sort\n                </label>\n                <div class=\"col my-1\">\n                    <systelab-spinner [spinValues]=\"touchSpinValues2\" id=\"touch2\"></systelab-spinner>\n                </div>\n            </div>\n            <div class=\"row align-items-center\">\n                <label class=\"col slab-label slab-label-165\" for=\"valueid\">\n                    Deactivations Date\n                </label>\n                <div class=\"col my-1\">\n                    <input type=\"text\" id=\"col-element-8\" class=\"form-control\" name=\"value\">\n                </div>\n            </div>\n        </div>\n    </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/dialog/two-columns/showcase-two-columns.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowcaseTwoColumnsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__systelab_components_spinner_touch_spin_values__ = __webpack_require__("../../../../../src/app/systelab-components/spinner/touch.spin-values.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShowcaseTwoColumnsComponent = (function () {
    function ShowcaseTwoColumnsComponent() {
        this.touchSpinValues1 = new __WEBPACK_IMPORTED_MODULE_1__systelab_components_spinner_touch_spin_values__["a" /* TouchSpinValues */](1, 1, 10);
        this.touchSpinValues2 = new __WEBPACK_IMPORTED_MODULE_1__systelab_components_spinner_touch_spin_values__["a" /* TouchSpinValues */](5, 1, 20, 2);
    }
    return ShowcaseTwoColumnsComponent;
}());
ShowcaseTwoColumnsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'showcase-two-columns-panel',
        template: __webpack_require__("../../../../../src/app/showcase/components/dialog/two-columns/showcase-two-columns.component.html")
    }),
    __metadata("design:paramtypes", [])
], ShowcaseTwoColumnsComponent);

//# sourceMappingURL=showcase-two-columns.component.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/dialog/two-tabs/showcase-two-tabs-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"slab-dialog-header\">Dialog with two tab rows</div>\n<ul class=\"nav nav-tabs\" role=\"tablist\">\n    <li class=\"nav-item\">\n        <a class=\"nav-link active\">Tab</a>\n    </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link\">Tab 2</a>\n    </li>\n</ul>\n<div style=\"height: 120px\" class=\"p-2\">\n    Fixed height component (120px)\n</div>\n<ul class=\"nav nav-tabs\" role=\"tablist\">\n    <li class=\"nav-item\">\n        <a class=\"nav-link active\">Tab</a>\n    </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link\">Tab 2</a>\n    </li>\n</ul>\n<div class=\"slab-dialog-message\">\n    <showcase-two-tabs>...</showcase-two-tabs>\n</div>\n<div class=\"slab-dialog-buttons\">\n    <button type=\"button\" class=\"btn btn-lg float-right\" (click)=\"close()\"> Submit</button>\n</div>\n<div class=\"slab-dialog-close\" (click)=\"close()\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/dialog/two-tabs/showcase-two-tabs-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ShowcaseTwoTabsDialogParameters */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowcaseTwoTabsDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_modialog__ = __webpack_require__("../../../../ngx-modialog/bundle/ngx-modialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__systelab_components_modal_plugin_modulab_modal_context__ = __webpack_require__("../../../../../src/app/systelab-components/modal/plugin/modulab/modal-context.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__systelab_components_modal_message_popup_message_popup_view_component__ = __webpack_require__("../../../../../src/app/systelab-components/modal/message-popup/message-popup-view.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShowcaseTwoTabsDialogParameters = (function (_super) {
    __extends(ShowcaseTwoTabsDialogParameters, _super);
    function ShowcaseTwoTabsDialogParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ShowcaseTwoTabsDialogParameters;
}(__WEBPACK_IMPORTED_MODULE_2__systelab_components_modal_plugin_modulab_modal_context__["a" /* ModulabModalContext */]));

var ShowcaseTwoTabsDialog = (function (_super) {
    __extends(ShowcaseTwoTabsDialog, _super);
    function ShowcaseTwoTabsDialog(dialog) {
        var _this = _super.call(this, dialog) || this;
        _this.dialog = dialog;
        _this.parameters = dialog.context;
        return _this;
    }
    ShowcaseTwoTabsDialog.prototype.close = function () {
        this.dialog.close('This is a test');
    };
    ShowcaseTwoTabsDialog.getParameters = function () {
        return new ShowcaseTwoTabsDialogParameters();
    };
    return ShowcaseTwoTabsDialog;
}(__WEBPACK_IMPORTED_MODULE_3__systelab_components_modal_message_popup_message_popup_view_component__["a" /* DefaultModalActions */]));
ShowcaseTwoTabsDialog = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/showcase/components/dialog/two-tabs/showcase-two-tabs-dialog.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_modialog__["c" /* DialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_modialog__["c" /* DialogRef */]) === "function" && _a || Object])
], ShowcaseTwoTabsDialog);

var _a;
//# sourceMappingURL=showcase-two-tabs-dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/dialog/two-tabs/showcase-two-tabs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"p-2\">\n    element with liquid height\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/dialog/two-tabs/showcase-two-tabs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowcaseTwoTabsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__systelab_components_spinner_touch_spin_values__ = __webpack_require__("../../../../../src/app/systelab-components/spinner/touch.spin-values.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShowcaseTwoTabsComponent = (function () {
    function ShowcaseTwoTabsComponent() {
        this.touchSpinValues1 = new __WEBPACK_IMPORTED_MODULE_1__systelab_components_spinner_touch_spin_values__["a" /* TouchSpinValues */](1, 1, 10);
        this.touchSpinValues2 = new __WEBPACK_IMPORTED_MODULE_1__systelab_components_spinner_touch_spin_values__["a" /* TouchSpinValues */](5, 1, 20, 2);
        this.touchSpinValues3 = new __WEBPACK_IMPORTED_MODULE_1__systelab_components_spinner_touch_spin_values__["a" /* TouchSpinValues */](5, 1, 20, 2);
    }
    return ShowcaseTwoTabsComponent;
}());
ShowcaseTwoTabsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'showcase-two-tabs',
        template: __webpack_require__("../../../../../src/app/showcase/components/dialog/two-tabs/showcase-two-tabs.component.html")
    }),
    __metadata("design:paramtypes", [])
], ShowcaseTwoTabsComponent);

//# sourceMappingURL=showcase-two-tabs.component.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/grid/showcase-grid.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"position-relative\" style=\"height: 200px;\">\n    <showcase-inner-grid #grid [menu]=\"getMenu()\" (action)=\"doMenuAction($event)\"\n                         (clickRow)=\"doSelect($event)\"></showcase-inner-grid>\n</form>\n<div class=\"pt-2\">\n    <button type=\"button\" class=\"btn btn-lg\" (click)=\"grid.showOptions();\"><i\n            class=\"icon-info-circle\"></i> Options\n    </button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/grid/showcase-grid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowcaseGridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__systelab_components_grid_contextmenu_grid_context_menu_option__ = __webpack_require__("../../../../../src/app/systelab-components/grid/contextmenu/grid-context-menu-option.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShowcaseGridComponent = (function () {
    function ShowcaseGridComponent() {
    }
    ShowcaseGridComponent.prototype.doSelect = function (compareProfileData) {
    };
    ShowcaseGridComponent.prototype.getMenu = function () {
        return [
            new __WEBPACK_IMPORTED_MODULE_1__systelab_components_grid_contextmenu_grid_context_menu_option__["a" /* GridContextMenuOption */]('action1', 'Action 1'),
            new __WEBPACK_IMPORTED_MODULE_1__systelab_components_grid_contextmenu_grid_context_menu_option__["a" /* GridContextMenuOption */]('action2', 'Action 2'),
            new __WEBPACK_IMPORTED_MODULE_1__systelab_components_grid_contextmenu_grid_context_menu_option__["a" /* GridContextMenuOption */]('action3', 'Action 3')
        ];
    };
    ShowcaseGridComponent.prototype.doMenuAction = function (action) {
        if (action.actionId === 'action1') {
        }
        else if (action.actionId === 'action2') {
        }
        else if (action.actionId === 'action3') {
        }
    };
    return ShowcaseGridComponent;
}());
ShowcaseGridComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'showcase-grid',
        template: __webpack_require__("../../../../../src/app/showcase/components/grid/showcase-grid.component.html")
    }),
    __metadata("design:paramtypes", [])
], ShowcaseGridComponent);

//# sourceMappingURL=showcase-grid.component.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/grid/showcase-inner-grid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ShowcaseData */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowcaseInnerGridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__systelab_components_grid_abstract_grid_component__ = __webpack_require__("../../../../../src/app/systelab-components/grid/abstract-grid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__systelab_components_modal_dialog_dialog_service__ = __webpack_require__("../../../../../src/app/systelab-components/modal/dialog/dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_systelab_translate_lib_i18n_service__ = __webpack_require__("../../../../systelab-translate/lib/i18n.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_systelab_translate_lib_i18n_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_systelab_translate_lib_i18n_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_systelab_preferences_lib_preferences_service__ = __webpack_require__("../../../../systelab-preferences/lib/preferences.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_systelab_preferences_lib_preferences_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_systelab_preferences_lib_preferences_service__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ShowcaseData = (function () {
    function ShowcaseData(eventDate, value, flag) {
        this.eventDate = eventDate;
        this.value = value;
        this.flag = flag;
    }
    return ShowcaseData;
}());

var ShowcaseInnerGridComponent = (function (_super) {
    __extends(ShowcaseInnerGridComponent, _super);
    function ShowcaseInnerGridComponent(preferencesService, i18nService, dialogService) {
        var _this = _super.call(this, preferencesService, i18nService, dialogService) || this;
        _this.preferencesService = preferencesService;
        _this.i18nService = i18nService;
        _this.dialogService = dialogService;
        _this.values = [];
        _this._disableRefreshButton = false;
        _this.firstViewportChanged = true;
        _this.disableRefreshButtonChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        for (var i = 0; i < 10; i++) {
            _this.values.push(new ShowcaseData('12/12/2017', i + '', '10x'));
        }
        return _this;
    }
    Object.defineProperty(ShowcaseInnerGridComponent.prototype, "disableRefreshButton", {
        get: function () {
            return this._disableRefreshButton;
        },
        set: function (pDisableRefreshButton) {
            this._disableRefreshButton = pDisableRefreshButton;
            this.disableRefreshButtonChange.emit(pDisableRefreshButton);
        },
        enumerable: true,
        configurable: true
    });
    ShowcaseInnerGridComponent.prototype.ngAfterViewInit = function () {
        this.gridOptions.api.setRowData(this.values);
    };
    ShowcaseInnerGridComponent.prototype.getColumnDefs = function () {
        // TODO Translate column names
        var columnDefs = [
            {
                colId: 'date', headerName: 'Date', field: 'eventDate', width: 300
            },
            { colId: 'value', headerName: 'Value (%)', field: 'value', width: 120 },
            { colId: 'flags', headerName: 'Flags', field: 'flag', width: 220 }
        ];
        return columnDefs;
    };
    ShowcaseInnerGridComponent.prototype.doViewportChanged = function () {
        if (!this.firstViewportChanged) {
            this.disableRefreshButton = false;
        }
        else {
            this.firstViewportChanged = false;
        }
    };
    return ShowcaseInnerGridComponent;
}(__WEBPACK_IMPORTED_MODULE_1__systelab_components_grid_abstract_grid_component__["a" /* AbstractGrid */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ShowcaseInnerGridComponent.prototype, "disableRefreshButtonChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Boolean])
], ShowcaseInnerGridComponent.prototype, "disableRefreshButton", null);
ShowcaseInnerGridComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'showcase-inner-grid',
        template: "\n                <div #hidden class=\"height-hidden\"></div>\n                <ag-grid-angular id=\"agGrid\" #agGrid\n                                 style=\"position:absolute; top:0; bottom:0; left:0; right:0; overflow: hidden;\"\n                                 class=\"ag-fresh\"\n                                 [gridOptions]=\"gridOptions\"\n                                 (gridReady)=\"doGridReady($event)\"\n                                 (gridSizeChanged)=\"doGridSizeChanged($event)\"\n                                 (cellClicked)=\"doClick($event)\"\n                                 (columnResized)=\"doColumnResized($event)\"\n                                 (viewportChanged)=\"doViewportChanged()\"\n                                 (modelUpdated)=\"onModelUpdated($event)\">\n                </ag-grid-angular>"
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_systelab_preferences_lib_preferences_service__["PreferencesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_systelab_preferences_lib_preferences_service__["PreferencesService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_systelab_translate_lib_i18n_service__["I18nService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_systelab_translate_lib_i18n_service__["I18nService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__systelab_components_modal_dialog_dialog_service__["a" /* DialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__systelab_components_modal_dialog_dialog_service__["a" /* DialogService */]) === "function" && _c || Object])
], ShowcaseInnerGridComponent);

var _a, _b, _c;
//# sourceMappingURL=showcase-inner-grid.component.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/headings/showcase-headings.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Heading h1</h1>\n<h2>Heading h2</h2>\n<h3>Heading h3</h3>\n<h4>Heading h4</h4>\n<h5>Heading h5</h5>\n<h6>Heading h6</h6>\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/headings/showcase-headings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowcaseHeadingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShowcaseHeadingsComponent = (function () {
    function ShowcaseHeadingsComponent() {
    }
    return ShowcaseHeadingsComponent;
}());
ShowcaseHeadingsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'showcase-headings',
        template: __webpack_require__("../../../../../src/app/showcase/components/headings/showcase-headings.component.html")
    }),
    __metadata("design:paramtypes", [])
], ShowcaseHeadingsComponent);

//# sourceMappingURL=showcase-headings.component.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/icon/showcase-icon.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"showcase-icon-list\">\n    <li *ngFor=\"let iconName of icons\">\n        <span class=\"slab-icon-medium mt-2 mb-2 {{iconName}}\"></span>\n        <p><small>{{iconName}}</small></p>\n    </li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/icon/showcase-icon.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Display grid icon list */\n.showcase-icon-list {\n  padding-left: 0;\n  list-style: none; }\n\n.showcase-icon-list li {\n  float: left;\n  width: 90px;\n  height: 115px;\n  padding: 10px;\n  line-height: 1;\n  text-align: center;\n  background-color: #f9f9f9;\n  border: 1px solid #fff; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/showcase/components/icon/showcase-icon.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowcaseIconComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShowcaseIconComponent = (function () {
    function ShowcaseIconComponent() {
        this.icons = [];
        this.icons.push('icon-context-menu');
        this.icons.push('icon-numpad');
        this.icons.push('icon-clock');
        this.icons.push('icon-comment');
        this.icons.push('icon-plus');
        this.icons.push('icon-question');
        this.icons.push('icon-minus');
        this.icons.push('icon-search');
        this.icons.push('icon-user');
        this.icons.push('icon-check');
        this.icons.push('icon-close');
        this.icons.push('icon-gear');
        this.icons.push('icon-cog');
        this.icons.push('icon-home');
        this.icons.push('icon-download');
        this.icons.push('icon-refresh');
        this.icons.push('icon-lock');
        this.icons.push('icon-book');
        this.icons.push('icon-print');
        this.icons.push('icon-list');
        this.icons.push('icon-list2');
        this.icons.push('icon-chevron-left');
        this.icons.push('icon-chevron-right');
        this.icons.push('icon-plus-circle');
        this.icons.push('icon-minus-circle');
        this.icons.push('icon-times-circle');
        this.icons.push('icon-check-circle');
        this.icons.push('icon-question-circle');
        this.icons.push('icon-info-circle');
        this.icons.push('icon-exclamation-circle');
        this.icons.push('icon-exclamation-triangle');
        this.icons.push('icon-warning');
        this.icons.push('icon-calendar');
        this.icons.push('icon-chevron-up');
        this.icons.push('icon-chevron-down');
        this.icons.push('icon-square-o');
        this.icons.push('icon-unlock');
        this.icons.push('icon-certificate');
        this.icons.push('icon-tool');
        this.icons.push('icon-copy');
        this.icons.push('icon-square');
        this.icons.push('icon-caret-down');
        this.icons.push('icon-caret-up');
        this.icons.push('icon-caret-left');
        this.icons.push('icon-caret-right');
        this.icons.push('icon-cloud-download');
        this.icons.push('icon-cloud-upload');
        this.icons.push('icon-file-text-o');
        this.icons.push('icon-angle-double-left');
        this.icons.push('icon-angle-double-right');
        this.icons.push('icon-angle-double-up');
        this.icons.push('icon-angle-double-down');
        this.icons.push('icon-angle-left');
        this.icons.push('icon-angle-right');
        this.icons.push('icon-angle-up');
        this.icons.push('icon-angle-down');
        this.icons.push('icon-spinner');
        this.icons.push('icon-exclamation');
        this.icons.push('icon-chevron-circle-left');
        this.icons.push('icon-chevron-circle-right');
        this.icons.push('icon-chevron-circle-up');
        this.icons.push('icon-chevron-circle-down');
        this.icons.push('icon-child');
        this.icons.push('icon-trash');
        this.icons.push('icon-line-chart');
        this.icons.push('icon-female');
        this.icons.push('icon-male');
        this.icons.push('icon-calendar-check');
        this.icons.push('icon-percent');
        this.icons.push('icon-maximize');
        this.icons.push('icon-minimize');
        this.icons.push('icon-th-large');
        this.icons.push('icon-tag');
        this.icons.push('icon-bug');
        this.icons.push('icon-cube');
        this.icons.push('icon-price-tag');
        this.icons.push('icon-empty-cube');
        this.icons.push('icon-empty-cube-linked');
        this.icons.push('icon-profile');
        this.icons.push('icon-custom-tag');
        this.icons.push('icon-custom-linked-tag');
        this.icons.push('icon-custom-linked-tag');
        this.icons.push('icon-custom-ifa-tag');
        this.icons.push('icon-custom-ifa-linked-tag');
        this.icons.push('icon-culture');
        this.icons.push('icon-culture-linked');
    }
    return ShowcaseIconComponent;
}());
ShowcaseIconComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'showcase-icon',
        template: __webpack_require__("../../../../../src/app/showcase/components/icon/showcase-icon.component.html"),
        styles: [__webpack_require__("../../../../../src/app/showcase/components/icon/showcase-icon.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ShowcaseIconComponent);

//# sourceMappingURL=showcase-icon.component.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/input/showcase-input.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row align-items-center mt-1\">\n    <label class=\"col slab-label slab-label-215\" for=\"full-width-input\">Full width</label>\n    <div class=\"col-sm\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Nombre\" id=\"full-width-input\">\n    </div>\n</div>\n<div class=\"row align-items-center mt-1\">\n    <label class=\"col slab-label slab-label-215\" for=\"third-width-input\">Small width</label>\n    <div class=\"col-sm\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Email\" id=\"third-width-input\">\n    </div>\n</div>\n<div class=\"row align-items-center mt-1 disabled\">\n    <label class=\"col slab-label slab-label-215\" for=\"disabled-input\">Disabled input</label>\n    <div class=\"col-sm\">\n        <input disabled type=\"text\" class=\"form-control\" placeholder=\"Email\" id=\"disabled-input\">\n    </div>\n</div>\n<div class=\"row align-items-center mt-1\">\n    <label class=\"col slab-label slab-label-215\" for=\"file-input\">Input File</label>\n    <div class=\"col-sm\">\n        <div class=\"slab-input-file\">\n            <input class=\"form-control\" id=\"uploadFile\" type=\"text\" name=\"uploadFile\" [(ngModel)]=\"fileName\">\n            <div class=\"btn nt-sm\">\n                <span>...</span>\n                <input id=\"uploadBtn\" type=\"file\" (change)=\"selectFile($event.target.files)\">\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"row align-items-center mt-1\">\n    <label class=\"col slab-label slab-label-215\" for=\"file-input\">html with input style</label>\n    <div class=\"col-sm\">\n        <div class=\"slab-input form-control\">\n            <font>1<sub>2S</sub>,</font>\n            <font class=\"text-warning\">1<sub>2.5S</sub>,</font>\n            <font class=\"text-danger\">1<sub>3S</sub></font>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/input/showcase-input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowcaseInputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShowcaseInputComponent = (function () {
    function ShowcaseInputComponent() {
    }
    return ShowcaseInputComponent;
}());
ShowcaseInputComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'showcase-input',
        template: __webpack_require__("../../../../../src/app/showcase/components/input/showcase-input.component.html")
    }),
    __metadata("design:paramtypes", [])
], ShowcaseInputComponent);

//# sourceMappingURL=showcase-input.component.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/message-popup/showcase-message-popup.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <button type=\"button\" class=\"btn btn-lg mt-2\" (click)=\"showError();\"><i\n            class=\"icon-times-circle\"></i> Error\n    </button>\n    <button type=\"button\" class=\"btn btn-lg mt-2\" (click)=\"showWarning();\"><i\n            class=\"icon-warning \"></i> Warning\n    </button>\n    <button type=\"button\" class=\"btn btn-lg mt-2\" (click)=\"showInfo();\"><i\n            class=\"icon-info-circle\"></i> Information\n    </button>\n    <button type=\"button\" class=\"btn btn-lg mt-2\" (click)=\"showQuestion();\"><i\n            class=\"icon-question-circle\"></i> Question\n    </button>\n    <button type=\"button\" class=\"btn btn-lg mt-2\" (click)=\"showQuestionYN();\"><i\n            class=\"icon-question-circle\"></i> Question YN\n    </button>\n\n    <div class=\"dropup slab-button-dropdown\">\n        <!-- This is the element toggling the dropdown -->\n        <button type=\"button\" class=\"btn btn-lg dropdown-toogle mt-2\" data-toggle=\"dropdown\">Drop downauto-left <i\n                    class=\"icon-chevron-up\"></i></button>\n        <!-- This is the dropdown -->\n        <div class=\"dropdown-menu slab-dropdown\">\n            <ul>\n                <li><a (click)=\"showInfo();\">Action 1 Info</a></li>\n                <li><a (click)=\"showWarning();\">Action 2 Warning</a></li>\n            </ul>\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/message-popup/showcase-message-popup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowcaseMessagePopupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__systelab_components_modal_message_popup_message_popup_service__ = __webpack_require__("../../../../../src/app/systelab-components/modal/message-popup/message-popup.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShowcaseMessagePopupComponent = (function () {
    function ShowcaseMessagePopupComponent(messagePopupService) {
        this.messagePopupService = messagePopupService;
    }
    ShowcaseMessagePopupComponent.prototype.showError = function () {
        this.messagePopupService.showErrorPopup('Test', 'Error message popup example', null, 800, 600)
            .subscribe(function (v) {
            console.log('Observable returned to showcase', v);
        });
    };
    ShowcaseMessagePopupComponent.prototype.showWarning = function () {
        this.messagePopupService.showWarningPopup('Test', 'Warning message popup example', 'w-33 h-33');
    };
    ShowcaseMessagePopupComponent.prototype.showInfo = function () {
        this.messagePopupService.showInformationPopup('Test', 'Info message popup example');
    };
    ShowcaseMessagePopupComponent.prototype.showQuestion = function () {
        // window.alert('Hall!!!!!');
        this.messagePopupService.showQuestionPopup('Test', 'Are you sure?')
            .subscribe(function (v) {
            console.log('closing');
        });
    };
    ShowcaseMessagePopupComponent.prototype.showQuestionYN = function () {
    };
    return ShowcaseMessagePopupComponent;
}());
ShowcaseMessagePopupComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'showcase-message-popup',
        template: __webpack_require__("../../../../../src/app/showcase/components/message-popup/showcase-message-popup.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__systelab_components_modal_message_popup_message_popup_service__["a" /* MessagePopupService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__systelab_components_modal_message_popup_message_popup_service__["a" /* MessagePopupService */]) === "function" && _a || Object])
], ShowcaseMessagePopupComponent);

var _a;
//# sourceMappingURL=showcase-message-popup.component.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/pie/showcase-pie.component.html":
/***/ (function(module, exports) {

module.exports = "<div [style.width.px]='350' [style.height.px]='350' style=\"display: flex;\">\n    <systelab-pie [data]=\"data\" (select)=\"doSelect($event)\" [fixedWidth]=\"350\"\n                  [fixedHeight]=\"350\"></systelab-pie>\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/pie/showcase-pie.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowcasePieComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__systelab_components_piechart_pie_component__ = __webpack_require__("../../../../../src/app/systelab-components/piechart/pie.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShowcasePieComponent = (function () {
    function ShowcasePieComponent() {
        this.data = [];
    }
    ShowcasePieComponent.prototype.ngOnInit = function () {
        this.data.push(new __WEBPACK_IMPORTED_MODULE_1__systelab_components_piechart_pie_component__["b" /* PieElement */]('id1', 150, '#FFDAB9', 'ACTION1'));
        this.data.push(new __WEBPACK_IMPORTED_MODULE_1__systelab_components_piechart_pie_component__["b" /* PieElement */]('id2', 150, '#E6E6FA', 'ACTION2'));
        this.data.push(new __WEBPACK_IMPORTED_MODULE_1__systelab_components_piechart_pie_component__["b" /* PieElement */]('id3', 300, '#E0FFFF', 'ACTION3'));
    };
    return ShowcasePieComponent;
}());
ShowcasePieComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'showcase-pie',
        template: __webpack_require__("../../../../../src/app/showcase/components/pie/showcase-pie.component.html")
    }),
    __metadata("design:paramtypes", [])
], ShowcasePieComponent);

//# sourceMappingURL=showcase-pie.component.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/progress-bars/showcase-progress-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row align-items-center mt-1\">\n    <label class=\"col slab-label slab-label-215\" for=\"form-h-s\">Success</label>\n    <div class=\"col-sm\">\n        <div class=\"progress\">\n            <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\"\n                 aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n        </div>\n    </div>\n</div>\n<div class=\"row align-items-center mt-1\">\n    <label class=\"col slab-label slab-label-215\" for=\"form-h-s\">Info</label>\n    <div class=\"col-sm\">\n        <div class=\"progress\">\n            <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 50%\" aria-valuenow=\"50\" aria-valuemin=\"0\"\n                 aria-valuemax=\"100\"></div>\n        </div>\n    </div>\n</div>\n<div class=\"row align-items-center mt-1\">\n    <label class=\"col slab-label slab-label-215\" for=\"form-h-s\">Warning</label>\n    <div class=\"col-sm\">\n        <div class=\"progress\">\n            <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 75%\" aria-valuenow=\"75\"\n                 aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n        </div>\n    </div>\n</div>\n<div class=\"row align-items-center mt-1\">\n    <label class=\"col slab-label slab-label-215\" for=\"form-h-s\">Danger</label>\n    <div class=\"col-sm\">\n        <div class=\"progress\">\n            <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 100%\" aria-valuenow=\"100\"\n                 aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n        </div>\n    </div>\n</div>\n<div class=\"row align-items-center mt-1\">\n    <label class=\"col slab-label slab-label-215\" for=\"form-h-s\">Multiple</label>\n    <div class=\"col-sm\">\n        <div class=\"progress\">\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 15%\" aria-valuenow=\"15\" aria-valuemin=\"0\"\n                 aria-valuemax=\"100\"></div>\n            <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 30%\" aria-valuenow=\"30\"\n                 aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n            <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 20%\" aria-valuenow=\"20\" aria-valuemin=\"0\"\n                 aria-valuemax=\"100\"></div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/progress-bars/showcase-progress-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowcaseProgressBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShowcaseProgressBarComponent = (function () {
    function ShowcaseProgressBarComponent() {
    }
    return ShowcaseProgressBarComponent;
}());
ShowcaseProgressBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'showcase-progress-bar',
        template: __webpack_require__("../../../../../src/app/showcase/components/progress-bars/showcase-progress-bar.component.html")
    }),
    __metadata("design:paramtypes", [])
], ShowcaseProgressBarComponent);

//# sourceMappingURL=showcase-progress-bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/radio/showcase-radio.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row align-items-top mt-1\">\n    <label class=\"col slab-label slab-label-215\">Column</label>\n    <div class=\"col-sm\">\n        <div>\n            <input name=\"status-radio\" type=\"radio\" id=\"radio-urgent\">\n            <label for=\"radio-urgent\"> Urgent</label>\n        </div>\n        <div>\n            <input name=\"status-radio\" type=\"radio\" id=\"radio-not-urgent\">\n            <label for=\"radio-not-urgent\"> Not Urgent</label>\n        </div>\n    </div>\n</div>\n\n\n<div class=\"row align-items-center mt-3\">\n    <label class=\"col slab-label slab-label-215\">Inline (using a grid)</label>\n    <div class=\"col-sm-2\">\n        <input name=\"status-radio2\" type=\"radio\" id=\"radio-urgent2\"> <label\n            for=\"radio-urgent2\">Urgent</label>\n    </div>\n    <div class=\"col-sm-2\">\n        <input name=\"status-radio2\" type=\"radio\" id=\"radio-not-urgent2\"> <label\n            for=\"radio-not-urgent2\">Not Urgent</label>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/radio/showcase-radio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowcaseRadioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShowcaseRadioComponent = (function () {
    function ShowcaseRadioComponent() {
    }
    return ShowcaseRadioComponent;
}());
ShowcaseRadioComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'showcase-radio',
        template: __webpack_require__("../../../../../src/app/showcase/components/radio/showcase-radio.component.html")
    }),
    __metadata("design:paramtypes", [])
], ShowcaseRadioComponent);

//# sourceMappingURL=showcase-radio.component.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/sample-route/sample-route.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RouteNode */
/* unused harmony export Connection */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SampleRouteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RouteNode = (function () {
    function RouteNode(id, x, y, w, h) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    return RouteNode;
}());

var Connection = (function () {
    function Connection(idFrom, idTo) {
        this.idFrom = idFrom;
        this.idTo = idTo;
    }
    return Connection;
}());

var SampleRouteComponent = (function () {
    function SampleRouteComponent() {
        this.mustShowPointer = false;
        this.fixedWidth = null;
        this.fixedHeight = null;
        this.canvasWidth = 0;
        this.canvasHeight = 0;
        this.startID = 0;
        this.startX = 0;
        this.startY = 0;
        this.isDown = false;
        this.movingNode = null;
        this.nodes = [];
        this.lastNumber = 1;
        this.connections = [];
        this.img = new Image();
        this.color = 'black';
    }
    SampleRouteComponent.prototype.ngOnInit = function () {
        this.img.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAkBJREFUeNpiYBggwEiswv0xTQpAKgCI/YHYAIgF0JQcAOILQLzQcUndBYotBlroAKTqgdiBBA89AOJGoAMWkGwx0EIBqIUFFIQoKBQSgQ54QJTFUEv3Q4OUUvABiB3Rg5+RxpbitJwJm4epbCkDNCHuhyZQMGBB820DuqUc4oIMiiGQdPV4x0mGL3efUWL5eiA2RAlqqGvuo6vWLY1kENZTAbO/PHnFcKZyJqW+ByW2BchBXY9NFbsQH5zNwsVBjWCvh/sYmqDuYykUGHiUpRgUg+zB7PvrDlIS1MggEBbHDtgsBQcv0KLL3cupXWLawyy2x6VCNdGTgUdWHOKIxy8Zbs/fziDpbMQgYa0HV3N76S4G1Wg3Bn5VWTD/4+3HYDE8oeMAsxhn9gFZCjMQntJFBFDEdPJCGTiQ0gJIzqA8huFE0WSGP1++YzPWgIka4cbCyc7w8sQVcKpHFpN0NMSphyoWX5myhuH61PXgrAYKZnjG1ZCnrcUfLt1DsG8+QvE1TS0mB8AsPkhnew/ALL5AZ4svgC0Glp0boFUXvcBC5DieSC/fgupl5GpxAhDnoxedoBKIhRtSOfz5+gNMPz9wnuH99QdYTUWWg6lHA4UYLRBgZQFqX/XT0LcbgL4NxMhOQEGQrzfQyFJQMCTiy8eJNEjloIQbCPTYB5wWQyUdqejzC0S1MrHEeT2uupoIMAHasP9ATk9CAWp5AAkOAIXWRKCFB6jRdxKAtlTskepvB2iigWFQ0XsAW88BHQAEGADdwr1CnGssZwAAAABJRU5ErkJggg==';
        this.img.onload = this.imageLoaded;
    };
    SampleRouteComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var timer = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].timer(50);
        timer.subscribe(function (t) {
            _this.initCanvasSize();
            _this.restore();
        });
    };
    SampleRouteComponent.prototype.imageLoaded = function (event) {
        console.log(event);
    };
    SampleRouteComponent.prototype.doMouseDown = function (event) {
        event.stopPropagation();
        event.preventDefault();
        var mouseX = event.offsetX;
        var mouseY = event.offsetY;
        var selectedNode = null;
        this.movingNode = null;
        for (var i = 0; i < this.nodes.length && !selectedNode; i++) {
            if (mouseX > this.nodes[i].x && mouseX < this.nodes[i].x + this.nodes[i].w &&
                mouseY > this.nodes[i].y && mouseY < this.nodes[i].y + this.nodes[i].h) {
                selectedNode = this.nodes[i];
            }
        }
        if (!selectedNode) {
            this.nodes.push(new RouteNode(this.lastNumber++, mouseX - 15, mouseY - 15, 30, 30));
            this.drawModel();
        }
        else {
            this.startX = selectedNode.x + selectedNode.w / 2;
            this.startY = selectedNode.y + selectedNode.h / 2;
            this.startID = selectedNode.id;
            this.isDown = true;
            if (!event.altKey) {
                this.movingNode = selectedNode;
            }
        }
    };
    SampleRouteComponent.prototype.doMouseMove = function (event) {
        if (this.isDown) {
            var mouseX = event.offsetX;
            var mouseY = event.offsetY;
            event.stopPropagation();
            event.preventDefault();
            if (this.movingNode) {
                this.movingNode.x = mouseX - this.movingNode.w / 2;
                this.movingNode.y = mouseY - this.movingNode.h / 2;
                this.drawModel();
            }
            else {
                this.drawModel(mouseX, mouseY);
            }
        }
    };
    SampleRouteComponent.prototype.doMouseUp = function (event) {
        event.stopPropagation();
        event.preventDefault();
        var mouseX = event.offsetX;
        var mouseY = event.offsetY;
        if (this.isDown) {
            if (!this.movingNode) {
                var selectedNode = null;
                for (var i = 0; i < this.nodes.length && !selectedNode; i++) {
                    if (mouseX > this.nodes[i].x && mouseX < this.nodes[i].x + this.nodes[i].w &&
                        mouseY > this.nodes[i].y && mouseY < this.nodes[i].y + this.nodes[i].h) {
                        selectedNode = this.nodes[i];
                    }
                }
                if (selectedNode) {
                    this.connections.push(new Connection(this.startID, selectedNode.id));
                }
                else {
                    this.drawModel();
                }
            }
            this.isDown = false;
        }
    };
    SampleRouteComponent.prototype.doMouseOut = function (event) {
    };
    SampleRouteComponent.prototype.drawModel = function (toX, toY) {
        if (toX === void 0) { toX = null; }
        if (toY === void 0) { toY = null; }
        // clear the canvas
        var context = this.canvas.nativeElement.getContext('2d');
        context.beginPath();
        context.fillStyle = 'lightGray';
        context.strokeStyle = 'black';
        context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        context.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
        context.rect(0, 0, this.canvasWidth, this.canvasHeight);
        context.stroke();
        context.closePath();
        // redraw all previous lines
        for (var i = 0; i < this.connections.length; i++) {
            var nodeFrom = this.getNodeById(this.connections[i].idFrom);
            var nodeTo = this.getNodeById(this.connections[i].idTo);
            this.drawLine(context, {
                x1: nodeFrom.x + nodeFrom.w / 2,
                y1: nodeFrom.y + nodeFrom.h / 2,
                x2: nodeTo.x + nodeTo.w / 2,
                y2: nodeTo.y + nodeTo.h / 2,
            });
        }
        // redraw all previous nodes
        for (var i = 0; i < this.nodes.length; i++) {
            this.drawNode(context, this.nodes[i]);
        }
        if (toX && toY) {
            // draw the current line
            this.drawLine(context, {
                x1: this.startX,
                y1: this.startY,
                x2: toX,
                y2: toY
            });
        }
    };
    SampleRouteComponent.prototype.getNodeById = function (id) {
        for (var i = 0; i < this.nodes.length; i++) {
            if (this.nodes[i].id === id) {
                return this.nodes[i];
            }
        }
        return null;
    };
    SampleRouteComponent.prototype.drawLine = function (context, line) {
        context.lineWidth = 2;
        context.strokeStyle = this.color;
        context.beginPath();
        context.moveTo(line.x1, line.y1);
        context.lineTo(line.x2, line.y2);
        context.stroke();
        context.closePath();
    };
    SampleRouteComponent.prototype.drawNode = function (context, node) {
        context.drawImage(this.img, node.x, node.y);
    };
    SampleRouteComponent.prototype.onResize = function (event) {
        this.initCanvasSize();
        this.drawModel();
    };
    SampleRouteComponent.prototype.initCanvasSize = function () {
        if (this.fixedWidth) {
            this.canvas.nativeElement.width = this.fixedWidth;
        }
        else {
            this.canvas.nativeElement.width = this.canvas.nativeElement.offsetWidth;
        }
        if (this.fixedHeight) {
            this.canvas.nativeElement.height = this.fixedHeight;
        }
        else {
            this.canvas.nativeElement.height = this.canvas.nativeElement.offsetHeight;
        }
        this.canvasWidth = this.canvas.nativeElement.width;
        this.canvasHeight = this.canvas.nativeElement.height;
    };
    SampleRouteComponent.prototype.setColor = function (color) {
        this.color = color;
        this.drawModel();
    };
    SampleRouteComponent.prototype.save = function () {
    };
    SampleRouteComponent.prototype.restore = function () {
        this.clear();
        this.setColor('black');
        this.nodes.push(new RouteNode(1, 100, 150, 30, 30));
        this.nodes.push(new RouteNode(2, 300, 150, 30, 30));
        this.nodes.push(new RouteNode(3, 200, 250, 30, 30));
        this.nodes.push(new RouteNode(4, 300, 350, 30, 30));
        this.connections.push(new Connection(1, 3));
        this.connections.push(new Connection(3, 4));
        this.connections.push(new Connection(3, 2));
        this.lastNumber = 5;
        this.drawModel();
    };
    SampleRouteComponent.prototype.clear = function () {
        this.connections = [];
        this.nodes = [];
        this.drawModel();
    };
    return SampleRouteComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('canvas'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], SampleRouteComponent.prototype, "canvas", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], SampleRouteComponent.prototype, "fixedWidth", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], SampleRouteComponent.prototype, "fixedHeight", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SampleRouteComponent.prototype, "onResize", null);
SampleRouteComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sample-route',
        template: "\n<div style=\"padding-bottom: 10px;\">\n\t<button type=\"button\" class=\"btn btn-lg\" (click)=\"setColor('green')\">Green</button>\n\t<button type=\"button\" class=\"btn btn-lg\" (click)=\"setColor('red')\">Red</button>\n\t<button type=\"button\" class=\"btn btn-lg\" (click)=\"setColor('blue')\">Blue</button>\n\n\t<button type=\"button\" class=\"btn btn-lg\" (click)=\"save()\">Save</button>\n\t<button type=\"button\" class=\"btn btn-lg\" (click)=\"restore()\">Restore</button>\n\t<button type=\"button\" class=\"btn btn-lg\" (click)=\"clear()\">Clear</button>\n\n</div>\n<div>\n<canvas #canvas style=\"width: 100%; height: 100%;\" \n\t\t\t\t(mouseup)=\"doMouseUp($event)\"\n\t\t\t\t(mousedown)=\"doMouseDown($event)\"\n\t\t\t\t(mouseout)=\"doMouseOut($event)\"\n\t\t\t\t(mousemove)=\"doMouseMove($event)\" \n\t\t\t\t[class.pointer]=\"mustShowPointer\">\n\t\t\t\t\n</canvas>\n</div>\n"
    })
], SampleRouteComponent);

var _a;
//# sourceMappingURL=sample-route.component.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/showcase-components.component.html":
/***/ (function(module, exports) {

module.exports = "<showcase-title [title]=\"'Tabs'\" [href]=\"'tabs'\"></showcase-title>\n<showcase-tabs></showcase-tabs>\n\n<showcase-title [title]=\"'Input'\" [href]=\"'input'\"></showcase-title>\n<showcase-input></showcase-input>\n\n<showcase-title [title]=\"'Textarea'\" [href]=\"'textarea'\"></showcase-title>\n<showcase-textarea></showcase-textarea>\n\n<showcase-title [title]=\"'Checkbox'\" [href]=\"'checkbox'\"></showcase-title>\n<showcase-checkbox></showcase-checkbox>\n\n<showcase-title [title]=\"'Radio'\" [href]=\"'radio'\"></showcase-title>\n<showcase-radio></showcase-radio>\n\n<showcase-title [title]=\"'Button'\" [href]=\"'button'\"></showcase-title>\n<showcase-button></showcase-button>\n\n<showcase-title [title]=\"'Spinner'\" [href]=\"'spinner'\"></showcase-title>\n<showcase-spinner></showcase-spinner>\n\n<showcase-title [title]=\"'Datepicker'\" [href]=\"'datepicker'\"></showcase-title>\n<showcase-datepicker></showcase-datepicker>\n\n<showcase-title [title]=\"'Combobox'\" [href]=\"'combobox'\"></showcase-title>\n<showcase-combobox></showcase-combobox>\n\n<showcase-title [title]=\"'Slider'\" [href]=\"'slider'\"></showcase-title>\n<showcase-slider></showcase-slider>\n\n<showcase-title [title]=\"'Progress bar'\" [href]=\"'progress-bar'\"></showcase-title>\n<showcase-progress-bar></showcase-progress-bar>\n\n<showcase-title [title]=\"'Table'\" [href]=\"'table'\"></showcase-title>\n<showcase-table></showcase-table>\n\n<showcase-title [title]=\"'Grid'\" [href]=\"'grid'\"></showcase-title>\n<showcase-grid></showcase-grid>\n\n<showcase-title [title]=\"'Tooltip'\" [href]=\"'tooltip'\"></showcase-title>\n<showcase-tooltip></showcase-tooltip>\n\n<showcase-title [title]=\"'Dialog'\" [href]=\"'dialog'\"></showcase-title>\n<showcase-dialog></showcase-dialog>\n\n<showcase-title [title]=\"'Message Popup'\" [href]=\"'message-popup'\"></showcase-title>\n<showcase-message-popup></showcase-message-popup>\n\n<showcase-title [title]=\"'Icon'\" [href]=\"'icon'\"></showcase-title>\n<showcase-icon></showcase-icon>\n\n<showcase-title [title]=\"'Headings'\" [href]=\"'headings'\"></showcase-title>\n<showcase-headings></showcase-headings>\n\n<showcase-title [title]=\"'Text'\" [href]=\"'text'\"></showcase-title>\n<showcase-text></showcase-text>\n\n<showcase-title [title]=\"'Alert'\" [href]=\"'alert'\"></showcase-title>\n<showcase-alert></showcase-alert>\n\n<showcase-title [title]=\"'Two-List'\" [href]=\"'two-list'\"></showcase-title>\n<showcase-two-list></showcase-two-list>\n\n<showcase-title [title]=\"'Application Frame'\" [href]=\"'application-frame'\"></showcase-title>\n<showcase-application-frame></showcase-application-frame>\n\n<showcase-title [title]=\"'Pie'\" [href]=\"'pie'\"></showcase-title>\n<showcase-pie></showcase-pie>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/showcase-components.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h4 {\n  padding-top: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/showcase/components/showcase-components.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowcaseComponentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ShowcaseComponentsComponent = (function () {
    function ShowcaseComponentsComponent() {
    }
    return ShowcaseComponentsComponent;
}());
ShowcaseComponentsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'showcase-components',
        template: __webpack_require__("../../../../../src/app/showcase/components/showcase-components.component.html"),
        styles: [__webpack_require__("../../../../../src/app/showcase/components/showcase-components.component.scss")]
    })
], ShowcaseComponentsComponent);

//# sourceMappingURL=showcase-components.component.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/showcase-title.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowcaseTitleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShowcaseTitleComponent = (function () {
    function ShowcaseTitleComponent() {
        this.title = '';
        this.href = '';
    }
    return ShowcaseTitleComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ShowcaseTitleComponent.prototype, "title", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ShowcaseTitleComponent.prototype, "href", void 0);
ShowcaseTitleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'showcase-title',
        template: "\n\t          <div>\n                <h4 class=\"d-inline\">{{title}}</h4>\n                <a href=\"https://github.com/systelab/systelab-components/tree/master/src/app/showcase/components/{{href}}\"\n                   target=\"_blank\">\n                    <img class=\"d-inline\" src=\"gh.ico\" alt=\"View on GitHub\" width=\"18px\" height=\"18px\">\n                </a>\n            </div>\n\t          ",
        styles: ["\n\t\tdiv {\n\t\t\t\tpadding-top: 20px;\n\t\t\t\tpadding-bottom: 10px;\n\t\t}\n\timg {\n      position: relative;\n\t\t\ttop: -4px;\n\t\t\tleft: 4px;\n\t}"]
    })
], ShowcaseTitleComponent);

//# sourceMappingURL=showcase-title.component.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/slider/showcase-slider.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row align-items-center mt-1\">\n    <label class=\"col slab-label slab-label-215\" for=\"full-width-input\">Slider</label>\n    <div class=\"col-sm\">\n        <systelab-slider [(value)]=\"sliderValue\" [min]=\"0\" [max]=\"200\" [step]=\"25\"\n                         name=\"slider\"></systelab-slider>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/slider/showcase-slider.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowcaseSliderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShowcaseSliderComponent = (function () {
    function ShowcaseSliderComponent() {
        this.sliderValue = 100;
    }
    return ShowcaseSliderComponent;
}());
ShowcaseSliderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'showcase-slider',
        template: __webpack_require__("../../../../../src/app/showcase/components/slider/showcase-slider.component.html")
    }),
    __metadata("design:paramtypes", [])
], ShowcaseSliderComponent);

//# sourceMappingURL=showcase-slider.component.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/spinner/showcase-spinner.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row align-items-center mt-1\">\n    <label class=\"col slab-label slab-label-215\">Spinner</label>\n    <div class=\"col-sm\">\n        <systelab-spinner [spinValues]=\"touchSpinValues1\" id=\"touch2\"></systelab-spinner>\n    </div>\n</div>\n\n<div class=\"row align-items-center mt-1\">\n    <label class=\"col slab-label slab-label-215\">Spinner negative values</label>\n    <div class=\"col-sm\">\n        <systelab-spinner [spinValues]=\"touchSpinValues3\" id=\"touch2\"></systelab-spinner>\n    </div>\n</div>\n\n<div class=\"row align-items-center mt-1\">\n    <label class=\"col slab-label slab-label-215\">Next to each other</label>\n    <div class=\"col-sm\">\n        <systelab-spinner [spinValues]=\"touchSpinValues1\" id=\"touch2\"></systelab-spinner>\n        <systelab-spinner [spinValues]=\"touchSpinValues1\" id=\"touch2\"></systelab-spinner>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/spinner/showcase-spinner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowcaseSpinnerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__systelab_components_spinner_touch_spin_values__ = __webpack_require__("../../../../../src/app/systelab-components/spinner/touch.spin-values.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShowcaseSpinnerComponent = (function () {
    function ShowcaseSpinnerComponent() {
        this.touchSpinValues1 = new __WEBPACK_IMPORTED_MODULE_1__systelab_components_spinner_touch_spin_values__["a" /* TouchSpinValues */](1, 1, 10);
        this.touchSpinValues2 = new __WEBPACK_IMPORTED_MODULE_1__systelab_components_spinner_touch_spin_values__["a" /* TouchSpinValues */](5, 1, 20, 2);
        this.touchSpinValues3 = new __WEBPACK_IMPORTED_MODULE_1__systelab_components_spinner_touch_spin_values__["a" /* TouchSpinValues */](0, -10, 10, 1);
    }
    return ShowcaseSpinnerComponent;
}());
ShowcaseSpinnerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'showcase-spinner',
        template: __webpack_require__("../../../../../src/app/showcase/components/spinner/showcase-spinner.component.html")
    }),
    __metadata("design:paramtypes", [])
], ShowcaseSpinnerComponent);

//# sourceMappingURL=showcase-spinner.component.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/table/showcase-table.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-sm\">\n    <thead>\n    <tr>\n        <th scope=\"col\">#</th>\n        <th scope=\"col\">First Name</th>\n        <th scope=\"col\">Last Name</th>\n        <th scope=\"col\">Username</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr class=\"bg-light h-auto\">\n        <th scope=\"row\">1</th>\n        <td>Mark</td>\n        <td>Otto</td>\n        <td>@mdo</td>\n    </tr>\n    <tr>\n        <th scope=\"row\">2</th>\n        <td>Jacob</td>\n        <td>Thornton</td>\n    </tr>\n    <tr>\n        <th scope=\"row\">3</th>\n        <td>Larry</td>\n        <td>the Bird</td>\n        <td>@twitter</td>\n    </tr>\n    </tbody>\n</table>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/table/showcase-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowcaseTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShowcaseTableComponent = (function () {
    function ShowcaseTableComponent() {
    }
    return ShowcaseTableComponent;
}());
ShowcaseTableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'showcase-table',
        template: __webpack_require__("../../../../../src/app/showcase/components/table/showcase-table.component.html")
    }),
    __metadata("design:paramtypes", [])
], ShowcaseTableComponent);

//# sourceMappingURL=showcase-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/tabs/showcase-tabs.component.html":
/***/ (function(module, exports) {

module.exports = "<systelab-tabs>\n    <systelab-tab [title]=\"'Tab 1'\" [id]=\"'1'\">\n        Tab 1 content\n    </systelab-tab>\n    <systelab-tab [title]=\"'Tab 2'\" [id]=\"'2'\">\n        Tab 2 content\n    </systelab-tab>\n    <systelab-tab [title]=\"'Tab 3'\"  [id]=\"'3'\">\n        Tab 3 content\n    </systelab-tab>\n    <systelab-tab [title]=\"'Tab 4'\"  [id]=\"'4'\">\n        Tab 4 content\n    </systelab-tab>\n</systelab-tabs>\n<div class=\"pt-2\">\n    <button type=\"button\" class=\"btn btn-lg\" (click)=\"tabsDialog();\"><i class=\"icon-info-circle\"></i>Dialog</button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/tabs/showcase-tabs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowcaseTabsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShowcaseTabsComponent = (function () {
    function ShowcaseTabsComponent() {
    }
    ShowcaseTabsComponent.prototype.tabsDialog = function () {
    };
    return ShowcaseTabsComponent;
}());
ShowcaseTabsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'showcase-tabs',
        template: __webpack_require__("../../../../../src/app/showcase/components/tabs/showcase-tabs.component.html")
    }),
    __metadata("design:paramtypes", [])
], ShowcaseTabsComponent);

//# sourceMappingURL=showcase-tabs.component.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/text/showcase-text.component.html":
/***/ (function(module, exports) {

module.exports = "<p><a href=\"#\" class=\"text-primary\">Primary link</a></p>\n<p><a href=\"#\" class=\"text-secondary\">Secondary link</a></p>\n<p><a href=\"#\" class=\"text-success\">Success link</a></p>\n<p><a href=\"#\" class=\"text-danger\">Danger link</a></p>\n<p><a href=\"#\" class=\"text-warning\">Warning link</a></p>\n<p><a href=\"#\" class=\"text-info\">Info link</a></p>\n<p><a href=\"#\" class=\"text-light bg-dark\">Light link</a></p>\n<p><a href=\"#\" class=\"text-dark\">Dark link</a></p>\n<p><a href=\"#\" class=\"text-muted\">Muted link</a></p>\n<p><a href=\"#\" class=\"text-white bg-dark\">White link</a></p>\n\n<div class=\"p-3 mb-2 bg-primary text-white\">.bg-primary</div>\n<div class=\"p-3 mb-2 bg-secondary text-white\">.bg-secondary</div>\n<div class=\"p-3 mb-2 bg-success text-white\">.bg-success</div>\n<div class=\"p-3 mb-2 bg-danger text-white\">.bg-danger</div>\n<div class=\"p-3 mb-2 bg-warning text-white\">.bg-warning</div>\n<div class=\"p-3 mb-2 bg-info text-white\">.bg-info</div>\n<div class=\"p-3 mb-2 bg-light text-dark\">.bg-light</div>\n<div class=\"p-3 mb-2 bg-dark text-white\">.bg-dark</div>\n<div class=\"p-3 mb-2 bg-white text-dark\">.bg-white</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/text/showcase-text.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowcaseTextComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShowcaseTextComponent = (function () {
    function ShowcaseTextComponent() {
    }
    return ShowcaseTextComponent;
}());
ShowcaseTextComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'showcase-text',
        template: __webpack_require__("../../../../../src/app/showcase/components/text/showcase-text.component.html")
    }),
    __metadata("design:paramtypes", [])
], ShowcaseTextComponent);

//# sourceMappingURL=showcase-text.component.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/textarea/showcase-textarea.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row align-items-center mt-1\">\n    <label class=\"col slab-label slab-label-215\" for=\"resize-textarea\">Textarea resizable (only vertical)</label>\n    <div class=\"col-sm\">\n        <textarea name=\"\" id=\"resize-textarea\" class=\"slab-textarea w-100 slab-textarea-vertical-resize\"></textarea>\n    </div>\n</div>\n<div class=\"row align-items-center mt-1\">\n    <label class=\"col slab-label slab-label-215\" for=\"noresize-textarea\">Textarea no resizable</label>\n    <div class=\"col-sm\">\n        <textarea name=\"\" id=\"noresize-textarea\" class=\"slab-textarea w-100 slab-textarea-no-resize\"></textarea>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/textarea/showcase-textarea.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowcaseTextareaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShowcaseTextareaComponent = (function () {
    function ShowcaseTextareaComponent() {
    }
    return ShowcaseTextareaComponent;
}());
ShowcaseTextareaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'showcase-textarea',
        template: __webpack_require__("../../../../../src/app/showcase/components/textarea/showcase-textarea.component.html")
    }),
    __metadata("design:paramtypes", [])
], ShowcaseTextareaComponent);

//# sourceMappingURL=showcase-textarea.component.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/tooltip/showcase-tooltip.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\n            <div class=\"dropup slab-button-dropdown mt-2\">\n                <!-- This is the element toggling the dropdown -->\n                <button type=\"button\" class=\"btn btn-lg dropdown-toogle\" data-toggle=\"dropdown\">Drop\n                    down top-left <i\n                            class=\"icon-chevron-up\"></i></button>\n                <!-- This is the dropdown -->\n                <div class=\"dropdown-menu slab-dropdown\">\n                    <ul>\n                        <li><a (click)=\"showInfo();\">Action 1 Info</a></li>\n                        <li><a (click)=\"showWarning();\">Action 2 Warning</a></li>\n                    </ul>\n                </div>\n            </div>\n\n    <button type=\"button\" class=\"btn btn-lg mt-2\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Tooltip on top\">\n        Tooltip on top\n    </button>\n    <button type=\"button\" class=\"btn btn-lg mt-2\" data-toggle=\"tooltip\" data-placement=\"right\"\n            title=\"Tooltip on right\">\n        Tooltip on right\n    </button>\n    <button type=\"button\" class=\"btn btn-lg mt-2\" data-toggle=\"tooltip\" data-placement=\"bottom\"\n            title=\"Tooltip on bottom\">\n        Tooltip on bottom\n    </button>\n    <button type=\"button\" class=\"btn btn-lg mt-2\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Tooltip on left\">\n        Tooltip on left\n    </button>\n    <button type=\"button\" class=\"btn btn-lg mt-2\" data-toggle=\"tooltip\" data-html=\"true\"\n            title=\"<em>Tooltip</em> <u>with</u> <b>HTML</b>\">\n        Tooltip with HTML\n    </button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/tooltip/showcase-tooltip.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowcaseTooltipComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShowcaseTooltipComponent = (function () {
    function ShowcaseTooltipComponent() {
    }
    return ShowcaseTooltipComponent;
}());
ShowcaseTooltipComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'showcase-tooltip',
        template: __webpack_require__("../../../../../src/app/showcase/components/tooltip/showcase-tooltip.component.html")
    }),
    __metadata("design:paramtypes", [])
], ShowcaseTooltipComponent);

//# sourceMappingURL=showcase-tooltip.component.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/components/two-list/showcase-two-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 200px;\">\n    <systelab-two-list [(available)]=\"availableColumns\"\n                       [(visible)]=\"visibleColumns\"\n                       [initialAvailableColumns]=\"getDefaultShowcaseColumns()\"\n                       displayAttr=\"displayName\">\n    </systelab-two-list>\n</div>\n<div class=\"pt-2\">\n    <button type=\"button\" class=\"btn btn-lg\" (click)=\"savePreferences();\"><i\n            class=\"icon-info-circle\"></i> Save Preferences\n    </button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/components/two-list/showcase-two-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowcaseTwoListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__systelab_components_twolist_two_list_component__ = __webpack_require__("../../../../../src/app/systelab-components/twolist/two-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_systelab_preferences_lib_preferences_service__ = __webpack_require__("../../../../systelab-preferences/lib/preferences.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_systelab_preferences_lib_preferences_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_systelab_preferences_lib_preferences_service__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShowcaseTwoListComponent = (function () {
    function ShowcaseTwoListComponent(preferencesService) {
        this.preferencesService = preferencesService;
        this.availableColumns = [];
        this.visibleColumns = [];
        this.availableColumns = preferencesService.get('showcase.twolist.availablecolumns');
        this.visibleColumns = preferencesService.get('showcase.twolist.visiblecolumns');
        if (!this.availableColumns || this.availableColumns.length === 0) {
            this.availableColumns = this.getDefaultShowcaseColumns();
        }
        if (!this.visibleColumns || this.visibleColumns.length === 0) {
            this.visibleColumns = [];
        }
    }
    ShowcaseTwoListComponent.prototype.getDefaultShowcaseColumns = function () {
        var defaultColumns = [
            new __WEBPACK_IMPORTED_MODULE_1__systelab_components_twolist_two_list_component__["b" /* TwoListItem */]('Laboratorios', false, true),
            new __WEBPACK_IMPORTED_MODULE_1__systelab_components_twolist_two_list_component__["b" /* TwoListItem */]('Muestra', false, true),
            new __WEBPACK_IMPORTED_MODULE_1__systelab_components_twolist_two_list_component__["b" /* TwoListItem */]('Contenedores', false, true),
            new __WEBPACK_IMPORTED_MODULE_1__systelab_components_twolist_two_list_component__["b" /* TwoListItem */]('Diágnostico', false, true),
            new __WEBPACK_IMPORTED_MODULE_1__systelab_components_twolist_two_list_component__["b" /* TwoListItem */]('Número de petición', false, true),
            new __WEBPACK_IMPORTED_MODULE_1__systelab_components_twolist_two_list_component__["b" /* TwoListItem */]('Urgente', false, true),
            new __WEBPACK_IMPORTED_MODULE_1__systelab_components_twolist_two_list_component__["b" /* TwoListItem */]('Fecha de petición', false, true),
            new __WEBPACK_IMPORTED_MODULE_1__systelab_components_twolist_two_list_component__["b" /* TwoListItem */]('Fecha de nacimiento', false, true),
            new __WEBPACK_IMPORTED_MODULE_1__systelab_components_twolist_two_list_component__["b" /* TwoListItem */]('Nombre de paciente', false, true),
            new __WEBPACK_IMPORTED_MODULE_1__systelab_components_twolist_two_list_component__["b" /* TwoListItem */]('Centro de Extracción', false, true),
            new __WEBPACK_IMPORTED_MODULE_1__systelab_components_twolist_two_list_component__["b" /* TwoListItem */]('Género', false, true),
            new __WEBPACK_IMPORTED_MODULE_1__systelab_components_twolist_two_list_component__["b" /* TwoListItem */]('Edad', false, true),
            new __WEBPACK_IMPORTED_MODULE_1__systelab_components_twolist_two_list_component__["b" /* TwoListItem */]('Teléfono', false, true),
            new __WEBPACK_IMPORTED_MODULE_1__systelab_components_twolist_two_list_component__["b" /* TwoListItem */]('Tipo de paciente', false, true),
            new __WEBPACK_IMPORTED_MODULE_1__systelab_components_twolist_two_list_component__["b" /* TwoListItem */]('Centro', false, true),
            new __WEBPACK_IMPORTED_MODULE_1__systelab_components_twolist_two_list_component__["b" /* TwoListItem */]('Servicio', false, true),
            new __WEBPACK_IMPORTED_MODULE_1__systelab_components_twolist_two_list_component__["b" /* TwoListItem */]('Doctor', false, true)
        ];
        return defaultColumns;
    };
    ShowcaseTwoListComponent.prototype.savePreferences = function () {
        this.preferencesService.remove('showcase.twolist.availablecolumns');
        this.preferencesService.remove('showcase.twolist.visiblecolumns');
        this.preferencesService.put('showcase.twolist.availablecolumns', this.availableColumns);
        this.preferencesService.put('showcase.twolist.visiblecolumns', this.visibleColumns);
    };
    return ShowcaseTwoListComponent;
}());
ShowcaseTwoListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'showcase-two-list',
        template: __webpack_require__("../../../../../src/app/showcase/components/two-list/showcase-two-list.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_systelab_preferences_lib_preferences_service__["PreferencesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_systelab_preferences_lib_preferences_service__["PreferencesService"]) === "function" && _a || Object])
], ShowcaseTwoListComponent);

var _a;
//# sourceMappingURL=showcase-two-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/showcase.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"slab-dialog-overlay\">\n    <div class=\"slab-dialog slab-dialog-disabled-animation\">\n        <div class=\"slab-dialog-content\" role=\"document\">\n            <div>\n                <div class=\"slab-dialog-header d-none d-md-block d-lg-block\">Showcase</div>\n\n                <div class=\"slab-flex-1 d-flex flex-column p-2\" style=\"overflow: auto\">\n\n                    <showcase-components></showcase-components>\n                </div>\n                <systelab-tabs class=\"slab-flex-1 d-flex flex-column\">\n                    <systelab-tab [title]=\"'Components'\" [id]=\"'1'\" (click)=\"selectTab(1)\">\n                        <div class=\"p-1\">\n                            <showcase-components></showcase-components>\n                        </div>\n                    </systelab-tab>\n                    <systelab-tab [title]=\"'Tab'\" [id]=\"'2'\" (click)=\"selectTab(2)\">\n                        <div class=\"p-1\">\n                            Hello from tab 2!\n                        </div>\n                    </systelab-tab>\n                </systelab-tabs>\n\n                <div class=\"slab-dialog-buttons d-flex flex-wrap\">\n                    <button type=\"button\" class=\"btn btn-lg d-flex align-items-center mr-1\">\n                        <i class=\"icon-times-circle mr-1\"></i> Left button\n                    </button>\n                    <button type=\"button\" class=\"btn btn-lg d-flex align-items-center mr-1\">\n                        <i class=\"icon-chevron-circle-right mr-1\"></i> Right button\n                    </button>\n                </div>\n                <div class=\"slab-dialog-close d-none d-md-block d-lg-block\" (click)=\"closeDialog();\"></div>\n                <div class=\"slab-dialog-buttons-top d-none d-md-block d-lg-block\">\n                    <div><i class=\"icon-question-circle\"></i></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/showcase/showcase.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/**\r\n * Import files from default theme folder\r\n * src/slt-common/assets/styles/default-theme/sass/\r\n */\n/************** SHARED - start ****************************************************************************************/\n/* $size_percentage: Change the component size */\n/* $form-elements-height: Defines the line height;\n                          in btn-medium” we redefine the line-height and the max-height of the medium size button and the size,\n                            the min-width and the min-height of a square button;\n                          defines the max-height of the multiSelectOutBox and the min-height of the uk-form-row;\n                          defines the line-height of the uk-grid;\n                          used to calculate the width of the input inside a uk-input-file;\n                          to calculate the size of a btn inside a uk-input-file;\n                          defines the line-height of the uk-line-height class;\n                          used to calculate the $top-icon value;\n                          used to calculate the line-height of the label inside the switch class */\n/* $border-radius: Define the border radius for the components;\n                    used for the Box*/\n/* $base-font-size: defines the button font size;\n                    used to calculate the line-height of the span (when it is not in a multiselect);\n                    to calculate the padding-top of the uk-form-label inside the uk-form-row;\n                    to define the line-height of the uk-form-label inside a uk-form-row */\n/* $base-body-font-size: used in the agGrid\n                         used in the comboBox */\n/* $base-body-font-family: defines the application font\n                           defines the font-size of the inputs preceded by a uk-form */\n/************** SHARED - end ******************************************************************************************/\n/*************** RESPONSIVE - start ***********************************************************************************/\n/* $breakpoint-medium: defines the breakpoint of the mediaquery for the width of the slab-dialogs for medium screens */\n/* $breakpoint-large: defines the breakpoint of the mediaquery for the width of the slab-dialogs for large screens;\n                      used in the mediaquery to modify the Login logo */\n/* $breakpoint-xlarge: defines the breakpoint of the mediaquery for the width of the slab-dialogs for xlarge screens;\n                       used to increase the margin-left value of the uk-grid-add-margin class;\n                       used in the mediaquery to modify the Login logo */\n/* $breakpoint-huge: used in the max-width of the mediaqueries to change the slab-dialog-buttons-condensed.\n                     used to expand Cepario footer buttons;\n                     used in the max-width of the mediaqueries to change the slab-dialog-buttons-condensed */\n/* $breakpoint-medium-height: defines the breakpoint of the mediaquery for the height of the slab-dialogs for medium screens */\n/* $breakpoint-large-height: defines the breakpoint of the mediaquery for the height of the slab-dialogs for large screens  */\n/* $breakpoint-xlarge-height: defines the breakpoint of the mediaquery for the height of the slab-dialogs for xlarge screens */\n/* $ipad-width: used as mediaquery checkpoint.*/\n/* ************* RESPONSIVE - end *************************************************************************************/\n/************** MAIN APPLICATION - start ******************************************************************************/\n/* $app-min-width: defines the minimum width of the body */\n/* $app-min-height: defines the minimum height of the body */\n/* $header-height: application header height\n                   used in the sidebar */\n/* $user-width: defines the width of the user area in the main screen*/\n/************** MAIN APPLICATION - end ********************************************************************************/\n/************** BUTTON - start ****************************************************************************************/\n/* $button-large-height: defines the min-height and the line-height of the button when is large */\n/* $slab-dialog-button-width: defines the minimum width of the button */\n/************** BUTTON - end ******************************************************************************************/\n/************** CHARTS - start ****************************************************************************************/\n/* $chart-header-height: defines the height of the chart header;\n                         the height of the dropdown inside the cart;\n                         defines the size of the cell inside the dropdown\n                         used in QC Compare and QC Levey Jennings Charts */\n/************** CHARTS - end ******************************************************************************************/\n/************** CHECKBOX - start **************************************************************************************/\n/* $checkbox-height: used to define the height and the line-height of the input,\n                       the padding left if the input is empty,\n                       the size and the font-size of the input’s before attribute.*/\n/************** CHECKBOX - end ******************************************************************************************/\n/************** DROPDOWN and Tree - start *****************************************************************************/\n/* $dropdown-line-height: defines the row line-height of the dropdown;\n                          defines the row line-height of the tree */\n/************** DROPDOWN - end ****************************************************************************************/\n/************** INPUT - start *****************************************************************************************/\n/* $input-width: defines the width of the input preceded by a uk-form that has not the class uk-width;\n                 defines the width of the slab-form-icon when it has not the class uk-width;\n                 defines the width of the ui-slider when the uk-width class is not present */\n/* $input-height: used to calculate the line-height of the span (when it is not in a multiselect);\n                  to calculate the padding-top of the uk-form-label inside the uk-form-row;\n                  to calculate the line-height of a paragraph inside a uk-form-controls;\n                  defines the height of all the inputs preceded by a uk-form;\n                  defines the line-height and the height of the font inside a uk-input;\n                  defines the height and the line-height of the icon-container;\n                  defines the line-height and the heigth of a select */\n/************** INPUT - end *******************************************************************************************/\n/************** FORMS - start *****************************************************************************************/\n/* $form-row-gutter: defines the margin-top of the uk-grid-small when it’s preceded by other uk-grid-small;\n                     defines the margin-top of the uk-form-row when it’s preceded by other uk-form-row */\n/************** FORMS - end *******************************************************************************************/\n/************** slab-dialog - start **************************************************************************************/\n/* $slab-dialog-header-height: defines the max-height of the slab-dialog-header; */\n/************** slab-dialog - end ****************************************************************************************/\n/************** NGSEARCHER - start ************************************************************************************/\n/* $ng-searcher-button-width: defines the width of the searcher button */\n/************** NGSEARCHER - end **************************************************************************************/\n/************** TABLE - start *****************************************************************************************/\n/* $table-left-header-width: defines the width of the left-header inside a uk-table.*/\n/************** TABLE - end *******************************************************************************************/\n/************** TABS - start ******************************************************************************************/\n/* $tab-height: used to calculate the $height-diff value;\n                defines the height of the tab elements inside a uk-form;\n                defines the height of the li elements inside the previous tab;\n                defines the top position of all elements inside the tab;\n                defines the top value of the uk-margin-small-top, uk-margin-top and uk-margin-large-top.*/\n/* $tab-min-width: defines the min-width of the tabs.*/\n/* $tab-space: used to define the top margin and the gutter between elements */\n/************** TABS - end ******************************************************************************************/\n/************** GRID - start ****************************************************************************************/\n/* $grid-header-height: defines the height of the ui-grid-header-cell;\n                          used to define the size of the grid-action-cell class */\n/* $grid-header-line-height: defines the line-height of the ui-grid-header-cell.\n                               defines the header-line-height of the agGrid */\n/* $grid-cell-height: defines the height and the min-height of the ui-grid-row;\n                        defines the height and the min-height of the ui-grid-cell;\n                        defines the line-height of the ui-grid-cell-contents;\n                        used to calculate the $status-square-right-size value;\n                        defines the line-height of the ui-grid-cell-line-height;\n                        defines the height of the ui-grid-cell-height;\n                        defines the font-size of the uk-text-large;\n                        used to calculate the size of the grid-acion-cell element */\n/* $grid-cell-line-height: defines the line-height of the ui-grid-cell\n                             defines the line-height of the combo-button */\n/************** GRID - end ******************************************************************************************/\n/*!\n * Bootstrap v4.0.0-beta.2 (https://getbootstrap.com)\n * Copyright 2011-2017 The Bootstrap Authors\n * Copyright 2011-2017 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */\n:root {\n  --blue: #007bff;\n  --indigo: #6610f2;\n  --purple: #6f42c1;\n  --pink: #e83e8c;\n  --red: #dc3545;\n  --orange: #fd7e14;\n  --yellow: #ffc107;\n  --green: #28a745;\n  --teal: #20c997;\n  --cyan: #17a2b8;\n  --white: #fff;\n  --gray: #868e96;\n  --gray-dark: #343a40;\n  --primary: #2330fc;\n  --secondary: #868e96;\n  --success: #12ce7b;\n  --info: #008fad;\n  --warning: #ffbc00;\n  --danger: #dc3545;\n  --light: #f8f9fa;\n  --dark: #343a40;\n  --breakpoint-xs: 0;\n  --breakpoint-sm: 576px;\n  --breakpoint-md: 768px;\n  --breakpoint-lg: 992px;\n  --breakpoint-xl: 1200px;\n  --font-family-sans-serif: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  --font-family-monospace: \"SFMono-Regular\", Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; }\n\n@media print {\n  *,\n  *::before,\n  *::after {\n    text-shadow: none !important;\n    box-shadow: none !important; }\n  a,\n  a:visited {\n    text-decoration: underline; }\n  abbr[title]::after {\n    content: \" (\" attr(title) \")\"; }\n  pre {\n    white-space: pre-wrap !important; }\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid; }\n  thead {\n    display: table-header-group; }\n  tr,\n  img {\n    page-break-inside: avoid; }\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3; }\n  h2,\n  h3 {\n    page-break-after: avoid; }\n  .navbar {\n    display: none; }\n  .badge {\n    border: 1px solid #000; }\n  .table {\n    border-collapse: collapse !important; }\n    .table td,\n    .table th {\n      background-color: #fff !important; }\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #ddd !important; } }\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box; }\n\nhtml {\n  font-family: sans-serif;\n  line-height: 1.15;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  -ms-overflow-style: scrollbar;\n  -webkit-tap-highlight-color: transparent; }\n\n@-ms-viewport {\n  width: device-width; }\n\narticle, aside, dialog, figcaption, figure, footer, header, hgroup, main, nav, section {\n  display: block; }\n\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  text-align: left;\n  background-color: #fff; }\n\n[tabindex=\"-1\"]:focus {\n  outline: none !important; }\n\nhr {\n  box-sizing: content-box;\n  height: 0;\n  overflow: visible; }\n\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 0;\n  margin-bottom: 0.5rem; }\n\np {\n  margin-top: 0;\n  margin-bottom: 1rem; }\n\nabbr[title],\nabbr[data-original-title] {\n  text-decoration: underline;\n  text-decoration: underline dotted;\n  cursor: help;\n  border-bottom: 0; }\n\naddress {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit; }\n\nol,\nul,\ndl {\n  margin-top: 0;\n  margin-bottom: 1rem; }\n\nol ol,\nul ul,\nol ul,\nul ol {\n  margin-bottom: 0; }\n\ndt {\n  font-weight: 700; }\n\ndd {\n  margin-bottom: .5rem;\n  margin-left: 0; }\n\nblockquote {\n  margin: 0 0 1rem; }\n\ndfn {\n  font-style: italic; }\n\nb,\nstrong {\n  font-weight: bolder; }\n\nsmall {\n  font-size: 80%; }\n\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -.25em; }\n\nsup {\n  top: -.5em; }\n\na {\n  color: #2330fc;\n  text-decoration: none;\n  background-color: transparent;\n  -webkit-text-decoration-skip: objects; }\n  a:hover {\n    color: #030fd0;\n    text-decoration: underline; }\n\na:not([href]):not([tabindex]) {\n  color: inherit;\n  text-decoration: none; }\n  a:not([href]):not([tabindex]):focus, a:not([href]):not([tabindex]):hover {\n    color: inherit;\n    text-decoration: none; }\n  a:not([href]):not([tabindex]):focus {\n    outline: 0; }\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n\npre {\n  margin-top: 0;\n  margin-bottom: 1rem;\n  overflow: auto;\n  -ms-overflow-style: scrollbar; }\n\nfigure {\n  margin: 0 0 1rem; }\n\nimg {\n  vertical-align: middle;\n  border-style: none; }\n\nsvg:not(:root) {\n  overflow: hidden; }\n\na,\narea,\nbutton,\n[role=\"button\"],\ninput:not([type=\"range\"]),\nlabel,\nselect,\nsummary,\ntextarea {\n  -ms-touch-action: manipulation;\n      touch-action: manipulation; }\n\ntable {\n  border-collapse: collapse; }\n\ncaption {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  color: #868e96;\n  text-align: left;\n  caption-side: bottom; }\n\nth {\n  text-align: inherit; }\n\nlabel {\n  display: inline-block;\n  margin-bottom: .5rem; }\n\nbutton {\n  border-radius: 0; }\n\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color; }\n\ninput,\nbutton,\nselect,\noptgroup,\ntextarea {\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit; }\n\nbutton,\ninput {\n  overflow: visible; }\n\nbutton,\nselect {\n  text-transform: none; }\n\nbutton,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; }\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  padding: 0;\n  border-style: none; }\n\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  box-sizing: border-box;\n  padding: 0; }\n\ninput[type=\"date\"],\ninput[type=\"time\"],\ninput[type=\"datetime-local\"],\ninput[type=\"month\"] {\n  -webkit-appearance: listbox; }\n\ntextarea {\n  overflow: auto;\n  resize: vertical; }\n\nfieldset {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0; }\n\nlegend {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  padding: 0;\n  margin-bottom: .5rem;\n  font-size: 1.5rem;\n  line-height: inherit;\n  color: inherit;\n  white-space: normal; }\n\nprogress {\n  vertical-align: baseline; }\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n[type=\"search\"] {\n  outline-offset: -2px;\n  -webkit-appearance: none; }\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n::-webkit-file-upload-button {\n  font: inherit;\n  -webkit-appearance: button; }\n\noutput {\n  display: inline-block; }\n\nsummary {\n  display: list-item; }\n\ntemplate {\n  display: none; }\n\n[hidden] {\n  display: none !important; }\n\nh1, h2, h3, h4, h5, h6,\n.h1, .h2, .h3, .h4, .h5, .h6 {\n  margin-bottom: 0.5rem;\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.2;\n  color: inherit; }\n\nh1, .h1 {\n  font-size: 2.5rem; }\n\nh2, .h2 {\n  font-size: 2rem; }\n\nh3, .h3 {\n  font-size: 1.75rem; }\n\nh4, .h4 {\n  font-size: 1.5rem; }\n\nh5, .h5 {\n  font-size: 1.25rem; }\n\nh6, .h6 {\n  font-size: 1rem; }\n\n.lead {\n  font-size: 1.25rem;\n  font-weight: 300; }\n\n.display-1 {\n  font-size: 6rem;\n  font-weight: 300;\n  line-height: 1.2; }\n\n.display-2 {\n  font-size: 5.5rem;\n  font-weight: 300;\n  line-height: 1.2; }\n\n.display-3 {\n  font-size: 4.5rem;\n  font-weight: 300;\n  line-height: 1.2; }\n\n.display-4 {\n  font-size: 3.5rem;\n  font-weight: 300;\n  line-height: 1.2; }\n\nhr {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border: 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.1); }\n\nsmall,\n.small {\n  font-size: 80%;\n  font-weight: 400; }\n\nmark,\n.mark {\n  padding: 0.2em;\n  background-color: #fcf8e3; }\n\n.list-unstyled {\n  padding-left: 0;\n  list-style: none; }\n\n.list-inline {\n  padding-left: 0;\n  list-style: none; }\n\n.list-inline-item {\n  display: inline-block; }\n  .list-inline-item:not(:last-child) {\n    margin-right: 5px; }\n\n.initialism {\n  font-size: 90%;\n  text-transform: uppercase; }\n\n.blockquote {\n  margin-bottom: 1rem;\n  font-size: 1.25rem; }\n\n.blockquote-footer {\n  display: block;\n  font-size: 80%;\n  color: #868e96; }\n  .blockquote-footer::before {\n    content: \"\\2014   \\A0\"; }\n\n.img-fluid {\n  max-width: 100%;\n  height: auto; }\n\n.img-thumbnail {\n  padding: 0.25rem;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  transition: all 0.2s ease-in-out;\n  max-width: 100%;\n  height: auto; }\n\n.figure {\n  display: inline-block; }\n\n.figure-img {\n  margin-bottom: 0.5rem;\n  line-height: 1; }\n\n.figure-caption {\n  font-size: 90%;\n  color: #868e96; }\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: \"SFMono-Regular\", Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; }\n\ncode {\n  padding: 0.2rem 0.4rem;\n  font-size: 90%;\n  color: #bd4147;\n  background-color: #f8f9fa;\n  border-radius: 3px; }\n  a > code {\n    padding: 0;\n    color: inherit;\n    background-color: inherit; }\n\nkbd {\n  padding: 0.2rem 0.4rem;\n  font-size: 90%;\n  color: #fff;\n  background-color: #212529;\n  border-radius: 0.2rem; }\n  kbd kbd {\n    padding: 0;\n    font-size: 100%;\n    font-weight: 700; }\n\npre {\n  display: block;\n  margin-top: 0;\n  margin-bottom: 1rem;\n  font-size: 90%;\n  color: #212529; }\n  pre code {\n    padding: 0;\n    font-size: inherit;\n    color: inherit;\n    background-color: transparent;\n    border-radius: 0; }\n\n.pre-scrollable {\n  max-height: 340px;\n  overflow-y: scroll; }\n\n.container {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto; }\n  @media (min-width: 576px) {\n    .container {\n      max-width: 540px; } }\n  @media (min-width: 768px) {\n    .container {\n      max-width: 720px; } }\n  @media (min-width: 992px) {\n    .container {\n      max-width: 960px; } }\n  @media (min-width: 1200px) {\n    .container {\n      max-width: 1140px; } }\n\n.container-fluid {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto; }\n\n.row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px; }\n\n.no-gutters {\n  margin-right: 0;\n  margin-left: 0; }\n  .no-gutters > .col,\n  .no-gutters > [class*=\"col-\"] {\n    padding-right: 0;\n    padding-left: 0; }\n\n.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col,\n.col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm,\n.col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md,\n.col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg,\n.col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl,\n.col-xl-auto {\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px; }\n\n.col {\n  -ms-flex-preferred-size: 0;\n      flex-basis: 0;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  max-width: 100%; }\n\n.col-auto {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  width: auto;\n  max-width: none; }\n\n.col-1 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 8.33333333%;\n          flex: 0 0 8.33333333%;\n  max-width: 8.33333333%; }\n\n.col-2 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 16.66666667%;\n          flex: 0 0 16.66666667%;\n  max-width: 16.66666667%; }\n\n.col-3 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 25%;\n          flex: 0 0 25%;\n  max-width: 25%; }\n\n.col-4 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 33.33333333%;\n          flex: 0 0 33.33333333%;\n  max-width: 33.33333333%; }\n\n.col-5 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 41.66666667%;\n          flex: 0 0 41.66666667%;\n  max-width: 41.66666667%; }\n\n.col-6 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 50%;\n          flex: 0 0 50%;\n  max-width: 50%; }\n\n.col-7 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 58.33333333%;\n          flex: 0 0 58.33333333%;\n  max-width: 58.33333333%; }\n\n.col-8 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 66.66666667%;\n          flex: 0 0 66.66666667%;\n  max-width: 66.66666667%; }\n\n.col-9 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 75%;\n          flex: 0 0 75%;\n  max-width: 75%; }\n\n.col-10 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 83.33333333%;\n          flex: 0 0 83.33333333%;\n  max-width: 83.33333333%; }\n\n.col-11 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 91.66666667%;\n          flex: 0 0 91.66666667%;\n  max-width: 91.66666667%; }\n\n.col-12 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 100%;\n          flex: 0 0 100%;\n  max-width: 100%; }\n\n.order-first {\n  -webkit-box-ordinal-group: 0;\n      -ms-flex-order: -1;\n          order: -1; }\n\n.order-1 {\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1; }\n\n.order-2 {\n  -webkit-box-ordinal-group: 3;\n      -ms-flex-order: 2;\n          order: 2; }\n\n.order-3 {\n  -webkit-box-ordinal-group: 4;\n      -ms-flex-order: 3;\n          order: 3; }\n\n.order-4 {\n  -webkit-box-ordinal-group: 5;\n      -ms-flex-order: 4;\n          order: 4; }\n\n.order-5 {\n  -webkit-box-ordinal-group: 6;\n      -ms-flex-order: 5;\n          order: 5; }\n\n.order-6 {\n  -webkit-box-ordinal-group: 7;\n      -ms-flex-order: 6;\n          order: 6; }\n\n.order-7 {\n  -webkit-box-ordinal-group: 8;\n      -ms-flex-order: 7;\n          order: 7; }\n\n.order-8 {\n  -webkit-box-ordinal-group: 9;\n      -ms-flex-order: 8;\n          order: 8; }\n\n.order-9 {\n  -webkit-box-ordinal-group: 10;\n      -ms-flex-order: 9;\n          order: 9; }\n\n.order-10 {\n  -webkit-box-ordinal-group: 11;\n      -ms-flex-order: 10;\n          order: 10; }\n\n.order-11 {\n  -webkit-box-ordinal-group: 12;\n      -ms-flex-order: 11;\n          order: 11; }\n\n.order-12 {\n  -webkit-box-ordinal-group: 13;\n      -ms-flex-order: 12;\n          order: 12; }\n\n.offset-1 {\n  margin-left: 8.33333333%; }\n\n.offset-2 {\n  margin-left: 16.66666667%; }\n\n.offset-3 {\n  margin-left: 25%; }\n\n.offset-4 {\n  margin-left: 33.33333333%; }\n\n.offset-5 {\n  margin-left: 41.66666667%; }\n\n.offset-6 {\n  margin-left: 50%; }\n\n.offset-7 {\n  margin-left: 58.33333333%; }\n\n.offset-8 {\n  margin-left: 66.66666667%; }\n\n.offset-9 {\n  margin-left: 75%; }\n\n.offset-10 {\n  margin-left: 83.33333333%; }\n\n.offset-11 {\n  margin-left: 91.66666667%; }\n\n@media (min-width: 576px) {\n  .col-sm {\n    -ms-flex-preferred-size: 0;\n        flex-basis: 0;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    max-width: 100%; }\n  .col-sm-auto {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-sm-1 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 8.33333333%;\n            flex: 0 0 8.33333333%;\n    max-width: 8.33333333%; }\n  .col-sm-2 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 16.66666667%;\n            flex: 0 0 16.66666667%;\n    max-width: 16.66666667%; }\n  .col-sm-3 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%; }\n  .col-sm-4 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 33.33333333%;\n            flex: 0 0 33.33333333%;\n    max-width: 33.33333333%; }\n  .col-sm-5 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 41.66666667%;\n            flex: 0 0 41.66666667%;\n    max-width: 41.66666667%; }\n  .col-sm-6 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%; }\n  .col-sm-7 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 58.33333333%;\n            flex: 0 0 58.33333333%;\n    max-width: 58.33333333%; }\n  .col-sm-8 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 66.66666667%;\n            flex: 0 0 66.66666667%;\n    max-width: 66.66666667%; }\n  .col-sm-9 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%; }\n  .col-sm-10 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 83.33333333%;\n            flex: 0 0 83.33333333%;\n    max-width: 83.33333333%; }\n  .col-sm-11 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 91.66666667%;\n            flex: 0 0 91.66666667%;\n    max-width: 91.66666667%; }\n  .col-sm-12 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%; }\n  .order-sm-first {\n    -webkit-box-ordinal-group: 0;\n        -ms-flex-order: -1;\n            order: -1; }\n  .order-sm-1 {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1; }\n  .order-sm-2 {\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2; }\n  .order-sm-3 {\n    -webkit-box-ordinal-group: 4;\n        -ms-flex-order: 3;\n            order: 3; }\n  .order-sm-4 {\n    -webkit-box-ordinal-group: 5;\n        -ms-flex-order: 4;\n            order: 4; }\n  .order-sm-5 {\n    -webkit-box-ordinal-group: 6;\n        -ms-flex-order: 5;\n            order: 5; }\n  .order-sm-6 {\n    -webkit-box-ordinal-group: 7;\n        -ms-flex-order: 6;\n            order: 6; }\n  .order-sm-7 {\n    -webkit-box-ordinal-group: 8;\n        -ms-flex-order: 7;\n            order: 7; }\n  .order-sm-8 {\n    -webkit-box-ordinal-group: 9;\n        -ms-flex-order: 8;\n            order: 8; }\n  .order-sm-9 {\n    -webkit-box-ordinal-group: 10;\n        -ms-flex-order: 9;\n            order: 9; }\n  .order-sm-10 {\n    -webkit-box-ordinal-group: 11;\n        -ms-flex-order: 10;\n            order: 10; }\n  .order-sm-11 {\n    -webkit-box-ordinal-group: 12;\n        -ms-flex-order: 11;\n            order: 11; }\n  .order-sm-12 {\n    -webkit-box-ordinal-group: 13;\n        -ms-flex-order: 12;\n            order: 12; }\n  .offset-sm-0 {\n    margin-left: 0; }\n  .offset-sm-1 {\n    margin-left: 8.33333333%; }\n  .offset-sm-2 {\n    margin-left: 16.66666667%; }\n  .offset-sm-3 {\n    margin-left: 25%; }\n  .offset-sm-4 {\n    margin-left: 33.33333333%; }\n  .offset-sm-5 {\n    margin-left: 41.66666667%; }\n  .offset-sm-6 {\n    margin-left: 50%; }\n  .offset-sm-7 {\n    margin-left: 58.33333333%; }\n  .offset-sm-8 {\n    margin-left: 66.66666667%; }\n  .offset-sm-9 {\n    margin-left: 75%; }\n  .offset-sm-10 {\n    margin-left: 83.33333333%; }\n  .offset-sm-11 {\n    margin-left: 91.66666667%; } }\n\n@media (min-width: 768px) {\n  .col-md {\n    -ms-flex-preferred-size: 0;\n        flex-basis: 0;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    max-width: 100%; }\n  .col-md-auto {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-md-1 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 8.33333333%;\n            flex: 0 0 8.33333333%;\n    max-width: 8.33333333%; }\n  .col-md-2 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 16.66666667%;\n            flex: 0 0 16.66666667%;\n    max-width: 16.66666667%; }\n  .col-md-3 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%; }\n  .col-md-4 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 33.33333333%;\n            flex: 0 0 33.33333333%;\n    max-width: 33.33333333%; }\n  .col-md-5 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 41.66666667%;\n            flex: 0 0 41.66666667%;\n    max-width: 41.66666667%; }\n  .col-md-6 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%; }\n  .col-md-7 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 58.33333333%;\n            flex: 0 0 58.33333333%;\n    max-width: 58.33333333%; }\n  .col-md-8 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 66.66666667%;\n            flex: 0 0 66.66666667%;\n    max-width: 66.66666667%; }\n  .col-md-9 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%; }\n  .col-md-10 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 83.33333333%;\n            flex: 0 0 83.33333333%;\n    max-width: 83.33333333%; }\n  .col-md-11 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 91.66666667%;\n            flex: 0 0 91.66666667%;\n    max-width: 91.66666667%; }\n  .col-md-12 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%; }\n  .order-md-first {\n    -webkit-box-ordinal-group: 0;\n        -ms-flex-order: -1;\n            order: -1; }\n  .order-md-1 {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1; }\n  .order-md-2 {\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2; }\n  .order-md-3 {\n    -webkit-box-ordinal-group: 4;\n        -ms-flex-order: 3;\n            order: 3; }\n  .order-md-4 {\n    -webkit-box-ordinal-group: 5;\n        -ms-flex-order: 4;\n            order: 4; }\n  .order-md-5 {\n    -webkit-box-ordinal-group: 6;\n        -ms-flex-order: 5;\n            order: 5; }\n  .order-md-6 {\n    -webkit-box-ordinal-group: 7;\n        -ms-flex-order: 6;\n            order: 6; }\n  .order-md-7 {\n    -webkit-box-ordinal-group: 8;\n        -ms-flex-order: 7;\n            order: 7; }\n  .order-md-8 {\n    -webkit-box-ordinal-group: 9;\n        -ms-flex-order: 8;\n            order: 8; }\n  .order-md-9 {\n    -webkit-box-ordinal-group: 10;\n        -ms-flex-order: 9;\n            order: 9; }\n  .order-md-10 {\n    -webkit-box-ordinal-group: 11;\n        -ms-flex-order: 10;\n            order: 10; }\n  .order-md-11 {\n    -webkit-box-ordinal-group: 12;\n        -ms-flex-order: 11;\n            order: 11; }\n  .order-md-12 {\n    -webkit-box-ordinal-group: 13;\n        -ms-flex-order: 12;\n            order: 12; }\n  .offset-md-0 {\n    margin-left: 0; }\n  .offset-md-1 {\n    margin-left: 8.33333333%; }\n  .offset-md-2 {\n    margin-left: 16.66666667%; }\n  .offset-md-3 {\n    margin-left: 25%; }\n  .offset-md-4 {\n    margin-left: 33.33333333%; }\n  .offset-md-5 {\n    margin-left: 41.66666667%; }\n  .offset-md-6 {\n    margin-left: 50%; }\n  .offset-md-7 {\n    margin-left: 58.33333333%; }\n  .offset-md-8 {\n    margin-left: 66.66666667%; }\n  .offset-md-9 {\n    margin-left: 75%; }\n  .offset-md-10 {\n    margin-left: 83.33333333%; }\n  .offset-md-11 {\n    margin-left: 91.66666667%; } }\n\n@media (min-width: 992px) {\n  .col-lg {\n    -ms-flex-preferred-size: 0;\n        flex-basis: 0;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    max-width: 100%; }\n  .col-lg-auto {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-lg-1 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 8.33333333%;\n            flex: 0 0 8.33333333%;\n    max-width: 8.33333333%; }\n  .col-lg-2 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 16.66666667%;\n            flex: 0 0 16.66666667%;\n    max-width: 16.66666667%; }\n  .col-lg-3 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%; }\n  .col-lg-4 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 33.33333333%;\n            flex: 0 0 33.33333333%;\n    max-width: 33.33333333%; }\n  .col-lg-5 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 41.66666667%;\n            flex: 0 0 41.66666667%;\n    max-width: 41.66666667%; }\n  .col-lg-6 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%; }\n  .col-lg-7 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 58.33333333%;\n            flex: 0 0 58.33333333%;\n    max-width: 58.33333333%; }\n  .col-lg-8 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 66.66666667%;\n            flex: 0 0 66.66666667%;\n    max-width: 66.66666667%; }\n  .col-lg-9 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%; }\n  .col-lg-10 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 83.33333333%;\n            flex: 0 0 83.33333333%;\n    max-width: 83.33333333%; }\n  .col-lg-11 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 91.66666667%;\n            flex: 0 0 91.66666667%;\n    max-width: 91.66666667%; }\n  .col-lg-12 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%; }\n  .order-lg-first {\n    -webkit-box-ordinal-group: 0;\n        -ms-flex-order: -1;\n            order: -1; }\n  .order-lg-1 {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1; }\n  .order-lg-2 {\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2; }\n  .order-lg-3 {\n    -webkit-box-ordinal-group: 4;\n        -ms-flex-order: 3;\n            order: 3; }\n  .order-lg-4 {\n    -webkit-box-ordinal-group: 5;\n        -ms-flex-order: 4;\n            order: 4; }\n  .order-lg-5 {\n    -webkit-box-ordinal-group: 6;\n        -ms-flex-order: 5;\n            order: 5; }\n  .order-lg-6 {\n    -webkit-box-ordinal-group: 7;\n        -ms-flex-order: 6;\n            order: 6; }\n  .order-lg-7 {\n    -webkit-box-ordinal-group: 8;\n        -ms-flex-order: 7;\n            order: 7; }\n  .order-lg-8 {\n    -webkit-box-ordinal-group: 9;\n        -ms-flex-order: 8;\n            order: 8; }\n  .order-lg-9 {\n    -webkit-box-ordinal-group: 10;\n        -ms-flex-order: 9;\n            order: 9; }\n  .order-lg-10 {\n    -webkit-box-ordinal-group: 11;\n        -ms-flex-order: 10;\n            order: 10; }\n  .order-lg-11 {\n    -webkit-box-ordinal-group: 12;\n        -ms-flex-order: 11;\n            order: 11; }\n  .order-lg-12 {\n    -webkit-box-ordinal-group: 13;\n        -ms-flex-order: 12;\n            order: 12; }\n  .offset-lg-0 {\n    margin-left: 0; }\n  .offset-lg-1 {\n    margin-left: 8.33333333%; }\n  .offset-lg-2 {\n    margin-left: 16.66666667%; }\n  .offset-lg-3 {\n    margin-left: 25%; }\n  .offset-lg-4 {\n    margin-left: 33.33333333%; }\n  .offset-lg-5 {\n    margin-left: 41.66666667%; }\n  .offset-lg-6 {\n    margin-left: 50%; }\n  .offset-lg-7 {\n    margin-left: 58.33333333%; }\n  .offset-lg-8 {\n    margin-left: 66.66666667%; }\n  .offset-lg-9 {\n    margin-left: 75%; }\n  .offset-lg-10 {\n    margin-left: 83.33333333%; }\n  .offset-lg-11 {\n    margin-left: 91.66666667%; } }\n\n@media (min-width: 1200px) {\n  .col-xl {\n    -ms-flex-preferred-size: 0;\n        flex-basis: 0;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    max-width: 100%; }\n  .col-xl-auto {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-xl-1 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 8.33333333%;\n            flex: 0 0 8.33333333%;\n    max-width: 8.33333333%; }\n  .col-xl-2 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 16.66666667%;\n            flex: 0 0 16.66666667%;\n    max-width: 16.66666667%; }\n  .col-xl-3 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%; }\n  .col-xl-4 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 33.33333333%;\n            flex: 0 0 33.33333333%;\n    max-width: 33.33333333%; }\n  .col-xl-5 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 41.66666667%;\n            flex: 0 0 41.66666667%;\n    max-width: 41.66666667%; }\n  .col-xl-6 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%; }\n  .col-xl-7 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 58.33333333%;\n            flex: 0 0 58.33333333%;\n    max-width: 58.33333333%; }\n  .col-xl-8 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 66.66666667%;\n            flex: 0 0 66.66666667%;\n    max-width: 66.66666667%; }\n  .col-xl-9 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%; }\n  .col-xl-10 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 83.33333333%;\n            flex: 0 0 83.33333333%;\n    max-width: 83.33333333%; }\n  .col-xl-11 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 91.66666667%;\n            flex: 0 0 91.66666667%;\n    max-width: 91.66666667%; }\n  .col-xl-12 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%; }\n  .order-xl-first {\n    -webkit-box-ordinal-group: 0;\n        -ms-flex-order: -1;\n            order: -1; }\n  .order-xl-1 {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1; }\n  .order-xl-2 {\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2; }\n  .order-xl-3 {\n    -webkit-box-ordinal-group: 4;\n        -ms-flex-order: 3;\n            order: 3; }\n  .order-xl-4 {\n    -webkit-box-ordinal-group: 5;\n        -ms-flex-order: 4;\n            order: 4; }\n  .order-xl-5 {\n    -webkit-box-ordinal-group: 6;\n        -ms-flex-order: 5;\n            order: 5; }\n  .order-xl-6 {\n    -webkit-box-ordinal-group: 7;\n        -ms-flex-order: 6;\n            order: 6; }\n  .order-xl-7 {\n    -webkit-box-ordinal-group: 8;\n        -ms-flex-order: 7;\n            order: 7; }\n  .order-xl-8 {\n    -webkit-box-ordinal-group: 9;\n        -ms-flex-order: 8;\n            order: 8; }\n  .order-xl-9 {\n    -webkit-box-ordinal-group: 10;\n        -ms-flex-order: 9;\n            order: 9; }\n  .order-xl-10 {\n    -webkit-box-ordinal-group: 11;\n        -ms-flex-order: 10;\n            order: 10; }\n  .order-xl-11 {\n    -webkit-box-ordinal-group: 12;\n        -ms-flex-order: 11;\n            order: 11; }\n  .order-xl-12 {\n    -webkit-box-ordinal-group: 13;\n        -ms-flex-order: 12;\n            order: 12; }\n  .offset-xl-0 {\n    margin-left: 0; }\n  .offset-xl-1 {\n    margin-left: 8.33333333%; }\n  .offset-xl-2 {\n    margin-left: 16.66666667%; }\n  .offset-xl-3 {\n    margin-left: 25%; }\n  .offset-xl-4 {\n    margin-left: 33.33333333%; }\n  .offset-xl-5 {\n    margin-left: 41.66666667%; }\n  .offset-xl-6 {\n    margin-left: 50%; }\n  .offset-xl-7 {\n    margin-left: 58.33333333%; }\n  .offset-xl-8 {\n    margin-left: 66.66666667%; }\n  .offset-xl-9 {\n    margin-left: 75%; }\n  .offset-xl-10 {\n    margin-left: 83.33333333%; }\n  .offset-xl-11 {\n    margin-left: 91.66666667%; } }\n\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 1rem;\n  background-color: transparent; }\n  .table th,\n  .table td {\n    padding: 0.75rem;\n    vertical-align: top;\n    border-top: 1px solid #e9ecef; }\n  .table thead th {\n    vertical-align: bottom;\n    border-bottom: 2px solid #e9ecef; }\n  .table tbody + tbody {\n    border-top: 2px solid #e9ecef; }\n  .table .table {\n    background-color: #fff; }\n\n.table-sm th,\n.table-sm td {\n  padding: 0.3rem; }\n\n.table-bordered {\n  border: 1px solid #e9ecef; }\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #e9ecef; }\n  .table-bordered thead th,\n  .table-bordered thead td {\n    border-bottom-width: 2px; }\n\n.table-striped tbody tr:nth-of-type(odd) {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.table-hover tbody tr:hover {\n  background-color: rgba(0, 0, 0, 0.075); }\n\n.table-primary,\n.table-primary > th,\n.table-primary > td {\n  background-color: #c1c5fe; }\n\n.table-hover .table-primary:hover {\n  background-color: #a8aefe; }\n  .table-hover .table-primary:hover > td,\n  .table-hover .table-primary:hover > th {\n    background-color: #a8aefe; }\n\n.table-secondary,\n.table-secondary > th,\n.table-secondary > td {\n  background-color: #dddfe2; }\n\n.table-hover .table-secondary:hover {\n  background-color: #cfd2d6; }\n  .table-hover .table-secondary:hover > td,\n  .table-hover .table-secondary:hover > th {\n    background-color: #cfd2d6; }\n\n.table-success,\n.table-success > th,\n.table-success > td {\n  background-color: #bdf1da; }\n\n.table-hover .table-success:hover {\n  background-color: #a8edce; }\n  .table-hover .table-success:hover > td,\n  .table-hover .table-success:hover > th {\n    background-color: #a8edce; }\n\n.table-info,\n.table-info > th,\n.table-info > td {\n  background-color: #b8e0e8; }\n\n.table-hover .table-info:hover {\n  background-color: #a5d8e2; }\n  .table-hover .table-info:hover > td,\n  .table-hover .table-info:hover > th {\n    background-color: #a5d8e2; }\n\n.table-warning,\n.table-warning > th,\n.table-warning > td {\n  background-color: #ffecb8; }\n\n.table-hover .table-warning:hover {\n  background-color: #ffe59f; }\n  .table-hover .table-warning:hover > td,\n  .table-hover .table-warning:hover > th {\n    background-color: #ffe59f; }\n\n.table-danger,\n.table-danger > th,\n.table-danger > td {\n  background-color: #f5c6cb; }\n\n.table-hover .table-danger:hover {\n  background-color: #f1b0b7; }\n  .table-hover .table-danger:hover > td,\n  .table-hover .table-danger:hover > th {\n    background-color: #f1b0b7; }\n\n.table-light,\n.table-light > th,\n.table-light > td {\n  background-color: #fdfdfe; }\n\n.table-hover .table-light:hover {\n  background-color: #ececf6; }\n  .table-hover .table-light:hover > td,\n  .table-hover .table-light:hover > th {\n    background-color: #ececf6; }\n\n.table-dark,\n.table-dark > th,\n.table-dark > td {\n  background-color: #c6c8ca; }\n\n.table-hover .table-dark:hover {\n  background-color: #b9bbbe; }\n  .table-hover .table-dark:hover > td,\n  .table-hover .table-dark:hover > th {\n    background-color: #b9bbbe; }\n\n.table-active,\n.table-active > th,\n.table-active > td {\n  background-color: rgba(0, 0, 0, 0.075); }\n\n.table-hover .table-active:hover {\n  background-color: rgba(0, 0, 0, 0.075); }\n  .table-hover .table-active:hover > td,\n  .table-hover .table-active:hover > th {\n    background-color: rgba(0, 0, 0, 0.075); }\n\n.table .thead-dark th {\n  color: #fff;\n  background-color: #212529;\n  border-color: #32383e; }\n\n.table .thead-light th {\n  color: #495057;\n  background-color: #e9ecef;\n  border-color: #e9ecef; }\n\n.table-dark {\n  color: #fff;\n  background-color: #212529; }\n  .table-dark th,\n  .table-dark td,\n  .table-dark thead th {\n    border-color: #32383e; }\n  .table-dark.table-bordered {\n    border: 0; }\n  .table-dark.table-striped tbody tr:nth-of-type(odd) {\n    background-color: rgba(255, 255, 255, 0.05); }\n  .table-dark.table-hover tbody tr:hover {\n    background-color: rgba(255, 255, 255, 0.075); }\n\n@media (max-width: 575px) {\n  .table-responsive-sm {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .table-responsive-sm.table-bordered {\n      border: 0; } }\n\n@media (max-width: 767px) {\n  .table-responsive-md {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .table-responsive-md.table-bordered {\n      border: 0; } }\n\n@media (max-width: 991px) {\n  .table-responsive-lg {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .table-responsive-lg.table-bordered {\n      border: 0; } }\n\n@media (max-width: 1199px) {\n  .table-responsive-xl {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .table-responsive-xl.table-bordered {\n      border: 0; } }\n\n.table-responsive {\n  display: block;\n  width: 100%;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: -ms-autohiding-scrollbar; }\n  .table-responsive.table-bordered {\n    border: 0; }\n\n.form-control {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-image: none;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 3px;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s; }\n  .form-control::-ms-expand {\n    background-color: transparent;\n    border: 0; }\n  .form-control:focus {\n    color: #495057;\n    background-color: #fff;\n    border-color: #a1a6fe;\n    outline: none;\n    box-shadow: 0 0 0 0.2rem rgba(35, 48, 252, 0.25); }\n  .form-control::-webkit-input-placeholder {\n    color: #868e96;\n    opacity: 1; }\n  .form-control:-ms-input-placeholder {\n    color: #868e96;\n    opacity: 1; }\n  .form-control::placeholder {\n    color: #868e96;\n    opacity: 1; }\n  .form-control:disabled, .form-control[readonly] {\n    background-color: #e9ecef;\n    opacity: 1; }\n\nselect.form-control:not([size]):not([multiple]) {\n  height: 25px; }\n\nselect.form-control:focus::-ms-value {\n  color: #495057;\n  background-color: #fff; }\n\n.form-control-file,\n.form-control-range {\n  display: block; }\n\n.col-form-label {\n  padding-top: calc(0.375rem + 1px);\n  padding-bottom: calc(0.375rem + 1px);\n  margin-bottom: 0;\n  line-height: 1.5; }\n\n.col-form-label-lg {\n  padding-top: calc(0.5rem + 1px);\n  padding-bottom: calc(0.5rem + 1px);\n  font-size: 1.25rem;\n  line-height: 1.5; }\n\n.col-form-label-sm {\n  padding-top: calc(0.25rem + 1px);\n  padding-bottom: calc(0.25rem + 1px);\n  font-size: 0.875rem;\n  line-height: 1.5; }\n\n.col-form-legend {\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  margin-bottom: 0;\n  font-size: 1rem; }\n\n.form-control-plaintext {\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  margin-bottom: 0;\n  line-height: 1.5;\n  background-color: transparent;\n  border: solid transparent;\n  border-width: 1px 0; }\n  .form-control-plaintext.form-control-sm, .input-group-sm > .form-control-plaintext.form-control,\n  .input-group-sm > .form-control-plaintext.input-group-addon,\n  .input-group-sm > .input-group-btn > .form-control-plaintext.btn, .form-control-plaintext.form-control-lg, .input-group-lg > .form-control-plaintext.form-control,\n  .input-group-lg > .form-control-plaintext.input-group-addon,\n  .input-group-lg > .input-group-btn > .form-control-plaintext.btn {\n    padding-right: 0;\n    padding-left: 0; }\n\n.form-control-sm, .input-group-sm > .form-control,\n.input-group-sm > .input-group-addon,\n.input-group-sm > .input-group-btn > .btn {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem; }\n\nselect.form-control-sm:not([size]):not([multiple]), .input-group-sm > select.form-control:not([size]):not([multiple]),\n.input-group-sm > select.input-group-addon:not([size]):not([multiple]),\n.input-group-sm > .input-group-btn > select.btn:not([size]):not([multiple]) {\n  height: calc(1.8125rem + 2px); }\n\n.form-control-lg, .input-group-lg > .form-control,\n.input-group-lg > .input-group-addon,\n.input-group-lg > .input-group-btn > .btn {\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n  border-radius: 0.3rem; }\n\nselect.form-control-lg:not([size]):not([multiple]), .input-group-lg > select.form-control:not([size]):not([multiple]),\n.input-group-lg > select.input-group-addon:not([size]):not([multiple]),\n.input-group-lg > .input-group-btn > select.btn:not([size]):not([multiple]) {\n  height: calc(2.875rem + 2px); }\n\n.form-group {\n  margin-bottom: 1rem; }\n\n.form-text {\n  display: block;\n  margin-top: 0.25rem; }\n\n.form-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin-right: -5px;\n  margin-left: -5px; }\n  .form-row > .col,\n  .form-row > [class*=\"col-\"] {\n    padding-right: 5px;\n    padding-left: 5px; }\n\n.form-check {\n  position: relative;\n  display: block;\n  margin-bottom: 0.5rem; }\n  .form-check.disabled .form-check-label {\n    color: #868e96; }\n\n.form-check-label {\n  padding-left: 1.25rem;\n  margin-bottom: 0; }\n\n.form-check-input {\n  position: absolute;\n  margin-top: 0.25rem;\n  margin-left: -1.25rem; }\n\n.form-check-inline {\n  display: inline-block;\n  margin-right: 0.75rem; }\n  .form-check-inline .form-check-label {\n    vertical-align: middle; }\n\n.valid-feedback {\n  display: none;\n  margin-top: .25rem;\n  font-size: .875rem;\n  color: #12ce7b; }\n\n.valid-tooltip {\n  position: absolute;\n  top: 100%;\n  z-index: 5;\n  display: none;\n  width: 250px;\n  padding: .5rem;\n  margin-top: .1rem;\n  font-size: .875rem;\n  line-height: 1;\n  color: #fff;\n  background-color: rgba(18, 206, 123, 0.8);\n  border-radius: .2rem; }\n\n.was-validated .form-control:valid, .form-control.is-valid, .was-validated\n.custom-select:valid,\n.custom-select.is-valid {\n  border-color: #12ce7b; }\n  .was-validated .form-control:valid:focus, .form-control.is-valid:focus, .was-validated\n  .custom-select:valid:focus,\n  .custom-select.is-valid:focus {\n    box-shadow: 0 0 0 0.2rem rgba(18, 206, 123, 0.25); }\n  .was-validated .form-control:valid ~ .valid-feedback,\n  .was-validated .form-control:valid ~ .valid-tooltip, .form-control.is-valid ~ .valid-feedback,\n  .form-control.is-valid ~ .valid-tooltip, .was-validated\n  .custom-select:valid ~ .valid-feedback,\n  .was-validated\n  .custom-select:valid ~ .valid-tooltip,\n  .custom-select.is-valid ~ .valid-feedback,\n  .custom-select.is-valid ~ .valid-tooltip {\n    display: block; }\n\n.was-validated .form-check-input:valid + .form-check-label, .form-check-input.is-valid + .form-check-label {\n  color: #12ce7b; }\n\n.was-validated .custom-control-input:valid ~ .custom-control-indicator, .custom-control-input.is-valid ~ .custom-control-indicator {\n  background-color: rgba(18, 206, 123, 0.25); }\n\n.was-validated .custom-control-input:valid ~ .custom-control-description, .custom-control-input.is-valid ~ .custom-control-description {\n  color: #12ce7b; }\n\n.was-validated .custom-file-input:valid ~ .custom-file-control, .custom-file-input.is-valid ~ .custom-file-control {\n  border-color: #12ce7b; }\n  .was-validated .custom-file-input:valid ~ .custom-file-control::before, .custom-file-input.is-valid ~ .custom-file-control::before {\n    border-color: inherit; }\n\n.was-validated .custom-file-input:valid:focus, .custom-file-input.is-valid:focus {\n  box-shadow: 0 0 0 0.2rem rgba(18, 206, 123, 0.25); }\n\n.invalid-feedback {\n  display: none;\n  margin-top: .25rem;\n  font-size: .875rem;\n  color: #dc3545; }\n\n.invalid-tooltip {\n  position: absolute;\n  top: 100%;\n  z-index: 5;\n  display: none;\n  width: 250px;\n  padding: .5rem;\n  margin-top: .1rem;\n  font-size: .875rem;\n  line-height: 1;\n  color: #fff;\n  background-color: rgba(220, 53, 69, 0.8);\n  border-radius: .2rem; }\n\n.was-validated .form-control:invalid, .form-control.is-invalid, .was-validated\n.custom-select:invalid,\n.custom-select.is-invalid {\n  border-color: #dc3545; }\n  .was-validated .form-control:invalid:focus, .form-control.is-invalid:focus, .was-validated\n  .custom-select:invalid:focus,\n  .custom-select.is-invalid:focus {\n    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25); }\n  .was-validated .form-control:invalid ~ .invalid-feedback,\n  .was-validated .form-control:invalid ~ .invalid-tooltip, .form-control.is-invalid ~ .invalid-feedback,\n  .form-control.is-invalid ~ .invalid-tooltip, .was-validated\n  .custom-select:invalid ~ .invalid-feedback,\n  .was-validated\n  .custom-select:invalid ~ .invalid-tooltip,\n  .custom-select.is-invalid ~ .invalid-feedback,\n  .custom-select.is-invalid ~ .invalid-tooltip {\n    display: block; }\n\n.was-validated .form-check-input:invalid + .form-check-label, .form-check-input.is-invalid + .form-check-label {\n  color: #dc3545; }\n\n.was-validated .custom-control-input:invalid ~ .custom-control-indicator, .custom-control-input.is-invalid ~ .custom-control-indicator {\n  background-color: rgba(220, 53, 69, 0.25); }\n\n.was-validated .custom-control-input:invalid ~ .custom-control-description, .custom-control-input.is-invalid ~ .custom-control-description {\n  color: #dc3545; }\n\n.was-validated .custom-file-input:invalid ~ .custom-file-control, .custom-file-input.is-invalid ~ .custom-file-control {\n  border-color: #dc3545; }\n  .was-validated .custom-file-input:invalid ~ .custom-file-control::before, .custom-file-input.is-invalid ~ .custom-file-control::before {\n    border-color: inherit; }\n\n.was-validated .custom-file-input:invalid:focus, .custom-file-input.is-invalid:focus {\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25); }\n\n.form-inline {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .form-inline .form-check {\n    width: 100%; }\n  @media (min-width: 576px) {\n    .form-inline label {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      margin-bottom: 0; }\n    .form-inline .form-group {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 auto;\n              flex: 0 0 auto;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-flow: row wrap;\n              flex-flow: row wrap;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      margin-bottom: 0; }\n    .form-inline .form-control {\n      display: inline-block;\n      width: auto;\n      vertical-align: middle; }\n    .form-inline .form-control-plaintext {\n      display: inline-block; }\n    .form-inline .input-group {\n      width: auto; }\n    .form-inline .form-check {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      width: auto;\n      margin-top: 0;\n      margin-bottom: 0; }\n    .form-inline .form-check-label {\n      padding-left: 0; }\n    .form-inline .form-check-input {\n      position: relative;\n      margin-top: 0;\n      margin-right: 0.25rem;\n      margin-left: 0; }\n    .form-inline .custom-control {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      padding-left: 0; }\n    .form-inline .custom-control-indicator {\n      position: static;\n      display: inline-block;\n      margin-right: 0.25rem;\n      vertical-align: text-bottom; }\n    .form-inline .has-feedback .form-control-feedback {\n      top: 0; } }\n\n.btn {\n  display: inline-block;\n  font-weight: 400;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  border: 1px solid transparent;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: 3px;\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }\n  .btn:focus, .btn:hover {\n    text-decoration: none; }\n  .btn:focus, .btn.focus {\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(35, 48, 252, 0.25); }\n  .btn.disabled, .btn:disabled {\n    opacity: .65; }\n  .btn:not([disabled]):not(.disabled):active, .btn:not([disabled]):not(.disabled).active {\n    background-image: none; }\n\na.btn.disabled,\nfieldset[disabled] a.btn {\n  pointer-events: none; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #2330fc;\n  border-color: #2330fc; }\n  .btn-primary:hover {\n    color: #fff;\n    background-color: #0312f5;\n    border-color: #0311e9; }\n  .btn-primary:focus, .btn-primary.focus {\n    box-shadow: 0 0 0 0.2rem rgba(35, 48, 252, 0.5); }\n  .btn-primary.disabled, .btn-primary:disabled {\n    background-color: #2330fc;\n    border-color: #2330fc; }\n  .btn-primary:not([disabled]):not(.disabled):active, .btn-primary:not([disabled]):not(.disabled).active,\n  .show > .btn-primary.dropdown-toggle {\n    color: #fff;\n    background-color: #0311e9;\n    border-color: #0310dc;\n    box-shadow: 0 0 0 0.2rem rgba(35, 48, 252, 0.5); }\n\n.btn-secondary {\n  color: #fff;\n  background-color: #868e96;\n  border-color: #868e96; }\n  .btn-secondary:hover {\n    color: #fff;\n    background-color: #727b84;\n    border-color: #6c757d; }\n  .btn-secondary:focus, .btn-secondary.focus {\n    box-shadow: 0 0 0 0.2rem rgba(134, 142, 150, 0.5); }\n  .btn-secondary.disabled, .btn-secondary:disabled {\n    background-color: #868e96;\n    border-color: #868e96; }\n  .btn-secondary:not([disabled]):not(.disabled):active, .btn-secondary:not([disabled]):not(.disabled).active,\n  .show > .btn-secondary.dropdown-toggle {\n    color: #fff;\n    background-color: #6c757d;\n    border-color: #666e76;\n    box-shadow: 0 0 0 0.2rem rgba(134, 142, 150, 0.5); }\n\n.btn-success {\n  color: #fff;\n  background-color: #12ce7b;\n  border-color: #12ce7b; }\n  .btn-success:hover {\n    color: #fff;\n    background-color: #0fab66;\n    border-color: #0e9f5f; }\n  .btn-success:focus, .btn-success.focus {\n    box-shadow: 0 0 0 0.2rem rgba(18, 206, 123, 0.5); }\n  .btn-success.disabled, .btn-success:disabled {\n    background-color: #12ce7b;\n    border-color: #12ce7b; }\n  .btn-success:not([disabled]):not(.disabled):active, .btn-success:not([disabled]):not(.disabled).active,\n  .show > .btn-success.dropdown-toggle {\n    color: #fff;\n    background-color: #0e9f5f;\n    border-color: #0d9358;\n    box-shadow: 0 0 0 0.2rem rgba(18, 206, 123, 0.5); }\n\n.btn-info {\n  color: #fff;\n  background-color: #008fad;\n  border-color: #008fad; }\n  .btn-info:hover {\n    color: #fff;\n    background-color: #006f87;\n    border-color: #00657a; }\n  .btn-info:focus, .btn-info.focus {\n    box-shadow: 0 0 0 0.2rem rgba(0, 143, 173, 0.5); }\n  .btn-info.disabled, .btn-info:disabled {\n    background-color: #008fad;\n    border-color: #008fad; }\n  .btn-info:not([disabled]):not(.disabled):active, .btn-info:not([disabled]):not(.disabled).active,\n  .show > .btn-info.dropdown-toggle {\n    color: #fff;\n    background-color: #00657a;\n    border-color: #005a6d;\n    box-shadow: 0 0 0 0.2rem rgba(0, 143, 173, 0.5); }\n\n.btn-warning {\n  color: #111;\n  background-color: #ffbc00;\n  border-color: #ffbc00; }\n  .btn-warning:hover {\n    color: #111;\n    background-color: #d9a000;\n    border-color: #cc9600; }\n  .btn-warning:focus, .btn-warning.focus {\n    box-shadow: 0 0 0 0.2rem rgba(255, 188, 0, 0.5); }\n  .btn-warning.disabled, .btn-warning:disabled {\n    background-color: #ffbc00;\n    border-color: #ffbc00; }\n  .btn-warning:not([disabled]):not(.disabled):active, .btn-warning:not([disabled]):not(.disabled).active,\n  .show > .btn-warning.dropdown-toggle {\n    color: #fff;\n    background-color: #cc9600;\n    border-color: #bf8d00;\n    box-shadow: 0 0 0 0.2rem rgba(255, 188, 0, 0.5); }\n\n.btn-danger {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545; }\n  .btn-danger:hover {\n    color: #fff;\n    background-color: #c82333;\n    border-color: #bd2130; }\n  .btn-danger:focus, .btn-danger.focus {\n    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5); }\n  .btn-danger.disabled, .btn-danger:disabled {\n    background-color: #dc3545;\n    border-color: #dc3545; }\n  .btn-danger:not([disabled]):not(.disabled):active, .btn-danger:not([disabled]):not(.disabled).active,\n  .show > .btn-danger.dropdown-toggle {\n    color: #fff;\n    background-color: #bd2130;\n    border-color: #b21f2d;\n    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5); }\n\n.btn-light {\n  color: #111;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa; }\n  .btn-light:hover {\n    color: #111;\n    background-color: #e2e6ea;\n    border-color: #dae0e5; }\n  .btn-light:focus, .btn-light.focus {\n    box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5); }\n  .btn-light.disabled, .btn-light:disabled {\n    background-color: #f8f9fa;\n    border-color: #f8f9fa; }\n  .btn-light:not([disabled]):not(.disabled):active, .btn-light:not([disabled]):not(.disabled).active,\n  .show > .btn-light.dropdown-toggle {\n    color: #111;\n    background-color: #dae0e5;\n    border-color: #d3d9df;\n    box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5); }\n\n.btn-dark {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #343a40; }\n  .btn-dark:hover {\n    color: #fff;\n    background-color: #23272b;\n    border-color: #1d2124; }\n  .btn-dark:focus, .btn-dark.focus {\n    box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5); }\n  .btn-dark.disabled, .btn-dark:disabled {\n    background-color: #343a40;\n    border-color: #343a40; }\n  .btn-dark:not([disabled]):not(.disabled):active, .btn-dark:not([disabled]):not(.disabled).active,\n  .show > .btn-dark.dropdown-toggle {\n    color: #fff;\n    background-color: #1d2124;\n    border-color: #171a1d;\n    box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5); }\n\n.btn-outline-primary {\n  color: #2330fc;\n  background-color: transparent;\n  background-image: none;\n  border-color: #2330fc; }\n  .btn-outline-primary:hover {\n    color: #fff;\n    background-color: #2330fc;\n    border-color: #2330fc; }\n  .btn-outline-primary:focus, .btn-outline-primary.focus {\n    box-shadow: 0 0 0 0.2rem rgba(35, 48, 252, 0.5); }\n  .btn-outline-primary.disabled, .btn-outline-primary:disabled {\n    color: #2330fc;\n    background-color: transparent; }\n  .btn-outline-primary:not([disabled]):not(.disabled):active, .btn-outline-primary:not([disabled]):not(.disabled).active,\n  .show > .btn-outline-primary.dropdown-toggle {\n    color: #fff;\n    background-color: #2330fc;\n    border-color: #2330fc;\n    box-shadow: 0 0 0 0.2rem rgba(35, 48, 252, 0.5); }\n\n.btn-outline-secondary {\n  color: #868e96;\n  background-color: transparent;\n  background-image: none;\n  border-color: #868e96; }\n  .btn-outline-secondary:hover {\n    color: #fff;\n    background-color: #868e96;\n    border-color: #868e96; }\n  .btn-outline-secondary:focus, .btn-outline-secondary.focus {\n    box-shadow: 0 0 0 0.2rem rgba(134, 142, 150, 0.5); }\n  .btn-outline-secondary.disabled, .btn-outline-secondary:disabled {\n    color: #868e96;\n    background-color: transparent; }\n  .btn-outline-secondary:not([disabled]):not(.disabled):active, .btn-outline-secondary:not([disabled]):not(.disabled).active,\n  .show > .btn-outline-secondary.dropdown-toggle {\n    color: #fff;\n    background-color: #868e96;\n    border-color: #868e96;\n    box-shadow: 0 0 0 0.2rem rgba(134, 142, 150, 0.5); }\n\n.btn-outline-success {\n  color: #12ce7b;\n  background-color: transparent;\n  background-image: none;\n  border-color: #12ce7b; }\n  .btn-outline-success:hover {\n    color: #fff;\n    background-color: #12ce7b;\n    border-color: #12ce7b; }\n  .btn-outline-success:focus, .btn-outline-success.focus {\n    box-shadow: 0 0 0 0.2rem rgba(18, 206, 123, 0.5); }\n  .btn-outline-success.disabled, .btn-outline-success:disabled {\n    color: #12ce7b;\n    background-color: transparent; }\n  .btn-outline-success:not([disabled]):not(.disabled):active, .btn-outline-success:not([disabled]):not(.disabled).active,\n  .show > .btn-outline-success.dropdown-toggle {\n    color: #fff;\n    background-color: #12ce7b;\n    border-color: #12ce7b;\n    box-shadow: 0 0 0 0.2rem rgba(18, 206, 123, 0.5); }\n\n.btn-outline-info {\n  color: #008fad;\n  background-color: transparent;\n  background-image: none;\n  border-color: #008fad; }\n  .btn-outline-info:hover {\n    color: #fff;\n    background-color: #008fad;\n    border-color: #008fad; }\n  .btn-outline-info:focus, .btn-outline-info.focus {\n    box-shadow: 0 0 0 0.2rem rgba(0, 143, 173, 0.5); }\n  .btn-outline-info.disabled, .btn-outline-info:disabled {\n    color: #008fad;\n    background-color: transparent; }\n  .btn-outline-info:not([disabled]):not(.disabled):active, .btn-outline-info:not([disabled]):not(.disabled).active,\n  .show > .btn-outline-info.dropdown-toggle {\n    color: #fff;\n    background-color: #008fad;\n    border-color: #008fad;\n    box-shadow: 0 0 0 0.2rem rgba(0, 143, 173, 0.5); }\n\n.btn-outline-warning {\n  color: #ffbc00;\n  background-color: transparent;\n  background-image: none;\n  border-color: #ffbc00; }\n  .btn-outline-warning:hover {\n    color: #fff;\n    background-color: #ffbc00;\n    border-color: #ffbc00; }\n  .btn-outline-warning:focus, .btn-outline-warning.focus {\n    box-shadow: 0 0 0 0.2rem rgba(255, 188, 0, 0.5); }\n  .btn-outline-warning.disabled, .btn-outline-warning:disabled {\n    color: #ffbc00;\n    background-color: transparent; }\n  .btn-outline-warning:not([disabled]):not(.disabled):active, .btn-outline-warning:not([disabled]):not(.disabled).active,\n  .show > .btn-outline-warning.dropdown-toggle {\n    color: #fff;\n    background-color: #ffbc00;\n    border-color: #ffbc00;\n    box-shadow: 0 0 0 0.2rem rgba(255, 188, 0, 0.5); }\n\n.btn-outline-danger {\n  color: #dc3545;\n  background-color: transparent;\n  background-image: none;\n  border-color: #dc3545; }\n  .btn-outline-danger:hover {\n    color: #fff;\n    background-color: #dc3545;\n    border-color: #dc3545; }\n  .btn-outline-danger:focus, .btn-outline-danger.focus {\n    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5); }\n  .btn-outline-danger.disabled, .btn-outline-danger:disabled {\n    color: #dc3545;\n    background-color: transparent; }\n  .btn-outline-danger:not([disabled]):not(.disabled):active, .btn-outline-danger:not([disabled]):not(.disabled).active,\n  .show > .btn-outline-danger.dropdown-toggle {\n    color: #fff;\n    background-color: #dc3545;\n    border-color: #dc3545;\n    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5); }\n\n.btn-outline-light {\n  color: #f8f9fa;\n  background-color: transparent;\n  background-image: none;\n  border-color: #f8f9fa; }\n  .btn-outline-light:hover {\n    color: #212529;\n    background-color: #f8f9fa;\n    border-color: #f8f9fa; }\n  .btn-outline-light:focus, .btn-outline-light.focus {\n    box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5); }\n  .btn-outline-light.disabled, .btn-outline-light:disabled {\n    color: #f8f9fa;\n    background-color: transparent; }\n  .btn-outline-light:not([disabled]):not(.disabled):active, .btn-outline-light:not([disabled]):not(.disabled).active,\n  .show > .btn-outline-light.dropdown-toggle {\n    color: #212529;\n    background-color: #f8f9fa;\n    border-color: #f8f9fa;\n    box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5); }\n\n.btn-outline-dark {\n  color: #343a40;\n  background-color: transparent;\n  background-image: none;\n  border-color: #343a40; }\n  .btn-outline-dark:hover {\n    color: #fff;\n    background-color: #343a40;\n    border-color: #343a40; }\n  .btn-outline-dark:focus, .btn-outline-dark.focus {\n    box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5); }\n  .btn-outline-dark.disabled, .btn-outline-dark:disabled {\n    color: #343a40;\n    background-color: transparent; }\n  .btn-outline-dark:not([disabled]):not(.disabled):active, .btn-outline-dark:not([disabled]):not(.disabled).active,\n  .show > .btn-outline-dark.dropdown-toggle {\n    color: #fff;\n    background-color: #343a40;\n    border-color: #343a40;\n    box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5); }\n\n.btn-link {\n  font-weight: 400;\n  color: #2330fc;\n  background-color: transparent; }\n  .btn-link:hover {\n    color: #030fd0;\n    text-decoration: underline;\n    background-color: transparent;\n    border-color: transparent; }\n  .btn-link:focus, .btn-link.focus {\n    border-color: transparent;\n    box-shadow: none; }\n  .btn-link:disabled, .btn-link.disabled {\n    color: #868e96; }\n\n.btn-lg, .btn-group-lg > .btn {\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n  border-radius: 0.3rem; }\n\n.btn-sm, .btn-group-sm > .btn {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem; }\n\n.btn-block {\n  display: block;\n  width: 100%; }\n\n.btn-block + .btn-block {\n  margin-top: 0.5rem; }\n\ninput[type=\"submit\"].btn-block,\ninput[type=\"reset\"].btn-block,\ninput[type=\"button\"].btn-block {\n  width: 100%; }\n\n.fade {\n  opacity: 0;\n  transition: opacity 0.15s linear; }\n  .fade.show {\n    opacity: 1; }\n\n.collapse {\n  display: none; }\n  .collapse.show {\n    display: block; }\n\ntr.collapse.show {\n  display: table-row; }\n\ntbody.collapse.show {\n  display: table-row-group; }\n\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  transition: height 0.35s ease; }\n\n.dropup,\n.dropdown {\n  position: relative; }\n\n.dropdown-toggle::after {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid;\n  border-right: 0.3em solid transparent;\n  border-bottom: 0;\n  border-left: 0.3em solid transparent; }\n\n.dropdown-toggle:empty::after {\n  margin-left: 0; }\n\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 10rem;\n  padding: 0.5rem 0;\n  margin: 0.125rem 0 0;\n  font-size: 1rem;\n  color: #212529;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 3px; }\n\n.dropup .dropdown-menu {\n  margin-top: 0;\n  margin-bottom: 0.125rem; }\n\n.dropup .dropdown-toggle::after {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0;\n  border-right: 0.3em solid transparent;\n  border-bottom: 0.3em solid;\n  border-left: 0.3em solid transparent; }\n\n.dropup .dropdown-toggle:empty::after {\n  margin-left: 0; }\n\n.dropdown-divider {\n  height: 0;\n  margin: 0.5rem 0;\n  overflow: hidden;\n  border-top: 1px solid #e9ecef; }\n\n.dropdown-item {\n  display: block;\n  width: 100%;\n  padding: 0.25rem 1.5rem;\n  clear: both;\n  font-weight: 400;\n  color: #212529;\n  text-align: inherit;\n  white-space: nowrap;\n  background: none;\n  border: 0; }\n  .dropdown-item:focus, .dropdown-item:hover {\n    color: #16181b;\n    text-decoration: none;\n    background-color: #f8f9fa; }\n  .dropdown-item.active, .dropdown-item:active {\n    color: #fff;\n    text-decoration: none;\n    background-color: #2330fc; }\n  .dropdown-item.disabled, .dropdown-item:disabled {\n    color: #868e96;\n    background-color: transparent; }\n\n.dropdown-menu.show {\n  display: block; }\n\n.dropdown-header {\n  display: block;\n  padding: 0.5rem 1.5rem;\n  margin-bottom: 0;\n  font-size: 0.875rem;\n  color: #868e96;\n  white-space: nowrap; }\n\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  vertical-align: middle; }\n  .btn-group > .btn,\n  .btn-group-vertical > .btn {\n    position: relative;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 1 auto;\n            flex: 0 1 auto; }\n    .btn-group > .btn:hover,\n    .btn-group-vertical > .btn:hover {\n      z-index: 2; }\n    .btn-group > .btn:focus, .btn-group > .btn:active, .btn-group > .btn.active,\n    .btn-group-vertical > .btn:focus,\n    .btn-group-vertical > .btn:active,\n    .btn-group-vertical > .btn.active {\n      z-index: 2; }\n  .btn-group .btn + .btn,\n  .btn-group .btn + .btn-group,\n  .btn-group .btn-group + .btn,\n  .btn-group .btn-group + .btn-group,\n  .btn-group-vertical .btn + .btn,\n  .btn-group-vertical .btn + .btn-group,\n  .btn-group-vertical .btn-group + .btn,\n  .btn-group-vertical .btn-group + .btn-group {\n    margin-left: -1px; }\n\n.btn-toolbar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start; }\n  .btn-toolbar .input-group {\n    width: auto; }\n\n.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {\n  border-radius: 0; }\n\n.btn-group > .btn:first-child {\n  margin-left: 0; }\n  .btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0; }\n\n.btn-group > .btn:last-child:not(:first-child),\n.btn-group > .dropdown-toggle:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.btn-group > .btn-group {\n  float: left; }\n\n.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0; }\n\n.btn-group > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0; }\n\n.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.btn + .dropdown-toggle-split {\n  padding-right: 0.5625rem;\n  padding-left: 0.5625rem; }\n  .btn + .dropdown-toggle-split::after {\n    margin-left: 0; }\n\n.btn-sm + .dropdown-toggle-split, .btn-group-sm > .btn + .dropdown-toggle-split {\n  padding-right: 0.375rem;\n  padding-left: 0.375rem; }\n\n.btn-lg + .dropdown-toggle-split, .btn-group-lg > .btn + .dropdown-toggle-split {\n  padding-right: 0.75rem;\n  padding-left: 0.75rem; }\n\n.btn-group-vertical {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  .btn-group-vertical .btn,\n  .btn-group-vertical .btn-group {\n    width: 100%; }\n  .btn-group-vertical > .btn + .btn,\n  .btn-group-vertical > .btn + .btn-group,\n  .btn-group-vertical > .btn-group + .btn,\n  .btn-group-vertical > .btn-group + .btn-group {\n    margin-top: -1px;\n    margin-left: 0; }\n  .btn-group-vertical > .btn:not(:first-child):not(:last-child) {\n    border-radius: 0; }\n  .btn-group-vertical > .btn:first-child:not(:last-child) {\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0; }\n  .btn-group-vertical > .btn:last-child:not(:first-child) {\n    border-top-left-radius: 0;\n    border-top-right-radius: 0; }\n  .btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {\n    border-radius: 0; }\n  .btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child,\n  .btn-group-vertical > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0; }\n  .btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {\n    border-top-left-radius: 0;\n    border-top-right-radius: 0; }\n\n[data-toggle=\"buttons\"] > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn input[type=\"checkbox\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"checkbox\"] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none; }\n\n.input-group {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  width: 100%; }\n  .input-group .form-control {\n    position: relative;\n    z-index: 2;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n    width: 1%;\n    margin-bottom: 0; }\n    .input-group .form-control:focus, .input-group .form-control:active, .input-group .form-control:hover {\n      z-index: 3; }\n\n.input-group-addon,\n.input-group-btn,\n.input-group .form-control {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .input-group-addon:not(:first-child):not(:last-child),\n  .input-group-btn:not(:first-child):not(:last-child),\n  .input-group .form-control:not(:first-child):not(:last-child) {\n    border-radius: 0; }\n\n.input-group-addon,\n.input-group-btn {\n  white-space: nowrap; }\n\n.input-group-addon {\n  padding: 0.375rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  text-align: center;\n  background-color: #e9ecef;\n  border: 1px solid #ced4da;\n  border-radius: 3px; }\n  .input-group-addon.form-control-sm,\n  .input-group-sm > .input-group-addon,\n  .input-group-sm > .input-group-btn > .input-group-addon.btn {\n    padding: 0.25rem 0.5rem;\n    font-size: 0.875rem;\n    border-radius: 0.2rem; }\n  .input-group-addon.form-control-lg,\n  .input-group-lg > .input-group-addon,\n  .input-group-lg > .input-group-btn > .input-group-addon.btn {\n    padding: 0.5rem 1rem;\n    font-size: 1.25rem;\n    border-radius: 0.3rem; }\n  .input-group-addon input[type=\"radio\"],\n  .input-group-addon input[type=\"checkbox\"] {\n    margin-top: 0; }\n\n.input-group .form-control:not(:last-child),\n.input-group-addon:not(:last-child),\n.input-group-btn:not(:last-child) > .btn,\n.input-group-btn:not(:last-child) > .btn-group > .btn,\n.input-group-btn:not(:last-child) > .dropdown-toggle,\n.input-group-btn:not(:first-child) > .btn:not(:last-child):not(.dropdown-toggle),\n.input-group-btn:not(:first-child) > .btn-group:not(:last-child) > .btn {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0; }\n\n.input-group-addon:not(:last-child) {\n  border-right: 0; }\n\n.input-group .form-control:not(:first-child),\n.input-group-addon:not(:first-child),\n.input-group-btn:not(:first-child) > .btn,\n.input-group-btn:not(:first-child) > .btn-group > .btn,\n.input-group-btn:not(:first-child) > .dropdown-toggle,\n.input-group-btn:not(:last-child) > .btn:not(:first-child),\n.input-group-btn:not(:last-child) > .btn-group:not(:first-child) > .btn {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.form-control + .input-group-addon:not(:first-child) {\n  border-left: 0; }\n\n.input-group-btn {\n  position: relative;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  font-size: 0;\n  white-space: nowrap; }\n  .input-group-btn > .btn {\n    position: relative; }\n    .input-group-btn > .btn + .btn {\n      margin-left: -1px; }\n    .input-group-btn > .btn:focus, .input-group-btn > .btn:active, .input-group-btn > .btn:hover {\n      z-index: 3; }\n  .input-group-btn:first-child > .btn + .btn {\n    margin-left: 0; }\n  .input-group-btn:not(:last-child) > .btn,\n  .input-group-btn:not(:last-child) > .btn-group {\n    margin-right: -1px; }\n  .input-group-btn:not(:first-child) > .btn,\n  .input-group-btn:not(:first-child) > .btn-group {\n    z-index: 2;\n    margin-left: 0; }\n    .input-group-btn:not(:first-child) > .btn:first-child,\n    .input-group-btn:not(:first-child) > .btn-group:first-child {\n      margin-left: -1px; }\n    .input-group-btn:not(:first-child) > .btn:focus, .input-group-btn:not(:first-child) > .btn:active, .input-group-btn:not(:first-child) > .btn:hover,\n    .input-group-btn:not(:first-child) > .btn-group:focus,\n    .input-group-btn:not(:first-child) > .btn-group:active,\n    .input-group-btn:not(:first-child) > .btn-group:hover {\n      z-index: 3; }\n\n.custom-control {\n  position: relative;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  min-height: 1.5rem;\n  padding-left: 1.5rem;\n  margin-right: 1rem; }\n\n.custom-control-input {\n  position: absolute;\n  z-index: -1;\n  opacity: 0; }\n  .custom-control-input:checked ~ .custom-control-indicator {\n    color: #fff;\n    background-color: #2330fc; }\n  .custom-control-input:focus ~ .custom-control-indicator {\n    box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(35, 48, 252, 0.25); }\n  .custom-control-input:active ~ .custom-control-indicator {\n    color: #fff;\n    background-color: #d3d6fe; }\n  .custom-control-input:disabled ~ .custom-control-indicator {\n    background-color: #e9ecef; }\n  .custom-control-input:disabled ~ .custom-control-description {\n    color: #868e96; }\n\n.custom-control-indicator {\n  position: absolute;\n  top: 0.25rem;\n  left: 0;\n  display: block;\n  width: 1rem;\n  height: 1rem;\n  pointer-events: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background-color: #ddd;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: 50% 50%; }\n\n.custom-checkbox .custom-control-indicator {\n  border-radius: 3px; }\n\n.custom-checkbox .custom-control-input:checked ~ .custom-control-indicator {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E\"); }\n\n.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-indicator {\n  background-color: #2330fc;\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3E%3Cpath stroke='%23fff' d='M0 2h4'/%3E%3C/svg%3E\"); }\n\n.custom-radio .custom-control-indicator {\n  border-radius: 50%; }\n\n.custom-radio .custom-control-input:checked ~ .custom-control-indicator {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E\"); }\n\n.custom-controls-stacked {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  .custom-controls-stacked .custom-control {\n    margin-bottom: 0.25rem; }\n    .custom-controls-stacked .custom-control + .custom-control {\n      margin-left: 0; }\n\n.custom-select {\n  display: inline-block;\n  max-width: 100%;\n  height: 25px;\n  padding: 0.375rem 1.75rem 0.375rem 0.75rem;\n  line-height: 1.5;\n  color: #495057;\n  vertical-align: middle;\n  background: #fff url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23333' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\") no-repeat right 0.75rem center;\n  background-size: 8px 10px;\n  border: 1px solid #ced4da;\n  border-radius: 3px;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none; }\n  .custom-select:focus {\n    border-color: #a1a6fe;\n    outline: none; }\n    .custom-select:focus::-ms-value {\n      color: #495057;\n      background-color: #fff; }\n  .custom-select[multiple] {\n    height: auto;\n    background-image: none; }\n  .custom-select:disabled {\n    color: #868e96;\n    background-color: #e9ecef; }\n  .custom-select::-ms-expand {\n    opacity: 0; }\n\n.custom-select-sm {\n  height: calc(1.8125rem + 2px);\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  font-size: 75%; }\n\n.custom-file {\n  position: relative;\n  display: inline-block;\n  max-width: 100%;\n  height: 25px;\n  margin-bottom: 0; }\n\n.custom-file-input {\n  min-width: 14rem;\n  max-width: 100%;\n  height: 25px;\n  margin: 0;\n  opacity: 0; }\n  .custom-file-input:focus ~ .custom-file-control {\n    box-shadow: 0 0 0 0.075rem #fff, 0 0 0 0.2rem #2330fc; }\n\n.custom-file-control {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 5;\n  height: 25px;\n  padding: 0.375rem 0.75rem;\n  line-height: 1.5;\n  color: #495057;\n  pointer-events: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background-color: #fff;\n  border: 1px solid #ced4da;\n  border-radius: 3px; }\n  .custom-file-control:lang(en):empty::after {\n    content: \"Choose file...\"; }\n  .custom-file-control::before {\n    position: absolute;\n    top: -1px;\n    right: -1px;\n    bottom: -1px;\n    z-index: 6;\n    display: block;\n    height: 25px;\n    padding: 0.375rem 0.75rem;\n    line-height: 1.5;\n    color: #495057;\n    background-color: #e9ecef;\n    border: 1px solid #ced4da;\n    border-radius: 0 3px 3px 0; }\n  .custom-file-control:lang(en)::before {\n    content: \"Browse\"; }\n\n.nav {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none; }\n\n.nav-link {\n  display: block;\n  padding: 0.5rem 1rem; }\n  .nav-link:focus, .nav-link:hover {\n    text-decoration: none; }\n  .nav-link.disabled {\n    color: #868e96; }\n\n.nav-tabs {\n  border-bottom: 1px solid #ddd; }\n  .nav-tabs .nav-item {\n    margin-bottom: -1px; }\n  .nav-tabs .nav-link {\n    border: 1px solid transparent;\n    border-top-left-radius: 3px;\n    border-top-right-radius: 3px; }\n    .nav-tabs .nav-link:focus, .nav-tabs .nav-link:hover {\n      border-color: #e9ecef #e9ecef #ddd; }\n    .nav-tabs .nav-link.disabled {\n      color: #868e96;\n      background-color: transparent;\n      border-color: transparent; }\n  .nav-tabs .nav-link.active,\n  .nav-tabs .nav-item.show .nav-link {\n    color: #495057;\n    background-color: #fff;\n    border-color: #ddd #ddd #fff; }\n  .nav-tabs .dropdown-menu {\n    margin-top: -1px;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0; }\n\n.nav-pills .nav-link {\n  border-radius: 3px; }\n\n.nav-pills .nav-link.active,\n.nav-pills .show > .nav-link {\n  color: #fff;\n  background-color: #2330fc; }\n\n.nav-fill .nav-item {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  text-align: center; }\n\n.nav-justified .nav-item {\n  -ms-flex-preferred-size: 0;\n      flex-basis: 0;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  text-align: center; }\n\n.tab-content > .tab-pane {\n  display: none; }\n\n.tab-content > .active {\n  display: block; }\n\n.navbar {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 0.5rem 1rem; }\n  .navbar > .container,\n  .navbar > .container-fluid {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n\n.navbar-brand {\n  display: inline-block;\n  padding-top: 0.3125rem;\n  padding-bottom: 0.3125rem;\n  margin-right: 1rem;\n  font-size: 1.25rem;\n  line-height: inherit;\n  white-space: nowrap; }\n  .navbar-brand:focus, .navbar-brand:hover {\n    text-decoration: none; }\n\n.navbar-nav {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none; }\n  .navbar-nav .nav-link {\n    padding-right: 0;\n    padding-left: 0; }\n  .navbar-nav .dropdown-menu {\n    position: static;\n    float: none; }\n\n.navbar-text {\n  display: inline-block;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem; }\n\n.navbar-collapse {\n  -ms-flex-preferred-size: 100%;\n      flex-basis: 100%;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.navbar-toggler {\n  padding: 0.25rem 0.75rem;\n  font-size: 1.25rem;\n  line-height: 1;\n  background: transparent;\n  border: 1px solid transparent;\n  border-radius: 3px; }\n  .navbar-toggler:focus, .navbar-toggler:hover {\n    text-decoration: none; }\n\n.navbar-toggler-icon {\n  display: inline-block;\n  width: 1.5em;\n  height: 1.5em;\n  vertical-align: middle;\n  content: \"\";\n  background: no-repeat center center;\n  background-size: 100% 100%; }\n\n@media (max-width: 575px) {\n  .navbar-expand-sm > .container,\n  .navbar-expand-sm > .container-fluid {\n    padding-right: 0;\n    padding-left: 0; } }\n\n@media (min-width: 576px) {\n  .navbar-expand-sm {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row nowrap;\n            flex-flow: row nowrap;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start; }\n    .navbar-expand-sm .navbar-nav {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row; }\n      .navbar-expand-sm .navbar-nav .dropdown-menu {\n        position: absolute; }\n      .navbar-expand-sm .navbar-nav .dropdown-menu-right {\n        right: 0;\n        left: auto; }\n      .navbar-expand-sm .navbar-nav .nav-link {\n        padding-right: .5rem;\n        padding-left: .5rem; }\n    .navbar-expand-sm > .container,\n    .navbar-expand-sm > .container-fluid {\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap; }\n    .navbar-expand-sm .navbar-collapse {\n      display: -webkit-box !important;\n      display: -ms-flexbox !important;\n      display: flex !important;\n      -ms-flex-preferred-size: auto;\n          flex-basis: auto; }\n    .navbar-expand-sm .navbar-toggler {\n      display: none; }\n    .navbar-expand-sm .dropup .dropdown-menu {\n      top: auto;\n      bottom: 100%; } }\n\n@media (max-width: 767px) {\n  .navbar-expand-md > .container,\n  .navbar-expand-md > .container-fluid {\n    padding-right: 0;\n    padding-left: 0; } }\n\n@media (min-width: 768px) {\n  .navbar-expand-md {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row nowrap;\n            flex-flow: row nowrap;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start; }\n    .navbar-expand-md .navbar-nav {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row; }\n      .navbar-expand-md .navbar-nav .dropdown-menu {\n        position: absolute; }\n      .navbar-expand-md .navbar-nav .dropdown-menu-right {\n        right: 0;\n        left: auto; }\n      .navbar-expand-md .navbar-nav .nav-link {\n        padding-right: .5rem;\n        padding-left: .5rem; }\n    .navbar-expand-md > .container,\n    .navbar-expand-md > .container-fluid {\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap; }\n    .navbar-expand-md .navbar-collapse {\n      display: -webkit-box !important;\n      display: -ms-flexbox !important;\n      display: flex !important;\n      -ms-flex-preferred-size: auto;\n          flex-basis: auto; }\n    .navbar-expand-md .navbar-toggler {\n      display: none; }\n    .navbar-expand-md .dropup .dropdown-menu {\n      top: auto;\n      bottom: 100%; } }\n\n@media (max-width: 991px) {\n  .navbar-expand-lg > .container,\n  .navbar-expand-lg > .container-fluid {\n    padding-right: 0;\n    padding-left: 0; } }\n\n@media (min-width: 992px) {\n  .navbar-expand-lg {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row nowrap;\n            flex-flow: row nowrap;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start; }\n    .navbar-expand-lg .navbar-nav {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row; }\n      .navbar-expand-lg .navbar-nav .dropdown-menu {\n        position: absolute; }\n      .navbar-expand-lg .navbar-nav .dropdown-menu-right {\n        right: 0;\n        left: auto; }\n      .navbar-expand-lg .navbar-nav .nav-link {\n        padding-right: .5rem;\n        padding-left: .5rem; }\n    .navbar-expand-lg > .container,\n    .navbar-expand-lg > .container-fluid {\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap; }\n    .navbar-expand-lg .navbar-collapse {\n      display: -webkit-box !important;\n      display: -ms-flexbox !important;\n      display: flex !important;\n      -ms-flex-preferred-size: auto;\n          flex-basis: auto; }\n    .navbar-expand-lg .navbar-toggler {\n      display: none; }\n    .navbar-expand-lg .dropup .dropdown-menu {\n      top: auto;\n      bottom: 100%; } }\n\n@media (max-width: 1199px) {\n  .navbar-expand-xl > .container,\n  .navbar-expand-xl > .container-fluid {\n    padding-right: 0;\n    padding-left: 0; } }\n\n@media (min-width: 1200px) {\n  .navbar-expand-xl {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row nowrap;\n            flex-flow: row nowrap;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start; }\n    .navbar-expand-xl .navbar-nav {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row; }\n      .navbar-expand-xl .navbar-nav .dropdown-menu {\n        position: absolute; }\n      .navbar-expand-xl .navbar-nav .dropdown-menu-right {\n        right: 0;\n        left: auto; }\n      .navbar-expand-xl .navbar-nav .nav-link {\n        padding-right: .5rem;\n        padding-left: .5rem; }\n    .navbar-expand-xl > .container,\n    .navbar-expand-xl > .container-fluid {\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap; }\n    .navbar-expand-xl .navbar-collapse {\n      display: -webkit-box !important;\n      display: -ms-flexbox !important;\n      display: flex !important;\n      -ms-flex-preferred-size: auto;\n          flex-basis: auto; }\n    .navbar-expand-xl .navbar-toggler {\n      display: none; }\n    .navbar-expand-xl .dropup .dropdown-menu {\n      top: auto;\n      bottom: 100%; } }\n\n.navbar-expand {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row nowrap;\n          flex-flow: row nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start; }\n  .navbar-expand > .container,\n  .navbar-expand > .container-fluid {\n    padding-right: 0;\n    padding-left: 0; }\n  .navbar-expand .navbar-nav {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n    .navbar-expand .navbar-nav .dropdown-menu {\n      position: absolute; }\n    .navbar-expand .navbar-nav .dropdown-menu-right {\n      right: 0;\n      left: auto; }\n    .navbar-expand .navbar-nav .nav-link {\n      padding-right: .5rem;\n      padding-left: .5rem; }\n  .navbar-expand > .container,\n  .navbar-expand > .container-fluid {\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap; }\n  .navbar-expand .navbar-collapse {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n    -ms-flex-preferred-size: auto;\n        flex-basis: auto; }\n  .navbar-expand .navbar-toggler {\n    display: none; }\n  .navbar-expand .dropup .dropdown-menu {\n    top: auto;\n    bottom: 100%; }\n\n.navbar-light .navbar-brand {\n  color: rgba(0, 0, 0, 0.9); }\n  .navbar-light .navbar-brand:focus, .navbar-light .navbar-brand:hover {\n    color: rgba(0, 0, 0, 0.9); }\n\n.navbar-light .navbar-nav .nav-link {\n  color: rgba(0, 0, 0, 0.5); }\n  .navbar-light .navbar-nav .nav-link:focus, .navbar-light .navbar-nav .nav-link:hover {\n    color: rgba(0, 0, 0, 0.7); }\n  .navbar-light .navbar-nav .nav-link.disabled {\n    color: rgba(0, 0, 0, 0.3); }\n\n.navbar-light .navbar-nav .show > .nav-link,\n.navbar-light .navbar-nav .active > .nav-link,\n.navbar-light .navbar-nav .nav-link.show,\n.navbar-light .navbar-nav .nav-link.active {\n  color: rgba(0, 0, 0, 0.9); }\n\n.navbar-light .navbar-toggler {\n  color: rgba(0, 0, 0, 0.5);\n  border-color: rgba(0, 0, 0, 0.1); }\n\n.navbar-light .navbar-toggler-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\"); }\n\n.navbar-light .navbar-text {\n  color: rgba(0, 0, 0, 0.5); }\n  .navbar-light .navbar-text a {\n    color: rgba(0, 0, 0, 0.9); }\n    .navbar-light .navbar-text a:focus, .navbar-light .navbar-text a:hover {\n      color: rgba(0, 0, 0, 0.9); }\n\n.navbar-dark .navbar-brand {\n  color: #fff; }\n  .navbar-dark .navbar-brand:focus, .navbar-dark .navbar-brand:hover {\n    color: #fff; }\n\n.navbar-dark .navbar-nav .nav-link {\n  color: rgba(255, 255, 255, 0.5); }\n  .navbar-dark .navbar-nav .nav-link:focus, .navbar-dark .navbar-nav .nav-link:hover {\n    color: rgba(255, 255, 255, 0.75); }\n  .navbar-dark .navbar-nav .nav-link.disabled {\n    color: rgba(255, 255, 255, 0.25); }\n\n.navbar-dark .navbar-nav .show > .nav-link,\n.navbar-dark .navbar-nav .active > .nav-link,\n.navbar-dark .navbar-nav .nav-link.show,\n.navbar-dark .navbar-nav .nav-link.active {\n  color: #fff; }\n\n.navbar-dark .navbar-toggler {\n  color: rgba(255, 255, 255, 0.5);\n  border-color: rgba(255, 255, 255, 0.1); }\n\n.navbar-dark .navbar-toggler-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\"); }\n\n.navbar-dark .navbar-text {\n  color: rgba(255, 255, 255, 0.5); }\n  .navbar-dark .navbar-text a {\n    color: #fff; }\n    .navbar-dark .navbar-text a:focus, .navbar-dark .navbar-text a:hover {\n      color: #fff; }\n\n.card {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: border-box;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 3px; }\n  .card > hr {\n    margin-right: 0;\n    margin-left: 0; }\n  .card > .list-group:first-child .list-group-item:first-child {\n    border-top-left-radius: 3px;\n    border-top-right-radius: 3px; }\n  .card > .list-group:last-child .list-group-item:last-child {\n    border-bottom-right-radius: 3px;\n    border-bottom-left-radius: 3px; }\n\n.card-body {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  padding: 1.25rem; }\n\n.card-title {\n  margin-bottom: 0.75rem; }\n\n.card-subtitle {\n  margin-top: -0.375rem;\n  margin-bottom: 0; }\n\n.card-text:last-child {\n  margin-bottom: 0; }\n\n.card-link:hover {\n  text-decoration: none; }\n\n.card-link + .card-link {\n  margin-left: 1.25rem; }\n\n.card-header {\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 0;\n  background-color: rgba(0, 0, 0, 0.03);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125); }\n  .card-header:first-child {\n    border-radius: calc(3px - 1px) calc(3px - 1px) 0 0; }\n  .card-header + .list-group .list-group-item:first-child {\n    border-top: 0; }\n\n.card-footer {\n  padding: 0.75rem 1.25rem;\n  background-color: rgba(0, 0, 0, 0.03);\n  border-top: 1px solid rgba(0, 0, 0, 0.125); }\n  .card-footer:last-child {\n    border-radius: 0 0 calc(3px - 1px) calc(3px - 1px); }\n\n.card-header-tabs {\n  margin-right: -0.625rem;\n  margin-bottom: -0.75rem;\n  margin-left: -0.625rem;\n  border-bottom: 0; }\n\n.card-header-pills {\n  margin-right: -0.625rem;\n  margin-left: -0.625rem; }\n\n.card-img-overlay {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 1.25rem; }\n\n.card-img {\n  width: 100%;\n  border-radius: calc(3px - 1px); }\n\n.card-img-top {\n  width: 100%;\n  border-top-left-radius: calc(3px - 1px);\n  border-top-right-radius: calc(3px - 1px); }\n\n.card-img-bottom {\n  width: 100%;\n  border-bottom-right-radius: calc(3px - 1px);\n  border-bottom-left-radius: calc(3px - 1px); }\n\n.card-deck {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  .card-deck .card {\n    margin-bottom: 15px; }\n  @media (min-width: 576px) {\n    .card-deck {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-flow: row wrap;\n              flex-flow: row wrap;\n      margin-right: -15px;\n      margin-left: -15px; }\n      .card-deck .card {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-flex: 1;\n            -ms-flex: 1 0 0%;\n                flex: 1 0 0%;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        margin-right: 15px;\n        margin-bottom: 0;\n        margin-left: 15px; } }\n\n.card-group {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  .card-group .card {\n    margin-bottom: 15px; }\n  @media (min-width: 576px) {\n    .card-group {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-flow: row wrap;\n              flex-flow: row wrap; }\n      .card-group .card {\n        -webkit-box-flex: 1;\n            -ms-flex: 1 0 0%;\n                flex: 1 0 0%;\n        margin-bottom: 0; }\n        .card-group .card + .card {\n          margin-left: 0;\n          border-left: 0; }\n        .card-group .card:first-child {\n          border-top-right-radius: 0;\n          border-bottom-right-radius: 0; }\n          .card-group .card:first-child .card-img-top {\n            border-top-right-radius: 0; }\n          .card-group .card:first-child .card-img-bottom {\n            border-bottom-right-radius: 0; }\n        .card-group .card:last-child {\n          border-top-left-radius: 0;\n          border-bottom-left-radius: 0; }\n          .card-group .card:last-child .card-img-top {\n            border-top-left-radius: 0; }\n          .card-group .card:last-child .card-img-bottom {\n            border-bottom-left-radius: 0; }\n        .card-group .card:only-child {\n          border-radius: 3px; }\n          .card-group .card:only-child .card-img-top {\n            border-top-left-radius: 3px;\n            border-top-right-radius: 3px; }\n          .card-group .card:only-child .card-img-bottom {\n            border-bottom-right-radius: 3px;\n            border-bottom-left-radius: 3px; }\n        .card-group .card:not(:first-child):not(:last-child):not(:only-child) {\n          border-radius: 0; }\n          .card-group .card:not(:first-child):not(:last-child):not(:only-child) .card-img-top,\n          .card-group .card:not(:first-child):not(:last-child):not(:only-child) .card-img-bottom {\n            border-radius: 0; } }\n\n.card-columns .card {\n  margin-bottom: 0.75rem; }\n\n@media (min-width: 576px) {\n  .card-columns {\n    -webkit-column-count: 3;\n            column-count: 3;\n    -webkit-column-gap: 1.25rem;\n            column-gap: 1.25rem; }\n    .card-columns .card {\n      display: inline-block;\n      width: 100%; } }\n\n.breadcrumb {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  padding: 0.75rem 1rem;\n  margin-bottom: 1rem;\n  list-style: none;\n  background-color: #e9ecef;\n  border-radius: 3px; }\n\n.breadcrumb-item + .breadcrumb-item::before {\n  display: inline-block;\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n  color: #868e96;\n  content: \"/\"; }\n\n.breadcrumb-item + .breadcrumb-item:hover::before {\n  text-decoration: underline; }\n\n.breadcrumb-item + .breadcrumb-item:hover::before {\n  text-decoration: none; }\n\n.breadcrumb-item.active {\n  color: #868e96; }\n\n.pagination {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-left: 0;\n  list-style: none;\n  border-radius: 3px; }\n\n.page-item:first-child .page-link {\n  margin-left: 0;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px; }\n\n.page-item:last-child .page-link {\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px; }\n\n.page-item.active .page-link {\n  z-index: 2;\n  color: #fff;\n  background-color: #2330fc;\n  border-color: #2330fc; }\n\n.page-item.disabled .page-link {\n  color: #868e96;\n  pointer-events: none;\n  background-color: #fff;\n  border-color: #ddd; }\n\n.page-link {\n  position: relative;\n  display: block;\n  padding: 0.5rem 0.75rem;\n  margin-left: -1px;\n  line-height: 1.25;\n  color: #2330fc;\n  background-color: #fff;\n  border: 1px solid #ddd; }\n  .page-link:focus, .page-link:hover {\n    color: #030fd0;\n    text-decoration: none;\n    background-color: #e9ecef;\n    border-color: #ddd; }\n\n.pagination-lg .page-link {\n  padding: 0.75rem 1.5rem;\n  font-size: 1.25rem;\n  line-height: 1.5; }\n\n.pagination-lg .page-item:first-child .page-link {\n  border-top-left-radius: 0.3rem;\n  border-bottom-left-radius: 0.3rem; }\n\n.pagination-lg .page-item:last-child .page-link {\n  border-top-right-radius: 0.3rem;\n  border-bottom-right-radius: 0.3rem; }\n\n.pagination-sm .page-link {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5; }\n\n.pagination-sm .page-item:first-child .page-link {\n  border-top-left-radius: 0.2rem;\n  border-bottom-left-radius: 0.2rem; }\n\n.pagination-sm .page-item:last-child .page-link {\n  border-top-right-radius: 0.2rem;\n  border-bottom-right-radius: 0.2rem; }\n\n.badge {\n  display: inline-block;\n  padding: 0.25em 0.4em;\n  font-size: 75%;\n  font-weight: 700;\n  line-height: 1;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: 3px; }\n  .badge:empty {\n    display: none; }\n\n.btn .badge {\n  position: relative;\n  top: -1px; }\n\n.badge-pill {\n  padding-right: 0.6em;\n  padding-left: 0.6em;\n  border-radius: 10rem; }\n\n.badge-primary {\n  color: #fff;\n  background-color: #2330fc; }\n  .badge-primary[href]:focus, .badge-primary[href]:hover {\n    color: #fff;\n    text-decoration: none;\n    background-color: #0311e9; }\n\n.badge-secondary {\n  color: #fff;\n  background-color: #868e96; }\n  .badge-secondary[href]:focus, .badge-secondary[href]:hover {\n    color: #fff;\n    text-decoration: none;\n    background-color: #6c757d; }\n\n.badge-success {\n  color: #fff;\n  background-color: #12ce7b; }\n  .badge-success[href]:focus, .badge-success[href]:hover {\n    color: #fff;\n    text-decoration: none;\n    background-color: #0e9f5f; }\n\n.badge-info {\n  color: #fff;\n  background-color: #008fad; }\n  .badge-info[href]:focus, .badge-info[href]:hover {\n    color: #fff;\n    text-decoration: none;\n    background-color: #00657a; }\n\n.badge-warning {\n  color: #111;\n  background-color: #ffbc00; }\n  .badge-warning[href]:focus, .badge-warning[href]:hover {\n    color: #111;\n    text-decoration: none;\n    background-color: #cc9600; }\n\n.badge-danger {\n  color: #fff;\n  background-color: #dc3545; }\n  .badge-danger[href]:focus, .badge-danger[href]:hover {\n    color: #fff;\n    text-decoration: none;\n    background-color: #bd2130; }\n\n.badge-light {\n  color: #111;\n  background-color: #f8f9fa; }\n  .badge-light[href]:focus, .badge-light[href]:hover {\n    color: #111;\n    text-decoration: none;\n    background-color: #dae0e5; }\n\n.badge-dark {\n  color: #fff;\n  background-color: #343a40; }\n  .badge-dark[href]:focus, .badge-dark[href]:hover {\n    color: #fff;\n    text-decoration: none;\n    background-color: #1d2124; }\n\n.jumbotron {\n  padding: 2rem 1rem;\n  margin-bottom: 2rem;\n  background-color: #e9ecef;\n  border-radius: 0.3rem; }\n  @media (min-width: 576px) {\n    .jumbotron {\n      padding: 4rem 2rem; } }\n\n.jumbotron-fluid {\n  padding-right: 0;\n  padding-left: 0;\n  border-radius: 0; }\n\n.alert {\n  position: relative;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 1rem;\n  border: 1px solid transparent;\n  border-radius: 3px; }\n\n.alert-heading {\n  color: inherit; }\n\n.alert-link {\n  font-weight: 700; }\n\n.alert-dismissible .close {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 0.75rem 1.25rem;\n  color: inherit; }\n\n.alert-primary {\n  color: #121983;\n  background-color: #d3d6fe;\n  border-color: #c1c5fe; }\n  .alert-primary hr {\n    border-top-color: #a8aefe; }\n  .alert-primary .alert-link {\n    color: #0c1056; }\n\n.alert-secondary {\n  color: #464a4e;\n  background-color: #e7e8ea;\n  border-color: #dddfe2; }\n  .alert-secondary hr {\n    border-top-color: #cfd2d6; }\n  .alert-secondary .alert-link {\n    color: #2e3133; }\n\n.alert-success {\n  color: #096b40;\n  background-color: #d0f5e5;\n  border-color: #bdf1da; }\n  .alert-success hr {\n    border-top-color: #a8edce; }\n  .alert-success .alert-link {\n    color: #053c24; }\n\n.alert-info {\n  color: #004a5a;\n  background-color: #cce9ef;\n  border-color: #b8e0e8; }\n  .alert-info hr {\n    border-top-color: #a5d8e2; }\n  .alert-info .alert-link {\n    color: #002027; }\n\n.alert-warning {\n  color: #856200;\n  background-color: #fff2cc;\n  border-color: #ffecb8; }\n  .alert-warning hr {\n    border-top-color: #ffe59f; }\n  .alert-warning .alert-link {\n    color: #523c00; }\n\n.alert-danger {\n  color: #721c24;\n  background-color: #f8d7da;\n  border-color: #f5c6cb; }\n  .alert-danger hr {\n    border-top-color: #f1b0b7; }\n  .alert-danger .alert-link {\n    color: #491217; }\n\n.alert-light {\n  color: #818182;\n  background-color: #fefefe;\n  border-color: #fdfdfe; }\n  .alert-light hr {\n    border-top-color: #ececf6; }\n  .alert-light .alert-link {\n    color: #686868; }\n\n.alert-dark {\n  color: #1b1e21;\n  background-color: #d6d8d9;\n  border-color: #c6c8ca; }\n  .alert-dark hr {\n    border-top-color: #b9bbbe; }\n  .alert-dark .alert-link {\n    color: #040505; }\n\n@-webkit-keyframes progress-bar-stripes {\n  from {\n    background-position: 1rem 0; }\n  to {\n    background-position: 0 0; } }\n\n@keyframes progress-bar-stripes {\n  from {\n    background-position: 1rem 0; }\n  to {\n    background-position: 0 0; } }\n\n.progress {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 1rem;\n  overflow: hidden;\n  font-size: 0.75rem;\n  background-color: #e9ecef;\n  border-radius: 3px; }\n\n.progress-bar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  color: #fff;\n  background-color: #2330fc; }\n\n.progress-bar-striped {\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: 1rem 1rem; }\n\n.progress-bar-animated {\n  -webkit-animation: progress-bar-stripes 1s linear infinite;\n          animation: progress-bar-stripes 1s linear infinite; }\n\n.media {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start; }\n\n.media-body {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n\n.list-group {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0; }\n\n.list-group-item-action {\n  width: 100%;\n  color: #495057;\n  text-align: inherit; }\n  .list-group-item-action:focus, .list-group-item-action:hover {\n    color: #495057;\n    text-decoration: none;\n    background-color: #f8f9fa; }\n  .list-group-item-action:active {\n    color: #212529;\n    background-color: #e9ecef; }\n\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.125); }\n  .list-group-item:first-child {\n    border-top-left-radius: 3px;\n    border-top-right-radius: 3px; }\n  .list-group-item:last-child {\n    margin-bottom: 0;\n    border-bottom-right-radius: 3px;\n    border-bottom-left-radius: 3px; }\n  .list-group-item:focus, .list-group-item:hover {\n    text-decoration: none; }\n  .list-group-item.disabled, .list-group-item:disabled {\n    color: #868e96;\n    background-color: #fff; }\n  .list-group-item.active {\n    z-index: 2;\n    color: #fff;\n    background-color: #2330fc;\n    border-color: #2330fc; }\n\n.list-group-flush .list-group-item {\n  border-right: 0;\n  border-left: 0;\n  border-radius: 0; }\n\n.list-group-flush:first-child .list-group-item:first-child {\n  border-top: 0; }\n\n.list-group-flush:last-child .list-group-item:last-child {\n  border-bottom: 0; }\n\n.list-group-item-primary {\n  color: #121983;\n  background-color: #c1c5fe; }\n\na.list-group-item-primary,\nbutton.list-group-item-primary {\n  color: #121983; }\n  a.list-group-item-primary:focus, a.list-group-item-primary:hover,\n  button.list-group-item-primary:focus,\n  button.list-group-item-primary:hover {\n    color: #121983;\n    background-color: #a8aefe; }\n  a.list-group-item-primary.active,\n  button.list-group-item-primary.active {\n    color: #fff;\n    background-color: #121983;\n    border-color: #121983; }\n\n.list-group-item-secondary {\n  color: #464a4e;\n  background-color: #dddfe2; }\n\na.list-group-item-secondary,\nbutton.list-group-item-secondary {\n  color: #464a4e; }\n  a.list-group-item-secondary:focus, a.list-group-item-secondary:hover,\n  button.list-group-item-secondary:focus,\n  button.list-group-item-secondary:hover {\n    color: #464a4e;\n    background-color: #cfd2d6; }\n  a.list-group-item-secondary.active,\n  button.list-group-item-secondary.active {\n    color: #fff;\n    background-color: #464a4e;\n    border-color: #464a4e; }\n\n.list-group-item-success {\n  color: #096b40;\n  background-color: #bdf1da; }\n\na.list-group-item-success,\nbutton.list-group-item-success {\n  color: #096b40; }\n  a.list-group-item-success:focus, a.list-group-item-success:hover,\n  button.list-group-item-success:focus,\n  button.list-group-item-success:hover {\n    color: #096b40;\n    background-color: #a8edce; }\n  a.list-group-item-success.active,\n  button.list-group-item-success.active {\n    color: #fff;\n    background-color: #096b40;\n    border-color: #096b40; }\n\n.list-group-item-info {\n  color: #004a5a;\n  background-color: #b8e0e8; }\n\na.list-group-item-info,\nbutton.list-group-item-info {\n  color: #004a5a; }\n  a.list-group-item-info:focus, a.list-group-item-info:hover,\n  button.list-group-item-info:focus,\n  button.list-group-item-info:hover {\n    color: #004a5a;\n    background-color: #a5d8e2; }\n  a.list-group-item-info.active,\n  button.list-group-item-info.active {\n    color: #fff;\n    background-color: #004a5a;\n    border-color: #004a5a; }\n\n.list-group-item-warning {\n  color: #856200;\n  background-color: #ffecb8; }\n\na.list-group-item-warning,\nbutton.list-group-item-warning {\n  color: #856200; }\n  a.list-group-item-warning:focus, a.list-group-item-warning:hover,\n  button.list-group-item-warning:focus,\n  button.list-group-item-warning:hover {\n    color: #856200;\n    background-color: #ffe59f; }\n  a.list-group-item-warning.active,\n  button.list-group-item-warning.active {\n    color: #fff;\n    background-color: #856200;\n    border-color: #856200; }\n\n.list-group-item-danger {\n  color: #721c24;\n  background-color: #f5c6cb; }\n\na.list-group-item-danger,\nbutton.list-group-item-danger {\n  color: #721c24; }\n  a.list-group-item-danger:focus, a.list-group-item-danger:hover,\n  button.list-group-item-danger:focus,\n  button.list-group-item-danger:hover {\n    color: #721c24;\n    background-color: #f1b0b7; }\n  a.list-group-item-danger.active,\n  button.list-group-item-danger.active {\n    color: #fff;\n    background-color: #721c24;\n    border-color: #721c24; }\n\n.list-group-item-light {\n  color: #818182;\n  background-color: #fdfdfe; }\n\na.list-group-item-light,\nbutton.list-group-item-light {\n  color: #818182; }\n  a.list-group-item-light:focus, a.list-group-item-light:hover,\n  button.list-group-item-light:focus,\n  button.list-group-item-light:hover {\n    color: #818182;\n    background-color: #ececf6; }\n  a.list-group-item-light.active,\n  button.list-group-item-light.active {\n    color: #fff;\n    background-color: #818182;\n    border-color: #818182; }\n\n.list-group-item-dark {\n  color: #1b1e21;\n  background-color: #c6c8ca; }\n\na.list-group-item-dark,\nbutton.list-group-item-dark {\n  color: #1b1e21; }\n  a.list-group-item-dark:focus, a.list-group-item-dark:hover,\n  button.list-group-item-dark:focus,\n  button.list-group-item-dark:hover {\n    color: #1b1e21;\n    background-color: #b9bbbe; }\n  a.list-group-item-dark.active,\n  button.list-group-item-dark.active {\n    color: #fff;\n    background-color: #1b1e21;\n    border-color: #1b1e21; }\n\n.close {\n  float: right;\n  font-size: 1.5rem;\n  font-weight: 700;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  opacity: .5; }\n  .close:focus, .close:hover {\n    color: #000;\n    text-decoration: none;\n    opacity: .75; }\n\nbutton.close {\n  padding: 0;\n  background: transparent;\n  border: 0;\n  -webkit-appearance: none; }\n\n.modal-open {\n  overflow: hidden; }\n\n.modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  overflow: hidden;\n  outline: 0; }\n  .modal.fade .modal-dialog {\n    transition: -webkit-transform 0.3s ease-out;\n    transition: transform 0.3s ease-out;\n    transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;\n    -webkit-transform: translate(0, -25%);\n            transform: translate(0, -25%); }\n  .modal.show .modal-dialog {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0); }\n\n.modal-open .modal {\n  overflow-x: hidden;\n  overflow-y: auto; }\n\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 10px;\n  pointer-events: none; }\n\n.modal-content {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  pointer-events: auto;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.3rem;\n  outline: 0; }\n\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1040;\n  background-color: #000; }\n  .modal-backdrop.fade {\n    opacity: 0; }\n  .modal-backdrop.show {\n    opacity: 0.5; }\n\n.modal-header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 15px;\n  border-bottom: 1px solid #e9ecef;\n  border-top-left-radius: 0.3rem;\n  border-top-right-radius: 0.3rem; }\n  .modal-header .close {\n    padding: 15px;\n    margin: -15px -15px -15px auto; }\n\n.modal-title {\n  margin-bottom: 0;\n  line-height: 1.5; }\n\n.modal-body {\n  position: relative;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  padding: 15px; }\n\n.modal-footer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  padding: 15px;\n  border-top: 1px solid #e9ecef; }\n  .modal-footer > :not(:first-child) {\n    margin-left: .25rem; }\n  .modal-footer > :not(:last-child) {\n    margin-right: .25rem; }\n\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll; }\n\n@media (min-width: 576px) {\n  .modal-dialog {\n    max-width: 500px;\n    margin: 30px auto; }\n  .modal-sm {\n    max-width: 300px; } }\n\n@media (min-width: 992px) {\n  .modal-lg {\n    max-width: 800px; } }\n\n.tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  white-space: normal;\n  line-break: auto;\n  font-size: 0.875rem;\n  word-wrap: break-word;\n  opacity: 0; }\n  .tooltip.show {\n    opacity: 0.9; }\n  .tooltip .arrow {\n    position: absolute;\n    display: block;\n    width: 5px;\n    height: 5px; }\n  .tooltip .arrow::before {\n    position: absolute;\n    border-color: transparent;\n    border-style: solid; }\n  .tooltip.bs-tooltip-top, .tooltip.bs-tooltip-auto[x-placement^=\"top\"] {\n    padding: 5px 0; }\n    .tooltip.bs-tooltip-top .arrow, .tooltip.bs-tooltip-auto[x-placement^=\"top\"] .arrow {\n      bottom: 0; }\n    .tooltip.bs-tooltip-top .arrow::before, .tooltip.bs-tooltip-auto[x-placement^=\"top\"] .arrow::before {\n      margin-left: -3px;\n      content: \"\";\n      border-width: 5px 5px 0;\n      border-top-color: #000; }\n  .tooltip.bs-tooltip-right, .tooltip.bs-tooltip-auto[x-placement^=\"right\"] {\n    padding: 0 5px; }\n    .tooltip.bs-tooltip-right .arrow, .tooltip.bs-tooltip-auto[x-placement^=\"right\"] .arrow {\n      left: 0; }\n    .tooltip.bs-tooltip-right .arrow::before, .tooltip.bs-tooltip-auto[x-placement^=\"right\"] .arrow::before {\n      margin-top: -3px;\n      content: \"\";\n      border-width: 5px 5px 5px 0;\n      border-right-color: #000; }\n  .tooltip.bs-tooltip-bottom, .tooltip.bs-tooltip-auto[x-placement^=\"bottom\"] {\n    padding: 5px 0; }\n    .tooltip.bs-tooltip-bottom .arrow, .tooltip.bs-tooltip-auto[x-placement^=\"bottom\"] .arrow {\n      top: 0; }\n    .tooltip.bs-tooltip-bottom .arrow::before, .tooltip.bs-tooltip-auto[x-placement^=\"bottom\"] .arrow::before {\n      margin-left: -3px;\n      content: \"\";\n      border-width: 0 5px 5px;\n      border-bottom-color: #000; }\n  .tooltip.bs-tooltip-left, .tooltip.bs-tooltip-auto[x-placement^=\"left\"] {\n    padding: 0 5px; }\n    .tooltip.bs-tooltip-left .arrow, .tooltip.bs-tooltip-auto[x-placement^=\"left\"] .arrow {\n      right: 0; }\n    .tooltip.bs-tooltip-left .arrow::before, .tooltip.bs-tooltip-auto[x-placement^=\"left\"] .arrow::before {\n      right: 0;\n      margin-top: -3px;\n      content: \"\";\n      border-width: 5px 0 5px 5px;\n      border-left-color: #000; }\n\n.tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 3px; }\n\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  display: block;\n  max-width: 276px;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  white-space: normal;\n  line-break: auto;\n  font-size: 0.875rem;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.3rem; }\n  .popover .arrow {\n    position: absolute;\n    display: block;\n    width: 0.8rem;\n    height: 0.4rem; }\n  .popover .arrow::before,\n  .popover .arrow::after {\n    position: absolute;\n    display: block;\n    border-color: transparent;\n    border-style: solid; }\n  .popover .arrow::before {\n    content: \"\";\n    border-width: 0.8rem; }\n  .popover .arrow::after {\n    content: \"\";\n    border-width: 0.8rem; }\n  .popover.bs-popover-top, .popover.bs-popover-auto[x-placement^=\"top\"] {\n    margin-bottom: 0.8rem; }\n    .popover.bs-popover-top .arrow, .popover.bs-popover-auto[x-placement^=\"top\"] .arrow {\n      bottom: 0; }\n    .popover.bs-popover-top .arrow::before, .popover.bs-popover-auto[x-placement^=\"top\"] .arrow::before,\n    .popover.bs-popover-top .arrow::after, .popover.bs-popover-auto[x-placement^=\"top\"] .arrow::after {\n      border-bottom-width: 0; }\n    .popover.bs-popover-top .arrow::before, .popover.bs-popover-auto[x-placement^=\"top\"] .arrow::before {\n      bottom: -0.8rem;\n      margin-left: -0.8rem;\n      border-top-color: rgba(0, 0, 0, 0.25); }\n    .popover.bs-popover-top .arrow::after, .popover.bs-popover-auto[x-placement^=\"top\"] .arrow::after {\n      bottom: calc((0.8rem - 1px) * -1);\n      margin-left: -0.8rem;\n      border-top-color: #fff; }\n  .popover.bs-popover-right, .popover.bs-popover-auto[x-placement^=\"right\"] {\n    margin-left: 0.8rem; }\n    .popover.bs-popover-right .arrow, .popover.bs-popover-auto[x-placement^=\"right\"] .arrow {\n      left: 0; }\n    .popover.bs-popover-right .arrow::before, .popover.bs-popover-auto[x-placement^=\"right\"] .arrow::before,\n    .popover.bs-popover-right .arrow::after, .popover.bs-popover-auto[x-placement^=\"right\"] .arrow::after {\n      margin-top: -0.8rem;\n      border-left-width: 0; }\n    .popover.bs-popover-right .arrow::before, .popover.bs-popover-auto[x-placement^=\"right\"] .arrow::before {\n      left: -0.8rem;\n      border-right-color: rgba(0, 0, 0, 0.25); }\n    .popover.bs-popover-right .arrow::after, .popover.bs-popover-auto[x-placement^=\"right\"] .arrow::after {\n      left: calc((0.8rem - 1px) * -1);\n      border-right-color: #fff; }\n  .popover.bs-popover-bottom, .popover.bs-popover-auto[x-placement^=\"bottom\"] {\n    margin-top: 0.8rem; }\n    .popover.bs-popover-bottom .arrow, .popover.bs-popover-auto[x-placement^=\"bottom\"] .arrow {\n      top: 0; }\n    .popover.bs-popover-bottom .arrow::before, .popover.bs-popover-auto[x-placement^=\"bottom\"] .arrow::before,\n    .popover.bs-popover-bottom .arrow::after, .popover.bs-popover-auto[x-placement^=\"bottom\"] .arrow::after {\n      margin-left: -0.8rem;\n      border-top-width: 0; }\n    .popover.bs-popover-bottom .arrow::before, .popover.bs-popover-auto[x-placement^=\"bottom\"] .arrow::before {\n      top: -0.8rem;\n      border-bottom-color: rgba(0, 0, 0, 0.25); }\n    .popover.bs-popover-bottom .arrow::after, .popover.bs-popover-auto[x-placement^=\"bottom\"] .arrow::after {\n      top: calc((0.8rem - 1px) * -1);\n      border-bottom-color: #fff; }\n    .popover.bs-popover-bottom .popover-header::before, .popover.bs-popover-auto[x-placement^=\"bottom\"] .popover-header::before {\n      position: absolute;\n      top: 0;\n      left: 50%;\n      display: block;\n      width: 20px;\n      margin-left: -10px;\n      content: \"\";\n      border-bottom: 1px solid #f7f7f7; }\n  .popover.bs-popover-left, .popover.bs-popover-auto[x-placement^=\"left\"] {\n    margin-right: 0.8rem; }\n    .popover.bs-popover-left .arrow, .popover.bs-popover-auto[x-placement^=\"left\"] .arrow {\n      right: 0; }\n    .popover.bs-popover-left .arrow::before, .popover.bs-popover-auto[x-placement^=\"left\"] .arrow::before,\n    .popover.bs-popover-left .arrow::after, .popover.bs-popover-auto[x-placement^=\"left\"] .arrow::after {\n      margin-top: -0.8rem;\n      border-right-width: 0; }\n    .popover.bs-popover-left .arrow::before, .popover.bs-popover-auto[x-placement^=\"left\"] .arrow::before {\n      right: -0.8rem;\n      border-left-color: rgba(0, 0, 0, 0.25); }\n    .popover.bs-popover-left .arrow::after, .popover.bs-popover-auto[x-placement^=\"left\"] .arrow::after {\n      right: calc((0.8rem - 1px) * -1);\n      border-left-color: #fff; }\n\n.popover-header {\n  padding: 0.5rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  color: inherit;\n  background-color: #f7f7f7;\n  border-bottom: 1px solid #ebebeb;\n  border-top-left-radius: calc(0.3rem - 1px);\n  border-top-right-radius: calc(0.3rem - 1px); }\n  .popover-header:empty {\n    display: none; }\n\n.popover-body {\n  padding: 0.5rem 0.75rem;\n  color: #212529; }\n\n.carousel {\n  position: relative; }\n\n.carousel-inner {\n  position: relative;\n  width: 100%;\n  overflow: hidden; }\n\n.carousel-item {\n  position: relative;\n  display: none;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100%;\n  transition: -webkit-transform 0.6s ease;\n  transition: transform 0.6s ease;\n  transition: transform 0.6s ease, -webkit-transform 0.6s ease;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-perspective: 1000px;\n          perspective: 1000px; }\n\n.carousel-item.active,\n.carousel-item-next,\n.carousel-item-prev {\n  display: block; }\n\n.carousel-item-next,\n.carousel-item-prev {\n  position: absolute;\n  top: 0; }\n\n.carousel-item-next.carousel-item-left,\n.carousel-item-prev.carousel-item-right {\n  -webkit-transform: translateX(0);\n          transform: translateX(0); }\n  @supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)) {\n    .carousel-item-next.carousel-item-left,\n    .carousel-item-prev.carousel-item-right {\n      -webkit-transform: translate3d(0, 0, 0);\n              transform: translate3d(0, 0, 0); } }\n\n.carousel-item-next,\n.active.carousel-item-right {\n  -webkit-transform: translateX(100%);\n          transform: translateX(100%); }\n  @supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)) {\n    .carousel-item-next,\n    .active.carousel-item-right {\n      -webkit-transform: translate3d(100%, 0, 0);\n              transform: translate3d(100%, 0, 0); } }\n\n.carousel-item-prev,\n.active.carousel-item-left {\n  -webkit-transform: translateX(-100%);\n          transform: translateX(-100%); }\n  @supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)) {\n    .carousel-item-prev,\n    .active.carousel-item-left {\n      -webkit-transform: translate3d(-100%, 0, 0);\n              transform: translate3d(-100%, 0, 0); } }\n\n.carousel-control-prev,\n.carousel-control-next {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 15%;\n  color: #fff;\n  text-align: center;\n  opacity: 0.5; }\n  .carousel-control-prev:focus, .carousel-control-prev:hover,\n  .carousel-control-next:focus,\n  .carousel-control-next:hover {\n    color: #fff;\n    text-decoration: none;\n    outline: 0;\n    opacity: .9; }\n\n.carousel-control-prev {\n  left: 0; }\n\n.carousel-control-next {\n  right: 0; }\n\n.carousel-control-prev-icon,\n.carousel-control-next-icon {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  background: transparent no-repeat center center;\n  background-size: 100% 100%; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E\"); }\n\n.carousel-control-next-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E\"); }\n\n.carousel-indicators {\n  position: absolute;\n  right: 0;\n  bottom: 10px;\n  left: 0;\n  z-index: 15;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding-left: 0;\n  margin-right: 15%;\n  margin-left: 15%;\n  list-style: none; }\n  .carousel-indicators li {\n    position: relative;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 1 auto;\n            flex: 0 1 auto;\n    width: 30px;\n    height: 3px;\n    margin-right: 3px;\n    margin-left: 3px;\n    text-indent: -999px;\n    background-color: rgba(255, 255, 255, 0.5); }\n    .carousel-indicators li::before {\n      position: absolute;\n      top: -10px;\n      left: 0;\n      display: inline-block;\n      width: 100%;\n      height: 10px;\n      content: \"\"; }\n    .carousel-indicators li::after {\n      position: absolute;\n      bottom: -10px;\n      left: 0;\n      display: inline-block;\n      width: 100%;\n      height: 10px;\n      content: \"\"; }\n  .carousel-indicators .active {\n    background-color: #fff; }\n\n.carousel-caption {\n  position: absolute;\n  right: 15%;\n  bottom: 20px;\n  left: 15%;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff;\n  text-align: center; }\n\n.align-baseline {\n  vertical-align: baseline !important; }\n\n.align-top {\n  vertical-align: top !important; }\n\n.align-middle {\n  vertical-align: middle !important; }\n\n.align-bottom {\n  vertical-align: bottom !important; }\n\n.align-text-bottom {\n  vertical-align: text-bottom !important; }\n\n.align-text-top {\n  vertical-align: text-top !important; }\n\n.bg-primary {\n  background-color: #2330fc !important; }\n\na.bg-primary:focus, a.bg-primary:hover {\n  background-color: #0311e9 !important; }\n\n.bg-secondary {\n  background-color: #868e96 !important; }\n\na.bg-secondary:focus, a.bg-secondary:hover {\n  background-color: #6c757d !important; }\n\n.bg-success {\n  background-color: #12ce7b !important; }\n\na.bg-success:focus, a.bg-success:hover {\n  background-color: #0e9f5f !important; }\n\n.bg-info {\n  background-color: #008fad !important; }\n\na.bg-info:focus, a.bg-info:hover {\n  background-color: #00657a !important; }\n\n.bg-warning {\n  background-color: #ffbc00 !important; }\n\na.bg-warning:focus, a.bg-warning:hover {\n  background-color: #cc9600 !important; }\n\n.bg-danger {\n  background-color: #dc3545 !important; }\n\na.bg-danger:focus, a.bg-danger:hover {\n  background-color: #bd2130 !important; }\n\n.bg-light {\n  background-color: #f8f9fa !important; }\n\na.bg-light:focus, a.bg-light:hover {\n  background-color: #dae0e5 !important; }\n\n.bg-dark {\n  background-color: #343a40 !important; }\n\na.bg-dark:focus, a.bg-dark:hover {\n  background-color: #1d2124 !important; }\n\n.bg-white {\n  background-color: #fff !important; }\n\n.bg-transparent {\n  background-color: transparent !important; }\n\n.border {\n  border: 1px solid #e9ecef !important; }\n\n.border-0 {\n  border: 0 !important; }\n\n.border-top-0 {\n  border-top: 0 !important; }\n\n.border-right-0 {\n  border-right: 0 !important; }\n\n.border-bottom-0 {\n  border-bottom: 0 !important; }\n\n.border-left-0 {\n  border-left: 0 !important; }\n\n.border-primary {\n  border-color: #2330fc !important; }\n\n.border-secondary {\n  border-color: #868e96 !important; }\n\n.border-success {\n  border-color: #12ce7b !important; }\n\n.border-info {\n  border-color: #008fad !important; }\n\n.border-warning {\n  border-color: #ffbc00 !important; }\n\n.border-danger {\n  border-color: #dc3545 !important; }\n\n.border-light {\n  border-color: #f8f9fa !important; }\n\n.border-dark {\n  border-color: #343a40 !important; }\n\n.border-white {\n  border-color: #fff !important; }\n\n.rounded {\n  border-radius: 3px !important; }\n\n.rounded-top {\n  border-top-left-radius: 3px !important;\n  border-top-right-radius: 3px !important; }\n\n.rounded-right {\n  border-top-right-radius: 3px !important;\n  border-bottom-right-radius: 3px !important; }\n\n.rounded-bottom {\n  border-bottom-right-radius: 3px !important;\n  border-bottom-left-radius: 3px !important; }\n\n.rounded-left {\n  border-top-left-radius: 3px !important;\n  border-bottom-left-radius: 3px !important; }\n\n.rounded-circle {\n  border-radius: 50% !important; }\n\n.rounded-0 {\n  border-radius: 0 !important; }\n\n.clearfix::after {\n  display: block;\n  clear: both;\n  content: \"\"; }\n\n.d-none {\n  display: none !important; }\n\n.d-inline {\n  display: inline !important; }\n\n.d-inline-block {\n  display: inline-block !important; }\n\n.d-block {\n  display: block !important; }\n\n.d-table {\n  display: table !important; }\n\n.d-table-row {\n  display: table-row !important; }\n\n.d-table-cell {\n  display: table-cell !important; }\n\n.d-flex {\n  display: -webkit-box !important;\n  display: -ms-flexbox !important;\n  display: flex !important; }\n\n.d-inline-flex {\n  display: -webkit-inline-box !important;\n  display: -ms-inline-flexbox !important;\n  display: inline-flex !important; }\n\n@media (min-width: 576px) {\n  .d-sm-none {\n    display: none !important; }\n  .d-sm-inline {\n    display: inline !important; }\n  .d-sm-inline-block {\n    display: inline-block !important; }\n  .d-sm-block {\n    display: block !important; }\n  .d-sm-table {\n    display: table !important; }\n  .d-sm-table-row {\n    display: table-row !important; }\n  .d-sm-table-cell {\n    display: table-cell !important; }\n  .d-sm-flex {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important; }\n  .d-sm-inline-flex {\n    display: -webkit-inline-box !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important; } }\n\n@media (min-width: 768px) {\n  .d-md-none {\n    display: none !important; }\n  .d-md-inline {\n    display: inline !important; }\n  .d-md-inline-block {\n    display: inline-block !important; }\n  .d-md-block {\n    display: block !important; }\n  .d-md-table {\n    display: table !important; }\n  .d-md-table-row {\n    display: table-row !important; }\n  .d-md-table-cell {\n    display: table-cell !important; }\n  .d-md-flex {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important; }\n  .d-md-inline-flex {\n    display: -webkit-inline-box !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important; } }\n\n@media (min-width: 992px) {\n  .d-lg-none {\n    display: none !important; }\n  .d-lg-inline {\n    display: inline !important; }\n  .d-lg-inline-block {\n    display: inline-block !important; }\n  .d-lg-block {\n    display: block !important; }\n  .d-lg-table {\n    display: table !important; }\n  .d-lg-table-row {\n    display: table-row !important; }\n  .d-lg-table-cell {\n    display: table-cell !important; }\n  .d-lg-flex {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important; }\n  .d-lg-inline-flex {\n    display: -webkit-inline-box !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important; } }\n\n@media (min-width: 1200px) {\n  .d-xl-none {\n    display: none !important; }\n  .d-xl-inline {\n    display: inline !important; }\n  .d-xl-inline-block {\n    display: inline-block !important; }\n  .d-xl-block {\n    display: block !important; }\n  .d-xl-table {\n    display: table !important; }\n  .d-xl-table-row {\n    display: table-row !important; }\n  .d-xl-table-cell {\n    display: table-cell !important; }\n  .d-xl-flex {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important; }\n  .d-xl-inline-flex {\n    display: -webkit-inline-box !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important; } }\n\n.d-print-block {\n  display: none !important; }\n  @media print {\n    .d-print-block {\n      display: block !important; } }\n\n.d-print-inline {\n  display: none !important; }\n  @media print {\n    .d-print-inline {\n      display: inline !important; } }\n\n.d-print-inline-block {\n  display: none !important; }\n  @media print {\n    .d-print-inline-block {\n      display: inline-block !important; } }\n\n@media print {\n  .d-print-none {\n    display: none !important; } }\n\n.embed-responsive {\n  position: relative;\n  display: block;\n  width: 100%;\n  padding: 0;\n  overflow: hidden; }\n  .embed-responsive::before {\n    display: block;\n    content: \"\"; }\n  .embed-responsive .embed-responsive-item,\n  .embed-responsive iframe,\n  .embed-responsive embed,\n  .embed-responsive object,\n  .embed-responsive video {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    border: 0; }\n\n.embed-responsive-21by9::before {\n  padding-top: 42.85714286%; }\n\n.embed-responsive-16by9::before {\n  padding-top: 56.25%; }\n\n.embed-responsive-4by3::before {\n  padding-top: 75%; }\n\n.embed-responsive-1by1::before {\n  padding-top: 100%; }\n\n.flex-row {\n  -webkit-box-orient: horizontal !important;\n  -webkit-box-direction: normal !important;\n      -ms-flex-direction: row !important;\n          flex-direction: row !important; }\n\n.flex-column {\n  -webkit-box-orient: vertical !important;\n  -webkit-box-direction: normal !important;\n      -ms-flex-direction: column !important;\n          flex-direction: column !important; }\n\n.flex-row-reverse {\n  -webkit-box-orient: horizontal !important;\n  -webkit-box-direction: reverse !important;\n      -ms-flex-direction: row-reverse !important;\n          flex-direction: row-reverse !important; }\n\n.flex-column-reverse {\n  -webkit-box-orient: vertical !important;\n  -webkit-box-direction: reverse !important;\n      -ms-flex-direction: column-reverse !important;\n          flex-direction: column-reverse !important; }\n\n.flex-wrap {\n  -ms-flex-wrap: wrap !important;\n      flex-wrap: wrap !important; }\n\n.flex-nowrap {\n  -ms-flex-wrap: nowrap !important;\n      flex-wrap: nowrap !important; }\n\n.flex-wrap-reverse {\n  -ms-flex-wrap: wrap-reverse !important;\n      flex-wrap: wrap-reverse !important; }\n\n.justify-content-start {\n  -webkit-box-pack: start !important;\n      -ms-flex-pack: start !important;\n          justify-content: flex-start !important; }\n\n.justify-content-end {\n  -webkit-box-pack: end !important;\n      -ms-flex-pack: end !important;\n          justify-content: flex-end !important; }\n\n.justify-content-center {\n  -webkit-box-pack: center !important;\n      -ms-flex-pack: center !important;\n          justify-content: center !important; }\n\n.justify-content-between {\n  -webkit-box-pack: justify !important;\n      -ms-flex-pack: justify !important;\n          justify-content: space-between !important; }\n\n.justify-content-around {\n  -ms-flex-pack: distribute !important;\n      justify-content: space-around !important; }\n\n.align-items-start {\n  -webkit-box-align: start !important;\n      -ms-flex-align: start !important;\n          align-items: flex-start !important; }\n\n.align-items-end {\n  -webkit-box-align: end !important;\n      -ms-flex-align: end !important;\n          align-items: flex-end !important; }\n\n.align-items-center {\n  -webkit-box-align: center !important;\n      -ms-flex-align: center !important;\n          align-items: center !important; }\n\n.align-items-baseline {\n  -webkit-box-align: baseline !important;\n      -ms-flex-align: baseline !important;\n          align-items: baseline !important; }\n\n.align-items-stretch {\n  -webkit-box-align: stretch !important;\n      -ms-flex-align: stretch !important;\n          align-items: stretch !important; }\n\n.align-content-start {\n  -ms-flex-line-pack: start !important;\n      align-content: flex-start !important; }\n\n.align-content-end {\n  -ms-flex-line-pack: end !important;\n      align-content: flex-end !important; }\n\n.align-content-center {\n  -ms-flex-line-pack: center !important;\n      align-content: center !important; }\n\n.align-content-between {\n  -ms-flex-line-pack: justify !important;\n      align-content: space-between !important; }\n\n.align-content-around {\n  -ms-flex-line-pack: distribute !important;\n      align-content: space-around !important; }\n\n.align-content-stretch {\n  -ms-flex-line-pack: stretch !important;\n      align-content: stretch !important; }\n\n.align-self-auto {\n  -ms-flex-item-align: auto !important;\n      -ms-grid-row-align: auto !important;\n      align-self: auto !important; }\n\n.align-self-start {\n  -ms-flex-item-align: start !important;\n      align-self: flex-start !important; }\n\n.align-self-end {\n  -ms-flex-item-align: end !important;\n      align-self: flex-end !important; }\n\n.align-self-center {\n  -ms-flex-item-align: center !important;\n      -ms-grid-row-align: center !important;\n      align-self: center !important; }\n\n.align-self-baseline {\n  -ms-flex-item-align: baseline !important;\n      align-self: baseline !important; }\n\n.align-self-stretch {\n  -ms-flex-item-align: stretch !important;\n      -ms-grid-row-align: stretch !important;\n      align-self: stretch !important; }\n\n@media (min-width: 576px) {\n  .flex-sm-row {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: normal !important;\n        -ms-flex-direction: row !important;\n            flex-direction: row !important; }\n  .flex-sm-column {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: normal !important;\n        -ms-flex-direction: column !important;\n            flex-direction: column !important; }\n  .flex-sm-row-reverse {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: reverse !important;\n        -ms-flex-direction: row-reverse !important;\n            flex-direction: row-reverse !important; }\n  .flex-sm-column-reverse {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: reverse !important;\n        -ms-flex-direction: column-reverse !important;\n            flex-direction: column-reverse !important; }\n  .flex-sm-wrap {\n    -ms-flex-wrap: wrap !important;\n        flex-wrap: wrap !important; }\n  .flex-sm-nowrap {\n    -ms-flex-wrap: nowrap !important;\n        flex-wrap: nowrap !important; }\n  .flex-sm-wrap-reverse {\n    -ms-flex-wrap: wrap-reverse !important;\n        flex-wrap: wrap-reverse !important; }\n  .justify-content-sm-start {\n    -webkit-box-pack: start !important;\n        -ms-flex-pack: start !important;\n            justify-content: flex-start !important; }\n  .justify-content-sm-end {\n    -webkit-box-pack: end !important;\n        -ms-flex-pack: end !important;\n            justify-content: flex-end !important; }\n  .justify-content-sm-center {\n    -webkit-box-pack: center !important;\n        -ms-flex-pack: center !important;\n            justify-content: center !important; }\n  .justify-content-sm-between {\n    -webkit-box-pack: justify !important;\n        -ms-flex-pack: justify !important;\n            justify-content: space-between !important; }\n  .justify-content-sm-around {\n    -ms-flex-pack: distribute !important;\n        justify-content: space-around !important; }\n  .align-items-sm-start {\n    -webkit-box-align: start !important;\n        -ms-flex-align: start !important;\n            align-items: flex-start !important; }\n  .align-items-sm-end {\n    -webkit-box-align: end !important;\n        -ms-flex-align: end !important;\n            align-items: flex-end !important; }\n  .align-items-sm-center {\n    -webkit-box-align: center !important;\n        -ms-flex-align: center !important;\n            align-items: center !important; }\n  .align-items-sm-baseline {\n    -webkit-box-align: baseline !important;\n        -ms-flex-align: baseline !important;\n            align-items: baseline !important; }\n  .align-items-sm-stretch {\n    -webkit-box-align: stretch !important;\n        -ms-flex-align: stretch !important;\n            align-items: stretch !important; }\n  .align-content-sm-start {\n    -ms-flex-line-pack: start !important;\n        align-content: flex-start !important; }\n  .align-content-sm-end {\n    -ms-flex-line-pack: end !important;\n        align-content: flex-end !important; }\n  .align-content-sm-center {\n    -ms-flex-line-pack: center !important;\n        align-content: center !important; }\n  .align-content-sm-between {\n    -ms-flex-line-pack: justify !important;\n        align-content: space-between !important; }\n  .align-content-sm-around {\n    -ms-flex-line-pack: distribute !important;\n        align-content: space-around !important; }\n  .align-content-sm-stretch {\n    -ms-flex-line-pack: stretch !important;\n        align-content: stretch !important; }\n  .align-self-sm-auto {\n    -ms-flex-item-align: auto !important;\n        -ms-grid-row-align: auto !important;\n        align-self: auto !important; }\n  .align-self-sm-start {\n    -ms-flex-item-align: start !important;\n        align-self: flex-start !important; }\n  .align-self-sm-end {\n    -ms-flex-item-align: end !important;\n        align-self: flex-end !important; }\n  .align-self-sm-center {\n    -ms-flex-item-align: center !important;\n        -ms-grid-row-align: center !important;\n        align-self: center !important; }\n  .align-self-sm-baseline {\n    -ms-flex-item-align: baseline !important;\n        align-self: baseline !important; }\n  .align-self-sm-stretch {\n    -ms-flex-item-align: stretch !important;\n        -ms-grid-row-align: stretch !important;\n        align-self: stretch !important; } }\n\n@media (min-width: 768px) {\n  .flex-md-row {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: normal !important;\n        -ms-flex-direction: row !important;\n            flex-direction: row !important; }\n  .flex-md-column {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: normal !important;\n        -ms-flex-direction: column !important;\n            flex-direction: column !important; }\n  .flex-md-row-reverse {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: reverse !important;\n        -ms-flex-direction: row-reverse !important;\n            flex-direction: row-reverse !important; }\n  .flex-md-column-reverse {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: reverse !important;\n        -ms-flex-direction: column-reverse !important;\n            flex-direction: column-reverse !important; }\n  .flex-md-wrap {\n    -ms-flex-wrap: wrap !important;\n        flex-wrap: wrap !important; }\n  .flex-md-nowrap {\n    -ms-flex-wrap: nowrap !important;\n        flex-wrap: nowrap !important; }\n  .flex-md-wrap-reverse {\n    -ms-flex-wrap: wrap-reverse !important;\n        flex-wrap: wrap-reverse !important; }\n  .justify-content-md-start {\n    -webkit-box-pack: start !important;\n        -ms-flex-pack: start !important;\n            justify-content: flex-start !important; }\n  .justify-content-md-end {\n    -webkit-box-pack: end !important;\n        -ms-flex-pack: end !important;\n            justify-content: flex-end !important; }\n  .justify-content-md-center {\n    -webkit-box-pack: center !important;\n        -ms-flex-pack: center !important;\n            justify-content: center !important; }\n  .justify-content-md-between {\n    -webkit-box-pack: justify !important;\n        -ms-flex-pack: justify !important;\n            justify-content: space-between !important; }\n  .justify-content-md-around {\n    -ms-flex-pack: distribute !important;\n        justify-content: space-around !important; }\n  .align-items-md-start {\n    -webkit-box-align: start !important;\n        -ms-flex-align: start !important;\n            align-items: flex-start !important; }\n  .align-items-md-end {\n    -webkit-box-align: end !important;\n        -ms-flex-align: end !important;\n            align-items: flex-end !important; }\n  .align-items-md-center {\n    -webkit-box-align: center !important;\n        -ms-flex-align: center !important;\n            align-items: center !important; }\n  .align-items-md-baseline {\n    -webkit-box-align: baseline !important;\n        -ms-flex-align: baseline !important;\n            align-items: baseline !important; }\n  .align-items-md-stretch {\n    -webkit-box-align: stretch !important;\n        -ms-flex-align: stretch !important;\n            align-items: stretch !important; }\n  .align-content-md-start {\n    -ms-flex-line-pack: start !important;\n        align-content: flex-start !important; }\n  .align-content-md-end {\n    -ms-flex-line-pack: end !important;\n        align-content: flex-end !important; }\n  .align-content-md-center {\n    -ms-flex-line-pack: center !important;\n        align-content: center !important; }\n  .align-content-md-between {\n    -ms-flex-line-pack: justify !important;\n        align-content: space-between !important; }\n  .align-content-md-around {\n    -ms-flex-line-pack: distribute !important;\n        align-content: space-around !important; }\n  .align-content-md-stretch {\n    -ms-flex-line-pack: stretch !important;\n        align-content: stretch !important; }\n  .align-self-md-auto {\n    -ms-flex-item-align: auto !important;\n        -ms-grid-row-align: auto !important;\n        align-self: auto !important; }\n  .align-self-md-start {\n    -ms-flex-item-align: start !important;\n        align-self: flex-start !important; }\n  .align-self-md-end {\n    -ms-flex-item-align: end !important;\n        align-self: flex-end !important; }\n  .align-self-md-center {\n    -ms-flex-item-align: center !important;\n        -ms-grid-row-align: center !important;\n        align-self: center !important; }\n  .align-self-md-baseline {\n    -ms-flex-item-align: baseline !important;\n        align-self: baseline !important; }\n  .align-self-md-stretch {\n    -ms-flex-item-align: stretch !important;\n        -ms-grid-row-align: stretch !important;\n        align-self: stretch !important; } }\n\n@media (min-width: 992px) {\n  .flex-lg-row {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: normal !important;\n        -ms-flex-direction: row !important;\n            flex-direction: row !important; }\n  .flex-lg-column {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: normal !important;\n        -ms-flex-direction: column !important;\n            flex-direction: column !important; }\n  .flex-lg-row-reverse {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: reverse !important;\n        -ms-flex-direction: row-reverse !important;\n            flex-direction: row-reverse !important; }\n  .flex-lg-column-reverse {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: reverse !important;\n        -ms-flex-direction: column-reverse !important;\n            flex-direction: column-reverse !important; }\n  .flex-lg-wrap {\n    -ms-flex-wrap: wrap !important;\n        flex-wrap: wrap !important; }\n  .flex-lg-nowrap {\n    -ms-flex-wrap: nowrap !important;\n        flex-wrap: nowrap !important; }\n  .flex-lg-wrap-reverse {\n    -ms-flex-wrap: wrap-reverse !important;\n        flex-wrap: wrap-reverse !important; }\n  .justify-content-lg-start {\n    -webkit-box-pack: start !important;\n        -ms-flex-pack: start !important;\n            justify-content: flex-start !important; }\n  .justify-content-lg-end {\n    -webkit-box-pack: end !important;\n        -ms-flex-pack: end !important;\n            justify-content: flex-end !important; }\n  .justify-content-lg-center {\n    -webkit-box-pack: center !important;\n        -ms-flex-pack: center !important;\n            justify-content: center !important; }\n  .justify-content-lg-between {\n    -webkit-box-pack: justify !important;\n        -ms-flex-pack: justify !important;\n            justify-content: space-between !important; }\n  .justify-content-lg-around {\n    -ms-flex-pack: distribute !important;\n        justify-content: space-around !important; }\n  .align-items-lg-start {\n    -webkit-box-align: start !important;\n        -ms-flex-align: start !important;\n            align-items: flex-start !important; }\n  .align-items-lg-end {\n    -webkit-box-align: end !important;\n        -ms-flex-align: end !important;\n            align-items: flex-end !important; }\n  .align-items-lg-center {\n    -webkit-box-align: center !important;\n        -ms-flex-align: center !important;\n            align-items: center !important; }\n  .align-items-lg-baseline {\n    -webkit-box-align: baseline !important;\n        -ms-flex-align: baseline !important;\n            align-items: baseline !important; }\n  .align-items-lg-stretch {\n    -webkit-box-align: stretch !important;\n        -ms-flex-align: stretch !important;\n            align-items: stretch !important; }\n  .align-content-lg-start {\n    -ms-flex-line-pack: start !important;\n        align-content: flex-start !important; }\n  .align-content-lg-end {\n    -ms-flex-line-pack: end !important;\n        align-content: flex-end !important; }\n  .align-content-lg-center {\n    -ms-flex-line-pack: center !important;\n        align-content: center !important; }\n  .align-content-lg-between {\n    -ms-flex-line-pack: justify !important;\n        align-content: space-between !important; }\n  .align-content-lg-around {\n    -ms-flex-line-pack: distribute !important;\n        align-content: space-around !important; }\n  .align-content-lg-stretch {\n    -ms-flex-line-pack: stretch !important;\n        align-content: stretch !important; }\n  .align-self-lg-auto {\n    -ms-flex-item-align: auto !important;\n        -ms-grid-row-align: auto !important;\n        align-self: auto !important; }\n  .align-self-lg-start {\n    -ms-flex-item-align: start !important;\n        align-self: flex-start !important; }\n  .align-self-lg-end {\n    -ms-flex-item-align: end !important;\n        align-self: flex-end !important; }\n  .align-self-lg-center {\n    -ms-flex-item-align: center !important;\n        -ms-grid-row-align: center !important;\n        align-self: center !important; }\n  .align-self-lg-baseline {\n    -ms-flex-item-align: baseline !important;\n        align-self: baseline !important; }\n  .align-self-lg-stretch {\n    -ms-flex-item-align: stretch !important;\n        -ms-grid-row-align: stretch !important;\n        align-self: stretch !important; } }\n\n@media (min-width: 1200px) {\n  .flex-xl-row {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: normal !important;\n        -ms-flex-direction: row !important;\n            flex-direction: row !important; }\n  .flex-xl-column {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: normal !important;\n        -ms-flex-direction: column !important;\n            flex-direction: column !important; }\n  .flex-xl-row-reverse {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: reverse !important;\n        -ms-flex-direction: row-reverse !important;\n            flex-direction: row-reverse !important; }\n  .flex-xl-column-reverse {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: reverse !important;\n        -ms-flex-direction: column-reverse !important;\n            flex-direction: column-reverse !important; }\n  .flex-xl-wrap {\n    -ms-flex-wrap: wrap !important;\n        flex-wrap: wrap !important; }\n  .flex-xl-nowrap {\n    -ms-flex-wrap: nowrap !important;\n        flex-wrap: nowrap !important; }\n  .flex-xl-wrap-reverse {\n    -ms-flex-wrap: wrap-reverse !important;\n        flex-wrap: wrap-reverse !important; }\n  .justify-content-xl-start {\n    -webkit-box-pack: start !important;\n        -ms-flex-pack: start !important;\n            justify-content: flex-start !important; }\n  .justify-content-xl-end {\n    -webkit-box-pack: end !important;\n        -ms-flex-pack: end !important;\n            justify-content: flex-end !important; }\n  .justify-content-xl-center {\n    -webkit-box-pack: center !important;\n        -ms-flex-pack: center !important;\n            justify-content: center !important; }\n  .justify-content-xl-between {\n    -webkit-box-pack: justify !important;\n        -ms-flex-pack: justify !important;\n            justify-content: space-between !important; }\n  .justify-content-xl-around {\n    -ms-flex-pack: distribute !important;\n        justify-content: space-around !important; }\n  .align-items-xl-start {\n    -webkit-box-align: start !important;\n        -ms-flex-align: start !important;\n            align-items: flex-start !important; }\n  .align-items-xl-end {\n    -webkit-box-align: end !important;\n        -ms-flex-align: end !important;\n            align-items: flex-end !important; }\n  .align-items-xl-center {\n    -webkit-box-align: center !important;\n        -ms-flex-align: center !important;\n            align-items: center !important; }\n  .align-items-xl-baseline {\n    -webkit-box-align: baseline !important;\n        -ms-flex-align: baseline !important;\n            align-items: baseline !important; }\n  .align-items-xl-stretch {\n    -webkit-box-align: stretch !important;\n        -ms-flex-align: stretch !important;\n            align-items: stretch !important; }\n  .align-content-xl-start {\n    -ms-flex-line-pack: start !important;\n        align-content: flex-start !important; }\n  .align-content-xl-end {\n    -ms-flex-line-pack: end !important;\n        align-content: flex-end !important; }\n  .align-content-xl-center {\n    -ms-flex-line-pack: center !important;\n        align-content: center !important; }\n  .align-content-xl-between {\n    -ms-flex-line-pack: justify !important;\n        align-content: space-between !important; }\n  .align-content-xl-around {\n    -ms-flex-line-pack: distribute !important;\n        align-content: space-around !important; }\n  .align-content-xl-stretch {\n    -ms-flex-line-pack: stretch !important;\n        align-content: stretch !important; }\n  .align-self-xl-auto {\n    -ms-flex-item-align: auto !important;\n        -ms-grid-row-align: auto !important;\n        align-self: auto !important; }\n  .align-self-xl-start {\n    -ms-flex-item-align: start !important;\n        align-self: flex-start !important; }\n  .align-self-xl-end {\n    -ms-flex-item-align: end !important;\n        align-self: flex-end !important; }\n  .align-self-xl-center {\n    -ms-flex-item-align: center !important;\n        -ms-grid-row-align: center !important;\n        align-self: center !important; }\n  .align-self-xl-baseline {\n    -ms-flex-item-align: baseline !important;\n        align-self: baseline !important; }\n  .align-self-xl-stretch {\n    -ms-flex-item-align: stretch !important;\n        -ms-grid-row-align: stretch !important;\n        align-self: stretch !important; } }\n\n.float-left {\n  float: left !important; }\n\n.float-right {\n  float: right !important; }\n\n.float-none {\n  float: none !important; }\n\n@media (min-width: 576px) {\n  .float-sm-left {\n    float: left !important; }\n  .float-sm-right {\n    float: right !important; }\n  .float-sm-none {\n    float: none !important; } }\n\n@media (min-width: 768px) {\n  .float-md-left {\n    float: left !important; }\n  .float-md-right {\n    float: right !important; }\n  .float-md-none {\n    float: none !important; } }\n\n@media (min-width: 992px) {\n  .float-lg-left {\n    float: left !important; }\n  .float-lg-right {\n    float: right !important; }\n  .float-lg-none {\n    float: none !important; } }\n\n@media (min-width: 1200px) {\n  .float-xl-left {\n    float: left !important; }\n  .float-xl-right {\n    float: right !important; }\n  .float-xl-none {\n    float: none !important; } }\n\n.position-static {\n  position: static !important; }\n\n.position-relative {\n  position: relative !important; }\n\n.position-absolute {\n  position: absolute !important; }\n\n.position-fixed {\n  position: fixed !important; }\n\n.position-sticky {\n  position: -webkit-sticky !important;\n  position: sticky !important; }\n\n.fixed-top {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1030; }\n\n.fixed-bottom {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1030; }\n\n@supports ((position: -webkit-sticky) or (position: sticky)) {\n  .sticky-top {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index: 1020; } }\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  -webkit-clip-path: inset(50%);\n          clip-path: inset(50%);\n  border: 0; }\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  overflow: visible;\n  clip: auto;\n  white-space: normal;\n  -webkit-clip-path: none;\n          clip-path: none; }\n\n.w-25 {\n  width: 25% !important; }\n\n.w-33 {\n  width: 33.333% !important; }\n\n.w-50 {\n  width: 50% !important; }\n\n.w-66 {\n  width: 66.666% !important; }\n\n.w-75 {\n  width: 75% !important; }\n\n.w-100 {\n  width: 100% !important; }\n\n.w-auto {\n  width: auto !important; }\n\n.h-25 {\n  height: 25% !important; }\n\n.h-33 {\n  height: 33.333% !important; }\n\n.h-50 {\n  height: 50% !important; }\n\n.h-66 {\n  height: 66.666% !important; }\n\n.h-75 {\n  height: 75% !important; }\n\n.h-100 {\n  height: 100% !important; }\n\n.h-auto {\n  height: auto !important; }\n\n.mw-100 {\n  max-width: 100% !important; }\n\n.mh-100 {\n  max-height: 100% !important; }\n\n.m-0 {\n  margin: 0 !important; }\n\n.mt-0,\n.my-0 {\n  margin-top: 0 !important; }\n\n.mr-0,\n.mx-0 {\n  margin-right: 0 !important; }\n\n.mb-0,\n.my-0 {\n  margin-bottom: 0 !important; }\n\n.ml-0,\n.mx-0 {\n  margin-left: 0 !important; }\n\n.m-1 {\n  margin: 0.25rem !important; }\n\n.mt-1,\n.my-1 {\n  margin-top: 0.25rem !important; }\n\n.mr-1,\n.mx-1 {\n  margin-right: 0.25rem !important; }\n\n.mb-1,\n.my-1 {\n  margin-bottom: 0.25rem !important; }\n\n.ml-1,\n.mx-1 {\n  margin-left: 0.25rem !important; }\n\n.m-2 {\n  margin: 0.5rem !important; }\n\n.mt-2,\n.my-2 {\n  margin-top: 0.5rem !important; }\n\n.mr-2,\n.mx-2 {\n  margin-right: 0.5rem !important; }\n\n.mb-2,\n.my-2 {\n  margin-bottom: 0.5rem !important; }\n\n.ml-2,\n.mx-2 {\n  margin-left: 0.5rem !important; }\n\n.m-3 {\n  margin: 1rem !important; }\n\n.mt-3,\n.my-3 {\n  margin-top: 1rem !important; }\n\n.mr-3,\n.mx-3 {\n  margin-right: 1rem !important; }\n\n.mb-3,\n.my-3 {\n  margin-bottom: 1rem !important; }\n\n.ml-3,\n.mx-3 {\n  margin-left: 1rem !important; }\n\n.m-4 {\n  margin: 1.5rem !important; }\n\n.mt-4,\n.my-4 {\n  margin-top: 1.5rem !important; }\n\n.mr-4,\n.mx-4 {\n  margin-right: 1.5rem !important; }\n\n.mb-4,\n.my-4 {\n  margin-bottom: 1.5rem !important; }\n\n.ml-4,\n.mx-4 {\n  margin-left: 1.5rem !important; }\n\n.m-5 {\n  margin: 3rem !important; }\n\n.mt-5,\n.my-5 {\n  margin-top: 3rem !important; }\n\n.mr-5,\n.mx-5 {\n  margin-right: 3rem !important; }\n\n.mb-5,\n.my-5 {\n  margin-bottom: 3rem !important; }\n\n.ml-5,\n.mx-5 {\n  margin-left: 3rem !important; }\n\n.p-0 {\n  padding: 0 !important; }\n\n.pt-0,\n.py-0 {\n  padding-top: 0 !important; }\n\n.pr-0,\n.px-0 {\n  padding-right: 0 !important; }\n\n.pb-0,\n.py-0 {\n  padding-bottom: 0 !important; }\n\n.pl-0,\n.px-0 {\n  padding-left: 0 !important; }\n\n.p-1 {\n  padding: 0.25rem !important; }\n\n.pt-1,\n.py-1 {\n  padding-top: 0.25rem !important; }\n\n.pr-1,\n.px-1 {\n  padding-right: 0.25rem !important; }\n\n.pb-1,\n.py-1 {\n  padding-bottom: 0.25rem !important; }\n\n.pl-1,\n.px-1 {\n  padding-left: 0.25rem !important; }\n\n.p-2 {\n  padding: 0.5rem !important; }\n\n.pt-2,\n.py-2 {\n  padding-top: 0.5rem !important; }\n\n.pr-2,\n.px-2 {\n  padding-right: 0.5rem !important; }\n\n.pb-2,\n.py-2 {\n  padding-bottom: 0.5rem !important; }\n\n.pl-2,\n.px-2 {\n  padding-left: 0.5rem !important; }\n\n.p-3 {\n  padding: 1rem !important; }\n\n.pt-3,\n.py-3 {\n  padding-top: 1rem !important; }\n\n.pr-3,\n.px-3 {\n  padding-right: 1rem !important; }\n\n.pb-3,\n.py-3 {\n  padding-bottom: 1rem !important; }\n\n.pl-3,\n.px-3 {\n  padding-left: 1rem !important; }\n\n.p-4 {\n  padding: 1.5rem !important; }\n\n.pt-4,\n.py-4 {\n  padding-top: 1.5rem !important; }\n\n.pr-4,\n.px-4 {\n  padding-right: 1.5rem !important; }\n\n.pb-4,\n.py-4 {\n  padding-bottom: 1.5rem !important; }\n\n.pl-4,\n.px-4 {\n  padding-left: 1.5rem !important; }\n\n.p-5 {\n  padding: 3rem !important; }\n\n.pt-5,\n.py-5 {\n  padding-top: 3rem !important; }\n\n.pr-5,\n.px-5 {\n  padding-right: 3rem !important; }\n\n.pb-5,\n.py-5 {\n  padding-bottom: 3rem !important; }\n\n.pl-5,\n.px-5 {\n  padding-left: 3rem !important; }\n\n.m-auto {\n  margin: auto !important; }\n\n.mt-auto,\n.my-auto {\n  margin-top: auto !important; }\n\n.mr-auto,\n.mx-auto {\n  margin-right: auto !important; }\n\n.mb-auto,\n.my-auto {\n  margin-bottom: auto !important; }\n\n.ml-auto,\n.mx-auto {\n  margin-left: auto !important; }\n\n@media (min-width: 576px) {\n  .m-sm-0 {\n    margin: 0 !important; }\n  .mt-sm-0,\n  .my-sm-0 {\n    margin-top: 0 !important; }\n  .mr-sm-0,\n  .mx-sm-0 {\n    margin-right: 0 !important; }\n  .mb-sm-0,\n  .my-sm-0 {\n    margin-bottom: 0 !important; }\n  .ml-sm-0,\n  .mx-sm-0 {\n    margin-left: 0 !important; }\n  .m-sm-1 {\n    margin: 0.25rem !important; }\n  .mt-sm-1,\n  .my-sm-1 {\n    margin-top: 0.25rem !important; }\n  .mr-sm-1,\n  .mx-sm-1 {\n    margin-right: 0.25rem !important; }\n  .mb-sm-1,\n  .my-sm-1 {\n    margin-bottom: 0.25rem !important; }\n  .ml-sm-1,\n  .mx-sm-1 {\n    margin-left: 0.25rem !important; }\n  .m-sm-2 {\n    margin: 0.5rem !important; }\n  .mt-sm-2,\n  .my-sm-2 {\n    margin-top: 0.5rem !important; }\n  .mr-sm-2,\n  .mx-sm-2 {\n    margin-right: 0.5rem !important; }\n  .mb-sm-2,\n  .my-sm-2 {\n    margin-bottom: 0.5rem !important; }\n  .ml-sm-2,\n  .mx-sm-2 {\n    margin-left: 0.5rem !important; }\n  .m-sm-3 {\n    margin: 1rem !important; }\n  .mt-sm-3,\n  .my-sm-3 {\n    margin-top: 1rem !important; }\n  .mr-sm-3,\n  .mx-sm-3 {\n    margin-right: 1rem !important; }\n  .mb-sm-3,\n  .my-sm-3 {\n    margin-bottom: 1rem !important; }\n  .ml-sm-3,\n  .mx-sm-3 {\n    margin-left: 1rem !important; }\n  .m-sm-4 {\n    margin: 1.5rem !important; }\n  .mt-sm-4,\n  .my-sm-4 {\n    margin-top: 1.5rem !important; }\n  .mr-sm-4,\n  .mx-sm-4 {\n    margin-right: 1.5rem !important; }\n  .mb-sm-4,\n  .my-sm-4 {\n    margin-bottom: 1.5rem !important; }\n  .ml-sm-4,\n  .mx-sm-4 {\n    margin-left: 1.5rem !important; }\n  .m-sm-5 {\n    margin: 3rem !important; }\n  .mt-sm-5,\n  .my-sm-5 {\n    margin-top: 3rem !important; }\n  .mr-sm-5,\n  .mx-sm-5 {\n    margin-right: 3rem !important; }\n  .mb-sm-5,\n  .my-sm-5 {\n    margin-bottom: 3rem !important; }\n  .ml-sm-5,\n  .mx-sm-5 {\n    margin-left: 3rem !important; }\n  .p-sm-0 {\n    padding: 0 !important; }\n  .pt-sm-0,\n  .py-sm-0 {\n    padding-top: 0 !important; }\n  .pr-sm-0,\n  .px-sm-0 {\n    padding-right: 0 !important; }\n  .pb-sm-0,\n  .py-sm-0 {\n    padding-bottom: 0 !important; }\n  .pl-sm-0,\n  .px-sm-0 {\n    padding-left: 0 !important; }\n  .p-sm-1 {\n    padding: 0.25rem !important; }\n  .pt-sm-1,\n  .py-sm-1 {\n    padding-top: 0.25rem !important; }\n  .pr-sm-1,\n  .px-sm-1 {\n    padding-right: 0.25rem !important; }\n  .pb-sm-1,\n  .py-sm-1 {\n    padding-bottom: 0.25rem !important; }\n  .pl-sm-1,\n  .px-sm-1 {\n    padding-left: 0.25rem !important; }\n  .p-sm-2 {\n    padding: 0.5rem !important; }\n  .pt-sm-2,\n  .py-sm-2 {\n    padding-top: 0.5rem !important; }\n  .pr-sm-2,\n  .px-sm-2 {\n    padding-right: 0.5rem !important; }\n  .pb-sm-2,\n  .py-sm-2 {\n    padding-bottom: 0.5rem !important; }\n  .pl-sm-2,\n  .px-sm-2 {\n    padding-left: 0.5rem !important; }\n  .p-sm-3 {\n    padding: 1rem !important; }\n  .pt-sm-3,\n  .py-sm-3 {\n    padding-top: 1rem !important; }\n  .pr-sm-3,\n  .px-sm-3 {\n    padding-right: 1rem !important; }\n  .pb-sm-3,\n  .py-sm-3 {\n    padding-bottom: 1rem !important; }\n  .pl-sm-3,\n  .px-sm-3 {\n    padding-left: 1rem !important; }\n  .p-sm-4 {\n    padding: 1.5rem !important; }\n  .pt-sm-4,\n  .py-sm-4 {\n    padding-top: 1.5rem !important; }\n  .pr-sm-4,\n  .px-sm-4 {\n    padding-right: 1.5rem !important; }\n  .pb-sm-4,\n  .py-sm-4 {\n    padding-bottom: 1.5rem !important; }\n  .pl-sm-4,\n  .px-sm-4 {\n    padding-left: 1.5rem !important; }\n  .p-sm-5 {\n    padding: 3rem !important; }\n  .pt-sm-5,\n  .py-sm-5 {\n    padding-top: 3rem !important; }\n  .pr-sm-5,\n  .px-sm-5 {\n    padding-right: 3rem !important; }\n  .pb-sm-5,\n  .py-sm-5 {\n    padding-bottom: 3rem !important; }\n  .pl-sm-5,\n  .px-sm-5 {\n    padding-left: 3rem !important; }\n  .m-sm-auto {\n    margin: auto !important; }\n  .mt-sm-auto,\n  .my-sm-auto {\n    margin-top: auto !important; }\n  .mr-sm-auto,\n  .mx-sm-auto {\n    margin-right: auto !important; }\n  .mb-sm-auto,\n  .my-sm-auto {\n    margin-bottom: auto !important; }\n  .ml-sm-auto,\n  .mx-sm-auto {\n    margin-left: auto !important; } }\n\n@media (min-width: 768px) {\n  .m-md-0 {\n    margin: 0 !important; }\n  .mt-md-0,\n  .my-md-0 {\n    margin-top: 0 !important; }\n  .mr-md-0,\n  .mx-md-0 {\n    margin-right: 0 !important; }\n  .mb-md-0,\n  .my-md-0 {\n    margin-bottom: 0 !important; }\n  .ml-md-0,\n  .mx-md-0 {\n    margin-left: 0 !important; }\n  .m-md-1 {\n    margin: 0.25rem !important; }\n  .mt-md-1,\n  .my-md-1 {\n    margin-top: 0.25rem !important; }\n  .mr-md-1,\n  .mx-md-1 {\n    margin-right: 0.25rem !important; }\n  .mb-md-1,\n  .my-md-1 {\n    margin-bottom: 0.25rem !important; }\n  .ml-md-1,\n  .mx-md-1 {\n    margin-left: 0.25rem !important; }\n  .m-md-2 {\n    margin: 0.5rem !important; }\n  .mt-md-2,\n  .my-md-2 {\n    margin-top: 0.5rem !important; }\n  .mr-md-2,\n  .mx-md-2 {\n    margin-right: 0.5rem !important; }\n  .mb-md-2,\n  .my-md-2 {\n    margin-bottom: 0.5rem !important; }\n  .ml-md-2,\n  .mx-md-2 {\n    margin-left: 0.5rem !important; }\n  .m-md-3 {\n    margin: 1rem !important; }\n  .mt-md-3,\n  .my-md-3 {\n    margin-top: 1rem !important; }\n  .mr-md-3,\n  .mx-md-3 {\n    margin-right: 1rem !important; }\n  .mb-md-3,\n  .my-md-3 {\n    margin-bottom: 1rem !important; }\n  .ml-md-3,\n  .mx-md-3 {\n    margin-left: 1rem !important; }\n  .m-md-4 {\n    margin: 1.5rem !important; }\n  .mt-md-4,\n  .my-md-4 {\n    margin-top: 1.5rem !important; }\n  .mr-md-4,\n  .mx-md-4 {\n    margin-right: 1.5rem !important; }\n  .mb-md-4,\n  .my-md-4 {\n    margin-bottom: 1.5rem !important; }\n  .ml-md-4,\n  .mx-md-4 {\n    margin-left: 1.5rem !important; }\n  .m-md-5 {\n    margin: 3rem !important; }\n  .mt-md-5,\n  .my-md-5 {\n    margin-top: 3rem !important; }\n  .mr-md-5,\n  .mx-md-5 {\n    margin-right: 3rem !important; }\n  .mb-md-5,\n  .my-md-5 {\n    margin-bottom: 3rem !important; }\n  .ml-md-5,\n  .mx-md-5 {\n    margin-left: 3rem !important; }\n  .p-md-0 {\n    padding: 0 !important; }\n  .pt-md-0,\n  .py-md-0 {\n    padding-top: 0 !important; }\n  .pr-md-0,\n  .px-md-0 {\n    padding-right: 0 !important; }\n  .pb-md-0,\n  .py-md-0 {\n    padding-bottom: 0 !important; }\n  .pl-md-0,\n  .px-md-0 {\n    padding-left: 0 !important; }\n  .p-md-1 {\n    padding: 0.25rem !important; }\n  .pt-md-1,\n  .py-md-1 {\n    padding-top: 0.25rem !important; }\n  .pr-md-1,\n  .px-md-1 {\n    padding-right: 0.25rem !important; }\n  .pb-md-1,\n  .py-md-1 {\n    padding-bottom: 0.25rem !important; }\n  .pl-md-1,\n  .px-md-1 {\n    padding-left: 0.25rem !important; }\n  .p-md-2 {\n    padding: 0.5rem !important; }\n  .pt-md-2,\n  .py-md-2 {\n    padding-top: 0.5rem !important; }\n  .pr-md-2,\n  .px-md-2 {\n    padding-right: 0.5rem !important; }\n  .pb-md-2,\n  .py-md-2 {\n    padding-bottom: 0.5rem !important; }\n  .pl-md-2,\n  .px-md-2 {\n    padding-left: 0.5rem !important; }\n  .p-md-3 {\n    padding: 1rem !important; }\n  .pt-md-3,\n  .py-md-3 {\n    padding-top: 1rem !important; }\n  .pr-md-3,\n  .px-md-3 {\n    padding-right: 1rem !important; }\n  .pb-md-3,\n  .py-md-3 {\n    padding-bottom: 1rem !important; }\n  .pl-md-3,\n  .px-md-3 {\n    padding-left: 1rem !important; }\n  .p-md-4 {\n    padding: 1.5rem !important; }\n  .pt-md-4,\n  .py-md-4 {\n    padding-top: 1.5rem !important; }\n  .pr-md-4,\n  .px-md-4 {\n    padding-right: 1.5rem !important; }\n  .pb-md-4,\n  .py-md-4 {\n    padding-bottom: 1.5rem !important; }\n  .pl-md-4,\n  .px-md-4 {\n    padding-left: 1.5rem !important; }\n  .p-md-5 {\n    padding: 3rem !important; }\n  .pt-md-5,\n  .py-md-5 {\n    padding-top: 3rem !important; }\n  .pr-md-5,\n  .px-md-5 {\n    padding-right: 3rem !important; }\n  .pb-md-5,\n  .py-md-5 {\n    padding-bottom: 3rem !important; }\n  .pl-md-5,\n  .px-md-5 {\n    padding-left: 3rem !important; }\n  .m-md-auto {\n    margin: auto !important; }\n  .mt-md-auto,\n  .my-md-auto {\n    margin-top: auto !important; }\n  .mr-md-auto,\n  .mx-md-auto {\n    margin-right: auto !important; }\n  .mb-md-auto,\n  .my-md-auto {\n    margin-bottom: auto !important; }\n  .ml-md-auto,\n  .mx-md-auto {\n    margin-left: auto !important; } }\n\n@media (min-width: 992px) {\n  .m-lg-0 {\n    margin: 0 !important; }\n  .mt-lg-0,\n  .my-lg-0 {\n    margin-top: 0 !important; }\n  .mr-lg-0,\n  .mx-lg-0 {\n    margin-right: 0 !important; }\n  .mb-lg-0,\n  .my-lg-0 {\n    margin-bottom: 0 !important; }\n  .ml-lg-0,\n  .mx-lg-0 {\n    margin-left: 0 !important; }\n  .m-lg-1 {\n    margin: 0.25rem !important; }\n  .mt-lg-1,\n  .my-lg-1 {\n    margin-top: 0.25rem !important; }\n  .mr-lg-1,\n  .mx-lg-1 {\n    margin-right: 0.25rem !important; }\n  .mb-lg-1,\n  .my-lg-1 {\n    margin-bottom: 0.25rem !important; }\n  .ml-lg-1,\n  .mx-lg-1 {\n    margin-left: 0.25rem !important; }\n  .m-lg-2 {\n    margin: 0.5rem !important; }\n  .mt-lg-2,\n  .my-lg-2 {\n    margin-top: 0.5rem !important; }\n  .mr-lg-2,\n  .mx-lg-2 {\n    margin-right: 0.5rem !important; }\n  .mb-lg-2,\n  .my-lg-2 {\n    margin-bottom: 0.5rem !important; }\n  .ml-lg-2,\n  .mx-lg-2 {\n    margin-left: 0.5rem !important; }\n  .m-lg-3 {\n    margin: 1rem !important; }\n  .mt-lg-3,\n  .my-lg-3 {\n    margin-top: 1rem !important; }\n  .mr-lg-3,\n  .mx-lg-3 {\n    margin-right: 1rem !important; }\n  .mb-lg-3,\n  .my-lg-3 {\n    margin-bottom: 1rem !important; }\n  .ml-lg-3,\n  .mx-lg-3 {\n    margin-left: 1rem !important; }\n  .m-lg-4 {\n    margin: 1.5rem !important; }\n  .mt-lg-4,\n  .my-lg-4 {\n    margin-top: 1.5rem !important; }\n  .mr-lg-4,\n  .mx-lg-4 {\n    margin-right: 1.5rem !important; }\n  .mb-lg-4,\n  .my-lg-4 {\n    margin-bottom: 1.5rem !important; }\n  .ml-lg-4,\n  .mx-lg-4 {\n    margin-left: 1.5rem !important; }\n  .m-lg-5 {\n    margin: 3rem !important; }\n  .mt-lg-5,\n  .my-lg-5 {\n    margin-top: 3rem !important; }\n  .mr-lg-5,\n  .mx-lg-5 {\n    margin-right: 3rem !important; }\n  .mb-lg-5,\n  .my-lg-5 {\n    margin-bottom: 3rem !important; }\n  .ml-lg-5,\n  .mx-lg-5 {\n    margin-left: 3rem !important; }\n  .p-lg-0 {\n    padding: 0 !important; }\n  .pt-lg-0,\n  .py-lg-0 {\n    padding-top: 0 !important; }\n  .pr-lg-0,\n  .px-lg-0 {\n    padding-right: 0 !important; }\n  .pb-lg-0,\n  .py-lg-0 {\n    padding-bottom: 0 !important; }\n  .pl-lg-0,\n  .px-lg-0 {\n    padding-left: 0 !important; }\n  .p-lg-1 {\n    padding: 0.25rem !important; }\n  .pt-lg-1,\n  .py-lg-1 {\n    padding-top: 0.25rem !important; }\n  .pr-lg-1,\n  .px-lg-1 {\n    padding-right: 0.25rem !important; }\n  .pb-lg-1,\n  .py-lg-1 {\n    padding-bottom: 0.25rem !important; }\n  .pl-lg-1,\n  .px-lg-1 {\n    padding-left: 0.25rem !important; }\n  .p-lg-2 {\n    padding: 0.5rem !important; }\n  .pt-lg-2,\n  .py-lg-2 {\n    padding-top: 0.5rem !important; }\n  .pr-lg-2,\n  .px-lg-2 {\n    padding-right: 0.5rem !important; }\n  .pb-lg-2,\n  .py-lg-2 {\n    padding-bottom: 0.5rem !important; }\n  .pl-lg-2,\n  .px-lg-2 {\n    padding-left: 0.5rem !important; }\n  .p-lg-3 {\n    padding: 1rem !important; }\n  .pt-lg-3,\n  .py-lg-3 {\n    padding-top: 1rem !important; }\n  .pr-lg-3,\n  .px-lg-3 {\n    padding-right: 1rem !important; }\n  .pb-lg-3,\n  .py-lg-3 {\n    padding-bottom: 1rem !important; }\n  .pl-lg-3,\n  .px-lg-3 {\n    padding-left: 1rem !important; }\n  .p-lg-4 {\n    padding: 1.5rem !important; }\n  .pt-lg-4,\n  .py-lg-4 {\n    padding-top: 1.5rem !important; }\n  .pr-lg-4,\n  .px-lg-4 {\n    padding-right: 1.5rem !important; }\n  .pb-lg-4,\n  .py-lg-4 {\n    padding-bottom: 1.5rem !important; }\n  .pl-lg-4,\n  .px-lg-4 {\n    padding-left: 1.5rem !important; }\n  .p-lg-5 {\n    padding: 3rem !important; }\n  .pt-lg-5,\n  .py-lg-5 {\n    padding-top: 3rem !important; }\n  .pr-lg-5,\n  .px-lg-5 {\n    padding-right: 3rem !important; }\n  .pb-lg-5,\n  .py-lg-5 {\n    padding-bottom: 3rem !important; }\n  .pl-lg-5,\n  .px-lg-5 {\n    padding-left: 3rem !important; }\n  .m-lg-auto {\n    margin: auto !important; }\n  .mt-lg-auto,\n  .my-lg-auto {\n    margin-top: auto !important; }\n  .mr-lg-auto,\n  .mx-lg-auto {\n    margin-right: auto !important; }\n  .mb-lg-auto,\n  .my-lg-auto {\n    margin-bottom: auto !important; }\n  .ml-lg-auto,\n  .mx-lg-auto {\n    margin-left: auto !important; } }\n\n@media (min-width: 1200px) {\n  .m-xl-0 {\n    margin: 0 !important; }\n  .mt-xl-0,\n  .my-xl-0 {\n    margin-top: 0 !important; }\n  .mr-xl-0,\n  .mx-xl-0 {\n    margin-right: 0 !important; }\n  .mb-xl-0,\n  .my-xl-0 {\n    margin-bottom: 0 !important; }\n  .ml-xl-0,\n  .mx-xl-0 {\n    margin-left: 0 !important; }\n  .m-xl-1 {\n    margin: 0.25rem !important; }\n  .mt-xl-1,\n  .my-xl-1 {\n    margin-top: 0.25rem !important; }\n  .mr-xl-1,\n  .mx-xl-1 {\n    margin-right: 0.25rem !important; }\n  .mb-xl-1,\n  .my-xl-1 {\n    margin-bottom: 0.25rem !important; }\n  .ml-xl-1,\n  .mx-xl-1 {\n    margin-left: 0.25rem !important; }\n  .m-xl-2 {\n    margin: 0.5rem !important; }\n  .mt-xl-2,\n  .my-xl-2 {\n    margin-top: 0.5rem !important; }\n  .mr-xl-2,\n  .mx-xl-2 {\n    margin-right: 0.5rem !important; }\n  .mb-xl-2,\n  .my-xl-2 {\n    margin-bottom: 0.5rem !important; }\n  .ml-xl-2,\n  .mx-xl-2 {\n    margin-left: 0.5rem !important; }\n  .m-xl-3 {\n    margin: 1rem !important; }\n  .mt-xl-3,\n  .my-xl-3 {\n    margin-top: 1rem !important; }\n  .mr-xl-3,\n  .mx-xl-3 {\n    margin-right: 1rem !important; }\n  .mb-xl-3,\n  .my-xl-3 {\n    margin-bottom: 1rem !important; }\n  .ml-xl-3,\n  .mx-xl-3 {\n    margin-left: 1rem !important; }\n  .m-xl-4 {\n    margin: 1.5rem !important; }\n  .mt-xl-4,\n  .my-xl-4 {\n    margin-top: 1.5rem !important; }\n  .mr-xl-4,\n  .mx-xl-4 {\n    margin-right: 1.5rem !important; }\n  .mb-xl-4,\n  .my-xl-4 {\n    margin-bottom: 1.5rem !important; }\n  .ml-xl-4,\n  .mx-xl-4 {\n    margin-left: 1.5rem !important; }\n  .m-xl-5 {\n    margin: 3rem !important; }\n  .mt-xl-5,\n  .my-xl-5 {\n    margin-top: 3rem !important; }\n  .mr-xl-5,\n  .mx-xl-5 {\n    margin-right: 3rem !important; }\n  .mb-xl-5,\n  .my-xl-5 {\n    margin-bottom: 3rem !important; }\n  .ml-xl-5,\n  .mx-xl-5 {\n    margin-left: 3rem !important; }\n  .p-xl-0 {\n    padding: 0 !important; }\n  .pt-xl-0,\n  .py-xl-0 {\n    padding-top: 0 !important; }\n  .pr-xl-0,\n  .px-xl-0 {\n    padding-right: 0 !important; }\n  .pb-xl-0,\n  .py-xl-0 {\n    padding-bottom: 0 !important; }\n  .pl-xl-0,\n  .px-xl-0 {\n    padding-left: 0 !important; }\n  .p-xl-1 {\n    padding: 0.25rem !important; }\n  .pt-xl-1,\n  .py-xl-1 {\n    padding-top: 0.25rem !important; }\n  .pr-xl-1,\n  .px-xl-1 {\n    padding-right: 0.25rem !important; }\n  .pb-xl-1,\n  .py-xl-1 {\n    padding-bottom: 0.25rem !important; }\n  .pl-xl-1,\n  .px-xl-1 {\n    padding-left: 0.25rem !important; }\n  .p-xl-2 {\n    padding: 0.5rem !important; }\n  .pt-xl-2,\n  .py-xl-2 {\n    padding-top: 0.5rem !important; }\n  .pr-xl-2,\n  .px-xl-2 {\n    padding-right: 0.5rem !important; }\n  .pb-xl-2,\n  .py-xl-2 {\n    padding-bottom: 0.5rem !important; }\n  .pl-xl-2,\n  .px-xl-2 {\n    padding-left: 0.5rem !important; }\n  .p-xl-3 {\n    padding: 1rem !important; }\n  .pt-xl-3,\n  .py-xl-3 {\n    padding-top: 1rem !important; }\n  .pr-xl-3,\n  .px-xl-3 {\n    padding-right: 1rem !important; }\n  .pb-xl-3,\n  .py-xl-3 {\n    padding-bottom: 1rem !important; }\n  .pl-xl-3,\n  .px-xl-3 {\n    padding-left: 1rem !important; }\n  .p-xl-4 {\n    padding: 1.5rem !important; }\n  .pt-xl-4,\n  .py-xl-4 {\n    padding-top: 1.5rem !important; }\n  .pr-xl-4,\n  .px-xl-4 {\n    padding-right: 1.5rem !important; }\n  .pb-xl-4,\n  .py-xl-4 {\n    padding-bottom: 1.5rem !important; }\n  .pl-xl-4,\n  .px-xl-4 {\n    padding-left: 1.5rem !important; }\n  .p-xl-5 {\n    padding: 3rem !important; }\n  .pt-xl-5,\n  .py-xl-5 {\n    padding-top: 3rem !important; }\n  .pr-xl-5,\n  .px-xl-5 {\n    padding-right: 3rem !important; }\n  .pb-xl-5,\n  .py-xl-5 {\n    padding-bottom: 3rem !important; }\n  .pl-xl-5,\n  .px-xl-5 {\n    padding-left: 3rem !important; }\n  .m-xl-auto {\n    margin: auto !important; }\n  .mt-xl-auto,\n  .my-xl-auto {\n    margin-top: auto !important; }\n  .mr-xl-auto,\n  .mx-xl-auto {\n    margin-right: auto !important; }\n  .mb-xl-auto,\n  .my-xl-auto {\n    margin-bottom: auto !important; }\n  .ml-xl-auto,\n  .mx-xl-auto {\n    margin-left: auto !important; } }\n\n.text-justify {\n  text-align: justify !important; }\n\n.text-nowrap {\n  white-space: nowrap !important; }\n\n.text-truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.text-left {\n  text-align: left !important; }\n\n.text-right {\n  text-align: right !important; }\n\n.text-center {\n  text-align: center !important; }\n\n@media (min-width: 576px) {\n  .text-sm-left {\n    text-align: left !important; }\n  .text-sm-right {\n    text-align: right !important; }\n  .text-sm-center {\n    text-align: center !important; } }\n\n@media (min-width: 768px) {\n  .text-md-left {\n    text-align: left !important; }\n  .text-md-right {\n    text-align: right !important; }\n  .text-md-center {\n    text-align: center !important; } }\n\n@media (min-width: 992px) {\n  .text-lg-left {\n    text-align: left !important; }\n  .text-lg-right {\n    text-align: right !important; }\n  .text-lg-center {\n    text-align: center !important; } }\n\n@media (min-width: 1200px) {\n  .text-xl-left {\n    text-align: left !important; }\n  .text-xl-right {\n    text-align: right !important; }\n  .text-xl-center {\n    text-align: center !important; } }\n\n.text-lowercase {\n  text-transform: lowercase !important; }\n\n.text-uppercase {\n  text-transform: uppercase !important; }\n\n.text-capitalize {\n  text-transform: capitalize !important; }\n\n.font-weight-light {\n  font-weight: 300 !important; }\n\n.font-weight-normal {\n  font-weight: 400 !important; }\n\n.font-weight-bold {\n  font-weight: 700 !important; }\n\n.font-italic {\n  font-style: italic !important; }\n\n.text-white {\n  color: #fff !important; }\n\n.text-primary {\n  color: #2330fc !important; }\n\na.text-primary:focus, a.text-primary:hover {\n  color: #0311e9 !important; }\n\n.text-secondary {\n  color: #868e96 !important; }\n\na.text-secondary:focus, a.text-secondary:hover {\n  color: #6c757d !important; }\n\n.text-success {\n  color: #12ce7b !important; }\n\na.text-success:focus, a.text-success:hover {\n  color: #0e9f5f !important; }\n\n.text-info {\n  color: #008fad !important; }\n\na.text-info:focus, a.text-info:hover {\n  color: #00657a !important; }\n\n.text-warning {\n  color: #ffbc00 !important; }\n\na.text-warning:focus, a.text-warning:hover {\n  color: #cc9600 !important; }\n\n.text-danger {\n  color: #dc3545 !important; }\n\na.text-danger:focus, a.text-danger:hover {\n  color: #bd2130 !important; }\n\n.text-light {\n  color: #f8f9fa !important; }\n\na.text-light:focus, a.text-light:hover {\n  color: #dae0e5 !important; }\n\n.text-dark {\n  color: #343a40 !important; }\n\na.text-dark:focus, a.text-dark:hover {\n  color: #1d2124 !important; }\n\n.text-muted {\n  color: #868e96 !important; }\n\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0; }\n\n.visible {\n  visibility: visible !important; }\n\n.invisible {\n  visibility: hidden !important; }\n\n/*\r\n * Cloned from [class*='uk-icon-'] to extend in other sass files\r\n *\r\n * 1. Needed to prevent inherit font style\r\n */\n.uk-form-icon > [class*='icon-'] {\n  position: absolute;\n  top: 50%;\n  width: 30px;\n  margin-top: -8px;\n  font-size: 14px;\n  color: #999999;\n  text-align: center;\n  pointer-events: none; }\n\n.uk-form-icon-flip > [class*='icon-'] {\n  right: 0; }\n\n.uk-icon,\n[class*='icon-'] {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  display: inline-block;\n  line-height: 1;\n  /* 1 */\n  font-weight: normal;\n  font-style: normal; }\n  .uk-icon.dark-green,\n  [class*='icon-'].dark-green {\n    color: #047b57; }\n  .uk-icon.danger,\n  [class*='icon-'].danger {\n    color: #d7382d !important; }\n  .uk-icon.warning,\n  [class*='icon-'].warning {\n    color: #ffbc00 !important; }\n  .uk-icon.info,\n  [class*='icon-'].info {\n    color: #158fef !important; }\n\n.uk-icon {\n  font-family: FontAwesome; }\n\n[class*='icon-'],\n.uk-icon,\n.uk-icon:hover,\n.uk-icon:focus {\n  text-decoration: none; }\n\n.uk-grid [class*='uk-width-'] > [class*='icon-'],\n.uk-grid [class*='uk-width-'] > [class*='uk-icon-'] {\n  line-height: 25px;\n  top: 0;\n  margin-top: 0; }\n\n.uk-open {\n  background-color: #ebebeb; }\n\n.uk-dropdown {\n  padding-top: 4px;\n  padding-bottom: 4px; }\n  .uk-dropdown ul li {\n    line-height: 25px;\n    padding-left: 15px;\n    margin: 0 2px; }\n    .uk-dropdown ul li:hover {\n      background-color: #158fef;\n      color: white; }\n    .uk-dropdown ul li a {\n      padding: 0; }\n      .uk-dropdown ul li a:hover {\n        background-color: initial; }\n    .uk-dropdown ul li.disabled a {\n      cursor: not-allowed;\n      color: silver; }\n    .uk-dropdown ul li.disabled:hover {\n      background-color: transparent; }\n  .uk-dropdown ul .uk-nav-divider {\n    margin: 5px 0; }\n\n.uk-dropdown.uk-position-absolute {\n  top: 0;\n  left: 0;\n  z-index: 1000000;\n  display: block !important; }\n  .uk-dropdown.uk-position-absolute ul div li {\n    line-height: 25px; }\n    .uk-dropdown.uk-position-absolute ul div li a {\n      color: black;\n      cursor: default; }\n      .uk-dropdown.uk-position-absolute ul div li a:hover {\n        text-decoration: none;\n        color: white; }\n    .uk-dropdown.uk-position-absolute ul div li:hover {\n      background-color: #158fef;\n      color: white; }\n  .uk-dropdown.uk-position-absolute ul div .uk-nav-divider {\n    margin: 5px 0; }\n  .uk-dropdown.uk-position-absolute ul div.disabled li a {\n    color: silver; }\n  .uk-dropdown.uk-position-absolute ul div.disabled li:hover {\n    background-color: transparent; }\n  .uk-dropdown.uk-position-absolute ul div.disabled:hover {\n    background-color: transparent; }\n\n.uk-button-dropdown.uk-open {\n  background: initial; }\n\n.uk-form-horizontal .uk-form-label {\n  width: auto;\n  float: none; }\n\n.uk-form-horizontal .uk-form-controls {\n  margin-left: 0; }\n  .uk-form-horizontal .uk-form-controls.uk-grid-add-margin {\n    margin-left: -25px !important; }\n    @media (min-width: 1220px) {\n      .uk-form-horizontal .uk-form-controls.uk-grid-add-margin {\n        margin-left: -35px !important; } }\n\n.uk-form-horizontal span:not(.multiSelect) span:not(.ag-header-cell-text) {\n  line-height: 10px;\n  margin-top: 5px;\n  display: inline-block; }\n\n.uk-form-horizontal .multiSelect,\n.uk-form-horizontal .multiSelectOutBox {\n  max-height: 25px; }\n\n.uk-form-horizontal .uk-form-row > .uk-form-label {\n  width: 200px;\n  float: left;\n  margin-top: 0;\n  padding-top: 5px;\n  line-height: 15px;\n  font-weight: normal; }\n\n.uk-form-horizontal .uk-form-row > .uk-form-controls {\n  margin-left: 215px; }\n  .uk-form-horizontal .uk-form-row > .uk-form-controls p {\n    line-height: 25px; }\n  .uk-form-horizontal .uk-form-row > .uk-form-controls.uk-height-1-1 > textarea {\n    height: 100%;\n    min-height: 100%; }\n\n.uk-form-horizontal.uk-form-horizontal-small .uk-form-row > .uk-form-label {\n  width: 100px; }\n\n.uk-form-horizontal.uk-form-horizontal-small .uk-form-row > .uk-form-controls {\n  margin-left: 115px; }\n\n.uk-form-horizontal.uk-form-horizontal-medium .uk-form-row > .uk-form-label {\n  width: 150px; }\n\n.uk-form-horizontal.uk-form-horizontal-medium .uk-form-row > .uk-form-controls {\n  margin-left: 165px; }\n\n.uk-form-horizontal.uk-form-height-auto {\n  height: auto; }\n\n.uk-grid-small + .uk-grid-small {\n  margin-top: 4px; }\n\n.uk-form-row {\n  min-height: 25px; }\n  .uk-form-row + .uk-form-row {\n    margin-top: 4px; }\n  .uk-form-row.uk-disabled {\n    opacity: 0.5; }\n    .uk-form-row.uk-disabled input {\n      cursor: not-allowed; }\n\n/* Place input icon to the right size as in datepicker inputs */\n.uk-form-icon i {\n  left: 0; }\n\n.uk-form-icon.position-right-icon input {\n  padding-left: 6px !important;\n  padding-right: 30px; }\n\n.uk-form-icon.position-right-icon i {\n  position: absolute;\n  top: 50%;\n  right: 0;\n  left: auto;\n  margin-top: -7px;\n  cursor: pointer; }\n\n.uk-form-icon.svg {\n  width: 15px;\n  height: 15px;\n  margin: 5px; }\n\n/* All forms inside uk-flex can't be 100% height for firefox compatibility */\n.uk-flex .uk-form {\n  height: auto; }\n\n.uk-panel-space {\n  padding: 20px; }\n  .uk-panel-space.uk-panel-space-medium {\n    padding: 10px; }\n  .uk-panel-space.uk-panel-space-small {\n    padding: 5px; }\n\n/**\r\n * 1. Needed to prevent tabs to collapse to a new line when there's no horizontal room for them\r\n * 2. Needed to prevent inherit color from UIkit\r\n */\n/* $tab-min-width: defines the min-width of the tabs.*/\n/* $height-diff: used to calculate the $tab-vertical-padding.*/\n/* $tab-vertical-padding: defines the padding of the elements inside the uk-tab;\r\n                          defines the padding-bottom of the element when it’s hovered.*/\n/* $tab-margin-top: used to define the top margin */\n.uk-tab {\n  padding-left: 25px;\n  white-space: nowrap;\n  overflow: visible;\n  height: calc(27px + 5px);\n  background-color: #ebebeb; }\n  .uk-tab > li {\n    float: none;\n    background-color: #ebebeb;\n    padding-top: 5px;\n    /* 1 */\n    display: inline-block; }\n    .uk-tab > li + li {\n      margin-left: 5px; }\n    .uk-tab > li > a {\n      color: white;\n      text-shadow: none;\n      background-color: #424242;\n      border-top: 3px solid #424242;\n      margin-left: 0 !important;\n      padding: 3px 12px;\n      min-width: 120px;\n      text-align: center; }\n      .uk-tab > li > a:hover {\n        color: white;\n        /* 2 */\n        background-color: #158fef;\n        border-top-color: #158fef;\n        padding-bottom: 3px !important; }\n    .uk-tab > li.uk-active {\n      background-color: #ebebeb; }\n      .uk-tab > li.uk-active a {\n        color: black;\n        background-color: white;\n        border-top-color: #158fef; }\n  .uk-tab.uk-tab-left > li {\n    padding-top: 0; }\n    .uk-tab.uk-tab-left > li.uk-active {\n      background-color: white; }\n\n.uk-form {\n  position: relative;\n  height: 100%; }\n  .uk-form > .uk-tab {\n    position: absolute;\n    top: 0;\n    right: 0;\n    left: 0;\n    height: calc(27px + 5px);\n    overflow: visible; }\n    .uk-form > .uk-tab li {\n      height: 27px;\n      background-color: #ebebeb;\n      padding-top: 5px; }\n    .uk-form > .uk-tab + * {\n      position: absolute;\n      top: 27px;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      overflow: auto; }\n    .uk-form > .uk-tab.uk-margin-small-top + * {\n      top: 32px; }\n    .uk-form > .uk-tab.uk-margin-top + * {\n      top: 42px; }\n    .uk-form > .uk-tab.uk-margin-large-top + * {\n      top: 77px; }\n\n/* $table-min-row-height: defines the height of the tr elements inside a uk-table.*/\n/* $table-row-padding: defines the padding of the td elements inside the uk-table tr.*/\n.uk-table .uk-row-highlight {\n  background-color: #f8f8f8; }\n\n.uk-table tr {\n  height: 25px; }\n  .uk-table tr.uk-height-auto {\n    height: auto; }\n  .uk-table tr td {\n    padding: 4px; }\n\n.uk-table.left-header {\n  border-right: 1px solid #dddddd;\n  width: 200px;\n  overflow-x: scroll; }\n  .uk-table.left-header tbody {\n    width: 100%;\n    height: 100%;\n    display: table; }\n\n.table-horizontal-wrapper {\n  overflow-x: auto;\n  overflow-y: hidden; }\n\n.uk-table-remove-border {\n  border: 0; }\n  .uk-table-remove-border tr, .uk-table-remove-border td {\n    border: 0; }\n\n.uk-button, .uk-button:disabled, .uk-button:hover, .uk-button:focus, .uk-button:active, .uk-button:visited, .btn, .btn:disabled, .btn:hover, .btn:focus, .btn:active, .btn:visited {\n  min-width: 85px;\n  text-shadow: none !important;\n  border-radius: 3px;\n  background-color: #424242;\n  color: white; }\n  .uk-button-primary.uk-button, .uk-button-primary.btn {\n    background-color: #158fef; }\n\n.uk-button {\n  font-size: 15px; }\n  .uk-button:hover {\n    background-color: #158fef; }\n  .uk-button:active {\n    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5) !important; }\n  .uk-button:disabled {\n    background-color: gray; }\n    .uk-button:disabled:hover {\n      background-color: none; }\n  .uk-button.uk-searcher-button {\n    min-width: 40px;\n    width: 40px;\n    line-height: 100%;\n    min-height: 100%; }\n  .uk-button.uk-button-link {\n    color: #158fef; }\n    .uk-button.uk-button-link, .uk-button.uk-button-link:disabled, .uk-button.uk-button-link:hover, .uk-button.uk-button-link:focus, .uk-button.uk-button-link:active, .uk-button.uk-button-link:visited {\n      text-shadow: none !important;\n      background-color: transparent;\n      border-radius: 0;\n      text-decoration: none; }\n    .uk-button.uk-button-link:hover {\n      background-color: rgba(0, 0, 0, 0.1); }\n  .uk-button.uk-button-medium {\n    padding: 0 20px;\n    line-height: 23px;\n    max-height: 25px;\n    min-height: 0; }\n  .uk-button.uk-button-large {\n    padding: 0 20px;\n    min-height: 34px;\n    line-height: 32px; }\n  .uk-button.square {\n    width: 25px;\n    height: 25px;\n    min-width: 25px;\n    line-height: 1;\n    min-height: 25px;\n    padding: 0; }\n\n.uk-form .uk-input,\n.uk-form input:not([type]),\n.uk-form input[type=\"text\"],\n.uk-form input[type=\"password\"],\n.uk-form input[type=\"datetime\"],\n.uk-form input[type=\"datetime-local\"],\n.uk-form input[type=\"date\"],\n.uk-form input[type=\"month\"],\n.uk-form input[type=\"time\"],\n.uk-form input[type=\"week\"],\n.uk-form input[type=\"number\"],\n.uk-form input[type=\"email\"],\n.uk-form input[type=\"url\"],\n.uk-form input[type=\"search\"],\n.uk-form input[type=\"tel\"],\n.uk-form input[type=\"file\"],\n.uk-form input[type=\"color\"] {\n  border-radius: 3px;\n  height: 25px;\n  border-color: #d6d6d6;\n  font-family: Arial Unicode MS, Arial, sans-serif;\n  /**\r\n   * We should avoid removing the outline without providing an\r\n   * alternative styling. It's all about accessibility\r\n   * Source: http://www.outlinenone.com/\r\n   */ }\n  .uk-form .uk-input:not([class*=\"uk-width-\"]),\n  .uk-form input:not([type]):not([class*=\"uk-width-\"]),\n  .uk-form input[type=\"text\"]:not([class*=\"uk-width-\"]),\n  .uk-form input[type=\"password\"]:not([class*=\"uk-width-\"]),\n  .uk-form input[type=\"datetime\"]:not([class*=\"uk-width-\"]),\n  .uk-form input[type=\"datetime-local\"]:not([class*=\"uk-width-\"]),\n  .uk-form input[type=\"date\"]:not([class*=\"uk-width-\"]),\n  .uk-form input[type=\"month\"]:not([class*=\"uk-width-\"]),\n  .uk-form input[type=\"time\"]:not([class*=\"uk-width-\"]),\n  .uk-form input[type=\"week\"]:not([class*=\"uk-width-\"]),\n  .uk-form input[type=\"number\"]:not([class*=\"uk-width-\"]),\n  .uk-form input[type=\"email\"]:not([class*=\"uk-width-\"]),\n  .uk-form input[type=\"url\"]:not([class*=\"uk-width-\"]),\n  .uk-form input[type=\"search\"]:not([class*=\"uk-width-\"]),\n  .uk-form input[type=\"tel\"]:not([class*=\"uk-width-\"]),\n  .uk-form input[type=\"file\"]:not([class*=\"uk-width-\"]),\n  .uk-form input[type=\"color\"]:not([class*=\"uk-width-\"]) {\n    width: 100%; }\n  .uk-form .uk-input:focus,\n  .uk-form input:not([type]):focus,\n  .uk-form input[type=\"text\"]:focus,\n  .uk-form input[type=\"password\"]:focus,\n  .uk-form input[type=\"datetime\"]:focus,\n  .uk-form input[type=\"datetime-local\"]:focus,\n  .uk-form input[type=\"date\"]:focus,\n  .uk-form input[type=\"month\"]:focus,\n  .uk-form input[type=\"time\"]:focus,\n  .uk-form input[type=\"week\"]:focus,\n  .uk-form input[type=\"number\"]:focus,\n  .uk-form input[type=\"email\"]:focus,\n  .uk-form input[type=\"url\"]:focus,\n  .uk-form input[type=\"search\"]:focus,\n  .uk-form input[type=\"tel\"]:focus,\n  .uk-form input[type=\"file\"]:focus,\n  .uk-form input[type=\"color\"]:focus {\n    outline: 0; }\n  .uk-form .uk-input:disabled,\n  .uk-form input:not([type]):disabled,\n  .uk-form input[type=\"text\"]:disabled,\n  .uk-form input[type=\"password\"]:disabled,\n  .uk-form input[type=\"datetime\"]:disabled,\n  .uk-form input[type=\"datetime-local\"]:disabled,\n  .uk-form input[type=\"date\"]:disabled,\n  .uk-form input[type=\"month\"]:disabled,\n  .uk-form input[type=\"time\"]:disabled,\n  .uk-form input[type=\"week\"]:disabled,\n  .uk-form input[type=\"number\"]:disabled,\n  .uk-form input[type=\"email\"]:disabled,\n  .uk-form input[type=\"url\"]:disabled,\n  .uk-form input[type=\"search\"]:disabled,\n  .uk-form input[type=\"tel\"]:disabled,\n  .uk-form input[type=\"file\"]:disabled,\n  .uk-form input[type=\"color\"]:disabled {\n    background-color: white;\n    cursor: not-allowed; }\n    .uk-form .uk-input:disabled + [class*='icon-'],\n    .uk-form .uk-input:disabled + [class*='uk-icon-'],\n    .uk-form input:not([type]):disabled + [class*='icon-'],\n    .uk-form input:not([type]):disabled + [class*='uk-icon-'],\n    .uk-form input[type=\"text\"]:disabled + [class*='icon-'],\n    .uk-form input[type=\"text\"]:disabled + [class*='uk-icon-'],\n    .uk-form input[type=\"password\"]:disabled + [class*='icon-'],\n    .uk-form input[type=\"password\"]:disabled + [class*='uk-icon-'],\n    .uk-form input[type=\"datetime\"]:disabled + [class*='icon-'],\n    .uk-form input[type=\"datetime\"]:disabled + [class*='uk-icon-'],\n    .uk-form input[type=\"datetime-local\"]:disabled + [class*='icon-'],\n    .uk-form input[type=\"datetime-local\"]:disabled + [class*='uk-icon-'],\n    .uk-form input[type=\"date\"]:disabled + [class*='icon-'],\n    .uk-form input[type=\"date\"]:disabled + [class*='uk-icon-'],\n    .uk-form input[type=\"month\"]:disabled + [class*='icon-'],\n    .uk-form input[type=\"month\"]:disabled + [class*='uk-icon-'],\n    .uk-form input[type=\"time\"]:disabled + [class*='icon-'],\n    .uk-form input[type=\"time\"]:disabled + [class*='uk-icon-'],\n    .uk-form input[type=\"week\"]:disabled + [class*='icon-'],\n    .uk-form input[type=\"week\"]:disabled + [class*='uk-icon-'],\n    .uk-form input[type=\"number\"]:disabled + [class*='icon-'],\n    .uk-form input[type=\"number\"]:disabled + [class*='uk-icon-'],\n    .uk-form input[type=\"email\"]:disabled + [class*='icon-'],\n    .uk-form input[type=\"email\"]:disabled + [class*='uk-icon-'],\n    .uk-form input[type=\"url\"]:disabled + [class*='icon-'],\n    .uk-form input[type=\"url\"]:disabled + [class*='uk-icon-'],\n    .uk-form input[type=\"search\"]:disabled + [class*='icon-'],\n    .uk-form input[type=\"search\"]:disabled + [class*='uk-icon-'],\n    .uk-form input[type=\"tel\"]:disabled + [class*='icon-'],\n    .uk-form input[type=\"tel\"]:disabled + [class*='uk-icon-'],\n    .uk-form input[type=\"file\"]:disabled + [class*='icon-'],\n    .uk-form input[type=\"file\"]:disabled + [class*='uk-icon-'],\n    .uk-form input[type=\"color\"]:disabled + [class*='icon-'],\n    .uk-form input[type=\"color\"]:disabled + [class*='uk-icon-'] {\n      opacity: 0.5; }\n  .uk-form .uk-input::-ms-clear,\n  .uk-form input:not([type])::-ms-clear,\n  .uk-form input[type=\"text\"]::-ms-clear,\n  .uk-form input[type=\"password\"]::-ms-clear,\n  .uk-form input[type=\"datetime\"]::-ms-clear,\n  .uk-form input[type=\"datetime-local\"]::-ms-clear,\n  .uk-form input[type=\"date\"]::-ms-clear,\n  .uk-form input[type=\"month\"]::-ms-clear,\n  .uk-form input[type=\"time\"]::-ms-clear,\n  .uk-form input[type=\"week\"]::-ms-clear,\n  .uk-form input[type=\"number\"]::-ms-clear,\n  .uk-form input[type=\"email\"]::-ms-clear,\n  .uk-form input[type=\"url\"]::-ms-clear,\n  .uk-form input[type=\"search\"]::-ms-clear,\n  .uk-form input[type=\"tel\"]::-ms-clear,\n  .uk-form input[type=\"file\"]::-ms-clear,\n  .uk-form input[type=\"color\"]::-ms-clear {\n    display: none; }\n\n/**\r\n * We need to define the parent's input width when there's an icon and they need to work together\r\n */\n.uk-form-icon:not([class*=\"uk-width-\"]) {\n  width: 100%; }\n\n.uk-form-icon > input {\n  width: 100% !important; }\n\n/**\r\n * We need to replicate the input styling for all the divs with the class uk-input\r\n */\n.uk-form div.uk-input {\n  padding: 4px 6px;\n  border: 1px solid #dddddd;\n  background: white;\n  color: #424242;\n  transition: all linear 0.2s; }\n  .uk-form div.uk-input:focus {\n    border-color: #99baca;\n    background: #f5fbfe;\n    color: #424242; }\n  .uk-form div.uk-input font {\n    line-height: 25px;\n    height: 25px;\n    display: inline-block;\n    position: relative;\n    bottom: 4px; }\n\n/**\r\n * 1 - Button will be always squared\r\n * 2 - Hide the actual input file and place it on top of the button so user can click there\r\n */\n.uk-form .uk-input-file {\n  width: 100%; }\n  .uk-form .uk-input-file > input[type=\"text\"] {\n    width: calc(100% - 25px - 10px); }\n    .uk-form .uk-input-file > input[type=\"text\"] + div.uk-button {\n      width: 25px;\n      height: 25px;\n      /* 1 */\n      min-width: 30px;\n      position: relative;\n      overflow: hidden;\n      float: right; }\n  .uk-form .uk-input-file input[type=\"file\"] {\n    position: absolute;\n    top: 0;\n    right: 0;\n    /* 2 */\n    opacity: 0;\n    filter: alpha(opacity=0);\n    cursor: pointer !important; }\n\n.uk-line-height {\n  line-height: 25px !important; }\n\n.icon-image {\n  height: 1em; }\n  .icon-image.numeric {\n    background-image: url(\"/slt-common/assets/images/icons/numpad.svg\");\n    background-repeat: no-repeat;\n    background-size: contain;\n    background-position: center center;\n    fill: #d2d2d2; }\n\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  /* IE10+ CSS styles go here */\n  input {\n    line-height: 1px !important; } }\n\n@-moz-document url-prefix() {\n  .uk-form .uk-input,\n  .uk-form input:not([type]),\n  .uk-form input[type=\"text\"],\n  .uk-form input[type=\"password\"],\n  .uk-form input[type=\"datetime\"],\n  .uk-form input[type=\"datetime-local\"],\n  .uk-form input[type=\"date\"],\n  .uk-form input[type=\"month\"],\n  .uk-form input[type=\"time\"],\n  .uk-form input[type=\"week\"],\n  .uk-form input[type=\"number\"],\n  .uk-form input[type=\"email\"],\n  .uk-form input[type=\"url\"],\n  .uk-form input[type=\"search\"],\n  .uk-form input[type=\"tel\"],\n  .uk-form input[type=\"file\"],\n  .uk-form input[type=\"color\"] {\n    line-height: 25px;\n    padding-bottom: 3px;\n    padding-top: 1px; } }\n\n/* $textarea-width: defines the width of the textarea inside the uk-form when the uk-width class is not present.*/\n/* $textarea-min-height: defines the min-height of the textarea inside the uk-form.*/\n.uk-form textarea {\n  border-radius: 3px;\n  min-height: 119px; }\n  .uk-form textarea:not([class*=\"uk-width-\"]) {\n    width: 100%; }\n  .uk-form textarea.no-resize {\n    resize: none; }\n  .uk-form textarea.vertical-resize {\n    resize: vertical; }\n  .uk-form textarea.horizontal-resize {\n    resize: horizontal; }\n  .uk-form textarea + .options-overlay {\n    top: 7px;\n    right: 7px;\n    font-size: 1.5em;\n    cursor: pointer;\n    color: #d6d6d6;\n    padding: 3px; }\n    .uk-form textarea + .options-overlay:hover {\n      color: #158fef; }\n\n/* ==========================================================================\n   DIALOG\n   ========================================================================== */\n/**\n * Name: .slab-dialog\n *\n * Displays a Dialog to contain any kind of content. It could be displayed as\n * a full-size screen or using custom width/height properties.\n *\n *\n * Markup:\n *\n *   <div class=\"slab-dialog-overlay\">\n *     <div class=\"slab-dialog\">\n *       <div class=\"slab-dialog-content\">\n *         <div>\n *           <div class=\"slab-dialog-header\">...</div>\n *           <div class=\"slab-dialog-message\">...</div>\n *           <div class=\"slab-dialog-buttons\">...</div>\n *           <div class=\"slab-dialog-close\">...</div>\n *           <div class=\"slab-dialog-buttons-top\">...</div>\n *         </div>\n *       </div>\n *     </div>\n *   </div>\n *\n */\n/* Remove if you do not want fade outs */\n@-webkit-keyframes slab-dialog-fadeout {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@keyframes slab-dialog-fadeout {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@-webkit-keyframes slab-dialog-fadein {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes slab-dialog-fadein {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n/**\n * Displays the full-screen overlay and centers its content (the dialog itself)\n */\n.slab-dialog-overlay {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background-color: rgba(0, 0, 0, 0.4); }\n\n/**\n * 1. Full-screen by default.\n * 2. Preventively hide the 'back' side of a transformed elemenet.\n */\n.slab-dialog {\n  width: 100%;\n  height: 100%;\n  /* [1] */ }\n  .slab-dialog > * {\n    -webkit-backface-visibility: hidden;\n    /* [2] */ }\n\n/**\n * 1. We use !important because it needs to override the default `display:block`\n *    from the dialog component.\n * 2. Is there a better way to target wrappers such as grid-options-dialog{} ?\n * 3. Required to position the top buttons. This could be refactored but then\n *    we'd need to tweak all the dialogs and place top buttons in the header.\n */\n.slab-dialog-content {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box !important;\n  display: -ms-flexbox !important;\n  display: flex !important;\n  /* [1] */\n  border: none;\n  border-radius: 0;\n  background-color: white; }\n  .slab-dialog-content > *:first-child {\n    /* [2] */\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    position: relative;\n    /* [3] */ }\n\n.slab-dialog-header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 45px;\n  padding-left: 20px;\n  font-size: 20px;\n  border-radius: 0;\n  background: #158fef;\n  color: white; }\n\n.slab-dialog-message {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n  background-color: white; }\n\n/**\n * 1. Make sure smaller sizes (such as $size_percentage = 0.7) looks OK.\n */\n.slab-dialog-buttons {\n  padding: 12px;\n  border-top: 1px solid #ebebeb;\n  background-color: #2d2d2d; }\n  .slab-dialog-buttons .square {\n    width: 38px;\n    height: 38px;\n    min-width: 38px;\n    /* [1] */\n    min-height: 38px;\n    /* [1] */\n    line-height: 1;\n    padding: 0; }\n\n.slab-dialog-buttons-top > div,\n.slab-dialog-close {\n  width: 38px;\n  height: 38px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background-color: #0d73c4;\n  cursor: pointer;\n  text-align: center;\n  border-radius: 5px;\n  color: white; }\n  .slab-dialog-buttons-top > div i, .slab-dialog-buttons-top > div:before,\n  .slab-dialog-close i,\n  .slab-dialog-close:before {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: antialiased;\n    color: white;\n    font-size: 23px;\n    font-family: icomoon; }\n  .slab-dialog-buttons-top > div:hover,\n  .slab-dialog-close:hover {\n    background-color: #0a5794; }\n\n/**\n * 1. This could be refactored but then we'd need to tweak all the dialogs and\n *    place top buttons in the header.\n */\n.slab-dialog-close {\n  position: absolute;\n  top: 3.5px;\n  right: 7px;\n  /* [1] */ }\n  .slab-dialog-close:before {\n    content: \"\\F057\";\n    cursor: pointer; }\n\n.slab-dialog-buttons-top {\n  position: absolute;\n  top: 3.5px;\n  right: 51px;\n  width: auto; }\n\n/* Style modifies.\n   ========================================================================== */\n.slab-dialog[class*=\"h-\"], .slab-dialog[class*=\"w-\"], .slab-dialog.slab-dialog-fixed-size {\n  /* [3] */ }\n  .slab-dialog[class*=\"h-\"] .slab-dialog-content, .slab-dialog[class*=\"w-\"] .slab-dialog-content, .slab-dialog.slab-dialog-fixed-size .slab-dialog-content {\n    border: 4px solid rgba(170, 170, 170, 0.8);\n    border-radius: 4px; }\n    .slab-dialog[class*=\"h-\"] .slab-dialog-content .slab-dialog-header, .slab-dialog[class*=\"w-\"] .slab-dialog-content .slab-dialog-header, .slab-dialog.slab-dialog-fixed-size .slab-dialog-content .slab-dialog-header {\n      border-radius: 4px 4px 0 0; }\n    .slab-dialog[class*=\"h-\"] .slab-dialog-content .slab-dialog-buttons, .slab-dialog[class*=\"w-\"] .slab-dialog-content .slab-dialog-buttons, .slab-dialog.slab-dialog-fixed-size .slab-dialog-content .slab-dialog-buttons {\n      border-radius: 0 0 4px 4px;\n      background: white; }\n\n.slab-dialog.w-100 .slab-dialog-content,\n.slab-dialog.w-100 .slab-dialog-header,\n.slab-dialog.w-100 .slab-dialog-buttons, .slab-dialog.h-100 .slab-dialog-content,\n.slab-dialog.h-100 .slab-dialog-header,\n.slab-dialog.h-100 .slab-dialog-buttons {\n  border-radius: 0; }\n\n.slab-dialog.w-100 .slab-dialog-content, .slab-dialog.h-100 .slab-dialog-content {\n  border: none; }\n\n.slab-dialog.w-100 .slab-dialog-buttons, .slab-dialog.h-100 .slab-dialog-buttons {\n  background-color: #2d2d2d; }\n\n/* Animations.\n   ========================================================================== */\n.slab-dialog-flyin {\n  -webkit-animation: slab-dialog-flyin 0.5s;\n          animation: slab-dialog-flyin 0.5s; }\n\n@-webkit-keyframes slab-dialog-flyin {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-40px);\n    transform: translateY(-40px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    transform: translateY(0); } }\n\n@keyframes slab-dialog-flyin {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-40px);\n    transform: translateY(-40px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    transform: translateY(0); } }\n\n.slab-dialog-flyout {\n  -webkit-animation: slab-dialog-flyout 0.5s;\n          animation: slab-dialog-flyout 0.5s; }\n\n@-webkit-keyframes slab-dialog-flyout {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    transform: translateY(0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(-40px);\n    transform: translateY(-40px); } }\n\n@keyframes slab-dialog-flyout {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    transform: translateY(0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(-40px);\n    transform: translateY(-40px); } }\n\n.slab-dialog.slab-dialog-disabled-animation,\n.slab-dialog.slab-dialog-disabled-animation .slab-dialog-content,\n.slab-dialog.slab-dialog-disabled-animation .slab-dialog-overlay {\n  -webkit-animation: none !important;\n  animation: none !important; }\n\n.slab-icon-medium {\n  font-size: 200%;\n  vertical-align: -16%; }\n\n.slab-form-icon {\n  display: inline-block;\n  position: relative;\n  max-width: 100%; }\n  .slab-form-icon > [class*='icon-'] {\n    position: absolute;\n    right: 0;\n    top: 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    height: 25px;\n    width: 30px;\n    font-size: 14px;\n    color: #999999;\n    pointer-events: none; }\n\n.slab-icon,\n[class*='icon-'] {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  display: inline-block;\n  line-height: 1;\n  font-weight: normal;\n  font-style: normal; }\n  .slab-icon.dark-green,\n  [class*='icon-'].dark-green {\n    color: #047b57; }\n  .slab-icon.danger,\n  [class*='icon-'].danger {\n    color: #d7382d !important; }\n  .slab-icon.warning,\n  [class*='icon-'].warning {\n    color: #ffbc00 !important; }\n  .slab-icon.info,\n  [class*='icon-'].info {\n    color: #158fef !important; }\n\n[class*='icon-'],\n.slab-icon,\n.slab-icon:hover,\n.slab-icon:focus {\n  text-decoration: none; }\n\n.dropdown .dropdown-toggle::after, .dropup .dropdown-toggle::after {\n  display: none; }\n\n.slab-button-dropdown {\n  display: inline-block;\n  vertical-align: middle; }\n\n.slab-dropdown-menu {\n  padding: 0;\n  border: 0;\n  min-width: 0px; }\n\n.slab-dropdown {\n  position: fixed;\n  background-color: white;\n  padding: 4px 15px;\n  vertical-align: top;\n  border: 1px solid;\n  border-color: #dddddd;\n  border-radius: 4px; }\n  .slab-dropdown ul {\n    list-style: none;\n    padding: 0px;\n    margin: 0 -15px; }\n    .slab-dropdown ul li {\n      line-height: 25px;\n      padding: 0px 15px;\n      margin: 0 2px; }\n      .slab-dropdown ul li:hover {\n        background-color: #158fef;\n        color: white; }\n      .slab-dropdown ul li a {\n        padding: 0; }\n        .slab-dropdown ul li a:hover {\n          background-color: initial; }\n      .slab-dropdown ul li.disabled a {\n        cursor: not-allowed;\n        color: silver; }\n      .slab-dropdown ul li.disabled:hover {\n        background-color: transparent; }\n      .slab-dropdown ul li .dropdown-divider {\n        margin-left: -15px;\n        margin-right: -15px; }\n\n/**\n * Custom classes to set structural styles to form labels.\n *\n * 1. Same media query as in /modal/dialog/dialog.component.ts line 18.\n */\n.slab-label {\n  line-height: 15px;\n  text-overflow: ellipsis;\n  margin: 0; }\n  @media (max-width: 700px) {\n    .slab-label {\n      /* [1] */\n      display: block;\n      min-width: 100%;\n      margin: 10px 0 5px 0; }\n      .slab-label:not(.col) {\n        padding-left: 15px; } }\n\n.slab-label-115 {\n  max-width: 115px; }\n\n.slab-label-165 {\n  max-width: 165px; }\n\n.slab-label-215 {\n  max-width: 215px; }\n\n.slab-form-title {\n  font-size: 1.1rem;\n  font-weight: bold; }\n\n.slab-progress {\n  /* $progress-bar-size: used to define the border-radius of the slab-progress and the slab-progress-bar.*/\n  border-radius: 8px; }\n  .slab-progress .slab-progress-bar {\n    border-radius: 8px; }\n\n.slab-dialog-header .slab-progress {\n  width: 150px;\n  height: 10px;\n  background-color: #0d73c4;\n  margin-right: 75px; }\n  .slab-dialog-header .slab-progress .slab-progress-bar {\n    max-width: 100%;\n    height: 10px;\n    background-color: white; }\n\n/************** SHARED - start ****************************************************************************************/\n/* $size_percentage: Change the component size */\n/* $form-elements-height: Defines the line height;\n                          in btn-medium” we redefine the line-height and the max-height of the medium size button and the size,\n                            the min-width and the min-height of a square button;\n                          defines the max-height of the multiSelectOutBox and the min-height of the uk-form-row;\n                          defines the line-height of the uk-grid;\n                          used to calculate the width of the input inside a uk-input-file;\n                          to calculate the size of a btn inside a uk-input-file;\n                          defines the line-height of the uk-line-height class;\n                          used to calculate the $top-icon value;\n                          used to calculate the line-height of the label inside the switch class */\n/* $border-radius: Define the border radius for the components;\n                    used for the Box*/\n/* $base-font-size: defines the button font size;\n                    used to calculate the line-height of the span (when it is not in a multiselect);\n                    to calculate the padding-top of the uk-form-label inside the uk-form-row;\n                    to define the line-height of the uk-form-label inside a uk-form-row */\n/* $base-body-font-size: used in the agGrid\n                         used in the comboBox */\n/* $base-body-font-family: defines the application font\n                           defines the font-size of the inputs preceded by a uk-form */\n/************** SHARED - end ******************************************************************************************/\n/*************** RESPONSIVE - start ***********************************************************************************/\n/* $breakpoint-medium: defines the breakpoint of the mediaquery for the width of the slab-dialogs for medium screens */\n/* $breakpoint-large: defines the breakpoint of the mediaquery for the width of the slab-dialogs for large screens;\n                      used in the mediaquery to modify the Login logo */\n/* $breakpoint-xlarge: defines the breakpoint of the mediaquery for the width of the slab-dialogs for xlarge screens;\n                       used to increase the margin-left value of the uk-grid-add-margin class;\n                       used in the mediaquery to modify the Login logo */\n/* $breakpoint-huge: used in the max-width of the mediaqueries to change the slab-dialog-buttons-condensed.\n                     used to expand Cepario footer buttons;\n                     used in the max-width of the mediaqueries to change the slab-dialog-buttons-condensed */\n/* $breakpoint-medium-height: defines the breakpoint of the mediaquery for the height of the slab-dialogs for medium screens */\n/* $breakpoint-large-height: defines the breakpoint of the mediaquery for the height of the slab-dialogs for large screens  */\n/* $breakpoint-xlarge-height: defines the breakpoint of the mediaquery for the height of the slab-dialogs for xlarge screens */\n/* $ipad-width: used as mediaquery checkpoint.*/\n/* ************* RESPONSIVE - end *************************************************************************************/\n/************** MAIN APPLICATION - start ******************************************************************************/\n/* $app-min-width: defines the minimum width of the body */\n/* $app-min-height: defines the minimum height of the body */\n/* $header-height: application header height\n                   used in the sidebar */\n/* $user-width: defines the width of the user area in the main screen*/\n/************** MAIN APPLICATION - end ********************************************************************************/\n/************** BUTTON - start ****************************************************************************************/\n/* $button-large-height: defines the min-height and the line-height of the button when is large */\n/* $slab-dialog-button-width: defines the minimum width of the button */\n/************** BUTTON - end ******************************************************************************************/\n/************** CHARTS - start ****************************************************************************************/\n/* $chart-header-height: defines the height of the chart header;\n                         the height of the dropdown inside the cart;\n                         defines the size of the cell inside the dropdown\n                         used in QC Compare and QC Levey Jennings Charts */\n/************** CHARTS - end ******************************************************************************************/\n/************** CHECKBOX - start **************************************************************************************/\n/* $checkbox-height: used to define the height and the line-height of the input,\n                       the padding left if the input is empty,\n                       the size and the font-size of the input’s before attribute.*/\n/************** CHECKBOX - end ******************************************************************************************/\n/************** DROPDOWN and Tree - start *****************************************************************************/\n/* $dropdown-line-height: defines the row line-height of the dropdown;\n                          defines the row line-height of the tree */\n/************** DROPDOWN - end ****************************************************************************************/\n/************** INPUT - start *****************************************************************************************/\n/* $input-width: defines the width of the input preceded by a uk-form that has not the class uk-width;\n                 defines the width of the slab-form-icon when it has not the class uk-width;\n                 defines the width of the ui-slider when the uk-width class is not present */\n/* $input-height: used to calculate the line-height of the span (when it is not in a multiselect);\n                  to calculate the padding-top of the uk-form-label inside the uk-form-row;\n                  to calculate the line-height of a paragraph inside a uk-form-controls;\n                  defines the height of all the inputs preceded by a uk-form;\n                  defines the line-height and the height of the font inside a uk-input;\n                  defines the height and the line-height of the icon-container;\n                  defines the line-height and the heigth of a select */\n/************** INPUT - end *******************************************************************************************/\n/************** FORMS - start *****************************************************************************************/\n/* $form-row-gutter: defines the margin-top of the uk-grid-small when it’s preceded by other uk-grid-small;\n                     defines the margin-top of the uk-form-row when it’s preceded by other uk-form-row */\n/************** FORMS - end *******************************************************************************************/\n/************** slab-dialog - start **************************************************************************************/\n/* $slab-dialog-header-height: defines the max-height of the slab-dialog-header; */\n/************** slab-dialog - end ****************************************************************************************/\n/************** NGSEARCHER - start ************************************************************************************/\n/* $ng-searcher-button-width: defines the width of the searcher button */\n/************** NGSEARCHER - end **************************************************************************************/\n/************** TABLE - start *****************************************************************************************/\n/* $table-left-header-width: defines the width of the left-header inside a uk-table.*/\n/************** TABLE - end *******************************************************************************************/\n/************** TABS - start ******************************************************************************************/\n/* $tab-height: used to calculate the $height-diff value;\n                defines the height of the tab elements inside a uk-form;\n                defines the height of the li elements inside the previous tab;\n                defines the top position of all elements inside the tab;\n                defines the top value of the uk-margin-small-top, uk-margin-top and uk-margin-large-top.*/\n/* $tab-min-width: defines the min-width of the tabs.*/\n/* $tab-space: used to define the top margin and the gutter between elements */\n/************** TABS - end ******************************************************************************************/\n/************** GRID - start ****************************************************************************************/\n/* $grid-header-height: defines the height of the ui-grid-header-cell;\n                          used to define the size of the grid-action-cell class */\n/* $grid-header-line-height: defines the line-height of the ui-grid-header-cell.\n                               defines the header-line-height of the agGrid */\n/* $grid-cell-height: defines the height and the min-height of the ui-grid-row;\n                        defines the height and the min-height of the ui-grid-cell;\n                        defines the line-height of the ui-grid-cell-contents;\n                        used to calculate the $status-square-right-size value;\n                        defines the line-height of the ui-grid-cell-line-height;\n                        defines the height of the ui-grid-cell-height;\n                        defines the font-size of the uk-text-large;\n                        used to calculate the size of the grid-acion-cell element */\n/* $grid-cell-line-height: defines the line-height of the ui-grid-cell\n                             defines the line-height of the combo-button */\n/************** GRID - end ******************************************************************************************/\n.nav {\n  padding-left: 25px;\n  white-space: nowrap;\n  overflow: visible;\n  background-color: #ebebeb; }\n  .nav > .nav-item {\n    background-color: #ebebeb;\n    padding-top: 10px;\n    margin-right: 5px; }\n    .nav > .nav-item > .nav-link {\n      height: 100%;\n      line-height: 27px;\n      color: white;\n      text-shadow: none;\n      background-color: #424242;\n      border-top: 3px solid #424242;\n      margin-left: 0;\n      padding: 0 12px;\n      min-width: 120px;\n      text-align: center;\n      border-radius: 4px 4px 0 0; }\n      .nav > .nav-item > .nav-link:hover {\n        color: white;\n        background-color: #158fef;\n        border-color: #158fef;\n        padding-bottom: 0; }\n      .nav > .nav-item > .nav-link.active {\n        color: black;\n        background-color: white;\n        border-top-color: #158fef; }\n        .nav > .nav-item > .nav-link.active:hover {\n          border-color: #158fef #dddddd white #dddddd; }\n\n.tab-content {\n  height: 100%; }\n  .tab-content > .active {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    overflow: auto; }\n\n.tab-pane {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.slab-context-menu {\n  cursor: pointer;\n  text-align: center;\n  vertical-align: top;\n  width: 100%;\n  height: 28px;\n  background-color: transparent;\n  line-height: normal; }\n  .slab-context-menu .icon-context-menu {\n    font-size: 20px;\n    padding-top: 4px;\n    color: grey; }\n\n/* $checkbox-text-gap: defines the padding-left of the input.*/\ninput[type=\"checkbox\"]:not(:checked), input[type=\"checkbox\"]:checked {\n  position: absolute;\n  left: -9999px;\n  visibility: hidden; }\n\ninput[type=\"checkbox\"]:not(.slab-checkbox-not-show) + label {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: relative;\n  padding-left: 28.5px;\n  cursor: pointer;\n  font-size: 1rem; }\n  input[type=\"checkbox\"]:not(.slab-checkbox-not-show) + label:empty {\n    padding-left: 19px; }\n  input[type=\"checkbox\"]:not(.slab-checkbox-not-show) + label:before {\n    width: 19px;\n    height: 19px;\n    position: absolute;\n    top: 1px;\n    left: 0;\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n    content: '';\n    z-index: 0;\n    text-align: center;\n    border-radius: 4px;\n    border: solid 1px #d6d6d6;\n    line-height: 1em;\n    color: white;\n    font-weight: bold;\n    font-family: icomoon;\n    font-size: 16px;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale; }\n\ninput[type=\"checkbox\"]:not(.slab-checkbox-not-show):checked + label:before {\n  content: '\\F00D';\n  background-color: #158fef; }\n\ninput[type=\"checkbox\"]:not(.slab-checkbox-not-show):disabled + label {\n  opacity: 0.5;\n  cursor: default; }\n\n/* This styles are used to override the default ag-grid styles (https://www.ag-grid.com).*/\n.ag-fresh .ag-root {\n  border: none;\n  overflow: hidden;\n  font: normal 15px / 19px Arial Unicode MS, Arial, sans-serif; }\n  .ag-fresh .ag-root .ag-header {\n    border-bottom: none; }\n    .ag-fresh .ag-root .ag-header .ag-header-viewport, .ag-fresh .ag-root .ag-header .ag-pinned-left-header {\n      background-color: #959595; }\n      .ag-fresh .ag-root .ag-header .ag-header-viewport .ag-header-container .ag-header-row, .ag-fresh .ag-root .ag-header .ag-pinned-left-header .ag-header-container .ag-header-row {\n        line-height: 18px; }\n        .ag-fresh .ag-root .ag-header .ag-header-viewport .ag-header-container .ag-header-row .ag-header-cell, .ag-fresh .ag-root .ag-header .ag-pinned-left-header .ag-header-container .ag-header-row .ag-header-cell {\n          overflow: hidden;\n          color: white;\n          border-color: white;\n          font-weight: normal;\n          text-align: left;\n          padding: 0px; }\n          .ag-fresh .ag-root .ag-header .ag-header-viewport .ag-header-container .ag-header-row .ag-header-cell .slab-grid-header-context-menu, .ag-fresh .ag-root .ag-header .ag-pinned-left-header .ag-header-container .ag-header-row .ag-header-cell .slab-grid-header-context-menu {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-align: center;\n                -ms-flex-align: center;\n                    align-items: center; }\n            .ag-fresh .ag-root .ag-header .ag-header-viewport .ag-header-container .ag-header-row .ag-header-cell .slab-grid-header-context-menu .slab-context-menu, .ag-fresh .ag-root .ag-header .ag-pinned-left-header .ag-header-container .ag-header-row .ag-header-cell .slab-grid-header-context-menu .slab-context-menu {\n              min-width: 28px;\n              width: 28px; }\n              .ag-fresh .ag-root .ag-header .ag-header-viewport .ag-header-container .ag-header-row .ag-header-cell .slab-grid-header-context-menu .slab-context-menu .icon-context-menu, .ag-fresh .ag-root .ag-header .ag-pinned-left-header .ag-header-container .ag-header-row .ag-header-cell .slab-grid-header-context-menu .slab-context-menu .icon-context-menu {\n                color: white; }\n            .ag-fresh .ag-root .ag-header .ag-header-viewport .ag-header-container .ag-header-row .ag-header-cell .slab-grid-header-context-menu .slab-grid-header-context-menu-label, .ag-fresh .ag-root .ag-header .ag-pinned-left-header .ag-header-container .ag-header-row .ag-header-cell .slab-grid-header-context-menu .slab-grid-header-context-menu-label {\n              padding: 0 5px; }\n          .ag-fresh .ag-root .ag-header .ag-header-viewport .ag-header-container .ag-header-row .ag-header-cell .ag-header-cell-label, .ag-fresh .ag-root .ag-header .ag-pinned-left-header .ag-header-container .ag-header-row .ag-header-cell .ag-header-cell-label {\n            padding: 5px; }\n          .ag-fresh .ag-root .ag-header .ag-header-viewport .ag-header-container .ag-header-row .ag-header-cell .ag-header-cell-resize, .ag-fresh .ag-root .ag-header .ag-pinned-left-header .ag-header-container .ag-header-row .ag-header-cell .ag-header-cell-resize {\n            cursor: ew-resize; }\n    .ag-fresh .ag-root .ag-header .ag-pinned-left-header .ag-header-row {\n      line-height: 18px; }\n      .ag-fresh .ag-root .ag-header .ag-pinned-left-header .ag-header-row .ag-header-cell {\n        overflow: hidden;\n        color: white;\n        border-color: white;\n        font-weight: normal;\n        text-align: left;\n        padding: 0px; }\n        .ag-fresh .ag-root .ag-header .ag-pinned-left-header .ag-header-row .ag-header-cell .slab-grid-header-context-menu {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center; }\n          .ag-fresh .ag-root .ag-header .ag-pinned-left-header .ag-header-row .ag-header-cell .slab-grid-header-context-menu .slab-context-menu {\n            min-width: 28px;\n            width: 28px; }\n            .ag-fresh .ag-root .ag-header .ag-pinned-left-header .ag-header-row .ag-header-cell .slab-grid-header-context-menu .slab-context-menu .icon-context-menu {\n              color: white; }\n          .ag-fresh .ag-root .ag-header .ag-pinned-left-header .ag-header-row .ag-header-cell .slab-grid-header-context-menu .slab-grid-header-context-menu-label {\n            padding: 0 5px; }\n        .ag-fresh .ag-root .ag-header .ag-pinned-left-header .ag-header-row .ag-header-cell .ag-header-cell-label {\n          padding: 5px; }\n        .ag-fresh .ag-root .ag-header .ag-pinned-left-header .ag-header-row .ag-header-cell .ag-header-cell-resize {\n          cursor: ew-resize; }\n  .ag-fresh .ag-root .ag-body .ag-body-viewport .ag-row.ag-row-selected {\n    background-color: #c9dde1; }\n  .ag-fresh .ag-root .ag-body .ag-body-viewport .ag-row.ag-row-odd :not ag-row-selected {\n    background-color: #f3f3f3; }\n  .ag-fresh .ag-root .ag-body .ag-body-viewport .ag-row.ag-row-even :not ag-row-selected {\n    background-color: #fdfdfd; }\n  .ag-fresh .ag-root .ag-body .ag-body-viewport .ag-row .ag-cell {\n    line-height: 28px;\n    border: none;\n    border-right: 1px solid white;\n    padding: 0 5px;\n    outline-width: 0px; }\n    .ag-fresh .ag-root .ag-body .ag-body-viewport .ag-row .ag-cell .slab-checkbox-unchecked {\n      width: 19px;\n      height: 19px;\n      position: absolute;\n      top: 4px;\n      left: 4px;\n      -webkit-backface-visibility: hidden;\n      backface-visibility: hidden;\n      text-align: center;\n      z-index: 0;\n      background-color: white;\n      border-radius: 4px;\n      border: solid 1px #d6d6d6;\n      content: '';\n      font-size: 16px;\n      color: white;\n      box-sizing: border-box;\n      margin-top: -1px !important; }\n    .ag-fresh .ag-root .ag-body .ag-body-viewport .ag-row .ag-cell .slab-checkbox {\n      width: 19px;\n      height: 19px;\n      position: absolute;\n      top: 4px;\n      left: 4px;\n      -webkit-backface-visibility: hidden;\n      backface-visibility: hidden;\n      text-align: center;\n      z-index: 0;\n      background-color: white;\n      border-radius: 4px;\n      border: solid 1px #d6d6d6;\n      content: '';\n      font-size: 16px;\n      color: white;\n      box-sizing: border-box;\n      margin-top: -1px !important; }\n    .ag-fresh .ag-root .ag-body .ag-body-viewport .ag-row .ag-cell .slab-checkbox::before {\n      font-family: \"FontAwesome\" !important;\n      content: '\\F00D';\n      background-color: #158fef;\n      width: 19px;\n      height: 19px;\n      position: absolute;\n      top: 0;\n      left: 0;\n      line-height: 1em;\n      font-size: 16px;\n      color: white;\n      border-radius: 4px;\n      border: solid 1px #158fef; }\n  .ag-fresh .ag-root .ag-body .ag-pinned-left-cols-viewport .ag-row.ag-row-selected {\n    background-color: #c9dde1; }\n  .ag-fresh .ag-root .ag-body .ag-pinned-left-cols-viewport .ag-row.ag-row-odd :not ag-row-selected {\n    background-color: #f3f3f3; }\n  .ag-fresh .ag-root .ag-body .ag-pinned-left-cols-viewport .ag-row.ag-row-even :not ag-row-selected {\n    background-color: #fdfdfd; }\n  .ag-fresh .ag-root .ag-body .ag-pinned-left-cols-viewport .ag-row .ag-cell {\n    line-height: 28px;\n    border: none;\n    border-right: 1px solid white;\n    padding: 0 5px;\n    outline-width: 0px; }\n    .ag-fresh .ag-root .ag-body .ag-pinned-left-cols-viewport .ag-row .ag-cell .slab-checkbox-unchecked {\n      width: 19px;\n      height: 19px;\n      position: absolute;\n      top: 4px;\n      left: 4px;\n      -webkit-backface-visibility: hidden;\n      backface-visibility: hidden;\n      text-align: center;\n      z-index: 0;\n      background-color: white;\n      border-radius: 4px;\n      border: solid 1px #d6d6d6;\n      content: '';\n      font-size: 16px;\n      color: white;\n      box-sizing: border-box;\n      margin-top: -1px !important; }\n    .ag-fresh .ag-root .ag-body .ag-pinned-left-cols-viewport .ag-row .ag-cell .slab-checkbox {\n      width: 19px;\n      height: 19px;\n      position: absolute;\n      top: 4px;\n      left: 4px;\n      -webkit-backface-visibility: hidden;\n      backface-visibility: hidden;\n      text-align: center;\n      z-index: 0;\n      background-color: white;\n      border-radius: 4px;\n      border: solid 1px #d6d6d6;\n      content: '';\n      font-size: 16px;\n      color: white;\n      box-sizing: border-box;\n      margin-top: -1px !important; }\n    .ag-fresh .ag-root .ag-body .ag-pinned-left-cols-viewport .ag-row .ag-cell .slab-checkbox::before {\n      font-family: \"FontAwesome\" !important;\n      content: '\\F00D';\n      background-color: #158fef;\n      width: 19px;\n      height: 19px;\n      position: absolute;\n      top: 0;\n      left: 0;\n      line-height: 1em;\n      font-size: 16px;\n      color: white;\n      border-radius: 4px;\n      border: solid 1px #158fef; }\n\n.height-hidden {\n  display: none;\n  line-height: 28px;\n  height: 31px; }\n\n/* This styles are used to override the default primeng styles for trees (https://www.primefaces.org/primeng/#/tree).*/\n.ui-tree {\n  border: none;\n  width: 100%;\n  line-height: 25px; }\n  .ui-tree .ui-tree-container .ui-treenode .ui-treenode-content {\n    padding-left: 5px; }\n    .ui-tree .ui-tree-container .ui-treenode .ui-treenode-content span[class*='icon-angle-'] {\n      font-weight: bold;\n      line-height: 25px;\n      font-size: 18px;\n      color: gray; }\n    .ui-tree .ui-tree-container .ui-treenode .ui-treenode-content .ui-treenode-label {\n      margin-top: 7px;\n      line-height: 25px; }\n      .ui-tree .ui-tree-container .ui-treenode .ui-treenode-content .ui-treenode-label.ui-state-highlight {\n        background: #a5dde5;\n        border-top: 7px;\n        border-width: 7px;\n        border-style: solid;\n        border-color: #a5dde5;\n        border-bottom: 0px;\n        border-left: 0px;\n        margin-top: 0px;\n        width: 100%;\n        color: #222222; }\n      .ui-tree .ui-tree-container .ui-treenode .ui-treenode-content .ui-treenode-label:hover {\n        background: #a5dde5; }\n    .ui-tree .ui-tree-container .ui-treenode .ui-treenode-content:hover {\n      background-color: #a5dde5; }\n\n/* $status-size: used to define the size in the status-square class;\n                 to define the size of all elements inside the status-square;\n                 to define the line-height of the i elements inside.*/\n.status-square {\n  width: 20px;\n  height: 20px;\n  min-width: 20px;\n  display: inline-block;\n  vertical-align: middle;\n  line-height: 1em;\n  background-color: #a5dde5;\n  border-radius: 3px; }\n  .status-square > * {\n    width: 21px;\n    height: 21px; }\n  .status-square > i {\n    line-height: 20px; }\n  .status-square.status-square-large {\n    padding: 5px; }\n\n.status-bar {\n  height: 20px;\n  display: inline-block;\n  vertical-align: middle; }\n\n.status-bar,\n.status-square {\n  text-align: center; }\n  .status-bar.ko,\n  .status-square.ko {\n    background-color: #d7382d; }\n  .status-bar.ok,\n  .status-square.ok {\n    background-color: #aede33; }\n  .status-bar.finished, .status-bar.tv,\n  .status-square.finished,\n  .status-square.tv {\n    background-color: #28bd23; }\n  .status-bar.warning,\n  .status-square.warning {\n    background-color: #ffbc00; }\n  .status-bar.primary,\n  .status-square.primary {\n    background-color: #2330fc; }\n  .status-bar.pending,\n  .status-square.pending {\n    background-color: #008fad; }\n  .status-bar.tv,\n  .status-square.tv {\n    background-color: #28bd23; }\n  .status-bar.nr,\n  .status-square.nr {\n    background-color: darkgray; }\n  .status-bar.wr,\n  .status-square.wr {\n    background-color: #e8b3ff; }\n  .status-bar.in,\n  .status-square.in {\n    background-color: #d7382d; }\n  .status-bar.fv,\n  .status-square.fv {\n    background-color: #aede33; }\n  .status-bar.pl,\n  .status-square.pl {\n    background-color: #ffd900; }\n  .status-bar.pr,\n  .status-square.pr {\n    background-color: #ffbc00; }\n  .status-bar.partial,\n  .status-square.partial {\n    background-color: #ffff98; }\n\n.bg-primary {\n  background-color: #158fef;\n  color: white; }\n\n.bg-error {\n  background-color: #d7382d;\n  color: white; }\n\n.bg-warning {\n  background-color: #ffbc00;\n  color: white; }\n\n.bg-success {\n  background-color: #12ce7b;\n  color: white; }\n\n.uk-text-error {\n  color: #d7382d; }\n\n.uk-text-warning {\n  color: #ffbc00; }\n\n.uk-text-success {\n  color: #12ce7b; }\n\n.uk-text-success {\n  color: #12ce7b; }\n\n.uk-text-primary {\n  color: #2330fc; }\n\n.uk-text-info {\n  color: #008fad; }\n\n/* $table-min-row-height: defines the height of the tr elements inside a table.*/\n/* $table-row-padding: defines the padding of the td elements inside the table tr.*/\n.table tr {\n  height: 25px; }\n\n.table.left-header {\n  border-right: 1px solid #dddddd;\n  width: 200px;\n  overflow-x: scroll; }\n  .table.left-header tbody {\n    width: 100%;\n    height: 100%;\n    display: table; }\n\n/*\n * This is a custom modifier class extending \n * default Bootstrap functionality\n */\n.table-remove-border {\n  border: 0; }\n  .table-remove-border tr, .table-remove-border th, .table-remove-border td {\n    border: 0; }\n\n.stripe {\n  height: 12px;\n  width: 35px;\n  border: 1px solid silver; }\n  .stripe.critical {\n    background-color: #FF0000; }\n  .stripe.very-urgent {\n    background-color: #FF8C00; }\n  .stripe.urgent {\n    background-color: #FFFF00; }\n  .stripe.standard {\n    background-color: #32CD32; }\n  .stripe.nonurgent {\n    background-color: #4169E1; }\n\n.uk-button, .uk-button:disabled, .uk-button:hover, .uk-button:focus, .uk-button:active, .uk-button:visited, .btn, .btn:disabled, .btn:hover, .btn:focus, .btn:active, .btn:visited {\n  min-width: 85px;\n  text-shadow: none !important;\n  border-radius: 3px;\n  background-color: #424242;\n  border: 1px solid rgba(0, 0, 0, 0.06);\n  padding: 0 12px;\n  min-height: 30px;\n  color: white;\n  cursor: pointer;\n  box-shadow: none; }\n\n/**\n * 1. Override Bootstrap default behavior\n */\n.btn {\n  font-size: 15px; }\n  .btn:hover {\n    background-color: #158fef; }\n  .btn:active {\n    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5) !important; }\n  .btn:disabled {\n    opacity: 1;\n    /* [1] */\n    background-color: gray; }\n    .btn:disabled:hover {\n      background-color: none; }\n  .btn.slab-btn-searcher {\n    min-width: 40px;\n    width: 40px;\n    line-height: 100%;\n    min-height: 100%; }\n  .btn.btn-link {\n    color: #158fef; }\n    .btn.btn-link, .btn.btn-link:disabled, .btn.btn-link:hover, .btn.btn-link:focus, .btn.btn-link:active, .btn.btn-link:visited {\n      text-shadow: none !important;\n      background-color: transparent;\n      border-radius: 0;\n      text-decoration: none; }\n    .btn.btn-link:hover {\n      background-color: rgba(0, 0, 0, 0.1); }\n  .btn.btn-lg, .btn-group-lg > .btn {\n    padding: 0 20px;\n    min-height: 34px;\n    line-height: 32px; }\n  .btn.square {\n    width: 25px;\n    height: 25px;\n    min-width: 25px;\n    line-height: 1;\n    min-height: 25px;\n    padding: 0; }\n  .btn.btn-primary {\n    background-color: #2330fc; }\n    .btn.btn-primary:hover {\n      background-color: #0311e9; }\n  .btn.btn-secondary {\n    background-color: #868e96; }\n    .btn.btn-secondary:hover {\n      background-color: #6c757d; }\n  .btn.btn-success {\n    background-color: #12ce7b; }\n    .btn.btn-success:hover {\n      background-color: #0e9f5f; }\n  .btn.btn-danger {\n    background-color: #dc3545; }\n    .btn.btn-danger:hover {\n      background-color: #bd2130; }\n  .btn.btn-warning {\n    background-color: #ffbc00;\n    color: #424242; }\n    .btn.btn-warning:hover {\n      background-color: #cc9600; }\n  .btn.btn-info {\n    background-color: #008fad; }\n    .btn.btn-info:hover {\n      background-color: #00657a; }\n  .btn.btn-light {\n    background-color: #f8f9fa;\n    color: #424242; }\n    .btn.btn-light:hover {\n      background-color: #dae0e5; }\n  .btn.btn-dark {\n    background-color: #343a40; }\n    .btn.btn-dark:hover {\n      background-color: #1d2124; }\n\n.slab-combobox {\n  width: 100%; }\n  .slab-combobox .slab-combo-button {\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    -o-user-select: none;\n    user-select: none;\n    min-height: 25px;\n    height: 25px;\n    cursor: pointer;\n    font: normal 15px / 19px Arial Unicode MS, Arial, sans-serif;\n    padding: 1px 8px;\n    border-radius: 4px;\n    color: #424242;\n    background-color: white;\n    border: 1px solid #d6d6d6;\n    border-left: none;\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n    width: 32px;\n    margin-top: 0;\n    transition: all linear 0.2s; }\n  .slab-combobox .slab-combo-label {\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    -o-user-select: none;\n    user-select: none; }\n  .slab-combobox .slab-combo-input {\n    cursor: pointer;\n    text-overflow: ellipsis !important;\n    border-right: none !important;\n    border-radius: 3px;\n    border-top-right-radius: 0 !important;\n    border-bottom-right-radius: 0 !important;\n    float: left;\n    width: calc(100% - 32px) !important;\n    min-height: 25px;\n    border: 1px solid #d6d6d6;\n    font-family: Arial Unicode MS, Arial, sans-serif; }\n    .slab-combobox .slab-combo-input.form-control[readonly] {\n      background-color: white; }\n    .slab-combobox .slab-combo-input:focus + .slab-combo-button {\n      border-color: #99baca;\n      background-color: #f5fbfe;\n      color: #2d2d2d;\n      box-shadow: none; }\n  .slab-combobox .slab-color-container {\n    height: 25px;\n    border: solid 1px #d6d6d6;\n    border-bottom-left-radius: 3px;\n    border-top-left-radius: 3px; }\n  .slab-combobox .slab-color-tag {\n    width: 95%;\n    height: 75%;\n    margin: 0 auto;\n    margin-top: 3px;\n    border-radius: 3px;\n    border: 1px solid; }\n  .slab-combobox .slab-combo-caret-down {\n    margin-right: 10px; }\n  .slab-combobox .slab-filter-container {\n    margin-left: 5px;\n    margin-right: 5px;\n    margin-top: 5px;\n    margin-bottom: 3px; }\n    .slab-combobox .slab-filter-container input {\n      padding-left: 5px; }\n  .slab-combobox .slab-combo-dropdown {\n    margin-top: 1px;\n    padding: 0;\n    border: none; }\n    .slab-combobox .slab-combo-dropdown .slab-combo-dropdown-box {\n      position: fixed;\n      z-index: 3;\n      -webkit-transform: translate3d(0, 0, 0);\n      border: 1px solid #d6d6d6;\n      border-radius: 3px;\n      background-color: white; }\n    .slab-combobox .slab-combo-dropdown .slab-checkbox-unchecked {\n      width: 19px;\n      height: 19px;\n      position: absolute;\n      top: 4px;\n      left: 4px;\n      -webkit-backface-visibility: hidden;\n      backface-visibility: hidden;\n      text-align: center;\n      z-index: 0;\n      background-color: white;\n      border-radius: 4px;\n      border: solid 1px #d6d6d6;\n      content: '';\n      font-size: 16px;\n      color: white;\n      box-sizing: border-box;\n      margin-top: -1px !important; }\n    .slab-combobox .slab-combo-dropdown .slab-checkbox {\n      width: 19px;\n      height: 19px;\n      position: absolute;\n      top: 4px;\n      left: 4px;\n      -webkit-backface-visibility: hidden;\n      backface-visibility: hidden;\n      text-align: center;\n      z-index: 0;\n      background-color: white;\n      border-radius: 4px;\n      border: solid 1px #d6d6d6;\n      content: '';\n      font-size: 16px;\n      color: white;\n      box-sizing: border-box;\n      margin-top: -1px !important; }\n    .slab-combobox .slab-combo-dropdown .slab-checkbox::before {\n      font-family: \"FontAwesome\" !important;\n      content: '\\F00D';\n      background-color: #158fef;\n      width: 19px;\n      height: 19px;\n      position: absolute;\n      top: 0;\n      left: 0;\n      line-height: 1em;\n      font-size: 16px;\n      color: white;\n      border-radius: 4px;\n      border: solid 1px #158fef; }\n    .slab-combobox .slab-combo-dropdown .ag-fresh .ag-root {\n      border: none;\n      overflow: hidden; }\n      .slab-combobox .slab-combo-dropdown .ag-fresh .ag-root .ag-body {\n        background-color: white; }\n        .slab-combobox .slab-combo-dropdown .ag-fresh .ag-root .ag-body .ag-body-viewport .ag-row {\n          background-color: white; }\n          .slab-combobox .slab-combo-dropdown .ag-fresh .ag-root .ag-body .ag-body-viewport .ag-row.ag-row-selected {\n            background-color: #c8dffc; }\n          .slab-combobox .slab-combo-dropdown .ag-fresh .ag-root .ag-body .ag-body-viewport .ag-row.ag-row-hover {\n            background-color: #c8dffc; }\n          .slab-combobox .slab-combo-dropdown .ag-fresh .ag-root .ag-body .ag-body-viewport .ag-row .ag-cell {\n            border: none;\n            padding: 0 12px; }\n    .slab-combobox .slab-combo-dropdown.disabled {\n      visibility: hidden; }\n  .slab-combobox.disabled {\n    cursor: not-allowed; }\n    .slab-combobox.disabled .slab-combo-label {\n      opacity: 0.5; }\n    .slab-combobox.disabled .slab-combo-button {\n      cursor: not-allowed; }\n\n/* This styles are used to override the default primeng styles for calendar (https://www.primefaces.org/primeng/#/calendar).*/\n/* $datepicker-header-navigation-line-height: used to define the line-height of the buttons that\n                                                allow to change the year and the month and\n                                                the line-height of the datepicker’s navigation bar.*/\n/* $icon-margin-right: defines the margin-right of the arrow buttons.*/\n/* $icon-margin-left: defines the margin-left of the arrow buttons.*/\np-calendar .ui-calendar {\n  margin-top: 0px !important; }\n  p-calendar .ui-calendar input:focus {\n    box-shadow: none; }\n\np-calendar.input-expand-height input {\n  height: 100% !important; }\n\np-calendar.previous-date input {\n  background-color: #ff332d !important; }\n\np-calendar.previous-date.input-expand-height {\n  height: 100% !important; }\n\np-calendar.previous-date i {\n  color: black !important; }\n\np-calendar.date-error input {\n  color: #ff332d !important;\n  border: 1px solid #ff332d !important; }\n\np-calendar.date-error.input-expand-height {\n  height: 100% !important; }\n\np-calendar.date-error i {\n  color: #ff332d !important; }\n\np-calendar.is-disabled .ui-calendar input {\n  opacity: 1;\n  cursor: not-allowed !important; }\n\np-calendar.is-disabled .ui-calendar.input-expand-height {\n  height: 100% !important; }\n\n.ui-datepicker {\n  z-index: 100000 !important;\n  max-width: 425px;\n  min-width: 420px;\n  border: 1px solid #d6d6d6;\n  margin-top: 5px;\n  border-radius: 0;\n  padding: 0;\n  width: auto;\n  box-shadow: none;\n  /**\n   * 1. Overrides default browser behaviour\n   */ }\n  .ui-datepicker .ui-datepicker-title {\n    line-height: 18px !important; }\n  .ui-datepicker .ui-datepicker-header {\n    background: #158fef;\n    padding: 15px;\n    margin-bottom: 0;\n    line-height: 18px !important;\n    color: white; }\n    .ui-datepicker .ui-datepicker-header .ui-datepicker-prev,\n    .ui-datepicker .ui-datepicker-header .ui-datepicker-next,\n    .ui-datepicker .ui-datepicker-header .ui-datepicker-title {\n      display: none; }\n    .ui-datepicker .ui-datepicker-header p-header {\n      color: white; }\n      .ui-datepicker .ui-datepicker-header p-header .ui-datepicker-title {\n        display: block;\n        margin: 0; }\n      .ui-datepicker .ui-datepicker-header p-header a {\n        color: white; }\n        .ui-datepicker .ui-datepicker-header p-header a:hover {\n          text-decoration: none;\n          background: none;\n          color: white; }\n      .ui-datepicker .ui-datepicker-header p-header .icon-angle-double-left {\n        float: left;\n        margin-left: 10px;\n        line-height: 18px; }\n      .ui-datepicker .ui-datepicker-header p-header .icon-angle-double-right {\n        float: right;\n        margin-right: 10px;\n        line-height: 18px; }\n      .ui-datepicker .ui-datepicker-header p-header .icon-angle-left {\n        float: left;\n        margin-left: 40px;\n        line-height: 18px; }\n      .ui-datepicker .ui-datepicker-header p-header .icon-angle-right {\n        float: right;\n        margin-right: 40px;\n        line-height: 18px; }\n  .ui-datepicker .ui-datepicker-calendar {\n    border-spacing: 0;\n    /* 1 */ }\n    .ui-datepicker .ui-datepicker-calendar thead {\n      background-color: #f8f8f8;\n      border-bottom: 1px solid #ebebeb;\n      line-height: 34px; }\n      .ui-datepicker .ui-datepicker-calendar thead tr th {\n        font-weight: normal;\n        min-width: 60px;\n        max-width: 60px;\n        padding: 0 !important; }\n    .ui-datepicker .ui-datepicker-calendar tbody tr td {\n      padding: 0 !important;\n      border-bottom: 1px solid #ebebeb; }\n      .ui-datepicker .ui-datepicker-calendar tbody tr td a {\n        width: 100%;\n        line-height: 50px;\n        min-width: 60px;\n        max-width: 60px;\n        padding: 0 !important; }\n        .ui-datepicker .ui-datepicker-calendar tbody tr td a:hover, .ui-datepicker .ui-datepicker-calendar tbody tr td a:active {\n          background-color: #d6d6d6;\n          background: #d6d6d6 !important; }\n        .ui-datepicker .ui-datepicker-calendar tbody tr td a.ui-state-highlight {\n          background-color: #a5dde5 !important; }\n        .ui-datepicker .ui-datepicker-calendar tbody tr td a.ui-state-active {\n          background-color: #158fef !important; }\n\n.ui-inputtext {\n  padding-top: 0;\n  padding-bottom: 0;\n  width: 100%; }\n\n.ui-load-datepicker {\n  width: auto;\n  /**\n   * 1. Overrides default browser behaviour\n   */ }\n  .ui-load-datepicker .ui-load-datepicker-title {\n    line-height: 18px !important; }\n  .ui-load-datepicker.input-expand-height {\n    height: 100% !important; }\n    .ui-load-datepicker.input-expand-height input {\n      height: 100% !important; }\n  .ui-load-datepicker .ui-load-datepicker-header {\n    background: #158fef;\n    padding: 15px;\n    margin-bottom: 0;\n    line-height: 18px !important;\n    color: white; }\n    .ui-load-datepicker .ui-load-datepicker-header .ui-load-datepicker-prev,\n    .ui-load-datepicker .ui-load-datepicker-header .ui-load-datepicker-next,\n    .ui-load-datepicker .ui-load-datepicker-header .ui-load-datepicker-title {\n      display: none; }\n    .ui-load-datepicker .ui-load-datepicker-header.p-load-header {\n      color: white; }\n      .ui-load-datepicker .ui-load-datepicker-header.p-load-header .ui-load-datepicker-title {\n        display: block;\n        margin: 0;\n        text-align: center; }\n      .ui-load-datepicker .ui-load-datepicker-header.p-load-header a {\n        color: white; }\n        .ui-load-datepicker .ui-load-datepicker-header.p-load-header a:hover {\n          text-decoration: none;\n          background: none;\n          color: white; }\n      .ui-load-datepicker .ui-load-datepicker-header.p-load-header .icon-angle-double-left {\n        float: left;\n        margin-left: 10px;\n        line-height: 18px; }\n      .ui-load-datepicker .ui-load-datepicker-header.p-load-header .icon-angle-double-right {\n        float: right;\n        margin-right: 10px;\n        line-height: 18px; }\n      .ui-load-datepicker .ui-load-datepicker-header.p-load-header .icon-angle-left {\n        float: left;\n        margin-left: 40px;\n        line-height: 18px; }\n      .ui-load-datepicker .ui-load-datepicker-header.p-load-header .icon-angle-right {\n        float: right;\n        margin-right: 40px;\n        line-height: 18px; }\n  .ui-load-datepicker .ui-load-datepicker-calendar {\n    border-spacing: 0;\n    /* 1 */ }\n    .ui-load-datepicker .ui-load-datepicker-calendar thead {\n      background-color: #f8f8f8;\n      border-bottom: 1px solid #ebebeb;\n      line-height: 34px; }\n      .ui-load-datepicker .ui-load-datepicker-calendar thead tr th {\n        font-weight: normal;\n        min-width: 60px;\n        max-width: 60px;\n        padding: 0 !important; }\n    .ui-load-datepicker .ui-load-datepicker-calendar tbody tr td {\n      padding: 0 !important;\n      border-bottom: 1px solid #ebebeb; }\n      .ui-load-datepicker .ui-load-datepicker-calendar tbody tr td a {\n        display: block;\n        width: 100%;\n        line-height: 50px;\n        min-width: 60px;\n        max-width: 60px;\n        padding: 0 !important;\n        text-align: center;\n        color: #444; }\n        .ui-load-datepicker .ui-load-datepicker-calendar tbody tr td a:hover, .ui-load-datepicker .ui-load-datepicker-calendar tbody tr td a:active {\n          background-color: #d6d6d6;\n          background: #d6d6d6 !important; }\n        .ui-load-datepicker .ui-load-datepicker-calendar tbody tr td a.ui-state-highlight {\n          background-color: #a5dde5 !important; }\n        .ui-load-datepicker .ui-load-datepicker-calendar tbody tr td a.ui-state-active {\n          background-color: #158fef !important; }\n  .ui-load-datepicker.previous-date input {\n    background-color: #ff332d !important; }\n  .ui-load-datepicker.previous-date.input-expand-height {\n    height: 100% !important; }\n  .ui-load-datepicker.previous-date i {\n    color: black !important; }\n  .ui-load-datepicker.date-error input {\n    color: #ff332d !important;\n    border: 1px solid #ff332d !important; }\n  .ui-load-datepicker.date-error.input-expand-height {\n    height: 100% !important; }\n  .ui-load-datepicker.date-error i {\n    color: #ff332d !important; }\n  .ui-load-datepicker.is-disabled .ui-calendar input {\n    opacity: 1;\n    cursor: not-allowed !important; }\n  .ui-load-datepicker.is-disabled .ui-calendar.input-expand-height {\n    height: 100% !important; }\n\nsystelab-datepicker.custom-height p-calendar {\n  height: 100%; }\n  systelab-datepicker.custom-height p-calendar .ui-calendar {\n    height: 100%; }\n  systelab-datepicker.custom-height p-calendar.input-expand-height input {\n    height: 100% !important; }\n\nsystelab-date-time.custom-height p-calendar {\n  height: 100%; }\n  systelab-date-time.custom-height p-calendar .ui-calendar {\n    height: 100%; }\n  systelab-date-time.custom-height p-calendar.input-expand-height input {\n    height: 100% !important; }\n\nsystelab-date-time.custom-height label {\n  margin: auto;\n  margin-left: 1px;\n  margin-right: 1px; }\n\nsystelab-date-time.custom-height systelab-spinner {\n  height: 100%; }\n  systelab-date-time.custom-height systelab-spinner .btn {\n    height: 100% !important; }\n    systelab-date-time.custom-height systelab-spinner .btn button {\n      height: 100% !important; }\n  systelab-date-time.custom-height systelab-spinner .tsinput {\n    height: 100% !important; }\n\nmp-load-date.custom-height {\n  height: 100%; }\n  mp-load-date.custom-height .ui-calendar {\n    height: 100%; }\n  mp-load-date.custom-height.input-expand-height input {\n    height: 100% !important; }\n  mp-load-date.custom-height label {\n    margin: auto;\n    margin-left: 1px;\n    margin-right: 1px; }\n\nsystelab-date.custom-height p-calendar {\n  height: 100%; }\n  systelab-date.custom-height p-calendar .ui-calendar {\n    height: 100%; }\n  systelab-date.custom-height p-calendar.input-expand-height input {\n    height: 100% !important; }\n\n/**\n * 1. Override Bootstrap default behavior\n */\np-calendar .ui-calendar input, .slab-input.form-control,\ninput.form-control {\n  height: 25px;\n  border-color: #d6d6d6;\n  border-radius: 3px;\n  font-family: Arial Unicode MS, Arial, sans-serif;\n  padding: 4px 6px; }\n  p-calendar .ui-calendar input:focus, .slab-input.form-control:focus,\n  input.form-control:focus {\n    border-color: #99baca;\n    /* [1] */\n    background-color: #f5fbfe;\n    /* [1] */\n    color: #2d2d2d;\n    /* [1] */\n    box-shadow: none;\n    /* [1] */ }\n\n.slab-input:disabled,\ninput:disabled {\n  color: #dddddd;\n  border-color: #dddddd;\n  background-color: white;\n  cursor: not-allowed; }\n  .slab-input:disabled::-webkit-input-placeholder,\n  input:disabled::-webkit-input-placeholder {\n    /* WebKit browsers */\n    color: #dddddd; }\n  .slab-input:disabled:-moz-placeholder,\n  input:disabled:-moz-placeholder {\n    /* Mozilla Firefox 4 to 18 */\n    color: #dddddd; }\n  .slab-input:disabled::-moz-placeholder,\n  input:disabled::-moz-placeholder {\n    /* Mozilla Firefox 19+ */\n    color: #dddddd; }\n  .slab-input:disabled:-ms-input-placeholder,\n  input:disabled:-ms-input-placeholder {\n    /* Internet Explorer 10+ */\n    color: #dddddd; }\n\n.disabled label {\n  color: darkgray; }\n\n/**\n * We need to replicate the input styling for all the divs with the class slab-input\n */\n.slab-input {\n  padding: 4px 6px;\n  border: 1px solid #dddddd;\n  background: white;\n  color: #424242;\n  transition: all linear 0.2s; }\n  .slab-input:focus {\n    border-color: #99baca;\n    background: #f5fbfe;\n    color: #424242; }\n  .slab-input font {\n    line-height: 25px;\n    height: 25px;\n    display: inline-block;\n    position: relative;\n    bottom: 4px; }\n\n/**\n * 1 - Button will be always squared\n * 2 - Hide the actual input file and place it on top of the button so user can click there\n */\n.slab-input-file {\n  width: 100%; }\n  .slab-input-file > input[type=\"text\"] {\n    width: calc(100% - 25px - 10px);\n    display: inline-block; }\n    .slab-input-file > input[type=\"text\"] + div.btn {\n      width: 25px;\n      height: 25px;\n      /* 1 */\n      min-width: 25px;\n      min-height: 25px;\n      padding: 0px 5px;\n      position: relative;\n      overflow: hidden;\n      float: right; }\n  .slab-input-file input[type=\"file\"] {\n    width: 25px;\n    height: 25px;\n    position: absolute;\n    top: -2px;\n    right: -1px;\n    /* 2 */\n    opacity: 0;\n    filter: alpha(opacity=0);\n    cursor: pointer !important; }\n\n/* $radio-height: used to calculate the $top-icon variable value;\n                  to define the height and the line-height of the input;\n                  used to define the size of the input before class;\n                  used to define the padding-left of the input empty class.*/\n/* $radio-text-gap: defines the padding-left of the input.*/\n/* $top-icon: defines the padding-top of the input;\n              used to define the top position of the input before class.*/\ninput[type=\"radio\"]:not(:checked), input[type=\"radio\"]:checked {\n  position: absolute;\n  left: -9999px;\n  visibility: hidden; }\n\ninput[type=\"radio\"] + label {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n  position: relative;\n  padding-left: 28.5px;\n  cursor: pointer;\n  display: inline-block;\n  height: 19px;\n  line-height: 19px;\n  font-size: 1rem;\n  padding-top: 3px; }\n  input[type=\"radio\"] + label:empty {\n    padding-left: 19px; }\n  input[type=\"radio\"] + label:before {\n    width: 19px;\n    height: 19px;\n    position: absolute;\n    top: 3px;\n    left: 0;\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n    content: '';\n    z-index: 0;\n    border: solid 2.375px #d6d6d6;\n    border-radius: 50%;\n    box-sizing: border-box;\n    background-color: white; }\n\ninput[type=\"radio\"]:checked + label:before {\n  border: solid 6.33333333px #158fef; }\n\ninput[type=\"radio\"]:disabled + label {\n  opacity: 0.5;\n  cursor: default; }\n\n/* $slab-slider-height: used to calculate the $slab-slider-background-line variable;\n                   used to define the size;\n                   used to calculate the margin top;\n                   used to define the margin-left of the ui-slider-handle.*/\n/* $slab-slider-background-line: defines the height of the ui-slider;\n                     to calculate the margin-top and the margin-bottom of the ui-slider;\n                     to calculate the margin-top value of the ui-slider-handle.*/\n.ui-slider {\n  height: 8px;\n  margin-top: 8.5px;\n  margin-bottom: 8.5px;\n  box-shadow: none; }\n  .ui-slider:not([class*=\"w-\"]) {\n    width: 100%; }\n  .ui-slider .ui-slider-handle {\n    width: 25px !important;\n    height: 25px !important;\n    background-color: white;\n    border-radius: 50%;\n    border: 6px solid #158fef;\n    cursor: pointer;\n    top: 0 !important;\n    margin-top: -9.5px !important;\n    margin-left: -12.5px;\n    background-image: none; }\n  .ui-slider.ui-corner-all, .ui-slider.ui-corner-top, .ui-slider.ui-corner-right, .ui-slider.ui-corner-tr {\n    border-radius: 10px;\n    background-color: silver; }\n\n/* $slab-textarea-width: defines the width of the textarea when the w-* class is not present.*/\n/* $slab-textarea-min-height: defines the min-height of the textarea.*/\n.slab-textarea {\n  display: block;\n  border-radius: 3px;\n  min-height: 119px;\n  border: 1px solid #dddddd; }\n  .slab-textarea:not([class*=\"w-\"]) {\n    width: 100%; }\n  .slab-textarea.slab-textarea-no-resize {\n    resize: none; }\n  .slab-textarea.slab-textarea-vertical-resize {\n    resize: vertical; }\n  .slab-textarea.slab-textarea-horizontal-resize {\n    resize: horizontal; }\n  .slab-textarea + .slab-textarea-options-overlay {\n    top: 7px;\n    right: 7px;\n    font-size: 1.5em;\n    cursor: pointer;\n    color: #d6d6d6;\n    padding: 3px; }\n    .slab-textarea + .slab-textarea-options-overlay:hover {\n      color: #158fef; }\n\n.slab-searcher-container input {\n  height: 100% !important;\n  width: 100px; }\n\n.slab-searcher-container button {\n  padding: 0px;\n  border: none;\n  cursor: pointer;\n  margin-left: -5px;\n  border-bottom-left-radius: 0px;\n  border-top-left-radius: 0px;\n  border-bottom-right-radius: 3px;\n  border-top-right-radius: 3px; }\n\n.slab-searcher-container:hover {\n  border-bottom-left-radius: 0px !important;\n  border-top-left-radius: 0px !important;\n  border-bottom-right-radius: 3px;\n  border-top-right-radius: 3px; }\n\n.slab-searcher-container label {\n  margin-left: 5px; }\n\nhtml {\n  width: 100%;\n  font: normal 15px / 19px Arial Unicode MS, Arial, sans-serif;\n  color: #424242; }\n  html body:not(.is-login) {\n    min-width: 367px;\n    min-height: 375px; }\n  html input,\n  html button,\n  html a,\n  html a:focus {\n    outline: 0 !important; }\n\n.slab-flex-1 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n\nbody {\n  background-color: white; }\n\ninput, button, a {\n  outline: none; }\n\n.li {\n  color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/showcase/showcase.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowcaseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_systelab_preferences_lib_preferences_service__ = __webpack_require__("../../../../systelab-preferences/lib/preferences.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_systelab_preferences_lib_preferences_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_systelab_preferences_lib_preferences_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_systelab_translate_lib_i18n_service__ = __webpack_require__("../../../../systelab-translate/lib/i18n.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_systelab_translate_lib_i18n_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_systelab_translate_lib_i18n_service__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShowcaseComponent = (function () {
    function ShowcaseComponent(preferencesService, languageService) {
        this.preferencesService = preferencesService;
        this.languageService = languageService;
        this.currentTab = 1;
        languageService.use('en_US')
            .subscribe(function () {
            console.log(languageService.getCurrentLanguage());
        });
    }
    ShowcaseComponent.prototype.selectTab = function (tabNum) {
        this.currentTab = tabNum;
    };
    ShowcaseComponent.prototype.closeDialog = function () {
    };
    return ShowcaseComponent;
}());
ShowcaseComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/showcase/showcase.component.html"),
        styles: [__webpack_require__("../../../../../src/app/showcase/showcase.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_systelab_preferences_lib_preferences_service__["PreferencesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_systelab_preferences_lib_preferences_service__["PreferencesService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_systelab_translate_lib_i18n_service__["I18nService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_systelab_translate_lib_i18n_service__["I18nService"]) === "function" && _b || Object])
], ShowcaseComponent);

var _a, _b;
//# sourceMappingURL=showcase.component.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/showcase.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowcaseModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__showcase_component__ = __webpack_require__("../../../../../src/app/showcase/showcase.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__systelab_components_systelab_components_module__ = __webpack_require__("../../../../../src/app/systelab-components/systelab-components.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__systelab_components_modal_dialog_dialog_service__ = __webpack_require__("../../../../../src/app/systelab-components/modal/dialog/dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__systelab_components_modal_message_popup_message_popup_service__ = __webpack_require__("../../../../../src/app/systelab-components/modal/message-popup/message-popup.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_systelab_translate__ = __webpack_require__("../../../../systelab-translate/lib/systelab-translate.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_systelab_translate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_systelab_translate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_systelab_preferences__ = __webpack_require__("../../../../systelab-preferences/lib/systelab-preferences.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_systelab_preferences___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_systelab_preferences__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_dialog_split_showcase_split_dialog_component__ = __webpack_require__("../../../../../src/app/showcase/components/dialog/split/showcase-split-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_dialog_two_tabs_showcase_two_tabs_component__ = __webpack_require__("../../../../../src/app/showcase/components/dialog/two-tabs/showcase-two-tabs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_dialog_lower_flex_showcase_lower_flex_component__ = __webpack_require__("../../../../../src/app/showcase/components/dialog/lower-flex/showcase-lower-flex.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_dialog_two_columns_showcase_two_columns_component__ = __webpack_require__("../../../../../src/app/showcase/components/dialog/two-columns/showcase-two-columns.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_dialog_full_flex_showcase_full_flex_component__ = __webpack_require__("../../../../../src/app/showcase/components/dialog/full-flex/showcase-full-flex.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_dialog_two_tabs_showcase_two_tabs_dialog_component__ = __webpack_require__("../../../../../src/app/showcase/components/dialog/two-tabs/showcase-two-tabs-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_dialog_lower_flex_showcase_lower_flex_dialog_component__ = __webpack_require__("../../../../../src/app/showcase/components/dialog/lower-flex/showcase-lower-flex-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_dialog_two_columns_showcase_two_columns_dialog_component__ = __webpack_require__("../../../../../src/app/showcase/components/dialog/two-columns/showcase-two-columns-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_dialog_full_flex_showcase_full_flex_dialog_component__ = __webpack_require__("../../../../../src/app/showcase/components/dialog/full-flex/showcase-full-flex-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_sample_route_sample_route_component__ = __webpack_require__("../../../../../src/app/showcase/components/sample-route/sample-route.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_dialog_progressbar_dialog_showcase_progressbar_dialog_component__ = __webpack_require__("../../../../../src/app/showcase/components/dialog/progressbar-dialog/showcase-progressbar-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_dialog_showcase_dialog_component__ = __webpack_require__("../../../../../src/app/showcase/components/dialog/showcase-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_dialog_standard_dialog_showcase_standard_dialog_component__ = __webpack_require__("../../../../../src/app/showcase/components/dialog/standard-dialog/showcase-standard-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_dialog_standard_dialog_showcase_standard_component__ = __webpack_require__("../../../../../src/app/showcase/components/dialog/standard-dialog/showcase-standard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_spinner_showcase_spinner_component__ = __webpack_require__("../../../../../src/app/showcase/components/spinner/showcase-spinner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_showcase_components_component__ = __webpack_require__("../../../../../src/app/showcase/components/showcase-components.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_checkbox_showcase_checkbox_component__ = __webpack_require__("../../../../../src/app/showcase/components/checkbox/showcase-checkbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_radio_showcase_radio_component__ = __webpack_require__("../../../../../src/app/showcase/components/radio/showcase-radio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_tooltip_showcase_tooltip_component__ = __webpack_require__("../../../../../src/app/showcase/components/tooltip/showcase-tooltip.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_slider_showcase_slider_component__ = __webpack_require__("../../../../../src/app/showcase/components/slider/showcase-slider.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_textarea_showcase_textarea_component__ = __webpack_require__("../../../../../src/app/showcase/components/textarea/showcase-textarea.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_datepicker_showcase_datepicker_component__ = __webpack_require__("../../../../../src/app/showcase/components/datepicker/showcase-datepicker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_combobox_showcase_combobox_component__ = __webpack_require__("../../../../../src/app/showcase/components/combobox/showcase-combobox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_input_showcase_input_component__ = __webpack_require__("../../../../../src/app/showcase/components/input/showcase-input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_table_showcase_table_component__ = __webpack_require__("../../../../../src/app/showcase/components/table/showcase-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_grid_showcase_grid_component__ = __webpack_require__("../../../../../src/app/showcase/components/grid/showcase-grid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_grid_showcase_inner_grid_component__ = __webpack_require__("../../../../../src/app/showcase/components/grid/showcase-inner-grid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_icon_showcase_icon_component__ = __webpack_require__("../../../../../src/app/showcase/components/icon/showcase-icon.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__components_two_list_showcase_two_list_component__ = __webpack_require__("../../../../../src/app/showcase/components/two-list/showcase-two-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__components_application_frame_showcase_application_frame_component__ = __webpack_require__("../../../../../src/app/showcase/components/application-frame/showcase-application-frame.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__components_application_frame_application_frame_dialog_showcase_application_frame_dialog_component__ = __webpack_require__("../../../../../src/app/showcase/components/application-frame/application-frame-dialog/showcase-application-frame-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__components_pie_showcase_pie_component__ = __webpack_require__("../../../../../src/app/showcase/components/pie/showcase-pie.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__components_message_popup_showcase_message_popup_component__ = __webpack_require__("../../../../../src/app/showcase/components/message-popup/showcase-message-popup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__components_showcase_title_component__ = __webpack_require__("../../../../../src/app/showcase/components/showcase-title.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__components_progress_bars_showcase_progress_bar_component__ = __webpack_require__("../../../../../src/app/showcase/components/progress-bars/showcase-progress-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__components_button_showcase_button_component__ = __webpack_require__("../../../../../src/app/showcase/components/button/showcase-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__components_headings_showcase_headings_component__ = __webpack_require__("../../../../../src/app/showcase/components/headings/showcase-headings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__components_alert_showcase_alert_component__ = __webpack_require__("../../../../../src/app/showcase/components/alert/showcase-alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__components_text_showcase_text_component__ = __webpack_require__("../../../../../src/app/showcase/components/text/showcase-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__components_tabs_showcase_tabs_component__ = __webpack_require__("../../../../../src/app/showcase/components/tabs/showcase-tabs.component.ts");
/* unused harmony reexport ShowcaseComponent */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















































var ShowcaseModule = (function () {
    function ShowcaseModule() {
    }
    return ShowcaseModule;
}());
ShowcaseModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_20__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["HttpClientModule"],
            __WEBPACK_IMPORTED_MODULE_3__systelab_components_systelab_components_module__["a" /* SystelabComponentsModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7_systelab_translate__["SystelabTranslateModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_8_systelab_preferences__["SystelabPreferencesModule"].forRoot()
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__showcase_component__["a" /* ShowcaseComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_dialog_two_tabs_showcase_two_tabs_component__["a" /* ShowcaseTwoTabsComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_dialog_lower_flex_showcase_lower_flex_component__["a" /* ShowcaseLowerFlexComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_dialog_two_columns_showcase_two_columns_component__["a" /* ShowcaseTwoColumnsComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_dialog_full_flex_showcase_full_flex_component__["a" /* ShowcaseFullFlexComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_dialog_showcase_dialog_component__["a" /* ShowcaseDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_showcase_components_component__["a" /* ShowcaseComponentsComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_spinner_showcase_spinner_component__["a" /* ShowcaseSpinnerComponent */],
            __WEBPACK_IMPORTED_MODULE_27__components_checkbox_showcase_checkbox_component__["a" /* ShowcaseCheckboxComponent */],
            __WEBPACK_IMPORTED_MODULE_28__components_radio_showcase_radio_component__["a" /* ShowcaseRadioComponent */],
            __WEBPACK_IMPORTED_MODULE_30__components_slider_showcase_slider_component__["a" /* ShowcaseSliderComponent */],
            __WEBPACK_IMPORTED_MODULE_29__components_tooltip_showcase_tooltip_component__["a" /* ShowcaseTooltipComponent */],
            __WEBPACK_IMPORTED_MODULE_34__components_input_showcase_input_component__["a" /* ShowcaseInputComponent */],
            __WEBPACK_IMPORTED_MODULE_46__components_button_showcase_button_component__["a" /* ShowcaseButtonComponent */],
            __WEBPACK_IMPORTED_MODULE_38__components_icon_showcase_icon_component__["a" /* ShowcaseIconComponent */],
            __WEBPACK_IMPORTED_MODULE_33__components_combobox_showcase_combobox_component__["a" /* ShowcaseComboboxComponent */],
            __WEBPACK_IMPORTED_MODULE_32__components_datepicker_showcase_datepicker_component__["a" /* ShowcaseDatepickerComponent */],
            __WEBPACK_IMPORTED_MODULE_31__components_textarea_showcase_textarea_component__["a" /* ShowcaseTextareaComponent */],
            __WEBPACK_IMPORTED_MODULE_35__components_table_showcase_table_component__["a" /* ShowcaseTableComponent */],
            __WEBPACK_IMPORTED_MODULE_36__components_grid_showcase_grid_component__["a" /* ShowcaseGridComponent */],
            __WEBPACK_IMPORTED_MODULE_39__components_two_list_showcase_two_list_component__["a" /* ShowcaseTwoListComponent */],
            __WEBPACK_IMPORTED_MODULE_40__components_application_frame_showcase_application_frame_component__["a" /* ShowcaseApplicationFrameComponent */],
            __WEBPACK_IMPORTED_MODULE_43__components_message_popup_showcase_message_popup_component__["a" /* ShowcaseMessagePopupComponent */],
            __WEBPACK_IMPORTED_MODULE_44__components_showcase_title_component__["a" /* ShowcaseTitleComponent */],
            __WEBPACK_IMPORTED_MODULE_42__components_pie_showcase_pie_component__["a" /* ShowcasePieComponent */],
            __WEBPACK_IMPORTED_MODULE_45__components_progress_bars_showcase_progress_bar_component__["a" /* ShowcaseProgressBarComponent */],
            __WEBPACK_IMPORTED_MODULE_47__components_headings_showcase_headings_component__["a" /* ShowcaseHeadingsComponent */],
            __WEBPACK_IMPORTED_MODULE_48__components_alert_showcase_alert_component__["a" /* ShowcaseAlertComponent */],
            __WEBPACK_IMPORTED_MODULE_49__components_text_showcase_text_component__["a" /* ShowcaseTextComponent */],
            __WEBPACK_IMPORTED_MODULE_50__components_tabs_showcase_tabs_component__["a" /* ShowcaseTabsComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_dialog_two_tabs_showcase_two_tabs_dialog_component__["a" /* ShowcaseTwoTabsDialog */],
            __WEBPACK_IMPORTED_MODULE_16__components_dialog_lower_flex_showcase_lower_flex_dialog_component__["a" /* ShowcaseLowerFlexDialog */],
            __WEBPACK_IMPORTED_MODULE_17__components_dialog_two_columns_showcase_two_columns_dialog_component__["a" /* ShowcaseTwoColumnsDialog */],
            __WEBPACK_IMPORTED_MODULE_18__components_dialog_full_flex_showcase_full_flex_dialog_component__["a" /* ShowcaseFullFlexDialog */],
            __WEBPACK_IMPORTED_MODULE_10__components_dialog_split_showcase_split_dialog_component__["a" /* ShowcaseSplitDialog */],
            __WEBPACK_IMPORTED_MODULE_37__components_grid_showcase_inner_grid_component__["a" /* ShowcaseInnerGridComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_dialog_standard_dialog_showcase_standard_dialog_component__["a" /* ShowcaseStandardDialog */],
            __WEBPACK_IMPORTED_MODULE_19__components_sample_route_sample_route_component__["a" /* SampleRouteComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_dialog_standard_dialog_showcase_standard_component__["a" /* ShowcaseStandardComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_dialog_progressbar_dialog_showcase_progressbar_dialog_component__["a" /* ShowcaseProgressBarDialog */],
            __WEBPACK_IMPORTED_MODULE_41__components_application_frame_application_frame_dialog_showcase_application_frame_dialog_component__["a" /* ShowcaseApplicationFrameDialog */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_15__components_dialog_two_tabs_showcase_two_tabs_dialog_component__["a" /* ShowcaseTwoTabsDialog */],
            __WEBPACK_IMPORTED_MODULE_16__components_dialog_lower_flex_showcase_lower_flex_dialog_component__["a" /* ShowcaseLowerFlexDialog */],
            __WEBPACK_IMPORTED_MODULE_17__components_dialog_two_columns_showcase_two_columns_dialog_component__["a" /* ShowcaseTwoColumnsDialog */],
            __WEBPACK_IMPORTED_MODULE_18__components_dialog_full_flex_showcase_full_flex_dialog_component__["a" /* ShowcaseFullFlexDialog */],
            __WEBPACK_IMPORTED_MODULE_23__components_dialog_standard_dialog_showcase_standard_dialog_component__["a" /* ShowcaseStandardDialog */],
            __WEBPACK_IMPORTED_MODULE_10__components_dialog_split_showcase_split_dialog_component__["a" /* ShowcaseSplitDialog */],
            __WEBPACK_IMPORTED_MODULE_21__components_dialog_progressbar_dialog_showcase_progressbar_dialog_component__["a" /* ShowcaseProgressBarDialog */],
            __WEBPACK_IMPORTED_MODULE_41__components_application_frame_application_frame_dialog_showcase_application_frame_dialog_component__["a" /* ShowcaseApplicationFrameDialog */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__systelab_components_modal_message_popup_message_popup_service__["a" /* MessagePopupService */],
            __WEBPACK_IMPORTED_MODULE_5__systelab_components_modal_dialog_dialog_service__["a" /* DialogService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__showcase_component__["a" /* ShowcaseComponent */]]
    })
], ShowcaseModule);


//# sourceMappingURL=showcase.module.js.map

/***/ }),

/***/ "../../../../../src/app/systelab-components/applicationframe/application-frame.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"slab-application-container d-flex flex-column\">\n  <systelab-app-header [userName]=\"userName\" [userFullName]=\"userFullName\" [hospitalName]=\"hospitalName\" [menu]=\"menu\">\n    <ng-content select=\"[header-content]\"></ng-content>\n  </systelab-app-header>\n  <div class=\"slab-main-container d-flex h-100\">\n    <div class=\"slab-side-bar-container\">\n      <systelab-app-sidebar [tabs]=\"tabs\" [actions]=\"actions\" (selected)=\"doSelect($event)\"></systelab-app-sidebar>\n    </div>\n    <div class=\"d-flex h-100 w-100\">\n      <ng-content select=\"[main-content]\"></ng-content>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/systelab-components/applicationframe/application-frame.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  height: 100%; }\n\n.slab-application-container {\n  height: 100%; }\n  .slab-application-container .slab-side-bar-container {\n    background-color: lightgrey;\n    min-width: 200px;\n    width: 200px; }\n  .slab-application-container .slab-main-container {\n    background-color: white; }\n  @media (max-width: 1024px) {\n    .slab-application-container .slab-side-bar-container {\n      display: none; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/systelab-components/applicationframe/application-frame.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplicationFrameComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_systelab_translate_lib_i18n_service__ = __webpack_require__("../../../../systelab-translate/lib/i18n.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_systelab_translate_lib_i18n_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_systelab_translate_lib_i18n_service__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApplicationFrameComponent = (function () {
    function ApplicationFrameComponent(i18nService) {
        this.i18nService = i18nService;
        this.menu = [];
        this.actions = [];
        this.tabs = [];
        this.selected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ApplicationFrameComponent.prototype.doSelect = function (id) {
        this.selected.emit(id);
    };
    return ApplicationFrameComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ApplicationFrameComponent.prototype, "title", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ApplicationFrameComponent.prototype, "userName", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ApplicationFrameComponent.prototype, "userFullName", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ApplicationFrameComponent.prototype, "hospitalName", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], ApplicationFrameComponent.prototype, "menu", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], ApplicationFrameComponent.prototype, "actions", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], ApplicationFrameComponent.prototype, "tabs", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ApplicationFrameComponent.prototype, "selected", void 0);
ApplicationFrameComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'systelab-app-frame',
        template: __webpack_require__("../../../../../src/app/systelab-components/applicationframe/application-frame.component.html"),
        styles: [__webpack_require__("../../../../../src/app/systelab-components/applicationframe/application-frame.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_systelab_translate_lib_i18n_service__["I18nService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_systelab_translate_lib_i18n_service__["I18nService"]) === "function" && _a || Object])
], ApplicationFrameComponent);

var _a;
//# sourceMappingURL=application-frame.component.js.map

/***/ }),

/***/ "../../../../../src/app/systelab-components/applicationframe/header/app-header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"slab-header-bar d-flex flex-row-reverse flex-nowrap justify-content-between\">\n    <div class=\"text-nowrap\">\n        <div class=\"text-nowrap d-inline-block align-middle\">\n            <ng-content></ng-content>\n        </div>\n        <div class=\"dropdown slab-header-user-container position-relative d-inline-block align-middle text-nowrap\">\n            <div class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                <div class=\"slab-header-user-icon d-inline-block text-center align-middle\">\n                    <div class=\"align-middle h-100\">\n                        <i class=\"icon-user align-bottom\"></i>\n                    </div>\n                </div>\n                <label class=\"text-truncate align-middle\">{{userName}}</label>\n                <div class=\"dropdown-menu dropdown-menu-right slab-dropdown\">\n                    <ul>\n                        <li *ngFor=\"let menuEntry of menu\"\n                            (click)=\"menuEntry.action()\">{{menuEntry.optionName }}\n                            <div *ngIf=\"menuEntry.isDivider\" class=\"dropdown-divider\"></div>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"text-truncate d-flex flex-nowrap\">\n        <i class=\"icon-modulab slab-header-modulab-icon align-middle d-inline-block\"></i>\n        <div class=\"slab-header-labels-container align-middle d-inline-block text-truncate\">\n            <label class=\"slab-header-hospital-name text-truncate\">{{hospitalName}}</label>\n            <small class=\"d-block text-truncate\">{{userFullName}}\n            </small>\n        </div>\n    </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/systelab-components/applicationframe/header/app-header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/************** SHARED - start ****************************************************************************************/\n/* $size_percentage: Change the component size */\n/* $form-elements-height: Defines the line height;\n                          in btn-medium” we redefine the line-height and the max-height of the medium size button and the size,\n                            the min-width and the min-height of a square button;\n                          defines the max-height of the multiSelectOutBox and the min-height of the uk-form-row;\n                          defines the line-height of the uk-grid;\n                          used to calculate the width of the input inside a uk-input-file;\n                          to calculate the size of a btn inside a uk-input-file;\n                          defines the line-height of the uk-line-height class;\n                          used to calculate the $top-icon value;\n                          used to calculate the line-height of the label inside the switch class */\n/* $border-radius: Define the border radius for the components;\n                    used for the Box*/\n/* $base-font-size: defines the button font size;\n                    used to calculate the line-height of the span (when it is not in a multiselect);\n                    to calculate the padding-top of the uk-form-label inside the uk-form-row;\n                    to define the line-height of the uk-form-label inside a uk-form-row */\n/* $base-body-font-size: used in the agGrid\n                         used in the comboBox */\n/* $base-body-font-family: defines the application font\n                           defines the font-size of the inputs preceded by a uk-form */\n/************** SHARED - end ******************************************************************************************/\n/*************** RESPONSIVE - start ***********************************************************************************/\n/* $breakpoint-medium: defines the breakpoint of the mediaquery for the width of the slab-dialogs for medium screens */\n/* $breakpoint-large: defines the breakpoint of the mediaquery for the width of the slab-dialogs for large screens;\n                      used in the mediaquery to modify the Login logo */\n/* $breakpoint-xlarge: defines the breakpoint of the mediaquery for the width of the slab-dialogs for xlarge screens;\n                       used to increase the margin-left value of the uk-grid-add-margin class;\n                       used in the mediaquery to modify the Login logo */\n/* $breakpoint-huge: used in the max-width of the mediaqueries to change the slab-dialog-buttons-condensed.\n                     used to expand Cepario footer buttons;\n                     used in the max-width of the mediaqueries to change the slab-dialog-buttons-condensed */\n/* $breakpoint-medium-height: defines the breakpoint of the mediaquery for the height of the slab-dialogs for medium screens */\n/* $breakpoint-large-height: defines the breakpoint of the mediaquery for the height of the slab-dialogs for large screens  */\n/* $breakpoint-xlarge-height: defines the breakpoint of the mediaquery for the height of the slab-dialogs for xlarge screens */\n/* $ipad-width: used as mediaquery checkpoint.*/\n/* ************* RESPONSIVE - end *************************************************************************************/\n/************** MAIN APPLICATION - start ******************************************************************************/\n/* $app-min-width: defines the minimum width of the body */\n/* $app-min-height: defines the minimum height of the body */\n/* $header-height: application header height\n                   used in the sidebar */\n/* $user-width: defines the width of the user area in the main screen*/\n/************** MAIN APPLICATION - end ********************************************************************************/\n/************** BUTTON - start ****************************************************************************************/\n/* $button-large-height: defines the min-height and the line-height of the button when is large */\n/* $slab-dialog-button-width: defines the minimum width of the button */\n/************** BUTTON - end ******************************************************************************************/\n/************** CHARTS - start ****************************************************************************************/\n/* $chart-header-height: defines the height of the chart header;\n                         the height of the dropdown inside the cart;\n                         defines the size of the cell inside the dropdown\n                         used in QC Compare and QC Levey Jennings Charts */\n/************** CHARTS - end ******************************************************************************************/\n/************** CHECKBOX - start **************************************************************************************/\n/* $checkbox-height: used to define the height and the line-height of the input,\n                       the padding left if the input is empty,\n                       the size and the font-size of the input’s before attribute.*/\n/************** CHECKBOX - end ******************************************************************************************/\n/************** DROPDOWN and Tree - start *****************************************************************************/\n/* $dropdown-line-height: defines the row line-height of the dropdown;\n                          defines the row line-height of the tree */\n/************** DROPDOWN - end ****************************************************************************************/\n/************** INPUT - start *****************************************************************************************/\n/* $input-width: defines the width of the input preceded by a uk-form that has not the class uk-width;\n                 defines the width of the slab-form-icon when it has not the class uk-width;\n                 defines the width of the ui-slider when the uk-width class is not present */\n/* $input-height: used to calculate the line-height of the span (when it is not in a multiselect);\n                  to calculate the padding-top of the uk-form-label inside the uk-form-row;\n                  to calculate the line-height of a paragraph inside a uk-form-controls;\n                  defines the height of all the inputs preceded by a uk-form;\n                  defines the line-height and the height of the font inside a uk-input;\n                  defines the height and the line-height of the icon-container;\n                  defines the line-height and the heigth of a select */\n/************** INPUT - end *******************************************************************************************/\n/************** FORMS - start *****************************************************************************************/\n/* $form-row-gutter: defines the margin-top of the uk-grid-small when it’s preceded by other uk-grid-small;\n                     defines the margin-top of the uk-form-row when it’s preceded by other uk-form-row */\n/************** FORMS - end *******************************************************************************************/\n/************** slab-dialog - start **************************************************************************************/\n/* $slab-dialog-header-height: defines the max-height of the slab-dialog-header; */\n/************** slab-dialog - end ****************************************************************************************/\n/************** NGSEARCHER - start ************************************************************************************/\n/* $ng-searcher-button-width: defines the width of the searcher button */\n/************** NGSEARCHER - end **************************************************************************************/\n/************** TABLE - start *****************************************************************************************/\n/* $table-left-header-width: defines the width of the left-header inside a uk-table.*/\n/************** TABLE - end *******************************************************************************************/\n/************** TABS - start ******************************************************************************************/\n/* $tab-height: used to calculate the $height-diff value;\n                defines the height of the tab elements inside a uk-form;\n                defines the height of the li elements inside the previous tab;\n                defines the top position of all elements inside the tab;\n                defines the top value of the uk-margin-small-top, uk-margin-top and uk-margin-large-top.*/\n/* $tab-min-width: defines the min-width of the tabs.*/\n/* $tab-space: used to define the top margin and the gutter between elements */\n/************** TABS - end ******************************************************************************************/\n/************** GRID - start ****************************************************************************************/\n/* $grid-header-height: defines the height of the ui-grid-header-cell;\n                          used to define the size of the grid-action-cell class */\n/* $grid-header-line-height: defines the line-height of the ui-grid-header-cell.\n                               defines the header-line-height of the agGrid */\n/* $grid-cell-height: defines the height and the min-height of the ui-grid-row;\n                        defines the height and the min-height of the ui-grid-cell;\n                        defines the line-height of the ui-grid-cell-contents;\n                        used to calculate the $status-square-right-size value;\n                        defines the line-height of the ui-grid-cell-line-height;\n                        defines the height of the ui-grid-cell-height;\n                        defines the font-size of the uk-text-large;\n                        used to calculate the size of the grid-acion-cell element */\n/* $grid-cell-line-height: defines the line-height of the ui-grid-cell\n                             defines the line-height of the combo-button */\n/************** GRID - end ******************************************************************************************/\n/* Header nav */\n.slab-header-bar {\n  height: 56px;\n  background-color: white;\n  border-bottom: 1px solid #ebebeb; }\n  .slab-header-bar > div:first-of-type {\n    /* Safari */\n    -ms-flex-negative: 0;\n        flex-shrink: 0; }\n  .slab-header-bar .slab-header-modulab-icon {\n    width: 40px;\n    height: 40px;\n    margin: 8px;\n    font-size: 40px;\n    color: #158fef; }\n  .slab-header-bar .slab-header-user-icon {\n    width: 36px;\n    height: 36px;\n    margin: 8px;\n    border-radius: 50px;\n    border: solid 2px #d6d6d6;\n    overflow: hidden; }\n    .slab-header-bar .slab-header-user-icon i {\n      position: relative;\n      top: 1px;\n      color: #d6d6d6;\n      font-size: 30px; }\n  .slab-header-bar .slab-header-labels-container {\n    padding: 5px; }\n    .slab-header-bar .slab-header-labels-container .slab-header-hospital-name {\n      display: block;\n      font-size: 20px;\n      margin-bottom: 0px; }\n    .slab-header-bar .slab-header-labels-container a {\n      color: #ACACAC;\n      text-decoration: none; }\n      .slab-header-bar .slab-header-labels-container a:hover {\n        text-decoration: underline; }\n  .slab-header-bar .slab-header-user-container {\n    box-sizing: border-box;\n    border-left: 1px solid #ebebeb; }\n    .slab-header-bar .slab-header-user-container:hover {\n      background-color: #ebebeb; }\n    .slab-header-bar .slab-header-user-container .dropdown-toggle > label {\n      width: 73px;\n      display: none; }\n      @media (min-width: 1025px) {\n        .slab-header-bar .slab-header-user-container .dropdown-toggle > label {\n          display: inline-block; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/systelab-components/applicationframe/header/app-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ApplicationHeaderMenuEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplicationHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_dialog_dialog_service__ = __webpack_require__("../../../../../src/app/systelab-components/modal/dialog/dialog.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApplicationHeaderMenuEntry = (function () {
    function ApplicationHeaderMenuEntry(optionName, isDivider, action) {
        this.optionName = optionName;
        this.isDivider = isDivider;
        this.action = action;
    }
    return ApplicationHeaderMenuEntry;
}());

var ApplicationHeaderComponent = (function () {
    function ApplicationHeaderComponent(dialogService) {
        this.dialogService = dialogService;
        this.menu = [];
    }
    return ApplicationHeaderComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ApplicationHeaderComponent.prototype, "userName", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ApplicationHeaderComponent.prototype, "userFullName", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ApplicationHeaderComponent.prototype, "hospitalName", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], ApplicationHeaderComponent.prototype, "menu", void 0);
ApplicationHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'systelab-app-header',
        template: __webpack_require__("../../../../../src/app/systelab-components/applicationframe/header/app-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/systelab-components/applicationframe/header/app-header.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__modal_dialog_dialog_service__["a" /* DialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__modal_dialog_dialog_service__["a" /* DialogService */]) === "function" && _a || Object])
], ApplicationHeaderComponent);

var _a;
//# sourceMappingURL=app-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/systelab-components/applicationframe/sidebar/app-sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"slab-sidebar-menu-container\">\n    <ul class=\"slab-sidebar-tabs-container\">\n        <li class=\"slab-sidebar-tab\" *ngFor=\"let tab of tabs; let i=index;\" (click)=\"selectTab(tab.id)\" [class.selected]=\"tab.isSelected\">\n            <div class=\"slab-sidebar-tab-decoration\"></div>\n            <span>{{tab.name }}</span>\n        </li>\n    </ul>\n    <ul class=\"slab-sidebar-actions-container\">\n        <button  *ngFor=\"let action of actions\" class=\"btn btn-lg\" (click)=\"action.action()\">{{ action.name}}</button>\n    </ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/systelab-components/applicationframe/sidebar/app-sidebar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/************** SHARED - start ****************************************************************************************/\n/* $size_percentage: Change the component size */\n/* $form-elements-height: Defines the line height;\n                          in btn-medium” we redefine the line-height and the max-height of the medium size button and the size,\n                            the min-width and the min-height of a square button;\n                          defines the max-height of the multiSelectOutBox and the min-height of the uk-form-row;\n                          defines the line-height of the uk-grid;\n                          used to calculate the width of the input inside a uk-input-file;\n                          to calculate the size of a btn inside a uk-input-file;\n                          defines the line-height of the uk-line-height class;\n                          used to calculate the $top-icon value;\n                          used to calculate the line-height of the label inside the switch class */\n/* $border-radius: Define the border radius for the components;\n                    used for the Box*/\n/* $base-font-size: defines the button font size;\n                    used to calculate the line-height of the span (when it is not in a multiselect);\n                    to calculate the padding-top of the uk-form-label inside the uk-form-row;\n                    to define the line-height of the uk-form-label inside a uk-form-row */\n/* $base-body-font-size: used in the agGrid\n                         used in the comboBox */\n/* $base-body-font-family: defines the application font\n                           defines the font-size of the inputs preceded by a uk-form */\n/************** SHARED - end ******************************************************************************************/\n/*************** RESPONSIVE - start ***********************************************************************************/\n/* $breakpoint-medium: defines the breakpoint of the mediaquery for the width of the slab-dialogs for medium screens */\n/* $breakpoint-large: defines the breakpoint of the mediaquery for the width of the slab-dialogs for large screens;\n                      used in the mediaquery to modify the Login logo */\n/* $breakpoint-xlarge: defines the breakpoint of the mediaquery for the width of the slab-dialogs for xlarge screens;\n                       used to increase the margin-left value of the uk-grid-add-margin class;\n                       used in the mediaquery to modify the Login logo */\n/* $breakpoint-huge: used in the max-width of the mediaqueries to change the slab-dialog-buttons-condensed.\n                     used to expand Cepario footer buttons;\n                     used in the max-width of the mediaqueries to change the slab-dialog-buttons-condensed */\n/* $breakpoint-medium-height: defines the breakpoint of the mediaquery for the height of the slab-dialogs for medium screens */\n/* $breakpoint-large-height: defines the breakpoint of the mediaquery for the height of the slab-dialogs for large screens  */\n/* $breakpoint-xlarge-height: defines the breakpoint of the mediaquery for the height of the slab-dialogs for xlarge screens */\n/* $ipad-width: used as mediaquery checkpoint.*/\n/* ************* RESPONSIVE - end *************************************************************************************/\n/************** MAIN APPLICATION - start ******************************************************************************/\n/* $app-min-width: defines the minimum width of the body */\n/* $app-min-height: defines the minimum height of the body */\n/* $header-height: application header height\n                   used in the sidebar */\n/* $user-width: defines the width of the user area in the main screen*/\n/************** MAIN APPLICATION - end ********************************************************************************/\n/************** BUTTON - start ****************************************************************************************/\n/* $button-large-height: defines the min-height and the line-height of the button when is large */\n/* $slab-dialog-button-width: defines the minimum width of the button */\n/************** BUTTON - end ******************************************************************************************/\n/************** CHARTS - start ****************************************************************************************/\n/* $chart-header-height: defines the height of the chart header;\n                         the height of the dropdown inside the cart;\n                         defines the size of the cell inside the dropdown\n                         used in QC Compare and QC Levey Jennings Charts */\n/************** CHARTS - end ******************************************************************************************/\n/************** CHECKBOX - start **************************************************************************************/\n/* $checkbox-height: used to define the height and the line-height of the input,\n                       the padding left if the input is empty,\n                       the size and the font-size of the input’s before attribute.*/\n/************** CHECKBOX - end ******************************************************************************************/\n/************** DROPDOWN and Tree - start *****************************************************************************/\n/* $dropdown-line-height: defines the row line-height of the dropdown;\n                          defines the row line-height of the tree */\n/************** DROPDOWN - end ****************************************************************************************/\n/************** INPUT - start *****************************************************************************************/\n/* $input-width: defines the width of the input preceded by a uk-form that has not the class uk-width;\n                 defines the width of the slab-form-icon when it has not the class uk-width;\n                 defines the width of the ui-slider when the uk-width class is not present */\n/* $input-height: used to calculate the line-height of the span (when it is not in a multiselect);\n                  to calculate the padding-top of the uk-form-label inside the uk-form-row;\n                  to calculate the line-height of a paragraph inside a uk-form-controls;\n                  defines the height of all the inputs preceded by a uk-form;\n                  defines the line-height and the height of the font inside a uk-input;\n                  defines the height and the line-height of the icon-container;\n                  defines the line-height and the heigth of a select */\n/************** INPUT - end *******************************************************************************************/\n/************** FORMS - start *****************************************************************************************/\n/* $form-row-gutter: defines the margin-top of the uk-grid-small when it’s preceded by other uk-grid-small;\n                     defines the margin-top of the uk-form-row when it’s preceded by other uk-form-row */\n/************** FORMS - end *******************************************************************************************/\n/************** slab-dialog - start **************************************************************************************/\n/* $slab-dialog-header-height: defines the max-height of the slab-dialog-header; */\n/************** slab-dialog - end ****************************************************************************************/\n/************** NGSEARCHER - start ************************************************************************************/\n/* $ng-searcher-button-width: defines the width of the searcher button */\n/************** NGSEARCHER - end **************************************************************************************/\n/************** TABLE - start *****************************************************************************************/\n/* $table-left-header-width: defines the width of the left-header inside a uk-table.*/\n/************** TABLE - end *******************************************************************************************/\n/************** TABS - start ******************************************************************************************/\n/* $tab-height: used to calculate the $height-diff value;\n                defines the height of the tab elements inside a uk-form;\n                defines the height of the li elements inside the previous tab;\n                defines the top position of all elements inside the tab;\n                defines the top value of the uk-margin-small-top, uk-margin-top and uk-margin-large-top.*/\n/* $tab-min-width: defines the min-width of the tabs.*/\n/* $tab-space: used to define the top margin and the gutter between elements */\n/************** TABS - end ******************************************************************************************/\n/************** GRID - start ****************************************************************************************/\n/* $grid-header-height: defines the height of the ui-grid-header-cell;\n                          used to define the size of the grid-action-cell class */\n/* $grid-header-line-height: defines the line-height of the ui-grid-header-cell.\n                               defines the header-line-height of the agGrid */\n/* $grid-cell-height: defines the height and the min-height of the ui-grid-row;\n                        defines the height and the min-height of the ui-grid-cell;\n                        defines the line-height of the ui-grid-cell-contents;\n                        used to calculate the $status-square-right-size value;\n                        defines the line-height of the ui-grid-cell-line-height;\n                        defines the height of the ui-grid-cell-height;\n                        defines the font-size of the uk-text-large;\n                        used to calculate the size of the grid-acion-cell element */\n/* $grid-cell-line-height: defines the line-height of the ui-grid-cell\n                             defines the line-height of the combo-button */\n/************** GRID - end ******************************************************************************************/\n.slab-sidebar-menu-container {\n  position: fixed;\n  top: 56px;\n  background-color: #ebebeb;\n  width: 200px;\n  height: calc(100% - 56px); }\n  .slab-sidebar-menu-container .slab-sidebar-tabs-container {\n    margin-top: 45px;\n    padding-left: 5px;\n    width: 100% !important;\n    background-color: #ebebeb; }\n    .slab-sidebar-menu-container .slab-sidebar-tabs-container .slab-sidebar-tab {\n      width: 95%;\n      height: 50px;\n      display: block;\n      background-color: white;\n      margin-bottom: 2px;\n      float: right;\n      border-top-left-radius: 5px;\n      border-bottom-left-radius: 5px;\n      border-right: 1px solid #ebebeb;\n      border-top: 1px solid #ebebeb;\n      border-bottom: 1px solid #ebebeb; }\n      .slab-sidebar-menu-container .slab-sidebar-tabs-container .slab-sidebar-tab .slab-sidebar-tab-decoration {\n        width: 15px;\n        height: 100%;\n        display: inline-block;\n        background-color: #959595;\n        border-top-left-radius: 5px;\n        border-bottom-left-radius: 5px; }\n      .slab-sidebar-menu-container .slab-sidebar-tabs-container .slab-sidebar-tab span {\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        -o-user-select: none;\n        user-select: none;\n        position: absolute;\n        margin-left: 15px;\n        margin-top: 15px;\n        color: black;\n        cursor: default; }\n      .slab-sidebar-menu-container .slab-sidebar-tabs-container .slab-sidebar-tab.selected, .slab-sidebar-menu-container .slab-sidebar-tabs-container .slab-sidebar-tab:hover {\n        border-right: 1px solid white;\n        border-top: 1px solid #158fef;\n        border-bottom: 1px solid #158fef; }\n        .slab-sidebar-menu-container .slab-sidebar-tabs-container .slab-sidebar-tab.selected .slab-sidebar-tab-decoration, .slab-sidebar-menu-container .slab-sidebar-tabs-container .slab-sidebar-tab:hover .slab-sidebar-tab-decoration {\n          background-color: #158fef; }\n        .slab-sidebar-menu-container .slab-sidebar-tabs-container .slab-sidebar-tab.selected span, .slab-sidebar-menu-container .slab-sidebar-tabs-container .slab-sidebar-tab:hover span {\n          color: #158fef; }\n  .slab-sidebar-menu-container .slab-sidebar-actions-container {\n    bottom: 0px;\n    position: absolute;\n    width: 94%;\n    padding: 0;\n    margin-left: 3%; }\n    .slab-sidebar-menu-container .slab-sidebar-actions-container button {\n      width: 100%;\n      display: block; }\n      .slab-sidebar-menu-container .slab-sidebar-actions-container button:not(:last-child) {\n        margin-bottom: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/systelab-components/applicationframe/sidebar/app-sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ApplicationSidebarTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplicationSidebarAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ApplicationSidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_dialog_dialog_service__ = __webpack_require__("../../../../../src/app/systelab-components/modal/dialog/dialog.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApplicationSidebarTab = (function () {
    function ApplicationSidebarTab(id, name, isSelected) {
        this.id = id;
        this.name = name;
        this.isSelected = isSelected;
    }
    return ApplicationSidebarTab;
}());

var ApplicationSidebarAction = (function () {
    function ApplicationSidebarAction(name, action) {
        this.name = name;
        this.action = action;
    }
    return ApplicationSidebarAction;
}());

var ApplicationSidebarComponent = (function () {
    function ApplicationSidebarComponent(dialogService) {
        this.dialogService = dialogService;
        this.actions = [];
        this.tabs = [];
        this.selected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ApplicationSidebarComponent.prototype.selectTab = function (id) {
        for (var i = 0; i < this.tabs.length; i++) {
            this.tabs[i].isSelected = (this.tabs[i].id === id);
        }
        this.selected.emit(id);
    };
    return ApplicationSidebarComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], ApplicationSidebarComponent.prototype, "actions", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], ApplicationSidebarComponent.prototype, "tabs", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ApplicationSidebarComponent.prototype, "selected", void 0);
ApplicationSidebarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'systelab-app-sidebar',
        template: __webpack_require__("../../../../../src/app/systelab-components/applicationframe/sidebar/app-sidebar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/systelab-components/applicationframe/sidebar/app-sidebar.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__modal_dialog_dialog_service__["a" /* DialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__modal_dialog_dialog_service__["a" /* DialogService */]) === "function" && _a || Object])
], ApplicationSidebarComponent);

var _a;
//# sourceMappingURL=app-sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/systelab-components/calendar/calendar-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"slab-dialog-header ng-binding\">\n    <span>{{parameters.headerDescription}}</span>\n</div>\n<div class=\"slab-calendar-dialog slab-flex-1 d-flex flex-column\">\n    <systelab-calendar-header [currentDate]=\"currentDate\"\n                              (previousYear)=\"changeYear(-1)\" (previousMonth)=\"changeMonth(-1)\"\n                              (nextMonth)=\"changeMonth(1)\" (nextYear)=\"changeYear(1)\" [locale]=\"locale\">\n    </systelab-calendar-header>\n    <systelab-calendar-table #calendar class=\"slab-calendar-table\" [currentDate]=\"currentDate\" [days]=\"days\" [locale]=\"locale\">\n        <ng-template let-daySlot=\"daySlot\">\n            <a [ngClass]=\"{'is-holiday': daySlot.isHoliday,'disable-link':daySlot.isDisabled}\" (click)=\"selectDaySlot(daySlot)\">\n                {{daySlot.day}}\n            </a>\n            <div *ngIf=\"!daySlot.isHoliday\" class=\"slab-calendar-buttons\">\n                <button class=\"slab-calendar-button1\" (click)=\"doSomething(daySlot)\"></button>\n            </div>\n        </ng-template>\n    </systelab-calendar-table>\n</div>\n<div class=\"slab-dialog-close\" (click)=\"close()\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/systelab-components/calendar/calendar-dialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/************** SHARED - start ****************************************************************************************/\n/* $size_percentage: Change the component size */\n/* $form-elements-height: Defines the line height;\n                          in btn-medium” we redefine the line-height and the max-height of the medium size button and the size,\n                            the min-width and the min-height of a square button;\n                          defines the max-height of the multiSelectOutBox and the min-height of the uk-form-row;\n                          defines the line-height of the uk-grid;\n                          used to calculate the width of the input inside a uk-input-file;\n                          to calculate the size of a btn inside a uk-input-file;\n                          defines the line-height of the uk-line-height class;\n                          used to calculate the $top-icon value;\n                          used to calculate the line-height of the label inside the switch class */\n/* $border-radius: Define the border radius for the components;\n                    used for the Box*/\n/* $base-font-size: defines the button font size;\n                    used to calculate the line-height of the span (when it is not in a multiselect);\n                    to calculate the padding-top of the uk-form-label inside the uk-form-row;\n                    to define the line-height of the uk-form-label inside a uk-form-row */\n/* $base-body-font-size: used in the agGrid\n                         used in the comboBox */\n/* $base-body-font-family: defines the application font\n                           defines the font-size of the inputs preceded by a uk-form */\n/************** SHARED - end ******************************************************************************************/\n/*************** RESPONSIVE - start ***********************************************************************************/\n/* $breakpoint-medium: defines the breakpoint of the mediaquery for the width of the slab-dialogs for medium screens */\n/* $breakpoint-large: defines the breakpoint of the mediaquery for the width of the slab-dialogs for large screens;\n                      used in the mediaquery to modify the Login logo */\n/* $breakpoint-xlarge: defines the breakpoint of the mediaquery for the width of the slab-dialogs for xlarge screens;\n                       used to increase the margin-left value of the uk-grid-add-margin class;\n                       used in the mediaquery to modify the Login logo */\n/* $breakpoint-huge: used in the max-width of the mediaqueries to change the slab-dialog-buttons-condensed.\n                     used to expand Cepario footer buttons;\n                     used in the max-width of the mediaqueries to change the slab-dialog-buttons-condensed */\n/* $breakpoint-medium-height: defines the breakpoint of the mediaquery for the height of the slab-dialogs for medium screens */\n/* $breakpoint-large-height: defines the breakpoint of the mediaquery for the height of the slab-dialogs for large screens  */\n/* $breakpoint-xlarge-height: defines the breakpoint of the mediaquery for the height of the slab-dialogs for xlarge screens */\n/* $ipad-width: used as mediaquery checkpoint.*/\n/* ************* RESPONSIVE - end *************************************************************************************/\n/************** MAIN APPLICATION - start ******************************************************************************/\n/* $app-min-width: defines the minimum width of the body */\n/* $app-min-height: defines the minimum height of the body */\n/* $header-height: application header height\n                   used in the sidebar */\n/* $user-width: defines the width of the user area in the main screen*/\n/************** MAIN APPLICATION - end ********************************************************************************/\n/************** BUTTON - start ****************************************************************************************/\n/* $button-large-height: defines the min-height and the line-height of the button when is large */\n/* $slab-dialog-button-width: defines the minimum width of the button */\n/************** BUTTON - end ******************************************************************************************/\n/************** CHARTS - start ****************************************************************************************/\n/* $chart-header-height: defines the height of the chart header;\n                         the height of the dropdown inside the cart;\n                         defines the size of the cell inside the dropdown\n                         used in QC Compare and QC Levey Jennings Charts */\n/************** CHARTS - end ******************************************************************************************/\n/************** CHECKBOX - start **************************************************************************************/\n/* $checkbox-height: used to define the height and the line-height of the input,\n                       the padding left if the input is empty,\n                       the size and the font-size of the input’s before attribute.*/\n/************** CHECKBOX - end ******************************************************************************************/\n/************** DROPDOWN and Tree - start *****************************************************************************/\n/* $dropdown-line-height: defines the row line-height of the dropdown;\n                          defines the row line-height of the tree */\n/************** DROPDOWN - end ****************************************************************************************/\n/************** INPUT - start *****************************************************************************************/\n/* $input-width: defines the width of the input preceded by a uk-form that has not the class uk-width;\n                 defines the width of the slab-form-icon when it has not the class uk-width;\n                 defines the width of the ui-slider when the uk-width class is not present */\n/* $input-height: used to calculate the line-height of the span (when it is not in a multiselect);\n                  to calculate the padding-top of the uk-form-label inside the uk-form-row;\n                  to calculate the line-height of a paragraph inside a uk-form-controls;\n                  defines the height of all the inputs preceded by a uk-form;\n                  defines the line-height and the height of the font inside a uk-input;\n                  defines the height and the line-height of the icon-container;\n                  defines the line-height and the heigth of a select */\n/************** INPUT - end *******************************************************************************************/\n/************** FORMS - start *****************************************************************************************/\n/* $form-row-gutter: defines the margin-top of the uk-grid-small when it’s preceded by other uk-grid-small;\n                     defines the margin-top of the uk-form-row when it’s preceded by other uk-form-row */\n/************** FORMS - end *******************************************************************************************/\n/************** slab-dialog - start **************************************************************************************/\n/* $slab-dialog-header-height: defines the max-height of the slab-dialog-header; */\n/************** slab-dialog - end ****************************************************************************************/\n/************** NGSEARCHER - start ************************************************************************************/\n/* $ng-searcher-button-width: defines the width of the searcher button */\n/************** NGSEARCHER - end **************************************************************************************/\n/************** TABLE - start *****************************************************************************************/\n/* $table-left-header-width: defines the width of the left-header inside a uk-table.*/\n/************** TABLE - end *******************************************************************************************/\n/************** TABS - start ******************************************************************************************/\n/* $tab-height: used to calculate the $height-diff value;\n                defines the height of the tab elements inside a uk-form;\n                defines the height of the li elements inside the previous tab;\n                defines the top position of all elements inside the tab;\n                defines the top value of the uk-margin-small-top, uk-margin-top and uk-margin-large-top.*/\n/* $tab-min-width: defines the min-width of the tabs.*/\n/* $tab-space: used to define the top margin and the gutter between elements */\n/************** TABS - end ******************************************************************************************/\n/************** GRID - start ****************************************************************************************/\n/* $grid-header-height: defines the height of the ui-grid-header-cell;\n                          used to define the size of the grid-action-cell class */\n/* $grid-header-line-height: defines the line-height of the ui-grid-header-cell.\n                               defines the header-line-height of the agGrid */\n/* $grid-cell-height: defines the height and the min-height of the ui-grid-row;\n                        defines the height and the min-height of the ui-grid-cell;\n                        defines the line-height of the ui-grid-cell-contents;\n                        used to calculate the $status-square-right-size value;\n                        defines the line-height of the ui-grid-cell-line-height;\n                        defines the height of the ui-grid-cell-height;\n                        defines the font-size of the uk-text-large;\n                        used to calculate the size of the grid-acion-cell element */\n/* $grid-cell-line-height: defines the line-height of the ui-grid-cell\n                             defines the line-height of the combo-button */\n/************** GRID - end ******************************************************************************************/\n.slab-calendar-dialog a {\n  top: 0;\n  display: block;\n  padding: 0 !important;\n  text-align: center;\n  color: #444; }\n  .slab-calendar-dialog a.ui-state-highlight {\n    background-color: #a5dde5 !important; }\n  .slab-calendar-dialog a.is-holiday {\n    color: red; }\n  .slab-calendar-dialog a.disable-link {\n    pointer-events: none; }\n\n.slab-calendar-dialog .slab-calendar-table {\n  width: 100%;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n\n.slab-calendar-dialog .slab-calendar-buttons button {\n  border: 0;\n  background: none;\n  box-shadow: none;\n  border-radius: 0px;\n  position: absolute;\n  width: 20px;\n  height: 20px; }\n  .slab-calendar-dialog .slab-calendar-buttons button.slab-calendar-button1 {\n    top: 2px;\n    right: 2px;\n    padding-top: 5px;\n    background-color: bisque; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/systelab-components/calendar/calendar-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CalendarDialogParameters */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_modialog__ = __webpack_require__("../../../../ngx-modialog/bundle/ngx-modialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns__ = __webpack_require__("../../../../date-fns/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_date_fns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_message_popup_message_popup_view_component__ = __webpack_require__("../../../../../src/app/systelab-components/modal/message-popup/message-popup-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modal_plugin_modulab_modal_context__ = __webpack_require__("../../../../../src/app/systelab-components/modal/plugin/modulab/modal-context.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__calendar_table_component__ = __webpack_require__("../../../../../src/app/systelab-components/calendar/calendar-table.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CalendarDialogParameters = (function (_super) {
    __extends(CalendarDialogParameters, _super);
    function CalendarDialogParameters() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.width = 800;
        _this.height = 600;
        _this.headerDescription = '';
        return _this;
    }
    return CalendarDialogParameters;
}(__WEBPACK_IMPORTED_MODULE_5__modal_plugin_modulab_modal_context__["a" /* ModulabModalContext */]));

var CalendarDialog = (function (_super) {
    __extends(CalendarDialog, _super);
    function CalendarDialog(dialog) {
        var _this = _super.call(this, dialog) || this;
        _this.dialog = dialog;
        _this.locale = 'es';
        _this.days = [];
        _this.parameters = dialog.context;
        _this.currentDate = new Date();
        _this.getData();
        return _this;
    }
    CalendarDialog.prototype.close = function () {
        this.dialog.close();
    };
    CalendarDialog.prototype.selectDaySlot = function (daySlot) {
        if (daySlot.date) {
            this.close();
        }
    };
    CalendarDialog.getParameters = function () {
        return new CalendarDialogParameters();
    };
    CalendarDialog.prototype.doSomething = function (data) {
        console.log(data);
    };
    CalendarDialog.prototype.changeYear = function (yearFactor) {
        this.days = [];
        this.currentDate = Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["addYears"])(this.currentDate, yearFactor);
        this.getData();
    };
    CalendarDialog.prototype.changeMonth = function (monthFactor) {
        this.days = [];
        this.currentDate = Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["addMonths"])(this.currentDate, monthFactor);
        this.getData();
    };
    CalendarDialog.prototype.getData = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(true).delay(1000).subscribe(function (response) {
            var returnedDays = [];
            returnedDays.push({ date: new Date(2017, 10, 25), day: 25, isHoliday: true });
            returnedDays.push({ date: new Date(2017, 10, 26), day: 26, isHoliday: true });
            _this.days = returnedDays;
        });
    };
    return CalendarDialog;
}(__WEBPACK_IMPORTED_MODULE_4__modal_message_popup_message_popup_view_component__["a" /* DefaultModalActions */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('calendar'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__calendar_table_component__["a" /* CalendarTableComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__calendar_table_component__["a" /* CalendarTableComponent */]) === "function" && _a || Object)
], CalendarDialog.prototype, "calendar", void 0);
CalendarDialog = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/systelab-components/calendar/calendar-dialog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/systelab-components/calendar/calendar-dialog.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_modialog__["c" /* DialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_modialog__["c" /* DialogRef */]) === "function" && _b || Object])
], CalendarDialog);

var _a, _b;
//# sourceMappingURL=calendar-dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/systelab-components/calendar/calendar-header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"slab-custom-calendar-header\">\n    <a class=\"icon-angle-double-left slab-icon-medium\" (click)=\"doPreviousYear()\"></a>\n    <a class=\"icon-angle-left slab-icon-medium\" (click)=\"doPreviousMonth()\"></a>\n    <a class=\"icon-angle-double-right slab-icon-medium\" (click)=\"doNextYear()\"></a>\n    <a class=\"icon-angle-right slab-icon-medium\" (click)=\"doNextMonth()\"></a>\n    <div class=\"slab-custom-calendar-title\">{{getTitle()}}</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/systelab-components/calendar/calendar-header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/************** SHARED - start ****************************************************************************************/\n/* $size_percentage: Change the component size */\n/* $form-elements-height: Defines the line height;\n                          in btn-medium” we redefine the line-height and the max-height of the medium size button and the size,\n                            the min-width and the min-height of a square button;\n                          defines the max-height of the multiSelectOutBox and the min-height of the uk-form-row;\n                          defines the line-height of the uk-grid;\n                          used to calculate the width of the input inside a uk-input-file;\n                          to calculate the size of a btn inside a uk-input-file;\n                          defines the line-height of the uk-line-height class;\n                          used to calculate the $top-icon value;\n                          used to calculate the line-height of the label inside the switch class */\n/* $border-radius: Define the border radius for the components;\n                    used for the Box*/\n/* $base-font-size: defines the button font size;\n                    used to calculate the line-height of the span (when it is not in a multiselect);\n                    to calculate the padding-top of the uk-form-label inside the uk-form-row;\n                    to define the line-height of the uk-form-label inside a uk-form-row */\n/* $base-body-font-size: used in the agGrid\n                         used in the comboBox */\n/* $base-body-font-family: defines the application font\n                           defines the font-size of the inputs preceded by a uk-form */\n/************** SHARED - end ******************************************************************************************/\n/*************** RESPONSIVE - start ***********************************************************************************/\n/* $breakpoint-medium: defines the breakpoint of the mediaquery for the width of the slab-dialogs for medium screens */\n/* $breakpoint-large: defines the breakpoint of the mediaquery for the width of the slab-dialogs for large screens;\n                      used in the mediaquery to modify the Login logo */\n/* $breakpoint-xlarge: defines the breakpoint of the mediaquery for the width of the slab-dialogs for xlarge screens;\n                       used to increase the margin-left value of the uk-grid-add-margin class;\n                       used in the mediaquery to modify the Login logo */\n/* $breakpoint-huge: used in the max-width of the mediaqueries to change the slab-dialog-buttons-condensed.\n                     used to expand Cepario footer buttons;\n                     used in the max-width of the mediaqueries to change the slab-dialog-buttons-condensed */\n/* $breakpoint-medium-height: defines the breakpoint of the mediaquery for the height of the slab-dialogs for medium screens */\n/* $breakpoint-large-height: defines the breakpoint of the mediaquery for the height of the slab-dialogs for large screens  */\n/* $breakpoint-xlarge-height: defines the breakpoint of the mediaquery for the height of the slab-dialogs for xlarge screens */\n/* $ipad-width: used as mediaquery checkpoint.*/\n/* ************* RESPONSIVE - end *************************************************************************************/\n/************** MAIN APPLICATION - start ******************************************************************************/\n/* $app-min-width: defines the minimum width of the body */\n/* $app-min-height: defines the minimum height of the body */\n/* $header-height: application header height\n                   used in the sidebar */\n/* $user-width: defines the width of the user area in the main screen*/\n/************** MAIN APPLICATION - end ********************************************************************************/\n/************** BUTTON - start ****************************************************************************************/\n/* $button-large-height: defines the min-height and the line-height of the button when is large */\n/* $slab-dialog-button-width: defines the minimum width of the button */\n/************** BUTTON - end ******************************************************************************************/\n/************** CHARTS - start ****************************************************************************************/\n/* $chart-header-height: defines the height of the chart header;\n                         the height of the dropdown inside the cart;\n                         defines the size of the cell inside the dropdown\n                         used in QC Compare and QC Levey Jennings Charts */\n/************** CHARTS - end ******************************************************************************************/\n/************** CHECKBOX - start **************************************************************************************/\n/* $checkbox-height: used to define the height and the line-height of the input,\n                       the padding left if the input is empty,\n                       the size and the font-size of the input’s before attribute.*/\n/************** CHECKBOX - end ******************************************************************************************/\n/************** DROPDOWN and Tree - start *****************************************************************************/\n/* $dropdown-line-height: defines the row line-height of the dropdown;\n                          defines the row line-height of the tree */\n/************** DROPDOWN - end ****************************************************************************************/\n/************** INPUT - start *****************************************************************************************/\n/* $input-width: defines the width of the input preceded by a uk-form that has not the class uk-width;\n                 defines the width of the slab-form-icon when it has not the class uk-width;\n                 defines the width of the ui-slider when the uk-width class is not present */\n/* $input-height: used to calculate the line-height of the span (when it is not in a multiselect);\n                  to calculate the padding-top of the uk-form-label inside the uk-form-row;\n                  to calculate the line-height of a paragraph inside a uk-form-controls;\n                  defines the height of all the inputs preceded by a uk-form;\n                  defines the line-height and the height of the font inside a uk-input;\n                  defines the height and the line-height of the icon-container;\n                  defines the line-height and the heigth of a select */\n/************** INPUT - end *******************************************************************************************/\n/************** FORMS - start *****************************************************************************************/\n/* $form-row-gutter: defines the margin-top of the uk-grid-small when it’s preceded by other uk-grid-small;\n                     defines the margin-top of the uk-form-row when it’s preceded by other uk-form-row */\n/************** FORMS - end *******************************************************************************************/\n/************** slab-dialog - start **************************************************************************************/\n/* $slab-dialog-header-height: defines the max-height of the slab-dialog-header; */\n/************** slab-dialog - end ****************************************************************************************/\n/************** NGSEARCHER - start ************************************************************************************/\n/* $ng-searcher-button-width: defines the width of the searcher button */\n/************** NGSEARCHER - end **************************************************************************************/\n/************** TABLE - start *****************************************************************************************/\n/* $table-left-header-width: defines the width of the left-header inside a uk-table.*/\n/************** TABLE - end *******************************************************************************************/\n/************** TABS - start ******************************************************************************************/\n/* $tab-height: used to calculate the $height-diff value;\n                defines the height of the tab elements inside a uk-form;\n                defines the height of the li elements inside the previous tab;\n                defines the top position of all elements inside the tab;\n                defines the top value of the uk-margin-small-top, uk-margin-top and uk-margin-large-top.*/\n/* $tab-min-width: defines the min-width of the tabs.*/\n/* $tab-space: used to define the top margin and the gutter between elements */\n/************** TABS - end ******************************************************************************************/\n/************** GRID - start ****************************************************************************************/\n/* $grid-header-height: defines the height of the ui-grid-header-cell;\n                          used to define the size of the grid-action-cell class */\n/* $grid-header-line-height: defines the line-height of the ui-grid-header-cell.\n                               defines the header-line-height of the agGrid */\n/* $grid-cell-height: defines the height and the min-height of the ui-grid-row;\n                        defines the height and the min-height of the ui-grid-cell;\n                        defines the line-height of the ui-grid-cell-contents;\n                        used to calculate the $status-square-right-size value;\n                        defines the line-height of the ui-grid-cell-line-height;\n                        defines the height of the ui-grid-cell-height;\n                        defines the font-size of the uk-text-large;\n                        used to calculate the size of the grid-acion-cell element */\n/* $grid-cell-line-height: defines the line-height of the ui-grid-cell\n                             defines the line-height of the combo-button */\n/************** GRID - end ******************************************************************************************/\n.slab-custom-calendar-header {\n  line-height: 40px !important;\n  background: #158fef;\n  margin-bottom: 0;\n  color: white;\n  height: 40px; }\n  .slab-custom-calendar-header .slab-custom-calendar-title {\n    display: block;\n    margin: 0;\n    text-align: center; }\n  .slab-custom-calendar-header a {\n    color: white; }\n    .slab-custom-calendar-header a:hover {\n      text-decoration: none;\n      background: none;\n      color: white; }\n  .slab-custom-calendar-header .icon-angle-double-left {\n    float: left;\n    margin-left: 10px;\n    line-height: 40px; }\n  .slab-custom-calendar-header .icon-angle-double-right {\n    float: right;\n    margin-right: 10px;\n    line-height: 40px; }\n  .slab-custom-calendar-header .icon-angle-left {\n    float: left;\n    margin-left: 40px;\n    line-height: 40px; }\n  .slab-custom-calendar-header .icon-angle-right {\n    float: right;\n    margin-right: 40px;\n    line-height: 40px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/systelab-components/calendar/calendar-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns__ = __webpack_require__("../../../../date-fns/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalendarHeaderComponent = (function () {
    function CalendarHeaderComponent() {
        this.previousYear = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.previousMonth = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.nextMonth = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.nextYear = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    CalendarHeaderComponent.prototype.doPreviousYear = function () {
        this.previousYear.emit();
    };
    CalendarHeaderComponent.prototype.doPreviousMonth = function () {
        this.previousMonth.emit();
    };
    CalendarHeaderComponent.prototype.doNextMonth = function () {
        this.nextMonth.emit();
    };
    CalendarHeaderComponent.prototype.doNextYear = function () {
        this.nextYear.emit();
    };
    CalendarHeaderComponent.prototype.getTitle = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["format"])(this.currentDate, 'MMMM, YYYY', { locale: this.locale });
    };
    return CalendarHeaderComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], CalendarHeaderComponent.prototype, "currentDate", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], CalendarHeaderComponent.prototype, "locale", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], CalendarHeaderComponent.prototype, "previousYear", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], CalendarHeaderComponent.prototype, "previousMonth", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], CalendarHeaderComponent.prototype, "nextMonth", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], CalendarHeaderComponent.prototype, "nextYear", void 0);
CalendarHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'systelab-calendar-header',
        template: __webpack_require__("../../../../../src/app/systelab-components/calendar/calendar-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/systelab-components/calendar/calendar-header.component.scss")]
    })
], CalendarHeaderComponent);

//# sourceMappingURL=calendar-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/systelab-components/calendar/calendar-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"slab-custom-calendar\">\n    <table class=\"slab-custom-calendar-table\">\n        <thead>\n        <tr>\n            <th *ngFor=\"let dayName of daysHeader\">{{dayName}}</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let row of rows\">\n            <td *ngFor=\"let daySlot of row\" [ngClass]=\"{'disabled-cell': !daySlot.date}\">\n                <div *ngIf=\"daySlot.date\" class=\"slab-custom-calendar-cell\">\n                    <ng-container *ngTemplateOutlet=\"templateRef; context: { daySlot: daySlot }\"></ng-container>\n                </div>\n            </td>\n        </tr>\n        </tbody>\n    </table>\n</div>"

/***/ }),

/***/ "../../../../../src/app/systelab-components/calendar/calendar-table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/************** SHARED - start ****************************************************************************************/\n/* $size_percentage: Change the component size */\n/* $form-elements-height: Defines the line height;\n                          in btn-medium” we redefine the line-height and the max-height of the medium size button and the size,\n                            the min-width and the min-height of a square button;\n                          defines the max-height of the multiSelectOutBox and the min-height of the uk-form-row;\n                          defines the line-height of the uk-grid;\n                          used to calculate the width of the input inside a uk-input-file;\n                          to calculate the size of a btn inside a uk-input-file;\n                          defines the line-height of the uk-line-height class;\n                          used to calculate the $top-icon value;\n                          used to calculate the line-height of the label inside the switch class */\n/* $border-radius: Define the border radius for the components;\n                    used for the Box*/\n/* $base-font-size: defines the button font size;\n                    used to calculate the line-height of the span (when it is not in a multiselect);\n                    to calculate the padding-top of the uk-form-label inside the uk-form-row;\n                    to define the line-height of the uk-form-label inside a uk-form-row */\n/* $base-body-font-size: used in the agGrid\n                         used in the comboBox */\n/* $base-body-font-family: defines the application font\n                           defines the font-size of the inputs preceded by a uk-form */\n/************** SHARED - end ******************************************************************************************/\n/*************** RESPONSIVE - start ***********************************************************************************/\n/* $breakpoint-medium: defines the breakpoint of the mediaquery for the width of the slab-dialogs for medium screens */\n/* $breakpoint-large: defines the breakpoint of the mediaquery for the width of the slab-dialogs for large screens;\n                      used in the mediaquery to modify the Login logo */\n/* $breakpoint-xlarge: defines the breakpoint of the mediaquery for the width of the slab-dialogs for xlarge screens;\n                       used to increase the margin-left value of the uk-grid-add-margin class;\n                       used in the mediaquery to modify the Login logo */\n/* $breakpoint-huge: used in the max-width of the mediaqueries to change the slab-dialog-buttons-condensed.\n                     used to expand Cepario footer buttons;\n                     used in the max-width of the mediaqueries to change the slab-dialog-buttons-condensed */\n/* $breakpoint-medium-height: defines the breakpoint of the mediaquery for the height of the slab-dialogs for medium screens */\n/* $breakpoint-large-height: defines the breakpoint of the mediaquery for the height of the slab-dialogs for large screens  */\n/* $breakpoint-xlarge-height: defines the breakpoint of the mediaquery for the height of the slab-dialogs for xlarge screens */\n/* $ipad-width: used as mediaquery checkpoint.*/\n/* ************* RESPONSIVE - end *************************************************************************************/\n/************** MAIN APPLICATION - start ******************************************************************************/\n/* $app-min-width: defines the minimum width of the body */\n/* $app-min-height: defines the minimum height of the body */\n/* $header-height: application header height\n                   used in the sidebar */\n/* $user-width: defines the width of the user area in the main screen*/\n/************** MAIN APPLICATION - end ********************************************************************************/\n/************** BUTTON - start ****************************************************************************************/\n/* $button-large-height: defines the min-height and the line-height of the button when is large */\n/* $slab-dialog-button-width: defines the minimum width of the button */\n/************** BUTTON - end ******************************************************************************************/\n/************** CHARTS - start ****************************************************************************************/\n/* $chart-header-height: defines the height of the chart header;\n                         the height of the dropdown inside the cart;\n                         defines the size of the cell inside the dropdown\n                         used in QC Compare and QC Levey Jennings Charts */\n/************** CHARTS - end ******************************************************************************************/\n/************** CHECKBOX - start **************************************************************************************/\n/* $checkbox-height: used to define the height and the line-height of the input,\n                       the padding left if the input is empty,\n                       the size and the font-size of the input’s before attribute.*/\n/************** CHECKBOX - end ******************************************************************************************/\n/************** DROPDOWN and Tree - start *****************************************************************************/\n/* $dropdown-line-height: defines the row line-height of the dropdown;\n                          defines the row line-height of the tree */\n/************** DROPDOWN - end ****************************************************************************************/\n/************** INPUT - start *****************************************************************************************/\n/* $input-width: defines the width of the input preceded by a uk-form that has not the class uk-width;\n                 defines the width of the slab-form-icon when it has not the class uk-width;\n                 defines the width of the ui-slider when the uk-width class is not present */\n/* $input-height: used to calculate the line-height of the span (when it is not in a multiselect);\n                  to calculate the padding-top of the uk-form-label inside the uk-form-row;\n                  to calculate the line-height of a paragraph inside a uk-form-controls;\n                  defines the height of all the inputs preceded by a uk-form;\n                  defines the line-height and the height of the font inside a uk-input;\n                  defines the height and the line-height of the icon-container;\n                  defines the line-height and the heigth of a select */\n/************** INPUT - end *******************************************************************************************/\n/************** FORMS - start *****************************************************************************************/\n/* $form-row-gutter: defines the margin-top of the uk-grid-small when it’s preceded by other uk-grid-small;\n                     defines the margin-top of the uk-form-row when it’s preceded by other uk-form-row */\n/************** FORMS - end *******************************************************************************************/\n/************** slab-dialog - start **************************************************************************************/\n/* $slab-dialog-header-height: defines the max-height of the slab-dialog-header; */\n/************** slab-dialog - end ****************************************************************************************/\n/************** NGSEARCHER - start ************************************************************************************/\n/* $ng-searcher-button-width: defines the width of the searcher button */\n/************** NGSEARCHER - end **************************************************************************************/\n/************** TABLE - start *****************************************************************************************/\n/* $table-left-header-width: defines the width of the left-header inside a uk-table.*/\n/************** TABLE - end *******************************************************************************************/\n/************** TABS - start ******************************************************************************************/\n/* $tab-height: used to calculate the $height-diff value;\n                defines the height of the tab elements inside a uk-form;\n                defines the height of the li elements inside the previous tab;\n                defines the top position of all elements inside the tab;\n                defines the top value of the uk-margin-small-top, uk-margin-top and uk-margin-large-top.*/\n/* $tab-min-width: defines the min-width of the tabs.*/\n/* $tab-space: used to define the top margin and the gutter between elements */\n/************** TABS - end ******************************************************************************************/\n/************** GRID - start ****************************************************************************************/\n/* $grid-header-height: defines the height of the ui-grid-header-cell;\n                          used to define the size of the grid-action-cell class */\n/* $grid-header-line-height: defines the line-height of the ui-grid-header-cell.\n                               defines the header-line-height of the agGrid */\n/* $grid-cell-height: defines the height and the min-height of the ui-grid-row;\n                        defines the height and the min-height of the ui-grid-cell;\n                        defines the line-height of the ui-grid-cell-contents;\n                        used to calculate the $status-square-right-size value;\n                        defines the line-height of the ui-grid-cell-line-height;\n                        defines the height of the ui-grid-cell-height;\n                        defines the font-size of the uk-text-large;\n                        used to calculate the size of the grid-acion-cell element */\n/* $grid-cell-line-height: defines the line-height of the ui-grid-cell\n                             defines the line-height of the combo-button */\n/************** GRID - end ******************************************************************************************/\n.slab-custom-calendar {\n  max-width: 100%;\n  height: 100%;\n  min-width: auto;\n  border: none;\n  padding: 5px;\n  width: auto; }\n  .slab-custom-calendar .slab-custom-calendar-table {\n    border-spacing: 0;\n    width: 100% !important;\n    height: 100% !important; }\n    .slab-custom-calendar .slab-custom-calendar-table thead {\n      background-color: #f8f8f8;\n      border-bottom: 1px solid #ebebeb;\n      line-height: 34px; }\n      .slab-custom-calendar .slab-custom-calendar-table thead tr th {\n        font-weight: normal;\n        min-width: 40px;\n        max-width: 60px;\n        text-align: center;\n        padding: 0 !important; }\n    .slab-custom-calendar .slab-custom-calendar-table tbody tr td {\n      padding: 0 !important;\n      border-bottom: 1px solid #ebebeb;\n      position: relative; }\n      .slab-custom-calendar .slab-custom-calendar-table tbody tr td:hover, .slab-custom-calendar .slab-custom-calendar-table tbody tr td:active {\n        background-color: #d6d6d6;\n        background: #d6d6d6 !important; }\n      .slab-custom-calendar .slab-custom-calendar-table tbody tr td.disabled-cell {\n        background-color: #ebebeb;\n        pointer-events: none; }\n        .slab-custom-calendar .slab-custom-calendar-table tbody tr td.disabled-cell:hover {\n          background-color: #ebebeb; }\n      .slab-custom-calendar .slab-custom-calendar-table tbody tr td .slab-custom-calendar-cell {\n        width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/systelab-components/calendar/calendar-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns__ = __webpack_require__("../../../../date-fns/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalendarTableComponent = (function () {
    function CalendarTableComponent() {
        this.days = [];
        this.daysHeader = [];
        this.rows = [];
    }
    CalendarTableComponent.prototype.ngOnChanges = function () {
        if (!this.currentDate) {
            this.currentDate = new Date();
        }
        this.loadLanguage(this.locale);
        this.defineHeaderDays();
        this.rows = [];
        this.putDaySlotsIntoArray(this.generateDaysArray());
    };
    CalendarTableComponent.prototype.generateDaysArray = function () {
        var datesArray = [];
        var firstDayOfMonth = Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["setDate"])(this.currentDate, 1);
        var lastDateOfMonth = Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["lastDayOfMonth"])(firstDayOfMonth);
        // Calculate the days to add at the beginning.
        var firstDayPosition = Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["getISODay"])(firstDayOfMonth);
        if (this.language.firstDayOfWeek === 1) {
            firstDayPosition = firstDayPosition - 1;
        }
        firstDayPosition = firstDayPosition % 7;
        // Push the empty days.
        for (var i = 0; i < firstDayPosition; i++) {
            datesArray.push(null);
        }
        // put the dates.
        var date = firstDayOfMonth;
        for (var i = 1; i <= Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["getDate"])(lastDateOfMonth); i++) {
            datesArray.push(date);
            date = Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["addDays"])(date, 1);
        }
        return datesArray;
    };
    CalendarTableComponent.prototype.putDaySlotsIntoArray = function (datesArray) {
        var days = [];
        for (var _i = 0, datesArray_1 = datesArray; _i < datesArray_1.length; _i++) {
            var singleDate = datesArray_1[_i];
            if (singleDate === null) {
                days.push({ day: -1, isHoliday: false });
            }
            else {
                var loadDay = this.getLoadDay(singleDate);
                if (loadDay) {
                    days.push(loadDay);
                }
                else {
                    days.push({ date: singleDate, day: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["getDate"])(singleDate), isHoliday: false });
                }
            }
        }
        // Split in at maximum 6 rows
        for (var i = 0; i < 6; i++) {
            this.rows.push(days.slice(i * 7, (i * 7) + 7));
        }
        // Remove the last two rows if they are empty.
        for (var i = this.rows.length - 1; i >= 3; i--) {
            if (this.rows[i].length === 0) {
                this.rows.splice(i, 1);
            }
        }
        // The last week should have 7 slots too
        var lastRow = this.rows.length;
        for (var j = this.rows[lastRow - 1].length; j < 7; j++) {
            this.rows[lastRow - 1].push({ day: -1, isHoliday: false });
        }
    };
    CalendarTableComponent.prototype.defineHeaderDays = function () {
        this.daysHeader = this.language.dayNamesShort.slice();
        var firstDay = this.daysHeader.slice(0, 1);
        if (this.language.firstDayOfWeek === 1 && firstDay[0] === this.language.dayNamesShort[0]) {
            firstDay = this.daysHeader.splice(0, 1);
            this.daysHeader.push(firstDay[0]);
        }
    };
    CalendarTableComponent.prototype.getLoadDay = function (date) {
        for (var _i = 0, _a = this.days; _i < _a.length; _i++) {
            var day = _a[_i];
            if (Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["isSameDay"])(day.date, date)) {
                return day;
            }
        }
        return null;
    };
    CalendarTableComponent.prototype.loadLanguage = function (shorCode) {
        // TODO: To translate
        switch (shorCode) {
            case 'en':
                this.language = {
                    firstDayOfWeek: 0,
                    dayNames: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
                    dayNamesShort: ['sun', 'mon', 'tue', 'wed', 'thu', 'fir', 'sat'],
                    dayNamesMin: ['Su', 'M', 'Tu', 'W', 'Th', 'F', 'Sa'],
                    monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                    dateFormatValue: 'mm/dd/yy'
                };
                break;
            case 'pl':
                this.language = {
                    firstDayOfWeek: 0,
                    dayNames: ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'],
                    dayNamesShort: ['Niedz.', 'Pon.', 'Wt.', 'Śr.', 'Czw.', 'Pt', 'Sob.'],
                    dayNamesMin: ['Nd', 'P', 'Wt', 'Śr', 'Cz', 'Pt', 'So'],
                    monthNames: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'],
                    dateFormatValue: 'dd-mm-y'
                };
                break;
            default:
                this.language = {
                    firstDayOfWeek: 1,
                    dayNames: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
                    dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
                    dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
                    monthNames: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
                    dateFormatValue: 'dd/mm/yy'
                };
                break;
        }
    };
    return CalendarTableComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CalendarTableComponent.prototype, "currentDate", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], CalendarTableComponent.prototype, "days", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], CalendarTableComponent.prototype, "locale", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]) === "function" && _a || Object)
], CalendarTableComponent.prototype, "templateRef", void 0);
CalendarTableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'systelab-calendar-table',
        template: __webpack_require__("../../../../../src/app/systelab-components/calendar/calendar-table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/systelab-components/calendar/calendar-table.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], CalendarTableComponent);

var _a;
//# sourceMappingURL=calendar-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/systelab-components/colorpicker/color-cell-renderer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorCellRendererComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ColorCellRendererComponent = (function () {
    function ColorCellRendererComponent() {
    }
    ColorCellRendererComponent.prototype.agInit = function (params) {
        this.params = params;
        if (params.data) {
        }
    };
    ColorCellRendererComponent.prototype.refresh = function (params) {
        return true;
    };
    return ColorCellRendererComponent;
}());
ColorCellRendererComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'systelab-cell-colorpicker',
        template: "\n                  <div class=\"slab-color-tag\" [style.background-color]=\"params.data.color\"\n                       [style.border-color]=\"params.data.border\"></div>"
    })
], ColorCellRendererComponent);

//# sourceMappingURL=color-cell-renderer.component.js.map

/***/ }),

/***/ "../../../../../src/app/systelab-components/colorpicker/colorpicker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorComboBox; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__combobox_abstract_combobox_component__ = __webpack_require__("../../../../../src/app/systelab-components/combobox/abstract-combobox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__color_cell_renderer_component__ = __webpack_require__("../../../../../src/app/systelab-components/colorpicker/color-cell-renderer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utilities_color_util_service__ = __webpack_require__("../../../../../src/app/systelab-components/utilities/color.util.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ColorComboBox = (function (_super) {
    __extends(ColorComboBox, _super);
    function ColorComboBox(myRenderer, colorUtilService) {
        var _this = _super.call(this, myRenderer, true) || this;
        _this.myRenderer = myRenderer;
        _this.colorUtilService = colorUtilService;
        _this.values = colorUtilService.generateColorArray([0, 128, 192, 255], true);
        return _this;
    }
    ColorComboBox.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.columnDefs = [
            {
                colID: 'id',
                field: 'value',
                cellRendererFramework: __WEBPACK_IMPORTED_MODULE_2__color_cell_renderer_component__["a" /* ColorCellRendererComponent */],
            }
        ];
        this.gridOptions.columnDefs = this.columnDefs;
    };
    return ColorComboBox;
}(__WEBPACK_IMPORTED_MODULE_1__combobox_abstract_combobox_component__["a" /* AbstractComboBox */]));
ColorComboBox = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'systelab-colorpicker',
        template: __webpack_require__("../../../../../src/app/systelab-components/combobox/abstract-combobox.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__utilities_color_util_service__["a" /* ColorUtilService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__utilities_color_util_service__["a" /* ColorUtilService */]) === "function" && _b || Object])
], ColorComboBox);

var _a, _b;
//# sourceMappingURL=colorpicker.component.js.map

/***/ }),

/***/ "../../../../../src/app/systelab-components/combobox/abstract-combobox.component.html":
/***/ (function(module, exports) {

module.exports = "<div #combobox\n     (hide.bs.dropdown)=\"closeDropDown()\"\n     class=\"dropdown slab-combobox\" [style.height.%]=\"inputHeight\"\n     [ngClass]=\"{'disabled': isDisabled}\">\n    <div #dropdowntoogle class=\"dropdown-toggle\" data-toggle=\"dropdown\" (click)=\"onComboClicked()\" style=\"box-sizing: border-box;height: 100%;\">\n        <input *ngIf=\"!isColorPicker\" #input readonly type=\"text\" class=\"form-control slab-combo-label slab-combo-input\"\n               [style.height.%]=\"inputHeight\"\n               [style.font-family]=\"fontFamily\"\n               [style.font-size.px]=\"fontSize\"\n               [style.font-weight]=\"fontWeight\"\n               [style.font-style]=\"fontStyle\"\n               [(ngModel)]=\"description\" [disabled]=\"isDisabled\"/>\n\n        <div *ngIf=\"isColorPicker\" #input readonly type=\"text\" class=\"slab-combo-input slab-color-container\"\n             [style.height.%]=\"inputHeight\" style=\"white-space: nowrap; overflow: hidden\">\n            <div *ngIf=\"id\" class=\"stripe text-left d-inline-block\"\n                 style=\"margin: 8px 10px\"\n                 [ngClass]=\"{critical: id == '1', 'very-urgent': id == '2', urgent: id == '3', standard: id == '4', nonurgent: id == '5'}\"></div>\n            <div style=\"margin: 4px 1px\" [style.font-family]=\"fontFamily\"\n                 [style.font-size.px]=\"fontSize\"\n                 [style.font-weight]=\"fontWeight\"\n                 [style.font-style]=\"fontStyle\">\n                <span class=\"text-truncate\">{{description}}</span>\n            </div>\n        </div>\n\n        <button #combobutton class=\"slab-combo-button icon-caret-down\" [disabled]=\"isDisabled\"\n                [style.height.%]=\"inputHeight\"></button>\n\n    </div>\n    <div #dropdownmenu class=\"dropdown-menu slab-combo-dropdown\" (click)=\"clickDropDownMenu($event)\" [ngClass]=\"{'disabled': isDisabled}\">\n        <div #dropdown class=\"slab-combo-dropdown-box\">\n            <div *ngIf=\"filter\" class=\"slab-filter-container\" [style.font-family]=\"fontFamily\"\n                 [style.font-size.px]=\"fontSize\"\n                 [style.font-weight]=\"fontWeight\"\n                 [style.font-style]=\"fontStyle\">\n                <input [value]=\"filterValue\" (keyup)=\"doSearch($event)\">\n            </div>\n            <div #hidden class=\"height-hidden\"></div>\n            <ag-grid-angular *ngIf=\"this.isDropdownOpened\" #grid id=\"agGrid\" #agGrid\n                             style=\"width: 100%; height: 100%;\"\n                             [style.font-family]=\"fontFamily\"\n                             [style.font-size.px]=\"fontSize\"\n                             [style.font-weight]=\"fontWeight\"\n                             [style.font-style]=\"fontStyle\"\n                             class=\"ag-fresh\"\n                             [gridOptions]=\"gridOptions\" (selectionChanged)=\"onSelectionChanged($event)\"\n                             (modelUpdated)=\"onModelUpdated()\"\n                             (rowSelected)=\"onRowSelected($event)\">\n            </ag-grid-angular>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/systelab-components/combobox/abstract-combobox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractComboBox; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utilities_styles_util_service__ = __webpack_require__("../../../../../src/app/systelab-components/utilities/styles.util.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AbstractComboBox = (function () {
    function AbstractComboBox(myRenderer, isColorPicker) {
        this.myRenderer = myRenderer;
        this.isColorPicker = isColorPicker;
        this.filter = false;
        this.inputHeight = null;
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.idChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.descriptionChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.fieldToShowChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.codeChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.filterValue = '';
        this.currentSelected = {};
        this.top = 0;
        this.left = 0;
        this.windowResized = false;
    }
    Object.defineProperty(AbstractComboBox.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
            this.afterSettingId(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractComboBox.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (value) {
            this._description = value;
            this.descriptionChange.emit(this._description);
            this.fieldToShow = this._description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractComboBox.prototype, "fieldToShow", {
        get: function () {
            return this._fieldToShow;
        },
        set: function (value) {
            this._fieldToShow = value;
            this.fieldToShowChange.emit(this._fieldToShow);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractComboBox.prototype, "code", {
        get: function () {
            return this._code;
        },
        set: function (value) {
            this._code = value;
            this.codeChange.emit(this._code);
        },
        enumerable: true,
        configurable: true
    });
    AbstractComboBox.prototype.ngOnInit = function () {
        var minHeight = __WEBPACK_IMPORTED_MODULE_1__utilities_styles_util_service__["a" /* StylesUtilService */].getStyleValue(this.comboButtonElement, 'min-height');
        AbstractComboBox.ROW_HEIGHT = Number(minHeight);
        this.columnDefs = [
            {
                colID: 'id',
                field: 'description'
            }
        ];
        this.gridOptions = {};
        this.gridOptions.columnDefs = this.columnDefs;
        this.gridOptions.headerHeight = 0;
        this.gridOptions.suppressCellSelection = true;
        this.gridOptions.rowSelection = 'single';
        this.gridOptions.rowData = this.values;
        this.myRenderer.setStyle(this.dropdownElement.nativeElement, 'font-family', this.fontFamily);
        this.myRenderer.setStyle(this.dropdownElement.nativeElement, 'font-size', this.fontSize);
        this.myRenderer.setStyle(this.dropdownElement.nativeElement, 'font-weight', this.fontWeight);
        this.myRenderer.setStyle(this.dropdownElement.nativeElement, 'font-tyle', this.fontStyle);
    };
    AbstractComboBox.prototype.refresh = function (params) {
        return true;
    };
    AbstractComboBox.prototype.onResize = function (event) {
        if (this.isDropDownOpen()) {
            this.closeDropDown();
        }
        var parentWidth = this.comboboxElement.nativeElement.offsetWidth;
        this.myRenderer.setStyle(this.dropdownElement.nativeElement, 'width', parentWidth + 'px');
        this.windowResized = true;
    };
    AbstractComboBox.prototype.agInit = function (params) {
        this.params = params;
    };
    AbstractComboBox.prototype.onComboClicked = function () {
        var isOpen = this.isDropDownOpen();
        if (!isOpen) {
            this.isDropdownOpened = true;
            this.showDropDown();
        }
    };
    AbstractComboBox.prototype.setDropdownWidth = function () {
        var parentWidth = this.comboboxElement.nativeElement.offsetWidth;
        this.myRenderer.setStyle(this.dropdownElement.nativeElement, 'width', parentWidth + 'px');
        this.setGridSize();
    };
    AbstractComboBox.prototype.isDropDownOpen = function () {
        return this.comboboxElement.nativeElement.className.includes('show');
    };
    AbstractComboBox.prototype.closeDropDown = function () {
        this.resetDropDownPositionAndHeight();
        if (this.isDropDownOpen()) {
            this.myRenderer.removeClass(this.comboboxElement.nativeElement, 'show');
            this.myRenderer.removeClass(this.dropdownMenuElement.nativeElement, 'show');
        }
    };
    AbstractComboBox.prototype.resetDropDownPositionAndHeight = function () {
        this.myRenderer.setStyle(this.dropdownElement.nativeElement, 'top', null);
        this.myRenderer.setStyle(this.dropdownElement.nativeElement, 'left', null);
        this.myRenderer.setStyle(this.dropdownElement.nativeElement, 'height', '0px');
    };
    AbstractComboBox.prototype.loop = function () {
        var _this = this;
        var result = true;
        if (this.isDropDownOpen()) {
            this.setDropdownHeight();
            this.setDropdownPosition();
            result = false;
        }
        if (result) {
            setTimeout(function () { return _this.loop(); }, 10);
        }
        else {
            return;
        }
    };
    AbstractComboBox.prototype.showDropDown = function () {
        var _this = this;
        this.setDropdownWidth();
        if (!this.isDropDownOpen()) {
            setTimeout(function () { return _this.loop(); }, 10);
        }
    };
    AbstractComboBox.prototype.clickDropDownMenu = function (e) {
    };
    AbstractComboBox.prototype.setDropdownHeight = function () {
        var calculatedHeight = 0;
        var totalItems = Number(this.values ? this.values.length : 0);
        if (totalItems === 0) {
            calculatedHeight += 6 + AbstractComboBox.ROW_HEIGHT;
            this.myRenderer.setStyle(this.dropdownElement.nativeElement, 'height', calculatedHeight + 'px');
        }
        else if (totalItems < 10) {
            calculatedHeight += 6 + AbstractComboBox.ROW_HEIGHT * totalItems;
            this.myRenderer.setStyle(this.dropdownElement.nativeElement, 'height', calculatedHeight + 'px');
        }
        else {
            calculatedHeight += AbstractComboBox.ROW_HEIGHT * 10;
            this.myRenderer.setStyle(this.dropdownElement.nativeElement, 'height', calculatedHeight + 'px');
        }
        if (this.filter) {
            var agGridElement = this.dropdownElement.nativeElement.getElementsByTagName('ag-grid-angular');
            var agGridHeight = calculatedHeight - 36;
            this.myRenderer.setStyle(agGridElement[0], 'height', agGridHeight + 'px');
        }
    };
    AbstractComboBox.prototype.setDropdownPosition = function () {
        this.myRenderer.setStyle(this.dropdownMenuElement.nativeElement, 'position', 'fixed');
        this.myRenderer.setStyle(this.dropdownElement.nativeElement, 'position', 'absolute');
        var dropdownParentRect = this.inputElement.nativeElement.getBoundingClientRect();
        this.top = dropdownParentRect.top;
        this.left = dropdownParentRect.left;
        if (this.top + this.dropdownElement.nativeElement.offsetHeight > window.innerHeight) {
            this.top = this.top - this.dropdownElement.nativeElement.offsetHeight - this.inputElement.nativeElement.offsetHeight - 2;
        }
        this.myRenderer.setStyle(this.dropdownElement.nativeElement, 'top', this.top + 'px');
        this.myRenderer.setStyle(this.dropdownElement.nativeElement, 'left', this.left + 'px');
    };
    AbstractComboBox.prototype.getSelectedRow = function () {
        var selectedRow = this.gridOptions.api.getSelectedRows();
        if (selectedRow !== null) {
            return selectedRow[0];
        }
        return null;
    };
    AbstractComboBox.prototype.doSearch = function (event) {
        // TODO: check when translations are integrated
        var auxListArray = this.values.filter(function (element) { return element.description.indexOf(event.target.value) > -1; });
        this.gridOptions.api.setRowData(auxListArray);
    };
    AbstractComboBox.prototype.onSelectionChanged = function (event) {
        var selectedRow = this.getSelectedRow();
        this.id = selectedRow.id;
        this.description = selectedRow.description;
        this.currentSelected = selectedRow;
        this.change.emit(selectedRow);
        this.idChange.emit(selectedRow.id);
    };
    AbstractComboBox.prototype.onModelUpdated = function (event) {
        this.gridOptions.api.sizeColumnsToFit();
    };
    AbstractComboBox.prototype.setGridSize = function () {
        var _this = this;
        this.gridOptions.rowHeight = AbstractComboBox.ROW_HEIGHT;
        if (this.gridOptions.api && this.columnDefs) {
            if (this.windowResized) {
                setTimeout(function () {
                    _this.gridOptions.api.doLayout();
                    _this.gridOptions.api.sizeColumnsToFit();
                    _this.windowResized = false;
                }, 5);
            }
            else {
                this.gridOptions.api.doLayout();
                this.gridOptions.api.sizeColumnsToFit();
            }
        }
    };
    AbstractComboBox.prototype.onRowSelected = function (event) {
    };
    AbstractComboBox.prototype.afterSettingId = function (value) {
    };
    return AbstractComboBox;
}());

__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], AbstractComboBox.prototype, "filter", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], AbstractComboBox.prototype, "fontFamily", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], AbstractComboBox.prototype, "fontSize", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], AbstractComboBox.prototype, "fontWeight", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], AbstractComboBox.prototype, "fontStyle", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], AbstractComboBox.prototype, "values", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], AbstractComboBox.prototype, "isDisabled", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], AbstractComboBox.prototype, "inputHeight", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], AbstractComboBox.prototype, "change", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], AbstractComboBox.prototype, "idChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], AbstractComboBox.prototype, "descriptionChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], AbstractComboBox.prototype, "id", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], AbstractComboBox.prototype, "description", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], AbstractComboBox.prototype, "fieldToShow", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], AbstractComboBox.prototype, "fieldToShowChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], AbstractComboBox.prototype, "code", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], AbstractComboBox.prototype, "codeChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('combobox'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], AbstractComboBox.prototype, "comboboxElement", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dropdowntoogle'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
], AbstractComboBox.prototype, "dropdownToogleElement", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dropdownmenu'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object)
], AbstractComboBox.prototype, "dropdownMenuElement", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dropdown'),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _d || Object)
], AbstractComboBox.prototype, "dropdownElement", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('input'),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _e || Object)
], AbstractComboBox.prototype, "inputElement", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('combobutton'),
    __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _f || Object)
], AbstractComboBox.prototype, "comboButtonElement", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AbstractComboBox.prototype, "onResize", null);
var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=abstract-combobox.component.js.map

/***/ }),

/***/ "../../../../../src/app/systelab-components/contextmenu/context-menu-action-data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContextMenuActionData; });
var ContextMenuActionData = (function () {
    function ContextMenuActionData(elementId, actionId) {
        this.elementId = elementId;
        this.actionId = actionId;
    }
    return ContextMenuActionData;
}());

//# sourceMappingURL=context-menu-action-data.js.map

/***/ }),

/***/ "../../../../../src/app/systelab-components/contextmenu/context-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div #dropdownparent class=\"dropdown\">\r\n    <div class=\"dropdown-toggle slab-context-menu\" data-toggle=\"dropdown\" (click)=\"dotsClicked($event)\">\r\n        <i class=\"icon-context-menu\"></i>\r\n    </div>\r\n    <div #dropdownmenu class=\"dropdown-menu slab-dropdown-menu\">\r\n        <div #dropdown class=\"slab-dropdown\">\r\n            <div *ngIf=\"isOpened\">\r\n                <ul *ngFor=\"let action of contextMenuOptions\">\r\n                    <li class=\"{{!isEnabled(elementID, action.actionId) ? 'disabled': '' }}\"\r\n                        (click)=\"isEnabled(elementID, action.actionId) ? executeAction(elementID, action.actionId) : null\"\r\n                        *ngIf=\"isEnabled(elementID, action.actionId)\">\r\n                        <a>{{action.actionText}}</a></li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/systelab-components/contextmenu/context-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContextMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__context_menu_action_data__ = __webpack_require__("../../../../../src/app/systelab-components/contextmenu/context-menu-action-data.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContextMenuComponent = (function () {
    function ContextMenuComponent(el, myRenderer) {
        this.el = el;
        this.myRenderer = myRenderer;
        this.action = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.top = 0;
        this.left = 0;
        this.isOpened = false;
    }
    ContextMenuComponent.prototype.isDropDownOpened = function () {
        return this.dropdownParent.nativeElement.className.includes('show');
    };
    ContextMenuComponent.prototype.dotsClicked = function (event) {
        if (!this.isDropDownOpened()) {
            this.isOpened = true;
            this.top = event.clientY;
            this.left = event.clientX;
            this.showDropDown();
        }
    };
    ContextMenuComponent.prototype.loop = function () {
        var _this = this;
        var result = true;
        if (this.isDropDownOpened()) {
            this.myRenderer.setStyle(this.dropdownMenuElement.nativeElement, 'position', 'fixed');
            this.myRenderer.setStyle(this.dropdownElement.nativeElement, 'position', 'absolute');
            this.top = this.top - this.dropdownParent.nativeElement.offsetHeight;
            if (this.top + this.dropdownElement.nativeElement.offsetHeight > window.innerHeight) {
                this.top = this.top - this.dropdownElement.nativeElement.offsetHeight;
            }
            if (this.left + this.dropdownElement.nativeElement.offsetWidth > window.innerWidth) {
                this.left = this.left - this.dropdownElement.nativeElement.offsetWidth;
            }
            this.myRenderer.setStyle(this.dropdownElement.nativeElement, 'top', this.top + 'px');
            this.myRenderer.setStyle(this.dropdownElement.nativeElement, 'left', this.left + 'px');
            this.addListeners();
            result = false;
        }
        if (result) {
            setTimeout(function () { return _this.loop(); }, 10);
        }
    };
    ContextMenuComponent.prototype.showDropDown = function () {
        var _this = this;
        setTimeout(function () { return _this.loop(); }, 10);
    };
    ContextMenuComponent.prototype.resetDropDownPositionAndHeight = function () {
        this.myRenderer.setStyle(this.dropdownElement.nativeElement, 'top', null);
        this.myRenderer.setStyle(this.dropdownElement.nativeElement, 'left', null);
    };
    ContextMenuComponent.prototype.closeDropDown = function () {
        this.destroyWheelListener();
        this.destroyKeyListener();
        this.resetDropDownPositionAndHeight();
        if (this.isDropDownOpened()) {
            jQuery('.dropdown-toggle')
                .dropdown('toggle');
        }
        this.isOpened = false;
    };
    ContextMenuComponent.prototype.addListeners = function () {
        var _this = this;
        this.destroyWheelListener = this.myRenderer.listen('window', 'wheel', function (evt) {
            _this.handleWheelEvents(evt);
        });
        this.destroyKeyListener = this.myRenderer.listen('document', 'keydown', function (evt) {
            _this.handleKeyboardEvents(evt);
        });
    };
    ContextMenuComponent.prototype.handleKeyboardEvents = function (event) {
        if (event.key === 'Escape') {
            if (this.isDropDownOpened()) {
                this.closeDropDown();
            }
        }
    };
    ContextMenuComponent.prototype.handleWheelEvents = function (event) {
        if (this.isDropDownOpened()) {
            this.closeDropDown();
        }
    };
    ContextMenuComponent.prototype.isEnabled = function (elementId, actionId) {
        var option = this.contextMenuOptions.find(function (opt) { return opt.actionId === actionId; });
        if (option && option.isActionEnabled !== null && option.isActionEnabled !== undefined) {
            return option.isActionEnabled(elementId, actionId);
        }
        return true;
    };
    ContextMenuComponent.prototype.executeAction = function (elementId, actionId) {
        var option = this.contextMenuOptions.find(function (opt) { return opt.actionId === actionId; });
        if (option && option.action !== null && option.action !== undefined) {
            var actionData = new __WEBPACK_IMPORTED_MODULE_1__context_menu_action_data__["a" /* ContextMenuActionData */](elementId, actionId);
            return option.action(actionData);
        }
        else {
            var actionData = new __WEBPACK_IMPORTED_MODULE_1__context_menu_action_data__["a" /* ContextMenuActionData */](elementId, actionId);
            this.action.emit(actionData);
        }
    };
    return ContextMenuComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dropdownparent'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], ContextMenuComponent.prototype, "dropdownParent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dropdownmenu'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
], ContextMenuComponent.prototype, "dropdownMenuElement", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dropdown'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object)
], ContextMenuComponent.prototype, "dropdownElement", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ContextMenuComponent.prototype, "action", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ContextMenuComponent.prototype, "contextMenuOptions", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ContextMenuComponent.prototype, "elementID", void 0);
ContextMenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'systelab-context-menu',
        template: __webpack_require__("../../../../../src/app/systelab-components/contextmenu/context-menu.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]) === "function" && _e || Object])
], ContextMenuComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=context-menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/systelab-components/datepicker/datepicker-time.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex\">\n    <p-calendar #calendar [(ngModel)]=\"currentDate\" [showIcon]=\"false\" [locale]=\"language\"\n                [dateFormat]=\"language.dateFormatValue\" (onFocus)=\"saveEventOnFocus($event)\"\n                (onBlur)=\"changeDate()\"\n                [showOtherMonths]=\"true\"\n                [required]=\"isRequired\"\n                [disabled]=\"disabled\"\n                appendTo=\"body\"\n                [style.margin-right.px]=\"5\"\n                [style.min-width.px]=\"130\"\n                class=\"w-50\"\n                [ngClass]=\"{'date-error': error || (isRequired && !currentDate), 'is-disabled': disabled, 'previous-date': previousDate, 'input-expand-height':inputExpandHeight}\">\n        <p-header id=\"{{datepickerId}}\">\n            <a class=\"icon-angle-double-left slab-icon-medium\" (click)=\"prevYear()\"></a>\n            <a class=\"icon-angle-left slab-icon-medium\" (click)=\"prevMonth($event)\"></a>\n            <a class=\"icon-angle-double-right slab-icon-medium\" (click)=\"nextYear()\"></a>\n            <a class=\"icon-angle-right slab-icon-medium\" (click)=\"nextMonth($event)\"></a>\n            <div class=\"ui-datepicker-title\">\n                <span class=\"ui-datepicker-month\">{{ currentCalendar.currentMonthText }}</span>\n                <span class=\"ui-datepicker-year\">{{ currentCalendar.currentYear }}</span>\n            </div>\n        </p-header>\n    </p-calendar>\n    <systelab-spinner [spinValues]=\"touchSpinHourValues\" [(valueStr)]=\"currentHours\" id=\"hours\" [fillUnitsWithZero]=\"true\"></systelab-spinner>\n    <label class=\"mx-1 my-0\">:</label>\n    <systelab-spinner [spinValues]=\"touchSpinMinuteValues\" [(valueStr)]=\"currentMinutes\" id=\"minutes\"\n                    [fillUnitsWithZero]=\"true\"></systelab-spinner>\n    </div>\n"

/***/ }),

/***/ "../../../../../src/app/systelab-components/datepicker/datepicker-time.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatepickerTime; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datepicker_component__ = __webpack_require__("../../../../../src/app/systelab-components/datepicker/datepicker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__spinner_touch_spin_values__ = __webpack_require__("../../../../../src/app/systelab-components/spinner/touch.spin-values.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_systelab_translate_lib_i18n_service__ = __webpack_require__("../../../../systelab-translate/lib/i18n.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_systelab_translate_lib_i18n_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_systelab_translate_lib_i18n_service__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DatepickerTime = (function (_super) {
    __extends(DatepickerTime, _super);
    function DatepickerTime(myRenderer, i18nService) {
        var _this = _super.call(this, myRenderer, i18nService) || this;
        _this.currentHoursChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.currentMinutesChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.touchSpinHourValues = new __WEBPACK_IMPORTED_MODULE_2__spinner_touch_spin_values__["a" /* TouchSpinValues */](0, 0, 23, 1);
        _this.touchSpinMinuteValues = new __WEBPACK_IMPORTED_MODULE_2__spinner_touch_spin_values__["a" /* TouchSpinValues */](0, 0, 59, 1);
        return _this;
    }
    Object.defineProperty(DatepickerTime.prototype, "currentDate", {
        get: function () {
            return this._currentDate;
        },
        set: function (value) {
            this._currentDate = value;
            this.currentDateChange.emit(this._currentDate);
            if (this._currentDate) {
                this.currentHours = this.currentHours ? this.currentHours : String(this._currentDate.getHours());
                this.currentMinutes = this.currentMinutes ? this.currentMinutes : String(this._currentDate.getMinutes());
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatepickerTime.prototype, "currentHours", {
        get: function () {
            return this._currentHours;
        },
        set: function (value) {
            if (value) {
                var numberValue = Number(value);
                this._currentHours = value;
                this.currentHoursChange.emit(this._currentHours);
                if (this.currentDate) {
                    if (this._currentHours) {
                        this._currentDate.setHours(numberValue);
                    }
                    else {
                        this._currentDate.setHours(0);
                    }
                    this.currentDateChange.emit(this._currentDate);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatepickerTime.prototype, "currentMinutes", {
        get: function () {
            return this._currentMinutes;
        },
        set: function (value) {
            if (value) {
                var numberValue = Number(value);
                this._currentMinutes = value;
                this.currentMinutesChange.emit(this._currentMinutes);
                if (this.currentDate) {
                    if (this._currentMinutes) {
                        this._currentDate.setMinutes(numberValue);
                    }
                    else {
                        this._currentDate.setMinutes(0);
                    }
                    this.currentDateChange.emit(this._currentDate);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    return DatepickerTime;
}(__WEBPACK_IMPORTED_MODULE_1__datepicker_component__["a" /* Datepicker */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], DatepickerTime.prototype, "currentDate", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], DatepickerTime.prototype, "currentHours", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], DatepickerTime.prototype, "currentHoursChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], DatepickerTime.prototype, "currentMinutes", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], DatepickerTime.prototype, "currentMinutesChange", void 0);
DatepickerTime = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'systelab-date-time',
        template: __webpack_require__("../../../../../src/app/systelab-components/datepicker/datepicker-time.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_systelab_translate_lib_i18n_service__["I18nService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_systelab_translate_lib_i18n_service__["I18nService"]) === "function" && _b || Object])
], DatepickerTime);

var _a, _b;
//# sourceMappingURL=datepicker-time.component.js.map

/***/ }),

/***/ "../../../../../src/app/systelab-components/datepicker/datepicker.component.html":
/***/ (function(module, exports) {

module.exports = "<p-calendar #calendar [(ngModel)]=\"currentDate\" [showIcon]=\"false\" [locale]=\"language\"\n            [dateFormat]=\"language.dateFormatValue\" (onFocus)=\"saveEventOnFocus($event)\"\n            (onBlur)=\"changeDate()\"\n            (keypress)=\"onKeyPressed($event)\"\n            [showOtherMonths]=\"true\"\n            [required]=\"isRequired\"\n            [disabled]=\"disabled\"\n            appendTo=\"body\"\n            [ngClass]=\"{'date-error': error || (isRequired && !currentDate), 'is-disabled': disabled, 'previous-date': previousDate && markPreviousDate, 'input-expand-height':inputExpandHeight}\">\n    <p-header id=\"{{datepickerId}}\">\n        <a class=\"icon-angle-double-left slab-icon-medium\" (click)=\"prevYear()\"></a>\n        <a class=\"icon-angle-left slab-icon-medium\" (click)=\"prevMonth($event)\"></a>\n        <a class=\"icon-angle-double-right slab-icon-medium\" (click)=\"nextYear()\"></a>\n        <a class=\"icon-angle-right slab-icon-medium\" (click)=\"nextMonth($event)\"></a>\n        <div class=\"ui-datepicker-title\">\n            <span class=\"ui-datepicker-month\">{{ currentCalendar.currentMonthText }}</span>\n            <span class=\"ui-datepicker-year\">{{ currentCalendar.currentYear }}</span>\n        </div>\n    </p-header>\n</p-calendar>"

/***/ }),

/***/ "../../../../../src/app/systelab-components/datepicker/datepicker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Datepicker; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_primeng_components_calendar_calendar__ = __webpack_require__("../../../../primeng/components/calendar/calendar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_primeng_components_calendar_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_primeng_components_calendar_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_systelab_translate_lib_i18n_service__ = __webpack_require__("../../../../systelab-translate/lib/i18n.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_systelab_translate_lib_i18n_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_systelab_translate_lib_i18n_service__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Datepicker = (function () {
    function Datepicker(myRenderer, i18nService) {
        this.myRenderer = myRenderer;
        this.i18nService = i18nService;
        this.disabled = false;
        this.error = false;
        this.isRequired = false;
        this.markPreviousDate = false;
        this.previousDate = false;
        this.currentDateChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.datepickerId = (Math.random() * (999999999999 - 1)).toString();
        this.pHeaderElement = document.getElementById(this.datepickerId);
        this.addListeners();
        // TODO: To get the language and modify the values.
    }
    Object.defineProperty(Datepicker.prototype, "currentDate", {
        get: function () {
            return this._currentDate;
        },
        set: function (value) {
            this._currentDate = value;
            this.currentDateChange.emit(this._currentDate);
            this.checkPreviousDate();
        },
        enumerable: true,
        configurable: true
    });
    Datepicker.prototype.ngOnInit = function () {
        this.getLanguage();
        this.currentDocSize = window.innerWidth;
        this.currentLanguage = this.i18nService.getCurrentLanguage();
        this.addListeners();
    };
    Datepicker.prototype.ngAfterViewInit = function () {
        var newElement = document.createElement('i');
        newElement.className = 'icon-calendar';
        this.currentCalendar.el.nativeElement.childNodes[1].className = 'ui-calendar slab-form-icon w-100';
        this.currentCalendar.el.nativeElement.childNodes[1].appendChild(newElement);
    };
    Datepicker.prototype.ngDoCheck = function () {
        if (window.innerWidth !== this.currentDocSize) {
            this.currentDocSize = window.innerWidth;
            this.closeDatepicker();
        }
        if (this.pHeaderElement !== document.getElementById(this.datepickerId)) {
            this.pHeaderElement = document.getElementById(this.datepickerId);
            if (this.pHeaderElement) {
                this.repositionateCalendar(new __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"](this.pHeaderElement.parentElement.parentElement));
            }
        }
        if (this.currentLanguage !== this.i18nService.getCurrentLanguage()) {
            this.currentLanguage = this.i18nService.getCurrentLanguage();
            this.getLanguage();
        }
    };
    Datepicker.prototype.ngOnDestroy = function () {
        this.destroyKeyListener();
        this.destroyWheelListener();
    };
    Datepicker.prototype.checkPreviousDate = function () {
        if (this.currentDate) {
            var today = new Date();
            today.setHours(0, 0, 0, 0);
            if (this.currentDate.getTime() < today.getTime()) {
                this.previousDate = true;
            }
            else {
                this.previousDate = false;
            }
        }
        else {
            this.previousDate = false;
        }
    };
    Datepicker.prototype.changeDate = function () {
        var emit = true;
        var today = new Date();
        if (this.currentCalendar.inputfieldViewChild.nativeElement.value && this.currentCalendar.inputfieldViewChild.nativeElement.value.trim()) {
            var dateStr = this.currentCalendar.inputfieldViewChild.nativeElement.value.trim();
            dateStr = dateStr.toLowerCase();
            if (dateStr.length >= 2) {
                if (dateStr.lastIndexOf('d') === dateStr.length - 1) {
                    var days = Number(dateStr.replace('d', '')
                        .replace('D', ''));
                    this.currentDate = new Date();
                    emit = false;
                    if (!isNaN(days)) {
                        this.currentDate.setDate(today.getDate() - days);
                        emit = true;
                    }
                }
                else if (dateStr.lastIndexOf('w') === dateStr.length - 1) {
                    var weeks = Number(dateStr.replace('w', '')
                        .replace('W', ''));
                    this.currentDate = new Date();
                    emit = false;
                    if (!isNaN(weeks)) {
                        this.currentDate.setDate(today.getDate() - (weeks * 7));
                        emit = true;
                    }
                }
                else if (dateStr.lastIndexOf('s') === dateStr.length - 1) {
                    var weeks = Number(dateStr.replace('s', '')
                        .replace('S', ''));
                    this.currentDate = new Date();
                    emit = false;
                    if (!isNaN(weeks)) {
                        this.currentDate.setDate(today.getDate() - (weeks * 7));
                        emit = true;
                    }
                }
                else if (dateStr.lastIndexOf('m') === dateStr.length - 1) {
                    var months = Number(dateStr.replace('m', '')
                        .replace('M', ''));
                    this.currentDate = new Date();
                    emit = false;
                    if (!isNaN(months)) {
                        this.currentDate.setMonth(today.getMonth() + months);
                        emit = true;
                    }
                }
                else if (dateStr.lastIndexOf('a') === dateStr.length - 1) {
                    var years = Number(dateStr.replace('a', '')
                        .replace('S', ''));
                    this.currentDate = new Date();
                    emit = false;
                    if (!isNaN(years)) {
                        this.currentDate.setFullYear(today.getFullYear() + years, today.getMonth(), today.getDate());
                        emit = true;
                    }
                }
                else if (dateStr.lastIndexOf('y') === dateStr.length - 1) {
                    var years = Number(dateStr.replace('y', '')
                        .replace('Y', ''));
                    this.currentDate = new Date();
                    emit = false;
                    if (!isNaN(years)) {
                        this.currentDate.setFullYear(today.getFullYear() + years, today.getMonth(), today.getDate());
                        emit = true;
                    }
                }
            }
        }
        if (emit) {
            this.currentDateChange.emit(this.currentDate);
        }
    };
    Datepicker.prototype.onKeyPressed = function (event) {
        if (event.keyCode === 13) {
            this.changeDate();
            this.closeDatepicker();
        }
    };
    Datepicker.prototype.saveEventOnFocus = function (evt) {
        this.inputElement = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"](evt.target);
        // this.getLanguage();
        this.focusEvt = evt;
    };
    Datepicker.prototype.repositionateCalendar = function (element) {
        var inputElementTop, inputElementHeight, datepickerElementHeight;
        inputElementTop = this.inputElement.nativeElement.getBoundingClientRect().top;
        inputElementHeight = this.inputElement.nativeElement.getBoundingClientRect().height;
        datepickerElementHeight = element.nativeElement.getBoundingClientRect().height;
        if (inputElementTop + inputElementHeight + datepickerElementHeight > window.innerHeight) {
            var newTop = inputElementTop + inputElementHeight - (datepickerElementHeight + inputElementHeight + 10);
            this.myRenderer.setAttribute(element.nativeElement, 'top', newTop + 'px');
        }
    };
    Datepicker.prototype.nextMonth = function (event) {
        this.currentCalendar.nextMonth(event);
    };
    Datepicker.prototype.prevMonth = function (event) {
        this.currentCalendar.prevMonth(event);
    };
    Datepicker.prototype.nextYear = function () {
        var currentYear = this.currentCalendar.currentYear + 1;
        this.currentCalendar.onYearDropdownChange(currentYear.toString());
    };
    Datepicker.prototype.prevYear = function () {
        var currentYear = this.currentCalendar.currentYear - 1;
        this.currentCalendar.onYearDropdownChange(currentYear.toString());
    };
    Datepicker.prototype.closeDatepicker = function () {
        this.currentCalendar.focus = false;
        this.currentCalendar.overlayVisible = false;
        //this.currentCalendar.closeOverlay = true;
    };
    /*changeLanguage( event: Event ): void {
     this.currentCalendar.weekDays = this.language.dayNamesMin;
     }*/
    Datepicker.prototype.getLanguage = function () {
        this.language = {
            dayNames: [
                this.i18nService.instant('COMMON_SUNDAY'),
                this.i18nService.instant('COMMON_MONDAY'),
                this.i18nService.instant('COMMON_TUESDAY'),
                this.i18nService.instant('COMMON_WEDNESDAY'),
                this.i18nService.instant('COMMON_THURSDAY'),
                this.i18nService.instant('COMMON_FRIDAY'),
                this.i18nService.instant('COMMON_SATURDAY')
            ],
            dayNamesShort: [
                this.i18nService.instant('COMMON_SEVENTH_DAY'),
                this.i18nService.instant('COMMON_FIRST_DAY'),
                this.i18nService.instant('COMMON_SECOND_DAY'),
                this.i18nService.instant('COMMON_THIRD_DAY'),
                this.i18nService.instant('COMMON_FOURTH_DAY'),
                this.i18nService.instant('COMMON_FIFTH_DAY'),
                this.i18nService.instant('COMMON_SIXTH_DAY')
            ],
            dayNamesMin: [
                this.i18nService.instant('COMMON_SEVENTH_DAY'),
                this.i18nService.instant('COMMON_FIRST_DAY'),
                this.i18nService.instant('COMMON_SECOND_DAY'),
                this.i18nService.instant('COMMON_THIRD_DAY'),
                this.i18nService.instant('COMMON_FOURTH_DAY'),
                this.i18nService.instant('COMMON_FIFTH_DAY'),
                this.i18nService.instant('COMMON_SIXTH_DAY')
            ],
            monthNames: [
                this.i18nService.instant('COMMON_JANUARY'),
                this.i18nService.instant('COMMON_FEBRUARY'),
                this.i18nService.instant('COMMON_MARCH'),
                this.i18nService.instant('COMMON_APRIL'),
                this.i18nService.instant('COMMON_MAY'),
                this.i18nService.instant('COMMON_JUNE'),
                this.i18nService.instant('COMMON_JULY'),
                this.i18nService.instant('COMMON_AUGUST'),
                this.i18nService.instant('COMMON_SEPTEMBER'),
                this.i18nService.instant('COMMON_OCTOBER'),
                this.i18nService.instant('COMMON_NOVEMBER'),
                this.i18nService.instant('COMMON_DECEMBER')
            ],
            monthNamesShort: [
                this.i18nService.instant('JOB_MONTHS_1'),
                this.i18nService.instant('JOB_MONTHS_2'),
                this.i18nService.instant('JOB_MONTHS_3'),
                this.i18nService.instant('JOB_MONTHS_4'),
                this.i18nService.instant('JOB_MONTHS_5'),
                this.i18nService.instant('JOB_MONTHS_6'),
                this.i18nService.instant('JOB_MONTHS_7'),
                this.i18nService.instant('JOB_MONTHS_8'),
                this.i18nService.instant('JOB_MONTHS_9'),
                this.i18nService.instant('JOB_MONTHS_10'),
                this.i18nService.instant('JOB_MONTHS_11'),
                this.i18nService.instant('JOB_MONTHS_12')
            ]
        };
        this.language.firstDayOfWeek = this.getFirstDayOfWeek();
        this.language.dateFormatValue = this.getDateFormat(true);
        this.currentCalendar.dateFormat = this.language.dateFormatValue;
    };
    Datepicker.prototype.getFirstDayOfWeek = function () {
        switch (this.i18nService.getCurrentLanguage()) {
            case 'us': //'US'
            case 'en_US':
            case 'zh': //'CN'
            case 'th': //'TH'
            case 'ja':
                return 0;
            case 'en': //'GB'
            case 'it': //'IT'
            case 'ar':
            case 'es':
            case 'bo':
            case 'cl':
            case 'co':
            case 'cr':
            case 'do':
            case 'ec':
            case 'gt':
            case 'hn':
            case 'mx':
            case 'ni':
            case 'pa':
            case 'pe':
            case 'pr':
            case 'py':
            case 'sv':
            case 'ur':
            case 've':
            case 'fr':
            case 'gl':
            case 'ca':
            case 'pl': //'PL'
            case 'lt': //'LT'
            case 'pt': //'PT'
            case 'pt_BR':
            case 'nl': //'NL'
            case 'sk': //'SK'
            case 'ru': //'RU'
            case 'de': //'DE'
            case 'ko':
            default:
                return 1;
        }
    };
    Datepicker.prototype.getDateFormat = function (isFullYear) {
        var stringDateFormat = '';
        switch (this.i18nService.getCurrentLanguage()) {
            case 'us':
            case 'en_US':
                stringDateFormat = 'm/d/y';
                break;
            case 'en':
            case 'it':
            case 'ar':
            case 'es':
            case 'bo':
            case 'cl':
            case 'co':
            case 'cr':
            case 'do':
            case 'ec':
            case 'gt':
            case 'hn':
            case 'mx':
            case 'ni':
            case 'pa':
            case 'pe':
            case 'pr':
            case 'py':
            case 'sv':
            case 'ur':
            case 've':
            case 'fr':
            case 'gl':
            case 'ca':
                stringDateFormat = 'dd/mm/y';
                break;
            case 'ko':
                stringDateFormat = 'y. m. d';
                break;
            case 'pl':
            case 'lt':
                stringDateFormat = 'y-mm-dd';
                break;
            case 'pt':
            case 'pt-BR':
            case 'nl':
                stringDateFormat = 'dd-mm-y';
                break;
            case 'sk':
            case 'ru':
                stringDateFormat = 'd.m.y';
                break;
            case 'zh':
                stringDateFormat = 'y-m-d';
                break;
            case 'de':
                stringDateFormat = 'dd.mm.y';
                break;
            case 'th':
                stringDateFormat = 'd/m/y';
                break;
            case 'ja':
                stringDateFormat = 'y/mm/dd';
                break;
            default:
                stringDateFormat = 'dd/mm/y';
                break;
        }
        if (isFullYear) {
            stringDateFormat = stringDateFormat.replace('y', 'yy');
            if (this.i18nService.getCurrentLanguage() === 'us' || this.i18nService.getCurrentLanguage() === 'en_US') {
                stringDateFormat = stringDateFormat.replace('m', 'mm');
                stringDateFormat = stringDateFormat.replace('d', 'dd');
            }
        }
        return stringDateFormat;
    };
    Datepicker.prototype.addListeners = function () {
        var _this = this;
        this.destroyWheelListener = this.myRenderer.listen('window', 'wheel', function () {
            _this.closeDatepicker();
        });
        this.destroyKeyListener = this.myRenderer.listen('document', 'keydown', function (evt) {
            if (evt.keyCode === 27) {
                _this.closeDatepicker();
            }
        });
    };
    return Datepicker;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], Datepicker.prototype, "disabled", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], Datepicker.prototype, "error", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], Datepicker.prototype, "isRequired", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], Datepicker.prototype, "inputExpandHeight", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], Datepicker.prototype, "markPreviousDate", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], Datepicker.prototype, "currentDate", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], Datepicker.prototype, "currentDateChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('calendar'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_primeng_components_calendar_calendar__["Calendar"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_primeng_components_calendar_calendar__["Calendar"]) === "function" && _a || Object)
], Datepicker.prototype, "currentCalendar", void 0);
Datepicker = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'systelab-datepicker',
        template: __webpack_require__("../../../../../src/app/systelab-components/datepicker/datepicker.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_systelab_translate_lib_i18n_service__["I18nService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_systelab_translate_lib_i18n_service__["I18nService"]) === "function" && _c || Object])
], Datepicker);

var _a, _b, _c;
//# sourceMappingURL=datepicker.component.js.map

/***/ }),

/***/ "../../../../../src/app/systelab-components/filler/filler.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FillerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FillerComponent = (function () {
    function FillerComponent() {
    }
    return FillerComponent;
}());
FillerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'systelab-filler',
        template: "\n                  <div style=\"background-color: lightgrey; position:absolute; top:0; bottom:0; left:0; right:0\"></div>",
    })
], FillerComponent);

//# sourceMappingURL=filler.component.js.map

/***/ }),

/***/ "../../../../../src/app/systelab-components/grid/abstract-api-grid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractApiGrid; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstract_grid_component__ = __webpack_require__("../../../../../src/app/systelab-components/grid/abstract-grid.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var AbstractApiGrid = (function (_super) {
    __extends(AbstractApiGrid, _super);
    function AbstractApiGrid(preferencesService, i18nService, dialogService) {
        return _super.call(this, preferencesService, i18nService, dialogService) || this;
    }
    AbstractApiGrid.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.gridOptions.rowModelType = 'infinite';
        this.gridOptions.paginationPageSize = 50;
        this.gridOptions.cacheBlockSize = 50;
        this.gridOptions.cacheOverflowSize = 2;
        this.gridOptions.maxConcurrentDatasourceRequests = 4;
        this.gridOptions.maxBlocksInCache = 15;
        // this.gridOptions.paginationInitialRowCount = 0;
        this.gridOptions.infiniteInitialRowCount = 0;
        this.gridOptions.datasource = this;
    };
    AbstractApiGrid.prototype.getRows = function (params) {
        var _this = this;
        this.gridOptions.api.showLoadingOverlay();
        this.getData(params.endRow / this.gridOptions.paginationPageSize, this.gridOptions.paginationPageSize)
            .subscribe(function (v) {
            _this.gridOptions.api.hideOverlay();
            params.successCallback(v, _this.getTotalItems());
            if (_this.forcedIndexSelection) {
                _this.gridOptions.api.selectIndex(_this.forcedIndexSelection, false, false);
                _this.forcedIndexSelection = undefined;
            }
            /*
             if (!this.firstSizeToFitExecuted) {
             this.gridOptions.api.sizeColumnsToFit();
             this.firstSizeToFitExecuted = true;
             }
             */
        }, function (error) {
            _this.gridOptions.api.hideOverlay();
            params.successCallback([], 0);
            /*
             if (!this.firstSizeToFitExecuted) {
             this.gridOptions.api.sizeColumnsToFit();
             this.firstSizeToFitExecuted = true;
             }
             */
        });
    };
    AbstractApiGrid.prototype.refresh = function () {
        this.gridOptions.api.setDatasource(this);
    };
    return AbstractApiGrid;
}(__WEBPACK_IMPORTED_MODULE_0__abstract_grid_component__["a" /* AbstractGrid */]));

//# sourceMappingURL=abstract-api-grid.component.js.map

/***/ }),

/***/ "../../../../../src/app/systelab-components/grid/abstract-grid.component.html":
/***/ (function(module, exports) {

module.exports = "<div #hidden class=\"height-hidden\"></div>\r\n<ag-grid-angular id=\"agGrid\" #agGrid style=\"position:absolute; top:0; bottom:0; left:0; right:0; overflow: hidden;\"\r\n                 class=\"ag-fresh\"\r\n                 [gridOptions]=\"gridOptions\"\r\n                 (gridReady)=\"doGridReady($event)\"\r\n                 (gridSizeChanged)=\"doGridSizeChanged($event)\"\r\n                 (cellClicked)=\"doClick($event)\"\r\n                 (columnResized)=\"doColumnResized($event)\"\r\n                 (viewportChanged)=\"doViewportChanged()\"\r\n                 (modelUpdated)=\"onModelUpdated($event)\" [rowData]=\"rowData\">\r\n</ag-grid-angular>\r\n"

/***/ }),

/***/ "../../../../../src/app/systelab-components/grid/abstract-grid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractGrid; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contextmenu_grid_context_menu_component__ = __webpack_require__("../../../../../src/app/systelab-components/grid/contextmenu/grid-context-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contextmenu_grid_context_menu_action_data__ = __webpack_require__("../../../../../src/app/systelab-components/grid/contextmenu/grid-context-menu-action-data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__twolist_two_list_component__ = __webpack_require__("../../../../../src/app/systelab-components/twolist/two-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__options_grid_options_dialog_component__ = __webpack_require__("../../../../../src/app/systelab-components/grid/options/grid-options-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__grid_column_options__ = __webpack_require__("../../../../../src/app/systelab-components/grid/grid-column-options.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utilities_styles_util_service__ = __webpack_require__("../../../../../src/app/systelab-components/utilities/styles.util.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AbstractGrid = (function () {
    function AbstractGrid(preferencesService, i18nService, dialogService) {
        this.preferencesService = preferencesService;
        this.i18nService = i18nService;
        this.dialogService = dialogService;
        this.viewportChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.multipleSelection = false;
        this.showChecks = false;
        this.rowData = [];
        this.action = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.clickRow = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.firstSizeToFitExecuted = false;
    }
    AbstractGrid.prototype.ngOnInit = function () {
        var _this = this;
        var rowHeight = __WEBPACK_IMPORTED_MODULE_6__utilities_styles_util_service__["a" /* StylesUtilService */].getStyleValue(this.hiddenElement, 'line-height');
        var headerHeight = __WEBPACK_IMPORTED_MODULE_6__utilities_styles_util_service__["a" /* StylesUtilService */].getStyleValue(this.hiddenElement, 'height');
        this.gridOptions = {};
        this.gridOptions.columnDefs = this.getColumnDefsWithOptions();
        if (this.multipleSelection && this.showChecks) {
            this.gridOptions.suppressRowClickSelection = true;
            this.gridOptions.icons = {
                checkboxUnchecked: this.getCheckboxUnchecked(),
                checkboxChecked: this.getCheckboxChecked()
            };
        }
        else if (this.showChecks) {
            this.gridOptions.icons = {
                checkboxUnchecked: this.getCheckboxUnchecked(),
                checkboxChecked: this.getCheckboxChecked()
            };
        }
        this.menu = this.getContextMenuOptions();
        this.headerMenu = this.getHeaderContextMenuOptions();
        this.gridOptions.rowHeight = Number(rowHeight);
        this.gridOptions.headerHeight = Number(headerHeight);
        this.gridOptions.suppressCellSelection = true;
        this.gridOptions.enableRangeSelection = true;
        this.gridOptions.enableColResize = this.isColResizeEnabled();
        this.gridOptions.rowSelection = this.getRowSelectionType();
        this.gridOptions.rowDeselection = true;
        if (this.hideHeader()) {
            this.gridOptions.headerHeight = 0;
        }
        this.gridOptions.isFullWidthCell = function (rowNode) {
            return _this.getIsFullWidthCell(rowNode);
        };
        this.gridOptions.fullWidthCellRendererFramework = this.getFullWidthCellRenderer();
        this.gridOptions.context = { componentParent: this };
    };
    AbstractGrid.prototype.onModelUpdated = function (event) {
        return event;
    };
    AbstractGrid.prototype.doGridReady = function (event) {
        this.loadColumnsStateFromPreferences();
        this.firstSizeToFitExecuted = true;
        this.gridOptions.api.sizeColumnsToFit();
        this.gridOptions.api.doLayout();
        this.gridOptions.api.addEventListener('columnMoved', this.saveColumnsStateInPreferences.bind(this));
    };
    AbstractGrid.prototype.saveColumnsStateInPreferences = function () {
        if (this.firstSizeToFitExecuted) {
            this.preferencesService.put(this.getGridOptionsPreferencesPrefix(), this.gridOptions.columnApi.getColumnState());
        }
    };
    AbstractGrid.prototype.loadColumnsStateFromPreferences = function () {
        if (this.preferencesService.get(this.getGridOptionsPreferencesPrefix())) {
            var gridOptionsPreferences = this.preferencesService.get(this.getGridOptionsPreferencesPrefix());
            // Filtered preferences columns that are not in the current columnDef.
            var gridOptions_1 = this.gridOptions;
            var filteredGridOptionsPreferences_1 = [];
            gridOptionsPreferences
                .forEach(function (colPref) {
                if (gridOptions_1.columnApi.getAllColumns()
                    .find(function (column) { return colPref.colId === column.getColId(); })) {
                    filteredGridOptionsPreferences_1.push(colPref);
                }
            });
            // Show new added columns
            this.gridOptions.columnApi.getAllColumns()
                .forEach(function (column) {
                if (!filteredGridOptionsPreferences_1.find(function (colPref) { return colPref.colId === column.getColId(); })) {
                    var newColumn = {
                        'colId': column.getColId(),
                        'hide': !column.isVisible(),
                        'aggFunc': null,
                        'width': column.getActualWidth(),
                        'pivotIndex': null,
                        'pinned': null,
                        'rowGroupIndex': null
                    };
                    if (column.getColId() === AbstractGrid.contextMenuColId || column.getColId() === 'selectCol') {
                        filteredGridOptionsPreferences_1.unshift(newColumn);
                    }
                    else {
                        filteredGridOptionsPreferences_1.push(newColumn);
                    }
                }
            });
            // Set to null width of preferences of columns without supressSizeToFit
            // If not set to null these columns are not sizedtofit
            this.gridOptions.columnApi.getAllColumns()
                .forEach(function (column) {
                if (!column.getColDef().suppressSizeToFit) {
                    var columnPref = filteredGridOptionsPreferences_1.find(function (colPref) { return colPref.colId === column.getColId(); });
                    columnPref.width = null;
                }
            });
            this.gridOptions.columnApi.setColumnState(filteredGridOptionsPreferences_1);
        }
    };
    AbstractGrid.prototype.getColumnDefsWithOptions = function () {
        var colDefs = this.getColumnDefs();
        if (this.getContextMenuOptions() && this.getContextMenuOptions().length > 0) {
            colDefs.unshift({
                colId: AbstractGrid.contextMenuColId,
                headerName: '',
                width: this.getContextMenuColumnWidth(),
                suppressSizeToFit: true,
                suppressResize: true,
                suppressMovable: true,
                cellRendererFramework: __WEBPACK_IMPORTED_MODULE_1__contextmenu_grid_context_menu_component__["a" /* GridContextMenuComponent */]
            });
        }
        if (this.showChecks) {
            // .headerCheckboxSelection is not supported for 'infinite' rowModelType
            colDefs.unshift({
                colId: 'selectCol',
                headerName: '',
                checkboxSelection: true,
                width: this.getCheckColumnWidth(),
                suppressSizeToFit: true,
                suppressResize: true,
                suppressMovable: true
            });
        }
        this.addSuppressSizeToFitToColumnsWithWidthDefined(colDefs);
        return colDefs;
    };
    AbstractGrid.prototype.hideHeader = function () {
        return false;
    };
    AbstractGrid.prototype.getIsFullWidthCell = function (rowNode) {
        return false;
    };
    AbstractGrid.prototype.getFullWidthCellRenderer = function () {
        return undefined;
    };
    AbstractGrid.prototype.getGridOptionsPreferencesPrefix = function () {
        return this.preferenceName || this.constructor.name;
    };
    AbstractGrid.prototype.getContextMenuOptions = function () {
        return this.menu;
    };
    AbstractGrid.prototype.executeContextMenuAction = function (elementId, actionId) {
        var option = this.menu.find(function (option) { return option.actionId === actionId; });
        var rowId = Number(elementId.replace('row', ''));
        var data = this.gridOptions.api.getModel()
            .getRow(rowId).data;
        if (option && option.action !== null && option.action !== undefined && data !== undefined) {
            var actionData = new __WEBPACK_IMPORTED_MODULE_2__contextmenu_grid_context_menu_action_data__["a" /* GridContextMenuActionData */]('' + rowId, actionId, data, this.gridOptions);
            return option.action(actionData);
        }
        else {
            var actionData = new __WEBPACK_IMPORTED_MODULE_2__contextmenu_grid_context_menu_action_data__["a" /* GridContextMenuActionData */]('' + rowId, actionId, data, this.gridOptions);
            this.action.emit(actionData);
        }
    };
    AbstractGrid.prototype.isContextMenuOptionEnabled = function (elementId, actionId) {
        var option = this.menu.find(function (option) { return option.actionId === actionId; });
        var rowId = Number(elementId.replace('row', ''));
        var data = this.gridOptions.api.getModel()
            .getRow(rowId).data;
        if (option && option.isActionEnabled !== null && option.isActionEnabled !== undefined && data !== undefined) {
            return option.isActionEnabled(data);
        }
        return true;
    };
    AbstractGrid.prototype.getHeaderContextMenuOptions = function () {
        return this.headerMenu;
    };
    AbstractGrid.prototype.executeHeaderContextMenuAction = function (elementId, actionId, headerData) {
        var option = this.headerMenu.find(function (option) { return option.actionId === actionId; });
        if (option && option.action !== null && option.action !== undefined) {
            var actionData = new __WEBPACK_IMPORTED_MODULE_2__contextmenu_grid_context_menu_action_data__["a" /* GridContextMenuActionData */](elementId, actionId, headerData, this.gridOptions);
            return option.action(actionData);
        }
        else {
            var actionData = new __WEBPACK_IMPORTED_MODULE_2__contextmenu_grid_context_menu_action_data__["a" /* GridContextMenuActionData */](elementId, actionId, headerData, this.gridOptions);
            this.action.emit(actionData);
        }
    };
    AbstractGrid.prototype.isHeaderContextMenuOptionEnabled = function (elementId, actionId, headerData) {
        var option = this.headerMenu.find(function (option) { return option.actionId === actionId; });
        if (option && option.isActionEnabled !== null && option.isActionEnabled !== undefined) {
            return option.isActionEnabled(headerData);
        }
        return true;
    };
    AbstractGrid.prototype.getRowSelectionType = function () {
        return this.multipleSelection ? 'multiple' : 'single';
    };
    AbstractGrid.prototype.isColResizeEnabled = function () {
        return true;
    };
    AbstractGrid.prototype.getContextMenuColumnWidth = function () {
        return 40;
    };
    AbstractGrid.prototype.getCheckColumnWidth = function () {
        return 28;
    };
    AbstractGrid.prototype.addSuppressSizeToFitToColumnsWithWidthDefined = function (colDefs) {
        colDefs.forEach(function (columnDef) {
            if (columnDef.width) {
                columnDef.suppressSizeToFit = true;
            }
        });
    };
    AbstractGrid.prototype.getSelectedRows = function () {
        return this.gridOptions.api.getSelectedRows();
    };
    AbstractGrid.prototype.getSelectedRow = function () {
        if (this.gridOptions.api.getSelectedRows().length > 0) {
            return this.gridOptions.api.getSelectedRows()[0];
        }
        else {
            return null;
        }
    };
    AbstractGrid.prototype.selectRow = function (index) {
        this.forcedIndexSelection = index;
        this.gridOptions.api.ensureIndexVisible(index);
        this.gridOptions.api.selectIndex(this.forcedIndexSelection, false, false);
    };
    AbstractGrid.prototype.doClick = function (event) {
        if (event.column.colId !== 'contextMenu') {
            this.clickRow.emit((event.event.ctrlKey && !this.showChecks) ? event.event : event.data);
        }
    };
    AbstractGrid.prototype.doColumnResized = function (event) {
        this.saveColumnsStateInPreferences();
    };
    AbstractGrid.prototype.doViewportChanged = function () {
        this.viewportChanged.emit();
    };
    AbstractGrid.prototype.doGridSizeChanged = function (event) {
        if (this.gridOptions.api) {
            this.gridOptions.api.sizeColumnsToFit();
        }
    };
    // --------------------------------
    // Two List Grid Options Columns
    // --------------------------------
    AbstractGrid.prototype.getGridColumnOptions = function () {
        var options = new __WEBPACK_IMPORTED_MODULE_5__grid_column_options__["a" /* GridColumnsOptions */]();
        // initial & available
        this.gridOptions.columnApi.getAllColumns()
            .forEach(function (column) {
            var item = new __WEBPACK_IMPORTED_MODULE_3__twolist_two_list_component__["b" /* TwoListItem */](column.getColDef().headerName, false, false);
            if (!this.gridOptions.columnApi.getColumn(column.getColDef().colId)
                .isVisible()) {
                options.available.push(item);
            }
            options.initialAvailableColumns.push(item);
        }, this);
        // visible
        this.gridOptions.columnApi.getAllDisplayedColumns()
            .forEach(function (column) {
            if (column.getColId() !== 'contextMenu') {
                var item = new __WEBPACK_IMPORTED_MODULE_3__twolist_two_list_component__["b" /* TwoListItem */](column.getColDef().headerName, false, true);
                options.visible.push(item);
            }
        });
        // default columns
        this.getColumnDefs()
            .forEach(function (column) {
            if (!column.hide) {
                var item = new __WEBPACK_IMPORTED_MODULE_3__twolist_two_list_component__["b" /* TwoListItem */](column.headerName, false, true);
                options.defaultVisibleColumns.push(item);
            }
            else {
                var item = new __WEBPACK_IMPORTED_MODULE_3__twolist_two_list_component__["b" /* TwoListItem */](column.headerName, false, false);
                options.defaultHiddenColumns.push(item);
            }
        });
        return options;
    };
    AbstractGrid.prototype.applyGridColumnOptions = function (options) {
        var numberOfFixedInitialColumns = 0;
        if (this.gridOptions.columnApi.getColumn('contextMenu') !== null) {
            numberOfFixedInitialColumns = 1;
        }
        options.visible.forEach(function (tlp, index) {
            var col = this.gridOptions.columnApi.getAllColumns()
                .find(function (column) { return column.getColDef().headerName === tlp.displayName; });
            col.setVisible(true);
            this.gridOptions.columnApi.moveColumn(col.getColId(), index + numberOfFixedInitialColumns);
        }, this);
        this.gridOptions.columnApi.getAllColumns()
            .forEach(function (column) {
            if (column.getColId() !== 'contextMenu') {
                if (!options.visible.find(function (tlp) { return tlp.displayName === column.getColDef().headerName; })) {
                    this.gridOptions.columnApi.setColumnVisible(column.getColId(), false);
                }
            }
        }, this);
        this.gridOptions.api.sizeColumnsToFit();
        this.saveColumnsStateInPreferences();
    };
    AbstractGrid.prototype.showOptions = function () {
        var _this = this;
        var parameters = __WEBPACK_IMPORTED_MODULE_4__options_grid_options_dialog_component__["a" /* GridOptionsDialog */].getParameters();
        parameters.columnOptions = this.getGridColumnOptions();
        this.dialogService.showDialog(__WEBPACK_IMPORTED_MODULE_4__options_grid_options_dialog_component__["a" /* GridOptionsDialog */], parameters)
            .subscribe(function (response) {
            if (response) {
                _this.applyGridColumnOptions(response);
            }
        });
    };
    AbstractGrid.prototype.getCheckboxUnchecked = function () {
        return "<span class='slab-checkbox-unchecked'/>";
    };
    AbstractGrid.prototype.getCheckboxChecked = function () {
        return "<span class='slab-checkbox'/>";
    };
    return AbstractGrid;
}());

AbstractGrid.contextMenuColId = 'contextMenu';
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], AbstractGrid.prototype, "viewportChanged", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], AbstractGrid.prototype, "menu", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], AbstractGrid.prototype, "headerMenu", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], AbstractGrid.prototype, "preferenceName", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], AbstractGrid.prototype, "multipleSelection", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], AbstractGrid.prototype, "showChecks", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], AbstractGrid.prototype, "rowData", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], AbstractGrid.prototype, "action", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], AbstractGrid.prototype, "clickRow", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('hidden'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], AbstractGrid.prototype, "hiddenElement", void 0);
var _a;
//# sourceMappingURL=abstract-grid.component.js.map

/***/ }),

/***/ "../../../../../src/app/systelab-components/grid/contextmenu/grid-context-menu-action-data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridContextMenuActionData; });
var GridContextMenuActionData = (function () {
    function GridContextMenuActionData(elementId, actionId, data, gridOptions) {
        this.elementId = elementId;
        this.actionId = actionId;
        this.data = data;
        this.gridOptions = gridOptions;
    }
    return GridContextMenuActionData;
}());

//# sourceMappingURL=grid-context-menu-action-data.js.map

/***/ }),

/***/ "../../../../../src/app/systelab-components/grid/contextmenu/grid-context-menu-option.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridContextMenuOption; });
var GridContextMenuOption = (function () {
    function GridContextMenuOption(actionId, actionText, action, isActionEnabled) {
        this.actionId = actionId;
        this.actionText = actionText;
        this.action = action;
        this.isActionEnabled = isActionEnabled;
    }
    return GridContextMenuOption;
}());

//# sourceMappingURL=grid-context-menu-option.js.map

/***/ }),

/***/ "../../../../../src/app/systelab-components/grid/contextmenu/grid-context-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridContextMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contextmenu_context_menu_component__ = __webpack_require__("../../../../../src/app/systelab-components/contextmenu/context-menu.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GridContextMenuComponent = (function (_super) {
    __extends(GridContextMenuComponent, _super);
    function GridContextMenuComponent(el, myRenderer) {
        var _this = _super.call(this, el, myRenderer) || this;
        _this.el = el;
        _this.myRenderer = myRenderer;
        return _this;
    }
    GridContextMenuComponent.prototype.refresh = function (params) {
        return true;
    };
    GridContextMenuComponent.prototype.agInit = function (params) {
        this.container = params.context.componentParent;
        this.elementID = 'row' + params.rowIndex;
        this.contextMenuOptions = params.context.componentParent.menu;
    };
    GridContextMenuComponent.prototype.isEnabled = function (elementId, actionId) {
        return this.container.isContextMenuOptionEnabled(elementId, actionId);
    };
    GridContextMenuComponent.prototype.executeAction = function (elementId, actionId) {
        this.container.executeContextMenuAction(elementId, actionId);
    };
    return GridContextMenuComponent;
}(__WEBPACK_IMPORTED_MODULE_1__contextmenu_context_menu_component__["a" /* ContextMenuComponent */]));
GridContextMenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mp-grid-context-menu',
        template: __webpack_require__("../../../../../src/app/systelab-components/contextmenu/context-menu.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]) === "function" && _b || Object])
], GridContextMenuComponent);

var _a, _b;
//# sourceMappingURL=grid-context-menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/systelab-components/grid/contextmenu/grid-header-context-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"slab-grid-header-context-menu\">\r\n    <div #dropdownparent class=\"dropdown\">\r\n        <div class=\"dropdown-toggle slab-context-menu\" data-toggle=\"dropdown\" (click)=\"dotsClicked($event)\">\r\n            <i class=\"icon-context-menu\"></i>\r\n        </div>\r\n        <div #dropdownmenu class=\"dropdown-menu slab-dropdown-menu\">\r\n            <div #dropdown class=\"slab-dropdown\">\r\n                <div *ngIf=\"isOpened\">\r\n                    <ul *ngFor=\"let action of contextMenuOptions\">\r\n                        <li class=\"{{!isEnabled(elementID, action.actionId) ? 'disabled': '' }}\"\r\n                            (click)=\"isEnabled(elementID, action.actionId) ? executeAction(elementID, action.actionId) : null \">\r\n                            <a>{{action.actionText}}</a></li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"slab-grid-header-context-menu-label\">{{headerName}}</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/systelab-components/grid/contextmenu/grid-header-context-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridHeaderContextMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contextmenu_context_menu_component__ = __webpack_require__("../../../../../src/app/systelab-components/contextmenu/context-menu.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GridHeaderContextMenuComponent = (function (_super) {
    __extends(GridHeaderContextMenuComponent, _super);
    function GridHeaderContextMenuComponent(el, myRenderer) {
        var _this = _super.call(this, el, myRenderer) || this;
        _this.el = el;
        _this.myRenderer = myRenderer;
        return _this;
    }
    GridHeaderContextMenuComponent.prototype.agInit = function (params) {
        this.container = params.context.componentParent;
        this.elementID = params.column.getColId();
        this.contextMenuOptions = params.context.componentParent.headerMenu;
        this.headerName = params.displayName;
        this.headerData = params.column.getColDef().headerComponentParams.headerData;
    };
    GridHeaderContextMenuComponent.prototype.isEnabled = function (elementId, actionId) {
        return this.container.isHeaderContextMenuOptionEnabled(elementId, actionId, this.headerData);
    };
    GridHeaderContextMenuComponent.prototype.executeAction = function (elementId, actionId) {
        this.container.executeHeaderContextMenuAction(elementId, actionId, this.headerData);
    };
    return GridHeaderContextMenuComponent;
}(__WEBPACK_IMPORTED_MODULE_1__contextmenu_context_menu_component__["a" /* ContextMenuComponent */]));
GridHeaderContextMenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'systelab-grid-header-context-menu',
        template: __webpack_require__("../../../../../src/app/systelab-components/grid/contextmenu/grid-header-context-menu.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]) === "function" && _b || Object])
], GridHeaderContextMenuComponent);

var _a, _b;
//# sourceMappingURL=grid-header-context-menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/systelab-components/grid/grid-column-options.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridColumnsOptions; });
var GridColumnsOptions = (function () {
    function GridColumnsOptions() {
        this.available = [];
        this.visible = [];
        this.initialAvailableColumns = [];
        this.defaultVisibleColumns = [];
        this.defaultHiddenColumns = [];
    }
    return GridColumnsOptions;
}());

//# sourceMappingURL=grid-column-options.js.map

/***/ }),

/***/ "../../../../../src/app/systelab-components/grid/options/grid-options-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"slab-dialog-header\">Options</div>\n<div class=\"slab-dialog-message\">\n    <form class=\"h-100 d-flex flex-column flex-nowrap\">\n        <ul class=\"nav nav-tabs\" role=\"tablist\">\n            <li class=\"nav-item\">\n                <a class=\"nav-link active\" id=\"fields-tab\" data-toggle=\"tab\" href=\"#fields\" role=\"tab\"\n                   aria-controls=\"fields\" aria-selected=\"true\">{{ 'COMMON_FIELDS' | translate | async }}\n                </a>\n            </li>\n        </ul>\n        <div class=\"tab-content\" id=\"fields\">\n            <div class=\"tab-pane p-3 active h-100\" id=\"fields\" role=\"tabpanel\"\n                 aria-labelledby=\"fields-tab\">\n                    <systelab-two-list [(available)]=\"availableColumns\"\n                                       [(visible)]=\"visibleColumns\"\n                                       [initialAvailableColumns]=\"initialAvailableColumns\"\n                                       displayAttr=\"displayName\">\n                    </systelab-two-list>\n            </div>\n        </div>\n    </form>\n</div>\n<div class=\"slab-dialog-buttons\">\n    <button type=\"button\" class=\"btn btn-lg float-right\" (click)=\"submit()\"> Submit</button>\n</div>\n<div class=\"slab-dialog-close\" (click)=\"cancel()\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/systelab-components/grid/options/grid-options-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export GridOptionsDialogParameters */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridOptionsDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_plugin_modulab_modal_context__ = __webpack_require__("../../../../../src/app/systelab-components/modal/plugin/modulab/modal-context.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_modialog__ = __webpack_require__("../../../../ngx-modialog/bundle/ngx-modialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_message_popup_message_popup_view_component__ = __webpack_require__("../../../../../src/app/systelab-components/modal/message-popup/message-popup-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__grid_column_options__ = __webpack_require__("../../../../../src/app/systelab-components/grid/grid-column-options.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_systelab_translate_lib_i18n_service__ = __webpack_require__("../../../../systelab-translate/lib/i18n.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_systelab_translate_lib_i18n_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_systelab_translate_lib_i18n_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_systelab_preferences_lib_preferences_service__ = __webpack_require__("../../../../systelab-preferences/lib/preferences.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_systelab_preferences_lib_preferences_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_systelab_preferences_lib_preferences_service__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var GridOptionsDialogParameters = (function (_super) {
    __extends(GridOptionsDialogParameters, _super);
    function GridOptionsDialogParameters() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.width = 800;
        _this.height = 500;
        return _this;
    }
    return GridOptionsDialogParameters;
}(__WEBPACK_IMPORTED_MODULE_1__modal_plugin_modulab_modal_context__["a" /* ModulabModalContext */]));

var GridOptionsDialog = (function (_super) {
    __extends(GridOptionsDialog, _super);
    function GridOptionsDialog(dialog, i18nService, preferencesService) {
        var _this = _super.call(this, dialog) || this;
        _this.dialog = dialog;
        _this.i18nService = i18nService;
        _this.preferencesService = preferencesService;
        _this.orderType = 'orderDateNumber';
        _this.availableColumns = [];
        _this.visibleColumns = [];
        _this.initialAvailableColumns = [];
        _this.gridOptionsDialogParameters = dialog.context;
        _this.availableColumns = _this.gridOptionsDialogParameters.columnOptions.available;
        _this.visibleColumns = _this.gridOptionsDialogParameters.columnOptions.visible;
        _this.initialAvailableColumns = _this.gridOptionsDialogParameters.columnOptions.initialAvailableColumns;
        return _this;
    }
    GridOptionsDialog.prototype.submit = function () {
        var tlp = new __WEBPACK_IMPORTED_MODULE_4__grid_column_options__["a" /* GridColumnsOptions */]();
        tlp.visible = this.visibleColumns;
        this.dialog.close(tlp);
    };
    GridOptionsDialog.prototype.cancel = function () {
        this.dialog.close();
    };
    GridOptionsDialog.getParameters = function () {
        return new GridOptionsDialogParameters();
    };
    return GridOptionsDialog;
}(__WEBPACK_IMPORTED_MODULE_3__modal_message_popup_message_popup_view_component__["a" /* DefaultModalActions */]));
GridOptionsDialog = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'grid-options-dialog',
        template: __webpack_require__("../../../../../src/app/systelab-components/grid/options/grid-options-dialog.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_modialog__["c" /* DialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_modialog__["c" /* DialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_systelab_translate_lib_i18n_service__["I18nService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_systelab_translate_lib_i18n_service__["I18nService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6_systelab_preferences_lib_preferences_service__["PreferencesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_systelab_preferences_lib_preferences_service__["PreferencesService"]) === "function" && _c || Object])
], GridOptionsDialog);

var _a, _b, _c;
//# sourceMappingURL=grid-options-dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/systelab-components/modal/dialog/decorated-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"slab-dialog-header\">{{title}}</div>\n<div class=\"slab-dialog-message\" [class.slab-space]=\"space\">\n    <ng-content select=\"[dialog-content]\"></ng-content>\n</div>\n<div class=\"slab-dialog-buttons\">\n    <ng-content select=\"[dialog-bottom]\"></ng-content>\n</div>\n<div class=\"slab-dialog-close\" (click)=\"emitClose()\"></div>"

/***/ }),

/***/ "../../../../../src/app/systelab-components/modal/dialog/decorated-dialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".slab-space {\n  overflow: auto !important;\n  padding: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/systelab-components/modal/dialog/decorated-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DecoratedDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DecoratedDialogComponent = (function () {
    function DecoratedDialogComponent() {
        this.title = '';
        this.space = true;
        this.close = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    DecoratedDialogComponent.prototype.emitClose = function () {
        this.close.emit();
    };
    return DecoratedDialogComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DecoratedDialogComponent.prototype, "title", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DecoratedDialogComponent.prototype, "space", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], DecoratedDialogComponent.prototype, "close", void 0);
DecoratedDialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'systelab-dialog',
        template: __webpack_require__("../../../../../src/app/systelab-components/modal/dialog/decorated-dialog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/systelab-components/modal/dialog/decorated-dialog.component.scss")]
    })
], DecoratedDialogComponent);

//# sourceMappingURL=decorated-dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/systelab-components/modal/dialog/dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__plugin_modulab__ = __webpack_require__("../../../../../src/app/systelab-components/modal/plugin/modulab/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_modialog__ = __webpack_require__("../../../../ngx-modialog/bundle/ngx-modialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__plugin_modulab_modal_context__ = __webpack_require__("../../../../../src/app/systelab-components/modal/plugin/modulab/modal-context.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DialogComponent = (function () {
    function DialogComponent(modal) {
        this.modal = modal;
    }
    DialogComponent.prototype.showDialog = function (component, dialogParameters) {
        var _this = this;
        if (window.innerWidth < 700) {
            dialogParameters.fullScreen = true;
            dialogParameters.width = undefined;
            dialogParameters.height = undefined;
            dialogParameters.dialogClass = undefined;
        }
        var p = new Promise(function (resolve, reject) {
            _this.modal.open(component, Object(__WEBPACK_IMPORTED_MODULE_2_ngx_modialog__["j" /* overlayConfigFactory */])(dialogParameters, __WEBPACK_IMPORTED_MODULE_3__plugin_modulab_modal_context__["a" /* ModulabModalContext */]))
                .then(function (dialogRef) {
                dialogRef.result.then(function (v) { return resolve(v); })
                    .catch(function (e) { return reject(e); });
            });
        });
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].fromPromise(p);
    };
    return DialogComponent;
}());
DialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'dialog',
        template: ''
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__plugin_modulab__["a" /* Modal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__plugin_modulab__["a" /* Modal */]) === "function" && _a || Object])
], DialogComponent);

var _a;
//# sourceMappingURL=dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/systelab-components/modal/dialog/dialog.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dialog_component__ = __webpack_require__("../../../../../src/app/systelab-components/modal/dialog/dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__plugin_modulab_modal__ = __webpack_require__("../../../../../src/app/systelab-components/modal/plugin/modulab/modal.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DialogService = (function () {
    function DialogService(modal) {
        this.dialogComponent = new __WEBPACK_IMPORTED_MODULE_1__dialog_component__["a" /* DialogComponent */](modal);
    }
    DialogService.prototype.showDialog = function (component, dialogParameters) {
        return this.dialogComponent.showDialog(component, dialogParameters);
    };
    return DialogService;
}());
DialogService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__plugin_modulab_modal__["a" /* Modal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__plugin_modulab_modal__["a" /* Modal */]) === "function" && _a || Object])
], DialogService);

var _a;
//# sourceMappingURL=dialog.service.js.map

/***/ }),

/***/ "../../../../../src/app/systelab-components/modal/message-popup/message-popup-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"slab-dialog-header\">{{ context.title }}</div>\r\n<div class=\"slab-dialog-message d-flex align-items-center p-5\">\r\n    <i class=\"slab-msg-box-icon {{context.icon}} {{context.color}}\"></i>\r\n    <div class=\"pl-5\">\r\n        {{ context.msg }}\r\n    </div>\r\n</div>\r\n<div class=\"slab-dialog-buttons\">\r\n    <div class=\"float-right\" *ngIf=\"context.yesNoButtons; else customcomponent\">\r\n        <button type=\"button\" class=\"btn btn-lg\" (click)=\"close(true)\">{{ 'COMMON_OK' | translate | async }}\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-lg\" (click)=\"close(false)\">{{ 'COMMON_CANCEL' | translate | async }}\r\n        </button>\r\n    </div>\r\n    <ng-template #customcomponent>\r\n        <div class=\"float-right\">\r\n            <button type=\"button\" class=\"btn btn-lg\" (click)=\"close()\">{{ 'COMMON_CLOSE' | translate | async }}\r\n            </button>\r\n        </div>\r\n    </ng-template>\r\n</div>\r\n<div class=\"slab-dialog-close\" (click)=\"close()\"></div>"

/***/ }),

/***/ "../../../../../src/app/systelab-components/modal/message-popup/message-popup-view.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".slab-msg-box-icon {\n  font-size: 105px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/systelab-components/modal/message-popup/message-popup-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MessagePopupViewContext */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultModalActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MessagePopupViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_modialog__ = __webpack_require__("../../../../ngx-modialog/bundle/ngx-modialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__plugin_modulab_modal_context__ = __webpack_require__("../../../../../src/app/systelab-components/modal/plugin/modulab/modal-context.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessagePopupViewContext = (function (_super) {
    __extends(MessagePopupViewContext, _super);
    function MessagePopupViewContext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MessagePopupViewContext;
}(__WEBPACK_IMPORTED_MODULE_2__plugin_modulab_modal_context__["a" /* ModulabModalContext */]));

// TODO: Move this to its own file
var DefaultModalActions = (function () {
    function DefaultModalActions(dialog) {
        this.dialog = dialog;
    }
    DefaultModalActions.prototype.close = function (value) {
        this.dialog.close(value);
    };
    return DefaultModalActions;
}());

var MessagePopupViewComponent = (function (_super) {
    __extends(MessagePopupViewComponent, _super);
    function MessagePopupViewComponent(dialog) {
        var _this = _super.call(this, dialog) || this;
        _this.dialog = dialog;
        _this.context = dialog.context;
        return _this;
    }
    return MessagePopupViewComponent;
}(DefaultModalActions));
MessagePopupViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'dialog-view',
        template: __webpack_require__("../../../../../src/app/systelab-components/modal/message-popup/message-popup-view.component.html"),
        styles: [__webpack_require__("../../../../../src/app/systelab-components/modal/message-popup/message-popup-view.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_modialog__["c" /* DialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_modialog__["c" /* DialogRef */]) === "function" && _a || Object])
], MessagePopupViewComponent);

var _a;
//# sourceMappingURL=message-popup-view.component.js.map

/***/ }),

/***/ "../../../../../src/app/systelab-components/modal/message-popup/message-popup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagePopupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__plugin_modulab__ = __webpack_require__("../../../../../src/app/systelab-components/modal/plugin/modulab/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_modialog__ = __webpack_require__("../../../../ngx-modialog/bundle/ngx-modialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__message_popup_view_component__ = __webpack_require__("../../../../../src/app/systelab-components/modal/message-popup/message-popup-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_systelab_translate_lib_i18n_service__ = __webpack_require__("../../../../systelab-translate/lib/i18n.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_systelab_translate_lib_i18n_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_systelab_translate_lib_i18n_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MessagePopupComponent = (function () {
    function MessagePopupComponent(modal, i18nService) {
        this.modal = modal;
        this.i18nService = i18nService;
    }
    MessagePopupComponent.prototype.showErrorPopup = function (titleDescription, errorDescription, modalClass, width, height) {
        return this.showPopup(titleDescription, 'danger', 'icon-times-circle', errorDescription, modalClass, width, height);
    };
    MessagePopupComponent.prototype.showWarningPopup = function (titleDescription, warningDescription, modalClass, width, height) {
        return this.showPopup(titleDescription, 'warning', 'icon-warning', warningDescription, modalClass, width, height);
    };
    MessagePopupComponent.prototype.showInformationPopup = function (titleDescription, messageDescription, modalClass, width, height) {
        return this.showPopup(titleDescription, 'info', 'icon-info-circle', messageDescription, modalClass, width, height);
    };
    MessagePopupComponent.prototype.showQuestionPopup = function (titleDescription, messageDescription, modalClass, width, height) {
        return this.showPopup(titleDescription, 'info', 'icon-question-circle', messageDescription, modalClass, width, height);
    };
    MessagePopupComponent.prototype.showYesNoQuestionPopup = function (titleDescription, messageDescription, modalClass, width, height) {
        return this.showPopup(titleDescription, 'info', 'icon-question-circle', messageDescription, modalClass, width, height, true);
    };
    MessagePopupComponent.prototype.showPopup = function (title, color, icon, message, modalClass, width, height, yesNoButtons) {
        var _this = this;
        var p = new Promise(function (resolve, reject) {
            _this.modal.open(__WEBPACK_IMPORTED_MODULE_3__message_popup_view_component__["b" /* MessagePopupViewComponent */], Object(__WEBPACK_IMPORTED_MODULE_2_ngx_modialog__["j" /* overlayConfigFactory */])({
                dialogClass: modalClass,
                msg: message,
                title: title,
                color: color,
                icon: icon,
                width: width,
                height: height,
                yesNoButtons: yesNoButtons
            }, __WEBPACK_IMPORTED_MODULE_1__plugin_modulab__["b" /* ModulabModalContext */]))
                .then(function (dialogRef) {
                dialogRef.result.then(function (v) {
                    resolve(v);
                })
                    .catch(function (e) {
                    reject(e);
                });
            });
        });
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].fromPromise(p);
    };
    return MessagePopupComponent;
}());
MessagePopupComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mp-message-popup',
        template: ''
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__plugin_modulab__["a" /* Modal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__plugin_modulab__["a" /* Modal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_systelab_translate_lib_i18n_service__["I18nService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_systelab_translate_lib_i18n_service__["I18nService"]) === "function" && _b || Object])
], MessagePopupComponent);

var _a, _b;
//# sourceMappingURL=message-popup.component.js.map

/***/ }),

/***/ "../../../../../src/app/systelab-components/modal/message-popup/message-popup.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagePopupService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__message_popup_component__ = __webpack_require__("../../../../../src/app/systelab-components/modal/message-popup/message-popup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__plugin_modulab_modal__ = __webpack_require__("../../../../../src/app/systelab-components/modal/plugin/modulab/modal.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_systelab_translate_lib_i18n_service__ = __webpack_require__("../../../../systelab-translate/lib/i18n.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_systelab_translate_lib_i18n_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_systelab_translate_lib_i18n_service__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MessagePopupService = (function () {
    function MessagePopupService(modal, i18nService) {
        this.messagePopUpComponent = new __WEBPACK_IMPORTED_MODULE_1__message_popup_component__["a" /* MessagePopupComponent */](modal, i18nService);
    }
    MessagePopupService.prototype.showErrorPopup = function (titleDescription, errorDescription, modalClass, width, height) {
        return this.messagePopUpComponent.showErrorPopup(titleDescription, errorDescription, modalClass, width, height);
    };
    MessagePopupService.prototype.showWarningPopup = function (titleDescription, warningDescription, modalClass, width, height) {
        return this.messagePopUpComponent.showWarningPopup(titleDescription, warningDescription, modalClass, width, height);
    };
    MessagePopupService.prototype.showInformationPopup = function (titleDescription, messageDescription, modalClass, width, height) {
        return this.messagePopUpComponent.showInformationPopup(titleDescription, messageDescription, modalClass, width, height);
    };
    MessagePopupService.prototype.showQuestionPopup = function (titleDescription, messageDescription, modalClass, width, height) {
        return this.messagePopUpComponent.showQuestionPopup(titleDescription, messageDescription, modalClass, width, height);
    };
    MessagePopupService.prototype.showYesNoQuestionPopup = function (titleDescription, messageDescription, modalClass, width, height) {
        return this.messagePopUpComponent.showYesNoQuestionPopup(titleDescription, messageDescription, modalClass, width, height);
    };
    return MessagePopupService;
}());
MessagePopupService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__plugin_modulab_modal__["a" /* Modal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__plugin_modulab_modal__["a" /* Modal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_systelab_translate_lib_i18n_service__["I18nService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_systelab_translate_lib_i18n_service__["I18nService"]) === "function" && _b || Object])
], MessagePopupService);

var _a, _b;
//# sourceMappingURL=message-popup.service.js.map

/***/ }),

/***/ "../../../../../src/app/systelab-components/modal/plugin/modulab/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modal_context__ = __webpack_require__("../../../../../src/app/systelab-components/modal/plugin/modulab/modal-context.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__modal_context__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_container_component__ = __webpack_require__("../../../../../src/app/systelab-components/modal/plugin/modulab/modal-container.component.ts");
/* unused harmony reexport ModulabModalContainer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message_modal_component__ = __webpack_require__("../../../../../src/app/systelab-components/modal/plugin/modulab/message-modal.component.ts");
/* unused harmony reexport ModulabMessageModal */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__presets_message_modal_preset__ = __webpack_require__("../../../../../src/app/systelab-components/modal/plugin/modulab/presets/message-modal-preset.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__presets_message_modal_preset___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__presets_message_modal_preset__);
/* unused harmony reexport IMessageModalPreset */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_modialog__ = __webpack_require__("../../../../ngx-modialog/bundle/ngx-modialog.es5.js");
/* unused harmony reexport ModalOpenContext */
/* unused harmony reexport ModalOpenContextBuilder */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modal__ = __webpack_require__("../../../../../src/app/systelab-components/modal/plugin/modulab/modal.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__modal__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modulab_module__ = __webpack_require__("../../../../../src/app/systelab-components/modal/plugin/modulab/modulab.module.ts");
/* unused harmony reexport ModulabModalModule */
/* unused harmony reexport providers */







//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/systelab-components/modal/plugin/modulab/message-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModulabMessageModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_modialog__ = __webpack_require__("../../../../ngx-modialog/bundle/ngx-modialog.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModulabMessageModal = (function () {
    function ModulabMessageModal(dialog) {
        this.dialog = dialog;
    }
    return ModulabMessageModal;
}());
ModulabMessageModal = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'modal-content',
        template: "<span>This is the modal-content</span>"
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_modialog__["c" /* DialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_modialog__["c" /* DialogRef */]) === "function" && _a || Object])
], ModulabMessageModal);

var _a;
//# sourceMappingURL=message-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/systelab-components/modal/plugin/modulab/modal-container.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"slab-dialog\" [ngClass]=\"computedClass\" [style.width.px]=\"dialog.context.width\"\r\n     [style.height.px]=\"dialog.context.height\" [style.minWidth.px]=\"dialog.context.minWidth\" [style.minHeight.px]=\"dialog.context.minHeight\">\r\n    <div class=\"slab-dialog-content\" style=\"display:block\" role=\"document\" overlayDialogBoundary>\r\n        <ng-content></ng-content>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/systelab-components/modal/plugin/modulab/modal-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModulabModalContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_modialog__ = __webpack_require__("../../../../ngx-modialog/bundle/ngx-modialog.es5.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModulabModalContainer = (function (_super) {
    __extends(ModulabModalContainer, _super);
    function ModulabModalContainer(dialog, el, renderer) {
        var _this = _super.call(this, el, renderer) || this;
        _this.dialog = dialog;
        _this.activateAnimationListener();
        return _this;
    }
    ModulabModalContainer.prototype.ngOnInit = function () {
        this.computedClass = 'w-33 h-33';
        if (this.dialog.context.dialogClass) {
            this.computedClass = this.dialog.context.dialogClass;
        }
        else if (this.dialog.context.width && this.dialog.context.height) {
            this.computedClass = 'slab-dialog-fixed-size';
        }
        else if (this.dialog.context.fullScreen) {
            this.computedClass = '';
        }
        this.computedClass += ' slab-dialog-disabled-animation';
    };
    return ModulabModalContainer;
}(__WEBPACK_IMPORTED_MODULE_1_ngx_modialog__["a" /* BaseDynamicComponent */]));
ModulabModalContainer = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mp-modal-container',
        template: __webpack_require__("../../../../../src/app/systelab-components/modal/plugin/modulab/modal-container.component.html"),
        host: {
            'tabindex': '-1',
            'role': 'alertdialog',
            'class': 'slab-dialog-overlay',
        }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_modialog__["c" /* DialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_modialog__["c" /* DialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _c || Object])
], ModulabModalContainer);

var _a, _b, _c;
//# sourceMappingURL=modal-container.component.js.map

/***/ }),

/***/ "../../../../../src/app/systelab-components/modal/plugin/modulab/modal-context.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModulabModalContext; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ngx_modialog__ = __webpack_require__("../../../../ngx-modialog/bundle/ngx-modialog.es5.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ModulabModalContext = (function (_super) {
    __extends(ModulabModalContext, _super);
    function ModulabModalContext() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Forced width
         */
        _this.width = null;
        /**
         * Forced height
         */
        _this.height = null;
        /**
         * Forced minWidth
         */
        _this.minWidth = null;
        /**
         * Forced minHeight
         */
        _this.minHeight = null;
        /**
         * Forced fullscreen
         */
        _this.fullScreen = false;
        return _this;
    }
    ModulabModalContext.prototype.setDefaultSize = function (w, h) {
        if (!this.width) {
            this.width = w;
        }
        if (!this.height) {
            this.height = h;
        }
    };
    return ModulabModalContext;
}(__WEBPACK_IMPORTED_MODULE_0_ngx_modialog__["f" /* ModalOpenContext */]));

//# sourceMappingURL=modal-context.js.map

/***/ }),

/***/ "../../../../../src/app/systelab-components/modal/plugin/modulab/modal.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Modal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_combineLatest__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/combineLatest.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_modialog__ = __webpack_require__("../../../../ngx-modialog/bundle/ngx-modialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_container_component__ = __webpack_require__("../../../../../src/app/systelab-components/modal/plugin/modulab/modal-container.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Modal = (function (_super) {
    __extends(Modal, _super);
    function Modal(overlay) {
        return _super.call(this, overlay) || this;
    }
    Modal.prototype.create = function (dialogRef, content, bindings) {
        var containerRef = this.createContainer(dialogRef, __WEBPACK_IMPORTED_MODULE_3__modal_container_component__["a" /* ModulabModalContainer */], content, bindings);
        var overlay = dialogRef.overlayRef.instance;
        var container = containerRef.instance;
        dialogRef.inElement ? overlay.insideElement() : overlay.fullscreen();
        // This is needed in order to use the same z-index than default slab-dialog styles do
        overlay.setStyle('z-index', '10000');
        // add body class if this is the only dialog in the stack
        if (!document.body.classList.contains('modal-open')) {
            document.body.classList.add('modal-open');
        }
        container.addClass('in');
        if (containerRef.location.nativeElement) {
            containerRef.location.nativeElement.focus();
        }
        overlay.beforeDestroy(function () {
            var completer = new __WEBPACK_IMPORTED_MODULE_2_ngx_modialog__["i" /* PromiseCompleter */]();
            container.removeClass('in');
            completer.resolve();
            return completer.promise;
        });
        return dialogRef;
    };
    return Modal;
}(__WEBPACK_IMPORTED_MODULE_2_ngx_modialog__["d" /* Modal */]));
Modal = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_modialog__["g" /* Overlay */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_modialog__["g" /* Overlay */]) === "function" && _a || Object])
], Modal);

var _a;
//# sourceMappingURL=modal.js.map

/***/ }),

/***/ "../../../../../src/app/systelab-components/modal/plugin/modulab/modulab.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export providers */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModulabModalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_modialog__ = __webpack_require__("../../../../ngx-modialog/bundle/ngx-modialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal__ = __webpack_require__("../../../../../src/app/systelab-components/modal/plugin/modulab/modal.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_container_component__ = __webpack_require__("../../../../../src/app/systelab-components/modal/plugin/modulab/modal-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__message_modal_component__ = __webpack_require__("../../../../../src/app/systelab-components/modal/plugin/modulab/message-modal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var providers = [
    { provide: __WEBPACK_IMPORTED_MODULE_2_ngx_modialog__["d" /* Modal */], useClass: __WEBPACK_IMPORTED_MODULE_3__modal__["a" /* Modal */] },
    { provide: __WEBPACK_IMPORTED_MODULE_3__modal__["a" /* Modal */], useClass: __WEBPACK_IMPORTED_MODULE_3__modal__["a" /* Modal */] }
];
var ModulabModalModule = (function () {
    function ModulabModalModule() {
    }
    ModulabModalModule.getProviders = function () {
        return providers;
    };
    return ModulabModalModule;
}());
ModulabModalModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ngx_modialog__["e" /* ModalModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__message_modal_component__["a" /* ModulabMessageModal */],
            __WEBPACK_IMPORTED_MODULE_4__modal_container_component__["a" /* ModulabModalContainer */]
        ],
        providers: providers,
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__modal_container_component__["a" /* ModulabModalContainer */],
            __WEBPACK_IMPORTED_MODULE_5__message_modal_component__["a" /* ModulabMessageModal */]
        ]
    })
], ModulabModalModule);

//# sourceMappingURL=modulab.module.js.map

/***/ }),

/***/ "../../../../../src/app/systelab-components/modal/plugin/modulab/presets/message-modal-preset.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=message-modal-preset.js.map

/***/ }),

/***/ "../../../../../src/app/systelab-components/piechart/pie.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PieElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PieComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_timer__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/timer.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PieElement = (function () {
    function PieElement(label, value, color, action) {
        this.label = label;
        this.value = value;
        this.color = color;
        this.action = action;
    }
    return PieElement;
}());

var PieComponent = (function () {
    function PieComponent() {
        this.data = [];
        this.fixedWidth = null;
        this.fixedHeight = null;
        this.select = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.mustShowPointer = false;
    }
    PieComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var timer = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].timer(50);
        timer.subscribe(function (t) {
            _this.drawChart();
        });
    };
    PieComponent.prototype.ngOnChanges = function () {
        this.drawChart();
    };
    PieComponent.prototype.onResize = function (event) {
        this.drawChart();
    };
    PieComponent.prototype.drawChart = function () {
        console.log('drawChart()');
        if (this.fixedWidth) {
            this.chartCanvas.nativeElement.width = this.fixedWidth;
        }
        else {
            this.chartCanvas.nativeElement.width = this.chartCanvas.nativeElement.offsetWidth;
        }
        if (this.fixedHeight) {
            this.chartCanvas.nativeElement.height = this.fixedHeight;
        }
        else {
            this.chartCanvas.nativeElement.height = this.chartCanvas.nativeElement.offsetHeight;
        }
        console.log(this.chartCanvas.nativeElement.width + 'x' + this.chartCanvas.nativeElement.height);
        var context = this.chartCanvas.nativeElement.getContext('2d');
        var startangle = 0;
        var totalvalue = this.sumTo(this.data, this.data.length);
        for (var i = 0; i < this.data.length; i++) {
            this.drawSegment(context, i, totalvalue);
            startangle = this.drawSegmentLabel(context, i, startangle, totalvalue);
        }
    };
    PieComponent.prototype.drawSegment = function (context, i, totalvalue) {
        context.save();
        var centerX = Math.floor(this.chartCanvas.nativeElement.width / 2);
        var centerY = Math.floor(this.chartCanvas.nativeElement.height / 2);
        var radius = Math.floor(this.chartCanvas.nativeElement.width / 2);
        if (this.chartCanvas.nativeElement.width > this.chartCanvas.nativeElement.height) {
            radius = Math.floor(this.chartCanvas.nativeElement.height / 2);
        }
        radius = radius - 40;
        var startingAngle = this.degreesToRadians(this.sumTo(this.data, i), totalvalue);
        var arcSize = this.degreesToRadians(this.data[i].value, totalvalue);
        var endingAngle = startingAngle + arcSize;
        context.beginPath();
        context.moveTo(centerX, centerY);
        context.arc(centerX, centerY, radius, startingAngle, endingAngle, false);
        context.closePath();
        context.fillStyle = this.data[i].color;
        context.fill();
        context.restore();
    };
    PieComponent.prototype.drawSegmentLabel = function (context, i, startangle, totalvalue) {
        context.save();
        var val = this.data[i].value;
        var sliceangle = 2 * Math.PI * val / totalvalue;
        var pieRadius = Math.min(this.chartCanvas.nativeElement.width / 2, this.chartCanvas.nativeElement.height / 2);
        var labelX = this.chartCanvas.nativeElement.width / 2 + (pieRadius - 10) * Math.cos(startangle + sliceangle / 2);
        var labelY = this.chartCanvas.nativeElement.height / 2 + (pieRadius - 10) * Math.sin(startangle + sliceangle / 2);
        var labelText = Math.round(100 * val / totalvalue);
        context.fillStyle = 'black';
        context.font = '14px Arial';
        context.textAlign = 'center';
        context.fillText(labelText + '%', labelX, labelY);
        context.restore();
        return startangle + sliceangle;
    };
    PieComponent.prototype.degreesToRadians = function (degrees, totalvalue) {
        return (degrees * Math.PI) / (totalvalue / 2);
    };
    PieComponent.prototype.sumTo = function (a, i) {
        var sum = 0;
        for (var j = 0; j < i; j++) {
            sum += a[j].value;
        }
        return sum;
    };
    PieComponent.prototype.doClick = function (event) {
        var context = this.chartCanvas.nativeElement.getContext('2d');
        var p = context.getImageData(event.offsetX, event.offsetY, 1, 1).data;
        var hex = '#' + ('000000' + this.rgbToHex(p[0], p[1], p[2])).slice(-6);
        for (var i = 0; i < this.data.length; i++) {
            if (this.data[i].color === hex) {
                this.select.emit(this.data[i].action);
                return;
            }
        }
    };
    PieComponent.prototype.doMouseMove = function (event) {
        var context = this.chartCanvas.nativeElement.getContext('2d');
        var p = context.getImageData(event.offsetX, event.offsetY, 1, 1).data;
        var hex = '#' + ('000000' + this.rgbToHex(p[0], p[1], p[2])).slice(-6);
        this.mustShowPointer = hex !== '#000000';
    };
    PieComponent.prototype.rgbToHex = function (r, g, b) {
        if (r > 255 || g > 255 || b > 255) {
            throw 'Invalid color component';
        }
        return ((r << 16) | (g << 8) | b).toString(16)
            .toUpperCase();
    };
    return PieComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('chartCanvas'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], PieComponent.prototype, "chartCanvas", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], PieComponent.prototype, "data", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], PieComponent.prototype, "fixedWidth", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], PieComponent.prototype, "fixedHeight", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], PieComponent.prototype, "select", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PieComponent.prototype, "onResize", null);
PieComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'systelab-pie',
        template: "\n                <canvas #chartCanvas style=\"width: 100%; heigth: 100%;\" (click)=\"doClick($event)\"\n                        (mousemove)=\"doMouseMove($event)\" [class.pointer]=\"mustShowPointer\"></canvas>",
        styles: ["\n      .pointer {\n          cursor: pointer;\n      }\n\t"]
    }),
    __metadata("design:paramtypes", [])
], PieComponent);

var _a;
//# sourceMappingURL=pie.component.js.map

/***/ }),

/***/ "../../../../../src/app/systelab-components/searcher/abstract-searcher.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractSearcher; });
var AbstractSearcher = (function () {
    function AbstractSearcher() {
        this.multipleSelection = false;
    }
    AbstractSearcher.prototype.hideHeader = function () {
        return false;
    };
    AbstractSearcher.prototype.getPropertyToShow = function () {
        return this.getDescriptionField();
    };
    AbstractSearcher.prototype.getIsFullWidthCell = function (rowNode) {
        return false;
    };
    AbstractSearcher.prototype.getFullWidthCellRenderer = function () {
        return undefined;
    };
    return AbstractSearcher;
}());

//# sourceMappingURL=abstract-searcher.js.map

/***/ }),

/***/ "../../../../../src/app/systelab-components/searcher/searcher.dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"slab-dialog-header\">{{titleForDialog}}</div>\n<div class=\"slab-dialog-message\">\n    <form (keydown)=\"(($event.keyCode===13)?$event.preventDefault():0)\"\n          class=\"uk-form uk-form-horizontal uk-form-horizontal-medium p-3 d-flex flex-column flex-nowrap\">\n        <div class=\"uk-form-row d-flex flex-nowrap\">\n            <label class=\"flex-nowrap uk-form-label text-truncate uk-width-1-5\" for=\"valueToSearch\">{{searchLabel}} </label>\n            <systelab-select class=\"text-left uk-width-2-5\"\n                             [description]=\"selectedComboItem.description\"\n                             [id]=\"selectedComboItem.id\"\n                             [values]=\"comboElements\"\n                             (change)=\"refreshSearch($event)\"></systelab-select>\n            <input class=\"searcher-input-dialog uk-width-2-5\" #valueToSearch id=\"valueToSearch\"\n                   (keyup)=\"($event.keyCode=== 13)?refreshSearch($event):0\"\n                   [(ngModel)]=\"searchingValue\" name=\"valueToSearch\">\n        </div>\n        <div class=\"uk-form-row uk-flex-item-1 uk-flex\">\n            <systelab-internal-searcher-table class=\"uk-flex-item-1 uk-position-relative\" name=\"searcherTable\"\n                                              [contains]=\"selectedComboItem.id\"\n                                              [showChecks]=\"multipleSelection\"\n                                              [multipleSelection]=\"multipleSelection\"\n                                              [valueForSearch]=\"searchingValue\"\n                                              [searcher]=\"dialogParameters.searcher\"\n                                              (clickRow)=\"selectOnClick($event)\"></systelab-internal-searcher-table>\n        </div>\n    </form>\n"

/***/ }),

/***/ "../../../../../src/app/systelab-components/searcher/searcher.dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SearcherDialogParameters */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearcherDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_modialog__ = __webpack_require__("../../../../ngx-modialog/bundle/ngx-modialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__searcher_table_component__ = __webpack_require__("../../../../../src/app/systelab-components/searcher/searcher.table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_systelab_translate_lib_i18n_service__ = __webpack_require__("../../../../systelab-translate/lib/i18n.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_systelab_translate_lib_i18n_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_systelab_translate_lib_i18n_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_message_popup_message_popup_view_component__ = __webpack_require__("../../../../../src/app/systelab-components/modal/message-popup/message-popup-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modal_plugin_modulab_modal_context__ = __webpack_require__("../../../../../src/app/systelab-components/modal/plugin/modulab/modal-context.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SearcherDialogParameters = (function (_super) {
    __extends(SearcherDialogParameters, _super);
    function SearcherDialogParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SearcherDialogParameters;
}(__WEBPACK_IMPORTED_MODULE_5__modal_plugin_modulab_modal_context__["a" /* ModulabModalContext */]));

var SearcherDialog = (function (_super) {
    __extends(SearcherDialog, _super);
    function SearcherDialog(dialog, i18nService) {
        var _this = _super.call(this, dialog) || this;
        _this.dialog = dialog;
        _this.i18nService = i18nService;
        _this.multipleSelection = false;
        _this.dialogParameters = dialog.context;
        _this.searchingValue = _this.dialogParameters.valueToSearch;
        _this.selectedComboItem = {};
        _this.setSelectedComboItem(1, _this.i18nService.instant('COMMON_STARTS_WITH'));
        _this.comboElements = [
            { description: _this.i18nService.instant('COMMON_STARTS_WITH'), id: 1 },
            { description: _this.i18nService.instant('COMMON_CONTAINS'), id: 2 }
        ];
        _this.searchLabel = _this.dialogParameters.searcher.getTextForSearcherLabel();
        _this.titleForDialog = _this.dialogParameters.searcher.getTitleForDialog();
        _this.multipleSelection = _this.dialogParameters.searcher.multipleSelection;
        return _this;
    }
    SearcherDialog.prototype.submit = function () {
        this.dialog.close(this.tableComponent.getSelectedElements());
    };
    SearcherDialog.prototype.refreshSearch = function (event) {
        if (event && event.id) {
            this.setSelectedComboItem(event.id, event.description);
        }
        this.tableComponent.refreshTable();
    };
    SearcherDialog.prototype.selectOnClick = function (data) {
        if (!this.multipleSelection) {
            if (data) {
                var arr = new Array();
                arr.push(data);
                this.dialog.close(arr);
            }
        }
    };
    SearcherDialog.prototype.setSelectedComboItem = function (id, description) {
        this.selectedComboItem.id = id;
        this.selectedComboItem.description = description;
    };
    return SearcherDialog;
}(__WEBPACK_IMPORTED_MODULE_4__modal_message_popup_message_popup_view_component__["a" /* DefaultModalActions */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__searcher_table_component__["a" /* SearcherTableComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__searcher_table_component__["a" /* SearcherTableComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__searcher_table_component__["a" /* SearcherTableComponent */]) === "function" && _a || Object)
], SearcherDialog.prototype, "tableComponent", void 0);
SearcherDialog = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/systelab-components/searcher/searcher.dialog.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_modialog__["c" /* DialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_modialog__["c" /* DialogRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_systelab_translate_lib_i18n_service__["I18nService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_systelab_translate_lib_i18n_service__["I18nService"]) === "function" && _c || Object])
], SearcherDialog);

var _a, _b, _c;
//# sourceMappingURL=searcher.dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/systelab-components/searcher/searcher.table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearcherTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_systelab_preferences_lib_preferences_service__ = __webpack_require__("../../../../systelab-preferences/lib/preferences.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_systelab_preferences_lib_preferences_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_systelab_preferences_lib_preferences_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_systelab_translate_lib_i18n_service__ = __webpack_require__("../../../../systelab-translate/lib/i18n.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_systelab_translate_lib_i18n_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_systelab_translate_lib_i18n_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__abstract_searcher__ = __webpack_require__("../../../../../src/app/systelab-components/searcher/abstract-searcher.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__grid_abstract_api_grid_component__ = __webpack_require__("../../../../../src/app/systelab-components/grid/abstract-api-grid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modal_dialog_dialog_service__ = __webpack_require__("../../../../../src/app/systelab-components/modal/dialog/dialog.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SearcherTableComponent = (function (_super) {
    __extends(SearcherTableComponent, _super);
    function SearcherTableComponent(preferencesService, i18nService, dialogService) {
        var _this = _super.call(this, preferencesService, i18nService, dialogService) || this;
        _this.preferencesService = preferencesService;
        _this.i18nService = i18nService;
        _this.dialogService = dialogService;
        return _this;
    }
    SearcherTableComponent.prototype.getColumnDefs = function () {
        var columnsDef = this.searcher.getColumnDefs();
        return columnsDef;
    };
    SearcherTableComponent.prototype.hideHeader = function () {
        return this.searcher.hideHeader();
    };
    SearcherTableComponent.prototype.getIsFullWidthCell = function (rowNode) {
        return this.searcher.getIsFullWidthCell(rowNode);
    };
    SearcherTableComponent.prototype.getFullWidthCellRenderer = function () {
        return this.searcher.getFullWidthCellRenderer();
    };
    SearcherTableComponent.prototype.getContextMenuOptions = function () {
        return new Array();
    };
    SearcherTableComponent.prototype.getTotalItems = function () {
        return this.searcher.getTotalItems();
    };
    SearcherTableComponent.prototype.getData = function (page, itemsPerPage) {
        var searchText;
        if (this.valueForSearch) {
            searchText = (this.searchForContain === 2) ? '%' + this.valueForSearch : this.valueForSearch;
        }
        return this.searcher.getData(searchText, page, itemsPerPage);
    };
    SearcherTableComponent.prototype.refreshTable = function () {
        this.refresh();
    };
    SearcherTableComponent.prototype.getSelectedElements = function () {
        return this.gridOptions.api.getSelectedRows();
    };
    SearcherTableComponent.prototype.getGridOptionsPreferencesPrefix = function () {
        return this.searcher.getGridOptionsPreferencesPrefix();
    };
    SearcherTableComponent.prototype.onModelUpdated = function (event) {
        var _this = this;
        this.gridOptions.api.sizeColumnsToFit();
        if (this.multipleSelection) {
            if (this.searcher && this.searcher.multipleSelectedItemList && this.searcher.multipleSelectedItemList.length > 0) {
                this.gridOptions.api.forEachNode(function (node) {
                    if (_this.searcher.multipleSelectedItemList
                        .filter(function (selectedItem) {
                        return (selectedItem && node.data && selectedItem[_this.searcher.getCodeField()] === node.data[_this.searcher.getCodeField()]);
                    }).length > 0) {
                        node.selectThisNode(true);
                    }
                });
            }
        }
        else if (this.searcher && this.searcher.id && this.searcher.id !== undefined) {
            this.gridOptions.api.forEachNode(function (node) {
                if (node.data && node.data[_this.searcher.getIdField()] === _this.searcher.id) {
                    node.selectThisNode(true);
                }
            });
        }
    };
    return SearcherTableComponent;
}(__WEBPACK_IMPORTED_MODULE_4__grid_abstract_api_grid_component__["a" /* AbstractApiGrid */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('valueForSearch'),
    __metadata("design:type", String)
], SearcherTableComponent.prototype, "valueForSearch", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('contains'),
    __metadata("design:type", Number)
], SearcherTableComponent.prototype, "searchForContain", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__abstract_searcher__["a" /* AbstractSearcher */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__abstract_searcher__["a" /* AbstractSearcher */]) === "function" && _a || Object)
], SearcherTableComponent.prototype, "searcher", void 0);
SearcherTableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'systelab-internal-searcher-table',
        template: __webpack_require__("../../../../../src/app/systelab-components/grid/abstract-grid.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_systelab_preferences_lib_preferences_service__["PreferencesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_systelab_preferences_lib_preferences_service__["PreferencesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_systelab_translate_lib_i18n_service__["I18nService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_systelab_translate_lib_i18n_service__["I18nService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__modal_dialog_dialog_service__["a" /* DialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__modal_dialog_dialog_service__["a" /* DialogService */]) === "function" && _d || Object])
], SearcherTableComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=searcher.table.component.js.map

/***/ }),

/***/ "../../../../../src/app/systelab-components/select/all-yes-no-combobox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllYesNoSelect; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__combobox_abstract_combobox_component__ = __webpack_require__("../../../../../src/app/systelab-components/combobox/abstract-combobox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_systelab_translate_lib_i18n_service__ = __webpack_require__("../../../../systelab-translate/lib/i18n.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_systelab_translate_lib_i18n_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_systelab_translate_lib_i18n_service__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Element = (function () {
    function Element(id, description) {
        this.id = id;
        this.description = description;
    }
    return Element;
}());
var AllYesNoSelect = (function (_super) {
    __extends(AllYesNoSelect, _super);
    function AllYesNoSelect(myRenderer, i18nService) {
        var _this = _super.call(this, myRenderer) || this;
        _this.i18nService = i18nService;
        _this.values = new Array();
        _this.values.push(new Element('A', _this.i18nService.instant('COMMON_ALL')));
        _this.values.push(new Element('Y', _this.i18nService.instant('COMMON_YES')));
        _this.values.push(new Element('N', _this.i18nService.instant('COMMON_NO')));
        _this._id = 'A';
        _this._description = _this.i18nService.instant('COMMON_ALL');
        return _this;
    }
    AllYesNoSelect.prototype.afterSettingId = function (value) {
        switch (value) {
            case 'Y':
                this.description = this.i18nService.instant('COMMON_YES');
                break;
            case 'N':
                this.description = this.i18nService.instant('COMMON_NO');
                break;
            case 'A':
                this.description = this.i18nService.instant('COMMON_ALL');
                break;
            default:
                break;
        }
    };
    return AllYesNoSelect;
}(__WEBPACK_IMPORTED_MODULE_0__combobox_abstract_combobox_component__["a" /* AbstractComboBox */]));
AllYesNoSelect = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'systelab-all-yes-no-select',
        template: __webpack_require__("../../../../../src/app/systelab-components/combobox/abstract-combobox.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_systelab_translate_lib_i18n_service__["I18nService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_systelab_translate_lib_i18n_service__["I18nService"]) === "function" && _b || Object])
], AllYesNoSelect);

var _a, _b;
//# sourceMappingURL=all-yes-no-combobox.component.js.map

/***/ }),

/***/ "../../../../../src/app/systelab-components/select/gender-combobox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenderSelect; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__combobox_abstract_combobox_component__ = __webpack_require__("../../../../../src/app/systelab-components/combobox/abstract-combobox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_systelab_translate_lib_i18n_service__ = __webpack_require__("../../../../systelab-translate/lib/i18n.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_systelab_translate_lib_i18n_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_systelab_translate_lib_i18n_service__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Element = (function () {
    function Element(id, description) {
        this.id = id;
        this.description = description;
    }
    return Element;
}());
var GenderSelect = (function (_super) {
    __extends(GenderSelect, _super);
    function GenderSelect(myRenderer, i18nService) {
        var _this = _super.call(this, myRenderer) || this;
        _this.myRenderer = myRenderer;
        _this.i18nService = i18nService;
        _this.genderValue = '';
        _this.genderValueChange = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        _this.values = new Array();
        _this.values.push(new Element('U', _this.i18nService.instant('COMMON_UNKNOWN')));
        _this.values.push(new Element('M', _this.i18nService.instant('COMMON_MALE')));
        _this.values.push(new Element('F', _this.i18nService.instant('COMMON_FEMALE')));
        _this._id = 'U';
        _this._description = _this.i18nService.instant('COMMON_UNKNOWN');
        return _this;
    }
    GenderSelect.prototype.afterSettingId = function (value) {
        this.genderValueChange.emit(value);
        switch (value) {
            case 'U':
                this.description = this.i18nService.instant('COMMON_UNKNOWN');
                break;
            case 'M':
                this.description = this.i18nService.instant('COMMON_MALE');
                break;
            case 'F':
                this.description = this.i18nService.instant('COMMON_FEMALE');
                break;
            default:
                break;
        }
    };
    return GenderSelect;
}(__WEBPACK_IMPORTED_MODULE_0__combobox_abstract_combobox_component__["a" /* AbstractComboBox */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], GenderSelect.prototype, "genderValue", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]) === "function" && _a || Object)
], GenderSelect.prototype, "genderValueChange", void 0);
GenderSelect = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'systelab-gender-select',
        template: __webpack_require__("../../../../../src/app/systelab-components/combobox/abstract-combobox.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_systelab_translate_lib_i18n_service__["I18nService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_systelab_translate_lib_i18n_service__["I18nService"]) === "function" && _c || Object])
], GenderSelect);

var _a, _b, _c;
//# sourceMappingURL=gender-combobox.component.js.map

/***/ }),

/***/ "../../../../../src/app/systelab-components/select/no-yes-combobox-component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoYesSelect; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__combobox_abstract_combobox_component__ = __webpack_require__("../../../../../src/app/systelab-components/combobox/abstract-combobox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_systelab_translate_lib_i18n_service__ = __webpack_require__("../../../../systelab-translate/lib/i18n.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_systelab_translate_lib_i18n_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_systelab_translate_lib_i18n_service__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Element = (function () {
    function Element(id, description) {
        this.id = id;
        this.description = description;
    }
    return Element;
}());
var NoYesSelect = (function (_super) {
    __extends(NoYesSelect, _super);
    function NoYesSelect(myRenderer, i18nService) {
        var _this = _super.call(this, myRenderer) || this;
        _this.myRenderer = myRenderer;
        _this.i18nService = i18nService;
        _this.values = new Array();
        _this.values.push(new Element('N', _this.i18nService.instant('COMMON_NO')));
        _this.values.push(new Element('Y', _this.i18nService.instant('COMMON_YES')));
        _this._id = 'Y';
        _this._description = _this.i18nService.instant('COMMON_YES');
        return _this;
    }
    NoYesSelect.prototype.afterSettingId = function (value) {
        switch (value) {
            case 'Y':
                this.description = this.i18nService.instant('COMMON_YES');
                break;
            case 'N':
                this.description = this.i18nService.instant('COMMON_NO');
                break;
            default:
                break;
        }
    };
    return NoYesSelect;
}(__WEBPACK_IMPORTED_MODULE_0__combobox_abstract_combobox_component__["a" /* AbstractComboBox */]));
NoYesSelect = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'systelab-no-yes-select',
        template: __webpack_require__("../../../../../src/app/systelab-components/combobox/abstract-combobox.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_systelab_translate_lib_i18n_service__["I18nService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_systelab_translate_lib_i18n_service__["I18nService"]) === "function" && _b || Object])
], NoYesSelect);

var _a, _b;
//# sourceMappingURL=no-yes-combobox-component.js.map

/***/ }),

/***/ "../../../../../src/app/systelab-components/select/period-combobox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeriodSelect; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__combobox_abstract_combobox_component__ = __webpack_require__("../../../../../src/app/systelab-components/combobox/abstract-combobox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_systelab_translate_lib_i18n_service__ = __webpack_require__("../../../../systelab-translate/lib/i18n.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_systelab_translate_lib_i18n_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_systelab_translate_lib_i18n_service__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Element = (function () {
    function Element(id, description) {
        this.id = id;
        this.description = description;
    }
    return Element;
}());
var PeriodSelect = (function (_super) {
    __extends(PeriodSelect, _super);
    function PeriodSelect(myRenderer, i18nService) {
        var _this = _super.call(this, myRenderer) || this;
        _this.myRenderer = myRenderer;
        _this.i18nService = i18nService;
        _this.values = new Array();
        _this.values.push(new Element(_this.i18nService.instant('COMMON_PERIOD_WILL_BE_SPECIFIED'), _this.i18nService.instant('COMMON_PERIOD_WILL_BE_SPECIFIED')));
        _this.values.push(new Element(_this.i18nService.instant('COMMON_CURRENT_MONTH'), _this.i18nService.instant('COMMON_CURRENT_MONTH')));
        _this.values.push(new Element(_this.i18nService.instant('COMMON_ONE_MONTH_AGO'), _this.i18nService.instant('COMMON_ONE_MONTH_AGO')));
        _this.values.push(new Element(_this.i18nService.instant('COMMON_TWO_MONTHS_AGO'), _this.i18nService.instant('COMMON_TWO_MONTHS_AGO')));
        _this.values.push(new Element(_this.i18nService.instant('COMMON_THREE_MONTHS_AGO'), _this.i18nService.instant('COMMON_THREE_MONTHS_AGO')));
        _this.values.push(new Element(_this.i18nService.instant('COMMON_CURRENT_YEAR'), _this.i18nService.instant('COMMON_CURRENT_YEAR')));
        _this.values.push(new Element(_this.i18nService.instant('COMMON_ONE_YEAR_AGO'), _this.i18nService.instant('COMMON_ONE_YEAR_AGO')));
        _this.values.push(new Element(_this.i18nService.instant('COMMON_TWO_YEARS_AGO'), _this.i18nService.instant('COMMON_TWO_YEARS_AGO')));
        _this.values.push(new Element(_this.i18nService.instant('COMMON_THREE_YEARS_AGO'), _this.i18nService.instant('COMMON_THREE_YEARS_AGO')));
        _this.values.push(new Element(_this.i18nService.instant('COMMON_ALL'), _this.i18nService.instant('COMMON_ALL')));
        _this._id = _this.i18nService.instant('COMMON_PERIOD_WILL_BE_SPECIFIED');
        _this._description = _this.i18nService.instant('COMMON_PERIOD_WILL_BE_SPECIFIED');
        return _this;
    }
    PeriodSelect.prototype.afterSettingId = function (value) {
        if (value) {
            this.description = value + '';
        }
        else {
            this.id = this.i18nService.instant('COMMON_PERIOD_WILL_BE_SPECIFIED');
            this.description = this.i18nService.instant('COMMON_PERIOD_WILL_BE_SPECIFIED');
        }
    };
    return PeriodSelect;
}(__WEBPACK_IMPORTED_MODULE_0__combobox_abstract_combobox_component__["a" /* AbstractComboBox */]));
PeriodSelect = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'systelab-period-select',
        template: __webpack_require__("../../../../../src/app/systelab-components/combobox/abstract-combobox.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_systelab_translate_lib_i18n_service__["I18nService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_systelab_translate_lib_i18n_service__["I18nService"]) === "function" && _b || Object])
], PeriodSelect);

var _a, _b;
//# sourceMappingURL=period-combobox.component.js.map

/***/ }),

/***/ "../../../../../src/app/systelab-components/select/select.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModulabSelect; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__combobox_abstract_combobox_component__ = __webpack_require__("../../../../../src/app/systelab-components/combobox/abstract-combobox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModulabSelect = (function (_super) {
    __extends(ModulabSelect, _super);
    function ModulabSelect(myRenderer) {
        var _this = _super.call(this, myRenderer) || this;
        _this.myRenderer = myRenderer;
        return _this;
    }
    return ModulabSelect;
}(__WEBPACK_IMPORTED_MODULE_0__combobox_abstract_combobox_component__["a" /* AbstractComboBox */]));
ModulabSelect = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'systelab-select',
        template: __webpack_require__("../../../../../src/app/systelab-components/combobox/abstract-combobox.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"]) === "function" && _a || Object])
], ModulabSelect);

var _a;
//# sourceMappingURL=select.component.js.map

/***/ }),

/***/ "../../../../../src/app/systelab-components/slider/slider.component.html":
/***/ (function(module, exports) {

module.exports = "<p-slider [(ngModel)]=\"value\" [min]=\"min\" [max]=\"max\" [step]=\"step\" (onChange)=\"sliderChangeEvent($event)\"></p-slider>"

/***/ }),

/***/ "../../../../../src/app/systelab-components/slider/slider.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SliderComponent = (function () {
    function SliderComponent() {
        this._sliderValue = 0;
        this.min = 0;
        this.max = 100;
        this.valueChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    Object.defineProperty(SliderComponent.prototype, "value", {
        get: function () {
            return this._sliderValue;
        },
        set: function (val) {
            this._sliderValue = val;
            this.valueChange.emit(this._sliderValue);
        },
        enumerable: true,
        configurable: true
    });
    SliderComponent.prototype.sliderChangeEvent = function (event) {
    };
    return SliderComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SliderComponent.prototype, "min", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SliderComponent.prototype, "max", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], SliderComponent.prototype, "step", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Number])
], SliderComponent.prototype, "value", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], SliderComponent.prototype, "valueChange", void 0);
SliderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'systelab-slider',
        template: __webpack_require__("../../../../../src/app/systelab-components/slider/slider.component.html")
    })
], SliderComponent);

//# sourceMappingURL=slider.component.js.map

/***/ }),

/***/ "../../../../../src/app/systelab-components/spinner/touch.spin-values.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TouchSpinValues; });
var TouchSpinValues = (function () {
    function TouchSpinValues(value, min, max, step, isDecimal) {
        if (step === void 0) { step = 1; }
        if (isDecimal === void 0) { isDecimal = true; }
        this.value = value;
        this.min = min;
        this.max = max;
        this.step = step;
        this.isDecimal = isDecimal;
    }
    return TouchSpinValues;
}());

//# sourceMappingURL=touch.spin-values.js.map

/***/ }),

/***/ "../../../../../src/app/systelab-components/spinner/touchspin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"slab-touchspin\">\n    <button [class.disabled]=\"isDisabled\" (click)=\"minus()\" class=\"btn slab-touchspin-minus\">\n        <span class=\"icon-minus-thin\"></span>\n    </button>\n\n    <input [class.disabled]=\"isDisabled\" name=\"sp\" [(ngModel)]=\"valueStr\"\n        class=\"form-control slab-touchspin-input\" type=\"text\"\n        (keypress)=\"checkKey($event)\"\n        (blur)=\"checkValue(valueStr)\"\n        autocomplete=\"off\">\n\n    <button [class.disabled]=\"isDisabled\" (click)=\"plus()\" class=\"btn slab-touchspin-plus\">\n        <span class=\"icon-plus-thin\"></span>\n    </button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/systelab-components/spinner/touchspin.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/************** SHARED - start ****************************************************************************************/\n/* $size_percentage: Change the component size */\n/* $form-elements-height: Defines the line height;\n                          in btn-medium” we redefine the line-height and the max-height of the medium size button and the size,\n                            the min-width and the min-height of a square button;\n                          defines the max-height of the multiSelectOutBox and the min-height of the uk-form-row;\n                          defines the line-height of the uk-grid;\n                          used to calculate the width of the input inside a uk-input-file;\n                          to calculate the size of a btn inside a uk-input-file;\n                          defines the line-height of the uk-line-height class;\n                          used to calculate the $top-icon value;\n                          used to calculate the line-height of the label inside the switch class */\n/* $border-radius: Define the border radius for the components;\n                    used for the Box*/\n/* $base-font-size: defines the button font size;\n                    used to calculate the line-height of the span (when it is not in a multiselect);\n                    to calculate the padding-top of the uk-form-label inside the uk-form-row;\n                    to define the line-height of the uk-form-label inside a uk-form-row */\n/* $base-body-font-size: used in the agGrid\n                         used in the comboBox */\n/* $base-body-font-family: defines the application font\n                           defines the font-size of the inputs preceded by a uk-form */\n/************** SHARED - end ******************************************************************************************/\n/*************** RESPONSIVE - start ***********************************************************************************/\n/* $breakpoint-medium: defines the breakpoint of the mediaquery for the width of the slab-dialogs for medium screens */\n/* $breakpoint-large: defines the breakpoint of the mediaquery for the width of the slab-dialogs for large screens;\n                      used in the mediaquery to modify the Login logo */\n/* $breakpoint-xlarge: defines the breakpoint of the mediaquery for the width of the slab-dialogs for xlarge screens;\n                       used to increase the margin-left value of the uk-grid-add-margin class;\n                       used in the mediaquery to modify the Login logo */\n/* $breakpoint-huge: used in the max-width of the mediaqueries to change the slab-dialog-buttons-condensed.\n                     used to expand Cepario footer buttons;\n                     used in the max-width of the mediaqueries to change the slab-dialog-buttons-condensed */\n/* $breakpoint-medium-height: defines the breakpoint of the mediaquery for the height of the slab-dialogs for medium screens */\n/* $breakpoint-large-height: defines the breakpoint of the mediaquery for the height of the slab-dialogs for large screens  */\n/* $breakpoint-xlarge-height: defines the breakpoint of the mediaquery for the height of the slab-dialogs for xlarge screens */\n/* $ipad-width: used as mediaquery checkpoint.*/\n/* ************* RESPONSIVE - end *************************************************************************************/\n/************** MAIN APPLICATION - start ******************************************************************************/\n/* $app-min-width: defines the minimum width of the body */\n/* $app-min-height: defines the minimum height of the body */\n/* $header-height: application header height\n                   used in the sidebar */\n/* $user-width: defines the width of the user area in the main screen*/\n/************** MAIN APPLICATION - end ********************************************************************************/\n/************** BUTTON - start ****************************************************************************************/\n/* $button-large-height: defines the min-height and the line-height of the button when is large */\n/* $slab-dialog-button-width: defines the minimum width of the button */\n/************** BUTTON - end ******************************************************************************************/\n/************** CHARTS - start ****************************************************************************************/\n/* $chart-header-height: defines the height of the chart header;\n                         the height of the dropdown inside the cart;\n                         defines the size of the cell inside the dropdown\n                         used in QC Compare and QC Levey Jennings Charts */\n/************** CHARTS - end ******************************************************************************************/\n/************** CHECKBOX - start **************************************************************************************/\n/* $checkbox-height: used to define the height and the line-height of the input,\n                       the padding left if the input is empty,\n                       the size and the font-size of the input’s before attribute.*/\n/************** CHECKBOX - end ******************************************************************************************/\n/************** DROPDOWN and Tree - start *****************************************************************************/\n/* $dropdown-line-height: defines the row line-height of the dropdown;\n                          defines the row line-height of the tree */\n/************** DROPDOWN - end ****************************************************************************************/\n/************** INPUT - start *****************************************************************************************/\n/* $input-width: defines the width of the input preceded by a uk-form that has not the class uk-width;\n                 defines the width of the slab-form-icon when it has not the class uk-width;\n                 defines the width of the ui-slider when the uk-width class is not present */\n/* $input-height: used to calculate the line-height of the span (when it is not in a multiselect);\n                  to calculate the padding-top of the uk-form-label inside the uk-form-row;\n                  to calculate the line-height of a paragraph inside a uk-form-controls;\n                  defines the height of all the inputs preceded by a uk-form;\n                  defines the line-height and the height of the font inside a uk-input;\n                  defines the height and the line-height of the icon-container;\n                  defines the line-height and the heigth of a select */\n/************** INPUT - end *******************************************************************************************/\n/************** FORMS - start *****************************************************************************************/\n/* $form-row-gutter: defines the margin-top of the uk-grid-small when it’s preceded by other uk-grid-small;\n                     defines the margin-top of the uk-form-row when it’s preceded by other uk-form-row */\n/************** FORMS - end *******************************************************************************************/\n/************** slab-dialog - start **************************************************************************************/\n/* $slab-dialog-header-height: defines the max-height of the slab-dialog-header; */\n/************** slab-dialog - end ****************************************************************************************/\n/************** NGSEARCHER - start ************************************************************************************/\n/* $ng-searcher-button-width: defines the width of the searcher button */\n/************** NGSEARCHER - end **************************************************************************************/\n/************** TABLE - start *****************************************************************************************/\n/* $table-left-header-width: defines the width of the left-header inside a uk-table.*/\n/************** TABLE - end *******************************************************************************************/\n/************** TABS - start ******************************************************************************************/\n/* $tab-height: used to calculate the $height-diff value;\n                defines the height of the tab elements inside a uk-form;\n                defines the height of the li elements inside the previous tab;\n                defines the top position of all elements inside the tab;\n                defines the top value of the uk-margin-small-top, uk-margin-top and uk-margin-large-top.*/\n/* $tab-min-width: defines the min-width of the tabs.*/\n/* $tab-space: used to define the top margin and the gutter between elements */\n/************** TABS - end ******************************************************************************************/\n/************** GRID - start ****************************************************************************************/\n/* $grid-header-height: defines the height of the ui-grid-header-cell;\n                          used to define the size of the grid-action-cell class */\n/* $grid-header-line-height: defines the line-height of the ui-grid-header-cell.\n                               defines the header-line-height of the agGrid */\n/* $grid-cell-height: defines the height and the min-height of the ui-grid-row;\n                        defines the height and the min-height of the ui-grid-cell;\n                        defines the line-height of the ui-grid-cell-contents;\n                        used to calculate the $status-square-right-size value;\n                        defines the line-height of the ui-grid-cell-line-height;\n                        defines the height of the ui-grid-cell-height;\n                        defines the font-size of the uk-text-large;\n                        used to calculate the size of the grid-acion-cell element */\n/* $grid-cell-line-height: defines the line-height of the ui-grid-cell\n                             defines the line-height of the combo-button */\n/************** GRID - end ******************************************************************************************/\n/* $touchspin-width: defines the width of the touchspin.*/\n:host {\n  display: inline-block;\n  width: 100px;\n  /**\n   * 1. An input element, unlike a div, comes with an intrinsic width. We\n   *    need to override this behavior, because a flex item cannot shrink\n   *    below the length of their content.\n   */\n  /**\n   * 1. Resetting of default button minimum size.\n   */ }\n  :host .slab-touchspin {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n  :host .slab-touchspin-input {\n    min-width: 0;\n    /* [1] */\n    width: 100px;\n    text-align: center;\n    border-radius: 0; }\n  :host .slab-touchspin-minus,\n  :host .slab-touchspin-plus {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    min-width: inherit;\n    /* [1] */\n    min-height: inherit;\n    /* [1] */\n    width: 25px;\n    height: 25px; }\n  :host .slab-touchspin-minus {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0; }\n  :host .slab-touchspin-plus {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/systelab-components/spinner/touchspin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TouchspinComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__touch_spin_values__ = __webpack_require__("../../../../../src/app/systelab-components/spinner/touch.spin-values.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TouchspinComponent = (function () {
    function TouchspinComponent() {
        this.isDisabled = false;
        this.fillUnitsWithZero = false;
        this.valueChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.valueStrChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    Object.defineProperty(TouchspinComponent.prototype, "value", {
        get: function () {
            return this._spinValues ? this._spinValues.value : 0;
        },
        set: function (val) {
            if (this._spinValues) {
                this.previousValue = this._spinValues.value;
                this._spinValues.value = val;
                this.valueChange.emit(this._spinValues.value);
                if (val) {
                    var valStr = (val <= 9 && this.fillUnitsWithZero) ? '0' + val : String(val);
                    if (valStr !== this.valueStr) {
                        this.valueStr = valStr;
                    }
                }
                else {
                    this.valueStr = this.fillUnitsWithZero ? '00' : '0';
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TouchspinComponent.prototype, "spinValues", {
        get: function () {
            return this._spinValues;
        },
        set: function (val) {
            this._spinValues = val;
            if (!this._spinValues.step) {
                this._spinValues.step = 1;
            }
            this.value = this._spinValues.value;
            this.previousValue = this._spinValues.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TouchspinComponent.prototype, "valueStr", {
        get: function () {
            return this._valueStr;
        },
        set: function (val) {
            if (val) {
                var valNumber = Number(val);
                if (this.value && this.value !== valNumber) {
                    if (valNumber < this._spinValues.min || valNumber > this._spinValues.max) {
                        this.value = this.previousValue;
                    }
                }
                this._valueStr = val;
            }
            else {
                this._valueStr = this.fillUnitsWithZero ? '00' : '0';
            }
            this.valueStrChange.emit(val);
        },
        enumerable: true,
        configurable: true
    });
    TouchspinComponent.prototype.minus = function () {
        var value = Number(this._spinValues.value);
        var stepValue = this._spinValues.step;
        var fixedNumber = (this._spinValues.isDecimal) ? 2 : 0;
        if (value - stepValue > this._spinValues.min) {
            this._spinValues.value = Number((value - this._spinValues.step).toFixed(fixedNumber));
        }
        else {
            this._spinValues.value = this._spinValues.min;
        }
        this.previousValue = this._spinValues.value;
        this.change.emit(this._spinValues.value);
        this.value = this._spinValues.value;
    };
    TouchspinComponent.prototype.plus = function () {
        var value = Number(this._spinValues.value);
        var stepValue = this._spinValues.step;
        var fixedNumber = (this._spinValues.isDecimal) ? 2 : 0;
        if (value + stepValue < this._spinValues.max) {
            this._spinValues.value = Number((value + this._spinValues.step).toFixed(2));
        }
        else {
            this._spinValues.value = this._spinValues.max;
        }
        this.previousValue = this._spinValues.value;
        this.change.emit(this._spinValues.value);
        this.value = this._spinValues.value;
    };
    TouchspinComponent.prototype.checkKey = function ($event) {
        if ($event.charCode >= 44 && $event.charCode <= 57 && $event.charCode !== 47 || $event.keyCode === 9) {
            return true;
        }
        else {
            return false;
        }
    };
    TouchspinComponent.prototype.checkValue = function (valueStr) {
        var value = Number(valueStr);
        var fixedNumber = (this._spinValues.isDecimal) ? 2 : 0;
        if (isNaN(value)) {
            this._spinValues.value = this.previousValue;
        }
        else {
            if (value < this._spinValues.min || value > this._spinValues.max) {
                this._spinValues.value = this.previousValue;
                if (this.previousValue) {
                    var valStr = (this.previousValue <= 9 && this.fillUnitsWithZero) ? '0' + this.previousValue : String(this.previousValue);
                    if (valStr !== this.valueStr) {
                        this.valueStr = valStr;
                    }
                }
                else {
                    this.valueStr = this.fillUnitsWithZero ? '00' : '0';
                }
            }
            else {
                this.previousValue = value;
                this.value = Number(value.toFixed(fixedNumber));
                this.change.emit(Number(value.toFixed(fixedNumber)));
            }
        }
    };
    return TouchspinComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TouchspinComponent.prototype, "fillUnitsWithZero", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], TouchspinComponent.prototype, "value", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], TouchspinComponent.prototype, "valueChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], TouchspinComponent.prototype, "change", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__touch_spin_values__["a" /* TouchSpinValues */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__touch_spin_values__["a" /* TouchSpinValues */]) === "function" && _a || Object),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__touch_spin_values__["a" /* TouchSpinValues */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__touch_spin_values__["a" /* TouchSpinValues */]) === "function" && _b || Object])
], TouchspinComponent.prototype, "spinValues", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], TouchspinComponent.prototype, "valueStr", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], TouchspinComponent.prototype, "valueStrChange", void 0);
TouchspinComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'systelab-spinner',
        template: __webpack_require__("../../../../../src/app/systelab-components/spinner/touchspin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/systelab-components/spinner/touchspin.component.scss")]
    })
], TouchspinComponent);

var _a, _b;
//# sourceMappingURL=touchspin.component.js.map

/***/ }),

/***/ "../../../../../src/app/systelab-components/switch/switch.component.html":
/***/ (function(module, exports) {

module.exports = "<span class=\"slab-switch\" [class.checked]=\"isChecked\" [class.disabled]=\"disabled\">\n    <span class=\"slab-tick\"></span>\n    <input type=\"checkbox\" name=\"checkbox\" [checked]=\"isChecked\" [disabled]=\"disabled\" style=\"display:none\">\n    <span class=\"slab-switch-text\"></span>\n</span>"

/***/ }),

/***/ "../../../../../src/app/systelab-components/switch/switch.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/************** SHARED - start ****************************************************************************************/\n/* $size_percentage: Change the component size */\n/* $form-elements-height: Defines the line height;\n                          in btn-medium” we redefine the line-height and the max-height of the medium size button and the size,\n                            the min-width and the min-height of a square button;\n                          defines the max-height of the multiSelectOutBox and the min-height of the uk-form-row;\n                          defines the line-height of the uk-grid;\n                          used to calculate the width of the input inside a uk-input-file;\n                          to calculate the size of a btn inside a uk-input-file;\n                          defines the line-height of the uk-line-height class;\n                          used to calculate the $top-icon value;\n                          used to calculate the line-height of the label inside the switch class */\n/* $border-radius: Define the border radius for the components;\n                    used for the Box*/\n/* $base-font-size: defines the button font size;\n                    used to calculate the line-height of the span (when it is not in a multiselect);\n                    to calculate the padding-top of the uk-form-label inside the uk-form-row;\n                    to define the line-height of the uk-form-label inside a uk-form-row */\n/* $base-body-font-size: used in the agGrid\n                         used in the comboBox */\n/* $base-body-font-family: defines the application font\n                           defines the font-size of the inputs preceded by a uk-form */\n/************** SHARED - end ******************************************************************************************/\n/*************** RESPONSIVE - start ***********************************************************************************/\n/* $breakpoint-medium: defines the breakpoint of the mediaquery for the width of the slab-dialogs for medium screens */\n/* $breakpoint-large: defines the breakpoint of the mediaquery for the width of the slab-dialogs for large screens;\n                      used in the mediaquery to modify the Login logo */\n/* $breakpoint-xlarge: defines the breakpoint of the mediaquery for the width of the slab-dialogs for xlarge screens;\n                       used to increase the margin-left value of the uk-grid-add-margin class;\n                       used in the mediaquery to modify the Login logo */\n/* $breakpoint-huge: used in the max-width of the mediaqueries to change the slab-dialog-buttons-condensed.\n                     used to expand Cepario footer buttons;\n                     used in the max-width of the mediaqueries to change the slab-dialog-buttons-condensed */\n/* $breakpoint-medium-height: defines the breakpoint of the mediaquery for the height of the slab-dialogs for medium screens */\n/* $breakpoint-large-height: defines the breakpoint of the mediaquery for the height of the slab-dialogs for large screens  */\n/* $breakpoint-xlarge-height: defines the breakpoint of the mediaquery for the height of the slab-dialogs for xlarge screens */\n/* $ipad-width: used as mediaquery checkpoint.*/\n/* ************* RESPONSIVE - end *************************************************************************************/\n/************** MAIN APPLICATION - start ******************************************************************************/\n/* $app-min-width: defines the minimum width of the body */\n/* $app-min-height: defines the minimum height of the body */\n/* $header-height: application header height\n                   used in the sidebar */\n/* $user-width: defines the width of the user area in the main screen*/\n/************** MAIN APPLICATION - end ********************************************************************************/\n/************** BUTTON - start ****************************************************************************************/\n/* $button-large-height: defines the min-height and the line-height of the button when is large */\n/* $slab-dialog-button-width: defines the minimum width of the button */\n/************** BUTTON - end ******************************************************************************************/\n/************** CHARTS - start ****************************************************************************************/\n/* $chart-header-height: defines the height of the chart header;\n                         the height of the dropdown inside the cart;\n                         defines the size of the cell inside the dropdown\n                         used in QC Compare and QC Levey Jennings Charts */\n/************** CHARTS - end ******************************************************************************************/\n/************** CHECKBOX - start **************************************************************************************/\n/* $checkbox-height: used to define the height and the line-height of the input,\n                       the padding left if the input is empty,\n                       the size and the font-size of the input’s before attribute.*/\n/************** CHECKBOX - end ******************************************************************************************/\n/************** DROPDOWN and Tree - start *****************************************************************************/\n/* $dropdown-line-height: defines the row line-height of the dropdown;\n                          defines the row line-height of the tree */\n/************** DROPDOWN - end ****************************************************************************************/\n/************** INPUT - start *****************************************************************************************/\n/* $input-width: defines the width of the input preceded by a uk-form that has not the class uk-width;\n                 defines the width of the slab-form-icon when it has not the class uk-width;\n                 defines the width of the ui-slider when the uk-width class is not present */\n/* $input-height: used to calculate the line-height of the span (when it is not in a multiselect);\n                  to calculate the padding-top of the uk-form-label inside the uk-form-row;\n                  to calculate the line-height of a paragraph inside a uk-form-controls;\n                  defines the height of all the inputs preceded by a uk-form;\n                  defines the line-height and the height of the font inside a uk-input;\n                  defines the height and the line-height of the icon-container;\n                  defines the line-height and the heigth of a select */\n/************** INPUT - end *******************************************************************************************/\n/************** FORMS - start *****************************************************************************************/\n/* $form-row-gutter: defines the margin-top of the uk-grid-small when it’s preceded by other uk-grid-small;\n                     defines the margin-top of the uk-form-row when it’s preceded by other uk-form-row */\n/************** FORMS - end *******************************************************************************************/\n/************** slab-dialog - start **************************************************************************************/\n/* $slab-dialog-header-height: defines the max-height of the slab-dialog-header; */\n/************** slab-dialog - end ****************************************************************************************/\n/************** NGSEARCHER - start ************************************************************************************/\n/* $ng-searcher-button-width: defines the width of the searcher button */\n/************** NGSEARCHER - end **************************************************************************************/\n/************** TABLE - start *****************************************************************************************/\n/* $table-left-header-width: defines the width of the left-header inside a uk-table.*/\n/************** TABLE - end *******************************************************************************************/\n/************** TABS - start ******************************************************************************************/\n/* $tab-height: used to calculate the $height-diff value;\n                defines the height of the tab elements inside a uk-form;\n                defines the height of the li elements inside the previous tab;\n                defines the top position of all elements inside the tab;\n                defines the top value of the uk-margin-small-top, uk-margin-top and uk-margin-large-top.*/\n/* $tab-min-width: defines the min-width of the tabs.*/\n/* $tab-space: used to define the top margin and the gutter between elements */\n/************** TABS - end ******************************************************************************************/\n/************** GRID - start ****************************************************************************************/\n/* $grid-header-height: defines the height of the ui-grid-header-cell;\n                          used to define the size of the grid-action-cell class */\n/* $grid-header-line-height: defines the line-height of the ui-grid-header-cell.\n                               defines the header-line-height of the agGrid */\n/* $grid-cell-height: defines the height and the min-height of the ui-grid-row;\n                        defines the height and the min-height of the ui-grid-cell;\n                        defines the line-height of the ui-grid-cell-contents;\n                        used to calculate the $status-square-right-size value;\n                        defines the line-height of the ui-grid-cell-line-height;\n                        defines the height of the ui-grid-cell-height;\n                        defines the font-size of the uk-text-large;\n                        used to calculate the size of the grid-acion-cell element */\n/* $grid-cell-line-height: defines the line-height of the ui-grid-cell\n                             defines the line-height of the combo-button */\n/************** GRID - end ******************************************************************************************/\n.slab-switch {\n  background: transparent;\n  border-radius: 11px !important;\n  border: 1px solid #dfdfdf;\n  position: relative;\n  display: inline-block;\n  box-sizing: content-box;\n  overflow: hidden;\n  width: 40px;\n  height: 20px;\n  vertical-align: middle;\n  margin-top: 2px !important;\n  padding: 0;\n  margin: 0;\n  border-radius: 20px;\n  cursor: pointer;\n  box-shadow: #dfdfdf 0 0 0 0 inset;\n  transition: .3s ease-out all;\n  -webkit-transition: .3s ease-out all;\n  top: -1px; }\n  .slab-switch .slab-tick {\n    width: 14px;\n    height: 14px;\n    background: gray;\n    box-shadow: none;\n    /* 1 */\n    border-radius: 40px !important;\n    position: absolute;\n    top: 3px;\n    left: 4px;\n    margin-top: 0px !important; }\n  .slab-switch.checked {\n    background: #158fef;\n    border-color: #158fef; }\n    .slab-switch.checked .slab-tick {\n      background: white;\n      left: 22px; }\n\n.slab-switch.disabled {\n  opacity: .5;\n  cursor: not-allowed; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/systelab-components/switch/switch.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwitchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SwitchComponent = (function () {
    function SwitchComponent() {
        this.checked = false;
        this.isCheckedChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.disabled = false;
    }
    Object.defineProperty(SwitchComponent.prototype, "isChecked", {
        get: function () {
            return this.checked;
        },
        set: function (val) {
            this.checked = val;
            this.isCheckedChange.emit(this.checked);
        },
        enumerable: true,
        configurable: true
    });
    SwitchComponent.prototype.onToggle = function () {
        if (!this.disabled) {
            this.isChecked = !this.isChecked;
        }
    };
    return SwitchComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Boolean])
], SwitchComponent.prototype, "isChecked", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], SwitchComponent.prototype, "isCheckedChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SwitchComponent.prototype, "disabled", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SwitchComponent.prototype, "onToggle", null);
SwitchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'systelab-switch',
        template: __webpack_require__("../../../../../src/app/systelab-components/switch/switch.component.html"),
        styles: [__webpack_require__("../../../../../src/app/systelab-components/switch/switch.component.scss")]
    })
], SwitchComponent);

//# sourceMappingURL=switch.component.js.map

/***/ }),

/***/ "../../../../../src/app/systelab-components/systelab-components.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SystelabComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slider_slider_component__ = __webpack_require__("../../../../../src/app/systelab-components/slider/slider.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__piechart_pie_component__ = __webpack_require__("../../../../../src/app/systelab-components/piechart/pie.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__switch_switch_component__ = __webpack_require__("../../../../../src/app/systelab-components/switch/switch.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_components_common_shared__ = __webpack_require__("../../../../primeng/components/common/shared.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_components_common_shared___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_primeng_components_common_shared__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modal_plugin_modulab_modulab_module__ = __webpack_require__("../../../../../src/app/systelab-components/modal/plugin/modulab/modulab.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modal_dialog_dialog_component__ = __webpack_require__("../../../../../src/app/systelab-components/modal/dialog/dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__contextmenu_context_menu_component__ = __webpack_require__("../../../../../src/app/systelab-components/contextmenu/context-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__modal_message_popup_message_popup_component__ = __webpack_require__("../../../../../src/app/systelab-components/modal/message-popup/message-popup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__modal_message_popup_message_popup_view_component__ = __webpack_require__("../../../../../src/app/systelab-components/modal/message-popup/message-popup-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ngx_modialog__ = __webpack_require__("../../../../ngx-modialog/bundle/ngx-modialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ngx_modialog_src_providers__ = __webpack_require__("../../../../ngx-modialog/src/providers/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__twolist_datafilter_pipe__ = __webpack_require__("../../../../../src/app/systelab-components/twolist/datafilter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__twolist_two_list_component__ = __webpack_require__("../../../../../src/app/systelab-components/twolist/two-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__grid_contextmenu_grid_context_menu_component__ = __webpack_require__("../../../../../src/app/systelab-components/grid/contextmenu/grid-context-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__grid_contextmenu_grid_header_context_menu_component__ = __webpack_require__("../../../../../src/app/systelab-components/grid/contextmenu/grid-header-context-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__grid_options_grid_options_dialog_component__ = __webpack_require__("../../../../../src/app/systelab-components/grid/options/grid-options-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ag_grid_angular__ = __webpack_require__("../../../../ag-grid-angular/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ag_grid_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_ag_grid_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng2_dnd__ = __webpack_require__("../../../../ng2-dnd/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_systelab_translate__ = __webpack_require__("../../../../systelab-translate/lib/systelab-translate.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_systelab_translate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_systelab_translate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__utilities_styles_util_service__ = __webpack_require__("../../../../../src/app/systelab-components/utilities/styles.util.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__utilities_color_util_service__ = __webpack_require__("../../../../../src/app/systelab-components/utilities/color.util.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__colorpicker_colorpicker_component__ = __webpack_require__("../../../../../src/app/systelab-components/colorpicker/colorpicker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__select_all_yes_no_combobox_component__ = __webpack_require__("../../../../../src/app/systelab-components/select/all-yes-no-combobox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__select_no_yes_combobox_component__ = __webpack_require__("../../../../../src/app/systelab-components/select/no-yes-combobox-component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__select_period_combobox_component__ = __webpack_require__("../../../../../src/app/systelab-components/select/period-combobox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__select_gender_combobox_component__ = __webpack_require__("../../../../../src/app/systelab-components/select/gender-combobox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__colorpicker_color_cell_renderer_component__ = __webpack_require__("../../../../../src/app/systelab-components/colorpicker/color-cell-renderer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__applicationframe_header_app_header_component__ = __webpack_require__("../../../../../src/app/systelab-components/applicationframe/header/app-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__applicationframe_sidebar_app_sidebar_component__ = __webpack_require__("../../../../../src/app/systelab-components/applicationframe/sidebar/app-sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__datepicker_datepicker_component__ = __webpack_require__("../../../../../src/app/systelab-components/datepicker/datepicker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__datepicker_datepicker_time_component__ = __webpack_require__("../../../../../src/app/systelab-components/datepicker/datepicker-time.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__spinner_touchspin_component__ = __webpack_require__("../../../../../src/app/systelab-components/spinner/touchspin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__select_select_component__ = __webpack_require__("../../../../../src/app/systelab-components/select/select.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__applicationframe_application_frame_component__ = __webpack_require__("../../../../../src/app/systelab-components/applicationframe/application-frame.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_angular_split__ = __webpack_require__("../../../../angular-split/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__filler_filler_component__ = __webpack_require__("../../../../../src/app/systelab-components/filler/filler.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__searcher_searcher_dialog_component__ = __webpack_require__("../../../../../src/app/systelab-components/searcher/searcher.dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__searcher_searcher_table_component__ = __webpack_require__("../../../../../src/app/systelab-components/searcher/searcher.table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__calendar_calendar_header_component__ = __webpack_require__("../../../../../src/app/systelab-components/calendar/calendar-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__calendar_calendar_table_component__ = __webpack_require__("../../../../../src/app/systelab-components/calendar/calendar-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__calendar_calendar_dialog_component__ = __webpack_require__("../../../../../src/app/systelab-components/calendar/calendar-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__modal_dialog_decorated_dialog_component__ = __webpack_require__("../../../../../src/app/systelab-components/modal/dialog/decorated-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__tabs_tabs_component__ = __webpack_require__("../../../../../src/app/systelab-components/tabs/tabs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__tabs_tab_component__ = __webpack_require__("../../../../../src/app/systelab-components/tabs/tab.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















































var SystelabComponentsModule = SystelabComponentsModule_1 = (function () {
    function SystelabComponentsModule() {
    }
    SystelabComponentsModule.forRoot = function (entryComponents) {
        return {
            ngModule: SystelabComponentsModule_1,
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_13_ngx_modialog__["h" /* OverlayRenderer */], useClass: __WEBPACK_IMPORTED_MODULE_13_ngx_modialog__["b" /* DOMOverlayRenderer */] },
                { provide: __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser__["EVENT_MANAGER_PLUGINS"], useClass: __WEBPACK_IMPORTED_MODULE_15_ngx_modialog_src_providers__["a" /* DOMOutsideEventPlugin */], multi: true },
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ANALYZE_FOR_ENTRY_COMPONENTS"], useValue: entryComponents || [], multi: true },
                __WEBPACK_IMPORTED_MODULE_21_ag_grid_angular__["Ng2ComponentFactory"],
                { provide: __WEBPACK_IMPORTED_MODULE_21_ag_grid_angular__["BaseComponentFactory"], useExisting: __WEBPACK_IMPORTED_MODULE_21_ag_grid_angular__["Ng2ComponentFactory"] },
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ANALYZE_FOR_ENTRY_COMPONENTS"], useValue: entryComponents, multi: true }
            ]
        };
    };
    return SystelabComponentsModule;
}());
SystelabComponentsModule = SystelabComponentsModule_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_6_primeng_components_common_shared__["SharedModule"],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["SliderModule"],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["CalendarModule"],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["TreeModule"],
            __WEBPACK_IMPORTED_MODULE_8__modal_plugin_modulab_modulab_module__["a" /* ModulabModalModule */],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["ContextMenuModule"],
            __WEBPACK_IMPORTED_MODULE_39_angular_split__["a" /* AngularSplitModule */],
            __WEBPACK_IMPORTED_MODULE_23_systelab_translate__["SystelabTranslateModule"],
            __WEBPACK_IMPORTED_MODULE_22_ng2_dnd__["a" /* DndModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_21_ag_grid_angular__["AgGridModule"].withComponents([
                __WEBPACK_IMPORTED_MODULE_18__grid_contextmenu_grid_context_menu_component__["a" /* GridContextMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_19__grid_contextmenu_grid_header_context_menu_component__["a" /* GridHeaderContextMenuComponent */]
            ]),
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__slider_slider_component__["a" /* SliderComponent */],
            __WEBPACK_IMPORTED_MODULE_3__piechart_pie_component__["a" /* PieComponent */],
            __WEBPACK_IMPORTED_MODULE_4__switch_switch_component__["a" /* SwitchComponent */],
            __WEBPACK_IMPORTED_MODULE_10__contextmenu_context_menu_component__["a" /* ContextMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_46__modal_dialog_decorated_dialog_component__["a" /* DecoratedDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_9__modal_dialog_dialog_component__["a" /* DialogComponent */],
            __WEBPACK_IMPORTED_MODULE_11__modal_message_popup_message_popup_component__["a" /* MessagePopupComponent */],
            __WEBPACK_IMPORTED_MODULE_12__modal_message_popup_message_popup_view_component__["b" /* MessagePopupViewComponent */],
            __WEBPACK_IMPORTED_MODULE_16__twolist_datafilter_pipe__["a" /* DataFilterPipe */],
            __WEBPACK_IMPORTED_MODULE_17__twolist_two_list_component__["a" /* TwoListComponent */],
            __WEBPACK_IMPORTED_MODULE_18__grid_contextmenu_grid_context_menu_component__["a" /* GridContextMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_19__grid_contextmenu_grid_header_context_menu_component__["a" /* GridHeaderContextMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_20__grid_options_grid_options_dialog_component__["a" /* GridOptionsDialog */],
            __WEBPACK_IMPORTED_MODULE_31__colorpicker_color_cell_renderer_component__["a" /* ColorCellRendererComponent */],
            __WEBPACK_IMPORTED_MODULE_26__colorpicker_colorpicker_component__["a" /* ColorComboBox */],
            __WEBPACK_IMPORTED_MODULE_38__applicationframe_application_frame_component__["a" /* ApplicationFrameComponent */],
            __WEBPACK_IMPORTED_MODULE_32__applicationframe_header_app_header_component__["a" /* ApplicationHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_33__applicationframe_sidebar_app_sidebar_component__["b" /* ApplicationSidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_3__piechart_pie_component__["a" /* PieComponent */],
            __WEBPACK_IMPORTED_MODULE_27__select_all_yes_no_combobox_component__["a" /* AllYesNoSelect */],
            __WEBPACK_IMPORTED_MODULE_28__select_no_yes_combobox_component__["a" /* NoYesSelect */],
            __WEBPACK_IMPORTED_MODULE_29__select_period_combobox_component__["a" /* PeriodSelect */],
            __WEBPACK_IMPORTED_MODULE_30__select_gender_combobox_component__["a" /* GenderSelect */],
            __WEBPACK_IMPORTED_MODULE_36__spinner_touchspin_component__["a" /* TouchspinComponent */],
            __WEBPACK_IMPORTED_MODULE_37__select_select_component__["a" /* ModulabSelect */],
            __WEBPACK_IMPORTED_MODULE_34__datepicker_datepicker_component__["a" /* Datepicker */],
            __WEBPACK_IMPORTED_MODULE_35__datepicker_datepicker_time_component__["a" /* DatepickerTime */],
            __WEBPACK_IMPORTED_MODULE_40__filler_filler_component__["a" /* FillerComponent */],
            __WEBPACK_IMPORTED_MODULE_41__searcher_searcher_dialog_component__["a" /* SearcherDialog */],
            __WEBPACK_IMPORTED_MODULE_45__calendar_calendar_dialog_component__["a" /* CalendarDialog */],
            __WEBPACK_IMPORTED_MODULE_42__searcher_searcher_table_component__["a" /* SearcherTableComponent */],
            __WEBPACK_IMPORTED_MODULE_43__calendar_calendar_header_component__["a" /* CalendarHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_44__calendar_calendar_table_component__["a" /* CalendarTableComponent */],
            __WEBPACK_IMPORTED_MODULE_47__tabs_tabs_component__["a" /* TabsComponent */],
            __WEBPACK_IMPORTED_MODULE_48__tabs_tab_component__["a" /* TabComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__slider_slider_component__["a" /* SliderComponent */],
            __WEBPACK_IMPORTED_MODULE_3__piechart_pie_component__["a" /* PieComponent */],
            __WEBPACK_IMPORTED_MODULE_4__switch_switch_component__["a" /* SwitchComponent */],
            __WEBPACK_IMPORTED_MODULE_11__modal_message_popup_message_popup_component__["a" /* MessagePopupComponent */],
            __WEBPACK_IMPORTED_MODULE_46__modal_dialog_decorated_dialog_component__["a" /* DecoratedDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_10__contextmenu_context_menu_component__["a" /* ContextMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_17__twolist_two_list_component__["a" /* TwoListComponent */],
            __WEBPACK_IMPORTED_MODULE_19__grid_contextmenu_grid_header_context_menu_component__["a" /* GridHeaderContextMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_31__colorpicker_color_cell_renderer_component__["a" /* ColorCellRendererComponent */],
            __WEBPACK_IMPORTED_MODULE_26__colorpicker_colorpicker_component__["a" /* ColorComboBox */],
            __WEBPACK_IMPORTED_MODULE_32__applicationframe_header_app_header_component__["a" /* ApplicationHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_33__applicationframe_sidebar_app_sidebar_component__["b" /* ApplicationSidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_38__applicationframe_application_frame_component__["a" /* ApplicationFrameComponent */],
            __WEBPACK_IMPORTED_MODULE_3__piechart_pie_component__["a" /* PieComponent */],
            __WEBPACK_IMPORTED_MODULE_27__select_all_yes_no_combobox_component__["a" /* AllYesNoSelect */],
            __WEBPACK_IMPORTED_MODULE_28__select_no_yes_combobox_component__["a" /* NoYesSelect */],
            __WEBPACK_IMPORTED_MODULE_29__select_period_combobox_component__["a" /* PeriodSelect */],
            __WEBPACK_IMPORTED_MODULE_30__select_gender_combobox_component__["a" /* GenderSelect */],
            __WEBPACK_IMPORTED_MODULE_34__datepicker_datepicker_component__["a" /* Datepicker */],
            __WEBPACK_IMPORTED_MODULE_36__spinner_touchspin_component__["a" /* TouchspinComponent */],
            __WEBPACK_IMPORTED_MODULE_37__select_select_component__["a" /* ModulabSelect */],
            __WEBPACK_IMPORTED_MODULE_35__datepicker_datepicker_time_component__["a" /* DatepickerTime */],
            __WEBPACK_IMPORTED_MODULE_40__filler_filler_component__["a" /* FillerComponent */],
            __WEBPACK_IMPORTED_MODULE_41__searcher_searcher_dialog_component__["a" /* SearcherDialog */],
            __WEBPACK_IMPORTED_MODULE_45__calendar_calendar_dialog_component__["a" /* CalendarDialog */],
            __WEBPACK_IMPORTED_MODULE_42__searcher_searcher_table_component__["a" /* SearcherTableComponent */],
            __WEBPACK_IMPORTED_MODULE_43__calendar_calendar_header_component__["a" /* CalendarHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_44__calendar_calendar_table_component__["a" /* CalendarTableComponent */],
            __WEBPACK_IMPORTED_MODULE_47__tabs_tabs_component__["a" /* TabsComponent */],
            __WEBPACK_IMPORTED_MODULE_48__tabs_tab_component__["a" /* TabComponent */],
            __WEBPACK_IMPORTED_MODULE_21_ag_grid_angular__["AgGridNg2"],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["Tree"],
            __WEBPACK_IMPORTED_MODULE_39_angular_split__["c" /* SplitComponent */],
            __WEBPACK_IMPORTED_MODULE_39_angular_split__["b" /* SplitAreaDirective */],
            __WEBPACK_IMPORTED_MODULE_39_angular_split__["d" /* SplitGutterDirective */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_12__modal_message_popup_message_popup_view_component__["b" /* MessagePopupViewComponent */],
            __WEBPACK_IMPORTED_MODULE_20__grid_options_grid_options_dialog_component__["a" /* GridOptionsDialog */],
            __WEBPACK_IMPORTED_MODULE_41__searcher_searcher_dialog_component__["a" /* SearcherDialog */],
            __WEBPACK_IMPORTED_MODULE_45__calendar_calendar_dialog_component__["a" /* CalendarDialog */],
            __WEBPACK_IMPORTED_MODULE_31__colorpicker_color_cell_renderer_component__["a" /* ColorCellRendererComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_24__utilities_styles_util_service__["a" /* StylesUtilService */],
            __WEBPACK_IMPORTED_MODULE_25__utilities_color_util_service__["a" /* ColorUtilService */]
        ]
    })
], SystelabComponentsModule);

var SystelabComponentsModule_1;
//# sourceMappingURL=systelab-components.module.js.map

/***/ }),

/***/ "../../../../../src/app/systelab-components/tabs/tab.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TabComponent = (function () {
    function TabComponent() {
        this.active = false;
        this.id = false;
    }
    return TabComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], TabComponent.prototype, "title", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TabComponent.prototype, "active", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TabComponent.prototype, "id", void 0);
TabComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'systelab-tab',
        template: "\n                <div *ngIf=\"active\" class=\"tab-pane fade\" [class.show]=\"active\" [class.active]=\"active\" role=\"tabpanel\"\n                     [attr.aria-labelledby]=\"id\">\n                    <ng-content></ng-content>\n                </div>\n\t          "
    })
], TabComponent);

//# sourceMappingURL=tab.component.js.map

/***/ }),

/***/ "../../../../../src/app/systelab-components/tabs/tabs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tab_component__ = __webpack_require__("../../../../../src/app/systelab-components/tabs/tab.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabsComponent = (function () {
    function TabsComponent() {
    }
    // contentChildren are set
    TabsComponent.prototype.ngAfterContentInit = function () {
        // get all active tabs
        var activeTabs = this.tabs.filter(function (tab) { return tab.active; });
        // if there is no active tab set, activate the first
        if (activeTabs.length === 0) {
            this.selectTab(this.tabs.first);
        }
    };
    TabsComponent.prototype.selectTab = function (tab) {
        // deactivate all tabs
        this.tabs.toArray()
            .forEach(function (t) { return t.active = false; });
        // activate the tab the user has clicked on.
        tab.active = true;
    };
    return TabsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChildren"])(__WEBPACK_IMPORTED_MODULE_1__tab_component__["a" /* TabComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"]) === "function" && _a || Object)
], TabsComponent.prototype, "tabs", void 0);
TabsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'systelab-tabs',
        template: "\n                <ul class=\"nav nav-tabs\" role=\"tablist\">\n                    <li class=\"nav-item\" *ngFor=\"let tab of tabs\" (click)=\"selectTab(tab)\">\n                        <a class=\"nav-link\" [class.active]=\"tab.active\" href=\"#\" data-toggle=\"tab\" role=\"tab\"\n                           [attr.aria-controls]=\"tab.id\" aria-selected=\"false\">{{tab.title}}</a>\n                    </li>\n                </ul>\n                <div style=\"flex: 1; display: flex; flex-direction: column;\">\n                    <div class=\"tab-content\" style=\"display: flex; flex-direction: column; overflow-x: hidden;\">\n                        <ng-content></ng-content>\n                    </div>\n                </div>\n\t          ",
        styles: ["\n      :host {\n          width: 100%;\n      }\n\t"]
    })
], TabsComponent);

var _a;
//# sourceMappingURL=tabs.component.js.map

/***/ }),

/***/ "../../../../../src/app/systelab-components/twolist/datafilter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DataFilterPipe = (function () {
    function DataFilterPipe() {
    }
    DataFilterPipe.prototype.transform = function (input, searchString) {
        var result = [];
        if (!searchString) {
            return input;
        }
        for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
            var element = input_1[_i];
            if (element.displayName.toLowerCase()
                .indexOf(searchString.toLowerCase()) > -1) {
                result.push(element);
            }
        }
        return result;
    };
    return DataFilterPipe;
}());
DataFilterPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'datafilter'
    })
], DataFilterPipe);

//# sourceMappingURL=datafilter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/systelab-components/twolist/two-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"slab-twolist h-100\">\n    <div class=\"slab-twolistdiv h-100 d-flex flex-column flex-nowrap\">\n        <div class=\"slab-twolistboxtitle\">{{'COMMON_AVAILABLE_FIELDS' | translate | async }} ({{ available.length }})</div>\n        <div>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"firstListSearch\">\n        </div>\n        <div class=\"slab-twolistbox mt-2 h-100\">\n            <div class=\"slab-twolistboxdiv\">\n                <ul class=\"slab-twolistboxrow list-group\">\n                    <li *ngFor=\"let item of (available | datafilter:firstListSearch)\"\n                        [ngClass]=\"{'slab-twolistboxrow slab-twolistboxrowselected':item.selected,'slab-twolistboxrow':!item.selected}\"\n                        (click)=\"selectAvailableItem(item, $event)\">\n                        {{item.displayName}}\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <div class=\"slab-twolistbuttondiv\">\n        <button class=\"slab-twolistbutton btn icon-chevron-right\" (click)=\"add()\" title=\"Add selected\"\n                [disabled]=\"selected.available.length == 0\">\n        </button>\n        <button class=\"slab-twolistbutton btn icon-chevron-left\" (click)=\"remove()\" title=\"Remove selected\"\n                [disabled]=\"selected.current.length == 0\">\n        </button>\n    </div>\n\n    <div class=\"slab-twolistdiv h-100 d-flex flex-column flex-nowrap\">\n        <div class=\"slab-twolistboxtitle\">{{'COMMON_FIELDS_TO_SHOW' | translate | async }} ({{ visible.length }})</div>\n        <div>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"secondListSearch\">\n        </div>\n        <div class=\"slab-twolistbox mt-2 h-100\">\n            <div class=\"slab-twolistboxdiv\" dnd-droppable>\n                <ul class=\"slab-twolistboxrow list-group\" dnd-sortable-container [sortableData]=\"visible\"\n                    [dropZones]=\"['visible-dropZone']\">\n                    <li *ngFor=\"let visCol of (visible| datafilter:secondListSearch);let i = index\"\n                        [ngClass]=\"{'slab-twolistboxrow slab-twolistboxrowselected':visCol.selected,'slab-twolistboxrow':!visCol.selected}\"\n                        (click)=\"selectVisibleCurrent(visCol,$event)\" dnd-sortable [sortableIndex]=\"i\">\n                        {{visCol.displayName}}\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/systelab-components/twolist/two-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/************** SHARED - start ****************************************************************************************/\n/* $size_percentage: Change the component size */\n/* $form-elements-height: Defines the line height;\n                          in btn-medium” we redefine the line-height and the max-height of the medium size button and the size,\n                            the min-width and the min-height of a square button;\n                          defines the max-height of the multiSelectOutBox and the min-height of the uk-form-row;\n                          defines the line-height of the uk-grid;\n                          used to calculate the width of the input inside a uk-input-file;\n                          to calculate the size of a btn inside a uk-input-file;\n                          defines the line-height of the uk-line-height class;\n                          used to calculate the $top-icon value;\n                          used to calculate the line-height of the label inside the switch class */\n/* $border-radius: Define the border radius for the components;\n                    used for the Box*/\n/* $base-font-size: defines the button font size;\n                    used to calculate the line-height of the span (when it is not in a multiselect);\n                    to calculate the padding-top of the uk-form-label inside the uk-form-row;\n                    to define the line-height of the uk-form-label inside a uk-form-row */\n/* $base-body-font-size: used in the agGrid\n                         used in the comboBox */\n/* $base-body-font-family: defines the application font\n                           defines the font-size of the inputs preceded by a uk-form */\n/************** SHARED - end ******************************************************************************************/\n/*************** RESPONSIVE - start ***********************************************************************************/\n/* $breakpoint-medium: defines the breakpoint of the mediaquery for the width of the slab-dialogs for medium screens */\n/* $breakpoint-large: defines the breakpoint of the mediaquery for the width of the slab-dialogs for large screens;\n                      used in the mediaquery to modify the Login logo */\n/* $breakpoint-xlarge: defines the breakpoint of the mediaquery for the width of the slab-dialogs for xlarge screens;\n                       used to increase the margin-left value of the uk-grid-add-margin class;\n                       used in the mediaquery to modify the Login logo */\n/* $breakpoint-huge: used in the max-width of the mediaqueries to change the slab-dialog-buttons-condensed.\n                     used to expand Cepario footer buttons;\n                     used in the max-width of the mediaqueries to change the slab-dialog-buttons-condensed */\n/* $breakpoint-medium-height: defines the breakpoint of the mediaquery for the height of the slab-dialogs for medium screens */\n/* $breakpoint-large-height: defines the breakpoint of the mediaquery for the height of the slab-dialogs for large screens  */\n/* $breakpoint-xlarge-height: defines the breakpoint of the mediaquery for the height of the slab-dialogs for xlarge screens */\n/* $ipad-width: used as mediaquery checkpoint.*/\n/* ************* RESPONSIVE - end *************************************************************************************/\n/************** MAIN APPLICATION - start ******************************************************************************/\n/* $app-min-width: defines the minimum width of the body */\n/* $app-min-height: defines the minimum height of the body */\n/* $header-height: application header height\n                   used in the sidebar */\n/* $user-width: defines the width of the user area in the main screen*/\n/************** MAIN APPLICATION - end ********************************************************************************/\n/************** BUTTON - start ****************************************************************************************/\n/* $button-large-height: defines the min-height and the line-height of the button when is large */\n/* $slab-dialog-button-width: defines the minimum width of the button */\n/************** BUTTON - end ******************************************************************************************/\n/************** CHARTS - start ****************************************************************************************/\n/* $chart-header-height: defines the height of the chart header;\n                         the height of the dropdown inside the cart;\n                         defines the size of the cell inside the dropdown\n                         used in QC Compare and QC Levey Jennings Charts */\n/************** CHARTS - end ******************************************************************************************/\n/************** CHECKBOX - start **************************************************************************************/\n/* $checkbox-height: used to define the height and the line-height of the input,\n                       the padding left if the input is empty,\n                       the size and the font-size of the input’s before attribute.*/\n/************** CHECKBOX - end ******************************************************************************************/\n/************** DROPDOWN and Tree - start *****************************************************************************/\n/* $dropdown-line-height: defines the row line-height of the dropdown;\n                          defines the row line-height of the tree */\n/************** DROPDOWN - end ****************************************************************************************/\n/************** INPUT - start *****************************************************************************************/\n/* $input-width: defines the width of the input preceded by a uk-form that has not the class uk-width;\n                 defines the width of the slab-form-icon when it has not the class uk-width;\n                 defines the width of the ui-slider when the uk-width class is not present */\n/* $input-height: used to calculate the line-height of the span (when it is not in a multiselect);\n                  to calculate the padding-top of the uk-form-label inside the uk-form-row;\n                  to calculate the line-height of a paragraph inside a uk-form-controls;\n                  defines the height of all the inputs preceded by a uk-form;\n                  defines the line-height and the height of the font inside a uk-input;\n                  defines the height and the line-height of the icon-container;\n                  defines the line-height and the heigth of a select */\n/************** INPUT - end *******************************************************************************************/\n/************** FORMS - start *****************************************************************************************/\n/* $form-row-gutter: defines the margin-top of the uk-grid-small when it’s preceded by other uk-grid-small;\n                     defines the margin-top of the uk-form-row when it’s preceded by other uk-form-row */\n/************** FORMS - end *******************************************************************************************/\n/************** slab-dialog - start **************************************************************************************/\n/* $slab-dialog-header-height: defines the max-height of the slab-dialog-header; */\n/************** slab-dialog - end ****************************************************************************************/\n/************** NGSEARCHER - start ************************************************************************************/\n/* $ng-searcher-button-width: defines the width of the searcher button */\n/************** NGSEARCHER - end **************************************************************************************/\n/************** TABLE - start *****************************************************************************************/\n/* $table-left-header-width: defines the width of the left-header inside a uk-table.*/\n/************** TABLE - end *******************************************************************************************/\n/************** TABS - start ******************************************************************************************/\n/* $tab-height: used to calculate the $height-diff value;\n                defines the height of the tab elements inside a uk-form;\n                defines the height of the li elements inside the previous tab;\n                defines the top position of all elements inside the tab;\n                defines the top value of the uk-margin-small-top, uk-margin-top and uk-margin-large-top.*/\n/* $tab-min-width: defines the min-width of the tabs.*/\n/* $tab-space: used to define the top margin and the gutter between elements */\n/************** TABS - end ******************************************************************************************/\n/************** GRID - start ****************************************************************************************/\n/* $grid-header-height: defines the height of the ui-grid-header-cell;\n                          used to define the size of the grid-action-cell class */\n/* $grid-header-line-height: defines the line-height of the ui-grid-header-cell.\n                               defines the header-line-height of the agGrid */\n/* $grid-cell-height: defines the height and the min-height of the ui-grid-row;\n                        defines the height and the min-height of the ui-grid-cell;\n                        defines the line-height of the ui-grid-cell-contents;\n                        used to calculate the $status-square-right-size value;\n                        defines the line-height of the ui-grid-cell-line-height;\n                        defines the height of the ui-grid-cell-height;\n                        defines the font-size of the uk-text-large;\n                        used to calculate the size of the grid-acion-cell element */\n/* $grid-cell-line-height: defines the line-height of the ui-grid-cell\n                             defines the line-height of the combo-button */\n/************** GRID - end ******************************************************************************************/\n/* $twolist-row-height: define the row height*/\n:host {\n  width: 100%;\n  height: 100%; }\n\n.slab-twolist {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: auto; }\n  .slab-twolist .slab-twolistdiv {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 0 calc(50% - 30px);\n            flex: 1 0 calc(50% - 30px);\n    min-width: calc(50% - 30px); }\n    .slab-twolist .slab-twolistdiv input {\n      padding: 5px;\n      border-radius: 5px;\n      border-color: #d6d6d6; }\n    @media (max-width: 1024px) {\n      .slab-twolist .slab-twolistdiv input {\n        display: none; } }\n    .slab-twolist .slab-twolistdiv .slab-twolistboxtitle {\n      padding-left: 5px; }\n    .slab-twolist .slab-twolistdiv .slab-twolistbox {\n      border-radius: 5px;\n      border: 1px solid #d6d6d6;\n      padding: 5px 0;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      overflow: auto; }\n      .slab-twolist .slab-twolistdiv .slab-twolistbox .slab-twolistboxdiv {\n        -webkit-box-flex: 1;\n            -ms-flex: 1 0 auto;\n                flex: 1 0 auto; }\n        .slab-twolist .slab-twolistdiv .slab-twolistbox .slab-twolistboxdiv .slab-twolistboxrow {\n          line-height: 25px;\n          padding-left: 5px;\n          cursor: pointer;\n          -webkit-user-select: none;\n          -moz-user-select: none;\n          -ms-user-select: none;\n          -o-user-select: none;\n          user-select: none; }\n        .slab-twolist .slab-twolistdiv .slab-twolistbox .slab-twolistboxdiv .slab-twolistboxrowselected {\n          background-color: #eaf8fa;\n          padding-left: 5px; }\n        .slab-twolist .slab-twolistdiv .slab-twolistbox .slab-twolistboxdiv .slab-twolistboxrowdrag {\n          cursor: move; }\n  .slab-twolist .slab-twolistbuttondiv {\n    padding: 5px;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n    .slab-twolist .slab-twolistbuttondiv .slab-twolistbutton {\n      margin: 5px;\n      min-width: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/systelab-components/twolist/two-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TwoListItem; });
/* unused harmony export SelectedItem */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TwoListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datafilter_pipe__ = __webpack_require__("../../../../../src/app/systelab-components/twolist/datafilter.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TwoListItem = (function () {
    function TwoListItem(displayName, selected, visible) {
        this.displayName = displayName;
        this.selected = selected;
        this.visible = visible;
    }
    return TwoListItem;
}());

var SelectedItem = (function () {
    function SelectedItem(available, current) {
        this.available = available;
        this.current = current;
    }
    return SelectedItem;
}());

var TwoListComponent = (function () {
    function TwoListComponent() {
        this._available = [];
        this._visible = [];
        this.visibleChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.availableChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.selected = new SelectedItem([], []);
    }
    Object.defineProperty(TwoListComponent.prototype, "available", {
        get: function () {
            return this._available;
        },
        set: function (list) {
            this._available = list;
            this.availableChange.emit(this._available);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TwoListComponent.prototype, "visible", {
        get: function () {
            return this._visible;
        },
        set: function (list) {
            this._visible = list;
            this.visibleChange.emit(this._visible);
        },
        enumerable: true,
        configurable: true
    });
    TwoListComponent.prototype.add = function () {
        for (var _i = 0, _a = this.selected.available; _i < _a.length; _i++) {
            var element = _a[_i];
            element.visible = true;
        }
        this.visible = this.visible.concat(new __WEBPACK_IMPORTED_MODULE_1__datafilter_pipe__["a" /* DataFilterPipe */]().transform(this.selected.available, this.firstListSearch));
        this.firstListSearch = '';
        this.secondListSearch = '';
        this.refreshAvailable();
    };
    TwoListComponent.prototype.remove = function () {
        for (var _i = 0, _a = this.selected.available; _i < _a.length; _i++) {
            var element = _a[_i];
            element.visible = false;
        }
        this.available = this.available.concat(new __WEBPACK_IMPORTED_MODULE_1__datafilter_pipe__["a" /* DataFilterPipe */]().transform(this.selected.current, this.secondListSearch));
        this.visible = this.removeItemsFromList(this.visible, new __WEBPACK_IMPORTED_MODULE_1__datafilter_pipe__["a" /* DataFilterPipe */]().transform(this.selected.current, this.secondListSearch));
        this.firstListSearch = '';
        this.secondListSearch = '';
        this.available = this.sort(this.available);
        this.refreshAvailable();
    };
    TwoListComponent.prototype.sort = function (list) {
        var arrayAux = [];
        var theReturn = [];
        var length = list.length;
        for (var _i = 0, _a = this.initialAvailableColumns; _i < _a.length; _i++) {
            var actual = _a[_i];
            if (arrayAux.length === length) {
                break;
            }
            for (var j = 0; j < length; j++) {
                if (actual.displayName === list[j].displayName) {
                    arrayAux.push(j);
                    break;
                }
            }
        }
        for (var i = 0; i < length; i++) {
            theReturn[i] = list[arrayAux[i]];
        }
        return theReturn;
    };
    TwoListComponent.prototype.setElementNonSelected = function (list) {
        for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
            var element = list_1[_i];
            element.selected = false;
        }
    };
    TwoListComponent.prototype.setDefaultColumnValues = function () {
        this.available = this.defaultHiddenColumns;
        this.visible = this.defaultVisibleColumns;
    };
    TwoListComponent.prototype.removeItemsFromList = function (list, itemsToRemove) {
        var resultList = [];
        for (var _i = 0, list_2 = list; _i < list_2.length; _i++) {
            var element = list_2[_i];
            var match = false;
            for (var _a = 0, itemsToRemove_1 = itemsToRemove; _a < itemsToRemove_1.length; _a++) {
                var item = itemsToRemove_1[_a];
                if (item[this.displayAttr] === element[this.displayAttr]) {
                    match = true;
                    break;
                }
            }
            if (!match) {
                resultList.push(element);
            }
        }
        return resultList;
    };
    TwoListComponent.prototype.refreshAvailable = function () {
        this.available = this.removeItemsFromList(new __WEBPACK_IMPORTED_MODULE_1__datafilter_pipe__["a" /* DataFilterPipe */]().transform(this.available, this.firstListSearch), this.visible);
        this.selected.available = [];
        this.selected.current = [];
        this.setElementNonSelected(this.available);
        this.setElementNonSelected(this.visible);
    };
    TwoListComponent.prototype.selectAvailableItem = function (element, ev) {
        this.selected.current = [];
        this.setElementNonSelected(this.visible);
        var availableFilteredList = new __WEBPACK_IMPORTED_MODULE_1__datafilter_pipe__["a" /* DataFilterPipe */]().transform(this.available, this.firstListSearch);
        if (this.selected.available.length > 0 && ev.shiftKey) {
            var indexOfLastSelected = availableFilteredList.indexOf(this.selected.available[0]);
            var indexOfSelected = availableFilteredList.indexOf(element);
            this.setElementNonSelected(this.selected.available);
            this.selected.available = [];
            var i = void 0;
            if (indexOfLastSelected < indexOfSelected) {
                for (i = indexOfLastSelected; i <= indexOfSelected; i++) {
                    availableFilteredList[i].selected = true;
                    this.selected.available.push(availableFilteredList[i]);
                }
            }
            else {
                for (i = indexOfLastSelected; i >= indexOfSelected; i--) {
                    availableFilteredList[i].selected = true;
                    this.selected.available.push(availableFilteredList[i]);
                }
            }
            return;
        }
        element.selected = !element.selected;
        if (element.selected) {
            if (this.selected.available.length === 0 || (this.selected.available.length > 0 && ev.ctrlKey)) {
                this.selected.available.push(element);
            }
            else {
                this.setElementNonSelected(this.selected.available);
                this.selected.available = [];
                this.selected.available.push(element);
            }
        }
        else {
            if (this.selected.available.length === 0 || (this.selected.available.length > 0 && ev.ctrlKey)) {
                this.selected.available.splice(this.selected.available.indexOf(element), 1);
            }
            else {
                this.setElementNonSelected(this.selected.available);
                this.selected.available = [];
            }
        }
    };
    TwoListComponent.prototype.selectVisibleCurrent = function (element, ev) {
        this.selected.available = [];
        this.setElementNonSelected(this.available);
        var visibleFilteredList = new __WEBPACK_IMPORTED_MODULE_1__datafilter_pipe__["a" /* DataFilterPipe */]().transform(this.visible, this.secondListSearch);
        if (this.selected.current.length > 0 && ev.shiftKey) {
            var indexOfLastSelected = visibleFilteredList.indexOf(this.selected.current[0]);
            var indexOfSelected = visibleFilteredList.indexOf(element);
            this.setElementNonSelected(this.selected.current);
            this.selected.current = [];
            var i = void 0;
            if (indexOfLastSelected < indexOfSelected) {
                for (i = indexOfLastSelected; i <= indexOfSelected; i++) {
                    visibleFilteredList[i].selected = true;
                    this.selected.current.push(visibleFilteredList[i]);
                }
            }
            else {
                for (i = indexOfLastSelected; i >= indexOfSelected; i--) {
                    visibleFilteredList[i].selected = true;
                    this.selected.current.push(visibleFilteredList[i]);
                }
            }
            return;
        }
        element.selected = !element.selected;
        if (element.selected) {
            if (this.selected.current.length === 0 || (this.selected.current.length > 0 && ev.ctrlKey)) {
                this.selected.current.push(element);
            }
            else {
                this.setElementNonSelected(this.selected.current);
                this.selected.current = [];
                this.selected.current.push(element);
            }
        }
        else {
            if (this.selected.current.length === 0 || (this.selected.current.length > 0 && ev.ctrlKey)) {
                this.selected.current.splice(this.selected.current.indexOf(element), 1);
            }
            else {
                this.setElementNonSelected(this.selected.current);
                this.selected.current = [];
            }
        }
    };
    return TwoListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], TwoListComponent.prototype, "available", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], TwoListComponent.prototype, "visible", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], TwoListComponent.prototype, "visibleChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], TwoListComponent.prototype, "availableChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], TwoListComponent.prototype, "displayAttr", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TwoListComponent.prototype, "initialAvailableColumns", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TwoListComponent.prototype, "defaultVisibleColumns", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TwoListComponent.prototype, "defaultHiddenColumns", void 0);
TwoListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'systelab-two-list',
        template: __webpack_require__("../../../../../src/app/systelab-components/twolist/two-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/systelab-components/twolist/two-list.component.scss")],
    })
], TwoListComponent);

//# sourceMappingURL=two-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/systelab-components/utilities/color.util.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorUtilService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ColorUtilService = (function () {
    function ColorUtilService() {
    }
    ColorUtilService.prototype.generateColorArray = function (colorValues, withBorder) {
        var colorList = new Array();
        for (var _i = 0, colorValues_1 = colorValues; _i < colorValues_1.length; _i++) {
            var colorR = colorValues_1[_i];
            for (var _a = 0, colorValues_2 = colorValues; _a < colorValues_2.length; _a++) {
                var colorG = colorValues_2[_a];
                for (var _b = 0, colorValues_3 = colorValues; _b < colorValues_3.length; _b++) {
                    var colorB = colorValues_3[_b];
                    var newColorElement = {};
                    newColorElement.color = '#' + this.rgbToHex(colorR, colorG, colorB);
                    if (withBorder) {
                        newColorElement.border = '#' + this.darkColor(colorR, colorG, colorB);
                    }
                    newColorElement.id = newColorElement.color;
                    newColorElement.value = newColorElement.color;
                    colorList.push(newColorElement);
                }
            }
        }
        return colorList;
    };
    ColorUtilService.prototype.rgbToHex = function (R, G, B) {
        return this.toHex(R) + this.toHex(G) + this.toHex(B);
    };
    ColorUtilService.prototype.toHex = function (n) {
        n = parseInt(n, 10);
        if (isNaN(n)) {
            return '00';
        }
        n = Math.max(0, Math.min(n, 255));
        return '0123456789ABCDEF'.charAt((n - n % 16) / 16) + '0123456789ABCDEF'.charAt(n % 16);
    };
    ColorUtilService.prototype.darkColor = function (R, G, B) {
        return this.rgbToHex(R * 0.7, G * 0.7, B * 0.7);
    };
    return ColorUtilService;
}());
ColorUtilService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], ColorUtilService);

//# sourceMappingURL=color.util.service.js.map

/***/ }),

/***/ "../../../../../src/app/systelab-components/utilities/styles.util.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StylesUtilService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StylesUtilService = (function () {
    function StylesUtilService() {
    }
    StylesUtilService.getStyleValue = function (elementRef, styleAttribute) {
        if (elementRef && elementRef.nativeElement) {
            var aux = window.getComputedStyle(elementRef.nativeElement, null)
                .getPropertyValue(styleAttribute);
            if (aux.indexOf('px') > -1) {
                return aux.substr(0, aux.indexOf('px'));
            }
            else {
                return aux;
            }
        }
        else {
            return '';
        }
    };
    return StylesUtilService;
}());
StylesUtilService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], StylesUtilService);

//# sourceMappingURL=styles.util.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_showcase_showcase_module__ = __webpack_require__("../../../../../src/app/showcase/showcase.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_showcase_showcase_module__["a" /* ShowcaseModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map