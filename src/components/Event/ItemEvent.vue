
<template lang="pug">
  md-card#card-example(:id="event.key")
    md-card-area(md-inset)

      md-card-header
        h2(@click="goToDetails").md-title {{ event.name }}
        div.md-subhead
          md-icon location_on
          span {{` ${event.address}`}}
        div.md-subhead
          md-icon event_available
          span {{ event.dates | getDatesWithoutTime }}

      //
        md-card-content {{ event.description }}
</template>

<script>
  import { getDatesWithoutTime } from '@/utils/filters/date.js'
  export default {
    name: 'item-event',
    filters: { getDatesWithoutTime },
    props: {
      event: Object
    },
    methods: {
      goToDetails() {
        this.$router.push('events/' + this.event['.key'])
      }
    }
  }
</script>

<style lang="stylus" scoped>

.card-example {
  .md-subhead {
    .md-icon {
      width: 16px;
      min-width: 16px;
      height: 16px;
      min-height: 16px;
      font-size: 16px;
      line-height: 16px;
    }

    span {
      // vertical-align: middle;
    }
  }

  .card-reservation {
    margin-top: 8px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .md-icon {
      margin: 8px;
      color: rgba(#000, .54) !important;
    }

    .md-button {
      border-radius: 2px !important;
    }
  }

}

</style>
