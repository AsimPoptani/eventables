import fetchival from 'fetchival';

const eventbriteApi =
  'https://www.eventbriteapi.com/v3/events/search/?token=VBUSKKCQ2VTXKPOP34PX';

export const fetchEventData = () => {
  return new Promise((resolve,reject)=>
  {
  fetchival(eventbriteApi)
    .get()
    .then(json => {
      resolve(json.events[0]);
    })
    .catch(err => {
      reject(err);
    });
});
}
