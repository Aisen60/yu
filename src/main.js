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

  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  Vue.mixin({
    methods: {
      splicingFileUrl(url) {
        alert(JSON.stringify(process.env));
        console.log(process.env);
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
