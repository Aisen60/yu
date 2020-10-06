<template>
  <Layout>
    <section class="page-category">
      <header class="page-category-header">
        <h3>分类</h3>
        <h4>共：{{ $page.classesData.totalCount }}个</h4>
      </header>
      <ul class="page-category-list">
        <li
          v-for="tag in $page.classesData.edges"
          :key="tag.node.id + '-' + tag.node.title"
        >
          <g-link :to="{ path: '/class/' + tag.node.id }">
            {{ tag.node.title }}
          </g-link>
        </li>
      </ul>
    </section>
  </Layout>
</template>
<page-query>
query {
  classesData: allStrapiClasses {
    totalCount
    edges{
      node{
        id
        title
      }
    }
  }
}
</page-query>

<script>
export default {
  name: "Classes",
  metaInfo: {
    title: "分类",
  },
};
</script>