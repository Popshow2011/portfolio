import HeroSection from "@/components/sections/HeroSection";

export default async function Home({
  params
}: {
  params: Promise<{ locale: string }>;

}) {
  const { locale } = await params;
  return (
    <>
      <HeroSection locale={locale} />


      <section id="services"></section>
      <section id="about"></section>
      <section id="contact">

      </section>



    </>
  )
}
