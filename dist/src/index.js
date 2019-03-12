"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

require("normalize.css");

var _firstname = require("./firstname.jsx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var random = function random() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);
};

var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(App)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      open: true,
      user: null
    });

    _defineProperty(_assertThisInitialized(_this), "toggle", function () {
      return _this.setState(function (_ref) {
        var open = _ref.open;
        return {
          open: !open
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "createAndLogin", function () {
      return _this.setState(function () {
        return {
          user: {
            id: "a",
            firstname: random()
          }
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "logout", function () {
      return _this.setState(function () {
        return {
          user: null
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "random", function () {
      return _this.setState(function () {
        return {
          user: {
            id: "a",
            firstname: random()
          }
        };
      });
    });

    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          open = _this$state.open,
          user = _this$state.user;
      return _react.default.createElement("div", null, _react.default.createElement(_firstname.Firstname, {
        user: user,
        open: open,
        toggle: this.toggle,
        create: this.createAndLogin,
        login: this.createAndLogin,
        logout: this.logout,
        random: this.random
      }));
    }
  }]);

  return App;
}(_react.default.Component);

var rootElement = document.getElementById("root");

_reactDom.default.render(_react.default.createElement(App, null), rootElement);

//# sourceMappingURL=index.js.map