//the mean URL for API
export const MAIN_URL = `https://crm.boxbyld.tech/api/v1`;

export type JoinData = string | number;

// ADD interface

interface RoutsUrl {
  LOGIN_URL: string;
  FORGOT_PASSWORD: string;
  RESET_PASSWORD: string;
  SITE_SERVEY: JoinData;
  UPLODE_FILE_SITE: string;
  SEND_FILE_SITE: (key: any) => void;
  SEND_FILE_UTILITY: (key: any) => void;
  UPLODE_FILE_UTILITY: string;
  UTILITY_BILL: JoinData;
  SOLUTIONS: string;
  CONTARCT: string;
  PM_USER: string;
  PM_STATUS: string;
  FINANCED_STATUS: string;
  TICKETS: string;
  TICKETS_DETAILS: (key: string) => void;
  TICKETS_DETAILS_sunlight: (key: string) => void;
}

export const ROUTS: RoutsUrl = {
  LOGIN_URL: `${MAIN_URL}/users/login`,

  FORGOT_PASSWORD: `${MAIN_URL}/forgot-password`,

  RESET_PASSWORD: `${MAIN_URL}/reset-password`,

  SITE_SERVEY: `${MAIN_URL}/site_survey`,

  UPLODE_FILE_SITE: `${MAIN_URL}/site_survey/upload_file`,

  SEND_FILE_SITE: (id: any) => `${MAIN_URL}/site_survey/send/${id}`,

  UTILITY_BILL: `${MAIN_URL}/utility_bill`,

  UPLODE_FILE_UTILITY: `${MAIN_URL}/utility_bill/upload_file`,

  SEND_FILE_UTILITY: (id: any) => `${MAIN_URL}/utility_bill/send/${id}`,

  SOLUTIONS: `${MAIN_URL}/solution`,

  CONTARCT: `${MAIN_URL}/contract`,

  PM_USER: `${MAIN_URL}/pm/pm_users`,

  PM_STATUS: `${MAIN_URL}/pm/pm_status`,

  FINANCED_STATUS: `${MAIN_URL}/status_finance/get_financed`,

  TICKETS: `${MAIN_URL}/tickets`,

  TICKETS_DETAILS: (id: string) => `${MAIN_URL}/tickets/get-ticket-by-id/${id}`,

  TICKETS_DETAILS_sunlight: (id: string) =>
    `${MAIN_URL}/status_finance/get_status_sunlight/${id}`,
};
