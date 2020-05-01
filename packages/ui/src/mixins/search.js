/* eslint-disabed */
import { cloneDeep, isNaN, isEqual } from 'lodash';
const isEmptyObj = (obj) => Object.keys(obj).length === 0;
const isNumber = (v) => (v !== '' && !isNaN(+v));
const splitStr = ',';

// 分页查询参数
const pageQuery = {
  page_size: 20,
  page_num: 1,
};
function isSameQuery(o, n) {
  const oldVal = Object.assign({}, o);
  const newVal = Object.assign({}, n);
  return isEqual(oldVal, newVal);
}

export default {
  data() {
    return {
      __defaultSearched: false, // 是否已经进行过默认搜索
      searchImmediately: true, // 立即搜索 （有些场景需要异步获取默认查询参数 则为false）
      isArrayKeys: []
    };
  },
  watch: {
    $route: {
      handler: function(val) {
        const { query } = val;
        if (isEmptyObj(query)) {
          this.__searchDefault();
        } else {
          this.__search(query);
        }
      }
    }
  },
  methods: {
    __formatQuery(q) {
      let _q = cloneDeep(q);
      let o = {};
      Object.entries(_q).forEach(([key, val]) => {
        if (Array.isArray(val)) {
          o[key] = val.length ? val.join(splitStr) : '';
        } else if (typeof val === 'number') {
          o[key] = String(val);
        } else {
          o[key] = val;
        }
      });
      return o;
    },
    __formatQueryReverse(q) {
      let _q = cloneDeep(q);
      let o = {};
      Object.entries(_q).forEach(([key, val]) => {
        if (this.isArrayKeys.includes(key)) {
          o[key] = val ? val.split(splitStr).map(v => isNumber(v) ? +v : v) : [];
        } else {
          o[key] = isNumber(val) ? +val : val;
        }
      });
      return o;
    },
    __finallyQuery(q) {
      const { ignoreKes } = this.searchService;
      if (!ignoreKes) return q;
      ignoreKes.forEach(key => {
        q[key] && delete q[key];
      });
      return q;
    },
    __searchDefault() {
      const { searchService: { searchQueryDefault } } = this;
      let _query = Object.assign({}, pageQuery, searchQueryDefault);
      _query = this.__formatQuery(_query);
      this.__search(_query);
    },
    $searchFilter(q, replace = false) {
      const { __defaultSearched, searchService: { searchQueryDefault }, $route } = this;
      const { query } = $route;

      // 场景：当某个页面是异步获取默认查询参数，第一次进来路由上没有query参数，于是等待页面进行异步获取
      // 由页面触发第一次搜索之后，此时路由上已经有了query参数，此时再进行页面刷新操作，
      // 会直接通过路由的query进行请求，需要屏蔽掉页面的异步参数获取完成的触发请求
      if (replace && __defaultSearched) return;

      // 如果查询参数不是 page_num 则需要初始化一次page信息，故后面再加一个page，确保覆盖路由上的page信息
      const page = Object.keys(q).includes('page_num') ? {} : { page_num: 1 };

      let _query = Object.assign({}, pageQuery, searchQueryDefault, query, q, page);
      _query = this.__finallyQuery(_query); // 过滤掉不显示的
      _query = this.__formatQuery(_query);
      if (isSameQuery(query, _query)) return;

      const next = Object.assign({}, $route, { query: _query });
      this.$router[replace ? 'replace' : 'push'](next);
      // 由于是异步获取默认查询参数，进行了一次额外的路由跳转，使用replace来抵消这次额外的变化
    },
    __search(q) {
      // Q: 为什么要重新把 pageQuery、searchQueryDefault 合并进来，
      // A: 因为ignoreKes里如：page_num 会被过滤掉，需要重新合并过来，确保参数齐全
      const { searchService: { searchQueryDefault } } = this;
      let _query = Object.assign({}, pageQuery, searchQueryDefault, q);
      const _q = this.__formatQueryReverse(_query);
      this.searchService.searchQuery = _q;
      this.searchFetch(_query);
    }
  },
  created() {
    const { $route: { query }, searchService: { searchQuery } } = this;
    Object.entries(searchQuery).forEach(([key, val]) => {
      if (Array.isArray(val)) {
        this.isArrayKeys.push(key);
      }
    });

    // 第一次载入页面，如果不存在查询参数，则根据searchImmediately判断是否进行默认搜索
    if (isEmptyObj(query)) {
      if (this.searchImmediately) {
        this.__searchDefault();
      }
    } else {
      this.__defaultSearched = true;
      this.__search(query);
    }
  }
};
