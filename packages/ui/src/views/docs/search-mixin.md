
## 介绍

我们在业务场景中，经常有列表页的开发，选择特定的筛选项，然后请求接口，得到相应的结果。`search-mixin` 就是在 VUE 开发中，对这类业务场景的一种抽象封装。

我们将业务场景分为3个模块

- 导航地址：当前页面的URL地址
- 筛选区域：（下拉、搜索、多选、单选）得到筛选参数
- 列表区域： 可以是表格或其他列表呈现

将筛选参数和URL的query关联起来，起到记录搜索参数的目的，这样在进行导航的`前进` `后退`时也可以保持对应的搜索结果。


### 使用方法

将 `search-mixin` 以 VUE组件的 mixins 方式引入。

```html
<script>
  import SearchMixin from '../../mixins/search.js';
  export default {
    mixins: [SearchMixin],
    data() {
      return {
        list: [],
        pagination: null;
        searchImmediately: false, // 初始查询参数是异步获取的
        searchService: {
          searchQueryDefault: {
              order: 'published_at'
          },
          searchQuery: {
              scenario: '',
              order: '',
          }
        }
      };
    },
    methods: {
      async searchFetch(q) {
        const { data, pagination } = await api.queryTaskCenter(q);
        this.list = data;
        this.pagination = pagination;
      },
      tagChange(v) {
        this.$searchFilter({ scenario: v });
      },
      pageChange(v) {
        this.$searchFilter({ page_num: v });
      }
    }
  };
</script>
```

在使用到 `search-mixin` 服务的页面组件里有以下的规定配置：

|   选项      |    说明              |  类型      | 可选值                           | 默认值  |
|------------|--------------------- |---------- |--------------------------------  |-------- |
|searchImmediately | `data`字段，表示是否立即搜索。有时候默认的搜索参数是通过异步获取的，需要等获取完筛选参数再进行搜索 | boolean | true、fasle  | true |
|searchService | `data`字段，里面包含两个字段：`searchQueryDefault` 默认的请求参数，`searchQuery`请求参数，它的字段将和筛选区域的各个筛选组件的`value`一一对应。 | object | -  | - |
|searchFetch | `methods`字段，发起api请求的函数 | function | -  | - |


:::tip
`this.$searchFilter()` 是 `search-mixin` 内部提供的方法，在页面上进行筛选项变更的时候，需要通过此方法去修改 `url` 上的 `query`，且`search-mixin`内部在 watch 到变化时，会主动执行 页面的`searchFetch`，以完成列表数据的更新。
:::