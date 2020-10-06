<template>
  <ul class="nav-link">
    <li v-for="item in nav" :key="item.name + '-' + item.path">
      <g-link
        v-if="!item.external"
        :id="item.name + '-btn'"
        :to="{ path: item.path }"
      >
        {{ item.name }}
      </g-link>
      <a
        v-else
        :id="item.name + '-btn'"
        :href="general.GITHUB_AISEN60"
        target="_blank"
      >
        Github
      </a>
    </li>
  </ul>
</template>
<static-query>
query {
  general:allStrapiGeneral{
    edges{
      node{
        GITHUB_AISEN60
      }
    }
  }
}
</static-query>
<script>
export default {
  name: "Nav",
  data() {
    return {
      nav: [
        {
          name: "文章",
          path: "/posts",
        },
        {
          name: "标签",
          path: "/tags",
        },
        {
          name: "分类",
          path: "/classes",
        },
        {
          name: "关于我",
          path: "/about",
        },
        {
          name: "Github",
          path: "/about",
          external: true,
        },
      ],
    };
  },
  computed: {
    general() {
      return this.$static.general.edges[0].node;
    },
  },
};
</script>
