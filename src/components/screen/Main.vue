<template>
  <div class="wrapper">
    <div class="sidenav" v-bind:class="classDrawer">
      <img
        @click="openDrawer(false)"
        class="close"
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
    <div class="main">
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
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  name: 'Main',
  data() {
    return {
      msg: 'dooboo',
      isOpen: false,
    };
  },
  methods: {
    openDrawer: function (open: boolean): void {
      console.log(`openDrawer: ${open}`);
      this.isOpen = !this.isOpen;
    },
  },
  computed: {
    classDrawer: function (): object {
      return {
        visible: this.isOpen,
        invisible: !this.isOpen,
      }
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
      width: 300px;
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

    .close {
      position: absolute;
      right: 20px;
      top: 20px;
      cursor: pointer;
    }
  }
  .main {
    display: grid;
    justify-items: start;
    padding: 0 1em;

    grid-column-start: 300px;
    @media (--desktop) {
      justify-items: center;
    }
    .title {
      width: 100%;

      display: grid;
      grid-template-columns: 15% 1fr 15%;
      align-items: center;
      justify-items: center;
      @media (--desktop) {
        height: 52px;
      }
      h1 {
        justify-self: center;
        @media (--desktop) {
          justify-self: start;
        }
      }
    }
  }
}
h1, h2 {
  font-weight: normal;
}
img {
  cursor: pointer;
}

</style>
