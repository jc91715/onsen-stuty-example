<template>
    <v-ons-page id="post-show">

        <div class="center" v-html="post.content_html">

        </div>

    </v-ons-page>
</template>

<script>

    import store from '../store'
    export default {
        name: "Detail",
        props:['id'],
        created(){
            console.log(this.id)
        },
        components:{

        },
        computed:{
            post: () => store.state.post.item
        },
        methods:{

        },
        async mounted(){
            await store.dispatch('postFetchShow',{id:this.id})
        }
    }
</script>

<style lang="scss">
    #post-show{
        width: 90%;
        margin: auto;
    }
    #post-show img{
        max-width: 100%!important;
    }
</style>