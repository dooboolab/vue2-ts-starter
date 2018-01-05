<template>
  <div class="container navbar" id="vueNavBar">
    <div class="row">
      <div class="column-sm-12">
        
        <div id="visible-bar"><!-- Always visible part -->
            <a onclick="toggle"><span class="glyphicon glyphicon-menu-hamburger" id="menu-toggle"></span></a><!-- Toggle button -->
            <h1 id="brand">Main Page</h1><!-- Site name -->
        </div>
          
        <ul id="menu-ul" class="animated slideInDown"  v-show="menuVisible"><!-- drop-down part -->
          <li class="menu-li"><a href="">HOME</a></li>
          <li class="menu-li"><a href="">GALLERY</a></li>
          <li class="menu-li"><a href="">CONTACT</a></li>
        </ul>    
    
      </div><!-- column -->
    </div><!-- row -->
  </div><!-- container -->
</template>


<script lang='ts'>
import 'bootstrap/dist/css/bootstrap.min.css';
import Vue from 'vue';

const vnb = new Vue({
  el: '#vueNavBar',
  data: {
    menuVisible:  false
  },
  methods: {
    toggle() { 
      if (vnb.menuVisible === false){
        vnb.menuVisible = true;
      } else {
        vnb.menuVisible = false;
      }
    }
  },
});//vue

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="postcss" scoped>
@custom-media --mobile (width <= 768px);

/* Site-wide CSS */
a, a:link, a:visited {color: white; text-decoration: none;}
a:hover {font-weight:bold; color: grey;}

/*
Note: Some extra CSS may be required on actual site for some behaviors.  
Eg. hover effects may not work with site-wide CSS.  Use ID selectors (#menu-toggle:hover) or CLASS TYPE selectors (.menu-li a:hover) instead of just type selectors (a:hover) for more specificity.
*/

.navbar {text-align: right}

#visible-bar {background-color: #333;}

#menu-toggle {font-size: 30px;  margin: 5px 800px 0px 0px; }

#brand {float: right; color: white; font-size: 24px;  margin: 5px 0px 0px 10px}

.menu-li {list-style-type:none; font-size: 18px;  margin: 20px 10px 20px 0px}

</style>
