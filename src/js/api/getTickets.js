export const getTickets = () => {
  return fetch(
    "https://app.ticketmaster.com/discovery/v2/events.json?apikey=Jg7o3tD8hioRQqQCvzEmn8hsX9ftNiZq"
  )
};
