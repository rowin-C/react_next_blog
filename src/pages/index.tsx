import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import style from "./Home.module.css";

export default function Home() {
  return (
    <main>
      <section>
        <div className={style.center}>
          <div className={style.left}>
            <h1>LATEST</h1>
            <h2>Python to 3D model - Blender</h2>
            {/* <h2 className={style.date">dated 22 22 22</h2> */}
            <p>
              Effortlessly Create 3D Models in Blender with Python: A Beginner's
              Guide
            </p>
            <div className={style.view}>
              <div className={style.viewText}>
                <a href="/articles/article5">View</a>
              </div>
            </div>
          </div>
          <div className={style.right}>
            <div className={style.image}>
              <a href="/articles/article5">
                <img
                  className={style.imgset}
                  src="images\art5.png"
                  alt=" art4"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* page2 */}
      <section>
        <div className={style.page2}>
          <h1>Also Read</h1>
        </div>
        <div className={style.articles}>
          <div className={style.article}>
            <div className={style.poto}>
              <a href="/articles/article1">
                <img
                  className={style.imgset}
                  src="images\art1.jpg"
                  alt=" art1"
                />
              </a>
            </div>
            <div className={style.context}>
              Understanding Cybersecurity Threats
            </div>
          </div>
          <div className={style.article}>
            <div className={style.poto}>
              <a href="/articles/article2">
                <img
                  className={style.imgset}
                  src="images\art2.jpg"
                  alt=" art1"
                />
              </a>
            </div>
            <div className={style.context}>
              Exploring the World of Virtual Reality
            </div>
          </div>
          <div className={style.article}>
            <div className={style.poto}>
              <a href="/articles/article3">
                <img
                  className={style.imgset}
                  src="images\art3.webp"
                  alt=" art1"
                />
              </a>
            </div>
            <div className={style.context}>
              The Future of Work: Corona aftermath
            </div>
          </div>
        </div>
        <div className={style.articles}>
          <div className={style.article}>
            <div className={style.poto}>
              <a href="/articles/article4">
                <img
                  className={style.imgset}
                  src="images\art4.jpg"
                  alt=" art1"
                />
              </a>
            </div>
            <div className={style.context}>
              Exploring the Future of Artificial Intelligence:
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
