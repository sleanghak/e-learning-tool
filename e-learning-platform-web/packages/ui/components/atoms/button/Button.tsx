import React from "react";
interface ButtonPropss {
  /**
   * color has to be one of the following:
   */
  color?: "primary" | "secondary";
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: String;
  /**
   * Optional click handler
   */
  /**
   * variant of the button following:
   */
  variant?: "contained" | "outlined" | "text";
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  color,
  size = "medium",
  label,
  variant = "contained",
  ...props
}: ButtonPropss) => {
  // size
  const mode_size =
    size === "small"
      ? {
          px: 4,
          py: 1.5,
          text: "xs",
        }
      : size === "medium"
      ? {
          px: 6,
          py: 2,
          text: "xs",
        }
      : {
          px: 6,
          py: 2,
          text: "sm",
        };
  const mode_color = color === "primary" ? "primary" : "secondary";
  const mode_variant =
    variant === "contained"
      ? `bg-cyan-600 text-white hover:bg-cyan-700 focus:bg-cyan-700 active:bg-cyan-800 `
      : variant === "outlined"
      ? `border-2 border-cyan-600 text-black  hover:bg-black hover:bg-opacity-5 focus:outline-none`
      : `text-cyan-600 text-black`;
  console.log(mode_variant, mode_size);
  return (
    <button
      {...props}
      type="button"
      className={[
        "inline-block",
        `px-${mode_size.px}`,
        `py-${mode_size.py}`,
        mode_variant,
        "font-medium",
        `text-${mode_size.text}`,
        "leading-tight",
        "capitalize",
        "rounded",
        "shadow-md",
        "hover:shadow-lg",
        "focus:shadow-lg",
        "focus:outline-none",
        "focus:ring-0",
        "active:shadow-lg",
        "transition",
        "duration-150",
        "ease-in-out",
      ].join(" ")}
    >
      {label}
    </button>
  );
};

// <button type="button" class="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Primary</button>
//     <button type="button" class="inline-block px-6 py-2 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Secondary</button>
//     <button type="button" class="inline-block px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Success</button>
//     <button type="button" class="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Danger</button>
//     <button type="button" class="inline-block px-6 py-2 border-2 border-yellow-500 text-yellow-500 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Warning</button>
//     <button type="button" class="inline-block px-6 py-2 border-2 border-blue-400 text-blue-400 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Info</button>
//     <button type="button" class="inline-block px-6 py-2 border-2 border-gray-200 text-gray-200 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Light</button>
//     <button type="button" class="inline-block px-6 py-2 border-2 border-gray-800 text-gray-800 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Dark</button>

// const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
//   return (
//     <button
//       type="button"
//       className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
//       style={{ backgroundColor }}
//       {...props}
//     >
//       {label}
//     </button>
//   );
