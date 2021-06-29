var bookedSeatCount = document.querySelector(".booked-seats-count");
var availableSeatCount = document.querySelector(".available-seats-count");
var booked = 0;
var available = 36;
const blocks = document.querySelectorAll(".blocks");

blocks.forEach((block) => {
    block.addEventListener("click", (e) => {
        if (e.target.classList.contains("booked")) {
            e.target.classList.remove("booked");
            booked--;
            available++;
            bookedSeatCount.innerHTML = `${booked}`;
            availableSeatCount.innerHTML = `${available}`;
        }else {
            e.target.classList.add("booked");
            booked++;
            available--;
            bookedSeatCount.innerHTML = `${booked}`;
            availableSeatCount.innerHTML = `${available}`;
        }
    })
})