import { navItems } from "@/nav-items";
import { Outlet } from "react-router-dom";
import { DesktopNavbar } from "./_components/DesktopNavbar";
import { MobileSheet } from "./_components/MobileSheet";
import { UserMenu } from "./_components/UserMenu";

const Layout = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <DesktopNavbar navItems={navItems} />
        <MobileSheet navItems={navItems} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <UserMenu />
        </div>
      </header>
      <main className="flex-grow overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;