<template>
  <section class="contact">
    <a href="mailto:hola@noburo.cl" class="contact__email">
      hola@noburo.cl
    </a>

    <div class="contact__social">
      <a href="#" class="link">
        Facebook
      </a>

      <a href="#" class="link">
        Instagram
      </a>

      <a href="#" class="link">
        Twitter
      </a>
    </div>
  </section>
</template>

<style lang="scss">
.contact__email {
  display: block;
  border-bottom: 1px solid black;
  padding: 12px 0;
  color: black;
  font-weight: bold;
  text-decoration: none;
}

.contact__social {
  border-bottom: 1px solid black;
  padding: 12px 0 6px 0;
  .link {
    display: block;
    margin-bottom: 6px;
    color: black;
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;
  }
}
</style>
