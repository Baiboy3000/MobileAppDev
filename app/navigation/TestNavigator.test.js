import React from "react";
import { render } from "@testing-library/react-native";
import TabNavigator from "./TabNavigator";

//Mocks the bottom tab navigator with the ability to add different tabs
jest.mock("@react-navigation/bottom-tabs", () => ({
  createBottomTabNavigator: jest.fn(() => ({
    Navigator: jest.fn(({ children }) => <>{children}</>),
    Screen: jest.fn(),
  })),
}));

//Mocks the screens and the navigation in order to test its functionality
jest.mock("../screens/HomeScreen", () => "MockedHomeScreen");
jest.mock("../screens/MyCollectionsScreen", () => "MockedMyCollectionsScreen");
jest.mock("../screens/NewCollectionScreen", () => "MockedNewCollectionScreen");
jest.mock("../components/AppIcon", () => "MockedAppIcon");
jest.mock("./HomeNavigator", () => "MockedHomeNavigator");

//tests the tab navigator 
describe("TabNavigator", () => {
  it("renders without error", () => {
    render(<TabNavigator />);
  });
});