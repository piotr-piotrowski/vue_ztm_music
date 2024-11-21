<template>
  <app-header />

  <router-view></router-view>

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
