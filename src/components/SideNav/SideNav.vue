<template lang="pug">
  md-sidenav.md-left(ref="leftSidenav" @open="changeBodyScroll('hidden')" @close="changeBodyScroll('auto')")
    div.row.main-content
      // Current app content
      div.content
        // Toolbar
        md-toolbar.md-small.no-color
          md-list-item.app-title.md-toolbar-container
            span.app-title-2 Team work
        // Routes
        md-list
          router-link(v-for="route in routes" :key="route.name" :to="route.name")
            md-list-item
              span {{ route.label }}
</template>

<script>
import routes from '@/views/'

export default {
  name: 'sidenav',
  data() {
    return {
      routes: routes
    }
  },
  methods: {
    toggle() { this.$refs.leftSidenav.toggle() },
    changeBodyScroll(value) {
      document.body.style['overflow-y'] = value
    }
  }
}
</script>

<style lang="stylus" scoped>
.md-sidenav.md-active
  width 100vw
  height 100vh

.md-sidenav, .md-sidenav >>> .md-sidenav-content
  max-width 70%
  height 100vh
  position fixed
  z-index 12

.md-sidenav >>> .md-sidenav-content
  overflow-y hidden

.main-content
  overflow-y hidden

.md-sidenav >>> .md-backdrop
  width 100vw
  z-index 11

.md-toolbar-container, .md-icon
  color white

.content
  width 100%

.md-toolbar
  background-color white !important
  border-bottom 1px solid #f3ecec
.app-title >>> div
  padding-left 8px
.app-title-2
  font-size 22px
  color #757575
  margin-top 5px
</style>
