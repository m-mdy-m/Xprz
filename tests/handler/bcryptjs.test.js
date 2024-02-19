const bcrypt = require('bcryptjs');
const BcryptjsHandler = require('../../src/handler/package/bcryptjs');

describe('BcryptjsHandler', () => {
  let bcryptHandler;

  beforeEach(() => {
    bcryptHandler = new BcryptjsHandler(bcrypt);
  });

  describe('hash', () => {
    it('should hash a password', async () => {
      const password = 'myPassword';
      const hashedPassword = await bcryptHandler.hash(password);
      
      // Check if the hashed password is not equal to the original password
      expect(hashedPassword).not.toBe(password);
      
      // Check if the hashed password is a string
      expect(typeof hashedPassword).toBe('string');
    });

    it('should hash a password with custom salt rounds', async () => {
      const password = 'myPassword';
      const saltRounds = 12;
      const hashedPassword = await bcryptHandler.hash(password, saltRounds);
      
      // Check if the hashed password is not equal to the original password
      expect(hashedPassword).not.toBe(password);
      
      // Check if the hashed password is a string
      expect(typeof hashedPassword).toBe('string');
    });
  });

  describe('compare', () => {
    it('should return true when comparing matching passwords', async () => {
      const password = 'myPassword';
      const hashedPassword = await bcryptHandler.hash(password);
      
      const isMatch = await bcryptHandler.compare(password, hashedPassword);
      
      expect(isMatch).toBe(true);
    });

    it('should return false when comparing non-matching passwords', async () => {
      const password = 'myPassword';
      const hashedPassword = await bcryptHandler.hash(password);
      
      const isMatch = await bcryptHandler.compare('anotherPassword', hashedPassword);
      
      expect(isMatch).toBe(false);
    });
  });
});
