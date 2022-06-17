import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

test("the counter starts at 0", () => {
  render(<Counter />);
  // screen object를 이용해서 원하는 엘레멘트에 접근(접근할 때 ID로)
  const counterElement = screen.getByTestId("counter");
  // id가 counter인 엘레멘트의 텍스트가 0인지 테스트
  expect(counterElement).toHaveTextContent("0");
});

test("minus button has correct text", () => {
  render(<Counter />);
  const minusButtonEl = screen.getByTestId("minus-button");
  expect(minusButtonEl).toHaveTextContent("-");
});

test("plus button has correct text", () => {
  render(<Counter />);
  const plusButtonEl = screen.getByTestId("plus-button");
  expect(plusButtonEl).toHaveTextContent("+");
});

test("When the + button is pressed, the counter changes to 1", () => {
  render(<Counter />);
  const buttonEl = screen.getByTestId("plus-button");
  fireEvent.click(buttonEl);
  const counterEl = screen.getByTestId("counter");
  expect(counterEl).toHaveTextContent("1");
});

test("When the - button is pressed, the counter changes to -1", () => {
  render(<Counter />);
  const plusButtonEl = screen.getByTestId("plus-button");
  const minusButtonEl = screen.getByTestId("minus-button");
  fireEvent.click(plusButtonEl);
  fireEvent.click(minusButtonEl);
  const counterEl = screen.getByTestId("counter");
  expect(counterEl).toHaveTextContent("0");
});

test("counter's minimum must be 0", () => {
  render(<Counter />);
  const plusButtonEl = screen.getByTestId("plus-button");
  const minusButtonEl = screen.getByTestId("minus-button");
  for (let i = 0; i < 10; i++) {
    fireEvent.click(plusButtonEl);
  }
  for (let i = 0; i < 12; i++) {
    fireEvent.click(minusButtonEl);
  }
  const counterEl = screen.getByTestId("counter");
  expect(counterEl).toHaveTextContent("0");
});

test("on/off button has blue color", () => {
  render(<Counter />);
  const btnEl = screen.getByTestId("on/off-button");
  expect(btnEl).toHaveStyle({ backgroundColor: "blue" });
});

test("Prevent the -,+ button from being pressed when the on/off button is clicked", () => {
  render(<Counter />);
  const onOffBtnEl = screen.getByTestId("on/off-button");
  fireEvent.click(onOffBtnEl);
  const plusBtnEl = screen.getByTestId("plus-button");
  const minusBtnEl = screen.getByTestId("minus-button");
  expect(plusBtnEl).toBeDisabled();
  expect(minusBtnEl).toBeDisabled();
});
