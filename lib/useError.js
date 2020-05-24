"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hooks_1 = require("preact/hooks");
var useError = function () {
    var _a = hooks_1.useState(null), error = _a[0], setError = _a[1];
    hooks_1.useEffect(function () {
        if (error) {
            throw error;
        }
    }, [error]);
    var dispatchError = hooks_1.useCallback(function (err) {
        setError(err);
    }, []);
    return dispatchError;
};
exports.default = useError;
