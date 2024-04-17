<template>
  <div>
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/partials/Header.vue';
import Footer from '@/components/partials/Footer.vue';

export default {
  components: {
    Header,
    Footer
  }
};
</script>