import Root from "../routes/root.jsx";

const AppLayout = ({ children }) => {
  return (
    <div className="w-screen min-h-screen bg-pokeball-gray">
      <Root />
      <main className="h-full w-full pb-2">{ children }</main>
    </div>
  );
};

export default AppLayout;