import React, { useEffect } from "react";
import { Space, Table, Tag } from 'antd';

import { store } from "../../store";
const { getModelDispatchers, useModelState } = store;

import { ReservaContainer } from "./ReservasElement";

const Reserva = () => {

const { getAllUserBookingsById } = getModelDispatchers("reserva");
const { reservas } = useModelState('reserva');
const { canchas } = useModelState('cancha');

useEffect(() => { 
  getAllUserBookingsById();
}, []);


const columns = [
  {
    title: 'Código',
    dataIndex: 'cod',
    key: 'cod',
    render: (text) => <Tag color="geekblue" key={text} bordered>
                      {text}
                      </Tag>,
  },
  {
    title: 'Fecha',
    dataIndex: 'fecha',
    key: 'fecha',
    render: (date) => <strong>{formatFecha(date)}</strong>,
  },
  {
    title: 'Hora',
    dataIndex: 'DateId',
    key: 'DateId',
  },
  {
    title: 'Cancha',
    key: 'SoccerFieldId',
    dataIndex: 'SoccerFieldId',
    render: (canchaId) => <strong>{nombreCancha(canchaId)}</strong>
  },
  {
    title: 'Estado',
    key: 'estado',
    render: (_, record) => (
      <Space size="middle">
        <a>Cancelar {record.name}</a>
      </Space>
    ),
  },
];

const formatFecha = (fechaString) =>{
  const date = new Date(fechaString);
  const formattedDate = date.toLocaleDateString('en-US', { day: 'numeric', month: 'numeric', year: 'numeric' });
  return formattedDate;
};

const nombreCancha = (canchaId) => {
  const objetoBuscado = canchas.find(cancha => cancha.id === canchaId);
  return objetoBuscado.name;
}





return (
  <ReservaContainer id="reservas"> 
    <div className="title">
      <div className="titleHolder">
        <h2>Mis reservas</h2>
      </div>
    </div>

    <Table columns={columns} dataSource={reservas} />
  </ReservaContainer>
);
};

export default Reserva;
