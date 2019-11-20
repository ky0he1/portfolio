<template>
  <div id="app">
    <header>
        <nav>
          <ul>
            <li><router-link to="/" class="nav-link">Top</router-link></li>
            <li><router-link to="/About" class="nav-link">About</router-link></li>
            <li><router-link to="/Skills" class="nav-link">Skills</router-link></li>
            <li><router-link to="/Links" class="nav-link">Links</router-link></li>
          </ul>
        </nav>
      </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* my css */
* {
  margin: 0;
  padding: 0;
  font-family: 'Nunito', sans-serif;
  color: #636b6f;
}

html {
  height: 100vh;
  width: 100%;
}

.page {
  margin: 0 22vw;
}
/* end my css */

/* header's css */
header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
}

nav {
  padding: 20px 0;
  align-items: center;
}

ul {
  list-style: none;
  display: flex;
}

li {
  padding: 0 3vw;
}

a.nav-link {
  text-decoration: none;
  font-size: 1.2em;
}

a.nav-link:hover {
  color: #c5c5c5;
}

div.page-title {
  font-size: 64px;
  text-align: center;
}
/* end header's css */


/* responsive */
@media screen and (max-width: 499px) { 
  /*　画面サイズ 499pxまで適用　*/
  html {
    font-size: 80%;
  }
  .page {
    margin: 0 4vw;
  }
  div.page-title {
    font-size: 44px;
  }
}

@media screen and (min-width: 500px) and (max-width: 604px) {
  /*　画面サイズ 500pxから604pxまで適用　*/
  html {
    font-size: 88%;
  }
  .page {
    margin: 0 4vw;
  }
}

@media screen and (min-width: 605px) and (max-width: 699px) {
  /*　画面サイズ 605pxから699pxまで適用　*/
  .page {
    margin: 0 8vw;
  }
}

@media screen and (min-width: 700px) and (max-width: 999px) {
  /*　画面サイズ 700pxから999pxまで適用　*/
  .page {
    margin: 0 12vw;
  }
}
/* end responsive */
</style>
