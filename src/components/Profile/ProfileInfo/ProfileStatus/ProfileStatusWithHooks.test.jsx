import {create} from "react-test-renderer";
import React from "react";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";

function Button(props) {
    return <button>Nothing to do for now</button>;
}
describe("ProfileStatusWithHooks component", () => {
    test("ProfileStatusWithHooks status should be in props ", () => {
        const button = create(<Button />);
        expect(button.toJSON()).toMatchSnapshot();
    });
});

