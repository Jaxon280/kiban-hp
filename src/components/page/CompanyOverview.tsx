import React from "react";
import Image from "next/image"; // Import Image component

export default function CompanyOverview() {
  return (
    <section
      id="company"
      className="py-16 md:py-24 bg-gray-100 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto mb-16 bg-black p-8 rounded-lg shadow-md md:flex md:flex-row flex-col">
          {/* Left half for text content */}
          <div className="md:w-1/2 md:pr-8 text-left">
            <div className="flex justify-center items-baseline gap-4 mb-8">
              <h2 className="text-4xl md:text-5xl font-normal font-montserrat-semiBold tracking-wide text-white">
                Company
              </h2>
            </div>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
            {/* Company Info Section */}
            <div className="mt-12 text-left text-white">
              株式会社KIBAN
              <br />
              住所: 東京都文京区本郷
              <br />
              電話番号: 080-6611-9037
              <br />
              代表: 代表取締役CEO 飯田 夏生
            </div>
          </div>
          {/* Right half for image */}
          <div className="md:w-1/2 mt-8 md:mt-0">
            <Image
              src="/company.jpg"
              alt="Company Image"
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
