<template>
  <Layout>
    <div class="page-postDetails-wrapper">
      <div class="article">
        <div class="article-header">
          <img
            alt=""
            :src="
              splicingFileUrl($page.postData.cover && $page.postData.cover.url)
            "
            v-if="typeof $page.postData.cover === 'object'"
          />
          <div class="head-mask">
            <h1 class="head-title">
              {{ $page.postData.title }}
            </h1>
            <div class="card-info">
              <span class="text-muted">
                <i class="iconfont iconrili"></i>
                {{ $page.postData.created_at | parseTime("{y}-{m}-{d}") }}
              </span>
              <span class="text-muted" v-if="$page.postData.tags.length > 0">
                <i class="iconfont icontag"></i>
                <span
                  v-for="tag in $page.postData.tags"
                  :key="tag.id + tag.title"
                >
                  {{ tag.title }}
                </span>
              </span>

              <span class="text-muted" v-if="$page.postData.classes.length > 0">
                <i class="iconfont iconmore"></i>
                <span
                  v-for="classe in $page.postData.classes"
                  :key="classe.id + classe.title"
                >
                  {{ classe.title }}
                </span>
              </span>
            </div>
          </div>
        </div>
        <div class="article-main">
          <section v-html="postContent($page.postData.content)"></section>
        </div>
      </div>
    </div>
  </Layout>
</template>
<page-query>
query ($id: ID) {
  postData: strapiPost(id: $id) {
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
      title: this.$page.postData.title,
      meta: [{ name: "description", content: this.$page.postData.title }],
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
