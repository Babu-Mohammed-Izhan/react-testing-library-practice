import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TodoFooter from "../TodoFooter";

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
};

describe("tests todo footer", () => {
  test("renders correct amount of incomplete tasks", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={5} />);
    const footerElement = screen.getByText(/5 tasks left/i);
    expect(footerElement).toBeInTheDocument();
  });

  test("renders task when only 1 task is incomplete", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const footerElement = screen.getByText(/1 task left/i);
    expect(footerElement).toBeInTheDocument();
  });

  test("footer is not falsy", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const footerElement = screen.getByText(/1 task left/i);
    expect(footerElement).not.toBeFalsy();
  });
});
