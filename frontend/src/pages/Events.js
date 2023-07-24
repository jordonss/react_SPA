import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "some title",
  },
  { id: "e2", title: "some title two" },
];

function EventsPage() {
  return (
    <>
      <h1>Event Page</h1>
			<ul>
				{DUMMY_EVENTS.map(event => <li key={event.id}><Link to={event.id}>{event.title}</Link></li>)}
			</ul>
    </>
  );
}

export default EventsPage;
