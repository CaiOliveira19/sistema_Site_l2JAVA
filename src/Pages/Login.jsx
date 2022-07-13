import React from "react";
import Logon from '../ComponentsLogin/Logon/Logon'
import Create from '../ComponentsLogin/Create/Create'
import TrocaSenha from '../ComponentsLogin/TrocaSenha/TrocaSenha'
import FooterLogin from "../ComponentsLogin/FooterLogin/FooterLogin";

function Login() {
  return (
    <div>
      <Logon />
      <Create />
      <TrocaSenha />
      <FooterLogin />
    </div>
  );
}

export default Login;