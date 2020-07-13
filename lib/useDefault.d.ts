declare const useDefault: <TStateType>(defaultValue: TStateType, initialValue: TStateType | (() => TStateType)) => readonly [TStateType, import("preact/hooks").StateUpdater<TStateType | null | undefined>];
export default useDefault;
