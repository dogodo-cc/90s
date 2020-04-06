<template>
  <div>
    <header class="alan-header">
      <div class="wrap">
        <router-link class="logo-box" to="/"><img src="~@/assets/logo.png" alt="logo"></router-link>
      </div>
    </header>
    <div class="alan-body wrap">
      <nav class="alan-nav">
        <dl v-for="nav in navs" :key="nav.path">
          <dt><router-link :to="nav.path">{{nav.meta.title}}</router-link></dt>
          <dd v-for="o in nav.children" :key="o.path">
            <router-link :to="o.path">{{o.meta.title}}</router-link>
          </dd>
        </dl>
      </nav>
      <div class="alan-contain page-container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'layout',
  data(){
    return {
      navs: this.$router.options.routes.filter(item => {
         if(item.children) {
           item.children= item.children.filter(o => {
             return o.meta && o.meta.title && !o.meta.hidden;
           })
         } else {
           item.children = [];
         } 
         return item.meta && item.meta.title && !item.meta.hidden;
       }),
    }
  }
}
</script>

