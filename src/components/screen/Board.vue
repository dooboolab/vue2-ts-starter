<template>
  <div class="board">
    {{ msg }}
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  name: 'Board',
  data() {
    return {
      msg: 'board',
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
.board {
  margin: 10px;

  display: grid;
  justify-items: start;
}

</style>
