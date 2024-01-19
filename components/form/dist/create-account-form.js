"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var validation_1 = require("@/lib/validation");
var React = require("react");
var react_hook_form_1 = require("react-hook-form");
var form_1 = require("@/components/ui/form");
var input_1 = require("@/components/ui/input");
var button_1 = require("../ui/button");
var react_pin_input_1 = require("react-pin-input");
var zod_1 = require("@hookform/resolvers/zod");
var axios_1 = require("axios");
var use_toast_1 = require("@/components/ui/use-toast");
var CreateAccountForm = function (_a) {
    var uid = _a.uid, setOpen = _a.setOpen;
    var form = react_hook_form_1.useForm({
        resolver: zod_1.zodResolver(validation_1.createAccountSchema),
        defaultValues: { name: "", pin: "" }
    });
    var isSubmitting = form.formState.isSubmitting;
    function onSubmit(values) {
        return __awaiter(this, void 0, void 0, function () {
            var data, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1["default"].post("/api/createAccount", __assign(__assign({}, values), { uid: uid }))];
                    case 1:
                        data = (_a.sent()).data;
                        if (data.success) {
                            setOpen(false);
                            form.reset();
                            return [2 /*return*/, use_toast_1.toast({
                                    title: "Account created successfully",
                                    description: "Your account has been created successfully"
                                })];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        return [2 /*return*/, use_toast_1.toast({
                                title: "Error",
                                description: "An error occurred while creating your account",
                                variant: "destructive"
                            })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    return (React.createElement(React.Fragment, null,
        React.createElement("h1", { className: "text-white text-center font-bold text-3xl" }, "Create your account"),
        React.createElement("div", { className: "w-full h-[2px] bg-slate-500/20 mb-4 color-white" }),
        React.createElement(form_1.Form, __assign({}, form),
            React.createElement("form", { onSubmit: form.handleSubmit(onSubmit), className: "space-y-3" },
                React.createElement(form_1.FormField, { control: form.control, name: "name", render: function (_a) {
                        var field = _a.field;
                        return (React.createElement(form_1.FormItem, null,
                            React.createElement(form_1.FormLabel, null, "Name"),
                            React.createElement(form_1.FormControl, null,
                                React.createElement(input_1.Input, __assign({}, field, { autoComplete: "off", className: "h-[56px]", disabled: isSubmitting }))),
                            React.createElement(form_1.FormDescription, null, "Your name is used identify your account."),
                            React.createElement(form_1.FormMessage, { className: "text-red-600" })));
                    } }),
                React.createElement(form_1.FormField, { control: form.control, name: "pin", render: function (_a) {
                        var field = _a.field;
                        return (React.createElement(form_1.FormItem, null,
                            React.createElement(form_1.FormLabel, null, "PIN Code"),
                            React.createElement(form_1.FormControl, null,
                                React.createElement(react_pin_input_1["default"], { length: 4, initialValue: field.value, secret: true, disabled: isSubmitting, secretDelay: 100, onChange: function (value) { return field.onChange(value); }, type: "numeric", inputMode: "number", style: {
                                        display: "grid",
                                        gridTemplateColumns: "repeat(4, 1fr)",
                                        gap: "10px"
                                    }, inputStyle: {
                                        borderColor: "RGBA(255, 255, 0.16)",
                                        height: "56px",
                                        width: "100%",
                                        fontSize: "40px"
                                    }, inputFocusStyle: { borderColor: "RGBA(255, 255, 0.80" }, autoSelect: true })),
                            React.createElement(form_1.FormDescription, null, "Your pin is used identify your account."),
                            React.createElement(form_1.FormMessage, { className: "text-red-600" })));
                    } }),
                React.createElement(button_1.Button, { className: "w-full bg-red-600 hover:bg-red-700 flex justify-center items-center h-[56px] !text-white mt-4", disabled: isSubmitting }, "Create account")))));
};
exports["default"] = CreateAccountForm;

//# sourceMappingURL=create-account-form.js.map
