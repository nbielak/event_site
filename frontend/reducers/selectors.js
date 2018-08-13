export const getCityEvents = ({events, city}) {
  let result = [];
  for (let id in events) {
    if (events[id].city === city ) {
      result.push(events[id])
    }
  }
  return result;
};
