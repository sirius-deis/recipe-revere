import { fireEvent, render, screen } from "@testing-library/react";
import AudioMessage from "./audioMessage";

describe("AudioMessage component", () => {
  it("should match snapshot", () => {
    const { container } = render(<AudioMessage src="audio.mp3" />);
    expect(container).toMatchSnapshot();
  });

  it("should render the audio player", () => {
    render(<AudioMessage src="audio.mp3" />);
    expect(screen.getByRole("audio")).toBeInTheDocument();
  });

  it("should play the audio when clicked", () => {
    const audioElement = document.createElement("audio");
    audioElement.src = "audio.mp3";
    audioElement.load();

    render(<AudioMessage src="audio.mp3" />);
    fireEvent.click(screen.getByRole("button"));

    expect(audioElement.play).toHaveBeenCalled();
  });
})