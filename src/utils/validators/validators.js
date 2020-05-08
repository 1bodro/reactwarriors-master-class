export const required = value => (value) ? undefined : "Field is required";

export const maxLengthCreator = maxLength => value => (value && value.length > maxLength) ? `Max length ${maxLength} symbol` : undefined;
