import React from "react";
import { render, cleanup } from "@testing-library/react";
import <%= appname%> from "../index";

afterEach(cleanup);

describe("<%= appname%> component", () => {
    it(`should render with default props`, () => {
        render(<<%= appname%> />);
    });
});
