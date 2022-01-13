import { useEffect, useState } from "react";

const HighScore = (props) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    let userArray = JSON.parse(localStorage.getItem("users"));
    // sort an object array
    // refer this
    // https://www.javascripttutorial.net/array/javascript-sort-an-array-of-objects/

    userArray.sort((a, b) => {
      return b.score - a.score;
    });
    setUsers(userArray);
  }, []);

  function resetScore() {
    window.localStorage.setItem("users", JSON.stringify([]));
    setUsers([]);
  }

  return (
    <main className="my-24 px-24">
      <div className="mx-auto max-w-lg bg-white px-8 pt-16 pb-10 rounded-2xl border-2 drop-shadow-2xl">
        <h1 className="text-3xl font-bold mb-6">High Score</h1>
        <ol className="px-8 list-inside list-decimal">
          {users.map((user) => {
            return (
              <div key={user.name} className="flex gap-12">
                <li className="">{user.name}</li>
                <div>{user.score}</div>
              </div>
            );
          })}
        </ol>
        <div className="button-container flex w-full mt-5 gap-4">
          <button
            className="bg-primary px-4 py-2 text-white cursor-pointer rounded-md hover:bg-secondary transition ease-in-out duration-200"
            onClick={() => props.goToMain()}
          >
            Go Back
          </button>
          <button
            className="bg-primary px-4 py-2 text-white cursor-pointer rounded-md hover:bg-secondary transition ease-in-out duration-200"
            onClick={resetScore}
          >
            Clear High Score
          </button>
        </div>
      </div>
    </main>
  );
};

export default HighScore;
