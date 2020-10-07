"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hooks_1 = require("preact/hooks");
var useLifecycles = function (mount, unmount) {
    hooks_1.useEffect(function () {
        if (mount) {
            mount();
        }
        return function () {
            if (unmount) {
                unmount();
            }
        };
    }, []);
};
exports.default = useLifecycles;
