const NodemailerHandler = require('../../src/handler/package/nodemailer');

// Mock Nodemailer methods
const nodemailerInstance = {
  createTransport: jest.fn(),
};

// Mock transport instance
const mockTransport = {
  sendMail: jest.fn(),
};

// Mock mail options
const mockMailOptions = {
  from: 'sender@example.com',
  to: 'recipient@example.com',
  subject: 'Test Email',
  text: 'This is a test email.',
  html: '<p>This is a test email.</p>',
};

describe('NodemailerHandler', () => {
  let nodemailerHandler;

  beforeEach(() => {
    nodemailerHandler = new NodemailerHandler(nodemailerInstance);
    nodemailerInstance.createTransport.mockReturnValue(mockTransport);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('createTransport', () => {
    it('should create a transport instance with the provided options', () => {
      nodemailerHandler.createTransport('smtp.example.com', 587, 'username', 'password');
      expect(nodemailerInstance.createTransport).toHaveBeenCalledWith({
        host: 'smtp.example.com',
        port: 587,
        auth: {
          user: 'username',
          pass: 'password',
        },
      });
    });
  });

  describe('setMailOptions', () => {
    it('should set mail options correctly', () => {
      const options = nodemailerHandler.setMailOptions('sender@example.com', 'recipient@example.com', 'Test Email', 'This is a test email.', '<p>This is a test email.</p>');
      expect(options).toEqual(mockMailOptions);
    });
  });

  describe('send', () => {
    it('should send an email using the provided transport and options', async () => {
      mockTransport.sendMail.mockImplementation((options, callback) => {
        callback(null, { response: 'Email sent successfully' });
      });
      const logMessage = await nodemailerHandler.send(mockTransport, mockMailOptions);
      expect(logMessage).toBe('Email Sent Email sent successfully');
    });

    it('should handle errors if email sending fails', async () => {
      const errorMessage = 'Failed to send email';
      mockTransport.sendMail.mockImplementation((options, callback) => {
        callback(new Error(errorMessage), null);
      });
      await expect(nodemailerHandler.send(mockTransport, mockMailOptions)).rejects.toThrow(errorMessage);
    });
  });
});
