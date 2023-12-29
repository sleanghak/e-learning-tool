import React from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

interface Props {
  id: number;
  name: string;
  url: string;
  date: string;
  description: string;
}

export function SliderGallery() {
  const [CurrentIndex, setCurrentIndex] = React.useState(0);
  const slid: Props[] = [
    {
      id: 1,
      name: "Image’s Title 01",
      url: "https://thumbs.dreamstime.com/b/creative-concept-thank-you-your-attention-text-notebook-wooden-background-264031992.jpg",
      date: "08-oct-2022",
      description: "description .....",
    },
    {
      id: 2,
      name: "Image’s Title 02",
      url: "https://slidebazaar.com/wp-content/uploads/2020/07/thank-you-powerpoint-template-1-jpg.webp",
      date: "09-oct-2022",
      description: "description .....",
    },
    {
      id: 3,
      name: "Image’s Title 03",
      url: "https://slidemodel.com/wp-content/uploads/how-to-start-a-presentation.png",
      date: "10-oct-2022",
      description: "description .....",
    },
    {
      id: 4,
      name: "Image’s Title 04",
      url: "https://i.graphicmama.com/blog/wp-content/uploads/2022/02/24150604/how-to-start-End-Presentation.png",
      date: "11-oct-2022",
      description: "description .....",
    },
  ];
  const gotoback = () => {
    const isFirstSlide = CurrentIndex === 0;
    const newIndex = isFirstSlide ? slid.length - 1 : CurrentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const gotonext = () => {
    const isLastSlide = CurrentIndex === slid.length - 1;
    const newIndex = isLastSlide ? 0 : CurrentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div>
      <div
        className="bg-white shadow-md ... border border-slate-300"
        style={{ width: "100%", height: "80vh", }}
      >
        <div className="p-4" style={{ width: "100%", height: "80vh", }} >
          <div style={{ float: "left", height: "80%", width: "100%", }} >

            {/* img​s sliders */}
            <img
              src={slid[CurrentIndex].url}
              alt="image computer"
              style={{ width: "100%", height: "100%" }}
              className="rounded-sm"
            />
          </div>

          {/* description*/}
          <div style={{ float: "left", width: "100%" }}>
            <div className="flex justify-between">
              <p className="font-sans text-xl text-gray-700 mb-4">
                {slid[CurrentIndex].name}
              </p>
              <p
                className="text-gray-700 text-xs font-sans mb-2"
              >
                {slid[CurrentIndex].date}
              </p>
            </div>
            <div>
              <p className="text-md text-gray-700 mb-2">
                {slid[CurrentIndex].description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*  button*/}
      <div
        style={{ position:'relative', top:"-300px"}}
        className="flex justify-between ..."
      >
        <button
          onClick={() => gotoback()}
          className="rounded-full"
          style={{
            width: "40px",
            height: "40px",
            backgroundColor: "#D9D9D9",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <GrFormPrevious size={40} />
        </button>

        <button
          onClick={() => gotonext()}
          className="rounded-full "
          style={{
            width: "40px",
            height: "40px",
            backgroundColor: "#D9D9D9",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <GrFormNext size={40} />
        </button>
      </div>

    </div>
  );
}
