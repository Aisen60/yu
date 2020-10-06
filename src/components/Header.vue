<template>
  <div
    class="app-header"
    :class="{ 'app-header-fixed': fixed }"
    :style="{
      backgroundImage: `url(
        ${splicingFileUrl(general.BANNER && general.BANNER.url)}
      )`,
    }"
  >
    <!-- splicingFileUrl(general.BANNER && general.BANNER.url) -->
    <div class="container app-header-section app-header-nav">
      <h1>
        <g-link to="/"> {{ general.SIMPLE_NAME.toUpperCase() }}</g-link>
      </h1>
      <Nav />
    </div>
    <div class="app-header-bio-box">
      <div class="container bio-wrapper">
        <h3>BLOG @ {{ general.FULL_NAME }}</h3>
        <p>{{ general.BIO }}</p>
      </div>
    </div>
  </div>
</template>
<static-query>
query {
  general:allStrapiGeneral{
    edges{
      node{
        FULL_NAME
        SIMPLE_NAME
        BIO
        BANNER{
          url
        }
      }
    }
  }
}
</static-query>
<script>
import Nav from "./Nav";
export default {
  name: "Header",
  props: {
    fixed: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    Nav,
  },
  computed: {
    general() {
      return this.$static.general.edges[0].node;
    },
  },
};
</script>
