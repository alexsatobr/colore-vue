<template>
  <div class="container">
    <!-- <app-sidebar></app-sidebar> -->
    <app-content></app-content>
  </div>
</template>

<script>

// import Sidebar from './Sidebar.vue'
import Content from './Content.vue'

  export default {
    components: {
      // appSidebar: Sidebar,
      appContent: Content
     
  }
    }
</script>