import React from "react";
import new_collection from "../Assets/new_collections";
import Item from "../Item/Item";
import "./NewCollection.css";

export default function NewCollection() {
  return (
    <div>
      <h1 className="collection-h2">
        New Collections
        <hr className="collection-hr" />
      </h1>

      <div className="collection-div">
        {new_collection.map((collection, idx) => {
          return <Item data={collection} key={idx} />;
        })}
      </div>
      {}
    </div>
  );
}
