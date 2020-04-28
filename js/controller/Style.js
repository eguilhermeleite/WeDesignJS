
class Style {

    constructor() {
        this._menuMobile = document.querySelector("#sliding-header-menu-outer");
        this._openMenu = document.querySelector("#hamIcon")
        this._closeMenu = document.querySelector("#closeIcon");
        this._selected = "#2A2D34";
        this._unSelected = "#646872";
        this._politic = document.querySelectorAll(".single-tab");
        this._politic[0].style.background = this._selected;
        this._box = document.querySelector("#box-text");
        this._politic[0].style.fontWeight = "bold";
        this._year = document.querySelector("#current_year");
        this.YearFooter();


        // array aboutUs
        this._aboutUs = {
            Missão: "Fazer com que cada cliente seja reconhecido como autoridade em seu segmento de atuação. Agregar valor ao negócio, potencializar o crescimento das operações e promover e estreitar o relacionamento do cliente com o seu público alvo, por meio da geração de conteúdo de relevância.",
            Visão: "Ser reconhecida pelos clientes e pelo mercado como uma empresa parceira, inovadora e criativa, que oferece sempre os melhores produtos e soluções em Comunicação Empresarial Integrada.",
            Valores: "<ul><li>Comprometimento</li><li>Inovação</li><li>Ética profissional</li><li>Superação dos resultados</li><li>Melhoria contínua</li></ul>"
        };

        // array our services
        this._our_services = [
            {
                'title': 'Webdesign',
                'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
            },

            {
                'title': 'Branding',
                'text': 'Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
            },

            {
                'title': 'Marketing Digital',
                'text': 'Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus.'
            },
            {
                'title': 'Teste',
                'text': 'Testando texto esse é um texto de teste para o array.'
            },
            {
                'title': 'Testexxx2',
                'text': 'Testando texto esse é um texto de teste para o array.'
            },

        ];

        this._box.innerHTML = this._aboutUs["Missão"];
        this.menuOpenClose();
        this.politicOn();
        this.Servicos();

    } // fim do construtor

    // aba menu responsivo
    menuOpenClose() {
        this._openMenu.addEventListener("click", event => {
            this._menuMobile.style.right = "0";
            this._menuMobile.style.transition = ".5s";
        });
        this._openMenu.addEventListener("mousemove", event => {
            this._openMenu.style.cursor = "pointer";
        });
        this._closeMenu.addEventListener("click", event => {
            this._menuMobile.style.right = "-320px";
            this._menuMobile.style.transition = ".5s";
        });
        this._closeMenu.addEventListener("mousemove", event => {
            this._closeMenu.style.cursor = "pointer";
        });
    } // menuOpenClose


    // politica 
    politicOn() {

        // para as abas de classe politic
        for (let i = 0; i < this._politic.length; i++) {

            // evento de click
            this._politic[i].addEventListener("click", event => {

                // ao clicar, muda o bg de todos para unselect e peso da fonte para normal
                for (let ii = 0; ii < this._politic.length; ii++) {
                    this._politic[ii].style.background = this._unSelected;
                    this._politic[ii].style.fontWeight = "normal";
                }
                // e muda o bg do item selecionado para selected e peso da font para bold
                this._politic[i].style.background = this._selected;
                this._politic[i].style.fontWeight = "bold";

                // pega o conteúdo da aba (mesmo nome nos índices de box)
                let txt = this._politic[i].innerHTML;
                // e aplica como índice no array aboutUs
                this._box.innerHTML = this._aboutUs[txt];

            });
        }

    } // politicOn


    // ano atual
    YearFooter() {
        var newYear = new Date;
        this._year.innerHTML = newYear.getFullYear();

    }//

    // serviços
    Servicos() {

        var previous = document.querySelector("#service-previous");
        var next = document.querySelector("#service-next");
        var title = document.querySelector("#service-title");
        var text = document.querySelector("#service-text");
        var currentService = 0;
        let i = 0;
        console.log(`Valor do i inicial: ${i}`);

        next.addEventListener("click", event => {

            if (i < this._our_services.length - 1) {
                i++;
                title.innerHTML = this._our_services[i].title;
                text.innerHTML = this._our_services[i].text;

                console.log(`Valor do i agora: ${i}`);

            } else {
                i = 0;
                title.innerHTML = this._our_services[i].title;
                text.innerHTML = this._our_services[i].text;

                console.log(`Valor do i agora: ${i}`);
            }
        });// fim do click next


        previous.addEventListener("click", event => {

            if (i == 0) {
                i = this._our_services.length -1;
                title.innerHTML = this._our_services[i].title;
                text.innerHTML = this._our_services[i].text;
               
                //console.log(`Valor do x agora: ${x}`);
                console.log(`Valor do i agora: ${i}`);
            } else {
                i--;
                title.innerHTML = this._our_services[i].title;
                text.innerHTML = this._our_services[i].text;
                
                console.log(`Valor do i agora: ${i}`)
            }

        });// fim do click previous

    }// fim dos serviços

    


} // fim da classe Style