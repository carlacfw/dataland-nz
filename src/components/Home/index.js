import React from 'react'
import {DropDown} from '..'

export default function Home () {
    return (
          <div className="container">
      <table id="dt-table" class="display cell-border">
        <thead>
          <tr>
            <th>Country</th>
            <th>Population (2018)</th>
            <th>Density (P/Km²)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>China</td>
            <td>1,415,045,928</td>
            <td>151</td>
          </tr>
          <tr>
            <td>India</td>
            <td>1,354,051,854</td>
            <td>455</td>
          </tr>
          <tr>
            <td>U.S.</td>
            <td>326,766,748</td>
            <td>36</td>
          </tr>
          <tr>
            <td>Brazil</td>
            <td>210,867,954</td>
            <td>25</td>
          </tr>
          <tr>
            <td>Pakistan</td>
            <td>200,813,818</td>
            <td>260</td>
          </tr>
          <tr>
            <td>Bangladesh</td>
            <td>166,368,149</td>
            <td>1,278</td>
          </tr>
          </tbody>
          </table>
      </div>

    )
  }