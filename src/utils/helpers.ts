import moment from 'moment'

export const truncateString = (word: string) => {
  return word?.length > 20 ? word?.substring(0, 20).concat('...') : word
}

export const formatDate = (date: string) => {
  const splittedDate = date.split('-')
  const newDate = new Date(
    parseInt(splittedDate[0]),
    parseInt(splittedDate[1]) - 1,
    parseInt(splittedDate[2]),
  )
  return moment(newDate).format('ddd, MMM  YY')
}

export const formatTime = (time: string) => {
  let AM_PM = ''
  const [hours, minutes, seconds] = time.split(':')

  AM_PM = parseInt(hours) > 12 ? 'PM' : 'AM'
  let convertedHour = parseInt(hours) % 12

  return `${convertedHour}:${minutes} ${AM_PM}`
}

export function compareValues(key: string, order = 'asc') {
  return function innerSort(a: any, b: any) {
    if(key === 'sent_dt'){
      const varA = a[key].split('-').map((item: string) => parseInt(item)).reduce((acc: number, val: number) => acc + val )
      const varB = b[key].split('-').map((item: string) => parseInt(item)).reduce((acc: number, val: number) => acc + val )

      let comparison = 0
      if (varA > varB) {
        comparison = 1
      } else if (varA < varB) {
        comparison = -1
      }
      return order === 'desc' ? comparison * -1 : comparison

    }
    if (key === 'subject') {
      const varA = a[key].title
      const varB = b[key].title
      let comparison = 0
      if (varA > varB) {
        comparison = 1
      } else if (varA < varB) {
        comparison = -1
      }
      return order === 'desc' ? comparison * -1 : comparison
    }
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      return 0
    }

    const varA = a[key]
    const varB = b[key]

    let comparison = 0
    if (varA > varB) {
      comparison = 1
    } else if (varA < varB) {
      comparison = -1
    }
    return order === 'desc' ? comparison * -1 : comparison
  }
}
