import { render, screen } from "@testing-library/react";
import VideoMessage from "./VideoMessage";

describe("VideoMessage component", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <VideoMessage src="video.mp4" />
    );
    expect(container).toMatchSnapshot();
  });

  it("should render the provided video source", () => {
    render(<VideoMessage src="video.mp4" />);
    expect(screen.getByTestId("video")).toBeInTheDocument();
  });
})