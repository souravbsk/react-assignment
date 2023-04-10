import React, { useEffect, useState } from "react";
import CategoryItem from "../CategoryItem/CategoryItem";


const Category = () => {

    const [categorys,setCategorys] = useState([])
    useEffect(() =>{
        fetch('categorys.json')
        .then(res => res.json())
        .then(data => setCategorys(data))
    },[] )

  return (
    <section className="mt-32  container">
      <div className="text-center space-y-2">
        <h2 className="font-bold text-slate-700 text-2xl  md:text-4xl">Job Category List</h2>
        <p className="text-slate-500">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-8 gap-6">
        {
            categorys.map(cate => <CategoryItem cate={cate} key={cate.id}></CategoryItem>)
        }
      </div>
    </section>
  );
};

export default Category;
