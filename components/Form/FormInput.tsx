"use client";
import { useField } from "formik";

export interface FormInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
}
export const FormInput = ({ label, name, ...props }: FormInputProps) => {
  const [field, meta] = useField(name);
  return (
    <div>
      {label ?? <label htmlFor={name}>{label}</label>}
      <input
        {...field}
        {...props}
        className={`w-full rounded-lg p-4 text-sm ${props.className}`}
      />
      {meta.touched && meta.error ? (
        <div className="m-2 text-sm error italic text-red-500">
          {meta.error}
        </div>
      ) : null}
    </div>
  );
};
