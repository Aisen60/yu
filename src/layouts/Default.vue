<template>
  <div>
    <AppHeader />
    <slot />
    <AppFooter />
    <BackToTop />
  </div>
</template>

<script>
import AppHeader from "~/components/Header";
import AppFooter from "~/components/Footer";
import BackToTop from "~/components/BackToTop";
export default {
  name: "Layouts",
  components: {
    AppHeader,
    AppFooter,
    BackToTop,
  },
};
</script>