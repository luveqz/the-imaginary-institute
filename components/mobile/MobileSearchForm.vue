<script setup lang="ts">
const categories = [
  { id: 1, name: 'All Categories' },
  { id: 2, name: 'Novel' },
  { id: 3, name: 'Poetry' },
  { id: 4, name: 'Screenplay' },
  { id: 5, name: 'Non-Fiction' },
  { id: 6, name: 'Short Stories' },
]

const type = [
  { id: 1, name: 'All Types' },
  { id: 2, name: 'Online' },
  { id: 3, name: 'On Demand' },
]
</script>

<template>
  <form class="flex flex-col gap-2 text-sm" @submit.prevent>
    <BaseSelect :list="categories" />
    <BaseSelect :list="type" />

    <div class="relative flex">
      <button
        class="absolute -right-2 top-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-salmon-500"
      >
        <SearchIcon class="text-white" />
      </button>
      <input
        type="text"
        class="h-11 w-full rounded-full border border-black/20 px-5 py-3 pr-12"
        placeholder="Search course..."
      />
    </div>
  </form>
</template>
