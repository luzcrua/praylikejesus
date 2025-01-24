import { z } from "zod";

export const ALLOWED_EMAIL_DOMAINS = [
  "gmail.com",
  "yahoo.com",
  "yahoo.com.br",
  "hotmail.com",
  "outlook.com",
  "live.com",
  "icloud.com",
  "me.com",
  "mac.com",
  "uol.com.br",
  "bol.com.br",
  "terra.com.br",
  "ig.com.br",
  "globo.com",
  "protonmail.com",
  "aol.com"
];

export const createSubscriptionSchema = (t: (key: string) => string) => z.object({
  name: z.string().min(2, {
    message: t('form.validation.nameRequired'),
  }),
  email: z
    .string()
    .email({
      message: t('form.validation.emailRequired'),
    })
    .refine((email) => {
      const domain = email.split('@')[1]?.toLowerCase();
      return ALLOWED_EMAIL_DOMAINS.includes(domain);
    }, {
      message: t('form.validation.emailInvalid'),
    }),
  country: z.string().min(2, {
    message: t('form.validation.countryRequired'),
  }),
  acceptTerms: z.boolean().refine((value) => value === true, {
    message: t('form.validation.termsRequired'),
  }),
});

export type SubscriptionFormData = z.infer<ReturnType<typeof createSubscriptionSchema>>;