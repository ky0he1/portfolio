<template>
  <div class="skills">
    <div class="page">
      <div class="page-title">Skills</div>

      <div class="skills-box">
        <div class="skill-title">HTML & CSS</div>
        <p>基本的なことはわかる。このサイトが作れるほど。</p>
        <p>★★★☆☆</p>
        <div class="skill-title">PHP</div>
        <p>1年生の冬から勉強。掲示板や、ログイン機能など作れる。</p>
        <p>★★★★☆</p>
        <div class="skill-title">Laravel</div>
        <p> LaravelのToDoリストのチュートリアルをやり、その後自分でログイン機能付き掲示板を作成した。インターンで使用中。</p>
        <p>★★★★☆</p>
        <div class="skill-title">JavaScript</div>
        <p>「改訂新版 JavaScript本格入門」を購入し勉強。 Dateオブジェクトを使った時間によって字の色が変わるプログラムを作成した。</p>
        <p>★★★☆☆</p>
        <div class="skill-title">Vue.js</div>
        <p>「いちばんやさしい Vue.js 入門教室」を購入し勉強。このサイトに使用している。インターンでも使用中。</p>
        <p>★★★☆☆</p>
        <div class="skill-title">DB & SQL</div>
        <p>基本的な知識を持っている。簡単なSQL文を書ける。</p>
        <p>★★☆☆☆</p>
        <div class="skill-title">Go</div>
        <p>好奇心で勉強し始めた。基本文法を学び中。</p>
        <p>★☆☆☆☆</p>
        <div class="skill-title">Linux</div>
        <p>基本的なコマンド「ls, cd, mkdir」（もっとわかるが割愛）など使える。Lpic取りたい。</p>
        <p>★★☆☆☆</p>
        <div class="skill-title">Web Security</div>
        <p>「安全なアプリケーションの作り方」を一通り読んだ。2019年3月初旬にあるサイトでXSSを見つけIPAに報告し、脆弱性関連情報届出受理証明書を頂いた。情報セキュリティマネジメント試験に合格した。</p>
        <p class="skill-end">★★☆☆☆</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skills'
}
</script>

<style>
/* skills' css */
div.skill-title {
    padding-top: 40px;
    font-size: 30px;
    text-align: left;
}

p.skill-end{
  padding-bottom: 40px;
}

div.skills-box p {
  margin-left: 40px;
}
/* end skills' css */

/* responsive */
@media screen and (max-width: 499px) { 
  /*　画面サイズ 499pxまで適用　*/
  div.skill-title {
    font-size: 30px;
    padding-top: 15px;
  }

  div.skills-box p {
    margin-left: 10px;
  }

  p.skill-end{
    padding-bottom: 15px;
  }
}
/* end responsive */
</style>
