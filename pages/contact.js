import React from 'react';

const ContactPage = () => {
  return (
    <div>
      <section>
        <h1>Contact Us</h1>
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <label>
            Message:
            <textarea name="message"></textarea>
          </label>
          <button type="submit">Send</button>
        </form>
      </section>
      <section>
        <h2>Office Location</h2>
        <p>123 Main Street, City, Country</p>
      </section>
      <section>
        <h2>Follow Us</h2>
        <p>Social Media Links</p>
      </section>
    </div>
  );
};

export default ContactPage;
