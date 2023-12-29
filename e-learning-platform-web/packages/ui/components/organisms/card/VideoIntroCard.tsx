interface VideoCardProps {
  src: string;
  time: string;
}

export function VideoIntroCard({ src, time }: VideoCardProps) {
  return (
    <div
      style={{
        width: "auto",
        height: "530px",
        boxShadow:
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
      }}
      className="m-auto rounded-md bg-white"
    >
      <div
        className="float-left w-[100%] cursor-pointer "
        style={{ height: "40%" }}
      >
        <img
          src={src}
          alt="image video"
          style={{ width: "100%", height: "100%" }}
          className="rounded-t-md"
        />

      </div>
      <div className="float-left h-[50%] w-[100%]">
        <div className="m-auto w-[90%]" style={{ marginTop: "20px" }}>
          <button
            style={{
              width: "100%",
              height: "35px",
              backgroundColor: "#118AEF",
              borderRadius: "5px",
            }}
            className="font-medium text-white hover:shadow-md"
          >
            Join Course
          </button>
          <p
            className="font-semibold text-gray-400"
            style={{ marginTop: "10px" }}
          >
            This course is includes
          </p>
          <div className="flex items-center" style={{ marginTop: "17px" }}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/66/66163.png"
              alt="image Clock"
              style={{ width: "25px", height: "25px" }}
            />
            <div style={{ marginLeft: "30px" }}>
              <h3 className="text-sm font-bold">{time}</h3>
              <p className="text-xs text-gray-400">
                Of self-paced video lesson
              </p>
            </div>
          </div>
          <div className="flex items-center" style={{ marginTop: "17px" }}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/4205/4205597.png"
              alt="image Clock"
              style={{ width: "25px", height: "25px" }}
            />
            <div style={{ marginLeft: "30px" }}>
              <h3 className="text-sm font-bold">Completion Certificate</h3>
              <p className="text-xs text-gray-400">
                awarded on course completion
              </p>
            </div>
          </div>
          <div className="flex items-center" style={{ marginTop: "17px" }}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/661/661513.png"
              alt="image Clock"
              style={{ width: "25px", height: "25px" }}
            />
            <div style={{ marginLeft: "30px" }}>
              <h3 className="text-sm font-bold">Permanent access</h3>
              <p className="text-xs text-gray-400">To your Course</p>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
