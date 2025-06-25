import { Link } from 'react-scroll';

export default function HomeSection() {
  return (
    <section
      id="home"
      className="bg-[#0e141b] h-screen font-Montserrat flex flex-col justify-center items-center md:items-start px-10 md:pl-[20%] text-center md:text-left gap-10"
    >
      <h1 className="font-extrabold text-4xl text-white">
        Hola, mi nombre es{' '}
        <span className="text-[#ecd85d]">Solaberrieta, Fermín</span> <br />Y soy
        FullStack Developer.
      </h1>
      <Link
        to="about"
        smooth={true}
        duration={500}
        className="border-[#ecd85d] hover:bg-[#ecd85d] hover:text-[#0e141b] border-2 px-2 font-Montserrat text-2xl text-[#ecd85d] hover:cursor-pointer"
      >
        Sobre mí
      </Link>
    </section>
  );
}
