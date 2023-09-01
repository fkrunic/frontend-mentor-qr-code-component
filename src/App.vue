<script setup lang="ts">
</script>

<template>
  <div class="flex justify-center items-center min-h-screen shadow-lg">
    <div class="flex flex-col w-80 bg-white rounded-2xl">
      <img class="p-4 rounded-3xl" src="./assets/qr-code.png">
      <p class="px-7 pt-2 text-xl font-bold text-center text-dark-blue">
        Improve your front-end skills by building projects
      </p>
      <p class="text-grayish-blue text-center p-6 text-[15px] pb-10 pt-4">
        Scan the QR code to visit Frontend Mentor and take your coding skills
        to the next level
      </p>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}
</style>

<script>
export default {
  data() {
    return {
      bodyClass: 'font-outfit bg-light-gray'
    };
  },
  mounted() {
    document.body.className = this.bodyClass;
  },
  beforeDestroy() {
    // Reset the class when the component is destroyed
    document.body.className = '';
  }
};
</script>