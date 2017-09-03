<template>
  <div class="events-feed">
    Hi
  </div>
</template>

<script>
import events from '@/api/events'
export default {
  name: 'events-feed',
  created () {
    events.getEvents().then(data => {
      this.events = data
    })
  }
}
</script>

<style scoped>

</style>
