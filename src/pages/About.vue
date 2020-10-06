<template>
  <div class="page-about">
    <div class="page-about-section">
      <p class="page-about-text-right">JUST CALL ME :C</p>
      <p>THE WECHAT 👉 {{ general.WECHAT }}</p>
    </div>
  </div>
</template>
<page-query>
query {
  general:allStrapiGeneral{
    edges{
      node{
        WECHAT
      }
    }
  }
}
</page-query>
<script>
export default {
  name: "About",
  metaInfo: {
    title: "About",
  },
  computed: {
    general() {
      return this.$page.general.edges[0].node;
    },
  },
};
</script>