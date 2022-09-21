import React from "react";
import Image from "next/image";
import Link from "next/link";

const CardProps = (props) => {
  return (
    <div>
      <div className="flex justify-center font-Poppins md:mt-5 md:w-auto">
        <div className="flex flex-col items-center bg-white rounded-lg md:flex-row md:max-w-xl">
          <div className="object-cover w-full h-auto text-zero md:h-auto md:w-full">
            <Image
              width={300}
              height={370}
              src={props.img}
              alt=""
              className="rounded-2xl"
            />
          </div>

          <div className="flex flex-col justify-between p-4 leading-normal">
            <div className="flex">
              <p className="text-brightViolet">
                <span>•</span>
                {props.country}
              </p>

               <a target="_blank" rel="noopener noreferrer">
                  <p className=" text-gray-400 md:px-3 underline hover:underline">
                    View on Google Maps
                  </p>
                </a>
           
            </div>

            <h5 className="text-4xl font-bold text-gray-900 md:mt-2">
              {props.place}
            </h5>
            <div className="md:mt-5">
              <p className="font-bold">{props.date}</p>
              <p className="font-normal text-gray-700 md:mt-2">
                {props.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProps;
