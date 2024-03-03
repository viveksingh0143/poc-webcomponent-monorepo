import type { Components, JSX } from "../types/components";

interface FeedbackAlert extends Components.FeedbackAlert, HTMLElement {}
export const FeedbackAlert: {
    prototype: FeedbackAlert;
    new (): FeedbackAlert;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
