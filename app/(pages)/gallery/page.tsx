import FlexibleImage from "@/components/ui/FlexibleImage";
import React from "react";

const Gallery = () => {
  return (
    <div>
      <h1 className="heading pt-8">Sailor Since Birth</h1>
      <div className=" flex flex-wrap">
        <FlexibleImage imageURL="/icons/sailor1.JPG" width={400} height={800} />
        <FlexibleImage imageURL="/icons/sailor2.JPG" width={400} height={800} />
        <FlexibleImage imageURL="/icons/sailor3.JPG" width={400} height={800} />
        <FlexibleImage imageURL="/icons/sailor4.JPG" width={400} height={800} />
      </div>
      <h1 className="heading pt-4">
        Moved From Gerristen Beach, Brooklyn to Fire Island, NY
      </h1>
      <div className="flex flex-wrap">
        <FlexibleImage imageURL="/icons/fi1.JPG" width={400} height={800} />
        <FlexibleImage imageURL="/icons/fi2.JPG" width={400} height={800} />
        <FlexibleImage imageURL="/icons/fi3.JPG" width={400} height={800} />
        <FlexibleImage imageURL="/icons/fi4.JPG" width={400} height={800} />
        <FlexibleImage imageURL="/icons/fi5.JPG" width={400} height={800} />
      </div>
      <h1 className="heading pt-4">
        Picked Up a Few Hobbies I still enjoy today
      </h1>
      <div className=" flex flex-wrap">
        <FlexibleImage imageURL="/icons/hobby1.JPG" width={400} height={800} />
        <FlexibleImage imageURL="/icons/hobby2.JPG" width={400} height={800} />
        <FlexibleImage imageURL="/icons/hobby3.JPG" width={400} height={800} />
        <FlexibleImage
          imageURL="/icons/hobby4.JPG"
          width={1000}
          height={1000}
          subtitle="This is when I truly felt my passion for innovateion come 
        to light. I loved It. I stayed up until the wee hours working on my 
        rc car bulding it from scratch and following the kit. I found the 
        design of rc carrs quite interesting. This proflierfated when I 
        decided to study COmputer Scioence finding a home for my innovative 
        and engineering baised brain."
        />
        <FlexibleImage imageURL="/icons/hobby5.JPG" width={400} height={800} />
      </div>
      <div className=" flex flex-wrap">
        <h1 className="heading pt-4">Met some friends..</h1>

        <FlexibleImage
          imageURL="/icons/friends1.JPG"
          width={400}
          height={800}
        />
        <FlexibleImage
          imageURL="/icons/friends2.JPG"
          width={400}
          height={800}
        />
        <FlexibleImage
          imageURL="/icons/friends3.JPG"
          width={400}
          height={800}
        />
        <FlexibleImage
          imageURL="/icons/friends4.JPG"
          width={400}
          height={800}
        />
        <FlexibleImage
          imageURL="/icons/friends5.JPG"
          width={400}
          height={800}
        />
        <FlexibleImage
          imageURL="/icons/friends6.JPG"
          width={400}
          height={800}
        />
      </div>
    </div>
  );
};

export default Gallery;
