import HomeRepo from './HomeRepo'

export default ($axios) => ({
  home: HomeRepo($axios),
})