import React, { PureComponent } from 'react'
import profileStyle from './Profile.module.css'

export default class Profile extends PureComponent {
  render() {
    return (
      <div>
        <div className={profileStyle.section}>Profile</div>
      </div>
    )
  }
}
