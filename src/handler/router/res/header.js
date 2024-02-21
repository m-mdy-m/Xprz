const ResEnhancer = require("./ResEnhancer");

class HeadersHandler extends ResEnhancer {
  constructor() {
    super();
  }
  cacheControl(maxAge, isPrivate = false) {
    const directive = isPrivate ? "private" : "public";
    this.header("Cache-Control", `${directive}, max-age=${maxAge}`);
  }
  setCorsHeaders(origin, methods, headers) {
    this.header("Access-Control-Allow-Origin", origin);
    this.header("Access-Control-Allow-Methods", methods);
    this.header("Access-Control-Allow-Headers", headers);
  }
  // Method to set Content-Disposition header for file download
  setContentDisposition(filename, options = {}) {
    const disposition = this.getContentDisposition(filename, options);
    this.header("Content-Disposition", disposition);
  }
  setLocation(location) {
    this.header("Location", location);
  }
  setCorsMaxAge(maxAge) {
    this.header("Access-Control-Max-Age", maxAge);
  }
  setVaryHeader(headers) {
    this.header("Vary", headers);
  }
  // Method to set X-Content-Type-Options header
  setContentTypeOptions(value) {
    this.header("X-Content-Type-Options", value);
  }
  // Method to set Content-Security-Policy header
  setContentSecurityPolicy(policy) {
    this.header("Content-Security-Policy", policy);
  }
  // Method to set X-Content-Type-Options header
  setContentTypeOptions(value) {
    this.header("X-Content-Type-Options", value);
  }
  // Method to set HSTS (HTTP Strict Transport Security) header
  setHSTSHeader(maxAge, includeSubDomains = true) {
    const directive = `max-age=${maxAge}${includeSubDomains ? "; includeSubDomains" : ""}`;
    this.header("Strict-Transport-Security", directive);
  }
  // Method to set X-Content-Type-Options header to prevent MIME-sniffing
  setNoSniffHeader() {
    this.header("X-Content-Type-Options", "nosniff");
  }
  // Method to set Referrer-Policy header
  setReferrerPolicy(value) {
    this.header("Referrer-Policy", value);
  }
  // Method to set Strict-Transport-Security header
  setStrictTransportSecurity(value) {
    this.header("Strict-Transport-Security", value);
  }
  // Method to set X-Frame-Options header
  setFrameOptions(value) {
    this.header("X-Frame-Options", value);
  }
  // Method to set X-XSS-Protection header
  setXssProtection(value) {
    this.header("X-XSS-Protection", value);
  }
}
module.exports = HeadersHandler;
