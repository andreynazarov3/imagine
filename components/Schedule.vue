<template>
  <section class="schedule">    
    <div class="wrapper">
    <div class="block-heading">      
      <img class="schedule-img" src="~/static/schedule.png" alt="">
      <div class="line"></div>
      <p class="withsidebar">
        The eyes of the Fair are on the future — not in the sense of peering toward the unknown nor attempting to foretell the events of tomorrow and the shape of things to come
      </p>
      </div>
    </div>
     <VuePerfectScrollbar class="scroll-area" v-once>
      <div ref="items" class="schedule-items">
        <div class="schedule-item" v-for="item in items" :key="item.id">
          <div class="schedule-item-date">{{item.date}}</div>
          <div class="schedule-item-time">{{item.time}}</div>
          <div class="schedule-item-name">{{item.name}}</div>
          <button class="schedule-item-button">Записаться</button>
          <div class="schedule-item-line"></div>          
        </div>
      </div>
    </VuePerfectScrollbar>
    
  </section>
</template>
<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar/index.vue';

export default {
  mounted: function() {
    const hammertime = new Hammer(this.$refs.items);
    hammertime.get('pan').set({ direction: Hammer.DIRECTION_ALL });
    hammertime.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
  },
  components: {
    VuePerfectScrollbar,
  },
  data: function() {
    return {
      items: [
        {
          id: 1,
          date: '27 мая',
          time: '19:00',
          name: 'Проекция мечты',
        },
        {
          id: 2,
          date: '1 июля',
          time: '19:00',
          name: 'Ты герой',
        },
        {
          id: 3,
          date: '8 июля',
          time: '19:00',
          name: 'Проекция мечты',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import '~/assets/scss/_vars.scss';
.schedule-item {
  padding-right: 260px;
  &-date {
    @extend %p;
    font-size: 36px;
    margin-bottom: 12px;
  }
  &-time {
    @extend %p;
    font-size: 16px;
  }
  &-name {
    @extend %p;
    font-size: 16px;
  }
  &-button {
    @extend %p;
    cursor: pointer;
    font-size: 15px;
    text-transform: uppercase;
    padding: 14px 27px;
    background: none;
    border: 1px solid black;
    letter-spacing: 2.5px;
    margin-top: 34px;
  }
}
.schedule-items {
  display: flex;
  padding-bottom: 30px;
}
.schedule {
  padding-top: 260px;
}
.schedule-img {
  width: 268px;
}
</style>
