import React from "react";
import ReactDOM from "react-dom";
import '@testing-library/jest-dom';
import {render, screen, act} from '@testing-library/react';
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import {setUserStatus} from "../../../redux/profile_reducer";

describe("ProfileStatusWithHooks component", () => {

    const testText = "Тест прошел";

    test('dont find text in app', () => {
        render(<ProfileStatusWithHooks status="aaaaaaaa"/>);
        expect(screen.queryByText(testText)).toBeNull();
    });

    test('find text in app', () => {
        render(<ProfileStatusWithHooks status={testText} />);
        expect(screen.queryByText(testText)).toBeInTheDocument();
    });

    test('find span with className = staticStatus', () => {
        render(<ProfileStatusWithHooks status={testText} />);
        expect(screen.queryByText(testText).className).toBe("staticStatus");
    });

    let container = null;
    beforeEach(() => {
        // подготавливаем DOM-элемент, куда будем рендерить
        container = document.createElement("div");
        document.body.appendChild(container);
    });

    afterEach(() => {
        // подчищаем после завершения
        ReactDOM.unmountComponentAtNode(container);
        container.remove();
        container = null;
    });

    test('test click by span', () => {
        // const onChange = jest.fn();
        const getUpdateUserStatus = setUserStatus;

        act(() => {
            render(<ProfileStatusWithHooks getUpdateUserStatus={getUpdateUserStatus} status={testText} isOwner={true} />, container);
        });

        const span = document.querySelector(".staticStatus");
        const input = document.querySelector("input");

        expect(span.innerHTML).toBe(testText);
        expect(input).toBeNull();


        act(() => {
            span.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        });

        const spanAfterClick = document.querySelector(".staticStatus");
        const inputAfterClick = document.querySelector("input");

        act(() => {
            inputAfterClick.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        });

        expect(spanAfterClick).toBeNull();
        expect(inputAfterClick.value).toBe(testText);

        act(() => {
            inputAfterClick.dispatchEvent(new MouseEvent("blur", { bubbles: true }));
        });

        const inputAfterChange = document.querySelector("input");
        const spanAfterChange = document.querySelector(".staticStatus");

        expect(inputAfterChange).toBeNull();
        expect(spanAfterChange.innerHTML).toBe(testText);
    });
});

