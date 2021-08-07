import useToggle from "./useToggle";

function Main() {
  // Call the hook which returns, current value and the toggler function
  const [isTextChanged, setIsTextChanged] = useToggle();

  return (
    <button onClick={setIsTextChanged}>
      {isTextChanged ? "Toggled" : "Click to Toggle"}
    </button>
  );
}

export default Main;
