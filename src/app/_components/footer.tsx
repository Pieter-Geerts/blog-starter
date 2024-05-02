import Container from "@/app/_components/container";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Voor alle bouw-, dak,- en klinkerwerken. Contacteer me gerust voor een vrijblijvende offerte.
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="tel:+32472612430"
              className="bg-primary-500 font-bold py-4 px-6 rounded-lg text-center mb-4 lg:mb-0 lg:mr-4"
            >
              Bel me nu
            </a>
            <a
              href="mailto:daan@daan.be"
              className="bg-primary-500 font-bold py-4 px-6 rounded-lg text-center"
            >
              Stuur een e-mail
            </a>
          </div>
        </div>
        <div className="text-center text-sm text-neutral-600">Created by Pieter Geerts</div>
      </Container>
    </footer>
  );
}

export default Footer;
