import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import GoogleButton from "react-google-button";
import { getGoogleUrl } from "../utils/getGoogleUrl";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

let from = "/";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <GoogleButton
        onClick={() => {
          console.log("Redirecting to google..");
          window.location.replace(getGoogleUrl(from));
        }}
      ></GoogleButton>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
