export function captureClickId(): void {
  if (typeof window === "undefined") return;
  const p = new URLSearchParams(window.location.search);
  const cid = p.get("cid") ?? p.get("gclid") ?? p.get("fbclid");
  if (cid) sessionStorage.setItem("cid", cid);
}
