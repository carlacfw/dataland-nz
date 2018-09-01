import React from 'react'
import {DropDownStyled} from './DropDownStyle'


export default function DropDown () {
  return (
  //const data = DB.occupation_income_2013_ICT.json

  // let northland_50000 = data['Northland']['$50,001 or More']['Total People']


  <div>
    <form>
  <label>
  Please Enter Type a Job:
    <input type="text" name="name" />
    </label>
        
        <input type="submit" value="Show Results" />
      </form>
  </div>
  )
  
}