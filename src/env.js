let baseURL;
switch (process.env.NODE_ENV) {
    case 'dev'://开发环境
        baseURL = 'http://dev-mall-pre.springboot.cn/api';
        break;
    case 'test'://测试
        baseURL = 'http://test-mall-pre.springboot.cn/api';
        break;
    case 'prod'://线上
        baseURL = 'http://mall-pre.springboot.cn/api';
        break;
    default://默认走线上的
        baseURL = 'http://mall-pre.springboot.cn/api';
        break;
}
export default {
    baseURL
}