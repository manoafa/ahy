import React from 'react';

import Attribute from '../Attribute';

import * as styles from './AttributeGrid.module.css';

const AttributeGrid = (props) => {
  return (
    <div className={styles.root}>
      <Attribute
        icon={'delivery'}
        title={'Livraison Gratuite Dans Tout Madagascar*'}
        subtitle={'Jusqu\'à votre porte'}
      />
      <Attribute
        icon={'cycle'}
        title={'Retour'}
        subtitle={'Retour de marchandise sous 30 jours'}
      />
      <Attribute
        icon={'creditcard'}
        title={'Paiement Sécurisé'}
        subtitle={'Achetez en toute sécurité'}
      />
    </div>
  );
};

export default AttributeGrid;
