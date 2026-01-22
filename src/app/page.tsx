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
              <a
                className={styles.secondary}
                href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Documentation
              </a>
            </div>
          </div>
        </section>


        <section className={styles.aboutSection}>
          <pre className="heading">About!</pre>
        </section>

        <section className={styles.prizesSection}>
          <pre className="heading">Prizes!</pre>
        </section>

        <section className={styles.scheduleSection}>
          <pre className="heading">Schedule!</pre>
        </section>

        <section className={styles.questionsSection}>
          <pre className="heading">Questions!</pre>
        </section>

        <section className={styles.signUpSection}>
          <pre className="heading">Sign Up!</pre>
        </section>

      </main>
    </div>
  );
}
