<template>
  <section class="form">    
    <img src="~/static/form-back.png" srcset="~/static/blue-mobile-2.png 211w,~/static/form-back.png 1010w" sizes="(max-width: 768px) 211px, 1010px" class="blue-form">
    <div class="wrapper">
    <h1>
      Ну что, пошли?
    </h1>
    <p>
      У тебя тоже есть вопрос? Пора искать ответ.
    </p>
    <div class="inputs">
      <input :class="{ filled: name}"  v-model="name" type="text" name="name" id="" placeholder="Имя">
      <input :class="{ filled: phone}" v-model="phone" type="text" name="phone" id="" placeholder="Телефон">
      <input :class="{ filled: email, invalid: !validEmail}" v-model="email" type="email" name="email" id="" placeholder="E-mail">
    </div>
    <button @click="sendEmail" class="become" :class="{ active: name && phone && email && validEmail}" :disabled="!name || !phone || !email || !validEmail">
      <div class="box"></div>
      <img src="~/static/become.png" alt="">
    </button>
    </div>
  </section>
</template>
<script>
import 'whatwg-fetch';
export default {
  
  data: function() {
    return {
      name: null,
      phone: null,
      email: null,
      validEmail: null
    };
  },
  watch: {
    email: function () { this.validateEmail(this.email) }
  },
  methods: {
    validateEmail: function (email) {
        if (/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(email)) {
          this.validEmail = true;
        } else { this.validEmail = false; }
  },
  sendEmail: function () {
    var img = new Image();
    img.onload = function() { this.$emit('sendmail'); }
    img.src = "/popup.png";
    
    fetch('https://imaginemailer.herokuapp.com', {
          method: 'POST',
          headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded',
          }),
          body: `name=${this.name}&phone=${this.phone}&email=${this.email}&`,
        });
  }
  }
};
</script>

<style lang="scss">
@import '~/assets/scss/_vars.scss';
.blue-form {
  position: absolute;
  top: 0;
  left: 0;
  @media #{$tabletScreen} {
    width: 224px;
  }
}
.become {
  opacity: 0.6;
  margin-top: 55px;
  position: relative;
  border: none;
  background: none;
  cursor: pointer;
  transition: 300ms ease;
  width: 100%;
  max-width: 525px;
  @media #{$tabletScreen} {
    margin-top: 48px;
    width: 179px;
  }
  &.active {
    opacity: 1;
    .box {
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
    }
  }
  .box {
    transition: 300ms ease;
    position: absolute;
    top: calc(50% - 50px);
    left: calc(50% - 50px);
    height: 100px;
    width: 100px;
    border: 1px solid grey;
    @media #{$tabletScreen} {
      top: calc(50% - 30px);
      left: calc(50% - 30px);
      height: 60px;
      width: 60px;
    }
  }
  img {
    position: relative;
    width: 100%;
    z-index: 1;
  }
}
@keyframes autofill {
  to {
    background: transparent;
  }
}
.form {
  position: relative;
  padding-top: 400px;
  background: url() no-repeat;
  background-position: top left;
  @media #{$tabletScreen} {
    padding-top: 100px;
  }
  .wrapper {
    z-index: 1;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  h1 {
    @extend %p;
    font-size: 78px;
    text-align: center;
  }
  .inputs {
    display: flex;
    input {
      @extend %p;
      opacity: 0.3;
      font-size: 36px;
      border: none;
      border-bottom: 1px solid black;
      max-width: 288px;
      width: 100%;
      outline: none;
      margin-right: 60px;
      padding: 10px 0;
      background: none;
      &:-webkit-autofill {
        animation-name: autofill;
        animation-fill-mode: both;
      }
      &.filled {
        opacity: 1;
      }
      &:hover,
      &:focus {
        opacity: 1;
      }
      &:last-child {
        margin-right: 0;
      }
      &:focus::placeholder {
        visibility: hidden;
      }
    }
  }
  p {
    font-size: 24px;
    text-align: center;
    max-width: 485px;
    margin: 20px 0 100px 0;
    @media #{$tabletScreen} {
      margin-bottom: 40px;
    }
  }
  @media #{$bigTabletScreen} {
    .inputs {
      flex-direction: column;
    }
  }
  @media #{$tabletScreen} {
    h1 {
      font-size: 40px;
    }
    p {
      font-size: 15px;
    }
    .inputs input {
      font-size: 24px;
    }
  }
}
</style>
