type InputProps = {
  placeholder: string;
  dir?: "rtl" | "ltr";
};

export function Input({ dir = "ltr", placeholder }: InputProps) {
  return (
    <input
      aria-label={placeholder}
      className="ds-input"
      dir={dir}
      placeholder={placeholder}
      type="email"
    />
  );
}
