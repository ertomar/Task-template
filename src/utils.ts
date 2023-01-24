export function pad(num: number, length = 2) {
  return ("" + num).padStart(length, "0");
}

export function msToTime(ms: number) {
  let remainder = ms;
  const hours = Math.floor(remainder / 3.6e6);
  remainder -= hours * 3.6e6;
  const minutes = Math.floor(remainder / 60e3);
  remainder -= minutes * 60e3;
  const seconds = Math.floor(remainder / 1e3);
  remainder = Math.floor(remainder - seconds * 1e3);
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${pad(remainder, 3)}`;
}
