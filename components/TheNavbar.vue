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
          <div
            class="rounded-full bg-salmon-100 px-3 py-2 text-salmon-700"
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
