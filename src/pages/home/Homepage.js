import React from "react";
import { UseUserValues } from "../../context/UseFromContext";
import UserPage from "../UserData/UserPage";
import TestimonialData from "../testimonialPage/TestimonialData";

export default function Homepage() {
  const { toggle } = UseUserValues();
  console.log(toggle);

  return <>{toggle === "userData" ? <UserPage /> : <TestimonialData />}</>;
}
