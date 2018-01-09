<template>
  <div class="round-btn">
    <input
      type='button'
      :value='value'
    />
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  name: 'RoundBtn',
  props: {
    value: String,
  },
  data() {
    return {
      msg: 'dooboo',
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="postcss" scoped>
.round-btn {

  input {
    background-color: #333;
    color: #ffffff;
    border-radius: 10px;
    height: 60px;
    margin-top: 40px;
    padding: 20px;
    font-size: 15px;
  }
  input:hover {
    background-color: white;
    color: #333;
  }
}
</style>
