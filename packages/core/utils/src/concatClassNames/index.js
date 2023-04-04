function concatClassNames(classes) {
    if (!classes) {
        return '';
    }
    if (Array.isArray(classes)) {
        return classes
            .filter(function (item) { return !!item; })
            .join(' ')
            .trim();
    }
    else {
        return classes;
    }
}
export default concatClassNames;
