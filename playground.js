const meetup = { id: 'm1', image: 'image', title: 'title', address: 'address', description: 'description'};
const meetupArray = [meetup];

console.log(meetupArray);
console.log({...[meetupArray]});
/*
{
  '0': [
    {
      id: 'm1',
      image: 'image',
      title: 'title',
      address: 'address',
      description: 'description'
    }
  ]
}
*/

const test = meetupArray.reduce((sum, current) => (current));
// meetup, not undefined
console.log(test);
/*
{
  id: 'm1',
  image: 'image',
  title: 'title',
  address: 'address',
  description: 'description'
}
*/

const find = meetupArray.find((meetup) => meetup.id === 'm1');
// meetup | undefined
console.log(find);