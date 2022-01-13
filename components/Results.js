import { useState } from "react";

const Results = (props) => {
  const [initials, setInitials] = useState("");

  function handleSubmit() {
    const user = {
      name: initials,
      score: props.score,
    };
    let userArray = JSON.parse(window.localStorage.getItem("users"));
    userArray.push(user);
    window.localStorage.setItem("users", JSON.stringify(userArray));
    props.changeScreen("highscore");
  }

  return (
    <main className="my-24 px-24">
      <div className="mx-auto max-w-4xl bg-white px-8 pt-16 pb-10 rounded-2xl border-2 drop-shadow-2xl">
        <h1 className="text-3xl font-bold mb-6">All Done</h1>
        <p className="mb-6">Your final score is {props.score}.</p>
        <div className="flex items-center gap-2">
          <label htmlFor="name">Enter initials: </label>
          <input
            type="text"
            name="name"
            className="p-1 border-2 max-w-xs w-4/12"
            id="name"
            value={initials}
            onChange={(e) => setInitials(e.target.value)}
          />
          <button
            className="bg-primary px-4 py-2 text-white cursor-pointer rounded-md hover:bg-secondary transition ease-in-out duration-200"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </main>
  );
};

export default Results;
