import React from "react"

export default function Home() {
  function changeFormName(event) {
    // The value of the subject field.
    var value = event.target.value
    // The name we want to apply to the form, based on the value.
    var name = "Contact-" + value
    // The form element in the DOM.
    var form = document.querySelector("#conditional-form")
    // Apply the new name to the form's [name] attribute.
    if (form) form.setAttribute("name", name)
    // The [name="form-name] field in the DOM.
    var formName = document.querySelector(
      '#conditional-form [name="form-name"]'
    )
    // Apply the new name to the [name="form-name"] field within the form.
    if (formName) formName.setAttribute("value", name)
  }
  return (
    <div className="contactForm">
      <p className="heading" style={{ color: "blue", textAlign: "center" }}>
        My Contact Form
      </p>
      <form
        id="conditional-form"
        name="Contact-Marketing"
        method="post"
        data-netlify="true"
        style={{ textAlign: "center" }}
        action="/success/"
      >
        <input type="hidden" name="contactForm" value="contactForm"></input>
        <input type="text" placeholder="enter name" name="name"></input>
        <input type="text" placeholder="enter email" name="email"></input>
        <select name="subject" required onchange="changeFormName(event)">
          <option value="Marketing">Marketing</option>
          <option value="Sales">Sales</option>
          <option value="Operations">Operations</option>
          <option value="Recruting">Recruting</option>
        </select>
        <textarea placeholder="enter message" name="message"></textarea>
        <button type="submit" style={{ color: "blue", textAlign: "center" }}>
          Submit Form
        </button>
      </form>

      <form
        id="conditional-form"
        className="hidden"
        name="Contact-Sales"
        method="post"
        data-netlify="true"
        style={{ display: "none" }}
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
