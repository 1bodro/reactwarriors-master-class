import React from "react";
import s from "./FormsControl.module.scss"

const FormControl = ({input, meta, ...props}) => {
    return (
        <div className ={`${s.formControl} ${(meta.error && meta.touched) && s.error}`}>
            {props.children}
            <span>{meta.error}</span>
        </div>
    )
}

export const TextArea = ({input, meta, ...props})=> {
    return (
        <div className ={`${s.formControl} ${(meta.error && meta.touched) && s.error}`}>
            <textarea {...props} {...input} />
            <span>{meta.error}</span>
        </div>
    )
}

export const Input = ({input, meta, ...props})=> {
    return (
        <div className ={`${s.formControl} ${(meta.error && meta.touched) && s.error}`}>
            <input {...props} {...input} />
            <span>{meta.error}</span>
        </div>
    )
}

export const CustomCheckBox = props => {
    const hasError = props.meta.touched && props.meta.error;
    return (
        <div>
            {
                (props.type !== 'checkbox' && <props.type {...props.input} placeholder={props.placeholder} />)
                || <input type="checkbox"/>
            }
            {hasError && <span >{props.meta.error}</span>}
        </div>
    )
}

// Решение с инета

// const Element = Element => ({ input, meta, ...props }) => {
//     const hasError = meta.touched && meta.error;
//     return (
//         <div className={ s.formControl + " " + (hasError ? s.error : "") }>
//             <Element {...input} {...props} />
//             { hasError && <span> { meta.error } </span> }
//         </div>
//     );
// };

// А потом просто его импортим в компоненту формы, вызываем как
//
// const Textarea = Element("textarea");
//
// и передаем
//
// <Field component={Textarea} .../>
//
// Все работает!)
// P.S. Аргумент у HOC должен быть с большой буквы, чтобы React понимал, что перед ним не обычный html-тег, а компонент/переменная.
// P.P.S. Создавать const Textarea = Element("textarea"); нужно вне компонента с формой. Иначе фокус с формы сбрасывается после первого символа (хз почему, видимо, ререндерится)

// Вариант 2
//
// Слишком заморочено, почему бы не использовать React.createElement(element, {...input, props.placeholder}),
// или если брать подобное этому решению, то перед return из FormControl создать const Element = element,
// и тогда <Element ..... /> использовать в return. Но вариант  React.createElement выглядит как-то более правильным...