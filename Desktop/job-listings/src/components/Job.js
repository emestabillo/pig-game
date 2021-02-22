import React from 'react';
import { jobs } from '../data'

function Job(props) {
  // return (
  //   <div>
  //     {props.new ? <h4>New</h4> : <h4></h4>}
  //     <img src={props.logo} alt="company logo" />
  //     <div className="info">
  //       <h2>{props.position}</h2>
  //     </div>


  //   </div>
  // )

  return (
    <main>
      {jobs.map((job) => {
         const {id, logo, company, position, postedAt, contract, location} = job
        return (
          <article key={id}>
            <img src={logo} alt="company logo"/>
         {props.new ? <h4>New</h4> : ''}
            <p>{company}</p>
            <h2>{position}</h2>
            <p>{postedAt}, {contract}, {location}</p>
          </article>
        )
      })}
    </main>
  )
}

export default Job;