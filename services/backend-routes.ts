import { BASE_URL } from "./api";

export const backEndRoutes = {
  auth: {
    login: () => `${BASE_URL}​/api/auth`,
    register: () => `${BASE_URL}/api/register`,
    password: {
      reset: () => `${BASE_URL}/api/reset/password`,
      recover: () => `${BASE_URL}/api/recover/password`,
    },
    resendVerification: (email) =>
      `${BASE_URL}/api/resend/verification/${email}`,
  },
  profile: {
    contact: () => `${BASE_URL}​/mail.php`,
    priceCalc: () => `${BASE_URL}​/send-cost-calculator.php`,
  },
  questions: {
    getQuestions: () => `${BASE_URL}​/questions`,
  },
};
