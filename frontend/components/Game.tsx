import { Box, Button } from "@chakra-ui/react";
import { useAppProvider } from "../context/AppContext";

interface GameProps {
  onPlay: () => void;
  onRefresh: () => void;
}

export const Game: React.FC<GameProps> = ({ onPlay, onRefresh }) => {
  const [state] = useAppProvider();
  return (
    <Box margin="20px auto">
      <Button onClick={onPlay} mt={4} ml={4}>
        {state.gamePlayState.hider === state.address
          ? "hider"
          : state.gamePlayState.seeker === state.address
          ? "seeker"
          : "play"}
      </Button>
      <Button onClick={onRefresh} mt={4} ml={4}>
        refresh
      </Button>
    </Box>
  );
};
