import React from "react"

export default function Home() {
  function changeFormName(event) {
    // The value of the subject field.
    const value = event.target.value
    // The name we want to apply to the form, based on the value.
    const name = "Contact-" + value
    // The form element in the DOM.
    const form = document.querySelector("#conditional-form")
    // Apply the new name to the form's [name] attribute.
    if (form) {
      form.setAttribute("name", name)
    }
    console.log("name", name)
    // The [name="form-name] field in the DOM.
    const formName = document.querySelector(
      '#conditional-form [name="Contact-Marketing"]'
    )
    // Apply the new name to the [name="form-name"] field within the form.
    if (formName) {
      formName.setAttribute("value", name)
    }
  }
  return (
    <>
      <form
        name="Contact-Marketing"
        method="POST"
        data-netlify="true"
        id="conditional-form"
      >
        <select name="subject" required>
          <option value="Marketing">Marketing</option>
          <option value="Sales">Sales</option>
        </select>
        <input type="email" name="email" required />
        <input type="text" name="name" required />
        <textarea name="message" required></textarea>
        <button type="submit">Send</button>
      </form>
      <formform
        name="Contact-Sales"
        method="POST"
        data-netlify="true"
        class="hidden"
      >
        <select name="subject"></select>
        <input type="email" name="email" />
        <input type="text" name="name" />
        <textarea name="message"></textarea>
      </formform>
    </>
  )
}
