import React from 'react'
import { FormattedMessage } from 'react-intl'
import Card from '../Card/Card';
import './Services.css'

import serviceDeiverySVG from '../../images/service.delivery.svg';
import serviceConferenceSVG from '../../images/service.conference.svg';
import serviceMarketingSVG from '../../images/service.marketing.svg';
import serviceConsultSVG from '../../images/service.consult.svg';

export default function Services() {
  return (
    <div className="module services">
      <h1 className="module-title">
        <FormattedMessage id="ourServices" />
      </h1>
      <div className="grid two-column service-content">
        <Card
          title={<FormattedMessage id="service.logistics" />}
          description={<FormattedMessage id="service.logistics.detail" />}
          img={<img src={serviceDeiverySVG} />}
        />
        <Card
          title={<FormattedMessage id="service.marketing" />}
          description={<FormattedMessage id="service.marketing.detail" />}
          img={<img src={serviceMarketingSVG} />}
        />
        <Card
          title={<FormattedMessage id="service.exhibition" />}
          description={<FormattedMessage id="service.exhibition.detail" />}
          img={<img src={serviceConferenceSVG} />}
        />
        <Card
          title={<FormattedMessage id="service.consult" />}
          description={<FormattedMessage id="service.consult.detail" />}
          img={<img src={serviceConsultSVG} />}
        />
      </div>
    </div>
  )
}
