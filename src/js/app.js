import { getTickets } from "./api/getTickets";
import { createTicket } from "./layout/createTicket";

const ticketsList = document.querySelector(".tickets__list");

getTickets()
  .then((data) => {
    console.log("Fetched Data:", data); // Log the entire data for inspection

    // Check if the data structure contains the expected properties
    if (data?._embedded?.events) {
      const events = data._embedded.events;
      ticketsList.innerHTML = events
        .map((event) => {
          console.log("Event Data:", event); // Log each event's data

          const eventImage = event.images?.[0]?.url || "default-image-url.jpg"; // Fallback
          const eventName = event.name || "No Event Name";
          const eventDate = event.dates?.start?.localDate || "No Date"; // Check existence
          const eventVenue = event._embedded?.venues?.[0]?.name || "No Venue"; // Check existence

          return createTicket({
            eventImage,
            eventName,
            eventDate,
            eventVenue,
          });
        })
        .join("");
    } else {
      console.warn("No events found or data structure is incorrect.", data);
      ticketsList.innerHTML = "<p>No events found.</p>";
    }
  })
  .catch((error) => {
    console.error("Error fetching tickets:", error);
    ticketsList.innerHTML = "<p>Failed to load events.</p>";
  });
