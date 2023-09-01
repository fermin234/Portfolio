export default function About() {
  return (
    <section id="about" className="w-full md:px-[10%] min-h-screen flex flex-col justify-center items-center px-[4vh] py-[4vh] bg-color-6 text-center font-Montserrat">
      <h1 className="mb-5 text-[40px] max-[715px]:text-[28px] font-bold text-color-3">SOBRE MÍ</h1>
      {/* <p className="mb-5">
        La programación no es solo mi trabajo, sino mi pasión. Creo firmemente en la importancia de mantenerme en constante capacitación en un entorno tan dinámico como este. Considero que el feedback desempeña un papel fundamental en mi desarrollo tanto profesional como personal. Si bien trabajo tanto en el FrontEnd como en el BackEnd, mi inclinación natural se encuentra en este último.<br /><br />

        Además de mi dedicación a la programación, me considero una persona sociable y adaptable. Para mí, el trabajo en equipo es un entorno que fomenta la innovación, el intercambio de ideas y el aprendizaje mutuo. Disfruto pensando "out of the box" y buscando soluciones creativas. Sin embargo, también tengo la capacidad de trabajar de manera independiente y lograr resultados excepcionales.<br /><br />

        En resumen, mi pasión por la programación, mi constante deseo de aprendizaje, mi habilidad para adaptarme y mi enfoque tanto en el trabajo en equipo como en el individual me definen como un profesional en busca de desafíos emocionantes y oportunidades de crecimiento.
      </p> */}
      <p className="mb-5 text-lg">
        Soy un apasionado desarrollador Fullstack con un enfoque especial en el mundo del <strong>Backend</strong>. Mi viaje en el desarrollo web ha sido impulsado por mi determinación y constancia. Me encanta la emoción de convertir ideas en realidades digitales y crear soluciones que realmente marquen la diferencia. A medida que navego por el emocionante universo de la programación, sigo desafiándome a mí mismo para aprender y crecer constantemente. Siempre estoy buscando nuevas formas de mejorar y llevar mis habilidades al siguiente nivel. Estoy emocionado de compartir mi trabajo contigo a través de este portafolio y espero que disfrutes explorando mis proyectos tanto como yo disfruté creándolos.<br /><strong>¡Bienvenido a mi rincón digita!</strong>
      </p>
      <a
        rel="noreferrer"
        target="_blank"
        className="border-[#ecd85d] hover:bg-[#ecd85d] hover:text-[#181607] w-fit border-2 px-2 font-Montserrat text-2xl text-color-2 hover:cursor-pointer"
        download="FerminSolaberrietaCV.pdf"
        href="FerminSolaberrietaCV.pdf"
        title="CV_PDF"
      >
        Currículum
      </a>
    </section>
  )
}