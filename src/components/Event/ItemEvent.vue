<template lang="pug">
  div(:id="event.key")
    h3 {{ event.name }}
    h5 {{ event.date | getDefaultFormat }}
</template>

<script>
  import { getDefaultFormat } from '@/utils/filters/date.js'
  export default {
    name: 'item-event',
    filters: { getDefaultFormat },
    props: {
      event: Object
    }
  }
</script>

<style scoped>

</style>
