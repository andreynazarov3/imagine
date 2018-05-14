<template>
<section class="speakers">
  <img class="blue" src="~/static/blue.png" alt="">
  <img class="red" src="~/static/red-2.png" alt="">
  <img class="red-2" src="~/static/red.png" alt="">
  <div class="wrapper">
    <div class="block-heading">
      <img class="speakers-img" src="~/static/creators.png" alt="">
      <div class="line"></div>
      <p>
        Мы живем в этом классном месте
      </p>
    </div>
  </div>
  <div class="persons">
    <div class="person person-1">
      <img class="person-pic" src="~/static/petya.png" alt="">
      <div class="person-info">
        <div class="person-name">
          <img class="person-logo" src="~/static/petya-name.png" alt="">
        </div>
        <div class="person-text">
          <p>Режиссер</p>
        </div>
      </div>
    </div>
    <div class="person person-2">      
      <div class="person-info">
        <div class="person-name">
         Валерия<br>Попова
        </div>
        <div class="person-text">
          <p>Креатор</p>
        </div>
      </div>
      <img class="person-pic" src="~/static/lera.png" alt="">
    </div>
    <div class="person person-3">
      <img class="person-pic" src="~/static/olesya.png" alt="">
      <div class="person-info">
        <div class="person-name">
          Олеся<br>Чиботарь
        </div>
        <div class="person-text">
          <p>Продюсер</p>
        </div>
      </div>
    </div>
  </div>
  <Credits />
</section>
</template>
<script>
import Credits from '~/components/Credits';
export default {
  components: {
    Credits,
  }
};
</script>

<style lang="scss">
@import '~/assets/scss/_vars.scss';
.red {
  position: absolute;
  bottom:0;
  left:0;
}
.red-2 {
  position: absolute;
  bottom:0;
  right:0;
}
.persons {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 996px;
  margin: 0 auto;
}
.person {
  display: flex;
  align-items: center;
  &-name {
    @extend %p;
    font-size: 48px;
    opacity: 0.6;
    line-height: 1;
    margin-bottom: 12px;
  }
  &-text {
    @extend %p;
    font-size: 20px;
    opacity: 0.5;
  }
  &-pic {
    // position: absolute;
  }
  &-logo {
    width: 201px;
  }
  &-1 {
    align-self: flex-start;
    .person-text {
      margin-left:20px;
    }
    .person-name {
      opacity: 1;
    }
    .person-pic {
      width: 233px;
    }
  }
  &-2 {
    align-self: flex-end;
    .person-pic {
      width: 282px;
    }
  }
  &-3 {
    align-self: flex-start;
    .person-pic {
      width: 352px;
    }
  }
}
.blue {
  position: absolute;
  right: 0;
  top: 0;
}
.persons {
}
.speakers {
  overflow: hidden;
  position: relative;
  padding-top: 580px;
  .block-heading p {
    font-size: 24px;
  }
}

.speakers-img {
  width: 242px;
  // margin-right: 160px;
}
</style>
