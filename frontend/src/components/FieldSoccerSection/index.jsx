import React, {useState , useEffect } from 'react'
import { Row, Col, Card, Button, Drawer} from 'antd'
import { FieldSoccerContainer } from './FieldSoccerSectionElement'
const { Meta } = Card;

import './FieldSoccerSection.css'

import { store } from '../../store';
const { useModelDispatchers, useModelState } = store;

const FieldSoccerSection = () => {

  const { getAllSoccerFields } = useModelDispatchers('cancha');
  const { canchas } = useModelState('cancha');

  const [open, setOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => { 
      getAllSoccerFields();
  }, []);

  const showDrawer = (key) => {
    setOpen(true);
    setSelectedCard(key);
  };
  const onClose = () => {
    setOpen(false);
    setSelectedCard(null);
  };

  if (!canchas) return <div>Cargando Canchas...</div>;

  return (
      <FieldSoccerContainer id="canchas">
        <div className="container-fluid">
          <div className="titleHolder">
            <h2>Nuestras canchas</h2>
          </div>
          <Row gutter={[36, 16]}>

          {canchas.map((item)=>{
            return(
              <Col xs={{ span: 24 }}
                  sm={{ span: 12 }} 
                  md={{ span: 8 }} 
                  key={item.id}>

                <Card
                  hoverable
                  cover={ <img alt={item.name} 
                              src={item.img}
                              width={500}
                              height={250} />
                        }
                >
                  <Meta title={item.name} 
                        description={<Button type="primary" onClick={()=>showDrawer(item.id)}>
                      Detalle
                    </Button>} />
                    {selectedCard == item.id && (
                      <Drawer
                        title= {item.name}
                        style={{height:'300px'}}
                        placement="top"
                        closable={true}
                        onClose={ onClose }
                        open={open}
                        getContainer={false}
                      >
                        {item.description}
                      </Drawer>
                      )}
                </Card>
              </Col>
            )
          })}
          </Row>
        </div>
      </FieldSoccerContainer>
  )
}

export default FieldSoccerSection
