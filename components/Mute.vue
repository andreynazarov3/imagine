<template>
<div @click="$emit('click')" class="mute">

<svg v-if="muted" width="65px" height="46px" viewBox="0 0 65 46" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Group-4-Copy">
            <rect id="Rectangle" fill-opacity="0.370000005" fill="#FFFFFF" x="0" y="0" width="65" height="46" rx="10"></rect>
            <g id="Group" transform="translate(12.000000, 8.000000)" fill="#000000" fill-rule="nonzero">
                <path d="M0,8.01923077 L0,22.0384615 L8.23893805,22.0384615 L19,30 L19,0 L8.18289086,8.01923077 L0,8.01923077 Z M1.96165192,10.0384615 L7.51032448,10.0384615 L7.51032448,20.0192308 L1.96165192,20.0192308 L1.96165192,10.0384615 Z M16.9823009,26.0192308 L9.4719764,20.4807692 L9.4719764,9.51923077 L16.9823009,3.92307692 L16.9823009,26.0192308 Z" id="Shape"></path>
                <polygon id="Shape" points="41 7.40728477 39.6445183 6 32.5282392 13.0927152 25.4119601 6 24 7.40728477 31.1162791 14.5 24 21.5927152 25.4119601 23 32.5282392 15.9072848 39.6445183 23 41 21.5927152 33.9401993 14.5"></polygon>
            </g>
        </g>
    </g>
</svg>

<svg v-if="!muted" width="65px" height="46px" viewBox="0 0 65 46" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Group-4-Copy-2">
            <rect id="Rectangle" fill-opacity="0.370000005" fill="#FFFFFF" x="0" y="0" width="65" height="46" rx="10"></rect>
            <g id="Group" transform="translate(12.000000, 8.000000)" fill="#000000" fill-rule="nonzero">
                <path d="M0,8.01923077 L0,22.0384615 L8.23893805,22.0384615 L19,30 L19,0 L8.18289086,8.01923077 L0,8.01923077 Z M1.96165192,10.0384615 L7.51032448,10.0384615 L7.51032448,20.0192308 L1.96165192,20.0192308 L1.96165192,10.0384615 Z M16.9823009,26.0192308 L9.4719764,20.4807692 L9.4719764,9.51923077 L16.9823009,3.92307692 L16.9823009,26.0192308 Z" id="Shape"></path>
            </g>
            <path d="M35.6438356,15 L34,15.971223 L34.4931507,16.7805755 C35.5342466,18.5071942 36.0821918,20.5035971 36.0821918,22.5 C36.0821918,24.4964029 35.5342466,26.4928058 34.4931507,28.2194245 L34,29.028777 L35.6438356,30 L36.1369863,29.1906475 C37.3424658,27.1942446 38,24.8741007 38,22.5 C38,20.1258993 37.3424658,17.8597122 36.1369863,15.8093525 L35.6438356,15 Z" id="Shape" fill="#000000" fill-rule="nonzero"></path>
            <path d="M40.7045455,12 L39,12.9742268 L39.5113636,13.7860825 C41.1590909,16.4381443 42.0113636,19.4149485 42.0113636,22.5 C42.0113636,25.5850515 41.1590909,28.5618557 39.5113636,31.2139175 L39,32.0257732 L40.7045455,33 L41.2159091,32.1881443 C43.0340909,29.2654639 44,25.9097938 44,22.5 C44,19.0902062 43.0340909,15.7345361 41.2159091,12.8118557 L40.7045455,12 Z" id="Shape" fill="#000000" fill-rule="nonzero"></path>
            <path d="M46.2718447,9.81 L45.7475728,9 L44,9.972 L44.5242718,10.782 C46.7961165,14.292 47.961165,18.342 47.961165,22.5 C47.961165,26.604 46.7961165,30.654 44.5242718,34.218 L44,35.028 L45.7475728,36 L46.2718447,35.19 C48.7184466,31.356 50,26.982 50,22.5 C50,18.018 48.7184466,13.644 46.2718447,9.81 Z" id="Shape" fill="#000000" fill-rule="nonzero"></path>
        </g>
    </g>
</svg>
</div>
</template>

<script>
export default {
  props: ['muted'],
};
</script>

<style lang="scss">
.mute {
  position: fixed;
  bottom: 20px;
  left: 20px;
  border-radius: 50%;
  // background: rgba(255, 255, 255, 0.3);
  padding: 10px;
  width: 60px;
  height: 60px;
  cursor: pointer;
  z-index: 9999;
  svg {
    width: 100%;
    height: 100%;
  }
  @at-root .app.mobile .mute {
    display: none;
  }
}
</style>
