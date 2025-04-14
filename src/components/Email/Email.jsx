import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      // .sendForm(
      //   "service_v62jpsp",
      //   "template_9icyy3e",
      //   form.current,
      //   "MiDa2x3hCbqdCPIZG"
      // )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Error sending message. Please try again later.");
        }
      );
  };

  return (
    <StyledContactForm>
      <form ref={form} onSubmit={sendEmail}>
        <h1>Contact Us Now</h1>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </StyledContactForm>
  );
};

export default Email;

// Styled Components
const StyledContactForm = styled.div`
  width: auto;
  margin: auto;
  padding: 1.5rem;
  background-color: var(--lightBlue); 
  border-radius: 8px; 
  box-shadow: var(--shadow); 

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    text-align: center;

    h1 {
      color: var(--primary); 
      margin-bottom: 20px;
    }

    label {
      color: var(--primary); 
      margin-top: 1rem;
    }

    input,
    textarea {
      width: 100%;
      padding: 7px;
      margin-bottom: 15px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      transition: border-color 0.3s ease-in-out;

      &:focus {
        border-color: var(--blue); 
      }
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: var(--orange-gradient); 
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 4px;
      transition: background 0.3s ease;

      &:hover {
        background: var(--blue); 
      }
    }
  }

  @media (max-width: 640px) {
    width: 100%;
    max-width: 100%;
  }
`;
