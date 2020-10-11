<template>
  <Layout>
    <div class="page-postDetails-wrapper">
      <div class="article">
        <div class="article-header">
          <img
            alt=""
            :src="
              splicingFileUrl($page.postList.cover && $page.postList.cover.url)
            "
            v-if="typeof $page.postList.cover === 'object'"
          />
          <div class="head-mask">
            <h1 class="head-title">
              {{ $page.postList.title }}
            </h1>
            <div class="card-info">
              <span class="text-muted">
                <i class="iconfont iconrili"></i>
                {{ $page.postList.created_at | parseTime("{y}-{m}-{d}") }}
              </span>
              <span class="text-muted" v-if="$page.postList.tags.length > 0">
                <i class="iconfont icontag"></i>
                <span
                  v-for="tag in $page.postList.tags"
                  :key="tag.id + tag.title"
                >
                  {{ tag.title }}
                </span>
              </span>

              <span class="text-muted" v-if="$page.postList.classes.length > 0">
                <i class="iconfont iconmore"></i>
                <span
                  v-for="classe in $page.postList.classes"
                  :key="classe.id + classe.title"
                >
                  {{ classe.title }}
                </span>
              </span>
            </div>
          </div>
        </div>
        <div class="article-main">
          <section v-html="postContent($page.postList.content)"></section>
        </div>
      </div>
    </div>
  </Layout>
</template>
<page-query>
query ($id: ID) {
  postList: strapiPost(id: $id) {
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
  }
}
</page-query>

<script>
import marked from "marked";

export default {
  name: "Post",
  metaInfo() {
    return {
      title: this.$page.postList.title,
      meta: [{ name: "description", content: this.$page.postList.title }],
    };
  },
  computed: {
    postContent: () => {
      return (body) => {
        return marked(body);
      };
    },
  },
};
</script>
