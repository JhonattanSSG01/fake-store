"use client"

import productsService from "@/api/fakestore.service";
import Card from "@/components/Card";
import NewProduct from "@/components/NewProduct";
import { adaptProductsList } from "@/utils/productAdapter";
import { Products, ResponseProducts } from "@/utils/types";
import React from "react";

export default function Home() {
  // Initial data
  const initialData = [
    {
      id: 0,
      title: "",
      img: "",
      price: 0,
      description: ""
    },
  ];

  const [products, setProducts] = React.useState<Products[]>(initialData);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [isOpen, setOpen] = React.useState<boolean>(false);

  const getData = async () => {
    const API = await productsService();

    const { data, status } = API;

    if (data?.length && status === 200) {
      const apiProduct: Products[] = adaptProductsList(data as ResponseProducts[]);
      setProducts(apiProduct);
    } else {
      setProducts(initialData);
    }

    setLoading(false);

  }


  React.useEffect(() => {
    getData()
  }, [])
  return (
    <div>
      <button
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => setOpen(!isOpen)}
      >
        <span className="text-md capitalize text-gray-600">Crear Nuevo Producto</span>
      </button>

      {
        isOpen && (
          <section className="absolute top-0 right-0 w-screen h-screen bg-[#000] z-50">
            <span className="pointer" onClick={() => setOpen(false)}>Cerrar</span>
            <NewProduct/>
          </section>
        )
      }


      <section className="w-full max-w-[60vw] mx-auto grid [grid-template-columns:repeat(auto-fill,minmax(16rem,1fr))] [grid-auto-rows:25rem] gap-15 md:max-w-[80vw]">
        {loading
          ? [...Array(9)].map((_, index) => (
            <div
              key={index}
              className="animate-pulse bg-white rounded shadow p-4"
            >
              <div className="w-full h-40 bg-gray-200 rounded mb-4" />
              <div className="h-5 bg-gray-200 rounded w-1/2 mb-2" />
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
            </div>
          ))
          : products.map((product) => (
            <Card
              key={product.id}
              title={product.title}
              img={product.img}
              price={product.price}
              description={product.description}
            /* onClick={() => router.push(`/country?name=${country.name}`)} */
            />
          ))}
      </section>
    </div>
  );
}
