export function Button(props) {
  const { children, givenFunction, filterType } = props;
  return (
    <div>
      <button
        onClick={givenFunction}
        className={`w-fit h-fit cursor-pointer rounded ${
          children == filterType ||
          children == "Add" ||
          children == "delete completed tasks"
            ? "bg-blue-300 text-white"
            : ""
        } p-1`}
      >
        <p>{children}</p>
      </button>
    </div>
  );
}
