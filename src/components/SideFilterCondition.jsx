
import { useState, useEffect } from 'react'


function SideFilterCondition() {
  const [radioBTN, setRadioBTN] = useState("")

  useEffect(() => { 
    console.log(radioBTN)
  }, [radioBTN])
  
  function setSelectedFilter(e) { 
    let copyRadioBtn = radioBTN
    copyRadioBtn = e.target.value;
    setRadioBTN(copyRadioBtn)
  }

  return (
    <div className="condition-container">
      <h4>Condition</h4>

      <div className='contition-filter'>
              <input type="radio" name='condition' value="any" onClick={(e) => {setSelectedFilter(e) }}/>
              <label htmlFor="">Any</label><br />
              
              <input type="radio"  name='condition' value="refurbished"  onClick={(e) => {setSelectedFilter(e) }}/>
              <label htmlFor="">Refurbished</label><br />
              
              <input type="radio" name='condition' value="brand_new"  onClick={(e) => {setSelectedFilter(e) }}/>
              <label htmlFor="">Brand new</label><br />
        
              <input type="radio"  name='condition' value="old_items"  onClick={(e) => {setSelectedFilter(e) }}/>
              <label htmlFor="">Old items</label>
      </div>
   </div>
  )
}

export default SideFilterCondition