import { format } from 'date-fns'

export const formatTimestamp = (timestampInSec, formatString = 'dd MMM, ccc') =>
  format(new Date(timestampInSec * 1000), formatString)

export const getDate = (timestampInSec, formatString = 'dd') =>
  format(new Date(timestampInSec * 1000), formatString)

export const getMonth = (timestampInSec, formatString = 'MMM') =>
  format(new Date(timestampInSec * 1000), formatString)

export const formatMonthFromTimestamp = (timestampInSec) =>
  formatTimestamp(timestampInSec, 'MMM yy')

export const formatDate = (date, formatString = 'dd MMM, ccc') =>
  format(new Date(timestampInSec * 1000), formatString)
