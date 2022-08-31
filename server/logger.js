import { createLogger, transports, format } from "winston";

const Logger = createLogger({
  transports: [
    new transports.File({
      filename: "./logs/logs.txt",
      level: "info",
      format: format.combine(
        format.timestamp({ format: "YYYY-DD-MM HH:mm:ss" }),
        format.simple()
      ),
    }),
    new transports.Console({
      level: "info",
      format: format.combine(
        format.timestamp({ format: "YYYY-DD-MM HH:mm:ss" }),
        format.simple()
      ),
    }),
  ],
});

export default Logger;
