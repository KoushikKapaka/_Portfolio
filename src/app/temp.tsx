import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Carlos Mafía - Full-Stack Web Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/projects">
              <a>Projects</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
        <div className="nav-switch">
          <input type="checkbox" id="theme-switch" />
          <label htmlFor="theme-switch">Light/Dark</label>
        </div>
      </nav>

      <main className="main">
        <div className="main-content">
          <h1 className="main-title">Carlos Mafía</h1>
          <h2 className="main-subtitle">Full-Stack Web Developer</h2>
          <p className="main-description">
            Im a full-stack web developer and I work remotely from South
            America.
          </p>
          <button className="main-button">CV</button>
        </div>
        <div className="main-image">
          <Image
            src="/carlos.jpg"
            alt="Carlos Mafía"
            width={300}
            height={300}
          />
        </div>
      </main>
    </div>
  );
}
