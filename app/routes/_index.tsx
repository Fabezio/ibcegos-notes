import type { MetaFunction } from "@remix-run/node";
import { Card, Col, ListGroup, Row } from "react-bootstrap";
import { data } from "~/data/ibcegos";
import Header from "~/template/Header";

export const meta: MetaFunction = () => {
  return [
    { title: "POEC IB-CEGOS" },
    { name: "description", content: "POEC IB-CEGOS" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <Header>POEC IB-CEGOS</Header>
      <Row>
        {data.map(item => (

          <Col key={item.title}>
            <Card border='success' bg={`${item.background}`} text={`${item.text}`}>
              <Card.Body>
                <Card.Title>
                  {item.title}
                </Card.Title>
                <Card.Text>
                  <ListGroup variant='flush'>
                    {item.content.map((line, k) => (
                      <ListGroup.Item key={k} className={`bg-${item.background} text-${item.text}`}>{line}</ListGroup.Item>

                    ))}

                  </ListGroup>
                </Card.Text>
              </Card.Body>

            </Card>
          </Col>
        ))
        }

      </Row>
     
    </div>
  );
}
