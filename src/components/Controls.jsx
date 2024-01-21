export const Controls = ({ onPrev, onNext, isPrevVisible, isNextVisible }) => {
  return (
    <div>
      <button onClick={onPrev} disabled={isPrevVisible}>
        Prev
      </button>
      <button onClick={onNext} disabled={isNextVisible}>
        Next
      </button>
    </div>
  );
};
