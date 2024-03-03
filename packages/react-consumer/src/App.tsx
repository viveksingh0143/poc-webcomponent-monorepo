import { AuthSigninCustomEvent } from "core-library"
import { useState } from "react"
import { AuthSignin, FeedbackAlert } from "react-library"

function App() {
  const [formValid, setFormValid] = useState<boolean | null>(null);
  const [formValues, setFormValues] = useState<{ email: string, password: string, rememberMe: boolean } | null>(null);

  const onLoginSubmitted: (event: AuthSigninCustomEvent<{ email: string, password: string, rememberMe: boolean }>) => void = (event) => {
    const values = event.detail;
    setFormValues(values);
  };

  return <>
    { formValid != null && <FeedbackAlert label={ formValid ? "Login Valid" : "Invalid Form" } description={formValid ? `E-Mail: ${formValues?.email}, Passwrod: ${formValues?.password}, Remember Me: ${formValues?.rememberMe ? 'Yes' : 'No'}` : "Please enter correct values"}></FeedbackAlert> }
    <AuthSignin formTitle='SignIn Form' onFormSubmitted={onLoginSubmitted} onFormValid={(event) => setFormValid(event.detail)}></AuthSignin>
  </>;
}

export default App
