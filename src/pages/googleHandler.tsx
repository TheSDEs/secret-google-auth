import { PageProps } from "gatsby";
import * as React from "react";
import {
  getGoogleOauthToken,
  getGoogleUser,
  GoogleOauthToken,
  GoogleUserResult,
} from "../utils/getGoogleOauthToken";

const GoogleHandler: React.FC<PageProps> = ({ location }) => {
  const params = new URLSearchParams(location.search);
  const code = params.get("code");
  const state = params.get("state");

  if (!code) {
    return <>No code!</>;
  }

  console.log(code);
  console.log(state);

  const [oauthToken, setOauthToken] = React.useState<GoogleOauthToken>({
    access_token: "",
    id_token: "",
    expires_in: 0,
    refresh_token: "",
    token_type: "",
    scope: "",
  });

  const [googleUser, setGoogleUser] = React.useState<GoogleUserResult>({
    id: "",
    email: "",
    verified_email: false,
    name: "",
    given_name: "",
    family_name: "",
    picture: "",
    locale: "",
  });

  React.useEffect(() => {
    getGoogleOauthToken({ code }).then((token) => {
      setOauthToken(token);
      getGoogleUser({
        id_token: token.id_token,
        access_token: token.access_token,
      }).then((result) => {
        setGoogleUser(result);
      });
    });
  }, []);

  return (
    <main>
      <h1>Google OAuth token:</h1>
      <div>{JSON.stringify(oauthToken)}</div>
      <h1>Google user:</h1>
      <div>{JSON.stringify(googleUser)}</div>
    </main>
  );
};

export default GoogleHandler;
