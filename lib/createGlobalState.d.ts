export declare function createGlobalState<S = any>(initialState?: S | (() => S)): () => [S | undefined, (state: S) => void];
export default createGlobalState;
