import React from "react";
import styles from "./style.module.css";
const blogs = [
  {
    img: "./posts/post11.png",
    text: "2024 BMW ALPINA XB7 with exclusive details,extraordinary",
    tag: "Sound",
  },
  {
    img: "./posts/post2.png",
    text: "BMW X6 M50i is designed to exceed your sportiest.",
    tag: "Accessories",
  },
  {
    img: "./posts/post3.png",
    text: "BMW X5 Gold 2024 Sport Review: Light on Sport",
    tag: "Exterior",
  },
];
const LatestBlog = () => {
  return (
    <div className={styles.main_container}>
      <h1 className={styles.header}>latest blog posts</h1>
      <div className={styles.card_container}>
        {blogs.map(({ img, text, tag }) => {
          return (
            <div className={styles.card_item}>
              <img className={styles.card_img} src={img} alt="" />
              <button className={styles.card_tag}>{tag}</button>
              <p className={styles.img_label}>Admin {""}November 22,2023</p>
              <p className={styles.textblog}>{text}</p>
            </div>
          );
        })}
      </div>{" "}
    </div>
  );
};

export default LatestBlog;
