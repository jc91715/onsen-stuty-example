import post from '../../api/post'

export default {
    state: {
        item: {},
        list: []
    },
    actions: {
        async postFetch({ commit, state }) {
            // 对axios和api进行了简单的封装,使api请求更加语义化
            const { data } = await post.index()
            console.log(data)
            // action只能通过提交commit来修改state,具体原因请查看vuex文档 (其实我也忘了为啥 (╯﹏╰))
            commit('SET_LIST', data)
        },
        async postFetchShow({ commit, state },{id}) {
            // 对axios和api进行了简单的封装,使api请求更加语义化
            const { data } = await post.show({id})
            console.log(data)
            // action只能通过提交commit来修改state,具体原因请查看vuex文档 (其实我也忘了为啥 (╯﹏╰))
            commit('SET_ITEM', data)
        }
    },
    mutations: {
        SET_LIST: (state, item) => {
            state.list = item
        },
        SET_ITEM: (state, item) => {
            state.item = item
        },
    },
    getters: {
        getPostList: (state) => state.list
    }
}