import { useState } from "react";
import Navbar from "../components/Navbar";
import useFetch from "../useFetch";
import { Link } from "react-router-dom";
function formatDate(date) {
  return new Intl.DateTimeFormat("en-IN", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZone: "Asia/Kolkata",
    timeZoneName: "short",
  }).format(new Date(date));
}

const Home = () => {
  const { data, loading, error } = useFetch(
    "https://neo-g-h23o.vercel.app/events"
  );

  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState("All Type");

  if (loading) {
    return <p className="text-center mt-5">Loading...</p>;
  }
  if (error) {
    return (
      <p className="text-center mt-5 text-danger">
        Error: {error.message}
      </p>
    );
  }
  const events = data?.events || [];
  const searchQuery = search.trim().toLowerCase();
  const filteredEvents = events.filter((event) => {
    const matchesType =
      selectedType === "All Type" || event.type === selectedType;
    const matchesSearch =
      event.title?.toLowerCase().includes(searchQuery) ?? false;

    return matchesType && matchesSearch;
  });

  return (
    <div>
      <Navbar search={search} setSearch={setSearch} />

      <div className="container">
        <div className="my-4 d-flex justify-content-between align-items-center">
          
          <div>
            <h1>Meetup Events</h1>
            <p className="text-muted">
              Discover upcoming events
            </p>
          </div>

          <div>
            <select
              className="form-select"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="All Type">All Type</option>
              <option value="Online Event">Online Event</option>
              <option value="Offline Event">Offline Event</option>
            </select>
          </div>

        </div>

        
        <div className="row g-4">

          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <div key={event._id} className="col-md-4">


                <Link to={`/events/${event._id}`} className="text-decoration-none text-dark">
                <div className="card h-100 shadow-sm">
                  <div className="position-relative">

                    <img
                      src={event.imageUrl}
                      alt={event.title}
                      className="card-img-top"
                      style={{
                        height: "220px",
                        objectFit: "cover",
                      }}
                    />

                    <span className="badge bg-light text-dark position-absolute top-0 start-0 m-2 p-2">
                      {event.type}
                    </span>

                  </div>

                 
                  <div className="card-body">

                    <p className="text-muted mb-2">
                      {formatDate(event.startDate)}
                    </p>

                    <h3 className="card-title fs-4">
                      {event.title}
                    </h3>

                    <p className="text-muted mb-2">
                      📍 {event.locationName}
                    </p>

                    <p className="fw-bold">
                      {event.price === 0
                        ? "Free"
                        : `₹${event.price}`}
                    </p>

                  </div>

                </div>
                </Link>

              </div>
            ))
          ) : (
            <div className="text-center mt-5">
              <h4>No events found</h4>
              <p className="text-muted">
                Try a different search term or event type.
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Home;
