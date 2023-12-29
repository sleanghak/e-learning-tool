import React from "react";

interface CertificateCardProps {
  name: string;
  url: string;
}

export const CertificateCard = ({ name, url }: CertificateCardProps) => {
  return (
    <div
      className="flex h-[450px] w-[555px] flex-col items-center justify-center gap-y-10 rounded-[5px]"
      style={{ border: "1px solid rgba(196, 196, 196, 0.8)" }}
    >
      <img
        src={url}
        className="h-[334px] w-[523px]"
        style={{ border: "1px solid rgba(13, 153, 255, 0.4)" }}
        alt="image"
      />
      <h1 className="font-barlow text-[28px] font-normal">{name}</h1>
    </div>
  );
};
