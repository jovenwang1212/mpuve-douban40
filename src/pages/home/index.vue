<template>
  <div>
    <div class="header">
      <span>豆瓣</span>
      <icon type="search" size="14" color="#00b600"> </icon>
      <button>打开豆瓣App</button>
    </div>

    <!-- 影院热映 -->
    <div class="movie-item">
      <div class="title">
        <span>影院热映</span>
        <span class="more-link">更多</span>
      </div>
      <scroll-view class="scroll-view_H" scroll-x="true" style="width: 100%">
        <view class="scroll-view-item_H" v-for="item in theaterMovies" :key="item.id">
          <img
            :src="item.images.large"
            alt=""
          />
          <p>{{item.title}}</p>
          <div class="rating">
            <div class="stars" v-if="item.rating.average">
              <img
                v-for="(item2, index2) in 5"
                :key="index2"
                src="../../../static/images/star.svg"
                alt=""
              />
            </div>
            <span class="score">{{item.rating.average?item.rating.average:'暂无评论'}}</span>
          </div>
        </view>
      </scroll-view>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      theaterMovies: []
    }
  },
  created () {
    this.getTheaterMovies()
  },
  methods: {
    getTheaterMovies () {
      wx.request({
        url: 'https://api.douban.com/v2/movie/in_theaters',
        data: {
          apikey: '0df993c66c0c636e29ecbb5344252a4a'
        },
        // 看实际情况是否需要写content-type
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        success: res => {
          console.log(res)
          this.theaterMovies = res.data.subjects
        }
      })
    }
  }
}
</script>

<style lang="less">
.header {
  display: flex;
  height: 94rpx;
  border-bottom: 1rpx solid #eee;
  padding: 0 36rpx;
  align-items: center;
  span {
    color: #00b600;
    font-size: 40rpx;
  }
  icon {
    margin-left: 28rpx;
    flex: 1;
    margin-top: 8rpx;
  }
  button {
    width: 200rpx;
    height: 58rpx;
    line-height: 58rpx;
    border-radius: 8rpx;
    background-color: #42bd56;
    color: #fff;
    font-size: 22rpx;
  }
}

.movie-item {
  .title {
    height: 88rpx;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 36rpx;
    .more-link {
      color: #42bd56;
    }
  }
}

.scroll-view_H {
  white-space: nowrap;
  margin-top:12rpx;
}
.scroll-view-item_H {
  display: inline-block;
  width: 200rpx;
  margin-left:18rpx;
  > img {
    width: 200rpx;
    height: 286rpx;
  }
  > p {
    overflow: hidden;
    word-break: keep-all;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
  }
}
.rating {
  display: flex;
  justify-content: center;
  img {
    width: 20rpx;
    height: 20rpx;
  }
  .score{
    margin-left:8rpx;
    color:#aaa;
  }
}
</style>
