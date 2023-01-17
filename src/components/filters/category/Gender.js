import React from 'react'
import FilterBTN from '../FilterBTN';

const Gender = ({setPageNumber,setGender}) => {
  const genders = ['Female','Male','Genderless','Unknown'];
  return (
    <div>
      <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
              Gender
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body d-flex flex-wrap gap-3">
                {
                  genders.map((item,index)=>{
                    return <FilterBTN key={index} setPageNumber={setPageNumber} task={setGender} name="gender" index={index} item={item}/>
                  })
                }
            </div>
          </div>
        </div>
    </div>
  )
}

export default Gender
