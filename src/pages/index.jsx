import AppLayout from "../layouts/appLayout.jsx";
import Loader from "../components/loader.jsx";

const Index = () => {
  return (
    <AppLayout>
    < Loader isLoading={false} />
      <div className="w-full h-screen">
        <img src="/assets/banner.png" className="h-full w-full object-cover"/>
      </div>
    </AppLayout>
  );
};

export default Index;