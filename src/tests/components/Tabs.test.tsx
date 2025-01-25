import { render, screen, fireEvent } from "@testing-library/react";
import Tabs from "../../components/common/Tabs";
import {
  TODO_TYPE_ALL,
  TODO_TYPE_DONE,
  TODO_TYPE_TODO,
} from "../../common/constants";

const mockOnClickTab = jest.fn();

const tabData = [
  { id: 0, name: TODO_TYPE_ALL },
  { id: 1, name: TODO_TYPE_TODO },
  { id: 2, name: TODO_TYPE_DONE },
];

describe("Tabs", () => {
  it("탭이 올바르게 렌더링되어야 한다", () => {
    render(
      <Tabs
        activeTab={tabData[0]}
        tabData={tabData}
        onClickTab={mockOnClickTab}
      />
    );

    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(3);
    expect(buttons[0]).toHaveTextContent("All");
    expect(buttons[1]).toHaveTextContent("To Do");
    expect(buttons[2]).toHaveTextContent("Done");
  });

  it("활성화된 탭이 강조되어야 한다", () => {
    render(
      <Tabs
        activeTab={tabData[1]}
        tabData={tabData}
        onClickTab={mockOnClickTab}
      />
    );

    const activeButton = screen.getByText("To Do");
    expect(activeButton).toHaveClass("active");
  });

  it("탭을 클릭했을 때 onClickTab이 올바른 값으로 호출되어야 한다", () => {
    render(
      <Tabs
        activeTab={tabData[0]}
        tabData={tabData}
        onClickTab={mockOnClickTab}
      />
    );

    const todoTab = screen.getByText("To Do");
    fireEvent.click(todoTab);

    expect(mockOnClickTab).toHaveBeenCalledWith(tabData[1]);
  });
});
