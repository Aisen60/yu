// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import config from "./config";
import { parseTime } from "./utils";

import "~/assets/css/index.scss";

export default function(Vue, { router, head, isClient }) {
  config.APP_META.forEach((meta) => {
    head.meta.push(meta);
  });

  config.APP_LINK.forEach((link) => {
    head.link.push(link);
  });

  head.script.push({
    src: "https://hm.baidu.com/hm.js?789f5be3cc8017377a1363fc4e5eb349",
  });

  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  Vue.mixin({
    methods: {
      splicingFileUrl(url) {
        return process.env.GRIDSOME_FILES + url;
      },
    },
    filters: {
      parseTime: (str, cFormat = "{y}-{m}-{d} {h}:{i}") => {
        return parseTime(str, cFormat);
      },
    },
  });
}

console.log("hello, why are you open the devtools?");

console.log(
  "If it helps you or if you like it, can you give me a star? thanks"
);

console.log("repository url: https://github.com/Aisen60/yu");
