<script setup lang="ts"></script>

<template>
  <div
    class="shadow-md inline-flex h-16 items-stretch rounded-full bg-white shadow-dp-01"
  >
    <div class="relative h-full">
      <SearchIcon class="absolute left-7 top-1/2 -translate-y-1/2 transform" />

      <input
        type="text"
        class="h-full rounded-l-full bg-white p-4 pl-14"
        placeholder="Search course..."
      />
    </div>

    <span class="my-2 border-r border-black/10" />

    <p class="flex items-center gap-x-2 px-6 font-medium">
      Category <AngleDown />
    </p>

    <span class="my-2 border-r border-black/10" />

    <p class="flex items-center gap-x-2 px-6 font-medium">
      Type <AngleDown />
    </p>

    <div class="mr-3 flex items-center">
      <BaseButton variant="secondary"> Search </BaseButton>
    </div>
  </div>
</template>
