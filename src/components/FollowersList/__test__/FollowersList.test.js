import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FollowersList from "../FollowersList";

const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};
describe("Followers List Functionality", () => {
  test("If one card is rendered", async () => {
    render(<MockFollowersList />);
    const followerdivelement = await screen.findByTestId(`follower-item-0`);
    expect(followerdivelement).toBeInTheDocument();
  });

  test("should render multiple cards", async () => {
    render(<MockFollowersList />);
    const followerdivelement = await screen.findAllByTestId(/follower-item-/i);
    expect(followerdivelement.length).toBe(5);
  });
});
