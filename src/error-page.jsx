import { useRouteError } from "react-router-dom";
import AppLayout from "./layouts/appLayout.jsx";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <AppLayout>
      <div id="error-page" className="w-full h-screen flex flex-col justify-center items-center">
        <div className="p-4 bg-pokeball-white shadow-lg rounded text-center">
          <img className="w-1/2 mx-auto object-contain" src="/assets/pokeball.png" />
          <h1 className="text-2xl bold mb-3">Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p className="text-pokeball-red">
            <i>{error.statusText || error.message}</i>
          </p>
        </div>
      </div>
    </AppLayout>
  );
}