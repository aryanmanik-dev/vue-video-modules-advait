<template>
  <div class="container-fluid" style="height: 50vh">
    <div class="row">
      <Header />

      <div class="text-center row__banner">
        <span>
          Just the right start to your New Year! Support Acharya Prashant's Work
        </span>

        <button type="button" class="btn btn-outline-light btn-sm">
          Click Here
        </button>
      </div>
      <Menu />

      <div class="col-md-12 mt-4 px-5">
        <div class="row">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item active font__14" aria-current="page">
                Home
              </li>
              <li class="breadcrumb-item active font__14" aria-current="page">
                संतवाणी
              </li>
            </ol>
          </nav>
          <div class="col-md-10">
            <h5>
              {{ details.title }}
            </h5>
          </div>

          <div class="col-md-5">
            <img
              src="https://cimg.acharyaprashant.org/images/img-4337ee73-d8a3-4c8b-951b-d09a5a6468d3/10/image.jpg"
              alt=""
              class="img-fluid"
              style="width: 100%"
            />
          </div>
          <div class="col-md-7">
            <div class="text">
              <h5 style="font-size: 1rem; font-weight: 600">
                {{ details.subtitle }}
              </h5>

              <div>
                {{ details.description }}
              </div>
            </div>
          </div>

          <div class="col-md-2">
            <br />

            <span> Share this series: </span>
            <br />
            <div class="row">
              <div class="col-3">
                <!-- <i class="bi bi-facebook"></i> -->

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 36 36"
                  class="h-7 w-7"
                >
                  <path
                    fill="#3E6FA7"
                    fill-rule="evenodd"
                    d="M18 0c9.941 0 18 8.093 18 18.075C36 27.263 29.174 34.85 20.337 36V23.46h4.447l.695-4.946h-5.143v-3.368c0-1.303.58-2.495 2.298-2.495h3.08V7.95l-3.484-.203c-4.41 0-7.32 2.681-7.319 6.754l.005 4.013h-4.63v4.946h4.625l.12 12.446C6.501 34.484 0 27.042 0 18.076 0 8.092 8.059 0 18 0Z"
                  ></path>
                </svg>
              </div>
              <div class="col-3">
                <!-- <i class="bi bi-twitter"></i> -->

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 36 36"
                  class="h-7 w-7"
                >
                  <path
                    fill="#08BBEE"
                    fill-rule="evenodd"
                    d="M18 0c9.941 0 18 8.059 18 18s-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0Zm4.868 9.8c-2.605 0-4.717 2-4.717 4.469 0 .328.037.647.108.955-3.865-.238-7.293-1.991-9.63-4.638a4.161 4.161 0 0 0-.649 2.232c0 1.571.88 2.948 2.197 3.714a4.769 4.769 0 0 1-2.196-.565v.1c0 2.172 1.677 3.971 3.872 4.3a4.826 4.826 0 0 1-2.248.142c.591 1.757 2.329 3.03 4.421 3.03a10.021 10.021 0 0 1-5.895 1.888c-.382 0-.76-.021-1.131-.062a13.801 13.801 0 0 0 7.258 2.035c7.36 0 13.326-5.651 13.326-12.623l.002-.508v-.05l-.002-.049a7.602 7.602 0 0 0 2.296-2.275 8.278 8.278 0 0 1-2.642.687c.96-.537 1.687-1.406 2.007-2.44a7.679 7.679 0 0 1-2.928 1.078 4.83 4.83 0 0 0-3.449-1.42Z"
                  ></path>
                </svg>
              </div>

              <div class="col-3">
                <!-- <i class="bi bi-whatsapp"></i> -->

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 36 36"
                  class="h-7 w-7"
                >
                  <path
                    fill="#06BA27"
                    fill-rule="evenodd"
                    d="M18 0c9.941 0 18 8.059 18 18s-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0Zm1.023 6A11.649 11.649 0 0 0 8.922 23.4L7.3 29.446l6.12-1.696.32.157a11.65 11.65 0 0 0 16.637-10.48C30.377 11.088 25.363 6 19.023 6Zm.03 2.169c5.014 0 9.29 3.907 9.29 9.363 0 5.309-4.276 9.658-9.51 9.732-3.023 0-5.309-1.622-5.309-1.622l-3.612.959.884-3.54c-.09-.143-1.474-2.375-1.474-5.16 0-5.309 4.35-9.732 9.732-9.732Zm-3.494 4.095h-.047l-.102.003h-.59l-.054.003c-.159.016-.42.103-.683.366-1.622 1.622-.958 3.907.221 5.382.221.295 1.696 2.949 4.866 4.35 2.36 1.032 2.876.884 3.54.737.81-.074 1.621-.737 1.99-1.4.074-.222.442-1.18.147-1.328l-2.58-1.253-.067-.042c-.199-.117-.398-.15-.597.115l-.885 1.18-.08.052c-.18.11-.325.15-.583.022-1.106-.59-2.654-1.254-3.981-3.466-.074-.294.073-.442.22-.59l.664-1.032.05-.063c.077-.126.014-.253-.05-.379l-.884-2.138-.047-.115c-.172-.388-.343-.408-.515-.404Z"
                  ></path>
                </svg>
              </div>
              <div class="col-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 36 36"
                  class="h-7 w-7"
                >
                  <path
                    fill="#0A66C2"
                    fill-rule="evenodd"
                    d="M18 0c9.941 0 18 8.059 18 18s-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0Zm-5.841 12.643H7.85V27h4.308V12.643Zm11.916-.402c-1.895 0-3.33.689-4.106 1.751v-1.35h-4.307V27h4.307v-7.84c0-2.038 1.091-2.957 2.67-2.957 1.379 0 2.499.833 2.499 2.613V27h4.307v-8.815c0-3.877-2.47-5.944-5.37-5.944Zm-14.07-6.03c-1.407 0-2.584 1.177-2.584 2.584s1.177 2.584 2.584 2.584 2.584-1.177 2.584-2.584-1.177-2.584-2.584-2.584Z"
                  ></path>
                </svg>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      <CardsRow />
      <FAQs />
      <Footer />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Header from "../components/Header.vue";
import Menu from "../components/Menu.vue";
import CardsRow from "../components/CardsRow.vue";
import FAQs from "../components/FAQs.vue";
import Footer from "../components/Footer.vue";
export default {
  components: {
    Header,
    Menu,
    CardsRow,
    FAQs,
    Footer,
  },
  mounted() {
    this.$store.dispatch("fetchCourses");
  },
  computed: {
    ...mapState(["details"]),
  },
};
</script>
<style scoped>
.row__banner {
  background: #1e293b;
  color: white;
  height: 50px;
  line-height: 50px;
}

.font__14 {
  font-size: 14px;
}
</style>
