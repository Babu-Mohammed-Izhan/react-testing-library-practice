import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FollowersList from "../FollowersList";
import axios from "axios";
jest.mock("axios");

const mockData = {
  data: {
    results: [
      {
        name: {
          first: "Mohammed",
          last: "Izhan",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/59.jpg",
        },
        login: {
          username: "Izhan",
        },
      },
      {
        name: {
          first: "Mohammed",
          last: "Izhan",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/59.jpg",
        },
        login: {
          username: "Izhan",
        },
      },
      {
        name: {
          first: "Mohammed",
          last: "Izhan",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/59.jpg",
        },
        login: {
          username: "Izhan",
        },
      },
      {
        name: {
          first: "Mohammed",
          last: "Izhan",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/59.jpg",
        },
        login: {
          username: "Izhan",
        },
      },
      {
        name: {
          first: "Mohammed",
          last: "Izhan",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/59.jpg",
        },
        login: {
          username: "Izhan",
        },
      },
    ],
  },
};

const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};
describe("Followers List Functionality", () => {
  test("If one card is rendered", async () => {
    axios.get.mockResolvedValue(mockData);
    render(<MockFollowersList />);
    const followerdivelement = await screen.findByTestId(`follower-item-0`);
    expect(followerdivelement).toBeInTheDocument();
  });

  test("should render multiple cards", async () => {
    axios.get.mockResolvedValue(mockData);
    render(<MockFollowersList />);
    const followerdivelement = await screen.findAllByTestId(/follower-item-/i);
    expect(followerdivelement.length).toBe(5);
  });
});
