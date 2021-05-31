import MeetupList from '../components/meetups/MeetupList';

const DUMMY_DATA = [
  {
    id: 'm1',
    title: 'This is a first meetup',
    image:
      'https://www.nomadasaurus.com/wp-content/uploads/2019/06/Photos-of-Kyrgyzstan.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
  {
    id: 'm2',
    title: 'This is a second meetup',
    image:
      'https://www.state.gov/wp-content/uploads/2019/04/Kyrgyzstan-2198x1406.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
];

const AllMeetupsPage = () => {
  return (
    <section>
      <h1>All Meetups</h1>
      <ul>
        <MeetupList meetups={DUMMY_DATA} />
      </ul>
    </section>
  );
};

export default AllMeetupsPage;
