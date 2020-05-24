"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hooks_1 = require("preact/hooks");
var useIsomorphicLayoutEffect = typeof window !== 'undefined' ? hooks_1.useLayoutEffect : hooks_1.useEffect;
exports.default = useIsomorphicLayoutEffect;
