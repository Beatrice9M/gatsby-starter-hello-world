import React from "react"

export default function Home() {
  return (
    <div className="contactForm">
      <p className="heading" style={{ color: "blue", textAlign: "center" }}>
        My Contact Form
      </p>
      <form
        name="contactForm"
        method="post"
        data-netlify="true"
        style={{ textAlign: "center" }}
        action="/success/"
      >
        <input type="hidden" name="contactForm" value="contactForm"></input>
        <input type="text" placeholder="enter name" name="name"></input>
        <input type="text" placeholder="enter email" name="email"></input>
        <textarea placeholder="enter message" name="message"></textarea>
        <button type="submit" style={{ color: "blue", textAlign: "center" }}>
          Submit Form
        </button>
      </form>
    </div>
  )
}
