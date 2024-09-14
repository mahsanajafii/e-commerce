import { Outlet } from "react-router-dom";
import SideMenu from "../../components/sidemenu/SideMenu";
const HomePage = () => {
  return (
    //here , instead of div we shoud have mainLayout
    <div>
      <SideMenu></SideMenu>
      {/* here , instead of div we shoud have something like content */}
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default HomePage;
