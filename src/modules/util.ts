const timeLog = () => {
  Logger.log(new Date());
};

const getEnv = (key: string) => {
  const value = PropertiesService.getScriptProperties().getProperty(key) || "";
  return value;
};

export { timeLog, getEnv };
