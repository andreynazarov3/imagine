<template>
<transition name="modal">
    <div ref="modalContainer" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
             <button class="close modal-default-button" @click="$emit('close')">
                закрыть
              </button>

          <div class="modal-body">
              <img class="black_logo" src="/logo_black.png" alt="">
              <p>
                это know-wow формат обучения. Вы осваиваете авторские механики генерации идей и находите 100 новых решений для своего проекта. 
              </p>
               <p>
Здесь вы — не зрители. Вы — главные герои. </p>
 <p>
Ответы есть только у вас. </p>
 <p>
Возможно, вы мало что поняли, а возможно, вам стоит просто придти.
Кто-то очень важный ждет встречи с вами.
              </p>
              
        
</div>
          <div class="modal-footer">
             

             <div style="padding:75% 0 0 0;position:relative;"><iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen src="https://www.youtube.com/embed/p5ILk4WQ9Ek" allow="autoplay; encrypted-media"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
          </div>
           
            
          
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  mounted: function () {
       this.$refs.modalContainer.addEventListener('mousewheel', function (e){e.stopPropagation();}, false)
        this.$refs.modalContainer.addEventListener('DOMMouseScroll', function (e){e.stopPropagation();}, false)
  }
};
</script>

<style lang="scss">
@import '~/assets/scss/_vars.scss';
.close {
  position: absolute;
  right: -40px;
  top: 32px;
  width: 32px;
  height: 32px;
  opacity: 1;
  font-size: 0;
  background: transparent;
  border: none;
  cursor: pointer;
   @media #{$tabletScreen} {
    right: 10px;
  }
}
.close:hover {
  opacity: 1;
}
.close:before,
.close:after {
  position: absolute;
  left: 10px;
  top: 0;
  content: ' ';
  height: 33px;
  width: 2px;
  background-color: white;
  @media #{$tabletScreen} {
    background-color: black;
  }
}
.close:before {
  transform: rotate(45deg);
}
.close:after {
  transform: rotate(-45deg);
}

.black_logo {
  width: 290px;
  @media #{$tabletScreen} {
    width: 200px;
  }
}
.video {
  width: 100%;
}
.modal-mask {
  overflow-y: scroll;
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: block;
  transition: opacity 0.3s ease;
  text-align: center;
}

.modal-wrapper {
  display: inline-block;
}

.modal-container {
  position: relative;
  width: 100%;
  max-width: 756px;
  margin: 0px auto;
  padding: 150px 21px 100px 128px;
  background: url(/popup.png) no-repeat;
  background-size: 100% 100%;
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
  @media #{$bigTabletScreen} {
    max-width: 460px;
    padding: 50px 12px 82px 75px;
  }
  @media #{$tabletScreen} {
    padding: 50px 0 0 0;
    background: white;
  }
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}
.modal-footer {
    padding-bottom: 33px;
    @media #{$bigTabletScreen} {
        padding-bottom: 5px;
  }
   @media #{$tabletScreen} {
    padding-bottom: 0px;
  }
}
.modal-body {
  text-align: left;
  margin: 20px 0;
  padding: 0px 160px 0 116px;
  @media #{$bigTabletScreen} {
    padding:0px 53px 0 59px;
  }
  @media #{$tabletScreen} {
    padding: 0 15px;
  }
  p {
    font-size: 24px;
    margin-bottom: 30px;
    margin-top: 30px;
    @media #{$bigTabletScreen} {
    font-size: 15px;
  }
  }
  h1 {
    @extend %p;
    font-size: 16px;
    font-weight: bold;
    text-align: left;
  }
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
