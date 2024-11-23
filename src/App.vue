<template>
  <app-header />

  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <Component :is="Component"></Component>
    </transition>
  </router-view>

  <app-player />

  <auth />
</template>

<script>
import { auth } from "@/includes/firebase"
import AppHeader from "@/components/Header.vue"
import AppPlayer from "@/components/Player.vue"
import { mapWritableState } from "pinia"
import useUserStore from "@/stores/user"
import Auth from "@/components/Auth.vue"

export default {
  name: "App",
  components: { AppHeader, Auth, AppPlayer },
  data() {
    return {
      publicPath: import.meta.env.BASE_URL,
    }
  },
  computed: {
    ...mapWritableState(useUserStore, ["userLoggedIn"]),
  },
  created() {
    if (auth.currentUser) {
      this.userLoggedIn = true
    }
  },
}
</script>

<style>
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.5s linear;
}

.fade-leave-to {
  transition: all 0.5s linear;
  opacity: 0;
}
</style>
