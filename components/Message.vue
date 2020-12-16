<template>
  <section class="Message">
    <h2 @click="emitMessage">
      {{ message }}
    </h2>
  </section>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
      default: 'hi'
    }
  },
  methods: {
    emitMessage () {
      this.$emit('alert-message', this.message)
    }
  }
}
</script>

<style>
h2 {
  cursor: pointer;
}
</style>
