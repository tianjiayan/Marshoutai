<template>
  <div id="app">
    

        <div
			      ref="customerService"
			      class="Customer"
			      @touchstart="touchstartHandle('customerService', $event)"
			      @touchmove="touchmoveHandle('customerService', $event)"
            @click="$router.push('/liuyan')"
			    >
          <van-icon name="envelop-o" />
			    </div>


    <router-view/>
  </div>
</template>
<script>
  export default {
			  name: "",
			  components: {},
			  props: [],
			  data() {
			    return {
			      touch: {
			        initialPosition: {},
			        movePostion: {},
			      },
			      element: {
			        initialPosition: {},
			        movePostion: {},
			      },
			    };
			  },
			  computed: {},
			  watch: {},
			  created() {},
			  mounted() {},
			  methods: {
			    touchstartHandle(refName, e) {
			      // console.log(e)
			      // 触摸开始
			      let touchTarget = e.targetTouches[0];
			      // 记录触摸点的坐标（初始位置）
			      this.touch.initialPosition = {
			        x: touchTarget.clientX,
			        y: touchTarget.clientY,
			      };
			      // 记录需要移动的元素坐标（初始位置）
			      this.element.initialPosition = {
			        x: this.$refs[refName].offsetLeft,
			        y: this.$refs[refName].offsetTop,
			      };
			    },
			    touchmoveHandle(refName, e) {
			      e.preventDefault();
			      let touchTarget = e.targetTouches[0];
			      // 根据初始touch位置计算移动距离:元素移动位置=元素初始位置+(光标移动后的位置-光标点击时的初始位置)
			      let X =
			        this.element.initialPosition.x +
			        (touchTarget.clientX - this.touch.initialPosition.x);
			      let Y =
			        this.element.initialPosition.y +
			        (touchTarget.clientY - this.touch.initialPosition.y);
			      // 限制可移动距离，不超出可视区域
			      let maxWidth = innerWidth - this.$refs[refName].offsetWidth;
			      let maxHeight = innerHeight - this.$refs[refName].offsetHeight;
			      X = X <= 0 ? 0 : X >= maxWidth ? maxWidth : X;
			      Y = Y <= 0 ? 0 : Y >= maxHeight ? maxHeight : Y;
			      // console.log(X,Y)
			
			      // 移动元素
			      this.$refs[refName].style.left = X + "px";
			      this.$refs[refName].style.top = Y + "px";
			    },
			  },
			};
</script>

<style lang="scss">

.Customer {
    background: #007aff;
    border-radius: 100%;
    text-align: center;
    line-height: 1.6rem;
    color: #fff;
    position: fixed;
    bottom: 2.133rem;
    right: 0.267rem;
    width: 1.6rem;
    height: 1.6rem;
    z-index: 99999999;
    font-size: 0.7rem
}
#app{
  background-color: #f2f3f5;
  height: 100vh;
  // margin-bottom: 2rem;
}
</style>
