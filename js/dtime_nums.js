function dtime_nums(offset) {
    const date = new Date();
    date.setDate(date.getDate() - offset);
    document.write(date.toLocaleDateString());
}
// document.addEventListener("DOMContentLoaded", function () {
//     function dtime_nums(offset) {
//         const date = new Date();
//         date.setDate(date.getDate() - offset);
//         return date.toLocaleDateString();
//     }
// });

// document.addEventListener("DOMContentLoaded", function () {
//     const dateElement = document.querySelector(".comment__date");
//     if (dateElement) {
//         const randomOffset = Math.floor(Math.random() * 91);

//         dateElement.textContent = dtime_nums(randomOffset);
//     }
// });
