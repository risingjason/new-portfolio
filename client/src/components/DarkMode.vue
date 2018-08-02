<template>
  <div id="dark-mode">
    <font-awesome-icon
      @click="darkMode"
      :style="{ color: lightbulbColor }"
      class="icon"
      :icon="'lightbulb'" />
  </div>
</template>

<script>
export default {
  props: {
    isDM: Boolean,
  },
  data() {
    return {
      active: false,
    };
  },
  methods: {
    hoverColor() {
      this.active = !this.active;
    },
    darkMode() {
      this.$emit('darkModeToggle');
    },
  },
  computed: {
    lightbulbColor() {
      return this.isDM ? '#dcdcdc' : '#5f5f5f';
    },
  },
};
</script>

<style scoped>
#dark-mode {
  width: 2.5em;
  height: 2.5em;
}
.icon {
  width: inherit;
  height: inherit;
  transition: color 0.5s ease;
}

@media screen and (max-width: 800px) {
  #dark-mode {
    width: 35px;
    height: 35px;
  }
}
</style>
