import React from 'react';
import gitlogo from '../../assets/gitlogo.svg';
import { Title, Form, Repositories } from './styles';
import { FiChevronRight } from 'react-icons/fi';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={gitlogo} alt="Github Explorer" />
      <Title>Explore Repositórios no Github</Title>
      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/38678725?v=4"
            alt="redkaio"
          />
          <div>
            <strong>redkaio/github</strong>
            <p>My diploma says I am a Civil Engineer. My visit card says I am a developer. But my heart says I am a creator.</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/38678725?v=4"
            alt="redkaio"
          />
          <div>
            <strong>redkaio/github</strong>
            <p>My diploma says I am a Civil Engineer. My visit card says I am a developer. But my heart says I am a creator.</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/38678725?v=4"
            alt="redkaio"
          />
          <div>
            <strong>redkaio/github</strong>
            <p>My diploma says I am a Civil Engineer. My visit card says I am a developer. But my heart says I am a creator.</p>
          </div>

          <FiChevronRight size={20} />
        </a>

      </Repositories>

    </>
  );
};
export default Dashboard;
