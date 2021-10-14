import React from 'react'
import { FormattedMessage } from 'react-intl'
import './Missions.css'

import missionSVG from '../../images/mission.svg';
import visionSVG from '../../images/vision.svg';
import valueSVG from '../../images/value.svg';

export default function Missions() {
  return (
    <div className="module missions">
      <h1 className="module-title">
        <FormattedMessage id="missions.title" />
      </h1>
      <div className="story">
        <div className="story-cover">
          <img src={missionSVG} />
        </div>
        <div className="story-text">
          <FormattedMessage id="mission.detail" />
        </div>
      </div>
      <div className="story">
        <div className="story-text">
          <FormattedMessage id="vision.detail" />
        </div>
        <div className="story-cover">
          <img src={visionSVG} />
        </div>
      </div>
      <div className="story">
        <div className="story-cover">
          <img src={valueSVG} />
        </div>
        <div className="story-text">
          <FormattedMessage id="value.detail" />
        </div>
      </div>
    </div>
  )
}
