import { Event, EventEmitter } from '../../stencil-public-runtime';
export type AuthSignInProps = {
    email: string;
    password: string;
    rememberMe: boolean;
};
export declare class AuthSignin {
    formTitle: string;
    formSubmitted: EventEmitter<AuthSignInProps>;
    formValid: EventEmitter<boolean>;
    email: string;
    password: string;
    rememberMe: boolean;
    handleEmailChange: (event: Event) => void;
    handlePasswordChange: (event: Event) => void;
    handleRememberMeChange: (event: Event) => void;
    handleSubmit: (event: Event) => void;
    render(): any;
}
