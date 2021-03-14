// 定义mock文件
import Mock from 'mockjs'
Mock.mock('/api/user/login', {//第一个参数指的是路径，第二个参数是返回值
    "status": 0,
    "data": {
        "id": 12,
        "username": "admin",
        "email": "admin@51purse.com",
        "phone": null,
        "role": 0,
        "createTime": 1479048325000,
        "updateTime": 1479048325000
    }
})