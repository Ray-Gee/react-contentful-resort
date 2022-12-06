import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import FormContainer from "../components/FormContainer";

const Form = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="Form ">
          <Link to="/" className="btn-primary">
            応募ふぉーむ
          </Link>
        </Banner>
      </Hero>
      <FormContainer />
    </>
  );
};

export default Form;
