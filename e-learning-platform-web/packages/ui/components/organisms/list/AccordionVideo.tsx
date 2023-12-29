import React from 'react';

interface Props {
    title: string;
    video:string;
  }
export function AccordionVideo({
    title,video,
}: Props) {
    return (
        <div id="accordion-open" data-accordion="open">

            <h2 id="accordion-open-heading-2">
                <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4  hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-open-body-2" aria-expanded="false" aria-controls="accordion-open-body-2">
                    <span className="flex items-center">  <svg data-accordion-icon className="w-6 h-6 shrink-0 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        <span className='ml-5'> {title}</span>
                    </span>
                    <p>{video}Video</p>
                </button>
            </h2>
            <div id="accordion-open-body-2" className="hidden" aria-labelledby="accordion-open-heading-2">
                <div className="p-5 border border-b-0 border-gray-200">
                    {/* Lesson Content Videos*/}
                </div>
            </div>

        </div>

    )
}
