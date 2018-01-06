<template>
  <div class="wrapper" v-bind:style="wrapperStyle">
    <div class="sidenav" v-bind:class="classDrawer">
      <img
        @click="openDrawer(false)"
        class="icClose"
        width='18px'
        height='18px'
        alt='Null'
        border='0'
        src='../../assets/icons/closeW.png'
        srcset='../../assets/icons/closeW@2x.png 2x, ../../assets/icons/closeW@3x.png 3x'
      />
      <ul>
        <li><a href="">Menu 1</a></li>
        <li><a href="">Menu 2</a></li>
        <li><a href="">Menu 3</a></li>
      </ul>
    </div>
    <div class="main" v-bind:style="mainStyle">
      <div class="title">
        <img
          @click="openDrawer(true)"
          width='24px'
          height='24px'
          alt='Null'
          border='0'
          src='../../assets/icons/hamburger.png'
          srcset='../../assets/icons/hamburger@2x.png 2x, ../../assets/icons/hamburger@3x.png 3x'
        />
        <h1>{{ msg }}</h1>
      </div>
      <div class="content">
        <hr/>
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  name: 'Main',
  data() {
    return {
      msg: 'dooboolab',
      isOpen: false,
      windowWidth: 0,
      windowHeight: 0,
    };
  },
  mounted() {
    this.windowWidth = this.$el.clientWidth;
    this.windowHeight = this.$el.clientHeight;
    this.$nextTick(function() {
      window.addEventListener('resize', this.getWindowWidth);
      window.addEventListener('resize', this.getWindowHeight);
    });
  },
  methods: {
    getWindowWidth(event: any) {
      const newWidth = document.documentElement.clientWidth;
      // console.log(`windowWidth: ${this.windowWidth}`)
      if (newWidth <= 768 && this.windowWidth > 768 && this.isOpen) {
        this.isOpen = false;
      } else if (newWidth > 768 && this.windowWidth <= 768 && !this.isOpen) {
        this.isOpen = true;
      }
      this.windowWidth = newWidth;
    },
    getWindowHeight(event: any) {
      this.windowHeight = document.documentElement.clientHeight;
    },
    openDrawer: function (open: boolean): void {
      console.log(`openDrawer: ${open}`);
      this.isOpen = !this.isOpen;
    },
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.getWindowWidth);
    window.removeEventListener('resize', this.getWindowHeight);
  },
  computed: {
    classDrawer: function (): object {
      return {
        visible: this.isOpen,
        invisible: !this.isOpen,
      }
    },
    wrapperStyle: function (): object {
      return {
        'grid-template-columns': this.windowWidth > 768 && this.isOpen
          ? '256px 1fr' : '1fr',
      }
    },
    mainStyle: function (): object {
      return {
        'grid-column-start': this.windowWidth > 768 && this.isOpen
          ? 2 : 1,
      }
    },
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="postcss" scoped>
:root {
  --fontSize: 1em;
  --titleHeight: 60px;
  --drawerSize: 256px;
}

@custom-media --desktop (width > 768px);
.wrapper {
  display: grid;
  grid-template-columns: 1fr;

  .sidenav {
    display: grid;
    background-color: #333;
    height: 100vh;
    position: absolute;

    grid-template-columns: 1fr;
    align-items: start;
    justify-items: start;

    -webkit-transition: width 0.5s; /* For Safari 3.1 to 6.0 */
    transition: width 0.5s;

    &.invisible {
      opacity: 0;
      visibility: hidden;
      width: 0;
    }

    &.visible {
      width: var(--drawerSize);
      opacity: 1;
      visibility: visible;
    }

    ul {
      display: grid;
      grid-template-columns: 1fr;
      list-style-type: none;
      padding: 0;

      li {
        font-size: var(--fontSize);
        display: inline-block;
        margin: 5px 20px;
        a {
          cursor: pointer;
          color: #d3d3d3;
        }
        a:hover {
          color: white;
        }
      }
    }

    .icClose {
      position: absolute;
      right: 20px;
      top: 20px;
      cursor: pointer;

      @media (--desktop) {
        visibility: hidden;
      }
    }
  }
  .main {
    -webkit-transition: 0.5s; /* For Safari 3.1 to 6.0 */
    transition: 0.5s;
    height: 100vh;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 60px 1fr;
    justify-items: start;

    @media (--desktop) {
      justify-items: center;
    }
    .title {
      width: 100%;
      height: 100%;
      margin: 0;

      display: grid;
      grid-template-columns: 15% 1fr 15%;
      align-items: center;
      justify-items: center;
      h1 {
        justify-self: center;
        @media (--desktop) {
          justify-self: start;
        }
      }
    }
    .content {
      height: 100%;
      width: 100%;
    }
  }
}
h1, h2 {
  font-weight: normal;
  margin: 0;
  font-size: 1.8em;
}
img {
  cursor: pointer;
}
hr {
  margin: 0;
}

</style>
