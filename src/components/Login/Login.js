import React from "react";
import useFirebase from "../../hooks/useFirebase";

const Login = () => {
  const { user, signInWithGoogle } = useFirebase();

  return (
    <div>
      <h3>Please Log in</h3>
      <img src={user?.photoURL} alt="" />
      <form action="">
        <input type="email" placeholder="Your Email" name="" id="" />
        <br />
        <input type="password" placeholder="Your Password" name="" id="" />
        <br />
        <input type="submit" value="login" />
      </form>
      <div style={{ margin: "30px" }}>
        <button onClick={signInWithGoogle}>Google Sign In</button>
      </div>
    </div>
  );
};

export default Login;
