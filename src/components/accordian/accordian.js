import { React } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Timeline from './timeline';

const CustomAccordian = ({ data }) => (
    <Accordion>
        {
            data && data.map((item, index) => {
                return (
                    <Card key={index}>
                        <Accordion.Toggle as={Card.Header} eventKey={index}>
                            {item.title}
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={index}>
                            <Card.Body>
                                <Timeline timelineData={item.TimelineData} />
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                )
            })
        }
    </Accordion>
);

export default CustomAccordian;