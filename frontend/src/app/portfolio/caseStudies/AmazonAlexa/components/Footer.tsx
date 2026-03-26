export default function Footer() {
  return (
      <div className="relative">
        <div className="relative z-10 flex items-center justify-center px-15 md:px-30 translate-y-32">
          <img src="/assets/AmazonAlexa/alexa_logos.png" className="w-2/3 lg:w-1/2 h-auto" />
        </div>
        <img src="/assets/AmazonAlexa/alexa-footer.svg" className="relative -mt-16 w-full h-auto md:-mt-32 lg:-mt-64" />
      </div>
    );
}