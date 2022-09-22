import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <Link href={"/counter"} passHref>
        <a>Counter</a>
      </Link>
    </div>
  );
};

export default Home;
