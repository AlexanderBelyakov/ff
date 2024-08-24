type Comment = {
  id: number;
  name: string;
  comment: string;
  subtitle: string;
};

type Faq = {
  id: number;
  title: string;
  content: string;
};

type Contact = {
  id: number;
  title: string;
  contact: string;
};

type Step = {
  id: number;
  title: string;
  content: string;
};

export type Comments = Comment[];
export type Faqs = Faq[];
export type Contacts = Contact[];
export type Steps = Step[];
