<template>
  <section class="speakers">    
    <img class="blur3" src="~/static/blur3.png" alt="">
    <div class="wrapper">
    <div class="heading">      
      <img class="speakers-img" src="~/static/speakers.png" alt="">
      <p class="withsidebar">
        The eyes of the Fair are on the future — not in the sense of peering toward the unknown nor attempting to foretell the events of tomorrow and the shape of things to come
      </p>
      </div>
    </div>
    <div class="persons">
      <div class="person person-1">

        <img class="person-pic" src="~/static/petya.png" alt="">
        <div class="person-info">
        <img class="person-logo" src="~/static/speakers.png" alt="">
        <div class="person-text">
          <p><a href="#">Смотреть видео</a></p>
          <p>The eyes of the Fair are on the future — not in the sense of peering toward the unknown nor attempting to foretell the events of tomorrow and the shape of things to come</p>
        </div></div>
      </div>
      <div class="person person-2">

        <div class="person-info">
        <img class="person-logo" src="~/static/speakers.png" alt="">
        <div class="person-text">         
          <p>The eyes of the Fair are on the future — not in the sense of peering toward the unknown nor attempting to foretell the events of tomorrow and the shape of things to come</p>
        </div>
        
        </div>
        <img class="person-pic" src="~/static/lera.png" alt="">
      </div>
      <div class="person person-3">
        <img class="person-pic" src="~/static/olesya.png" alt="">
        <div class="person-info">
        <img class="person-logo" src="~/static/speakers.png" alt="">
        <div class="person-text">          
          <p>The eyes of the Fair are on the future — not in the sense of peering toward the unknown nor attempting to foretell the events of tomorrow and the shape of things to come</p>
        </div></div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  mounted: function () {
    
  }
}
</script>

<style lang="scss">
@import "~/assets/scss/_vars.scss";
.persons {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.person {
  display: flex;
  align-items: center;
  &-text {
    max-width: 288px;
  }
  &-pic {
    // position: absolute;
  }
  &-logo {
    width:300px;
  }
  &-1 {
    .person-pic {
      width:550px;
    }
  }
   &-2 {
    .person-pic {
      width:250px;
    }
  }
   &-3 {
    .person-pic {
      width:200px;
    }
  }
}
.blur3 {
  position: absolute;
  left:calc(50% + 300px);
  top:0;
  width: 468px;
  transform: rotate(-330deg);
  opacity: 0.5;
}
.persons {

}
.speakers {
  overflow: hidden;
  position: relative;
  padding-top: 260px;
}
.heading {
  display: flex;
  align-items: center;
  // max-width: 1100px;
}
.speakers-img {
  width: 242px;
  margin-right: 160px;
}
.withsidebar {
  @extend %p;
  border-left: 1px solid rgba(0,0,0,0.3);
  padding: 17px 60px;
}
</style>
