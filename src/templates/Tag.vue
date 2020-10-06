<template>
  <Layout>
    <section class="page-archive">
      <div class="page-archive-container">
        <div class="page-archive-container-page">
          <h2 class="archive-name"># {{ $page.tag.title }}</h2>
          <div
            class="archive-item"
            v-for="post in $page.tag.posts"
            :key="post.id + '' + post.title"
          >
            <g-link :to="{ path: '/post/' + post.id }">
              {{ post.title }}
            </g-link>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>
<page-query>
query ($id: ID) {
  tag: strapiTag(id: $id) {
    title
    posts{
      id
      title
      created_at
    }
  }
}
</page-query>

<script>
export default {
  name: "Tag",
};
</script>

