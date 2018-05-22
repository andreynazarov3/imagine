<template>
<section class="speakers">
  <img class="blue" src="~/static/blue.png" srcset="~/static/blue-mobile.png 211w,~/static/blue.png 1010w" sizes="(max-width: 480px) 211px, 1010px" alt="">
  <img class="red" src="~/static/red-2.png" alt="">
  <!-- <img class="red-2" src="~/static/red.png" srcset="~/static/red-mobile.png 197w,~/static/red.png 1010w" sizes="(max-width: 480px) 197px, 1010px"  alt=""> -->
  <div class="wrapper">
    <div class="block-heading">
      <img class="speakers-img" src="~/static/creators.png" alt="">
      <div class="line"></div>
      <p>
        Мы живем в этом классном месте
      </p>
    </div>
  </div>
  <!-- <div class="persons">
    <div class="person person-1">
      <div class="person-pic">
      </div>      
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
      <div class="person-pic">
      </div>  
    </div>
    <div class="person person-3">
      <div class="person-pic">
      </div>  
      <div class="person-info">
        <div class="person-name">
          Олеся<br>Чиботарь
        </div>
        <div class="person-text">
          <p>Продюсер</p>
        </div>
      </div>
    </div>
  </div> -->
  <Credits />
</section>
</template>
<script>
import Credits from '~/components/Credits';
export default {
  components: {
    Credits,
  },
};
</script>

<style lang="scss">
@import '~/assets/scss/_vars.scss';
.red {
  position: absolute;
  bottom: 0;
  left: 0;
  @media #{$smallScreen} {
    display: none;
  }
}
.red-2 {
  position: absolute;
  bottom: 0;
  right: 0;
  @media #{$smallScreen} {
    width: 197px;
  }
}
.persons {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 996px;
  margin: 0 auto;
  @media #{$smallScreen} {
    align-items: flex-start;
  }
}
.person {
  display: flex;
  align-items: center;
  @media #{$smallScreen} {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 50px;
    width: 100%;
    .person-pic {
      margin-bottom: 16px;
      width: 100% !important;
      background-position: center !important;
    }
  }
  &-info {
    @media #{$smallScreen} {
      padding: 0 16px;
    }
  }
  &-name {
    @extend %p;
    font-size: 48px;
    opacity: 0.6;
    line-height: 1;
    margin-bottom: 12px;
    @media #{$smallScreen} {
      font-size: 36px;
    }
  }
  &-text p {
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
    @media #{$smallScreen} {
      align-self: initial;
    }
    .person-text {
      margin-left: 20px;
    }
    .person-name {
      opacity: 1;
    }
    .person-pic {
      background: url(~/static/petya.png) no-repeat;
      width: 233px;
      height: 330px;
      @media #{$smallScreen} {
        background: url(~/static/petya-small.png) no-repeat;
        width: 320px;
        height: 200px;
      }
    }
  }
  &-2 {
    align-self: flex-end;
    @media #{$smallScreen} {
      align-self: initial;
    }
    .person-pic {
      background: url(~/static/lera.png) no-repeat;
      width: 228px;
      height: 377px;
      @media #{$smallScreen} {
        background: url(~/static/lera-mobile.png) no-repeat;
        width: 320px;
        height: 200px;
        order: -1;
      }
    }
  }
  &-3 {
    align-self: flex-start;
    @media screen and (max-width: 550px) {
      margin-left: -80px;
    }
    @media #{$smallScreen} {
      align-self: initial;
      margin-left: 0px;    
    }
    .person-pic {
      background: url(~/static/olesya2.png) no-repeat;
      width: 315px;
      height: 490px;

      @media #{$smallScreen} {
        background: url(~/static/olesya-mobile.png) no-repeat;
        width: 320px;
        height: 254px;
        order: -1;
      }
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
  .block-heading {
    @media #{$smallScreen} {
      margin-bottom: 30px;
    }
  }
  @media #{$smallScreen} {
    padding-top: 75px;
  }
  .block-heading p {
    font-size: 24px;
  }
}

.speakers-img {
  width: 242px;
  // margin-right: 160px;
}
</style>
