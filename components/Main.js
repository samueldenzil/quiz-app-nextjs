const Main = (props) => {
  return (
    <main className="box-border my-16 px-24">
      <div className="mx-auto max-w-4xl  bg-white px-8 py-16 rounded-2xl border-2 drop-shadow-2xl">
        <h1 className="text-3xl font-bold mb-4">Coding Quiz Challenge</h1>
        <p className="mb-2">
          Try to answer to following code-related questions within the time
          limit.
        </p>
        <p className="mb-6">
          Keep in mind that incorrect answers will penalize your score/time by
          ten seconds!
        </p>
        <button
          onClick={() => props.changeScreen("quiz")}
          className="bg-primary px-4 py-2 text-white cursor-pointer rounded-md hover:bg-secondary transition ease-in-out duration-200"
        >
          Start Quiz
        </button>
      </div>
    </main>
  );
};

export default Main;
