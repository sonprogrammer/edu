export interface Listener {
    next(scope: 'current' | 'jsx'): typeof scope extends 'current' ? (id: string) => void : (id: string, jsx: string) => void;
}
