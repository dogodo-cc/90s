<template>
  <div class="page page-drag">
    <DragSortDemo />
    <DragSelectDemo />
  </div>
</template>
<script>
import DragSelectDemo from './components/drag-select-demo.vue'
import DragSortDemo from './components/drag-sort-demo.vue';

export default {
  name: 'Drap',
  components: {
    DragSelectDemo,
    DragSortDemo,
  },
  data() {
    return {
    }
  },
  methods: {}
}
</script>

<style lang="scss">
.page-drag {
  padding: 20px;
  font-size: 16px;
  color: $colorMain;
}
</style>
