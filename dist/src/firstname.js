"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Firstname = void 0;

var React = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var Firstname = function Firstname(_ref) {
  var open = _ref.open,
      toggle = _ref.toggle,
      user = _ref.user,
      create = _ref.create,
      login = _ref.login,
      logout = _ref.logout,
      random = _ref.random;
  return React.createElement("div", null, React.createElement("button", {
    onClick: toggle
  }, open ? "hide" : "show"), open && React.createElement(React.Fragment, null, user ? React.createElement(React.Fragment, null, React.createElement("button", {
    onClick: logout
  }, "logout"), React.createElement("button", {
    onClick: random
  }, "random")) : React.createElement(React.Fragment, null, React.createElement("button", {
    onClick: create
  }, "create"), React.createElement("button", {
    onClick: login
  }, "login")), React.createElement("div", null, JSON.stringify(user))));
};

exports.Firstname = Firstname;

//# sourceMappingURL=firstname.jsx.map