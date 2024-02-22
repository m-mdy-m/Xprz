## `NodemailerHandler`

Class for handling email sending using Nodemailer in an Express application.
### Methods

#### `getNodeMailer()`

Retrieves the Nodemailer instance used by the handler.

- **Returns:**
  - `Object`: The Nodemailer instance.

- **Usage:**
  ```javascript
  const { nodemailer } = new Package();
  const nodemailer = nodemailer().getNodeMailer();
  ```

#### `createTransport(host, port, user, password)`

Creates a transport instance for sending emails.

- **Parameters:**
  - `host` (string): The SMTP host.
  - `port` (number): The SMTP port.
  - `user` (string): The SMTP username.
  - `password` (string): The SMTP password.

- **Returns:**
  - `Object`: The created transport instance.

- **Usage:**
  ```javascript
  const transport = nodemailer().createTransport('smtp.example.com', 587, 'user@example.com', 'password');
  ```

#### `setMailOptions(from, to, subject, text, html)`

Sets up email options.

- **Parameters:**
  - `from` (string): The sender's email address.
  - `to` (string): The recipient's email address.
  - `subject` (string): The email subject.
  - `text` (string): The plain text content of the email.
  - `html` (string): The HTML content of the email.

- **Returns:**
  - `Object`: The email options.

- **Usage:**
  ```javascript
  const mailOptions = nodemailer().setMailOptions('sender@example.com', 'recipient@example.com', 'Subject', 'Plain text content', '<p>HTML content</p>');
  ```

#### `send(transport, mailOptions, log = true, textLog)`

Sends an email using the provided transport and options.

- **Parameters:**
  - `transport` (Object): The transport instance for sending the email.
  - `mailOptions` (Object): The email options.
  - `log` (boolean): Whether to log the email sending result. Defaults to `true`.
  - `textLog` (string): Additional text to log along with the result.

- **Returns:**
  - `string`: The log message indicating the email sending result.

- **Usage:**
  ```javascript
  const logMessage = await nodemailer().send(transport, mailOptions);
  ```