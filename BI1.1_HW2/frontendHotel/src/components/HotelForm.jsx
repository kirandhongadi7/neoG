import { useState } from "react";

const HotelForm = () => {
  const [hotel, setHotel] = useState({
    name: "",
    category: "",
    location: "",
    rating: "",
    website: "",
    phoneNumber: "",
    checkInTime: "",
    checkOutTime: "",
    amenities: "",
    priceRange: "",
    reservationsNeeded: false,
    isParkingAvailable: false,
    isWifiAvailable: false,
    isPoolAvailable: false,
    isSpaAvailable: false,
    isRestaurantAvailable: false,
    photos: "",
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setHotel((prevHotel) => ({
      ...prevHotel,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const hotelData = {
      ...hotel,
      rating: Number(hotel.rating),
      category: [hotel.category],
      amenities: hotel.amenities
        .split(",")
        .map((item) => item.trim()),
      photos: hotel.photos
        .split(",")
        .map((item) => item.trim()),
    };

   

    try{
        const response = await fetch("https://neo-g.vercel.app/hotels", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(hotelData),
    });
    const data = await response.json();
    if(response.ok && data){
        alert("Successfully Added, Please Reload")
    }else{
        alert(data.message || "All Fields Are Required" )
    }

    
    console.log(data);
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  }

  return (
    <div>
      <h1>Add New Hotel</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            name="name"
            id="name"
            value={hotel.name}
            onChange={handleChange}
          />
        </label>
        <br />
   
        <label htmlFor="category">
          Category:
          <select
            name="category"
            id="category"
            value={hotel.category}
            onChange={handleChange}
          >
            <option value="">Select Category</option>
            <option value="Budget">Budget</option>
            <option value="Mid-Range">Mid-Range</option>
            <option value="Luxury">Luxury</option>
            <option value="Boutique">Boutique</option>
            <option value="Resort">Resort</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <br />
        <label htmlFor="location">
          Location:
          <input
            type="text"
            name="location"
            id="location"
            value={hotel.location}
            onChange={handleChange}
          />
        </label>
        <br />
        <label htmlFor="rating">
          Rating:
          <input
            type="number"
            name="rating"
            id="rating"
            min="0"
            max="5"
            value={hotel.rating}
            onChange={handleChange}
          />
        </label>

        <br />
        <label htmlFor="website">
          Website:
          <input
            type="text"
            name="website"
            id="website"
            value={hotel.website}
            onChange={handleChange}
          />
        </label>

        <br />
        <label htmlFor="phoneNumber">
          Phone Number:
          <input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            value={hotel.phoneNumber}
            onChange={handleChange}
          />
        </label>

        <br />

        <label htmlFor="checkInTime">
          Check In Time:
          <input
            type="text"
            name="checkInTime"
            id="checkInTime"
            value={hotel.checkInTime}
            onChange={handleChange}
          />
        </label>

        <br />

        <label htmlFor="checkOutTime">
          Check Out Time:
          <input
            type="text"
            name="checkOutTime"
            id="checkOutTime"
            value={hotel.checkOutTime}
            onChange={handleChange}
          />
        </label>

        <br />

        <label htmlFor="amenities">
          Amenities:
          <input
            type="text"
            name="amenities"
            id="amenities"
            placeholder="WiFi, Gym, Parking"
            value={hotel.amenities}
            onChange={handleChange}
          />
        </label>

        <br />

        <label htmlFor="priceRange">
          Price Range:
          <select
            name="priceRange"
            id="priceRange"
            value={hotel.priceRange}
            onChange={handleChange}
          >
            <option value="">Select Price Range</option>
            <option value="$$ (11-30)">$$ (11-30)</option>
            <option value="$$$ (31-60)">$$$ (31-60)</option>
            <option value="$$$$ (61+)">$$$$ (61+)</option>
            <option value="Other">Other</option>
          </select>
        </label>

        <br />

        <label>
          <input
            type="checkbox"
            name="reservationsNeeded"
            checked={hotel.reservationsNeeded}
            onChange={handleChange}
          />
          Reservations Needed
        </label>

        <br />

        <label>
          <input
            type="checkbox"
            name="isParkingAvailable"
            checked={hotel.isParkingAvailable}
            onChange={handleChange}
          />
          Parking Available
        </label>

        <br />

        <label>
          <input
            type="checkbox"
            name="isWifiAvailable"
            checked={hotel.isWifiAvailable}
            onChange={handleChange}
          />
          WiFi Available
        </label>

        <br />

        <label>
          <input
            type="checkbox"
            name="isPoolAvailable"
            checked={hotel.isPoolAvailable}
            onChange={handleChange}
          />
          Pool Available
        </label>

        <br />

        <label>
          <input
            type="checkbox"
            name="isSpaAvailable"
            checked={hotel.isSpaAvailable}
            onChange={handleChange}
          />
          Spa Available
        </label>

        <br />

        <label>
          <input
            type="checkbox"
            name="isRestaurantAvailable"
            checked={hotel.isRestaurantAvailable}
            onChange={handleChange}
          />
          Restaurant Available
        </label>

        <br />

        <label htmlFor="photos">
          Photos:
          <input
            type="text"
            name="photos"
            id="photos"
            placeholder="url1, url2, url3"
            value={hotel.photos}
            onChange={handleChange}
          />
        </label>

        <br />

        <button type="submit">Add Hotel</button>
      </form>
    </div>
  );
};

export default HotelForm;