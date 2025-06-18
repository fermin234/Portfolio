export default function Contact() {
  return (
    <section id="contact" className="w-full py-[4vh] bg-[#0e141b] flex flex-col items-center justify-center font-Montserrat">
      <h1 className="mb-5 text-[40px] max-[715px]:text-[28px] font-bold text-white">CONTACTO</h1>
      <a
        rel="noreferrer"
        target="_blank"
        className="font-extrabold border-[#ecd85d] hover:bg-[#ecd85d] hover:text-[#0e141b] w-fit border-2 px-2 font-Montserrat text-2xl text-[#ecd85d] hover:cursor-pointer"
        href="mailto:fermindev@gmail.com"
      >Enviame un email
      </a>
    </section>
  )
}
