import React,{ useState }  from 'react';
import { Button, Form, Input, Modal, message } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

import { store } from '../store';
const { useModelState, getModelDispatchers } = store;

const RegisterModal = ({
  handleCloseRegister,
  isRegisterModalOpen,
  handleLogin,
  isLoginModalOpen,
}) => {
  const { register } = getModelDispatchers('authentication');
  const [loading, setLoading] = useState(false);

  const [formRegister] = Form.useForm();

  const handleOk = () => {
    setLoading(true);

    formRegister.validateFields()
    .then((values) => register(values))
    .then((resp) => { message.info(resp);
                      handleCloseRegister();
                      setLoading(false);
                      formRegister.resetFields();
          })
    .catch(error => message.error(error)); 
  };

  const handleLoginClick = () => {
    formRegister.resetFields();
    // onLoginClick();
    handleCloseRegister();
    handleLogin();
  };
  return (
    <Modal
      title="Registrarse"
      open={isRegisterModalOpen}
      onOk={handleOk}
      onCancel={handleCloseRegister}
      //confirmLoading={loading}
      okText="Enviar"
      cancelText="Iniciar Sesion"
      footer={[
        <Button key="cancel" onClick={handleLoginClick}>
          Iniciar Sesion
        </Button>,
        <Button
          key="submit"
          type="primary"
          loading={loading}
          onClick={handleOk}
        >
          Enviar
        </Button>,
      ]}
    >
      <Form
        name="normal_register"
        className="register-form"
        initialValues={{
          remember: true,
        }}
        // onFinish={onFinish}
        form={formRegister}
      >
        <Form.Item
          name="name"
          label="Nombre"
          rules={[
            {
              required: true,
              message: 'Por favor, introduzca su nombre!',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            type="text"
            placeholder="Nombre"
          />
        </Form.Item>
        <Form.Item
          name="lastname"
          label="Apellido"
          rules={[
            {
              required: true,
              message: 'Por favor, introduzca su apellido!',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            type="text"
            placeholder="Apellido"
          />
        </Form.Item>        
        <Form.Item
          name="email"
          label="Correo Electronico"
          rules={[
            {
              required: true,
              message: 'Por favor, introduzca su email!',
            },
            {
              type: 'email',
              message: 'Introduzca un email valido',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            type="email"
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          label="Contraseña"
          rules={[
            {
              required: true,
              message: 'Por favor, introduzca su contraseña!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Contraseña"
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default RegisterModal;
