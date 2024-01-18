import { Title } from "../Description/Description";
// import { Descr } from "../Description/Description";
import { Button } from "../Button/Button";
import { Options } from "../Options/Options";
import { Feedback } from "../Feedback/Fedback";
import "./App.css";

export const App = () => {
  return (
    <>
      <Title text="Sip Happens Café" />
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
      {/* <Descr
        descr="Please leave your feedback about our service by selecting one of the
        options below."
      /> */}

      <Button />
      <Options />
      <Feedback />
    </>
  );
};
