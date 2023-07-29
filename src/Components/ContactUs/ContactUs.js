import React from "react";
import Container from "../UI/Container";

function ContactUs() {
  function formSubmit(e) {
    e.preventDefault();
    e.target.reset();
  }
  return (
    <Container id={"Contact Us"}>
      <h2 className="text-center text-4xl font-bagel text-yellow-950">
        Contact US
      </h2>
      <p className="text-center text-yellow-950 text-lg">
        Feel free to contact us if you have specific orders.
      </p>
      <div className=" bg-yellow-200 p-5 mt-4 sm:mt-6 max-w-xl mx-auto rounded-t-lg rounded-b-3xl">
        <form action="#" onSubmit={formSubmit}>
          <div className=" space-y-1">
            <label
              htmlFor=""
              className="block text-center font-semibold text-yellow-950 text-lg"
            >
              Name
            </label>
            <input
              type="text"
              className="block w-full p-1 border-2 border-yellow-300 rounded-md text-yellow-950"
            />
          </div>
          <div className=" space-y-1 mt-1">
            <label
              htmlFor=""
              className="block text-center font-semibold text-yellow-950 text-lg"
            >
              Phone
            </label>
            <input
              type="number"
              className="block w-full p-1 border-2 border-yellow-300 rounded-md text-yellow-950"
            />
          </div>
          <div className=" space-y-1 mt-1">
            <label
              htmlFor=""
              className="block text-center font-semibold text-yellow-950 text-lg"
            >
              Massage
            </label>
            <textarea
              name=""
              id=""
              cols="20"
              rows="3"
              className="block w-full p-1 border-2 border-yellow-300 rounded-md text-yellow-950"
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-2 px-4 w-full mt-4 bg-yellow-900 rounded-full font-semibold  text-yellow-50 hover:scale-105 hover:drop-shadow-xl transition-all duration-200 hover:ease-in-out"
          >
            Submit
          </button>
        </form>
      </div>
    </Container>
  );
}

export default ContactUs;
