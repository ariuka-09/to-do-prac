export function Input(props) {
  const { text, setText, keyboard } = props;
  return (
    <input
      type="text"
      value={text}
      className="border"
      onChange={(e) => setText(e.target.value)}
      onKeyDown={keyboard}
    />
  );
}
