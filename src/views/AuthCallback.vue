<template>
  <div>
    <p v-if="error">Error: {{ error }}</p>
    <p v-else>Loading...</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      error: null
    }
  },
  created() {
    const hash = window.location.hash.substr(1);
    const params = new URLSearchParams(hash);

    if (params.has('access_token')) {
      const accessToken = params.get('access_token');
      localStorage.setItem('discord_access_token', accessToken);

      this.getUserId(accessToken).then(userId => {
        this.addUserToGuild(userId, accessToken).then(() => {
          this.$router.push('/');
        }).catch(error => {
          this.error = error.message;
        });
      }).catch(error => {
        this.error = error.message;
      });
    } else if (params.has('error')) {
      this.error = params.get('error');
      this.$router.push('/');
    } else {
      this.error = 'Unknown error';
      this.$router.push('/');
    }
  },
  methods: {
    async getUserId(accessToken) {
      try {
        const response = await fetch('https://discord.com/api/v10/users/@me', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user ID');
        }

        const data = await response.json();
        return data.id;
      } catch (error) {
        throw new Error('Failed to fetch user ID: ' + error.message);
      }
    },
    async addUserToGuild(userId, accessToken) {
      try {
        const response = await fetch('https://api.external.softwave.dev/api/add-user-to-guild', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ userId, access_token: accessToken })
        });

        if (!response.ok) {
          throw new Error('Failed to add user to guild');
        }
      } catch (error) {
        throw new Error('Failed to add user to guild: ' + error.message);
      }
    }
  }
}
</script>
