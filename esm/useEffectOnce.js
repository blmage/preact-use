import { useEffect } from 'preact/hooks';
var useEffectOnce = function (effect) {
    useEffect(effect, []);
};
export default useEffectOnce;
