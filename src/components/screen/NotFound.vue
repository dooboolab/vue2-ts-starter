<template>
  <div class="wrapper">
    {{ msg }}
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  name: 'NotFound',
  data() {
    return {
      msg: 'No Screen',
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="postcss" scoped>
:root {
  --fontSize: 1em;
}

@custom-media --desktop (width > 768px);
.wrapper {
  display: grid;
}

</style>
