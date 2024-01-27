/* eslint-disable react/prop-types */
import { FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
/* import useFetch from "../hooks/useFetch"; */
import { cameras } from "../dataLocal";

const CategoryNavMobile = ({ setCatNavMobile }) => {
  /* const { data } = useFetch("/categories"); */

  const uniqueTypes = cameras.reduce((acumulador, camera) => {
    if (!acumulador[camera.type]) {
      acumulador[camera.type] = { id: camera.typeId, type: camera.type };
    }
    return acumulador;
  }, {});
  const typesCamera = Object.values(uniqueTypes);

  return (
    <div className=" w-full h-full bg-primary p-8">
      {/* close icon */}
      <div
        className=" flex justify-end mb-8 cursor-pointer "
        onClick={() => setCatNavMobile(false)}
      >
        <FiX className="text-3xl" />
      </div>
      <div className="flex flex-col gap-y-8">
        {
          /* data? */ typesCamera.map((category) => {
            return (
              <Link
                to={`/products/${category.id}`}
                className=" uppercase font-medium"
                key={category.id}
              >
                {/* {category.attributes.title}  */} {category.type} cameras
              </Link>
            );
          })
        }
      </div>
    </div>
  );
};

export default CategoryNavMobile;
