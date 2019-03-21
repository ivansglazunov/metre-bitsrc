"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserPosts = void 0;

var React = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var UserPosts = function UserPosts(_ref) {
  var user = _ref.user,
      posts = _ref.posts,
      remove = _ref.remove,
      createRandom = _ref.createRandom;
  return React.createElement("div", null, React.createElement("button", {
    onClick: createRandom
  }, "createRandom"), " for ", user && user.firstname, React.createElement("ul", null, posts && posts.map(function (post) {
    return React.createElement("li", {
      key: post.id
    }, post.content, React.createElement("button", {
      onClick: function onClick() {
        return remove(post.id);
      }
    }, "remove"));
  })));
};

exports.UserPosts = UserPosts;

//# sourceMappingURL=userposts.jsx.map