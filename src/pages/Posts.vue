<template>
  <Layout>
    <div class="page-postsList">
      <div class="page-postsList-wrapper">
        <div class="container">
          <div class="row card-box">
            <div
              v-for="post in $page.postsData.edges"
              :key="post.node.id"
              class="col-lg-4 col-md-6 col-sm-6"
            >
              <Card :card="post.node" />
            </div>
          </div>
          <Pager
            class="Pager"
            linkClass="page-number"
            :info="$page.postsData.pageInfo"
          />
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query ($page: Int) {
  postsData: allStrapiPost (
    perPage: 12
    page: $page
    sort: [{ by: "is_top" }]
    filter: { is_publish: { in: [true] } }) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        abstract
        content
        cover {
          url
        }
        tags {
          id
          title
        }
        classes {
          id
          title
        }
        created_at
        is_top
      }
    }
  }
}
</page-query>

<script>
import Card from "~/components/Card.vue";
import { Pager } from "gridsome";
export default {
  name: "Posts",
  metaInfo: {
    title: "posts",
  },
  components: {
    Card,
    Pager,
  },
};
</script>

<style>
</style>