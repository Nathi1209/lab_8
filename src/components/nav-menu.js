class NavMenu extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
        <style>
            .menu {
                width: 350px;
                background: #0b3d91;
                border-radius: 10px;
                padding: 10px;
                box-shadow: 0 10px 20px rgba(0,0,0,0.2);
                font-family: Arial, sans-serif;
                margin: 20px auto;
            }
            .item {
                padding: 15px;
                color: white;
                border-bottom: 1px solid rgba(255,255,255,0.3);
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-weight: bold;
            }
            .flecha {
                width: 12px;
                height: 12px;
                border-top: 3px solid white;
                border-right: 3px solid white;
                transform: rotate(45deg);
                animation: mover 0.8s infinite alternate;
            }
            .ucrr {
                background: white;
                color: #0b3d91;
                font-weight: bold;
                font-size: 18px;
                padding: 8px 20px;
                border-radius: 5px;
                width: fit-content;
                margin: 15px auto 5px auto;
                text-align: center;
            }
            @keyframes mover {
                from { transform: translateX(0) rotate(45deg); }
                to { transform: translateX(10px) rotate(45deg); }
            }
        </style>
        <div class="menu">
            <div class="item">Aulas 5, 6, 7 <span class="flecha"></span></div>
            <div class="item">Apoyo Informático <span class="flecha"></span></div>
            <div class="item">Servidores <span class="flecha"></span></div>
            <div class="item">Laboratorio 1 y 2 <span class="flecha"></span></div>
            <div class="item">Coordinación Informática <span class="flecha"></span></div>
            <div class="ucrr">UCR</div>
        </div>
        `;
    }
}
customElements.define('nav-menu', NavMenu);