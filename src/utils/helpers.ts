import moment from 'moment';

export const truncateString = (word:string) => {
    return word?.length > 20 ? word?.substring(0,20).concat('...') : word
}


export const formatDate = (date: string) => {
    const splittedDate = date.split('-');
    const newDate = new Date(parseInt(splittedDate[0]), parseInt(splittedDate[1]) - 1, parseInt(splittedDate[2]));
    return moment(newDate).format("ddd, MMM  YY");   

}

export const formatTime = (time: string) => {
    let AM_PM = '';
    const [hours, minutes, seconds] = time.split(':');

    AM_PM = parseInt(hours) > 12 ? 'PM' : 'AM'
    let convertedHour = parseInt(hours) % 12

    return `${convertedHour}:${minutes} ${AM_PM}`
}