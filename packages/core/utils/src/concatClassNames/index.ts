function concatClassNames(classes: string | string[] | undefined) {
  if (!classes) {
    return '';
  }

  if (Array.isArray(classes)) {
    return classes
      .filter((item: string) => !!item)
      .join(' ')
      .trim();
  } else {
    return classes;
  }
}

export default concatClassNames;
