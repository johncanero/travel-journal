import React from "react";
import Image from "next/image";
import Link from "next/link";
import HongkongPortrait from "../public/images/hongkongPortrait.jpg";

const CardProps = () => {
  return (
    <div>
      <div className="flex justify-center font-Poppins md:mt-7 md:w-auto">
        <div className="flex flex-col items-center bg-white rounded-lg md:flex-row md:max-w-xl">
          <div className="object-cover w-full h-auto text-zero md:h-auto md:w-full">
            <Image
              src={HongkongPortrait}
              alt="hongkongPortrait.jpg"
              className="rounded-2xl"
            />
          </div>

          <div className="flex flex-col justify-between p-4 leading-normal">
            <div className="flex">
              <p className="text-brightViolet">
                <span>•</span> HONGKONG
              </p>

              <Link href="https://www.google.com/maps/place/Hong+Kong/@22.3529805,113.9872713,11z/data=!3m1!4b1!4m5!3m4!1s0x3403e2eda332980f:0xf08ab3badbeac97c!8m2!3d22.3193039!4d114.1693611" passHref>
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
