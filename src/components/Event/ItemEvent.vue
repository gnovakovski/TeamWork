<template>
  <div id="item-event">
    {{event.date}}
    {{event.name}}
  </div>
</template>

<script>
  export default {
    name: 'item-event',
    props: {
      event: Object
    }
  }
</script>

<style scoped>

</style>