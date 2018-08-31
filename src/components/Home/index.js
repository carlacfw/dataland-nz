import React from 'react'
import {DropDown} from '..'

export default function Home () {
    return (
      <div>
          <table>
              <tr>  
                <th>Region</th>
                <th>Average Salary</th>
                <th>Estimate Rent</th>
            </tr>


            <tr>
                <td>Auckland</td>
                <td>65k</td>
                <td> 417$ </td>
            </tr>

            <tr>
            <td>Wellington</td>
            <td>65k</td>
            <td> 417$ </td>
            </tr>

            <tr>Canterbury
            <td>65k</td>
            <td> 417$ </td>
            </tr>
          </table>
      </div>
    )
  }