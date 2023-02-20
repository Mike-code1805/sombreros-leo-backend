function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}
console.log('data');
console.log(getAge('2017-06-07T14:34:08.700Z'));
console.log(Date.parse(new Date('2000/01/01 00:00:10')));

function isDate(dateStr) {
  return !isNaN(new Date(dateStr).getDate());
}

