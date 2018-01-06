<template>
  <div class="wrapper">
    <div class="box">
      <p class='txt-head'>Login With: {{email}}</p>
      <txt-input-label
        label='EMAIL'
        :value='email'
        placeholder='이메일을 입력해주세요.'
        v-on:value='updateEmail'
      />
      <txt-input-label
        label='PASSWORD'
        :value='password'
        placeholder='암호를 입력해주세요.'
        @update='updatePassword'
        type='password'
        style="margin-top: 17px"
      />
      <div class="btn_wrapper">
        <round-btn class="btn_login" txt='로그인'/>
        <round-btn class="btn_signup" txt='회원가입'/>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import TxtInputLabel from '../shared/TxtInputLabel.vue';
import RoundBtn from '../shared/RoundBtn.vue';

export default Vue.extend({
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  components: {
    TxtInputLabel,
    RoundBtn,
  },
  methods: {
    updateEmail (newData: string) {
      this.email = newData;
    },
    updatePassword (newData: string) {
      this.password = newData;
    },
  }
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
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  @media (--desktop) {
    grid-template-columns: 1fr 523px 1fr;
    grid-template-rows: 1fr 378px 1fr;
  }
  .box {
    border-radius: 4px;
    margin: 16px;
    background-color: white;
    padding: 38px 55px 47px 47px;
    @media (--desktop) {
      margin: 0;
      grid-column: 2/3;
      grid-row: 2/-2;
    }
    .txt-head {
      color: #333;
      font-size: 1em;
    }
    .btn_wrapper {
      margin-top: 24px;
      height: 102px;

      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      align-content: space-between;
      @media (--desktop) {
        height: 52px;
        margin-top: 40px;

        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
      }

      .btn_login {
        margin-right: 0;
        @media (--desktop) {
          margin-right: 6.5px;
        }
      }
      .btn_signup {
        margin-left: 0;
        @media (--desktop) {
          margin-left: 6.5px;
        }
      }
    }
  }
}
</style>
