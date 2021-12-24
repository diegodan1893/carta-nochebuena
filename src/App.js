import Snowfall from 'react-snowfall'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="nieve">
        <Snowfall />
      </div>
      <div className="App-body">
        <h1>Menú Nochebuena</h1>
        <h2>Aperitivos</h2>
        <div>
          <div>Polvorones</div>
          <div>Mantecados</div>
          <div>Bolitas de coco</div>
          <div>Surtido de canapés</div>
          <div>Surtidos de cruasanes salados</div>
          <div>Bandeja de piononos salados</div>
          <div>Surtido de almendras</div>
        </div>
        <h2>Entrantes</h2>
        <div>
          <div>Tabla de patés</div>
          <div>Degustación de jamón ibérico</div>
          <div>Surtido de quesos</div>
          <div>Langostinos Tigre</div>
        </div>
        <h2>Principales</h2>
        <h3>Primero</h3>
        <div>
          <div className="platos">
            <div>
              <div>Innovador caldo de Nochebuena</div>
              <div className="ingredientes">
                Caldo de pollo, pollo, jamón, picatostes y huevo.
              </div>
            </div>
          </div>
        </div>
        <h3>Pizzas</h3>
        <div className="platos">
          <div>
            <div>Sapore di huerta</div>
            <div className="ingredientes">
              Tomate, mozzarella, orégano, García Baquero, pollo, pimiento verde, pimiento rojo y cebolla.
            </div>
          </div>
          <div>
            <div>Salmone</div>
            <div className="ingredientes">
              Nata, bechamel, mozzarella, rulo de cabra, salmón ahumado y espinacas.
            </div>
          </div>
          <div>
            <div>Carbonara</div>
            <div className="ingredientes">
              Nata, mozzarella, orégano, García Baquero, beicon, york especiado y cebolla.
            </div>
          </div>
          <div>
            <div>Quattro formaggi</div>
            <div className="ingredientes">
              Tomate, mozzarella, orégano, García Baquero, queso de Montefrío y queso azul.
            </div>
          </div>
        </div>
        <h3>Acompañamientos</h3>
        <div>
          <div>Barra gallega galardón Nevada</div>
          <div>Nochebuenos</div>
          <div>Panecillos de sésamo y jengibre</div>
        </div>
        <h2>Postres</h2>
        <div>
          <div>Piña</div>
          <div>Flan del Paco</div>
          <div>Tronco de Navidad</div>
        </div>
        <h2>Bebidas</h2>
        <div>
          <div>Coca-Cola</div>
          <div>Fanta de naranja</div>
          <div>Sidra</div>
          <div>Matarromera Ribera del Duero Reserva 2019</div>
          <div>Verdejo Imary Reserva 2019</div>
          <div>Rioja El Coto Reserva 2016</div>
          <div>Café</div>
        </div>
      </div>
    </div>
  );
}

export default App;
