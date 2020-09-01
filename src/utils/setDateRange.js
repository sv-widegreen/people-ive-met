// set dynamic date range and change date format for input field
let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1;
let yyyy = today.getFullYear();
if (dd < 10) {
  dd = '0' + dd;
}
if (mm < 10) {
  mm = '0' + mm;
}

export const maxDate = yyyy + '-' + mm + '-' + dd;

// only last 14 days selectable
let fortnite = new Date(Date.now() - 12096e5);
let dd14 = fortnite.getDate();
let mm14 = fortnite.getMonth() + 1;
if (dd14 < 10) {
  dd14 = '0' + dd14;
}
if (mm14 < 10) {
  mm14 = '0' + mm14;
}

export const minDate = yyyy + '-' + mm14 + '-' + dd14;
