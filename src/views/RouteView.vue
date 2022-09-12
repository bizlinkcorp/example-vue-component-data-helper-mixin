<template>
  <div>
    <v-list dense>
      <v-list-item dense v-for="(route, idx) in displayRoutes" :key="idx">
        <router-link :to="route.path">{{ route.name }}</router-link>
      </v-list-item>
    </v-list>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { RouteRecordRaw, RouterLink } from 'vue-router';
import router from '../router';

export default defineComponent({
  name: 'RouteView',
  components: {
    RouterLink,
  },
  data: () => ({
    displayRoutes: [] as RouteRecordRaw[],
  }),
  mounted(): void {
    router.getRoutes().forEach((route) => {
      if (route.path !== '/') {
        this.displayRoutes.push(route);
      }
    });
  },
});
</script>
