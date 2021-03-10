import Meta from "./Meta";
const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <h1>Layout</h1>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis fuga, officiis ducimus laboriosam
          incidunt labore doloribus, eveniet, aperiam itaque cupiditate temporibus officia nesciunt? Ullam voluptas ex
          nobis, vero deleniti officiis. Doloremque fuga assumenda nulla consectetur sunt necessitatibus sint laboriosam
          hic autem aspernatur debitis, quam reiciendis eius aliquam voluptas delectus inventore doloribus repudiandae,
          magnam veritatis officia cupiditate mollitia id. Voluptatum, cumque.
        </p>
      </div>
      {children}
    </>
  );
};

export default Layout;
