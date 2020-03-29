import Head from 'next/head';
import Link from 'next/link';
import NameSearch from '../components/NameSearch';
import styles from "../components/CSS/style.module.css";

const Name = () => {
  return (
    <div>
      <Head>
        <title>Search by Name</title>
      </Head>
      <div>
        <p className={styles.text}>
            Enter a name of a Pokemon
        </p>
        <div>
            <NameSearch />
            <h2>Reporting</h2>
            <div className={styles.report} id="reportingArea"></div>
        </div>

        <p>
        <Link href="/index">
            <a>Home</a>
        </Link>
        </p>

        <p>
        <Link href="/idpage">
          <a>Search by ID</a>
        </Link>
        </p>

        <Link href="/typepage">
            <a>Search by Type</a>
        </Link>
      </div>
    </div>
  );
}

export default Name;