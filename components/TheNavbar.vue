<script setup lang="ts">
const links = ['Home', 'Courses', 'Blog', 'About', 'Contact']
</script>

<template>
  <nav class="flex items-start justify-between">
    <!-- Left -->
    <section>
      <LogoIcon />
    </section>

    <!-- Right -->
    <div>
      <section class="hidden items-center gap-x-9 md:flex">
        <nuxt-link
          v-for="link in links"
          :key="link"
          class="cursor-pointer text-sm font-semibold hover:opacity-70 active:opacity-100"
        >
          {{ link }}
        </nuxt-link>

        <nuxt-link class="group cursor-pointer text-sm font-semibold">
          <div
            class="rounded-full bg-salmon-100 px-3 py-2 text-salmon-700 group-hover:text-salmon-700/70 group-active:text-salmon-700/100"
            @click="$modal.open('sign-up')"
          >
            Sign Up
          </div>
        </nuxt-link>
      </section>

      <section class="flex items-center gap-x-9 md:hidden">
        <button
          class="flex h-9 w-9 items-center justify-center rounded-xl bg-salmon-100"
          @click="$modal.open('mobile-menu')"
        >
          <MenuIcon class="text-salmon-700" />
        </button>
      </section>
    </div>
  </nav>
</template>
