# weather
Este é um projeto de Previsão do Tempo desenvolvido em Next.js que permite aos usuários obter informações meteorológicas para uma cidade específica.
Vercel project https://weather-eosin-beta.vercel.app/

# Recursos
Busca de previsão do tempo por nome da cidade
Exibição da previsão atual, temperatura máxima e mínima
Tema Dark Mode
Design responsivo para diferentes tamanhos de tela
Tecnologias Utilizadas
Next.js: Framework React para renderização do lado do servidor (SSR) e criação de aplicativos da web rápidos e escaláveis.
OpenWeatherMap API: API de previsão do tempo para obter os dados meteorológicos.
Axios: Cliente HTTP baseado em Promise para fazer solicitações à API.
FontAwesome: Biblioteca de ícones para exibir ícones personalizados.
CSS Modules: Para estilizar os componentes com CSS escopo.

# Instalação
1. Clone este repositório em sua máquina local:
git repo clone https://github.com/Pablios/weather.git

bash:
cd weather

1. Instale as dependências do projeto:
 1.0. cd weather-app npm install
 1.1. cd weather-api npm install

3. Inicie o servidor de desenvolvimento/app:
npm run dev

1.1. Inicie o servidor de desenvolvimento/api:
npx nest start

2. Abra o aplicativo em seu navegador:
http://localhost:3000

Configuração da API
Para que o aplicativo funcione corretamente, é necessário obter uma chave de API do OpenWeatherMap. Siga as etapas abaixo:

Acesse o OpenWeatherMap e faça login ou crie uma conta gratuita.

Após fazer login, vá para o Dashboard e copie a chave da API fornecida.

Crie um arquivo .env.local na raiz do projeto e adicione a chave da API:
NEXT_PUBLIC_WEATHER_API_KEY=sua-chave-da-api

Como Contribuir
Contribuições são bem-vindas! Se você deseja contribuir para este projeto, siga as etapas abaixo:

Crie um fork deste repositório.

Crie uma nova branch para suas alterações:
git checkout -b minha-nova-feature

Faça suas alterações e commit:
git commit -m "Minha nova feature"

Faça o push para o seu fork: perl
git push origin minha-nova-feature

Abra um pull request para a branch main deste repositório.
Licença
Este projeto está licenciado sob a Licença MIT.
