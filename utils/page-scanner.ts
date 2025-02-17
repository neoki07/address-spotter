import { detectAddresses } from "./address-detector"

function getPageText(): string {
  const clone = document.body.cloneNode(true) as HTMLElement;
  const scripts = clone.getElementsByTagName("script");
  const styles = clone.getElementsByTagName("style");
  const noscripts = clone.getElementsByTagName("noscript");

  const elements = [...scripts, ...styles, ...noscripts];
  elements.forEach(element => element.remove());

  return clone.textContent || "";
}

export function scanForAddresses(): string[] {
  const pageText = getPageText();
  return detectAddresses(pageText);
}
