"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hooks_1 = require("preact/hooks");
function useStateValidator(state, validator, initialState) {
    if (initialState === void 0) { initialState = [undefined]; }
    var validatorInner = hooks_1.useRef(validator);
    var stateInner = hooks_1.useRef(state);
    validatorInner.current = validator;
    stateInner.current = state;
    var _a = hooks_1.useState(initialState), validity = _a[0], setValidity = _a[1];
    var validate = hooks_1.useCallback(function () {
        if (validatorInner.current.length >= 2) {
            validatorInner.current(stateInner.current, setValidity);
        }
        else {
            setValidity(validatorInner.current(stateInner.current));
        }
    }, [setValidity]);
    hooks_1.useEffect(function () {
        validate();
    }, [state]);
    return [validity, validate];
}
exports.default = useStateValidator;
