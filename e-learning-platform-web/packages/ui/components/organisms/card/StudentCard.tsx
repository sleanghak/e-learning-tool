interface Props {
  href: string;
  backgroundImagePath: string;
  profileImagePath: string;
  alt?: string;
  StudentName: string;
  title: string;
  desc: string;
}
export function StudentCard({
  href,
  backgroundImagePath,
  profileImagePath,
  alt,
  StudentName,
  title,
  desc,
  ...props
}: Props) {
  return (
    <div className="rounded-lg bg-white shadow-md border">
      <a href={href} >
        <div
          className="rounded-t-lg "
          style={{
            backgroundImage: `url(${backgroundImagePath})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: '20vh',
            width: '100%',
          }}
        ><br /><br /><br />
          <img
            className="rounded-full"
            style={{
              width: 120,
              height: 120,
              display: 'block',
              margin: '0 auto'
            }}
            src={profileImagePath}
            alt="profile"
          />
        </div><br /><br />
        <div className="p-4 text-center">
          <p className="text-black-900 text-base font-medium">
            {StudentName}
          </p>
          <p style={{ color: 'rgba(255, 193, 7, 1)' }} className="text-base">
            {title}
          </p>
          <h5 className="text-base text-gray-500 ">
            {desc}
          </h5>
        </div>
      </a>
    </div>

  );
}
