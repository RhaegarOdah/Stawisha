import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_note_list_re_r4u9.svg').default,
    description: (
      <>
        Stawisha's user interface and navigation is intuitive. The service thus allows anyone to
        self-orient and immediately become part of the community.'
      </>
    ),
  },
  {
    title: 'Excellent Service',
    Svg: require('@site/static/img/undraw_chat_bot_re_e2gj.svg').default,
    description: (
      <>
        Stawisha's agile organizational hierachy and client-centred approach,
        we are able to guarantee premier products and service to all members.'
      </>
    ),
  },
  {
    title: 'Excellent Returns',
    Svg: require('@site/static/img/undraw_investment_data_re_sh9x (1).svg').default,
    description: (
      <>
       The grameen  model of operation adopted by Stawisha allows most of the benefits accrued for
       the members to remain within the eco-system and thus ensuring higher than market-level returns
       for investors.
      </>
    ),
  },
  {
      title: 'Secure',
      Svg: require('@site/static/img/undraw_mobile_encryption_re_yw3o.svg').default,
      description: (
        <>
         Stawisha has employed the most robust cryptography protocals to ensure that member deposits, data and
         transactions are always safe.
        </>
      ),
    },

];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
