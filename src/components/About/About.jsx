export default function About() {
  return (
    <section id="about" className="w-full md:px-[10%] min-h-screen flex flex-col justify-center items-center px-[4vh] py-[4vh] bg-color-6 text-center font-Montserrat">
      <h1 className="mb-5 text-[40px] max-[715px]:text-[28px] font-bold text-color-3">SOBRE MÍ</h1>
      <p>
        Me llamo Fermín y soy FullStack Developer. La programación no es solo
        mi trabajo, sino lo que me apasiona. Creo que mantenerse en constante
        capacitación es fundamental en un ambiente tan dinámico como este.
        También, considero que el feedback es muy importante para mi
        formación, tanto profesional como personal. Trabajo con FrontEnd como
        BackEnd, pero inclino más por este último.
      </p>
      <br />
      <p className="mb-10">
        ¿Qué más puedo decir sobre mí? Soy una persona muy sociable y
        adaptable. Veo en el trabajo en equipo un ambiente de innovación, de
        intercambio de ideas, de aprendizaje mutuo y que invita a pensar “out
        of the box”. Aunque también puedo realizar trabajos individuales
        perfectamente.
      </p>
      <a
        rel="noreferrer"
        target="_blank"
        className="border-[#ecd85d] hover:bg-[#ecd85d] hover:text-[#181607] w-fit border-2 px-2 font-Montserrat text-2xl text-color-2 hover:cursor-pointer"
        download="fermin-Solaberrieta CV.pdf"
        href="assets/cv/Fermin Solaberrieta CV.pdf"
        title="CV_PDF"
      >
        Currículum
      </a>
    </section>
  )
}