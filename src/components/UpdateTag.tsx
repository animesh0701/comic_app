import React from "react";
import { useState } from "react";

const UpdateTag = () => {
  const [tags, setTags] = useState(["Happy", "Sad", "Cheerful"]);

  const clickHandler = () => {
    //Add
    setTags([...tags, "exciting"]);

    //Remove
    setTags(tags.filter((tag) => tag !== "Happy"));

    //Update
    setTags(tags.map((tag) => (tag === "Cheerful" ? "Cheer" : tag)));
  };

  return (
    <div>
      #{tags}
      <button onClick={clickHandler}>Update Tag</button>
    </div>
  );
};

export default UpdateTag;
