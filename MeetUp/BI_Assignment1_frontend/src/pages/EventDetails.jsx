
import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import Navbar from "../components/Navbar";

function formatDate(date) {
  if (!date) return "Date not available";

  const parsedDate = new Date(date);

  return new Intl.DateTimeFormat("en-IN", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZone: "Asia/Kolkata",
  }).format(parsedDate);
}

const EventDetails = () => {
  const { eventId } = useParams();

  const { data, loading, error } = useFetch(
    "http://localhost:3000/events"
  );

  if (loading) {
    return (
      <div className="container mt-5 text-center">
       Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger">
          Error: {error.message}
        </div>
      </div>
    );
  }

  const event = data?.events?.find(
    (e) => e._id === eventId
  );

  if (!event) {
    return (
      <>
        <Navbar />

        <div className="container my-5">
          <div className="alert alert-warning text-center">
            <h4 className="alert-heading">Event not found</h4>
            <p className="mb-0">
              The event you are looking for does not exist.
            </p>
          </div>
        </div>
      </>
    );
  }

  return (
    <div>
      <Navbar />

      <main className="container my-5">

        {/* Main Event Section */}
        <div className="row g-5">

          {/* LEFT COLUMN */}
          <div className="col-lg-7">

            {/* Event Type */}
            <span className="badge bg-danger mb-3">
              {event.type}
            </span>

            {/* Title */}
            <h1 className="fw-bold mb-3">
              {event.title}
            </h1>

            {/* Host */}
            <p className="text-muted mb-4">
              Hosted By:
              <br />
              <strong className="text-dark">
                {event.host}
              </strong>
            </p>

            {/* Event Image */}
            <img
              src={event.imageUrl}
              alt={event.title}
              className="img-fluid rounded-3 shadow-sm w-100 mb-4"
              style={{
                height: "400px",
                objectFit: "cover",
              }}
            />

            {/* Description */}
            <h4 className="fw-bold mb-3">
              Details
            </h4>

            <p className="text-secondary lh-lg">
              {event.description}
            </p>

            <hr className="my-4" />

            {/* Additional Information */}
            <h4 className="fw-bold mb-3">
              Additional Information
            </h4>

            <div className="row">

              <div className="col-md-6 mb-3">
                <div className="card h-100 border-0 bg-light">
                  <div className="card-body">
                    <h6 className="fw-bold">
                      Dress Code
                    </h6>

                    <p className="mb-0 text-muted">
                      {event.dressCode || "Not specified"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mb-3">
                <div className="card h-100 border-0 bg-light">
                  <div className="card-body">
                    <h6 className="fw-bold">
                      Age Restriction
                    </h6>

                    <p className="mb-0 text-muted">
                      {event.ageRestriction || "None"}
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Tags */}
            <h4 className="fw-bold mt-4 mb-3">
              Event Tags
            </h4>

            <div className="d-flex flex-wrap gap-2">
              {event.tags?.map((tag) => (
                <span
                  className="badge bg-danger-subtle text-danger p-2"
                  key={tag}
                >
                  #{tag}
                </span>
              ))}
            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="col-lg-5">

            {/* Event Information Card */}
            <div className="card shadow-sm border-0 mb-4">

              <div className="card-body p-4">

                {/* Date */}
                <div className="d-flex mb-4">
                  <div className="fs-4 me-3">
                    🕒
                  </div>

                  <div>
                    <h6 className="fw-bold mb-1">
                      Date & Time
                    </h6>

                    <p className="mb-1 text-muted">
                      {formatDate(event.startDate)}
                    </p>

                    <p className="mb-0 text-muted">
                      to {formatDate(event.endDate)}
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="d-flex mb-4">
                  <div className="fs-4 me-3">
                    📍
                  </div>

                  <div>
                    <h6 className="fw-bold mb-1">
                      Location
                    </h6>

                    <p className="mb-1">
                      {event.locationName || event.type}
                    </p>

                    <p className="mb-0 text-muted">
                      {event.address}
                    </p>
                  </div>
                </div>

                {/* Price */}
                <div className="d-flex">
                  <div className="fs-4 me-3">
                    💰
                  </div>

                  <div>
                    <h6 className="fw-bold mb-1">
                      Price
                    </h6>

                    <p className="mb-0 fs-5 fw-bold text-danger">
                      {event.price === 0
                        ? "Free"
                        : `₹ ${event.price?.toLocaleString(
                            "en-IN"
                          )}`}
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Speakers */}
            <h4 className="fw-bold mb-3">
              Speakers ({event.speakers?.length || 0})
            </h4>

            <div className="row g-3">

              {event.speakers?.map((speaker) => (
                <div
                  className="col-sm-6"
                  key={`${speaker.name}-${speaker.role}`}
                >

                  <div className="card h-100 shadow-sm border-0">

                    <div className="card-body text-center">

                      <img
                        src={
                          speaker.imageUrl ||
                          "https://i.pravatar.cc/150"
                        }
                        alt={speaker.name}
                        className="rounded-circle mb-3"
                        width="80"
                        height="80"
                        style={{
                          objectFit: "cover",
                        }}
                      />

                      <h6 className="fw-bold mb-1">
                        {speaker.name}
                      </h6>

                      <small className="text-muted">
                        {speaker.role}
                      </small>

                    </div>

                  </div>

                </div>
              ))}

            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default EventDetails;

