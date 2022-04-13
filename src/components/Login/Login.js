import { getAuth } from "firebase/auth";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import app from "../../firebase.init";

const auth = getAuth(app);
const Login = () => {
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.from?.pathname || "/";
  const handleGoogleSignIn = () => {
    signInWithGoogle().then(() => {
      navigate(from, { replace: true });
    });
  };
  return (
    <div>
      <h3>Please Log in</h3>

      <form action="">
        <input type="email" placeholder="Your Email" name="" id="" />
        <br />
        <input type="password" placeholder="Your Password" name="" id="" />
        <br />
        <input type="submit" value="login" />
      </form>
      <div style={{ margin: "30px" }}>
        <button onClick={handleGoogleSignIn}>Google Sign In</button>
      </div>
    </div>
  );
};

export default Login;
