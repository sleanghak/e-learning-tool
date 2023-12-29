import { useEffect } from "react";
export interface Props {
  label?: string;
  name: string;
}
// Don't work on storybook
export const InputDatePicker = ({
  label = "Select a date",
  name,
  ...props
}: Props) => {
  useEffect(() => {
    if (typeof window !== undefined) {
      const bootstrap = require("tw-elements/dist/js/index.min.js");
    }
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="datepicker form-floating relative mb-3 xl:w-96">
        <input
          type="text"
          className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
          placeholder="Select a date"
        />
        <label htmlFor="floatingInput" className="text-gray-700">
          Select a date
        </label>
      </div>
    </div>
  );
};
