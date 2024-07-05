import React from "react";
import Header from "../Components/Header/Header";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import NewCollection from "../Components/NewCollections/NewCollection";
import NewsLetter from "../Components/NewsLetter/NewsLetter";

export default function Shop() {
  return (
    <>
      <Header />
      <Popular />
      <Offers />
      <NewCollection />
      <NewsLetter />
    </>
  );
}
