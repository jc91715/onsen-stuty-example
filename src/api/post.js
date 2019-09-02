export default {
    index:({...params})=>{
        return axios.get('/api/v1/posts',{
            params:{
                ...params
            }
        })
    },
    show:({id})=>{
        return axios.get('/api/v1/posts/'+id)
    }
}