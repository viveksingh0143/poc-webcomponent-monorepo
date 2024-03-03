import { h } from "@stencil/core";
export class AuthSignin {
    constructor() {
        this.handleEmailChange = (event) => {
            this.email = event.target.value;
        };
        this.handlePasswordChange = (event) => {
            this.password = event.target.value;
        };
        this.handleRememberMeChange = (event) => {
            this.rememberMe = event.target.checked;
        };
        this.handleSubmit = (event) => {
            event.preventDefault();
            if (event.target.checkValidity()) {
                this.formSubmitted.emit({ email: this.email, password: this.password, rememberMe: this.rememberMe });
                this.formValid.emit(true);
            }
            else {
                event.target.reportValidity();
                this.formValid.emit(false);
            }
        };
        this.formTitle = 'Sign in to your account';
        this.email = '';
        this.password = '';
        this.rememberMe = false;
    }
    render() {
        return (h("div", { key: '02f826dda528d8aead64e74d1ed1a8961a56e64a', class: "flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8" }, h("div", { key: 'a9bdde1d413438fb94787e1faaa18f50137dbe04', class: "sm:mx-auto sm:w-full sm:max-w-md" }, h("img", { key: '9822d48ea53a78beb2c2b2a5830c2d52c90cb545', class: "mx-auto h-10 w-auto", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/200px-Emirates_logo.svg.png", alt: "Emirates" }), h("h2", { key: '086fb603b7904b228f55b60663d7e762b3e8e8b0', class: "mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900" }, this.formTitle)), h("div", { key: 'c6d685f804842d5380a9f99e141614eb39a9a07d', class: "mt-10 sm:mx-auto sm:w-full sm:max-w-sm" }, h("div", { key: 'a3ad302167dfa57373477722051db405d7aaac04', class: "bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12" }, h("form", { key: '98630e56cb436d28d90fc044b51291f3f521bdf3', class: "space-y-6", action: "#", method: "POST", onSubmit: this.handleSubmit }, h("div", { key: '46da8a8a5e8bc165785be1b2e4f6d845153401ef' }, h("label", { key: '95d22e9554a9845a7083c222d76b18a09110ef17', htmlFor: "email", class: "block text-sm font-medium leading-6 text-gray-900" }, "Email address"), h("div", { key: '2c1b059d4e4b9b5710fbcf46dd6979ca96804483', class: "mt-2" }, h("input", { key: '09035a0f26f4b6aa624efd90b96e2a8516aacde2', onInput: this.handleEmailChange, id: "email", name: "email", type: "email", autocomplete: "email", required: true, class: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" }))), h("div", { key: 'cada8d511e80c828f1801125c727f721991856f2' }, h("label", { key: 'db0fcd9d3d0aaa816973fd34d91a6b86d8cb7b58', htmlFor: "password", class: "block text-sm font-medium leading-6 text-gray-900" }, "Password"), h("div", { key: '0db751f5c33b361d22b0ff252ed88c75ced8dd6e', class: "mt-2" }, h("input", { key: 'd15af6848a527a5165a91c092118e4578e1e95d1', onInput: this.handlePasswordChange, id: "password", name: "password", type: "password", autocomplete: "current-password", required: true, class: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" }))), h("div", { key: '79016ea17e50abc02365e30e19cad623b14766e0', class: "flex items-center justify-between" }, h("div", { key: '3d1c71b0d85a20e6a74401016f5dd3e255adc18a', class: "flex items-center" }, h("input", { key: '669d777acca468329b8de56fe45031080671ef62', onInput: this.handleRememberMeChange, id: "remember-me", name: "remember-me", type: "checkbox", class: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" }), h("label", { key: '1f40dcda4cba244e2fdb5a4baf64e9813172362b', htmlFor: "remember-me", class: "ml-3 block text-sm leading-6 text-gray-900" }, "Remember me")), h("div", { key: '2fcabadb3da15a27c88164fb37683d59d4b5c224', class: "text-sm leading-6" }, h("a", { key: '20bcbb205e0654f1de16bfa44d7277eb7ab4b766', href: "#", class: "font-semibold text-indigo-600 hover:text-indigo-500" }, "Forgot password?"))), h("div", { key: 'bc1587cb30f9ea9c9b12349efe4e6bc92a9f004f' }, h("button", { key: 'c2be848f3351d004db590d2a969329644644cdc2', type: "submit", class: "flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" }, "Sign in")))))));
    }
    static get is() { return "auth-signin"; }
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
            "formTitle": {
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
                "attribute": "form-title",
                "reflect": false,
                "defaultValue": "'Sign in to your account'"
            }
        };
    }
    static get states() {
        return {
            "email": {},
            "password": {},
            "rememberMe": {}
        };
    }
    static get events() {
        return [{
                "method": "formSubmitted",
                "name": "formSubmitted",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "AuthSignInProps",
                    "resolved": "{ email: string; password: string; rememberMe: boolean; }",
                    "references": {
                        "AuthSignInProps": {
                            "location": "local",
                            "path": "/Users/viveksingh/development/projects/poc/webcomponent-poc/packages/core-library/src/components/auth-signin/auth-signin.tsx",
                            "id": "src/components/auth-signin/auth-signin.tsx::AuthSignInProps"
                        }
                    }
                }
            }, {
                "method": "formValid",
                "name": "formValid",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=auth-signin.js.map
