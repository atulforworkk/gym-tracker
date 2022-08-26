import Button from "./Button";
import DaysOfWeek from "./DaysOfWeek";
import Exercise from "./Exercise";
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="main">
          <h1>Gym Tracker</h1>
          <Exercise />
          <Button text={"Add"} color={"LightGreen"} />
        </div>
        <DaysOfWeek />
      </div>
    </>
  );
};

export default Header;
