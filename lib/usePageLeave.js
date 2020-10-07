"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hooks_1 = require("preact/hooks");
var usePageLeave = function (onPageLeave, args) {
    if (args === void 0) { args = []; }
    hooks_1.useEffect(function () {
        if (!onPageLeave) {
            return;
        }
        var handler = function (event) {
            event = event ? event : window.event;
            var from = event.relatedTarget || event.toElement;
            if (!from || from.nodeName === 'HTML') {
                onPageLeave();
            }
        };
        document.addEventListener('mouseout', handler);
        return function () {
            document.removeEventListener('mouseout', handler);
        };
    }, args);
};
exports.default = usePageLeave;
