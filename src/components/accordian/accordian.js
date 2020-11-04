import { React } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Timeline from './timeline';

const CustomAccordian = ({ data }) => (
    <Accordion>
        {
            data && data.map(item => (
                <Card key={item.id}>
                    <Accordion.Toggle as={Card.Header} eventKey={item.id}>
                        {item.title}
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