<template>
    <v-ons-page>
        <div v-for="(post,key) in posts.data" :key="key">
            <v-ons-list-item  modifier="chevron" tappable @click="toDetail(post)">{{post.title}}</v-ons-list-item>
            <br/>
        </div>


    </v-ons-page>
</template>

<script>
    import store from '../store'
    export default {
        name: "Post",
        data(){
            return {

            }
        },
        computed:{
            posts: () => store.state.post.list
        },
        methods:{
            toDetail(post){
                this.$router.push({name:'post-show',params:{id:post.id}})
            }
        },
        async mounted(){
            await store.dispatch('postFetch')
        }
    }
</script>

<style scoped>

</style>