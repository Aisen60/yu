<template>
  <footer class="app-footer">
    <div class="app-footer-wrapper">
      <p>Copyright {{ general.COPYRIGHT }}</p>
      <p>ICP备案网站信息: {{ general.APP_LICENSE }}</p>
    </div>
  </footer>
</template>
<static-query>
query {
  general:allStrapiGeneral{
    edges{
      node{
        COPYRIGHT
        APP_LICENSE
      }
    }
  }
}
</static-query>
<script>
export default {
  name: "Footer",
  computed: {
    general() {
      return this.$static.general.edges[0].node;
    },
  },
};
</script>
