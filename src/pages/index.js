import React from "react"

export default function Home() {
  return (
    <div className="contactForm">
      <p className="heading" style={{ color: "blue", textAlign: "center" }}>
        My Contact Form
      </p>
      <form
        name="contactMarketing"
        method="post"
        data-netlify="true"
        style={{ textAlign: "center" }}
        action="/success/"
      >
        <input type="hidden" name="contactForm" value="contactForm"></input>
        <input type="text" placeholder="enter name" name="name"></input>
        <input type="text" placeholder="enter email" name="email"></input>
        <option value="Marketing">Marketing</option>
        <option value="Sales">Sales</option>
        <option value="Operations">Operations</option>
        <option value="Recruting">Recruting</option>
        <textarea placeholder="enter message" name="message"></textarea>
        <button type="submit" style={{ color: "blue", textAlign: "center" }}>
          Submit Form
        </button>
      </form>

      <form
        name="contactSales"
        method="post"
        data-netlify="true"
        style={{ textAlign: "center" }}
        action="/success/"
      >
        <input type="hidden" name="contactForm" value="contactForm"></input>
        <input type="text" placeholder="enter name" name="name"></input>
        <input type="text" placeholder="enter email" name="email"></input>
        <option value="Marketing">Marketing</option>
        <option value="Sales">Sales</option>
        <option value="Operations">Operations</option>
        <option value="Recruting">Recruting</option>
        <textarea placeholder="enter message" name="message"></textarea>
        <button type="submit" style={{ color: "blue", textAlign: "center" }}>
          Submit Form
        </button>
      </form>
    </div>
  )
}
