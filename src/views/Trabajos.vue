<template>
  <div>
    <router-link
      v-for="trabajo in trabajos"
      :key="trabajo.id"
      :to="{
        name: 'Trabajo',
        params: {
          slug: trabajo.slug,
          trabajo: trabajo
        }
      }"
      class="job"
    >
      {{ trabajo.name }}
    </router-link>
  </div>
</template>

<script>
import api from "@/api";

export default {
  name: "Trabajos",
  data() {
    return {
      trabajos: []
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const { data } = await api.get("cdn/stories");
      this.trabajos = data.stories;
    }
  }
};
</script>

<style lang="scss">
.job {
  display: block;
  padding: 13px 0;
  border-bottom: 1px solid black;
  color: black;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
}
</style>
