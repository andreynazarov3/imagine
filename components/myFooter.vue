<template>
<footer>
  <div class="tel">
    <a href="tel:+7 (916) 996–63–28"><img src="~/static/tel.png" alt=""></a>
    <p>The eyes of the Fair are on the future
not in the sense of peering toward </p>
  </div>
  <div class="realfooter">
      <div class="wrapper">
        <img src="~/static/white-logo.png" alt="">
        <div class="social">
          <a href="">Facebook</a>
          <a href="">Instagram</a>
          <a href="">Medium</a>
        </div>
        <div class="madein">
          <p><span>Cделано в </span><a href="">Gstudio</a></p>
        </div>
      </div>
  </div>
</footer>
</template>
<script>
</script>

<style lang="scss">
@import '~/assets/scss/_vars.scss';
.realfooter {
  height: 300px;
  background-color: #000000;
  .social {
    margin-right:90px;
    a {
      @extend %p;
      font-size: 15px;
      color: white;
      opacity: 0.6;
      margin-right: 24px;
      &:hover {
        opacity: 1;
      }
    }
  }
  .madein {
    p span {
      @extend %p;
      font-size: 14px;
      color: white;
      opacity: 0.3;
    }
    a {
      @extend %p;
      font-size: 14px;
      color: white;
      opacity: 0.3;
      &:hover {
        opacity: 1;
      }
    }
  }
  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }
}
.tel {
  text-align: center;
  margin-bottom: 78px;
  p {
    @extend %p;
    font-size: 16px;
    opacity: 0.6;
    text-align: center;
    max-width: 300px;
    margin: 20px auto;
  }
}
footer {
  margin-top: 200px;
}
</style>
