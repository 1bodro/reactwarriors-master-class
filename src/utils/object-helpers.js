export const updateObjectInArray = (items, itemId, objectPropName, newObjectProps) => {
  return items.map(i => {
        if (i[objectPropName] === itemId) {
            return { ...i, ...newObjectProps };
        }
        return i;
    });
}

export const catchAllUnHandleError = () => {
    window.addEventListener("unhandledrejection", function (event) {
        console.warn("Внимание: Необработанная ошибка Promise. Позор вам! Причина: "
            + event.reason);
    });
}

export const removeCatchAllUnHandleError = () => {
    window.removeEventListener("unhandledrejection", function (event) {
        console.warn("Внимание: Необработанная ошибка Promise. Позор вам! Причина: "
            + event.reason);
    });
}
