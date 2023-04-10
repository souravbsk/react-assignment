import React from "react";
import Banner from "../Banner/Banner";

const Blog = () => {
  return (
    <div>
      <Banner>Blogs</Banner>
      <div className="container space-y-5 mt-8 md:mt-32">
        <div className="space-y-2">
          <h2 className="font-semibold text-2xl">What is Context API ?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi totam
            exercitationem veniam consequatur modi voluptate vero, consequuntur
            inventore nemo sed quidem autem praesentium magni deserunt eum illum
            earum, suscipit velit.
          </p>
        </div>
        <div className="space-y-2">
          <h2 className="font-semibold text-2xl">What is Custom Hook ?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi totam
            exercitationem veniam consequatur modi voluptate vero, consequuntur
            inventore nemo sed quidem autem praesentium magni deserunt eum illum
            earum, suscipit velit.
          </p>
        </div>
        <div className="space-y-2">
          <h2 className="font-semibold text-2xl">What is useRef ?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi totam
            exercitationem veniam consequatur modi voluptate vero, consequuntur
            inventore nemo sed quidem autem praesentium magni deserunt eum illum
            earum, suscipit velit.
          </p>
        </div>
        <div className="space-y-2">
          <h2 className="font-semibold text-2xl">What is useMemo ?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi totam
            exercitationem veniam consequatur modi voluptate vero, consequuntur
            inventore nemo sed quidem autem praesentium magni deserunt eum illum
            earum, suscipit velit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
