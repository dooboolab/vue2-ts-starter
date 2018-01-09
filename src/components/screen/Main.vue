<template>
  <div class="wrapper">
    <div class="sidebar">
      <div class="toggle-btn">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul>
        <li @click="updateMenu">{{ menuText }}</li>
        <li>Menu 2</li>
        <li>Menu 3</li>
        <li>Menu 4</li>
        <round-btn class="btn_logout" value='LOGOUT' onclick="location.replace('#/login')" />
      </ul>
    </div>
    <div>
      <h1 @click="updateMsg">{{ message }}</h1>
      <p class="what_content">여기는 {{ page }} 페이지입니다.</p>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import RoundBtn from '../shared/RoundBtn.vue';

export default Vue.extend({
  name: 'Main',
  data() {
    return {
      menuText: 'Menu 1',
      message: 'Main Page',
      page: '메인',
    };
  },
  components: {
    RoundBtn,
  },
  methods: {
    updateMenu () {
      this.page = this.menuText;
    },
    updateMsg () {
      this.page = '메인';
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
  margin: 0px;
  padding: 0px;

  .sidebar {
    position: fixed;
    width: 200px;
    height: 100%;
    background-color: #333;
    left: -190px;
    transition: all 500ms linear;

    .toggle-btn {
      position: absolute;
      left: 230px;
      top: 7px;

      span {
        display: block;
        width: 30px;
        height: 5px;
        background-color: #999;
        margin: 5px -20px;
        border-radius: 5px;
      }
    }

    ul li {
      color: white;
      list-style: none;
      margin: 0px;
      padding: 15px 10px;
      border-bottom: 1px solid #111;
      top: 100px;
    }
    :visited {
      color: bisque;
    }

    .btn_logout {
      height: 40px;
      margin-bottom: 100px;
    }
  }
  .sidebar:active {
    left: 0px;
  }

  .content {
    h1 {
      font-weight: bold;
      color: white;
      width: 100%;
      height: 50px;
      background: #333;
      line-height: 50px;
      margin: 0px;
    }
  }
}
</style>
