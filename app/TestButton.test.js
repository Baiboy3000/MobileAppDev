import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import AppButton from "./components/AppButton";

describe("AppButton", () => {
  it("will render a button with the correct title", () => {
    const { getByText } = render(<AppButton title="This button will be tested!" />);

    // Button is rendered correctly
    expect(getByText("This button will be tested!")).toBeTruthy();
  });

  it("onPress is triggered when the button is pressed", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <AppButton title="This button will be tested!" onPress={onPressMock} />
    );

    // Simulate pressing the button
    fireEvent.press(getByText("This button will be tested!"));

    // Check if the onPress function is called
    expect(onPressMock).toHaveBeenCalled();
  });
});