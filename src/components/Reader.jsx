import { useState } from "react";
import { Progress } from "./Progress";
import { Article } from "./Article";
import { Controls } from "./Controls";

export const Reader = ({ items }) => {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const handelPrev = () => {
    setSelectedIdx(selectedIdx - 1);
  };
  const handelNext = () => {
    setSelectedIdx(selectedIdx + 1);
  };

  const selectedArticle = items[selectedIdx];
  const isPrevVisible = selectedIdx === 0;
  const isNextVisible = selectedIdx === items.length - 1;

  return (
    <div>
      <header>
        <Controls
          onPrev={handelPrev}
          onNext={handelNext}
          isPrevVisible={isPrevVisible}
          isNextVisible={isNextVisible}
        />
        <Progress current={selectedIdx + 1} total={items.length} />
      </header>
      <Article article={selectedArticle} />;
    </div>
  );
};
