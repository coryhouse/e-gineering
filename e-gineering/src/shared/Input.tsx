type InputProps = {
  label: string;
  id: string;
  value: string;
};

export function Input(props: InputProps) {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <br />
      <input id={props.id} type="text" value={props.value} />
    </div>
  );
}
