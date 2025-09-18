export function Button(props) {
  const { children, givenFunction } = props;
  return (
    <div>
      <button
        onClick={givenFunction}
        className="w-fit h-fit cursor-pointer rounded bg-blue-500 p-1"
      >
        <p>{children}</p>
      </button>
    </div>
  );
}
