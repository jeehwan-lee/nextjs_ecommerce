import React, { useState } from "react";

type Props = {};

function signForm(props: Props) {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  return <div>signForm</div>;
}

export default signForm;
