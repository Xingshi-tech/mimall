//用于封装storage
const STORAGE_KAY = 'mall';//存储的key为mall
export default {

    setItem(key, value, module_name) {//存储值（简单结构，复杂结构都行）
        if (module_name) {
            let val = this.getItem(module_name);
            val[key] = value;
            this.setItem(module_name, val);
        } else {
            let val = this.getStorage();
            val[key] = value;
            window.sessionStorage.setItem(STORAGE_KAY, JSON.stringify(val))
        }

    },
    //获取某一个模块下边的属性
    getItem(key, module_name) {//获取值
        if (module_name) {
            let val = this.getItem(module);
            if (val) return val[key];
        }
        return this.getStorage()[key];
    },
    getStorage() {//获取整体数据，获取浏览器环境信息
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KAY) || '{}');
    },
    clear(key, module_name) {//清除某一项值
        let val = this.getStorage();
        if (module_name) {
            if(!val[module_name])return;//如果内容不存在，直接返回
            delete val[module_name][key];
        } else {
            delete val[key];
        }
        window.sessionStorage.setItem(STORAGE_KAY, JSON.stringify(val))
    },
}