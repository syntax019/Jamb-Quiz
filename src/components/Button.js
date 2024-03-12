function Button({ index, dispatch }) {
  return (
    <button
      onClick={() => dispatch({ type: "nextQuestion" })}
      className="text-xl w-5/6 font-bold mb-6 py-5 pl-6  border-solid bg-darkPurple rounded-xl"
    >
      Submit answer
    </button>
  );
}

export default Button;
