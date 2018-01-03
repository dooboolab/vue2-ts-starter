<template>
  <div class="wrapper">
    Test
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  name: 'Test',
  data() {
    return {
      msg: 'dooboo',
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="postcss" scoped>
:root {
  --fontSize: 1em;
}

@custom-media --mobile (width <= 768px);
.wrapper {
  display: grid;
  grid-template-columns: 1fr 3fr;
  @media (--mobile) {
    grid-template-columns: 1fr;
  }
}
</style>
