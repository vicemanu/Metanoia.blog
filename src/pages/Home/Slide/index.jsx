
import { useState } from 'react'
import './slide.css'

export default function Slide(props) { 

    const [artigo, setArtigo] = useState(1)
    /* Slide de artigos */

    var back = "https://i.pinimg.com/originals/d7/b1/12/d7b112f7661e5fcbf91ec6ca058adbe9.jpg"


    function maisMostraArtigo(n) {
        if(artigo === 4) {
          setArtigo(1)
        } else {
          setArtigo(n + 1 )
        }
      }
    
      function menosMostraArtigo(n) {
    
        if(artigo === 1) {
          setArtigo(3)
        } else {
          setArtigo(n - 1 )
        }
      }
    
    return (
        <section className="home__slide-home">

            <div className="slide-home__box-slide-home" style={{backgroundImage: `url(${back})` }}>

            <div className="box-slide-home__shadow"></div>

                <button className='box-slide-home__btn-left' onClick={()=> {menosMostraArtigo(artigo)}}><i class="bi bi-caret-left-fill"></i></button>
                <button className='box-slide-home__btn-right' onClick={()=> {maisMostraArtigo(artigo)}} ><i class="bi bi-caret-right-fill"></i></button> 
                
                <div className='box-slide-home__box-conteudo'>
                    <h2 className="box-conteudo__title-slide" >Proposito e confiança em Deus</h2>
                    <p className="box-conteudo__text-slide">Como Proposito e confiança em Deus podem mudar sua vida.</p>
                </div>

                    
            



                <div className="box-slide-home__bl-slide">
                    <span className="bl1" style={{backgroundColor: artigo == 1 ? 'white' : ''}}></span>
                    <span className="bl2" style={{backgroundColor: artigo == 2 ? 'white' : ''}}></span>
                    <span className="bl3" style={{backgroundColor: artigo == 3 ? 'white' : ''}}></span>
                    <span className="bl4" style={{backgroundColor: artigo == 4 ? 'white' : ''}}></span>         
                </div>
            </div>
    </section>
    )
}