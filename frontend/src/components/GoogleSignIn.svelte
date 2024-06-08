<script>
  import { writable } from 'svelte/store';
  import { OAuth2Client } from 'google-auth-library';

  const clientId = 'YOUR_CLIENT_ID';
  const clientSecret = 'YOUR_CLIENT_SECRET';
  const redirectUri = 'YOUR_REDIRECT_URI';
  const oauth2Client = new OAuth2Client(clientId, clientSecret, redirectUri);

  let user = writable(null);

  const handleSignIn = async () => {
    const authUrl = oauth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: ['profile', 'email'],
    });
    chrome.identity.launchWebAuthFlow({ url: authUrl, interactive: true }, async (redirectUrl) => {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError);
        return;
      }
      const { tokens } = await oauth2Client.getToken(redirectUrl);
      chrome.storage.local.set({ tokens }, () => {
        console.log('Tokens stored successfully');
      });
      const ticket = await oauth2Client.verifyIdToken({
        idToken: tokens.id_token,
        audience: clientId,
      });
      user.set(ticket.getPayload());
    });
  };

  const handleSignOut = () => {
    chrome.storage.local.remove('tokens', () => {
      user.set(null);
    });
  };
</script>

<button on:click={handleSignIn}>Sign in with Google</button>
<button on:click={handleSignOut}>Sign out</button>

{#if $user}
  <div>
    <p>Welcome, {$user.name}!</p>
    <p>Email: {$user.email}</p>
  </div>
{/if}
