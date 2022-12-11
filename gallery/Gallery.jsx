import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_3.jpeg'
import './gallery.css'



const Gallery = () => {
  const galleryLength = 10;
  const images = []

  for(let i = 1; i <= galleryLength; i++) {
    images.push(require(`../../images/gallery${i}.jpeg`))
  }


  return (
   <>
   <Header title="Pokè Gallery" image={HeaderImage}>
    Welcome to the Pokèmon gallery!!!
   </Header>
   <section className="gallery">
    <div className="container gallery__container">
      {
        images.map((image, index) => {
          return <article key={index}>
            <img src={image} alt={`Gallery Image ${index + 1}`} />
          </article>
        })
      }
    </div>
   </section>
   </>
  )
}

export default Gallery