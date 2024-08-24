import Image from "next/image";

import CustomButton from "@/components/CustomButton";

import { mockComments, mockContacts, mockFaqs, mockSteps } from "@/shared/mock";
import Toggle from "@/components/ToggleLanding";

export default function Home() {
  return (
    <main className="bg-white pl-4  pb-7  pr-4 flex flex-col gap-y-10">
      <section className="flex w-full g pt-[30px] pb-8 items-center  text-white flex-col h-[667px] align-middle object-cover">
        <div className="flex-none flex flex-row gap-x-5 justify-between w-full z-10 pb-9 pt-2">
          <Image
            src="/logo.svg"
            alt="logo"
            loading="lazy"
            width="161"
            height="43"
            decoding="async"
            data-nimg="1"
            className="aspect-auto"
          />
          <Toggle />
          <Image src="/hamburger.svg" alt="menu" width={26} height={20} />
        </div>
        <div className="z-10 h-64 flex flex-col justify-between mb-56">
          <li className="text-[13px] marker:text-purple-500 ">
            Добро пожаловать мы - ZooRama
          </li>
          <h1 className="text-[35px] font-semibold leading-8">
            Вы мечтали о питомце или хотели подарить его
          </h1>
          <p className="text-[16px] w-5/6">
            В Zoorame вы легко подберете себе друга!
          </p>
        </div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 bottom-0 h-[667px] z-0 object-cover aspect-square brightness-50"
        >
          <track src="../../captions.vtt" kind="captions" label="English" />
          <source src="/puppy.mp4" type="video/mp4" />
        </video>

        <CustomButton text="Перейти в приложение" hasArrow={false} />
      </section>

      <section className="flex flex-col gap-y-4  text-gray-900 ">
        <li
          className="text-[13px] border-b-[1px] border-purple-500 marker:text-purple-500 pb-4
        undefined"
        >
          Почему стоит выбрать наше приложение?
        </li>
        <p className="text-[18px] text-balance leading-normal pb-2">
          Наше приложение упрощает уход за питомцами: безопасная регистрация,
          удобные профили, персональные графики и доступность везде и всегда.
        </p>
        <div className="flex flex-col justify-center items-center w-full">
          <Image
            alt="Happy_cat"
            loading="lazy"
            width="228"
            height="228"
            decoding="async"
            data-nimg="1"
            className="aspect-square"
            src="/happy-cat.svg"
          />
          <CustomButton text="В приложение" hasArrow />
        </div>
      </section>

      <section className="flex flex-col gap-y-4 pt-3 bg-purple-200 rounded text-gray-900  ">
        <li
          className="text-[13px] border-b-[1px] border-purple-500 marker:text-purple-500 pb-4
        px-[10px]"
        >
          Как работает наше приложение
        </li>
        <section className="rounded-md pb-5 px-[10px]">
          <h4 className="text-[18px]">Пошаговое руководство</h4>
          <ol className="list leading-loose pb-5">
            {mockSteps.map((el) => (
              <li className="flex flex-col text-[12px]" key={el.id}>
                <span className="text-purple-500">{el.title}</span>
                {el.content}
              </li>
            ))}
          </ol>
          <CustomButton text="Начать поиск" hasArrow />
        </section>
      </section>
      <section className="gap-y-4 flex flex-col text-gray-900">
        <li
          className="text-[13px] border-b-[1px] border-stone-750 marker:text-purple-500 pb-4
        undefined"
        >
          Отзывы
        </li>
        {mockComments.map((el) => (
          <div className="flex flex-col gap-y-[5px]" key={el.id}>
            <h4 className="text-[16px] font-medium">{el.name}</h4>
            <span className="text-[12px] text-gray-600">{el.subtitle}</span>
            <p className="text-[12px] ">{el.comment}</p>
          </div>
        ))}
      </section>

      <section className=" text-gray-900 gap-y-4 flex flex-col text-gray-900 bg-purple-200 py-3 rounded-md px-[10px]">
        <li
          className="text-[13px]  marker:text-green-600 
        undefined marker:text-purple-500"
        >
          FAQ
        </li>
        {mockFaqs.map((el) => (
          <details
            className="border-t-[1px] border-purple-500 pt-4"
            key={el.id}
          >
            <summary className="inline-flex font-medium text-[14px] w-full">
              {el.title}
              <Image
                alt="arrow"
                loading="lazy"
                width="12"
                height="9"
                decoding="async"
                data-nimg="1"
                className="aspect-square  ml-auto"
                src="/arrow_back_2.svg"
              />
            </summary>
            <p className="text-[12px]">{el.content}</p>
          </details>
        ))}
      </section>

      <section className="gap-y-4 flex flex-col">
        <h2 className="text-[29px] text-gray-900 text-balance w-4/5 leading-9 pl-2">
          Готовы упростить уход за вашим питомцем?
        </h2>
        <CustomButton text="Зарегистрироваться сейчас" hasArrow />
      </section>

      <section className="gap-y-4 flex flex-col">
        <li
          className="text-[13px] border-b-[1px] border-stone-750 marker:text-purple-500 pb-4
        undefined text-gray-900"
        >
          Контакты
        </li>
        {mockContacts.map((el) => (
          <div
            className="flex flex-col gap-y-[5px] border-b-[1px] border-stone-750  pb-4"
            key={el.id}
          >
            <h4 className="text-gray-900 font-medium">{el.title}</h4>
            <span className="text-gray-700 text-[12px]">{el.contact}</span>
          </div>
        ))}
      </section>

      <section>
        <ul className="flex flex-row flex-wrap text-gray-900 gap-x-5 gap-y-5 justify-center list-disc first:marker:text-transparent">
          <li className="text-[12px] leading-[140%] text-nowrap marker:text-purple-500  pr-5 target:marker:text-transparent">
            Главная
          </li>
          <li className="text-[12px] leading-[140%] text-nowrap marker:text-purple-500  pr-5 target:marker:text-transparent">
            О нас
          </li>
          <li className="text-[12px] leading-[140%] text-nowrap marker:text-purple-500  pr-5 target:marker:text-transparent">
            Функции
          </li>
          <li className="text-[12px] leading-[140%] text-nowrap marker:text-purple-500  pr-5 target:marker:text-transparent">
            Отзывы
          </li>
          <li className="text-[12px] leading-[140%] text-nowrap marker:text-purple-500  pr-5 target:marker:text-transparent list-none">
            Контакты
          </li>
          <li className="text-[12px] leading-[140%] text-nowrap marker:text-purple-500  pr-5 target:marker:text-transparent">
            Зарегистрироваться
          </li>
        </ul>
      </section>

      <section className="flex flex-row justify-between px-[10px] pt-5 border-t-[1px] border-stone-750">
        <div className="flex flex-col gap-y-3 ">
          <h4 className="text-[11px] text-gray-500">
            Политика конфиденциальности
          </h4>
          <h4 className="text-[11px] text-gray-500">Условия использования</h4>
        </div>
        <div className="flex flex-row gap-x-5">
          <Image
            alt="twitter icon"
            loading="lazy"
            width="20"
            height="20"
            decoding="async"
            data-nimg="1"
            className="aspect-square"
            src="/X.svg"
          />
          <Image
            alt="facebook icon"
            loading="lazy"
            width="20"
            height="20"
            decoding="async"
            data-nimg="1"
            className="aspect-square"
            src="/facebook.svg"
          />
          <Image
            alt="instagram icon"
            loading="lazy"
            width="20"
            height="20"
            decoding="async"
            data-nimg="1"
            className="aspect-square"
            src="/instagram.svg"
          />
        </div>
      </section>
    </main>
  );
}
