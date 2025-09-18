export function Input(props) {
  const { text, setText } = props;
  return (
    <input
      type="text"
      value={text}
      className="border"
      onChange={(e) => setText(e.target.value)}
    />
  );
}
