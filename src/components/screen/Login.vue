<template>
  <div class="wrapper">
    <div class="box">
      <text-input-label/>
      <text-input-label style="margin-top: 17px"/>
      <div class="btn_wrapper">
        <div>button1</div>
        <div>button2</div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import TextInputLabel from '../shared/TextInputLabel.vue';

export default Vue.extend({
  name: 'Login',
  data() {
    return {
      msg: 'dooboo',
    };
  },
  components: {
    TextInputLabel,
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
  background: #333;
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: 1fr 523px 1fr;
  grid-template-rows: 1fr 378px 1fr;
  @media (--desktop) {
  }
  .box {
    grid-column: 2/3;
    grid-row: 2/-2;
    border-radius: 4px;

    display: flex;
    background-color: white;
    flex-direction: column;
    padding: 38px 55px 47px 47px;
    @media (--desktop) {

    }
    .btn_wrapper {
      background-color: #ccc;
      height: 66px;
      margin-top: 40px;

      flex-direction: row;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>
