<template>
  <div class="wrapper">
    <div class="sidebar" v-bind:style="sidebarClass">
      <div class="toggle-btn" @click="showSidebar">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul>
        <li @click="updateMenu">{{ menuText }}</li>
        <li>Menu 2</li>
        <li>Menu 3</li>
        <li>Menu 4</li>
        <router-link to="/login" replace><round-btn class="btn_logout" name='LOGOUT' /></router-link>
      </ul>
    </div>
    <div class="content">
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
      isOpen: false,
      menuText: 'Menu 1',
      message: 'Main Page',
      page: '메인',
    };
  },
  components: {
    RoundBtn,
  },
  computed: {
    sidebarClass(): object {
      return {
        left: !this.isOpen ? '-200px' : '0px',
      };
    },
  },
  methods: {
    updateMenu () {
      this.page = this.menuText;
    },
    updateMsg () {
      this.page = '메인';
    },
    showSidebar () {
      this.isOpen = !this.isOpen;
      //console.log(`showSidebar: ${this.isOpen}`);
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
  display: grid;
  grid-template-columns: 1fr;
  width: 100vw;
  height: 100vh;

  .sidebar {
    position: fixed;
    height: 100%;
    width: 200px;
    background-color: #333;
    transition: all 500ms linear;

    .toggle-btn {
      position: absolute;
      left: 237px;
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

    ul {
      margin-right: 30px;
    }
    li {
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
      margin-top: 55vh;
      background-color: white;
      color: #333;
    }
    .btn_logout:hover {
      background-color: #333;
      color: white;
      border: white solid;
    }
  }

  .content {
    h1 {
      font-weight: bold;
      color: white;
      width: 1fr;
      height: 53px;
      background-color: #3f3501;
      line-height: 52px;
      margin: 0px;
    }
  }
}
</style>
