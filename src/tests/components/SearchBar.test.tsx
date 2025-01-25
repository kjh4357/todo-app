import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "@/components/common/SearchBar";

const mockOnSubmit = jest.fn();

describe("SearchBar", () => {
  it("입력 필드가 렌더링되어야 한다", () => {
    render(<SearchBar onSubmit={mockOnSubmit} />);

    const input = screen.getByPlaceholderText("할 일을 입력해 주세요");
    expect(input).toBeInTheDocument();
  });

  it("Enter 키를 눌렀을 때 입력 값을 onSubmit에 전달해야 한다", () => {
    render(<SearchBar onSubmit={mockOnSubmit} />);

    const input = screen.getByPlaceholderText("할 일을 입력해 주세요");
    fireEvent.change(input, { target: { value: "Test Todo" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    expect(mockOnSubmit).toHaveBeenCalledWith("Test Todo");
  });

  it("입력 완료 후 입력 필드가 비워져야 한다", () => {
    render(<SearchBar onSubmit={mockOnSubmit} />);

    const input = screen.getByPlaceholderText("할 일을 입력해 주세요");
    fireEvent.change(input, { target: { value: "Test Todo" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    expect(input).toHaveValue("");
  });
});
