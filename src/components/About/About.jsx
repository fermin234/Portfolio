export default function About() {
  return (
    <section id="about" className="w-full md:px-[10%] min-h-screen flex flex-col justify-center items-center px-[4vh] py-[4vh] bg-[#253447] text-center font-Montserrat">
      <h1 className="mb-5 text-[40px] max-[715px]:text-[28px] font-bold text-white">SOBRE MÍ</h1>
      <p className="mb-5 text-lg text-white">
        Soy un apasionado desarrollador Fullstack con un enfoque especial en el mundo del <strong>Backend</strong>. Mi viaje en el desarrollo web ha sido impulsado por mi determinación y constancia. Me encanta la emoción de convertir ideas en realidades digitales y crear soluciones que realmente marquen la diferencia. A medida que navego por el emocionante universo de la programación, sigo desafiándome a mí mismo para aprender y crecer constantemente. Siempre estoy buscando nuevas formas de mejorar y llevar mis habilidades al siguiente nivel. Estoy emocionado de compartir mi trabajo contigo a través de este portafolio y espero que disfrutes explorando mis proyectos tanto como yo disfruté creándolos.<br /><strong>¡Bienvenido a mi rincón digita!</strong>
      </p>
      <a
        rel="noreferrer"
        target="_blank"
        className="border-[#ecd85d] hover:bg-[#ecd85d] hover:text-[#253447] w-fit border-2 px-2 font-Montserrat text-2xl text-[#ecd85d] hover:cursor-pointer"
        download="FerminSolaberrietaCV.pdf"
        href="FerminSolaberrietaCV.pdf"
        title="CV_PDF"
      >
        Currículum
      </a>
    </section>
  )
}