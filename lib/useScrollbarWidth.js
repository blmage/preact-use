"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useScrollbarWidth = void 0;
var scrollbar_width_1 = require("@xobotyi/scrollbar-width");
var hooks_1 = require("preact/hooks");
function useScrollbarWidth() {
    var _a = hooks_1.useState(scrollbar_width_1.scrollbarWidth()), sbw = _a[0], setSbw = _a[1];
    // this needed to ensure the scrollbar width in case hook called before the DOM is ready
    hooks_1.useEffect(function () {
        if (typeof sbw !== 'undefined') {
            return;
        }
        var raf = requestAnimationFrame(function () {
            setSbw(scrollbar_width_1.scrollbarWidth());
        });
        return function () { return cancelAnimationFrame(raf); };
    }, []);
    return sbw;
}
exports.useScrollbarWidth = useScrollbarWidth;
