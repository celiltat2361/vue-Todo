<template>
  <div class="nowDateTime mr-2">
    {{ date }}
  </div>
</template>

<script>
import { format } from 'date-fns'
export default {
  data() {
    return {
      date: ''
    }
  },
  methods: {
    getDate() {
     this.date = format(new Date(),  'yy.MM.d HH:mm')
    }
  },
  mounted() {
    this.getDate()
  }
};
</script>

<style>
  .nowDateTime {
    font-style: italic;
    font-size: 10px;
  }
</style>
