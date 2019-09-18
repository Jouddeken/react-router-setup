"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Router = function Router(_ref) {
  var config = _ref.config,
      _ref$loadingComponent = _ref.loadingComponent,
      loadingComponent = _ref$loadingComponent === void 0 ? 'Loading...' : _ref$loadingComponent;
  return _react["default"].createElement(_react.Suspense, {
    fallback: loadingComponent
  }, _react["default"].createElement(_reactRouterDom.BrowserRouter, null, _react["default"].createElement(_reactRouterDom.Switch, null, config.map(function (_ref2) {
    var id = _ref2.id,
        exact = _ref2.exact,
        path = _ref2.path,
        component = _ref2.component;
    return _react["default"].createElement(_reactRouterDom.Route, {
      key: id,
      exact: exact,
      path: path,
      component: component
    });
  }))));
};

var _default = Router;
exports["default"] = _default;