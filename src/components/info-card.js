class InfoCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        // Obtenemos los atributos, si no existen, ponemos los de la imagen
        const titulo = this.getAttribute('titulo') || "¡LA SEDE TE ACOMPAÑA!";
        const subtitulo = this.getAttribute('subtitulo') || "El respeto no se negocia";
        
        // IMPORTANTE: Aquí manejamos la ruta de la imagen
        const imagen = this.getAttribute('imagen') || "imagen.png";

        this.shadowRoot.innerHTML = `
        <style>
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
            .titulo { font-size: 22px; margin-bottom: 10px; cursor: pointer; transition: 0.3s; }
            .titulo:hover { transform: scale(1.1); color: white; }
            .subtitulo { color: purple; font-size: 14px; margin-bottom: 15px; font-weight: bold; }
            .personas { 
                width: 100%; 
                height: auto;
                border-radius: 5px; 
                margin-bottom: 15px; 
                display: block;
            }
            .ucr { color: white; font-weight: bold; font-size: 20px; margin: 0; }
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
customElements.define('info-card', InfoCard);