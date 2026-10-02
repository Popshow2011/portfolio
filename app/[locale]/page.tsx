import { getTranslations } from "next-intl/server";

export default async function Home({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'hero' })
  return (
    <>
      <section id="hero-section">
        <h1>{t('name')}</h1>
      </section>



      <section id="services"></section>
      <section id="about"></section>
      <section id="contact">

      </section>



    </>
  )
}
