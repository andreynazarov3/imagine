<template>
  <section class="form">    
    <p>
      Узнай свою судьбу, или текст про то, зачем ему приходить,
после ввода имени / e-mail кнопка «стать героем» становится активна
    </p>
    <div class="inputs">
      <input type="text" name="name" id="" placeholder="Имя">
      <input type="text" name="email" id="" placeholder="E-mail">
    </div>
    <img src="~/static/become.png" alt="" class="become">
  </section>
</template>
<style lang="scss">
@import "~/assets/scss/_vars.scss";
.become {
  max-width: 525px;
  opacity: 0.6;
  margin-top: 55px;
}
.form {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 100px;
  .inputs {
    display: flex;
    input {
      @extend %p;
      opacity: 0.3;
      font-size: 36px;
      border: none;
      border-bottom: 1px solid black;
      max-width: 288px;
      outline:none;
      &:hover, &:focus {
        opacity: 1;
      }
      &:first-child {
        margin-right: 60px;
      }
      &:focus::placeholder {
        visibility: hidden;
      }
    }
  }
  p {
    text-align: center;
    max-width: 485px;
    margin-bottom: 90px;
  }
}
</style>
