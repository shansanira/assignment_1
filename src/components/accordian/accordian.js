import { React } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Timeline from './timeline';
import './timeline.scss';

const CustomAccordian = ({ data }) => (
    <Accordion>
        {
            data && data.map(item => (
                <Card key={item.id}>
                    <Accordion.Toggle as={Card.Header} eventKey={item.id} className="card-header">
                        <h6>{item.title}</h6>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={item.id}>
                        <Card.Body>
                            <Timeline timelineData={item.TimelineData} />
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            ))
        }
    </Accordion>
);

export default CustomAccordian;