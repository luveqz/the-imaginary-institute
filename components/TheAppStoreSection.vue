<template>
  <div>
    <section class="bg-gray flex flex-col items-center rounded-3xl pb-12 pt-9">
      <HeadingTwo class="text-center text-salmon-500">
        Download Our App
      </HeadingTwo>

      <p class="mt-3 max-w-lg text-center leading-normal opacity-50">
        Access your courses, assignments, and course materials with ease,
        whether you're commuting, taking a break, or simply on the move. Your
        learning never has to pause.
      </p>

      <div class="mt-7 flex gap-x-7">
        <button class="flex items-center gap-x-2 rounded-xl bg-white px-3 py-3">
          <AppleIcon />
          <div class="text-left">
            <p class="mb-0.5 text-[0.5rem] font-bold uppercase text-salmon-500">
              Download now
            </p>
            <p class="text-lg font-semibold leading-none"> Apple Store </p>
          </div>
        </button>

        <button class="flex items-center gap-x-2 rounded-xl bg-white px-3 py-3">
          <GooglePlayIcon />
          <div class="text-left">
            <p class="mb-0.5 text-[0.5rem] font-bold uppercase text-salmon-500">
              Download now
            </p>
            <p class="text-lg font-semibold leading-none"> Play Store </p>
          </div>
        </button>
      </div>
    </section>
  </div>
</template>
