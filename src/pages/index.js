import React from "react"

export default function Home() {
  return (
    <div className="contactForm">
      <form name="contactForm" method="post" data-netlify="true">
        <input type="hidden" name="contactForm" value="contactForm"></input>
        <input type="text" placeholder="enter name" name="name"></input>
        <input type="text" placeholder="enter email" name="email"></input>
        <textarea placeholder="enter message" name="message"></textarea>
        <button type="submit"></button>
      </form>
    </div>
  )
}
