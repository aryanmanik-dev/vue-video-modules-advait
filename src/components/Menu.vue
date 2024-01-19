<template>
  <nav class="navbar navbar-expand-sm navbar-dark px-5">
    <router-link to="/" class="navbar-brand">
      <span
        ><img
          src="https://acharyaprashant.org/images/ic_videoseries.png"
          alt=""
          width="70px"
      /></span>
    </router-link>

    <i
      data-bs-toggle="collapse"
      data-bs-target="#collapsibleNavId2"
      aria-controls="collapsibleNavId2"
      aria-expanded="false"
      aria-label="Toggle navigation"
      class="bi bi-list navbar-toggler d-lg-none text-dark"
    ></i>

    <div class="collapse navbar-collapse" id="collapsibleNavId2">
      <ul class="navbar-nav me-auto mt-2 mt-lg-0">
        <li class="nav-item">
          <div class="d-flex align-items-center">
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-light dropdown-toggle dropdown-toggle-split"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span>All</span>
              </button>
              <ul class="dropdown-menu">
                <li>
                  <router-link class="dropdown-item" to="/">All</router-link>
                </li>
                <li>
                  <router-link class="dropdown-item" to="/"
                    >Vedant - Upanishads</router-link
                  >
                </li>
                <li>
                  <router-link class="dropdown-item" to="/"
                    >Vedant - Bhagavad Gita</router-link
                  >
                </li>
                <li>
                  <router-link class="dropdown-item" to="/"
                    >Other Scriptures</router-link
                  >
                </li>
                <li>
                  <router-link class="dropdown-item" to="/"
                    >Saints and Masters</router-link
                  >
                </li>

                <li>
                  <router-link class="dropdown-item" to="/"
                    >Other streams</router-link
                  >
                </li>

                <li>
                  <router-link class="dropdown-item" to="/"
                    >Life Questions</router-link
                  >
                </li>
              </ul>
            </div>
            <input
              type="text"
              class="form-control input_search"
              placeholder="Search..."
            />
            <button type="button" class="btn btn-light ms-auto">
              <i class="bi bi-search"></i>
            </button>
          </div>
        </li>
      </ul>
      <button type="button" class="btn btn-light btn-sm ml-2 login__btn">
        Login
      </button>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  background-color: white;
  /* height: 50px; */
  border-bottom: 1px solid lightgray;
}

.login__btn {
  background-color: #d24115d6 !important;
  color: white;
}
</style>
