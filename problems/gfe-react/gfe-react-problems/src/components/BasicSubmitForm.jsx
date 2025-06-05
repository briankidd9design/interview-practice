import submitForm from "../../utils/submitForm";
import Navigation from "./Navigation";
export default function BasicSubmitForm() {
  return (
    <>
      <nav>
        <Navigation />
      </nav>
      <h1>Basic Navigation Form</h1>
      <form
        // Ignore the onSubmit prop, it's used by GFE to
        // intercept the form submit event to check your solution.
        onSubmit={submitForm}
        action="https://questions.greatfrontend.com/api/questions/contact-form"
        method="POST"
      >
        <div>
          <label htmlFor="name-input">Name </label>
          <input id="name-input" name="name" type="text" />
        </div>
        <div>
          <label htmlFor="email-input">Email </label>
          <input id="email-input" name="email" type="email" />
        </div>
        <div>
          <label htmlFor="message-input">Message </label>
          <textarea id="message-input" name="message">
            {" "}
          </textarea>
        </div>
        <div>
          {" "}
          <button>Send</button>
        </div>
      </form>
    </>
  );
}
