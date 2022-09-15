<template>
  <div class="userInfo">
    <van-nav-bar title="个人信息" left-arrow @click-left="onClickLeft" />

    <div data-v-a4ec82cc="">
      <div class="info_content">
        <ul>
          <li @click="showDailog = true">
            <span>头像</span
            ><span
              ><img alt="" :src="userInfo.avatar" />
              <i class="iconfont icon-danse_gengduojiantou"></i
            ></span>
            <van-popup
              v-model="showDailog"
              position="bottom"
              :style="{ height: '30%' }"
            >
              <p>拍照</p>
              <p>从手机相册选择</p>
              <p>取消</p>
            </van-popup>
          </li>
          <li @click="to(userInfo.nickname)">
            <span>昵称</span
            ><span>
              {{ userInfo.nickname
              }}<i class="iconfont icon-danse_gengduojiantou"></i
            ></span>
          </li>
          <li class="mobile">
            <span>手机号</span><span>{{ userInfo.mobile }}</span>
          </li>
          <li @click="toSex(userInfo.sex)">
            <span>性别</span
            ><span>保密<i class="iconfont icon-danse_gengduojiantou"></i></span>
          </li>
          <li @click="show = true">
            <span>出生日期</span
            ><span
              >{{ userInfo.birthday | times
              }}<i class="iconfont icon-danse_gengduojiantou"></i
            ></span>
          </li>
          <li @click="shows = true">
            <span>所在城市</span
            ><span
              >{{ userInfo.province_name }},{{ userInfo.city_name }},{{
                userInfo.district_name
              }}
              <i class="iconfont icon-danse_gengduojiantou"></i
            ></span>
          </li>
          <li>
            <span>学科</span
            ><span> <i class="iconfont icon-danse_gengduojiantou"></i></span>
          </li>
        </ul>
        <!---->
      </div>
    </div>

    <!-- 时间 动作面板 -->
    <van-action-sheet v-model="show" title="标题">
      <div class="content">
        <van-datetime-picker
          v-model="currentDate"
          type="date"
          title="选择年月日"
          :min-date="minDate"
          :max-date="maxDate"
          @confirm="time"
          @cancel="no"
        />
      </div>
    </van-action-sheet>
    <!-- 地址  动作面板 -->
    <van-action-sheet v-model="shows" title="标题">
      <div class="content">
        <van-area title="标题" :area-list="areaList" @confirm="save" />
      </div>
    </van-action-sheet>
  </div>
</template>

<script>
import { NavBar, ActionSheet, Uploader, DatetimePicker, Area } from 'vant'
import { areaList } from '@vant/area-data'
import { xgUser, userInfo } from '@/request/http'
import { Popup } from 'vant'
export default {
  components: {
    [NavBar.name]: NavBar,
    [ActionSheet.name]: ActionSheet,
    [Uploader.name]: Uploader,
    [DatetimePicker.name]: DatetimePicker,
    [Area.name]: Area,
    [Popup.name]: Popup
  },
  data() {
    return {
      showDailog: false,
      userInfo: {},
      show: false, // 时间弹出框控制
      minDate: new Date(1990, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(),
      shows: false, // 地址弹出框控制
      areaList
    }
  },
  methods: {
    onClickLeft() {
      this.$router.back()
    },
    // 跳转到修改用户名页面
    to(name) {
      this.$router.push({ path: '/xgUser', query: { nickname: name } })
    },
    // 跳转到修改性别页面
    toSex(sex) {
      this.$router.push('/sex')
    },
    time(val) {
      // birthday
      xgUser({ birthday: this.currentDate }).then((res) => {
        console.log(res)
      })
      userInfo().then((res) => {
        console.log(res)
        this.userInfo = res
      })
      this.show = false
      // this.showDailog = false
    },
    no() {
      this.show = false
      // this.showDailog = false
    },
    save(val) {
      // console.log(this.province_list.id);
      console.log(val)
      xgUser({
        province_id: val[0].code,
        city_id: val[1].code,
        district_id: val[2].code
      }).then((res) => {
        console.log(res)
        this.show = false
        this.showDailog = false
        userInfo().then((res) => {
          console.log(res)
          this.userInfo = res
        })
      })

      this.shows = false
      // this.showDailog = false
    }
  },
  filters: {
    times(val) {
      // 根据给定的字符串，得到特定的日期
      var date = new Date(val)
      var year = date.getFullYear()
      var month = date.getMonth() + 1
      var day = date.getDate()
      return year + '-' + month + '-' + day
    }
  },
  created() {
    userInfo().then((res) => {
      console.log(res)
      this.userInfo = res
    })
  }
}
</script>

<style lang="scss" scoped>
.van-popup {
  text-align: center;
  padding: 0;
  margin: 0;
  p {
    margin: 0;
    padding: 0;
    font-size: 25px;
  }
}
.userInfo {
  height: 100vh;
  background-color: #fff;
}

img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}

.info_content {
  margin-top: 0.4rem;
}

.info_content ul {
  background: #fff;
  margin: 0.533rem 0;
  padding: 0 0.8rem;
}

.info_content ul li {
  height: 1.333rem;
  line-height: 1.333rem;
  display: flex;
  justify-content: space-between;
  position: relative;
  border-bottom: 1px solid #eee;
}

.info_content ul li[data-v-a4ec82cc]:before {
  content: '';
  display: block;
  position: absolute;
  right: 0;
  top: 50%;
  -webkit-transform: translateY(-50%) rotate(45deg);
  transform: translateY(-50%) rotate(45deg);
  width: 0.267rem;
  height: 0.267rem;
  border-top: 1px solid #b7b7b7;
  border-right: 1px solid #b7b7b7;
}

.info_content ul li span:first-child {
  font-size: 0.4rem;
  color: #595959;
}

.info_content ul li span:nth-child(2) {
  font-size: 0.4rem;
  color: #8c8c8c;
  margin-right: 0.533rem;
}

.content {
  padding: 40px 16px 160px;

  ul {
    font-size: 30px;

    li {
      text-align: center;
      height: 80px;
      line-height: 80px;
      border-bottom: 1px solid #ccc;
      margin-top: 20px;
    }
  }
}
</style>
