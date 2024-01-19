<template>
  <div class="col-md-12 mt-4 mb-5 px-5">
    <div class="row">
      <div class="col-md-12">
        <h5>Video Series (8)</h5>

        <hr />
      </div>

      <div class="col-md-3 mt-3 mb-3" v-for="item in courses" :key="item.id">
        <div class="card border-0 add_shadow">
          <div class="card-body">
            <h6 class="card-title">
              <b>{{ item.title }}</b>
            </h6>
            <span  class="font-weight-light font__14">{{ item.subtitle }}</span>
            <p  class="card-text font__14">{{ item.courseHours }} minutes</p>
            <p class="card-text font__14">
              Contribution ₹ {{ item.amount }}
              <span class="text-decoration-line-through font__14">800</span>
            </p>

            <h6>
              <span class="badge bg-secondary">
                {{ item.language }}
              </span>
            </h6>

            <span class="links">
              <router-link to="/">Add to Card</router-link> |
              <router-link to="/">Enrol</router-link>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  mounted() {
    this.$store.dispatch("fetchCourses");
  },
  computed: {
    ...mapState(["courses"]),
  },
};
</script>

<style scoped>
.font__14{
  font-size: 14px;
}

.add_shadow:hover{

  background: #f8f9fa;
  cursor: pointer;
}

.links a{
  text-decoration: none;
  font-size: 14px;
  font-weight: 400;
  color: #d24115d6 !important;

}
</style>
