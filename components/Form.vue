<template>
  <section class="form">    
    <div class="wrapper">
    <h1>
      Ну что, пошли?
    </h1>
    <p>
      У тебя тоже есть вопрос? Пора искать ответ.
    </p>
    <div class="inputs">
      <input v-model="name" type="text" name="name" id="" placeholder="Имя">
      <input v-model="phone" type="text" name="phone" id="" placeholder="Телефон">
      <input v-model="email" type="text" name="email" id="" placeholder="E-mail">
    </div>
    <button class="become" :class="{ active: name && phone && email }" :disabled="!name || !phone || !email">
      <div class="box"></div>
      <img src="~/static/become.png" alt="">
    </button>
    </div>
  </section>
</template>
<script>
export default {
  data: function() {
    return {
      name: null,
      phone: null,
      email: null,
    };
  },
};
</script>

<style lang="scss">
@import '~/assets/scss/_vars.scss';
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
  }
  img {
    position: relative;
    width: 100%;
    z-index: 1;
  }
}
.form {
  padding-top: 400px;
  background: url(~/static/form-back.png) no-repeat;
  background-position: top left;
  .wrapper {
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
  }
  @media #{$bigTabletScreen} {
    .inputs {
      flex-direction: column;
    }
  }
  @media #{$tabletScreen} {
    h1 {
      font-size: 34px;
    }
    p {
      font-size: 15px;
    }
  }
}
</style>
