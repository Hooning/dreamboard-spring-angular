(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header (featureSelected)=\"onNavigate($event)\"></app-header>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <app-board-list\n        *ngIf=\"displayBoardList\" >\n      </app-board-list>\n      <app-dreams\n        *ngIf=\"displayDream\" >\n      </app-dreams>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.displayBoardList = false;
        this.displayDream = false;
    }
    AppComponent.prototype.onNavigate = function (menu) {
        console.log("[" + menu + "] Menu clicked!");
        if (menu === 'boardList') {
            this.displayBoardList = true;
            this.displayDream = false;
        }
        else {
            this.displayDream = true;
            this.displayBoardList = false;
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _board_board_list_board_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./board/board-list/board-list.component */ "./src/app/board/board-list/board-list.component.ts");
/* harmony import */ var _board_board_list_board_edit_board_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./board/board-list/board-edit/board-edit.component */ "./src/app/board/board-list/board-edit/board-edit.component.ts");
/* harmony import */ var _dreams_dream_list_dream_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dreams/dream-list/dream-list.component */ "./src/app/dreams/dream-list/dream-list.component.ts");
/* harmony import */ var _dreams_dream_list_dream_item_dream_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dreams/dream-list/dream-item/dream-item.component */ "./src/app/dreams/dream-list/dream-item/dream-item.component.ts");
/* harmony import */ var _dreams_dream_detail_dream_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dreams/dream-detail/dream-detail.component */ "./src/app/dreams/dream-detail/dream-detail.component.ts");
/* harmony import */ var _dreams_dreams_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dreams/dreams.component */ "./src/app/dreams/dreams.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _board_board_list_board_list_component__WEBPACK_IMPORTED_MODULE_5__["BoardListComponent"],
                _board_board_list_board_edit_board_edit_component__WEBPACK_IMPORTED_MODULE_6__["BoardEditComponent"],
                _dreams_dream_list_dream_list_component__WEBPACK_IMPORTED_MODULE_7__["DreamListComponent"],
                _dreams_dream_list_dream_item_dream_item_component__WEBPACK_IMPORTED_MODULE_8__["DreamItemComponent"],
                _dreams_dream_detail_dream_detail_component__WEBPACK_IMPORTED_MODULE_9__["DreamDetailComponent"],
                _dreams_dreams_component__WEBPACK_IMPORTED_MODULE_10__["DreamsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/board/board-list/board-edit/board-edit.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/board/board-list/board-edit/board-edit.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <form>\n      <div class=\"row\">\n        <div class=\"col-sm-3 form-group\">\n          <label for=\"name\">Name</label>\n          <input\n            type=\"text\"\n            id=\"name\"\n            class=\"form-control\"\n            #nameInput\n            >\n        </div>\n        <div class=\"col-sm-2 form-group\">\n          <label for=\"category\">Category</label>\n          <input\n            type=\"text\"\n            id=\"category\"\n            class=\"form-control\"\n            #categoryInput\n            >\n        </div>\n        <div class=\"col-sm-7 form-group\">\n          <label for=\"description\">Description</label>\n          <input\n            type=\"text\"\n            id=\"description\"\n            class=\"form-control\"\n            #descriptionInput\n            >\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <div class=\"btn-toolbar\">\n            <button\n              class=\"btn btn-success\"\n              type=\"submit\"\n              (click)=\"onAddBoard()\"\n              >\n              Add\n            </button>\n            <button class=\"btn btn-danger\" type=\"button\">Delete</button>\n            <button class=\"btn btn-primary\" type=\"button\">Clear</button>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/board/board-list/board-edit/board-edit.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/board/board-list/board-edit/board-edit.component.ts ***!
  \*********************************************************************/
/*! exports provided: BoardEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardEditComponent", function() { return BoardEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_board_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/board.model */ "./src/app/shared/board.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BoardEditComponent = /** @class */ (function () {
    function BoardEditComponent() {
        this.boardCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    BoardEditComponent.prototype.onAddBoard = function () {
        // console.log('onAddBoard() called!');
        // this.board = new Board(
        //   this.nameInputRef.nativeElement.value,
        //   this.categoryInputRef.nativeElement.value,
        //   this.descriptionInputRef.nativeElement.value
        //   )
        var brdName = this.nameInputRef.nativeElement.value;
        var brdCategory = this.categoryInputRef.nativeElement.value;
        var brdDesc = this.descriptionInputRef.nativeElement.value;
        var newBoard = new _shared_board_model__WEBPACK_IMPORTED_MODULE_1__["Board"](brdName, brdCategory, brdDesc);
        this.boardCreated.emit(newBoard);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('nameInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BoardEditComponent.prototype, "nameInputRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('categoryInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BoardEditComponent.prototype, "categoryInputRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('descriptionInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BoardEditComponent.prototype, "descriptionInputRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BoardEditComponent.prototype, "boardCreated", void 0);
    BoardEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-board-edit',
            template: __webpack_require__(/*! ./board-edit.component.html */ "./src/app/board/board-list/board-edit/board-edit.component.html"),
            styleUrls: []
        })
    ], BoardEditComponent);
    return BoardEditComponent;
}());



/***/ }),

/***/ "./src/app/board/board-list/board-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/board/board-list/board-list.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/board/board-list/board-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/board/board-list/board-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-10\">\n    <app-board-edit (boardCreated)=\"onBoardCreated($event)\"></app-board-edit>\n    <hr>\n    <ul class=\"list-group\">\n      <a\n        class=\"list-group-item\"\n        style=\"cursor: pointer\"\n        *ngFor=\"let board of boards\">\n        {{ board.name }} - {{ board.category }} - {{ board.description}}\n      </a>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/board/board-list/board-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/board/board-list/board-list.component.ts ***!
  \**********************************************************/
/*! exports provided: BoardListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardListComponent", function() { return BoardListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_board_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/board.model */ "./src/app/shared/board.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BoardListComponent = /** @class */ (function () {
    function BoardListComponent() {
        this.boards = [
            new _shared_board_model__WEBPACK_IMPORTED_MODULE_1__["Board"]("Hoon's Refresh board", 'Life', 'Dreams for enjoying my life'),
            new _shared_board_model__WEBPACK_IMPORTED_MODULE_1__["Board"]("Hoon's Career board", 'IT', 'Dreams for being better Programmer')
        ];
    }
    BoardListComponent.prototype.ngOnInit = function () {
    };
    BoardListComponent.prototype.onBoardCreated = function (newBoardInfo) {
        //console.log(newBoardInfo);
        this.boards.push(newBoardInfo);
    };
    BoardListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-board-list',
            template: __webpack_require__(/*! ./board-list.component.html */ "./src/app/board/board-list/board-list.component.html"),
            styles: [__webpack_require__(/*! ./board-list.component.css */ "./src/app/board/board-list/board-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BoardListComponent);
    return BoardListComponent;
}());



/***/ }),

/***/ "./src/app/dreams/dream-detail/dream-detail.component.css":
/*!****************************************************************!*\
  !*** ./src/app/dreams/dream-detail/dream-detail.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dreams/dream-detail/dream-detail.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/dreams/dream-detail/dream-detail.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <img\n      [src]=\"dream.imagePath\"\n      alt=\"{{ dream.name }}\"\n      class=\"img-responsive\"\n      style=\"max-height: 250px\">\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <h1>{{ dream.name }}</h1>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <div class=\"btn-group\">\n      <button\n        type=\"button\"\n        class=\"btn btn-primary dropdown-toggle\">\n        Manage Dream <span class=\"caret\"></span>\n      </button>\n      <ul class=\"dropdown-menu\">\n        <li><a href=\"#\">To Dream Board List</a></li>\n        <li><a href=\"#\">Edit Dream</a></li>\n        <li><a href=\"#\">Delete Dream</a></li>\n      </ul>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    {{ dream.description }}\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    Boards\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dreams/dream-detail/dream-detail.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/dreams/dream-detail/dream-detail.component.ts ***!
  \***************************************************************/
/*! exports provided: DreamDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DreamDetailComponent", function() { return DreamDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dream_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dream.model */ "./src/app/dreams/dream.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DreamDetailComponent = /** @class */ (function () {
    function DreamDetailComponent() {
    }
    DreamDetailComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _dream_model__WEBPACK_IMPORTED_MODULE_1__["Dream"])
    ], DreamDetailComponent.prototype, "dream", void 0);
    DreamDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dream-detail',
            template: __webpack_require__(/*! ./dream-detail.component.html */ "./src/app/dreams/dream-detail/dream-detail.component.html"),
            styles: [__webpack_require__(/*! ./dream-detail.component.css */ "./src/app/dreams/dream-detail/dream-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DreamDetailComponent);
    return DreamDetailComponent;
}());



/***/ }),

/***/ "./src/app/dreams/dream-list/dream-item/dream-item.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/dreams/dream-list/dream-item/dream-item.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dreams/dream-list/dream-item/dream-item.component.html":
/*!************************************************************************!*\
  !*** ./src/app/dreams/dream-list/dream-item/dream-item.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a href=\"#\"\n   class=\"list-group-item clearfix\"\n   (click)=\"onItemClick()\"\n>\n  <div class=\"pull-left\">\n    <h4 class=\"list-group-item-heading\">{{ dreamInfo.name }}</h4>\n    <p class=\"list-group-item-text\">{{ dreamInfo.description }}</p>\n  </div>\n  <span class=\"pull-right\">\n    <img\n      [src]=\"dreamInfo.imagePath\"\n      alt=\"{{ dreamInfo.name }}\"\n      class=\"img-responsive\"\n      style=\"max-height: 50px;\">\n  </span>\n</a>\n"

/***/ }),

/***/ "./src/app/dreams/dream-list/dream-item/dream-item.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/dreams/dream-list/dream-item/dream-item.component.ts ***!
  \**********************************************************************/
/*! exports provided: DreamItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DreamItemComponent", function() { return DreamItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DreamItemComponent = /** @class */ (function () {
    function DreamItemComponent() {
        this.showItemDetail = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    DreamItemComponent.prototype.ngOnInit = function () {
    };
    DreamItemComponent.prototype.onItemClick = function () {
        this.showItemDetail.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DreamItemComponent.prototype, "dreamInfo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DreamItemComponent.prototype, "showItemDetail", void 0);
    DreamItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dream-item',
            template: __webpack_require__(/*! ./dream-item.component.html */ "./src/app/dreams/dream-list/dream-item/dream-item.component.html"),
            styles: [__webpack_require__(/*! ./dream-item.component.css */ "./src/app/dreams/dream-list/dream-item/dream-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DreamItemComponent);
    return DreamItemComponent;
}());



/***/ }),

/***/ "./src/app/dreams/dream-list/dream-list.component.css":
/*!************************************************************!*\
  !*** ./src/app/dreams/dream-list/dream-list.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dreams/dream-list/dream-list.component.html":
/*!*************************************************************!*\
  !*** ./src/app/dreams/dream-list/dream-list.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <button class=\"btn btn-success\">New Dream</button>\n  </div>\n</div>\n<hr>\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <app-dream-item\n      *ngFor=\"let dream of dreams\"\n      [dreamInfo]=\"dream\"\n      (showItemDetail) = \"onDreamSelected(dream)\"\n    ></app-dream-item>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/dreams/dream-list/dream-list.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/dreams/dream-list/dream-list.component.ts ***!
  \***********************************************************/
/*! exports provided: DreamListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DreamListComponent", function() { return DreamListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dream_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dream.model */ "./src/app/dreams/dream.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DreamListComponent = /** @class */ (function () {
    function DreamListComponent() {
        this.dreamWasSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dreams = [
            //Dummy data
            new _dream_model__WEBPACK_IMPORTED_MODULE_1__["Dream"]('Family Europe Travel', 'We will go more than 5 countries..', 'https://www.eturbonews.com/wp-content/uploads/2017/05/EUROPEtravel-696x492.jpg'),
            new _dream_model__WEBPACK_IMPORTED_MODULE_1__["Dream"]('Register Mobile App (iOS or Android)', 'Should learn Swift or Android..', 'https://dbcms.s3.amazonaws.com/devbridgecom/bcms/image/22d10840edda459883362150cf097441/team-app.jpg'),
            new _dream_model__WEBPACK_IMPORTED_MODULE_1__["Dream"]('Hobby for MTB', 'First I need to buy mountain bike..', 'https://static.f-mts.com/u0421/pics/great-mountain-bike-trails-in-val-venosta-413-1200x485-c-x50-y50.jpg')
        ];
    }
    DreamListComponent.prototype.ngOnInit = function () {
    };
    DreamListComponent.prototype.onDreamSelected = function (dream) {
        this.dreamWasSelected.emit(dream);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DreamListComponent.prototype, "dreamWasSelected", void 0);
    DreamListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dream-list',
            template: __webpack_require__(/*! ./dream-list.component.html */ "./src/app/dreams/dream-list/dream-list.component.html"),
            styles: [__webpack_require__(/*! ./dream-list.component.css */ "./src/app/dreams/dream-list/dream-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DreamListComponent);
    return DreamListComponent;
}());



/***/ }),

/***/ "./src/app/dreams/dream.model.ts":
/*!***************************************!*\
  !*** ./src/app/dreams/dream.model.ts ***!
  \***************************************/
/*! exports provided: Dream */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dream", function() { return Dream; });
var Dream = /** @class */ (function () {
    function Dream(name, desc, imagePath) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
    }
    return Dream;
}());



/***/ }),

/***/ "./src/app/dreams/dreams.component.css":
/*!*********************************************!*\
  !*** ./src/app/dreams/dreams.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dreams/dreams.component.html":
/*!**********************************************!*\
  !*** ./src/app/dreams/dreams.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-5\">\n    <app-dream-list (dreamWasSelected)=\"selectedDream = $event\"></app-dream-list>\n  </div>\n  <div class=\"col-md-7\">\n    <app-dream-detail\n      *ngIf=\"selectedDream; else infoText\"\n      [dream]=\"selectedDream\"></app-dream-detail>\n    <ng-template #infoText>\n      <p>Please select a Dream!</p>\n    </ng-template>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dreams/dreams.component.ts":
/*!********************************************!*\
  !*** ./src/app/dreams/dreams.component.ts ***!
  \********************************************/
/*! exports provided: DreamsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DreamsComponent", function() { return DreamsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DreamsComponent = /** @class */ (function () {
    function DreamsComponent() {
    }
    DreamsComponent.prototype.ngOnInit = function () {
    };
    DreamsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dreams',
            template: __webpack_require__(/*! ./dreams.component.html */ "./src/app/dreams/dreams.component.html"),
            styles: [__webpack_require__(/*! ./dreams.component.css */ "./src/app/dreams/dreams.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DreamsComponent);
    return DreamsComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a href=\"#\" class=\"navbar-brand\">Dream Book</a>\n    </div>\n\n    <div class=\"collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li><a href=\"#\" (click)=\"onSelect('boardList')\">Board List</a></li>\n        <li><a href=\"#\" (click)=\"onSelect('dream')\">Dreams</a></li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" role=\"button\">Manage <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">Save Data</a></li>\n            <li><a href=\"#\">Fetch Data</a></li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.featureSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.onSelect = function (menu) {
        this.featureSelected.emit(menu);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "featureSelected", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/board.model.ts":
/*!***************************************!*\
  !*** ./src/app/shared/board.model.ts ***!
  \***************************************/
/*! exports provided: Board */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Board", function() { return Board; });
var Board = /** @class */ (function () {
    function Board(name, category, description) {
        this.name = name;
        this.category = category;
        this.description = description;
    }
    return Board;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/hoontime/Documents/WebProjects/maven-angular-spring/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map