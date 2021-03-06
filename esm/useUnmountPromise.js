import { useMemo, useRef, useEffect } from 'preact/hooks';
var useUnmountPromise = function () {
    var refUnmounted = useRef(false);
    useEffect(function () { return function () {
        refUnmounted.current = true;
    }; });
    var wrapper = useMemo(function () {
        var race = function (promise, onError) {
            var newPromise = new Promise(function (resolve, reject) {
                promise.then(function (result) {
                    if (!refUnmounted.current)
                        resolve(result);
                }, function (error) {
                    if (!refUnmounted.current)
                        reject(error);
                    else if (onError)
                        onError(error);
                    else
                        console.error('useUnmountPromise', error);
                });
            });
            return newPromise;
        };
        return race;
    }, []);
    return wrapper;
};
export default useUnmountPromise;
