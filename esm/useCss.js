import { create } from 'nano-css';
import { addon as addonCSSOM } from 'nano-css/addon/cssom';
import { addon as addonVCSSOM } from 'nano-css/addon/vcssom';
import { cssToTree } from 'nano-css/addon/vcssom/cssToTree';
import { useLayoutEffect, useMemo } from 'preact/hooks';
var nano = create();
addonCSSOM(nano);
addonVCSSOM(nano);
var counter = 0;
var useCss = function (css) {
    var className = useMemo(function () { return 'react-use-css-' + (counter++).toString(36); }, []);
    var sheet = useMemo(function () { return new nano.VSheet(); }, []);
    useLayoutEffect(function () {
        var tree = {};
        cssToTree(tree, css, '.' + className, '');
        sheet.diff(tree);
        return function () {
            sheet.diff({});
        };
    });
    return className;
};
export default useCss;
