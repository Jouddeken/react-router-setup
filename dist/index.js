"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Router = function Router(_ref) {
  var config = _ref.config,
      loadingComponent = _ref.loadingComponent;
  return _react["default"].createElement(_react.Suspense, {
    fallback: loadingComponent
  }, _react["default"].createElement(_reactRouterDom.BrowserRouter, null, _react["default"].createElement(_reactRouterDom.Switch, null, config.map(function (_ref2) {
    var id = _ref2.id,
        path = _ref2.path,
        _ref2$exact = _ref2.exact,
        exact = _ref2$exact === void 0 ? false : _ref2$exact,
        component = _ref2.component;
    return _react["default"].createElement(_reactRouterDom.Route, {
      id: id,
      key: id,
      path: path,
      exact: exact,
      component: component
    });
  }))));
};

Router.propTypes = {
  config: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    id: _propTypes["default"].string.isRequired,
    path: _propTypes["default"].string.isRequired,
    exact: _propTypes["default"].bool,
    component: _propTypes["default"].node.isRequired
  })).isRequired,
  loadingComponent: _propTypes["default"].oneOfType(_propTypes["default"].node, _propTypes["default"].string, _propTypes["default"].number)
};
Router.defaultProps = {
  config: [],
  loadingComponent: 'Loading...'
};
var _default = Router;
exports["default"] = _default;