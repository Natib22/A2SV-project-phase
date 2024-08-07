import React, { useState } from "react";
interface task {
  name: string;
  description: string;
}

const Task = ({ name, description }: task) => {
  const [completeFlag, setCompletedFlag] = useState(false);
  // const [editFlag, setEditFlag] = useState(false);
  const [deleteFlag, setDeleteFlag] = useState(false);

  const [editedName, setEditedName] = useState(name);
  const [editedDescription, setEditedDescription] = useState(description);

  const completed = () => {
    setCompletedFlag(true);
  };
  const edit = () => {
    setEditedName(prompt("Enter new name", editedName) || editedName);
    setEditedDescription(
      prompt("Enter new description", editedDescription) || editedDescription
    );
  };
  return (
    <>
      {deleteFlag ? (
        ""
      ) : (
        <div className="flex justify-between border-b-stone-900 border-b-2 border-black">
          <div className="ml-7">
            <p
              className={`text-3xl text-orange-400 ${
                completeFlag ? "line-through" : ""
              }`}
            >
              {editedName}
            </p>
            <p className="text-xl">{editedDescription}</p>
          </div>

          <div className="mr-8 flex items-center justify-between w-56">
            {completeFlag ? (
              ""
            ) : (
              <button
                onClick={edit}
                className="text-blue-200 border-2 border-blue-200 rounded-xl w-16 h-10 text-sm "
              >
                edit
              </button>
            )}
            {completeFlag ? (
              ""
            ) : (
              <button
                onClick={completed}
                className="text-blue-200 border-2 border-blue-200 rounded-xl w-20 h-10 text-sm"
              >
                completed
              </button>
            )}
            <button
              onClick={() => setDeleteFlag(true)}
              className="text-red-400 border-2 border-red-400 rounded-xl w-16 h-10 text-sm flex-grow"
            >
              delete
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Task;
