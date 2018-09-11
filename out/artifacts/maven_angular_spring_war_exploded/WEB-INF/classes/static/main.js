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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _board_board_list_board_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./board/board-list/board-list.component */ "./src/app/board/board-list/board-list.component.ts");
/* harmony import */ var _dreams_dreams_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dreams/dreams.component */ "./src/app/dreams/dreams.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _dreams_dream_resolver_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dreams/dream-resolver.service */ "./src/app/dreams/dream-resolver.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var appRoutes = [
    // {path: '', redirectTo: 'boards', pathMatch: 'full'},
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'boards', component: _board_board_list_board_list_component__WEBPACK_IMPORTED_MODULE_2__["BoardListComponent"] },
    { path: 'boards/:boardId/dreams',
        component: _dreams_dreams_component__WEBPACK_IMPORTED_MODULE_3__["DreamsComponent"],
        resolve: { dreams: _dreams_dream_resolver_service__WEBPACK_IMPORTED_MODULE_5__["DreamResolver"] } }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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

module.exports = "<app-header></app-header>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <!--<app-board-list-->\n        <!--*ngIf=\"displayBoard\" >-->\n      <!--</app-board-list>-->\n      <!--<app-dreams-->\n        <!--*ngIf=\"displayDream\" >-->\n      <!--</app-dreams>-->\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n"

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
    // displayBoard: boolean = false;
    // displayDream: boolean = false;
    function AppComponent() {
    }
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
/* harmony import */ var _shared_dropdown_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/dropdown.directive */ "./src/app/shared/dropdown.directive.ts");
/* harmony import */ var _board_board_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./board/board.service */ "./src/app/board/board.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _dreams_dream_resolver_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dreams/dream-resolver.service */ "./src/app/dreams/dream-resolver.service.ts");
/* harmony import */ var _dreams_dream_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dreams/dream.service */ "./src/app/dreams/dream.service.ts");
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
                _dreams_dreams_component__WEBPACK_IMPORTED_MODULE_10__["DreamsComponent"],
                _shared_dropdown_directive__WEBPACK_IMPORTED_MODULE_11__["DropdownDirective"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"]
            ],
            providers: [_board_board_service__WEBPACK_IMPORTED_MODULE_12__["BoardService"], _dreams_dream_service__WEBPACK_IMPORTED_MODULE_17__["DreamService"], _dreams_dream_resolver_service__WEBPACK_IMPORTED_MODULE_16__["DreamResolver"]],
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
/* harmony import */ var _board_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../board.model */ "./src/app/board/board-list/board.model.ts");
/* harmony import */ var _board_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../board.service */ "./src/app/board/board.service.ts");
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
    function BoardEditComponent(boardService) {
        this.boardService = boardService;
    }
    BoardEditComponent.prototype.onAddBoard = function () {
        // console.log('onAddBoard() called!');
        // this.board = new Board(
        //   this.nameInputRef.nativeElement.value,
        //   this.categoryInputRef.nativeElement.value,
        //   this.descriptionInputRef.nativeElement.value
        //   )
        var brdId = this.boardService.getNextBoardId();
        var brdName = this.nameInputRef.nativeElement.value;
        var brdCategory = this.categoryInputRef.nativeElement.value;
        var brdDesc = this.descriptionInputRef.nativeElement.value;
        var newBoard = new _board_model__WEBPACK_IMPORTED_MODULE_1__["Board"](brdId, brdName, brdCategory, brdDesc);
        this.boardService.addBoard(newBoard);
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
    BoardEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-board-edit',
            template: __webpack_require__(/*! ./board-edit.component.html */ "./src/app/board/board-list/board-edit/board-edit.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [_board_service__WEBPACK_IMPORTED_MODULE_2__["BoardService"]])
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

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-10\">\n    <app-board-edit></app-board-edit>\n    <hr>\n    <table class=\"table table-hover\">\n      <thead>\n        <tr>\n          <th scope=\"col\">Id</th>\n          <th scope=\"col\">Board Name</th>\n          <th scope=\"col\">Category</th>\n          <th scope=\"col\">Description</th>\n          <th scope=\"col\">Delete</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr style=\"cursor: pointer\"\n            *ngFor=\"let board of boards\"\n            [routerLink]=\"['/boards', board.boardId, 'dreams']\"\n            >\n          <td scope=\"row\">{{ board.boardId }}</td>\n          <td scope=\"row\">{{ board.name }}</td>\n          <td scope=\"row\">{{ board.category }}</td>\n          <td scope=\"row\">{{ board.description }}</td>\n          <td scope=\"row>\"><button class=\"btn-xs btn-danger\" (click)=\"onBoardDelete(board.boardId)\">Delete</button></td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _board_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../board.service */ "./src/app/board/board.service.ts");
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
    function BoardListComponent(boardService, router) {
        this.boardService = boardService;
        this.router = router;
        this.boards = [];
    }
    BoardListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.boards = this.boardService.getBoards();
        this.boardService.boardChanged.subscribe(function (boards) {
            _this.boards = boards;
        });
    };
    BoardListComponent.prototype.onBoardDelete = function (boardId) {
        console.log("onBoardDelete() : " + boardId);
    };
    BoardListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-board-list',
            template: __webpack_require__(/*! ./board-list.component.html */ "./src/app/board/board-list/board-list.component.html"),
            styles: [__webpack_require__(/*! ./board-list.component.css */ "./src/app/board/board-list/board-list.component.css")]
        }),
        __metadata("design:paramtypes", [_board_service__WEBPACK_IMPORTED_MODULE_2__["BoardService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], BoardListComponent);
    return BoardListComponent;
}());



/***/ }),

/***/ "./src/app/board/board-list/board.model.ts":
/*!*************************************************!*\
  !*** ./src/app/board/board-list/board.model.ts ***!
  \*************************************************/
/*! exports provided: Board */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Board", function() { return Board; });
var Board = /** @class */ (function () {
    function Board(id, name, category, description) {
        this.boardId = id;
        this.name = name;
        this.category = category;
        this.description = description;
    }
    return Board;
}());



/***/ }),

/***/ "./src/app/board/board.service.ts":
/*!****************************************!*\
  !*** ./src/app/board/board.service.ts ***!
  \****************************************/
/*! exports provided: BoardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardService", function() { return BoardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _board_list_board_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./board-list/board.model */ "./src/app/board/board-list/board.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BoardService = /** @class */ (function () {
    function BoardService(router) {
        var _this = this;
        this.router = router;
        this.boardChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.boards = [
            new _board_list_board_model__WEBPACK_IMPORTED_MODULE_2__["Board"](1, "Hoon's Refresh board", 'Life', 'Dreams for enjoying my life'),
            new _board_list_board_model__WEBPACK_IMPORTED_MODULE_2__["Board"](2, "Hoon's Career board", 'IT', 'Dreams for being better Programmer')
        ];
        // get Max boardId + 1
        this.getNextBoardId = function () {
            var boards = _this.boards.slice();
            return boards
                .reduce(function (max, b) { return b.boardId > max ? b.boardId : max; }, boards[0].boardId) + 1;
        };
    }
    BoardService.prototype.getBoards = function () {
        return this.boards.slice();
    };
    BoardService.prototype.addBoard = function (board) {
        this.boards.push(board);
        this.boardChanged.emit(this.boards.slice());
    };
    BoardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], BoardService);
    return BoardService;
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

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <img\n      [src]=\"dream.imagePath\"\n      alt=\"{{ dream.name }}\"\n      class=\"img-responsive\"\n      style=\"max-height: 200px\">\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <h1>{{ dream.name }}</h1>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <div\n      appDropdown\n      class=\"btn-group\">\n      <button\n        type=\"button\"\n        class=\"btn btn-primary dropdown-toggle\">\n        Manage Dream <span class=\"caret\"></span>\n      </button>\n      <ul class=\"dropdown-menu\">\n        <li><a href=\"#\">Edit Dream</a></li>\n        <li><a href=\"#\">Delete Dream</a></li>\n      </ul>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    {{ dream.description }}\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    Planed date: 2020-10-10\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    Estimated cost: € 10000\n  </div>\n</div>\n"

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

module.exports = "<a href=\"#\"\n   class=\"list-group-item clearfix\"\n   (click)=\"onSelected()\"\n>\n  <div class=\"pull-left\">\n    <h4 class=\"list-group-item-heading\">{{ dreamInfo.name }}</h4>\n    <p class=\"list-group-item-text\">{{ dreamInfo.description }}</p>\n  </div>\n  <span class=\"pull-right\">\n    <img\n      [src]=\"dreamInfo.imagePath\"\n      alt=\"{{ dreamInfo.name }}\"\n      class=\"img-responsive\"\n      style=\"max-height: 50px;\">\n  </span>\n</a>\n"

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
/* harmony import */ var _dream_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dream.service */ "./src/app/dreams/dream.service.ts");
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
    function DreamItemComponent(dreamService) {
        this.dreamService = dreamService;
    }
    DreamItemComponent.prototype.ngOnInit = function () {
    };
    DreamItemComponent.prototype.onSelected = function () {
        this.dreamService.dreamSelected.emit(this.dreamInfo);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DreamItemComponent.prototype, "dreamInfo", void 0);
    DreamItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dream-item',
            template: __webpack_require__(/*! ./dream-item.component.html */ "./src/app/dreams/dream-list/dream-item/dream-item.component.html"),
            styles: [__webpack_require__(/*! ./dream-item.component.css */ "./src/app/dreams/dream-list/dream-item/dream-item.component.css")]
        }),
        __metadata("design:paramtypes", [_dream_service__WEBPACK_IMPORTED_MODULE_1__["DreamService"]])
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

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <button class=\"btn btn-success\">New Dream</button>\n  </div>\n</div>\n<hr>\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <app-dream-item\n      *ngFor=\"let dream of dreams\"\n      [dreamInfo]=\"dream\">\n    </app-dream-item>\n  </div>\n</div>\n\n"

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
/* harmony import */ var _dream_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dream.service */ "./src/app/dreams/dream.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function DreamListComponent(dreamService, route) {
        this.dreamService = dreamService;
        this.route = route;
    }
    DreamListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data
            .subscribe(function (data) {
            _this.dreams = data['dreams'];
        });
    };
    DreamListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dream-list',
            template: __webpack_require__(/*! ./dream-list.component.html */ "./src/app/dreams/dream-list/dream-list.component.html"),
            styles: [__webpack_require__(/*! ./dream-list.component.css */ "./src/app/dreams/dream-list/dream-list.component.css")]
        }),
        __metadata("design:paramtypes", [_dream_service__WEBPACK_IMPORTED_MODULE_1__["DreamService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], DreamListComponent);
    return DreamListComponent;
}());



/***/ }),

/***/ "./src/app/dreams/dream-resolver.service.ts":
/*!**************************************************!*\
  !*** ./src/app/dreams/dream-resolver.service.ts ***!
  \**************************************************/
/*! exports provided: DreamResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DreamResolver", function() { return DreamResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dream_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dream.service */ "./src/app/dreams/dream.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DreamResolver = /** @class */ (function () {
    function DreamResolver(dreamService) {
        this.dreamService = dreamService;
    }
    DreamResolver.prototype.resolve = function (route, state) {
        return this.dreamService.getDreams(+route.params['boardId']);
    };
    DreamResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_dream_service__WEBPACK_IMPORTED_MODULE_1__["DreamService"]])
    ], DreamResolver);
    return DreamResolver;
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
    function Dream(dreamId, boardId, name, desc, imagePath) {
        this.dreamId = dreamId;
        this.boardId = boardId;
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
    }
    return Dream;
}());



/***/ }),

/***/ "./src/app/dreams/dream.service.ts":
/*!*****************************************!*\
  !*** ./src/app/dreams/dream.service.ts ***!
  \*****************************************/
/*! exports provided: DreamService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DreamService", function() { return DreamService; });
/* harmony import */ var _dream_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dream.model */ "./src/app/dreams/dream.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DreamService = /** @class */ (function () {
    function DreamService() {
        this.dreamSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dreams = [
            //Dummy data
            new _dream_model__WEBPACK_IMPORTED_MODULE_0__["Dream"](1, 1, 'Family Europe Travel', 'We will go more than 5 countries..', 'https://www.eturbonews.com/wp-content/uploads/2017/05/EUROPEtravel-696x492.jpg'),
            new _dream_model__WEBPACK_IMPORTED_MODULE_0__["Dream"](1, 2, 'Register Mobile App (iOS or Android)', 'Should learn Swift or Android..', 'https://dbcms.s3.amazonaws.com/devbridgecom/bcms/image/22d10840edda459883362150cf097441/team-app.jpg'),
            new _dream_model__WEBPACK_IMPORTED_MODULE_0__["Dream"](2, 1, 'Hobby for MTB', 'First I need to buy mountain bike..', 'https://static.f-mts.com/u0421/pics/great-mountain-bike-trails-in-val-venosta-413-1200x485-c-x50-y50.jpg')
        ];
    }
    // getDreams() {
    //   // Made a copy for using it from outside
    //   return this.dreams.slice();
    // }
    DreamService.prototype.getDreams = function (boardId) {
        var selectedDreams = this.dreams.slice().filter(function (d) {
            return d.boardId === boardId;
        });
        console.log(selectedDreams);
        return selectedDreams;
    };
    return DreamService;
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

module.exports = "<div class=\"row\">\n  <div class=\"col-md-5\">\n    <app-dream-list></app-dream-list>\n  </div>\n  <div class=\"col-md-7\">\n    <app-dream-detail\n      *ngIf=\"selectedDream; else infoText\"\n      [dream]=\"selectedDream\"></app-dream-detail>\n    <ng-template #infoText>\n      <p>Please select a Dream!</p>\n    </ng-template>\n  </div>\n</div>\n"

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
/* harmony import */ var _dream_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dream.service */ "./src/app/dreams/dream.service.ts");
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
    function DreamsComponent(dreamService) {
        this.dreamService = dreamService;
    }
    DreamsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dreamService.dreamSelected.subscribe(function (dream) {
            _this.selectedDream = dream;
        });
    };
    DreamsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dreams',
            template: __webpack_require__(/*! ./dreams.component.html */ "./src/app/dreams/dreams.component.html"),
            styles: [__webpack_require__(/*! ./dreams.component.css */ "./src/app/dreams/dreams.component.css")]
        }),
        __metadata("design:paramtypes", [_dream_service__WEBPACK_IMPORTED_MODULE_1__["DreamService"]])
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

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a href=\"#\" class=\"navbar-brand\">My Dream Boards</a>\n    </div>\n\n    <div class=\"collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li\n          routerLinkActive=\"active\"\n          [routerLinkActiveOptions]=\"{exact: true}\">\n          <a routerLink=\"/\">Home</a>\n        </li>\n        <li routerLinkActive=\"active\">\n          <a routerLink=\"/boards\">Boards</a>\n        </li>\n        <!--<li routerLinkActive=\"active\">-->\n          <!--<a routerLink=\"/boards/1/dreams\">Dreams</a>-->\n        <!--</li>-->\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li\n          class=\"dropdown\"\n          appDropdown>\n          <a href=\"#\" class=\"dropdown-toggle\" role=\"button\">Manage <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">Save Data</a></li>\n            <li><a href=\"#\">Fetch Data</a></li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n"

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
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
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

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Welcome to Dream board Home</h1>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/shared/dropdown.directive.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/dropdown.directive.ts ***!
  \**********************************************/
/*! exports provided: DropdownDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownDirective", function() { return DropdownDirective; });
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

var DropdownDirective = /** @class */ (function () {
    // get elementClass(): string {
    //   return this._elementClass.join(' ');
    // }
    // constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    //
    // }
    function DropdownDirective() {
        //@Input() openState: boolean = false;
        //@Input() _elementClass: String[] = [];
        this.isOpen = false;
    }
    DropdownDirective.prototype.ngOnInit = function () {
    };
    DropdownDirective.prototype.toggleOpen = function () {
        this.isOpen = !this.isOpen;
        // [Difficult way]
        // if ( !this.openState ){
        //   this._elementClass.push('open');
        //   this.elementRef.nativeElement.class = this._elementClass;
        //   this.openState = true;
        // }else{
        //   this._elementClass.pop();
        //   this.elementRef.nativeElement.class = this._elementClass;
        //   this.openState = false;
        // }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.open'),
        __metadata("design:type", Object)
    ], DropdownDirective.prototype, "isOpen", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DropdownDirective.prototype, "toggleOpen", null);
    DropdownDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appDropdown]'
        }),
        __metadata("design:paramtypes", [])
    ], DropdownDirective);
    return DropdownDirective;
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