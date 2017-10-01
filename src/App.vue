<template lang="pug">
  div#app
    navbar(@openSidenav="openSidenav")
    side-nav(ref="sidenav")
    router-view.routes

    login
</template>

<script>
import Navbar from '@/components/Header/NavBar.vue'
import SideNav from '@/components/SideNav/SideNav.vue'
import Login from '@/components/Dialogs/Login.vue'

export default {
  name: 'app',
  components: { Navbar, SideNav, Login },
  data() {
    return {}
  },
  methods: {
    openSidenav() {
      this.$refs.sidenav.toggle()
    }
  }
}
</script>

<style lang="stylus">
*
  box-sizing border-box
body
  overflow-y auto

#app, hml, .routes
  overflow hidden

#app, body
  font-family 'Roboto', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

  width 100%

.routes
  padding-top 64px

.md-list-item
  z-index unset

ul
  list-style-type none
  text-align left
  padding-left 20px
</style>
