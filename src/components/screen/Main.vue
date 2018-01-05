<template>
  <div class="wrapper">
    <div class="sidenav">
      <ul>
        <li>Menu 1</li>
        <li>Menu 2</li>
        <li>Menu 3</li>
      </ul>
    </div>
    <div class="content">
      <h1>{{ msg }}</h1>
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

@custom-media --mobile (width <= 768px);
.wrapper {
  display: grid;
  grid-template-columns: 1fr 3fr;
  @media (--mobile) {
    grid-template-columns: 1fr;
  }
  .sidenav {
    display: grid;
    grid-template-columns: 1fr;
    color: red;
    @media (--mobile) {
      display: none;
    }
  }
  .content {
    display: grid;
    justify-items: start;
    padding: 0 1em;
    @media (--mobile) {
      grid-gap: 0em;
      padding: 0;
      justify-items: center;
    }
  }
}
h1, h2 {
  font-weight: normal;
}
ul {
  display: grid;
  grid-template-columns: 1fr;
  list-style-type: none;
  padding: 0;
}
li {
  font-size: var(--fontSize);
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
