<template>
  <div class="page page-css-index">
    <!-- <img src="./assets/css.jpg" alt=""> -->
    <Tabs v-model="tabActive" position="top">
      <TabPanel name="first" label="选项一">
        1234
      </TabPanel>
      <TabPanel name="second" label="选项二">
        5678
      </TabPanel>
      <TabPanel name="third" label="选项shdfadf">
        99fs9dfasfsf
      </TabPanel>
    </Tabs>
    <div style="height: 100px;" />
    <Tabs v-model="tabActive2" position="left">
      <TabPanel name="first" label="选项一">
        1234
      </TabPanel>
      <TabPanel name="second" label="选项二">
        5678
      </TabPanel>
      <TabPanel name="third" label="选项shdfadf">
        99fs9dfasfsf
      </TabPanel>
    </Tabs>
  </div>
</template>

<script>
import Tabs from './tabs/index.vue';
import TabPanel from './tabs/tab-panel.vue';
export default {
  name: 'CssNote',
  components: {
    Tabs,
    TabPanel
  },
  data() {
    return {
      tabActive: 'first',
      tabActive2: 'second'
    }
  }
}
</script>

<style lang="scss">
.page-css-index {
  padding: 100px;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  height: 100%;
  img {
    max-width: 100%;
    width: 500px;
  }
}
</style>
