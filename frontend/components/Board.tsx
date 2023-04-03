import { Box, Grid, GridItem } from "@chakra-ui/react";
import { useAppProvider } from "../context/AppContext";

interface BoardProps {
  onBoxClick: (index: number) => void;
}

const coordinateToNumber = (x: number, y: number): number => {
  return y * 8 + x;
};

export const Board: React.FC<BoardProps> = ({ onBoxClick }) => {
  const [state] = useAppProvider();
  const handleClick = (index: number) => {
    onBoxClick(index);
  };

  return (
    <Grid
      templateColumns="repeat(8, 1fr)"
      gap={0}
      width="90vw"
      maxWidth="700px"
    >
      {Array.from({ length: 64 }).map((_, index) => (
        <GridItem
          _hover={{ opacity: "0.4" }}
          border="1px solid white"
          key={index}
          width="100%"
          height="40px"
          bg={
            coordinateToNumber(
              state.gamePlayState.coodination.x,
              state.gamePlayState.coodination.y
            ) === index
              ? "blue.500"
              : "black"
          }
          onClick={() => handleClick(index)}
        />
      ))}
    </Grid>
  );
};
