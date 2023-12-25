import React from 'react'
import Display from './components/Display'

function App() {
  let data=[
    {
      money:"Free",
      doller:"0",
      user:"single user",
      isuser: true,
      storage:"5gb storage",
      isstorage:true,
      project:"unlimitated project",
      isproject:true,
      access:"community access",
      isaccess:true,
      projects:"dedicated phone support",
      isprojects: false,
      subdomain:"free subdomain",
      issubdomain:false,
      public:"dedicated public project",
      ispublic:false,
      reports:"monthly status reports",
      isreports:false,
    },
    {
      money:"plus",
      doller:"49",
      user:"5 user",
      isuser:true,
      storage:"50gb storage",
      isstorage:true,
      project:"unlimitated public projects helloo",
      isproject:true,
      access:"community access",
      isaccess:true,
      projects:"dedicated phone support",
      isprojects: true,
      subdomain:"free subdomain",
      issubdomain:true,
      public:"dedicated public project",
      ispublic:true,
      reports:"monthly status reports",
      isreports:false,
    },
    {
      money:"pro",
      doller:"149",
      user:"Unlimitated user",
      isuser:true,
      storage:"150gb storage",
      isstorage:true,
      project:"unlimitated public project",
      isproject:true,
      access:"community access",
      isaccess:true,
      projects:"dedicated phone support",
      isprojects: true,
      subdomain:"free subdomain",
      issubdomain:true,
      public:"dedicated public project",
      ispublic:true,
      reports:"monthly status reports",
      isreports:false,
    }
  ]
  return (
    <>
      <section className="pricing py-5">
  <div className="container">
    <div className="row">
      
      {
        data.map((ele,i)=>{
          return <Display data={ele} key={i}/>
        })
      }
  


    </div>
  </div>
</section></>
  )
}

export default App