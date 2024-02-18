class NodemailerHandler {
  constructor(nodemailer) {
    /** @private */
    this.nodemailer = nodemailer;
  }
  /**
   * Retrieves the nodemailer instance used by the handler.
   * @returns {Object} The nodemailer instance.
   */
  getNodeMailer() {
    return this.nodemailer;
  }
  /**
   * Creates a transport instance for sending emails.
   * @param {string} host - The SMTP host.
   * @param {number} port - The SMTP port.
   * @param {string} user - The SMTP username.
   * @param {string} password - The SMTP password.
   * @returns {Object} The created transport instance.
   */
  createTransport(host, port, user, password) {
    this.transport = this.nodemailer.createTransport({
      host: host,
      port: port,
      auth: {
        user: user,
        pass: password,
      },
    });
    return this.transport;
  }
  /**
   * Sets up email options.
   * @param {string} from - The sender's email address.
   * @param {string} to - The recipient's email address.
   * @param {string} subject - The email subject.
   * @param {string} text - The plain text content of the email.
   * @param {string} html - The HTML content of the email.
   * @returns {Object} The email options.
   */
  setMailOptions(from, to, subject, text, html) {
    this.options = {
      from: from,
      to: to,
      subject: subject,
      text: text,
      html: html,
    };
    return this.options;
  }
  /**
   * Sends an email using the provided transport and options.
   * @param {Object} transport - The transport instance for sending the email.
   * @param {Object} mailOptions - The email options.
   * @param {boolean} [log=true] - Whether to log the email sending result.
   * @param {string} [textLog] - Additional text to log along with the result.
   * @returns {string} The log message indicating the email sending result.
   */
  send(transport, mailOptions, log = true, textLog) {
    return new Promise((resolve, reject) => {
      transport.sendMail(mailOptions, (error, infoEmail) => {
        if (error) {
          reject(error);
        } else {
          const logMessage = log
            ? textLog
              ? textLog + infoEmail.response
              : `Email Sent ${infoEmail.response}`
            : "";
          resolve(logMessage);
        }
      });
    });
  }
}
module.exports = NodemailerHandler;
