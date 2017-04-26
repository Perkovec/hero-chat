<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style>
  @font-face {
    font-family: Roboto;
    src: url(fonts/Roboto-Light.ttf);
    font-weight: 300;
  }

  @font-face {
    font-family: Roboto;
    src: url(fonts/Roboto-Regular.ttf);
    font-weight: 400;
  }

  @font-face {
    font-family: Roboto;
    src: url(fonts/Roboto-Medium.ttf);
    font-weight: 500;
  }

  @font-face {
    font-family: Roboto;
    src: url(fonts/Roboto-Bold.ttf);
    font-weight: 600;
  }

  html, body, #app {
    height: 100%;
    width: 100%;
  }

  body {
    margin: 0 auto;
    font-family: Roboto;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
  }
</style>