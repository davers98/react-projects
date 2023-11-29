import React from 'react'
import Alerts from '../components/Alerts'

export default function AlertsApp() {
  return (
    <div className="container">
      <Alerts type={"success"} message={"Successful Login"} />
      <Alerts type={"warning"} message={"Passwords do not match"} delay={true} />
      <Alerts type={"danger"} message={"Wrong Username/Password"} />
    </div>

  )
}
