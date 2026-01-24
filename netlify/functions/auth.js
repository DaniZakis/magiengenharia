// GitHub OAuth handler for Decap CMS
// Handles the complete OAuth flow: redirect to GitHub -> callback with code -> exchange for token

exports.handler = async (event, context) => {
  const clientId = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Missing GitHub credentials' })
    };
  }

  const params = event.queryStringParameters || {};
  const code = params.code;

  // If we have a code, exchange it for an access token
  if (code) {
    try {
      const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          client_id: clientId,
          client_secret: clientSecret,
          code: code
        })
      });

      const tokenData = await tokenResponse.json();

      if (tokenData.error) {
        return {
          statusCode: 401,
          body: JSON.stringify({ error: tokenData.error_description || 'Authentication failed' })
        };
      }

      // Return HTML that sends the token back to the parent window (Decap CMS)
      const script = `
        <script>
          (function() {
            function receiveMessage(e) {
              console.log("receiveMessage %o", e);
              window.opener.postMessage(
                'authorization:github:success:${JSON.stringify({ token: tokenData.access_token, provider: 'github' })}',
                e.origin
              );
              window.removeEventListener("message", receiveMessage, false);
            }
            window.addEventListener("message", receiveMessage, false);
            window.opener.postMessage("authorizing:github", "*");
          })();
        </script>
      `;

      return {
        statusCode: 200,
        headers: { 'Content-Type': 'text/html' },
        body: script
      };

    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: error.message || 'Internal server error' })
      };
    }
  }

  // No code provided - redirect to GitHub for authorization
  const scope = params.scope || 'repo,user';
  const redirectUri = `https://maggi-engenharia.netlify.app/.netlify/functions/auth`;
  
  const authUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scope)}`;

  return {
    statusCode: 302,
    headers: {
      Location: authUrl
    },
    body: ''
  };
};
