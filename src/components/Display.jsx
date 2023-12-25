import React from 'react'

function Display({data}) {
    // console.log(ele);
  return (
    <>
    <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{data.money}</h5>
            <h6 className="card-price text-center">${data.doller}<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li className={data.isuser?"":"text-muted"}><span className="fa-li"><i className={data.isuser?"fas fa-check":"fas fa-times"}></i></span>{data.user!=="single user"?<b>{data.user}</b>:<>{data.user}</>}</li>
              <li className={data.isstorage?"":"text-muted"}><span className="fa-li"><i className={data.isstorage?"fas fa-check":"fas fa-times"}></i></span>{data.storage}</li>
              <li className={data.isproject?"":"text-muted"}><span className="fa-li"><i className={data.isproject?"fas fa-check":"fas fa-times"}></i></span>{data.project}</li>
              <li className={data.isaccess?"":"text-muted"}><span className="fa-li"><i className={data.isaccess?"fas fa-check":"fas fa-times"}></i></span>{data.access}</li>
              <li className={data.isprojects?"":"text-muted"}><span className="fa-li"><i className={data.isprojects?"fas fa-check":"fas fa-times"}></i></span>{data.projects}</li>
              <li className={data.issubdomain?"":"text-muted"}><span className="fa-li"><i className={data.issubdomain?"fas fa-check":"fas fa-times"}></i></span>{data.user!=="PRO"?<><b>unlimitated</b>  {data.subdomain}</>:data.subdomain}</li>
              <li className={data.ispublic?"":"text-muted"}><span className="fa-li"><i className={data.ispublic?"fas fa-check":"fas fa-times"}></i></span>{data.public}</li>
              <li className={data.isreports?"":"text-muted"}><span className="fa-li"><i className={data.isreports?"fas fa-check":"fas fa-times"}></i></span>{data.reports}</li>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div></>
  )
}

export default Display