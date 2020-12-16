import vue from 'vue'

vue.component('Message', {
  template: `
  <section class="mat-demo">
    <message :message="name" />
  </section>
  `,
  data: {},
  props: {}
})
