<template>
  <div class="round-btn">
    <p>{{ name }}</p>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  name: 'RoundBtn',
  props: {
    name: String,
  },
  data() {
    return {
      name: '',
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="postcss" scoped>
.round-btn {
  margin-top: 8px;
  border-radius: 10px;
  border-width: thin;
  height: 47px;
  font-size: 17px;
  background-color: #333333;
  color: white;
  cursor: pointer;
  
  display: grid;
  align-content: center;
}
.round-btn:hover {
  background-color: white;
  color: #333;
  border: #333 solid;
  border-width: thin;
}
</style>
