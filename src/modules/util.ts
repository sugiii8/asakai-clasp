import dayjs from "dayjs";

dayjs.locale("ja");

const timeLog = () => {
  const today = dayjs();
  Logger.log(today.toDate());
};

const getEnv = (key: string) => {
  const value = PropertiesService.getScriptProperties().getProperty(key) || "";
  return value;
};

const currentDate = () => {
  return dayjs().toDate();
};

export { timeLog, getEnv, currentDate };
