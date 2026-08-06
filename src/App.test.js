import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("shows and hides the person's profile", () => {
  render(<App />);

  expect(screen.queryByText("Dominic Kamau")).not.toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: /show profile/i }));
  expect(screen.getByText("Dominic Kamau")).toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: /hide profile/i }));
  expect(screen.queryByText("Dominic Kamau")).not.toBeInTheDocument();
});
