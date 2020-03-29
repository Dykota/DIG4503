import Head from 'next/head';
import Link from 'next/link';
import IdSearch from '../components/IdSearch';
import styles from "../components/CSS/style.module.css";

const Id = () => {
  return (
    <div>
      <Head>
        <title>Search by ID</title>
      </Head>
      <div>
        <p className={styles.text}>
            Enter an ID of a Pokemon
        </p>
        <div>
            <IdSearch />
            <h2>Reporting</h2>
            <div className={styles.report} id="reportingArea"></div>
        </div>

        <p>
        <Link href="/index">
            <a>Home</a>
        </Link>
        </p>

        <p>
        <Link href="/namepage">
            <a>Search by Name</a>
        </Link>
        </p>

        <Link href="/typepage">
            <a>Search by Type</a>
        </Link>
      </div>
    </div>
  );
}

export default Id;