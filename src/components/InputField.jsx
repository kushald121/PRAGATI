import React from 'react';

const InputField = (
  (
    {
      type = 'text',
      id,
      label,
      isRequired = false,
      placeholder = ' ',
      textarea = false,
      value,
      onChange,
      ...rest
    },
    ref
  ) => {
    return (
      <div className="relative w-full">
        {textarea ? (
          <textarea
            id={id}
            placeholder={placeholder}
            required={isRequired}
            value={value}
            onChange={onChange}
            ref={ref}
            className="peer w-full border border-[#D4D4D8] py-3 px-4 rounded-xl min-h-[120px]
              focus:outline-none focus:border-[#FF7F50] placeholder-transparent resize-none"
            {...rest}
          />
        ) : (
          <input
            id={id}
            type={type}
            placeholder={placeholder}
            required={isRequired}
            value={value}
            onChange={onChange}
            ref={ref}
            className="peer w-full border border-[#D4D4D8] py-3 px-4 rounded-xl
              focus:outline-none focus:border-[#FF7F50] placeholder-transparent"
            {...rest}
          />
        )}
        <label
          htmlFor={id}
          className="absolute left-4 top-3 text-[#71717A] text-base transition-all bg-white px-1
          peer-placeholder-shown:top-3
          peer-placeholder-shown:text-base
          peer-placeholder-shown:text-[#A1A1AA]
          peer-focus:top-[-10px]
          peer-focus:text-sm
          peer-focus:text-[#FF7F50]
          peer-[&:not(:placeholder-shown)]:top-[-10px]
          peer-[&:not(:placeholder-shown)]:text-sm
          peer-[&:not(:placeholder-shown)]:text-[#FF7F50]"
        >
          {label}
        </label>
      </div>
    );
  }
);

InputField.displayName = 'InputField';
export default InputField;
