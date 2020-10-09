<template>
  <Layout>
    <section class="page-category">
      <header class="page-category-header">
        <h3>标签</h3>
        <h4>共：{{ $page.tagsData.totalCount }}个</h4>
      </header>
      <ul class="page-category-list">
        <li
          v-for="tag in $page.tagsData.edges"
          :key="tag.node.id + '-' + tag.node.title"
        >
          <g-link :to="{ path: '/tag/' + tag.node.id }">
            {{ tag.node.title }}
          </g-link>
        </li>
      </ul>
    </section>
  </Layout>
</template>
<page-query>
query {
  tagsData: allStrapiTag(filter: { is_publish: { in: [true] }}) {
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
  name: "Tags",
  metaInfo: {
    title: "标签",
  },
};
</script>