import { Outlet } from "react-router-dom";
import MainLayout from "../../layout/mainLayout/MainLayout";

const HomePage = () => {
  return (
    <MainLayout>
      
        <Outlet></Outlet>
    
    </MainLayout>
  );
};

export default HomePage;
