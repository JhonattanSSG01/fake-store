import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  img: string;
  price: number;
  description: string;
  onClick?: () => void;
};

const Card = ({ title, img, price, description, onClick }: Props) => {
  return (
    <article
      className="w-full h-fit rounded-lg shadow-lg md:cursor-pointer md:hover:shadow-2xl md:hover:scale-105 transition-all light"
      onClick={onClick}
    >
      <figure className="relative w-full h-48 flex justify-center">
        {img !== "" && (
          <Image
            src={img || ""}
            alt="Ilustración del producto"
            width={0}
            height={0}
            className="w-full h-full object-cover rounded-t-lg"
            loading="lazy"
          />
        )}

        <figcaption className="sr-only">Ilustración de {title || ""}</figcaption>
      </figure>

      <div className="p-6">
        <h4 className="mb-4 text-lg font-extrabold">{title || ""}</h4>

        <section className="space-y-1 text-sm">
          <p>
            <strong>Precio:</strong> {price || ""}
          </p>
          <p className="truncate">
            <strong>Descripción:</strong> {description || ""}
          </p>
        </section>
      </div>
    </article>
  );
};

export default Card;