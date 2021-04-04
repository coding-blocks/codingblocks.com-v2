import CoursesRepo from './CoursesRepo'
import HomeRepo from './HomeRepo'
import EventsRepo from './EventsRepo'

export default ($axios, $api) => ({
  home: HomeRepo($axios, $api),
  courses: CoursesRepo($axios, $api),
  events: EventsRepo($axios, $api),
})
