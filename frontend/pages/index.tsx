import { useEffect } from "react";
import { Game } from "../components/Game";
import { HideAndSeek__factory } from "../types/abis";
import { useAppProvider } from "../context/AppContext";
import { Board } from "../components/Board";
import { Box, Flex } from "@chakra-ui/react";
import { Head } from "../components/Head";
import { useAccount, useSigner, useProvider } from "wagmi";

const CONTRACT_ADDRESS = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
type Coordinate = [number, number];

const numberToCoordinate = (num: number): Coordinate => {
  const x = num % 8;
  const y = Math.floor(num / 8);
  return [x, y];
};

export default function Home() {
  const [state, setState] = useAppProvider();
  const provider = useProvider();
  const { data: signer } = useSigner();
  const { address } = useAccount();

  useEffect(() => {
    if (address && provider) {
      const hideAndSeek = HideAndSeek__factory.connect(
        CONTRACT_ADDRESS,
        provider
      );
      setState({
        ...state,
        address,
        hideAndSeek,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address, provider]);

  const handlePlay = async () => {
    if (!state.hideAndSeek || !signer || !state.address) {
      alert("Please connect your wallet first");
      return;
    }
    await handleRefresh();
    if (
      state.gamePlayState.hider === state.address ||
      state.gamePlayState.seeker === state.address
    ) {
      alert("You're Playing");
      return;
    }
    try {
      // joinGame()
      const tx = await state.hideAndSeek.connect(signer).joinGame();
      await tx.wait();

      alert("You have successfully joined the game");
      await handleRefresh();
    } catch (error) {
      console.error("Error joining the game:", error);
    }
  };

  const handleBoxClick = async (index: number) => {
    if (state.hideAndSeek && signer) {
      const [x, y] = numberToCoordinate(index);
      if (state.gamePlayState.hider === state.address) {
        // update proof here
      } else if (state.gamePlayState.seeker === state.address) {
        const tx = await state.hideAndSeek.connect(signer).seekerMove(x, y);
        await tx.wait();
      }
      setState({
        ...state,
        gamePlayState: {
          ...state.gamePlayState,
          coodination: {
            x,
            y,
          },
        },
      });
    }
  };

  const handleRefresh = async () => {
    if (signer && state.hideAndSeek) {
      const hider = await state.hideAndSeek?.connect(signer).hider();
      const seeker = await state.hideAndSeek?.connect(signer).seeker();
      setState({
        ...state,
        gamePlayState: {
          ...state.gamePlayState,
          hider,
          seeker,
        },
      });
    }
  };

  return (
    <Box>
      <Head />
      <Flex direction="column" align="center" m="20px auto">
        <Game onPlay={handlePlay} onRefresh={handleRefresh} />
        <Board onBoxClick={handleBoxClick} />
      </Flex>
    </Box>
  );
}
