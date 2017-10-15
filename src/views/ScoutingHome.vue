<template lang="pug">
  section
    h1 hello

    scouting-match(ref="matchDialog")
    fab-button(@click="$refs.matchDialog.open()")
</template>

<script>
export default {
  components: {
    FabButton     : require('@/components/Buttons/FabButton.vue'),
    ScoutingMatch : require('@/components/Dialogs/ScoutingMatch.vue')
  }
}
</script>

<style lang="stylus" scoped>

</style>
