import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.intro}>
            <h3>Presenting...</h3>
            <h1>Code-A-Site 2026</h1>
            <h6>April @ Stony Brook University</h6>
            <div className={styles.ctas}>
              <a
                className={styles.primary}
                href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Register
              </a>
            </div>
          </div>
        </section>

        <div className={styles.sections}>
          <pre className="heading">About!</pre>
          <div className={styles.prose}>
            <p>
              Code-A-Site is a hackathon. We're looking for coders. It'll be in-person. 
              We'll have workshops, free food, and prizes.
            </p>
            <p>
              Code-A-Site is run by Web Development Club.
            </p>
          </div>

          <pre className="heading">Prizes!</pre>

          <pre className="heading">Schedule!</pre>

          <pre className="heading">Questions!</pre>

          <pre className="heading">Sign Up!</pre>
        </div>

      </main>
    </div>
  );
}
