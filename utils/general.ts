export const isTruthy = <T>(
  value: T | null | undefined | false | "" | 0,
): value is T =>
  value !== null &&
  value !== undefined &&
  value !== false &&
  value !== "" &&
  value !== 0;

const htmlEntities: { [key: string]: string } = {
  "&auml;": "ä",
  "&Auml;": "Ä",
  "&ouml;": "ö",
  "&Ouml;": "Ö",
  "&uuml;": "ü",
  "&Uuml;": "Ü",
  "&szlig;": "ß",
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&apos;": "'",
  "&rsquo;": "’",
  "&nbsp;": " ",
  "&ndash;": "–",
  "&mdash;": "—",
  "&hellip;": "…",
  "&ldquo;": "“",
  "&rdquo;": "”",
  "&bdquo;": "„",
  "&laquo;": "«",
  "&raquo;": "»",
  "&lsaquo;": "‹",
  "&rsaquo;": "›",
  "&copy;": "©",
  "&reg;": "®",
  "&trade;": "™",
  "&deg;": "°",
  "&plusmn;": "±",
  "&times;": "×",
  "&divide;": "÷",
  "&frac14;": "¼",
  "&frac12;": "½",
  "&euro;": "€",
  "&cent;": "¢",
  "&pound;": "£",
  "&yen;": "¥",
  "&curren;": "¤",
};

export const stripHtml = (html?: string | null): string => {
  if (!html) return "";

  // Remove HTML tags
  let text = html.replace(/<\/?[^>]+(>|$)/g, "");

  // Replace HTML entities
  text = text.replace(
    /&[a-zA-Z]+;/g,
    (entity) => htmlEntities[entity] || entity,
  );

  return text;
};

export const isKeyOfObject = <T extends object>(
  objectToContainKey: T,
  key?: PropertyKey | null,
): key is keyof T => !!key && key in objectToContainKey;
