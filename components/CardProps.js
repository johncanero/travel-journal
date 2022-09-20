import React from "react";
import Image from "next/image";
import Link from "next/link";
import HongkongPortrait from "../public/images/hongkongPortrait.jpg";

const CardProps = () => {
  return (
    <div>
      <div className="flex justify-center">
        <Link href="" passHref>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center bg-white rounded-lg md:flex-row md:max-w-xl"
          >
                <div className="object-cover w-full h-96 md:h-auto md:w-9/12">
                    <Image 
                        src={HongkongPortrait} 
                        alt="hongkongPortrait.jpg"
                        className=" rounded-xl" 
                    />
                </div>

                <div className="flex flex-col justify-between p-4 leading-normal">
                    <div className="flex">
                        <p>• HONGKONG</p>
                        {/* Link */}
                        <p className="md:px-3">View on Google Maps</p>
                    </div>

                    <h5 className="mb-2 text-4xl font-bold text-gray-900">
                        Hongkong
                    </h5>
                        <p className="mb-3 font-normal text-gray-700">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
                    </p>
                </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default CardProps;
