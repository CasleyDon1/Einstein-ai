import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Landing = () => {
  return (
    <div>
     Landing Page (Unprotected)
      <div>
        <Link href="/sign-in">
          <Button>
	    Log In
	  </Button>
	</Link>
	<Link href="/sign-up">
          <Button>
            Register
          </Button>
      </Link>
      </div>
    </div>
  );
}

export default Landing;
