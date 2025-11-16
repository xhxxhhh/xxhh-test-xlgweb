<script setup lang="ts">
    import "@/assets/personinfo.css"
    import {ref} from 'vue'

    let portraitList = ref([
        {id:1,name:"塞巴斯蒂安",
        img_url:"/portrait_01.png",
        hover_img_url:"/portrait_01_1.png",
        des:"塞巴斯蒂安是一个叛逆的孤独者，住在他父母的地下室。\
        他和玛鲁是同母异父的兄妹，塞巴斯蒂安感觉妹妹得到了所有的关注和崇拜，\
        而他自己却在黑暗中被腐蚀。他常常沉迷于电脑游戏，漫画和科幻小说，\
        花费大量的时间在自己的房间里独自追寻这些爱好。他对他不认识的人可能有点不友好。\
        一个迷人的新农民可以培养他心中的荒地吗？谁知道呢？",
        likes:"泪晶、生鱼片"},

        {id:2,name:"亚历克斯",
        img_url:"/portrait_02.png",
        hover_img_url:"/portrait_02_1.png",
        des:"亚历克斯喜欢运动，和在海滩溜达。他相当傲慢，\
        对每个人吹嘘他要成为一个专业运动员。他的骄傲自大只是为了掩饰他的自我怀疑吗？\
        或是用他的运动梦想填补他父母的空缺吗？\
        还是他仅仅只是一个喜欢耍酷叛逆的青年？",
        likes:"完美早餐、鲑鱼晚餐"},

        {id:3,name:"山姆",
        img_url:"/portrait_03.png",
        hover_img_url:"/portrait_03_1.png",
        des:"山姆是一个外向、友好、充满青春活力的人。他会弹吉它，还会敲鼓，\
        他想要在写完足够多的歌后就和塞巴斯蒂安一起组建一个乐队。但是，\
        他总是抱有雄心壮志，却不去付诸实践。\
        山姆的父亲由于工作原因在外奔波多年，父亲的即将回归让山姆感到有些压力。",
        likes:"仙人掌果、披萨"},

        {id:4,name:"肯特",
        img_url:"/portrait_04_1.png",
        hover_img_url:"/portrait_04.png",
        des:"肯特是一位住在鹈鹕镇的居民。第一年他在军队服役，第二年春天才会回到鹈鹕镇柳巷1号居住。\
        在第一年检查乔迪的床头柜和文森特、山姆的对话会提示肯特的出现。",
        likes:"烤榛子、黄水仙"},

        {id:5,name:"玛妮",
        img_url:"/portrait_05_1.png",
        hover_img_url:"/portrait_05.png",
        des:"玛妮是星露谷的居民。她居住在玛妮的牧场。玛妮的牧场位于煤矿森林东北处，靠近鹈鹕镇的西南入口。\
        玛妮在玛妮的牧场经营她自己的商店。玛妮的开店时间是每天上午9:00至下午4:00（周一周二除外，\
        不过这时尽管建筑仍可进入）。她出售动物和动物用品。",
        likes:"钻石、粉红蛋糕"},

        {id:6,name:"艾米丽",
        img_url:"/portrait_06.png",
        hover_img_url:"/portrait_06.png",
        des:"艾米丽是居住在鹈鹕镇的居民之一。她的家在鹈鹕镇的西南角，\
        位于乔迪家的右方，地址是柳巷2号。大部分时间，\
        她从下午4点开始都在星之果实餐吧工作。艾米丽非常喜爱自己做衣服，\
        但是在小镇上很难获得服装面料。因此，布料与动物毛是她最喜欢的礼物之一。",
        likes:"蓝宝石、蓝宝石"}
    ])

    const hoverIndex = ref(-1)

    // 计算当前显示的图片
    const getImageUrl = (item: any, index: number) => {
        return hoverIndex.value === index ? item.hover_img_url : item.img_url
    }
</script>

<template>
  <div>
    <div class="second-personinfo">
        <div class="block">
            <div class="title color-change">
                <p >人物介绍</p>
            </div>
            <div class="en-title color-change">
                <p >Characcter Introduction</p>
            </div>
            <div class="list">
                <ul>
                    <li class="items" v-for="(v,i) in portraitList" :key="v.id">
                        <div class="image" @mouseenter="hoverIndex = i" @mouseleave="hoverIndex = -1">
                            <img class="item" :src="`/src/assets/images/${getImageUrl(v, i)}`" :alt="v.name"></img>
                        </div>                                   
                        <p class="item des">{{ v.des }}</p>
                        <p class="item name">{{v.name}}</p>
                        <p class="item likes">喜欢的物品：{{ v.likes }}</p>
                    </li>
                </ul>
            </div>
        </div>      
    </div>
  </div>
  
</template>

<style scoped>


</style>
