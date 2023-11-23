import { TypedUseSelectorHook, useSelector } from 'react-redux';

export declare type RootState = ReturnType<typeof import('./index').default.getState>;
export declare const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
