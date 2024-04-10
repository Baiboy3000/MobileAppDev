* In this repo I have developed a mobile application designed to streamline the process of making donations to various charitable organizations. With a user-friendly interface and secure payment options, CharityDonate aims to make charitable giving accessible and convenient for individuals who wish to support causes they care about.


**Test Cases **

Test Navigation
* The purpose of this test is to ensure that the TabNavigator component can be rendered without any errors.

* The test sets up a mock environment by mocking various dependencies and components that are used within the TabNavigator. This allows the test to isolate the behavior of the TabNavigator component and focus solely on its rendering. Therefore it can be considered a unit test.

* Additionally, several components, such as HomeScreen, MyCollectionsScreen, NewCollectionScreen, AppIcon, and HomeNavigator, are mocked to be represented by string placeholders. This allows the test to verify that the TabNavigator can integrate with these components correctly.

* The test case itself renders the TabNavigator component using the render function from @testing-library/react-native and checks that it does not throw any errors during the rendering process. If the component renders without errors, the test will pass.

Test App Button
* This test's objective is to confirm the AppButton component's behaviour and functionality.

Two test cases make up the test:

1. "will render a button with the correct title"

- The AppButton component's ability to render a button with the desired title is verified by this test.
- The AppButton component is rendered with a provided title using the render function from @testing-library react-native.
- The rendered button element is then retrieved by its displayed text using the getByText function.
- The test (toBeTruthy()) determines whether the button bearing the supplied title is present. If it does, the test is deemed successful, proving that the button was generated properly.
- The phrase "onPress is triggered when the button is pressed"

2. "onPress is triggered when the button is pressed"

- This test verifies that the AppButton component's onPress prop is invoked when the button is pressed.
- The test creates a mock function called onPressMock using jest.fn().
- The mock method is passed as the onPress prop to the render function, which renders the AppButton component.
- The drawn button is then given a fake button push event using the fireEvent.press function.
- The test's final step (toHaveBeenCalled()) determines whether the onPressMock method has been invoked. If it has, the test is successful, proving that pressing the button correctly activated the onPress function.
