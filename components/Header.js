const Header = (props) => {
  return (
    <div className="flex px-8 py-5 bg-primary text-white text-xl">
      <p
        onClick={() => props.changeScreen("highscore")}
        className="cursor-pointer"
      >
        View Highscores <i className="fas fa-hand-point-left fa-lg"></i>
      </p>
      <p className="ml-auto">Time: {props.time / 1000}</p>
    </div>
  );
};

export default Header;
