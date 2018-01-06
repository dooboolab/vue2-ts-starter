<template>
  <div class="wrapper">
    <div class="sidenav">
      <img
        class="close"
        width='24px'
        height='24px'
        alt='Null'
        border='0'
        src='../../assets/hamburger.png'
        srcset='../../assets/hamburger@2x.png 2x, ../../assets/hamburger@3x.png 3x'
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
          width='24px'
          height='24px'
          alt='Null'
          border='0'
          src='../../assets/hamburger.png'
          srcset='../../assets/hamburger@2x.png 2x, ../../assets/hamburger@3x.png 3x'
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
    };
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
  display: grid;
  grid-template-columns: 1fr;
  .sidenav {
    display: none;
    background-color: #333;
    height: 100vh;
    width: 300px;
    position: absolute;

    grid-template-columns: 1fr;
    align-items: start;
    justify-items: start;

    @media (--desktop) {
      display: grid;
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
          color: #eee;
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

</style>
