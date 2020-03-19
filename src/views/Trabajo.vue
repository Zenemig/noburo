<template>
  <div class="trabajo">
    <h1>{{ info.title }}</h1>
    <p>{{ info.type }}</p>
    <p>Cliente</p>
    <p>{{ info.client }}</p>
    <figure v-for="(image, index) in info.work" :key="index">
      <img :src="image.filename" />
    </figure>
  </div>
</template>

<script>
import api from "@/api";

export default {
  name: "Trabajo",
  data() {
    return {
      info: {}
    };
  },
  created() {
    if (this.$route.params.trabajo) {
      this.info = this.$route.params.trabajo.content;
    } else {
      this.fetchData();
    }
  },
  methods: {
    async fetchData() {
      const { data } = await api.get(`cdn/stories/${this.$route.params.slug}`);
      this.info = data.story.content;
    }
  }
};
</script>
