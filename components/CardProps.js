import React from "react";
import Image from "next/image";
import Link from "next/link";
import HongkongPortrait from "../public/images/hongkongPortrait.jpg";

const CardProps = () => {
  return (
    <div>
      <div className="flex justify-center font-Poppins md:mt-7 md:w-auto">
        <div className="flex flex-col items-center bg-white rounded-lg md:flex-row md:max-w-xl">
          <div className="object-cover w-full h-96 md:h-auto md:w-full">
            <Image
              src={HongkongPortrait}
              alt="hongkongPortrait.jpg"
              className=" rounded-xl"
            />
          </div>

          <div className="flex flex-col justify-between p-4 leading-normal">
            <div className="flex">
              <p>
                <span className="text-brightViolet">•</span> HONGKONG
              </p>

              <Link href="" passHref>
                <a target="_blank" rel="noopener noreferrer">
                  <p className=" text-gray-400 md:px-3 underline hover:underline">
                    View on Google Maps
                  </p>
                </a>
              </Link>
              {/* Link */}
            </div>

            <h5 className="text-4xl font-bold text-gray-900 md:mt-2">Hongkong</h5>
            <div className="md:mt-5">
              <p className="font-bold">12 Jan, 2021 - 24 Jan, 2021</p>
              <p className="font-normal text-gray-700 md:mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProps;
