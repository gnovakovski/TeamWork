<template lang="pug">
  md-toolbar.row.justify-space-between.header(:class="{ 'hidden': hiddeNav }")
    md-button.md-icon-button(@click.native="$emit('openSidenav')")
      md-icon menu
    span.title-header(@click="scrollTop") Eventos
</template>

<script>

export default {
  name: 'nav-bar',
  data() {
    return {
      hiddeNav: false
    }
  },
  methods: {
    scrollTop() {
      document.body.scrollTop = 0
    },
    handleScroll() {
      var st = document.body.scrollTop,
        navbarHeight = 64,
        delta = 5

      // garantindo que o scroll foi maior que o delta
      if (Math.abs(this.lastScrollTop - st) <= delta)
        return

      if (st > this.lastScrollTop && st > navbarHeight) {
        // Scroll Down
        this.nav = true
      } else {
        // Scroll Up
        if (st < this.lastScrollTop) {
          this.nav = false
        }
      }
      this.lastScrollTop = st
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('touchmove', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('touchmove', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
button
  margin-right 0px !important

.title-header
  font-size 1.2em
  font-weight 500
  flex-grow 1
  text-align left
  padding 3px 0px 0 24px

.md-toolbar
  color white !important

.header
  background #1e88e5
  height 40px
  position fixed
  top 0
  width 100%
  z-index 3

.hiddeNav
  transform perspective(500px) translate3d(0px, -64px, 0px)
</style>
