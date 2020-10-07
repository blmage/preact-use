"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hooks_1 = require("preact/hooks");
var useMountedState_1 = tslib_1.__importDefault(require("./useMountedState"));
var usePromise = function () {
    var isMounted = useMountedState_1.default();
    return hooks_1.useCallback(function (promise) {
        return new Promise(function (resolve, reject) {
            var onValue = function (value) {
                isMounted() && resolve(value);
            };
            var onError = function (error) {
                isMounted() && reject(error);
            };
            promise.then(onValue, onError);
        });
    }, []);
};
exports.default = usePromise;
