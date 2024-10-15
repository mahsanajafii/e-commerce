import { ReactNode } from "react";
import { useSidebarStore } from "../../stores/sidebarStore";
import AdminMenu from "../../components/adminComponents/adminMenu/AdminMenu";
import { adminStore } from "../../stores/adminStore";
interface IContent {
  children: ReactNode;
}

const Content = ({ children }: IContent) => {
  const { expanded, setExpanded } = useSidebarStore();
  const { isAdmin } = adminStore();

  return (
    <section
      className={`rel w-full  bg-base-backgrond mr-32 min-h-screen ${
        expanded && "blur-[0.2rem] brightness-95"
      } `}
      onClick={() => setExpanded()}
    >
      {isAdmin ? <AdminMenu /> : null}
      {children}
    </section>
  );
};

export default Content;
