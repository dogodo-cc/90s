<template>
  <div>
    <header class="alan-header">
      <div v-if="isPhone" class="wap-header">
        <icon color="#333"
              name="icon-menu"
              @click.native="showNav = !showNav" />
        <router-link
          class="logo-box"
          to="/">
          <img
            src="~@/assets/logo.png"
            alt="logo">
        </router-link>
      </div> 
  
      <template v-else>
        <router-link
          class="logo-box"
          to="/">
          <img
            src="~@/assets/logo.png"
            alt="logo">
        </router-link>
        <div class="quick-link">
          <!-- <a
            target="_blank"
            :href="blogLink"
          >笔记1</a> -->
          <a target="_blank" :href="uiLink">组件库</a>
        </div>
      </template>
    </header>
    <div class="alan-body">
      <nav
        class="alan-nav"
        :class="{'show-nav':showNav}">
        <ul>
          <li
            v-for="nav in navs"
            :key="nav.path">
            <dl>
              <dt>
                <router-link :to="nav.path">
                  {{ nav.meta.title }}
                </router-link>
              </dt>
              <dd
                v-for="o in nav.children"
                :key="o.path">
                <router-link :to="o.path">
                  {{ o.meta.title }}
                </router-link>
              </dd>
            </dl>
          </li>
        </ul>
      </nav>
      <div class="alan-contain">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import {isPhone} from '@90s/tools';
export default {
  name: 'Layout',
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
      isPhone,
      showNav: false,
      blogLink: `${window.location.origin}/blog`,
      uiLink: `${window.location.origin}/ui`
    }
  }
}
</script>

