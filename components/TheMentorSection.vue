<script setup lang="ts">
const avatars = [
  'user-01.png',
  'user-02.png',
  'user-03.png',
  'user-04.png',
  'user-05.png',
  'user-06.png',
]
</script>

<template>
  <section class="relative">
    <img
      src="~/assets/img/character-02.webp"
      alt="World map with users across all continents"
      class="absolute -right-14 hidden h-full max-h-[27rem] w-6/12 object-scale-down md:block lg:-top-6 lg:h-auto lg:w-auto"
      draggable="false"
    />

    <div class="relative">
      <BaseOverline class="mb-2"> Don’t lose momentum </BaseOverline>
      <HeadingTwo class="md:w-7/12"> Meet Your Writing Mentors </HeadingTwo>

      <p class="mt-8 text-base font-medium opacity-70 md:w-7/12">
        Your mentor will provide you with one-on-one guidance tailored to your
        unique goals and writing style.
      </p>

      <section class="mt-6 flex">
        <div
          v-for="(avatar, id) in avatars"
          :key="id"
          class="relative -mr-5 inline h-14 w-14 rounded-full border-4 border-white bg-white last-of-type:ml-0"
        >
          <img
            class="block w-full"
            :src="`https://firebasestorage.googleapis.com/v0/b/fictolab.appspot.com/o/imaginary-orange%2F${avatar}?alt=media`"
            alt=""
          />
        </div>

        <button
          class="relative -mr-5 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-salmon-100 text-salmon-500"
        >
          <PlusIcon />
        </button>
      </section>

      <p class="mt-6 hidden w-6/12 text-base font-medium opacity-70 lg:block">
        Our mentors are published authors, accomplished poets, and seasoned
        screenwriters with a wealth of knowledge and experience in their
        respective fields. They've been where you are and can guide you through
        the intricacies of the craft.
      </p>

      <BaseButton class="mt-4" size="big"> Learn more</BaseButton>
    </div>
  </section>
</template>
