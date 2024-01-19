import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    courses: [],
    details: [],
  },
  getters: {},
  mutations: {
    SET_COURSES(state, courses) {
      state.courses = courses;
    },

    SET_DETAILS(state, details) {
      state.details = details;
    },
  },
  actions: {
    async fetchCourses({ commit }) {
      try {
        const response = await axios.get(
          "https://api.acharyaprashant.org/v2/legacy/courses/series/optuser/course-series-eeb9d3"
        );

        debugger;
        const { details, courses } = response.data;

        commit("SET_DETAILS", details);
        commit("SET_COURSES", courses);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
});
