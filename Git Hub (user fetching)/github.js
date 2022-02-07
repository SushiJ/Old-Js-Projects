class Github {
  constructor() {
    this.client_id = "Your Client id";
    this.client_secret = "Your Client secret";
  }

  async getUser(user) {
    const profileRes = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret} `
    );

    const profile = await profileRes.json();

    return profile;
  }
}
