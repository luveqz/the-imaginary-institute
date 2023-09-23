<script setup lang="ts">
const courses = [
  {
    id: 1,
    title: 'Creative Writing Fundamentals: Narrative structures',
    coverUrl:
      'https://firebasestorage.googleapis.com/v0/b/fictolab.appspot.com/o/imaginary-orange%2Fcourse-01.png?alt=media',
    teacherName: 'Elizabeth Goldberg',
    description:
      'Start with the basics of storytelling, character development, and plot structure.',
    hours: 2.5,
    lessons: 7,
  },
  {
    id: 2,
    title: 'Poetry Workshop',
    coverUrl:
      'https://firebasestorage.googleapis.com/v0/b/fictolab.appspot.com/o/imaginary-orange%2Fcourse-02.png?alt=media',
    teacherName: 'Tom Castro',
    description:
      'Explore the world of poetry, from traditional forms to contemporary free verse.',
    hours: 6,
    lessons: 16,
  },
  {
    id: 3,
    title: 'Publishing and Marketing',
    coverUrl:
      'https://firebasestorage.googleapis.com/v0/b/fictolab.appspot.com/o/imaginary-orange%2Fcourse-03.png?alt=media',
    teacherName: 'Shaelin Twain',
    description:
      'Get insights into the publishing industry, self-publishing, and marketing your work.',
    hours: 3,
    lessons: 12,
  },
  {
    id: 4,
    title: 'Screenwriting',
    coverUrl:
      'https://firebasestorage.googleapis.com/v0/b/fictolab.appspot.com/o/imaginary-orange%2Fcourse-04.png?alt=media',
    teacherName: 'Jack Roth',
    description:
      'Dive into the art of screenwriting, from crafting dialogue to formatting scripts.',
    hours: 8,
    lessons: 32,
  },
  {
    id: 5,
    title: 'Nonfiction Writing',
    coverUrl:
      'https://firebasestorage.googleapis.com/v0/b/fictolab.appspot.com/o/imaginary-orange%2Fcourse-05.png?alt=media',
    teacherName: 'Mieko Dasai',
    description:
      'Master the art of creative nonfiction, including memoirs, essays, and journalism.',
    hours: 1,
    lessons: 13,
  },
  {
    id: 6,
    title: 'Fundamentals of short story writing',
    coverUrl:
      'https://firebasestorage.googleapis.com/v0/b/fictolab.appspot.com/o/imaginary-orange%2Fcourse-06.png?alt=media',
    teacherName: 'James Haro',
    description:
      'Learn how to craft engaging narratives, develop characters, and build immersive worlds.',
    hours: 2,
    lessons: 4,
  },
]
</script>

<template>
  <div>
    <div class="flex justify-between">
      <HeadingTwo> Popular Courses </HeadingTwo>

      <BaseButton variant="quaternary">View All</BaseButton>
    </div>

    <div class="mt-8 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
      <CourseCard
        v-for="course in courses"
        :key="course.id"
        :title="course.title"
        :description="course.description"
        :teacher-name="course.teacherName"
        :cover-url="course.coverUrl"
        :hours="course.hours"
        :lessons="course.lessons"
      />
    </div>
  </div>
</template>
