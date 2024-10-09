import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';
import Comcast from '../assets/images/comcast_logo.jpeg';
import Delta from '../assets/images/delta_dental_logo.png';
import Pfizer from '../assets/images/pfizer_logo.png';
import Thinkpalm from '../assets/images/thinkpalm_logo.jpeg'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
        <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
              contentArrowStyle={{ borderRight: '7px solid white' }}
              date="Nov 2022 - present"
              iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ flex: 1 }}>
                      <h3 className="vertical-timeline-element-title">Comcast, Philadelphia, PA</h3>
                      <h4 className="vertical-timeline-element-title">Full Stack Java Developer</h4>
                      <p>
                      Comcast Corporation is a leading media and technology company based in Philadelphia. As a major telecommunications provider, it offers cable, 
                      internet,and phone services through its Xfinity brand. I am currently enhancing the Xfinity website to improve customer support and billing 
                      management with secure payments, ticketing, and real-time updates.
                      </p>
                  </div>
                  <img
                      src={Comcast}
                      alt="Profile"
                      style={{ 
                          width: '100px', 
                          height: 'auto', 
                          position: 'absolute', 
                          top: '20px',  // Adjust the distance from the top
                          right: '20px' // Adjust the distance from the right
                      }} 
                  />
              </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
              contentArrowStyle={{ borderRight: '7px solid white' }}
              date="Apr 2021 - Oct 2022"
              iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ flex: 1 }}>
                      <h3 className="vertical-timeline-element-title">Denlta Dental Ins.,San Fransciso,CA</h3>
                      <h4 className="vertical-timeline-element-title">Full Stack Java Developer</h4>
                      <p>
                        Delta Dental Insurance is a premier provider of dental benefits, delivering comprehensive coverage and innovative solutions for 
                        individuals and businesses. I contributed to developing a web portal that streamlines access to dental benefit information, 
                        billing details, and user management functionalities, significantly enhancing the client experience.
                      </p>
                  </div>
                  <img
                      src={Delta}
                      alt="Profile"
                      style={{ 
                          width: '80px', 
                          height: 'auto', 
                          position: 'absolute', 
                          top: '20px',  // Adjust the distance from the top
                          right: '15px' // Adjust the distance from the right
                      }} 
                  />
              </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
              contentArrowStyle={{ borderRight: '7px solid white' }}
              date="Jan 2020 - Mar 2021"
              iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ flex: 1 }}>
                      <h3 className="vertical-timeline-element-title">Pfizer, NY</h3>
                      <h4 className="vertical-timeline-element-title">Full Stack Java Developer</h4>
                      <p>
                      Pfizer Inc. is a global leader in pharmaceuticals, based in New York City, dedicated to advancing healthcare through 
                      innovative medications and vaccines. I contributed to the Clinical Data Management Platform, which streamlines 
                      clinical trial data management, enhancing accuracy and efficiency to accelerate the development of life-saving therapies.
                      </p>
                  </div>
                  <img
                      src={Pfizer}
                      alt="Profile"
                      style={{ 
                          width: '100px', 
                          height: 'auto', 
                          position: 'absolute', 
                          top: '5px',  // Adjust the distance from the top
                          right: '20px' // Adjust the distance from the right
                      }} 
                  />
              </div>
          </VerticalTimelineElement>


          <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
              contentArrowStyle={{ borderRight: '7px solid white' }}
              date="Apr 2018 - Dec 2019"
              iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ flex: 1 }}>
                      <h3 className="vertical-timeline-element-title">ThinkPalm Technologies,Chennai,India</h3>
                      <h4 className="vertical-timeline-element-title">Java Software Developer</h4>
                      <p>
                      ThinkPalm Technologies is a product engineering and software services company that offers innovative technologies 
                      tailored to various industries, including Retail, Telecom, Media & Entertainment, and Manufacturing. I contributed 
                      to an eCommerce project that optimized online retail operations, enhancing user engagement and driving sales growth.
                      </p>
                  </div>
                  <img
                      src={Thinkpalm}
                      alt="Profile"
                      style={{ 
                          width: '70px', 
                          height: 'auto', 
                          position: 'absolute', 
                          top: '20px',  // Adjust the distance from the top
                          right: '5px' // Adjust the distance from the right
                      }} 
                  />
              </div>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;