<template>

  <div class="credits">
    <div class="credits-block">
      <div class="credits-row">
          <p>Художник</p>
          <p><a href="">Ульяна Громова</a></p>
      </div>
      <div class="credits-row">
          <p>Сценарист</p>
          <p><a href="">Александра Лебедева</a></p>
      </div>
      <div class="credits-row">
          <p>Психолог</p>
          <p><a href="">Константин Червонько</a></p>
      </div>
      <div class="credits-row">
          <p>Коуч</p>
          <p><a href="">Ульяна Громова</a></p>
      </div>
      <div class="credits-row">
           <p>Хореограф</p>
          <p><a href="">Илья Давыдов</a></p>
      </div>
      <div class="credits-row">
          <p>Звукорежиссер</p>
          <p><a href="">Евгений Коваленко</a></p>
      </div>
      <div class="credits-row">
          <p>Digital агенство</p>    
          <p><a href="http://www.gstudio.com/" target="_blank">Gstudio</a></p>
      </div>
     

    </div>
  </div>
</template>
<script>
</script>

<style lang="scss">
@import '~/assets/scss/_vars.scss';
.credits {
  margin-top: 150px;
  text-align: center;
  position: relative;
  z-index: 1;
  @media #{$tabletScreen} {
    margin-top: 0;
    text-align: left;
    padding-left: 16px;
  }
  .spacer {
    display: block;
    height: 0px;
  }
}
.credits-block {
  display: inline-flex;
  flex-direction: column;
}
.credits-row {
  display: flex;
  align-items: center;
  margin-bottom: 35px;
  @media #{$tabletScreen} {
    flex-direction: column;
    align-items: flex-start;
     margin-bottom: 28px;
  }
  a {
    font-size: 20px;
    color: black;
    &:hover {
      color: #ff9c2f;
    }
  }
  p {
    @extend %p;
    &:first-child {
      width: 200px;
      margin-right: 40px;
      text-align: right;
      font-size: 15px;
      opacity: 0.5;
      @media #{$tabletScreen} {
        width: auto;
      }
    }
  }
}
</style>
