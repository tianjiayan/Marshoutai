<template>
  <div>
    <van-nav-bar @click-left="fanhui" title="学习日历" left-text="" left-arrow>
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
    <van-calendar
      title="日历"
      :poppable="false"
      :show-confirm="false"
      :style="{ height: '500px' }"
      lazy-render
      :min-date="minDate"
      :max-date="maxDate"
      v-model="shows"
      color="#eb6100"
    />
  </div>
</template>

<script>
import { NavBar } from 'vant'
import { Calendar } from 'vant'
export default {
  components: {
    [NavBar.name]: NavBar,
    [Calendar.name]: Calendar
  },
  data() {
    return {
      shows: false,
      minDate: new Date(1950, 0, 1),
      maxDate: new Date(2030, 0, 31)
    }
  },
  methods: {
    fanhui() {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="scss">
.van-icon-search {
  color: black;
}
::v-deep() {
  .van-calendar__selected-day {
    width: 1rem;
    height: 1rem;
    color: #fff;
    border-radius: 50%;
  }
}
</style>
