interface Props {
  src: string;
  alt?: string;
  title: string;
  desc: string;
  href: string;
}
export function ProjectCard({ src, alt, title, desc, href }: Props) {
  return (
    <div className="flex justify-center">
      <a href={href} >
        <div className="rounded-lg shadow-md bg-white">
          <img
            className="rounded-lg"
            src={src}
            alt={alt}
          />
          <div className="p-5">
            <h5 className="mb-2 font-sans text-xl text-gray-500">{title}</h5>
            <p className="mb-2 text-base uppercase text-gray-500">{desc}</p>
          </div>
        </div>
      </a >
    </div >
  );
}
