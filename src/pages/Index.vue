<template>
</template>

<script>
export default {
  data() {
    return {
      testData: 'Test data',
    };
  },
  beforeCreate() {
    if (this.$cookie.get('HERO_TOKEN')) {
      this.$router.push({ path: 'dashboard' });
    } else {
      this.$router.push({ path: 'login' });
    }
  },
};
</script>