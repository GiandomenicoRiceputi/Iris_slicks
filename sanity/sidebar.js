import React from "react";
import S from "@sanity/desk-tool/structure-builder";

// Build a custom sidebar
const MyComponent = () => {
  return S.list()
    .title(`Slick's Slices`)
    .items([
      // create a new sub item
      S.listItem()
        .title("Home Page")
        .icon(() => <strong>🐸</strong>)
        .child(
          S.editor()
            .schemaType("storeSettings")
            // make a new document id so we don't have a random string of numbers
            .documentId("downtown")
        ),
      // add in the rest of our document items
      ...S.documentTypeListItems().filter(
        (item) => item.getId() !== "storeSettings"
      ),
    ]);
};

export default MyComponent;
