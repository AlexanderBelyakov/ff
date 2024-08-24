import { Comments, Contacts, Faqs, Steps } from "../types";

export const mockComments: Comments = [
  {
    id: 1,
    name: "Иван",
    subtitle: "Владелец ветклиники",
    comment:
      "Благодаря этому приложению мои клиенты теперь всегда вовремя приводят своих питомцев на приём. Это улучшило наше взаимодействие и повысило доверие к нашей клинике",
  },
  {
    id: 2,
    name: "Алексей",
    subtitle: "Владелец сети гостиниц для животных",
    comment:
      "Приложение помогло мне автоматизировать бронирование и уход за животными. Клиенты довольны, а мой бизнес работает эффективнее",
  },
];

export const mockFaqs: Faqs = [
  {
    id: 1,
    title: "Как зарегистрироваться в приложении?",
    content:
      "Для регистрации скачайте приложение, выберите «Создать аккаунт», введите ваши данные и следуйте инструкциям на экране.",
  },
  {
    id: 2,
    title: "Могу ли я получить поддержку через приложение?",
    content:
      "Для регистрации скачайте приложение, выберите «Создать аккаунт», введите ваши данные и следуйте инструкциям на экране.",
  },
  {
    id: 3,
    title: "Могу ли я добавить несколько питомцев?",
    content:
      "Для регистрации скачайте приложение, выберите «Создать аккаунт», введите ваши данные и следуйте инструкциям на экране.",
  },
];

export const mockContacts: Contacts = [
  { id: 1, title: "Email", contact: "info@yourapp.com" },
  {
    id: 2,
    title: "Телефон",
    contact: "+7 (123) 456-7890",
  },
  {
    id: 3,
    title: "Адрес",
    contact: "г. Москва, ул. Примерная, д. 1",
  },
];

export const mockSteps: Steps = [
  {
    id: 1,
    title: "[Шаг 1]",
    content:
      "Перейти в приложение: выберите понравившегося питомца через наш классификатор",
  },
  {
    id: 2,
    title: "[Шаг 2]",
    content:
      "Классификатор: фильтруйте питомцев по категории и для быстрого поиска.",
  },
  {
    id: 3,
    title: "[Шаг 3]",
    content:
      "Приложение в стиле Swipe-Tinder: просматривайте профили и выбирайте понравившихся простым свайпом.",
  },
  {
    id: 4,
    title: "[Шаг 4]",
    content:
      "Регистрация: зарегистрируйтесь или войдите в систему для сохранения избранных специалистов.",
  },
  {
    id: 5,
    title: "[Шаг 5]",
    content:
      "Уведомление о добавлении в избранное: получите уведомление, как только добавите питомца в избранное.",
  },
  {
    id: 6,
    title: "[Шаг 6]",
    content:
      "Переход в избранное: просмотрите список ваших избранных специалистов в удобном разделе.",
  },
  {
    id: 7,
    title: "[Шаг 7]",
    content:
      "Запись на прием: запишитесь на удобное время всего в несколько кликов.",
  },
];