<template>
  <div class="top">
    <div class="page">
      <div class="title">Kyohei Ota</div>
      <p>Thanks for coming.</p>
      <p>Welcome to my site.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Top'
}
</script>

<style>
/* welcome's css */
main {
  position: relative;
  height: 90vh;
  width: 100%;
}

.top {
  width: 100%;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  /* -webkit- transform: translateY(-50%) translateX(-50%); */
}

.top .title {
  font-size: 84px;
  margin-bottom: 30px;
}

.top p {
  font-size: 20px;
}
/* end welcome's css */

/* responsive */
@media screen and (max-width: 499px) { 
  /*　画面サイズ 499pxまで適用　*/
  .top .title {
    font-size: 50px;
    margin-bottom: 20px;
  }

  .top p {
    font-size: 16px;
  }
}
/* responsive */
</style>
