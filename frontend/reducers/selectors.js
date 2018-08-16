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
