<!-- HTML 부분 -->
<template>
  <div class="wrapper">
    <h4 id="id">{{label}}</h4>
    <input id="id_box" type="email" placeholder="  이메일 입력" required/>
  </div>
</template>

<!-- JavaScript 부분 -->
<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  name: 'TextInpuLabel',
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    hint: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      msg: 'dooboo',
    };
  },
});
</script>

<!-- CSS 부분 -->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="postcss" scoped>
@custom-media --mobile (width <= 768px);
@custom-media --desktop (width > 768px);

.wrapper {
  display: grid;
  grid-template: 1fr;

  grid-row-start: 2;
  grid-column-start: 2;

  background-color: white;

  @media (--mobile) {
    grid-template-columns: 1fr;
  }
  #id {
    grid-row-start: 2;
    grid-column-start: 2;
    text-align: left;
  }
  #id_box {
    grid-area: 3 / 2 / 4 / 5;
  }
}
</style>
