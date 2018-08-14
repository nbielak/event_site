export const getCityEvents = ({events, city}) => {
  let result = [];
  Object.keys(events).forEach(id => {
    if (events[id].city === city ) {
      result.push(events[id]);
    }
  })
  return result;
};
