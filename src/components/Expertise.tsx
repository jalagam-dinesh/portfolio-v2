import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const frontend = [
    "React.js",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Angular",
];

const backend = [
    "Java",
    "Spring Boot",
    "Spring MVC",
    "Spring Data JPA",
    "Spring Batch",
    "Spring Security",
    "Microservice architecture",
    "Hibernate",
    "Eureka Server",
];

const databases = [
    "MySQL",
    "PostgreSQL",
    "Redis",
    "MongoDB",
    "Cosmos DB"
];

const cloud = [
    "AWS",
    "Microsoft Azure"
];

const DevOps = [
    "Jenkins",
    "Docker",
    "Kubernetes"
];

const Monitoring_Logging = [
    "Log4j",
    "Slf4j",
    "AWS CloudWatch",
    "DataDog",
    "Splunk"
];

const Messaging = [
    "Apache Kafka",
    "RabbitMQ"
];

const testing = [
    "Jest",
    "Enzyme",
    "Jasmine",
    "JUnit",
    "Mockito",
    "Postman",
    "Selenium"
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>
                <div className="skills-grid">
                    <div className="skill">
                        <h3>Front End</h3>
                        <div className="flex-chips">
                            {frontend.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <h3>Back End</h3>
                        <div className="flex-chips">
                            {backend.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <h3>Database</h3>
                        <div className="flex-chips">
                            {databases.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <h3>Cloud Platforms</h3>
                        <div className="flex-chips">
                            {cloud.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <h3>DevOPs Tools</h3>
                        <div className="flex-chips">
                            {DevOps.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <h3>Monitoring & Logging</h3>
                        <div className="flex-chips">
                            {Monitoring_Logging.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <h3>Messasging Systems</h3>
                        <div className="flex-chips">
                            {Messaging.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <h3>Testing frameworks</h3>
                        <div className="flex-chips">
                            {testing.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Expertise;