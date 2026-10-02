import { getTranslations } from "next-intl/server"
import Image from "next/image"


export default async function HeroSection({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: 'hero' })

  return (
    <section id="hero" className="flex flex-col min-h-screen justify-between bg-black p-6 text-white font-sans md:grid md:h-screen md:w-full md:grid-cols-3 md:grid-rows-3 md:p-8 select-none">
      <div className="mb-8 md:mb-0 md:self-start md:justify-self-start">
        <h1 className="font-bold tracking-tight text-2xl">{t('name')}</h1>
        <p className="text-2xl text-gray-400 italic">{t('role')}</p>
      </div>
      <div className="hidden md:block"></div>

      <div className="mb-12 md:mb-0 md:self-start md:justify-self-end">
        <a href="#" className="text-2xl hover:underline border border-white/20 px-3 py-1 rounded md:border-none md:p-0">Talks</a>
      </div>

      <div className="hidden md:block"></div>

      <div className="my-auto py-12 md:my-0 md:py-0 md:self-center md:justify-self-center text-center">
        <p className="text-2xl sm:text-3xl md:text-4xl font-medium leading-relaxed max-w-2xl mx-auto">
          {t('pitch')}
        </p>
      </div>

      <div className="hidden md:block"></div>

      <div className="mt-auto mb-8 space-y-2 text-sm text-gray-300 md:mt-0 md:mb-0 md:self-end md:justify-self-start md:space-y-1 md:text-xl">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="inline mr-3" viewBox="0 0 1025 768"><title>envelope</title><path fill="currentColor" d="m512.426 449l-449-449h898zm-505 284q-7-14-7-29V64q0-15 7-29l350 349zm466-232q6 5 15.5 8t16.5 3h7q26 1 39-11l71-72l339 339h-898l339-339zm544-466q7 14 7 29v640q0 15-7 29l-350-349z" /></svg>
          <a href="mailto:kuznetsov@developerjs.ru" target="_blank">kuznetsov@developerjs.ru</a>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width={24} height={24} className="inline mr-3" role="img" viewBox="0 0 24 24"><title>VK</title><path d="m9.489.004.729-.003h3.564l.73.003.914.01.433.007.418.011.403.014.388.016.374.021.36.025.345.03.333.033c1.74.196 2.933.616 3.833 1.516.9.9 1.32 2.092 1.516 3.833l.034.333.029.346.025.36.02.373.025.588.012.41.013.644.009.915.004.98-.001 3.313-.003.73-.01.914-.007.433-.011.418-.014.403-.016.388-.021.374-.025.36-.03.345-.033.333c-.196 1.74-.616 2.933-1.516 3.833-.9.9-2.092 1.32-3.833 1.516l-.333.034-.346.029-.36.025-.373.02-.588.025-.41.012-.644.013-.915.009-.98.004-3.313-.001-.73-.003-.914-.01-.433-.007-.418-.011-.403-.014-.388-.016-.374-.021-.36-.025-.345-.03-.333-.033c-1.74-.196-2.933-.616-3.833-1.516-.9-.9-1.32-2.092-1.516-3.833l-.034-.333-.029-.346-.025-.36-.02-.373-.025-.588-.012-.41-.013-.644-.009-.915-.004-.98.001-3.313.003-.73.01-.914.007-.433.011-.418.014-.403.016-.388.021-.374.025-.36.03-.345.033-.333c.196-1.74.616-2.933 1.516-3.833.9-.9 2.092-1.32 3.833-1.516l.333-.034.346-.029.36-.025.373-.02.588-.025.41-.012.644-.013.915-.009ZM6.79 7.3H4.05c.13 6.24 3.25 9.99 8.72 9.99h.31v-3.57c2.01.2 3.53 1.67 4.14 3.57h2.84c-.78-2.84-2.83-4.41-4.11-5.01 1.28-.74 3.08-2.54 3.51-4.98h-2.58c-.56 1.98-2.22 3.78-3.8 3.95V7.3H10.5v6.92c-1.6-.4-3.62-2.34-3.71-6.92Z" /></svg>
          <a href="https://vk.ru/popshow" target="_blank">vk.ru/popshow</a></div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="inline mr-3" viewBox="0 0 1150 1150" fill="none">
            <path d="M0 400C0 259.987 0 189.98 27.2484 136.502C51.2167 89.4619 89.4619 51.2167 136.502 27.2484C189.98 0 259.987 0 400 0H750C890.013 0 960.02 0 1013.5 27.2484C1060.54 51.2167 1098.78 89.4619 1122.75 136.502C1150 189.98 1150 259.987 1150 400V750C1150 890.013 1150 960.02 1122.75 1013.5C1098.78 1060.54 1060.54 1098.78 1013.5 1122.75C960.02 1150 890.013 1150 750 1150H400C259.987 1150 189.98 1150 136.502 1122.75C89.4619 1098.78 51.2167 1060.54 27.2484 1013.5C0 960.02 0 890.013 0 750V400Z" fill="url(#paint0_linear_9_61)" />
            <path fillRule="evenodd" clipRule="evenodd" d="M260.277 568.931C427.901 495.9 539.677 447.753 595.604 424.491C755.288 358.073 788.469 346.535 810.096 346.154C814.852 346.071 825.488 347.249 832.377 352.84C838.194 357.56 839.795 363.936 840.561 368.411C841.326 372.887 842.28 383.081 841.522 391.047C832.869 481.968 795.426 702.61 776.377 804.443C768.317 847.532 752.446 861.98 737.081 863.394C703.69 866.467 678.334 841.327 645.993 820.127C595.386 786.953 566.796 766.302 517.672 733.93C460.902 696.519 497.704 675.958 530.057 642.354C538.524 633.56 685.647 499.74 688.495 487.601C688.851 486.083 689.181 480.423 685.819 477.435C682.457 474.447 677.495 475.468 673.914 476.281C668.838 477.433 587.992 530.869 431.376 636.59C408.428 652.348 387.642 660.025 369.019 659.623C348.489 659.18 308.996 648.015 279.638 638.472C243.628 626.766 215.009 620.578 217.501 600.699C218.799 590.344 233.058 579.755 260.277 568.931Z" fill="white" />
          </svg>
          <a target="_blank" href="https://t.me/zed_popshow">@Zed_Popshow </a></div>
      </div>

      <div className="hidden md:flex md:self-end md:justify-self-center animate-bounce pb-2">
        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      <div className="self-start md:self-end md:justify-self-end">
        <Image loading="eager" className="w-60 h-auto" width={990} height={928} src="/photo.webp" alt="photo" />
      </div>
    </section >
  )
}
