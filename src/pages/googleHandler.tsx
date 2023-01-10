import { PageProps } from "gatsby";
import * as React from "react";
import {
  getGoogleOauthToken,
  GoogleOauthToken,
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
  React.useEffect(() => {
    getGoogleOauthToken({ code }).then((token) => setOauthToken(token));
  }, []);

  return (
    <main>
      <h1>tom</h1>
    </main>
  );
};

export default GoogleHandler;
