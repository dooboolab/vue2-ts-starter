<template>
  <div class="round-btn">
    <p>{{ txt }}</p>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  name: 'RoundBtn',
  props: {
    txt: String,
  },
  data() {
    return {
      txt: '',
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="postcss" scoped>
.round-btn {
  margin-top: 8px;
  border-radius: 20px;
  border-width: thin;
  height: 47px;
  font-size: 1.25em;
  font-weight: bold;
  text-align: center;
  background-color: #333333;
  color: white;
  cursor: pointer;

  display: grid;
  align-content: center;
  align-items: center;
}
.round-btn:hover {
  background-color: white;
  color: #333;
  border: #333 solid;
  border-width: thin;
}
</style>
