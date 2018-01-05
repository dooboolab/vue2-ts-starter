<!-- HTML 부분 -->
<template>
  <div class="wrapper">
    <div class="loginbox">
      <text-input-label/>
      <!-- <h4 id="id">EMAIL</h4>
      <input id="id_box" type="email" placeholder="  이메일 입력" required/> -->
      <h4 id="pw">PASSWORD</h4>
      <input id="pw_box" type="password" placeholder="  패스워드 입력" required/>
      <input id="bt_login" type="button" value="LOGIN" onclick="location.replace('#/')"/>
      <input id="bt_signup" type="button" value="SIGN UP"/>
    </div>
  </div>
</template>

<!-- JavaScript 부분 -->
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

<!-- CSS 부분 -->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="postcss" scoped>
@custom-media --mobile (width <= 768px);

.wrapper {
  display: grid;
  grid-template: 1fr 300px 1fr / 1fr 400px 1fr;

  height: 700px;
  background-color: #333;

  @media (--mobile) {
    grid-template-columns: 1fr;
  }

  .loginbox {
    display: grid;
    grid-template: 6fr 10fr 8fr 10fr 8fr 8fr 13fr 8fr / 10fr 40fr 3fr 40fr 10fr;

    grid-row-start: 2;
    grid-column-start: 2;

    background-color: white;

    @media (--mobile) {
      grid-template-columns: 1fr;
    }
  }
}

#id {
  grid-row-start: 2;
  grid-column-start: 2;
  text-align: left;
}
#id_box {
  grid-area: 3 / 2 / 4 / 5;
}
#pw {
  grid-row-start: 4;
  grid-column-start: 2;
  text-align: left;
}
#pw_box {
  grid-area: 5 / 2 / 6 / 5;
}
#bt_login {
  grid-row-start: 7;
  grid-column-start: 2;

  background-color: #333;
  color: white;
}
#bt_signup {
  grid-row-start: 7;
  grid-column-start: 4;

  background-color: #333;
  color: white;
}
</style>
