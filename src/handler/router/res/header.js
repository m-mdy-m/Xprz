
class HeadersHandler {
  constructor(header,res) {
    this.header = header
    this.res = res
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
  setLocation(location) {
    this.header("Location", location);
  }
  setCorsMaxAge(maxAge) {
    this.header("Access-Control-Max-Age", maxAge);
  }
  setVaryHeader(headers) {
    this.header("Vary", headers);
  }
  // Method to set Pragma header
  setPragma(value) {
    this.header("Pragma", value);
  }

  // Method to set Trailer header
  setTrailer(value) {
    this.header("Trailer", value);
  }

  // Method to set Transfer-Encoding header
  setTransferEncoding(encoding) {
    this.header("Transfer-Encoding", encoding);
  }

  // Method to set Upgrade header
  setUpgrade(value) {
    this.header("Upgrade", value);
  }

  // Method to set Warning header
  setWarning(value) {
    this.header("Warning", value);
  }

  // Method to set WWW-Authenticate header
  setWWWAuthenticate(value) {
    this.header("WWW-Authenticate", value);
  }

  // Method to set X-Forwarded-For header
  setXForwardedFor(value) {
    this.header("X-Forwarded-For", value);
  }

  // Method to set X-Forwarded-Proto header
  setXForwardedProto(value) {
    this.header("X-Forwarded-Proto", value);
  }

  // Method to set X-Real-IP header
  setXRealIP(value) {
    this.header("X-Real-IP", value);
  }

  // Method to set Retry-After header
  setRetryAfter(value) {
    this.header("Retry-After", value);
  }

  // Method to set Expires header
  setExpires(expirationDate) {
    this.header("Expires", expirationDate.toUTCString());
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
    const directive = `max-age=${maxAge}${
      includeSubDomains ? "; includeSubDomains" : ""
    }`;
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

  // Method to set Expect-CT header for Certificate Transparency enforcement
  setExpectCTHeader(value) {
    this.header("Expect-CT", value);
  }

  // Method to set Feature-Policy header to control allowed features
  setFeaturePolicy(value) {
    this.header("Feature-Policy", value);
  }

  // Method to set Public-Key-Pins header for pinning of public keys
  setPublicKeyPinsHeader(value) {
    this.header("Public-Key-Pins", value);
  }
  // Method to set Cross-Origin Embedder Policy (COEP) header
  setCrossOriginEmbedderPolicy(policy) {
    this.header("Cross-Origin-Embedder-Policy", policy);
  }

  // Method to set Cross-Origin Opener Policy (COOP) header
  setCrossOriginOpenerPolicy(policy) {
    this.header("Cross-Origin-Opener-Policy", policy);
  }

  // Method to set Cross-Origin Resource Policy (CORP) header
  setCrossOriginResourcePolicy(policy) {
    this.header("Cross-Origin-Resource-Policy", policy);
  }
  // Method to clear a specific header
  clearHeader(name) {
    this.res.removeHeader(name);
  }

  // Method to clear all headers
  clearAllHeaders() {
    this.res.clearHeaders();
  }
}
module.exports = HeadersHandler;
