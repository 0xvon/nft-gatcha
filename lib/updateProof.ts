import path from "path";
import { groth16 } from "snarkjs";
import { Verifier } from "../types";

export async function generateZkp(
  hiderX: number,
  hiderY: number
): Promise<{ proof: Verifier.ProofStruct; publicKey: any }> {
  const { proof, publicSignals } = await groth16.fullProve(
    { hider_x: hiderX, hider_y: hiderY },
    path.join(__dirname, "../zk/build/circuit.wasm"),
    path.join(__dirname, "../zk/ptau/circuit_final.zkey")
  );

  return { proof, publicKey: publicSignals };
}