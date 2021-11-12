import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AddInput from "../AddInput";

const mocksetTodo = jest.fn();

describe("Test Input element functionality", () => {
  test("render input component", async () => {
    render(<AddInput todos={[]} setTodos={mocksetTodo} />);
    const inputelement = screen.getByPlaceholderText(/Add a new task here.../i);
    expect(inputelement).toBeInTheDocument();
  });

  test("input should display when typing", async () => {
    render(<AddInput todos={[]} setTodos={mocksetTodo} />);
    const inputelement = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.change(inputelement, { target: { value: "Example Text" } });
    expect(inputelement.value).toBe("Example Text");
  });

  test("should display empty when add button is clicked", async () => {
    render(<AddInput todos={[]} setTodos={mocksetTodo} />);
    const inputelement = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.change(inputelement, { target: { value: "Example Text" } });
    const buttonelement = screen.getByRole("button", { name: /Add/i });
    fireEvent.click(buttonelement);
    expect(inputelement.value).toBe("");
  });
});
