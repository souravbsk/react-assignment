import React from "react";

const CategoryItem = ({ cate }) => {
  const { icon, title, count } = cate;
  return (
    <div className="p-10 bg-indigo-50 hover:border-indigo-400 border-indigo-50 duration-150 border rounded-lg">
      <div className="rounded-md inline px-4 py-5 bg-indigo-100">
        <img className="w-10 inline h-10" src={icon} alt="" />
      </div>
      <h3 className="mt-8 font-semibold text-slate-700 text-lg">{title}</h3>
      <p className="text-gray-500 mt-2 font-light">{count} Jobs Available</p>
    </div>
  );
};

export default CategoryItem;
