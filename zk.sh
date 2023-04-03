#!/bin/sh

# generate ptau
npx snarkjs powersoftau new bn128 12 zk/ptau/pot12_0000.ptau -v
npx snarkjs powersoftau contribute zk/ptau/pot12_0000.ptau zk/ptau/pot12_0001.ptau --name="First contribution" -v -e="some random text"
npx snarkjs powersoftau contribute zk/ptau/pot12_0001.ptau zk/ptau/pot12_0002.ptau --name="Second contribution" -v -e="some random text"
npx snarkjs powersoftau verify zk/ptau/pot12_0002.ptau
npx snarkjs powersoftau beacon zk/ptau/pot12_0002.ptau zk/ptau/pot12_beacon.ptau 0102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f 10 -n="Final Beacon"
npx snarkjs powersoftau prepare phase2 zk/ptau/pot12_beacon.ptau zk/ptau/pot12_final.ptau -v
npx snarkjs powersoftau verify zk/ptau/pot12_final.ptau

# generate key
# npx snarkjs plonk setup zk/build/circuit.r1cs zk/ptau/pot12_final.ptau zk/ptau/circuit_final.zkey
# npx snarkjs zkey export verificationkey zk/ptau/circuit_final.zkey zk/ptau/verification_key.json
npx snarkjs zkey new zk/build/circuit.r1cs zk/ptau/pot12_final.ptau zk/ptau/circuit_0000.zkey
npx snarkjs zkey contribute zk/ptau/circuit_0000.zkey zk/ptau/circuit_0001.zkey --name="First contribution" -v -e="some random text"
npx snarkjs zkey beacon zk/ptau/circuit_0001.zkey zk/ptau/circuit_final.zkey 0102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f 10 -v
npx snarkjs zkey export verificationkey zk/ptau/circuit_final.zkey zk/ptau/verification_key.json

# verify
echo '{ "a": 3, "b": 11 }' > zk/input.json
# npx snarkjs calculatewitness --wasm zk/build/circuit.wasm --input zk/input.json
# npx snarkjs plonk prove zk/ptau/circuit_final.zkey witness.wtns proof.json public.json
# npx snarkjs plonk verify zk/ptau/verification_key.json public.json proof.json
npx snarkjs wtns calculate zk/build/circuit.wasm zk/input.json zk/witness.wtns
npx snarkjs groth16 prove zk/ptau/circuit_final.zkey zk/witness.wtns zk/proof.json zk/public.json
npx snarkjs groth16 verify zk/ptau/verification_key.json zk/public.json zk/proof.json
