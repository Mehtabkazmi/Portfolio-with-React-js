import React from 'react'
import './skills.scss';
import {Languages} from "../../data";
export default function Skills() {
  return (
      <div className="portfolio" id="portfolio">
          <h1>Skills</h1>
      <div className='languages'>
        {Languages.map((item) => (
              <div key={item.id} className='language'>
                  <img src={item.image} alt="" />
                <p>{item.name}</p>
            </div>
        ))}
          </div>
    </div>
  )
}
