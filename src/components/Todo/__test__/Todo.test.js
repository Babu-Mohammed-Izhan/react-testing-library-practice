import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Todo from "../Todo";

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

describe("functionality of the todo component", () => {
  test("todo should render text passed into title", async () => {
    render(<MockTodo />);
    const inputelement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonelement = screen.getByRole("button", { name: /Add/i });
    fireEvent.change(inputelement, { target: { value: "Example Text" } });
    fireEvent.click(buttonelement);
    const listelement = screen.getByText(/Example Text/i);
    expect(listelement).toBeInTheDocument();
  });

  test("todo should render same number of todos", async () => {
    render(<MockTodo />);
    const inputelement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonelement = screen.getByRole("button", { name: /Add/i });
    for (let i = 0; i < 3; i++) {
      fireEvent.change(inputelement, { target: { value: "Example Text" } });
      fireEvent.click(buttonelement);
    }
    const listelement = screen.getAllByText(/Example Text/i);
    expect(listelement.length).toBe(3);
  });
});
