<template>
  <div>
    <CoursesNavigation :tabs="tabs" :initialTab="initialTab">
      <!-- <template slot="tab-online-courses">Online Courses</template> -->

      <OnlineCourses slot="body-online-courses" />

      <!-- <template slot="tab-classroom-courses">Classroom Courses</template> -->

      <ClassroomCourses slot="body-classroom-courses" />

      <!-- <template slot="tab-live-courses">Live Courses</template> -->

      <LiveCourses slot="body-live-courses" />
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
      initialTab: 'Online Courses',
      tabs: ['Online Courses', 'Classroom Courses', 'Live Courses'],
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
