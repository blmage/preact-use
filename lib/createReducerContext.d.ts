import * as React from 'react';
declare const createReducerContext: <R extends React.Reducer<any, any>>(reducer: R, defaultInitialState: React.ReducerState<R>) => readonly [() => [React.ReducerState<R>, React.Dispatch<React.ReducerAction<R>>], React.FC<{
    initialState?: React.ReducerState<R> | undefined;
}>, React.Context<[React.ReducerState<R>, React.Dispatch<React.ReducerAction<R>>] | undefined>];
export default createReducerContext;
