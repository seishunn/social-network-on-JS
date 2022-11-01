export const required = (value) => {
    // Функция должна вернуть, если ошибка, то сообщение, иначе undefined
    if (value) {
        return undefined;
    }
    return 'Поле должно быть заполненным';
}

export const maxLengthCreator = (maxLength) => {
    return (value) => {
        if (value.length >= maxLength) {
            return `Максимальное количество символов: ${maxLength}`;
        }
        return undefined;
    }
}