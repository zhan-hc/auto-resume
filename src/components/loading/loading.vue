<template>
  <div class="loading-wrap">
    <div class="loading-content">
      <i class="iconfont icon-loading"></i>
      <span>加载中</span>
    </div>
  </div>
</template>

<script lang='ts' setup>
</script>

<style scoped lang='scss'>
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
  .loading-wrap {
    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0,0,0,.2);
    color: #fff;
    .loading-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      .icon-loading {
        animation: rotate 2s linear infinite;
        font-size: 48px;
        color: $primary-color;
      }
    }
  }
</style>