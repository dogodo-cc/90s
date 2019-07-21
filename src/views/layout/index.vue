<template>
  <div>
    <header class="alan-header"><a href="/"><img src="~@/assets/logo.png" alt=""></a></header>
    <div class="alan-body">
      <nav class="alan-nav">
        <ul>
          <li v-for="nav in navs" :key="nav.path">
            <dl>
              <dt><router-link :to="nav.path">{{nav.meta.title}}</router-link></dt>
              <dd v-for="o in nav.children" :key="o.path">
                <router-link :to="o.path">{{o.meta.title}}</router-link>
              </dd>
            </dl>
          </li>
        </ul>
      </nav>
      <div class="alan-contain">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'layout',
  computed: {
    navs() {
       return this.$router.options.routes.filter(item => {
         if(item.children) {
           item.children= item.children.filter(o => {
             return o.meta && o.meta.title;
           })
         } else {
           item.children = [];
         } 
         return item.meta && item.meta.title;
       });
       
    }
  }
}
</script>

