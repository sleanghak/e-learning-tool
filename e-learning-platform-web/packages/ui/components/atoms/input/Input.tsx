
export interface Props {
    type?: "normal" | 'float',
    label?: string,
    name: string,
    placeholder?: string,
}
export const Input = ({ type = "normal", placeholder, label, name, ...props }: Props) => {
    return (
        <>
            {
                type == "normal" ? (
                    <input
                        {...props}
                        placeholder={placeholder}
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
                    />
                ) : (
                    <div className="form-floating mb-3 xl:w-96">
                        <input {...props} className="form-control
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
                                                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"/>
                        <label className="text-gray-700">{label}</label>
                    </div>
                )
            }
        </>
    )
}