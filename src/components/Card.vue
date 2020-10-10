<template>
  <div class="card-wrapper">
    <div class="post-top" v-if="card.is_top">
      <div>置顶</div>
    </div>
    <g-link :to="{ path: '/post/' + card.id }" class="card-image">
      <!-- <img :src="splicingFileUrl(card.id + '.jpg')" alt="" /> -->
      <img :src="splicingFileUrl(card.cover && card.cover.url)" />
    </g-link>
    <div class="card-body">
      <h1 class="card-title">
        <g-link :to="{ path: '/post/' + card.id }" class="card-link">
          {{ card.title }}
        </g-link>
      </h1>

      <p class="card-abstract">
        {{ card.abstract }}
      </p>

      <div class="card-info">
        <span class="text-muted">
          <i class="iconfont iconrili"></i>
          {{ card.created_at | parseTime("{y}-{m}-{d}") }}
        </span>
        <span class="text-muted" v-if="card.tags.length > 0">
          <i class="iconfont icontag"></i>
          <span v-for="tag in card.tags" :key="tag.id + tag.title">
            {{ tag.title }}
          </span>
        </span>

        <span class="text-muted" v-if="card.classes.length > 0">
          <i class="iconfont iconmore"></i>
          <span v-for="classe in card.classes" :key="classe.id + classe.title">
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
};
</script>
