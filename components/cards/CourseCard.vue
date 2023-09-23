<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  coverUrl: {
    type: String,
    required: true,
  },
  teacherName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  hours: {
    type: Number,
    required: true,
  },
  lessons: {
    type: Number,
    required: true,
  },
})
</script>

<template>
  <div class="@container">
    <article
      class="flex flex-col gap-4 rounded-xl p-6 shadow-dp-01 @[31.25rem]:flex-row"
    >
      <!-- Cover -->
      <div class="w-full grow-0 @[31.25rem]:max-w-[18rem]">
        <div
          class="relative w-full overflow-hidden rounded-xl bg-salmon-400 pb-[56%]"
        >
          <img
            class="absolute left-0 top-0 h-full w-full object-cover"
            :src="coverUrl"
            alt=""
          />
        </div>
      </div>

      <!-- Info -->
      <div class="grow">
        <div class="line-clamp-[5]">
          <h3 class="text-lg font-bold leading-tight">
            {{ title }}
          </h3>
          <p class="mt-0.5 text-sm opacity-50">A course by {{ teacherName }}</p>

          <p class="mt-4 text-sm">
            {{ description }}
          </p>
        </div>

        <div class="mt-4 flex gap-5 text-sm">
          <p class="flex items-center gap-2">
            <ClockIcon class="text-salmon-500" />
            <span class="opacity-50"> {{ hours }} hours </span>
          </p>
          <p class="flex items-center gap-2">
            <FileIcon class="text-salmon-500" />
            <span class="opacity-50"> {{ lessons }} lessons </span>
          </p>
        </div>
      </div>
    </article>
  </div>
</template>
