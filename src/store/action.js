/**
 * 商城Vuex-actions
 */
export default {
    saveUserName(context, username) {// 保存用户信息
        context.commit('saveUserName', username);
    },
    saveCartCount(context, count) {
        context.commit('saveCartCount', count)
    }
}