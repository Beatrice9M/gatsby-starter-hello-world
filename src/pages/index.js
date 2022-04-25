import React, { useCallback, useState } from "react"

export default function Home() {
  const [formName, setFormName] = useState("Contact-Marketing")

  const changeFormName = useCallback(
    event => {
      // The value of the subject field.
      const value = event.target.value
      // The name we want to apply to the form, based on the value.
      const name = "Contact-" + value
      setFormName(name)
    },
    [setFormName]
  )

  return (
    <div className="contactForm">
      <p className="heading" style={{ color: "blue", textAlign: "center" }}>
        My Contact Form
      </p>
      <form
        id="conditional-form"
        method="POST"
        name={formName}
        data-netlify="true"
        style={{ textAlign: "center" }}
        action="/success/"
      >
        <input type="hidden" name="form-name" value={formName}></input>
        <input type="text" placeholder="enter name" name="name"></input>
        <input type="text" placeholder="enter email" name="email"></input>
        <select name="subject" required onChange={ev => changeFormName(ev)}>
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
        method="POST"
        data-netlify="true"
        style={{ display: "none" }}
        action="/success/"
      >
        <input type="text" placeholder="enter name" name="name"></input>
        <input type="text" placeholder="enter email" name="email"></input>
        <input
          type="text"
          placeholder="enter something"
          name="something"
        ></input>
        <textarea placeholder="enter message" name="message"></textarea>
      </form>
    </div>
  )
}
