import { Component, Prop, h, Event, EventEmitter, State } from '@stencil/core';

export type AuthSignInProps = {
    email: string;
    password: string;
    rememberMe: boolean;
};

@Component({
    tag: 'auth-signin',
    styleUrl: '../../styles/tailwind.css',
    shadow: true,
})
export class AuthSignin {
    @Prop() formTitle: string = 'Sign in to your account';
    @Event() formSubmitted: EventEmitter<AuthSignInProps>;
    @Event() formValid: EventEmitter<boolean>;

    @State() email: string = '';
    @State() password: string = '';
    @State() rememberMe: boolean = false;

    handleEmailChange = (event: Event) => {
        this.email = (event.target as HTMLInputElement).value;
    }
    handlePasswordChange = (event: Event) => {
        this.password = (event.target as HTMLInputElement).value;
    }
    handleRememberMeChange = (event: Event) => {
        this.rememberMe = (event.target as HTMLInputElement).checked;
    }
    handleSubmit = (event: Event) => {
        event.preventDefault();
        if ((event.target as HTMLFormElement).checkValidity()) {
            this.formSubmitted.emit({ email: this.email, password: this.password, rememberMe: this.rememberMe });
            this.formValid.emit(true);
        } else {
            (event.target as HTMLFormElement).reportValidity();
            this.formValid.emit(false);
        }
    }

    render() {
        return (
            <div class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div class="sm:mx-auto sm:w-full sm:max-w-md">
                    <img class="mx-auto h-10 w-auto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/200px-Emirates_logo.svg.png" alt="Emirates" />
                    <h2 class="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">{this.formTitle}</h2>
                </div>

                <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <div class="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
                        <form class="space-y-6" action="#" method="POST" onSubmit={this.handleSubmit}>
                            <div>
                                <label htmlFor="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                                <div class="mt-2">
                                    <input onInput={this.handleEmailChange} id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                <div class="mt-2">
                                    <input onInput={this.handlePasswordChange} id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div class="flex items-center justify-between">
                                <div class="flex items-center">
                                    <input onInput={this.handleRememberMeChange} id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                    <label htmlFor="remember-me" class="ml-3 block text-sm leading-6 text-gray-900">Remember me</label>
                                </div>

                                <div class="text-sm leading-6">
                                    <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                                </div>
                            </div>

                            <div>
                                <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
