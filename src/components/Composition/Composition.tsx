import React, { FC } from 'react';
import styles from './Composition.module.css';

interface CompositionProps {}

const Composition: FC<CompositionProps> = () => (
  <div className={styles.Composition} data-testid="Composition">
    Composition Component
  </div>
);

export default Composition;
