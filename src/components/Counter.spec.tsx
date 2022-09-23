import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
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
      await screen.findByText("count: 15");
    });
    it("count는 15이 된다", () => {
      expect(screen.getByText("count: 15")).toBeInTheDocument();
    });

    it("bigEnough는 true가 되고 300ms 뒤에 사라진다", async () => {
      await waitForElementToBeRemoved(() =>
        screen.queryByText("I am too small")
      );
      expect(screen.queryByText("I am too small")).toBeNull();
    });
  });

  describe("+ 버튼을 누른다", () => {
    beforeEach(async () => {
      fireEvent.click(screen.getByRole("button", { name: "+" }));
      await screen.findByText("count: 1");
    });
    it("count는 1이 된다.", async () => {
      expect(screen.getByText("count: 1")).toBeInTheDocument();
    });
  });

  describe("- 버튼을 누른다", () => {
    beforeEach(async () => {
      fireEvent.click(screen.getByRole("button", { name: "-" }));
      await screen.findByText("count: -1");
    });
    it("count는 -1이 된다.", () => {
      expect(screen.getByText("count: -1")).toBeInTheDocument();
    });
  });
});
