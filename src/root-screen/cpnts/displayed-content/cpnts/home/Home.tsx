import styles from './Styles.module.scss'

export function Home() {

    return(
        
        <div className={styles.rootWrapper_Home}>
            
            <p>
                Informações de usabilidade:
            </p>
            <p>
                1º - Esse projeto tem algumas páginas de conteúdo funcionais e você pode navegar nelas, como as abas Feed, Projects Financing e Frankensteins's Castle, já outras como Settings e Messages não foram implementadas e seus botões so estão visiveis para demostrar a estética da interface gráfica do projeto de uma maneira mais completa.
            </p>
            <p>
                2º - Se você passar o mouse em cima de algum componente e ele ficar vermelhor isso significa que a funcionalidade dele ainda não foi implementada então ele não funcionará, já as que ficarem roxas tem alguma funcionalidade implementada.
            </p>

            <p>
                3º - Esse prototipo foi desenvolvido exclusivamente para uso em desktops, utilizá-lo em dispositivos mobile deixará toda a interface estranha.
            </p>
        </div>
    )
}