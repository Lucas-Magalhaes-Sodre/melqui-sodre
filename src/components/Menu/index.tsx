import { useBreakpointValue } from '@chakra-ui/react';
import { Spin as Hamburger } from 'hamburger-react';
import { useState } from 'react';

import { Link } from '../Link';
import styles from './styles.module.scss';

export function Menu() {
  const isWideVersion = useBreakpointValue({ base: false, xl: true, lg: true });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (isWideVersion) {
    return (
      <div className={styles.header}>
        <Link href="#sobre-mim">Sobre Mim</Link>
        <Link href="#sobre-mim">Tecnologias</Link>
        <Link href="#sobre-mim">Projetos</Link>
        <Link href="#sobre-mim">Contatos</Link>
      </div>
    );
  }

  return (
    <>
      <div className={styles.menuMobile}>
        <div className={styles.buttonMenuContainer}>
          <Hamburger color="#fff" toggled={isMenuOpen} toggle={setIsMenuOpen} />
        </div>

      </div>

      {
                isMenuOpen && (
                <div className={styles.menuMobileFull}>
                  <div className={styles.navigator}>
                    <Link href="#sobre-mim">Sobre Mim</Link>
                    <Link href="#sobre-mim">Tecnologias</Link>
                    <Link href="#sobre-mim">Projetos</Link>
                    <Link href="#sobre-mim">Contatos</Link>
                  </div>
                </div>
                )
            }
    </>
  );
}
