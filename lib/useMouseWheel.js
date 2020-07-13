"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hooks_1 = require("preact/hooks");
exports.default = (function () {
    var _a = hooks_1.useState(0), mouseWheelScrolled = _a[0], setMouseWheelScrolled = _a[1];
    hooks_1.useEffect(function () {
        var updateScroll = function (e) {
            setMouseWheelScrolled(e.deltaY + mouseWheelScrolled);
        };
        window.addEventListener('wheel', updateScroll, false);
        return function () { return window.removeEventListener('wheel', updateScroll); };
    });
    return mouseWheelScrolled;
});
