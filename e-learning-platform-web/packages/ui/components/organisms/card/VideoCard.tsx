interface Props {
  href: string;
  src: string;
  alt?: string;
  title: string;
}
export function VideoCard({ href, src, alt, title, }: Props) {
  return (
      <div className="rounded-lg bg-white shadow-lg">
        <a href={href}>
          <img className="rounded-t-lg" src={src} alt={alt} />
          <div className="p-5">
            <h5 className="text-gray-600 mb-2 font-semibold">{title}</h5>
          </div>
        </a>
      </div>
  );
}
