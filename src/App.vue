<script setup>
import LandingPage from "./views/LandingPage.vue";
import AppFooter from "./components/layout/AppFooter.vue";
import LandingPageModal from "./components/modals/LandingPageModal.vue";
</script>

<template>
  <main>
    <LandingPageModal />
    <LandingPage />
    <AppFooter />
  </main>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #182044;
}
</style>
