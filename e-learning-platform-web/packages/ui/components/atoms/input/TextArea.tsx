export interface Props {
    placeholder?: string,
    name: string,
    row: number
}
export const TextArea = ({ row = 3, placeholder, name, ...props }: Props) => {
    return (
        <textarea
            {...props}
            name={name}
            className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
            rows={row}
            placeholder={placeholder}
        ></textarea>
    )
}