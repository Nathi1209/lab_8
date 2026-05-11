class InfoCard extends HTMLElement {
    constructor() {
        super();
        // Creamos el Shadow DOM para encapsular estilos
        this.attachShadow({ mode: 'open' });
    }

    // Se ejecuta cuando el componente se añade al DOM
    connectedCallback() {
        // Obtenemos los valores de los atributos o definimos valores por defecto
        const titulo = this.getAttribute('titulo') || "¡LA SEDE TE ACOMPAÑA!";
        const subtitulo = this.getAttribute('subtitulo') || "El respeto no se negocia";
        
        // Usamos el nombre exacto de tu archivo: imagen.png.jpeg
        const imagen = this.getAttribute('imagen') || "imagen.png.jpeg";

        this.shadowRoot.innerHTML = `
        <style>
            /* Contenedor principal del cartel */
            .cartel {
                width: 320px;
                padding: 20px;
                background: linear-gradient(orange, gold);
                margin: 20px auto;
                border-radius: 10px;
                text-align: center;
                box-shadow: 0 10px 25px rgba(0,0,0,0.2);
                border: 4px solid black;
                font-family: Arial, sans-serif;
            }

            /* Estilo del título con efecto hover */
            .titulo { 
                font-size: 22px; 
                margin-bottom: 10px; 
                cursor: pointer; 
                transition: 0.3s; 
                color: black;
            }

            .titulo:hover { 
                transform: scale(1.1); 
                color: white; 
            }

            /* Estilo del subtítulo en púrpura */
            .subtitulo { 
                color: purple; 
                font-size: 14px; 
                margin-bottom: 15px; 
                font-weight: bold; 
                line-height: 1.4;
            }

            /* Ajustes de la imagen */
            .personas { 
                width: 100%; 
                height: auto;
                border-radius: 5px; 
                margin-bottom: 15px; 
                display: block;
            }

            /* Texto UCR inferior */
            .ucr { 
                color: white; 
                font-weight: bold; 
                font-size: 20px; 
                margin: 0; 
                text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
            }
        </style>

        <div class="cartel">
            <h1 class="titulo">${titulo}</h1>
            <p class="subtitulo">${subtitulo}</p>
            
            <img src="${imagen}" class="personas" alt="Equipo UCR">
            
            <p class="ucr">UCR</p>
        </div>
        `;
    }
}

// Registramos el componente con el nombre <info-card>
customElements.define('info-card', InfoCard);