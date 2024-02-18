class nodemailerHandler {
  constructor(nodemailer) {
    this.nodemailer = nodemailer;
  }
  Transport(host, port, user, password) {
    this.transport = this.nodemailer.createTransport({
      host: host,
      port: port,
      auth: {
        user: user,
        pass: password,
      },
    });
    return this.Transport;
  }
  MailOptions(from, to, subject, text, html) {
    this.options = {
      from: from,
      to: to,
      subject: subject,
      text: text,
      html: html,
    };
    return this.options;
  }
  send(transport, mainOptions, log = true, textLog) {
    transport.sendMail(mainOptions, (error, infoEmail) => {
      if (error) {
        throw new Error(error);
      }
      if (log) {
        return textLog ? textLog + infoEmail.response : `Email Sent ${infoEmail.response}`
      }
    });
  }
}
