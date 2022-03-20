import React from 'react'
import './skills.scss'
export default function Skills() {
  return (
      <div className="portfolio" id="portfolio">
          <h1>Skills</h1>
          <div className='languages'>
              <div className='language'>
                  <img src="assets/js.png" alt="" />
                  <p>JavaScript (ES6/ES7)</p>
            </div>
              <div className='language'>
                  <img src="assets/react.png" alt="" />
                  <p>React js</p>
            </div>
              <div className='language'>
                  <img src="assets/redux.jpg" alt="" />
                  <p>Redux</p>
            </div>
              <div className='language'>
                  <img src="assets/node.png" alt="" />
                  <p>Node js</p>
            </div>
              <div className='language'>
                  <img src="assets/express.png" alt="" />
                  <p>Express js</p>
            </div>
          </div>
          <div className='languages'>
              <div className='language'>
                  <img src="assets/mongo.jpg" alt="" />
                  <p>MongoDB Database</p>
            </div>
              <div className='language'>
                  <img src="assets/firebase.png" alt="" />
                  <p>Firebase Database</p>
            </div>
              <div className='language'>
                  <img src="assets/mysql.png" alt="" />
                  <p>MySql Database</p>
            </div>
              <div className='language'>
                  <img src="assets/php.png" alt="" />
                  <p>PHP</p>
            </div>
              <div className='language'>
                  <img src="assets/word.png" alt="" />
                  <p>Wordpress Customization</p>
            </div>
          </div>
          <div className='languages'>
              <div className='language'>
                  <img src="assets/html.png" alt="" />
                  <p>HTML 5</p>
            </div>
              <div className='language'>
                  <img src="assets/css.png" alt="" />
                  <p>CSS 3</p>
            </div>
              <div className='language'>
                  <img src="assets/bootstrap.png" alt="" />
                  <p>Bootstrap 4/5</p>
            </div>
          </div>
          
    </div>
  )
}
