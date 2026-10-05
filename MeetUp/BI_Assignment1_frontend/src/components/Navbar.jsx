import {Link} from "react-router-dom"
const Navbar = ({ search = "", setSearch }) => {
    return (
        <div>
             <nav className="d-flex bg-light flex-column flex-md-row gap-3 justify-content-between align-items-md-center py-3 border-bottom">
      <Link to="/" className="brand text-decoration-none mx-3 m-3">
      <img src="/favicon.svg" alt="Meetup" width="150" height="46" />
      </Link>
      <div className="d-flex gap-2 ms-md-auto  mx-3">
        
          <input
            type="search"
            className="form-control search-box"
            placeholder="Search by title and tags"
            aria-label="Search events by title"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        
      </div>
    </nav>
        </div>
    )
}

export default Navbar