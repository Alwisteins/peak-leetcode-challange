function compactObject(obj: Obj): Obj {
  if (Array.isArray(obj)) {
    return obj
      .map((item) => {
        return typeof item === "object" && item !== null ? compactObject(item) : item;
      })
      .filter(Boolean);
  }

  let cleaned = {};
  Object.keys(obj).forEach((key) => {
    const value = obj[key];
    if (typeof value === "object" && value !== null) {
      cleaned[key] = compactObject(value);
    } else if (value) {
      cleaned[key] = value;
    }
  });
  return cleaned;
}
