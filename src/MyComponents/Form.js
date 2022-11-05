import React,{ useCallback,useState} from 'react'
import axios from 'axios'

 axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
 axios.defaults.xsrfCookieName = 'csrftoken';

axios.defaults.withCredentials = true;
    

function Form() {
    const [floor_no,setFloor_no] = useState(" ");
    const [distance,setDistance]=useState(null);
    const [location,setLocation]=useState(" ");
    const [area,setArea]=useState(null);
    const [no_of_rooms,setNo_of_rooms]=useState(null);
    const [price,setPrice]=useState(null);
    const [property_type,setProperty_type]=useState("house");
    
   

  
    const triggerAPI = useCallback(async () => {
      // Use async await instead of chained promise
      const res = await axios.post("http://localhost:8000/", { 
        floor_no: floor_no,
        distance: distance,
        location: location,
        area: area,
        no_of_rooms:no_of_rooms,
        price:price,
        property_type:property_type,
      
      
    
    });
      console.log(res)
    }, [floor_no,distance,location,area, no_of_rooms,price,property_type]);
  
    const handleSubmit = useCallback((e) => {
      e.preventDefault()
      triggerAPI();
    }, [triggerAPI])
  
    const handleChange = useCallback((event) => {
      setFloor_no(event.target.value);
    
    }, []);
    const handleArea=useCallback((event)=>{
        setArea(event.target.value);
    },[]);
    const handleDistance=useCallback((event)=>{
        setDistance(event.target.value);
    },[]);
    const handleLocation=useCallback((event)=>{
        setLocation(event.target.value);
    },[]);
    const handleNo_of_rooms=useCallback((event)=>{
        setNo_of_rooms(event.target.value);
    },[]);
    const handlePrice=useCallback((event)=>{
        setPrice(event.target.value);
    },[]);
    const handleProperty_type=useCallback((event)=>{
      setProperty_type(event.target.value);
  },[]);
  
    
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Floor_no:
            <input type="text" value={floor_no} name="floor_no" onChange={handleChange} />
          </label>
          <label>
            Distance:
            <input type="number" value={distance} name="distance" onChange={handleDistance} />
          </label>
          <label>
            Location:
            <input type="text" value={location} name="location" onChange={handleLocation} />
          </label>
          <label>
            Area:
            <input type="number" value={area} name="area" onChange={handleArea} />
          </label>
          <label>
          No_of_rooms:
            <input type="number" value={no_of_rooms} name="no_of_rooms" onChange={handleNo_of_rooms} />
          </label>
          <label>
            Price:
            <input type="number" value={price} name="price" onChange={handlePrice} />
          </label>
          <label>
          Property_type:
          <select onChange={handleProperty_type}  value={property_type} >
          <option name="House">House</option>
           <option name="Room">Room</option>
            <option name="Hostel">Hostel</option>
            <option name="Flat">Flat</option>
</select>
</label>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
  
  export default Form;