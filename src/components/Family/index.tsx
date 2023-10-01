import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.css";

/* Компонент Family в function-стиле
*/
//{ data, path } = props
const Family = ({ data, path }) => {
  return (
      /* Создание компонента с оберткой
      * внутри также генерируется верхняя навигационная панель из Link'ов */
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <nav className={styles.nav}>
          {data.map((item, index) => (
            <Link key={index} href={`/${path}#image-${index}`}>
              <div className={styles.navItem}>
                <Image
                  layout="fill"
                  className={styles.navImg}
                  src={`/images/${path}/${item}.jpg`}
                  alt={`img${item}`}
                />
              </div>
            </Link>
          ))}
        </nav>
          {/* Добавление элементов картинок в DOM */}
        <div className={styles.gallery}>
          {data.map((item, index) => (
            <div key={index} className={styles.galleryImg}>
              <Image
                layout="fill"
                objectFit="contain"
                id={`image-${index}`}
                src={`/images/${path}/${item}.jpg`}
                alt={`img${item}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Family;
