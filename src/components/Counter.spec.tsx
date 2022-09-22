import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";
import user from "@testing-library/user-event";

describe("초기값을 0으로 초기화한다", () => {
  beforeEach(() => {
    render(<Counter initialCount={0} />);
  });

  describe("count값이 5가 되고 + 버튼을 누른다", () => {
    beforeEach(async () => {
      await user.type(screen.getByLabelText(/Incrementor/), "5");
      await user.click(screen.getByRole("button", { name: "+" }));
    });
    it("count는 5이 된다", () => {
      expect(screen.getByText("count: 15")).toBeInTheDocument();
    });
  });

  describe("+ 버튼을 누른다", () => {
    beforeEach(() => {
      fireEvent.click(screen.getByRole("button", { name: "+" }));
    });
    it("count는 1이 된다.", () => {
      expect(screen.getByText("count: 1")).toBeInTheDocument();
    });
  });

  describe("- 버튼을 누른다", () => {
    beforeEach(() => {
      fireEvent.click(screen.getByRole("button", { name: "-" }));
    });
    it("count는 -1이 된다.", () => {
      expect(screen.getByText("count: -1")).toBeInTheDocument();
    });
  });
});
