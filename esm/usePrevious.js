import { useEffect, useRef } from 'preact/hooks';
var usePrevious = function (state) {
    var ref = useRef();
    useEffect(function () {
        ref.current = state;
    });
    return ref.current;
};
export default usePrevious;
