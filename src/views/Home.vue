<template>
    <v-ons-page>

        <v-ons-tabbar swipeable position="auto"
                      :tabs="tabs"
                      :visible="true"
                      :index.sync="activeIndex"
        >
        </v-ons-tabbar>
    </v-ons-page>
</template>

<script>

    import Post from './Post'
    import Script from './Script'

    export default {
        name: 'app',
        data() {
            return {
                activeIndex: 0,
                tabs: [
                    {
                        label: '文章',
                        page: Post,
                        key: "postPage"
                    },
                    // {
                    //     label: '代码片段',
                    //     page: Script,
                    //     key: "scriptPage"
                    // }
                ]
            };
        },
        methods: {
        },
        computed: {
            title() {
                return this.tabs[this.activeIndex].label;
            }
        }
    }
</script>
