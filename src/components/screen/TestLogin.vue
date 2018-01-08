<!-- HTML 부분 -->
<template>
  <div class="wrapper">
    <div class="loginbox">
      <text-input-label class="emailLabel" label="EMAIL" labelType="email" hint="  이메일 입력"/>
      <text-input-label class="passwordLable" label="PASSWORD" labelType="password" hint="  패스워드 입력"/>
      <button-frame class="button_login" text="LOGIN" />
      <button-frame class="button_signup" text="SIGN UP" />
      
      <!-- <input id="bt_login" type="button" value="LOGIN" onclick="location.replace('#/')"/>
      <input id="bt_signup" type="button" value="SIGN UP"/> -->
    </div>
  </div>
</template>

<!-- JavaScript 부분 -->
<script lang='ts'>
import Vue from 'vue';
import TextInputLabel from '../shared/TextInputLabel.vue';

export default Vue.extend({
  name: 'Login',
  components: {
    TextInputLabel,
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
  grid-template: 1fr 300px 1fr / 1fr 400px 1fr;

  height: 700px;
  background-color: #333;

  @media (--mobile) {
    grid-template-columns: 1fr;
  }

  .loginbox {
    display: grid;
    grid-template: 1fr 1fr 1fr / 1fr 1fr;

    grid-row-start: 2;
    grid-column-start: 2;

    background-color: white;

    @media (--mobile) {
      grid-template-columns: 1fr;
    }

    .emailLabel {
      grid-area: 1 / 1 / 1 / 3;
    }

    .passwordLable {
      grid-area: 2 / 1 / 3 / 3;
    }
    .button_login {
      grid-row-start: 7;
      grid-column-start: 2;

      background-color: #333;
      color: white;
    }
    .button_signup {
      grid-row-start: 7;
      grid-column-start: 4;

      background-color: #333;
      color: white;
    }
  }
}


</style>
