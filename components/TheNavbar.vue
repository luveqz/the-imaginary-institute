<script setup lang="ts"></script>

<template>
  <nav class="flex items-start justify-between">
    <!-- Left -->
    <section>
      <LogoIcon />
    </section>

    <!-- Right -->
    <div>
      <section class="hidden items-center gap-x-9 md:flex">
        <nuxt-link class="cursor-pointer text-sm font-semibold">
          Home
        </nuxt-link>
        <nuxt-link class="cursor-pointer text-sm font-semibold">
          Courses
        </nuxt-link>
        <nuxt-link class="cursor-pointer text-sm font-semibold">
          Blog
        </nuxt-link>
        <nuxt-link class="cursor-pointer text-sm font-semibold">
          About
        </nuxt-link>
        <nuxt-link class="cursor-pointer text-sm font-semibold">
          Contact
        </nuxt-link>

        <nuxt-link class="cursor-pointer text-sm font-semibold">
          <div class="text-salmon-700 bg-salmon-100 rounded-full px-3 py-2">
            Sign Up
          </div>
        </nuxt-link>
      </section>

      <section class="flex items-center gap-x-9 md:hidden">
        <button
          class="bg-salmon-100 flex h-9 w-9 items-center justify-center rounded-xl"
        >
          <MenuIcon class="text-salmon-700" />
        </button>
      </section>
    </div>
  </nav>
</template>
