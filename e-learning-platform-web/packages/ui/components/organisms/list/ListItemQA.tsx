
interface Props {
    id?: string,
    title: string,
    desc: string,
};

export function ListItemQA({ id, title, desc }: Props) {
    return (
        <div className="accordion" id="accordionExample">
            <div className="accordion-item bg-white border border-gray-200">
                <h2 className="accordion-header mb-0" id={id}>
                    <button className="
              accordion-button
              collapsed
              relative
              flex
              items-center
              w-full
              py-4
              px-5
               text-left
              bg-white
              border-0
              rounded-none
              transition
              focus:outline-none
            " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                        aria-controls="collapseTwo"
                    >
                        <p className="text-gray-900">
                            {title}
                        </p>
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body py-4 px-5">
                        <p className="text-gray-500 ">
                            {desc}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};