/**
 * 商城Vuex-mutations
 */
export default {
    //state:状态
    saveUserName(state, username) {
        state.username = username;
    },
    saveCartCount(state, count) {
        state.cartCount = count;
    }
}