import type { Components, JSX } from "../types/components";

interface AuthSignin extends Components.AuthSignin, HTMLElement {}
export const AuthSignin: {
    prototype: AuthSignin;
    new (): AuthSignin;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
