<template>
  <div class="trabajos">
    <h1>Trabajos</h1>
    <ul>
      <li v-for="trabajo in trabajos" :key="trabajo.id">
        <router-link
          :to="{
            name: 'Trabajo',
            params: {
              slug: trabajo.slug,
              trabajo: trabajo
            }
          }"
        >
          {{ trabajo.name }}
        </router-link>
      </li>
    </ul>
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
