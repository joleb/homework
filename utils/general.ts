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
  // Add more entities as needed
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
