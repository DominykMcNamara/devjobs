import { useField } from 'formik';

export function TextInput({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <>
      <input
        className="focus:outline-none active:border-none bg-secondary-gray p-1"
        {...field}
        {...props}
      />
       {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
}
