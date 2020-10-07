<template>
  <div class="page-index">
    <div class="page-index-section">
      <img class="index-avatar" :src="splicingFileUrl(general.AVATARS.url)" />
    </div>
    <div class="page-index-section">
      <h1 class="index-full-name">{{ general.FULL_NAME }}</h1>
    </div>
    <div class="page-index-section">
      <div class="index-bio">{{ general.BIO }}</div>
    </div>
    <hr class="page-index-division" />
    <div class="page-index-section">
      <Nav />
    </div>
    <footer class="page-index-footer">{{ general.COPYRIGHT }}</footer>
  </div>
</template>
<page-query>
query {
  general:allStrapiGeneral{
    edges{
      node{
        FULL_NAME
        BIO
        AVATARS{
          url
        }
        COPYRIGHT
      }
    }
  }
}
</page-query>

<script>
import Nav from "~/components/Nav";
export default {
  name: "HomePage",
  metaInfo: {
    title: "yu",
  },
  components: {
    Nav,
  },
  computed: {
    general() {
      return this.$page.general.edges[0].node;
    },
  },
};
</script>

