import {Link} from "react-router-dom"
const Navbar = ({ search = "", setSearch }) => {
    return (
        <div>
             <nav className="d-flex bg-dark flex-column flex-md-row gap-3 justify-content-between align-items-md-center py-3 border-bottom">
      <Link to="/" className="brand text-decoration-none mx-3 m-3">Meetup</Link>
      <div className="d-flex gap-2 ms-md-auto  mx-3">
        
          <input
            type="search"
            className="form-control search-box"
            placeholder="Search by title"
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