type Field = {
  label: string;
  type?: "text" | "email" | "textarea";
};

type SimpleFormProps = {
  title: string;
  fields: Field[];
  button: string;
  note?: string;
};

export function SimpleForm({ title, fields, button, note }: SimpleFormProps) {
  return (
    <form className="action-form" action="#">
      <h2>{title}</h2>
      <div className="action-form__fields">
        {fields.map((field) => (
          <label key={field.label}>
            <span>{field.label}</span>
            {field.type === "textarea" ? (
              <textarea rows={5} placeholder={field.label} />
            ) : (
              <input type={field.type ?? "text"} placeholder={field.label} />
            )}
          </label>
        ))}
      </div>
      <button type="submit" className="btn primary">
        {button}
      </button>
      {note ? <p>{note}</p> : null}
    </form>
  );
}
