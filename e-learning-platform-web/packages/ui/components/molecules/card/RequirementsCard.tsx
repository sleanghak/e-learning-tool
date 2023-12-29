interface Props {
  title: string;
  desc: string;
}

export function RequirementsCard({ title, desc }: Props) {
  return (
    <div
      style={{ boxShadow: "0px 0px 6px rgba(17, 138, 239, 0.5)" }}
      className="h-[184px] rounded-lg bg-white p-6 shadow-lg"
    >
      <h5 className="mb-[30px] font-sans text-xl text-gray-900">{title}</h5>
      <p className="mb-4 text-lg text-gray-700">{desc}</p>
    </div>
  );
}
