import { EventEmitter } from '../../stencil-public-runtime';
export declare class FeedbackAlert {
    type: 'success' | 'error' | 'warning';
    needAction: boolean;
    label: string;
    description: string;
    okText: string;
    cancelText: string;
    okClick: EventEmitter;
    cancelClick: EventEmitter;
    getAlertClasses(): "bg-green-50 text-green-800" | "bg-red-50 text-red-800" | "bg-yellow-50 text-yellow-800";
    render(): any;
}
