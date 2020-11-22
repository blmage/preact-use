import { useEffect, useState } from 'preact/hooks';
var layouts = new Array(31);
function getLayout(key) {
    if (!layouts[key]) {
        layouts[key] = Object.freeze({
            left: Boolean(key & 1),
            middle: Boolean(key & 4),
            right: Boolean(key & 2),
            back: Boolean(key & 8),
            forward: Boolean(key & 16),
        });
    }
    return layouts[key];
}
export default (function () {
    var _a = useState(getLayout(0)), mouseButtons = _a[0], setMouseButtons = _a[1];
    useEffect(function () {
        var updateMouseButtons = function (event) { return setMouseButtons(getLayout(event.mouseButtons)); };
        document.addEventListener('mousedown', updateMouseButtons);
        document.addEventListener('mouseup', updateMouseButtons);
        return function () {
            document.removeEventListener('mousedown', updateMouseButtons);
            document.removeEventListener('mouseup', updateMouseButtons);
        };
    });
    return mouseButtons;
});
