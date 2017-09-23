<template lang="pug">
  md-whiteframe(:id="event.key" md-elevation="2")
    h3 {{ event.name }}
    p {{ event.description }}
    h5 {{ event.date | getDefaultFormat }}{{` em ${event.address}`}}
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

<style lang="stylus" scoped>
.md-whiteframe
  width 100%
  padding 10px
  margin-bottom 10px
</style>
