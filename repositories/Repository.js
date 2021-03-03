import CoursesRepo from './CoursesRepo'
import HomeRepo from './HomeRepo'

export default ($axios, $api) => ({
  home: HomeRepo($axios, $api),
  courses: CoursesRepo($api),
})