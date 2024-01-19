"use client";
"use strict";
exports.__esModule = true;
var React = require("react");
var context_1 = require("@/context");
var login_1 = require("@/components/shared/login");
var react_1 = require("next-auth/react");
var manage_account_1 = require("@/components/shared/manage-account");
var Page = function () {
    var account = context_1.useGlobalContext().account;
    var session = react_1.useSession().data;
    console.log(session);
    if (account === null)
        return React.createElement(manage_account_1["default"], null);
    if (session === null)
        return React.createElement(login_1["default"], null);
    return (React.createElement(React.Fragment, null, "Browse Page"));
};
exports["default"] = Page;

//# sourceMappingURL=page.js.map
