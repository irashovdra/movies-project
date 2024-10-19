export const createTicket = ({
  eventImage,
  eventName,
  eventDate,
  eventVenue,
}) => {
  return `<li class="ticket-card">
            <div class="ticket-card__image-wrapper">
              <img src="${eventImage}" alt="${eventName}" class="ticket-card__image">
            </div>
            <div class="ticket-card__details">
              <h3 class="ticket-card__title">${eventName}</h3>
              <p class="ticket-card__date">${eventDate}</p>
              <p class="ticket-card__venue">${eventVenue}</p>
            </div>
          </li>`;
};
