exports.ids = [2];
exports.modules = {

/***/ "./components/movie-detail/movie-detail.css":
/*!**************************************************!*\
  !*** ./components/movie-detail/movie-detail.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"search_button": "search_button___36DRm",
	"movie_detail": "movie_detail___2lWvh",
	"movie_detail_group": "movie_detail_group___1GZ3a",
	"movie_detail_img_box": "movie_detail_img_box___1Oza5",
	"movie_detail_img": "movie_detail_img___2PO_h",
	"movie_detail_info": "movie_detail_info___3zkwa",
	"movie_detail_title": "movie_detail_title____rmA8",
	"movie_detail_rating": "movie_detail_rating___bp23M",
	"movie_detail_release_date": "movie_detail_release_date___2g5wg",
	"movie_detail_duration": "movie_detail_duration___3b33K",
	"movie_detail_description": "movie_detail_description___2JVTB"
};

/***/ }),

/***/ "./components/movie-detail/movie-detail.js":
/*!*************************************************!*\
  !*** ./components/movie-detail/movie-detail.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _movie_detail_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movie-detail.css */ "./components/movie-detail/movie-detail.css");
/* harmony import */ var _movie_detail_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_movie_detail_css__WEBPACK_IMPORTED_MODULE_1__);
 //import {connect} from "react-redux";



var MovieDetail = function MovieDetail(props) {
  return props.movie ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _movie_detail_css__WEBPACK_IMPORTED_MODULE_1___default.a.movie_detail
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _movie_detail_css__WEBPACK_IMPORTED_MODULE_1___default.a.movie_detail_img_box
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: _movie_detail_css__WEBPACK_IMPORTED_MODULE_1___default.a.movie_detail_img,
    src: props.movie.poster_path
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _movie_detail_css__WEBPACK_IMPORTED_MODULE_1___default.a.movie_detail_info
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _movie_detail_css__WEBPACK_IMPORTED_MODULE_1___default.a.movie_detail_group
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _movie_detail_css__WEBPACK_IMPORTED_MODULE_1___default.a.movie_detail_title
  }, props.movie.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _movie_detail_css__WEBPACK_IMPORTED_MODULE_1___default.a.movie_detail_rating
  }, props.movie.vote_average)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _movie_detail_css__WEBPACK_IMPORTED_MODULE_1___default.a.movie_detail_group
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _movie_detail_css__WEBPACK_IMPORTED_MODULE_1___default.a.movie_detail_release_date
  }, new Date(props.movie.release_date).getFullYear().toString()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _movie_detail_css__WEBPACK_IMPORTED_MODULE_1___default.a.movie_detail_duration
  }, props.movie.runtime && props.movie.runtime + " min")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _movie_detail_css__WEBPACK_IMPORTED_MODULE_1___default.a.movie_detail_group
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _movie_detail_css__WEBPACK_IMPORTED_MODULE_1___default.a.movie_detail_description
  }, props.movie.overview)))) : null;
}; // function mapStateToProps(state){
//   const {movie} = state;
//   return {movie: movie};
// }


/* harmony default export */ __webpack_exports__["default"] = (MovieDetail);

/***/ })

};;
//# sourceMappingURL=2.js.map