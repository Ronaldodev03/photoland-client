/* import useFetch from "../hooks/useFetch";*/
import { cameras } from "../dataLocal";
import { Link } from "react-router-dom";
const CategoryNav = () => {
  /*   const data = useFetch("/categories");*/

  const uniqueTypes = cameras.reduce((acumulador, camera) => {
    if (!acumulador[camera.type]) {
      acumulador[camera.type] = { id: camera.typeId, type: camera.type };
    }
    return acumulador;
  }, {});
  const typesCamera = Object.values(uniqueTypes);

  return (
    <aside className=" hidden xl:flex">
      <div className=" bg-primary flex flex-col w-[17.875rem] h-[31.25rem] rounded-[0.5rem] overflow-hidden">
        <div className=" text-primary bg-accent py-4 uppercase font-semibold flex items-center justify-center">
          Browse Categories
        </div>
        <div className=" flex flex-col gap-y-6 p-6">
          {
            /* data?.data?.map((category) */ typesCamera.map((category) => {
              return (
                <Link
                  to={`/products/${category.id}`}
                  className=" cursor-pointer uppercase"
                  key={category.id}
                >
                  {/* {category.attributes.title} */}
                  {category.type}
                </Link>
              );
            })
          }
        </div>
      </div>
    </aside>
  );
};

export default CategoryNav;
