"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hooks_1 = require("preact/hooks");
function useMediatedState(mediator, initialState) {
    var mediatorFn = hooks_1.useRef(mediator);
    var _a = hooks_1.useState(initialState), state = _a[0], setMediatedState = _a[1];
    var setState = hooks_1.useCallback(function (newState) {
        if (mediatorFn.current.length === 2) {
            mediatorFn.current(newState, setMediatedState);
        }
        else {
            setMediatedState(mediatorFn.current(newState));
        }
    }, [state]);
    return [state, setState];
}
exports.useMediatedState = useMediatedState;
