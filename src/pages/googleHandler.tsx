import { PageProps } from "gatsby";
import * as React from "react";

const GoogleHandler: React.FC<PageProps> = ({ location }) => {
  const params = new URLSearchParams(location.search);
  const parameter1 = params.get("code");
  const parameter2 = params.get("state");

  console.log(parameter1); // -> "firstParam"
  console.log(parameter2); // -> "secondParam"

  return (
    <main>
      <h1>tom</h1>
    </main>
  );
};

export default GoogleHandler;
