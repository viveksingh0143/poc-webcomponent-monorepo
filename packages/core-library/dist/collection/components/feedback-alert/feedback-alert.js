import { h } from "@stencil/core";
export class FeedbackAlert {
    constructor() {
        this.type = 'success';
        this.needAction = false;
        this.label = 'Feedback';
        this.description = '';
        this.okText = 'Ok';
        this.cancelText = 'Cancel';
    }
    getAlertClasses() {
        switch (this.type) {
            case 'success':
                return 'bg-green-50 text-green-800';
            case 'error':
                return 'bg-red-50 text-red-800';
            case 'warning':
                return 'bg-yellow-50 text-yellow-800';
            default:
                return 'bg-green-50 text-green-800';
        }
    }
    render() {
        return (h("div", { key: '368010467e65c052aa726f769e68fe605db84595', class: `rounded-md p-4 ${this.getAlertClasses()}` }, h("div", { key: '4c739b594d625eebb20e454fa4b053710e7dfeb3', class: "flex" }, h("div", { key: '7a1276da55ac3db6301d6373e358dcb5ca11a018', class: "flex-shrink-0" }, h("svg", { key: '5faf86bffd444154e56dd0792e0cbc04f47ba69c', class: "h-5 w-5", viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" }, h("path", { key: 'ed6bba4a5f47afb5a7943f5cfa0408a41f8b62c7', "fill-rule": "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z", "clip-rule": "evenodd" }))), h("div", { key: '9fc5ef4ef65166e1ae40a9ea51e543da91b26c38', class: "ml-3" }, h("h3", { key: '3990846b59912f51148956499611894dbccb10df', class: "text-sm font-medium" }, this.label), h("div", { key: 'bd0967b05c8631f340fceb861a4119ac61d0b41d', class: "mt-2 text-sm" }, h("p", { key: 'c48269a8e9541b66089729daf7430334c8d4d1b0' }, this.description)), this.needAction && (h("div", { class: "mt-4" }, h("div", { class: "-mx-2 -my-1.5 flex" }, h("button", { type: "button", class: `rounded-md px-2 py-1.5 text-sm font-medium hover:bg-${this.type}-100 focus:outline-none focus:ring-2 focus:ring-${this.type}-600 focus:ring-offset-2 focus:ring-offset-${this.type}-50`, onClick: () => this.okClick.emit() }, this.okText), h("button", { type: "button", class: `ml-3 rounded-md px-2 py-1.5 text-sm font-medium text-${this.type}-800 bg-${this.type}-50 hover:bg-${this.type}-100 focus:outline-none focus:ring-2 focus:ring-${this.type}-600 focus:ring-offset-2 focus:ring-offset-${this.type}-50`, onClick: () => this.cancelClick.emit() }, this.cancelText))))))));
    }
    static get is() { return "feedback-alert"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["../../styles/tailwind.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["../../styles/tailwind.css"]
        };
    }
    static get properties() {
        return {
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'success' | 'error' | 'warning'",
                    "resolved": "\"error\" | \"success\" | \"warning\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "type",
                "reflect": false,
                "defaultValue": "'success'"
            },
            "needAction": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "need-action",
                "reflect": false,
                "defaultValue": "false"
            },
            "label": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "label",
                "reflect": false,
                "defaultValue": "'Feedback'"
            },
            "description": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "description",
                "reflect": false,
                "defaultValue": "''"
            },
            "okText": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "ok-text",
                "reflect": false,
                "defaultValue": "'Ok'"
            },
            "cancelText": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "cancel-text",
                "reflect": false,
                "defaultValue": "'Cancel'"
            }
        };
    }
    static get events() {
        return [{
                "method": "okClick",
                "name": "okClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "cancelClick",
                "name": "cancelClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=feedback-alert.js.map
