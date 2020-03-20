<template>
  <article class="job-info">
    <header>
      <h1 class="job-info__title">
        {{ info.title }}
      </h1>

      <p class="job-info__details">
        <strong>{{ info.type }}</strong>
        <br />

        <strong><em>Cliente</em></strong>
        <br />

        {{ info.client }}
      </p>
    </header>

    <section class="job-info__content">
      <figure
        v-for="(image, index) in info.work"
        :key="index"
        class="job-info__image"
      >
        <img :src="image.filename" class="image" />
      </figure>
    </section>
  </article>
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

<style lang="scss">
.job-info__title {
  margin: 0;
  padding: 11px 0;
  border-bottom: 1px solid black;
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
}

.job-info__details {
  margin: 0;
  padding: 15px 0;
  border-bottom: 1px solid black;
}

.job-info__content {
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  align-items: stretch;
  @media (min-width: 600px) {
    flex-direction: row;
    align-items: flex-start;
  }
}

.job-info__image {
  flex: 1 1 100%;
  margin: 15px 0;
  width: 100%;
  @media (min-width: 600px) {
    flex: 0 0 calc(50% - (15px / 2));
    width: calc(50% - (15px / 2));
    &:nth-child(odd) {
      margin-right: 15px;
    }
  }
  .image {
    width: 100%;
  }
}
</style>
