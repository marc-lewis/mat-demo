<template>
  <section class="mat-demo">
    <message :message="name" @alert-message="alertUser" />
  </section>
</template>

<script>
import Message from '@/components/Message.vue'

export default {
  components: {
    Message
  },
  data: () => {
    return {
      name: 'Mat'
    }
  },
  methods: {
    alertUser (message) {
      window.alert(message)
    }
  }
}
</script>

<style>
.mat-demo {
  background: green;
}
</style>
