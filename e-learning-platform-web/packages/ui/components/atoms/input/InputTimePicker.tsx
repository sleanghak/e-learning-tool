import { useEffect } from "react";
interface Props {}
export const InputTimePicker = ({ ...props }: Props) => {
  useEffect(() => {
    if (typeof window !== undefined) {
      const bootstrap = require("tw-elements/dist/js/index.min.js");
    }
  });
  return (
    <div className="timepicker form-floating relative mb-3 xl:w-96">
      <input
        type="text"
        className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
        placeholder="Select a date"
      />
      <label htmlFor="floatingInput" className="text-gray-700">
        Select a time
      </label>
      <button
        tabIndex={0}
        type="button"
        className="timepicker-toggle-button"
        data-mdb-toggle="timepicker"
      >
        <i className="fas fa-clock timepicker-icon"></i>
      </button>
    </div>
  );
};
