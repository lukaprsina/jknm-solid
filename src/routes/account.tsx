import { Component } from "solid-js";
import { Button } from "~/components/button";
import { createSession } from "@solid-mediakit/auth/client";

const Account: Component = () => {
  const session = createSession();
  return (
    <div>
      <h1>Account</h1>
      <Button>Login</Button>
    </div>
  );
};

export default Account;
