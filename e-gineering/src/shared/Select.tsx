type SelectOption = {
  label: string;
  value: string;
};

type SelectProps = {
  id: string;
  label: string;
  options: SelectOption[];
  placeholderOption: string;
};

export function Select(props: SelectProps) {
  return (
    <select>
      <option value="">{props.placeholderOption}</option>
      {props.options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
