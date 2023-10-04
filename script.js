var today = dayjs();
console.log(today.format("MMM D, YYYY"));
$("header.hero").text(today.format("MMM D, YYYY"));
console.log("hello")