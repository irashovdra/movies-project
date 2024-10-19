import { getTickets } from "./api/getTickets";
const ticketsList = document.querySelector(".tickets__list");

getTickets()
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    ticketsList.innerHTML = data;
  });
