import React from 'react';
import { Listener } from './register';
interface JSXProps {
    active: boolean;
    ob(listener: Listener): void;
}
declare const JSX: React.FunctionComponent<JSXProps>;
export default JSX;
