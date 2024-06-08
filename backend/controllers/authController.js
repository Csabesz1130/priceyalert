const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client('YOUR_CLIENT_ID');

exports.verifyToken = async (req, res) => {
  const token = req.body.token;
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: 'YOUR_CLIENT_ID',
    });
    const payload = ticket.getPayload();
    res.json({ user: payload });
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};
