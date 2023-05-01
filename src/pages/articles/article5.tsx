import React from "react";
import style from "./article.module.css";

export default function article5() {
  return (
    <>
      <div className={style.heading}>
        <h1>Python to 3D model - Blender</h1>
      </div>
      <div className={style.mflex}>
        <div className={style.mainImage}>
          <img
            className={style.img}
            src="\images\art5.png"
            alt="image of code to 3d model"
          />
        </div>
      </div>
      <div className={style.content}>
        <p className={style.p}></p>

        <div className={style.top}>
          <h2 className={style.h2}>Intro</h2>
          <a href="/benzene.py" download>
            <button className={style.download}>Download .py ↓</button>
          </a>
        </div>
        <p className={style.p}>
          Making 3D models can seem daunting, but it doesn't have to be. With
          some knowledge of Python and basic chemistry, you can create
          structural 3D models in Blender with ease. In this article, I will
          guide you through the process of creating a 3D model using Python and
          Blender.
        </p>
        <h2 className={style.h2}>Step 1: Installing Blender</h2>
        <p className={style.p}>
          The first step is to download and install Blender, which is a free and
          open-source 3D creation software. You can download it from the
          official Blender website (
          <a
            className={style.hyper}
            style={{ textDecoration: "none" }}
            href="https://www.blender.org/"
            target="_blank"
          >
            Blender.org
          </a>
          ).
        </p>
        <p className={style.p}>
          Once installed, launch Blender and select "General" from the splash
          screen.
        </p>

        <div className={style.structure}>
          <img
            className={style.structH}
            src="\images\article5\blend1.png"
            alt=""
          />
        </div>

        <h2 className={style.h2}>Step 2: Setting up the Text Editor</h2>
        <p className={style.p}>
          After launching Blender, go to the right side of the interface and
          choose "Editor Type," then select "Text Editor." From there, select
          "Text" and then "New" to create a new Python script.
        </p>
        <div className={style.structure}>
          <img
            className={style.structV}
            src="\images\article5\blend2.png"
            alt=""
          />
          <img
            className={style.structV}
            src="\images\article5\blend3.png"
            alt=""
          />
          <img
            className={style.structV}
            src="\images\article5\blend4.png"
            alt=""
          />
        </div>
        <h2 className={style.h2}>Step 3: Writing Python Code</h2>
        <p className={style.p}>
          Writing Python code may seem overwhelming if you're new to
          programming, but we'll break it down for you. The basic idea is to
          create two shapes, a sphere, and a cylinder, and assign colors to
          represent different atoms like carbon, hydrogen, etc. The size and
          color of the cylinder represent different types of bonds, such as
          single, double, or covalent.
        </p>
        <div className={style.structure}>
          <img
            className={style.structH}
            src="\images\article5\blend5.png"
            alt="different types of shape"
          />
        </div>
        <p className={style.p}>
          Let's take the example of benzene. We'll start by defining the
          positions of the carbon and hydrogen atoms and then create the
          corresponding spheres and cylinders with appropriate colors and sizes.
        </p>
        <p className={style.p}>Defining Positions</p>
        <div
          className={style.structure}
          style={{ zoom: "2", margin: " 0 0 2rem 0" }}
        >
          <img
            className={style.structH}
            src="\images\article5\blend6.png"
            alt=""
          />
        </div>
        <p className={style.p}>
          Defining the shapes(iterating over the different vector values)
        </p>
        <div
          className={style.structure}
          style={{ zoom: "2", margin: " 0 0 2rem 0" }}
        >
          <img
            className={style.structH}
            src="\images\article5\blend7.png"
            alt=""
          />
        </div>

        <p className={style.p}>Similar approach for the bonds</p>
        <div
          className={style.structure}
          style={{ zoom: "2", margin: " 0 0 2rem 0" }}
        >
          <img
            className={style.structH}
            src="\images\article5\blend8.png"
            alt=""
          />
        </div>
        <h2 className={style.h2}>Results</h2>
        <div
          className={style.structure}
          style={{ zoom: "1.5", margin: " 0 0 2rem 0" }}
        >
          <img
            className={style.structH}
            src="\images\article5\blend9.png"
            alt=""
          />
        </div>

        <h2 className={style.h2}>Conclusion / Notes</h2>

        <p className={style.p}>
          In conclusion, creating 3D models in Blender using Python can seem
          like a challenging task, but with the right approach and basic
          knowledge, it can be an effortless process. The key is to have a clear
          understanding of the structure you want to create and to personalize
          the logic to your needs. <br />
          <br /> While we have shown an example of creating a benzene model, you
          can use Python and Blender to create various 3D models by modifying
          the code. If you are looking to try different ways of getting the
          shapes or using the bpy module, the Blender documentation is an
          excellent resource to get started.
          <br />
          <br /> Lastly, it is essential to stay up to date with the latest
          version of Blender and Python to avoid any compatibility issues. With
          these considerations in mind, you can create complex 3D models with
          ease using Python and Blender.
        </p>
      </div>
    </>
  );
}
