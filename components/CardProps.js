import React from "react";
import Image from "next/image";
import Link from "next/link";

const CardProps = (props) => {
  return (  
    <div>
      <div className="flex justify-center font-Poppins mt-8 md:mt-2 md:w-auto">
        <div className="flex flex-col items-center bg-white rounded-lg md:flex-row md:max-w-xl lg:max-w-lg lg:m-2">
          <div className="flex justify-center object-cover w-11/12 h-auto text-zero md:h-auto md:w-full">
            <Image
              width={310}
              height={420}
              src={props.img}
              alt=""
              className="rounded-2xl"
            />
          </div>

          <div className="flex flex-col justify-between mt-3 px-10 md:p-4 leading-normal">
            <div className="flex">
              <p className="text-brightViolet">
                <span>•</span>
                {props.country} 
              </p>

                <Link href='https://www.google.com/maps' passHref>
                    <a target="_blank" rel="noopener noreferrer">
                      <p className=" text-gray-400 px-3 md:px-3 underline hover:underline">
                        View on Google Maps
                      </p>
                    </a>
                </Link>
            </div>

            <h5 className="text-4xl font-bold text-gray-900 mt-2">
              {props.place}
            </h5>
            <div className="mt-4">
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
