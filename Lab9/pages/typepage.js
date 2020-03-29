import Head from 'next/head';
import Link from 'next/link';
import TypeSearch from '../components/TypeSearch';
import styles from "../components/CSS/style.module.css";

const Type = () => {
  return (
    <div>
      <Head>
        <title>Search by Type</title>
      </Head>
      <div>
        <p className={styles.text}>
            Enter a Pokemon Type
        </p>
        <div>
            <TypeSearch />
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

        <p>
        <Link href="/namepage">
            <a>Search by Name</a>
        </Link>
        </p>
      </div>
    </div>
  );
}

export default Type;