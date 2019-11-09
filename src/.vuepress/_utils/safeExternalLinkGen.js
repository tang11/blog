/**
 * @param  {string} url
 * @param  {string} text?
 * @return {string} - an anchor
 */
module.exports = function safeExternalLinkGen (link, text) {
  return `<a href="${link}" target="_blank" rel="noopener noreferrer">${text || link}</a>`
}
