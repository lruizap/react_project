import { VscBug } from "react-icons/vsc";

export const Post = () => {
  return (
    <button
      onClick={() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then((Response) => Response.json())
          .then((data) => console.log(data))
          .catch((error) => console.error(error));
      }}
    >
      <VscBug /> Traer Datos
    </button>
  );
};
