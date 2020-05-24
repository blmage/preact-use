/* eslint-disable */
import { useEffect } from 'preact/hooks';
var useLifecycles = function (mount, unmount) {
    useEffect(function () {
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
export default useLifecycles;
