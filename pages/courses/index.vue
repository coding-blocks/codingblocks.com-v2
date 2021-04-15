<template>
  <div>
    <CoursesNavigation :tabs="tabs" :initialTab="initialTab">
      <OnlineCourses slot="body-online" />
      <ClassroomCourses slot="body-classroom" />
      <LiveCourses slot="body-live" />
    </CoursesNavigation>
  </div>
</template>

<script>
import CoursesNavigation from '@/components/courses/CoursesNavigation.vue'
import OnlineCourses from '@/components/courses/OnlineCourses.vue'
import ClassroomCourses from '@/components/courses/ClassroomCourses.vue'
import LiveCourses from '@/components/courses/LiveCourses.vue'

export default {
  data() {
    return {
      initialTab: this.$route.query.type,
      tabs: ['online', 'classroom', 'live'],
    }
  },
  components: {
    CoursesNavigation,
    OnlineCourses,
    ClassroomCourses,
    LiveCourses,
  },
}
</script>
