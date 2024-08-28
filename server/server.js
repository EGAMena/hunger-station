const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors({
  origin: ['http://localhost:5173', 'https://desert-heist.com'],
  credentials: true
}));

app.use(express.json());

const BOT_TOKEN = 'MTEzMDg3ODA4NjYyMDEzOTUyMA.Gd04Ji.dzdgADWBKHBq7v5WMWCCOdDKPq5nOsUi2isAvQ';
const SERVER_ID = '1133318434516631582';

const ALLOWED_ROLES = [
  '1247461924912762930', '1247462045108932659', '1247462102617034823', 
  '1247462155629101146', '1247462188738678816', '1247462237371764796', 
  '1247462293390884894', '1247462662875648040', '1247462372864426037', 
  '1247462407807434802', '1247462442628546642', '1247462499767423068',
  '1247462573822054471', '1247462333178187867', '1258776285539471461'
];


app.post('/v1/external/assign-role/:roleId', async (req, res) => {
  const { userId, access_token } = req.body;
  const { roleId } = req.params;

  if (!ALLOWED_ROLES.includes(roleId)) {
    return res.status(400).json({ message: 'Role not permitted' });
  }

  try {
    let memberResponse;
    try {
      memberResponse = await axios.get(
        `https://discord.com/api/v10/guilds/${SERVER_ID}/members/${userId}`,
        {
          headers: {
            Authorization: `Bot ${BOT_TOKEN}`
          }
        }
      );
    } catch (error) {
      if (error.response && error.response.status === 404) {
        if (!access_token) {
          return res.status(400).json({ message: 'User is not in the server and access token is missing' });
        }

        await axios.put(
          `https://discord.com/api/v10/guilds/${SERVER_ID}/members/${userId}`,
          { access_token },
          {
            headers: {
              Authorization: `Bot ${BOT_TOKEN}`,
              'Content-Type': 'application/json'
            }
          }
        );

        memberResponse = await axios.get(
          `https://discord.com/api/v10/guilds/${SERVER_ID}/members/${userId}`,
          {
            headers: {
              Authorization: `Bot ${BOT_TOKEN}`
            }
          }
        );
      } else {
        throw error;
      }
    }

    if (!memberResponse.data.roles) {
      return res.status(500).json({ message: 'Failed to fetch user roles' });
    }

    const userRoles = memberResponse.data.roles;
    const hasAllowedRole = userRoles.some(role => ALLOWED_ROLES.includes(role));

    if (hasAllowedRole) {
      return res.status(400).json({ message: 'User already in a team' });
    }

    const assignResponse = await axios.put(
      `https://discord.com/api/v10/guilds/${SERVER_ID}/members/${userId}/roles/${roleId}`,
      {},
      {
        headers: {
          Authorization: `Bot ${BOT_TOKEN}`,
          'Content-Type': 'application/json'
        }
      }
    );

    if (assignResponse.status === 204) {
      return res.status(200).json({ message: 'Role assigned successfully' });
    } else {
      res.status(assignResponse.status).send('Failed to assign role');
    }
  } catch (error) {
    console.error('Error assigning role:', error);
    return res.status(500).json({ message: 'Error assigning role' });
  }
});

app.get('/v1/external/user-roles/:userId', async (req, res) => {
  const { userId } = req.params;
  const { access_token } = req.query;

  try {
    let memberResponse;
    try {
      memberResponse = await axios.get(
        `https://discord.com/api/v10/guilds/${SERVER_ID}/members/${userId}`,
        {
          headers: {
            Authorization: `Bot ${BOT_TOKEN}`
          }
        }
      );
    } catch (error) {
      if (error.response && error.response.status === 404) {
        if (!access_token) {
          return res.status(400).json({ message: 'User is not in the server and access token is missing' });
        }

        await axios.put(
          `https://discord.com/api/v10/guilds/${SERVER_ID}/members/${userId}`,
          { access_token },
          {
            headers: {
              Authorization: `Bot ${BOT_TOKEN}`,
              'Content-Type': 'application/json'
            }
          }
        );

        memberResponse = await axios.get(
          `https://discord.com/api/v10/guilds/${SERVER_ID}/members/${userId}`,
          {
            headers: {
              Authorization: `Bot ${BOT_TOKEN}`
            }
          }
        );
      } else {
        throw error;
      }
    }

    if (!memberResponse.data.roles) {
      return res.status(500).json({ message: 'Failed to fetch user roles' });
    }

    const userRoles = memberResponse.data.roles;
    res.status(200).json({ roles: userRoles });
  } catch (error) {
    console.error('Error fetching user roles:', error);
    return res.status(500).json({ message: 'Error fetching user roles' });
  }
});

app.post('/v1/external/add-user-to-guild', async (req, res) => {
  const { userId, access_token } = req.body;

  if (!access_token) {
    return res.status(400).json({ message: 'Access token is missing' });
  }

  try {
    await axios.put(
      `https://discord.com/api/v10/guilds/${SERVER_ID}/members/${userId}`,
      { access_token },
      {
        headers: {
          Authorization: `Bot ${BOT_TOKEN}`,
          'Content-Type': 'application/json'
        }
      }
    );

    res.status(200).json({ message: 'User added to guild successfully' });
  } catch (error) {
    console.error('Error adding user to guild:', error);
    res.status(500).json({ message: 'Error adding user to guild' });
  }
});

module.exports = app;
