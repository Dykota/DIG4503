import Head from 'next/head';
import Link from 'next/link';
import styles from "../components/CSS/style.module.css";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <div>
        <p className={styles.text}>
            Search for Pokemon
        </p>

        <p>
        <Link href="/idpage">
          <a>Search by ID</a>
        </Link>
        </p>
        
        <p>
        <Link href="/namepage">
            <a>Search by Name</a>
        </Link>
        </p>
       
        <p>
        <Link href="/typepage">
            <a>Search by Type</a>
        </Link>
        </p>
      </div>
    </div>
  );
}

export default Home;