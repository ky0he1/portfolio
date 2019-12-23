<template>
  <div class="about">
    <div class="page">
      <div class="page-title">About</div>

      <!-- profile -->
      <div class="profile-box">
        <div class="about-title">Profile</div>
        <div class="about-text">
          <p><span class="sub-title">名前</span><span>太田 恭平</span></p>
          <p><span class="sub-title">学校</span><span>情報科学専門学校 情報セキュリティ学科 3年</span></p>
          <p><span class="sub-title">年齢</span><span>22歳</span></p>
          <p><span class="sub-title">趣味</span><span>ドライブ</span></p>
          <p><span class="sub-title">特技</span><span>日本の長い川ベスト10が言える、ガスボンベを転がせる</span></p>
        </div>
      </div>

      <!-- activity -->
      <div class="activity-box">
        <div class="about-title">Activity</div>
        <div class="about-text">
          <p>
            情報科学専門学校で「<a href="https://www.facebook.com/EXP.isGreat/" target="_blank">EXP.</a>」というサークルに所属しています。
            具体的な活動は小学生にロボット教材を通してプログラミングを教え、ITの楽しさを伝える活動です。
            企業の方、先生、小学生、サークルの友達、色々な人たちとコミュニケーションを 取ることのできる貴重なサークルです。
            小学生に対して難しい言葉や専門的な言葉を使わずに教えるのが大変ですが、 理解してもらえると嬉しいです。
          </p>
        </div>
      </div>

      <!-- history -->
      <div class="history-box">
        <div class="about-title">History</div>
        <div class="about-text">
          <p><span class="sub-title">1997/12</span><span>千葉県にて誕生</span></p>
          <p><span class="sub-title">2016/03</span><span>館山総合高校 卒業</span></p>
          <p><span class="sub-title">2016/04</span><span>丸高石油株式会社 入社</span></p>
          <p><span class="sub-title">2017/03</span><span>丸高石油株式会社 退社</span></p>
          <p><span class="sub-title">2017/04</span><span>横浜市で1人暮らし開始</span></p>
          <p><span class="sub-title">2017/04</span><span>情報科学専門学校 入学</span></p>
        </div>
      </div>

      <!-- qualification -->
      <div class="qualification-box">
        <div class="about-title">Qualification</div>
        <div class="about-text">
          <p><span class="sub-title">2016/03</span><span>普通自動車第一種免許</span></p>
          <p><span class="sub-title">2017/07</span><span>情報検定 情報活用試験 3級</span></p>
          <p><span class="sub-title">2018/05</span><span>基本情報技術者試験</span></p>
          <p><span class="sub-title">2019/09</span><span>ITパスポート試験</span></p>
          <p><span class="sub-title">2019/10</span><span>情報セキュリティマネジメント試験</span></p>
          <p><span class="sub-title">2019/12</span><span>情報検定 情報活用試験 2級</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style>
/* about's css */
div.about-title {
  padding-top: 40px;
  font-size: 44px;
  text-align: left;
}

div.about-text p {
  margin-left: 30px;
}

div.about-text p .sub-title {
  margin-right: 40px;
}

div.about-text p a {
  color: blue;
  font-weight: 600;
}

div.qualification-box {
  padding-bottom: 40px;
}
/* end about's css */

/* responsive */
@media screen and (max-width: 499px) { 
  /*　画面サイズ 499pxまで適用　*/
  div.about-title {
    font-size: 30px;
    padding-top: 15px;
  }

  div.about-text p {
    margin-left: 10px;
  }

  div.about-text p .sub-title {
    margin-right: 10px;
  }
  div.qualification-box {
    padding-bottom: 15px;
  }
}
/* end responsive */
</style>
