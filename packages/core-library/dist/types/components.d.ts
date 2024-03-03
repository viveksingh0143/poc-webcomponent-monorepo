/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "./stencil-public-runtime";
import { AuthSignInProps } from "./components/auth-signin/auth-signin";
export { AuthSignInProps } from "./components/auth-signin/auth-signin";
export namespace Components {
    interface AuthSignin {
        "formTitle": string;
    }
    interface FeedbackAlert {
        "cancelText": string;
        "description": string;
        "label": string;
        "needAction": boolean;
        "okText": string;
        "type": 'success' | 'error' | 'warning';
    }
}
export interface AuthSigninCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLAuthSigninElement;
}
export interface FeedbackAlertCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLFeedbackAlertElement;
}
declare global {
    interface HTMLAuthSigninElementEventMap {
        "formSubmitted": AuthSignInProps;
        "formValid": boolean;
    }
    interface HTMLAuthSigninElement extends Components.AuthSignin, HTMLStencilElement {
        addEventListener<K extends keyof HTMLAuthSigninElementEventMap>(type: K, listener: (this: HTMLAuthSigninElement, ev: AuthSigninCustomEvent<HTMLAuthSigninElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLAuthSigninElementEventMap>(type: K, listener: (this: HTMLAuthSigninElement, ev: AuthSigninCustomEvent<HTMLAuthSigninElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLAuthSigninElement: {
        prototype: HTMLAuthSigninElement;
        new (): HTMLAuthSigninElement;
    };
    interface HTMLFeedbackAlertElementEventMap {
        "okClick": any;
        "cancelClick": any;
    }
    interface HTMLFeedbackAlertElement extends Components.FeedbackAlert, HTMLStencilElement {
        addEventListener<K extends keyof HTMLFeedbackAlertElementEventMap>(type: K, listener: (this: HTMLFeedbackAlertElement, ev: FeedbackAlertCustomEvent<HTMLFeedbackAlertElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLFeedbackAlertElementEventMap>(type: K, listener: (this: HTMLFeedbackAlertElement, ev: FeedbackAlertCustomEvent<HTMLFeedbackAlertElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLFeedbackAlertElement: {
        prototype: HTMLFeedbackAlertElement;
        new (): HTMLFeedbackAlertElement;
    };
    interface HTMLElementTagNameMap {
        "auth-signin": HTMLAuthSigninElement;
        "feedback-alert": HTMLFeedbackAlertElement;
    }
}
declare namespace LocalJSX {
    interface AuthSignin {
        "formTitle"?: string;
        "onFormSubmitted"?: (event: AuthSigninCustomEvent<AuthSignInProps>) => void;
        "onFormValid"?: (event: AuthSigninCustomEvent<boolean>) => void;
    }
    interface FeedbackAlert {
        "cancelText"?: string;
        "description"?: string;
        "label"?: string;
        "needAction"?: boolean;
        "okText"?: string;
        "onCancelClick"?: (event: FeedbackAlertCustomEvent<any>) => void;
        "onOkClick"?: (event: FeedbackAlertCustomEvent<any>) => void;
        "type"?: 'success' | 'error' | 'warning';
    }
    interface IntrinsicElements {
        "auth-signin": AuthSignin;
        "feedback-alert": FeedbackAlert;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "auth-signin": LocalJSX.AuthSignin & JSXBase.HTMLAttributes<HTMLAuthSigninElement>;
            "feedback-alert": LocalJSX.FeedbackAlert & JSXBase.HTMLAttributes<HTMLFeedbackAlertElement>;
        }
    }
}
