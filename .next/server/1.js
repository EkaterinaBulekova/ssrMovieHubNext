exports.ids = [1];
exports.modules = {

/***/ "./components/movie-list/movie-list.css":
/*!**********************************************!*\
  !*** ./components/movie-list/movie-list.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"movie_list_container": "movie_list_container___2vWWy",
	"movie_list_element": "movie_list_element___UqZCY"
};

/***/ }),

/***/ "./components/movie-list/movie-list.js":
/*!*********************************************!*\
  !*** ./components/movie-list/movie-list.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _movie_movie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../movie/movie */ "./components/movie/movie.js");
/* harmony import */ var _movie_list_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movie-list.css */ "./components/movie-list/movie-list.css");
/* harmony import */ var _movie_list_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_movie_list_css__WEBPACK_IMPORTED_MODULE_3__);





var MovieList = function MovieList(props) {
  var movieElements = props.movies.map(function (curmovie) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: curmovie.id,
      className: _movie_list_css__WEBPACK_IMPORTED_MODULE_3___default.a.movie_list_element
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_movie_movie__WEBPACK_IMPORTED_MODULE_2__["default"], {
      movie: curmovie
    }));
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: _movie_list_css__WEBPACK_IMPORTED_MODULE_3___default.a.movie_list_container
  }, movieElements);
};

function mapStateToProps(state) {
  var films = state.films;
  return {
    films: films
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(MovieList));

/***/ }),

/***/ "./components/movie/movie.css":
/*!************************************!*\
  !*** ./components/movie/movie.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"movie_info": "movie_info___1QnfR",
	"movie_card": "movie_card___3p-zM",
	"movie_img": "movie_img___3Z6V8",
	"movie_title": "movie_title___Q5hQs",
	"movie_release_box": "movie_release_box___9u1_6",
	"movie_release_date": "movie_release_date___1099L",
	"movie_genres": "movie_genres___3Wwee"
};

/***/ }),

/***/ "./components/movie/movie.js":
/*!***********************************!*\
  !*** ./components/movie/movie.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _movie_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./movie.css */ "./components/movie/movie.css");
/* harmony import */ var _movie_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_movie_css__WEBPACK_IMPORTED_MODULE_7__);









var Movie =
/*#__PURE__*/
function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Movie, _PureComponent);

  function Movie() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Movie);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Movie).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Movie, [{
    key: "render",
    value: function render() {
      var movie = this.props.movie;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        as: "/film/".concat(movie.id),
        href: "/film?id=".concat(movie.id)
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: _movie_css__WEBPACK_IMPORTED_MODULE_7___default.a.movie_card
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        className: _movie_css__WEBPACK_IMPORTED_MODULE_7___default.a.movie_img,
        src: movie.poster_path
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: _movie_css__WEBPACK_IMPORTED_MODULE_7___default.a.movie_info
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: _movie_css__WEBPACK_IMPORTED_MODULE_7___default.a.movie_title
      }, movie.title), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: _movie_css__WEBPACK_IMPORTED_MODULE_7___default.a.movie_release_box
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: _movie_css__WEBPACK_IMPORTED_MODULE_7___default.a.movie_release_date
      }, new Date(movie.release_date).getFullYear().toString())), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: _movie_css__WEBPACK_IMPORTED_MODULE_7___default.a.movie_genres
      }, movie.genres.toString()))));
    }
  }]);

  return Movie;
}(react__WEBPACK_IMPORTED_MODULE_5__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (Movie);

/***/ })

};;
//# sourceMappingURL=1.js.map