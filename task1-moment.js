// const format = 'YYYY-MMM-DD HH:mm'
// const date = {
//     // year:2011,
//     // day:0,
//     // month: 1,
//     // h:11,
//     // m:42
// }
// moment.locale('ru')
// console.log(moment().set(date).format(format));
// moment.locale('en')
// console.log(moment().set(date).format(format));
// moment.locale('br')
// console.log(moment().set(date).format(format));

moment.locale('ru')
const m = moment();
const format = 'YYYY-MMM-DD-dddd HH:mm'
console.log(m.format(format));