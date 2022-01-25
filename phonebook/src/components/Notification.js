import React from "react"

const Notification = ({ notification }) => {
  console.log('not', notification)
  if (notification === null) {
    return null
  }
  if (notification.kind === "info") {
    return <div className="info">{notification.message}</div>
  }
  return <div className="error">{notification.message}</div>
}

export default Notification
