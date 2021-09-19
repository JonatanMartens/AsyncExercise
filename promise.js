function toUpperCase(value) {
  return new Promise((resolve, reject) =>
    setTimeout(
      () =>
        typeof value === "string"
          ? resolve(value.toUpperCase())
          : reject(value),
      500
    )
  );
}
