<template>
    <div class="Home">
       <div class="ViewList">
            <div class="ViewList-Item" @click="goPage(item)" v-for="(item,index) in ViewList">
            {{item.name}}
            </div>
       </div>
    </div>
</template>

<script lang="ts" setup>
import {ref,reactive} from 'vue'
import {useRoute,useRouter} from 'vue-router'
const router = useRouter()
const route = useRoute()

type ViewListItemType = {
    name:String
    path:String
    pathName:String
}
const ViewList:Array<ViewListItemType> = [
    {
        name:'Canvas',
        path: '/canvas',
        pathName: 'Canvas',
    }
]

const goPage = (item:ViewListItemType) => {
    router.push(item.name)
}
</script>

<style lang="less">
    .Home {
        width: 100%;

        .ViewList {
            width: 100%;
            display: flex;
            align-items: center;

            .ViewList-Item {
                width: 150px;
                height: 150px;
                background-color: #e9e9e9;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, .3);
                &:hover {
                    opacity: .7;
                }
            }
        }
    }
</style>