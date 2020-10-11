<template>
  <div class="card-wrapper">
    <div class="post-top" v-if="postData.is_top">
      <div>置顶</div>
    </div>
    <g-link :to="{ path: '/post/' + postData.id }" class="card-image">
      <img
        :src="splicingFileUrl(postData.cover && postData.cover.url)"
        @load="postData.visibleImg = true"
        :class="{ block: postData.visibleImg }"
      />

      <div class="loading load1" v-show="!postData.visibleImg">
        <div class="loader">Loading...</div>
      </div>
    </g-link>
    <div class="card-body">
      <h1 class="card-title">
        <g-link :to="{ path: '/post/' + postData.id }" class="card-link">
          {{ postData.title }}
        </g-link>
      </h1>

      <p class="card-abstract">
        {{ postData.abstract }}
      </p>

      <div class="card-info">
        <span class="text-muted">
          <i class="iconfont iconrili"></i>
          {{ postData.created_at | parseTime("{y}-{m}-{d}") }}
        </span>
        <span class="text-muted" v-if="postData.tags.length > 0">
          <i class="iconfont icontag"></i>
          <span v-for="tag in postData.tags" :key="tag.id + tag.title">
            {{ tag.title }}
          </span>
        </span>

        <span class="text-muted" v-if="postData.classes.length > 0">
          <i class="iconfont iconmore"></i>
          <span
            v-for="classe in postData.classes"
            :key="classe.id + classe.title"
          >
            {{ classe.title }}
          </span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    card: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      postData: Object.assign({ visibleImg: false }, this.card),
    };
  },
};
</script>
