import React from "react";

const Login = () => {
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
        <button>Google Sign In</button>
      </div>
    </div>
  );
};

export default Login;
