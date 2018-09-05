class ErrorLogger extends Error {
  constructor(message, fileName, lineNumber) {
    super(message, fileName, lineNumber)
    Error(message, fileName, lineNumber)
  }
}

export default ErrorLogger
