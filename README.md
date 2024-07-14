

# 👩‍⚕️🦷SobreVidas ACS



Este repositório contém o código-fonte de um sistema de monitoramento de pacientes em grupo de risco para o câncer de boca, feito para o uso de Agentes Comunitários de Saúde (ACS). 
O sistema é desenvolvido utilizando Golang, HTML, CSS e integra um banco de dados gerenciado pelo pgAdmin4

## Sumário

- 📖[Descrição do Projeto](#descrição-do-projeto)
- 👥[Equipe](#equipe)
- 📽️[Vídeos](#videos)
- 💻[Funcionalidades](#funcionalidades)
- 🗂️[Requisitos](#requisitos)
- 🌎[Tecnologias Utilizadas](#tecnologias-utilizadas)
- 👨‍💻[Como rodar](#como-rodar)
- [Estrutura do Projeto](#estrutura-do-projeto)


## 📖Descrição do Projeto

SobreVidas ACS é uma plataforma web de uso destinada aos Agentes Comunitários de Saúde para possibilitar o monitoramento e a identificação precoce de pacientes com risco para câncer de boca.

## 👥Equipe
O grupo responsável pela criação e implementação do projeto armazenado nesse repositorio é o grupo 09, a seguir encontra-se os nomes dos integrantes, juntamente com o link para o perfil de cada um:
- [Ana Luísa Pereira dos Santos](https://github.com/AnaLuisaPS07) 
- [Luis Vittor Ferreira Nunes](https://github.com/LuisVittor)
- [David Daves Ferreira Pinto](https://github.com/daviddaves1)
- [Rodrigo Luiz Ferreira Ramos](https://github.com/rodrigoluizf)

## 📽️Vídeos
- Pitch sobre caracteristicas do sistema:
- Vìdeo sobre os detalhes so sistema:


### 💻Funcionalidades

A interface da plataforma é projetada com uma abordagem intuitiva e amigável, contendo as seguintes seções principais:

- **Consultas**: Agendamento prático de consultas para os pacientes.
- **Usuário**: Gerenciamento de informações dos usuários.
- **Monitoramento**: Ferramenta para monitorar o progresso e estado dos pacientes.
- **Relatórios de Acompanhamento**: Visualização e geração de relatórios sobre o estado dos pacientes.
- **Cadastro de Pacientes**: Possibilidade de adicionar novos pacientes ao sistema de forma rápida e fácil.
- **Busca e Filtro de Pacientes**: Pesquise pacientes por critérios específicos.
- **Informações**: Acesso a informações adicionais.
- **Suporte**: Contato e recursos de suporte técnico.



## 🗂️Requisitos

Para executar este projeto, você precisará ter instalado:

- Golang (versão 1.16 ou superior)
- PostgreSQL (versão 12 ou superior)
- pgAdmin4
- Git


## 🌎Tecnologias utilizadas
As tecnologias utilizadas para a criação e execução desse projeto estão a seguir:

![Go](https://img.shields.io/badge/go-%2300ADD8.svg?style=for-the-badge&logo=go&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
![Discord](https://img.shields.io/badge/Discord-%235865F2.svg?style=for-the-badge&logo=discord&logoColor=white)

## 👨‍💻Como rodar
1. Entre no seu VSCode e clone este repositório.
   ```sh
    git clone https://github.com/daviddaves1/projeto-Integrador-SobreVidas-ACS.git
    cd (cole aqui o caminho para o aquivo)
    ```


### Acesso ao banco de dados
1. Iniciar o pgAdmin
2. Clicar em Object > Register > Server...
3. Clicar em General > Escreva o nome do seu servidor de banco de dados
4. Clicar em Connection > Host name/address: escreva localhost | Username: postgres | Senha: postgres
5. Criar um banco de dados com o nome do seu projeto
6. Dentro do banco de dados procure > Pastas. Caso pastas criadas, deleteas

### VScode

- Volte ao VScode, na pasta do repositório que foi clonado, procure o arquivo ".env" e coloque as informações do seu banco de dados (Usuário do postgres/ Senha do usuário do postgres/Nome informado ao criar o banco de dados)
- Abra o terminal e execute o comando go run .
- Se tudo der certo será exibida uma mensagem: Server rodando na porta 8080
- Está no ar! No seu navegador, acesse: localhost:8080/inicio
   
