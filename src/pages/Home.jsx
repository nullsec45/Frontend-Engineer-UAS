import React,{useState} from "react"

import { 
  Navbar,
  Hero,
  Indonesia,
  Province,
  Form,
  Footer
} 
from '../components'
import data from "../utils/data/province";


const Home = () => {
  const [provinces, setProvinces] = useState(data.provinces);

  const handleSubmit = ({ status, total, provinceInput }) => {
    const covid = status.toLowerCase();

    const newProvince = {
      name: provinceInput,
      [covid]: total,
    };
  
    
    const updatedProvinces = provinces.map((province) => {
      if (province.name === provinceInput) {
        return { ...province, ...newProvince }; 
      }

      return province;
    });
  
    setProvinces(updatedProvinces);
  };

  return (
    <div>
        <Indonesia />
        <Province data={provinces} />
        <Form data={provinces} onSubmit={(res) => handleSubmit(res)} />
        <Footer />
    </div>
  )
}

export default Home