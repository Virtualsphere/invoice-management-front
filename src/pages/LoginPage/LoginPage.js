import React, { useState } from "react"
import LoginForm from "../../components/LoginForm/LoginForm"
import ForgetPasswordForm from "../../components/LoginForm/ForgetPasswordForm "
import EnterOtpForm from "../../components/LoginForm/EnterOtpForm"
import ChangePasswordForm from "../../components/LoginForm/ChangePasswordForm"
import "./LoginPage.css"

const LoginPage = () => {
  const [formType, setFormType] = useState("login") // Can be 'login', 'forget', 'otp', or 'changePassword'

  const renderForm = () => {
    switch (formType) {
      case "login":
        return (
          <LoginForm showForgetPasswordForm={() => setFormType("forget")} />
        )
      case "forget":
        return (
          <ForgetPasswordForm
            showLoginForm={() => setFormType("login")}
            showEnterOtpForm={() => setFormType("otp")}
          />
        )
      case "otp":
        return <EnterOtpForm showLoginForm={() => setFormType("login")} />
      case "changePassword":
        return <ChangePasswordForm showLoginForm={() => setFormType("login")} />
      default:
        return <LoginForm />
    }
  }

  return (
    <div className="login-page">
      <aside>{renderForm()}</aside>
    </div>
  )
}

export default LoginPage
