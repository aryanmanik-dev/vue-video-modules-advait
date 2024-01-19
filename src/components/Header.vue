<template>
  <nav class="navbar navbar-expand-sm navbar-dark px-5">
    <a to="/" class="navbar-brand" href="#">
      <img
        src="https://acharyaprashant.org/images/ic_favicon.png"
        width="30px"
        alt=""
      />
    </a>
    <i
      data-bs-toggle="collapse"
      data-bs-target="#collapsibleNavId"
      aria-controls="collapsibleNavId"
      aria-expanded="false"
      aria-label="Toggle navigation"
      class="bi bi-list navbar-toggler d-lg-none"
    ></i>

    <div class="collapse navbar-collapse" id="collapsibleNavId">
      <ul class="navbar-nav me-auto mt-2 mt-lg-0">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>

        <li class="nav-item">
          <div class="dropdown">
            <router-link
              to="/"
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Live Sessions
            </router-link>

            <ul class="dropdown-menu">
              <li>
                <router-link class="dropdown-item" to="/"
                  >Bhagawat Gita</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/"
                  >Sant Sarita</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/"
                  >Vedana Samhita</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/"
                  >Bodh Pratyusha</router-link
                >
              </li>
            </ul>
          </div>
        </li>

        <li class="nav-item">
          <router-link to="/" class="nav-link active">Video Series</router-link>
        </li>

        <li class="nav-item">
          <router-link to="/" class="nav-link">AP Books</router-link>
        </li>

        <li class="nav-item">
          <router-link to="/" class="nav-link">AP Articles</router-link>
        </li>

        <li class="nav-item dropdown">
          <router-link
            to="/"
            class="nav-link dropdown-toggle"
            id="dropdownId"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            >Invite</router-link
          >
          <div class="dropdown-menu" aria-labelledby="dropdownId">
            <router-link class="dropdown-item" to="/">For a talk</router-link>
            <router-link class="dropdown-item" to="/"
              >For an interview</router-link
            >
          </div>
        </li>

        <li class="nav-item">
          <router-link to="/" class="nav-link">In Media</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/" class="nav-link">Careers</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/" class="nav-link">Donate</router-link>
        </li>
      </ul>
      <div class="d-flex justify-content-between align-items-center">
        <div class="dropdown">
          <div
            class="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            En
          </div>
          <ul class="dropdown-menu">
            <li>Hindi</li>
            <li>English</li>
          </ul>
        </div>
        <div class="icon-wrapper">
          <i class="bi bi-telephone-fill"> </i>
        </div>
        <div class="icon-wrapper">
          <i
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasScrolling"
            aria-controls="offcanvasScrolling"
            class="bi bi-list"
          >
            <span style="font-size: 14px; cursor: pointer">Menu</span>
          </i>
        </div>
      </div>
    </div>
  </nav>
  <div
    class="offcanvas offcanvas-end"
    data-bs-scroll="true"
    data-bs-backdrop="false"
    tabindex="-1"
    id="offcanvasScrolling"
    aria-labelledby="offcanvasScrollingLabel"
  >
    <div class="offcanvas-header">
      <h6 class="offcanvas-title" id="offcanvasScrollingLabel">Login</h6>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <hr />

      <ul class="list-unstyled">
        <li>Bhagavad Gita</li>
        <li>Sant Sarita</li>
        <li>Vedant Samhita</li>
        <li>Bodh Pratyusha</li>
        <li>AP Books</li>
        <li>AP Articles</li>
        <li>Video Series</li>
        <li>AP Circle</li>
        <li>Invite For Talk</li>
        <li>Invite For an Interview</li>
        <li>Media and Public Interaction</li>
        <li>Contact Us</li>
        <li>Careers</li>
        <li>Donate</li>

        <hr />

        <li>More</li>
        <li>PrashantAdvait Foundation</li>
        <li>Ghar Ghar Upanishad</li>
        <li>About Acharya Prashant</li>

        <li>EXPLORE CATEGORIES</li>
        <hr />
        <li>Vedant - Upanishads</li>
        <li>Vedant - Bhagavad Gita</li>
        <li>Other Scriptures</li>
        <li>Saints and Masters</li>
        <li>Other streams</li>
        <li>Life Questionss</li>
        <li>Technical Support</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  background-color: #d24115 !important;
  /* height: 50px; */
  font-size: 15px;
  color: white;
}
.offcanvas-title{
  color:  #d24115 !important;
}
.navbar-nav {
  --bs-navbar-color: white;
  color: white !important;
  cursor: pointer;
}

.offcanvas-body .list-unstyled li {
  font-size: 14px;
  font-weight: 500;
  padding-bottom: 18px;
}

.icon-wrapper {
  margin-left: 10px; /* Adjust the margin as needed */
}
</style>
