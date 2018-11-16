export const getSplashCityEvents = ({events, city}) => {
  let result = [];
  Object.keys(events).forEach(id => {
    if (events[id].city === city && result.length < 15) {
      result.push(events[id]);
    }
  })
  return result;
};

export const getUserEvents = ({events, currentUserId}) => {
  let result = [];
  Object.keys(events).forEach(id =>{
    if (events[id].userId === currentUserId) {
      result.push(events[id])
    }
  })

  return result;
};

export const getEventTickets = ({ tickets, eventId }) => {
  const ticketIds = Object.keys(tickets);
  for (let i = 0; i < ticketIds.length; i++) {
    let currTicket = ticketIds[i];
    if (tickets[currTicket].eventId === eventId) {
      return ticketIds[currTicket];
    }
  }
} 

export const categoryObjectBuilder = ({categories}) => {
  let result = {};
  let categoryIds = Object.keys(categories);

  categoryIds.forEach(categoryId => {
    let category = categories[categoryId];
    result[category.name] = category;
  })
  return result;
}

