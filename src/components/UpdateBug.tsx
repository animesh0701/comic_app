import React from "react";
import { useState } from "react";
import produce from "immer";

const UpdateBug = () => {
  const [bugs, setBugs] = useState([
    { id: 1, fixed: false },
    { id: 2, fixed: false },
  ]);
  const handleClick = () => {
    //Add
    //setBugs([...bugs, { id: 3, fixed: true }]);

    //Update
    //setBugs(bugs.map((bug) => (bug.id === 2 ? { ...bug, fixed: true } : bug)));

    //Using Immer
    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 2);
        if (bug) bug.fixed = true;
      })
    );
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
