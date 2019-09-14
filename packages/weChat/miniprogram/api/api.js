import {http} from './index';


// 模板列表
const getTemplates = function() {
  return http.get('/api/templets')
}

// 单个模板信息
const getTemplateInfo = function(id) {
  return http.get(`/api/templets/${id}`)
}

// 登录
const login = function(data) {
  return http.post('/api/login',data)
}

module.exports =  {
  getTemplates,
  getTemplateInfo,
  login
}