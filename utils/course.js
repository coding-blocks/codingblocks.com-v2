const propEq = (key, val) => obj => obj[key] === val

export const topRunForCourse = (course) => {
  const activeRuns = course['active-runs']
  const allRuns = course.runs

  let runs = activeRuns && activeRuns.length ? activeRuns : allRuns
  
  if (!runs.length) {
    return (void 0)
  }
  
  runs = Array.from(runs) // ensure we don't modify runs here to keep things deterministic
  
  const runsSortedByStart = runs.sort((r1, r2) => r2.start - r1.start) // sort in desc order of start

  const latestPremium = runsSortedByStart.find(propEq('tier', 'PREMIUM'))
  const latestLive = runsSortedByStart.find(propEq('tier', 'LIVE'))
  const cheapest = runsSortedByStart.reduce((acc, run) => run.price < acc.price ? run : acc)

  return latestPremium || latestLive || cheapest
}

export const freeTrialRunForCourse = (course) => {
  const activeRuns = course['active-runs']
  const allRuns = course.runs

  let runs = activeRuns && activeRuns.length ? activeRuns : allRuns
  
  if (!runs.length) {
    return (void 0)
  }
  
  runs = Array.from(runs) // ensure we don't modify runs here to keep things deterministic

  const runsSortedByStart = runs.sort((r1, r2) => r1.start - r2.start)
  
  const earliestLite = runsSortedByStart.find(propEq('tier', 'LITE'))
  const earliestPremium = runsSortedByStart.find(propEq('tier', 'PREMIUM'))
  const cheapest = runsSortedByStart.reduce((acc, run) => run.price < acc.price ? run : acc)

  return earliestLite || earliestPremium || cheapest
}

export const textForDifficulty = (difficulty) =>
  !isNaN(+difficulty) && ['Beginner', 'Medium', 'Advanced'][+difficulty]


export const formatContentDuration = function (duration) {
	if(isNaN(duration) || duration == 0){
			return "--";
  }
  const hours = Math.floor(duration / (60 * 60 * 1000))
  const mins = Math.floor(duration / (60 * 1000))

  return hours >= 1 ? `${hours}hrs` : `${mins}mins`
}