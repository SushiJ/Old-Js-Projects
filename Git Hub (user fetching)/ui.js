class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  showProfile(user) {
    this.profile.innerHTML = `
    <div class="card card-body lg-m-2">
      <div class="row">
        <div class="col-md-3 d-flex flex-column justify-content-center">
          <img class="img-fluid mb-2 rounded" src="${user.avatar_url}">
          <a href="${user.html_url}" target="_blank" class="btn btn-dark btn-lg my-2 d-block ">View Profile</a>
        </div>
        <div class="col-md-9">
          <span class="badge bg-dark md-mx-1 lg-mr-1">Public Repos: ${user.public_repos}</span>
          <span class="badge bg-secondary mx-1">Public Gists: ${user.public_gists}</span>
          <span class="badge bg-success mx-1">Followers: ${user.followers}</span>
          <span class="badge bg-info mx-1">Following: ${user.following}</span>
          <br>
          <ul class="list-group list-group-flush">
            <li class="list-group-item list-group-item-light rounded mt-2">Company: ${user.company}</li>
            <li class="list-group-item list-group-item-light rounded my-2">Website / Blog: ${user.blog}</li>
            <li class="list-group-item list-group-item-light rounded mb-2">Location: ${user.location}</li>
            <li class="list-group-item list-group-item-light rounded mb-2">Member Since: ${user.created_at}</li>
          </ul>
        </div>
      </div>
    </div>
    <h3 class="page-heading mb-3">Latest Repos</h3>
    <div class="repos"></div>`;
  }

  showAlert(message, className) {
    this.clearAlert();

    const div = document.createElement("div");

    div.className = className;

    div.appendChild(document.createTextNode(message));

    const container = document.querySelector(".search-container");

    const search = document.querySelector(".search");

    container.insertBefore(div, search);

    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  clearAlert() {
    const currentAlert = document.querySelector(".alert");
    if (currentAlert) {
      currentAlert.remove();
    }
  }

  clearProfile() {
    this.profile.innerHTML = "";
  }
}
