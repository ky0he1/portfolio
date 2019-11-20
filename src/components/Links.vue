<template>
  <div class="links">
    <div class="page">
      <div class="page-title">Links</div>
      <div class="links-text">私に興味がありましたら下の画像をクリックしてください。（控えめ）</div>
      <div class="links-box">
        <div class="links-img">
          <div class="link-name">GitHub</div>
          <a href="https://github.com/ky0he1" target="_blank">
            <img src="./assets/github.png">
          </a>
        </div>
        <div class="links-img">
          <div class="link-name">Qiita</div>
          <a href="https://qiita.com/ky0he11218" target="_blank">
            <img src="./assets/qiita.png">
          </a>
        </div>
        <div class="links-img">
          <div class="link-name">Twitter</div>
          <a href="https://twitter.com/ky0he11218" target="_blank">
            <img src="./assets/twitter.png">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Links'
}
</script>

<style>
/* links' css */
.links-text {
  padding-top: 40px;
  text-align: center;
}

.links-box {
  display: flex;
  justify-content: center;
  align-items: center;
}

div.link-name {
  padding-top: 40px;
  text-align: center;
}

.links-img img {
  width: 80px;
  height: 80px;
  transition-duration: 0.3s;
  margin: 20px 80px 0;
  border-radius: 5px;
}

.links-img img:hover{
  transform: scale(1.1);
  transition-duration: 0.3s;
}
/* end links' css */

/* responsive */
@media screen and (max-width: 499px) { 
  /*　画面サイズ 499pxまで適用　*/
  .links-img img {
    width: 60px;
    height: 60px;
    margin: 20px 20px 0;
  }
}

@media screen and (min-width: 500px) and (max-width: 604px) {
  /*　画面サイズ 500pxから604pxまで適用　*/
  .links-img img {
    margin: 20px 40px 0;
  }
}
/* end responsive */
</style>
