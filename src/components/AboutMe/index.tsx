import Image from 'next/image';
import avatar from '../../../public/Melqui.png';

import styles from './styles.module.scss';

export function AboutMe() {
  return (
    <div id="sobre-mim" className={styles.container}>

      <div className={styles.content}>
        <Image alt="Melqui Sodré" src={avatar} />
      </div>

      <div className={styles.content}>
        <h1>Sobre mim</h1>

        <p>
          Sempre aprendendo as melhores tecnologias, para continuar evoluindo.
          Estudando Javascript e Typescript focado nos frameworks ReactJs e NodeJs e React Native.
        </p>
      </div>
    </div>
  );
}
