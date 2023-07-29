import { Button } from '@/components/ui/button';
import { UserButton } from '@clerk/nextjs';

import MobileSidebar from '@/components/mobile-sidebar';

const Navbar = () => {
  return (
    <div>
      <MobileSidebar />
      <div className="flex w-full justify-end">
	<UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}

export default Navbar;
