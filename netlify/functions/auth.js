// GitHub OAuth handler for Decap CMS
// This function exchanges the authorization code for an access token

exports.handler = async (event, context) => {
  console.log('Auth function called with method:', event.httpMethod);
  console.log('Query params:', event.queryStringParameters);
  console.log('Body:', event.body);

  try {
    const clientId = process.env.GITHUB_CLIENT_ID;
    const clientSecret = process.env.GITHUB_CLIENT_SECRET;

    if (!clientId || !clientSecret) {
      console.error('Missing GitHub credentials');
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Missing GitHub credentials' })
      };
    }

    // Get code from query parameters or request body
    let code;
    
    if (event.httpMethod === 'GET') {
      code = event.queryStringParameters?.code;
    } else if (event.httpMethod === 'POST') {
      const body = JSON.parse(event.body || '{}');
      code = body.code;
    }

    if (!code) {
      console.error('No authorization code provided');
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'No authorization code provided' })
      };
    }

    console.log('Exchanging code for token...');

    // Exchange code for access token
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
      console.error('GitHub error:', tokenData.error_description);
      return {
        statusCode: 401,
        body: JSON.stringify({ error: tokenData.error_description || 'Authentication failed' })
      };
    }

    console.log('Token exchange successful');

    // Return the access token
    return {
      statusCode: 200,
      body: JSON.stringify({
        token: tokenData.access_token,
        token_type: 'bearer'
      })
    };
  } catch (error) {
    console.error('OAuth error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message || 'Internal server error' })
    };
  }
};
