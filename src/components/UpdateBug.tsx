import React from "react";
import { useState } from "react";

const UpdateBug = () => {
  const [bugs, setBugs] = useState([
    { id: 1, fixed: false },
    { id: 2, fixed: false },
  ]);
  const handleClick = () => {
    //Add
    //setBugs([...bugs, { id: 3, fixed: true }]);

    //Update
    setBugs(bugs.map((bug) => (bug.id === 2 ? { ...bug, fixed: true } : bug)));
  };
  return (
    <div>
      {bugs[bugs.length - 1].fixed
        ? bugs[bugs.length - 1].id + " true"
        : bugs[bugs.length - 1].id + " false"}
      <button onClick={handleClick}>Update bug</button>
    </div>
  );
};

export default UpdateBug;
